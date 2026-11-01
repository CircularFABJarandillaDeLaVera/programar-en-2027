# ESTADO — Programar en 2027

Actualizado: 2026-11-01. Fuentes canónicas: ver `AGENTS.md`.

## Microfase 1 — entrada común y dos rutas

### Comprobado ahora

- Se actualizaron únicamente los siete índices autorizados: la portada, el índice del Recorrido práctico y los índices B3–B7.
- La portada ofrece `Empieza por aquí`, una Ruta A para crear proyectos con agentes y una Ruta B para aprender programación con Python. Ambas sitúan los proyectos aplicados de B3, B4 y B5 y continúan hacia B6 y B7.
- B3–B5 muestran los nombres públicos acordados sin renombrar archivos técnicos, cuadernos, ZIP ni PDF.
- B6 presenta sus seis experiencias reales como entrada y enlaza, desde EXP-01, la descarga existente `proyecto-b6-entorno-control.zip`.
- B7 conserva sus materiales actuales y marca LangGraph como ampliación en desarrollo, no como requisito obligatorio.
- El Laboratorio se presenta como `Recorrido práctico · Construye y conecta tus proyectos`, con acceso libre posterior y seis etapas descriptivas; no se han eliminado sus recursos.
- Se conservaron sin tocar los cambios no seguidos de `Cambios_portada_2027/`.

### Evidencia y límites

- Se revisaron 176 referencias locales de los siete índices: 0 destinos ausentes.
- `python scripts/verificar.py`: JSON 17/17 correcto, sintaxis Python 53/53 correcta y 52 rutas generales correctas. Las suites no se ejecutaron porque `pytest` no está disponible.
- Se hizo revisión visual con Chrome de la portada en escritorio y móvil, sin comparar píxeles con el curso de prueba de EduSDK. La aceptación final de las cuatro combinaciones claro/oscuro y de la lectura en dispositivos reales queda pendiente de revisión humana.
- No se ejecutaron los proyectos ni se validaron ZIP, cuadernos, PDF o dependencias; su sincronización queda fuera de esta microfase.

### Siguiente paso

- Revisar con personas la elección de ruta y, si procede, encargar la microfase 2 para B3. No hacer todavía cambios de proyectos, descargas o materiales de apoyo.

## Comprobado ahora

- Rama: `main`; commit de partida: `a324b34`.
- El árbol contiene cambios sin commit. `.gitignore` ya estaba modificado al iniciar esta intervención.
- El miniarnés existe en `scripts/verificar.py` y su plantilla en `plantillas/INFORME-VALIDACION.md`.
- Hay pruebas versionadas en los proyectos de B7 y comprobadores específicos en B5 y B7.

## Pendiente

- Ejecutar de nuevo el miniarnés en un entorno Python disponible y registrar un resultado actual.
- Acordar qué proyectos y dependencias forman parte de su alcance antes del piloto.
- No se considera vigente ningún resultado de pruebas que no proceda de una nueva ejecución.

## Microfase 2 — Proyecto aplicado 1 · Calcula y guarda precios

### Comprobado ahora

