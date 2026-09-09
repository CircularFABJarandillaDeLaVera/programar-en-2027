def calcular_precio_final(precio, tasa_impuesto):
    """Valida precio y tasa, calcula el precio final y lo devuelve redondeado."""
    if not isinstance(precio, (int, float)):
        raise TypeError("precio debe ser numerico")
    if not isinstance(tasa_impuesto, (int, float)):
        raise TypeError("tasa_impuesto debe ser numerica")
    return round(precio + (precio * tasa_impuesto), 2)


def evaluar_alerta_precio(precio_final, umbral):
    """Devuelve el estado de alerta segun el umbral configurado."""
    if precio_final > umbral:
        return "ALERTA_PRECIO_ELEVADO"
    return "PRECIO_NORMAL"
