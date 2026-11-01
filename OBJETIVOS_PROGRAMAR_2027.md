# Objetivos y microfases para revisar Programar en 2027

Fecha: 1 de noviembre de 2026.
Estado: encargo de trabajo para Codex. La web todavía no se ha modificado con este plan.
Propietario de las decisiones docentes: técnico de Circular FAB Jarandilla de la Vera.

## 1 Resultado que queremos conseguir

Una persona que llega al curso debe saber, sin depender constantemente del docente, qué preparar, qué ruta elegir, qué práctica hacer, cómo comprobar su resultado y qué hacer después.

El curso debe servir tanto a quien quiere crear proyectos con agentes de IA como a quien quiere aprender programación con Python. Las instrucciones, los archivos descargados, los cuadernos y el copiloto deben describir el mismo itinerario.

Al terminar B7, la persona debe saber decidir cuándo basta una petición al agente que ya utiliza, cuándo conviene configurar un agente especializado, cuándo merece la pena preparar una habilidad reutilizable (skill) y cuándo necesita un arnés de trabajo y comprobación, visual, funcional o de otro tipo. Después puede continuar con el Recorrido práctico para comprender un ecosistema de herramientas y construir sistemas conectados.

## 2 Dónde trabajamos y qué papel tiene EduSDK

Trabajar desde VS Code con Codex sobre el repositorio existente de Programar en 2027. Si el curso está dentro de un espacio de trabajo EduSDK, identificar la carpeta y el repositorio exactos del curso y limitar las operaciones a ellos.

Mantener el sistema de diseño EduSDK ya integrado, sus recursos compartidos, la identidad Circular FAB y los contratos funcionales existentes. Consultar primero AGENTS.md y las instrucciones locales aplicables.

La revisión examinada contiene generador-bloques-base/ y assets/edusdk-design-system/. El generador sirve de referencia y para crear piezas nuevas cuando esté justificado. No regenerar en bloque un curso existente ni sobrescribir sus páginas personalizadas. Si hace falta corregir EduSDK o su generador, proponer una microfase específica en el repositorio adecuado y señalar qué otros cursos podrían verse afectados.

No instalar dependencias, cambiar modelos, añadir servicios de pago o modificar otros proyectos por iniciativa propia.

## 3 Decisiones docentes acordadas

### Entrada común

El usuario pulsa «Empezar por aquí», configura su entorno y realiza una comprobación mínima. Después elige cómo avanzar.

### Ruta A Crear proyectos con agentes

Pensada para quien prioriza construir algo útil sin empezar por estudiar sintaxis. Ofrece prácticas guiadas, peticiones acotadas al agente, revisión humana y comprobaciones. Los cuadernos se pueden consultar cuando hagan falta, sin bloquear esta ruta.

Puede reutilizarse la práctica inicial de participantes publicada actualmente, si su guía permite empezar sin conocimientos previos. Debe presentarse como práctica inicial y mostrar un siguiente paso explícito.

### Ruta B Aprender programación con Python

Pensada para quien quiere estudiar los fundamentos y comprender el lenguaje. Los cuadernos constituyen su recorrido de aprendizaje y conectan con las prácticas aplicadas de B3, B4 y B5.

### Tres prácticas aplicadas y continuación

Ambas rutas deben situar con claridad estas prácticas:

| Nombre heredado | Nombre público acordado | Relación |
| --- | --- | --- |
| SAMI-Lite | Proyecto aplicado 1 · Calcula y guarda precios | B3 |
| SAMI-OOP | Proyecto aplicado 2 · Organiza productos con clases | B4 |
| SAMI-Applied | Proyecto aplicado 3 · Crea un informe PDF con tus datos | B5 |

En el proyecto aplicado 1 de B3 se incorpora una transformación visual temprana: después de ejecutar la consola, el alumno pide al agente una interfaz de escritorio y comprueba que sigue usando los mismos cálculos y archivos. El docente confirma que esta actividad ya produjo un efecto WOW en clase. Se trata de una experiencia observada por el docente, no de una ejecución de la interfaz certificada en esta auditoría.

Después de las tres prácticas, continuar hacia B6 para ampliar las herramientas de trabajo y después hacia B7.

B6 debe relacionar entorno, dependencias, depuración, Git y herramientas adicionales como Docker. Revisar la ubicación y requisitos de los recursos existentes antes de enlazarlos o incorporarlos; Docker está actualmente en el Laboratorio, no en las seis experiencias de B6 examinadas.

