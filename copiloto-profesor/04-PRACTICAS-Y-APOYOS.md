# 04 · GUÍA INTEGRAL DE PRÁCTICAS, APOYOS Y PLANES B

Este documento reúne el mapa de recursos actuales y una selección de prácticas y apoyos para el formador de la **Red Circular FAB**. Las fichas temáticas conservadas no son un inventario exhaustivo ni sustituyen los enunciados publicados.

## Ruta práctica publicada: dónde empezar

Esta tabla identifica los recursos actuales; las fichas posteriores son apoyos temáticos y su numeración no equivale siempre a la del portal. Antes de preparar una sesión, lee la actividad elegida y su README.

| Bloque | Entrada y material | Evidencia o decisión principal |
| --- | --- | --- |
| B1 | [Inicio](../bloques/bloque1/inicio.html) · [Cuaderno de fundamentos](../bloques/bloque1/cuadernos/fundamentos-python-b1.ipynb) | Predicción, modificación y taquilla del día; checkpoints de fundamentos y decisiones. |
| B2 | [Inicio](../bloques/bloque2/inicio.html) · [Cuaderno de colecciones](../bloques/bloque2/cuadernos/colecciones-datos-b2.ipynb) | Elegir estructuras, analizar frases y justificar el clasificador de palabras. |
| B3 | [Cuaderno de funciones](../bloques/bloque3/cuadernos/funciones-proyecto-b3.ipynb) · [SAMI-Lite](../bloques/bloque3/proyecto-sami-lite/README_PROYECTO.md) | Seguir llamadas entre módulos y modificar una regla de precio con casos de comprobación. |
| B4 | [Cuaderno de objetos](../bloques/bloque4/cuadernos/objetos-diseno-b4.ipynb) · [SAMI-OOP](../bloques/bloque4/proyecto-sami-oop/README_PROYECTO.md) | Decidir responsabilidades y comprobar peso e IVA en las clases reales. |
| B5 | [Cuaderno de datos](../bloques/bloque5/cuadernos/explorar-datos-b5.ipynb) · [SAMI-Applied](../bloques/bloque5/proyecto-sami-applied/README_PROYECTO.md) | CSV → análisis → PDF; comprobar estructura y revisar visualmente el informe. |
| B6 | [Seis experiencias](../bloques/bloque6/inicio.html) · [Copia base](../bloques/bloque6/recursos/proyecto-seguro/) | Orientarse → entorno → flujo → depurar → modificar → Git local. |
| B7 | [SAMI Final + vía avanzada](../bloques/bloque7/recursos/proyecto/sami-final.md) · [Seis experiencias y descargas](../bloques/bloque7/inicio.html) | Un solo final sobre SAMI; el agente interviene con tarea acotada → contexto → diff → pruebas → ACEPTAR/MODIFICAR/RECHAZAR. |

B6 conserva la misma copia personal durante sus seis experiencias. B7 trabaja sobre SAMI Final; `agente-real` sirve de ejemplo del flujo en EXP-02→04, EXP-05 usa LangGraph sin LLM y EXP-06 puede completarse sin Ollama. No exijas conexiones reales para las alternativas locales previstas.

**Materiales de autor que se conservan:** las prácticas numeradas, trazabilidades y plantillas SAMI de `bloques/bloqueN/recursos/` ofrecen apoyo adicional. Algunas no reflejan las copias prácticas nuevas; no las combines sin identificar la versión. [06](06-SAMI.md) detalla SAMI y [07](07-LAGUNAS-Y-LIMITES.md) recoge los conflictos de evaluación.



Para cada práctica se detalla:
* **Objetivo y Código Base:** Qué debe escribir o ejecutar el alumno.
* **Puntos Críticos de Bloqueo:** Dónde tropiezan habitualmente los estudiantes.
* **Estrategia de Pistas en 3 Niveles (Guía Socrática):** Cómo orientar sin dar la solución hecha.
* **Plan B / Adaptación:** Qué hacer si falta tiempo o el grupo tiene dificultades.
* **Validación:** resultado esperado, evidencia observable, criterio de éxito, método de comprobación y artefacto cuando exista.

