import csv
import json
from datetime import datetime


class ManejadorDatos:
    def __init__(self, ruta_config="config.json", ruta_csv="transacciones_oop.csv", ruta_log="auditoria_oop.log"):
        self.ruta_config = ruta_config
        self.ruta_csv = ruta_csv
        self.ruta_log = ruta_log

    def cargar_configuracion(self):
        por_defecto = {"umbral_alerta": 100.0, "iva_aplicado": 0.21}
        try:
            with open(self.ruta_config, "r", encoding="utf-8") as archivo:
                return json.load(archivo)
        except FileNotFoundError:
            with open(self.ruta_config, "w", encoding="utf-8") as archivo:
                json.dump(por_defecto, archivo, indent=2)
            return por_defecto

    def registrar_reporte_csv(self, filas):
        with open(self.ruta_csv, "a", newline="", encoding="utf-8") as archivo:
            escritor = csv.writer(archivo)
            for fila in filas:
                escritor.writerow(fila)

    def registrar_error(self, mensaje):
        marca = datetime.now().isoformat(timespec="seconds")
        with open(self.ruta_log, "a", encoding="utf-8") as archivo:
            archivo.write(f"{marca} - {mensaje}\n")
