#!/usr/bin/env python3
"""Verificador de solo lectura del mini-harness Python 2027 (FASE 3).

REGLA CENTRAL: comprueba, clasifica e informa. NO instala dependencias,
NO corrige codigo, NO modifica el entorno, NO descarga nada y NO cambia
archivos del curso (salvo el informe de salida si se pide --informe).

Estados: APTO / NO_APTO / NO_VERIFICADO.
Global: NO_APTO si hay al menos un fallo real; si no, NO_VERIFICADO si
queda algo relevante sin poder verificarse; APTO solo si todo el alcance
se comprobo y paso.

Uso:
    python scripts/verificar.py [--informe RUTA]

Compatible con Windows 10/11 y Python 3.11, solo stdlib en este script
(pytest se reutiliza unicamente si ya esta disponible en el entorno).
"""

from __future__ import annotations

import argparse
import datetime
import importlib.util
import json
import os
import re
import subprocess
import sys
from pathlib import Path

APTO = "APTO"
NO_APTO = "NO_APTO"
NO_VERIFICADO = "NO_VERIFICADO"

REPO = Path(__file__).resolve().parent.parent
PLANTILLA = REPO / "plantillas" / "INFORME-VALIDACION.md"

# Suites que hoy son razonablemente ejecutables sin dependencias extra.
SUITES_EJECUTABLES = [
    "lab-python-en-accion/recursos/descargas/langgraph-contexto",
    "lab-python-en-accion/recursos/descargas/ollama-estructurado",
    "lab-python-en-accion/recursos/descargas/ollama-explicacion",
]

EXT_RUTA = (".md", ".json", ".py", ".html", ".css", ".js",
            ".pdf", ".xlsx", ".png", ".jpg", ".jpeg")
CLAVES_RUTA_JSON = ("fuente", "fuentes", "config", "motor",
                    "mapa_mental_fuente", "ruta", "path", "archivo",
                    "plantilla", "esquema", "datos")


def ejecutar(comando, **kwargs):
    """Ejecuta un subproceso sin tocar el entorno (solo lectura)."""
    return subprocess.run(
        comando, cwd=REPO, capture_output=True, text=True,
        errors="replace", timeout=600, **kwargs,
    )


def seccion_git():
    """Rama actual, arbol limpio/sucio y cambios no trackeados."""
    try:
        rama = ejecutar(["git", "branch", "--show-current"]).stdout.strip()
        commit = ejecutar(["git", "rev-parse", "--short", "HEAD"]).stdout.strip()
        porcelain = ejecutar(["git", "status", "--porcelain"]).stdout.strip()
    except (OSError, subprocess.SubprocessError) as exc:
        return {"nombre": "Git", "estado": NO_VERIFICADO,
                "detalle": "git no disponible: %s" % exc,
                "rama": "desconocida", "commit": "desconocido",
                "notas": "No se pudo consultar git."}
    lineas = [l for l in porcelain.splitlines() if l.strip()]
    sucio = bool(lineas)
    no_track = sorted(l[3:] for l in lineas if l.startswith("?? "))
    detalle = "rama %s, commit %s, arbol %s" % (
        rama or "?", commit or "?",
        "sucio (%d entradas)" % len(lineas) if sucio else "limpio")
    if no_track:
        detalle += "; no trackeados: %s" % ", ".join(no_track[:10])
        if len(no_track) > 10:
            detalle += " (+%d mas)" % (len(no_track) - 10)
    # Politica (Caso E): el arbol sucio se informa, no bloquea por si solo.
    notas = ("Arbol sucio: se informa sin convertirlo en NO_APTO tecnico. "
             "Entradas: %s" % "; ".join(lineas[:20]) if sucio
             else "Arbol limpio al verificar.")
    return {"nombre": "Git", "estado": APTO, "detalle": detalle,
            "rama": rama or "?", "commit": commit or "?",
            "notas": notas, "sucio": sucio}