B7 debe culminar en una decisión argumentada sobre agentes, habilidades, arneses y, cuando proceda, orquestación. Marcar las partes pendientes como «En desarrollo». La existencia de materiales aislados no acredita que el bloque completo esté terminado.

### Después de B7 Recorrido práctico

Nombre general: «Recorrido práctico».
Título: «Construye y conecta tus proyectos».

Texto propuesto:

> Aprende a convertir un programa en una aplicación que guarda datos, conecta herramientas y puede utilizarse desde distintos dispositivos. Descubre para qué sirve cada pieza, cómo se relaciona con las demás y cuándo merece la pena incorporarla a tu proyecto.

Sustituir «De estudiante a developer» y «Trabajar como developer» por nombres descriptivos en español. Para la primera etapa, utilizar «Trabaja con control».

| Etapa propuesta | Necesidad que explica |
| --- | --- |
| Trabaja con control | Colaborar con un agente, revisar, comprobar y guardar cambios |
| Haz que tus programas se comuniquen | Ofrecer funciones a otras aplicaciones y preparar un entorno reproducible |
| Guarda y recupera información | Utilizar datos persistentes cuando el proyecto lo necesita |
| Crea una aplicación que otras personas puedan usar | Conectar pantallas, datos, acceso de usuarios y uso desde distintos dispositivos |
| Conecta tu aplicación con otros sistemas | Intercambiar información con servicios, sensores y aplicaciones |
| Incorpora IA donde aporte valor | Integrar ayuda inteligente con comprobaciones y control humano |

Mapear estas etapas sobre las experiencias existentes. Reordenar o enlazar sin borrar recursos útiles. Un recurso introductorio de agentes o Docker puede reutilizarse antes y aparecer después como consulta o profundización; indicar «ya lo has trabajado» y ofrecer saltarlo cuando proceda. No obligar a repetir una misma práctica ni simular que contenidos compartidos son proyectos nuevos.

Resultado final: «Sé reconocer las piezas que necesita mi proyecto, explicar cómo se conectan y elegir cuáles merece la pena utilizar».

## 4 Reglas de claridad para todas las prácticas

Cada guía, página y README debe responder:

1. Dónde estoy y qué resultado voy a conseguir.
2. Qué herramientas necesito y qué conocimientos previos son imprescindibles.
3. Qué archivo descargo, qué carpeta abro y si es una base nueva o una continuación.
4. Qué hago ahora, con pasos concretos y una acción principal visible.
5. Cómo ejecuto el proyecto desde la carpeta correcta.
6. Qué salida espero y qué casos compruebo.
7. Qué hago si falla y qué información aporto al pedir ayuda.
8. Cuándo he terminado y cuál es el siguiente paso.

Usar español en títulos, botones y explicaciones. Introducir los términos técnicos que haga falta conservar con una explicación breve. Mantener identificadores técnicos cuando cambiarlos rompa compatibilidad sin aportar claridad.

La numeración visible corresponde al itinerario del usuario, no al número heredado del archivo. Un enlace 07-agentes-programacion.html puede conservar su ruta sin mostrar «experiencia 7» como primera práctica.

## 4.1 Transformación visual del primer proyecto aplicado

Título del paso en la práctica: «Convierte tu programa en una aplicación con ventana».

Ubicación: después de conseguir la primera ejecución correcta de consola y reconocer las funciones y los archivos; antes de la profundización y de pasar al proyecto aplicado 2. En la ruta con agentes, ofrecerlo como un paso guiado destacado. En la ruta de programación, relacionarlo con la separación entre interfaz, lógica y persistencia sin exigir estudiar ahora toda la programación gráfica.

Secuencia: ejecuta la consola → pide una interfaz al agente → abre la ventana → comprueba el mismo cálculo y registro → explica qué cambió y qué se reutilizó.

El prompt siguiente es una reconstrucción para esta revisión. No se ha recuperado el texto literal que se utilizó en clase ni se ha confirmado qué biblioteca empleó aquella interfaz. Tkinter y su módulo ttk son la propuesta para esta versión; son herramientas de Python para interfaces gráficas, no una skill. Pillow solo sería necesario si se incorporase tratamiento de imágenes; esta práctica inicial no lo necesita. No introducir CustomTkinter u otras dependencias para lograr el primer resultado.

### Prompt que debe incluirse en la guía y el README