- Se revisaron por separado la fuente docente `bloques/bloque3/recursos/proyecto/`, la copia de trabajo `bloques/bloque3/proyecto-sami-lite/` y el ZIP público `bloques/bloque3/proyecto-b3-sami-lite.zip` antes de sincronizar.
- La base elegida conserva las funciones útiles de la fuente, incluida `comprobar_transaccion`, y mantiene la guardia de `main.py` para que importar sus funciones no arranque el menú.
- La copia descargable y el ZIP contienen exactamente `analizador.py`, `main.py`, `persistencia.py` y `README_PROYECTO.md`; la extracción limpia coincide por hash con la copia de trabajo.
- B3 explica la descarga, la carpeta que debe abrirse, los requisitos de Python 3, el comando `python main.py`, el resultado esperado con `50`, los errores, los archivos generados y el siguiente paso.
- La guía web y el README incluyen el paso `Convierte tu programa en una aplicación con ventana`, el prompt de Tkinter y sus comprobaciones. La interfaz no se entrega terminada.
- La sección `Elige cómo trabajar este bloque` de B3 separa las rutas de agentes y Python sin numeración consecutiva; ambas confluyen en el mismo Proyecto aplicado 1 y enlazan el paso visual y B4.
- Se amplió únicamente esta corrección de navegación a B4 y B5: cada bloque presenta las opciones `Crear proyectos con agentes` y `Aprender programación con Python`, mantiene sus ZIP y cuadernos reales, y cierra en el siguiente bloque.
- En una extracción limpia se ejecutó con Python 3.12: compilación, importación sin arrancar el menú, flujo normal (`50` → `60.5`), entrada no numérica con registro de error, precio `0` aceptado según la regla actual y `comprobar_transaccion` con resultados `True` y `False`.
- En una extracción limpia se comprobó también `-10`: el resultado real es `-12.1 - PRECIO_NORMAL` con IVA del 21 %, se registra en el CSV y no se rechaza. La regla permanece sin cambios.
- Fuentes del ZIP: `analizador.py`, `main.py` y `persistencia.py` proceden de `bloques/bloque3/recursos/proyecto/` y se construyen desde la copia alineada `bloques/bloque3/proyecto-sami-lite/`; `README_PROYECTO.md` tiene como fuente canónica esa misma copia de trabajo. Los cuatro archivos extraídos coinciden por SHA-256 con sus fuentes correspondientes.

### Evidencia y límites

- `scripts/verificar.py`: JSON 17/17 correcto, sintaxis Python 53/53 correcta y 52 rutas revisadas; las suites no se ejecutaron porque `pytest` no está disponible. El verificador se ejecutó con Python 3.12 explícito porque el alias `py` del sistema apunta a un intérprete de Windows Store no utilizable.
- No se corrigieron silenciosamente los precios `0` o negativos: siguen aceptándose y cualquier rechazo será un cambio funcional separado en la lógica compartida.
- No se generó ni se probó una ventana real: esa interfaz debe crearla el alumno desde la base de consola. Su aspecto, interacción, tabulación, limpieza, redimensionado y cierre quedan pendientes de revisión humana.
- No se ejecutaron suites de proyecto ni dependencias externas; no se instalaron dependencias.
- Se revisó la presentación en escritorio y móvil: las dos opciones y sus acciones se adaptan al ancho disponible. La captura móvil mantiene un desbordamiento horizontal preexistente del encabezado general de B3, fuera de esta sección y fuera de alcance.
- Se comprobó B3, B4 y B5 en capturas de escritorio y móvil tras la ampliación. No se trasladó a B4 ni B5 el paso visual de generar la ventana de B3 ni se revisaron sus códigos, ZIP o contenidos de microfases posteriores.
- Límite de cierre: la interfaz debe generarla el alumno desde la base de consola; no se entrega terminada.
- Límite de cierre: las suites con `pytest` siguen sin ejecutarse porque no está disponible en el entorno.
- Límite de cierre: los proyectos de B4 y B5 todavía no se han revisado; esta ampliación solo corrigió su navegación de entrada.

### Corrección responsive del encabezado

- Causa: en el breakpoint de 560 px, `cf-topbar` mantenía `display: flex` y su `gap` mientras `.block-brand`, `.block-nav`, los enlaces y `.theme-toggle` pasaban a ocupar el 100 %; el ancho de los elementos y los espacios se sumaban y desbordaban el viewport.
- Archivos afectados: `bloques/bloque1/bloque-theme.css` hasta `bloques/bloque7/bloque-theme.css`. En móvil, `.block-topbar` usa una columna grid, los hijos admiten `min-width: 0` y el texto de marca puede envolver. No se añadió `overflow-x: hidden` a `html` ni a `body`.
- Comprobado en Chrome a 390 px para B1–B7, en claro y oscuro: `documentWidth` y `bodyWidth` quedan en 390, sin desbordamiento; los textos y botones permanecen dentro del viewport. El enlace Inicio y el control de tema reciben foco por teclado; los controles conservan tamaños utilizables para interacción táctil en el viewport emulado.
- La comprobación táctil se realizó mediante viewport y geometría de controles en Chrome; no sustituye una prueba física en dispositivos reales.

### Siguiente paso

- La microfase 2 quedó aceptada y cerrada en `7f6ba1e`; la revisión de B4 se realiza ahora en su microfase autorizada.

