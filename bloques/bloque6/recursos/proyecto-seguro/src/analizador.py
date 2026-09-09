import pandas as pd


def cargar_datos(ruta_csv):
    return pd.read_csv(ruta_csv)


def calcular_precio_final(tabla, iva):
    tabla = tabla.copy()
    tabla["precio_final"] = tabla["precio"] * (1 + iva)
    return tabla


def filtrar_stock_bajo(tabla, stock_minimo):
    return tabla[tabla["stock"] < stock_minimo]
