# INGENIERÍA CURRICULAR DETALLADA: BLOQUE 5 (PYTHON APLICADO Y LIBRERÍAS)
## Itinerario: "Python 2027: De los Fundamentos a la Programación Asistida por IA"

> **Nota de vigencia (revisión documental 2026-09-10):** Ingeniería de origen, centrada en ReportLab. El orden de adquisición del pipeline no es el orden de enseñanza actual. SAMI-Applied práctico parte de CSV local y no exige Playwright: consulta [06](../06-SAMI.md). Las lagunas describen las fuentes originales y no sustituyen los límites actuales. Véase el [criterio de fuentes](README.md).


Este documento constituye la versión final consolidada y saneada de la **Ingeniería del Conocimiento para el Bloque 5: Python Aplicado y Librerías**, redactada en estricta conformidad con el alcance curricular, pedagógico e infraestructural de la versión V4 del itinerario principal [190].

En esta etapa, el alumno da el salto definitivo desde la lógica pura de la programación y el diseño de objetos nativos hacia el uso de **librerías profesionales de estándar industrial** para resolver flujos de trabajo reales: adquisición, procesamiento, análisis de datos y la generación automatizada de informes ejecutivos en PDF [1, 7, 15].

---

## 1. OBJETIVO OPERATIVO
Diseñar y desarrollar aplicaciones en Python que automaticen flujos completos de recopilación de información web mediante **Playwright** [100, 102], apliquen cálculos y análisis numéricos sobre arrays estructurados con **NumPy** [4, 15], limpien, indexen y filtren conjuntos de datos tabulares reales empleando **Pandas** [1, 2], y compilen informes ejecutivos formales con formato profesional en PDF mediante las utilidades lógicas de alto nivel (Platypus) de **ReportLab** [15, 184], garantizando un código modular, robusto y libre de fugas de recursos.

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 5)

El bloque progresa unificando las librerías en un flujo secuencial donde cada herramienta actúa como proveedora de la siguiente:

```
          [Bloque 4: Programación Orientada a Objetos (SAMI-OOP)]
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.1 Adquisición de Datos: Scraper Web (Playwright)      │
        └────────────────────────────┬────────────────────────────┘
                                     │ (Precios y ofertas en strings/floats)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.2 Tratamiento Estadístico Vectorial (NumPy)           │
        └────────────────────────────┬────────────────────────────┘
                                     │ (Arrays ndarray limpios y promedios)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.3 Estructuración y Análisis Tabular (Pandas)          │
        └────────────────────────────┬────────────────────────────┘
                                     │ (DataFrames, loc/iloc, isin, set_index)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.4 Generación de Entregables (ReportLab PDF - Platypus)│
        └────────────────────────────┬────────────────────────────┘
                                     │ (Informe y Factura PDF Profesional)
                                     ▼
         [PROYECTO INTEGRADO: SAMI-Applied (Adquisición, Análisis y PDF)]
                                     │
                                     ▼
                [Bloque 6: Programar en 2027 (Entorno Local)]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 5

*   **IMPRESCINDIBLES (Sólidamente respaldados con código en las fuentes)**:
    *   *Pandas (Series)*: Creación de Series, asignación de nombres, indexación explícita, selección por posición con `.iloc[]`, selección condicional (boolean arrays) y cálculo de medias con `.mean()` [2, 11, 14].
    *   *Pandas (DataFrames)*: Carga de archivos físicos (`pd.read_csv()`) utilizando el dataset de Game of Thrones `got_1.csv` [194, 216], indexación con `.loc[]` e `.iloc[]` [11, 32], filtrado condicional compuesto empleando operadores a nivel de bits (`&`, `|`) y el método `.isin()` [223, 224], y modificación de tablas (setear índices con `.set_index()`, renombrar índices/columnas con `.rename()`, y eliminar columnas/filas con `.drop(columns=...)`) [224, 225].
    *   *NumPy*: Respaldo de arrays multidimensionales en Series de Pandas (`ndarray`) [4], definición de valores nulos lógicos (`np.nan`) [217] y operaciones vectoriales rápidas [15, 16].
    *   *Playwright*: Inicialización de navegadores síncronos con `sync_playwright` [100], lanzamiento de navegador Chromium [103], creación de nuevas páginas (`browser.new_page()`), redirección con `page.goto()` [102] y cierre obligatorio del navegador para liberar descriptores de sistema con `browser.close()` [100].
    *   *ReportLab (Platypus - Alto Nivel)*: Construcción de documentos basados en plantillas de flujo con `SimpleDocTemplate` [184], uso de tamaño de página estándar `A4`, inyección secuencial de elementos en el flujo (`story`), generación de texto estilizado automático mediante `Paragraph` y estilos predefinidos (`getSampleStyleSheet`, `ParagraphStyle`) [184], posicionamiento de imágenes de marca con `Image` [266], organización estructurada de cuadrículas de datos con `Table` y su clase de estilos dedicados `TableStyle` [184], control de espaciados con `Spacer`, y compilación física final mediante el método `.build()` [184].
*   **ÚTILES (Introducción conceptual/Teórica)**:
    *   *BeautifulSoup*: Carga de árboles de parseo HTML y extracción de textos e identificadores en páginas estáticas [183]. (Uso conceptual debido a la falta de código práctico de BeautifulSoup en las fuentes del notebook).
*   **AMPLIACIÓN (Conocimiento complementario o avanzado)**:
    *   *ReportLab (Canvas - Bajo Nivel)*: El objeto lienzo a bajo nivel `canvas.Canvas` [184] para el posicionamiento físico milimétrico de elementos mediante coordenadas fijas `X, Y` en la hoja (métodos `drawString()`, `line()`, `rect()`, `setFont()`, `save()`, etc.), entendiéndose como conocimiento secundario y no obligatorio en las evaluaciones [184].
*   **LAGUNAS DE CONOCIMIENTO (Sin código explicativo en las fuentes)**:
    *   *Pandas*: Operaciones de fusión de datos complejas (`pd.merge()` o `.join()`), y agrupamientos tabulares dinámicos avanzados (`.groupby()`) [1].
    *   *NumPy*: Funciones específicas de álgebra lineal o transformaciones matemáticas avanzadas.
    *   *BeautifulSoup*: Atributos sintácticos específicos del código (como el parámetro `class_` de búsqueda, o métodos de parseo de árboles complejos).
    *   *Matplotlib*: El notebook importa la librería `matplotlib.pyplot as plt` [2] pero carece de código o explicaciones para renderizar gráficos físicos.

---

## 4. LA PROGRESIÓN DE VALOR EN EL BLOQUE 5 (EL HILO CONDUCTOR)

Para evitar que el estudiante aprenda las librerías de forma aislada, el bloque se articula bajo la metodología de un **Único Hilo Conductor de Ingeniería de Datos**:

1.  **Fase 1: Adquisición**: El alumno aprende a lanzar un script automatizado con **Playwright** que abre el navegador e interactúa con una página de mercado para extraer los textos y precios de oferta [100, 102], cerrando de forma limpia los recursos con `browser.close()` [100].
2.  **Fase 2: Tratamiento**: Los precios extraídos se cargan en arrays de **NumPy** para convertirlos a formato numérico real, controlando la presencia de vacíos (`np.nan`) [217] y calculando estadísticas del mercado (medias lógicas) [14].
3.  **Fase 3: Análisis (Grounded)**: Para aprender a operar tablas complejas en Pandas, el alumno trabaja de forma aislada con un dataset real de las fuentes: la popularidad de los personajes de **Game of Thrones (`got_1.csv`)** [194, 216]. Aquí aprende indexación, filtrado Compuesto (`&`, `|`, `.isin()`) [223, 224] y reestructuración de esquemas (`set_index`, `drop`) [224, 225]. Una vez asimilada la técnica, aplica esta lógica para ordenar y cruzar sus tablas de precios del mercado de hardware en el proyecto SAMI-Applied.
4.  **Fase 4: Reporte**: El alumno aprende a maquetar y estructurar la información recopilada y procesada, inyectándola de forma secuencial en una plantilla de alto nivel (Platypus) de **ReportLab** para dar salida a un PDF profesional [184].

---

## 5. DESARROLLO INSTRUCCIONAL DE LIBRERÍAS (APRENDER HACIENDO)

Esta fuente desarrolla la parte de ReportLab; para NumPy, Pandas y Playwright consulta las prácticas actuales enlazadas desde [04](../04-PRACTICAS-Y-APOYOS.md). No se presenta como manual completo de las cuatro librerías.

### PARTE 5.4: Generación de Reportes en PDF con ReportLab (Platypus - Alto Nivel)
*   **CONCEPTO**: ReportLab proporciona las utilidades y clases lógicas para maquetar, estructurar y exportar programáticamente documentos PDF con diseño y formato profesional a partir de código de Python [184]. Para maximizar la productividad y garantizar un diseño limpio sin lidiar con coordenadas fijas complejas, se prioriza el uso de la API de alto nivel **PLATYPUS (Page Layout and Typography Using Scripts)** [184]:
    *   `SimpleDocTemplate`: Clase plantilla que define las dimensiones globales de la hoja (A4, carta), los márgenes físicos y actúa como el contenedor del flujo de elementos [184].
    *   `Paragraph`: Representa un bloque de texto que autoajusta sus líneas según el espacio horizontal disponible de forma automática, aplicando estilos predefinidos o personalizados (`getSampleStyleSheet`, `ParagraphStyle`) [184].
    *   `Image`: Inserta imágenes o logotipos en el flujo del documento [266].
    *   `Table` y `TableStyle`: Permite estructurar rejillas de datos alineados por filas y columnas, aplicando de forma estructurada colores, bordes y estilos estéticos mediante comandos de formateo [184].
    *   `Spacer`: Genera espaciadores de seguridad para dar aire visual al diseño.
    *   `.build()`: Compila físicamente los elementos apilados en la lista (`story`), generando el archivo PDF definitivo en el disco [184].

#### → EJEMPLO PROCEDENTE DE LAS FUENTES
*   **Creación de un documento de flujo con Platypus** (Extracted from reportlab invoices and open guides [184, 266]):
    ```python
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
    from reportlab.lib.styles import getSampleStyleSheet
    from reportlab.lib import colors
    from reportlab.lib.pagesizes import A4

    # 1. Inicializar la plantilla de documento con tamaño A4
    doc = SimpleDocTemplate("factura_ejemplo.pdf", pagesize=A4, rightMargin=30, leftMargin=30, topMargin=30, bottomMargin=30)
    story = []  # Lista que contendrá el flujo secuencial de elementos

    # 2. Configurar estilos de texto predefinidos
    styles = getSampleStyleSheet()
    estilo_titulo = styles['Heading1']

    # 3. Insertar elementos en el flujo
    story.append(Paragraph("FACTURA COMERCIAL", estilo_titulo))
    story.append(Spacer(1, 15))  # Espacio de 15 puntos

    # 4. Compilar físicamente el archivo PDF en el disco de trabajo
    doc.build(story)
    ```

#### → PRÁCTICA: "Generador Automático de Facturas en PDF"
*   **Objetivo**: Desarrollar de manera secuencial y limpia un script en Python que parta de datos estructurados para compilar y generar la factura física `"factura_2027_001.pdf"` utilizando exclusivamente la API Platypus de ReportLab, sin obligar al alumno a utilizar la POO avanzada del Bloque 4 salvo que desee reutilizarla como valor añadido opcional.
*   **Prerrequisitos**: Bloque 1 (Operaciones y cálculo), Bloque 2 (Colecciones de diccionarios) y Bloque 3 (Encapsulación en funciones).
*   **Ejemplo de Datos de Entrada**:
    ```python
    # Datos de entrada estructurados
    empresa_datos = {"nombre": "TechSolutions S.L.", "direccion": "Av. del Futuro 2027, Madrid", "nif": "B-12345678"}
    cliente_datos = {"nombre": "Estudios Avanzados S.A.", "direccion": "Paseo de la Castellana 50, Madrid"}
    num_factura = "FACT-2027-001"
    fecha_factura = "26/08/2026"

    # Líneas de factura representadas como una lista de diccionarios lógicos
    conceptos = [
        {"descripcion": "Suscripción Premium Plataforma", "cantidad": 2, "precio": 45.0},
        {"descripcion": "Soporte Técnico Especializado", "cantidad": 1, "precio": 90.0},
        {"descripcion": "Licencia Adicional Desarrollo", "cantidad": 5, "precio": 20.0}
    ]
    ```
*   **Flujo de Desarrollo Requerido**:
    1.  **Cálculos**: Iterar la colección de conceptos para calcular la base imponible sumando los subtotales (cantidad * precio), aplicar la tasa impositiva del IVA del 21% sobre la base imponible y computar el importe total final.
    2.  **Estructura del PDF**: Inicializar la plantilla `SimpleDocTemplate` apuntando a `"factura_2027_001.pdf"` en tamaño `A4`.
    3.  **Maquetación**:
        *   Crear párrafos estilizados con `Paragraph` para los datos de la empresa, número de factura, fecha y datos del cliente.
        *   Utilizar `Spacer` para separar de forma limpia las secciones.
        *   Estructurar una rejilla utilizando la clase `Table` que represente la cuadrícula de artículos adquiridos. La tabla se alimenta de una lista de listas de strings, conteniendo cabeceras (`"Descripción"`, `"Cant."`, `"Precio"`, `"Subtotal"`), las líneas calculadas de los productos, y filas finales dedicadas a mostrar la base imponible, el IVA y el total acumulado.
        *   Aplicar un diseño visual sobrio y corporativo a la cuadrícula de datos utilizando comandos de `TableStyle` (ej. bordes de rejilla con `GRID`, fondos de cabecera con `BACKGROUND` en tonalidades grises o azules de la paleta de `colors`, y alineaciones numéricas de precios a la derecha con `ALIGN`).
        *   Compilar y exportar físicamente la factura llamando al método `.build(story)`.

#### → ERROR HABITUAL (BUG)
*   **El bug del desbordamiento de margen lateral por strings crudos**: Asumir que la clase `Table` realiza de forma nativa la envoltura de textos largos de las celdas, inyectando cadenas de texto (`str`) muy largas directamente en las filas. Esto provoca que el texto se dibuje en una sola línea horizontal continua, desbordando y recortándose fuera de los límites de la página imprimible del PDF.
*   **Solución pedagógica**: Enseñar al alumno que para que las celdas de una tabla de ReportLab autoajusten el ancho de línea y realicen saltos automáticos, todas las cadenas de texto dinámicas o largas deben ir encapsuladas dentro de objetos `Paragraph` configurados con un estilo válido antes de pasarse a la tabla.

#### → MINI-RETO
*   **La Factura Express**: Toma la base del script de factura anterior. Modifica la lógica para que el script aplique de forma condicional un descuento del 10% sobre la base imponible total si la compra supera los 150.0€ antes de calcular el IVA, reflejando de forma visible el concepto de descuento y el subtotal resultante en filas separadas dentro de la tabla del PDF.

#### → MICROEVALUACIONES TIPO SOLOLEARN
*   **Pregunta 1 (Decisión de Elemento - Imagen)**: Deseas incorporar el logotipo gráfico en formato de imagen JPEG de tu empresa en el encabezado de tu factura comercial utilizando la API de alto nivel Platypus de ReportLab. ¿Qué clase lógica del framework debes instanciar para insertar la imagen de manera fluida en la story del documento?
    *   A) `canvas.drawImage()`
    *   B) `Paragraph`
    *   C) `Image` (importada de `reportlab.platypus`)
    *   D) `SimpleDocTemplate`
    *   *Respuesta*: **C**. (En el diseño de alto nivel Platypus, todos los elementos de flujo que se apilan secuencialmente en la lista `story` deben ser Flowables. La clase `Image` es el flowable dedicado a posicionar imágenes de forma nativa en la story, a diferencia de `canvas.drawImage()` que es un método imperativo de bajo nivel que requiere coordenadas fijas).

*   **Pregunta 2 (Propósito de Paragraph)**: Al diseñar tu reporte ejecutivo en PDF con ReportLab, notas que un texto largo descriptivo se desborda horizontalmente y se corta en el margen derecho de la hoja. ¿Cuál es la solución de ingeniería correcta para asegurar el autoajuste de líneas?
    *   A) Dividir manualmente la cadena de texto en múltiples subcadenas cortas usando barras inclinadas `\n` y rellenando con espacios.
    *   B) Envolver la cadena de caracteres en una instancia de la clase `Paragraph` provista de un estilo del sistema, permitiendo que Platypus calcule de forma dinámica el ancho de página y aplique los saltos de línea automáticos.
    *   C) Cambiar el tamaño de la página de `A4` a un tamaño personalizado de ancho infinito.
    *   D) Utilizar la clase `Table` forzando que tenga una sola celda.
    *   *Respuesta*: **B**. (La clase `Paragraph` de Platypus se encarga de analizar las propiedades tipográficas, márgenes y estilos para realizar la envoltura de línea y salto automático de manera nativa).

*   **Pregunta 3 (Decisión de Estructura de Datos)**: Para representar las múltiples líneas de conceptos de una factura comercial de manera que podamos iterarlas de forma secuencial y limpia para calcular los subtotales e inyectarlas dinámicamente en una tabla de ReportLab, ¿cuál es la estructura de datos nativa de Python idónea?
    *   A) Un string largo con todas las descripciones separadas por comas.
    *   B) Una lista de diccionarios, donde cada diccionario representa un concepto con claves `'descripcion'`, `'cantidad'` y `'precio'`.
    *   C) Un único conjunto (`set`) que contenga los precios de forma desordenada.
    *   D) Una variable de tipo flotante global.
    *   *Respuesta*: **B**. (La lista mantiene el orden secuencial de inserción de los elementos de facturación, mientras que los diccionarios internos permiten etiquetar e identificar de forma semántica y robusta cada atributo de la línea de artículo de manera estructurada).

#### → EVIDENCIA
*   Archivo de salida físico `"factura_2027_001.pdf"` generado dinámicamente en el espacio de trabajo local del estudiante mediante un script de Platypus que consume datos estructurados, calcula los subtotales e impuestos, y compila una maquetación impecable con logotipo, datos de cliente y una cuadrícula de precios perfectamente alineada.

---

## 6. ERRORES HABITUALES COMPILADOS DEL BLOQUE 5 (BUGS)

1.  **Fuga de procesos de Chromium en Playwright**: No cerrar el navegador con `browser.close()` [100], dejando subprocesos binarios activos en segundo plano que saturan la memoria RAM del sistema.
2.  **Uso de comparadores lógicos nativos en Pandas**: Intentar realizar filtrados condicionales con `and` / `or` en lugar de utilizar de forma obligatoria los operadores vectoriales a nivel de bits `&` / `|` y acotar las condiciones individuales entre paréntesis `()` [229].
3.  **Ambigüedad de Slicing**: Hacer segmentaciones directas del tipo `df[1:3]` que confunden al compilador, en lugar de utilizar las llamadas explícitas recomendadas `.loc[]` (etiquetas) o `.iloc[]` (posiciones numéricas) [33].
4.  **Cálculo estadístico de NaNs en NumPy**: Ejecutar operaciones de agregación matemática (`.mean()`) sobre arrays que contienen valores `np.nan` [217], resultando en un colapso del promedio que devuelve `nan` como salida.
5.  **Desbordamiento de celdas en ReportLab**: Pintar cadenas de texto largas de forma cruda dentro de tablas, desbordando los márgenes laterales del archivo PDF por omitir la envoltura automatizada del objeto `Paragraph`.

---

## 7. DISEÑO HISTÓRICO DEL PROYECTO INTEGRADOR B5

### "SAMI-Applied: El Sistema de Adquisición, Análisis y Generación Automatizada de Informes de Mercado"

*   **Objetivo de Aprendizaje**: Integrar todas las competencias técnicas adquiridas en los Bloques 1 al 5 en un software unificado local, demostrando la capacidad de programar de forma modular flujos complejos de extracción automatizada de datos (Playwright) [100], procesamiento lógico numérico rápido (NumPy) [4, 15], estructuración y filtrado avanzado de tablas de datos comerciales en Pandas [1, 2], y maquetación de entregables comerciales en PDF (ReportLab) [184].

#### 1. Coherencia de Datos y Aislamiento del Dataset GOT
Para salvaguardar la coherencia de datos del proyecto integrado, se elimina por completo el dataset de Game of Thrones `got_1.csv` de la tubería (pipeline) de SAMI-Applied. Las prácticas y evaluaciones con `got_1.csv` se mantienen en la Parte 5.2 como un excelente recurso grounded para asimilar la indexación y filtros de Pandas [222, 223], pero el proyecto **SAMI-Applied opera única y exclusivamente con un dataset lógico de negocio: Datos de Precios y Stock de Mercado de Componentes de Hardware**.

#### 2. Arquitectura de Módulos de SAMI-Applied (Sin POO ni IA)
El proyecto se diseña dividiendo el programa en **4 scripts independientes** interconectados localmente:

##### A. Módulo Extractor (`scraper.py`)
Contiene la lógica de adquisición y control de navegadores:
*   `extraer_precios_competencia(url_mock)`: Abre una sesión síncrona con Playwright en modo headless [103, 106]. Navega a una URL local o simulada y extrae los datos de productos y precios en formato de strings [102, 105]. Cierra el navegador de forma obligatoria con `browser.close()` [100] y retorna la lista limpia de registros. (La extracción de datos BeautifulSoup se mantiene como concepto opcional y separado para evitar forzar ambas librerías si el scraping se resuelve síncronamente por Playwright) [183].

##### B. Módulo Analizador (`analizador.py`)
Contiene la lógica matemática y de tablas utilizando NumPy y Pandas:
*   `procesar_tabla_precios(datos_sucios)`:
    *   Carga la información en un DataFrame de **Pandas** [2].
    *   Convierte la columna `"ID_Articulo"` en el índice de la tabla utilizando `.set_index("ID_Articulo")` [224].
    *   Normaliza los precios eliminando símbolos y convirtiéndolos a flotante mediante operaciones vectoriales [15].
    *   Maneja los valores nulos reemplazando posibles celdas vacías (`np.nan`) de forma controlada mediante las funciones de Pandas o NumPy [217].
    *   Aplica un filtro condicional booleano compuesto empleando operadores vectoriales (`&` o `|`) para aislar únicamente a los componentes que se encuentren activos y superen un margen mínimo de rentabilidad [223].
    *   Convierte la columna de precios finales a un array de **NumPy** (`ndarray`) para calcular con funciones de agregación: la media aritmética del mercado, el precio máximo y la desviación estándar para identificar outliers [4, 14, 15].
    *   Retorna el DataFrame final depurado y el reporte de promedios calculado.

##### C. Módulo Diseñador (`generador_pdf.py`)
Contiene la lógica de reporte en PDF:
*   `compilar_reporte_ejecutivo_pdf(ruta_pdf, df_analizado, promedios)`:
    *   Inicializa un documento PDF utilizando Platypus de **ReportLab** (`SimpleDocTemplate` con tamaño de página `A4`) [184].
    *   Organiza un encabezado formal (`Paragraph`) y diseña la cuadrícula que alojará la tabla (`Table` y `TableStyle`) con las columnas del DataFrame de Pandas procesado.
    *   Inserta de forma limpia las estadísticas calculadas en NumPy (promedio del mercado, variación, desviación) al pie de página mediante párrafos estilizados.
    *   Exporta el archivo de salida final ejecutando `.build(story)` al disco de trabajo [184].

##### D. Orquestador Principal (`main.py`)
*   Script principal de comandos CLI interconectado con los tres módulos anteriores [66].
*   Carga los parámetros impositivos y umbrales JSON iniciales de la sesión de auditoría [66].
*   Inicia el flujo síncrono completo: ejecuta la extracción con `scraper.py`, procesa y analiza la información de mercado con `analizador.py` y compila de forma directa el reporte ejecutivo comercial `reporte_final_sami.pdf`.
*   Toda la interacción de comandos de consola del usuario se blinda ante ingresos inválidos empleando bloques `try-except` de excepciones específicas (`ValueError`, `TypeError`) para guardar las trazas a un log de auditoría en disco sin abortar el flujo del programa [159].

#### 3. Criterios de Evaluación del Proyecto
*   Ejecución completa y libre de errores desde la terminal local.
*   Diseño modular limpio del proyecto dividido en archivos independientes.
*   Cierre riguroso de procesos en Playwright mediante `browser.close()` [100].
*   Estructuración perfecta de filtros compuestos y operaciones en Pandas [223].
*   Coherencia lógica de los datos de precios analizados en NumPy [15].
*   Diseño de layout estético y justificado del PDF generado.

---

## 8. TRAZABILIDAD DE INGENIERÍA DEL CONOCIMIENTO (BLOQUE 5)

| Concepto Técnico del Bloque 5 | Documento de la Fuente Oficial | Práctica Asociada del Itinerario | Microevaluación de Validación (SoloLearn) | Proyecto Integrador (SAMI-Applied) |
| :--- | :--- | :--- | :--- | :--- |
| **Arrays, operaciones vectoriales y NaN** | `02_pandas.ipynb` [4, 16] y `ejercicios_pandas_resuelto.ipynb` [217] | Conversión de listas a ndarrays y cálculo de promedios lógicos en Colab [4, 16]. | Reto SoloLearn 1 de predecir la salida de un filtro condicional booleano en array. | NumPy ndarray y cálculo de medias de precios en `analizador.py`. |
| **Carga de CSV, DataFrame y Series** | `02_pandas.ipynb` [2, 19] y `ejercicios_pandas_resuelto.ipynb` [222] | Cargar e inicializar tablas y Series de población y GOT en Colab [2, 222]. | Reto SoloLearn de identificar el tipo de dato devuelto al consultar la serie indexada. | Carga de tabla de ofertas de mercado de hardware usando Pandas. |
| **Indexación y Selección (loc / iloc)** | `02_pandas.ipynb` [11, 32] y `ejercicios_pandas_resuelto.ipynb` [217] | Selección por etiquetas geográficas y posiciones de personajes de GOT [11]. | Reto SoloLearn de predecir la fila obtenida mediante acceso posicional con `.iloc` [308]. | Indexación por `ID_Articulo` con `.set_index()` y accesos `.loc[]`. |
| **Filtrado Condicional Compuesto (&, isin)**| `ejercicios_pandas_resuelto.ipynb` [223, 224] | Aislamiento de personajes vivos de casas específicas utilizando filtros compuestos [223].| Reto de localizar el error sintáctico por uso de la directiva `and` en filtros compuestos [229]. | Filtrado compuesto de ofertas activas y rentables en el DataFrame de Pandas. |
| **Modificación de esquemas (set_index, drop)**| `02_pandas.ipynb` [37, 38] y `ejercicios_pandas_resuelto.ipynb` [224, 225]| Reestructuración y borrado de columnas y personajes fallecidos de la tabla [225]. | Reto de identificar el comportamiento lógico del DataFrame según el parámetro `inplace` [315]. | Eliminación de columnas obsoletas de stock y seteo del índice por artículo. |
| **Navegación e interacciones Playwright**| `Installation \| Playwright Python` [11, 100, 102] | Creación de scripts locales síncronos de navegación y test de aserciones [102]. | Reto SoloLearn de completar selectores y aserciones de locators de Playwright [102]. | Extracción de precios y estados de stock en `scraper.py` con Playwright. |
| **Parsing con BeautifulSoup** | Referencia conceptual del diseño original. | No se establece una práctica obligatoria. | No exigir sintaxis de `class_` no desarrollada en los materiales. | Concepto secundario, fuera del flujo práctico de SAMI-Applied. |
| **Compilación dinámica de PDFs ReportLab**| `reportlab · PyPI` [266] y `Reporte de Investigación` [15, 184] | Maquetación y exportación programática de tablas y facturas en formato PDF [15]. | Decisiones prácticas sobre `Image`, `Paragraph`, `Table`, `TableStyle` y `build()` en Platypus. | Generación real del informe de mercado estructurado con ReportLab Platypus en `generador_pdf.py`. |

---

## 9. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 5)

De acuerdo con el análisis exhaustivo de los materiales de tu base de conocimiento, se identifican las siguientes áreas técnicas de las librerías científicas y de automatización que **no se encuentran documentadas de forma técnica o práctica en las fuentes**, declarándose formalmente como lagunas en este bloque:

1.  **Fusión avanzada de conjuntos de datos en Pandas (Merge, Join)**: Las fuentes mencionan que Pandas permite fusionar e integrar tablas de datos [1], pero **no proveen sintaxis ni ejemplos prácticos sobre el uso de funciones críticas como `pd.merge()` o `.join()`** para cruzar DataFrames relacionales.
2.  **Agrupaciones y Pivotajes avanzados (Groupby, Pivot)**: Se cita como fortaleza la agrupación de datos en Pandas [1], pero las fuentes del notebook **carecen por completo de manuales o código de uso de la función `.groupby()`** y operaciones de agregación complejas de DataFrames.
3.  **Visualización Científica con Matplotlib**: Las fuentes muestran de forma explícita que se importa la librería `matplotlib.pyplot as plt` [2] y se menciona para tomar decisiones visuales [115], pero **no hay documentación técnica, APIs de gráficos de barras o líneas, ni fragmentos de código para renderizar plots físicos** en todo el notebook (por lo que la creación de gráficos se excluye de las evaluaciones).
4.  **Uso de la herramienta Trace Viewer de Playwright**: Se lista en el reporte como herramienta de depuración de automatizaciones ante fallos [104], pero **no existen ejemplos del flujo de comandos para inicializar, grabar o inspeccionar trazas** visuales en las fuentes del notebook.
5.  **Manejo Avanzado de Estilos de Párrafos y Platypus en ReportLab**: Se cita ReportLab como herramienta estándar para generar PDFs de alta calidad [184], pero **no se incluye en las fuentes un manual técnico sobre la clase `ParagraphStyle`, hojas de estilo (`getSampleStyleSheet`) ni el control de flujo Platypus** para el diseño de páginas de varias páginas automatizadas complejas con múltiples marcos.
6.  **Operaciones Estadísticas Avanzadas de NumPy**: NumPy se declara como base matemática rápida [113, 182], pero **no se explican en las fuentes operaciones matriciales complejas (como álgebra lineal `.linalg`, multiplicaciones de matrices `.dot` o transformadas de Fourier)**, limitándose el alcance estrictamente a las funciones estadísticas básicas especificadas.

---

## 10. FUENTES DE AMPLIACIÓN RECOMENDADAS (BLOQUE 5)

Para suplir con total rigor las lagunas de conocimiento detectadas y enriquecer la experiencia formativa del alumno en el ecosistema aplicado de Python, se conservan como posibles ampliaciones para el docente los siguientes recursos, sin incorporarlos al currículo ni exigirlos:

1.  **Pandas User Guide - Groupby, Merge and Reshaping**: Para documentar con ejemplos las agrupaciones tabulares `df.groupby()`, sumas agregadas complejas y fusiones de múltiples archivos CSV utilizando `pd.merge()`.
2.  **Matplotlib Pyplot Tutorial**: Para incorporar lecciones prácticas sobre cómo generar gráficos estadísticos vectoriales (histogramas, diagramas de dispersión y series temporales) a partir de DataFrames de Pandas.
3.  **ReportLab Platypus User Guide**: Para detallar la creación avanzada de estilos de párrafos, encabezados automatizados, números de páginas dinámicos y la estructuración de documentos extensos de varias hojas sin desbordamiento de celdas.
4.  **Playwright Trace Viewer Guide**: Para instruir al estudiante en el uso de la terminal de comandos para depurar scrapers complejos visualizando el paso a paso de sus interacciones web.
