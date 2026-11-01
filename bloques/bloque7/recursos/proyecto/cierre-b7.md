# Material de cierre B7 · evidencia y defensa

Este material es opcional y no constituye una cuarta práctica ni una base de
proyecto nueva. Elige un proyecto que ya funcione, preferiblemente la copia de
`agente-real` de EXP-02, y demuestra una intervención pequeña y comprobable.

## Objetivo

Demostrar que la persona gobierna el trabajo asistido por IA: planifica, pide
ayuda acotada, inspecciona, ejecuta, depura, modifica, valida y decide.

## Intervención recomendada

- Objetivo: corregir la validación de edad de `registrar_participante`.
- Contexto: `participantes.py`, `test_participantes.py`, entradas válida, `-15`
  y `130`.
- Límites: no tocar las pruebas para hacerlas pasar, no añadir dependencias ni
  cambiar archivos fuera del alcance.
- Verificación: `python app.py`, `python -m unittest -v`, casos manuales y
  `git diff`.

El agente propone o modifica. El código ejecuta y comprueba. La persona revisa
el diff, contrasta la salida y decide `ACEPTO`, `MODIFICO` o `RECHAZO`.

## Evidencia opcional

- petición y procedimiento utilizados;
- salida antes y después;
- pruebas ejecutadas;
- diff revisado;
- registro de decisiones;
- explicación oral de lo que se delegó y lo que se comprobó.

Si eliges otro proyecto de B7, conserva sus comandos y dependencias reales. No
prometas PDF, navegador, modelo local ni otra capacidad que ese proyecto no
produzca. LangGraph sigue siendo una ampliación opcional pendiente de
validación específica.
