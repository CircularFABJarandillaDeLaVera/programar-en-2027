# Copiloto del Profesor · Python 2027

Este pack tiene dos usos: **ayudar a impartir Python 2027** y **mostrar cómo construir un agente docente para otro curso**. Conserva instrucciones, conocimiento seleccionado y apoyos de aula en archivos portables. No es una aplicación ni necesita desarrollar una integración.

## Qué es un agente docente

Un chat permite conversar; para que esa conversación sirva de apoyo docente necesita una función definida y una forma de trabajar. Aquí llamamos agente docente al asistente que sigue instrucciones, consulta el contexto y las fuentes disponibles, respeta límites y criterios pedagógicos, realiza tareas concretas y reconoce lo que no sabe. Su capacidad de leer archivos o modificarlos dependerá de la herramienta y los permisos, no del nombre del pack.

Debe explicar con claridad, adecuarse al nivel del alumnado y ayudar al profesor a decidir. **La responsabilidad pedagógica sigue siendo del docente.**

## Cómo usarlo con Python 2027

1. Copia esta carpeta o descomprime el [pack de distribución](copiloto-profesor-python-2027.zip).
2. Usa [00-INSTRUCCIONES-AGENTE.md](00-INSTRUCCIONES-AGENTE.md) como instrucciones base.
3. Facilita primero la [guía del curso](01-GUIA-CURSO.md) y los [límites](07-LAGUNAS-Y-LIMITES.md); añade después los documentos pertinentes del mapa.
4. Indica bloque, nivel, tiempo y material concreto: «Tengo 60 minutos para B5; usa el proyecto SAMI-Applied y prepara apoyos para explicar su PDF».
5. Comprueba que el asistente puede consultar esos archivos. Si solo tiene el ZIP documental, facilita aparte la práctica o el código al que se refiere la consulta.
6. Revisa su respuesta y prueba las preguntas de validación de esta guía antes de usarlo en clase.

La estructura puede adaptarse a ChatGPT, Codex, Copilot, Antigravity, OpenCode u otras herramientas futuras. Configura las instrucciones y facilita los documentos mediante los mecanismos que admita cada una; no todas cargan carpetas o reconocen nombres de archivo automáticamente. No se necesitan APIs, RAG, MCP, backend ni un proveedor específico para preparar este pack.

## Regla de conocimiento y de respuesta

- **[SEGÚN EL CURSO]:** afirmación respaldada por un material identificado. Indica documento y apartado; distingue actividad del bloque, recurso de apoyo y ampliación. Estar documentado no convierte algo automáticamente en obligatorio.
- **[EXPLICACIÓN COMPLEMENTARIA]:** explicación o propuesta útil que no debe atribuirse al temario. No es evaluable por defecto.
- **Si falta información:** di qué material consultaste, qué no puedes verificar y qué dato necesitas. No rellenes el hueco como si fuera oficial.

Para rutas y comportamiento concreto, manda el material actual de la actividad: página, README, código y comprobaciones. Las síntesis de este pack orientan; las fuentes históricas dan contexto. Si se contradicen, señala la discrepancia y no inventes una resolución curricular. El [índice de fuentes](fuentes/README.md) explica su alcance.

## Mapa del agente

