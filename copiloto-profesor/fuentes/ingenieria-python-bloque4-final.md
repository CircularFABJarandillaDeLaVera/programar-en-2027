# INGENIERÍA CURRICULAR DETALLADA: BLOQUE 4 (PROGRAMACIÓN ORIENTADA A OBJETOS - POO) - FINAL
## Itinerario: "Python 2027: De los Fundamentos a la Programación Asistida por IA"

Este documento contiene la **Ingeniería del Conocimiento específica para el Bloque 4: Programación Orientada a Objetos (POO)**, diseñada en estricta conformidad con el alcance curricular y los estándares pedagógicos definidos en la versión consolidada V4 del itinerario [190].

El objetivo central de este bloque es que el alumno comprenda **por qué y cuándo** modelar un problema utilizando objetos, proporcionando un puente práctico que le permita evolucionar de forma natural desde la programación modular (SAMI-Lite del Bloque 3) hacia un modelo orientado a objetos robusto y extensible.

---

## 1. OBJETIVO OPERATIVO
Comprender los fundamentos del diseño orientado a objetos en Python, analizando las ventajas de acoplar estado (datos) y comportamiento (instrucciones) en una sola estructura lógica (clase) [241], e implementar soluciones locales estructuradas en VS Code que integren herencia, composición y polimorfismo básico para resolver problemas de negocio de forma mantenible, ordenada y limpia [5, 14].

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 4)

El aprendizaje del bloque progresa desde los conceptos estructurales más básicos hasta el diseño jerárquico polimórfico:

```
        [Bloque 3: Funciones y Programación Modular (SAMI-Lite)]
                                │
                                ▼
         [Progresión Crítica: De Diccionario/Funciones a Clases]
                                │
                                ▼
         [Concepto 4.1: Concepto de Clase y Objeto (Instanciación)]
                                │
                                ▼
         [Concepto 4.2: Atributos y Métodos de Instancia]
                                │
                                ▼
         [Concepto 4.3: El Parámetro self (Auto-referencia)]
                                │
                                ▼
         [Concepto 4.4: El Constructor especial __init__]
                                │
                                ├────────────────────────────┐
                                ▼                            ▼
         [Concepto 4.5: Atributos de Instancia]      [Concepto 4.6: Encapsulación Básica]
                                │                            │
                                ├────────────────────────────┘
                                ▼
         [Concepto 4.7: Relación de Composición ("Tiene un")]
                                │
                                ▼
         [Concepto 4.8: Relación de Herencia ("Es un")]
                                │
                                ▼
         [Concepto 4.9: El Uso del método super()]
                                │
                                ▼
         [Concepto 4.10: Sobrescritura de Métodos y Polimorfismo]
                                │
                                ▼
         [PROYECTO INTEGRADOR: SAMI-OOP (Evolución Orientada a Objetos)]
                                │
                                ▼
        [Bloque 5: Python Aplicado y Librerías (NumPy y Pandas)]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 4

*   **IMPRESCINDIBLES**:
    *   El paradigma de la Orientación a Objetos: Abstracción, moldes (clases) e instancias concretas (objetos) [107].
    *   La encapsulación de datos y comportamiento en un objeto cohesivo [107].
    *   Declaración de constructores especiales mediante el método `__init__` [107].
    *   El uso explícito del parámetro de auto-referencia en memoria `self` [107].
    *   Diferenciación de atributos de instancia para la asignación de estados independientes de los objetos.
    *   Relaciones estructurales de diseño: Composición ("tiene un") para agrupar e integrar colecciones de objetos [171].
    *   Relaciones jerárquicas: Herencia ("es un") para especialización y reutilización de código [176].
    *   Invocación correcta de firmas parentales utilizando el proxy `super()`.
    *   Mecanismo de Polimorfismo básico y sobreescritura de métodos para interfaces uniformes de ejecución.
*   **ÚTILES**:
    *   Uso de convenciones de guiones bajos (`_atributo` y `__atributo`) para denotar encapsulación básica protegida y privada de propiedades de la instancia.
    *   Implementación de métodos de interfaz controlados (Getters y Setters) con validación de tipos e inputs numéricos lógicos, cuando aporten valor pedagógico real.
    *   Consultas y comprobaciones del tipo dinámico del objeto mediante las funciones incorporadas `type()` e `isinstance()`.
*   **AMPLIACIÓN**:
    *   Uso del método especial `__str__` para definir representaciones en formato de texto estéticas de la instancia del objeto al imprimirse con `print()`.

---

## 4. LA PROGRESIÓN CRÍTICA: DE DICCIONARIO A CLASES (POR QUÉ POO)

Para evitar que el alumno aprenda POO como una sintaxis abstracta y vacía, el bloque debe arrancar demostrando de manera física qué problemas resuelve y cuándo aporta valor real frente a la programación modular tradicional.

### 1. El Estado de Partida (Diccionario + Funciones)
En el Bloque 3, representábamos un producto tecnológico mediante un diccionario mutable [181]:
```python
producto = {
    "nombre": "Licencia Antivirus",
    "precio_base": 80.0,
    "tipo": "Digital"
}
```
Cualquier parte del programa puede modificar el diccionario de forma descontrolada:
```python
producto["precio_base"] = -500.0  # ¡Dato corrupto silencioso!
```
Además, la lógica de cálculo impositivo está en funciones externas desconectadas del dato [182]:
```python
def calcular_precio_final(prod, iva):
    return prod["precio_base"] * (1 + iva)
