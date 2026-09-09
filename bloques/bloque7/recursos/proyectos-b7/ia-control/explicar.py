"""IA local bajo control. Ollama es opcional, Python manda siempre.

Arquitectura:

    Python -> llama al modelo si esta disponible -> recibe respuesta
           -> valida estructura -> valida contenido
           -> acepta o rechaza -> fallback determinista

Tres modos:

    python explicar.py --stock 3
        Intenta Ollama local; si falla o la respuesta no vale,
        usa el fallback determinista. El programa sigue funcionando.

    python explicar.py --stock 3 --sin-ia
        No llama a ningun modelo. Demuestra que el sistema
        ya funciona sin IA.

    python explicar.py --stock 3 --demo-respuesta ejemplo-respuesta-valida.json
        Simula la respuesta de un modelo sin necesitar Ollama.
        Sirve para comprobar que Python acepta lo valido y
        rechaza lo inventado.

Ollama (opcional, nunca requisito):

    ollama pull llama3.2:1b
    ollama serve
"""

import argparse
import json
import os
import re

try:
    import requests

    HAY_REQUESTS = True
except ImportError:  # pragma: no cover - requests es opcional
    HAY_REQUESTS = False

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434").rstrip("/")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3.2:1b")

ACCIONES_BASE = {
    "SIN_STOCK": "Una persona debe reponer la pieza porque no queda stock.",
    "PEDIR_MATERIAL": "Una persona debe pedir material porque el stock esta bajo.",
    "STOCK_OK": "El sistema no requiere ninguna accion segun las reglas actuales.",
}

TERMINOS_PROHIBIDOS = (
    "gases tóxicos",
    "contaminación",
    "toxicidad",
    "microorganismos",
    "evaporación",
)


def decidir(stock, minimo):
    """Regla determinista de Python. Devuelve (decision, accion)."""
    if stock is None or stock <= 0:
        decision = "SIN_STOCK"
    elif stock < minimo:
        decision = "PEDIR_MATERIAL"
    else:
        decision = "STOCK_OK"
    return decision, ACCIONES_BASE[decision]


def generar_explicacion_determinista(pieza, stock, minimo, decision):
    """Explicacion segura construida por Python, sin modelo."""
    return (
        f"La pieza {pieza} tiene {stock} unidades "
        f"(minimo {minimo}). La decision del sistema es {decision}."
    )


def validar_respuesta(respuesta, decision, stock, minimo):
    """Valida estructura y contenido. Devuelve (aceptada, motivo)."""
    if not isinstance(respuesta, dict):
        return False, "Respuesta no valida: no es un objeto JSON."
    if "explicacion" not in respuesta or "accion" not in respuesta:
        return False, "Respuesta no valida: faltan explicacion o accion."
    explicacion = str(respuesta["explicacion"]).strip()
    accion = str(respuesta["accion"]).strip()
    if not explicacion or not accion:
        return False, "Respuesta no valida: explicacion o accion vacias."
    if accion != ACCIONES_BASE.get(decision):
        return False, f"Respuesta no valida: la accion no corresponde a {decision}."
    texto_mayus = (explicacion + " " + accion).upper()
    if decision not in texto_mayus:
        return False, f"Respuesta no valida: no mantiene la decision {decision}."
    otras = [d for d in ACCIONES_BASE if d in texto_mayus and d != decision]
    if otras:
        return False, f"Respuesta no valida: cambia {decision} por {otras[0]}."
    texto_minus = texto_mayus.lower()
    for termino in TERMINOS_PROHIBIDOS:
        if termino in texto_minus:
            return False, f"Respuesta no valida: termino prohibido: {termino}."
    permitidos = set()
    for valor in (stock, minimo):
        if valor is None:
            continue
        permitidos.add(str(int(valor)) if float(valor).is_integer() else str(valor))
    encontrados = re.findall(r"(?<![A-Za-z0-9-])\d+(?:[.,]\d+)?(?![A-Za-z0-9-])",
                             explicacion + " " + accion)
    for numero in encontrados:
        normalizado = numero.replace(",", ".")
        if normalizado not in {n.replace(",", ".") for n in permitidos}:
            return False, f"Respuesta no valida: numero no permitido: {numero}."
    return True, "RESPUESTA ACEPTADA"


def construir_prompt(pieza, stock, minimo, decision, accion):
    """Prompt controlado: el modelo solo explica, nunca decide."""
    return (
        "Eres un generador de explicaciones controladas para un taller.\n"
        "Responde solo con un JSON valido con dos claves: explicacion y accion.\n"
        f"Pieza: {pieza}\n"
        f"Stock: {stock} unidades\n"
        f"Minimo: {minimo} unidades\n"
        f"Decision determinista: {decision}\n"
        f"Accion determinista permitida: {accion}\n"
        "Reglas absolutas:\n"
        "- no inventar causas ni consecuencias;\n"
        "- no anadir conocimiento externo;\n"
        "- no modificar cifras (solo puedes usar el stock y el minimo dados);\n"
        "- no cambiar la decision;\n"
        "- menciona la decision determinista en la explicacion;\n"
        "- usa exactamente la accion permitida en la clave accion."
    )


