# 03 · BANCO DE PREGUNTAS Y RESPUESTAS DOCENTES

Este documento constituye el repositorio central de dudas y preguntas previsibles de los alumnos a lo largo de los 7 bloques del curso **"Programar con Python en 2027"**.

Para cada cuestión, el formador de la **Red Circular FAB** dispone de:
1. **Origen y Naturaleza:** Clasificación explícita (*Contenido existente en el curso*, *Síntesis pedagógica*, *Apoyo docente derivado* o *Explicación complementaria*).
2. **Explicación Sencilla / Directa:** Respuesta clara y sin rodeos para transmitir al alumno.
3. **Analogía Cotidiana:** Modelo mental del mundo real para desbloquear la comprensión.
4. **Explicación Técnica Ampliada:** Fundamento informático riguroso para la solvencia del formador.
5. **Errores y Confusiones Relacionadas:** Puntos críticos a vigilar en el aula.

---

# BLOQUE 1: FUNDAMENTOS Y LÓGICA

### P1.1. ¿Por qué al sumar dos números leídos con `input()` me sale `1020` en vez de `30`?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** La función `input()` siempre lee lo que escribe el usuario como una cadena de texto (`str`), aunque sean dígitos. El operador `+` entre textos los une (concatena) en lugar de sumarlos matemáticamente. Para sumar números reales hay que convertirlos antes con `int()` o `float()`.
* **Analogía Cotidiana:** Si juntas la palabra "10" y la palabra "20" en dos papeles pegados, lees "1020". Si quieres sumar su valor numérico, primero tienes que pasar los billetes por la máquina contadora (`int()`).
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Python tiene tipado dinámico pero fuertemente tipado. El operador `+` implementa sobrecarga: para objetos `str` realiza concatenación; para `int`/`float` realiza suma aritmética. No realiza coerción de tipo implícita de cadena a número.
* **Error Relacionado:** Olvidar convertir `float` cuando el usuario puede introducir decimales (ej. `"12.50"` romperá `int()` con `ValueError`).

---

### P1.2. ¿Qué diferencia hay entre `/`, `//` y `%`, y por qué usamos `divmod()`?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:**
  * `/` es la división normal (siempre da decimales, ej. `7 / 2 = 3.5`).
  * `//` calcula el cociente redondeado hacia abajo, ej. `7 // 2 = 3` y `-7 // 2 = -4`.
  * `%` es el módulo (calcula el resto sobrante de la división, ej. `7 % 2 = 1`).
  * `divmod(a, b)` calcula el cociente entero y el resto a la vez y te los entrega juntos en una sola orden: `cociente, resto = divmod(7, 2)`.
* **Analogía Cotidiana:** Tienes 137 minutos y quieres pasarlos a horas y minutos. Si divides entre 60, `divmod(137, 60)` te dice directamente: *"Son 2 horas completas y te sobran 17 minutos"*.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Para los enteros de estos ejercicios, `divmod(a, b)` devuelve el cociente y el resto juntos. La ventaja pedagógica es expresar con claridad los dos resultados; no necesitamos prometer una mejora de rendimiento.

---

### P1.3. ¿Por qué `range(1, 5)` cuenta del 1 al 4 y no llega al 5?
* **Naturaleza:** `[SEGÚN EL CURSO · Apoyo docente derivado]`
* **Explicación Sencilla:** `range()` usa un **intervalo semiabierto** `[inicio, fin)`. El número de inicio se incluye, pero el límite de fin sirve como barrera de parada y **nunca se incluye**.
* **Analogía Cotidiana:** Es como una valla de obra colocada en el kilómetro 5. Puedes correr por el camino pasando por los puntos 1, 2, 3 y 4, pero al llegar justo al punto 5 te detienes y no lo pisas.
* **Explicación Técnica:**
  `[EXPLICACIÓN COMPLEMENTARIA]` Esta convención matemática simplifica el cálculo de longitud: `fin - inicio = total de vueltas`. Con `range(1, 5)`, `5 - 1 = 4` iteraciones exactas. Además, encaja perfectamente con la indexación basada en cero (0-based) de las listas de tamaño N (`range(0, N)` recorre de 0 a N-1).