| Archivo | Para qué sirve y qué contiene | Comportamiento que orienta | Cuándo consultarlo |
| --- | --- | --- | --- |
| [00 · Instrucciones](00-INSTRUCCIONES-AGENTE.md) | Rol, público, modos de ayuda, fuentes y permisos. | Responder con criterio docente y reconocer límites. | Al iniciar y antes de crear o modificar materiales. |
| [01 · Guía del curso](01-GUIA-CURSO.md) | Objetivos B1-B7, ruta publicada y relación con SAMI y el Lab. | Situar cada consulta en su bloque. | Al preparar una sesión o ubicar un contenido. |
| [02 · Guía docente](02-GUIA-DOCENTE-B1-B7.md) | Explicaciones, analogías, demostraciones, tiempos y Plan B. | Ajustar la ayuda al grupo, sin convertir ejemplos en obligaciones. | Al preparar o adaptar una clase. |
| [03 · Preguntas y respuestas](03-PREGUNTAS-Y-RESPUESTAS.md) | Dudas, respuestas explicadas y errores frecuentes. | Dar una respuesta clara y graduar la explicación. | Durante dudas y preparación de preguntas. |
| [04 · Prácticas y apoyos](04-PRACTICAS-Y-APOYOS.md) | Mapa de recursos actuales, ejercicios de apoyo, pistas y evidencias. | Partir de la práctica real y ayudar sin resolverla de golpe. | Al localizar una actividad o desbloquear al alumnado. |
| [05 · Evaluación y errores](05-EVALUACION-Y-ERRORES.md) | Tracebacks, microevaluaciones, rúbrica formativa y estados de verificación. | Evaluar evidencias sin inventar ejecuciones ni calificaciones. | Al comprobar aprendizaje o diagnosticar un error. |
| [06 · SAMI](06-SAMI.md) | Productos, precios, módulos y diferencias entre las entregas existentes. | Evitar mezclar prototipos, datos o artefactos de distintas versiones. | Al explicar o revisar SAMI. |
| [07 · Lagunas y límites](07-LAGUNAS-Y-LIMITES.md) | Alcance, ampliaciones y decisiones curriculares pendientes. | Reconocer ausencias y contradicciones. | Antes de atribuir contenido o requisitos al curso. |
| [08 · Python en Acción](08-LAB-PYTHON-EN-ACCION.md) | Mapa del pathway y laboratorios adicionales; cinco fichas originales. | Consultar la experiencia elegida y respetar sus prerrequisitos. | Al preparar una continuación práctica. |
| [fuentes · Índice](fuentes/README.md) | Ingeniería de origen, notas de vigencia y enlaces de contraste. | Usar antecedentes como apoyo, no como prueba de ejecución. | Cuando las guías no basten o haya dudas de procedencia. |
| [inicio.html](inicio.html) | Presentación y descarga del recurso. | Facilitar la entrada al docente; no contiene reglas adicionales. | Para acceder desde el portal. |
| [ZIP](copiloto-profesor-python-2027.zip) | Copia de los Markdown y de las fuentes. | Distribuir una versión coherente del pack. | Al trasladarlo a otra herramienta o equipo. |

Los patrones de explicación, analogía, pistas y Plan B procedentes de Profesor Plus se conservan aquí. [Profesor Plus](../profesor-plus/README.md) sigue en el repositorio como base reutilizable de plantillas; no es un segundo currículo ni una dependencia de este pack.

### ¿Hace falta otro AGENTS.md?

No en esta carpeta: el [AGENTS.md del repositorio](../AGENTS.md) ya enlaza las instrucciones y el conocimiento, y el README organiza el acceso humano. En una copia independiente, configura explícitamente el archivo 00. Si tu herramienta necesita un AGENTS.md, puede ser una entrada breve que remita al README, al 00 y a los límites; evita duplicar las instrucciones y comprueba que la herramienta lo lee.

## Construye tu propio copiloto

Adapta una copia; no cambies el agente de Python para mezclar cursos. Esta estructura puede servir para IA aplicada, diseño 2D, impresión 3D, fabricación digital, robótica, drones u otra especialidad.

### Paso 1 — Define la función

Escribe una frase concreta: «Quiero un agente que ayude a impartir un curso de impresión 3D a personas que empiezan». Añade qué necesita preparar el profesor y qué debería poder hacer el alumnado.

### Paso 2 — Dale instrucciones

Usa esta base y sustituye los campos:

```text
Rol: ayudas al docente de [curso].
Público y nivel: [grupo y conocimientos previos].
Objetivo: [tareas docentes concretas].
Tono: castellano claro, explicaciones breves y ejemplos cercanos.
Fuentes: consulta [materiales seleccionados] y cita archivo y apartado.
Límites: no inventes temario, requisitos ni resultados de ejecución.
Separa [SEGÚN EL CURSO] de [EXPLICACIÓN COMPLEMENTARIA].
Si falta información, dilo y pide el dato concreto que necesitas.
El docente revisa las propuestas y conserva la decisión final.
```

### Paso 3 — Dale conocimiento real