```

### 2. El Salto Evolutivo (La Clase de POO)
La POO resuelve esta desconexión uniendo los datos (atributos) y la lógica (métodos) en una sola cápsula controlada [107]. El molde de la clase valida los inputs en su creación y encapsula el acceso:
```python
class Producto:
    def __init__(self, nombre, precio_base, tipo):
        self.nombre = nombre
        self.set_precio(precio_base)  # Setter con control lógico
        self.tipo = tipo

    def set_precio(self, precio):
        if precio > 0:
            self.__precio_base = precio
        else:
            raise ValueError("El precio debe ser estrictamente positivo.")

    def calcular_precio_final(self, iva):
        return self.__precio_base * (1 + iva)
```
**Ventaja de Ingeniería**: Los datos están blindados ante corrupciones, el código es auto-documentado y la mantenibilidad de la aplicación escala sin esfuerzo al añadir nuevas especializaciones [107].

---

## 5. DESARROLLO INSTRUCCIONAL DE CONCEPTOS DE APRENDIZAJE

### CONCEPTO 4.1: Concepto de Clase y Objeto (Instanciación)
*   **CONCEPTO**: Una clase es una plantilla lógica o molde conceptual que define las variables y el comportamiento común de un tipo de dato personalizado [243]. Un objeto es una instancia física concreta creada en memoria a partir de esa clase [107].
*   **PRERREQUISITO**: Bloque 3 (Modularidad).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y el principio de que los tipos son clases de las cuales se derivan objetos instanciados en memoria [107].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        pass  # Bloque neutro provisional para estructurar la clase

    teclado = Producto()  # Instanciación del objeto en memoria
    ```
*   **PREDECIR**: ¿Qué tipo de dato devolverá la instrucción `type(teclado)`? El alumno debe predecir que retornará `<class '__main__.Producto'>` [107, 243].
*   **EJECUTAR**: Correr el código en Colab y analizar el resultado del tipo [94].
*   **MODIFICAR**: Crear una segunda instancia `raton = Producto()` y validar que son objetos diferentes en memoria comparando sus identidades físicas con `teclado is raton` (debe retornar `False`).
*   **ERROR HABITUAL**: Olvidar los paréntesis al instanciar (ej. `teclado = Producto`), lo que asigna la propia definición de la clase a la variable en lugar de crear un objeto instanciado.
*   **MINI-RETO**: Declarar una clase llamada `Configuracion` y generar dos instancias diferentes de la misma en celdas de Colab.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Completar código*: Rellena los espacios en blanco para crear una clase limpia e instanciar un objeto de la misma.
        ```python
        _______ Articulo:
            pass

        recurso = _______()
        ```
        *   A) `def` / `Articulo`
        *   B) `class` / `Articulo`
        *   C) `class` / `recurso`
        *   D) `def` / `recurso`
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Celda de Colab donde se crean múltiples instancias y se comprueba su tipo e identidad en memoria.

---

### CONCEPTO 4.2: Atributos y Métodos de Instancia
*   **CONCEPTO**: Los atributos representan el estado o datos internos que se asocian a un objeto [241, 243]. Los métodos son funciones declaradas dentro del bloque de la clase que describen su comportamiento y operan de forma directa sobre esos atributos [241, 249].
*   **PRERREQUISITO**: Concepto 4.1 (Clase y Objeto).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y la definición de variables y operaciones de software [95, 241].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        pass

    teclado = Producto()
    teclado.nombre = "Teclado"  # Asignación dinámica de un atributo de estado
    ```
*   **PREDECIR**: Si definimos `teclado.nombre = "Teclado"`, ¿qué ocurrirá si intentamos imprimir `print(teclado.precio)` si este último no ha sido asignado aún? Lanzará una excepción `AttributeError` al no existir la propiedad en el diccionario de la instancia.
*   **EJECUTAR**: Correr el código en Colab y observar la excepción en consola.
*   **MODIFICAR**: Asignar un atributo de precio `teclado.precio = 50.0` e imprimir el valor del IVA del 21% aplicándole operaciones aritméticas directas sobre su propiedad [98].
*   **ERROR HABITUAL**: Intentar acceder a propiedades de la clase de forma externa sin referenciar el objeto instanciado (ej. escribir `Producto.nombre` en lugar de `teclado.nombre`).
*   **MINI-RETO**: Crear un objeto `Cliente` y definirle dinámicamente los atributos de texto `nombre` e `email`.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Elegir solución*: Selecciona la afirmación correcta sobre la estructura de atributos de un objeto en Python:
        *   A) Los atributos de un objeto solo pueden contener strings o booleanos.
        *   B) Los atributos representan los datos de un objeto y se accede a ellos con la sintaxis de punto sobre la instancia.
        *   C) Los atributos de un objeto se eliminan automáticamente de memoria tras imprimirse.
        *   D) Atributo y método son términos equivalentes y sinónimos en Python.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Captura de depuración en Colab donde se le asignan y consultan atributos numéricos a un objeto.

---

### CONCEPTO 4.3: El Parámetro `self` (Auto-referencia)
*   **CONCEPTO**: En Python, `self` es una convención de programación que actúa como el primer parámetro de los métodos de instancia. Representa una **referencia a la instancia concreta sobre la que se está ejecutando el método**, permitiendo acceder y modificar sus propios atributos y comportamientos sin necesidad de entrar en complejas gestiones de asignación de memoria o punteros de bajo nivel [107].
*   **PRERREQUISITO**: Concepto 4.2 (Atributos y Métodos).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y el acoplamiento de funciones pegadas a objetos [249].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def mostrar_informe(self):
            # Accede al atributo de la instancia que llama al método
            print(f"Producto: {self.nombre}")

    teclado = Producto()
    teclado.nombre = "Teclado Mecánico"
    teclado.mostrar_informe()  # Llama implícitamente pasando 'teclado' como primer argumento
    ```
