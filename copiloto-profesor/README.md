# Copiloto del Profesor · Python 2027

## CREA TU PROPIO COPILOTO PROFESOR

Este pack es una base de conocimiento portable para formadores del curso **Programar con Python en 2027**.

No es una aplicación web, no es un chatbot integrado y no necesita programación adicional. Sirve para que el profesor cree su propio asistente en la herramienta que ya utilice.

## Cómo usarlo

1. Descarga o copia la carpeta `copiloto-profesor/`.
2. Crea un asistente, proyecto o agente en la herramienta que utilices.
3. Sube los archivos del pack como conocimiento.
4. Usa `00-INSTRUCCIONES-AGENTE.md` como instrucciones del asistente.
5. Pregunta sobre preparación de clases, conceptos, prácticas, errores, respuestas esperadas y Plan B.

Puedes usar una herramienta como ChatGPT, Gemini, NotebookLM u otra compatible, pero el pack no depende de ningún proveedor concreto.

## Qué debe saber hacer el asistente

- Preparar una sesión de cualquier bloque B1-B7.
- Explicar conceptos de Python de forma rigurosa e intuitiva.
- Dar analogías para alumnado sin experiencia.
- Indicar qué tiene que tener preparado el profesor en la mesa.
- Anticipar errores habituales y errores controlados útiles.
- Proponer pistas progresivas sin resolver directamente la práctica.
- Señalar resultado esperado, evidencia observable y criterio de éxito.
- Ofrecer Plan B técnico, pedagógico y temporal.
- Distinguir siempre contenido del curso de explicación complementaria.

## Regla de conocimiento

El asistente debe etiquetar sus respuestas cuando proceda:

`[SEGÚN EL CURSO]`  
Contenido respaldado por los materiales del curso, prácticas, guías, evaluaciones o fuentes incluidas.

`[EXPLICACIÓN COMPLEMENTARIA]`  
Explicación útil para que el profesor entienda mejor, pero que no debe presentarse como temario obligatorio ni evaluable si no está respaldada por el curso.

## Qué contiene el pack

| Archivo | Uso |
| :--- | :--- |
| `00-INSTRUCCIONES-AGENTE.md` | Instrucciones base del asistente. |
| `01-GUIA-CURSO.md` | Visión general del curso B1-B7. |
| `02-GUIA-DOCENTE-B1-B7.md` | Preparación docente bloque a bloque. |
| `03-PREGUNTAS-Y-RESPUESTAS.md` | Preguntas frecuentes y respuestas para el aula. |
| `04-PRACTICAS-Y-APOYOS.md` | Prácticas, apoyos, evidencias y Plan B. |
| `05-EVALUACION-Y-ERRORES.md` | Evaluación, tracebacks y errores habituales. |
| `06-SAMI.md` | Progresión SAMI curricular y límites. |
| `07-LAGUNAS-Y-LIMITES.md` | Qué entra, qué no entra y qué es complementario. |
| `08-LAB-PYTHON-EN-ACCION.md` | Lab final opcional: no B8, no evaluable por defecto. |
| `fuentes/` | Fuentes curriculares curadas para respaldo. |

## Importante

Este pack no requiere:

- APIs.
- Claves.
- Tokens.
- Backend.
- RAG.
- Bases vectoriales.
- Servicios externos.

## Mantenimiento del ZIP

El archivo `copiloto-profesor-python-2027.zip` es una copia de distribución. No lo edites manualmente.

La fuente de verdad sigue siendo:

- `copiloto-profesor/*.md`
- `copiloto-profesor/fuentes/`

Cuando cambie el pack, regenera el ZIP desde esas fuentes.

## Preguntas de prueba

- "Voy a impartir el B5 mañana. ¿Qué tengo que preparar y qué puede fallar?"
- "Explícame `return` como si el alumno tuviera 12 años."
- "¿Qué error puedo provocar para enseñar filtros de Pandas?"
- "Dame un Plan B si la práctica de ReportLab no genera el PDF."
- "¿Qué tiene que responder un alumno para demostrar que entiende SAMI-Applied?"
- "Tengo 60 minutos para B6. ¿Qué priorizo?"
- "¿Esto entra realmente en el curso o es explicación complementaria?"
- "OpenCV no abre la webcam. ¿Qué compruebo?"

## Alcance

El curso obligatorio va de B1 a B7.  
**Python en Acción** es un recurso final opcional, no es B8 y no es evaluable por defecto.  
**SAMI-Applied** pertenece a B5 y no debe mezclarse con el Lab final opcional.  
**LangGraph** aparece solo como ampliación avanzada opcional en B7.