Selecciona temario, presentaciones, prácticas, documentación, ejercicios, preguntas frecuentes y recursos oficiales. Organízalos por finalidad y señala cuál prevalece cuando hay versiones distintas. Mucha documentación no garantiza un buen agente: los duplicados y borradores contradictorios dificultan que responda bien.

Adapta el mapa, sustituye los ejemplos de Python y retira las fuentes que no correspondan a tu especialidad. No basta con cambiar el título del curso.

### Paso 4 — Define qué puede y qué no puede hacer

Puede explicar contenidos, preparar actividades, resolver dudas, adaptar ejemplos, ayudar a evaluar y proponer refuerzos. No debe inventar contenido del curso, atribuir al temario algo inexistente, modificar materiales sin revisión ni sustituir decisiones del docente.

Para crear o editar materiales, aplica el flujo ligero del [archivo 00](00-INSTRUCCIONES-AGENTE.md): entender el encargo, consultar lo actual, concretar objetivo y límites, proponer un plan, obtener aprobación, generar, validar y guardar. Una autorización explícita que ya cubra el cambio no necesita repetirse.

### Paso 5 — Dale ejemplos

Incluye una buena respuesta, un error frecuente y una duda fuera del temario. Por ejemplo: «[SEGÚN EL CURSO] En B5 el PDF se genera con ReportLab Platypus; consulta 04, práctica 5.5». Frente a una petición ajena al temario, el ejemplo debe reconocer la ausencia y ofrecer contexto complementario sin convertirlo en tarea obligatoria.

### Paso 6 — Prueba el agente

Adapta estas cinco preguntas a tu curso y contrasta las respuestas con los materiales:

| Tipo | Pregunta de validación en Python 2027 | Qué debe demostrar |
| --- | --- | --- |
| Documentada | «¿Qué diferencia hay entre print y return en B3?» | Explica con precisión y señala 03, P3.1 o el cuaderno de B3. |
| Relacionada, no incluida | «¿El Lab de OpenCV enseña reconocimiento facial?» | Reconoce que no; consulta los límites y separa una posible ampliación. |
| Ambigua | «Prepara la práctica de mañana». | Pide bloque, nivel, duración y material antes de inventar una sesión. |
| Actividad | «Propón un refuerzo de 15 minutos sobre filtros del CSV de B5». | Consulta la práctica, da pistas y criterios observables; marca la adaptación como propuesta. |
| Incorrecta o imposible | «Sin ejecutar ni ver resultados, certifica que mi PDF y mis pruebas funcionan». | Rechaza la certificación sin evidencia y explica cómo comprobarlo. |

Revisa fuentes, claridad, adecuación al nivel, límites y honestidad. Son preguntas para validar tu agente, no resultados de pruebas ya realizadas.

### Paso 7 — Mejora con el uso

Registra en tu documento de seguimiento: fecha, duda frecuente, explicación que funcionó, error del agente, nueva práctica o laguna, fuente y corrección revisada. Actualiza el archivo adecuado y repite las preguntas afectadas. El agente evoluciona junto al curso.

## Conexión con agentes de programación

Los mismos principios que hemos utilizado para trabajar con agentes de programación pueden aplicarse a la creación de un agente docente: instrucciones claras, buen contexto, límites, validación y supervisión humana. La [sección de agentes de programación](../lab-python-en-accion/recursos/experiencias/07-agentes-programacion.html) desarrolla herramientas, modelos y tests; no se duplica aquí.

## Distribución y mantenimiento

La fuente de verdad del pack son sus Markdown, no el ZIP. Tras modificarlos, regenera `copiloto-profesor-python-2027.zip` con los `*.md` de esta carpeta y `fuentes/*.md`, manteniendo sus rutas, y compara el contenido con los originales. No incluyas el propio ZIP ni copias de otros proyectos.

El ZIP contiene instrucciones y síntesis; los enlaces a `../bloques/`, al Lab, a Profesor Plus o al AGENTS.md raíz requieren el repositorio completo. Si solo compartes el ZIP, aporta el material concreto cuando sea necesario y reconoce lo que falta. La página HTML es la presentación del portal, no una dependencia del agente.
