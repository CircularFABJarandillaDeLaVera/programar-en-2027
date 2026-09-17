# 02 · GUÍA DOCENTE BLOQUE A BLOQUE (B1 A B7)

Esta guía conserva explicaciones, analogías, demostraciones y Plan B para los siete bloques. Empieza por el [mapa de recursos actuales](04-PRACTICAS-Y-APOYOS.md) y adapta estos apoyos a la actividad real. Los ejemplos ilustrativos —incluidos los de sensores— no describen necesariamente las clases de SAMI. Las duraciones reducidas son propuestas docentes, no la duración oficial del bloque.

---

## Patrón de apoyo docente

Cuando el Copiloto prepare una sesión, debe responder con esta estructura mínima:

1. **Explicación rigurosa:** definición correcta del concepto y por qué se usa.
2. **Explicación intuitiva:** versión sencilla, sin jerga innecesaria.
3. **Analogía:** imagen cotidiana que ayude al alumno a recordarlo.
4. **Mesa/material:** entorno, archivos, dependencias y pantallas que conviene tener abiertas.
5. **Demostración:** código o flujo que se puede enseñar en directo.
6. **Errores controlados:** fallo intencionado útil para provocar diagnóstico.
7. **Pistas:** tres niveles, de pregunta abierta a plantilla mínima.
8. **Respuestas esperadas:** qué debería contestar o producir el alumno.
9. **Criterio para continuar:** evidencia observable de que el grupo lo ha entendido.
10. **Plan B:** técnico, pedagógico y temporal.

Adaptaciones:

- **Completa:** mantiene explicación, práctica, modificación, mini-reto y puesta en común.
- **Reducida:** conserva solo la idea central, una práctica guiada y una comprobación.
- **Emergencia:** muestra el resultado, lee el código con el grupo y pide una predicción de salida o diagnóstico.

---

# BLOQUE 1: FUNDAMENTOS Y LÓGICA

## 1.1. Objetivo Operativo
Capacitar al alumno para abrir un entorno interactivo (Google Colab / Jupyter Notebook), escribir y ejecutar instrucciones en Python, almacenar información en variables con tipado dinámico, realizar operaciones aritméticas con `divmod()`, formatear salidas con f-strings, interactuar con el usuario mediante `input()` y casteos explícitos, y controlar el flujo del programa con condicionales (`if/elif/else`) y bucles (`for/while` con `break/continue`).

---

## 1.2. Mesa del Instructor y Preparación
* **Proyector / Pantalla:** Cuaderno de Google Colab en blanco listo para teclear en directo (con zoom al 125% para legibilidad).
* **Entorno de respaldo:** Navegador abierto con una segunda pestaña en Colab por si falla una sesión.
* **Archivos necesarios:** Ninguno externo (código autónomo en celdas).
* **Frase de apertura:** *"Programar no es memorizar órdenes raras; es darle instrucciones precisas a una máquina muy rápida pero muy literal."*

---

## 1.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **Variables y Tipos** | `nombre = "Ana"`<br>`edad = 25` | **Cajas con etiqueta:** La variable es la etiqueta pegada en una caja donde guardamos un objeto (un texto, un número o un interruptor). | Python infiere el tipo automáticamente (`str`, `int`, `float`, `bool`), pero no mezcla peras con manzanas sin casteo. |
| **Operadores y `divmod`** | `h, m = divmod(137, 60)` | **Repartir caramelos / cajas:** `divmod` calcula cuántos paquetes enteros llenas (cociente) y cuántos caramelos sueltos te sobran (resto) de un solo golpe. | Sustituye a hacer `137 // 60` y `137 % 60` por separado, devolviendo dos valores empaquetados. |
| **f-strings** | `f"Total: {precio:.2f} €"` | **Plantilla con huecos:** Escribes una frase normal y dejas huecos entre llaves `{}` que Python rellena con el valor de las variables en tiempo real. | El modificador `:.2f` fuerza exactamente dos cifras decimales, ideal para precios. |
| **Casting con `input`** | `edad = int(input("Edad: "))` | **Aduana de datos:** `input()` siempre entrega texto (cuerda de caracteres). Si necesitas hacer matemáticas, hay que pasarlo por la aduana `int()` o `float()`. | Sin `int()`, `'10' + '5'` daría `'105'`, no `15`. |
| **Condicionales** | `if edad < 12:`<br>`    precio = 5` | **Bifurcación en el camino / Semáforo:** Según la condición (Verdadera o Falsa), el programa toma un carril y descarta el otro. | La indentación (4 espacios) es la que indica a Python qué código pertenece al bloque `if`. |
| **Bucles `for` y `range`** | `for i in range(1, 6):` | **Cinta transportadora:** El bucle procesa uno a uno los elementos que vienen en fila por la cinta. | `range(1, 6)` genera del 1 al 5. El límite superior **nunca** se incluye. |
| **Bucles `while` y control** | `while intentos < 3:`<br>`    break` | **Vigilante de seguridad:** Sigue ejecutando mientras se cumpla la condición. `break` es la palanca de emergencia para salir de golpe. | Cuidado con los bucles infinitos si la condición de salida no cambia dentro. |

