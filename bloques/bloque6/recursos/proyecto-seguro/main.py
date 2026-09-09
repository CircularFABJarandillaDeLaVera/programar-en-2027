from src.analizador import cargar_datos, calcular_precio_final, filtrar_stock_bajo
from src.generador_pdf import describir_informe
from src.persistencia import cargar_configuracion, registrar_error


def ejecutar():
    try:
        config = cargar_configuracion("config.json")
        tabla = cargar_datos("data/datos_hardware.csv")
        tabla = calcular_precio_final(tabla, config["iva"])
        alertas = filtrar_stock_bajo(tabla, config["stock_minimo"])
        informe = describir_informe(tabla, alertas)
        print(tabla)
        print(informe)
    except (FileNotFoundError, ValueError, KeyError) as error:
        registrar_error("logs/auditoria_errores.log", str(error))
        print("Error diagnosticado. Revisa logs/auditoria_errores.log")


ejecutar()
