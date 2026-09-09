import json
from pathlib import Path


def cargar_configuracion(ruta):
    with open(ruta, "r", encoding="utf-8") as archivo:
        return json.load(archivo)


def registrar_error(ruta_log, mensaje):
    Path(ruta_log).parent.mkdir(parents=True, exist_ok=True)
    with open(ruta_log, "a", encoding="utf-8") as archivo:
        archivo.write(mensaje + "\n")
