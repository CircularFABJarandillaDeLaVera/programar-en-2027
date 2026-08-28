# INGENIERÍA CURRICULAR DETALLADA (VERSIÓN FINAL): BLOQUE 3 (FUNCIONES Y PROGRAMACIÓN MODULAR)
## Itinerario: "Python 2027: De los Fundamentos a la Programación Asistida por IA"

Este documento contiene la **Ingeniería del Conocimiento específica para el Bloque 3: Funciones y Programación Modular**, diseñada en estricta conformidad con el alcance curricular y los estándares pedagógicos definidos en la versión consolidada V4 del itinerario (respetando de forma estricta el aislamiento curricular) [190].

El objetivo central de este bloque es capacitar al estudiante para realizar la transición mental de la escritura de scripts lineales secuenciales a la **organización de programas estructurados, reutilizables, tolerantes a fallos y divididos en responsabilidades lógicas claras**, sentando una base de ingeniería sólida antes de abordar el modelado de clases (Bloque 4) o el análisis de datos (Bloque 5) [65, 190].

---

## 1. OBJETIVO OPERATIVO
Diseñar, estructurar e implementar aplicaciones de consola modulares en Python compuestas por múltiples funciones de responsabilidad única, dotadas de documentación formal (Docstrings) [108, 109], control estructurado de excepciones ante fallos físicos de sistema o de tipado [159], y persistencia local de datos en formatos estructurados planos (Texto, CSV y JSON) [65, 66], aplicando un flujo iterativo de depuración básica basado en la ejecución, observación, interpretación y corrección manual de excepciones directamente en el entorno de desarrollo y consola.

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 3)

```
        [Bloque 2: Estructuras de Datos (Colecciones y Slicing)]
                                │
                                ▼
         [Concepto 3.1: Definición de Funciones (def, return y print)]
                                │
                                ├────────────────────────────┐
                                ▼                            ▼
         [Concepto 3.2: Parámetros y Valores por Defecto]  [Concepto 3.3: Ámbito Local vs. Global]
                                │                            │
                                ├────────────────────────────┘
                                ▼
         [Concepto 3.4: Docstrings y Auto-documentación]
                                │
                                ▼
         [Concepto 3.5: Control de Excepciones (try/except/else/finally)]
                                │
                                ▼
         [Concepto 3.6: Persistencia Física (with open, JSON y CSV)]
                                │
                                ▼
         [Concepto 3.7: Modularización en Varios Archivos (import)]
                                │
                                ▼
         [PROYECTO INTEGRADOR: SAMI-Lite (Gestor Modular y Persistencia)]
                                │
                                ▼
        [Bloque 4: Programación Orientada a Objetos (POO)]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 3

*   **IMPRESCINDIBLES**:
    *   Definición de subprogramas con la palabra clave `def` e invocación de funciones [182].
    *   Uso de parámetros obligatorios, argumentos posicionales y parámetros opcionales con valores por defecto [183].
    *   Retorno explícito de datos con `return` frente a la mera visualización en pantalla con `print()` [182].
    *   Ámbito de variables (Scope): Variables locales (aisladas en pilas de funciones) vs. Variables globales y el uso de `global` [10, 182].
    *   Manejo estructurado de fallos con bloques `try-except` capturando excepciones específicas de tipo, valor y sistema (`TypeError`, `ValueError`, `ZeroDivisionError`, `FileNotFoundError`) [159, 160].
    *   Uso del gestor de contextos `with open()` para manipulación segura de flujos de archivos físicos sin fugas de descriptores de recursos [10].
    *   Persistencia de datos utilizando formatos de serialización estructurada `JSON` y formato tabular plano `CSV` [65, 66].
    *   Estructuración modular de código: División de responsabilidades en archivos `.py` independientes e importación cruzada con `import` [66].
*   **ÚTILES**:
    *   Documentación técnica formal mediante cadenas de documentación triples (**Docstrings**) posicionadas inmediatamente después de la cabecera `def` [108].
    *   Flujos lógicos complementarios en excepciones: Bloque `else` (ejecución si no se disparó ningún error) y bloque `finally` (ejecución de limpieza de recursos garantizada) [159].
    *   Refactorización activa: Aplicación de la regla empírica "si un bloque de lógica se repite 2 o más veces, requiere encapsulación en una función" [238, 252, 266].
*   **AMPLIACIÓN**:
    *   Simulación de flujos de prueba unitaria básicos ejecutando scripts modulares de forma directa mediante la cláusula de control `if __name__ == '__main__':` para asilar la ejecución del módulo frente a importaciones externas.

---

## 4. DESARROLLO INSTRUCCIONAL DE CONCEPTOS DE APRENDIZAJE

### CONCEPTO 3.1: Definición de Funciones (def, return frente a print)
*   **Definición técnica**: Una función es un subprograma o bloque de instrucciones encapsulado bajo un nombre simbólico mediante la palabra clave `def` [182, 237, 251, 265]. Una función recibe datos de entrada, ejecuta operaciones lógicas y devuelve de forma obligatoria un objeto de salida al flujo principal del programa mediante la palabra clave `return` [182, 238, 252, 266]. Si no se escribe un `return` explícito, Python retorna de forma implícita el objeto nulo `None` [121]. Existe una diferencia computacional crítica entre **devolver** un valor (`return`), lo que transfiere un dato procesado a una variable para continuar operando con él, e **imprimir** un valor (`print()`), que se limita a renderizar texto estético en la pantalla de la consola sin alterar el estado del flujo [116].

#### → PRERREQUISITO
*   Bloque 2: Tipos dinámicos, variables, strings y colecciones [9, 11, 13, 14].

#### → EJEMPLO DE FUENTE
*   **Definición, llamada y retorno básico** (Extracted from Colab 6 [182] and Slides [238, 252, 266]):
    ```python
    # Función que se limita a imprimir (procedimiento de consola)
    def saludar(nombre):
        print(f"Hola, {nombre}! Bienvenido/a al curso de Python.")  # Imprime en pantalla [182]

    saludar("María")  # Llamada directa: renderiza el texto en la consola [182]

    # Función que calcula y retorna un valor para su reutilización
    def cuadrado(numero):
        return numero ** 2  # Retorna el cálculo matemático [182]

    resultado = cuadrado(5)  # El valor 25 se asigna a la variable resultado
    print(resultado)         # Imprime: 25 [183]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Diseña en una celda de Colab dos funciones paralelas:
    1. `obtener_iva_imprimir(precio)`: Toma un valor numérico decimal, calcula el impuesto del 21% sobre él, e imprime directamente en pantalla el mensaje `"El IVA calculado es: X"`. No debe incluir la sentencia `return`.
    2. `calcular_iva_retornar(precio)`: Toma el valor numérico, calcula el IVA del 21%, y lo devuelve de forma explícita mediante `return`.
    3. Ejecuta ambas funciones pasándoles el valor `100.0`. Intenta sumar un recargo de `10.0` al resultado de ambas llamadas y observa cómo la primera llamada genera un error de tipo `TypeError` al intentar sumar un número a un tipo nulo (`NoneType`), demostrando empíricamente por qué la impresión no sustituye al retorno de datos.