```text
Estoy haciendo mi primera práctica de programación con ayuda de un agente.
Quiero convertir este programa de consola de productos y precios en una
aplicación con una ventana clara y agradable de usar.

Lee primero los archivos actuales y comprueba cómo se conectan main.py,
analizador.py y persistencia.py. Revisa el estado y las diferencias de Git
si esta carpeta está bajo control de versiones. Conserva mis cambios previos.

Implementa una interfaz en interfaz.py usando Tkinter y tkinter.ttk.
Comprueba primero que Tkinter está disponible en el intérprete elegido.
Si falta, explica cómo resolverlo en mi sistema; no intentes instalarlo
con pip ni cambies de tecnología automáticamente.

La ventana debe tener:
- Un título en español que explique que calculamos y guardamos precios.
- Campos con etiquetas claras para nombre del producto y precio base.
- Un botón principal «Calcular y guardar».
- Un resultado visible con el precio final y el estado de la alerta.
- Botones «Limpiar» y «Salir» y mensajes de error fáciles de entender.
- Buena legibilidad, separación entre elementos, tamaño de ventana razonable,
  orden de tabulación y un uso discreto de verde en la acción principal.

Reutiliza las funciones existentes para cargar la configuración, calcular,
evaluar la alerta y guardar la operación. En esta copia, comprueba si puedes
reutilizar procesar_transaccion en vez de repetir sus pasos en la interfaz.
Una pulsación debe guardar una sola operación. Reutiliza el registro de errores.

Mantén la entrada por consola y sus resultados. No cambies los cálculos,
los umbrales, el formato del CSV ni las reglas de precios para añadir la ventana.
Separa los mensajes y la conversión de entradas de la lógica de negocio.
No abras la ventana ni arranques el menú al importar un módulo.

No añadas imágenes, servicios externos ni dependencias nuevas. Añade comentarios
breves en español cuando ayuden a entender cómo se conecta la interfaz.

Explica brevemente el plan y realiza este cambio acotado. Después indica:
1. Qué archivos has creado o modificado y para qué sirve cada uno.
2. La carpeta desde la que debo ejecutar y el comando para abrir interfaz.py.
3. Cómo comparar el resultado con main.py y revisar los archivos generados.
4. Qué has comprobado realmente y qué debo comprobar yo en la ventana.

Prueba o guíame para probar un producto de precio 50, una entrada no numérica,
precios 0 y negativos, limpiar campos y cerrar la ventana.
Describe el comportamiento real. Si detectas que la regla actual acepta
precios no positivos, señálalo como un cambio funcional posterior; no lo
corrijas silenciosamente en esta tarea visual. No hagas commit ni publiques.
```

### Comprobaciones del paso visual

- En una copia nueva con IVA predeterminado del 21 %, un precio de 50 debe dar 60.5 tanto en consola como en ventana. Si la configuración cambió, usar su tasa real y recalcular la expectativa.
- Comparar el registro generado por una operación de consola y otra equivalente en la ventana. Se esperan dos operaciones en total, una por ejecución, no un único registro entre ambas ni duplicados por una pulsación.
- Comprobar que una entrada no numérica muestra un error, no registra una transacción válida y permite volver a intentarlo. Revisar el registro de errores cuando corresponda.
- Confirmar que la ventana no necesita atender preguntas ocultas en la terminal.
- Revisar que las rutas de configuración, CSV y registro son las mismas al ejecutar desde la carpeta indicada.
- Comprobar limpiar, tabulación, redimensionado razonable y cierre sin procesos colgados.
- Diferenciar comprobación del código y prueba real de ventana. Si no se puede mostrar, declararla pendiente de revisión humana; no certificar el aspecto con una comprobación de sintaxis.

### Pequeño reto posterior para revisar una regla

Tras comprobar la transformación visual, investigar con el alumno los precios 0 y negativos. Si se acuerda rechazarlos, encargar un cambio funcional separado que aplique la regla en la lógica compartida y comprobar tanto consola como ventana. No limitar la corrección a interfaz.py dejando que el mismo dato entre por main.py.

Objetivo humano: «He transformado mi programa en una aplicación que puedo manejar y sé comprobar que sigue haciendo lo mismo». El efecto visual sirve de entrada a la comprensión de responsabilidades y a la revisión de cambios.

Referencia técnica: https://docs.python.org/es/3.13/library/tkinter.html

## 5 Retirada de nombres heredados

