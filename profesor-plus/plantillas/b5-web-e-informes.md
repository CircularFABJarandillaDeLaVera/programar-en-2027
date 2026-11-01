# B5 Web e informes

## Playwright

Usar solo el flujo sincronico respaldado:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://playwright.dev/")
    print(page.title())
    browser.close()
```

Pregunta clave: donde se liberan los recursos?

## BeautifulSoup

Tratamiento conceptual: parsing de HTML estatico cuando no hace falta controlar navegador.

No convertir en tutorial de metodos no trazados.

## ReportLab

Tratamiento practico: generacion de PDF con Platypus.

Problema que resuelve:

- Convertir datos calculados en un documento profesional que se pueda entregar o revisar.

Platypus:

- Es la capa de alto nivel de ReportLab.
- Permite construir un documento como una secuencia de elementos, sin trabajar con coordenadas fijas.

Story:

- Es una lista ordenada de elementos del PDF.
- Puede contener `Image`, `Paragraph`, `Spacer` y `Table`.
- El PDF se genera al llamar a `doc.build(story)`.

Factura:

1. Resumen.
2. Datos de empresa.
3. Datos de cliente.
4. Tabla de conceptos.
5. Base imponible, IVA y total.

Enfoque de esta práctica:

```python
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Image, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

styles = getSampleStyleSheet()
doc = SimpleDocTemplate("factura_2027_001.pdf", pagesize=A4)
story = [Paragraph("FACTURA", styles["Heading1"])]
doc.build(story)
```

Canvas queda como ampliacion separada del flujo principal.
