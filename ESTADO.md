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

## Microfase 7 — agentes y procedimientos reutilizables en B7

### Resultado de la auditoría de la microfase 6

- Se confirmó el punto de partida `b8e4aa5` con `v2027-b6-m5`. B7 contiene seis experiencias y cuatro ZIP: arnés de bolsillo, repositorio de participantes, grafo LangGraph e IA bajo control.
- Las cuatro extracciones limpias coinciden por SHA-256 con sus fuentes canónicas, excluyendo únicamente `__pycache__` generados durante ejecuciones previas. Los ZIP son planos: no incluyen una carpeta raíz.
- La ejecución previa y la repetida en esta microfase dejaron el arnés en `3 APTO`, `2 NO_APTO` y `1 NO_VERIFICADO`; el repositorio de participantes en su estado inicial falla dos pruebas intencionadamente; IA-Control pasa 11 pruebas y funciona sin red; LangGraph pasa las reglas y nodos puros, pero omite el grafo por no estar instalada la dependencia.
- La auditoría separó el grafo sin LLM, la ampliación con IA y un sistema multiagente. No había un sistema multiagente implementado ni se da por validado LangGraph.

### Decisiones docentes aplicadas

- B7 reutiliza los proyectos existentes y no crea otra base de proyecto final.
- El cierre heredado se convierte en material opcional de evidencia y defensa sobre un proyecto ya ejecutado; no es obligatorio ni sustituye las seis experiencias.
- LangGraph queda como ampliación opcional pendiente de validación específica.
- No se presenta ningún sistema multiagente como implementado.
- La portada y la guía conectan con `Recorrido práctico · Construye y conecta tus proyectos` como continuación posterior y no obligatoria.
- La práctica mínima usa `agente-real`: petición acotada al agente habitual, especialización explícita solo si aporta responsabilidad y límites, procedimiento reutilizable, ejecución, contraste y decisión humana. Se distingue una guía Markdown de una `skill` reconocida por una herramienta.

### Cambios y comprobaciones de la microfase 7

- Se retiraron las referencias públicas a SAMI y sus variantes de las páginas, guías, prácticas, mapas, datos JS/JSON, mensajes y documentos vigentes de B7. El material de cierre se renombró a `cierre-b7.md` y la práctica a `practica-05-defensa-proyecto-b7.md`.
- Los nombres públicos describen la función real: arnés de bolsillo, repositorio de participantes, grafo de flujo opcional y explicaciones con IA bajo control. No se cambió el código de ejecución ni se presentó otra expansión de una sigla.
- Se añadió `recursos/guias/procedimiento-agente-reutilizable.md`, aplicado documentalmente al caso real de validación de edad de EXP-02, con responsabilidad, contexto, herramientas permitidas, límites, entradas, procedimiento, salida y verificación.
- Se corrigieron las instrucciones de extracción de EXP-01, EXP-02, EXP-05 y EXP-06: el alumno crea o elige la carpeta y extrae directamente los archivos del ZIP plano. Se sincronizaron los README de `agente-real`, `ia-control` y `langgraph-taller` con sus ZIP.
- Se añadieron accesos explícitos `Volver al bloque 7` e `Inicio del curso` en las seis experiencias y `Inicio del curso` en la portada. La portada enlaza también al Recorrido práctico.
- Se revisaron 178 enlaces locales de B7: ninguno apunta a una ruta inexistente; los cuatro enlaces de descarga existen.
- Desde extracciones limpias se ejecutaron `inventario_taller.py`, `comprobar.py`, las pruebas del repositorio de participantes, las 11 pruebas de IA-Control, sus casos sin IA y las pruebas de LangGraph. No se instalaron dependencias.

### Referencias retiradas y excepciones técnicas

- `SAMI` ya no aparece en los materiales de B7. Se conservan las carpetas técnicas de las fuentes (`agente-real`, `harness-bolsillo`, `ia-control`, `langgraph-taller`) porque son rutas internas del código y de la sincronización de ZIP; no se ofrecen como nombres pedagógicos principales.
- `copiloto-profesor/06-SAMI.md` conserva su nombre y contenido histórico para B3-B6. Su sección B7 y su enlace se actualizaron al material opcional `cierre-b7.md`; no se interpreta como retirada global del curso.
- Los identificadores de descarga `proyecto-b7-*.zip` no contienen SAMI y se conservan para compatibilidad con enlaces existentes.

### Límites y siguiente paso

