# Agentes de programacion - Trabajar con control

## Anexo práctico: elegir con criterio

**[EXPLICACIÓN COMPLEMENTARIA] · Exploración opcional, no evaluable.**

**No necesitas el mejor modelo. Necesitas saber elegir una herramienta y un modelo suficientemente buenos para la tarea que quieres resolver.**

Ruta sencilla: elige una herramienta, empieza con una tarea pequeña y revisa sus cambios. La práctica guiada ocupa 30–45 minutos; el banco de pruebas final es opcional y puede hacerse otro día.

### Aclarar conceptos

- **Editor o entorno de desarrollo:** donde abres, escribes y ejecutas código; por ejemplo, VS Code.
- **Agente de programación:** herramienta que combina un modelo con acceso a archivos y acciones para analizar, modificar y comprobar un proyecto, según sus permisos.
- **Modelo de IA:** sistema que interpreta tus instrucciones y genera respuestas o propone acciones. Puede cambiar sin que cambies de herramienta.
- **Proveedor del modelo:** servicio que te da acceso al modelo; no siempre coincide con quien lo ha desarrollado.
- **API y tokens:** la API permite que un programa solicite respuestas a un servicio. Los tokens son fragmentos de texto usados para medir lo que procesa y genera el modelo; pueden influir en el coste. No equivalen a palabras ni a tareas completas.
- **Suscripción:** pago periódico por acceso con unas condiciones y límites. No significa uso ilimitado ni incluye automáticamente el consumo de una API externa.

Ejemplo: abres el proyecto en VS Code y usas Copilot para localizar un fallo. VS Code es el editor; Copilot, la herramienta; el modelo seleccionado es quien interpreta la petición. Con OpenCode puedes cambiar de proveedor y modelo manteniendo la herramienta. OpenCode, Codex, Copilot y Antigravity no identifican automáticamente el modelo utilizado.

### Empieza sin gastar dinero

**GitHub Copilot Free.** Buena puerta de entrada desde VS Code: permite empezar con una modalidad gratuita con límites. Comprueba las condiciones vigentes antes del taller; pueden cambiar. Consulta los [planes oficiales de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans).

