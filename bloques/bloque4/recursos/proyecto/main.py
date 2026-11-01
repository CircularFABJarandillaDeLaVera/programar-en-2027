from analizador import AuditoriaMercado, ProductoHardware, ProductoLicencia
from persistencia import ManejadorDatos


def pedir_tipo_producto():
    return input("Tipo (hardware/licencia/salir): ").strip().lower()


def pedir_precio():
    return float(input("Precio base: "))


def crear_hardware():
    nombre = input("Nombre: ").strip()
    precio = pedir_precio()
    peso = float(input("Peso kg: "))
    return ProductoHardware(nombre, precio, peso)


def crear_licencia():
    nombre = input("Nombre: ").strip()
    precio = pedir_precio()
    clave = input("Clave activacion: ").strip()
    return ProductoLicencia(nombre, precio, clave)


def ejecutar():
    datos = ManejadorDatos()
    config = datos.cargar_configuracion()
    auditoria = AuditoriaMercado(config["umbral_alerta"])

    while True:
        tipo = pedir_tipo_producto()
        if tipo == "salir":
            filas, total = auditoria.generar_reporte(config["iva_aplicado"])
            datos.registrar_reporte_csv(filas)
            print(f"Total auditado: {total}")
            break
        try:
            if tipo == "hardware":
                producto = crear_hardware()
            elif tipo == "licencia":
                producto = crear_licencia()
            else:
                raise ValueError("Tipo de producto no reconocido")
            auditoria.agregar_producto(producto)
            print("Producto agregado")
        except (ValueError, TypeError) as error:
            datos.registrar_error(str(error))
            print("Entrada no valida. Revisa el dato y vuelve a intentarlo.")


if __name__ == "__main__":
    ejecutar()