- No se ejecutó la prueba completa del grafo LangGraph: la dependencia no estaba instalada y no se instaló. Ollama, `requests` en su ruta real y cualquier sistema multiagente siguen sin validarse.
- No se ejecutó un agente externo ni se usaron credenciales; la evidencia de intervención humana queda pendiente de la práctica del alumno. La revisión visual humana de B7 queda pendiente.
- No se implementaron las microfases 8–9, no se modificó EduSDK ni otros bloques y se conserva `Cambios_portada_2027/` fuera del alcance.
- Siguiente paso: revisar B7 en `http://localhost:8000/bloques/bloque7/inicio.html`, sus seis experiencias y el Recorrido práctico; después decidir si se autoriza la microfase 8.

## Histórico

## Microfase 8 — arnés funcional en B7 (pendiente de cierre)

### Cambios

- Se amplió EXP-01 para practicar el arnés funcional existente sobre una copia limpia: ejecución inicial, cambio controlado de una regla, detección del `NO_APTO` restante y corrección posterior.
- La guía explica la diferencia entre `APTO`, `NO_APTO` y `NO_VERIFICADO`, qué comprueba automáticamente `comprobar.py` y qué debe revisar y decidir la persona.
- Se actualizó `chuleta-harness.md` con el mismo procedimiento mínimo. No se añadió infraestructura, dependencia, interfaz ni arnés visual: el proyecto reutilizado es de consola y no tiene una interfaz real que comparar.

### Validación y límites

- Desde una extracción limpia del ZIP se ejecutó `python inventario_taller.py`: funcionó y mostró las cinco piezas y el total inicial `1010.0`.
- Desde esa extracción se ejecutó `python comprobar.py`: resultado inicial real `3 APTO`, `2 NO_APTO`, `1 NO_VERIFICADO`, con código de salida 1 por los dos criterios pendientes.
- En una copia temporal limpia se aplicó la secuencia documentada sin modificar el repositorio: tras corregir primero el descuento quedó solo `valida_entradas` en `NO_APTO`; tras corregir después la validación se obtuvo `5 APTO`, `0 NO_APTO`, `1 NO_VERIFICADO`, con salida 0. El rendimiento sigue sin verificarse deliberadamente.
- Se completó una demostración de regresión en otra copia temporal ya corregida: el cambio válido `stock > 10` → `stock >= 10` hizo que `descuento_stock_alto` y `borde_stock_10` pasaran a `NO_APTO`, produciendo `3 APTO`, `2 NO_APTO`, `1 NO_VERIFICADO`; al restaurar `stock > 10`, `comprobar.py` volvió a `5 APTO`, `0 NO_APTO`, `1 NO_VERIFICADO`. La base descargable no se cambió y conserva sus dos fallos pedagógicos iniciales.
- La causa queda documentada: stock 12 cumple ambas condiciones y no cambia; la diferencia la produce la Placa base con stock 10, que baja de 500.0 a 450.0 y hace pasar el total agregado de 960.0 a 910.0. La comparación de la copia temporal mostró únicamente la mutación del operador `>` a `>=` respecto al estado corregido, sin error de sintaxis ni cambios en `comprobar.py` o en los datos.
- La guía y la chuleta indican ejecutar todos los comandos desde la carpeta donde se extrajo el ZIP y dejan la regresión reproducible sin editar el comprobador.
- No se instalaron dependencias ni se ejecutaron suites `pytest`. No se realizó una comparación visual porque no existe interfaz en este proyecto; la revisión humana del diff, del resultado y de los criterios sigue siendo obligatoria.
- La microfase 7 permanece cerrada en `3e1b77f` y `v2027-b7-m7`. Esta microfase 8 queda sin commit ni tag para revisión. `Cambios_portada_2027/` y cualquier cambio ajeno permanecen fuera del alcance.

### Siguiente paso

- Revisar `http://localhost:8000/bloques/bloque7/recursos/experiencias/exp-01-del-prompt-al-harness/index.html` y, si procede, validar la práctica humana antes de cerrar la microfase 8.

- La antigua FASE 3 se realizó en la rama `feature/harness-python-2027` en septiembre de 2026.
- Sus recuentos de pruebas, fallos y elementos no verificados son evidencia histórica, no el estado actual del repositorio.

## Microfase 9 — LangGraph opcional en B7 (pendiente de revisión)

### Cambios

- EXP-05 y el README del proyecto explican el grafo real: estado, nodos, transiciones, condición de ruta y resultados para `sin_stock`, `pedir_material` y `disponible`.
- Se distingue el grafo determinista actual, una futura ampliación con modelo de lenguaje y un sistema multiagente. No se añadió IA, Ollama, claves, red, agentes adicionales ni una segunda implementación en Python.
- La actividad y la guía de ampliación aplican el criterio ludus/dojo: LangGraph es una opción de práctica, no una obligación del itinerario; su instalación es requisito técnico solo para ejecutar el grafo completo. Se explica cómo continuar o saltar EXP-05.
- Se corrigieron las instrucciones de extracción y ejecución desde la carpeta elegida, y EXP-05 conserva accesos explícitos a `Volver al bloque 7` e `Inicio del curso` con rutas relativas compatibles con GitHub Pages.
- Se sincronizó `proyecto-b7-langgraph.zip` con los cinco archivos de `recursos/proyectos-b7/langgraph-taller/`. No se modificó código de ejecución ni EduSDK.
- Se depuró la redacción dirigida al alumno: se retiraron avisos repetidos sobre opcionalidad y estado interno, conservando en esta documentación solo el objetivo, requisitos, comandos, resultados, errores, comparación conceptual y siguiente paso.