Ficha mínima de validación que debe usar el Copiloto cuando una práctica no la detalle:

- **Resultado esperado:** qué debe verse al ejecutar o revisar la práctica.
- **Evidencia observable:** salida de consola, archivo generado, tabla filtrada, error controlado o explicación oral del alumno.
- **Criterio de éxito:** condición mínima para pasar al siguiente paso.
- **Método de comprobación:** ejecutar, inspeccionar archivo, leer traceback, comparar salida o pedir explicación.
- **Artefacto:** solo se menciona si existe realmente en los materiales o la práctica lo genera.

Plan B:

- **Técnico:** entorno alternativo, dependencia, archivo o ruta que revisar.
- **Pedagógico:** simplificar a lectura guiada, predicción de salida o trabajo por parejas.
- **Temporal:** versión completa, reducida o emergencia de 10-30 minutos.

---

# BLOQUE 1: FUNDAMENTOS Y LÓGICA

## Práctica 1.1: Operaciones Aritméticas y `divmod()`
* **Objetivo:** Usar operadores y `divmod()` para convertir 137 minutos a horas y minutos, y resolver el reparto de 29 piezas en cajas de 6.
* **Código Base:**
  ```python
  minutos = 137
  horas, resto = divmod(minutos, 60)
  print(f"{horas} h y {resto} min")
  ```
* **Reto Alumno:** Calcular cajas completas y sobrantes para 29 piezas en cajas de 6.
* **Pistas Graduales para el Docente:**
  * *Nivel 1:* "¿Qué dos números representan el total de piezas y la capacidad de cada caja?"
  * *Nivel 2:* "Recuerda que `divmod(dividendo, divisor)` te devuelve dos valores: el primero es cuántas cajas llenas y el segundo cuántas te sobran."
  * *Nivel 3:* `cajas, sobran = divmod(29, 6)`
* **Salida Esperada:** `4 cajas y 5 piezas sobrantes` (porque `4 * 6 = 24`, sobran `5`).
* **Evidencia Observable:** la consola muestra horas/minutos y cajas/sobrantes sin error.
* **Criterio de Éxito:** el alumno explica qué valor es cociente y qué valor es resto.
* **Método de Comprobación:** cambiar 29 por otro número y comprobar mentalmente el resultado.
* **Plan B:** Si un alumno se bloquea con el desempaquetado doble, permitirle hacer `cajas = 29 // 6` y `sobran = 29 % 6` por separado antes de unificarlos con `divmod()`.

---

## Práctica 1.2: Tramos de Edad y Precios de Entrada
* **Objetivo:** Tomar decisiones con `if / elif / else` para calcular precios: `< 12` años (5 €), `12 a 64` años (8 €), `>= 65` años (4 €).
* **Código Base:**
  ```python
  edad = 14
  if edad < 12:
      precio = 5
  elif edad <= 64:
      precio = 8
  else:
      precio = 4
  print(f"Precio de la entrada: {precio:.2f} €")
  ```
* **Pistas Graduales:**
  * *Nivel 1:* "¿En qué orden estás evaluando las edades? Si pones primero `>= 65`, ¿dónde debe ir el `elif`?"
  * *Nivel 2:* "Comprueba la indentación (los 4 espacios) dentro de cada bloque de condición."
  * *Nivel 3:* Revisa que los dos puntos `:` estén al final de cada línea de `if`, `elif` y `else`.
* **Plan B:** Probar con edades de prueba: 8, 14, 70 para validar visualmente que entra por las tres ramas.
* **Validación:** la evidencia mínima son tres ejecuciones que cubran menor de 12, adulto y mayor de 65; el criterio de éxito es justificar el orden de `if/elif/else`.

---

