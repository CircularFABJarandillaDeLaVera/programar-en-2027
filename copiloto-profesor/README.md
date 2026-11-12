# Tu profesor particular de Programar en 2027

Este pack documental configura a **Tu profesor particular de Programar en 2027** para acompañar al alumnado desde la preparación del equipo hasta los bloques, el recorrido práctico y los proyectos propios. También ayuda al profesorado a preparar sesiones y apoyos. Conserva instrucciones y conocimiento seleccionado en archivos portables; no es una aplicación ni instala herramientas.

El profesor particular adapta la ayuda al perfil: con alumnado empieza por preguntas y pistas y retira apoyo de forma gradual; con profesorado aporta explicación, preparación, errores previsibles, evidencias y Plan B. En ambos casos la persona formula hipótesis, prueba y conserva la decisión final.

## Qué es el profesor particular

Es el asistente educativo que sigue estas instrucciones, consulta el contexto disponible, acompaña de forma permanente y prepara proyectos iniciales. **GitHub Copilot** es una herramienta de programación; **Codex, Antigravity y Claude Code** son agentes que pueden trabajar con código. El profesor particular puede ayudar a prepararles instrucciones, pero su capacidad de leer, crear o modificar archivos depende del entorno y de los permisos.

Debe explicar con claridad, adecuarse al nivel del alumnado y ayudar al profesor a decidir. **La responsabilidad pedagógica sigue siendo del docente.**

## Cómo usarlo con Programar en 2027