### Validación real

- Desde una extracción limpia se creó un entorno virtual temporal y se instalaron únicamente los requisitos declarados: `langgraph>=0.2.74,<0.3.0`. Versiones usadas: Python `3.12.10`, `langgraph 0.2.76` y `langchain-core 0.3.86`.
- `python -m unittest -v`: 8 pruebas correctas, incluida la del grafo completo; no hubo pruebas omitidas con la dependencia instalada.
- `python flujo_taller.py --demo`: ruta `pedir_material`, decisión `PEDIR_MATERIAL`, con stock 3 y mínimo 5.
- `--stock 0`: ruta `sin_stock`, decisión `SIN_STOCK`. `--stock 20`: ruta `disponible`, decisión `DISPONIBLE`.
- `--stock no-es-numero` produjo error de uso y código 2. Sin modo de ejecución produjo el mensaje de ayuda y código 1. No se usaron credenciales ni servicios externos.
- La extracción del ZIP se comprobó contra sus cinco fuentes canónicas; los README, requisitos y archivos descargados coinciden. La comprobación de enlaces locales y las rutas de navegación de EXP-05 quedan pendientes de revisión humana en navegador.

### Utilidad pedagógica y límites

- Para tres nodos y una condición, Python normal basta y tiene menor coste de preparación y mantenimiento. LangGraph aporta una representación explícita cuando crecen estados y transiciones, no una necesidad artificial de este ejemplo.
- El grafo validado es determinista y no es un sistema multiagente. La ampliación con IA y la coordinación multiagente siguen fuera de esta microfase.
- No se modificaron otros bloques, el Recorrido práctico ni EduSDK. Se conserva `Cambios_portada_2027/` fuera del alcance.

### Siguiente paso

- Revisar EXP-05 en `http://localhost:8000/bloques/bloque7/recursos/experiencias/exp-05-langgraph-orquesta/index.html` y la portada de B7. La microfase queda sin commit ni tag.

## Microfase 10 — Recorrido práctico ordenado (pendiente de revisión)

### Organización aplicada

- La portada `lab-python-en-accion/index.html` usa el título `Recorrido práctico · Construye y conecta tus proyectos` y seis etapas: trabajar con control; comunicar programas; guardar y recuperar información; crear una aplicación usable; conectar con otros sistemas; e incorporar IA donde aporte valor.
- La etapa 1 enlaza la práctica de agentes; la 2, FastAPI y Docker; la 3, PostgreSQL y el proyecto de control horario; la 4, interfaz, geolocalización, roles, móvil y dashboard; la 5 integra FIWARE, MQTT y dispositivos; la 6 reúne las prácticas de decisión, explicación y respuesta estructurada con IA.
- Cada etapa indica necesidad, pieza, conexiones, actividad, resultado y comprobación. También aclara carpeta de extracción, continuidad real, comandos o README aplicable y dependencias técnicas.
- El control horario queda como hilo conceptual desde EXP 11: las descargas posteriores son copias independientes y no se presupone que una carpeta admita automáticamente los archivos de otra. No se presentó una continuidad única que el código o los ZIP no demostraran.
- La Experiencia 20 sigue identificada como pendiente de hardware real. Los recursos complementarios se conservan fuera de las seis etapas principales.
- No se encontraron referencias públicas a SAMI en la portada del Recorrido ni en los materiales directamente modificados. No se hizo la retirada global de materiales de apoyo, reservada para la microfase 11.

### Comprobaciones