def ficheros_json_alcance():
    """config-bloque*.json + JSON de data/ razonablemente relevantes."""
    candidatos = sorted(REPO.glob("config-bloque*.json"))
    for patron in ("bloques/*/data/*.json",
                   "lab-python-en-accion/data/*.json",
                   "profesor-plus/data/*.json",
                   "generador-bloques-base/plantilla-bloque/data/*.json"):
        candidatos.extend(sorted(REPO.glob(patron)))
    vistos, unicos = set(), []
    for ruta in candidatos:
        if ruta not in vistos:
            vistos.add(ruta)
            unicos.append(ruta)
    return unicos


def seccion_json():
    """Valida JSON (acepta BOM UTF-8 via utf-8-sig) e informa fichero exacto."""
    ficheros = ficheros_json_alcance()
    mal, bien = [], 0
    for ruta in ficheros:
        try:
            with open(ruta, encoding="utf-8-sig") as f:
                json.load(f)
            bien += 1
        except (OSError, ValueError) as exc:
            mal.append("%s: %s" % (ruta.relative_to(REPO), exc))
    if not ficheros:
        return {"nombre": "JSON", "estado": NO_VERIFICADO,
                "detalle": "Sin ficheros JSON en el alcance."}
    if mal:
        return {"nombre": "JSON", "estado": NO_APTO,
                "detalle": "%d/%d validos. Fallan: %s"
                % (bien, len(ficheros), "; ".join(mal))}
    return {"nombre": "JSON", "estado": APTO,
            "detalle": "%d/%d JSON validos (BOM UTF-8 tolerado)."
            % (bien, len(ficheros))}


def seccion_python():
    """Sintaxis de .py trackeados via compilacion; no ejecuta nada."""
    try:
        proc = ejecutar(["git", "ls-files", "*.py"])
        trackeados = [l for l in proc.stdout.splitlines() if l.strip()]
    except (OSError, subprocess.SubprocessError) as exc:
        return {"nombre": "Python (sintaxis)", "estado": NO_VERIFICADO,
                "detalle": "No se pudo listar .py trackeados: %s" % exc}
    mal = []
    for rel in trackeados:
        ruta = REPO / rel
        try:
            with open(ruta, "rb") as f:
                fuente = f.read()
            compile(fuente, str(ruta), "exec", dont_inherit=True)
        except (OSError, SyntaxError, ValueError) as exc:
            mal.append("%s: %s" % (rel, exc))
    if mal:
        return {"nombre": "Python (sintaxis)", "estado": NO_APTO,
                "detalle": "Fallos de sintaxis: %s" % "; ".join(mal)}
    return {"nombre": "Python (sintaxis)", "estado": APTO,
            "detalle": "%d ficheros .py trackeados compilan (sin ejecutar)."
            % len(trackeados)}


def _es_url(texto):
    return bool(re.match(r"(?i)^([a-z][a-z0-9+.-]*://|mailto:|#|data:)", texto))


def _existe_local(ref, base):
    cands = [REPO / ref, (base / ref)]
    return any(c.is_file() or c.is_dir() for c in cands)


def _valores_ruta(obj, claves):
    """Rinde (clave, valor) de dicts cuyas claves parecen rutas."""
    if isinstance(obj, dict):
        for k, v in obj.items():
            if isinstance(v, str) and k.lower() in claves:
                yield k, v
            elif isinstance(v, (dict, list)):
                yield from _valores_ruta(v, claves)
    elif isinstance(obj, list):
        for v in obj:
            yield from _valores_ruta(v, claves)