*   **PREDECIR**: Si invocamos `teclado.mostrar_informe()`, ¿es necesario transferir un argumento para el parámetro `self`? No, Python suministra de forma automática la referencia del objeto invocador.
*   **EJECUTAR**: Probar el código en Colab y observar cómo se resuelve la auto-referencia de la variable.
*   **MODIFICAR**: Añadir a la clase el método `aplicar_impuesto(self, tasa)` que mude el precio de la instancia aplicando la tasa flotante dada como argumento.
*   **ERROR HABITUAL**: Definir un método dentro de la clase omitiendo el parámetro `self` en su firma (ej. `def mostrar():`), lo que lanza un error `TypeError: ... takes 0 positional arguments but 1 was given` en la llamada.
*   **MINI-RETO**: Escribir la clase `Estudiante` con atributo de texto `nombre` y un método `gritar_nombre(self)` que imprima el nombre en formato de mayúsculas utilizando el método `.upper()` de strings [137, 245].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Detectar errores*: Identifica por qué el siguiente código lanza un error de tipo `TypeError` al intentar llamarse:
        ```python
        class Articulo:
            def imprimir_alerta():
                print("Alerta de stock bajo.")

        a = Articulo()
        a.imprimir_alerta()
        ```
        *   A) Falta instanciar el objeto utilizando `new`.
        *   B) El método `imprimir_alerta` carece del parámetro obligatorio `self` en su firma, imposibilitando recibir la referencia automática del objeto.
        *   C) El bloque `print` de la función requiere comillas triples.
        *   D) El nombre de la clase debe iniciar con minúscula.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Código en Colab donde se corrigen métodos que carecían de `self` y se validan sus ejecuciones.

---

### CONCEPTO 4.4: El Constructor especial `__init__`
*   **CONCEPTO**: El método especial `__init__` es el constructor nativo de la clase. Python lo invoca de forma automática en el momento exacto en que se realiza la instanciación de un objeto [107]. Su responsabilidad de diseño es inicializar de forma controlada el estado del objeto de partida, recibiendo y asignando los argumentos obligatorios u opcionales como atributos de la instancia.
*   **PRERREQUISITO**: Concepto 4.3 (El parámetro `self`).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] e inicialización de estados dinámicos [96].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

    teclado = Producto("Teclado Mecánico", 50.0)
    ```
*   **PREDECIR**: ¿Se puede crear un objeto `Producto()` sin pasar argumentos tras definir el constructor? No, el intérprete lanzará un error de argumentos requeridos al no suministrar los valores obligatorios del inicializador.
*   **EJECUTAR**: Correr la instanciación en Colab y observar los mensajes del intérprete ante llamadas vacías.
*   **MODIFICAR**: Modificar el constructor para incorporar un parámetro opcional con valor por defecto: `def __init__(self, nombre, precio_base, stock=0):` [183, 189].
*   **ERROR HABITUAL**: Escribir mal el nombre del constructor especial utilizando un único guión bajo (ej. `_init_`) o deletrearlo incorrectamente, lo que provoca que Python lo interprete como un método ordinario y no ejecute ninguna inicialización automática, arrojando errores de atributos ausentes en las llamadas del script.
*   **MINI-RETO**: Crear la clase `Usuario` cuyo constructor inicialice de forma segura las propiedades de texto `nombre` y `email`.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Completar código*: Rellena las líneas para definir un constructor de clase estándar que asocie el parámetro `precio_base` como atributo de instancia.
        ```python
        class Producto:
            def _______(self, nombre, precio_base):
                self.nombre = nombre
                _______ = precio_base
        ```
        *   A) `init` / `precio_base`
        *   B) `__init__` / `precio_base`
        *   C) `__init__` / `self.precio_base`
        *   D) `_init_` / `self.precio_base`
    *   *Respuesta*: **C**.
*   **EVIDENCIA**: Cuaderno Colab con la declaración de la clase Producto y la instanciación exitosa de múltiples productos con diferentes datos mediante un constructor paramétrico.

---

### CONCEPTO 4.5: Atributos de Instancia (Estado Independiente)
*   **CONCEPTO**: Los atributos de instancia son variables de estado que pertenecen exclusivamente a un objeto individual en memoria [107]. Cada objeto instanciado mantiene su propia copia de estos atributos de forma aislada, asegurando que las modificaciones sobre las propiedades de un objeto no afecten silenciosamente al estado de otros objetos de la misma clase.
*   **PRERREQUISITO**: Concepto 4.4 (Constructor `__init__`).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y el aislamiento de variables en memoria [95].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

    p1 = Producto("Teclado", 50.0)
    p2 = Producto("Ratón", 20.0)
    ```
