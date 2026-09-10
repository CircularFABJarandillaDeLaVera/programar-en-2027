# INGENIERÍA DE DISEÑO: LAB FINAL OPCIONAL
## "Python en Acción: 5 Cosas Más que Puedes Hacer"

> **Nota de vigencia (revisión documental 2026-09-10):** Diseño de las cinco experiencias iniciales. Se conservan sus fichas; el recurso ha crecido con un pathway y más laboratorios. Consulta el [mapa actual de 08](../08-LAB-PYTHON-EN-ACCION.md). Véase el [criterio de fuentes](README.md).


Este documento constituye la especificación técnica y de diseño instruccional para el **Lab Final Opcional: "Python en Acción: 5 Cosas Más que Puedes Hacer"**, preparado con orientación tecnológica para **2027**. 

El objetivo de este laboratorio es demostrar de manera amigable, visual y altamente satisfactoria el impacto práctico inmediato del lenguaje una vez completado el itinerario base (Bloques 1 al 7). El enfoque pedagógico se resume en: **"Ya sabes Python. Ahora mira todo lo que puedes hacer con él"**, a través de 5 experiencias autónomas de 10 a 30 minutos de duración, completamente independientes entre sí.

---

## 1. OPENCV · WEBCAM INTERACTIVA (VISIÓN ARTIFICIAL)
*   **OBJETIVO**: Crear una pequeña aplicación interactiva de consola donde el alumno controle distintos modos de procesamiento de vídeo en tiempo real procedentes de su cámara web mediante pulsaciones de teclado, experimentando de forma física y directa el concepto de procesamiento de imágenes pixel-a-pixel.
*   **PRERREQUISITOS**: Bloque 1 (variables, condicionales, bucles interactivos `while` de flujo continuo), Bloque 3 (funciones nativas y modularidad) y Bloque 5 (conceptos básicos de arrays de NumPy).
*   **MODOS DE PROCESAMIENTO**:
    *   `1` ➔ **Vídeo original**: Muestra el flujo de vídeo de la cámara a color (BGR) sin alteraciones.
    *   `2` ➔ **Escala de grises**: Convierte cada cuadro utilizando conversión cromática elemental.
    *   `3` ➔ **Desenfoque (GaussianBlur)**: Aplica un filtro de suavizado gaussiano de paso bajo para difuminar detalles.
    *   `4` ➔ **Detección de bordes (Canny)**: Renderiza únicamente los contornos físicos del cuadro de imagen.
    *   `S` ➔ **Guardar captura**: Guarda de forma física el frame procesado actual como una imagen estática local en disco.
    *   `Q` ➔ **Salir**: Finaliza el bucle y libera limpiamente los recursos de hardware y ventanas del sistema.
*   **APIS RESPALDADAS POR LAS FUENTES**:
    *   `cv2.VideoCapture(index)`: Inicializa el canal de entrada físico de la webcam de la máquina.
    *   `cap.read()`: Lee el flujo secuencial, devolviendo un booleano de éxito (`ret`) y la matriz de píxeles (`frame` como array de NumPy).
    *   `cv2.imshow(winname, mat)`: Renderiza el cuadro de vídeo en una ventana gráfica de escritorio.
    *   `cv2.waitKey(delay)`: Espera milisegundos para capturar e interpretar eventos de teclas presionadas por el usuario.
    *   `cv2.cvtColor(src, code)`: Realiza conversiones de espacio de color (ej. `cv2.COLOR_BGR2GRAY`).
    *   `cv2.GaussianBlur(src, ksize, sigmaX)`: Difumina la imagen utilizando un kernel de tamaño impar dado (ej. `(15, 15)`).
    *   `cv2.Canny(image, threshold1, threshold2)`: Algoritmo de detección de contornos en base a dos umbrales de gradiente.
    *   `cv2.imwrite(filename, img)`: Guarda de forma física una matriz de píxeles como un archivo de imagen (`.png`, `.jpg`).
    *   `cap.release()`: Cierra el canal físico y apaga el sensor de hardware de la cámara web.
    *   `cv2.destroyAllWindows()`: Libera y destruye todas las ventanas abiertas en memoria de forma limpia.
