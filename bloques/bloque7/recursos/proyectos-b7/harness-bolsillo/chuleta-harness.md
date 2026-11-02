# Chuleta - Harness de bolsillo

Del prompt al control. Úsala durante EXP-01.

## ANTES DE PROGRAMAR

```text
1. QUÉ QUIERO (1-3 frases):
   archivo: ______  función: ______  objetivo: ______

2. QUÉ NO QUIERO:
   [ ] sin nuevas dependencias  [ ] no reescribir todo
   [ ] no cambiar formato        [ ] no tocar: ______

3. CÓMO SABRÉ QUE FUNCIONA (3-5 criterios):
   entrada ______ -> salida esperada ______
```

## DURANTE

```text
- Lee el programa, el comprobador y los datos antes de pedir.
- Una tarea cada vez. Estado: pendiente / en curso / verificado / bloqueado.
- Pide PLAN primero. Revisarlo no autoriza cambios.
  OK - seguir / NO - ajustar: ______
- Autoriza después de revisar. Cambios pequeños.
```

## DESPUES

```text
1. EJECUTAR (programa + comprobar.py).
2. VERIFICAR: APTO / NO_APTO / NO_VERIFICADO.
   "La IA dice que funciona" no es evidencia.
   Verde no demuestra todo. No probado = NO_VERIFICADO, sigue pendiente.
3. REVISAR (otro ojo): supuestos / bordes / pedido vs hecho.
4. DECIDIR TU: ACEPTO / MODIFICO / RECHAZO.
   No defiendas lo que no entiendes.
```

## ARNÉS FUNCIONAL

`comprobar.py` informa; no corrige ni sustituye la revisión humana.

```text
BASE: ejecuta primero y conserva la salida.
PLAN: pide un plan y espera tu OK explícito.
CAMBIO: autoriza solo el archivo y la regla acordados.
FALLO: comprueba que aparece el NO_APTO previsto.
CORRECCIÓN: ejecuta de nuevo y compara la salida.
CIERRE: APTO / NO_APTO / NO_VERIFICADO + decisión humana.
```

Regresión, desde la carpeta donde descomprimiste el ZIP:

```text
1. Tras las dos correcciones: `python comprobar.py` -> 5 APTO, 0 NO_APTO, 1 NO_VERIFICADO.
2. Cambia temporalmente `if pieza["stock"] > 10:` por `if pieza["stock"] >= 10:`.
3. Ejecuta de nuevo -> `descuento_stock_alto` y `borde_stock_10` = NO_APTO; resumen 3 APTO, 2 NO_APTO, 1 NO_VERIFICADO.
4. Restaura `stock > 10` y ejecuta otra vez -> vuelve a 5 APTO, 0 NO_APTO, 1 NO_VERIFICADO.
```

Es una regresión de código válida, no un error de sintaxis. No edites `comprobar.py` para hacerla pasar.

- APTO: el criterio automático se cumple.
- NO_APTO: el criterio automático falla; investiga antes de aceptar.
- NO_VERIFICADO: el arnés no lo ha probado; sigue pendiente, no es un aprobado.

La persona comprueba también el diff, el alcance del cambio, los casos límite y si los criterios representan el encargo.

Si se repite, conviértelo en regla o procedimiento.