## Práctica 1.3: Media de Notas con `input()` y Casting
* **Objetivo:** Pedir 3 notas al usuario mediante consola, convertirlas a decimal (`float`) y calcular la media aritmética formateada.
* **Código Base:**
  ```python
  n1 = float(input("Nota 1: "))
  n2 = float(input("Nota 2: "))
  n3 = float(input("Nota 3: "))
  media = (n1 + n2 + n3) / 3
  print(f"Media final: {media:.2f}")
  ```
* **Pistas Graduales:**
  * *Nivel 1:* "Si divides `n1 + n2 + n3 / 3` sin paréntesis, ¿qué operación hace Python primero?"
  * *Nivel 2:* "El orden de precedencia matemática divide primero `n3 / 3`. Agrupa la suma entre paréntesis."
  * *Nivel 3:* `(n1 + n2 + n3) / 3`
* **Plan B:** Si Colab da problemas con la ventana emergente de `input()`, definir las variables directamente como números fijos en la celda (`n1 = 7.5; n2 = 8.0; n3 = 6.5`).
* **Validación:** la salida debe mostrar una media con dos decimales; el alumno debe detectar el error de paréntesis si se provoca.

---

## Práctica 1.4: Bucles, Conteos y Validación
* **Objetivo:** Recorrer con un bucle `for` los números del 1 al 20, contar cuántos son múltiplos de 3 (`n % 3 == 0`) y mostrar el total acumulado.
* **Código Base:**
  ```python
  contador = 0
  for n in range(1, 21):
      if n % 3 == 0:
          contador += 1
          print(f"Múltiplo encontrado: {n}")
  print(f"Total de múltiplos de 3: {contador}")
  ```
* **Pistas Graduales:**
  * *Nivel 1:* "¿Dónde debe crearse la variable `contador`? ¿Dentro o fuera del bucle?"
  * *Nivel 2:* "Si pones `contador = 0` dentro del bucle, se reiniciará a cero en cada vuelta."
  * *Nivel 3:* `range(1, 21)` llega hasta el 20 inclusive.
* **Validación:** se observan múltiplos de 3 entre 1 y 20 y un total final coherente; el alumno debe explicar por qué `range(1, 21)` incluye 20.

---

# BLOQUE 2: ESTRUCTURAS DE DATOS

## Práctica 2.1: Slicing y Reversión
* **Objetivo:** Extraer subcadenas con índices positivos y negativos sobre `"Pradera"` e invertir cadenas con paso negativo.
* **Código Clave:**
  ```python
  texto = "Pradera"
  sub = texto[1:5]    # "rade"
  inv = texto[::-1]   # "aredarP"
  ```
* **Pistas:** Recordar que el límite final no se incluye. El paso `-1` indica recorrer de derecha a izquierda.
* **Validación:** salida esperada `"rade"` y `"aredarP"`; criterio de éxito: explicar inicio, fin y paso.

---

## Práctica 2.2: Listas y Mutabilidad
* **Objetivo:** Crear una lista de inventario, modificar un elemento por índice, añadir elementos con `.append()` y eliminar con `.pop()`.
* **Código Clave:**
  ```python
  piezas = ["Tornillo", "Tuerca", "Arandela"]
  piezas[0] = "Tornillo M4"
  piezas.append("Remache")
  ```
* **Validación:** la lista final refleja modificación y añadido; criterio de éxito: distinguir modificar el mismo objeto de crear una copia.

---

## Práctica 2.3: Sets y Diccionarios con `.get()`
* **Objetivo:** Eliminar correos duplicados con `set()` y crear un diccionario de dispositivo donde las lecturas ausentes se rescatan de forma segura con `.get()`.
* **Código Clave:**
  ```python
  emails = ["a@fab.org", "b@fab.org", "a@fab.org"]
  unicos = set(emails)
  
  sensor = {"id": "S1", "tipo": "Humedad"}
  valor = sensor.get("temperatura", "Dato no disponible")
  ```