*   **FLUJO LÓGICO DEL ALGORITMO**:
    ```
    [WEBCAM] ➔ [CAPTURAR FRAME] ➔ [ELEGIR MODO] ➔ [PROCESAR FRAME] ➔ [MOSTRAR RESULTADO] ➔ [GUARDAR CAPTURA OPCIONAL] ➔ [SALIR LIMPIAMENTE]
    ```
*   **METODOLOGÍA ACTIVA ("APRENDER HACIENDO")**:
    1.  **VER**: El docente realiza una demostración física activa lanzando el script interactivo y conmutando los modos en tiempo real.
    2.  **PROBAR**: El alumno copia, ejecuta el script en su entorno local y valida que se despliegue la ventana gráfica interactiva de vídeo.
    3.  **CAMBIAR DE MODO**: El alumno presiona las teclas de control (`1`, `2`, `3`, `4`) para experimentar cómo la matriz de píxeles transmuta en milisegundos según el filtro matemático seleccionado.
    4.  **GUARDAR**: El alumno presiona la tecla `s` para congelar el cuadro activo y salvaguardarlo físicamente en disco.
    5.  **MODIFICAR**: El alumno abre el archivo de código y altera los parámetros fijos (ej. aumentar el tamaño del kernel de difuminado o cambiar los umbrales de Canny).
    6.  **MINI-RETO**: El alumno implementa una de las siguientes opciones de modificación de parámetros sencillos:
        *   *Opción A (Intensidad del Blur)*: Modificar el tamaño del kernel de `cv2.GaussianBlur` por un valor impar superior (ej. `(31, 31)`) y predecir el impacto de suavizado.
        *   *Opción B (Umbrales de Canny)*: Ajustar los umbrales de gradiente de `cv2.Canny` (ej. de `(100, 200)` a `(50, 150)`) para aumentar de manera física la sensibilidad y cantidad de bordes detectados en pantalla.
        *   *Opción C (Nombre de Captura)*: Modificar el algoritmo para que cada pulsación de `s` guarde el archivo con un nombre incremental o que incluya marcas sencillas de texto del modo de origen (ej. `captura_canny.png`).
*   **MICROEVALUACIONES TIPO SOLOLEARN (Razonamiento de Código)**:
    *   *Reto 1: Detectar el bug de destrucción de ventanas*: El alumno ejecuta un script de OpenCV por terminal local. Observa que tras presionar 'q' la cámara se apaga, pero la ventana gráfica se queda congelada y colgada en la pantalla de su escritorio diciendo "No responde". ¿Qué llamada obligatoria de liberación de recursos omitió en su código?
        *   A) `cv2.destroyAllWindows()`
        *   B) `cap.release()`
        *   C) `cv2.waitKey(0)`
        *   D) `cv2.cvtColor()`
        *   *Respuesta*: **A**. (La llamada a `cap.release()` apaga el hardware físico de la cámara, pero para liberar y cerrar las ventanas gráficas de escritorio abiertas en la memoria de la máquina de forma limpia se requiere ejecutar sistemáticamente `cv2.destroyAllWindows()`).
    *   *Reto 2: Predecir el comportamiento del waitKey en bucle*: Al programar un flujo de reproducción de vídeo interactivo en bucle, el alumno escribe la instrucción `cv2.waitKey(0)`. ¿Qué comportamiento anómalo observará en la pantalla al ejecutar el programa?
        *   A) El vídeo se reproducirá de forma acelerada.
        *   B) El bucle se pausará por completo en el primer frame físico capturado, requiriendo que el usuario presione una tecla cualquiera para poder avanzar de uno en uno, imposibilitando la reproducción continua en tiempo real.
        *   C) La cámara web se apagará de forma automática por sobrecalentamiento.
        *   D) Se generará una excepción de tipo `ZeroDivisionError`.
        *   *Respuesta*: **B**. (La instrucción `cv2.waitKey(0)` indica al programa que pause de forma indefinida la ejecución hasta que se detecte una pulsación física de teclado. Para permitir un flujo continuo de vídeo en tiempo real, se debe especificar una espera de baja latencia (ej. `cv2.waitKey(1)` que espera un solo milisegundo antes de continuar el bucle)).