1. Copia esta carpeta o descomprime el [pack de distribución](profesor-particular-programar-2027.zip).
2. Usa [00-INSTRUCCIONES-AGENTE.md](00-INSTRUCCIONES-AGENTE.md) como instrucciones base.
3. Facilita primero la [guía del curso](01-GUIA-CURSO.md), los [límites](07-LAGUNAS-Y-LIMITES.md), el [mapa de experiencias](08-LAB-PYTHON-EN-ACCION.md) y la [guía de proyectos propios](09-PROYECTOS-PROPIOS.md); añade después los documentos pertinentes.
4. Empieza en [preparacion.html](../preparacion.html), continúa por [las rutas](../inicio.html#rutas) y di qué has completado. Por ejemplo: «Tengo Ubuntu y necesito preparar VS Code» o «Terminé la Experiencia 1; ¿qué sigue?».
5. Comprueba que el asistente puede consultar esos archivos. Si solo tiene el ZIP documental, facilita aparte la práctica o el código al que se refiere la consulta.
6. Revisa su respuesta y prueba las preguntas de validación de esta guía antes de usarlo en clase.

La estructura puede adaptarse a ChatGPT, Codex, Copilot, Antigravity, OpenCode u otras herramientas futuras. Configura las instrucciones y facilita los documentos mediante los mecanismos que admita cada una; no todas cargan carpetas o reconocen nombres de archivo automáticamente. No se necesitan APIs, RAG, MCP, backend ni un proveedor específico para preparar este pack.

## Regla de conocimiento y de respuesta

- **[SEGÚN EL CURSO]:** afirmación respaldada por un material identificado. Indica documento y apartado; distingue actividad del bloque, recurso de apoyo y ampliación. Estar documentado no convierte algo automáticamente en una instrucción para todo el recorrido.
- **[EXPLICACIÓN COMPLEMENTARIA]:** explicación o propuesta útil que no debe atribuirse al temario.
- **Si falta información:** di qué material consultaste, qué no puedes verificar y qué dato necesitas. No rellenes el hueco como si fuera oficial.

Para rutas y comportamiento concreto, manda el material actual de la actividad: página, README, código y comprobaciones. Las síntesis de este pack orientan; las fuentes históricas dan contexto. Si se contradicen, señala la discrepancia y no inventes una resolución curricular. El [índice de fuentes](fuentes/README.md) explica su alcance.

## Mapa del agente

| Archivo | Para qué sirve y qué contiene | Comportamiento que orienta | Cuándo consultarlo |
| --- | --- | --- | --- |
| [00 · Instrucciones](00-INSTRUCCIONES-AGENTE.md) | Rol, público, modos de ayuda, fuentes y permisos. | Responder con criterio docente y reconocer límites. | Al iniciar y antes de crear o modificar materiales. |
| [01 · Guía del curso](01-GUIA-CURSO.md) | Objetivos B1-B7, rutas publicadas y relación con los proyectos y el Lab. | Situar cada consulta sin cerrar decisiones pendientes. | Al preparar una sesión o ubicar un contenido. |
| [02 · Guía docente](02-GUIA-DOCENTE-B1-B7.md) | Explicaciones, analogías, demostraciones, tiempos y Plan B. | Ajustar la ayuda al grupo, sin convertir ejemplos en obligaciones. | Al preparar o adaptar una clase. |
| [03 · Preguntas y respuestas](03-PREGUNTAS-Y-RESPUESTAS.md) | Dudas, respuestas explicadas y errores frecuentes. | Dar una respuesta clara y graduar la explicación. | Durante dudas y preparación de preguntas. |
| [04 · Prácticas y apoyos](04-PRACTICAS-Y-APOYOS.md) | Mapa de rutas actuales, fichas de apoyo, pistas y evidencias. | Distinguir experiencia publicada de material de autor y ayudar sin resolver de golpe. | Al localizar una actividad o desbloquear al alumnado. |
| [05 · Comprobaciones y errores](05-COMPROBACIONES-Y-ERRORES.md) | Tracebacks, comprobaciones formativas, criterios de comprobación y estados de verificación. | Revisar evidencias sin inventar ejecuciones ni resultados. | Al comprobar aprendizaje o diagnosticar un error. |
| [06 · Contexto de proyectos](06-CONTEXTO-PROYECTOS.md) | Antecedentes técnicos de las prácticas de productos y precios. | Evitar mezclar prototipos, datos o artefactos de distintas versiones. Es documentación histórica, no un nombre público. | Al estudiar la evolución técnica. |
| [07 · Lagunas y límites](07-LAGUNAS-Y-LIMITES.md) | Alcance y límites de las ampliaciones. | No resolver por inferencia el papel del proyecto final heredado ni de LangGraph. | Antes de atribuir contenido o requisitos al curso. |
| [08 · Lab](08-LAB-PYTHON-EN-ACCION.md) | Mapa enlazado de las 17 experiencias publicadas y laboratorios adicionales; cinco fichas originales. | Consultar la experiencia elegida y respetar sus prerrequisitos. | Al elegir o continuar la Ruta A. |
| [09 · Proyectos propios](09-PROYECTOS-PROPIOS.md) | Flujo para definir y preparar un kit inicial, con el ajedrez como ejemplo. | Elegir la solución más sencilla que cumpla los requisitos, preparar archivos y pruebas, y declarar qué se ha generado realmente. | Cuando el alumno quiera construir un proyecto propio con un agente. |
| [fuentes · Índice](fuentes/README.md) | Ingeniería de origen, notas de vigencia y enlaces de contraste. | Usar antecedentes como apoyo, no como prueba de ejecución. | Cuando las guías no basten o haya dudas de procedencia. |
| [inicio.html](inicio.html) | Presentación y descarga del recurso. | Facilitar la entrada al docente; no contiene reglas adicionales. | Para acceder desde el portal. |
| [ZIP](profesor-particular-programar-2027.zip) | Copia de los 12 documentos Markdown vigentes, incluido el índice de fuentes. | Distribuir una versión coherente sin antecedentes heredados. | Al trasladarlo a otra herramienta o equipo. |

Los patrones de explicación, analogía, pistas y Plan B procedentes de Profesor Plus se conservan aquí. [Profesor Plus](../profesor-plus/README.md) sigue en el repositorio como base reutilizable de plantillas; no es un segundo currículo ni una dependencia de este pack.

### ¿Hace falta otro AGENTS.md?

No en esta carpeta: el [AGENTS.md del repositorio](../AGENTS.md) ya enlaza las instrucciones y el conocimiento, y el README organiza el acceso humano. En una copia independiente, configura explícitamente el archivo 00. Si tu herramienta necesita un AGENTS.md, puede ser una entrada breve que remita al README, al 00 y a los límites; evita duplicar las instrucciones y comprueba que la herramienta lo lee.

## Construye tu propio asistente educativo

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

| Tipo | Pregunta de validación en Programar en 2027 | Qué debe demostrar |
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

La fuente de verdad del pack son sus Markdown, no el ZIP. Antes de regenerarlo:

1. valida los enlaces locales en el repositorio;
2. revisa que las decisiones pendientes sigan marcadas como tales;
3. comprueba que las rutas B6, B7 y Lab coinciden con sus portales;
4. ejecuta las comprobaciones de formato y revisa el diff.

Después, regenera `profesor-particular-programar-2027.zip` con los `*.md` vigentes de esta carpeta, incluido 09, y `fuentes/README.md`, manteniendo sus rutas, y compara cada entrada con el original. Los documentos de ingeniería histórica permanecen en el repositorio, pero no se distribuyen en este ZIP. Conserva `copiloto-profesor-python-2027.zip` como descarga de compatibilidad para enlaces anteriores.

El ZIP contiene instrucciones y síntesis; los enlaces a `../bloques/`, al Lab, a Profesor Plus o al AGENTS.md raíz requieren el repositorio completo. Si solo compartes el ZIP, aporta el material concreto cuando sea necesario y reconoce lo que falta. La página HTML es la presentación del portal, no una dependencia del agente.