---

### P1.4. ¿Por qué `0.1 + 0.2` en Python da `0.30000000000000004`?
* **Naturaleza:** `[EXPLICACIÓN COMPLEMENTARIA · Apoyo docente derivado]`
* **Explicación Sencilla:** Los ordenadores no guardan los números en base 10 (decimal), sino en base 2 (binario). Números como `0.1` o `0.2` tienen infinitos decimales periódicos en binario (como le pasa a un tercio `1/3 = 0.3333...` en base 10), por lo que se produce un minúsculo desajuste de redondeo al almacenarlos en memoria.
* **Analogía Cotidiana:** Intenta escribir un tercio de euro con céntimos: `0.33 €`. Si sumas tres tercios (`0.33 + 0.33 + 0.33`), obtienes `0.99 €`, perdiendo 1 céntimo por el límite físico de decimales.
* **Explicación Técnica:**
  `[EXPLICACIÓN COMPLEMENTARIA]` Estándar IEEE 754 de coma flotante de doble precisión (64 bits). Para formatear salidas limpias de cara al usuario en el curso usamos f-strings con precisión acotada: `f"{0.1 + 0.2:.2f}"` que muestra `0.30`.

---

# BLOQUE 2: ESTRUCTURAS DE DATOS

### P2.1. Si hago `b = a` y luego modifico `b`, ¿por qué cambia también `a`?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** En Python, las variables que contienen listas no guardan los datos directamente dentro de sí, sino una **referencia** (una dirección de memoria) que apunta a la lista física. Al hacer `b = a`, no estás duplicando la lista, sino poniendo dos etiquetas diferentes al mismo objeto en la memoria.
* **Analogía Cotidiana:** Dos personas tienen una copia de la llave del mismo trastero (`a` y `b`). Si una de ellas entra y pinta la pared de verde (`b.append(...)`), cuando la otra persona abre con su llave (`a`), se encuentra la pared pintada de verde porque el trastero físico es el mismo.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Las listas son tipos mutables. Si se desea una copia independiente desacoplada, en el curso se explica el uso de slicing completo `b = a[:]` o el método `b = a.copy()`.

---

### P2.2. ¿Por qué `texto[0] = "X"` me da error si con las listas sí puedo hacerlo?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Los textos (`str`) y las tuplas (`tuple`) son **inmutables**: una vez creados en memoria, Python prohíbe terminantemente alterar sus elementos individuales. Si quieres un texto modificado, debes construir uno nuevo combinando trozos (slicing) o usando métodos como `.replace()`.
* **Analogía Cotidiana:** Una lista es una pizarra de tiza (puedes borrar una letra y poner otra). Un string es un texto grabado en una lápida de piedra: si te has equivocado, tienes que tallar una piedra nueva.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` El intento produce `TypeError: 'str' object does not support item assignment`; se crea un texto nuevo para obtener el cambio.

---

### P2.3. ¿Cuándo debo usar una Lista, una Tupla, un Set o un Diccionario?
* **Naturaleza:** `[SEGÚN EL CURSO · Síntesis pedagógica]`
* **Explicación Sencilla:**
  * **Lista `[ ]`:** Cuando necesitas una secuencia ordenada de elementos que va a cambiar de tamaño (añadir, quitar, ordenar).
  * **Tupla `( ,)`:** Cuando tienes un grupo fijo de datos que nunca debe modificarse por error (coordenadas, dimensiones fijas).
  * **Set `{ }`:** Cuando quieres eliminar duplicados automáticamente o comprobar instantáneamente si algo está en la lista sin importar el orden.
  * **Diccionario `{k: v}`:** Cuando tienes datos etiquetados con un nombre o clave para buscar directamente (como una ficha de cliente o sensor).
* **Analogía Cotidiana:**
  * Lista = Lista de la compra.
  * Tupla = Tu fecha y lugar de nacimiento en el DNI.
  * Set = El bombo de la lotería (bolas únicas sin repetir).
  * Diccionario = Ficha médica de un paciente (Nombre, Edad, Alergias).

---

### P2.4. ¿Por qué `(5)` es un número y `(5,)` es una tupla?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** En Python, los paréntesis se usan habitualmente en matemáticas para agrupar operaciones (ej. `(3 + 2) * 5`). Por eso, si pones `(5)`, Python interpreta que son paréntesis matemáticos alrededor del número 5. Para indicarle que quieres crear una tupla de un solo elemento, es **obligatorio poner una coma final**: `(5,)`.
* **Analogía Cotidiana:** La coma es la matrícula que identifica a la tupla; los paréntesis son solo el embalaje.

---

# BLOQUE 3: FUNCIONES Y MODULARIDAD

### P3.1. ¿Por qué mi función imprime el resultado pero luego me da error al usarlo en otra operación?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Porque has usado `print()` en lugar de `return`. `print()` solo pinta caracteres en la pantalla para que los lea el ojo humano; no entrega el dato al programa. Cuando una función no tiene `return`, devuelve por defecto el valor vacío `None`. No se pueden hacer cálculos matemáticos con `None`.
* **Analogía Cotidiana:** Vas a la panadería y pides una barra de pan. Si el panadero te enseña la barra a través del cristal (`print`), la ves muy bien pero te vas con las manos vacías a casa. Si te entrega la barra en la mano (`return`), puedes llegar a casa y hacerte un bocadillo.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Intentar realizar `resultado = mi_funcion() + 10` cuando la función hace `print()` arroja `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. `return` es la única instrucción que devuelve el control y el valor a la pila llamadora.