*   **PREDECIR**: Si ejecutamos la asignación `p1.precio_base = 45.0`, ¿qué valor tendrá la propiedad `p2.precio_base`? El alumno debe predecir que mantendrá su valor de `20.0` intacto debido al aislamiento de estado.
*   **EJECUTAR**: Ejecutar la mutación en Colab e imprimir las propiedades de ambas variables para verificar el aislamiento en memoria de las instancias.
*   **MODIFICAR**: Crear un método de instancia `calcular_precio_final(self, tasa_iva)` que multiplique la propiedad de instancia `self.precio_base` por el porcentaje impositivo dado.
*   **ERROR HABITUAL**: Confundir variables locales de función con atributos de instancia al omitir el prefijo de referencia `self.` dentro del cuerpo de los métodos de la clase.
*   **MINI-RETO**: Instanciar tres objetos diferentes de la clase `CalificacionEstudiante` basándose en las notas del notebook (Ana: 8, Juan: 5, Sonia: 10) utilizando el constructor para verificar el aislamiento de sus calificaciones en memoria [187].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Predecir atributos*: ¿Cuál es la salida impresa en pantalla tras ejecutar el siguiente bloque de código?
        ```python
        class Estudiante:
            def __init__(self, nombre, nota):
                self.nombre = nombre
                self.nota = nota

        e1 = Estudiante("Ana", 8)
        e2 = Estudiante("Juan", 5)
        e1.nota += 1
        print(e1.nota, e2.nota)
        ```
        *   A) `9 6`
        *   B) `8 5`
        *   C) `9 5`
        *   D) Genera un error de tipo `TypeError`.
    *   *Respuesta*: **C**. (El incremento de nota se aplica de forma única y exclusiva sobre el espacio de atributos de `e1`, dejando el estado de `e2` completamente inalterado en memoria [107]).
*   **EVIDENCIA**: Pruebas en consola local que validan que la modificación de atributos sobre un objeto no altera el estado de las propiedades homónimas de otras instancias de la clase.

---

### CONCEPTO 4.6: Encapsulación Básica (Atributos Protegidos y Privados)
*   **CONCEPTO**: La encapsulación es un principio de diseño que permite agrupar datos y comportamiento bajo una interfaz controlada. En Python, la privacidad absoluta no existe por diseño. Sin embargo, se utilizan convenciones de guiones bajos para regular el acceso:
    *   **Protegido (`_atributo`)**: Es una indicación para los desarrolladores de que este atributo no debe ser accedido directamente desde el exterior de la clase o de sus subclases, aunque el intérprete de Python no lo impida físicamente.
    *   **Ofuscado (`__atributo`)**: Cuando un atributo se inicia con doble guion bajo, Python aplica un mecanismo interno llamado **Name Mangling** (ofuscación de nombres), renombrando la variable internamente como `_NombreDeLaClase__atributo`. Esto dificulta el acceso accidental desde fuera de la clase, pero **no constituye una privacidad absoluta o un bloqueo físico e inquebrantable de memoria**.
    *   **Getters y Setters**: No constituyen un patrón obligatorio para todas las clases y atributos en Python (no es necesario crear un getter y un setter para cada variable de estado de forma sistemática). Su uso se reserva exclusivamente para cuando aporta un **verdadero valor pedagógico o de control de negocio**, por ejemplo, para validar que el precio de un `Producto` sea estrictamente positivo antes de modificar el estado interno del objeto.
*   **PRERREQUISITO**: Concepto 4.5 (Atributos de Instancia).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y el blindaje ante errores de tipos no compatibles [150, 163].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.__precio_base = precio_base  # Atributo ofuscado (Name Mangling)

        def get_precio(self):
            return self.__precio_base

        def set_precio(self, nuevo_precio):
            if nuevo_precio > 0:
                self.__precio_base = nuevo_precio
            else:
                print("Error: El precio base debe ser estrictamente positivo.")
    ```
*   **PREDECIR**: ¿Qué ocurrirá si intentamos ejecutar `print(teclado.__precio_base)` de forma directa fuera de la clase? Arrojará un error `AttributeError` al no localizarse la variable debido al name mangling de Python.
*   **EJECUTAR**: Correr el código en Colab y verificar que el intérprete bloquea el acceso directo externo.
*   **MODIFICAR**: Modificar el método de control `set_precio` para validar que el argumento ingresado sea de tipo numérico (`int` o `float`), lanzando un error `TypeError` si recibe tipos incompatibles [150].
*   **ERROR HABITUAL**: Intentar acceder a un atributo ofuscado `__atributo` (name mangling) asumiendo que Python tiene un bloqueo físico absoluto, olvidando que Python lo expone de forma ofuscada bajo la sintaxis `_NombreClase__atributo` (una mala práctica de diseño que rompe la encapsulación).
*   **MINI-RETO**: Crear la clase `CuentaBancaria` con un atributo ofuscado `__saldo` (para name mangling) e implementar un setter `depositar(self, monto)` que valide y aumente el saldo únicamente si el monto es estrictamente mayor que cero.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Detectar errores*: Identifica qué línea del script lanzará un error de ejecución `AttributeError` debido a una violación de las reglas de encapsulación física:
        ```python
        class Producto:
            def __init__(self, nombre, costo):
                self._nombre = nombre       # Línea 1
                self.__costo = costo        # Línea 2

        teclado = Producto("Teclado", 50)
        print(teclado._nombre)              # Línea 3
        print(teclado.__costo)              # Línea 4
        ```
        *   A) Línea 1
        *   B) Línea 3
        *   C) Línea 4
        *   D) Ninguna, el código se ejecuta con total normalidad.
    *   *Respuesta*: **C**. (La línea 4 intenta acceder directamente a un atributo privado que ha sido ofuscado por Python, arrojando un error de atributo al no localizarse en el espacio de nombres de la instancia exterior).
*   **EVIDENCIA**: Estructura de código blindada en Colab que implementa Getters y Setters seguros para controlar y validar la integridad de las variables de estado.

---

### CONCEPTO 4.7: Relación de Composición ("Tiene un")
*   **CONCEPTO**: La composición es un patrón de diseño estructural de objetos en el cual una clase (contenedor) alberga una lista o una colección de instancias de otras clases independientes (componentes) como parte de sus atributos de estado ("una clase tiene un objeto") [14, 171]. El ciclo de vida de los componentes depende de la existencia de la clase que los contiene.
*   **PRERREQUISITO**: Concepto 4.6 (Encapsulación).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y el modelado de listas ordenadas y colecciones [171, 172].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

    class CarritoCompras:
        def __init__(self):
            self.items = []  # Composición: El Carrito tiene una lista de objetos Producto

        def agregar_item(self, producto):
            self.items.append(producto)  # Añade la instancia a la lista mutable [173]
    ```