* **Pistas:** Explicar por qué `sensor["temperatura"]` lanzaría un error `KeyError` y cómo `.get()` previene la caída del programa.
* **Validación:** los duplicados desaparecen y `.get()` devuelve el valor por defecto sin romper el programa.

---

## Práctica 2.4: List & Dict Comprehensions
* **Objetivo:** Filtrar números pares y transformarlos al cuadrado en una sola línea.
* **Código Clave:**
  ```python
  numeros = [1, 2, 3, 4, 5, 6]
  pares_cuadrados = [x**2 for x in numeros if x % 2 == 0]
  # Resultado: [4, 16, 36]
  ```

---

## Proyecto B2: Clasificador e Indexador de Palabras
* **Objetivo:** Analizar un párrafo de texto, limpiar signos de puntuación, calcular palabras únicas con `set()`, contar frecuencias con un diccionario y listar palabras con longitud superior a 5 letras mediante comprensión.
* **Artefacto/Evidencia:** texto de entrada, lista de palabras normalizadas, conjunto de únicas, diccionario de frecuencias y explicación de la estructura elegida.

---

# BLOQUE 3: FUNCIONES Y MODULARIDAD

## Práctica 3.1: Definición `def` y `return` frente a `print`
* **Objetivo:** Diseñar funciones que calculen totales con impuestos devolviendo el dato con `return` para encadenar operaciones.
* **Código Base:**
  ```python
  def calcular_subtotal(precio_base, cantidad):
      """Calcula el importe sin impuestos."""
      return precio_base * cantidad

  def aplicar_iva(importe, iva=0.21):
      """Aplica el porcentaje de IVA al importe."""
      return importe * (1 + iva)
  ```
* **Pistas:** Forzar al alumno a comprobar `type(calcular_subtotal(10, 2))` para verificar que es un número (`float`/`int`) y no `NoneType`.

---

## Práctica 3.2: Parámetros Opcionales y Ámbito (Scope)
* **Objetivo:** Comprobar el aislamiento de variables locales y el comportamiento de parámetros por defecto.
* **Pistas:** Explicar que modificar una variable con el mismo nombre dentro de una función no altera la variable homónima del programa principal.

---

## Práctica 3.3: Docstrings y Excepciones `try-except`
* **Objetivo:** Documentar una función con formato docstring formal y envolver divisiones y conversiones en un bloque `try-except` capturando `ZeroDivisionError` y `ValueError`.
* **Código Clave:**
  ```python
  def dividir(a, b):
      """Divide dos números de forma segura."""
      try:
          return a / b
      except ZeroDivisionError:
          print("Error: No se puede dividir entre cero.")
          return None
  ```

---

## Práctica 3.4: Persistencia con `with open()` en JSON y CSV
* **Objetivo:** Guardar un diccionario de configuración en disco con `json.dump()` y volver a cargarlo con `json.load()`.
* **Código Clave:**
  ```python
  import json
  config = {"centro": "Jarandilla", "sensores_activos": 4}
  
  with open("config.json", "w", encoding="utf-8") as f:
      json.dump(config, f, indent=2)
      
  with open("config.json", "r", encoding="utf-8") as f:
      recuperado = json.load(f)
  ```

---

## Proyecto B3: SAMI-Lite (Gestor Modular y Persistencia)
* **Objetivo:** Trabajar con `main.py`, `analizador.py` y `persistencia.py` para calcular precios, evaluar alertas y guardar transacciones. Los archivos reales son `config.json`, `transacciones_auditoras.csv` y `auditoria_errores.log`; consulta [06 · SAMI](06-SAMI.md).
* **Artefacto/Evidencia:** módulos `.py`, archivos JSON/CSV generados y ejecución donde el alumno demuestra `return`, manejo de error y lectura/escritura.

---

# BLOQUE 4: PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

