from pathlib import Path

from analizador import analizar_hardware
from generador_informe import compilar_reporte_ejecutivo_pdf


def ejecutar():
    base_dir = Path(__file__).resolve().parent
    tabla, indicadores = analizar_hardware(base_dir / "datos_hardware.csv")
    print("SAMI-Applied")
    print(f"Ofertas validas: {indicadores['ofertas_validas']}")
    print(f"Precio medio: {indicadores['precio_medio']}")
    print(f"Stock total: {indicadores['stock_total']}")

    ruta = compilar_reporte_ejecutivo_pdf(base_dir / "reporte_final_sami.pdf", tabla, indicadores)
    print(f"Informe PDF generado: {ruta}")


if __name__ == "__main__":
    ejecutar()
