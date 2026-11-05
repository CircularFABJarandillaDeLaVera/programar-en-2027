"""Preparación guiada de Programar en 2027 para Ubuntu y macOS.

No instala nada ni crea carpetas al importarse. Cada cambio se confirma al ejecutar main().
"""

from __future__ import annotations

import json
import platform
from pathlib import Path
import shutil
import subprocess
import sys


CARPETA_CURSO = Path.home() / "programar-2027"
CARPETA_PRACTICA = CARPETA_CURSO / "primera-practica"
URL_VSCODE = "https://code.visualstudio.com/download"
EXTENSION_PYTHON = "ms-python.python"


def confirmar(descripcion: str) -> bool:
    print(f"\n{descripcion}")
    try:
        return input("¿Continuar? [s/N]: ").strip().lower() in {"s", "si", "sí"}
    except EOFError:
        return False


def ejecutar(argumentos: list[str], *, comprobar: bool = True) -> subprocess.CompletedProcess[str]:
    print("Ejecutando: " + " ".join(argumentos), flush=True)
    resultado = subprocess.run(argumentos, text=True, check=False)
    if comprobar and resultado.returncode:
        raise RuntimeError(f"El comando terminó con código {resultado.returncode}: {argumentos[0]}")
    return resultado


def abrir_url(url: str) -> None:
    print(f"Descarga oficial: {url}")
    programa = "open" if sys.platform == "darwin" else "xdg-open"
    if shutil.which(programa):
        subprocess.run([programa, url], check=False, stdout=subprocess.DEVNULL,
                       stderr=subprocess.DEVNULL)


def localizar_code() -> str | None:
    encontrado = shutil.which("code")
    if encontrado:
        return encontrado
    if sys.platform == "darwin":
        for base in (Path("/Applications"), Path.home() / "Applications"):
            ruta = base / "Visual Studio Code.app/Contents/Resources/app/bin/code"
            if ruta.is_file():
                return str(ruta)
    return None


def deb_compatible() -> Path | None:
    arquitectura = {"x86_64": "amd64", "aarch64": "arm64"}.get(platform.machine())
    if not arquitectura:
        return None
    candidatos = []
    for carpeta in (Path.home() / "Descargas", Path.home() / "Downloads"):
        candidatos.extend(carpeta.glob(f"code_*_{arquitectura}.deb"))
    return max(candidatos, key=lambda ruta: ruta.stat().st_mtime, default=None)


def escribir_si_falta(ruta: Path, contenido: str) -> None:
    if not ruta.exists():
        ruta.parent.mkdir(parents=True, exist_ok=True)
        ruta.write_text(contenido, encoding="utf-8")
        print(f"Creado: {ruta}")
    else:
        print(f"Conservado: {ruta}")


