# Procedimiento reutilizable · revisar un cambio pequeño

Este documento es una guía Markdown del curso. No es una `skill` reconocida
automáticamente por ninguna herramienta: para reutilizarla hay que copiar sus
instrucciones o incorporarlas conscientemente al flujo del agente habitual.

## Cuándo aplicarlo

Úsalo cuando una comprobación se repite y quieres que otra persona o el agente
la pueda seguir sin inventar el alcance. No lo conviertas en una herramienta
nueva si una petición acotada basta.

## Caso real de B7

Proyecto: repositorio de participantes de EXP-02, sobre la copia descargada y
abierta por el alumno.

Necesidad: `registrar_participante` acepta edades negativas y mayores de 120.

### Petición al agente habitual

```text
En este repositorio, corrige solo la validación de edad de
registrar_participante en participantes.py.

QUIERO: edades entre 0 y 120 inclusive; fuera de ese intervalo debe devolverse
el mensaje de error que ya esperan las pruebas.
NO QUIERO: cambiar nombres, mensajes válidos, app.py, las pruebas ni añadir
dependencias.
Antes de tocar nada, explica un PLAN de pocos pasos. Espera mi OK.
Después muestra el diff y no declares el cambio correcto sin ejecutar las
pruebas.
```

### Especialización explícita, si merece la pena conservarla

No significa instalar otro agente. Es una responsabilidad acotada que puede
aplicarse con el agente habitual:

- Responsabilidad: revisar límites de entrada y proponer una corrección mínima.
- Contexto: `participantes.py`, `test_participantes.py`, entrada válida y dos
  bordes inválidos.
- Herramientas permitidas: leer archivos, proponer un diff pequeño, ejecutar
  `python -m unittest -v` y mostrar `git diff`.
- Límites: no tocar pruebas para hacerlas pasar, no añadir dependencias, no
  reescribir el repositorio ni aceptar cambios sin autorización.
- Resultado esperado: diff explicable, pruebas ejecutadas y decisión humana.

Si esta tarea ocurre una sola vez, la petición anterior es suficiente. Si se
repite en varios cambios, conserva este procedimiento y úsalo como plantilla.

## Procedimiento

1. Registrar estado inicial: `git status`, salida de `python app.py` y
   `python -m unittest -v`.
2. Escribir objetivo, archivo, función, límites y casos esperados.
3. Pedir PLAN al agente habitual y autorizarlo explícitamente.
4. Revisar el diff; comprobar que solo afecta al alcance pedido.
5. Ejecutar el programa y las pruebas.
6. Probar manualmente edad válida, `-15` y `130`.
7. Comparar salida esperada y real.
8. Decidir `ACEPTO`, `MODIFICO` o `RECHAZO` y registrar el motivo.

## Entrega y evidencia

Entrega la petición usada, el procedimiento aplicado, `git diff`, salida de las
pruebas, los tres casos manuales y la decisión final. Separa siempre:

- el agente propone o modifica;
- el código ejecuta y comprueba reglas;
- la persona revisa, contrasta y decide.

Compara al final el coste inicial de escribir la plantilla con su utilidad,
reutilización y mantenimiento. Si mantenerla cuesta más que repetir una
petición clara, no la conserves.