Retirar SAMI y sus variantes de la identidad pública de las actividades. Sustituirlas por el resultado o la responsabilidad concreta. No buscar una nueva expansión para justificar la sigla.

En B6, usar «Herramientas para trabajar con tus proyectos» y un nombre descriptivo para su proyecto base. No añadir una cuarta práctica aplicada equivalente a las tres de B3 a B5.

Revisar el cierre heredado de B7 con los datos y proyectos de la ruta elegida. No atribuir a B6 o B7 funcionalidades que no estén conectadas y comprobadas.

Actualizar páginas, títulos de documentos, botones, mensajes, salidas, celdas Markdown de cuadernos, mapas, archivos JS y JSON, guías docentes, copiloto, PDF de preparación y ZIP.

Las fuentes históricas pueden conservar sus nombres si están identificadas como antecedentes y no se presentan al alumno como instrucciones vigentes. No reescribir el historial de Git para eliminar la palabra. Mantener un listado de excepciones técnicas justificadas y enlaces compatibles cuando haga falta.

## 6 Evidencia de partida que hay que contrastar en el equipo local

La auditoría se realizó sobre main, commit 47f708fe307584d67f4e8e0712fe8e9e43c20d32, del 29 de octubre de 2026. La portada y otras ocho páginas publicadas coincidían con esa revisión.

Se inventariaron 131 archivos de texto con coincidencia en su contenido o ruta, 587 apariciones textuales, cinco ZIP y la guía PDF de preparación. Son datos de esa revisión, no un criterio para forzar los mismos recuentos en otra copia.

Hallazgos prioritarios:

- La portada declara opcionales los cuadernos, mientras B3 y B4 los presentan como acceso previo al proyecto; B5 antepone el cuaderno de datos.
- El inicio deriva al «Recorrido completo» dentro de una sección que se presenta como «Laboratorio opcional».
- La primera práctica muestra «Experiencia 7» y enlaza hacia atrás a RAG.
- El ZIP B3 difiere de la carpeta práctica en analizador.py y README_PROYECTO.md. La función comprobar_transaccion existe en la copia examinada del repositorio y falta en ese ZIP.
- B6 muestra un resumen en consola; su flujo principal no genera un PDF.
- B7 publica seis experiencias y cuatro proyectos; otra guía separada presenta un cierre progresivo todavía no integrado de forma coherente.
- LangGraph básico ya existe: página EXP-05, ZIP y carpeta langgraph-taller con código y pruebas. En la auditoría pasaron siete pruebas y se omitió una por faltar langgraph. El grafo completo quedó sin verificar.
- El manual RAG usa SAMI con otro significado y también debe revisarse con su ZIP.

Consultar como apoyo el documento «propuesta_clarificar_practicas_programar_2027.docx». Las decisiones de este archivo incorporan el acuerdo posterior sobre «Construye y conecta tus proyectos» y precisan qué va antes y después de B7.

## 7 Método de trabajo por microfases

Cada encargo a Codex señalará una microfase, el resultado, los archivos permitidos y las comprobaciones. Se ejecuta la microfase encargada, se valida y se entrega para revisión antes de encargar la siguiente.

La autorización de una microfase cubre las acciones reversibles necesarias dentro de su alcance. No pedir confirmación repetida para leer, editar o comprobar lo ya encargado. Si surge un cambio fuera de alcance, explicar qué lo hace necesario y dejarlo separado.

Antes de editar, comprobar estado y diferencias de Git. Preservar cambios ajenos y trabajo sin commit. No recuperar, borrar, sobrescribir ni reorganizar automáticamente archivos del usuario.

Al cerrar cada microfase, informar:

- Qué problema se resolvió y qué cambió para el usuario.
- Archivos afectados y diferencias importantes.
- Comprobaciones ejecutadas, resultado y límites.
- Qué hay que revisar visualmente y qué permanece pendiente.
- Microfase siguiente recomendada.

Mantener un seguimiento breve con pendiente, en curso, verificado y pendiente de revisión humana. Elegir un único documento de seguimiento, preferiblemente el existente si sirve, y evitar planes duplicados.

## 8 Microfases propuestas

### Microfase 0 Confirmar la copia local y cerrar el mapa