*   **EVIDENCIA DE APRENDIZAJE**: Script local ejecutable `.py` que corre de forma interactiva la webcam con los 4 modos y guarda de forma exitosa archivos de imagen con nombres personalizados sin dejar procesos del sistema o ventanas colgadas en memoria.
*   **MANTENER FUERA DE LA EVALUACIÓN**: No introducir reconocimiento facial, `CascadeClassifier`, YOLO, MediaPipe, algoritmos avanzados de deep learning ni modelos de inteligencia artificial para mantener la simplicidad didáctica.
*   **APOYO AL DOCENTE**:
    *   *Significado de cada modo*: Explicar que la imagen original es una matriz tridimensional de dimensiones `[alto, ancho, 3]` (BGR en OpenCV); la escala de grises es bidimensional `[alto, ancho]` simplificando la computación; el suavizado gaussiano difumina promediando píxeles vecinos basándose en una campana de Gauss; y Canny calcula el cambio de intensidad (gradiente) de los píxeles adyacentes para delimitar bordes físicos.
    *   *Teclas de control*: Enseñar al docente a enfatizar que la ventana gráfica de OpenCV debe estar activa y enfocada (*focused*) en el escritorio para que la llamada `cv2.waitKey()` capture las pulsaciones, ya que presionar las teclas en la terminal no surtirá efecto.
    *   *Error si no abre cámara y Plan B*: Si el comando lanza un error de inicialización, validar si el objeto de cámara no se abrió con `if not cap.isOpened()`. Proponer como Plan B cambiar el índice físico del hardware de `0` a `1` o `-1` para capturar cámaras externas o secundarias.
    *   *Permisos del sistema*: Detallar que en sistemas operativos modernos (como macOS o Windows con políticas activas) se debe autorizar explícitamente en el panel de privacidad el acceso de la aplicación VS Code / Python al uso de la cámara web física.
    *   *Cierre Limpio*: Recordar que la única vía de salida que garantiza la estabilidad del sistema operativo es romper el bucle infinito con la tecla configurada (`q`) para que se ejecuten secuencialmente `cap.release()` y `cv2.destroyAllWindows()`. Matar el script de forma abrupta con comandos de consola puede mantener ventanas congeladas o el hardware de la cámara bloqueado por el sistema.

---

## 2. PILLOW: TRATAMIENTO DE IMÁGENES
*   **FUENTES ENCONTRADAS**:
    *   *Pillow (PIL Fork) Handbook & Tutorial Documentation (Read the Docs)*: Manual de referencia de Pillow para manipulación, escalado, transformación y guardado de archivos de imagen.
*   **APIS RESPALDADAS**:
    *   `Image.open("ruta.jpg")`: Abre y carga la imagen en memoria como un objeto de tipo Image.
    *   `im.resize((ancho, alto))`: Modifica el tamaño físico de la imagen recibiendo una tupla con las nuevas dimensiones.
    *   `im.rotate(angulo)`: Rota la imagen el número de grados especificado en sentido antihorario.
    *   `im.crop((izq, sup, der, inf))`: Recorta una región rectangular de la imagen delimitada por una tupla de cuatro coordenadas.
    *   `im.convert("L")`: Realiza conversiones de modo (ej. convierte imágenes RGB a escala de grises "L").
    *   `im.filter(ImageFilter.BLUR)`: Aplica un filtro de desenfoque de convolución integrado importando el módulo `ImageFilter`.
    *   `im.save("salida.jpg")`: Exporta y guarda la imagen procesada de vuelta al disco en el formato deseado.
