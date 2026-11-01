# Practica 05 - Factura PDF con ReportLab

## Objetivo

Generar el archivo `factura_2027_001.pdf` a partir de datos estructurados usando ReportLab con Platypus.

Flujo de trabajo:

DATOS -> CALCULOS -> ESTRUCTURA -> REPORTLAB -> PDF

## Herramientas necesarias

Usa el enfoque de alto nivel Platypus:

- `SimpleDocTemplate`
- `Paragraph`
- `Image`
- `Table`
- `TableStyle`
- `Spacer`
- `getSampleStyleSheet`
- `colors`
- `A4`
- `build()`

Canvas queda como ampliacion separada del flujo principal.

## Datos de entrada

La factura parte de una lista de diccionarios:

```python
conceptos = [
    {"descripcion": "Suscripcion Premium Plataforma", "cantidad": 2, "precio": 45.0},
    {"descripcion": "Soporte Tecnico Especializado", "cantidad": 1, "precio": 90.0},
    {"descripcion": "Licencia Adicional Desarrollo", "cantidad": 5, "precio": 20.0},
]
```

Cada linea permite calcular:

```python
subtotal = cantidad * precio
```

Despues se calcula:

- base imponible;
- IVA del 21%;
- total.

## Tarea

Ejecuta el script `generador_factura_pdf.py` desde esta carpeta:

```bash
python generador_factura_pdf.py
```

Debe generarse:

```text
factura_2027_001.pdf
```

La factura debe incluir:

- logo;
- datos de empresa;
- numero de factura;
- fecha;
- cliente;
- lineas/conceptos;
- cantidad;
- precio;
- base imponible;
- IVA;
- total.

## Mini-reto

Anade una condicion: si la base imponible supera 150.0 EUR, aplica un descuento del 10% antes de calcular el IVA y muestra el descuento como una fila adicional en la tabla.

## Error habitual

No metas textos largos directamente como strings crudos dentro de la tabla. Para descripciones largas, envuelvelas en `Paragraph` para que ReportLab pueda ajustar el texto al ancho disponible.