Solo auditoría y propuesta. Identificar repositorio, rama, commit, cambios locales, AGENTS.md y validaciones disponibles. Contrastar la auditoría con esa copia. Dibujar el recorrido con enlaces y recursos reales. Identificar las fuentes de cada descarga y los materiales compartidos entre etapas. Presentar los archivos propuestos para la siguiente microfase. No cambiar todavía la web, regenerar ZIP o instalar dependencias.

### Microfase 1 Crear las entradas de las dos rutas

Aplicar preparación común y elección entre agentes y cuadernos. Hacer visibles las tres prácticas aplicadas y su continuación hacia B6 y B7. Separar el acceso al Recorrido práctico posterior sin bloquear el acceso libre al contenido. Actualizar únicamente los índices y textos imprescindibles para esta entrega. Comprobar rutas y uso en pantalla pequeña.

### Microfase 2 Revisar el proyecto aplicado 1 de B3

Renombrar su presentación, escribir una guía que permita entrar directamente y resolver la divergencia entre carpeta y ZIP. Revisar la fuente de autor antes de sincronizar. Comprobar ejecución desde una copia limpia, mensajes, CSV, registro de errores y presencia de las funciones que enseña la guía. Incluir el paso «Convierte tu programa en una aplicación con ventana» y el prompt del apartado 4.1, con instrucciones y comprobaciones en la web y el README descargado. El alumno genera la interfaz a partir de la consola; no sustituir la base por la interfaz ya terminada de otra variante. Mantener separados el cambio visual y la corrección posterior de las reglas de precios. Si el alcance resulta demasiado grande, cerrar primero la base y ejecutar la incorporación del paso visual como microfase 2B antes de continuar con B4.

### Microfase 3 Revisar el proyecto aplicado 2 de B4

Clarificar qué base se abre, cómo se ejecuta y cómo se relaciona con B3. Dar instrucciones diferenciadas para la ayuda con agentes y el estudio de programación sin duplicar el proyecto. Validar ejemplos de clases y responsabilidades con datos concretos. Mantener visibles las reglas que se modifican como reto y no presentar su resultado como comportamiento inicial.

### Microfase 4 Revisar el proyecto aplicado 3 de B5

Clarificar dependencias, CSV de entrada, ejecución, análisis e informe. Actualizar títulos y, si se aprueba en el encargo, el nombre de salida a informe_productos.pdf en código, comprobador y guías a la vez. Comprobar el PDF de forma automática y visual. Playwright no debe convertirse en requisito de la generación desde CSV.

### Microfase 5 Revisar B6 y el acceso a herramientas adicionales

Conectar B6 con las tres prácticas. Revisar sus seis experiencias, carpeta base, entorno, depuración y Git. Integrar el acceso a Docker y otros apoyos existentes solo donde exista una necesidad explicada, con requisitos claros. Elegir qué se enseña aquí y qué se profundiza después para evitar repeticiones. No prometer PDF si la base solo produce consola.

### Microfase 6 Auditar y fijar el cierre de B7

Revisar las seis experiencias y sus cuatro proyectos, las guías de arnés y el cierre heredado. Crear una matriz de contenido disponible, contenido probado, lagunas y adaptación necesaria. Incluir elección entre petición puntual, agente especializado, habilidad reutilizable, arnés y orquestación. Definir prácticas mínimas y requisitos antes de desarrollar lo que falte. Conservar como «En desarrollo» las partes no cerradas.

### Microfase 7 Completar agentes y habilidades en B7

Usar un caso cercano y pequeño para distinguir quién ejecuta el trabajo y qué procedimiento reutilizable necesita. Explicar cuándo basta el agente existente. Preparar una práctica con entregable observable y criterios de coste, mantenimiento y reutilización. No exigir instalar múltiples herramientas ni crear habilidades personales en cuentas externas del alumnado.

### Microfase 8 Completar los arneses en B7

Reutilizar un proyecto pequeño que ya funcione. Mostrar un arnés funcional y uno visual cuando aporte valor. Una referencia visual inicial requiere revisión humana; provocar un cambio controlado debe producir una diferencia detectable. No aprobar nuevas capturas automáticamente para que las pruebas pasen. Explicar qué valida el arnés y qué sigue revisando la persona. Evitar convertir un sistema grande de pruebas en requisito de iniciación.

### Microfase 9 Verificar LangGraph y completar su papel en B7