- Revisión documental: se comprobaron las experiencias y descargas enlazadas, las carpetas raíz de los ZIP y los comandos principales de los README. Las descargas afectadas responden por HTTP y los enlaces locales de la portada no apuntan a rutas inexistentes.
- Navegación real mediante HTTP y clics en navegador: `curso → recorrido → experiencia 11 → recorrido → curso`, con estado final en `/inicio.html`.
- Revisión responsive en navegador a 390 px y 1440 px, en claro y oscuro: `scrollWidth` coincide con el ancho de la ventana, se muestran las seis etapas y no se pierden los controles principales.
- La portada se reorganizó visualmente sin alterar destinos: cada etapa tiene número, título y descripción; sus notas usan los bloques `Qué vas a conseguir`, `Con qué trabajarás` y `Cómo comprobarlo`; una actividad ocupa una tarjeta amplia y las múltiples se distribuyen en cuadrícula. Las acciones visibles pasan a `Abrir práctica` y `Descargar práctica`, y la secuencia de EXP 7 se muestra como pasos separados sin flechas partidas.
- La comprobación visual final confirmó 6 etapas, 3 bloques de guía por etapa, tarjetas distribuidas `1 / 2 / 2 / 5 / 2+2 / 3`, 24 descargas y ningún botón `VER` en la portada, tanto en 390 px como en escritorio, claro y oscuro.
- El usuario acepta la microfase 10 y su ajuste visual. Se mantiene el límite: los proyectos del Recorrido no se ejecutaron en esta microfase.
- No se ejecutaron los proyectos del Recorrido ni se instalaron dependencias; esta microfase valida la organización documental, enlaces y navegación, no el funcionamiento de cada ZIP.

### Pendientes y límites

- Quedan por ejecutar, si se autoriza en una fase posterior, las prácticas del Recorrido en copias limpias y la revisión humana detallada de cada README. Docker, PostgreSQL, FIWARE, MQTT, Ollama y hardware no se activaron.
- No se modificó EduSDK, no se sincronizaron los materiales globales de apoyo y no se inició la microfase 11. `Cambios_portada_2027/` y cualquier cambio ajeno permanecen fuera del alcance.
## Microfase 11 · sincronización de materiales de apoyo (en curso)

Punto de partida: `921bc5e` (`v2027-recorrido-m10`). No se ha hecho commit, tag,
push ni publicación.

### Cambios realizados

- Se actualizaron el README raíz, las guías, trazabilidades, mapas y datos JSON/JS
  de B3–B6 para usar los nombres descriptivos de los proyectos y de la base de
  herramientas, sin restaurar una secuencia obligatoria cuaderno → proyecto.
- Se actualizaron los textos visibles de los cuadernos B3–B5 sin alterar sus
  ejercicios, resultados ni celdas de ejecución. Las celdas que necesitan una
  ruta técnica existente conservan esa ruta para no romper imports; queda anotada
  como excepción técnica, no como nombre público.
- Se sincronizaron fuentes y copias de B3–B5 donde correspondía, se retiraron
  nombres heredados de los README y salidas visibles, y se regeneraron
  `proyecto-b3-calcula-precios.zip`, `proyecto-b4-productos-clases.zip` y
  `proyecto-b5-informe-productos.zip` desde sus copias descargables.
- El recurso RAG del Laboratorio cambió `manual_sami.txt` por
  `manual_proyecto.txt`; se actualizaron la experiencia Markdown/HTML y
  `rag-local.zip`.
- El archivo del copiloto `06-SAMI.md` pasó a llamarse
  `06-CONTEXTO-PROYECTOS.md`; se corrigieron sus enlaces y se regeneró
  `copiloto-profesor-python-2027.zip` sin la entrada antigua.
- B5 conserva el comportamiento validado del proyecto; solo se actualizaron
  etiquetas/documentación de salida, sin cambiar reglas de análisis.

### Comprobaciones realizadas

- `git diff --check`: sin errores de espacios.
- Los cuatro JSON de datos y los tres cuadernos afectados se pudieron analizar
  con `json.loads`; los cuatro datos JS pasaron `node --check`.
- Los archivos Python afectados pasaron `python -m py_compile`. No se instalaron
  dependencias ni se repitieron suites funcionales de código intacto.
- Cada ZIP B3–B5 contiene exactamente los archivos de su copia descargable y sus
  bytes coinciden; el ZIP RAG contiene `manual_proyecto.txt` y no contiene
  `manual_sami.txt`.
- El ZIP del copiloto contiene `06-CONTEXTO-PROYECTOS.md`, no `06-SAMI.md`, y no
  reintroduce SAMI en sus documentos docentes actuales ni en sus nombres de
  entrada.
- La revisión PDF quedó limitada a inspección de disponibilidad: no existen
  `pdftotext`, `pdfinfo`, `mutool` ni una fuente editable local identificable para
  `assets/descargas/guia-inicio-python.pdf` fuera de `Cambios_portada_2027/`.
  No se modificó ni se declaró validada visualmente esa guía PDF.

### Límites y excepciones pendientes

- La retirada global no se declara terminada. Permanecen referencias en fuentes
  de ingeniería histórica y en el contenido histórico de
  `06-CONTEXTO-PROYECTOS.md`; no se ofrecen como instrucciones o nombres
  públicos actuales.
- Las carpetas fuente técnicas `proyecto-sami-lite`, `proyecto-sami-oop` y
  `proyecto-sami-applied`, además de las rutas internas de algunas celdas, se
  conservan para no romper dependencias, imports ni trazabilidad. Los ZIP planos
  no entregan esas carpetas raíz; sus README indican abrir la carpeta extraída.