def seccion_rutas(nombres_trackeados):
    """Referencias razonables a ficheros locales; ignora URLs externas."""
    revisadas, omitidas_ext, desactivadas = 0, 0, 0
    mal, notas = [], []
    # 1) href/src relativos en paginas principales.
    for pagina in ("index.html", "inicio.html"):
        ruta = REPO / pagina
        if not ruta.is_file():
            continue
        texto = ruta.read_text(encoding="utf-8", errors="replace")
        for ref in re.findall(r'(?:href|src)\s*=\s*["\']([^"\']+)["\']', texto):
            if _es_url(ref) or ref.startswith("#"):
                omitidas_ext += 1
                continue
            revisadas += 1
            if not _existe_local(ref.split("#")[0], ruta.parent):
                mal.append("%s: referencia local ausente '%s'"
                           % (pagina, ref))
    # 2) Campos con pinta de ruta en config-bloque*.json y bloques/*/data/*.json.
    for patron in ("config-bloque*.json", "bloques/*/data/*.json"):
        for ruta in sorted(REPO.glob(patron)):
            try:
                with open(ruta, encoding="utf-8-sig") as f:
                    datos = json.load(f)
            except (OSError, ValueError):
                continue  # Ya lo informa la seccion JSON.
            if (ruta.name.startswith("config-bloque")
                    and isinstance(datos, dict)
                    and isinstance(datos.get("evaluacion_final"), dict)
                    and not datos["evaluacion_final"].get("activar")):
                desactivadas += 1
                continue  # Evaluacion desactivada: su config/motor no aplica.
            for clave, valor in _valores_ruta(datos, CLAVES_RUTA_JSON):
                if not isinstance(valor, str) or _es_url(valor):
                    omitidas_ext += 1
                    continue
                if not valor.lower().endswith(EXT_RUTA):
                    continue
                revisadas += 1
                base = ruta.parent
                if _existe_local(valor, base):
                    continue
                # Resolucion por basename entre ficheros trackeados
                # (p. ej. "fuente": "ingenieria-....md" vive en ingenieria/).
                if os.path.basename(valor) in nombres_trackeados:
                    continue
                mal.append("%s [%s]: referencia local ausente '%s'"
                           % (ruta.relative_to(REPO), clave, valor))
    # 3) Enlaces relativos markdown en trazabilidad + plan de validacion.
    for patron in ("bloques/*/recursos/trazabilidad.md",
                   "bloques/bloque7/recursos/proyecto/plan-validacion.md"):
        for ruta in sorted(REPO.glob(patron)):
            texto = ruta.read_text(encoding="utf-8", errors="replace")
            for ref in re.findall(r"\[[^\]]*\]\(([^)]+)\)", texto):
                if _es_url(ref) or ref.startswith("#"):
                    omitidas_ext += 1
                    continue
                if not ref.lower().endswith(EXT_RUTA):
                    continue
                revisadas += 1
                if not _existe_local(ref, ruta.parent):
                    mal.append("%s: enlace local ausente '%s'"
                               % (ruta.relative_to(REPO), ref))
    detalle = ("%d referencias locales revisadas (%d externas omitidas; "
               "evaluacion desactivada: %d fichero(s) omitidos)."
               % (revisadas, omitidas_ext, desactivadas))
    if mal:
        return {"nombre": "Rutas relativas", "estado": NO_APTO,
                "detalle": detalle + " Faltan: %s" % "; ".join(mal)}
    if revisadas == 0:
        return {"nombre": "Rutas relativas", "estado": NO_VERIFICADO,
                "detalle": "Sin referencias locales en el alcance."}
    return {"nombre": "Rutas relativas", "estado": APTO, "detalle": detalle}


def _requiere_fastapi(ruta):
    try:
        texto = ruta.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return False
    return "fastapi" in texto.lower()


def decidir_estado_tests(hay_fallos, no_verificados):
    """Regla exacta de la seccion Tests.

    - Al menos un test ejecutable falla -> NO_APTO,
      aunque haya suites no verificadas.
    - Todo pasa pero quedan pendientes -> NO_VERIFICADO.
    - Todo pasa y nada pendiente -> APTO.
    """
    if hay_fallos:
        return NO_APTO
    if no_verificados:
        return NO_VERIFICADO
    return APTO


