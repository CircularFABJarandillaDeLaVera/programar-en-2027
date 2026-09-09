import csv
import json
from datetime import datetime


def cargar_configuracion(ruta_json):
    """Carga configuracion o crea valores por defecto si el archivo no existe."""
    por_defecto = {"umbral_alerta": 100.0, "iva_aplicado": 0.21}
    try:
        with open(ruta_json, "r", encoding="utf-8") as archivo:
            return json.load(archivo)
    except FileNotFoundError:
        with open(ruta_json, "w", encoding="utf-8") as archivo:
            json.dump(por_defecto, archivo, indent=2)
        return por_defecto


def registrar_transaccion_csv(ruta_csv, nombre_producto, precio_base, precio_final, estado_alerta):
    """Anade una transaccion al archivo CSV."""
    with open(ruta_csv, "a", newline="", encoding="utf-8") as archivo:
        escritor = csv.writer(archivo)
        escritor.writerow([nombre_producto, precio_base, precio_final, estado_alerta])


def registrar_error_log(mensaje_error):
    """Anade una linea de error con fecha al log TXT."""
    marca = datetime.now().isoformat(timespec="seconds")
    with open("auditoria_errores.log", "a", encoding="utf-8") as archivo:
        archivo.write(f"{marca} - {mensaje_error}\n")
