# 05 · EVALUACIÓN, GESTIÓN DE ERRORES Y MICROEVALUACIONES

Este documento ayuda al formador de la **Red Circular FAB** a diagnosticar errores, leer trazas y evaluar el aprendizaje. Las microevaluaciones y la rúbrica son apoyos formativos; la evaluación aplicable la decide el docente a partir de la actividad actual y sus evidencias.

---

## 1. Anatomía de un Traceback de Python

Cuando un programa falla, Python genera un **Traceback** (traza de la llamada). Muchos alumnos se asustan ante el texto en inglés en rojo. El formador debe enseñarles a leerlo con una regla de oro:

> **Regla de Oro del Traceback:**
> **Se lee siempre de ABAJO hacia ARRIBA.**

```
Traceback (most recent call last):
  File "main.py", line 18, in <module>
    resultado = procesar_datos(lista_precios)
  File "main.py", line 6, in procesar_datos
    return [precio * iva for precio in lista]
TypeError: can't multiply sequence by non-int of type 'float'
```

### Pasos de lectura guiada para el alumno:
1. **Paso 1 (Línea final):** Mira la última línea. Ahí está el **Tipo de Excepción** (`TypeError`) y la **Explicación del fallo** (*"no se puede multiplicar una secuencia por un float"*).
2. **Paso 2 (Línea inmediatamente anterior):** Mira la línea de arriba. Te muestra el **Archivo** (`main.py`) y el **Número de Línea** (`line 6`) donde ocurrió el impacto.
3. **Paso 3 (Líneas superiores):** Muestra el camino de funciones por el que el programa llegó hasta esa línea (la pila de llamadas).

---

## 2. Catálogo de Errores Habituales en el Aula

| Excepción | Causa Raíz en el Aula | Ejemplo Típico | Cómo Explicarlo y Corregirlo |
| :--- | :--- | :--- | :--- |
| **`SyntaxError`** | Error gramatical en el código antes de ejecutarse. | `if edad >= 18` *(faltan los `:`)* | *"Python no entiende la frase porque le falta el signo de puntuación obligatorio `:` o un paréntesis de cierre `)`."* |
| **`IndentationError`** | Sangría irregular o mezcla de tabuladores y espacios. | `if True:`<br>`print("Hola")` *(sin 4 espacios)* | *"En Python la sangría manda. Todo lo que esté dentro de un `if`, `for` o `def` debe estar desplazado 4 espacios a la derecha."* |
| **`NameError`** | Variable o función utilizada sin haberse definido antes o con errata en el nombre. | `print(totall)` *(doble l)* | *"Python busca en su memoria la caja `totall` y no la encuentra. Comprueba si la creaste antes o si hay una errata de escritura."* |
| **`TypeError`** | Operación entre tipos de datos incompatibles o número incorrecto de argumentos. | `'10' + 5`<br>`None + 10` | *"Estás intentando sumar texto con número o operar con una función que devolvió `None` por falta de `return`."* |
| **`ValueError`** | El tipo es correcto pero el contenido no se puede procesar. | `int("hola")`<br>`int("12.5")` | *"El tipo es texto, pero `'hola'` no se puede convertir a número entero. Usa `float()` si tiene decimales o valida antes la entrada."* |
| **`IndexError`** | Acceso a una posición fuera del tamaño de la lista. | `l = [10, 20]`<br>`print(l[5])` | *"La lista solo tiene 2 elementos (posiciones 0 y 1). Estás intentando abrir el cajón 5 que no existe."* |
| **`KeyError`** | Búsqueda directa de una clave que no existe en el diccionario. | `d = {"id": 1}`<br>`print(d["nombre"])` | *"El diccionario no tiene la ficha `'nombre'`. Usa `d.get('nombre', 'Sin nombre')` para que devuelva un valor por defecto seguro."* |
| **`ZeroDivisionError`** | División matemática entre cero. | `media = total / count` *(cuando `count == 0`)* | *"No se puede dividir entre cero en matemáticas. Protege la operación con un `if count > 0:` o un bloque `try-except`."* |
| **`FileNotFoundError`** | Se intenta abrir un archivo que no está en la ruta indicada. | `open("datos.json")` *(archivo en otra carpeta)* | *"Python no encuentra el archivo en la carpeta actual de trabajo. Revisa la ruta relativa o la ubicación en VS Code/Colab."* |
| **`ModuleNotFoundError`** | Se intenta importar una librería no instalada o archivo mal nombrado. | `import pandas` *(en un `venv` nuevo)* | *"La librería no está instalada en este entorno virtual. Ejecuta `pip install pandas` en la terminal con el `venv` activo."* |
| **`AttributeError`** | Se llama a un método que ese tipo de objeto no posee. | `texto = "hola"`<br>`texto.append("!")` | *"Los strings no tienen método `.append()` (eso es de listas). Revisa qué tipo de dato contiene tu variable."* |