---

## 1.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El engaño del `input()` sin casteo
1. Escribe en pantalla:
   ```python
   num1 = input("Introduce primer número: ")
   num2 = input("Introduce segundo número: ")
   print(f"La suma es: {num1 + num2}")
   ```
2. Pide a un alumno que introduzca `10` y `20`.
3. **Pregunta a la clase:** *"¿Por qué sale 1020 en vez de 30?"*
4. **Explicación docente:** Explicar que `input()` siempre lee texto (`str`). Corregir en directo envolviendo con `int(input(...))`.

### Demostración 2: El error del `range()` y el límite excluido
1. Escribe:
   ```python
   for n in range(1, 5):
       print(f"Procesando elemento {n}")
   ```
2. Pregunta: *"¿Cuántas veces se ha ejecutado y cuál es el último número?"* (Se ejecuta 4 veces, del 1 al 4).
3. Recordar la regla mnemotécnica: *"En Python el límite final se queda en la puerta, no entra."*

---

## 1.5. Adaptaciones Temporales (B1)
* **150 min (Estándar):** Presentación + Demo interactiva (30 min) + Prácticas 01 a 04 individuales (80 min) + Mini-retos y puesta en común (40 min).
* **90 min (Intensivo):** Demo rápida variables + condicionales + bucle `for` (25 min), Prácticas 01 y 02 (45 min), reto integrador guiado (20 min).
* **60 min (Compacto):** Explicación condensada de variables, f-strings, `if` y `for` (20 min), Práctica 02 (precios/edades) en parejas (30 min), cierre (10 min).
* **30 min (Cápsula):** Demo ejecutando una celda que calcula precios según tramo de edad y modificación guiada de parámetros por el alumnado.

---

# BLOQUE 2: ESTRUCTURAS DE DATOS

## 2.1. Objetivo Operativo
Dominar el almacenamiento y la manipulación de colecciones en memoria: slicing bidireccional y reversión en secuencias inmutables (strings y tuplas), mutabilidad y operaciones sobre listas, conjuntos (`set`) para deduplicación y membresía instantánea, diccionarios (`dict`) para registros estructurados mediante pares clave-valor, y expresiones de comprensión (*comprehensions*). Culmina con el proyecto del **Clasificador e Indexador de Palabras**.

---

## 2.2. Mesa del Instructor y Preparación
* **Proyector:** Cuaderno Colab con celdas preparadas para colecciones de prueba (listas de nombres, textos de prueba, inventarios).
* **Pizarra física / digital:** Dibujar las posiciones de los índices (positivos arriba: `0, 1, 2...`, negativos abajo: `...-3, -2, -1`).

---

## 2.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **Slicing de Secuencias** | `cadena[inicio:fin:paso]`<br>`texto[::-1]` | **Cortar una barra de pan / Cinta métrica:** Marcas dónde colocas el cuchillo (`inicio`), hasta qué marca cortas sin pasarla (`fin`) y de cuántos centímetros son las rodajas (`paso`). | `texto[::-1]` invierte la secuencia al usar paso `-1`. |
| **Listas y Mutabilidad** | `lista.append(item)`<br>`lista[0] = nuevo` | **Pizarra borrable:** Puedes tachar un elemento, cambiarlo por otro o añadir filas al final sin cambiar de pizarra. | Las listas son mutables: alteran su contenido en la misma dirección de memoria. |
| **Tuplas** | `punto = (10, 20)`<br>`uno = (5,)` | **Bloque de hormigón grabado:** Una vez fraguado, no puedes cambiar ningún dato de posición ni añadir nuevos. | Una tupla de un solo elemento requiere obligatoriamente una coma: `(5,)`. Si escribes `(5)` es solo un entero con paréntesis. |
| **Sets (Conjuntos)** | `unicos = set(lista)`<br>`a & b`, `a \| b` | **Saco de canicas de colores:** No importa el orden en que las eches, no puede haber dos canicas idénticas repetidas. | Elimina duplicados de un plumazo y permite operaciones matemáticas de unión, intersección y diferencia. |
| **Diccionarios** | `persona["edad"]`<br>`persona.get("rol", "N/A")` | **Agenda telefónica / Archivador:** Buscas directamente por el nombre de la ficha (clave) en vez de contar en qué posición está. | Usar siempre `.get(clave, defecto)` para evitar que el programa se rompa con `KeyError` si la clave no existe. |
| **Comprehensions** | `[x**2 for x in nums if x > 0]` | **Filtro de café inteligente:** Transforma y selecciona elementos en una sola línea elegante y rápida. | `[expresion for elemento in iterable if condicion]`. |