*   **PREDECIR**: Si creamos un objeto `CarritoCompras` y le añadimos dos instancias de `Producto`, ¿cómo calculamos el total del carrito? Iterando la lista `self.items` en un bucle `for` y sumando el atributo `.precio_base` de cada objeto [158, 247].
*   **EJECUTAR**: Correr la implementación en Colab añadiendo un método `calcular_total(self)` que itere de forma segura las instancias del carrito.
*   **MODIFICAR**: Incorporar un método `mostrar_detalles(self)` que recorra los artículos y muestre sus propiedades de forma limpia utilizando f-strings [120, 184].
*   **ERROR HABITUAL**: Tratar a los objetos componentes almacenados en la lista como diccionarios, intentando usar claves (ej. `self.items[0]["precio_base"]`) en lugar de acceder mediante propiedades de instancia (`self.items[0].precio_base`).
*   **MINI-RETO**: Crear la clase `InventarioTienda` que contenga una lista interna de objetos `Producto` y un método para buscar y devolver la cantidad de artículos que coincidan con un nombre exacto.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Decidir herencia frente a composición*: Necesitamos modelar un sistema informático. Una clase `Servidor` tiene múltiples componentes de la clase `UnidadDisco`. ¿Cuál es el diseño óptimo de objetos de acuerdo con las buenas prácticas de ingeniería de software?
        *   A) `Servidor` debe heredar de `UnidadDisco` ("un Servidor es un Disco").
        *   B) `UnidadDisco` debe heredar de `Servidor` ("un Disco es un Servidor").
        *   C) `Servidor` debe usar Composición, almacenando una lista de instancias de `UnidadDisco` en sus atributos de estado ("un Servidor tiene un Disco").
        *   D) No se requiere POO; se debe resolver con una única variable global de texto.
    *   *Respuesta*: **C**. (La relación lógica define que la entidad Servidor contiene y administra instancias de UnidadDisco, haciendo de la Composición el patrón óptimo).
*   **EVIDENCIA**: Script de consola en Colab donde una clase orquestadora procesa colecciones de instancias de otra clase, realizando sumas estadísticas de sus atributos.

---

### CONCEPTO 4.8: Relación de Herencia ("Es un")
*   **CONCEPTO**: La herencia es una técnica de reutilización estructurada de código que faculta a una clase nueva (subclase o clase hija) para adoptar todos los atributos y métodos declarados por una clase existente (superclase o clase padre) [176]. Modela relaciones de especialización ("es un"), permitiendo que la subclase extienda o refine el comportamiento de la superclase sin duplicar lógica en el proyecto.
*   **PRERREQUISITO**: Concepto 4.7 (Composición).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y la especialización de estructuras de colecciones [176].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

    class ProductoHardware(Producto):  # ProductoHardware hereda de Producto
        pass

    ram = ProductoHardware("Memoria RAM 16GB", 80.0)
    ```
*   **PREDECIR**: ¿Dispone el objeto `ram` de los atributos `nombre` y `precio_base` si su cuerpo de clase está vacío? Sí, los ha adoptado de forma directa de su clase base `Producto`.
*   **EJECUTAR**: Ejecutar la declaración en Colab y comprobar si el objeto es reconocido mediante la función incorporada `isinstance(ram, Producto)` (debe retornar `True`).
*   **MODIFICAR**: Añadir a la subclase `ProductoHardware` un atributo exclusivo `peso_kg` en su método inicializador.
*   **ERROR HABITUAL**: Olvidar indicar la clase padre entre paréntesis al declarar la firma de la clase hija (ej. escribir `class Subclase:`), lo que desactiva la relación de herencia en el compilador.
*   **MINI-RETO**: Crear la clase base `Estudiante` y una subclase `EstudiantePresencial` que añada un atributo para registrar su número de asiento físico de forma exclusiva.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Distinguir clase/objeto*: De acuerdo con la relación de herencia y la estructura de objetos, ¿cuál de las siguientes opciones describe correctamente a `pdf` si ejecutamos `pdf = ProductoDigital("Ebook", 12)`?
        *   A) `pdf` es una subclase y `ProductoDigital` es su clase padre.
        *   B) `pdf` es un objeto instanciado y `ProductoDigital` es la clase que le da su molde conceptual.
        *   C) `pdf` es un atributo y `ProductoDigital` es una función modular.
        *   D) `pdf` y `ProductoDigital` son dos variables de tipo flotante en memoria.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Diagrama lógico de jerarquía de clases de desarrollo propio implementado en Colab donde se verifica la adopción nativa de métodos y atributos del padre.

---

### CONCEPTO 4.9: El Uso del método `super()`
*   **CONCEPTO**: `super()` es una función incorporada de Python que retorna un objeto proxy temporal delegado a invocar métodos de la superclase o clase madre. Su rol técnico imprescindible es permitir que el constructor de la subclase (`__init__`) llame de forma directa y limpia al constructor de la clase base, inicializando los atributos heredados de forma unificada antes de definir los atributos particulares de la subclase.
*   **PRERREQUISITO**: Concepto 4.8 (Relación de Herencia).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

    class ProductoHardware(Producto):
        def __init__(self, nombre, precio_base, garantia_meses):
            super().__init__(nombre, precio_base)  # Inicialización parental unificada
            self.garantia_meses = garantia_meses   # Propiedad de la subclase
    ```