def llamar_ollama(prompt):
    """Llama al modelo local. Lanza RuntimeError si no se puede."""
    if not HAY_REQUESTS:
        raise RuntimeError("requests no esta instalado; Ollama no disponible.")
    try:
        respuesta = requests.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": OLLAMA_MODEL, "prompt": prompt, "stream": False},
            timeout=15,
        )
        respuesta.raise_for_status()
        return respuesta.json().get("response", "")
    except Exception as error:
        raise RuntimeError(f"Ollama no disponible: {error}") from error


def extraer_json(texto):
    """Extrae un objeto JSON de la respuesta del modelo."""
    if texto is None:
        raise ValueError("Respuesta vacia del modelo.")
    limpio = texto.strip()
    if limpio.startswith("```"):
        limpio = re.sub(r"^```(?:json)?\s*", "", limpio, flags=re.IGNORECASE)
        limpio = re.sub(r"\s*```$", "", limpio, flags=re.IGNORECASE)
    try:
        return json.loads(limpio)
    except json.JSONDecodeError:
        if "{" in limpio and "}" in limpio:
            candidato = limpio[limpio.index("{"):limpio.rindex("}") + 1]
            return json.loads(candidato)
        raise ValueError("La respuesta del modelo no es JSON.")


def explicar(pieza, stock, minimo, sin_ia=False, demo_respuesta=None):
    """Orquesta: decide Python, explica la IA si puede, valida Python."""
    decision, accion = decidir(stock, minimo)
    determinista = generar_explicacion_determinista(pieza, stock, minimo, decision)

    if sin_ia:
        return {
            "decision": decision,
            "explicacion": determinista,
            "accion": accion,
            "origen": "DETERMINISTA (--sin-ia)",
            "validacion": "IA DESACTIVADA: el sistema funciona sin modelo.",
        }

    if demo_respuesta is not None:
        with open(demo_respuesta, encoding="utf-8") as fichero:
            simulada = json.load(fichero)
        aceptada, motivo = validar_respuesta(simulada, decision, stock, minimo)
        if aceptada:
            return {
                "decision": decision,
                "explicacion": str(simulada["explicacion"]).strip(),
                "accion": str(simulada["accion"]).strip(),
                "origen": f"DEMO_RESPUESTA ({demo_respuesta})",
                "validacion": motivo,
            }
        return {
            "decision": decision,
            "explicacion": determinista,
            "accion": accion,
            "origen": "FALLBACK DETERMINISTA",
            "validacion": f"RESPUESTA DESCARTADA: {motivo}",
        }

    try:
        crudo = llamar_ollama(construir_prompt(pieza, stock, minimo, decision, accion))
        candidato = extraer_json(crudo)
    except (RuntimeError, ValueError) as error:
        return {
            "decision": decision,
            "explicacion": determinista,
            "accion": accion,
            "origen": "FALLBACK DETERMINISTA",
            "validacion": f"RESPUESTA DESCARTADA: {error}",
        }
    aceptada, motivo = validar_respuesta(candidato, decision, stock, minimo)
    if aceptada:
        return {
            "decision": decision,
            "explicacion": str(candidato["explicacion"]).strip(),
            "accion": str(candidato["accion"]).strip(),
            "origen": f"MODELO LOCAL ({OLLAMA_MODEL})",
            "validacion": motivo,
        }
    return {
        "decision": decision,
        "explicacion": determinista,
        "accion": accion,
        "origen": "FALLBACK DETERMINISTA",
        "validacion": f"RESPUESTA DESCARTADA: {motivo}",
    }


def main():
    parser = argparse.ArgumentParser(
        description="IA bajo control: Python decide, valida y tiene fallback."
    )
    parser.add_argument("--pieza", default="Broca 5mm")
    parser.add_argument("--stock", type=int, default=3)
    parser.add_argument("--minimo", type=int, default=5)
    parser.add_argument("--sin-ia", action="store_true",
                        help="No llama a ningun modelo.")
    parser.add_argument("--demo-respuesta", default=None,
                        help="JSON con una respuesta simulada de modelo.")
    args = parser.parse_args()

    resultado = explicar(args.pieza, args.stock, args.minimo,
                         sin_ia=args.sin_ia, demo_respuesta=args.demo_respuesta)
    print("CONTEXTO")
    print(f"Pieza: {args.pieza} | Stock: {args.stock} | Minimo: {args.minimo}")
    print()
    print("DECISION PYTHON")
    print(resultado["decision"])
    print()
    print("ORIGEN")
    print(resultado["origen"])
    print()
    print("VALIDACION")
    print(resultado["validacion"])
    print()
    print("EXPLICACION")
    print(resultado["explicacion"])
    print()
    print("ACCION")
    print(resultado["accion"])
    return resultado


if __name__ == "__main__":
    main()