## Microfase 3 — Proyecto aplicado 2 · Organiza productos con clases

### Comprobado ahora

- Se compararon la fuente docente `bloques/bloque4/recursos/proyecto/`, la copia de trabajo `bloques/bloque4/proyecto-sami-oop/` y `bloques/bloque4/proyecto-b4-sami-oop.zip` antes de sincronizar.
- `analizador.py` y `persistencia.py` ya coincidían entre fuente, copia y ZIP. `main.py` tenía la misma lógica en fuente y copia, pero la fuente no protegía el arranque; se añadió la guardia `if __name__ == "__main__":` para alinear la fuente y permitir importar sin iniciar el menú.
- El ZIP se reconstruyó desde los cuatro archivos de `proyecto-sami-oop/` y la extracción limpia contiene exactamente `analizador.py`, `persistencia.py`, `main.py` y `README_PROYECTO.md`. Los cuatro coinciden por SHA-256 con sus fuentes correspondientes.
- La guía web y el README usan el nombre público `Proyecto aplicado 2 · Organiza productos con clases`, explican que es una continuación conceptual de B3 pero una base técnica nueva, y aclaran carpeta, requisitos, comando, resultados, errores y siguiente paso.
- Se documentaron las responsabilidades reales de `Producto`, `ProductoHardware`, `ProductoLicencia`, `AuditoriaMercado` y `ManejadorDatos`, con ejemplos concretos del reporte.
- El comportamiento inicial y el reto posterior quedaron separados: el precio negativo provoca `ValueError`; el peso `0` se acepta inicialmente y su validación queda como reto separado.

### Evidencia y límites

- En extracciones limpias con Python 3.12 se comprobó compilación, importación sin menú, flujo normal con Teclado y Suite (`229.8`, filas `96.8` y `133.0`), tipo desconocido registrado, precio `-5` registrado como error sin fila CSV y peso `0` aceptado (`96.8`).
- No se ejecutaron suites con `pytest`; no se instalaron dependencias.
- No se añadió interfaz gráfica ni funcionalidad nueva para ilustrar las clases.
- B5 no se ha revisado: esta microfase se limita a B4 y su seguimiento.
- La guía de B4 queda aceptada por el usuario para este punto de control.
- Las suites con `pytest` siguen sin ejecutarse; esta aceptación no las presenta como ejecutadas.

### Siguiente paso

- Revisar visualmente la guía B4 y el README/ZIP extraído. No iniciar la microfase 4 de B5 todavía.

## Microfase 4 — Proyecto aplicado 3 · Crea un informe PDF con tus datos

### Comprobado ahora

