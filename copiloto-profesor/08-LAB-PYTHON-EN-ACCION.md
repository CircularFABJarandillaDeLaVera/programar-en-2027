# 08 · LAB FINAL OPCIONAL: PYTHON EN ACCIÓN

Este documento orienta el uso docente de **Python en Acción**, una continuación práctica con pathway y laboratorios adicionales. Conserva las cinco fichas originales, que ya no representan todo el catálogo.

## Identidad Curricular

- Es un recurso final opcional.
- No es B8.
- No forma parte de la progresión obligatoria B1-B7.
- No es evaluable.
- No pertenece a SAMI.
- Su objetivo es motivar: "Ya sabes Python. Ahora mira todo lo que puedes hacer con él".

El flujo base, ampliado por los pasos propios de cada experiencia, es:

```
VER -> PROBAR -> MODIFICAR -> MINI-RETO
```

El Copiloto debe indicar resultado esperado, evidencia observable, criterio de éxito y Plan B. No debe afirmar que una experiencia fue ejecutada si solo está descrita en los materiales.

## Mapa actual: consulta antes de preparar

El [portal de Python en Acción](../lab-python-en-accion/index.html) es la entrada al recorrido. Consulta su página y el README descargable antes de describir comandos, requisitos o resultados. Las implementaciones no están incluidas en el ZIP de este pack.

| Tramo existente | Recursos publicados | Uso docente |
| --- | --- | --- |
| Trabajo con control | Agentes de programación (experiencia 07). | Conexión breve con instrucciones, contexto, límites, validación y supervisión humana; no duplicar su anexo de herramientas y tests. |
| API y ejecución | [FastAPI](../lab-python-en-accion/recursos/experiencias/08-fastapi.html), [Docker](../lab-python-en-accion/recursos/experiencias/09-docker.html). | Leer el recorrido desde peticiones hasta contenedor, respetando la preparación indicada. |
| Datos y aplicación | [PostgreSQL](../lab-python-en-accion/recursos/experiencias/10-postgresql.html), control horario, interfaz, geolocalización, roles, red local y dashboard (11–16). | Seguir la evolución del mismo caso, sin tratar cada ampliación como ejercicio inicial aislado. |
| Contexto conectado | [Orion-LD](../lab-python-en-accion/recursos/experiencias/17-orion-ld.html), Python–FIWARE, compostera MQTT y puente MQTT–FIWARE. | Distinguir datos persistidos, mensajes y contexto; consultar requisitos de cada página. |
| Decisión e IA | [LangGraph con contexto](../lab-python-en-accion/recursos/experiencias/22-langgraph-contexto.html), [Ollama explica](../lab-python-en-accion/recursos/experiencias/23-ollama-explicacion.html), [respuesta estructurada](../lab-python-en-accion/recursos/experiencias/24-ollama-estructurado.html). | Comprender decisión, explicación y validación según sus prácticas. |
| Extensión técnica | [Masterclass FIWARE real](../lab-python-en-accion/recursos/experiencias/masterclass-fiware-real.html). | Extensión opcional para técnicos, con el entorno previsto en su guía. |
| Laboratorios adicionales | OpenCV, Pillow, archivos, Excel, Tkinter y [RAG local](../lab-python-en-accion/recursos/experiencias/06-rag-local.html). | Seleccionar una experiencia adecuada al grupo; RAG no es un requisito para usar el Copiloto. |

No deduzcas el número de experiencias del subtítulo o del JSON antiguo: hay diferencias documentadas en [07](07-LAGUNAS-Y-LIMITES.md). Este mapa no convierte las tecnologías del pathway en contenidos obligatorios de B1-B7.

## Fichas de apoyo de los cinco laboratorios originales

## 1. OpenCV · Webcam Interactiva

Qué demuestra:
Python puede leer imágenes reales desde una webcam, procesarlas en tiempo real, mostrar el resultado y guardar una captura.

Conocimientos previos que reutiliza:
variables, bucles, condicionales, funciones, lectura de errores, arrays como estructura de datos visual.

Preparación:

