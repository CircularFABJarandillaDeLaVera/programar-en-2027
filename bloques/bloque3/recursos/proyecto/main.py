from analizador import calcular_precio_final, evaluar_alerta_precio
from persistencia import cargar_configuracion, registrar_error_log, registrar_transaccion_csv


def pedir_producto():
    """Solicita el nombre del producto."""
    return input("Producto: ").strip()


def pedir_precio():
    """Solicita y convierte el precio base."""
    return float(input("Precio base: "))


def procesar_transaccion(config, nombre_producto, precio_base):
    """Calcula precio final, evalua alerta y registra la transaccion."""
    precio_final = calcular_precio_final(precio_base, config["iva_aplicado"])
    estado = evaluar_alerta_precio(precio_final, config["umbral_alerta"])
    registrar_transaccion_csv(
        "transacciones_auditoras.csv",
        nombre_producto,
        precio_base,
        precio_final,
        estado,
    )
    return precio_final, estado


def ejecutar():
    """Coordina SAMI-Lite desde consola."""
    config = cargar_configuracion("config.json")
    while True:
        nombre = pedir_producto()
        if nombre.lower() == "salir":
            print("Fin de SAMI-Lite")
            break
        try:
            precio = pedir_precio()
            precio_final, estado = procesar_transaccion(config, nombre, precio)
        except ValueError as error:
            registrar_error_log(f"Entrada no numerica: {error}")
            print("Precio no valido. Vuelve a intentarlo.")
        except TypeError as error:
            registrar_error_log(str(error))
            print("Dato interno no valido. Revisa el calculo.")
        else:
            print(f"Precio final: {precio_final} - {estado}")


if __name__ == "__main__":
    ejecutar()