- Punto de partida confirmado: `d12e1f6` en `main`, con el tag `v2027-b4-m3`. El cierre de B4 ya estaba completado; no se mezclaron cambios de B5 con ese punto de control.
- Se revisaron antes de sincronizar las tres capas de B5: fuente técnica `bloques/bloque5/recursos/proyecto/`, copia descargable `bloques/bloque5/proyecto-sami-applied/` y `bloques/bloque5/proyecto-b5-sami-applied.zip`. La copia tenía una localización de logo tolerante a carpetas y una guardia de entrada en `main.py`; se conservaron esas funciones útiles y se alineó la fuente con ellas. `scraper.py` permanece como material de autor opcional y no entra en el ZIP.
- El ZIP se reconstruyó desde la copia descargable. La extracción limpia contiene `main.py`, `analizador.py`, `generador_informe.py`, `datos_hardware.csv`, `requirements.txt`, `comprobar.py` y `README_PROYECTO.md`; los siete archivos coinciden por SHA-256 con la copia descargable.
- B5 es una base nueva y autónoma: no necesita los archivos de B3 ni B4. `datos_hardware.csv` es el ejemplo independiente del proyecto; `got_1.csv` queda limitado al cuaderno de Pandas y no se mezcla con el análisis de hardware.
- El nombre público es `Proyecto aplicado 3 · Crea un informe PDF con tus datos`. La guía, el README, el comprobador y el código usan `informe_productos.pdf`. Playwright queda fuera del flujo de generación desde CSV y no es requisito.
- Se documentaron carpeta, Python 3, instalación con `python -m pip install -r requirements.txt`, comando `python main.py`, entrada, salida, cifras esperadas (4 ofertas válidas, precio medio 147.35 EUR y stock total 26), errores de CSV y siguiente paso. No se cambiaron las reglas de filtrado ni se añadieron funciones de análisis.
- En extracción limpia se ejecutó `py_compile` sin errores y el comprobador confirmó el CSV de ejemplo con 6 filas. Los casos de CSV ausente y CSV vacío produjeron errores claros en el comprobador.
- En un entorno virtual temporal se instalaron exactamente las dependencias declaradas (`pandas 3.1.0`, `numpy 2.5.4` y `reportlab 5.1.0`); el Python global no se modificó y Playwright no se instaló.
- Desde esa extracción limpia, `main.py` terminó con código 0 y produjo `informe_productos.pdf`. `comprobar.py` terminó con `COMPROBACION SUPERADA` y confirmó 4 ofertas y precio medio 147.35.
- El contraste de las seis filas confirmó que `RAM-02` (stock 0) y `CASE-06` (activo `no`) quedan fuera; las cuatro restantes producen precio medio 147.35 EUR, mínimo 72.90 EUR, máximo 249.00 EUR y stock total 26.
- Se probaron de forma real CSV ausente (`FileNotFoundError`), vacío (`EmptyDataError`) e inválido con precio no numérico (`TypeError`).
- La extracción textual del PDF generado encontró título, resumen, los cinco indicadores, las cuatro filas válidas y la conclusión. El PDF tiene una sola página A4; la inspección geométrica del contenido mantiene las tablas y textos dentro de los márgenes, sin coordenadas recortadas.

### Evidencia y límites

- La revisión visual directa mediante el renderizador PDF disponible no pudo completarse: Chrome produjo una captura vacía y LibreOffice no exportó una imagen. Por ello, la legibilidad visual queda pendiente de revisión humana en un visor PDF; no se declara superada por la inspección textual o geométrica.
- No se ejecutaron suites con `pytest`. Esta microfase no incluye B6, EduSDK ni cambios ajenos; `Cambios_portada_2027/` se conserva sin incluir.

### Siguiente paso

- Abrir `http://localhost:8000/bloques/bloque5/inicio.html` con el servidor local del repositorio. La extracción limpia y el PDF generado durante esta validación están en `C:\Users\CIRCUL~1\AppData\Local\Temp\b5-m4-run-net-71c23d6e04d6408eb89374d085994080`; el archivo es `informe_productos.pdf`. La revisión humana final debe abrirlo en un visor PDF.

## Corrección transversal — nombres públicos de descargas B3–B5

### Comprobado ahora

- Las descargas públicas pasan a llamarse `proyecto-b3-calcula-precios.zip`, `proyecto-b4-productos-clases.zip` y `proyecto-b5-informe-productos.zip`. Los enlaces web con `download`, los README y las guías fuente usan esos nombres.
- Las tres copias mantienen sus carpetas técnicas (`proyecto-sami-lite`, `proyecto-sami-oop` y `proyecto-sami-applied`) para no cambiar comandos ni rutas internas. Ninguno de los ZIP tiene carpeta raíz: sus archivos se extraen directamente.
- Se regeneraron los tres ZIP desde sus copias descargables. Las extracciones limpias contienen, respectivamente, 4, 4 y 7 archivos; cada archivo coincide por SHA-256 con su copia. Los archivos Python también coinciden con las fuentes canónicas de `recursos/proyecto/`.
- Las etiquetas principales visibles de los datos y mapas B3–B5 usan ahora los nombres públicos. Las menciones SAMI que permanecen son referencias técnicas, de evolución o históricas; no se ofrecen como nombre principal de descarga.
- No se modificó código de ejecución ni comportamiento validado. El punto Git de B5 permanece en `d12e1f6` con `v2027-b4-m3`; no se reescribió el commit ni se movió el tag.

### Evidencia y límites

- JSON B3–B5 válido y `git diff --check` correcto. El verificador general mantiene `pytest` como no disponible/no ejecutado.
- Se conserva `Cambios_portada_2027/` sin incluir ni descartar.

## Microfase 5 — Herramientas para trabajar con tus proyectos

### Comprobado ahora

