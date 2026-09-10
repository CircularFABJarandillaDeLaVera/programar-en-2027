# INGENIERÍA B2 · RESUMEN DE DISEÑO CONSERVADO

> **Nota de vigencia (revisión documental 2026-09-10):** Resumen de diseño de B2; el desarrollo completo anunciado por el texto de origen no estaba incluido. Consulta el [cuaderno actual](../../bloques/bloque2/cuadernos/colecciones-datos-b2.ipynb) y [04](../04-PRACTICAS-Y-APOYOS.md). Véase el [criterio de fuentes](README.md).


### Principales Correcciones y Mejoras de Saneamiento en la Versión Final (V4-Final)

1. **Aislamiento Curricular Estricto**: Se han eliminado por completo todos los conceptos de bloques posteriores. No existen referencias a clases, herencia, constructores (`super()`) ni programación orientada a objetos en general. Asimismo, se han removido todas las llamadas a la librería *Pandas*, objetos *DataFrames*, indexaciones con `.loc`/`.iloc` y filtros vectoriales lógicos (los cuales pertenecen al Bloque 5).
2. **Eliminación de la Modularización Avanzada**: Las funciones (`def`), parámetros opcionales y directivas de ámbito de variables (`global`) se han retirado de los ejemplos obligatorios y evaluaciones de este bloque, dado que se introducen formalmente en el Bloque 3. Los scripts de práctica y el proyecto final se implementan bajo código de consola estructurado y secuencial de forma limpia en celdas individuales de Google Colab.
3. **Saneamiento de la Complejidad Algorítmica (Big-O)**: Las nociones de coste computacional de rendimiento (`O(1)` y `O(N)`) han sido eliminadas de las tablas conceptuales obligatorias y los criterios de evaluación. Su rol se ha sustituido por explicaciones descriptivas en lenguaje natural (ej. *"búsqueda secuencial elemento por elemento frente a acceso directo instantáneo por clave"*). Los términos técnicos de complejidad se preservan estrictamente dentro de la sección de **Lagunas de Conocimiento / Ampliación**, de acuerdo con las fuentes disponibles.
4. **Microevaluaciones tipo SoloLearn Purificadas**: Se ha rediseñado el banco de micro-retos rápidos para evaluar **exclusivamente** las competencias de este bloque:
   * **Strings y Slicing**: Predicción de salidas de cortes y pasos inversos (`palabra[8:2:-2]`).
   * **Listas y Mutabilidad**: Completado de código de alteración de índices y comprensión de mutaciones.
   * **Tuplas**: Reconocimiento de empaquetamientos implícitos y el error del elemento único.
   * **Sets (Conjuntos)**: Predicciones de tamaño `len()` tras conversión automática y eliminación de duplicados en colecciones.
   * **Diccionarios y Desempaquetado**: Ordenación de instrucciones secuenciales con `.items()` y acumulación con el método seguro `.get()`.
   * **Comprehensions**: Cálculo de longitud de listas generadas con list comprehensions condicionales complejas.
   * **Criterios de Selección**: Emparejamiento conceptual de problemas de negocio con la estructura ideal según su diseño técnico.
5. **Enfoque Práctico Basado en Fuentes**: Todos los ejemplos lógicos de código proceden estrictamente de tus cuadernos reales (`Google Colaboratory 3, 5 y 6` y notas prácticas), como la indexación sobre `"Pradera"` (`a[5:1:-1]`), la mezcla y deduplicación de listas de estudiantes, la unificación segura de sucursales comerciales y el tratamiento del texto del Quijote en el proyecto evaluativo.

---

### Estructura de Progresión Pedagógica en el Documento Final

*   **Mapa de Dependencias del Bloque**: Flujo de aprendizaje que conduce al alumno desde los strings hasta los criterios eficientes de modelado de datos.
*   **Secciones Instruccionales de Conceptos (2.1 al 2.7)**: Cada concepto incluye de manera estricta la estructura: **Concepto ➔ Prerrequisito ➔ Ejemplo de Fuente ➔ Práctica Interactiva ➔ Error Habitual (Bug) ➔ Mini-Reto ➔ Microevaluación SoloLearn ➔ Evidencia de Aprendizaje**.
*   **Analizador de Frases Profesional**: Reto enfocado en la manipulación y limpieza de texto por consola.
*   **Evaluación Final (Clasificador Único e Indexador de Palabras Clave)**: Proyecto secuencial obligatorio donde el estudiante diseña de forma analítica un script de indexación de palabras, justificando por escrito sus decisiones de diseño de datos y documentando cómo el intérprete captura los errores de tipo (`TypeError`) al intentar forzar mutaciones de strings.
*   **Matriz de Trazabilidad y Lagunas**: Documentación transparente de los límites teóricos del material (copias profundas, tuplas con mutables internos, etc.).

---
