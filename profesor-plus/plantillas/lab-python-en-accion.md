# Laboratorio de programación - Apoyo Profesor Plus

## Enfoque

Este Lab final opcional no es B8 y no forma parte de la evaluacion obligatoria. Sirve para cerrar el curso con cinco demostraciones cortas:

VER -> PROBAR -> MODIFICAR -> MINI-RETO

Mensaje central para el alumnado:

Ya sabes Python. Ahora mira todo lo que puedes hacer con el.

## Preparacion general

- Tener Python local funcional.
- Preparar un entorno donde puedan abrirse ventanas de escritorio.
- Instalar solo las librerias necesarias si se van a ejecutar todas las experiencias: `opencv-python`, `Pillow` y `openpyxl`.
- Revisar antes de clase `lab-python-en-accion/recursos/requirements-lab.txt`.
- No tocar SAMI ni presentar el Lab como nuevo bloque.
- No plantear notas, test ni microevaluaciones obligatorias.

## OpenCV

Preparacion:

- Comprobar webcam y permisos de camara.
- Probar `webcam_gris.py`.
- Confirmar que la ventana cambia con `1`, `2`, `3` y `4`.
- Confirmar que `s` guarda `captura_opencv.png`.
- Confirmar que se sale con `q` y se cierran camara y ventanas.

Explicacion sencilla:

Python abre la camara, lee muchas imagenes por segundo y deja elegir como verlas: normal, en gris, desenfocadas o solo con bordes. Tambien puede guardar una captura de lo que se esta viendo.

Que demostrar:

- `VideoCapture(0)` abre la webcam.
- `read()` lee un frame.
- `cvtColor()` transforma el frame a escala de grises.
- `GaussianBlur()` suaviza la imagen mezclando pixeles vecinos.
- `Canny()` detecta bordes a partir de una imagen gris suavizada.
- `imshow()` muestra el modo activo.
- `waitKey()` escucha las teclas de control.
- `imwrite()` guarda la captura mostrada.
- `release()` y `destroyAllWindows()` cierran recursos.

Teclas:

- `1` NORMAL: muestra el video original.
- `2` GRIS: simplifica la imagen quitando color.
- `3` BLUR: desenfoca detalles con `GaussianBlur`.
- `4` BORDES: aplica gris, reduccion de ruido y `Canny`.
- `S` CAPTURA: guarda el resultado visible.
- `Q` SALIR: termina el bucle y libera recursos.

Preguntas previsibles:

- "¿Me esta grabando?" No, el script no guarda video; solo muestra frames.
- "¿Que guarda la tecla S?" Guarda una imagen fija del modo activo.
- "¿Por que no cambian las teclas?" La ventana de video debe estar activa, no solo la terminal.
- "¿Por que no sale mi camara?" Puede estar ocupada, sin permisos o en otro indice.

Errores y diagnostico:

- Si `read()` falla, cerrar apps de videollamada.
- Revisar permisos del sistema.
- Probar `VideoCapture(1)`.
- Si la ventana queda colgada, comprobar que el flujo llega a `destroyAllWindows()`.
- Si `Canny` muestra demasiados o pocos bordes, ajustar umbrales como mini-reto.

Plan B:

- Demo desde el equipo del profesor.
- Lectura guiada del codigo si no hay webcam disponible.
- Probar con otra camara o cambiar temporalmente a modo normal para confirmar que la captura base funciona.

## Pillow

Preparacion:

- Confirmar que existe `lab-python-en-accion/recursos/assets/foto_original.ppm`.
- Probar `editar_foto.py`.
- Abrir `foto_editada.jpg`.

Explicacion sencilla:

Python abre una imagen de prueba, la cambia paso a paso y guarda una copia nueva.

Que demostrar:

- `Image.open()` carga.
- `resize()`, `crop()`, `rotate()` cambian geometria.
- `convert("L")` pasa a gris.
- `ImageFilter.BLUR` desenfoca.
- `save()` guarda la salida.

Preguntas previsibles:

- "¿Estamos tocando el logo?" No. La practica usa una imagen neutra del Lab.
- "¿Se rompe la original?" No, se guarda con otro nombre.

Errores y diagnostico:

- Si no encuentra la imagen, revisar carpeta y ruta.
- Si Pillow no esta instalado, no se ejecutara el import.

Plan B:

- Usar la imagen neutra incluida.
- Reducir la practica a abrir, convertir a gris y guardar.

## Automatizacion

Preparacion:

- Revisar la carpeta `lab_archivos_prueba`.
- Confirmar que contiene solo archivos falsos.
- Explicar que nunca se usa `Downloads`, `Documentos` ni `Escritorio`.

Explicacion sencilla:

Python mira la extension de cada archivo falso y lo coloca en la carpeta de categoria adecuada.

Que demostrar:

- `Path` representa la carpeta.
- `iterdir()` recorre archivos.
- `is_file()` evita mover carpetas.
- `suffix` decide la categoria.
- `mkdir()` crea destinos.
- `shutil.move()` mueve solo dentro del laboratorio.

Preguntas previsibles:

- "¿Puedo probarlo con mis descargas?" No en esta practica.
- "¿Que pasa con `.csv`?" Irá a `Otros` salvo que se anada al diccionario.

Errores y diagnostico:

- Si no mueve nada, revisar que los archivos sigan en la raiz de `lab_archivos_prueba`.
- Si ya se ejecuto una vez, los archivos estaran dentro de subcarpetas.

Plan B:

- Cambiar `MOVER_ARCHIVOS = False` para simular.
- Volver a colocar archivos falsos en la raiz de la carpeta de pruebas.

## OpenPyXL

Preparacion:

- Instalar `openpyxl`.
- Cerrar `ventas_lab.xlsx` si ya existe y esta abierto.
- Probar `crear_excel.py`.

Explicacion sencilla:

Python escribe una hoja Excel completa: datos, formulas, colores y texto en negrita.

Que demostrar:

- `Workbook()` crea el libro.
- `append()` anade filas.
- Las formulas se escriben como texto de Excel.
- `Font` cambia tipografia.
- `PatternFill` aplica color.
- `iter_rows()` recorre rangos.
- `save()` guarda.

Preguntas previsibles:

- "¿Python calcula la formula?" Python escribe la formula; Excel la calcula al abrir.
- "¿Por que no guarda?" El archivo puede estar abierto.

Errores y diagnostico:

- Cerrar Excel.
- Cambiar el nombre de salida.
- Revisar formulas y rangos.

Plan B:

- Guardar como `ventas_lab_2.xlsx`.
- Hacer solo datos y formato si las formulas confunden.

## Tkinter

Preparacion:

- Probar que `import tkinter` funciona.
- Ejecutar `mi_app_tkinter.py` en un equipo con escritorio.

Explicacion sencilla:

Python crea una ventana con una etiqueta, una caja para escribir y un boton que llama a una funcion.

Que demostrar:

- `Tk()` crea la ventana.
- `Entry` recoge texto.
- `Button(command=...)` ejecuta una funcion.
- `StringVar` actualiza el mensaje.
- `pack()` coloca widgets.
- `mainloop()` mantiene la app viva.

Preguntas previsibles:

- "¿Por que el programa no termina?" Porque la ventana queda escuchando eventos.
- "¿Por que no abre?" Puede faltar Tcl/Tk o una interfaz grafica local.

Errores y diagnostico:

- Revisar `command=saludar`, sin parentesis.
- Probar una ventana minima con `tk.Tk()`.
- Confirmar que `mainloop()` esta al final.

Plan B:

- Usar `input()` y `print()` en consola con la misma funcion de saludo.

## Cierre

Terminar con orientacion, no con nuevas obligaciones:

- Web con Flask o Django.
- IoT con Raspberry Pi o ESP32.
- Ciencia de datos.
- Machine Learning.
- Vision artificial avanzada.
- Automatizacion profesional.
- IA y agentes.