---

## 2.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El error de intentar modificar un string o tupla
1. Escribe en pantalla:
   ```python
   palabra = "Python"
   palabra[0] = "J"  # Intentamos cambiar la P por J
   ```
2. Ejecuta y muestra el `TypeError: 'str' object does not support item assignment`.
3. **Explicación docente:** *"Los strings y las tuplas son inmutables. Si quieres cambiar una letra, debes crear un string nuevo con slicing: `'J' + palabra[1:]`."*

### Demostración 2: La trampa de `(5)` frente a `(5,)`
1. Escribe:
   ```python
   t1 = (5)
   t2 = (5,)
   print(type(t1), type(t2))
   ```
2. Muestra que `t1` es `<class 'int'>` y `t2` es `<class 'tuple'>`. Explicar que la coma es la que define la tupla en Python.

---

## 2.5. Adaptaciones Temporales (B2)
* **150 min:** Explicación teórica de estructuras (35 min) + Prácticas 01 a 06 (75 min) + Proyecto Clasificador de Palabras (40 min).
* **90 min:** Slicing + Listas + Diccionarios + Sets (30 min), Prácticas 01, 03 y 05 (45 min), reto de deduplicación (15 min).
* **60 min:** Listas vs Diccionarios + método `.get()` + Sets (20 min), Prácticas 03 y 04 (30 min), resolución de dudas (10 min).
* **30 min:** Demo guiada de limpieza de una lista con duplicados usando `set()` y conteo de frecuencias en un diccionario.

---

# BLOQUE 3: FUNCIONES Y MODULARIDAD

## 3.1. Objetivo Operativo
Realizar la transición mental de scripts lineales a programas modulares, reutilizables y estructurados mediante funciones (`def`), comprendiendo el retorno explícito de datos (`return`) frente a la salida por pantalla (`print`), gestión de parámetros por defecto, aislamiento de variables (scope local vs global), documentación estándar con docstrings (`"""..."""`), control robusto de excepciones (`try-except-else-finally`), persistencia en disco con `with open()` en formatos JSON y CSV, y división en múltiples archivos `.py` con `import`. Culmina con el hito **SAMI-Lite**.

---

## 3.2. Mesa del Instructor y Preparación
* **Entorno:** Colab o VS Code con terminal.
* **Archivos:** Una carpeta de trabajo limpia donde el código pueda crear y leer `datos.json`, `registro.csv` y módulos auxiliares `.py`.
* **Frase clave:** *"Una función es una pequeña máquina: le metes ingredientes (parámetros), hace un proceso y te devuelve un producto terminado (`return`)."*

---

## 3.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **`def` y `return` vs `print`** | `def calcular(n):`<br>`    return n * 2` | **La tostadora vs El escaparate:** `return` te entrega la tostada en la mano para que puedas untarle mantequilla (usarla en otra operación). `print` solo te enseña la foto de la tostada por la ventana: no puedes comértela. | Una función sin `return` devuelve implícitamente `None`. Si intentas sumar el resultado de un `print()`, el programa explotará con `TypeError`. |
| **Parámetros por Defecto** | `def saludar(nombre, rol="Usuario"):` | **Menú con guarnición por defecto:** Si pides la hamburguesa sin decir nada, te ponen patatas (`"Usuario"`). Si pides ensalada, sustituyes la opción por defecto. | Los parámetros con valores por defecto deben situarse siempre **después** de los parámetros obligatorios. |
| **Ámbito (Scope) Local vs Global** | Variable dentro de `def` vs variable fuera | **Lo que pasa en Las Vegas se queda en Las Vegas:** Los nombres locales pertenecen al ámbito de la función; los objetos pueden seguir existiendo si conservan otras referencias. | Evitar el abuso de `global`. Lo correcto es pasar datos por parámetro y recibirlos por `return`. |
| **Docstrings** | `"""Resumen del objetivo.\n\nArgs:\n    ..."""` | **Manual de instrucciones integrado:** Documentación que el propio editor y el comando `help()` pueden leer en caliente. | Se colocan justo debajo de la cabecera `def` usando triple comilla. |
| **Gestión de Excepciones** | `try:`<br>`    ...`<br>`except ValueError as e:` | **Red de seguridad del trapecista:** Si el código tropieza con un fallo previsible (un usuario escribe letras en vez de números), el programa cae en la red y sigue funcionando en vez de estrellarse. | Capturar siempre excepciones específicas (`ValueError`, `FileNotFoundError`, `ZeroDivisionError`), nunca un `except:` genérico a ciegas. |
| **Persistencia con `with open`** | `with open("d.json", "w") as f:`<br>`    json.dump(datos, f)` | **Abrir la puerta y cerrarla con pestillo automático:** El gestor `with` garantiza que el archivo se cierra al salir del bloque, incluso si hay un error; no garantiza que una escritura interrumpida se complete. | Modos: `"r"` (leer), `"w"` (sobrescribir), `"a"` (añadir al final). Usar `json.dump()` / `json.load()` para estructuras complejas. |
| **Modularidad e `import`** | `import modulo_auxiliar` | **Caja de herramientas:** En lugar de amontonar todos los destornilladores en una sola mesa, guardas herramientas específicas en cajones separados y sacas solo la que necesitas. | Permite separar la lógica de negocio de la interfaz de usuario. |