*   **INSTALACIÓN RESPALDADA**: SÍ (`pip install Pillow`).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El alumno puede desarrollar un editor de imágenes básico de consola que aplique transformaciones geométricas y de color de forma secuencial y guarde el resultado en un nuevo archivo físico.
*   **LAGUNAS**: Ninguna. Pillow cuenta con una API extremadamente directa que encaja perfectamente con el nivel del alumno.

---

## 3. AUTOMATIZACIÓN DE ARCHIVOS: PYTHON ESTÁNDAR
*   **FUENTES ENCONTRADAS**:
    *   *pathlib — Object-oriented filesystem paths — Python 3 Documentation*: Documentación oficial del módulo nativo para manipulación orientada a objetos de rutas de archivos.
    *   *shutil — High-level file operations — Python Documentation*: Guía técnica para operaciones complejas como mover o copiar elementos.
*   **APIS RESPALDADAS**:
    *   `from pathlib import Path`: Importación de la clase concreta de manipulación de rutas locales.
    *   `Path('.')` / `Path('carpeta')`: Inicializa una instancia de ruta apuntando al directorio especificado.
    *   `path.iterdir()`: Generador interactivo que itera sobre todos los elementos (archivos y carpetas) ubicados en el directorio activo.
    *   `path.is_file()` / `path.is_dir()`: Métodos booleanos para determinar el tipo de elemento de forma segura.
    *   `path.suffix`: Atributo de lectura directa que retorna la extensión del archivo (ej. `".txt"`, `".pdf"`).
    *   `path.name` / `path.stem`: Atributos que retornan el nombre completo o el nombre sin la extensión, respectivamente.
    *   `path.mkdir(parents=True, exist_ok=True)`: Crea de forma física directorios locales de forma robusta sin fallar si ya existen.
    *   `path.rename(nueva_ruta)`: Mueve o renombra de forma atómica un archivo local en el disco de trabajo.
    *   `shutil.move(origen, destino)`: Utility del módulo estándar para trasladar de forma segura archivos o carpetas, especialmente útil para operaciones cross-filesystem.
*   **INSTALACIÓN RESPALDADA**: SÍ. No requiere ninguna instalación (utilidades nativas del Core de Python).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El diseño del Lab trabaja exclusivamente sobre la carpeta segura `lab_archivos_prueba/`, con archivos falsos preparados para ordenar en categorías como `PDFs`, `Imagenes`, `Codigo`, `Textos` u `Otros` basándose en el atributo `suffix`.
*   **LAGUNAS**: Ninguna. La API moderna de `pathlib` sustituye por completo al antiguo y confuso módulo `os.path`, resultando ideal a nivel pedagógico.

---

## 4. OPENPYXL: EXCEL Y OFIMÁTICA
*   **FUENTES ENCONTRADAS**:
    *   *Tutorial & Styles — openpyxl Documentation (Read the Docs)*: Manual oficial de la librería científica para la manipulación y estilización de archivos Excel en formato `.xlsx`.
*   **APIS RESPALDADAS**:
    *   `from openpyxl import Workbook, load_workbook`: Importación del creador y cargador de libros.
    *   `wb = Workbook()`: Inicialización de un nuevo archivo de hoja de cálculo en memoria.
    *   `wb.active`: Obtención de la hoja de trabajo activa por defecto.
    *   `ws.title = "Nombre"` / `wb["SheetName"]`: Modificación de etiquetas de hojas y selección de pestañas por clave.
    *   `ws.cell(row=r, column=c).value = "Valor"` / `ws['A1'].value`: Lectura y escritura directa en celdas de forma indexada o por etiqueta.
    *   `ws.append(lista_datos)`: Añade de manera ágil una nueva fila completa al final de la última celda escrita de la hoja.
    *   `ws.iter_rows(min_row=1, max_row=10, min_col=1, max_col=5)`: Generador de iteraciones para recorrer rangos específicos de filas y columnas de la hoja.
    *   `ws['C1'] = "=SUM(C2:C10)"`: Soporte de fórmulas estándar escribiéndolas directamente como cadenas de texto.
    *   `PatternFill(start_color="HEX", end_color="HEX", fill_type="solid")`: Clase de estilización de fondos de celda mediante paletas hexadecimales.
    *   `Font(bold=True, size=12, color="HEX")`: Estilos tipográficos aplicados a la propiedad `.font` de las celdas.
    *   `wb.save("ruta.xlsx")`: Guarda físicamente el libro procesado en disco.