---

### P3.2. ¿Por qué no puedo usar fuera de la función una variable que creé dentro?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Por el **ámbito local (scope)**. Los nombres locales de una función no se pueden consultar directamente desde fuera. Si necesitas reutilizar el resultado, devuélvelo con `return`; no confundas el ámbito del nombre con la vida del objeto devuelto.
* **Analogía Cotidiana:** Es como la pizarra de un aula de taller: escribes notas para hacer la práctica de esa hora, y al salir por la puerta se borra la pizarra para que la siguiente clase empiece limpia.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Aislamiento de marcos de pila (*stack frames*). Evita que funciones distintas colisionen pisándose variables con el mismo nombre. Si necesitas sacar un valor, se devuelve con `return`. Si necesitas meterlo, se pasa como parámetro.

---

### P3.3. ¿Por qué usamos `with open(...)` y no simplemente `open()` y `close()`?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** `with open(...)` cierra el archivo al salir del bloque, también si ocurre una excepción. No garantiza que una escritura interrumpida esté completa: hay que comprobar el resultado y tratar el error.
* **Analogía Cotidiana:** Es una puerta con muelle automático: entras a la habitación, y en cuanto sales (o si tropiezas dentro), la puerta se cierra sola con seguridad para que no entre nadie ni se escape nada.

---

# BLOQUE 4: PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

### P4.1. ¿Qué es exactamente `self` y por qué tengo que ponerlo en todas partes?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** `self` es el nombre convencional del parámetro que representa a **este objeto concreto**, no una palabra reservada. Como una clase es solo un plano que sirve para fabricar cientos de objetos, cuando un método se ejecuta necesita saber a cuál de todos los objetos tiene que leerle o modificarle sus datos.
* **Analogía Cotidiana:** Si el profesor dice a la clase: *"Que cada uno mire su propio reloj y me diga la hora"*, la palabra "su propio" es `self`. Cada alumno mira el reloj que lleva en su muñeca (`self.hora`), no el reloj del compañero de al lado.
* **Explicación Técnica:**
  `[SEGÚN EL CURSO]` Cuando se invoca `objeto.metodo(arg)`, Python traduce internamente la llamada a `Clase.metodo(objeto, arg)`. `self` recibe explícitamente la referencia en memoria de la instancia que originó el mensaje.

---

### P4.2. ¿Cuándo debo usar Composición y cuándo Herencia?
* **Naturaleza:** `[SEGÚN EL CURSO · Síntesis pedagógica]`
* **Explicación Sencilla:**
  * Usa **Herencia** cuando puedas decir con naturalidad **"ES UN"**: Un `SensorTemperatura` **es un** `Sensor`. Hereda sus características base y añade las suyas propias.
  * Usa **Composición** cuando puedas decir **"TIENE UN"**: Un `FabLab` **tiene una** lista de sensores y **tiene una** cortadora láser. El FabLab no "es" un sensor; gestiona sensores.