class Preparador:
    def __init__(self) -> None:
        self.preparado: list[str] = []
        self.pendiente: list[str] = []

    def python_y_venv(self) -> None:
        print("\n[1/4] Python y entorno de trabajo")
        if sys.version_info < (3, 10):
            referencia = ("https://www.python.org/downloads/macos/" if sys.platform == "darwin"
                          else "la guía de Ubuntu")
            self.pendiente.append(f"Python 3.10 o posterior: instala una versión actual desde {referencia} y repite el lanzador.")
            return
        self.preparado.append(f"Python {sys.version_info.major}.{sys.version_info.minor}")
        pip = subprocess.run([sys.executable, "-m", "pip", "--version"],
                             capture_output=True, text=True, check=False)
        if pip.returncode:
            if sys.platform == "linux":
                if confirmar("Falta pip. Ubuntu instalará python3-pip y python3-venv con apt; sudo pedirá tu contraseña solo para este paso."):
                    try:
                        ejecutar(["sudo", "apt", "update"])
                        ejecutar(["sudo", "apt", "install", "-y", "python3-pip", "python3-venv"])
                    except (OSError, RuntimeError) as error:
                        self.pendiente.append(f"pip/venv: {error}")
                else:
                    self.pendiente.append("pip/venv: instalación no confirmada.")
            else:
                self.pendiente.append("pip: revisa o reinstala Python desde https://www.python.org/downloads/macos/.")
        else:
            self.preparado.append("pip disponible")

    def git(self) -> None:
        print("\n[2/4] Git")
        if shutil.which("git"):
            prueba = subprocess.run(["git", "--version"], capture_output=True,
                                    text=True, check=False)
            if prueba.returncode == 0:
                self.preparado.append(prueba.stdout.strip())
                return
        if sys.platform == "linux":
            if confirmar("Falta Git. Ubuntu instalará git con apt; sudo se usará solo durante esta instalación."):
                try:
                    ejecutar(["sudo", "apt", "update"])
                    ejecutar(["sudo", "apt", "install", "-y", "git"])
                    self.preparado.append("Git instalado")
                    return
                except (OSError, RuntimeError) as error:
                    self.pendiente.append(f"Git: {error}")
                    return
        elif confirmar("Falta Git. macOS abrirá el instalador oficial de herramientas de Apple (xcode-select --install)."):
            try:
                ejecutar(["xcode-select", "--install"])
                self.pendiente.append("Git: termina la instalación de Apple y vuelve a ejecutar el lanzador.")
                return
            except (OSError, RuntimeError) as error:
                self.pendiente.append(f"Git: {error}")
                return
        self.pendiente.append("Git: instalación no confirmada.")

    def vscode(self) -> None:
        print("\n[3/4] Visual Studio Code y extensión Python")
        code = localizar_code()
        if not code:
            if sys.platform == "linux":
                paquete = deb_compatible()
                if not paquete:
                    print("Descarga el paquete .deb de Ubuntu para tu arquitectura desde la web oficial.")
                    abrir_url(URL_VSCODE)
                    try:
                        input("Cuando termine la descarga en Descargas, pulsa Intro: ")
                    except EOFError:
                        pass
                    paquete = deb_compatible()
                if not paquete:
                    self.pendiente.append("VS Code: descarga el .deb en Descargas y repite el lanzador.")
                    return
                if confirmar(f"Se instalará el paquete descargado {paquete.name} con apt. Revisa que proceda de la web oficial; sudo se usará solo en este paso."):
                    try:
                        ejecutar(["sudo", "apt", "install", "-y", str(paquete)])
                    except (OSError, RuntimeError) as error:
                        self.pendiente.append(f"VS Code: {error}")
                        return
                    code = localizar_code()
            else:
                print("Descarga VS Code para Apple Silicon o Intel, descomprímelo y arrástralo a Aplicaciones.")
                abrir_url(URL_VSCODE)
                try:
                    input("Cuando termines, pulsa Intro para comprobarlo: ")
                except EOFError:
                    pass
                code = localizar_code()
        if not code:
            self.pendiente.append("VS Code: aún no se encuentra; termina la instalación y repite el lanzador.")
            return
        self.preparado.append("VS Code disponible")
        prueba = subprocess.run([code, "--list-extensions"], capture_output=True,
                                text=True, check=False)
        if prueba.returncode:
            self.pendiente.append("Extensión Python: VS Code no respondió; instálala desde Extensiones.")
            return
        extensiones = {line.strip().lower() for line in prueba.stdout.splitlines()}
        if EXTENSION_PYTHON in extensiones:
            self.preparado.append("Extensión Python de Microsoft instalada")
        elif confirmar("Se instalará la extensión Python de Microsoft en VS Code."):
            try:
                ejecutar([code, "--install-extension", EXTENSION_PYTHON])
                self.preparado.append("Extensión Python de Microsoft instalada")
            except (OSError, RuntimeError) as error:
                self.pendiente.append(f"Extensión Python: {error}")
        else:
            self.pendiente.append("Extensión Python: instalación no confirmada.")

    def primera_practica(self) -> None:
        print("\n[4/4] Primera práctica")
        if sys.version_info < (3, 10):
            self.pendiente.append("Primera práctica: espera a disponer de Python 3.10 o posterior.")
            return
        python_venv = CARPETA_PRACTICA / ".venv/bin/python"
        faltantes = [
            ruta for ruta in (
                python_venv,
                CARPETA_PRACTICA / "hola.py",
                CARPETA_PRACTICA / ".vscode/settings.json",
                CARPETA_CURSO / ".gitignore",
            ) if not ruta.exists()
        ]
        if faltantes and not confirmar(
            f"Se preparará {CARPETA_PRACTICA} con los elementos que faltan: "
            + ", ".join(ruta.name for ruta in faltantes) + ". Se conservarán los existentes."):
            self.pendiente.append("Primera práctica: cambios no confirmados.")
            return
        CARPETA_PRACTICA.mkdir(parents=True, exist_ok=True)
        if not python_venv.is_file():
            try:
                ejecutar([sys.executable, "-m", "venv", str(CARPETA_PRACTICA / ".venv")])
            except (OSError, RuntimeError) as error:
                if sys.platform == "linux" and confirmar(
                    "No se pudo crear .venv. Ubuntu puede instalar python3-venv con apt y reintentarlo; sudo se usará solo para apt."):
                    try:
                        ejecutar(["sudo", "apt", "install", "-y", "python3-venv"])
                        ejecutar([sys.executable, "-m", "venv", str(CARPETA_PRACTICA / ".venv")])
                    except (OSError, RuntimeError) as nuevo_error:
                        self.pendiente.append(f"Entorno .venv: {nuevo_error}")
                else:
                    self.pendiente.append(f"Entorno .venv: {error}. Revisa Python y repite el lanzador.")
        if python_venv.is_file():
            self.preparado.append("Entorno .venv de la primera práctica")
        escribir_si_falta(CARPETA_PRACTICA / "hola.py",
                         'print("Hola desde Programar en 2027")\n')
        if python_venv.is_file():
            ajustes = {"python.defaultInterpreterPath": str(python_venv)}
            escribir_si_falta(CARPETA_PRACTICA / ".vscode/settings.json",
                             json.dumps(ajustes, ensure_ascii=False, indent=2) + "\n")
        escribir_si_falta(CARPETA_CURSO / ".gitignore", ".venv/\n__pycache__/\n")
        self.preparado.append(f"Primera práctica en {CARPETA_PRACTICA}")

    def resumen(self) -> None:
        print("\nRESUMEN DE PREPARACIÓN")
        for elemento in self.preparado:
            print("  Preparado: " + elemento)
        for elemento in self.pendiente:
            print("  Pendiente: " + elemento)
        print("Abre la carpeta primera-practica en VS Code y ejecuta hola.py.")
        print("La cuenta de GitHub y cualquier inicio de sesión se hacen por separado en el navegador o en VS Code.")
        print("La guía DOCX incluida en el ZIP contiene el recorrido manual.")


def main() -> int:
    sistema = sys.platform
    if sistema not in {"linux", "darwin"}:
        print("Este preparador solo sirve para Ubuntu y macOS.")
        return 2
    print("PREPARAR PROGRAMAR EN 2027 — " + ("Ubuntu" if sistema == "linux" else "macOS"))
    print("Se comprobarán Python, Git, VS Code, la extensión Python y una primera práctica.")
    print("Antes de instalar o crear algo se pedirá confirmación. Necesitas Internet para las descargas.")
    preparador = Preparador()
    for tarea in (preparador.python_y_venv, preparador.git, preparador.vscode,
                  preparador.primera_practica):
        try:
            tarea()
        except (OSError, RuntimeError) as error:
            preparador.pendiente.append(str(error))
    preparador.resumen()
    return 1 if preparador.pendiente else 0


if __name__ == "__main__":
    sys.exit(main())
