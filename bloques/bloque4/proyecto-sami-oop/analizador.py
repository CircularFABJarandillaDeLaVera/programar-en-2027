class Producto:
    def __init__(self, nombre, precio_base):
        self._nombre = nombre
        self.set_precio(precio_base)

    def get_nombre(self):
        return self._nombre

    def get_precio(self):
        return self.__precio_base

    def set_precio(self, precio):
        if not isinstance(precio, (int, float)):
            raise TypeError("El precio debe ser numerico")
        if precio <= 0:
            raise ValueError("El precio debe ser positivo")
        self.__precio_base = precio

    def calcular_precio_final(self, tasa_iva):
        return round(self.__precio_base * (1 + tasa_iva), 2)


class ProductoHardware(Producto):
    def __init__(self, nombre, precio_base, peso_kg):
        super().__init__(nombre, precio_base)
        self.peso_kg = peso_kg

    def calcular_precio_final(self, tasa_iva):
        precio = super().calcular_precio_final(tasa_iva)
        if self.peso_kg > 5:
            precio += self.peso_kg * 2.0
        return round(precio, 2)


class ProductoLicencia(Producto):
    def __init__(self, nombre, precio_base, clave_activacion):
        super().__init__(nombre, precio_base)
        self.clave_activacion = clave_activacion

    def calcular_precio_final(self, tasa_iva):
        precio = self.get_precio()
        if precio > 100:
            precio = precio * 0.95
        return round(precio, 2)


class AuditoriaMercado:
    def __init__(self, umbral_alerta):
        self.umbral_alerta = umbral_alerta
        self.productos = []

    def agregar_producto(self, producto):
        if not isinstance(producto, Producto):
            raise TypeError("Solo se pueden agregar productos")
        self.productos.append(producto)

    def evaluar_alerta(self, precio_final):
        if precio_final > self.umbral_alerta:
            return "ALERTA_PRECIO_ELEVADO"
        return "PRECIO_NORMAL"

    def generar_reporte(self, tasa_iva):
        filas = []
        total = 0
        for producto in self.productos:
            precio_final = producto.calcular_precio_final(tasa_iva)
            estado = self.evaluar_alerta(precio_final)
            filas.append([producto.get_nombre(), producto.get_precio(), precio_final, estado])
            total += precio_final
        return filas, round(total, 2)