---

## 3.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El desastre del `print` dentro de la función
1. Escribe:
   ```python
   def calcular_total_malo(precio, iva=0.21):
       print(precio + (precio * iva))

   total = calcular_total_malo(100)
   print(f"El total almacenado es: {total}")
   # Ahora intentamos aplicar un descuento
   # total_con_descuento = total - 10  # -> TypeError: unsupported operand type(s) for -: 'NoneType' and 'int'
   ```
2. Muestra que `total` vale `None`.
3. Corrige sustituyendo `print` por `return` y demuestra que ahora sí se pueden encadenar operaciones.

---

## 3.5. Adaptaciones Temporales (B3)
* **150 min:** `def` y `return` (30 min) + Scope y excepciones (30 min) + Persistencia JSON/CSV (30 min) + Desarrollo guiado de SAMI-Lite (60 min).
* **90 min:** Funciones y retorno + Excepciones (30 min), `with open` y JSON (25 min), Prácticas 01, 03 y 04 (35 min).
* **60 min:** Funciones con `return` + `try/except` + persistencia básica (25 min), Práctica 04 (JSON) guiada (35 min).
* **30 min:** Demo completa de una función que lee un JSON, añade un registro con validación `try/except` y lo vuelve a guardar.

---

# BLOQUE 4: PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

## 4.1. Objetivo Operativo
Evolucionar de la programación procedural/modular a la Programación Orientada a Objetos. Comprender el acoplamiento de estado (atributos) y comportamiento (métodos) en una clase, la auto-referencia con `self`, el constructor `__init__`, la encapsulación mediante convenciones (`_`), la diferencia entre relaciones de composición ("tiene un") y herencia ("es un"), la llamada al constructor base con `super()`, y el polimorfismo mediante métodos comunes. Culmina con el hito **SAMI-OOP**.

---

## 4.2. Mesa del Instructor y Preparación
* **Pizarra:** Dibujar la diferencia entre un "Plano arquitectónico" (la Clase) y las "Casas construidas" (las Instancias u Objetos).
* **Entorno:** VS Code o Colab.

---

## 4.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **Clase vs Objeto** | `class Sensor:`<br>`s1 = Sensor("Temp")` | **Molde de galletas vs Galletas horneadas:** La clase es el molde de metal (define la forma y propiedades). Cada galleta que sale del horno es un objeto independiente con sus propias chispas de chocolate. | La clase define la estructura una sola vez; puedes instanciar miles de objetos a partir de ella. |
| **`__init__` y `self`** | `def __init__(self, n):`<br>`    self.nombre = n` | **`self` es el DNI / carné de identidad:** Cuando un método se ejecuta, `self` le dice a Python exactamente sobre qué galleta u objeto concreto estamos trabajando. | `__init__` se ejecuta automáticamente al instanciar. `self` debe ser siempre el primer parámetro de los métodos de instancia. |
| **Encapsulación (`_`)** | `self._lecturas = []` | **El capó del coche:** El motor está debajo del capó (`_`); el conductor no debe tocar cables sueltos directamente, sino usar el volante y los pedales (métodos públicos). | En Python, el guion bajo `_variable` es una convención de advertencia: *"uso interno, no modificar desde fuera"*. |
| **Composición ("tiene un")** | `class FabLab:`<br>`    self.sensores = []` | **Un coche tiene un motor y cuatro ruedas:** El FabLab no "es" un sensor, sino que "posee" y gestiona una colección de sensores. | Se utiliza cuando una entidad compleja coordina a otras entidades independientes. |
| **Herencia ("es un")** | `class SensorTemp(Sensor):`<br>`    ...` | **Especies biológicas / Linaje familiar:** Un perro "es un" mamífero: hereda respirar y sangre caliente, pero añade ladrar. | Permite reutilizar código de una clase base y especializar clases derivadas. |
| **`super().__init__()`** | `super().__init__(id_disp)` | **Llamar al taller central:** Ejecuta primero la inicialización que sabe hacer la clase madre antes de configurar lo específico de la hija. | Evita duplicar código de inicialización en las subclases. |
| **Polimorfismo** | `for d in dispositivos:`<br>`    d.medir()` | **Mando a distancia universal:** El botón "Encender" funciona tanto para la tele como para el aire acondicionado, aunque cada aparato se enciende de forma distinta por dentro. | Permite tratar objetos de diferentes clases de manera uniforme si comparten la misma interfaz de métodos. |