- Punto de partida confirmado: `21692d9` en `main`, con el tag `v2027-b5-m4`. Se revisaron las seis experiencias de B6, su guía rápida, prácticas, mapas, datos y proyecto base sin modificar EduSDK ni B7.
- El nombre público de B6 es `Herramientas para trabajar con tus proyectos`. Se sustituyeron nombres heredados en las entradas públicas por descripciones concretas, conservando `sami_local`, `generador_pdf.py` y otras rutas como identificadores técnicos o antecedentes.
- La base canónica es `bloques/bloque6/recursos/proyecto-seguro/`; `recursos/proyecto/sami_local/` se comprobó archivo a archivo y coincide por SHA-256. La descarga principal es `proyecto-b6-entorno-control.zip`, sin carpeta raíz; sus diez archivos coinciden con la fuente canónica y se extraen correctamente.
- EXP-01 explica crear una carpeta propia (`mi-proyecto-b6`), extraer allí el ZIP y abrir esa carpeta en VS Code. Las seis experiencias mantienen la misma copia, aclaran cuándo se reutiliza y describen el comando real `python main.py`, cuyo resultado es un resumen en consola; B6 no se presenta como una cuarta práctica aplicada ni promete generar un PDF.
- La base solo declara `pandas`, porque el flujo real usa esa dependencia. Playwright y ReportLab no son requisitos de inicio; el módulo técnico `generador_pdf.py` construye un resumen, no un archivo PDF.
- Se añadió un acceso contextual y opcional al recurso Docker del Laboratorio: requiere Docker Desktop instalado y en ejecución, con comprobaciones `docker --version` y `docker info`; no es necesario para empezar B6. También se distingue lo trabajado ahora de la profundización posterior en `Construye y conecta tus proyectos`.

### Evidencia y límites

- En una extracción limpia se comprobó la igualdad del ZIP con la fuente, la compilación de Python y la ejecución de `main.py` con salida normal: tres filas y resumen con `filas: 3` y `alertas: 1`. No se ejecutaron suites con `pytest`.
- El verificador del repositorio confirmó JSON válido, sintaxis Python y rutas; su resultado queda limitado por las pruebas `pytest` no ejecutadas/no disponibles. Docker no se ejecutó: solo se verificaron el recurso enlazado y sus requisitos documentados.
- Se revisaron B6 y las seis experiencias en escritorio y móvil (390 px), claro y oscuro, mediante servidor local. Tras el ajuste acotado de EXP-05, `documentElement.scrollWidth` y `body.scrollWidth` quedaron en 390 px, sin desbordamiento horizontal; los enlaces, control de tema y textos siguen accesibles.
- No se añadió interfaz, funcionalidad nueva ni se revisaron B7. `Cambios_portada_2027/` y los cambios ajenos permanecen fuera del alcance.

### Siguiente paso

- Abrir `http://localhost:8000/bloques/bloque6/inicio.html` para revisar la guía y sus seis experiencias. La microfase queda pendiente de cierre Git; no se ha hecho commit, tag, push ni publicación.

## Corrección de navegación B6 — pendiente de cierre

- En las seis experiencias, `Volver al bloque 6` apunta a `../../../inicio.html` y `Inicio del curso` a `../../../../../inicio.html`. En la portada de B6, `Inicio del curso` apunta a `../../inicio.html`; se conservaron las seis entradas a experiencias.
- Se sustituyeron los enlaces ambiguos `Inicio`/`Inicio B6` sin usar `history.back()`, enlaces a la propia página ni rutas absolutas de dominio. Las rutas son relativas y conservan el funcionamiento bajo una base como `/programar-en-2027/`.
- Mediante clics reales en servidor HTTP y navegador móvil a 390 px se verificó `curso → B6 → EXP-01 → B6 → curso`. También se abrió directamente EXP-04 y se comprobó `Volver al bloque 6` hasta la portada del bloque; el documento mantuvo 390 px de ancho.
- No se hizo commit ni tag.

## Histórico

- La antigua FASE 3 se realizó en la rama `feature/harness-python-2027` en septiembre de 2026.
- Sus recuentos de pruebas, fallos y elementos no verificados son evidencia histórica, no el estado actual del repositorio.