#### → ERROR HABITUAL
*   **El bug del "retorno invisible"**: Confundir el hecho de que `print()` muestre el valor en pantalla con haberlo devuelto para continuar procesándolo en operaciones siguientes.
    ```python
    # ERROR DE LÓGICA COMÚN
    def sumar(a, b):
        print(a + b) # Se limita a imprimir, no devuelve nada

    total = sumar(5, 5) # total almacena None implícitamente
    print(total * 2)    # Lanza: TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'
    ```
*   **Solución pedagógica**: Forzar al alumno a rastrear el valor de la variable receptora `total` mediante impresiones manuales `print(type(total))` para que entienda que la falta de `return` genera salidas vacías en el sistema de cómputo.

#### → MINI-RETO
*   **El Evaluador del Par**: Escribe una función llamada `es_par(n)` que reciba un número entero, realice el cálculo del residuo con el operador módulo `%` [100] y devuelva de forma exclusiva el booleano `True` si el número es par, o `False` en caso contrario [238, 252, 266]. No se permite el uso de sentencias `print()` dentro del cuerpo de la función; la visualización del resultado debe gestionarse en el flujo principal tras recibir el valor devuelto por la función.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: ¿Qué valor se muestra en consola tras ejecutar el siguiente script?
    ```python
    def duplicar(x):
        return x * 2

    def triplicar(x):
        print(x * 3)

    calculo = duplicar(5)
    resultado = triplicar(calculo)
    print(resultado)
    ```
    *   A) `30` y luego `None`
    *   B) `30` y luego `30`
    *   C) `30` y en la siguiente línea `None`
    *   D) Lanza un error `TypeError` en tiempo de ejecución.
*   **Respuesta correcta**: **C**. (La llamada `duplicar(5)` retorna el entero `10`, que se almacena en `calculo`. Luego, `triplicar(10)` ejecuta internamente `print(10 * 3)`, imprimiendo `30` en pantalla. Como `triplicar` carece de una cláusula `return` explícita, devuelve por defecto `None` [121]. Por tanto, la variable `resultado` almacena `None`, que se imprime en la última línea).

#### → EVIDENCIA DE APRENDIZAJE
*   Implementación de dos funciones matemáticas puras en un cuaderno de Colab, donde el resultado de una función se alimenta directamente como argumento de entrada de la segunda, comprobando que no hay visualizaciones intermedias de consola y que la transferencia de información entre ambas firmas es del 100% en formato numérico puro.

---

### CONCEPTO 3.2: Parámetros y Valores por Defecto
*   **Definición técnica**: Los parámetros son los nombres de las variables que se declaran en la cabecera de la firma de una función mediante `def` para recibir datos de entrada [182, 238, 252, 266]. Los argumentos son los valores reales que se transfieren a esas firmas durante la invocación física de la función [111, 238, 252, 266]. Python permite definir **parámetros opcionales con valores por defecto** (por ejemplo, `exponente=2`) [183]; si el argumento correspondiente no se proporciona en la llamada, la función utiliza el valor asignado por defecto [183]. Las variables obligatorias se declaran siempre al inicio, posicionando los parámetros opcionales al final de la firma para evitar errores de interpretación sintáctica del compilador.

#### → PRERREQUISITO
*   Concepto 3.1: Cabecera `def`, firmas de llamada y retorno de valores.