---

## 4.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El olvido de `self` en un método
1. Escribe:
   ```python
   class Dispositivo:
       def __init__(self, nombre):
           self.nombre = nombre
       
       def saludar():  # Falta self intencionadamente
           print(f"Hola, soy {self.nombre}")
   ```
2. Instancia y llama a `d = Dispositivo("Termómetro"); d.saludar()`.
3. Muestra el error `TypeError: Dispositivo.saludar() takes 0 positional arguments but 1 was given`.
4. **Explicación docente:** *"Cuando llamas a `d.saludar()`, Python pasa automáticamente el objeto `d` como primer argumento. Si la función no tiene `self` en la cabecera, se desborda y explota."*

---

## 4.5. Adaptaciones Temporales (B4)
* **150 min:** Fundamentos clase/objeto y `self` (35 min) + Encapsulación y herencia/`super()` (35 min) + Polimorfismo (20 min) + Desarrollo guiado de SAMI-OOP (60 min).
* **90 min:** Clases, `__init__`, `self` y herencia con `super()` (35 min), Prácticas 01, 02 y 04 (40 min), ensamblado de clases (15 min).
* **60 min:** De diccionarios a Clases + Herencia básica (25 min), Prácticas 01 y 04 (35 min).
* **30 min:** Demostración de una clase base `Sensor` y dos subclases que implementan polimórficamente el método `leer_valor()`.

---

# BLOQUE 5: PYTHON APLICADO Y LIBRERÍAS

## 5.1. Objetivo Operativo
Integrar librerías del ecosistema estándar de la ciencia de datos y automatización para resolver flujos reales a partir de los materiales de **NumPy, Pandas, Playwright y ReportLab**, distinguiendo las demostraciones del proyecto **SAMI-Applied**, que parte de un CSV local: operaciones numéricas vectorizadas con **NumPy**, manipulación, filtrado condicional y análisis tabular con **Pandas** (utilizando el dataset de Game of Thrones `got_1.csv` como práctica didáctica separada), automatización y scraping web moderno con **Playwright**, y generación real de informes estructurados en PDF con **ReportLab Platypus**. Culmina con el hito **SAMI-Applied**.

---

La ruta actual empieza con el cuaderno de datos y continúa en el proyecto CSV de SAMI-Applied. Playwright se conserva en los materiales de autor como demo aparte, no como requisito de ese PDF.

## 5.2. Mesa del Instructor y Preparación
* **Archivos en carpeta:** `got_1.csv` listo para cargar en Colab / VS Code.
* **Instalación:** seguir el README y `requirements.txt` de la actividad elegida. SAMI-Applied práctico usa Pandas, NumPy y ReportLab; instalar navegador solo si se va a realizar la demo separada de Playwright.
* **Factura PDF:** Tener localizada la práctica de ReportLab Platypus y comprobar que el logo de ejemplo existe antes de ejecutar el script.
* **Mensaje clave:** separar datos y presentación. Primero se calculan base imponible, IVA y total; después se maqueta el PDF con `story` y `build()`.
* **Límite B5:** BeautifulSoup solo puede tratarse como concepto acotado de parsing de HTML estático si aparece en el material actual. No debe competir con el recorrido práctico NumPy -> Pandas -> Playwright -> ReportLab.

---

