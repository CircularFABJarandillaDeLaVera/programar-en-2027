"""Inventario minimo de taller. Punto de partida de la practica 00.

Deliberadamente sencillo: el foco esta en dirigir al agente, no en el programa.
Solo libreria estandar. No anadir dependencias.

Cada pieza es un diccionario: {"nombre": str, "precio": float, "stock": int}
"""

import json


def cargar_inventario(ruta):
    """Carga la lista de piezas desde un JSON. Devuelve una lista."""
    with open(ruta, encoding="utf-8") as fichero:
        piezas = json.load(fichero)
    return piezas


def guardar_inventario(piezas, ruta):
    """Guarda la lista de piezas en un JSON."""
    with open(ruta, "w", encoding="utf-8") as fichero:
        json.dump(piezas, fichero, ensure_ascii=False, indent=2)


def anadir_pieza(piezas, nombre, precio, stock):
    """Anade una pieza a la lista. Devuelve la pieza creada."""
    pieza = {"nombre": nombre, "precio": precio, "stock": stock}
    piezas.append(pieza)
    return pieza


def valor_total(piezas):
    """Suma precio * stock de cada pieza. Redondea a 2 decimales."""
    total = 0.0
    for pieza in piezas:
        total += pieza["precio"] * pieza["stock"]
    return round(total, 2)


def listar_piezas(piezas):
    """Devuelve una linea por pieza: nombre | precio | stock."""
    lineas = []
    for pieza in piezas:
        lineas.append(f"{pieza['nombre']} | {pieza['precio']} | {pieza['stock']}")
    return lineas


if __name__ == "__main__":
    inventario = cargar_inventario("datos_ejemplo.json")
    for linea in listar_piezas(inventario):
        print(linea)
    print(f"Total: {valor_total(inventario)}")