* **Analogía Cotidiana:**
  * Un coche **es un** vehículo motorizado (Herencia).
  * Un coche **tiene un** volante y cuatro ruedas (Composición).

---

### P4.3. ¿Para qué sirve `super().__init__()`?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Sirve para ejecutar el constructor de la clase madre (la clase base) antes de configurar lo nuevo de la clase hija. Así no tienes que volver a escribir todo el código de inicialización que la clase base ya sabe hacer.
* **Analogía Cotidiana:** Es como heredar una casa familiar: primero dejas que el constructor monte los cimientos y paredes maestras estándar (`super().__init__()`) y luego tú decoras tu habitación a tu gusto.

---

# BLOQUE 5: PYTHON APLICADO Y LIBRERÍAS

### P5.1. ¿Por qué usamos NumPy si las listas de Python ya pueden guardar números?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Porque NumPy permite expresar operaciones sobre arrays numéricos sin escribir un bucle Python para cada elemento (**vectorización**). Su utilidad en el curso es calcular indicadores de forma clara; la velocidad depende de la operación y del tamaño de los datos.
* **Analogía Cotidiana:** Si tienes que sellar 10.000 cartas, una lista de Python es una persona poniendo el sello a mano carta por carta. NumPy es una máquina industrial de imprenta que estampa las 10.000 cartas de un solo golpe.

---

### P5.2. ¿Por qué da error escribir `df[df["Edad"] > 20 and df["Activo"] == True]` en Pandas?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Porque la palabra `and` de Python está diseñada para evaluar un único valor booleano (`True` o `False`). En Pandas, `df["Edad"] > 20` no es un solo booleano, sino una columna entera de miles de `True` y `False`. Para comparar dos columnas elemento por elemento debemos usar el operador bitwise `&` y meter cada condición obligatoriamente entre paréntesis: `df[(df["Edad"] > 20) & (df["Activo"] == True)]`.
* **Analogía Cotidiana:** No puedes pasar dos mallas perforadas por una puerta a la vez si no las alineas agujero con agujero (`&`).

---

### P5.3. ¿Qué diferencia hay entre Playwright y descargar datos con un simple archivo?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Muchas páginas web modernas no tienen la información escrita directamente en su código HTML inicial, sino que la cargan después mediante JavaScript cuando el usuario hace clic o se desplaza por la pantalla. Playwright abre un navegador web real en segundo plano, espera a que el JavaScript cargue todos los datos dinámicos e interactúa con los botones exactamente como lo haría una persona.

---

### P5.4. ¿Cómo explico ReportLab a alguien que nunca lo ha usado?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido actualizado B5]`
* **Explicación Sencilla:** ReportLab sirve para convertir datos calculados por Python en un PDF real. En el curso usamos Platypus: en vez de dibujar con coordenadas, creamos una lista `story` con piezas como `Paragraph`, `Image`, `Table` y `Spacer`, y al final `build()` fabrica el PDF.
* **Analogía Cotidiana:** Es como preparar una bandeja de impresión: primero pones el logo, luego el título, después los datos y por último la tabla. La imprenta (`build`) lo convierte en documento.

---

### P5.5. La factura PDF no se genera. ¿Qué compruebo?
* **Naturaleza:** `[SEGÚN EL CURSO · Diagnóstico docente]`
* **Respuesta para el Formador:** Comprueba en este orden: que `reportlab` está instalado, que se ejecuta el script correcto, que la carpeta permite escribir, que el PDF no está abierto en otro visor, que el logo existe en la ruta esperada y que la llamada final `doc.build(story)` se ejecuta.
* **Pistas al Alumno:** "¿Dónde se crea el documento?", "¿qué contiene la lista `story` justo antes de `build()`?", "¿la ruta del logo existe desde la carpeta desde la que estás ejecutando?"

---