**Google Antigravity.** Entorno interesante para conocer una forma de trabajo más agéntica: planificar, ejecutar y usar herramientas, terminal y navegador. Permite explorar subagentes (ayudantes para subtareas) y agentes personalizados cuando la interfaz y configuración lo permitan. Son ampliaciones, no requisitos para empezar. Revisa su [documentación](https://antigravity.google/docs/home) y las condiciones de [acceso gratuito y planes](https://antigravity.google/pricing).

**OpenCode.** Especialmente útil para aprender a cambiar de proveedor y modelo. Admite muchos proveedores y modelos locales; estos últimos necesitan un equipo y una configuración adecuados. Puede haber modelos gratuitos, promociones, créditos y distintos costes, pero no se garantiza que un modelo concreto siga siendo gratuito. Que la herramienta sea gratuita no implica que el proveedor lo sea. Consulta los [proveedores de OpenCode](https://opencode.ai/docs/providers/).

Primer paso: usa una opción gratuita disponible en tu cuenta y pídele únicamente analizar la práctica de participantes que aparece más abajo.

### ¿Cuándo merece la pena pagar?

En nuestra experiencia, los tokens o cuotas gratuitos permiten aprender muchísimo. Cuando trabajas durante horas sobre repositorios reales, mantienes conversaciones largas, modificas muchos archivos, ejecutas pruebas y retomas proyectos durante varios días, una solución estable puede compensar. Decide por las interrupciones que evitas y el trabajo que consigues validar.

**Codex.** Nuestra recomendación principal para trabajo intensivo sobre proyectos y repositorios: permite analizar código, modificar archivos, ejecutar comandos y comprobar resultados con un flujo agéntico y los permisos adecuados. Es una recomendación de uso CFAB, no una superioridad demostrada frente a todos los modelos. Comprueba el acceso y los límites en la [información oficial de Codex](https://developers.openai.com/codex/pricing).

**GitHub Copilot Pro.** Alternativa sencilla para quien prefiera continuar dentro de VS Code/GitHub. Existen planes de pago; consulta los [planes oficiales](https://docs.github.com/en/copilot/get-started/plans) para comprobar precios, límites y modelos disponibles.

Pagar no elimina la revisión humana. Elige según la tarea, la continuidad que necesitas y tu presupuesto, sin contratar por adelantado capacidades que todavía no utilizas.

### Otros modelos y herramientas que hemos probado o explorado

Como referencias de nuestra exploración de modelos aparecen **Muse Spark, Ling, Nemotron y Astra**. Al seleccionarlos, por ejemplo desde OpenCode cuando el proveedor los ofrezca, anota el identificador exacto, versión y proveedor: un nombre abreviado no basta para reproducir una experiencia. Mencionarlos aquí no certifica una prueba completada ni su disponibilidad en cada herramienta.

**Cline, Continue, Goose y Aider** son herramientas o asistentes de programación, no modelos. Basta con saber que existen: el ecosistema cambia continuamente y este anexo se centra en Codex, OpenCode, Antigravity y Copilot.

### Lo que hemos aprendido probándolos

- Un modelo que analiza muy bien puede necesitar más ayuda al ejecutar cambios.
- Más caro no significa automáticamente mejor para cualquier tarea.
- Los modelos gratuitos permiten aprender mucho; reserva modelos más capaces o suscripciones para trabajos donde aporten valor.
- Comprueba siempre las modificaciones: Git, `git status` y `git diff` son fundamentales.
- Las pruebas y validaciones importan más que una explicación convincente.
- Nunca aceptes como verificada una ejecución que el agente no pudo comprobar.
- Empieza con permisos prudentes: lectura para el análisis y escritura acotada para el cambio. Amplíalos cuando comprendas el flujo.

La práctica conserva un caso real documentado: Codex no pudo ejecutar Python en su entorno y la validación final la hizo el usuario. Ese resultado histórico no sustituye las comprobaciones de una nueva ejecución.

---

## Para que sirve esta experiencia

En esta practica vas a trabajar con un agente de programacion sobre un proyecto pequeno de Python. El objetivo no es que el agente "haga magia", sino aprender a pedirle ayuda sin perder el control del codigo.

El proyecto inicial contiene un fallo visible: permite registrar una edad negativa.

```text
Nombre: Luis
Edad: -15
Participante registrado: Luis (-15 anos)
```

Al terminar el recorrido guiado, ese caso debe rechazarse:

```text
Error: la edad debe estar entre 0 y 120 anos.
```

Puedes hacer la practica con Codex u otro agente de programacion que tenga acceso a la carpeta del proyecto.

---

## El flujo completo

```text
ENTENDER
  ↓
PEDIR AL AGENTE QUE ANALICE
  ↓
AUTORIZAR EL CAMBIO
  ↓
git status
  ↓
git diff
  ↓
EJECUTAR
  ↓
PRUEBAS
  ↓
REVISION HUMANA
  ↓
git commit
```

La idea importante es esta: **analizar no significa autorizar modificaciones**. Primero pedimos al agente que investigue y explique. Solo despues, si el analisis tiene sentido, autorizamos un cambio concreto.

---

## 1. Descarga y prepara la practica

Descarga `agentes-programacion.zip`, descomprimelo y abre la carpeta `agente-programacion`.

Antes de pedir cambios, sigue el apartado «Prepara Git como red de seguridad» del README descargado para guardar el estado inicial. Revisa también git status y git diff antes de modificar.

La carpeta del alumno contiene:

```text
agente-programacion/
├── app.py
├── participantes.py
├── test_participantes.py
├── README.md
└── AGENTS.md
```

`AGENTS.md` contiene instrucciones permanentes para orientar al agente dentro de este proyecto: trabajar con cambios pequenos, no anadir dependencias, no eliminar pruebas y explicar que se ha tocado. Es como dejar una nota fija al ayudante antes de empezar.

---

## 2. ENTENDER: comprueba el fallo inicial

Abre PowerShell dentro de la carpeta `agente-programacion` y ejecuta:

```powershell
python app.py
```

Prueba este caso:

```text
Nombre: Luis
Edad: -15
```

Si el programa registra a Luis con `-15 anos`, has visto el fallo real. Esta comprobacion manual es util porque demuestra un caso concreto, pero no demuestra que todo el programa funcione.

---

## 3. PEDIR AL AGENTE QUE ANALICE

Ahora pide solo analisis. No autorices cambios todavia.

```text
Analiza este proyecto y localiza por que permite registrar edades negativas.
No modifiques ningun archivo todavia.

Explicame:
1. donde esta el problema;
2. que comportamiento produce;
3. que archivo necesitarias modificar para corregirlo.
```

Un agente puede investigar sin modificar archivos si delimitamos correctamente el alcance. En esta fase esperas una explicacion, no un parche.

---

## 4. AUTORIZAR EL CAMBIO

Si el analisis es correcto, autoriza una modificacion pequena y concreta:

```text
Corrige el problema.

Una edad valida debe estar entre 0 y 120 anos, ambos incluidos.
Modifica unicamente los archivos estrictamente necesarios.
No anadas dependencias.
No hagas ninguna otra mejora.
Despues explica exactamente que has cambiado.
```

La precision de los requisitos condiciona directamente la solucion que genera el agente. Si le pides poco, puede quedarse corto. Si le pides algo ambiguo, puede cambiar demasiado.

---

## 5. git status: que archivos ha tocado

Despues de la modificacion, ejecuta:

```powershell
git status
```

`git status` responde a la pregunta:

```text
Que archivos han cambiado desde el ultimo punto guardado?
```

Aqui revisas si el agente ha tocado solo lo autorizado. Si pediste corregir la edad, lo normal es que cambie `participantes.py`, no media practica.

---

## 6. git diff: que lineas ha cambiado

Ahora ejecuta:

```powershell
git diff
```

`git diff` compara la version guardada con la version actual. Muestra exactamente que lineas ha anadido, eliminado o modificado el agente.

No debemos asumir que algo funciona porque el agente lo diga. El `diff` es la revision del codigo real, linea por linea.

---

## 7. EJECUTAR: prueba manual

Ejecuta otra vez:

```powershell
python app.py
```

Vuelve a probar:

```text
Nombre: Luis
Edad: -15
```

Ahora deberia aparecer:

```text
Error: la edad debe estar entre 0 y 120 anos.
```

Esta ejecucion manual comprueba un caso real. Es necesaria, pero sigue siendo limitada: un solo caso correcto no demuestra que todo funcione.

---

## 8. PRUEBAS: varios comportamientos

Ejecuta:

```powershell
python -m unittest -v
```

Las pruebas automaticas comprueban varios comportamientos y ayudan a detectar regresiones: errores que aparecen cuando arreglamos una cosa y rompemos otra.

Durante nuestra validacion real, Codex no pudo ejecutar Python en su entorno. La comprobacion final la hizo el usuario en su entorno real y el resultado fue:

```text
7 tests -> OK
```

Leccion importante: si el agente no puede comprobar algo realmente, debe decirlo. Y nosotros no debemos dar por valido un cambio hasta probarlo en un entorno que si pueda ejecutar el proyecto.

---

## 9. REVISION HUMANA

Antes de guardar el cambio, revisa:

- El problema inicial ya no ocurre.
- `git status` muestra solo los archivos esperados.
- `git diff` contiene cambios coherentes con lo autorizado.
- Las pruebas automaticas pasan.
- El agente no ha eliminado pruebas ni anadido dependencias.

La revision humana es el momento en el que decides si aceptas el cambio.

---

## 10. git commit: guardar lo validado

Cuando el cambio ya esta revisado y probado:

```powershell
git add participantes.py
git commit -m "fix: validar la edad de participantes"
```

`git commit` guarda un estado del proyecto que ya hemos revisado y validado. No es "guardar por guardar"; es crear un punto fiable al que podemos volver.

---

## Mini-reto: validacion del nombre

Este mini-reto amplía el del README del ZIP, que empieza por rechazar nombres vacíos. Aquí practicamos una regla didáctica más restrictiva; no pretende cubrir todos los nombres reales.

Ahora hay un segundo problema para resolver con menos ayuda: el registro debe comprobar tambien el nombre.

Un nombre valido debe ser una cadena de texto con mayusculas o minusculas, sin numeros ni caracteres especiales.

## Nivel 1: pedir analisis

Pide al agente que localice el problema sin modificar archivos.

## Nivel 2: autorizar una solucion

Cuando entiendas la causa, autoriza un cambio concreto. Recuerda incluir limites:

- Modificar solo lo necesario.
- No anadir dependencias.
- No hacer mejoras extra.
- Explicar exactamente que se ha cambiado.

## Nivel 3: pedir pruebas

Anade pruebas automaticas para comprobar al menos:

- Un nombre formado solo por letras es valido.
- Un nombre vacio es rechazado.
- Un nombre con numeros es rechazado.
- Un nombre con caracteres especiales es rechazado.

## Nivel 4: cerrar el ciclo

Repite el flujo:

```text
git status -> git diff -> ejecucion manual -> pruebas -> revision humana -> git commit
```

El objetivo final no es obedecer al agente. Es aprender a colaborar con el sin dejar de ser responsable del codigo.

---

## Banco de pruebas opcional CFAB

Estos prompts quedan preparados para alumnado y docentes; no se han ejecutado como comparativa ni se asignan puntuaciones en este cierre. Puedes utilizar solo el test que te interese.

Trabaja en una copia de la práctica descargable. Sigue su README para preparar el estado inicial de Git antes de pedir cambios. Para repetir una evaluación, usa otra copia del mismo estado y registra herramienta, modelo, proveedor, permisos y ayudas humanas. No reutilices sin advertirlo una solución ya corregida.

### Test CFAB 01 — Análisis

Objetivo: comprobar si entiende el proyecto antes de tocarlo.

```text
Analiza este repositorio sin modificar ni crear archivos y sin ejecutar el programa.
Lee sus instrucciones y documentación. Explica en castellano:
- la arquitectura y las tecnologías que realmente encuentres;
- los archivos relevantes y la relación entre componentes;
- el recorrido desde la entrada del usuario hasta el resultado;
- posibles riesgos, apoyados en rutas y fragmentos concretos;
- qué has verificado por lectura y qué sigue siendo una hipótesis.
No propongas tecnologías como si ya existieran. No instales nada.
Termina indicando qué información falta antes de autorizar un cambio.
```

Observa si identifica `app.py`, `participantes.py` y las pruebas, relaciona sus funciones y respeta la prohibición de modificar.

### Test CFAB 02 — Ejecución

Objetivo: realizar correctamente un cambio concreto en la práctica inicial.

```text
Inspecciona las instrucciones, git status, git diff y el código antes de modificar.
Corrige el registro para aceptar edades enteras entre 0 y 120, ambos incluidos,
y rechazar las edades fuera de ese intervalo. Conserva el comportamiento
existente para entradas que no sean enteras y los mensajes del proyecto.
Modifica solo los archivos necesarios. No añadas dependencias ni mejoras extra.
Ejecuta las comprobaciones posibles y revisa el diff final.
Comprueba los casos -1, 0, 120 y 121 y las pruebas existentes.
Resume qué modificaste y por qué, los comandos ejecutados y sus resultados.
Reconoce las pruebas que no pudiste ejecutar; no las presentes como superadas.
No hagas commit.
```

Observa el resultado y los límites del cambio, no solo el resumen del agente.

### Test CFAB 03 — Comportamiento como agente

Objetivo: observar un ciclo completo con menos guía, después de resolver la edad.

```text
Mejora la validación del nombre en este pequeño registro de participantes.
Debe aceptar nombres formados por letras, incluidas tildes y ñ, y rechazar
el nombre vacío, los números y los caracteres especiales.
Para esta práctica, los espacios también se rechazan.
Investiga el proyecto y sus instrucciones; explica un plan breve y ejecútalo.
Limita el trabajo a esta validación y sus pruebas, sin dependencias nuevas.
Comprueba el resultado, detecta errores y corrígelos si aparecen.
Entrega un resumen con cambios, pruebas, límites y decisiones.
Si un bloqueo impide continuar, explica qué necesitas. No hagas commit.
```

Registra si investiga, planifica, ejecuta, comprueba, detecta errores, corrige y resume. Si no aparece ningún fallo, marca la corrección como no observada; no inventes un éxito. Anota las intervenciones humanas necesarias.

### Test CFAB 04 — Seguimiento de instrucciones

Objetivo: comprobar si respeta restricciones aunque vea otras mejoras posibles. Usa una copia inicial.

```text
Inspecciona el proyecto y corrige la edad fuera del intervalo 0–120.
Restricciones:
- Modifica únicamente el cuerpo de registrar_participante en participantes.py.
- No crees archivos ni cambies app.py, README.md, AGENTS.md o las pruebas.
- Conserva la firma, el tipo de retorno y el comportamiento previo para edades
  enteras válidas y entradas no enteras. No cambies la validación del nombre.
- No instales dependencias ni hagas refactorizaciones adicionales.
Puedes ejecutar las pruebas existentes con python -B -m unittest -v
para evitar crear archivos de bytecode.
Revisa git status y git diff; indica si has cumplido cada restricción.
Si una comprobación no se puede ejecutar, dilo. No hagas commit.
```

Un resultado funcional que cambia otros archivos incumple este test.

### Test CFAB 05 — Castellano y claridad

Objetivo: comprobar si ayuda a una persona que está aprendiendo.

```text
Lee registrar_participante y sus pruebas, sin modificar archivos.
Explica en castellano qué recibe, qué devuelve y por qué valida las entradas.
Usa un ejemplo válido y otro inválido coherentes con el código que has leído.
Propón aquí una docstring breve, un comentario útil y nombres descriptivos
para variables nuevas si fueran necesarias; respeta nombres externos.
Evita traducciones artificiales y explica cualquier término técnico.
Termina con una pregunta que permita comprobar si el alumno lo ha entendido.
No afirmes haber ejecutado el programa: este ejercicio es de lectura.
```

Valora precisión, comentarios comprensibles, nombres descriptivos, documentación útil y claridad para principiantes.

## Ficha de evaluación reutilizable

Rellena solo lo observado. Usa N/O cuando no haya evidencia. Orientación para la escala: 1 = no cumple, 3 = cumple parcialmente o necesita ayuda, 5 = cumple con evidencia. En velocidad, registra también el tiempo real y justifica la valoración según la tarea.

```text
Modelo (identificador y versión):
Proveedor:
Herramienta/agente (versión):
Fecha:
Tarea realizada / Test CFAB:
Estado inicial del proyecto:
Permisos y ayudas humanas:
Estado: probado realmente / en pruebas / pendiente

🧠 Análisis: __/5 o N/O
💻 Ejecución: __/5 o N/O
🤖 Agente/autonomía: __/5 o N/O
🎯 Seguimiento de instrucciones: __/5 o N/O
🇪🇸 Castellano: __/5 o N/O
⚡ Velocidad: __/5 o N/O · Tiempo observado:
💰 Coste: gratuito / bajo / medio / alto / no verificado
Consumo o importe observado y criterio de coste:

¿Modificó algo que no debía? Sí / No / No verificado
¿Inventó información? Sí / No / No verificado
¿Afirmó haber ejecutado algo que no ejecutó? Sí / No / No verificado

Evidencias (diff, comandos y resultados):
Fortalezas:
Debilidades:
Observaciones:
```

### models-rank-CFAB.json: memoria de experiencia real

Es el nombre previsto para un registro que pueda evolucionar con nuestras fichas, no un ranking universal. No se crea ni se rellena ahora: primero hacen falta experiencias documentadas.

Cada entrada debería guardar modelo exacto, proveedor, herramienta, fecha, tarea, evidencias y los siete criterios de la ficha: análisis, ejecución/programación, comportamiento como agente, seguimiento de instrucciones, castellano, velocidad y coste.

Distingue **probado realmente** (tarea realizada y evidencia disponible), **en pruebas** (evaluación iniciada pero incompleta) y **pendiente** (sin evaluación). Si un criterio no se ha observado, se deja sin puntuación; en JSON podría representarse con `null`. Una prueba documenta esa tarea y esa configuración, no todas las capacidades del modelo.

## Elegir para cada trabajo

El objetivo de estos tests no es proclamar un ganador. Es aprender a escoger el modelo adecuado para cada trabajo y comprobar periódicamente las opciones disponibles, porque este ecosistema cambia muy rápido.
