# SAMI-Applied (B5) — De datos externos a un PDF real

Evolución: **SAMI-Lite (B3: funciones) → SAMI-OOP (B4: objetos) → SAMI-Applied
(B5: librerías + datos externos → artefacto útil)**.
Competencia: «Sé usar Python y librerías para transformar datos en un resultado útil».

Si vienes del paso ①, ya exploraste CSV, filtros y valores ausentes en
`../cuadernos/explorar-datos-b5.ipynb`. Aquí aplicas esas ideas en un proyecto.

## Una librería por necesidad (no al revés)

| Necesidad | Herramienta en este proyecto |
| --- | --- |
| Tengo un CSV y quiero leerlo y filtrarlo cómodamente | Pandas (`read_csv`, `set_index`, filtro con `&`) |
| Tengo precios y quiero media/mínimo/máximo sin bucles | NumPy (`np.array`, `mean`, `min`, `max`) |
| Necesito entregar un informe que se pueda abrir e imprimir | ReportLab Platypus (`SimpleDocTemplate`, `Paragraph`, `Table`, `build`) |

En los filtros, cada condición va entre paréntesis y se combinan con `&`
(en Pandas el `and` de Python falla con Series).

## Estructura

```text
proyecto-sami-applied/
  datos_hardware.csv  # entrada: 6 ofertas de componentes
  analizador.py       # Pandas + NumPy: carga, filtra, calcula
  generador_informe.py# ReportLab Platypus -> PDF (logo opcional con fallback)
  main.py             # entrada: ejecuta el flujo
  requirements.txt    # pandas, numpy, reportlab
  comprobar.py        # 3 checks con solo stdlib (ver COMPROBAR)
  README_PROYECTO.md
```

## Flujo real

```text
datos_hardware.csv
  ↓  analizador.cargar_tabla_hardware (pd.read_csv + set_index)
analizador.filtrar_ofertas_disponibles (activo == "si" & stock > 0)
  ↓  analizador.calcular_indicadores (np.array: media/min/max + conteos)
tabla disponible + indicadores
  ↓  generador_informe.compilar_reporte_ejecutivo_pdf (story -> build)
reporte_final_sami.pdf + resumen por consola
```

`main.ejecutar` orquesta. La RAM-02 (stock 0) y la CASE-06 (activo "no")
se descartan: quedan 4 ofertas válidas, precio medio 147.35, stock total 26.

## PREPARAR

Abre esta carpeta en VS Code. Solo `main.py` y `comprobar.py` se ejecutan;
los demás se importan.

## ORIENTARSE (responde por escrito)

1. ¿Qué archivo es la entrada y qué función arranca el programa?
2. ¿Qué archivo obtiene datos, cuál analiza y cuál genera el informe?
3. ¿Qué archivos se leen y qué artefactos se producen al ejecutar?

## INSTALAR

Las dependencias externas pueden no estar instaladas: instalarlas es parte
del trabajo. Solo esto, sin `.venv` (los entornos se formalizan en B6):

```bash
python -m pip install -r requirements.txt
```

## PROBAR

Ejecuta sin modificar:

```bash
python main.py
```

Obtén el artefacto base (`reporte_final_sami.pdf`) y el resumen por consola.
Abre el PDF.

## COMPRENDER

Sigue dato → cálculo → estructura → PDF con un ejemplo concreto
(la GPU-04): fila del CSV → ¿pasa el filtro? → ¿entra en la media? →
¿en qué tabla del PDF aparece? PREDICE antes de ejecutar:
¿cuántas ofertas válidas esperas y por qué se descartan RAM-02 y CASE-06?

## DECIDIR (sin receta)

El cliente quiere que el informe destaque los productos disponibles con
stock bajo (stock <= 2). Decide: ¿dónde se calcula (qué función de
`analizador.py`)?, ¿dónde se representa (qué parte de la story en
`generador_informe.py`)?, ¿qué NO debes tocar (lectura del CSV,
`formato_eur`)?

## MODIFICAR (cambio acotado, sin solución dada)

Aplica tu decisión: marca los productos con stock bajo en el informe
(una columna, una marca o una sección: tú eliges) sin cambiar las firmas
de `analizar_hardware` ni de `compilar_reporte_ejecutivo_pdf`.

## COMPROBAR (el artefacto manda)

1. Ejecuta la comprobación automática:

   ```bash
   python comprobar.py
   ```

   Verifica: existe `datos_hardware.csv`, el análisis devuelve estructura
   coherente y `reporte_final_sami.pdf` existe y pesa más de 0 bytes.
2. Abre `reporte_final_sami.pdf` y comprueba visualmente que el informe
   tiene sentido: existe, muestra el resumen, contiene la tabla con los
   datos esperados y no está vacío ni roto. Esto es deliberado: el diseño
   visual lo revisa una persona, no un script.

Casos: normal (CSV original → 4 ofertas); límite (stock 0 o activo "no"
se excluyen: RAM-02, CASE-06); inválido (CSV ausente → error claro;
precio como texto → falla la media y hay que limpiar antes de convertir).

## MINI-RETO (objetivo + restricciones, sin receta)

Añade al PDF una línea de conclusión con el número de productos en stock
bajo. Restricciones: no cambies firmas públicas innecesariamente; el
resultado debe aparecer en el PDF. Artefacto esperado:
`reporte_final_sami.pdf` regenerado con la línea visible.

## Ampliación online (opcional, fuera del flujo)

Existe una demo de scraping con Playwright (`scraper.py`, conservada en el
material de autor del bloque) que extrae el título de una página web.
No forma parte de este proyecto: exige navegador descargado e Internet y
el informe se genera igual sin ella. Si tienes red y curiosidad, pruébala
aparte; nunca como requisito del artefacto.
