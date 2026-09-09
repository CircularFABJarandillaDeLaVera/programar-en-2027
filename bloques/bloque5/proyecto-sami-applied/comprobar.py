"""Comprobacion minima del proyecto SAMI-Applied.

Solo biblioteca estandar. No inspecciona el diseno visual del PDF:
eso lo compruebas tu abriendo el archivo generado.
Uso: python comprobar.py
"""
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent


def comprobar_csv_existe():
    ruta = BASE_DIR / "datos_hardware.csv"
    assert ruta.exists(), f"falta el CSV de entrada: {ruta.name}"
    filas = ruta.read_text(encoding="utf-8").strip().splitlines()
    assert len(filas) > 1, "el CSV no tiene filas de datos"
    print(f"OK csv: {ruta.name} con {len(filas) - 1} filas de datos")


def comprobar_analisis_devuelve_estructura_valida():
    from analizador import analizar_hardware

    tabla, indicadores = analizar_hardware(BASE_DIR / "datos_hardware.csv")
    assert len(tabla) > 0, "la tabla de disponibles esta vacia"
    for clave in ("ofertas_validas", "precio_medio", "precio_minimo", "precio_maximo", "stock_total"):
        assert clave in indicadores, f"falta el indicador: {clave}"
    print(f"OK analisis: {indicadores['ofertas_validas']} ofertas, precio medio {indicadores['precio_medio']}")


def comprobar_pdf_generado_y_no_vacio():
    from analizador import analizar_hardware
    from generador_informe import compilar_reporte_ejecutivo_pdf

    tabla, indicadores = analizar_hardware(BASE_DIR / "datos_hardware.csv")
    ruta_pdf = BASE_DIR / "reporte_final_sami.pdf"
    compilar_reporte_ejecutivo_pdf(ruta_pdf, tabla, indicadores)
    assert ruta_pdf.exists(), "no se genero el PDF"
    peso = ruta_pdf.stat().st_size
    assert peso > 0, "el PDF pesa 0 bytes"
    print(f"OK pdf: {ruta_pdf.name} ({peso} bytes) - abrelo y revisa tabla y resumen")


if __name__ == "__main__":
    comprobar_csv_existe()
    comprobar_analisis_devuelve_estructura_valida()
    comprobar_pdf_generado_y_no_vacio()
    print("COMPROBACION SUPERADA")