def seccion_tests():
    """Detecta suites, ejecuta las razonablemente ejecutables y clasifica.

    Dependencia ausente (p. ej. fastapi) -> NO_VERIFICADO.
    Test ejecutable que falla -> NO_APTO. Nada se instala.
    """
    if importlib.util.find_spec("pytest") is None:
        return {"nombre": "Tests", "estado": NO_VERIFICADO,
                "detalle": "pytest no disponible; nada ejecutado.",
                "fallos": [], "no_verificados": ["todas las suites"],
                "recorte": ""}
    hay_fastapi = importlib.util.find_spec("fastapi") is not None
    test_api = sorted(
        p for p in REPO.glob(
            "lab-python-en-accion/recursos/descargas/*/test_*.py")
        if ".venv" not in p.parts and p.name == "test_api.py"
        and _requiere_fastapi(p))
    no_verificados = []
    if not hay_fastapi:
        no_verificados = [p.relative_to(REPO).as_posix() for p in test_api]
    objetivos = [s for s in SUITES_EJECUTABLES if (REPO / s).is_dir()]
    if hay_fastapi:
        objetivos.extend(str(p.parent.relative_to(REPO)) for p in test_api)
    if not objetivos:
        return {"nombre": "Tests", "estado": NO_VERIFICADO,
                "detalle": "Sin suites ejecutables en el alcance.",
                "fallos": [], "no_verificados": no_verificados,
                "recorte": ""}
    try:
        proc = ejecutar([sys.executable, "-m", "pytest"] + objetivos + ["-q"])
        salida = (proc.stdout or "") + (proc.stderr or "")
    except subprocess.TimeoutExpired:
        return {"nombre": "Tests", "estado": NO_VERIFICADO,
                "detalle": "Timeout ejecutando suites; sin resultado.",
                "fallos": [], "no_verificados": no_verificados,
                "recorte": ""}
    fallos = sorted(set(re.findall(r"^(FAILED|ERROR)\s+(\S+)",
                                    salida, re.MULTILINE)))
    ids_fallo = sorted(set(f[1] for f in fallos))
    resumen = [l for l in salida.splitlines()
               if re.search(r"passed|failed|error", l)][-3:]
    recorte = "\n".join((resumen + ["..."])
                        if len(salida.splitlines()) > 12 else resumen)
    if proc.returncode != 0 and not ids_fallo:
        # Fallo de ejecucion sin test individual identificable.
        ids_fallo = ["(ver recorte: codigo %d)" % proc.returncode]
    if ids_fallo:
        return {"nombre": "Tests",
                "estado": decidir_estado_tests(True, no_verificados),
                "detalle": "Suites %s: %s."
                % (", ".join(objetivos), " | ".join(resumen)),
                "fallos": ids_fallo,
                "no_verificados": no_verificados, "recorte": recorte}
    detalle = "Suites %s: %s." % (", ".join(objetivos),
                                  " | ".join(resumen) or "sin resumen")
    if no_verificados:
        detalle += " %d modulos pendientes por fastapi ausente." \
            % len(no_verificados)
    return {"nombre": "Tests",
            "estado": decidir_estado_tests(False, no_verificados),
            "detalle": detalle,
            "fallos": [], "no_verificados": no_verificados,
            "recorte": recorte}


def estado_global(secciones):
    estados = [s["estado"] for s in secciones]
    if NO_APTO in estados:
        return NO_APTO
    if NO_VERIFICADO in estados:
        return NO_VERIFICADO
    return APTO


def alcance_texto():
    return (
        "- Git: rama, arbol limpio/sucio y no trackeados (informativo).\n"
        "- JSON: config-bloque*.json + bloques/*/data/*.json, "
        "lab-python-en-accion/data/*.json, profesor-plus/data/*.json, "
        "generador-bloques-base/plantilla-bloque/data/*.json.\n"
        "- Python: sintaxis (compile, sin ejecutar) de .py trackeados.\n"
        "- Rutas: href/src en index.html e inicio.html; campos de ruta en "
        "config-bloque*.json y bloques/*/data/*.json; enlaces relativos en "
        "trazabilidad.md y plan-validacion.md. URLs externas excluidas.\n"
        "- Tests: suites ejecutables (%s); modulos test_api.py que "
        "requieran fastapi ausente quedan NO_VERIFICADO sin instalar nada.\n"
        "Comando: python scripts/verificar.py [--informe RUTA]."
        % ", ".join(SUITES_EJECUTABLES))