*   **PREDECIR**: ¿Qué ocurrirá si omitimos la llamada a `super().__init__(nombre, precio_base)` dentro del constructor de `ProductoHardware`? La instancia del objeto hijo se creará sin inicializar los atributos de `nombre` y `precio_base`, arrojando errores `AttributeError` al intentar consultar esas propiedades en el programa.
*   **EJECUTAR**: Ejecutar el código en Colab e imprimir las tres propiedades del objeto inicializado para validar la llamada.
*   **MODIFICAR**: Crear una subclase `ProductoLicencia` que reciba un parámetro extra `fecha_expiracion` y use `super()` para heredar la inicialización de los datos base.
*   **ERROR HABITUAL**: Pasar el argumento `self` dentro de la invocación de `super()` (ej. `super().__init__(self, nombre, precio_base)`), lo que lanza un error `TypeError` debido a que `super()` autogestiona la referencia de la instancia de manera transparente.
*   **MINI-RETO**: Implementar el constructor de la jerarquía del sistema escolar escolar utilizando `super()` para delegar el nombre del estudiante de forma óptima.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Completar super()*: Selecciona la opción que completa la inicialización correcta del constructor heredado de la superclase `Producto` dentro de la subclase `ProductoLicencia`.
        ```python
        class ProductoLicencia(Producto):
            def __init__(self, nombre, precio_base, clave_activacion):
                _________________________ # Inicializar variables heredadas
                self.clave_activacion = clave_activacion
        ```
        *   A) `self.super().__init__(nombre, precio_base)`
        *   B) `super().__init__(nombre, precio_base)`
        *   C) `super(nombre, precio_base)`
        *   D) `Producto.__init__(nombre, precio_base)`
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Código depurado por el alumno en el que se corrigen constructores de subclases que omitían `super()`, restableciendo la integridad de las variables heredadas.

---

### CONCEPTO 4.10: Sobrescritura de Métodos y Polimorfismo Básico
*   **CONCEPTO**: La **sobrescritura de métodos** faculta a una subclase para declarar una implementación específica para un método que ya ha sido definido en la superclase. El **polimorfismo básico** es la propiedad de los objetos que permite que llamadas a métodos con firmas idénticas aplicadas sobre variables de diferentes clases ejecuten comportamientos especializados distintos en tiempo de ejecución, según la clase dinámica del objeto instanciado.
*   **PRERREQUISITO**: Concepto 4.9 (El método `super()`).
*   **EJEMPLO DE FUENTE**: `OOP's Concepts.ipynb` [347] y las diferentes respuestas de las estructuras de datos ante métodos homónimos [111, 171, 181].
*   **CÓDIGO MÍNIMO**:
    ```python
    class Producto:
        def __init__(self, nombre, precio_base):
            self.nombre = nombre
            self.precio_base = precio_base

        def calcular_precio_final(self):
            return self.precio_base  # Comportamiento base

    class ProductoDigital(Producto):
        def calcular_precio_final(self):
            return self.precio_base * 0.90  # Sobrescritura: Descuento digital del 10%

    class ProductoHardware(Producto):
        def calcular_precio_final(self):
            return self.precio_base * 1.21  # Sobrescritura: Suma del 21% de IVA
    ```
*   **PREDECIR**: Si tenemos la lista `inventario = [ProductoDigital("Guía", 10.0), ProductoHardware("Cable", 10.0)]` y la recorremos en un bucle iterativo ejecutando `p.calcular_precio_final()`, ¿cuál es el precio final de cada uno? El digital devolverá `9.0` y el de hardware devolverá `12.1`, ejecutando de forma dinámica la lógica de la subclase a la que pertenece cada objeto instanciado.
*   **EJECUTAR**: Correr la lista polimórfica en Colab y sumar el total devuelto por las llamadas del bucle.
*   **MODIFICAR**: Modificar el método de la superclase para retornar un string descriptivo y sobreescribirlo en las hijas combinando la salida del padre mediante una llamada a `super().metodo()`.
*   **ERROR HABITUAL**: Sobrescribir un método modificando la firma original (como el número de argumentos requeridos), lo que rompe la interfaz uniforme y lanza errores de tipo cuando se itera de forma genérica en el software.
*   **MINI-RETO**: Sobrescribir el método `calcular_matricula()` en las subclases `EstudiantePresencial` (que suma costo de materiales) y `EstudianteOnline` (que aplica un descuento) de la jerarquía escolar.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Predecir comportamiento polimórfico*: Teniendo la jerarquía de clases de código mínimo definida arriba, ¿qué imprime el siguiente fragmento tras ejecutarse?
        ```python
        p = ProductoDigital("Ebook", 100.0)
        print(p.calcular_precio_final())
        ```
        *   A) `100.0`
        *   B) `90.0`
        *   C) `121.0`
        *   D) Genera un error `AttributeError`.
    *   *Respuesta*: **B**. (La variable `p` almacena una instancia de la subclase `ProductoDigital`. Al invocar `calcular_precio_final()`, Python despacha la llamada hacia el método sobrescrito específico de la subclase, aplicando la reducción del 10%).
*   **EVIDENCIA**: Programa interactivo en Colab que almacena una colección polimórfica de objetos de negocio y ejecuta un reporte analítico limpio iterándolos en un bucle unificado.

---

## 6. ERRORES HABITUALES COMPILADOS (BLOQUE 4)