## 5.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **NumPy y Vectorización** | `arr = np.array([10, 20])`<br>`arr * 1.21` | **Operación militar en escuadrón:** En lugar de ordenar a cada soldado uno a uno con un bucle `for`, das una orden general y todo el array se multiplica simultáneamente a toda velocidad en C. | Los arrays `ndarray` exigen homogeneidad de tipo y pueden acelerar operaciones numéricas vectorizadas; la mejora depende de la operación y del volumen de datos. |
| **Pandas DataFrame** | `df = pd.read_csv("f.csv")`<br>`df.head()` | **Una hoja de cálculo de Excel con superpoderes:** Filas indexadas y columnas con nombre sobre las que puedes filtrar, ordenar y resumir en microsegundos. | `Series` es una columna individual; `DataFrame` es la tabla bidimensional completa. |
| **Filtros Booleanos en Pandas** | `filtro = df["Score"] > 80`<br>`df_top = df[filtro]` | **Plantilla perforada de examen:** Creas una máscara de `True` y `False`; al colocarla sobre la tabla, solo pasan los datos que cumplen la condición. | Usar operadores bitwise `&` (AND) y `\|` (OR) con paréntesis obligatorios: `(df["A"] > 5) & (df["B"] == "X")`. |
| **Playwright (Scraping Web)** | `page.goto(url)`<br>`page.locator("css").inner_text()` | **Un robot con teclado y ratón navegando por ti:** Abre un navegador real, hace clic, espera a que cargue el contenido dinámico y extrae la información visible. | Maneja páginas modernas con JavaScript dinámico sin romperse por retardos de red. |
| **ReportLab (Informes PDF)** | `SimpleDocTemplate("i.pdf")`<br>`story.append(Paragraph(...))` | **Maquetador de imprenta:** Colocas bloques en fila (título, tabla, párrafo) y la máquina los imprime en un PDF ordenado y limpio. | Es la herramienta canónica del curso para generación física de documentos PDF. |

Resultado esperado en B5: datos procesados, cálculos claros, tabla revisable, factura `factura_2027_001.pdf` o informe PDF generado con Platypus y explicación del alumno sobre qué parte son datos, qué parte son cálculos y qué parte es maquetación.

---

## 5.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El error del operador `and` en filtros de Pandas
1. Escribe:
   ```python
   import pandas as pd
   df = pd.DataFrame({"Nombre": ["A", "B", "C"], "Edad": [15, 25, 35], "Activo": [True, True, False]})
   # Error típico:
   # resultado = df[df["Edad"] > 20 and df["Activo"] == True]
   ```
2. Muestra el error `ValueError: The truth value of a Series is ambiguous`.
3. Corrige en directo:
   ```python
   resultado = df[(df["Edad"] > 20) & (df["Activo"] == True)]
   print(resultado)
   ```
4. **Explicación docente:** *"En Pandas no podemos usar la palabra `and` porque evalúa toda la columna de golpe. Debemos usar `&` elemento a elemento y envolver cada condición entre paréntesis."*

---

## 5.5. Adaptaciones Temporales (B5)
* **150 min:** NumPy vectorial (25 min) + Pandas con `got_1.csv` (45 min) + Playwright y ReportLab Platypus (30 min) + Integración SAMI-Applied (50 min).
* **90 min:** NumPy esencial + Pandas y filtrado de datos (45 min), Automatización Playwright y factura PDF con ReportLab (30 min), Práctica 02 y 03 (15 min).
* **60 min:** Pandas intensivo (carga, filtrado condicional, estadísticas) (35 min), generación de factura PDF simple (25 min).
* **30 min:** Carga de un CSV con Pandas, cálculo de métricas agregadas con NumPy y explicación guiada del flujo DATOS -> CÁLCULOS -> PDF.

---

# BLOQUE 6: TRABAJO COMO DEVELOPER

## 6.1. Objetivo Operativo
Trabajar dentro de una copia personal de SAMI-Local: orientarse, preparar entorno, seguir un dato, depurar, modificar y guardar con Git. Usa las [seis experiencias de B6](../bloques/bloque6/inicio.html); la salida final es un cambio funcional comprobado y un commit local explicado. GitHub queda como apoyo conceptual, no exige publicación.

---

## 6.2. Mesa del Instructor y Preparación
* **Software instalado:** VS Code, extensión oficial de Python de Microsoft, Git instalado en el sistema.
* **Terminal abierta:** PowerShell / Bash en la raíz del proyecto.
* **Frase clave:** *"En el cuaderno experimentamos; en el entorno local construimos aplicaciones reales y duraderas."*

---