- No se ejecutaron los proyectos B3–B6 ni suites pytest en esta microfase. La
  comprobación humana de las páginas y la revisión visual del PDF siguen
  pendientes. `Cambios_portada_2027/` se conservó sin modificar ni incluir.

### Revisión complementaria de pendientes de microfase 11 · en curso

Esta revisión no reabre la sincronización estructural ya comprobada. Se atendieron
solo los cinco pendientes solicitados y no se hizo commit, tag, push ni publicación.

#### Evaluación, entregas y acceso

- Se retiraron de los materiales vigentes las formulaciones de actividad «no
  evaluable», evaluación obligatoria, contenido obligatorio para aprobar y entrega
  obligatoria. El cambio afecta a las guías y datos de B5, las plantillas y
  secciones de Profesor Plus, el cierre del Laboratorio, y los textos de retos de
  B3–B7 que pedían «entregar» como requisito. Se conservaron las
  autoevaluaciones, los estados `APTO`/`NO_APTO`/`NO_VERIFICADO`, las comprobaciones
  técnicas y la aprobación humana que forma parte del protocolo del arnés, no del
  acceso o aprobación del curso.
- La comprobación HTTP contra `http://127.0.0.1:8000` se hizo enviando una cabecera
  `Cookie` vacía. Respondieron `200` la portada `/inicio.html` y las siete entradas
  `/bloques/bloque1/inicio.html` a `/bloques/bloque7/inicio.html`; ninguna emitió
  `Set-Cookie`. La única persistencia del curso localizada es `localStorage` del
  selector claro/oscuro (`assets/js/theme-toggle.js`). No hay guardia de tests ni
  comprobación de aprobación que intercepte esas rutas. Una carga real con perfil
  Chrome nuevo confirmó además el título de B1. El resto queda respaldado por las
  respuestas HTTP, la inspección del código de navegación y la ausencia de estado
  de acceso; no se declara una prueba manual de clic independiente para cada bloque.

#### Retirada de la promesa de integración final

- La promesa estaba en el cierre heredado de B7 y sus materiales de apoyo: la tabla
  de B7 de `copiloto-profesor/00-INSTRUCCIONES-AGENTE.md`, la fila B7 de
  `01-GUIA-CURSO.md`, la pregunta P7.8 de `03-PREGUNTAS-Y-RESPUESTAS.md`, el mapa
  de apoyos de `04-PRACTICAS-Y-APOYOS.md`, la tabla de límites de
  `07-LAGUNAS-Y-LIMITES.md` y el antiguo contexto de proyectos de `06-SAMI.md`.
- No se limitó a cambiar el nombre: se eliminó la relación de cierre obligatorio y
  de integración final con la ruta publicada. La redacción vigente presenta ese
  material como antecedente separado, no dirige B7, no añade entregables a las
  seis experiencias y no se usa para declarar aprobado el curso. La búsqueda de
  las cadenas «integración definitiva» y «Proyecto final obligatorio» no devuelve
  coincidencias en esos materiales vigentes.

#### Menciones SAMI restantes y clasificación

- **Plan y seguimiento, no instrucciones al alumno:** `OBJETIVOS_PROGRAMAR_2027.md`
  conserva la tabla histórica y la instrucción explícita de retirada;
  `TASKS.md` conserva una tarea histórica marcada como realizada; `ESTADO.md`
  conserva el registro de decisiones y excepciones.
- **Fuentes históricas de ingeniería, no materiales distribuidos:**
  `copiloto-profesor/fuentes/ingenieria-conocimiento-python-v4-saneada.md`,
  `ingenieria-lab-python-en-accion.md`,
  `ingenieria-python-bloque3-final.md`,
  `ingenieria-python-bloque4-final.md`,
  `ingenieria-python-bloque5-final.md`,
  `ingenieria-python-bloque6-refinada.md` e
  `ingenieria-python-bloque7.md`, además de los equivalentes en
  `ingenieria/`. `copiloto-profesor/fuentes/README.md` los clasifica como
  históricos y el ZIP del copiloto ya no los incluye.
- **Excepciones técnicas conservadas:** las carpetas fuente
  `bloques/bloque3/proyecto-sami-lite/`,
  `bloques/bloque4/proyecto-sami-oop/`,
  `bloques/bloque5/proyecto-sami-applied/` y
  `bloques/bloque6/recursos/proyecto/sami_local/`, junto a los documentos
  técnicos `sami-lite.md`, `sami-oop.md`, `sami-applied.md` y `sami-local.md`.
  También permanecen las rutas internas de proyecto usadas por las celdas de
  `bloques/bloque3/cuadernos/funciones-proyecto-b3.ipynb` y
  `bloques/bloque4/cuadernos/objetos-diseno-b4.ipynb`. Se mantienen para no romper
  imports, trazabilidad o sincronizaciones; no se ofrecen como nombres públicos.