## Práctica 4.1: De Diccionario a Clase
* **Objetivo:** Transformar un diccionario de sensor disperso en una clase `Sensor` con atributos formales y método `mostrar_info()`.

---

## Práctica 4.2: Constructor `__init__` y `self`
* **Objetivo:** Crear una clase `Dispositivo` donde el constructor valida que el identificador no esté vacío y almacena un estado operativo inicial (`activo=True`).

---

## Práctica 4.3: Encapsulación
* **Objetivo:** Ocultar la lista de lecturas con `self._lecturas` y proporcionar métodos públicos `agregar_lectura(valor)` y `obtener_promedio()`.

---

## Práctica 4.4: Composición, Herencia y `super()`
* **Objetivo:** Crear la clase base `Sensor` y especializarla en `SensorTemperatura` y `SensorPresion`, llamando a `super().__init__()` y añadiendo unidades específicas (`"°C"`, `"hPa"`).
* **Código Clave:**
  ```python
  class Sensor:
      def __init__(self, id_sensor):
          self.id_sensor = id_sensor
          
  class SensorTemperatura(Sensor):
      def __init__(self, id_sensor, unidad="°C"):
          super().__init__(id_sensor)
          self.unidad = unidad
  ```

---

## Práctica 4.5: Polimorfismo
* **Objetivo:** Crear una lista heterogénea de sensores e iterar sobre ellos ejecutando el método común `.calibrar()` independientemente del tipo de sensor.

---

## Proyecto B4: SAMI-OOP
* **Objetivo:** Arquitectura con `Producto`, `ProductoHardware`, `ProductoLicencia`, `AuditoriaMercado` y `ManejadorDatos`. La copia práctica pide validar peso y razonar sobre la diferencia de IVA; consulta [06 · SAMI](06-SAMI.md).
* **Artefacto/Evidencia:** clases instanciables, relación de composición, al menos una subclase con `super()` y una llamada polimórfica explicada por el alumno.

---

# BLOQUE 5: PYTHON APLICADO Y LIBRERÍAS

La ruta publicada es **cuaderno de datos → SAMI-Applied con CSV → PDF**. Se conservan apoyos sobre NumPy, Pandas, Playwright y ReportLab; Playwright no es requisito del proyecto práctico de B5.

BeautifulSoup puede aparecer solo como decisión conceptual para HTML estático si el material actual lo conserva. No debe competir con Playwright ni convertirse en práctica central.

## Práctica 5.1: Operaciones Vectorizadas con NumPy
* **Objetivo:** Crear un array NumPy de precios, aplicar un incremento porcentual directo (`precios * 1.05`) y calcular media, desviación y valor máximo sin bucles `for`.
* **Código Clave:**
  ```python
  import numpy as np
  precios = np.array([12.50, 45.00, 18.20, 99.90])
  con_iva = precios * 1.21
  promedio = np.mean(con_iva)
  ```

---

## Práctica 5.2: Carga y Exploración con Pandas (`got_1.csv`)
* **Objetivo:** Cargar el dataset de Game of Thrones, explorar dimensiones con `.shape`, tipos con `.info()` y primeras filas con `.head()`.
* **Validación:** el alumno muestra columnas, primeras filas y entiende que `got_1.csv` es dataset didáctico de Pandas, no datos de SAMI-Applied.

---

## Práctica 5.3: Filtrado Booleano y Ordenación en Pandas
* **Objetivo:** Filtrar personajes por casa o puntuación y ordenar descendentemente con `.sort_values(by="Score", ascending=False)`.
* **Validación:** el filtro usa paréntesis y `&`/`|`, no `and`/`or`; la tabla filtrada tiene sentido y se puede explicar fila a fila.

---

## Práctica 5.4: Automatización Web con Playwright
* **Objetivo:** Navegar a una página web de prueba, esperar a que cargue el selector y extraer el texto de un elemento informativo.
* **Validación:** se observa el dato extraído o un error diagnosticado; el criterio de éxito incluye cerrar el navegador con `browser.close()`.