---

## 3. Banco de Microevaluaciones Explicadas (B1 a B7)

Las microevaluaciones son preguntas conceptuales rápidas (tipo SoloLearn) integradas al final de cada tema para afianzar el aprendizaje activo.

### Bloque 1: Operaciones y Control de Flujo
* **Pregunta:** ¿Cuál es la salida de `print(14 // 3, 14 % 3)`?
  * **Opciones:** A) `4.66, 2` | B) `4, 2` | C) `4, 0` | D) `5, 2`
  * **Respuesta Correcta:** **B (`4, 2`)**.
  * **Análisis de Errores:** Quien elige A confunde `//` con `/`. Quien elige C olvida calcular el resto (`14 - (4 * 3) = 2`).
  * **Pregunta Docente de Reconducción:** *"Si tienes 14 caramelos y los repartes entre 3 niños, ¿cuántos enteros le tocan a cada uno y cuántos te sobran en el bolsillo?"*

---

### Bloque 2: Slicing y Diccionarios
* **Pregunta:** Dada la lista `l = ["A", "B", "C", "D", "E"]`, ¿qué devuelve `l[1:4]`?
  * **Opciones:** A) `['A', 'B', 'C', 'D']` | B) `['B', 'C', 'D', 'E']` | C) `['B', 'C', 'D']` | D) `['B', 'C']`
  * **Respuesta Correcta:** **C (`['B', 'C', 'D']`)**.
  * **Análisis de Errores:** La opción B olvida que el índice 4 ("E") queda fuera del corte. La opción A empieza en el índice 0 en vez del 1.
  * **Pregunta Docente:** *"¿En qué posición está 'B' y por qué la 'E' no entra en la foto?"*

---

### Bloque 3: Retorno de Funciones
* **Pregunta:** ¿Qué imprime el siguiente código?
  ```python
  def duplicar(x):
      res = x * 2

  valor = duplicar(5)
  print(valor)
  ```
  * **Opciones:** A) `10` | B) `5` | C) `None` | D) `Error de ejecución`
  * **Respuesta Correcta:** **C (`None`)**.
  * **Análisis de Errores:** La mayoría de principiantes eligen A porque calculan mentalmente `5 * 2 = 10`, pasando por alto que la función **no tiene `return`**.
  * **Debriefing Docente:** *"La función calculó el 10, pero se le olvidó dártelo (`return`), así que te quedas con `None` en la mano."*

---

### Bloque 4: Programación Orientada a Objetos
* **Pregunta:** ¿Cuál es la función del parámetro `self` en un método de instancia?
  * **Opciones:** A) Es una palabra reservada obligatoria de Python. | B) Hace referencia a la instancia concreta sobre la que se ejecuta el método. | C) Sirve para importar librerías. | D) Convierte la clase en una tupla.
  * **Respuesta Correcta:** **B**.

---

### Bloque 5: Filtros en Pandas
* **Pregunta:** ¿Cuál es la sintaxis correcta para filtrar un DataFrame `df` con dos condiciones simultáneas?
  * **Opciones:** A) `df[df["A"] > 5 and df["B"] == "OK"]` | B) `df[(df["A"] > 5) & (df["B"] == "OK")]` | C) `df(df["A"] > 5 && df["B"] == "OK")` | D) `df.filter("A > 5 and B == 'OK'")`
  * **Respuesta Correcta:** **B**.
  * **Debriefing Docente:** Recordar siempre el uso de `&` y los paréntesis independientes en cada condición.

---

### Bloque 6: Entornos y Scripts
* **Pregunta:** ¿Por qué se incluye `if __name__ == "__main__":` en un script `.py`?
  * **Opciones:** A) Para que el programa corra más rápido. | B) Para permitir que el código de prueba solo se ejecute al lanzar el archivo directamente, y no al ser importado como módulo. | C) Porque es obligatorio para instalar con pip. | D) Para crear un entorno virtual.
  * **Respuesta Correcta:** **B**.

---

### Bloque 7: Asistencia con IA y Flujo 2027
* **Pregunta:** Tras recibir un bloque de código generado por un asistente de IA, ¿cuál es el paso inmediato que debe realizar el desarrollador según el flujo 2027?
  * **Opciones:** A) Hacer commit y push directamente a GitHub. | B) Copiarlo en producción sin modificar. | C) Leerlo, entender qué hace cada línea, ejecutarlo en local y validarlo con pruebas. | D) Borrar los comentarios.
  * **Respuesta Correcta:** **C**.