- Instalar `opencv-python` si se va a ejecutar.
- Comprobar que hay cámara disponible.
- Revisar permisos de cámara del sistema operativo.
- Ejecutar `webcam_gris.py`.
- Asegurarse de que la ventana de vídeo tiene el foco al pulsar teclas.

Controles:

- `1` normal.
- `2` escala de grises.
- `3` desenfoque con `GaussianBlur`.
- `4` bordes con flujo gris -> reducción de ruido -> `Canny`.
- `S` guardar captura.
- `Q` salir.

APIs del curso:
`cv2.VideoCapture`, `cap.read`, `cv2.imshow`, `cv2.waitKey`, `cv2.cvtColor`, `cv2.GaussianBlur`, `cv2.Canny`, `cv2.imwrite`, `cap.release`, `cv2.destroyAllWindows`.

Explicación sencilla:
La webcam entrega muchas fotos por segundo. OpenCV permite elegir cómo ver cada foto: tal cual, sin color, suavizada o convertida en líneas de borde. `waitKey` escucha las teclas, `imshow` enseña el resultado y `imwrite` guarda la captura.

Errores previsibles y diagnóstico:

- Si no abre la webcam: revisar permisos, cerrar apps de videollamada y probar índice `0` o `1`.
- Si no responden las teclas: hacer clic en la ventana de OpenCV.
- Si no se guarda la captura: revisar permisos de escritura y carpeta de ejecución.
- Si la ventana queda colgada: comprobar que el flujo llega a `cap.release()` y `cv2.destroyAllWindows()`.

Plan B:
El profesor puede hacer la demo desde su equipo, leer el código con el grupo o trabajar solo la predicción de qué hace cada modo si no hay cámara disponible.

Mini-reto:
cambiar intensidad de `GaussianBlur`, modificar umbrales de `Canny` o personalizar el nombre de la captura.

Resultado y evidencia:
ventana de vídeo interactiva; cambio visible entre modos; archivo `captura_opencv.png` solo si se pulsa `S`.

Criterio de éxito:
el alumno explica el ciclo capturar frame -> procesar -> mostrar -> leer tecla -> liberar recursos.

No forma parte del Lab:
`CascadeClassifier`, reconocimiento facial, reconocimiento de objetos, YOLO, MediaPipe ni modelos de IA.

## 2. Pillow · Imagen Transformada

Qué demuestra:
Python puede abrir una imagen local, modificarla y guardar una copia nueva.

Conocimientos previos que reutiliza:
rutas, funciones, variables, parámetros y secuencia de pasos.

Preparación:

- Instalar `Pillow`.
- Usar la imagen neutra incluida en el Lab.
- No utilizar el logotipo de Circular FAB como imagen de edición.

APIs del curso:
`Image.open`, `resize`, `rotate`, `crop`, `convert("L")`, `ImageFilter.BLUR`, `save`.

Explicación sencilla:
Pillow trata una imagen como un objeto que puede cambiar de tamaño, girarse, recortarse, pasar a gris, desenfocarse y guardarse como archivo nuevo.

Errores previsibles y diagnóstico:

- Imagen no encontrada: revisar ruta.
- Import fallido: instalar Pillow.
- Resultado no visible: abrir el archivo de salida, no el original.

Plan B:
Reducir la práctica a abrir, convertir a gris y guardar.

Mini-reto:
cambiar el tamaño final, probar otro recorte o variar el orden de transformaciones.

Resultado y evidencia:
archivo `foto_editada.jpg` generado a partir de la imagen neutra incluida.

Criterio de éxito:
el alumno distingue archivo original y copia transformada.

## 3. Automatización Segura de Archivos

Qué demuestra:
Python puede revisar una carpeta y ordenar archivos por extensión.

Regla de seguridad:
La práctica trabaja exclusivamente sobre `lab_archivos_prueba/`. El Copiloto nunca debe recomendar ejecutar esta experiencia sobre Descargas, Documentos, Escritorio ni carpetas reales del alumno.

Conocimientos previos que reutiliza:
diccionarios, condicionales, bucles, funciones, rutas y lectura de extensiones.