1.  **Olvidar declarar `self` en las firmas de la clase**: Provoca que al instanciarse la clase y llamarse el método, el intérprete de Python arroje un error `TypeError` porque el primer parámetro recibe la instancia implícita de forma automática y la función carece de espacio para alojarla.
2.  **Modificar el estado de forma descontrolada**: Declarar atributos de forma abierta y pública permitiendo mutaciones externas inválidas (como precios de productos negativos), violando el principio de encapsulación.
3.  **Confusión conceptual entre Clase y Objeto**: Tratar de invocar métodos de instancia directamente sobre el nombre de la clase (ej. `Producto.mostrar_detalle()`) en lugar de instanciar previamente el objeto (ej. `teclado = Producto()`).
4.  **No llamar a `super()` en constructores**: Sobrescribir el constructor `__init__` de una subclase inicializando solo los atributos del hijo y omitiendo la delegación de las variables heredadas al padre, lo que genera instancias incompletas con fallos de atributo.

---

## 7. PRÁCTICAS RECOMENDADAS DE LAS FUENTES (APRENDER HACIENDO)

*   **Refactorización de Calificaciones Estudiantiles**: Tomar el diccionario de puntuaciones del cuaderno `ejercicios_pandas_resuelto.ipynb` [187] y encapsular el estado (`nombre`, `puntuacion`) y comportamiento (`ha_aprobado()`, `obtener_nota_ajustada()`) en una clase compacta `Estudiante`.
*   **Diseño de la Jerarquía Escolar**: Implementar un sistema de gestión escolar modular en Colab declarando la superclase `Estudiante` y subclases específicas `Presencial` y `Online` utilizando constructores controlados con `super()` y polimorfismo en el cálculo impositivo de matrícula.

---

## 8. PROYECTO INTEGRADOR OBLIGATORIO DEL BLOQUE 4

### "SAMI-OOP: El Sistema de Auditoría de Mercado Orientado a Objetos"

*   **Objetivo de Aprendizaje**: Evolucionar el software modular y estructurado **SAMI-Lite** desarrollado en el Bloque 3 hacia una arquitectura de software limpia orientada a objetos (OOP), aplicando los conceptos de encapsulación de atributos privados, validaciones, relaciones de composición e interfaces de herencia polimórfica de forma impecable.

#### Estructura de Diseño Arquitectónico de SAMI-OOP

El proyecto reemplaza el enfoque puramente procedimental por clases altamente cohesivas distribuidas en módulos independientes:

```
[Módulo persistencia.py] ──► Clase ValidadorArchivos (Manejo exceptions y logs)
[Módulo analizador.py]    ──► Superclase Producto ──┬──► Subclase ProductoHardware
                                                    └──► Subclase ProductoLicencia
                          ──► Clase AuditoriaMercado (Composición de productos)
[Módulo main.py]          ──► Orquestador de la Interfaz CLI y ejecución interactiva
```

#### 1. Módulo de Dominio y Lógica (`analizador.py`)

Contiene la jerarquía y las relaciones orientadas a objetos:

*   **Superclase `Producto`** [14]:
    *   *Constructor `__init__(self, nombre, precio_base)`*: Inicializa el nombre y valida el precio base mediante encapsulación.
    *   *Encapsulación*: Atributos protegidos `_nombre` y privado `__precio_base` con suGetter `get_precio()` y setter de validación seguro `set_precio(precio)` (lanza `ValueError` si es menor o igual a cero o `TypeError` si no es numérico) [150].
    *   *Método `calcular_precio_final(self, tasa_iva)`*: Método base que calcula y devuelve el precio final con IVA.
*   **Subclase `ProductoHardware`** (Hereda de `Producto`) [14]:
    *   *Constructor*: Recibe `nombre`, `precio_base` y el atributo exclusivo `peso_kg`. Invoca obligatoriamente a `super().__init__(nombre, precio_base)` para inicializar la clase padre de forma estándar.
    *   *Sobrescritura Polimórfica `calcular_precio_final(self, tasa_iva)`*: Calcula el precio final sumando la tasa de IVA base y un recargo fijo de envío de $2.0 por cada kilogramo de peso del hardware si supera los 5 kg.
*   **Subclase `ProductoLicencia`** (Hereda de `Producto`) [14]:
    *   *Constructor*: Recibe `nombre`, `precio_base` y el atributo exclusivo `clave_activacion`. Inicializa la clase padre con `super()`.
    *   *Sobrescritura Polimórfica `calcular_precio_final(self, tasa_iva)`*: Retorna el precio base sin aplicar recargo por peso (las licencias digitales no pagan costo físico de envío), pero restando un descuento fijo del 5% del producto digital si el precio base es superior a $100.
*   **Clase `AuditoriaMercado` (Composición)** [14]:
    *   *Constructor `__init__(self, umbral_alerta)`*: Inicializa el umbral e inicializa la colección mutable de ítems como una lista vacía `self.productos = []`.
    *   *Método `agregar_producto(self, producto)`*: Recibe instancias de la superclase `Producto` (ya sean hardware o licencias) y las agrega a su colección.
    *   *Método `generar_reporte(self, tasa_iva)`*: Recorre polimórficamente la lista de productos e imprime los precios finales calculados. Retorna la suma total agregada del carrito.

#### 2. Módulo de Persistencia de Datos (`persistencia.py`)

*   **Clase `ManejadorDatos`**:
    *   Encapsula la lectura de configuraciones JSON y registro de logs de transacciones CSV de la base SAMI-Lite en métodos de una clase unificada de bajo nivel.

#### 3. Orquestador de Consola (`main.py`)

