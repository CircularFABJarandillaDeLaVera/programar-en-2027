# B5 Guion docente - Python aplicado y librerias

## Hilo conductor

DATOS -> CALCULOS -> ESTRUCTURA -> REPORTLAB -> PDF

## Secuencia

1. Abrir con la pregunta: que problema resuelve cada libreria?
2. NumPy: operar precios como arrays.
3. Pandas: cargar `got_1.csv` para aprender tablas.
4. Pandas: transferir la tecnica a hardware sin mezclar datasets.
5. Playwright: automatizar carga minima y cerrar navegador.
6. BeautifulSoup: decidir cuando basta HTML estatico.
7. ReportLab: construir una factura PDF con Platypus.
8. Proyecto aplicado 3: producir tabla analizada, resumen y PDF de informe.

## Dinamica

- Explicacion breve.
- Codigo minimo.
- Prediccion antes de ejecutar.
- Modificar un dato.
- Leer el error util.
- Mini-reto.
- Feedback inmediato.

## Cierre

La evidencia debe mostrar datos procesados, calculos correctos, PDF generado y una decision explicable.

## Claves para explicar ReportLab

- ReportLab resuelve la salida profesional: pasar de datos a documento.
- Platypus permite apilar elementos en una `story`.
- Los datos y calculos se preparan antes de la presentacion.
- `Paragraph` evita desbordes de texto.
- `Table` organiza lineas de factura o filas de mercado.
- `TableStyle` da formato visual a la tabla.
- `build(story)` crea el archivo PDF final.
