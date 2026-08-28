# INGENIERÍA CURRICULAR DETALLADA: BLOQUE 7
## "Python + IA"
### Itinerario: "Python 2027: De los Fundamentos a la Programación Asistida por IA"

Este documento constituye la **Ingeniería del Conocimiento específica para el Bloque 7: Python + IA**, diseñada en estricta conformidad con el alcance curricular, pedagógico e infraestructural de la versión V4 [190].

El objetivo central de este bloque es que el alumno aprenda a desarrollar software asistido por modelos de lenguaje de forma **crítica, analítica y estrictamente controlada**, evitando el nocivo "desarrollo zombi" (la integración ciega de código autogenerado sin asimilación real) [15]. En esta etapa, los asistentes de IA se elevan de herramientas de entorno a socios de copiloto metodológico mediante un protocolo secuencial riguroso, culminando (de manera totalmente opcional) en el modelado de arquitecturas de agentes autónomos con estado empleando **LangGraph** [3, 4, 15].

---

## 1. OBJETIVO OPERATIVO
Gobernar con total autonomía el ciclo de desarrollo de software asistido por IA aplicando de forma sistemática el **Flujo Crítico de Trabajo de 2026/2027** para planificar, proveer contextos, generar, auditar, depurar, refactorizar, modificar y validar físicamente código Python en VS Code [5, 15], asumiendo de manera indelegable la responsabilidad técnica final de la estabilidad y correctitud del software [15] e implementando (como ampliación avanzada y opcional, libre de carácter obligatorio) grafos conversacionales autónomos provistos de estado, persistencia por hilos e intervención humana (*Human-in-the-loop*) en LangGraph [3, 4, 15].

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 7)

La progresión del bloque traslada la lógica desde el prompt estructurado de funciones individuales hasta la orquestación cíclica de agentes de IA:

```
          [Bloque 6: Del Notebook al Entorno de Desarrollo Profesional (SAMI-Local)]
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.1 El Flujo Crítico de Trabajo Asistido por IA         │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.2 Ingeniería de Prompts y Contexto para Programación │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.3 Generación, Modificación y Acotación de Funciones   │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.4 Auditoría de Código Generado y Detección de Bugs    │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.5 Toma de Decisiones: Aceptar, Modificar o Rechazar   │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 7.6 Depuración, Refactorización y Validación Física     │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ├────────────────────────────┐
                                     ▼                            ▼
          [PROYECTO FINAL OBLIGATORIO: SAMI Final]      [7.7 AMPLIACIÓN OPCIONAL:  ]
          (Auditoría Crítica de IA e Integración local)  [Agentes con LangGraph & HITL (Opcional)]
                                                                  │ (Grafos, Estado, Memoria)
                                                                  ▼
                                                        [PROYECTO COMPLEMENTARIO:  ]
                                                        [Asistente Científico Colab]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 7

*   **IMPRESCINDIBLES (El Metodo Crítico de Desarrollo Asistido)**:
    *   La metodología estructurada de programación con IA: El **Flujo Crítico de Trabajo de 2026/2027** (`PROBLEMA ➔ PLAN ➔ CONTEXTO ➔ IA ➔ CÓDIGO ➔ EJECUTAR ➔ ENTENDER ➔ DEPURAR ➔ MODIFICAR ➔ VALIDAR`) [15].
    *   Estructura y diseño de prompts técnicos de programación: Definición de rol, objetivos, restricciones físicas de librerías, y provisión estructurada de contexto en lenguaje natural antes de la generación de código.
    *   Control de caja de arena: Petición acotada de funciones puras, unitarias y específicas a los asistentes (GitHub Copilot, Colab/Gemini, Codex, Claude Code) en lugar de arquitecturas completas a ciegas [15].
    *   Técnicas de revisión y auditoría de código autogenerado: Verificación de tipos de datos, inspección de variables locales/globales, y detección analítica de "alucinaciones" lógicas (sintaxis inexistentes, APIs deprecadas o importaciones rotas) [15].
    *   La toma de decisiones de ingeniería: Criterios técnicos rigurosos para determinar cuándo aceptar, modificar manualmente o rechazar por completo una propuesta del asistente de IA.
    *   Responsabilidad técnica definitiva: Asimilación de que el desarrollador es el único garante de la seguridad, correctitud y estabilidad del software desplegado ante el cliente final, sin posibilidad de delegar culpas en la IA.
*   **AMPLIACIÓN (Especialización en Agentes Autónomos - TOTALMENTE OPCIONAL)**:
    *   *NOTA: El estudio de LangGraph y los agentes conversacionales cíclicos con estado es de carácter estrictamente opcional, no constituye un requisito académico obligatorio para la superación de este bloque ni para la aprobación general del itinerario de Python, y está completamente excluido de la evaluación obligatoria del proyecto final SAMI.*
    *   Arquitectura cognitiva de agentes de IA: División de tareas entre el modelo de lenguaje (decisor conceptual) y el software estructurado alrededor (ejecutor físico de flujos) [3].
    *   Fundamentos de la orquestación conversacional con estado utilizando **LangGraph**: definición de grafos mediante **Nodos** (computaciones locales o LLMs) y **Aristas** (transiciones de control unidireccionales) [3, 4].
    *   Ciclos de control y bifurcaciones inteligentes (Aristas condicionales) [3].
    *   El **Estado compartido (State Schema)** como contrato estricto de comunicación entre componentes, y el uso de **State Reducers** para la actualización incremental de información sin colisiones [4].
    *   Declaración y registro de **Herramientas (Tools)**: Decoración de funciones Python nativas para ser consumidas autónomamente por el agente para interactuar con archivos locales o APIs externas [3, 4].
    *   Implementación de persistencia a través de hilos (**Threads**) para habilitar memoria conversacional interactiva a largo plazo [3].
    *   Mecanismo de **Human-in-the-loop (HITL)** en LangGraph: Configuración de breakpoints lógicos para pausar el agente autónomo antes de la invocación de una herramienta crítica, permitiendo a un operador humano supervisar, editar el estado, o validar el progreso antes de reanudar el flujo [3].
    *   Observabilidad de grafos: Inspección visual de la ejecución de nodos y estados conversacionales mediante la interfaz interactiva de LangSmith Studio [4].
*   **LAGUNAS DE CONOCIMIENTO (Limitaciones de las Fuentes)**:
    *   Se declaran de manera honesta como lagunas aquellas interfaces y configuraciones avanzadas que las fuentes mencionan de pasada pero no documentan de forma técnica (ver Sección 9).

---

## 4. DESARROLLO INSTRUCCIONAL DE CONCEPTOS (APRENDER HACIENDO)

### CONCEPTO 7.1: El Flujo Crítico de Trabajo Asistido por IA (Foco Metodológico)
*   **CONCEPTO**: El desarrollo de software en 2027 asistido por IA exige un paradigma estricto para erradicar el "desarrollo zombi". El estudiante debe gobernar el flujo de creación dividiéndolo en 10 etapas secuenciales inalterables: `PROBLEMA ➔ PLAN ➔ CONTEXTO ➔ IA ➔ CÓDIGO ➔ EJECUTAR ➔ ENTENDER ➔ DEPURAR ➔ MODIFICAR ➔ VALIDAR`. Bajo esta metodología, la IA es únicamente un asistente de generación sintáctica, mientras que el control algorítmico, la validación lógica y la arquitectura corresponden en un 100% al programador humano [15].
*   **PRERREQUISITO**: Bloques 1 al 6 completos.
*   **DEMOSTRACIÓN**: El docente muestra en Colab un algoritmo mal estructurado de ordenamiento burbuja generado por IA por falta de restricciones lógicas, evidenciando que la IA falló por carecer de un plan de restricciones previo redactado por el programador.
*   **PRÁCTICA**: 
    1. Define por escrito el **PROBLEMA**: *"Crear un script local que filtre de una lista a los alumnos con nota superior a 5 y devuelva su promedio"*.
    2. Redacta el **PLAN** lógico en lenguaje natural (sin código): *"1) Validar que la lista no esté vacía, 2) Iterar sumando las notas que cumplen la condición, 3) Contar aprobados, 4) Dividir controlando la excepción de división por cero si no hay aprobados"*.
    3. Proporciona el **CONTEXTO** a la IA de Colab e inicia la generación [6].
    4. Copia el código en tu editor, ejecútalo físicamente en la terminal, léelo línea por línea utilizando f-strings de depuración, haz modificaciones manuales y valídalo físicamente [6, 13, 16].
*   **ERROR HABITUAL**: Omitir las fases de "PLAN" y "ENTENDER", enviando un prompt genérico a la IA de Colab y copiando directamente en el proyecto local un bloque masivo de código autocompletado sin comprender el flujo de sus variables.
*   **MINI-RETO**: Redactar de forma manual el PLAN en pseudocódigo para resolver el juego del ahorcado de las fuentes antes de solicitar ayuda sintáctica a la IA, evaluando el contraste entre planificar y generar ciegamente [156].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Elegir solución*: Te enfrentas a un error silencioso en tu aplicación de consola (los promedios de ventas devuelven valores incorrectos pero el programa no se detiene). ¿Cuál es la decisión técnica correcta bajo el Flujo Crítico de Trabajo de 2026/2027?
        *   A) Enviar el script completo a la IA con el mensaje "Arregla este código" y copiar la primera sugerencia que ofrezca.
        *   B) Pausar la ejecución, leer el Traceback en consola, utilizar f-strings de depuración (`f"{var=}"`) para rastrear el valor real en memoria de las variables de promedios, corregir manualmente el bug lógico, y finalmente usar la IA solo para que justifique conceptualmente por qué ocurrió la anomalía [13, 134].
        *   C) Eliminar la función y reescribir todo el proyecto a mano desde cero.
        *   D) Ignorar el error si el reporte PDF se genera de todas formas.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Registro escrito por el alumno que documenta el PLAN en lenguaje natural, el prompt de contexto enviado, el código físico final modificado y el reporte de validación del script de prueba.

---

### CONCEPTO 7.2: Ingeniería de Prompts y Contexto para Programación
*   **CONCEPTO**: Proporcionar contexto técnico es el acto de estructurar de forma estricta la información transferida a los asistentes de programación. Un prompt robusto para código debe componerse de: **Rol del Asistente** (ej. "Eres un desarrollador experto en Python 3 nativo"), **Contexto del Sistema** (restricciones lógicas, rutas físicas `/data`, `/src` y dependencias de requirements), **Objetivo Técnico Acotado** y **Restricciones Explícitas** (ej. "Prohíbe el uso de Pandas y limita la solución únicamente a la librería estándar `csv` de Python").
*   **PRERREQUISITO**: Concepto 7.1.
*   **DEMOSTRACIÓN**: El docente muestra dos interacciones con la IA de Colab: una con un prompt impreciso ("haz un script para leer archivos"), y otra con un prompt contextualizado y acotado, comparando la precisión y limpieza de la respuesta obtenida.
*   **PRÁCTICA**: Configura una celda interactiva en Colab. Redacta un prompt de contexto perfecto para solicitar un algoritmo que lea un archivo de configuración JSON local utilizando `with open()`, capturando de forma precisa el error `FileNotFoundError` y autogenerando los datos por defecto si el archivo físico no se localiza en el workspace de trabajo [10].
*   **ERROR HABITUAL**: Escribir prompts conversacionales vagos y ambiguos ("ayuda con un CSV"), lo que provoca que la IA alucine APIs complejas o sugiera descargar librerías externas que no se encuentran permitidas en el catálogo del proyecto local.
*   **MINI-RETO**: Redactar un prompt acotado que solicite a un asistente del editor una función matemática pura para calcular raíces cuadradas con la librería de NumPy, prohibiendo explícitamente el uso de bucles `for` y exigiendo el uso exclusivo de operaciones vectorizadas de alto rendimiento de la documentación v2.5 [9].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Detectar contexto faltante*: El alumno envía a la IA el prompt: *"Escribe una clase Producto que calcule el IVA de los artículos"*. La IA le devuelve un código que implementa herencia múltiple compleja, getters con el decorador `@property` (inexistente en las fuentes) y cálculos impositivos estáticos. ¿Qué elemento crítico de ingeniería de prompts omitió el alumno al interactuar con el asistente?
        *   A) No especificó el color de la consola de salida.
        *   B) No delimitó el alcance técnico mediante restricciones explícitas (ej. "Usa encapsulación básica con getters/setters lógicos sencillos de Python nativo sin usar `@property` y herencia simple") [190].
        *   C) Debió escribir el prompt en latín para asegurar la compatibilidad de clases.
        *   D) Los asistentes de IA no comprenden instrucciones sobre clases de Python.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Conjunto de prompts de programación diseñados por el alumno que especifican roles, contextos locales, objetivos técnicos y restricciones estrictas de diseño.

---

### CONCEPTO 7.3: Generación, Modificación y Acotación de Funciones (Sandbox)
*   **CONCEPTO**: El control de caja de arena (*sandbox control*) es una buena práctica de ingeniería que consiste en interactuar con los asistentes de IA solicitando únicamente funciones lógicas unitarias, autocontenidas y específicas que resuelvan una sola responsabilidad de forma limpia, en lugar de solicitar la generación de la arquitectura del proyecto completo de una sola vez [15].
*   **PRERREQUISITO**: Concepto 7.2 y Bloque 3.
*   **DEMOSTRACIÓN**: El docente simula una sesión de desarrollo local en VS Code, solicitando a un autocompletador (Copilot o Claude Code) únicamente el método interno de cálculo de desviación estándar de precios en NumPy en lugar del módulo de análisis completo, mostrando la facilidad de verificación de bloques aislados.
*   **PRÁCTICA**: 
    1. Abre tu espacio de trabajo local en VS Code.
    2. Crea una función de prueba vacía con su firma `def calcular_marge_envio(peso_kg, costo_base):` y su docstring multilínea formal del Bloque 3 [108].
    3. Invoca la ayuda en línea del asistente del editor únicamente para que sugiera el cálculo aritmético interno de recargos por peso si el paquete supera los 5 kg.
    4. Audita de forma crítica el autocompletado sugerido antes de guardarlo en tu script.
*   **ERROR HABITUAL**: Solicitar a la IA de desarrollo que genere scripts completos multitarea de 500 líneas en una sola petición, imposibilitando la lectura línea por línea del código resultante, la depuración física analítica de errores y la validación de comportamientos.
*   **MINI-RETO**: Solicitar a la IA del entorno exclusivamente la lógica interna de un bucle condicional para buscar un elemento en una lista con la directiva `break` [150], integrándola manualmente dentro de una función previamente declarada por el estudiante en su editor local.
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Elegir diseño óptimo*: Tienes un script modular y necesitas añadir una rutina para registrar logs de error en disco. ¿Cuál es el procedimiento técnico de generación con IA de alto nivel?
        *   A) Pedir a la IA del editor que reescriba el script `main.py` completo incluyendo la nueva funcionalidad donde considere oportuno.
        *   B) Escribir manualmente la firma de la función `registrar_error_log(mensaje)` con su docstring multilínea, y solicitar al asistente de IA exclusivamente la línea de apertura del archivo con `with open()` y el volcado de texto, insertándola manualmente en tu módulo `persistencia.py` [10].
        *   C) Solicitar a la IA que cree una librería externa nueva para manejar los logs de consola.
        *   D) Copiar un código genérico de logs de internet que no utilice gestores de contexto.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Script modular local en VS Code donde las funciones generadas con asistencia de la IA están perfectamente delimitadas, documentadas con docstrings humanos, y acopladas a la arquitectura sin generar código redundante.

---

### CONCEPTO 7.4: Auditoría Crítica del Código Generado y Detección de Bugs (Evitando el Zombi)
*   **CONCEPTO**: La auditoría de código es el proceso de revisión analítica e inspección línea por línea de las sugerencias del asistente de IA [15]. Su objetivo prioritario es identificar alucinaciones (sintaxis lógicas inventadas o importaciones rotas), código innecesariamente complejo (como bucles redundantes), y fallos de tipo o gestión de recursos en caliente (como navegadores colgados en Playwright o mutaciones de colecciones durante iteraciones activas) [13, 157].
*   **PRERREQUISITO**: Concepto 7.3 y Bloque 6.
*   **DEMOSTRACIÓN**: El docente presenta en proyector un fragmento de código sugerido por una IA para un scraper de Playwright que omite cerrar el navegador con `browser.close()` [105]. Muestra cómo, tras múltiples ejecuciones de prueba, la máquina local colapsa en memoria RAM por procesos binarios huérfanos de Chromium activos en segundo plano, demostrando el peligro de la copia ciega.
*   **PRÁCTICA**: 
    1. Solicita a la IA de Colab que genere un código para limpiar nulos en un DataFrame de Pandas.
    2. Al recibir el código, audítalo críticamente identificando si la IA ha sugerido usar bucles `for` tradicionales para recorrer las filas de la tabla en lugar de los métodos vectoriales nativos eficientes como `.fillna()` [224].
    3. Documenta por escrito el bug de rendimiento de la IA y reescribe la sugerencia manualmente utilizando la API real de Pandas [224].
*   **ERROR HABITUAL**: Confiar ciegamente en que el código de la IA es correcto si el script se ejecuta sin lanzar excepciones explícitas en la consola de comandos de VS Code, ignorando fallos silenciosos de rendimiento de datos o fugas físicas de memoria RAM.
*   **MINI-RETO**: Auditar de forma crítica un código generado por IA que realiza un filtrado condicional compuesto sobre el dataset de Game of Thrones `got_1.csv` [222], localizando y corrigiendo el uso incorrecto de operadores lógicos de Python nativos (`and` o `or`) en lugar de los operadores lógicos vectoriales a nivel de bits de Pandas (`&` o `|`) [229].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Detectar error de IA*: Al solicitar una función para calcular estadísticas descriptivas sobre un array de NumPy que aloja valores faltantes, el asistente de IA te sugiere la siguiente línea de código: `promedio = np.mean(datos)`. Al probarlo en tu terminal integrada con un array que tiene valores nulos `np.nan`, observas que el promedio calculado es `nan` [223]. ¿Cuál es la anomalía lógica de la IA que debes corregir manualmente?
        *   A) NumPy no permite realizar operaciones matemáticas sobre arrays con números flotantes.
        *   B) El asistente ignoró que el método estándar `np.mean()` colapsa ante valores vacíos `np.nan` [223], requiriendo que depures filtrando previamente los nulos mediante `np.isnan(datos)` o utilizando el método seguro de omisión de nulos `np.nanmean(datos)`.
        *   C) El archivo de dependencias `requirements.txt` tiene un error de sintaxis en NumPy.
        *   D) Debes reinstalar el entorno virtual de Python local.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Registro de auditoría de código del alumno en el que documenta un fragmento de código sugerido por la IA, señala analíticamente un bug lógico o de rendimiento presente en el mismo, y presenta la corrección manual física aplicada en su editor local.

---

### CONCEPTO 7.5: Toma de Decisiones: Aceptar, Modificar o Rechazar
*   **CONCEPTO**: La toma de decisiones en el desarrollo asistido es la evaluación y el juicio técnico del programador sobre las sugerencias de la IA. No toda sugerencia es válida; el programador debe decidir bajo tres criterios rigurosos de ingeniería de software:
    *   **Aceptar**: Sólo si comprende de manera absoluta el funcionamiento de cada variable y operador, el bloque cumple de forma óptima con las restricciones del proyecto y no introduce código redundante [15].
    *   **Modificar**: Si la sugerencia es una buena base pero requiere correcciones manuales de variables, optimizaciones vectoriales, corrección de APIs deprecated o tipado seguro de entradas.
    *   **Rechazar**: Si la propuesta es errónea, alucina librerías ausentes o introduce una arquitectura de objetos compleja e innecesaria que sobreacopla la lógica del software.
*   **PRERREQUISITO**: Concepto 7.4.
*   **DEMOSTRACIÓN**: El docente muestra un caso donde la IA propone importar la librería pesada de Pandas únicamente para leer un archivo de texto de 5 líneas, justificando por qué un programador profesional rechaza esa propuesta y opta por la sintaxis nativa `with open()` de la librería estándar de Python [10].
*   **PRÁCTICA**: Configura una sesión en VS Code local. Solicita a la IA del entorno un método para dar formato de fecha a un string usando f-strings [118]. Evalúa de forma crítica la respuesta de la IA: si sugiere importar módulos de terceros que no están en tu `requirements.txt`, rechaza la propuesta y escribe manualmente la solución utilizando las llamadas nativas de formateo de cadenas explicadas en las fuentes [133].
*   **ERROR HABITUAL**: Aceptar de forma masiva sugerencias del autocompletador o chat de código sólo por la pereza de escribir el algoritmo a mano, terminando con proyectos inflados con importaciones e instrucciones que el alumno no comprende.
*   **MINI-RETO**: Recibir una sugerencia de IA que implementa una herencia múltiple compleja de clases y refactorizarla manualmente a un diseño limpio de composición ("tiene un") o herencia simple de acuerdo con las fuentes reales del Bloque 4 [171, 176].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Elegir propuesta*: Solicitas al asistente de IA un método para limpiar los espacios accidentales extremos de un string de entrada. La IA te sugiere instalar e importar una librería externa compleja de expresiones regulares de internet. ¿Cuál es la decisión de ingeniería óptima que debes tomar?
        *   A) Aceptar la propuesta e instalar de inmediato la librería externa agregándola al archivo de requerimientos `requirements.txt` [16].
        *   B) Rechazar la propuesta por completo de forma analítica, dado que el problema se resuelve de forma nativa con total eficiencia utilizando el método estándar de strings `.strip()` explicado en las fuentes de texto de Python [11].
        *   C) Modificar el código de la IA borrando todo el script del proyecto.
        *   D) Ignorar la limpieza y procesar el string sucio en disco.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Manual de control de desarrollo del alumno que lista 3 casos reales de su proyecto donde rechazó o modificó de forma manual sugerencias de la IA, justificando por escrito sus decisiones basadas en buenas prácticas de software.

---

### CONCEPTO 7.6: Depuración, Refactorización y Validación Física (Responsabilidad Final)
*   **CONCEPTO**: La depuración y refactorización representan el ciclo de pulido del código. Ante fallas en la ejecución de scripts generados, el desarrollador debe aplicar un flujo analítico e interactivo directo: ejecutar en consola, observar las trazas de excepción, interpretar lógicamente la línea origen del error [13], realizar refactorizaciones manuales para perfeccionar la sintaxis y legibilidad del código, y validar físicamente el comportamiento ante casos límite. El desarrollador humano es el **único responsable final de la estabilidad y correcto funcionamiento del software** [15].
*   **PRERREQUISITO**: Conceptos 7.4 y 7.5.
*   **DEMOSTRACIÓN**: El docente presenta un script local que colapsa ante un error de sistema `FileNotFoundError` al no localizar el archivo físico CSV en el disco de trabajo [10]. Muestra cómo, en lugar de repromptear de forma interactiva parches continuos de código ciegos a la IA, el desarrollador localiza la causa utilizando el flujo analítico y la repara manualmente agregando una captura elegante de errores [10].
*   **PRÁCTICA**: 
    1. Toma tu script orquestador principal local en VS Code.
    2. Agrega un bloque de errores capturando fallas de conversión de tipos de datos de forma elegante (`try-except ValueError`) [160].
    3. Corre el programa en terminal local y valida que la aplicación de consola no se detenga de forma abrupta si el usuario ingresa caracteres de texto inválidos en campos numéricos [160].
    4. El alumno debe probar de forma física el script y certificar por escrito su validez de producción.
*   **ERROR HABITUAL**: Intentar depurar bugs del proyecto local enviando de forma iterativa y descontrolada mensajes de queja o capturas de pantalla de error a la IA con prompts de tipo "no funciona", confiando en que el asistente corregirá de forma mágica las variables sin entender el origen físico de la traza de la terminal [13].
*   **MINI-RETO**: Forzar intencionalmente un error de conversión impositiva en tu script orquestador principal local, leer la traza del error en consola de abajo hacia arriba e identificar y corregir el bug modificando de forma manual el código fuente del proyecto [13].
*   **MICROEVALUACIÓN SOLOLEARN**:
    *   *Analizar responsabilidad*: El programa de auditoría de mercado genera reportes PDF con cálculos erróneos que provocan pérdidas de dinero en la simulación debido a un bug lógico en el redondeo de precios sugerido originalmente por la IA de Colab. Al detectarse la falla en el sistema, ¿en quién recae la responsabilidad técnica del fallo del software?
        *   A) En el asistente de IA de Colab, por haber generado la función matemática incorrecta en su respuesta interactiva [6].
        *   B) En el desarrollador humano, por haber integrado ciegamente un bloque de código sin haberlo leído, auditado, comprendido, depurado y validado de manera física mediante pruebas analíticas locales en el entorno [15].
        *   C) En los desarrolladores de la librería estándar de Python por permitir el uso de decimales flotantes [121].
        *   D) En la conexión de internet del terminal integrado de VS Code.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Protocolo de validación técnica y de control de calidad firmado por el alumno que certifica la estabilidad, correctitud y manejo robusto de excepciones de su proyecto de consola local ejecutado desde la terminal integrada de VS Code.

---

### CONCEPTO 7.7: Orquestación Conversacional con Grafos de Estado en LangGraph (Ampliación Avanzada Opcional)
*   *NOTA: Este concepto técnico es una especialización de ampliación 100% opcional y no evaluable de forma obligatoria en el curso, ni constituye un requisito para aprobar el Bloque 7.*
*   **CONCEPTO**: LangGraph es un framework de orquestación a bajo nivel diseñado para construir aplicaciones de inteligencia artificial con estados y ciclos lógicos representados físicamente mediante grafos dirigidos [3, 4, 15]. Las aplicaciones se modelan bajo tres primitivas técnicas:
    *   **Grafos (`StateGraph`)**: Definen la estructura de flujo de control general del sistema.
    *   **Nodos (Nodes)**: Funciones Python nativas que ejecutan procesamiento de datos o llamadas a modelos de lenguaje (LLMs) y que reciben y devuelven el estado del grafo [3].
    *   **Aristas (Edges)**: Transiciones de control que definen el camino de navegación entre nodos de forma secuencial, o transiciones condicionales (Aristas condicionales) donde la bifurcación lógica es determinada por decisiones autónomas del LLM [3].
    *   **Estado compartido (State Schema)**: Esquema de datos estructurado (como un diccionario o modelo Pydantic) que actúa como el contrato de comunicación unificado entre los componentes y agentes del sistema, asegurando que la información transite de forma transparente entre nodos [4].
    *   **Actualizadores de Estado (State Reducers)**: Funciones especiales que especifican cómo actualizar o acumular la información de los atributos de estado compartidos (por ejemplo, anexar nuevos mensajes en una lista histórica en lugar de sobrescribirlos de forma destructiva) [4].
    *   **Persistencia (Memory y Threads)**: Almacenamiento e historial de estados en disco o base de datos que permite habilitar memoria conversacional interactiva a largo plazo a través de hilos de conversación independientes, facilitando el cambio de hilos y la recuperación de estados anteriores [3, 4].
    *   **Intervención Humana (Human-in-the-loop y Breakpoints)**: Puntos de interrupción físicos en la compilación del grafo dirigidos a pausar de forma automática la ejecución del agente autónomo antes o después de la corrida de ciertos nodos de acción (ej. llamadas a herramientas de cobro o envío de reportes), permitiendo a un operador humano auditar el estado del agente, modificar datos en memoria de forma manual, o autorizar/rechazar la reanudación del flujo desde la consola interactiva [3].

#### → EJEMPLO PROCEDENTE DE LAS FUENTES
*   **Configuración y modelado de grafos con estado** (Sintaxis conceptual de la suite de LangGraph [3, 4, 15]):
    ```python
    # Importación de primitivas nativas de la librería de orquestación
    from typing import Annotated
    from typing_extensions import TypedDict
    from langgraph.graph import StateGraph, START, END
    from langgraph.graph.message import add_messages

    # 1. Definición del Estado Compartido (State Schema) como contrato unificado [4]
    class EstadoInvestigacion(TypedDict):
        # El reducer 'add_messages' acumula de forma segura los textos en la lista histórica [4]
        mensajes: Annotated[list, add_messages]
        tema: str
        borrador_informe: str

    # 2. Definición del Grafo con estado [3]
    workflow = StateGraph(EstadoInvestigacion)
    ```

#### → PRÁCTICA
*   **Instrucciones**: Diseña de manera teórica y lógica en un documento local en Colab el plano arquitectónico de un grafo conversacional de agentes en LangGraph:
    1. Define el State Schema como un contrato de comunicación que contenga el historial conversacional y un indicador booleano de prioridad de alerta.
    2. Detalla tres nodos físicos: un nodo de extracción de datos, un nodo de análisis de mercado, y un nodo decisor.
    3. Configura una arista condicional que verifique si la alerta es prioritaria; en caso positivo, el flujo debe pausarse en un breakpoint físico de intervención humana antes de procesar el reporte de salida [3].

#### → ERROR HABITUAL
*   **El bug de la sobrescritura destructiva de hilos de estado**: No declarar un State Reducer (como `add_messages`) para las variables de colección histórica dentro del esquema de estado, provocando que cada ejecución de nodo destruya y reemplace por completo la información previa del estado en memoria, imposibilitando la memoria conversacional [4].

#### → MINI-RETO
*   **El Grafo de Dos Nodos**: Escribe de forma lógica la secuencia de sentencias requeridas para registrar dos nodos (`"extractor"` y `"analizador"`) dentro de un grafo `StateGraph`, definir el punto de inicio `START`, conectar ambos nodos secuencialmente, y definir el punto de finalización de compilación `END` de acuerdo con la documentación de LangGraph [3, 4].

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de ordenar sentencias de compilación**: Selecciona la opción que ordene de forma lógica las sentencias requeridas para compilar un grafo con estado en LangGraph, aplicando un punto de interrupción físico (breakpoint) antes del nodo de generación del PDF final [3, 4].
    ```text
    Línea 1: workflow.add_node("generador_pdf", generar_pdf_node)
    Línea 2: app = workflow.compile(interrupt_before=["generador_pdf"])
    Línea 3: workflow.add_edge("extractor", "generador_pdf")
    Línea 4: workflow = StateGraph(EstadoInvestigacion)
    ```
    *   A) 4, 1, 3, 2
    *   B) 4, 3, 1, 2
    *   C) 1, 3, 4, 2
    *   D) 4, 1, 2, 3
*   **Respuesta correcta**: **A**. (Primero se debe instanciar la clase contenedora del grafo de estado `StateGraph` asociando su esquema de datos (Línea 4), posteriormente agregar los nodos funcionales (Línea 1), definir las aristas o conectores de transición física (Línea 3), y finalmente compilar el grafo activo especificando los breakpoints lógicos de interrupción para la intervención humana (Línea 2) [3, 4]).

#### → EVIDENCIA
*   Especificaciones lógicas y de diseño de un grafo conversacional interactivo documentado por el estudiante, que describe los estados, nodos, herramientas locales registradas, y los flujos de control cíclico y condicional de su sistema de IA.

---

## 5. PROYECTO FINAL OBLIGATORIO DEL ITINERARIO

### "SAMI Final: El Sistema de Auditoría de Mercado y Análisis de Datos con IA Crítica"

*   **Objetivo de Aprendizaje**: Consolidar y demostrar de forma integrada el dominio absoluto de Python, el procesamiento y análisis científico de datos tabulares (Pandas y NumPy) empleando datasets de las fuentes, la automatización y generación programática de reportes corporativos (Playwright y ReportLab PDF), la organización física del entorno virtual e infraestructura local en VS Code, y la adopción rigurosa del **Flujo Crítico de Trabajo asistido por IA** para auditar y validar de forma física cada línea de código, evitando el "desarrollo zombi" en su totalidad [15].

#### Especificaciones Técnicas de la Entrega de SAMI Final

El proyecto SAMI Final representa la cúspide evolutiva de la aplicación desarrollada a lo largo del itinerario. El alumno debe desplegar de forma local en su editor VS Code un software multipaquete completo y versionado de forma local que cumpla con los siguientes requerimientos de integración:

1.  **Fase de Adquisición y Web Scraping síncrono (Módulo `src/scraper.py`)** [7]:
    *   Implementa una clase de automatización web que abre un navegador síncrono de **Playwright** en modo headless, navega por un portal de ofertas de tecnología simulado, interactúa buscando elementos y extrae el contenido HTML de forma estable, cerrando obligatoriamente los subprocesos Chromium con `browser.close()` al finalizar [7, 105].
2.  **Fase de Análisis de Datos y Agrupaciones en Pandas (Módulo `src/analizador.py`)** [2, 19]:
    *   El módulo de análisis se alimenta de datos reales de las fuentes cargando el dataset de Game of Thrones **`got_1.csv`** utilizando un DataFrame de Pandas para simular la base de datos de control comercial [222].
    *   Aplica un filtro condicional booleano compuesto robusto empleando operadores vectoriales a nivel de bits (`&` y `.isin()`) para aislar únicamente a los personajes de la Casa Stark o Lannister que sigan activos en la trama [229, 230].
    *   Setea la columna `"Personaje"` como el índice de la tabla con `.set_index()` y limpia los valores nulos detectados en popularidad con `.isnull()` reemplazándolos de forma segura con la popularidad media agregada empleando `.fillna()` [224, 230].
3.  **Fase de Tratamiento Matemático Vectorial con NumPy (Módulo `src/analizador.py`)** [4, 15]:
    *   Toma la lista de precios extraída de la web en caliente por el scraper, la convierte en un array de NumPy (`ndarray`) [4], identifica posiciones de valores nulos, y calcula vectorialmente con alta velocidad matemática: el precio promedio del mercado, el valor máximo, el mínimo y la desviación estándar para reportar el balance general [15, 188].
4.  **Fase de Maquetación y Generación de PDF en ReportLab (Módulo `src/generador_pdf.py`)** [15, 190]:
    *   Consume los DataFrames depurados de Pandas y las métricas estadísticas calculadas en NumPy para compilar de forma programática un documento PDF estético de nivel corporativo en la ruta local.
    *   Utiliza un diseño de lienzo limpio que posiciona tablas organizadas de datos y bloques de texto formateados, aplicando envoltura de líneas automáticas en cada celda para asegurar un entregable impecable para el cliente [15].
5.  **Fase de Aislamiento y Configuración local (Raíz del proyecto)** [7, 16]:
    *   El proyecto se ejecuta sobre un entorno virtual local activo (`venv`) libre de colisiones globales de la máquina [7].
    *   Las dependencias están declaradas de forma rígida con sus versiones de producción correspondientes en el archivo centralizado `requirements.txt` [16].
    *   El proyecto completo se encuentra inicializado localmente como repositorio Git, protegiendo las carpetas locales de dependencias (`/venv`) e históricos de logs (`/logs`) mediante un archivo de exclusión `.gitignore`.
6.  **Flujo Crítico de Desarrollo con Asistencia de IA (Auditoría Técnica Obligatoria)** [15]:
    *   El estudiante programará la aplicación apoyándose de manera controlada en las extensiones de asistentes de programación de su editor (como GitHub Copilot o la extensión de Colab para VS Code) [6]. El alumno utilizará la IA de forma estratégica para: planificar el diseño lógico, explicar fragmentos complejos del código, solicitar modificaciones localizadas de sintaxis, depurar errores físicos, redactar la documentación formal (docstrings) de los módulos, refactorizar partes lógicas aisladas (únicamente cuando esté respaldado por las APIs de las fuentes) y guiar el plan de validación.
    *   **Restricciones de Caja de Arena**: Para evitar la sobredimensión o desvío técnico, se prohíbe exigir optimizaciones avanzadas o de rendimiento que fuercen la adopción de APIs, patrones o técnicas ausentes en las fuentes oficiales del notebook. Asimismo, **la IA no debe añadir tecnologías nuevas, frameworks adicionales ni dependencias de terceros** fuera de las autorizadas en el catálogo del proyecto (`requirements.txt`).
    *   **Regla de Oro**: Para superar el curso, el alumno debe redactar un diario de desarrollo local donde documente de forma explícita **3 fallas lógicas o de diseño técnico que el asistente de IA sugirió durante el desarrollo del proyecto** (por ejemplo: la omisión de `browser.close()` en Playwright, el uso de bucles tradicionales `for` para iterar DataFrames de Pandas, la omisión de exclusiones en `.gitignore`, o comparaciones imprecisas sobre tipos booleanos de NumPy) [7, 13, 15, 229].
    *   El alumno debe documentar cómo detectó el bug analizando críticamente el Traceback en su consola de terminal o ejecutando impresiones de variables en memoria, y cómo reescribió y corrigió de forma manual el código para validar la solución [13].

7.  **Criterios de Evaluación y Defensa Oral**:
    *   Correcto funcionamiento del pipeline de arriba a abajo ejecutado por terminal integrada mediante `python main.py` [5, 7].
    *   Estructura limpia, modular y jerárquica de archivos y exclusiones en control de cambios Git.
    *   Ausencia absoluta de procesos de navegadores colgados en segundo plano en el sistema.
    *   Elegancia y correcta envoltura de líneas en el PDF de ReportLab generado de manera física.
    *   **La Defensa del Código**: El alumno se somete a una sesión de revisión oral técnica ante el docente evaluador. Durante esta defensa, el estudiante debe demostrar su dominio práctico siendo capaz de: explicar de forma clara las partes relevantes de la lógica del código de su software, justificar sus decisiones de diseño de datos o de arquitectura modular, describir de manera precisa el flujo general de ejecución, entradas y salidas de la aplicación, localizar fallos lógicos simulados en caliente por el evaluador, detallar qué tareas específicas delegó o solicitó al asistente de IA y explicar de forma honesta qué aspectos del código auditó, verificó y probó personalmente en su terminal local. No se exigirá en ningún caso memorizar el código ni explicar de manera literal cada línea del software, sino demostrar que el estudiante comprende la totalidad del software desarrollado, asimila su funcionamiento y asume su autoría y responsabilidad técnica final. La copia ciega de instrucciones de la IA que el estudiante no comprenda es motivo de reprobación directa [15].

---

## 9. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 7)

De acuerdo con el análisis de los materiales de tu base de conocimiento, se identifican las siguientes áreas técnicas del desarrollo asistido por IA y de la suite de agentes de LangGraph que **no se encuentran documentadas a nivel técnico o práctico en las fuentes del notebook**, por lo que se declaran formalmente como lagunas en este bloque:

1.  **Guía de Instalación y Aprovisionamiento de Claves de API en Entorno Local**: Las fuentes documentan cursos de agentes con LLM [3, 4], pero **no proveen un manual técnico sobre cómo configurar de forma local las variables de entorno de claves de API** de los proveedores de modelos de lenguaje (como OpenAI, Anthropic, o Google Vertex AI) en la terminal de comandos de VS Code ni la gestión segura de archivos `.env` (un elemento de alta fricción técnica en el despliegue local de agentes).
2.  **Sintaxis Práctica de Conexión y Llamada a LLMs**: Las fuentes detallan la orquestación del flujo lógicos de agentes mediante grafos de LangGraph [3, 4], pero **carecen por completo de la documentación técnica de APIs de inicialización de los modelos de lenguaje** de los proveedores (como la clase `ChatOpenAI`, `ChatVertexAI` o `ChatGoogleGenerativeAI`), sus parámetros de temperatura, límites de tokens, o la estructura sintáctica de llamadas directas de inferencia.
3.  **Despliegue Productivo de Agentes Autónomos**: Se menciona conceptualmente LangSmith Deployment y la plataforma managed de Vertex AI Agent Engine para shipping automático de agentes [4, 24], pero **las fuentes no proveen guías de comandos, configuraciones de archivos Docker, puertos locales, ni procedimientos de terminal para compilar o desplegar físicamente los grafos** de agentes autónomos hacia servidores externos de producción, delegando su API a recursos externos.
4.  **Técnicas de Evaluación Cuantitativa de Agentes (RAG / Agent Evaluation)**: Se citan de forma genérica herramientas de evaluación en LangSmith [4], pero **las fuentes del notebook carecen de manuales técnicos, métricas de fidelidad, APIs de aserciones de evaluación ni ejemplos de código** sobre cómo medir cuantitativamente la tasa de éxito o precisión factual de las respuestas entregadas por el agente conversacional autónomo.

---

## 10. FUENTES DE AMPLIACIÓN RECOMENDADAS (BLOQUE 7)

Para suplir con total rigor las lagunas de conocimiento detectadas y enriquecer la experiencia formativa del alumno en el ecosistema productivo moderno de Python e Inteligencia Artificial, se aconseja integrar los siguientes recursos oficiales al Notebook:

1.  **LangGraph Developer Guide - Core Concepts**: La guía de referencia oficial de LangChain para detallar de manera práctica la sintaxis completa de configuración de StateGraphs, herencia de esquemas, uso de reducers complejos y la definición física de condicionales.
2.  **Python-dotenv Documentation**: Para instruir al alumno de forma segura en la configuración y aislamiento de variables de entorno locales de claves de API mediante archivos `.env` sin exponerlas accidentalmente en repositorios públicos de GitHub.
3.  **LangSmith Docs - Prompt Engineering and Evaluation Guide**: Para proveer manuales técnicos ilustrados con ejemplos de código sobre cómo registrar, rastrear, y evaluar cuantitativamente el rendimiento y fidelidad factual de las respuestas del agente ante consultas del usuario.
4.  **LangGraph Cloud & LangSmith Deployment Guides**: Para documentar el proceso de compilación, empaquetado y subida del agente conversacional de LangGraph a entornos escalables en la nube de un solo clic.