- **No vigentes ni reintroducidas en descargas:** el antiguo `06-SAMI.md` fue
  sustituido por `06-CONTEXTO-PROYECTOS.md`; `manual_sami.txt` por
  `manual_proyecto.txt`. Los ZIP B3, B4, B5 y del copiloto no contienen `SAMI` en
  sus nombres ni en sus documentos actuales. `bloques/bloque7/recursos/proyecto/sami_final/`
  queda como carpeta técnica histórica sin uso en la ruta publicada.
- `assets/referencias_privadas/` queda fuera de esta clasificación curricular y no
  se publica ni se sincroniza.

#### PDF de preparación

- La ruta exacta es `assets/descargas/guia-inicio-python.pdf` (673.533 bytes,
  actualizado el 29-10-2026). No se encontró una fuente editable local asociada
  fuera de `Cambios_portada_2027/`.
- La inspección quedó bloqueada de forma concreta: en el entorno no están
  disponibles `pdftotext`, `pdfinfo`, `mutool`, `soffice` ni `libreoffice`, y tampoco
  están instalados módulos Python de lectura/renderizado PDF (`pypdf`, `PyPDF2`,
  `fitz`, `PIL`). Por tanto no se puede determinar con evidencia el contenido de
  sus páginas ni declarar que necesite o no actualización. No se modificó el PDF
  ni se siguieron probando herramientas indefinidamente.

#### Comprobaciones de esta revisión

- El ZIP del copiloto contiene `05-COMPROBACIONES-Y-ERRORES.md` y
  `06-CONTEXTO-PROYECTOS.md`, además de `fuentes/README.md`; no contiene los
  nombres antiguos ni las fuentes históricas de ingeniería.
- JSON B3–B7 y los JS afectados se vuelven a validar después de los textos; no se
  ejecutaron proyectos ni suites pytest porque no cambió su lógica. La comprobación
  final pendiente es `git diff --check`. `Cambios_portada_2027/` permanece sin
  modificar y fuera del alcance.

#### Ajuste posterior de microfase 11: paquete de preparacion Windows

- Se recupero `Preparar_curso_2027.zip` y se extrajo en una carpeta temporal de
  trabajo. Se revisaron estaticamente `LEEME.txt`, `Preparar_curso.cmd` y
  `preparar.py`; no se ejecutaron instalaciones, WinGet, VS Code, Git ni
  extensiones.
- `LEEME.txt` ya no menciona SAMI. Ahora usa los nombres actuales de B3, B4, B5,
  B6 y B7, enlaza la consulta del curso en GitHub Pages y aclara que el paquete
  prepara el ordenador y el espacio de trabajo local de VS Code, pero no es un
  lanzador de la web.
- El CMD conserva su funcion de preparacion de Windows y `preparar.py` conserva
  la configuracion tecnica; solo se ajustaron sus mensajes para describir el
  espacio de trabajo local. `python -m py_compile preparar.py` paso sin ejecutar
  su funcion principal ni instalar nada.
- Se genero `assets/descargas/preparar-python-windows-2027.zip` con exactamente
  `LEEME.txt`, `preparar.py` y `Preparar_curso.cmd`. La carpeta de trabajo
  descomprimida no se conserva como descarga separada.
- La portada `inicio.html`, en el panel «Empieza por aqui», enlaza el nuevo ZIP
  junto a la guia PDF. La ruta de la web sigue siendo GitHub Pages; el paquete
  no intenta abrirla ni sustituirla.
- La guia PDF `assets/descargas/guia-inicio-python.pdf` no se regenero: sigue sin
  existir una fuente editable local y el entorno no dispone de herramientas de
  lectura o generacion PDF. Este bloqueo queda pendiente y no se presenta como
  sincronizacion completada.

#### Ajuste posterior de microfase 11: preparacion de LangGraph

- Se actualizo unicamente la preparacion de EXP-05 en la guia
  `bloques/bloque7/recursos/experiencias/exp-05-langgraph-orquesta/index.html` y
  en `bloques/bloque7/recursos/proyectos-b7/langgraph-taller/README.md`.
- Ambos documentos indican ahora la secuencia completa: descomprimir el ZIP,
  abrir la carpeta extraida en VS Code y abrir alli una terminal; crear o activar
  `.venv`; instalar las dependencias del proyecto en Windows PowerShell o
  macOS/Linux; y usar el interprete directo si PowerShell bloquea la activacion,
  sin pedir cambios en la politica de ejecucion.
- Se sustituyo "la unica dependencia" por "las dependencias del proyecto" y se
  explico que `.venv` separa estas dependencias de otros proyectos. Se
  conservaron los comandos de demostracion y `python -m unittest -v` ya
  documentados.