---

## Práctica 5.5: Informes en PDF con ReportLab
* **Objetivo:** Generar `factura_2027_001.pdf` a partir de datos estructurados utilizando ReportLab Platypus.
* **Flujo docente:** DATOS -> CÁLCULOS -> ESTRUCTURA -> MAQUETACIÓN -> PDF.
* **APIs del curso:** `SimpleDocTemplate`, `Paragraph`, `Image`, `Table`, `TableStyle`, `Spacer`, `getSampleStyleSheet`, estilos básicos, `colors`, `A4` y `build()`.
* **Datos de partida:** empresa, número de factura, fecha, cliente y líneas de factura como lista de diccionarios con `descripcion`, `cantidad` y `precio`.
* **Cálculos:** base imponible = suma de subtotales, IVA = base * 0.21, total = base + IVA.
* **Pistas Graduales:**
  * *Nivel 1:* "¿Qué parte son datos y qué parte es presentación?"
  * *Nivel 2:* "Calcula primero los importes en variables normales antes de crear la tabla."
  * *Nivel 3:* "La lista `story` debe recibir elementos Platypus y al final se llama a `doc.build(story)`."
* **Plan B:** Si no se genera el PDF, comprobar instalación de `reportlab`, ruta de salida, permisos de escritura, existencia del logo y que el archivo PDF no esté abierto en otro programa.
* **Límite:** `canvas` puede mencionarse como ampliación no evaluable; la práctica de factura usa Platypus.
* **Artefacto/Evidencia:** archivo `factura_2027_001.pdf` generado por el script, con tabla, importes y estructura legible.
* **Criterio de Éxito:** el alumno puede señalar dónde se definen los datos, dónde se calculan subtotales/IVA/total y dónde se añade cada elemento a `story`.

---

## Proyecto B5: SAMI-Applied
* **Objetivo:** Leer `datos_hardware.csv`, filtrar con Pandas, calcular indicadores con NumPy y generar `reporte_final_sami.pdf` con `generador_informe.py` y ReportLab Platypus.
* **Comprobación:** `comprobar.py` y revisión humana del PDF. El scraping se conserva aparte como ampliación online; no convertir el proyecto en facturación.
* **Artefacto/Evidencia:** CSV o registros de hardware, tabla analizada, resumen por consola y PDF de informe. `got_1.csv` se mantiene fuera del proyecto aplicado.

---

# BLOQUE 6: DEL NOTEBOOK AL ENTORNO PROFESIONAL

## Práctica 6.1: De Notebook a Script `.py`
* **Objetivo:** Migrar código de celdas sueltas a un archivo `main.py` organizado con imports arriba, funciones intermedias y bloque `if __name__ == '__main__':` abajo.

---

## Práctica 6.2: VS Code y Terminal
* **Objetivo:** Abrir una carpeta de proyecto en VS Code, abrir la terminal integrada y ejecutar `python main.py`.

---

## Práctica 6.3: Entornos Virtuales y `requirements.txt`
* **Objetivo:** Crear un entorno con `python -m venv venv`, activarlo (`venv\Scripts\activate` en Windows / `source venv/bin/activate` en Linux/Mac) e instalar dependencias desde `requirements.txt`.

---

## Práctica 6.4: Control de Versiones con Git y GitHub
* **Objetivo:** Inicializar Git, revisar `.gitignore`, `git status` y `git diff`, añadir solo el archivo del cambio, revisar `git diff --cached` y guardar un commit local validado. La experiencia actual no exige push ni remoto.

---

## Práctica 6.5: Depuración Interactiva con Breakpoints
* **Objetivo:** Colocar un breakpoint en VS Code, iniciar depuración con `F5`, inspeccionar variables en el panel lateral y avanzar paso a paso con `F10`.

---

