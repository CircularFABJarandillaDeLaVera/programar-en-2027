# Proyecto B5 - SAMI-Applied

## Evolucion

SAMI-Lite -> SAMI-OOP -> SAMI-Applied

## Objetivo

Analizar precios y disponibilidad de componentes de hardware.

## Estructura

- `datos_hardware.csv`
- `scraper.py`
- `analizador.py`
- `generador_informe.py`
- `main.py`

## Reglas

- `got_1.csv` no entra en SAMI-Applied.
- NumPy se usa para calculos numericos.
- Pandas se usa para cargar y filtrar tablas.
- Playwright se usa solo si hay necesidad de navegador.
- BeautifulSoup queda como decision conceptual para HTML estatico.
- ReportLab genera el PDF real del informe mediante Platypus.
- Canvas queda como ampliacion no evaluable.

## Evidencia esperada

- Tabla analizada de hardware.
- Precio medio.
- Componentes disponibles.
- Alertas de stock.
- `reporte_final_sami.pdf` generado con `SimpleDocTemplate`, `Paragraph`, `Image`, `Table`, `TableStyle`, `Spacer`, `colors`, `A4` y `build()`.

## Verificacion: que comprueba el script y que revisas tu

### Objetivo

Tabla analizada + indicadores + `reporte_final_sami.pdf` generados desde
`datos_hardware.csv`, sin modificar los datos de entrada.

### Contexto

Datos: `datos_hardware.csv` (se lee, no se toca). Codigo: `analizador.py`,
`generador_informe.py`, `main.py`. No entran `got_1.csv`, dependencias
nuevas ni facturacion (ver `Reglas`).

### Verificacion

`python comprobar.py` (en `proyecto-sami-applied/`) comprueba datos y
archivos: CSV con filas, indicadores presentes, PDF generado y no vacio.
Lo que el script NO puede hacer —abrir el PDF y comprobar que la tabla y
el resumen se leen bien— lo revisas tu a mano. Un script comprueba
archivos; la persona valida el resultado.

## Flujo del informe PDF

DATOS -> CALCULOS -> ESTRUCTURA -> REPORTLAB -> PDF

El generador no convierte SAMI-Applied en un proyecto de facturacion. Su tarea es presentar el analisis de mercado en un documento profesional: logo, resumen de indicadores, tabla de componentes disponibles y conclusion ejecutiva.