*   Instancia la clase `AuditoriaMercado` cargando los umbrales de configuración [66].
*   Corre el bucle interactivo de comandos de consola. El usuario elige si registrar un producto de Hardware o una Licencia. El programa pide los datos e instancia de forma dinámica la subclase correspondiente (`ProductoHardware` o `ProductoLicencia`), agregándolos al contenedor de auditoría.
*   Maneja de forma elegante todas las excepciones capturadas de entrada mediante validación de getters/setters e inicializaciones incorrectas [160].

---

## 9. TRAZABILIDAD DE INGENIERÍA DEL CONOCIMIENTO (BLOQUE 4)

| Concepto Técnico del Bloque 4 | Documento de la Fuente Oficial | Práctica Asociada del Itinerario | Microevaluación de Validación (SoloLearn) | Proyecto Integrador (SAMI-OOP) |
| :--- | :--- | :--- | :--- | :--- |
| **Clase y Objeto (Instanciación)** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Declaración de clases limpias e instanciaciones en Colab [107]. | Reto SoloLearn de completar sintaxis de creación de clase y llamada de objeto. | Instanciación dinámica de subclases en `main.py`. |
| **Atributos y Métodos** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] y `Conceptos Base (Slides)` [241, 243] | Asignación dinámica de variables de estado y acceso con sintaxis de punto. | Reto SoloLearn de predecir excepciones `AttributeError` ante variables no existentes. | Atributos de producto y métodos `calcular_precio_final()` en `analizador.py`. |
| **El Parámetro self** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] y `Conceptos Base (Slides)` [249] | Vinculación de métodos de instancia con self como receptor de la referencia automática. | Reto SoloLearn de detectar fallos `TypeError` de paso de argumentos por omisión de `self`. | Uso sistemático de `self` en todos los métodos de las clases del analizador. |
| **Constructor __init__** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] y `Google Colaboratory 2` [107] | Inicialización de propiedades de estado paramétricas en Colab [107]. | Reto SoloLearn de completado de inicializadores estructurados. | Constructores `__init__` en `Producto`, `ProductoHardware`, `ProductoLicencia` y `AuditoriaMercado`. |
| **Encapsulación (Getters/Setters)**| `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Blindaje de variables numéricas con getters y setters condicionales de control [150]. | Reto de localizar accesos directos incorrectos a variables privadas `__atributo` con name mangling (ofuscación). | Setter `set_precio(precio)` con validaciones y encapsulado de precio base. |
| **Composición ("tiene un")** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Modelado e iteración de listas de instancias de estudiantes en Colab [171, 187]. | Reto de emparejamiento para elegir la relación de diseño óptima (Composición vs. Herencia). | Lista de productos `self.productos` administrada dentro de la clase `AuditoriaMercado`. |
| **Herencia ("es un")** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Especialización de clases de animales o registros en Colab [176]. | Reto SoloLearn de identificar el rol de la variable instancia de una subclase. | `ProductoHardware` y `ProductoLicencia` heredando de la superclase `Producto`. |
| **Uso del proxy super()** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Acoplamiento estandarizado de constructores parametrizados en subclases. | Reto SoloLearn de completar la línea de delegación de constructores de superclase. | Llamadas `super().__init__(nombre, precio_base)` en los constructores de los hijos. |
| **Polimorfismo y Sobrescritura** | `Jupyter Notebooks/OOP's Concepts.ipynb` [347] | Implementación de firmas homónimas con comportamiento especializado en Colab. | Reto SoloLearn de predecir la salida de cálculos impositivos dinámicos sobre variables mixtas. | Bucle iterativo polimórfico llamando a `calcular_precio_final()` en `AuditoriaMercado`. |

---

## 10. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 4)

De acuerdo con el análisis de los materiales de tu base de conocimiento, se identifican las siguientes áreas de la programación orientada a objetos que **notablemente no están documentadas a nivel práctico o técnico en las fuentes**, declarándose formalmente como lagunas lógicas:

1.  **Complejidad algorítmica Big-O aplicada a búsquedas en colecciones de objetos**: Las fuentes no documentan el costo de procesamiento de memoria para recorrer listas de objetos frente a su mapeo indexado por diccionarios, por lo que el diseño de rendimiento se excluye de las evaluaciones obligatorias.
2.  **Métodos Especiales / Mágicos Avanzados (Dunder Methods)**: Las fuentes no describen el funcionamiento técnico ni ejemplos de métodos especiales de sobrecarga (como `__repr__`, `__len__`, `__eq__`, `__add__`), limitando el alcance estrictamente a `__init__` [107].
3.  **Métodos y Atributos de Clase (`@classmethod`, `@staticmethod`)**: No se proveen explicaciones técnicas sobre decoradores ni variables globales a nivel de clase, limitándose el material exclusivamente al ámbito de atributos y métodos de la instancia individual.
4.  **Concepto de Herencia Múltiple y orden de resolución de métodos (MRO)**: Las fuentes cubren únicamente la herencia simple ("un hijo hereda de un padre") [176], omitiendo de forma íntegra las reglas de resolución sintáctica cuando una clase hereda de múltiples padres simultáneamente.
5.  **Interfaces formales y Clases Abstractas (`abc`, `ABC`)**: No existe documentación sobre el uso de la librería estándar `abc` ni el uso del decorador `@abstractmethod` para obligar físicamente a la sobrescritura de interfaces, utilizándose en su lugar la sobrescritura informal en Python nativo.
6.  **Uso del decorador `@property` (Getters/Setters pitónicos)**: En Python, lo estándar es usar atributos públicos directos y refactorizarlos más adelante con el decorador `@property` si se requiere validación posterior. Dado que las fuentes del notebook no contienen la sintaxis de `@property` ni ejemplos prácticos, se mantiene como una laguna técnica de este bloque, limitando los Getters/Setters a métodos de interfaz explícitos.