#### → EJEMPLO DE FUENTE
*   **Uso de parámetros con valores por defecto** (Extracted from Colab 6 [183]):
    ```python
    def potencia(base, exponente=2):
        """Eleva una base al exponente dado. Si no se indica exponente, se utiliza 2."""
        return base ** exponente  # [183]

    print(potencia(3))     # Imprime: 9 (usa el exponente opcional por defecto = 2) [183]
    print(potencia(2, 3))  # Imprime: 8 (sustituye el valor por defecto por el argumento 3) [183]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Declara una función llamada `dar_formato_precio(monto, moneda="EUR", decimales=2)` en Colab.
    1. La función debe redondear el `monto` numérico flotante utilizando la función incorporada `round()` acotándolo al número de `decimales` indicado [111].
    2. Debe devolver una cadena de texto estilizada usando f-strings bajo el formato: `"[monto] [moneda]"` [118].
    3. Realiza llamadas de prueba: primero pasándole solo un número (`dar_formato_precio(12.3456)`), luego cambiando el número de decimales (`dar_formato_precio(12.3456, decimales=1)`), and finalmente especificando moneda extranjera (`dar_formato_precio(100, "USD")`), comprobando la flexibilidad de la firma parametrizada.

#### → ERROR HABITUAL
*   **El bug sintáctico de ordenación de firmas**: Situar parámetros obligatorios después de parámetros con valores por defecto en la firma del `def`.
    ```python
    # ERROR DE COMPILACIÓN SINTÁCTICA
    def crear_usuario(rol="invitado", nombre):  # Orden incorrecto de parámetros
        return f"Usuario {nombre} con rol {rol}"
    # Lanza: SyntaxError: non-default argument follows default argument
    ```
*   **Solución pedagógica**: Explicar que Python necesita determinar la correspondencia posicional de los argumentos obligatorios primero, por lo que las constantes con valores de partida siempre van a la derecha de la firma.

#### → MINI-RETO
*   **El Calculador de Envío**: Diseña una función llamada `calcular_envio(peso_kg, costo_base=5.0, envio_rapido=False)`. Si `envio_rapido` es `True`, se le suma un recargo del 50% al costo del envío. Si el `peso_kg` supera los 10 kg, se añade un adicional de 2.0€ por cada kilogramo extra por encima de ese límite. La función debe calcular el precio final y devolverlo con un retorno limpio de datos.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de completar código**: Completa el espacio en blanco de la firma para que el parámetro `comision` sea opcional con un valor del 1.5% (`0.015`), permitiendo realizar llamadas pasándole únicamente el monto de la compra.
    ```python
    def calcular_total_comision(monto, __________________):
        return monto + (monto * comision)

    print(calcular_total_comision(100))  # Salida esperada: 101.5
    ```
    *   A) `comision = 1.5`
    *   B) `comision = 0.015`
    *   C) `float comision = 0.015`
    *   D) `comision == 0.015`
*   **Respuesta correcta**: **B**. (En Python, la asignación de parámetros opcionales se realiza mediante la sintaxis del operador de asignación simple `=`, posicionando la variable al final de la firma. La opción A usaría una tasa del 150%; la opción C es un error sintáctico de tipado estricto; la opción D usa un operador de comparación incorrecto [101]).

#### → EVIDENCIA DE APRENDIZAJE
*   Firma de función desarrollada por el estudiante en su cuaderno Colab que asume múltiples parámetros por defecto con validación lógica, permitiendo realizar invocaciones robustas y variadas sin romper la sintaxis del intérprete de Python en ningún escenario de prueba.

---

### CONCEPTO 3.3: Ámbito Local y Global (Scope)
*   **Definición técnica**: El ámbito o *scope* define la visibilidad y tiempo de vida de una variable en la memoria del programa [10, 182]. Una variable declarada dentro del cuerpo de una función es de **ámbito local** (solo existe dentro de esa función y se destruye al finalizar su ejecución) [10, 182]. Una variable declarada en la raíz del script es de **ámbito global** (visible por cualquier fragmento de código, incluidas las funciones para lectura) [10, 182]. Si una función intenta reasignar o modificar una variable global de forma directa, Python creará en su lugar una variable local con el mismo nombre de forma silenciosa, dejando la variable global intacta [121]. Para indicarle explícitamente a Python que se desea modificar el valor de una variable global dentro del cuerpo de una función, se debe utilizar la directiva reservada `global` al inicio del bloque de la función [121].

#### → PRERREQUISITO
*   Concepto 3.2: Identificación de variables y asignación de datos.

#### → EJEMPLO DE FUENTE
*   **Efecto del Ámbito y reasignaciones** (Extracted from Colab 2 [121] and Colab 6 [182]):
    ```python
    # Variable en el ámbito del script principal (global)
    contador_compras = 0

    def registrar_compra(monto):
        global contador_compras  # Cláusula obligatoria para modificar el scope exterior [121]
        contador_compras += 1   # Modificación real de la variable global [121]
        print(f"Compra por {monto}€. Total de registros: {contador_compras}")

    registrar_compra(50.0)  # Modifica contador_compras a 1 [121]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Implementa en Colab el siguiente experimento técnico controlado para observar el comportamiento silencioso de los ámbitos:
    1. Declara la variable `usuario = "Invitado"` en la raíz del cuaderno.
    2. Crea una función llamada `intentar_cambiar_nombre()` que asigne `usuario = "Administrador"` dentro de su cuerpo. Llama a la función y luego imprime `usuario` en la celda de salida. Observarás que el valor global sigue siendo `"Invitado"`.
    3. Modifica la función creando `cambiar_nombre_real()`. Añade la instrucción `global usuario` como primera línea de la función antes de la asignación. Llama a la función e imprime `usuario` en la celda de salida; comprobarás que el valor global ha cambiado a `"Administrador"`, entendiendo la necesidad técnica de la directiva `global`.

#### → ERROR HABITUAL
*   **El bug UnboundLocalError**: Intentar operar con una variable global que tiene el mismo nombre que una variable local declarada después, antes de haber especificado su ámbito de origen.
    ```python
    # ERROR DE ÁMBITO
    total = 100

    def aplicar_descuento():
        total = total - 10  # Intenta leer y escribir la variable global de forma ambigua
        return total
    # Lanza: UnboundLocalError: local variable 'total' referenced before assignment
    ```
*   **Solución pedagógica**: Explicar que al realizar una asignación simple sobre una variable dentro de una función, Python asume por defecto que es local y prohíbe leer una variable local antes de haber sido inicializada en su propio contexto. Requiere añadir `global total` al inicio de la función.

#### → MINI-RETO
*   **El Contador de Visitas**: Declara la variable global `visitas = 0` y la constante inmutable de seguridad `MAXIMO_VISITAS = 5`. Desarrolla una función llamada `registrar_visita()` que aumente de uno en uno el contador global de visitas utilizando `global`. La función debe verificar mediante lógica condicional si se ha alcanzado o superado el `MAXIMO_VISITAS`; en caso de ser así, debe retornar el mensaje `"Aforo completo"`, de lo contrario, debe retornar el valor actualizado de visitas registradas.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: ¿Qué valores se imprimen en la consola tras finalizar la ejecución de este bloque de código?
    ```python
    x = 10

    def alterar_valor():
        x = 5
        print(x, end=" ")

    alterar_valor()
    print(x)
    ```
    *   A) `5 5`
    *   B) `10 10`
    *   C) `5 10`
    *   D) El código lanza un error de definición `NameError`.
*   **Respuesta correcta**: **C**. (Al ejecutar la función `alterar_valor()`, se declara una variable local `x` con valor `5` que oculta de forma temporal a la variable global. Se imprime el valor local `5`. Al salir de la función, la variable local se destruye, por lo que la instrucción `print(x)` del flujo principal accede a la variable global intacta, imprimiendo `10`).