### P5.6. ¿Qué diferencia hay entre los datos de la factura y su maquetación?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido actualizado B5]`
* **Explicación Sencilla:** Los datos son la información: empresa, cliente, cantidades, precios, base imponible, IVA y total. La maquetación es cómo se colocan esos datos en el PDF: párrafos, logo, tabla, colores y espacios.
* **Analogía Cotidiana:** Los datos son los ingredientes; la maquetación es emplatar la comida para servirla bien.

---

### P5.7. ¿Qué conocimientos anteriores utiliza la práctica de factura?
* **Naturaleza:** `[SEGÚN EL CURSO · Conexión B1-B5]`
* **Explicación Sencilla:** Usa operaciones de B1 para calcular subtotales e IVA, listas y diccionarios de B2 para representar líneas de factura, funciones de B3 para separar cálculos y creación del PDF, y criterio modular de B4 como mejora opcional, sin hacer obligatoria la POO.

---

# BLOQUE 6: DEL NOTEBOOK AL ENTORNO PROFESIONAL

### P6.1. ¿Por qué usamos entornos virtuales (`venv`) si las librerías ya se pueden instalar en el ordenador?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Porque si trabajas en dos proyectos diferentes en tu ordenador, el Proyecto A puede necesitar Pandas versión 1.5 y el Proyecto B puede necesitar Pandas versión 2.2. Si instalas todo en el sistema global, actualizar una librería para un proyecto romperá el otro. El entorno virtual crea una carpeta aislada para cada proyecto con sus propias librerías independientes.
* **Analogía Cotidiana:** Es como tener cajas de herramientas separadas para carpintería y para fontanería: no mezclas las llaves inglesas con las gubias de tallar madera para que no se desafilen.

---

### P6.2. ¿Qué significa `if __name__ == "__main__":` en los scripts de Python?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Es una cláusula de seguridad que le dice a Python: *"Ejecuta este bloque de código solo si el archivo se ha lanzado directamente desde la terminal como programa principal. Si alguien está importando este archivo desde otro módulo para usar sus funciones, no ejecutes las pruebas automáticas"*.
* **Analogía Cotidiana:** Es el botón de "Puesta en marcha de demostración" en una máquina: solo lo pulsas cuando estás probando la máquina individualmente en el banco de pruebas, pero lo desconectas cuando la máquina se integra dentro de una fábrica más grande.

---

### P6.3. ¿Por qué es mejor usar el Depurador (Debugger) de VS Code que poner `print()` en todas partes?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Poner `print()` te obliga a modificar tu código, llenar la pantalla de texto caótico y luego acordarte de borrar todos los `print()` antes de entregar el proyecto. El depurador te permite congelar el programa en vivo con un punto de interrupción (breakpoint), ver el valor exacto de todas las variables en la memoria en ese instante y avanzar línea por línea a cámara lenta sin tocar ni una sola línea de tu código.

---

# BLOQUE 7: PYTHON + IA

### P7.1. ¿Por qué la IA me genera código que parece perfecto pero luego no funciona?
* **Naturaleza:** `[SEGÚN EL CURSO · Síntesis pedagógica]`
* **Explicación Sencilla:** Porque los modelos de lenguaje no "piensan" ni ejecutan código en su cabeza; son motores probabilísticos que predicen qué palabras y símbolos suelen ir juntos según millones de textos que han leído. Por eso pueden inventar nombres de funciones que parecen lógicas pero no existen en la librería real (**alucinaciones**) o mezclar versiones incompatibles.
* **Analogía Cotidiana:** La IA es como un actor que sabe recitar un diálogo médico con acento impecable: suena completamente convincente, pero no tiene un título de medicina ni puede operarte del apéndice.

---

### P7.2. ¿Cómo evito el "desarrollo zombi" cuando programo con asistentes de IA?
* **Naturaleza:** `[SEGÚN EL CURSO · Contenido existente]`
* **Explicación Sencilla:** Aplicando siempre el **Flujo Crítico 2027**:
  1. No pidas código sin tener antes un plan claro en lenguaje natural.
  2. Pide funciones pequeñas y acotadas, nunca "hazme todo el programa".
  3. Lee cada línea generada y sé capaz de explicar qué hace antes de copiarla.
  4. Ejecuta el código en tu máquina local y valida físicamente su comportamiento con datos reales y casos límite.

