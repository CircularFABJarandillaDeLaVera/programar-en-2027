import numpy as np
import pandas as pd


def cargar_tabla_hardware(ruta_csv):
    df = pd.read_csv(ruta_csv)
    return df.set_index("id")


def filtrar_ofertas_disponibles(df):
    filtro = (df["activo"] == "si") & (df["stock"] > 0)
    return df[filtro]


def calcular_indicadores(df):
    precios = np.array(df["precio"])
    return {
        "precio_medio": round(float(precios.mean()), 2),
        "precio_minimo": round(float(precios.min()), 2),
        "precio_maximo": round(float(precios.max()), 2),
        "ofertas_validas": int(len(df)),
        "stock_total": int(df["stock"].sum()),
    }


def analizar_hardware(ruta_csv):
    tabla = cargar_tabla_hardware(ruta_csv)
    disponibles = filtrar_ofertas_disponibles(tabla)
    indicadores = calcular_indicadores(disponibles)
    return disponibles, indicadores
