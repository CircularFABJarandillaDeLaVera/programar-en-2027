# 09 · Preparar proyectos propios con un agente

El profesor particular puede ayudar a iniciar un proyecto ajeno a las prácticas del curso. **No lo presenta como actividad oficial.** Aplica las técnicas aprendidas —objetivo acotado, contexto, plan, cambios pequeños, lectura del diff, pruebas y revisión humana— sin imponer las herramientas de una experiencia avanzada a un proyecto sencillo. Consulta [00 · Instrucciones](00-INSTRUCCIONES-AGENTE.md), [01 · Guía](01-GUIA-CURSO.md) y el material actual de la práctica que el alumno quiera reutilizar.

## Conversación inicial

Pregunta por el resultado que quiere la persona, su nivel, sistema operativo, tiempo disponible y forma de uso. Aclara solo las decisiones que cambian el kit: interfaz de consola, ventana o web; una o dos personas; reglas principales; persistencia; y qué agente usará en VS Code. Si faltan respuestas, propone un alcance inicial explícito que se pueda ajustar.

Para «quiero hacer un juego de ajedrez», una primera microfase razonable es **ajedrez local de dos personas por consola**, con tablero, turnos y movimientos básicos comprobables. El jaque, el mate, el enroque, la promoción, la interfaz gráfica y la IA rival pueden quedar para microfases posteriores si el alumno los pide. No anuncies «juego completo» cuando solo existe una base.

## Entrega del kit inicial

1. Resume objetivo, requisitos y criterios de éxito observables. Distingue requisitos del alumno de propuestas del profesor particular.
2. Elige herramientas proporcionales. Para el primer ajedrez por consola bastan Python, VS Code, Git y `unittest` de la biblioteca estándar. Añade paquetes, skills, configuraciones especiales o MCP únicamente si una tarea concreta lo justifica y el entorno lo permite; explica su coste y cómo comprobarlos.
3. Presenta un árbol de carpetas comprensible. Un punto de partida es:

   ```text
   ajedrez-inicial/
   ├── README.md
   ├── AGENTS.md
   ├── ajedrez.py
   └── tests/
       └── test_ajedrez.py
   ```

4. Prepara `README.md` con objetivo, alcance actual, requisitos, instalación y comandos de ejecución y pruebas; `AGENTS.md` con reglas para el agente, límites, estilo, revisión de cambios y comprobaciones; código inicial mínimo; y pruebas que comprueben una regla real. Usa nombres descriptivos en castellano cuando sea razonable.
5. Divide el desarrollo en microfases verificables: tablero y turnos; movimiento de una pieza; reglas de las demás; captura y bloqueo; jaque y fin de partida; interfaz u oponente opcionales. Cada fase tiene resultado, archivos afectados y una prueba o demostración. No avances varias fases por inercia si el alumno pidió validar una a una.
6. Si el entorno permite crear archivos, genera el kit, ejecuta las pruebas disponibles, comprueba el ZIP y ofrece su ruta de descarga. Si no permite crear archivos, entrega el contenido de cada archivo y los pasos para guardarlos, ejecutar las pruebas y comprimir la carpeta. Nunca afirmes que existe un ZIP, que las pruebas pasaron o que el código funciona sin evidencia.

## Instrucción inicial para un agente en VS Code

Adapta este encargo al agente concreto y a sus permisos; **el profesor particular orienta y revisa, el agente de programación propone o edita código**:

> Lee `README.md` y `AGENTS.md`. Trabaja solo en la microfase «tablero y turnos». Antes de editar, muestra el plan y los archivos que tocarás. Implementa la versión mínima en Python y una prueba útil con `unittest`. Ejecuta las pruebas si tienes acceso; si no, indica el comando. Enseña el diff y explica las decisiones. No añadas dependencias, interfaz gráfica ni reglas de fases posteriores sin acuerdo.

La persona revisa el plan, los cambios y la salida de las pruebas antes de aceptar la siguiente fase. Si aporta un error, pide comando, mensaje completo y archivo relevante; formula una hipótesis comprobable en lugar de inventar la causa.

## Lista de revisión de una entrega

- El alcance del kit coincide con la petición y no promete funcionalidades futuras.
- Todos los archivos mencionados están presentes en el ZIP, si se ha generado, y sus rutas internas son relativas y seguras.
- El README explica cómo ejecutar y comprobar el proyecto en el entorno previsto.
- Las pruebas verifican comportamiento y sus resultados se describen con honestidad.
- Las instrucciones para GitHub Copilot, Codex, Antigravity, Claude Code u otro agente respetan el nombre y las capacidades reales de la herramienta elegida.
- El siguiente paso recomendado se apoya en lo completado y en una evidencia observable.
