# B5 Apoyos y plan B

## Errores habituales

- Usar strings de precio antes de convertir a numero.
- Interpretar `np.nan` como cero.
- Confundir `loc` con `iloc`.
- Escribir `and` u `or` en filtros Pandas.
- Olvidar `browser.close()` en Playwright.
- Mezclar `got_1.csv` con el Proyecto aplicado 3.
- Intentar meter textos largos en `Table` sin envolverlos en `Paragraph`.
- Llamar a `build()` antes de completar la `story`.
- Usar Canvas como si fuera obligatorio.

## Alumnos bloqueados

- Dar un CSV de tres filas.
- Pedir una sola consulta `df.head()`.
- Pasar despues a `set_index`.
- Hacer un filtro con una condicion antes de pasar a dos.

## Alumnos rapidos

- Anadir otra categoria de hardware.
- Comparar precio medio antes y despues de filtrar stock.
- Escribir una conclusion ejecutiva de tres lineas.
- Anadir un descuento condicional a la factura antes de calcular el IVA.

## Plan B

- Si Playwright no esta disponible, usar datos mock de hardware.
- Si el CSV falla, comprobar carpeta actual y nombre exacto.
- Si ReportLab no esta instalado, comprobar el entorno y repetir la ejecucion tras instalar la dependencia indicada por el profesor.
- Si el PDF no aparece, comprobar carpeta actual, nombre de salida y llamada final a `doc.build(story)`.
- Si el logo no aparece, generar el PDF sin logo y revisar despues la ruta relativa del asset.
