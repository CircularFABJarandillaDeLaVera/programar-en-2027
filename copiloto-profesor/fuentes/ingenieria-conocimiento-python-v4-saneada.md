# INGENIERÍA DEL CONOCIMIENTO: PYTHON 2027 (VERSIÓN V4 CONSOLIDADA Y SANEADA)

> **Nota de vigencia (revisión documental 2026-09-10):** Marco de diseño V4 conservado como antecedente. La ruta publicada y los hitos actuales se describen en [01](../01-GUIA-CURSO.md) y [04](../04-PRACTICAS-Y-APOYOS.md); no deduzcas obligaciones nuevas de este plano. Véase el [criterio de fuentes](README.md).


Documento maestro de arquitectura curricular consolidada para el itinerario **"Programar con Python en 2027: De los Fundamentos a la Programación Asistida por IA"** para la **Red de Centros Circular FAB**.

Este plano curricular está diseñado específicamente para guiar al estudiante en un modelo de **aprendizaje activo ("Aprender Haciendo")** donde la teoría se reduce a explicaciones breves para dar paso inmediato al código físico ejecutable.

---

### Comparación y Justificación de Cambios (V3 ➔ V4)

#### Lo que se mantiene:
* **Estructura de 7 Bloques:** Se mantiene la progresión lógica y la secuenciación de dependencias del itinerario.
* **El Flujo Crítico de Trabajo con IA:** El paradigma de desarrollo asistido de 2027 (`PROBLEMA ➔ PLAN ➔ CÓDIGO/IA ➔ EJECUTAR ➔ ENTENDER ➔ DEPURAR ➔ MODIFICAR ➔ VALIDAR`) se preserva como la base metodológica de todos los bloques prácticos.
* **LangGraph como Ampliación Opcional:** La construcción de grafos con estado, hilos de memoria y puntos de interrupción física (**Human-in-the-loop**) se mantiene de manera exclusiva como un módulo avanzado complementario y optativo.
* **El Proyecto Final SAMI:** Permanece como el gran evaluador integrador obligatorio, demostrando la capacidad de desarrollo autónomo del estudiante en VS Code local.

#### Lo que cambia y se consolida:
1. **Pandas como Parte Activa del Temario:** El itinerario incluye la manipulación práctica de `Series` y `DataFrames`, filtrado condicional por booleanos y operadores lógicos (`&`, `|`), ordenación mediante `.sort_values()` y concatenación segura con `pd.concat()`, aplicándolos sobre datasets reales de las fuentes, como la popularidad de los personajes de **Game of Thrones** (`got_1.csv`).
2. **Pedagogía de Enfoque "Aprender Haciendo":**
   * **Prácticas específicas:** Ejercicios de cálculo de medias, deduplicaciones de palabras por conjuntos, análisis de frases y conteo de caracteres.
   * **Mini-Retos aplicados:** Retos reales como el sistema de cálculo automático de entradas según tramos impositivos de edad o la gestión estructurada de almacenamiento seguro de configuraciones dinámicas.
   * **Microevaluaciones tipo SoloLearn:** Evaluaciones rápidas de código real extraído de las fuentes (ej. predecir la salida tras el uso de `divmod()`, predecir el tamaño resultante tras filtrados condicionales en comprehensions de diccionarios, y localizar problemas de sintaxis compuesta de filtros lógicos sobre DataFrames de Pandas).
3. **Robustez Técnica de Fundamentos:** Se integran formalmente operaciones y funciones de bajo nivel: la asignación compacta, el uso de docstrings estructurados, la obtención de cocientes/residuos simultáneos con `divmod()`, el formateo avanzado de números en f-strings (ej. decimales acotados `{num:.2f}` o relleno por la izquierda con ceros `{hora:02}`), y el cálculo de similitudes textuales empleando la librería estándar `difflib` (`SequenceMatcher`).

---

### Resumen de la Estructura de Bloques en V4

* **Bloque 1: Fundamentos y Lógica:** Sintaxis base, tipos dinámicos de datos, operadores lógicos/aritméticos en consola, casteos explícitos, bifurcaciones condicionales y bucles interactivos (`for` / `while` con rangos de incremento y control de interrupción con `break` y `continue`).
* **Bloque 2: Estructuras de Datos:** Mutabilidad en memoria, cadenas de caracteres como secuencias inmutables indexadas, slicing bidireccional y reversión, operaciones sobre listas, tuplas e inmutabilidad, deduplicaciones y operaciones de teoría de conjuntos, diccionarios para almacenamiento de propiedades complejas y desempacado dinámico en bucles, y comprehensions.
* **Bloque 3: Funciones y Modularidad:** Definición de subprogramas con `def`, parámetros opcionales por defecto, ámbito (scope) local vs. global con la instrucción `global`, tolerancia a fallos con el bloque `try-except-else-finally`, gestor de contextos `with open()` y persistencia física en disco utilizando formato JSON y CSV nativos.
* **Bloque 4: Programación Orientada a Objetos (POO):** Clases, constructores `__init__`, atributos y métodos de instancia, encapsulación, relaciones de composición ("tiene un") y herencia ("es un"), invocación limpia del constructor base mediante `super()`, y polimorfismo básico mediante sobreescritura.
* **Bloque 5: Python Aplicado y Librerías:** NumPy (operaciones vectorizadas rápidas sobre matrices `ndarray` y agregación estadística), Pandas (carga de datasets, filtrado booleano, indexación por nombres, ordenaciones lógicas de tablas y limpieza de nulos), Playwright (automatización web de navegadores y scraping dinámico), y ReportLab (generación de informes ejecutivos en PDF).
* **Bloque 6: Del Notebook al Entorno Profesional:** La progresión real: de cuadernos experimentales (`.ipynb`) a scripts de consola (`.py`) y proyectos locales complejos multipaquete. Aislamiento estricto de paquetes de terceros mediante entornos virtuales locales (`python -m venv venv`) y requirements, y uso del debugger físico interactivo de VS Code (breakpoints, stack traces y monitoreo de variables).
* **Bloque 7: Python + IA:** El flujo de desarrollo guiado por IA, la depuración manual e inspección del código generado frente al "desarrollo zombi". La especialización en agentes complejos conversacionales y cíclicos utilizando LangGraph, memoria persistente e intervención humana (Human-in-the-loop) queda consolidada como la ampliación final avanzada y opcional.

---

### Límites Curriculares Formalizados

1. **Instalación Física local del intérprete de Python:** En B1-B5 se utiliza Colab/notebooks; en B6 se trabaja en entorno local asumiendo intérprete disponible. El proceso paso a paso del instalador del sistema operativo se ofrece como soporte complementario.
2. **Control de Versiones (Git):** El curso incluye inicialización (`git init`), preparación (`git add`), guardado (`git commit`), estado (`git status`) y clonación (`git clone`), sin adentrarse en resolución compleja de conflictos o rebase de ramas.
3. **Generación Documental:** El estándar canónico del curso para la compilación de informes PDF es **ReportLab**.