- El ZIP `bloques/bloque7/proyecto-b7-langgraph.zip` se regenero desde los cinco
  archivos de `bloques/bloque7/recursos/proyectos-b7/langgraph-taller/`, sin
  incluir `__pycache__`. La extraccion contiene `README.md` actualizado y los
  cuatro archivos restantes del proyecto.
- Verificado: el README extraido coincide con su fuente, no queda la expresion
  "unica dependencia" en guia/README y `git diff --check` no detecta errores.
  No se ejecuto de nuevo el grafo ni sus pruebas porque solo cambio la
  documentacion.

#### Actualizacion del PDF de preparacion

- La nota anterior sobre el bloqueo del PDF queda superada para esta revision.
  Se creo la fuente editable `assets/descargas/guia-inicio-python.html` y se
  genero de nuevo `assets/descargas/guia-inicio-python.pdf` con Chrome en modo
  headless, sin instalar herramientas ni dependencias.
- La guia PDF actualizada elimina SAMI, usa los nombres publicos B3-B7, enlaza
  GitHub Pages como lugar de consulta y describe el paquete Windows como
  preparador del ordenador, no como lanzador de la web.
- La generacion fue real; no se ejecuto `Preparar_curso.cmd`, `preparar.py` ni
  ninguna instalacion del paquete. La revision visual detallada del PDF queda
  pendiente si se requiere una comprobacion humana pagina por pagina.

#### Ajuste posterior de microfase 11: pagina de preparacion y contraste

- `inicio.html` conserva ahora solo el acceso compacto «Empieza por aqui» y
  enlaza a `preparacion.html`. Se elimino el panel completo de preparacion de la
  landing; no queda oculto ni desplegable en ella. `course-home.js` sigue
  gestionando unicamente el panel de bloques.
- `preparacion.html` concentra la guia PDF, el ZIP Windows, enlaces oficiales,
  ayuda para macOS/Linux y otros sistemas, instrucciones de practicas,
  resolucion de problemas, comprobacion minima, «Inicio del curso» y la
  identidad Circular FAB.
- La regla generica `.course-panel a` podia sobrescribir el color de texto de
  `.cf-button--primary`. Se excluyeron los botones con `:not(.cf-button)` en la
  portada y se aplicaron en la pagina nueva los tokens
  `--cf-color-accent-text` y `--cf-color-focus` para normal, hover, focus y
  visited, sin modificar globalmente otros enlaces.
- Contraste calculado para el boton primario: claro normal `4.53:1`, claro hover
  `6.38:1`, oscuro normal `7.72:1` y oscuro hover `9.96:1`. Todos superan
  `4.5:1`.
- Validacion HTTP real: `inicio.html`, `preparacion.html`, PDF y ZIP respondieron
  `200`; la portada ya no contiene `id="preparacion"` ni
  `data-course-panel="preparacion"`; la pagina nueva contiene ambos enlaces de
  descarga, los enlaces oficiales y el regreso a `inicio.html`.
- Revision visual con Chrome en 390 y 1440 px, claro y oscuro. La medicion del
  documento a 390 px dio `scrollWidth=375`, sin desbordamiento horizontal. Se
  conservaron los textos completos, botones utilizables y estados de foco.

#### Ajuste posterior de microfase 11: rutas y practica temprana del copiloto

- `inicio.html` ya no presenta el panel separado «El mismo hilo práctico en
  ambas rutas». Las dos rutas incluyen los mismos tres proyectos aplicados,
  cada una explica cómo acceder a ellos desde sus bloques sin duplicarlos y
  conserva el cuaderno como material de consulta en la ruta correspondiente.
- La continuidad común queda dentro del panel de rutas y enlaza con los
  títulos comprobados de B6, B7 y del Recorrido práctico. Se retiraron del pie
  los enlaces sueltos al copiloto y a su ZIP.
- Se añadió `prepara-tu-copiloto.html`, enlazada desde `preparacion.html` y
  desde la entrada de la ruta con agentes. La guía reutiliza el pack vigente,
  explica sus archivos, la configuración mediante una conversación con
  adjuntos sin exigir un GPT personalizado, el prompt de la primera práctica,
  los criterios de comprobación y la diferencia entre el copiloto orientador
  y un agente de programación que modifica archivos.
- Validación HTTP real: respondieron `200` la portada, preparación, guía del
  copiloto, pack ZIP, B3, B6, B7 y el Recorrido práctico.
- Navegación mediante clics reales en Chrome: `inicio.html` →
  `prepara-tu-copiloto.html` → comprobación de los enlaces al pack y a B3 →
  `inicio.html`. La secuencia terminó con «regreso confirmado».