## 6.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis / Comando Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **Notebook vs Script `.py`** | `if __name__ == "__main__":` | **Boceto en servilleta vs Plano de ingeniería:** El script se ejecuta de arriba abajo sin memoria oculta en celdas anteriores. | El bloque `if __name__ == '__main__':` asegura que el código principal solo se ejecuta cuando lanzamos el archivo directamente, no al importarlo. |
| **Entornos Virtuales (`venv`)** | `python -m venv venv`<br>`source venv/bin/activate` | **Caja de arena / Burbuja aislada:** Cada proyecto tiene su propia habitación limpia; si instalas una librería para un proyecto, no contaminas ni rompes los demás programas del ordenador. | Siempre verificar que el prompt de la terminal muestra `(venv)` antes de instalar con `pip`. |
| **`requirements.txt`** | `pip freeze > requirements.txt`<br>`pip install -r requirements.txt` | **Lista de la compra / Receta de ingredientes:** Permite que cualquier compañero en cualquier lugar del mundo clone tu proyecto e instale exactamente las mismas versiones de las librerías con un solo comando. | Es la base de la reproducibilidad en ingeniería de software. |
| **Git y GitHub** | `git init`, `git add .`<br>`git commit -m "..."` | **Puntos de guardado en un videojuego:** Cada commit es una foto fija del proyecto a la que siempre puedes regresar si rompes algo más adelante. | Mantener los mensajes de commit claros y concisos. |
| **Debugger interactivo** | Breakpoints (punto rojo), `F5`, `F10` (Step Over) | **Congelar el tiempo / Cámara lenta:** Pausas la ejecución del programa en una línea exacta para inspeccionar qué valor tiene cada variable en la memoria en ese instante. | Es infinitamente más rápido y profesional que llenar el código de `print()` ciegos. |

---

## 6.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: El desastre de instalar librerías sin el entorno virtual activo
1. Muestra una terminal sin el prefijo `(venv)`.
2. Pregunta a la clase: *"¿Qué ocurre si ejecuto `pip install pandas` aquí?"*
3. **Explicación docente:** Explicar que se instalaría en el Python global del sistema operativo, pudiendo causar conflictos de versiones entre diferentes asignaturas o proyectos. Mostrar cómo activar el `venv` y comprobar la ruta con `which python` / `where python`.

### Demostración 2: La magia del Breakpoint en VS Code
1. Coloca un punto rojo en una línea dentro de un bucle de cálculo.
2. Pulsa `F5` para iniciar depuración.
3. Muestra el panel izquierdo de VS Code: variables locales, valores en memoria y la pila de llamadas (*Call Stack*).
4. Avanza paso a paso con `F10` viendo cómo cambia el contador en vivo.

---

## 6.5. Adaptaciones Temporales (B6)
* **150 min:** Estructura de proyecto y script `.py` (30 min) + `venv` y `pip` (35 min) + Git/GitHub (35 min) + Depurador VS Code y montaje SAMI-Local (50 min).
* **90 min:** De notebook a script + `venv` y `requirements.txt` (35 min), Debugger en VS Code (30 min), Práctica 01 y 03 (25 min).
* **60 min:** Configuración de `venv` + ejecución de script en terminal + uso básico de breakpoints (30 min), Práctica 05 (30 min).
* **30 min:** Demostración de clonación de repositorio, activación de `venv`, instalación de dependencias y ejecución de depurador con punto de interrupción.

---

# BLOQUE 7: PYTHON + IA (DESARROLLO ASISTIDO Y VALIDACIÓN)

## 7.1. Objetivo Operativo
Dirigir cambios con contexto, límites, plan y autorización; comprobarlos y decidir si se aceptan. B7 tiene un solo proyecto final: **SAMI Final como conductor** ([guía](../bloques/bloque7/recursos/proyecto/sami-final.md)). La vía avanzada consiste en pedir al agente **una tarea acotada sobre ese mismo SAMI** (hay una primera intervención puente en la guía), proporcionar contexto, revisar `git status`/`git diff`, ejecutar, comprobar y decidir ACEPTAR, MODIFICAR o RECHAZAR, con commit solo de lo validado. La [ruta publicada](../bloques/bloque7/inicio.html) conserva además Harness, agente real como ejemplo de flujo, depuración, refactorización, LangGraph sin LLM e IA-Control. Conserva la defensa razonada con `registro-ia.md`, `plan-validacion.md` y `README-defensa.md`.

---

## 7.2. Mesa del Instructor y Preparación
* **Entorno:** VS Code con asistente de IA integrado o interfaz conversacional abierta en paralelo.
* **Materiales:** SAMI del alumno (vía base) o la tarea acotada con su contexto (vía avanzada), instrucciones, pruebas y evidencia antes/después. Las plantillas `registro-ia.md`, `plan-validacion.md` y `README-defensa.md` documentan la defensa de SAMI Final: qué se pidió, qué cambió el agente, qué se comprobó y qué se decidió.
* **Frase clave:** *"La IA es un copiloto brillante pero ciego: tú eres el capitán del barco y el único responsable de que el código no se hunda."*