---

## 4. Rúbrica de Evaluación Formativa para el Docente

| Nivel de Dominio | Indicadores Observables en el Alumno |
| :--- | :--- |
| **1. Inicial / Necesita Apoyo** | * Se bloquea ante cualquier Traceback en consola y pide ayuda sin leer el mensaje.<br>* Confunde `print` con `return`.<br>* Copia código de la IA sin entender qué variables intervienen. |
| **2. En Desarrollo** | * Lee la última línea del Traceback e identifica el tipo de error.<br>* Utiliza listas, diccionarios y funciones básicas con soltura.<br>* Necesita orientación para estructurar clases o aislar entornos virtuales. |
| **3. Autónomo / Competente (Objetivo del Curso)** | * Resuelve de forma autónoma errores de sintaxis y tipado.<br>* Estructura proyectos modulares en VS Code con `venv` y `requirements.txt`.<br>* Aplica el flujo 2027: planifica antes de pedir código a la IA, audita lo generado y defiende su solución oralmente. |
| **4. Avanzado / Excelente** | * Propone mejoras dentro del alcance del curso: comprehensions, vectorización NumPy, filtrado Pandas, estructura modular o defensa más clara.<br>* Diseña jerarquías de clases limpias con polimorfismo cuando el bloque lo permite.<br>* Si el grupo trabaja LangGraph o IA-Control, justifica rutas y validaciones; este descriptor no convierte esas experiencias en requisito ni fija su evaluación. |

La autonomía se observa como una retirada gradual de ayuda: primero reproduce con guía; después predice y modifica; más adelante formula hipótesis, define criterios, ejecuta pruebas y explica por qué acepta, modifica o rechaza un resultado. Que un agente complete el cambio no demuestra por sí solo dominio del alumno.

En el enfoque **«Rompe y repara»**, conserva evidencia del estado sano, el fallo controlado, la hipótesis, la causa localizada, la reparación acotada y la repetición de pruebas. El nombre es metodológico: no reemplaza títulos publicados como **Rompe, entiende y depura**.

## Evidencia y Comprobación

El Copiloto no debe afirmar que una práctica fue ejecutada o validada si solo existe evidencia estática en los documentos. Debe distinguir:

- **Evidencia observable:** salida de consola, archivo generado, tabla filtrada, PDF creado, traceback leído o explicación oral del alumno.
- **Criterio de éxito:** condición mínima para pasar al siguiente paso.
- **Método de comprobación:** ejecutar el script, inspeccionar el archivo, comparar la salida esperada, revisar el traceback o pedir explicación al alumno.
- **Artefacto:** solo se cita cuando el curso realmente lo genera, por ejemplo `factura_2027_001.pdf`, `ventas_lab.xlsx`, JSON/CSV de SAMI o documentos de defensa de B7.

## Validación en las experiencias actuales

- **B1-B2:** predicción, modificación, checkpoints y elección de estructuras.
- **B3-B4:** seguir el flujo de SAMI y justificar el lugar del cambio, con casos normal, límite e inválido.
- **B5:** comprobaciones del proyecto y apertura del PDF para revisar su contenido; que exista no garantiza que esté bien maquetado.
- **B6:** cambio acotado, resultados antes/después y commit local revisado; no se exige push.
- **B7:** hipótesis propia, contexto y plan, autorización, revisión crítica del diff, pruebas y decisión razonada. En LangGraph distingue pruebas de reglas puras y del grafo; en IA-Control distingue respuesta aceptada, descartada y alternativa determinista. La obligatoriedad de EXP-05 y la integración final de SAMI siguen pendientes.

Estados para informar al docente: **verificado** (evidencia disponible), **no verificado** (comprobación necesaria que no se pudo realizar) y **opcional/no ejecutado** (variante que no era requisito). No conviertas una conexión opcional ausente en suspenso ni una prueba omitida en éxito.

El `registro-ia.md` de SAMI Final recoge las propuestas incorrectas o fallos de IA realmente observados. Nunca se inventan para alcanzar una cantidad: si no aparecen tres, se documentan las intervenciones realizadas, sus comprobaciones y por qué fueron aceptadas, modificadas o rechazadas. No extrapoles un número fijo a las demás experiencias.

Las cinco preguntas del [README](README.md) validan el comportamiento del agente docente: respuesta documentada, fuera de temario, ambigua, propuesta de práctica y petición imposible. No son un examen adicional del alumnado.