---

### P7.3. ¿Qué LangGraph aparece ahora en B7?

* **Naturaleza:** `[SEGÚN EL CURSO]`
* **Respuesta:** La ruta actual incluye EXP-05 con un grafo ejecutable sin LLM: Python decide entre rutas de stock. Es distinto de la orquestación conversacional avanzada del diseño histórico, que se conserva como ampliación.
* **Límite:** Si no está instalado LangGraph, se pueden probar las reglas puras; el grafo queda no verificado. Las fuentes antiguas no bastan para decidir la obligatoriedad de la evaluación actual: véase [07](07-LAGUNAS-Y-LIMITES.md).

### P7.4. ¿Necesito Ollama para terminar IA-Control?

* **Naturaleza:** `[SEGÚN EL CURSO]`
* **Respuesta:** No. El [README de IA-Control](../bloques/bloque7/recursos/proyectos-b7/ia-control/README.md) permite trabajar con `--sin-ia` y respuestas de demostración. Se comprueba que Python valida y acepta o descarta la respuesta. Ollama real es opcional.

### P7.5. ¿Puedo afirmar que el agente lo ha comprobado si solo lo explica?

* **Naturaleza:** `[SEGÚN EL CURSO]`
* **Respuesta:** No. Pide comandos, resultados y evidencia. Una revisión de código no equivale a una ejecución. Marca lo que falta como no verificado y conserva la supervisión humana.

---



# LAB FINAL OPCIONAL: PYTHON EN ACCIÓN

### L1. OpenCV no abre la webcam. ¿Qué compruebo?
* **Naturaleza:** `[SEGÚN EL CURSO · Recurso final opcional]`
* **Respuesta para el Formador:** Revisar permisos de cámara, cerrar videollamadas u otras apps que la estén usando, comprobar que la ventana de OpenCV puede abrirse en ese equipo y probar el índice `0` o `1` en `VideoCapture`.
* **Plan B:** Hacer la demo desde el equipo del profesor o leer el flujo del código: abrir cámara, leer frame, procesar, mostrar, escuchar tecla y cerrar recursos.

---

### L2. Quiero hacer reconocimiento facial. ¿Forma parte de este curso?
* **Naturaleza:** `[SEGÚN EL CURSO · Límite curricular]`
* **Respuesta Sencilla:** No. El Lab de OpenCV trabaja webcam interactiva, escala de grises, desenfoque, detección de bordes y captura. Reconocimiento facial, reconocimiento de objetos, `CascadeClassifier`, YOLO, MediaPipe y modelos de IA quedan fuera del Lab.
* **Reconducción:** Si el alumno tiene interés, se puede presentar como camino futuro, pero no como tarea ni requisito del curso.

---

### L3. ¿Cómo preparo una versión de 30 minutos del Lab?
* **Naturaleza:** `[SEGÚN EL CURSO · Adaptación docente]`
* **Respuesta para el Formador:** Elige una sola experiencia, muestra el resultado final en 3 minutos, ejecuta el script con el grupo, cambia un parámetro pequeño y cierra con un mini-reto. No intentes cubrir todo el catálogo en 30 minutos; consulta [08](08-LAB-PYTHON-EN-ACCION.md).

### L4. ¿El Copiloto necesita RAG porque hay un Lab de RAG local?

* **Naturaleza:** `[SEGÚN EL CURSO]`
* **Respuesta:** No. El Lab es una práctica independiente. Este pack funciona como instrucciones y conocimiento documental, sin construir un sistema RAG. Consulta el [README](README.md).

### D1. ¿Qué hago si el agente no encuentra la respuesta en el curso?

* **Naturaleza:** `[SEGÚN EL CURSO · Regla del pack]`
* **Respuesta modelo:** «No puedo verificarlo con los archivos disponibles. He consultado [archivo y apartado]. Facilita [material que falta]; si quieres una explicación general, la separaré como [EXPLICACIÓN COMPLEMENTARIA]». No inventes una fuente ni presentes una conjetura como contenido oficial.