## Proyecto B6: SAMI-Local
* **Objetivo:** Proyecto local completamente estructurado en disco con su carpeta `venv`, archivo `requirements.txt`, repositorio Git inicializado y ejecución depurada.
* **Artefacto/Evidencia:** árbol de carpetas reproducible, entorno activo, dependencias declaradas, ejecución por terminal y explicación de al menos un breakpoint.

---

# BLOQUE 7: PYTHON + IA (SAMI FINAL + VÍA AVANZADA)

B7 tiene un solo proyecto final: SAMI Final. Las prácticas 7.1–7.4 son capacidades que se ejercitan sobre ese mismo SAMI; la 7.5 es su defensa. Cuando intervenga un agente, el ciclo es: reproducir necesidad → punto seguro Git → tarea acotada → contexto → agente → `git status`/`git diff` → ejecutar → comprobar → ACEPTAR/MODIFICAR/RECHAZAR → commit de lo validado. La guía de SAMI Final incluye una primera intervención puente.

## Práctica 7.1: Formulación de Plan y Contexto para IA
* **Objetivo:** Escribir el objetivo y el contexto (entradas, salidas, tipos, restricciones y casos de error) antes de solicitar código a un asistente. Herramienta: OCV (Objetivo → Contexto → Verificación), sin plantilla obligatoria.

---

## Práctica 7.2: Auditoría Crítica de Código Generado
* **Objetivo:** Tomar una función sugerida por IA, analizar línea a línea su lógica y detectar posibles alucinaciones o ineficiencias antes de integrarla.

---

## Práctica 7.3: Depuración Guiada de Tracebacks con IA
* **Objetivo:** Proporcionar a la IA un código con fallo y el Traceback de la consola para obtener y entender la corrección exacta. Flujo: reproducir → leer la última línea → localizar la función → hipótesis en una frase → corregir una cosa → re-ejecutar → comprobar que no se rompió otra cosa.

---

## Práctica 7.4: Refactorización y Plan de Validación
* **Objetivo:** Rediseñar una función para mejorar su legibilidad y ejecutar una batería de pruebas con valores extremos (`None`, cadenas vacías, números negativos).

---

## Práctica 7.5: Defensa Técnica de SAMI Final
* **Objetivo:** Presentación oral donde el alumno explica su proyecto ante el formador justificando su arquitectura y demostrando que no ha caído en el "desarrollo zombi".

---

## Material de B7: SAMI Final y documentación

* **Entregables:**
  1. SAMI del alumno (código fuente modular ejecutable en VS Code).
  2. `registro-ia.md` (una línea por intervención: tarea, contexto, cambio, comprobación y decisión ACEPTAR/MODIFICAR/RECHAZAR).
  3. `plan-validacion.md` (casos de prueba y resultados obtenidos).
  4. `README-defensa.md` (justificación arquitectónica del sistema).
* **Criterio de Éxito:** el alumno defiende decisiones propias, identifica aportaciones de IA, muestra pruebas y puede explicar el código sin recitarlo.

---

## Orquestación avanzada: ampliación de LangGraph
* **Carácter:** Estrictamente opcional / Avanzado.
* **Objetivo de ampliación:** Explorar memoria conversacional e intervención humana. Se distingue de EXP-05, que ya contiene un grafo ejecutable sin LLM; consultar su README y documentar las comprobaciones omitidas.

---

# LAB FINAL OPCIONAL: LABORATORIO DE PROGRAMACIÓN

* **Carácter:** Recurso final opcional. No es B8, no es evaluable y no forma parte de SAMI.
* **Flujo común:** VER -> PROBAR -> MODIFICAR -> MINI-RETO.
* **Contenido:** pathway práctico y laboratorios adicionales. Las cinco experiencias originales se conservan junto con recursos posteriores; consultar el mapa de 08 y el portal.
* **Uso docente:** emplear como cierre motivador del itinerario, no como nuevo bloque académico.
* **Referencia operativa:** consultar [08-LAB-PYTHON-EN-ACCION.md](08-LAB-PYTHON-EN-ACCION.md).