Verificar primero la práctica existente y su instalación en el entorno de destino. Comprobar estado, nodos, rutas y resultado. Diferenciar el grafo sin modelo de lenguaje de una ampliación con IA y de un sistema multiagente. Acordar y desarrollar únicamente el incremento necesario para los objetivos de B7. Referencias de apoyo ya acordadas: ebook LIDR «De Developer a AI Engineer», especialmente capítulos 5 a 8, y https://github.com/LIDR-ai/lidr-it-estimator-demo. Consultarlas cuando sean necesarias; no importar su complejidad como requisito del curso.

### Microfase 10 Ordenar el Recorrido práctico posterior

Aplicar «Construye y conecta tus proyectos» y los seis nombres de etapas. Mapear las experiencias actuales y sus dependencias. Seguir un hilo comprensible, por ejemplo el control horario ya existente, desde programa hasta aplicación conectada. En cada etapa explicar necesidad, pieza, conexiones, comprobación y cuándo se puede prescindir de ella. Identificar lo ya trabajado en la iniciación y ofrecer continuidad sin repetición obligatoria.

### Microfase 11 Sincronizar los materiales de apoyo

Completar la retirada de nombres heredados en cuadernos, datos JS y JSON, mapas, instrucciones, páginas auxiliares, guía PDF y copiloto. Actualizar fuentes vigentes y clasificar antecedentes históricos. Regenerar el ZIP del copiloto y comprobar que no vuelve a introducir la secuencia antigua. Los ZIP de cada proyecto ya deben haberse revisado en sus microfases, no aplazar toda su coherencia hasta esta fase.

### Microfase 12 Revisar con personas y preparar la publicación

Recorrer ambas rutas desde una copia limpia. Comprobar enlaces, descargas y proyectos afectados, móvil y escritorio, claridad de los pasos y ausencia de regresiones visuales. Pedir a personas nuevas que intenten avanzar y registrar bloqueos reales. Corregirlos en cambios pequeños. Presentar el estado final, pendientes y versión propuesta. Commit, tag, push y publicación se realizarán solo cuando el usuario los encargue expresamente.

## 9 Criterios de aceptación globales

- El usuario identifica dónde comenzar, qué ruta le conviene y cuál es el siguiente paso.
- La ruta con agentes no exige terminar cuadernos para acceder a las tres prácticas.
- La ruta de programación conserva la progresión de cuadernos y explica dónde se aplica.
- Las tres prácticas tienen nombres descriptivos, archivos correctos y comprobaciones reproducibles.
- B3 incluye un prompt copiable para generar su interfaz, explica qué archivo ejecutar y permite comparar consola, ventana y registros sin duplicar operaciones.
- El paso hacia B6 y B7 está explicado; el Recorrido práctico se presenta como continuación posterior.
- El final de B7 permite justificar cuándo conviene cada apoyo y cuándo su coste no compensa.
- El Recorrido práctico enseña relaciones y necesidades; no es una lista de herramientas sin propósito.
- Páginas, descargas, guías y copiloto describen la misma versión.
- Las coincidencias históricas o técnicas conservadas están justificadas. No reaparecen como nombres públicos de las actividades actuales.
- Las comprobaciones indican qué se ejecutó y qué quedó sin verificar. No se heredan recuentos de pruebas antiguas como evidencia actual.
- El diseño Circular FAB y las funciones existentes se mantienen utilizables.

## 10 Coste y prioridad

La auditoría previa estimó de 11 a 18 horas para orientar, renombrar, sincronizar y revisar, sin incluir desarrollar las ampliaciones B6 y B7. Es una estimación provisional, no una duración garantizada.

Antes de cada microfase, indicar el problema que resuelve, el trabajo que reutiliza, el esfuerzo previsto y cómo se observará la mejora. Priorizar que el alumnado pueda empezar y ejecutar las tres prácticas. Estimar por separado las prácticas nuevas, dependencias y mantenimiento de B7. No contratar herramientas ni prolongar experimentos solo por interés técnico.

Medir dudas repetidas, minutos de ayuda docente, tiempo hasta la primera ejecución correcta y puntos de abandono. Comparar el valor obtenido con el coste total de la solución.

## 11 Primer encargo para Codex

Ejecutar únicamente la microfase 0. Este archivo define el objetivo completo, pero no autoriza a implementar las trece microfases en una sola intervención.

Entrega esperada: diagnóstico breve del repositorio local, diferencias respecto a la auditoría, mapa de rutas con recursos reales, material reutilizable, lagunas de B6 y B7, y lista concreta de archivos que se propone tocar en la microfase 1. Todavía no modificar la web ni las descargas.
