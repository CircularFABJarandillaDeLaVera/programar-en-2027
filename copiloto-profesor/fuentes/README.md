# Fuentes de ingeniería: alcance y vigencia

Esta carpeta conserva la ingeniería de origen de Python 2027 como respaldo pedagógico. Sus propuestas, ejemplos y referencias históricas no demuestran por sí mismos qué está implementado hoy.

## Cómo consultarlas

1. Empieza por las [instrucciones](../00-INSTRUCCIONES-AGENTE.md), la [guía actual](../01-GUIA-CURSO.md) y el [mapa de prácticas](../04-PRACTICAS-Y-APOYOS.md).
2. Para rutas, nombres, datos, resultados y comandos, consulta la página, README y código actuales de la actividad.
3. Usa estas fuentes para comprender conceptos o el diseño de origen. En duplicidades con `ingenieria/`, esta selección prevalece; eso no convierte un diseño histórico en implementación vigente.
4. Los marcadores numéricos como `[190]` proceden de una base externa cuya correspondencia completa no está incluida. No son enlaces verificables ni sustituyen una cita a un archivo y apartado disponibles.
5. Las «lagunas» describen a menudo lo que faltaba en las fuentes originales, no necesariamente en los recursos actuales. Comprueba [07 · Límites](../07-LAGUNAS-Y-LIMITES.md) antes de afirmar que algo falta en todo el curso.

## Índice y notas de uso

| Documento | Conocimiento conservado | Cuándo usarlo y qué contrastar |
| --- | --- | --- |
| [Marco V4](ingenieria-conocimiento-python-v4-saneada.md) | Progresión B1-B7 y aprendizaje activo. | Contexto de diseño; las rutas actuales están en 01 y 04. |
| [Bloque 2](ingenieria-python-bloque2-final.md) | Resumen del alcance: colecciones, slicing y clasificador. | Es un resumen de diseño, no el desarrollo completo que anunciaba el texto original. Usar el cuaderno y recursos de B2 para prácticas. |
| [Bloque 3](ingenieria-python-bloque3-final.md) | Funciones, errores, JSON/CSV y arquitectura comercial de SAMI-Lite. | Apoyo conceptual; contrastar las firmas y ejercicios con la copia de trabajo de B3. |
| [Bloque 4](ingenieria-python-bloque4-final.md) | POO, composición, herencia y productos de SAMI-OOP. | Explicar responsabilidades; no exigir todos los ejemplos ni patrones de la ingeniería. |
| [Bloque 5](ingenieria-python-bloque5-final.md) | NumPy, Pandas, Playwright y ReportLab Platypus. | La fuente desarrolla sobre todo ReportLab. El SAMI-Applied práctico actual parte de CSV y no exige scraping. |
| [Bloque 6](ingenieria-python-bloque6-refinada.md) | Entorno local, Git, depuración y diseño de SAMI-Local. | Diseño histórico: la ruta actual tiene seis experiencias, Git local y salida descriptiva por consola. |
| [Bloque 7](ingenieria-python-bloque7.md) | Contexto, revisión crítica, defensa y grafos. | Diseño histórico: contrastar con los proyectos publicados de Harness, agente real, LangGraph e IA bajo control. |
| [Lab original](ingenieria-lab-python-en-accion.md) | OpenCV, Pillow, archivos, openpyxl y Tkinter. | Solo las cinco experiencias iniciales; el mapa ampliado está en 08 y en el portal del Lab. |

## Límites de mantenimiento

Conservamos los ejemplos útiles y distinguimos sus propuestas del material vigente. No se importan al currículo las ampliaciones recomendadas al final de una fuente sin decisión docente. Profesor Plus aporta patrones de apoyo, no requisitos ni una arquitectura necesaria para el agente.

El ZIP se regenera desde los Markdown; no debe utilizarse para sobrescribir sus fuentes. Los enlaces hacia el curso completo requieren el repositorio y no viajan dentro del ZIP documental.