def render_informe(secciones, global_, comando, git):
    plantilla = PLANTILLA.read_text(encoding="utf-8")
    ahora = datetime.datetime.now(datetime.timezone.utc).strftime(
        "%Y-%m-%d %H:%M UTC")
    tabla = "\n".join(
        "| %s | %s | %s |" % (s["nombre"], s["estado"], s["detalle"])
        for s in secciones)
    fallos, pendientes = [], []
    for s in secciones:
        fallos.extend(s.get("fallos", []))
        pendientes.extend(s.get("no_verificados", []))
        if s["estado"] == NO_APTO and not s.get("fallos"):
            fallos.append("%s: %s" % (s["nombre"], s["detalle"]))
        if s["estado"] == NO_VERIFICADO and not s.get("no_verificados"):
            pendientes.append("%s: %s" % (s["nombre"], s["detalle"]))
    tests = next((s for s in secciones if s["nombre"] == "Tests"), {})
    recorte = tests.get("recorte", "") or "(sin salida de tests)"
    return (plantilla
            .replace("{{FECHA_HORA_UTC}}", ahora)
            .replace("{{RAMA}}", git.get("rama", "?"))
            .replace("{{COMMIT}}", git.get("commit", "?"))
            .replace("{{COMANDO}}", comando)
            .replace("{{ESTADO_GLOBAL}}", global_)
            .replace("{{ALCANCE}}", alcance_texto())
            .replace("{{TABLA_COMPROBACIONES}}", tabla)
            .replace("{{ERRORES_REALES}}",
                     "\n".join("- `%s`" % f for f in fallos)
                     or "(ninguno)")
            .replace("{{NO_VERIFICADOS}}",
                     "\n".join("- `%s`" % p for p in pendientes)
                     or "(ninguno)")
            .replace("{{NOTAS_GIT}}", git.get("notas", ""))
            .replace("{{RECORTE_TESTS}}", "```\n%s\n```" % recorte))


def main():
    parser = argparse.ArgumentParser(
        description="Verificador de solo lectura (FASE 3).")
    parser.add_argument("--informe", default=None,
                        help="Ruta de salida del informe markdown.")
    args = parser.parse_args()
    comando = "python %s" % " ".join(sys.argv) if sys.argv else "verificar"
    if not comando.startswith("python"):
        comando = "python scripts/verificar.py" + (
            " --informe %s" % args.informe if args.informe else "")

    try:
        nombres = set(
            ejecutar(["git", "ls-files"]).stdout.splitlines())
    except (OSError, subprocess.SubprocessError):
        nombres = set()
    basenames = {os.path.basename(n) for n in nombres}

    secciones = []
    git = seccion_git()
    secciones.append(git)
    secciones.append(seccion_json())
    secciones.append(seccion_python())
    secciones.append(seccion_rutas(basenames))
    secciones.append(seccion_tests())
    global_ = estado_global(secciones)

    print("Verificador Python 2027 (solo lectura) — %s" % global_)
    for s in secciones:
        print("[%s] %s: %s" % (s["estado"], s["nombre"], s["detalle"]))
    for s in secciones:
        for f in s.get("fallos", []):
            print("  NO_APTO: %s" % f)
        for p in s.get("no_verificados", []):
            print("  NO_VERIFICADO: %s" % p)
    print("Rama: %s | Commit: %s" % (git.get("rama"), git.get("commit")))

    if args.informe:
        destino = Path(args.informe)
        if not destino.is_absolute():
            destino = REPO / destino
        destino.write_text(
            render_informe(secciones, global_, comando, git),
            encoding="utf-8")
        print("Informe: %s" % destino.relative_to(REPO)
              if destino.is_relative_to(REPO) else destino)

    return 0 if global_ == APTO else 1


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass
    raise SystemExit(main())