*   **INSTALACIÓN RESPALDADA**: SÍ (`pip install openpyxl`).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El alumno puede cargar un archivo de ventas en bruto, dar formato en negrita a las cabeceras, rellenar de amarillo o rojo filas condicionales aplicando PatternFill, calcular totales con fórmulas nativas de Excel y salvar un nuevo reporte elegante.
*   **LAGUNAS**: Ninguna. La librería proporciona una API perfectamente estructurada y testeable de forma local.

---

## 5. TKINTER: INTERFAZ GRÁFICA
*   **FUENTES ENCONTRADAS**:
    *   *tkinter — Python interface to Tcl/Tk — Python 3 Documentation*: Documentación de la biblioteca gráfica estándar de Python.
    *   *AskPython — Tkinter Tutorial & StringVar with Examples*: Guía técnica de uso de variables reactivas en ventanas.
*   **APIS RESPALDADAS**:
    *   `root = tk.Tk()`: Inicialización del motor gráfico y ventana principal (root widget) de escritorio.
    *   `tk.Label(root, text="Texto")`: Widget de visualización de información de texto o imágenes no interactivo.
    *   `tk.Entry(root)`: Widget de campo de texto de una sola línea para que el usuario ingrese datos. Se consulta mediante `.get()`.
    *   `tk.Button(root, text="Botón", command=funcion_llamada)`: Widget de botón interactivo que desencadena la ejecución de una función de Python mediante el parámetro `command`.
    *   `widget.pack()` / `widget.grid(row=r, column=c)`: Gestores de geometría para posicionar de forma física los widgets dentro del contenedor.
    *   `tk.StringVar()`: Clase de variable de control reactivo; vinculada a widgets mediante `textvariable`, se actualiza con `.set()` y lee con `.get()` reflejando cambios automáticos.
    *   `root.mainloop()`: Inicia el bucle de eventos del sistema operativo que mantiene la ventana abierta y procesando acciones de usuario.
*   **INSTALACIÓN RESPALDADA**: SÍ. Viene integrada por defecto en la distribución oficial de Python.
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El diseño de una pequeña calculadora interactiva o de una app que tome un nombre por un `Entry`, procese un saludo y lo pinte de forma reactiva en una etiqueta StringVar al hacer clic en un `Button` es perfectamente realizable en 15 minutos.
*   **LAGUNAS**: Ninguna. Su arquitectura de clases básicas es sumamente amigable y encaja muy bien tras asimilar las funciones del Bloque 3.

---

## INFORME DE SUFICIENCIA CURRICULAR (LAB FINAL)

*   **OPENCV**: **SUFICIENTE** (API interactiva por teclado waitKey, captura, color, GaussianBlur, Canny, imwrite y destrucción de ventanas sólida y física).
*   **PILLOW**: **SUFICIENTE** (API robusta y directa para carga, conversión, filtros y guardado).
*   **AUTOMATIZACIÓN DE ARCHIVOS**: **SUFICIENTE** (Utilidades `pathlib` del Core nativas y limpias).
*   **OPENPYXL**: **SUFICIENTE** (Soporte total para manipulación, append, fórmulas y estilización de celdas).
*   **TKINTER**: **SUFICIENTE** (La interfaz gráfica estándar integrada en Python es ideal para interactuar con botones y campos).
