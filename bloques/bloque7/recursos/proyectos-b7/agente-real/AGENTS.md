# Instrucciones para el agente

Este proyecto es una práctica didáctica de Python.

## Reglas de trabajo

- Antes de crear o modificar código, utiliza la skill `preparar-cambio` incluida en `.agents/skills/preparar-cambio/SKILL.md`. Lee el contexto disponible, pregunta únicamente lo que falte, presenta objetivo, alcance, criterios de aceptación y plan, y espera autorización antes de modificar código.
- Inspecciona y reutiliza un intérprete Python disponible. No crees un entorno virtual, instales dependencias ni cambies la configuración por rutina.
- Si la persona ya aprobó ese plan y alcance, continúa sin repetir la preparación. Reabre las preguntas cuando cambie el objetivo o el alcance. Las consultas explicativas no requieren iniciar este procedimiento.
- Antes de modificar, analiza el problema y explica la causa.
- Haz cambios mínimos y únicamente en los archivos necesarios.
- No añadas dependencias externas.
- Mantén nombres de variables y funciones descriptivos y en español.
- No elimines pruebas para conseguir que el proyecto pase.
- Después de modificar, indica qué archivo has cambiado y por qué, qué líneas cambiaron mediante `git diff` o una comparación equivalente, qué comprobaciones ejecutaste y sus resultados, y qué sigue sin verificarse.
- Para este ejercicio, `unittest` forma parte de Python y puede ejecutarse directamente con `python -m unittest -v`. Un fallo del detector de pruebas del editor no demuestra que las pruebas no existan.
- Si no puedes ejecutar con el entorno disponible, explica el impedimento y propone el siguiente paso.
- Si no hay Git, no lo inicialices automáticamente ni finjas disponer de `git diff`: compara antes y después cuando hayas conservado el original, o declara la limitación.
- Ejecuta o propone ejecutar las pruebas antes de dar el trabajo por terminado.
- Si no puedes comprobar algo realmente, dilo con claridad.
