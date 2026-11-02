---
name: preparar-cambio
description: Preparar un cambio de cÃ³digo antes de editarlo: inspeccionar el proyecto, aclarar lo que falta, definir alcance y criterios de aceptaciÃ³n, y presentar un plan para autorizaciÃ³n humana.
---

# Preparar un cambio

Usa este procedimiento cuando la persona quiera crear o modificar cÃ³digo y todavÃ­a no exista un plan autorizado para ese cambio. Su resultado es una ficha breve y un plan; no implementes ni cierres el cambio dentro de esta preparaciÃ³n.

## 1. Inspeccionar sin efectos externos

- Lee las instrucciones aplicables, el README Ãºtil y el estado de Git.
- Inspecciona los archivos relacionados con la peticiÃ³n.
- Identifica las comprobaciones existentes y las que podrÃ­an aplicar.
- Inspecciona los intÃ©rpretes Python disponibles y reutiliza uno adecuado si existe.
- Separa hechos observados, requisitos expresados y suposiciones.
- No crees entornos, instales dependencias ni cambies configuraciÃ³n por rutina. No publiques ni ejecutes acciones con efectos externos para preparar el plan.
- Si no puedes ejecutar una comprobaciÃ³n con el entorno disponible, explica el impedimento y propone el siguiente paso.
- No inventes arquitectura, librerÃ­as, documentos, arneses ni convenciones.

## 2. Aclarar lo que falta

Averigua, solo cuando no pueda saberse leyendo el proyecto:

- quÃ© quiere conseguir la persona;
- quÃ© ocurre actualmente;
- quÃ© debe conservarse;
- cÃ³mo reconoceremos que funciona.

Pregunta de una en una y con lenguaje sencillo. No preguntes lo que ya estÃ© respondido. Si el objetivo o el alcance cambia, vuelve a aclarar solo lo que haya quedado invalidado.

## 3. Presentar la ficha

Muestra en la conversaciÃ³n:

- **Objetivo.**
- **SituaciÃ³n actual y evidencia.**
- **Alcance y lÃ­mites.**
- **Criterios de aceptaciÃ³n observables.**
- **Archivos que propones modificar.**
- **Comprobaciones disponibles y pendientes.**

En un proyecto nuevo, propone un README inicial solo si hace falta. En un proyecto existente, conserva el README Ãºtil y prepara la ficha del cambio en la conversaciÃ³n. No crees documentos automÃ¡ticamente.

Para este ejercicio, `unittest` forma parte de Python y puede ejecutarse directamente con `python -m unittest -v`. Un fallo del detector de pruebas del editor no demuestra que las pruebas no existan.

## 4. Proponer y esperar

Presenta un plan corto, ordenado y con sus comprobaciones. Espera autorizaciÃ³n antes de modificar cÃ³digo.

Si la persona ya aprobÃ³ ese plan y alcance, continÃºa sin repetir la preparaciÃ³n ni pedir la misma autorizaciÃ³n. Reabre las preguntas si cambia el objetivo, el alcance o aparece informaciÃ³n que invalida el plan.

Las consultas explicativas no requieren iniciar este procedimiento. Este procedimiento no concede permiso para instalar, hacer commits, crear tags, publicar ni realizar acciones externas.

Tras un cambio autorizado, pide y deja constancia de: archivo modificado, lÃ­neas cambiadas mediante `git diff` o comparaciÃ³n equivalente, comprobaciones ejecutadas y sus resultados, y elementos que siguen sin verificarse. Si no hay Git, no lo inicialices automÃ¡ticamente ni finjas disponer de `git diff`: muestra una comparaciÃ³n antes/despuÃ©s si conservaste el original y declara la limitaciÃ³n si no es posible.