#### → EVIDENCIA DE APRENDIZAJE
*   Demostración práctica documentada por el alumno donde se gestionan los saldos y estados de una caja registradora interactiva utilizando una única variable de control global gobernada por funciones controladas provistas de la directiva `global`, asegurando la inalterabilidad de los flujos de auditoría del sistema de cómputo.

---

### CONCEPTO 3.4: Docstrings y Auto-documentación
*   **Definición técnica**: Un Docstring (cadena de documentación) es un tipo especial de comentario multilínea encerrado entre triples comillas dobles `"""` que se posiciona de forma inmediata en la primera línea del cuerpo de un módulo, función, clase o método [108, 109]. Su propósito técnico es explicar de forma formal la responsabilidad de la función, los tipos de datos de sus parámetros de entrada y el objeto que devuelve en la salida. El intérprete de Python procesa los Docstrings de forma especial y los almacena en el atributo interno especial `__doc__`, haciéndolos accesibles para herramientas automáticas de generación de manuales o mediante la función incorporada `help()` [109].

#### → PRERREQUISITO
*   Bloque 2: Comentarios multilínea en cuadernos interactivos [108].

#### → EJEMPLO DE FUENTE
*   **Uso de Docstring estructurado** (Extracted from Colab 2 [108] and Colab 6 [182]):
    ```python
    # Definición con triple comilla para auto-documentación
    def saludar(nombre):
        """Imprime un saludo personalizado.
        
        Parámetros:
        nombre (str): El nombre del usuario a dar la bienvenida. [182]
        """
        print(f"Hola, {nombre}! Bienvenido/a al curso de Python.")  # [182]

    # El programador puede acceder a la ayuda en tiempo de desarrollo:
    print(saludar.__doc__)  # Muestra el contenido del comentario explicativo
    ```

#### → PRÁCTICA
*   **Instrucciones**: Declara una función matemática compleja llamada `calcular_amortizacion(capital, tasa_interes, periodos)` en Colab.
    1. Redacta de forma rigurosa un docstring multilínea que explique el funcionamiento físico del cálculo y detalle el significado y tipos de cada variable.
    2. En una celda distinta, ejecuta la función incorporada `help(calcular_amortizacion)`.
    3. Inspecciona cómo Colab extrae automáticamente el docstring formateado y lo presenta de forma interactiva en la pantalla del usuario, comprendiendo la importancia de la auto-documentación en equipos de ingeniería de software.

#### → ERROR HABITUAL
*   **El bug del Docstring de función desplazado**: Situar el comentario multilínea de documentación antes de la cabecera `def` o retrasarlo después de otras instrucciones ejecutables (como asignaciones o impresiones).
    ```python
    # ERROR DE REGISTRO EN EL INTÉRPRETE
    def calcular_area(base, altura):
        print("Iniciando cálculo...")
        """Esta cadena ya no será registrada como Docstring en __doc__"""
        return base * altura
    ```
*   **Solución pedagógica**: Demostrar que para que Python asocie de forma nativa la documentación en el atributo especial del objeto de la función, el comentario debe ser estrictamente la primera instrucción del bloque interno.

#### → MINI-RETO
*   **La Función Auto-Documentada**: Crea una función que tome una lista de números flotantes y calcule la media móvil acotada. Debe contener un docstring multilínea perfecto que detalle de forma explícita el tipo de dato que espera recibir como entrada y qué tipo de objeto devolverá como salida. Ejecuta `help()` sobre tu función en Colab y valida que se visualice la estructura de ayuda interactiva.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: ¿Qué imprime en pantalla el siguiente script tras ejecutarse en consola?
    ```python
    def restar(a, b):
        """Resta b de a."""
        return a - b

    print(restar.__doc__)
    ```
    *   A) `a - b`
    *   B) `Resta b de a.`
    *   C) `<class 'function'>`
    *   D) No imprime nada porque los docstrings son comentarios omitidos por el intérprete.
*   **Respuesta correcta**: **B**. (Aunque el docstring actúa como un comentario explicativo, Python no lo omite por completo del motor de ejecución. Lo compila y almacena en el atributo `__doc__` de la función, permitiendo su impresión y consulta en caliente durante el desarrollo).

#### → EVIDENCIA DE APRENDIZAJE
*   Inspección interactiva realizada por el estudiante en su terminal de desarrollo local donde demuestra el uso de `help(funcion_creada)` para auditar firmas de funciones, garantizando la calidad de su código auto-documentado.

---

### CONCEPTO 3.5: Control de Excepciones (try/except/else/finally)
*   **Definición técnica**: Las excepciones son objetos lógicos que representan errores detectados durante el tiempo de ejecución del programa, interrumpiendo abruptamente el flujo del código si no se gestionan de forma controlada [159]. Python proveyó una infraestructura estructurada de tolerancia a fallos mediante el bloque compuesto **`try-except-else-finally`** [159]:
    *   **`try`**: Aloja el bloque de código que es susceptible de fallar o lanzar un error sintáctico de tipo físico o lógico [159].
    *   **`except`**: Captura y gestiona de forma segura el tipo específico de error (ej. `ValueError` o `FileNotFoundError`), evitando el cierre abrupto del programa [159, 160].
    *   **`else`**: Bloque opcional que se ejecuta única y exclusivamente si el código dentro del bloque `try` se completó con total éxito sin disparar ninguna excepción [159].
    *   **`finally`**: Bloque opcional de ejecución garantizada que se corre siempre, sin importar si ocurrió un fallo o si la excepción fue capturada de forma exitosa, siendo idóneo para realizar tareas críticas de liberación de recursos físicos del ordenador [159].

#### → PRERREQUISITO
*   Bloque 1: Condicionales lógicos e identación estructurada por espacios [10, 11].