APIs del curso:
`Path`, `iterdir`, `is_file`, `is_dir`, `suffix`, `name`, `stem`, `mkdir(parents=True, exist_ok=True)`, `rename` o `shutil.move`.

Explicación sencilla:
El script mira archivos falsos de laboratorio, lee su extensión y los mueve a subcarpetas de prueba. Es una maqueta segura de una automatización cotidiana.

Errores previsibles y diagnóstico:

- No mueve nada: quizá ya se ejecutó y los archivos están dentro de subcarpetas.
- Una extensión cae en "Otros": revisar el diccionario de categorías.
- El alumno quiere usar Descargas: reconducir a `lab_archivos_prueba/`.

Plan B:
Volver a colocar archivos falsos en la raíz de la carpeta de pruebas o hacer una simulación sin mover.

Mini-reto:
añadir una categoría nueva, cambiar nombres de carpetas o registrar por consola cada movimiento.

Resultado y evidencia:
`lab_archivos_prueba/` queda clasificada en `PDFs`, `Imagenes`, `Codigo`, `Textos` y `Otros`, o se muestra una simulación si `MOVER_ARCHIVOS` está desactivado.

Criterio de éxito:
el alumno no usa carpetas reales externas y puede explicar cómo decide el script cada destino.

## 4. openpyxl · Excel Tangible

Qué demuestra:
Python puede crear un archivo Excel real con datos, fórmulas y formato.

Resultado:
`ventas_lab.xlsx`.

Conocimientos previos que reutiliza:
listas de filas, bucles, cálculos, escritura de archivos y organización tabular.

APIs del curso:
`Workbook`, `load_workbook`, `wb.active`, acceso a hojas, escritura de celdas, `append`, `iter_rows`, fórmulas como texto, `Font`, `PatternFill`, `save`.

Explicación sencilla:
Python monta una hoja de cálculo como si rellenara una tabla: pone encabezados, añade filas, escribe fórmulas de Excel, aplica color y guarda el libro.

Errores previsibles y diagnóstico:

- No guarda: el archivo puede estar abierto en Excel.
- La fórmula no aparece calculada: Excel la calcula al abrir el archivo.
- Import fallido: instalar `openpyxl`.

Plan B:
guardar con otro nombre o reducir a datos + formato si falta tiempo.

Mini-reto:
añadir una fila, cambiar el color de encabezados o crear una fórmula nueva.

Resultado y evidencia:
archivo `ventas_lab.xlsx` creado con datos, fórmulas y formato básico.

Criterio de éxito:
el alumno abre el libro y reconoce encabezados, filas, fórmula y guardado.

## 5. Tkinter · Mini App Gráfica

Qué demuestra:
Python puede crear una ventana de escritorio con entrada, botón y resultado.

Conocimientos previos que reutiliza:
funciones, eventos, variables, cadenas y flujo de programa.

APIs del curso:
`tk.Tk`, `Label`, `Entry`, `Button(command=...)`, `pack`, `grid`, `StringVar`, `mainloop`.

Explicación sencilla:
Tkinter crea una ventana. El usuario escribe en una caja, pulsa un botón y Python ejecuta una función que actualiza el texto de salida.

Errores previsibles y diagnóstico:

- La ventana no abre: puede faltar entorno gráfico o Tcl/Tk.
- El botón ejecuta al arrancar: revisar que `command=funcion` va sin paréntesis.
- El programa no termina: `mainloop()` mantiene la ventana escuchando eventos.

Plan B:
usar la misma función con `input()` y `print()` en consola.

Mini-reto:
añadir un segundo campo, cambiar el mensaje o validar que el nombre no esté vacío.

Resultado y evidencia:
ventana local con entrada, botón y texto de resultado; alternativa por consola si no hay entorno gráfico.

Criterio de éxito:
el alumno entiende que `command=funcion` registra una acción y `mainloop()` mantiene la ventana escuchando eventos.

## Cierre Docente

El Lab no abre nuevos contenidos obligatorios. Permite continuar con imagen, automatización, ofimática, interfaces, datos y agentes. Selecciona un tramo y sus prerrequisitos; si falta tiempo o entorno, ofrece lectura, predicción o demostración y señala qué no se ha ejecutado.
