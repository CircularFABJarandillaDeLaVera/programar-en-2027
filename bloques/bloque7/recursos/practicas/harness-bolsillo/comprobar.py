"""Comprobador de la practica 00. Solo informa, no corrige nada.

Lee el inventario de ejemplo y clasifica cada criterio como
APTO, NO_APTO o NO_VERIFICADO. El humano decide al final.

Uso desde esta misma carpeta:
    python comprobar.py
"""

import copy
import os
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import inventario_taller as taller

CARPETA = os.path.dirname(os.path.abspath(__file__))
DATOS = os.path.join(CARPETA, "datos_ejemplo.json")

resultados = []


def registrar(nombre, estado, detalle):
    """Guarda y muestra un resultado. Estado: APTO, NO_APTO o NO_VERIFICADO."""
    resultados.append((nombre, estado, detalle))
    print(f"[{estado}] {nombre}: {detalle}")


def main():
    piezas = taller.cargar_inventario(DATOS)

    # 1. Carga del ejemplo.
    if len(piezas) == 5:
        registrar("carga_ejemplo", "APTO", "se cargan 5 piezas")
    else:
        registrar("carga_ejemplo", "NO_APTO", f"se esperaban 5, hay {len(piezas)}")

    # 2. Total con descuento del 10% cuando stock > 10.
    # Broca 180.0 + Tornillo 10.0 + Placa 500.0 + Filamento 270.0 + Sensor 0.0 = 960.0
    total = taller.valor_total(piezas)
    if total == 960.0:
        registrar("descuento_stock_alto", "APTO", "total 960.0 con descuento aplicado")
    else:
        registrar("descuento_stock_alto", "NO_APTO", f"total {total}, se esperaba 960.0")

    # 3. Borde: stock == 10 no aplica descuento (500.0, no 450.0).
    pieza_borde = [{"nombre": "Prueba", "precio": 50.0, "stock": 10}]
    if taller.valor_total(pieza_borde) == 500.0:
        registrar("borde_stock_10", "APTO", "stock 10 sin descuento: 500.0")
    else:
        registrar(
            "borde_stock_10",
            "NO_APTO",
            f"linea {taller.valor_total(pieza_borde)}, se esperaba 500.0",
        )

    # 4. Validacion: precio o stock negativo debe lanzar ValueError.
    fallos_validacion = []
    for nombre, precio, stock in [("Mala1", -5.0, 3), ("Mala2", 5.0, -1)]:
        copia = copy.deepcopy(piezas)
        try:
            taller.anadir_pieza(copia, nombre, precio, stock)
            fallos_validacion.append(nombre)
        except ValueError:
            pass
        except Exception as error:  # noqa: BLE001 - se informa como evidencia
            fallos_validacion.append(f"{nombre} (lanza {type(error).__name__})")
    if not fallos_validacion:
        registrar("valida_entradas", "APTO", "precio/stock negativos lanzan ValueError")
    else:
        registrar(
            "valida_entradas",
            "NO_APTO",
            f"acepta entradas invalidas: {', '.join(fallos_validacion)}",
        )

    # 5. Guardar y cargar conserva el inventario.
    try:
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".json", delete=False, encoding="utf-8"
        ) as temporal:
            ruta_temporal = temporal.name
        taller.guardar_inventario(piezas, ruta_temporal)
        recargadas = taller.cargar_inventario(ruta_temporal)
        if recargadas == piezas:
            registrar("guardar_cargar", "APTO", "el JSON guardado carga identico")
        else:
            registrar("guardar_cargar", "NO_APTO", "el JSON cambia al guardar/cargar")
    finally:
        if os.path.exists(ruta_temporal):
            os.remove(ruta_temporal)

    # 6. Lo que no podemos probar en clase no es un fallo.
    registrar(
        "rendimiento_volumen",
        "NO_VERIFICADO",
        "no probado con miles de piezas; pendiente de comprobar, no es fallo",
    )

    aptos = sum(1 for _, estado, _ in resultados if estado == "APTO")
    no_aptos = sum(1 for _, estado, _ in resultados if estado == "NO_APTO")
    print(f"\nResumen: {aptos} APTO, {no_aptos} NO_APTO, resto NO_VERIFICADO.")
    if no_aptos:
        print("Veredicto: NO_APTO. Hay criterios sin cumplir; decide tu el siguiente paso.")
        return 1
    print("Veredicto: todo lo comprobable en APTO. Lo no verificado sigue pendiente.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