#### → EJEMPLO DE FUENTE
*   **Control completo con else y finally** (Extracted from Colab 4 [159, 160]):
    ```python
    try:
        # Se solicitan entradas y se realiza una operación matemática propensa a fallar
        N = int(input("Introduce un número: "))  # Puede lanzar ValueError [159, 160]
        N2 = int(input("Introduce otro número: "))
        resultado = N / N2                      # Puede lanzar ZeroDivisionError [159]
    except ValueError as e:
        print("Error: Debe introducir estrictamente un valor numérico entero.")  # [160]
    except ZeroDivisionError as e:
        print("Error: No es posible dividir un número por cero en matemáticas.") # [159]
    else:
        # Se ejecuta únicamente si no saltó ningún error en try
        print("División perfecta. Resultado:", resultado)  # [159]
    finally:
        # Ejecución garantizada en cualquier escenario lógico
        print("Operación finalizada.")  # [159]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Implementa en tu cuaderno interactivo de Colab un script blindado que solicite la edad del usuario para calcular su precio de entrada de cine [152].
    1. Envuelve la lectura con un bloque `try` que intente convertir el `input()` a un entero `int()` [121, 160].
    2. Agrega un bloque `except ValueError` que capture entradas incorrectas (como palabras, de decimales) y muestre un mensaje constructivo [160].
    3. Si no ocurre ningún error (bloque `else`), calcula los tramos de precios según su edad (<4 gratis, 4-18 pagan 5€, >18 pagan 10€) [152, 153].
    4. El programa debe cerrar la sesión del cliente en consola mediante el bloque garantizado `finally`.

#### → ERROR HABITUAL
*   **El bug de la captura genérica y el enmascaramiento de bugs**: Capturar de manera genérica con `except Exception` sin detallar la excepción específica, ocultando errores reales del programador (como variables mal escritas o bugs de tipado).
    ```python
    # MALA PRÁCTICA DE INGENIERÍA
    try:
        x = int(input("Número: "))
        print(calculo_inexistente)  # Error real: NameError
    except:
        print("Algo falló.")  # Enmascara el NameError como un error de entrada
    ```
*   **Solución pedagógica**: Enseñar al estudiante que debe capturar únicamente la excepción que espera y puede resolver de manera lógica (ej. `except ValueError`), dejando que el intérprete muestre las trazas completas ante fallos lógicos del programador para corregirlos en el código fuente.

#### → MINI-RETO
*   **El Validador Matemático**: Escribe una función llamada `dividir_lista(lista, divisor)` que tome una lista de números e intente dividir cada uno de ellos por el `divisor`. La función debe gestionar mediante bloques `try-except` integrados las posibles excepciones que ocurrirían si el divisor es `0` (`ZeroDivisionError`) o si la lista contiene elementos no numéricos (`TypeError`). Debe retornar un reporte detallado en un diccionario con los valores calculados de forma segura o los mensajes de error correspondientes para cada índice.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de localizar errores**: ¿Qué excepción del sistema debe especificarse en el bloque `except` para capturar el error que ocurre cuando el estudiante intenta convertir una entrada de texto alfabético mediante `int()`?
    ```python
    try:
        edad = int(input("Edad: "))
    except __________________:
        print("Formato incorrecto.")
    ```
    *   A) `TypeError`
    *   B) `ValueError`
    *   C) `IndexError`
    *   D) `FileNotFoundError`
*   **Respuesta correcta**: **B**. (El casteo de un texto no numérico mediante `int()` lanza una excepción de tipo `ValueError` [110, 160], debido a que la función recibe un argumento de tipo correcto (`str`) pero con un valor que no representa un entero computable. `TypeError` se lanzaría si el argumento en sí perteneciera a una clase no válida no casteable directamente).

#### → EVIDENCIA DE APRENDIZAJE
*   Script estructurado en Colab provisto de múltiples bloques `except` jerarquizados, que captura y registra de forma limpia errores lógicos de entrada de datos del usuario sin interrumpir ni colgar el bucle iterativo principal de ejecución de la consola.

---

### CONCEPTO 3.6: Persistencia Física (with open, JSON y CSV)
*   **Definición técnica**: La persistencia física es el mecanismo que permite guardar y recuperar información de la memoria temporal hacia el disco de almacenamiento local del ordenador [65, 66]. Python utiliza el gestor de contextos **`with open(ruta, modo)`** para la apertura de flujos de archivos físicos, garantizando el cierre limpio y automático del fichero al finalizar la identación de su bloque, incluso si ocurren errores de ejecución [10]. Para estructurar la persistencia de datos complejos, se utilizan módulos de la librería estándar del sistema [65]:
    *   **JSON (`json`)**: Serializa diccionarios y colecciones a archivos de texto de intercambio estructurado (`.json`) mediante `json.dump()` y los reconstruye con `json.load()` [65, 66].
    *   **CSV (`csv`)**: Lee y escribe colecciones tabulares planas separadas por caracteres de control (comas o tabuladores) utilizando los métodos nativos del módulo de la librería estándar `csv.writer` o `csv.reader` [65].

#### → PRERREQUISITO
*   Bloque 2: Comprensión profunda de estructuras y mapeos de diccionarios, y formato de intercambio de datos [14].

#### → EJEMPLO DE FUENTE
*   **Lectura y parsing estructurado** (Extracted from GitHub Practice Repo structure [65, 66]):
    ```python
    # Módulo nativo del sistema para serialización estructurada
    import json
    import csv

    # Escritura física y segura de JSON utilizando with open() [66]
    datos_servidor = {"ip": "192.168.1.1", "puerto": 8080, "activo": True}
    with open("configuracion.json", "w") as archivo_json:
        json.dump(datos_servidor, archivo_json, indent=4)  # Genera el archivo configuracion.json

    # Lectura y parsing físico de JSON
    with open("configuracion.json", "r") as archivo_json:
        config_cargada = json.load(archivo_json)  # Reconstruye el diccionario exacto en memoria
        print(config_cargada["ip"])               # Acceso directo por clave
    ```

#### → PRÁCTICA
*   **Instrucciones**: Implementa en local o en Colab un script de persistencia dual:
    1. Crea un diccionario que contenga las calificaciones de alumnos: `{"Ana": 9, "Juan": 5, "Sonia": 10}` [181].
    2. Utiliza `with open()` en modo escritura `"w"` para salvar los datos en un archivo físico llamado `notas.json`.
    3. Recupera la información abriendo el archivo en modo lectura `"r"` y valida que el objeto resultante sea un diccionario nativo de Python mediante `type()`.
    4. Utiliza el módulo `csv` para volcar los mismos registros a un archivo tabular plano `notas.csv` escribiendo las columnas: `Estudiante,Calificacion`.

#### → ERROR HABITUAL
*   **El bug de la pérdida de formato en escrituras JSON sucesivas**: Abrir un archivo estructurado (como JSON) en modo de adición simple `"a"` e intentar escribir un nuevo objeto directamente al final del archivo.
    ```python
    # ERROR DE PARSING DE FORMATO JSON
    with open("datos.json", "a") as f:
        json.dump({"nuevo": 1}, f) # Rompe la estructura global del archivo de texto
    ```
*   **Solución pedagógica**: Explicar al estudiante que los archivos JSON se deben de leer completos a memoria como diccionarios, actualizar la estructura lógica en memoria (añadiendo el elemento), y volver a escribir el JSON completo en modo escritura `"w"` para mantener la validez de su formato.

#### → MINI-RETO
*   **El Gestor de Configuraciones**: Escribe un script en Colab que intente leer un archivo físico llamado `preferencias.json` usando `with open()`. Si el archivo no se localiza en el workspace, el script debe capturar el error `FileNotFoundError` de forma controlada [10], crear un diccionario con valores de configuración por defecto (`"tema": "oscuro"`, `"notificaciones": True`), y guardarlo físicamente de forma automática en el disco de trabajo.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de interpretar lectura/escritura**: ¿Cuál es el modo de apertura idóneo que se debe especificar en la función `open()` para registrar una nueva línea de errores de ejecución al final de un archivo histórico `app.log` existente, sin destruir la información que ya contiene el fichero?
    ```python
    # with open("app.log", ______) as log_file:
    #     log_file.write("Nueva entrada de error en ejecución.")
    ```
    *   A) `"r"`
    *   B) `"w"`
    *   C) `"a"`
    *   D) `"x"`
*   **Respuesta correcta**: **C**. (El modo `"a"` (Append) posiciona el puntero de escritura directamente al final del archivo físico, permitiendo agregar nuevas cadenas de texto sin alterar la información previamente escrita en el disco. El modo `"r"` es exclusivo para lectura, `"w"` destruye el archivo al abrirlo recreándolo de cero, e `"x"` fallará si el archivo ya existe).

#### → EVIDENCIA DE APRENDIZAJE
*   Archivos físicos reales `.json` y `.csv` generados en el espacio de trabajo local del estudiante mediante la ejecución de un script con el gestor de contextos `with open()`, comprobando que los archivos son válidos, estructurados y legibles por cualquier editor de texto externo.

---

### CONCEPTO 3.7: Modularización en Varios Archivos (import)
*   **Definición técnica**: La programación modular es un paradigma de diseño de software que aboga por dividir un programa complejo en múltiples componentes lógicos independientes llamados **módulos** (archivos independientes con extensión `.py`), cada uno especializado en una única responsabilidad del negocio [65, 66]. Python permite estructurar estas dependencias organizando el código en archivos independientes y vinculándolos de forma ágil mediante la sentencia **`import`** [66]. Esto permite un diseño limpio, facilitando la mantenibilidad, legibilidad del software y la reutilización del código en múltiples aplicaciones de la plataforma sin duplicar bloques lógicos [65].

#### → PRERREQUISITO
*   Haber superado y asimilado el concepto de modularidad en funciones (Conceptos 3.1 al 3.6).

#### → EJEMPLO DE FUENTE
*   **Importación y estructuración de proyectos** (Extracted from GitHub Practice Repo structure [65, 66]):
    ```python
    # El archivo 'analizador.py' contiene funciones de lógica matemática
    # El archivo principal importa de forma selectiva los recursos requeridos:
    from analizador import es_par  # Importación selectiva de una función [238, 252, 266]

    numeros = [1, 2, 3, 4]
    for n in numeros:
        if es_par(n):
            print(f"El {n} es par.")  # Reutiliza el cálculo lógico importado
    ```

#### → PRÁCTICA
*   **Instrucciones**: Configura en local o utilizando archivos creados en el workspace de Colab la siguiente estructura física modular:
    1. Escribe el archivo `utilidades.py` con una función `limpiar_texto(cadena)` que elimine espacios extremos y caracteres especiales.
    2. Escribe el archivo `estadisticas.py` con la función `calcular_promedio(lista)` que devuelva la media aritmética de notas.
    3. Escribe el script principal `main.py` en el mismo directorio. Debe importar ambas funciones usando la sintaxis de importación selectiva (`from ... import ...`), recibir calificaciones y nombres de usuarios por consola, procesar los datos con las utilidades importadas y mostrar la salida final. Ejecuta `main.py` desde tu consola física de comandos.

#### → ERROR HABITUAL
*   **La Importación Circular**: Dos módulos `.py` se importan mutuamente de forma cruzada en sus primeras líneas, provocando un error en el motor de ejecución de Python.
    ```python
    # En modulo_A.py:
    # import modulo_B

    # En modulo_B.py:
    # import modulo_A
    ```
*   **Solución pedagógica**: Enseñar al alumno a mantener un diseño estructurado jerárquico unidireccional: los módulos utilitarios de bajo nivel nunca deben importar a los scripts principales u orquestadores que los invocan.

#### → MINI-RETO
*   **El Organizador de Operaciones**: Crea un archivo local llamado `aritmetica.py` que contenga las firmas matemáticas de suma, resta, multiplicación y división, blindando esta última ante divisiones por cero mediante excepciones [159]. Crea un segundo archivo `calculadora.py` que importe de forma unificada el módulo completo (`import aritmetica`) y ejecute llamadas interactivas de prueba mostrando los resultados calculados de forma segura en la consola.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de elegir diseño modular**: Tienes un script de 800 líneas que contiene la lógica para limpiar datos de ventas en CSV, realizar cálculos estadísticos con arrays y compilar un reporte final. ¿Cuál es el diseño organizativo modular óptimo que cumple con la separación de responsabilidades?
    *   A) Mantener todo en un solo archivo principal `app.py` para evitar problemas lógicos de importaciones.
    *   B) Dividir el script en 3 archivos independientes: `cargador.py` (lectura/limpieza de datos), `analizador.py` (cálculos de estadística) y `app.py` (orquestación del script e interacción con el usuario).
    *   C) Mover únicamente las variables globales a un archivo `constantes.py` y dejar todas las funciones de procesamiento en el archivo principal de ejecución.
    *   D) Crear un archivo `.py` independiente para cada función del sistema, sumando un total de 20 archivos en el directorio del proyecto.
*   **Respuesta correcta**: **B**. (La separación de responsabilidades por dominios lógicos agrupados (`Lectura/Procesamiento`, `Cálculo de Lógica`, `Orquestación principal`) representa la mejor práctica de ingeniería de software para mantener el proyecto limpio, escalable y depurable sin caer en la fragmentación excesiva de un archivo por función).

#### → EVIDENCIA DE APRENDIZAJE
*   Proyecto de consola multicarpetas implementado localmente por el alumno que se ejecuta de forma exitosa sin lanzar excepciones de importación (`ImportError` o `ModuleNotFoundError`), demostrando una correcta comprensión del enrutamiento físico de archivos en Python.

---

## 5. ERRORES HABITUALES COMPILADOS (BLOQUE 3)

1.  **Omisión de la captura de excepciones específicas**: Utilizar bloques `except` genéricos sin asignar nombre al error, lo cual silencia problemas graves de compilación y tipado en el código, dificultando la observación e interpretación de errores directamente en el terminal de comandos [159].
2.  **Duplicar código lineal dentro de funciones**: Escribir funciones que acceden directamente a variables globales externas para realizar lecturas y escrituras sin pasarlas explícitamente como argumentos de entrada en la firma de llamada, rompiendo el principio de encapsulación y pureza de funciones.
3.  **No cerrar descriptores de archivos**: Utilizar la sintaxis clásica `f = open()` sin ejecutar la llamada de clausura `f.close()` al final, provocando el bloqueo físico del archivo en el sistema operativo ante fallos intermedios. El alumno debe adoptar de forma sistemática el gestor de contextos `with open()` [10].
4.  **Casteos implícitos erróneos**: Confundir que `input()` retorne un entero por el hecho de haber introducido números por teclado, lo que genera errores silenciosos de tipo al procesar los datos [121].

---

## 6. PRÁCTICAS RECOMENDADAS DE LAS FUENTES (APRENDER HACIENDO)

*   **Refactorización de código repetitivo**: Tomar los scripts condicionales para evaluar rentas e impuestos del Bloque 1 [149] y encapsularlos en una función pura parametrizada `calcular_impuesto(renta_anual)` con firma de retorno y docstring integrado.
*   **Generador de Archivos de Configuración**: Desarrollar una función modular que intente leer un archivo `config.json` con configuraciones de usuarios en Colab; ante su ausencia (`FileNotFoundError`), debe inicializar la estructura por defecto con `json.dump()` y reintentar el procesamiento sin colgar el flujo.
*   **parsing Tabular en CSV**: Leer un archivo plano de transacciones comerciales `data.csv` [66] utilizando el módulo nativo `csv.reader` para filtrar y calcular sumas de ingresos mensuales por categoría y almacenar los resultados agregados en una carpeta local de resultados.

---

## 7. PROYECTO INTEGRADOR OBLIGATORIO DEL BLOQUE 3

### "SAMI-Lite: El Gestor de Auditoría y Persistencia de Transacciones Comerciales"

*   **Objetivo de Aprendizaje**: Integrar todas las competencias técnicas adquiridas en los Bloques 1, 2 y 3: estructuras condicionales, bucles interactivos, colecciones mutables/inmutables, modularización pura en funciones con firmas y docstrings perfectos, control de excepciones por tipo de error, y persistencia local de información en archivos CSV y JSON de forma segura.

#### Estructura de Diseño Modular del Proyecto SAMI-Lite (Sin POO)

El proyecto se diseñará dividiendo el software en **3 scripts de Python independientes** distribuidos en el directorio del proyecto local:

#### 1. Módulo de Utilidades de Almacenamiento (`persistencia.py`)
Contiene las funciones con responsabilidad exclusiva para interactuar con los archivos físicos de disco utilizando el gestor `with open()` [10] y los módulos estándar correspondientes [65, 66]:
*   `cargar_configuracion(ruta_json)`: Abre y lee un archivo JSON de configuración de auditoría (por ejemplo, los umbrales de advertencia de precios: `{"umbral_alerta": 100.0, "iva_aplicado": 0.21}`). Si el archivo no se localiza, debe capturar el error `FileNotFoundError` [10], escribir un archivo por defecto de forma segura y retornar el diccionario de control [66].
*   `registrar_transaccion_csv(ruta_csv, nombre_producto, precio_base, precio_final, estado_alerta)`: Añade una nueva fila al final del archivo tabular histórico `transacciones_auditoras.csv` utilizando el módulo nativo `csv` en modo de adición `"a"`.
*   `registrar_error_log(mensaje_error)`: Agrega de forma automatizada una línea con marca de tiempo al archivo de logs de texto plano `auditoria_errores.log` para registrar fallos capturados durante el uso de la aplicación.

#### 2. Módulo de Lógica de Negocio y Cómputo (`analizador.py`)
Contiene las funciones de procesamiento lógico de datos puros libres de interactividad:
*   `calcular_precio_final(precio, tasa_impuesto)`:
    *   *Docstring*: Explicación de firma de cálculo, tipos numéricos y salidas.
    *   *Lógica*: Realiza la validación de que los parámetros de entrada sean numéricos (`int` o `float`), lanzando un error manual de tipo `TypeError` si recibe datos inválidos. Calcula el precio sumándole el porcentaje de tasa impositiva correspondiente y lo devuelve redondeado a 2 decimales [111].
*   `evaluar_alerta_precio(precio_final, umbral)`: Compara el precio procesado frente al umbral crítico y devuelve la cadena `"ALERTA_PRECIO_ELEVADO"` si supera el límite, o `"PRECIO_NORMAL"` en caso contrario [101, 102].

#### 3. Orquestador Principal de Ejecución (`main.py`)
Script principal de comandos interactivo por consola que asume la orquestación e interfaz del usuario:
*   Importa de forma selectiva las funciones de `persistencia.py` y `analizador.py` [66].
*   Al iniciar, invoca de forma segura a `cargar_configuracion()` para inicializar los límites impositivos de auditoría de la sesión [66].
*   Inicia un bucle de comandos interactivo `while True` que solicita continuamente al usuario:
    1. Introducir el nombre del artículo.
    2. Introducir el precio base del producto (con control de excepciones `try-except` ante errores de conversión decimal `ValueError`) [160].
    3. Si la conversión es correcta (bloque `else`), invoca de forma interna a las funciones lógicas de cálculo impositivo y evaluación de alertas de auditoría [159].
    4. Salva de forma automática los resultados del análisis en el archivo tabular invocando a `registrar_transaccion_csv()`.
    5. Pregunta de manera interactiva si se desea continuar o finalizar la carga escribiendo `"salir"` [143].
*   Si el usuario comete un error de entrada que sea capturado en los módulos, la aplicación no se detiene; se registra el error físicamente en `auditoria_errores.log` de forma silenciosa y se le solicita un nuevo dato en consola al usuario de manera elegante [160].

---

## 8. TRAZABILIDAD DE INGENIERÍA DEL CONOCIMIENTO (BLOQUE 3)

| Concepto Técnico del Bloque 3 | Documento de la Fuente Oficial | Práctica Asociada del Itinerario | Microevaluación de Validación (SoloLearn) | Proyecto Integrador (SAMI-Lite) |
| :--- | :--- | :--- | :--- | :--- |
| **Definición de funciones y return** | `Google Colaboratory 6 (1)` [182] y `Conceptos Base (Slides)` [238] | Ejercicios de funciones en Colab: `cuadrado(numero)` [182]. | Reto SoloLearn 1 de predecir retorno en secuencias de operaciones. | Funciones `calcular_precio_final()` en `analizador.py` y llamadas. |
| **Parámetros por defecto** | `Google Colaboratory 6 (1)` [183] | Ejercicio en Colab de firmas opcionales: `potencia(base, exp=2)` [183]. | Reto SoloLearn de completar el valor de asignación de tasa impositiva por defecto. | Parámetros opcionales de tasas en la firma impositiva de `calcular_precio_final()`. |
| **Ámbito local, global y global** | `Google Colaboratory 2` [121] y `Google Colaboratory 6 (1)` [182] | Ejercicio guiado de modificación de variables de control global con `global` [121]. | Reto SoloLearn de predecir x interna local vs. global exterior con paso de argumentos. | Variable global opcional para control de transacciones en la interfaz de `main.py`. |
| **Docstrings de documentación** | `Google Colaboratory 2` [108] | Comentarios de triples comillas dobles en cabeceras de funciones [108]. | Reto SoloLearn de predecir salida al imprimir `__doc__` de una función definida. | Docstrings multilínea perfectas en todas las funciones declaradas. |
| **try-except (específicos, else, finally)** | `Google Colaboratory 4` [159, 160] | Blindaje ante casteos numéricos de edad e inputs no válidos en Colab [160]. | Reto SoloLearn de localizar la línea con excepción incompatible en castings de texto. | Captura de `ValueError` y `TypeError` con almacenamiento a log de errores. |
| **Gestor with open(), JSON y CSV** | `GitHub - DevSharma03/Python_Notes` [65, 66] | Carga de archivos de transacciones `data.json` y `data.csv` en Colab [66]. | Reto de emparejamiento e interpretación de modos de apertura en `open()`. | Persistencia física completa mediante `persistencia.py` cargando JSON y guardando CSV. |
| **Modularización e importación selectiva** | `GitHub - DevSharma03/Python_Notes` [65, 66] | Estructurar y ejecutar scripts locales interactuando por consola [66]. | Elección óptima de arquitectura de separación de responsabilidades para un script CSV largo. | División física obligatoria del software en 3 archivos independientes interconectados. |

---

## 9. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 3)

De acuerdo con el análisis de los materiales de tu base de conocimiento, se identifican las siguientes áreas de funciones y modularidad que **no se encuentran documentadas a nivel técnico o práctico en las fuentes**, por lo que se declaran formalmente como lagunas en este bloque:

1.  **Parámetros dinámicos indeterminados (`*args` y `**kwargs`)**: Las fuentes explican funciones con argumentos fijos, posicionales y parámetros por defecto [182, 183], pero **no proveen sintaxis ni ejemplos prácticos para recibir colecciones de argumentos de longitud variable** de forma dinámica.
2.  **Funciones recursivas**: Las fuentes no documentan flujos donde una función se invoque a sí misma para la resolución de problemas (como factoriales o recorridos de directorios), limitando el aprendizaje de bucles estrictamente a iteradores `for` y `while` [154, 155].
3.  **Rutinas asíncronas (`async` / `await`)**: Aunque el reporte menciona herramientas asíncronas como Playwright [189], las fuentes del notebook **carecen de la explicación técnica del bucle de eventos asíncronos nativo de Python**, corrutinas y la declaración de funciones con la firma `async def`.
4.  **Generadores e iteradores personalizados**: No existe documentación sobre el uso de la cláusula de retorno parcial `yield` para la creación de flujos de datos perezosos (lazy evaluation) en memoria.
5.  **Imports relativos en paquetes complejos**: Se documenta la importación simple a nivel de directorio local de archivos independientes (`import archivo`) [66], pero no las reglas de enrutamiento jerárquico relativo con puntos (ej. `from ..modulo import func`) requeridos para grandes arquitecturas de software multipaquete.