---

## 7.3. Desglose Conceptual y Analogías Docentes

| Concepto | Sintaxis / Protocolo Clave | Analogía para el Alumno | Lo que el Formador debe destacar |
| :--- | :--- | :--- | :--- |
| **Ingeniería de Contexto** | *Rol + Requisito + Formato + Restricción* | **Encargo a un ebanista:** Si le dices "hazme una mesa", puede hacerte una mesa de billar o una mesilla de noche. Si le das las medidas exactas, el tipo de madera y el plazo, el resultado encajará a la primera. | Acotar las funciones: pedir una sola función con tipos definidos en vez de pedir "la aplicación entera". |
| **Auditoría Anti-Zombi** | Lectura crítica de cada línea antes de pegar | **Comprobar la comida antes de tragarla:** No ingieres nada sin mirar qué ingredientes lleva. En programación, pegar código sin entenderlo introduce vulnerabilidades y errores invisibles. | El alumno debe poder explicar qué hace cada instrucción del código sugerido. |
| **Depuración con IA** | Proveer el código + el Traceback completo | **Ir al médico con los síntomas exactos:** Si le dices al médico "me duele algo", no sabe qué recetar. Si le llevas el análisis de sangre (el Traceback), diagnostica el problema al instante. | Pasar a la IA la traza exacta de error de la consola sin recortar. |
| **Registro y Validación** | `registro-ia.md` + `plan-validacion.md` | **Diario de a bordo / Caja negra de avión:** Documenta qué le pediste a la máquina, qué te devolvió, qué modificaciones tuviste que hacerle tú a mano y cómo probaste que funciona. | Una línea por intervención con tarea, contexto, cambio, comprobación y decisión ACEPTAR/MODIFICAR/RECHAZAR; registra solo fallas realmente observadas. |
| **LangGraph en EXP-05** | Estado, nodos y rutas | **Cadena de pasos:** cada función procesa el estado y una regla Python decide la ruta. | Grafo ejecutable sin LLM; si no está instalado se prueban las reglas puras y el grafo queda no verificado. Memoria conversacional e intervención humana avanzada son ampliaciones. |

---

## 7.4. Guion de Demostración en Vivo y "Errores Útiles"

### Demostración 1: La alucinación de la IA en librerías o sintaxis obsoleta
1. Pide a un modelo de IA que resuelva una tarea usando una función inventada o una sintaxis ambigua.
2. Copia el código en VS Code y ejecútalo delante de los alumnos mostrando cómo falla en consola.
3. **Explicación docente:** *"La IA genera texto estadísticamente probable, no código garantizado. La ejecución y la validación física en el entorno local son obligatorias e indelegables."*

### Demostración 2: El protocolo de refactorización guiada
1. Toma una función monolítica de 50 líneas.
2. Solicita a la IA: *"Refactoriza esta función dividiéndola en dos funciones de responsabilidad única con tipado de datos y docstrings, sin alterar el comportamiento externo."*
3. Compara el antes y el después con el visor de diferencias de VS Code (*diff view*).

---

## 7.5. Adaptaciones Temporales (B7)

Consulta primero los tiempos de cada experiencia; no comprimas las seis en una sesión corta.

- **150 min:** seleccionar una experiencia completa de control del agente y su revisión.
- **90 min:** un cambio acotado con plan, autorización, diff, comprobación y decisión.
- **60 min:** análisis y revisión de una propuesta con casos normal, límite e inválido.
- **30 min:** lectura de un diff preparado y justificación de aceptar, modificar o rechazar.

Si se usa una adaptación sin ejecución, no se presenta como práctica ejecutada. La alternativa sin agente puede hacerse con un compañero siguiendo las instrucciones de la experiencia.

---



## 7.6. Lista de Comprobación Final para el Cierre de Sesiones

Al finalizar cualquier bloque formativo, el formador de Circular FAB debe asegurar que:
- [ ] Todos los alumnos han guardado sus cuadernos (en Google Drive) o han hecho `git commit` de sus cambios locales.
- [ ] Se han recogido las dudas no resueltas para la apertura de la siguiente sesión.
- [ ] Los alumnos han completado las microevaluaciones del bloque para consolidar conceptos.
- [ ] Se ha relacionado lo aprendido con el proyecto o experiencia que realmente está realizando el grupo.