- Revisión visual en Chrome de portada y guía a 390 y 1440 px, claro y oscuro.
  La guía a 390 px midió `scrollWidth=375`; el panel superior reorganiza la
  navegación en varias filas y los botones y textos permanecen utilizables.
- No se ejecutaron proyectos ni pruebas funcionales de código. No se
  reconstruyó el sistema del copiloto, no se instalaron herramientas y no se
  modificó `Cambios_portada_2027/` ni EduSDK.

#### Ajuste posterior de microfase 11: depuración de duplicaciones en la portada

- `inicio.html` conserva la presentación del curso, la cabecera y un único
  acceso compacto «Empieza por aquí» hacia `preparacion.html`.
- El panel de rutas ahora muestra arriba las dos formas de trabajar. La ruta
  con agentes resume construir, revisar y comprobar; la ruta Python conserva
  los accesos a B1 y B2 y explica el trabajo con cuadernos.
- La lista de los tres proyectos aplicados aparece una sola vez, a todo el
  ancho del panel. La continuación común aparece después y enlaza una sola
  vez con B6, B7 y el Recorrido práctico. El acceso contextual al copiloto
  queda únicamente en la ruta con agentes; su descarga continúa en la guía
  específica.
- Se retiraron de esa zona las listas numeradas repetidas, las menciones a
  proyectos duplicadas en cada columna, el enlace superior al Recorrido
  práctico y las frases de confluencia repetidas. La navegación general y el
  panel de los siete bloques se conservan.
- Verificación de destinos por HTTP local: `preparacion.html`, B1-B7 y
  `lab-python-en-accion/index.html` respondieron `200`. Los accesos
  contextuales a preparación, copiloto, proyectos y continuidad quedaron
  comprobados en el HTML resultante.
- Revisión visual con Chrome a 390 y 1440 px, claro y oscuro. En móvil las
  columnas se apilan y los textos, botones y enlaces permanecen legibles.
- No se modificaron preparación, copiloto, bloques, proyectos ni descargas;
  `Cambios_portada_2027/` y los cambios ajenos se conservaron.

## Microfase 12 — revisión final del curso

- Confirmado mediante Git: `HEAD` es `51800d00eeb1450617a95aff588217e04c6e1495` y el tag anotado
  `v2027-materiales-m11` apunta a ese commit. `Cambios_portada_2027/` y
  `Preparar_curso_2027.zip` siguen conservados fuera del commit.
- Se probó la navegación mediante clics reales bajo el prefijo local
  `/programar-en-2027/`: portada → preparación → PDF y ZIP Windows → portada;
  portada → práctica del copiloto → pack → B3 → portada; proyectos B3–B5 → B6
  → B7 → Recorrido práctico; y la ruta de fundamentos B1 → B2 → B3.
  También se comprobó el regreso desde una experiencia de B6 al bloque, desde una
  experiencia de B7 al bloque y desde una experiencia del Recorrido al propio
  Recorrido y al inicio.
- Se detectó y corrigió un defecto concreto: B6 no enlazaba directamente con B7.
  Ahora su continuidad ofrece B6 → B7 → Recorrido práctico. Se alineó asimismo la
  descripción antigua de `AGENTS.md` con `Recorrido práctico`.
- Se verificaron mediante descarga real el PDF, el paquete Windows, el pack del
  copiloto y los ZIP de proyectos B3, B4 y B5. Se revisaron las entradas esperadas
  de los ZIP de Windows, copiloto, B3–B7 y los cuatro proyectos de B7.
- Revisión visual con Chrome en móvil (390 px) y escritorio (1440 px), claro y oscuro,
  sobre portada, preparación y copiloto: sin desbordamiento horizontal, controles de
  tema utilizables y con foco de teclado. El PDF abre en Chrome con dos páginas; se
  revisó visualmente la primera página y no se observó clipping aparente.
- No se encontraron referencias públicas vigentes a SAMI en las páginas y documentos
  revisados. Permanecen identificadores técnicos y antecedentes históricos fuera de
  la identidad pública. No se añadieron evaluaciones, candados ni avisos repetidos.

### Límites y pendientes reales de la microfase 12

- El instalador Windows se probó realmente en Windows y el resultado fue
  satisfactorio.
- El uso real del copiloto se probó en otro chat y el resultado fue satisfactorio.
- No se ejecutó un modelo externo ni se hicieron pruebas nuevas con personas.
- La revisión visual del PDF fue una comprobación en Chrome de la salida disponible,
  no una revisión humana página por página. La ruta exacta para esa revisión es
  `assets/descargas/guia-inicio-python.pdf`.
- No se hizo commit, tag, push ni publicación en esta microfase.
- Aceptación del punto de control: aceptada por la persona responsable del curso,
  manteniendo explícitos los límites pendientes anteriores y sin presentarlos como
  comprobaciones realizadas.
