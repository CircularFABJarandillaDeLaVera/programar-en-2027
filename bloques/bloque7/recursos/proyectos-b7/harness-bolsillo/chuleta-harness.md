# Chuleta - Harness de bolsillo (1 pagina)

Del prompt al control. Llevala a tus proyectos.

## ANTES DE PROGRAMAR

```text
1. QUE QUIERO (1-3 frases):
   archivo: ______  funcion: ______  objetivo: ______

2. QUE NO QUIERO:
   [ ] sin nuevas dependencias  [ ] no reescribir todo
   [ ] no cambiar formato        [ ] no tocar: ______

3. COMO SABRE QUE FUNCIONA (3-5 criterios):
   entrada ______ -> salida esperada ______
```

## DURANTE

```text
- Repo = verdad: mira antes de pedir.
- Una tarea cada vez. Estado: pendiente / en curso / verificado / bloqueado.
- Pide PLAN primero. Sin tu OK no hay codigo:
  OK - seguir / NO - ajustar: ______
- Cambios pequenos.
```

## DESPUES

```text
1. EJECUTAR (comprobar.py + caso manual).
2. VERIFICAR: APTO / NO_APTO / NO_VERIFICADO.
   "La IA dice que funciona" no es evidencia.
   Verde no demuestra todo. No probado = NO_VERIFICADO, no fallo.
3. REVISAR (otro ojo): supuestos / bordes / pedido vs hecho.
4. DECIDIR TU: ACEPTO / MODIFICO / RECHAZO.
   No defiendas lo que no entiendes.
```

## ARNÉS FUNCIONAL

`comprobar.py` informa; no corrige ni sustituye la revisión humana.

```text
BASE: ejecuta primero y conserva la salida.
CAMBIO: una función y una regla cada vez.
FALLO: comprueba que aparece el NO_APTO previsto.
CORRECCIÓN: ejecuta de nuevo y compara la salida.
CIERRE: APTO / NO_APTO / NO_VERIFICADO + decisión humana.
```

Regresión, desde la carpeta donde descomprimiste el ZIP:

```text
1. Con las correcciones aplicadas: python comprobar.py -> 5 APTO, 0 NO_APTO, 1 NO_VERIFICADO.
2. Cambia temporalmente stock > 10 por stock >= 10 en valor_total.
3. Ejecuta de nuevo -> descuento_stock_alto y borde_stock_10 = NO_APTO; resumen 3 APTO, 2 NO_APTO, 1 NO_VERIFICADO.
4. Restaura stock > 10 y ejecuta otra vez -> vuelve a 5 APTO, 0 NO_APTO, 1 NO_VERIFICADO.
```

Es una regresión de código válida, no un error de sintaxis. No edites `comprobar.py` para hacerla pasar.

- APTO: el criterio automático se cumple.
- NO_APTO: el criterio automático falla; investiga antes de aceptar.
- NO_VERIFICADO: el arnés no lo ha probado; sigue pendiente, no es un aprobado.

La persona comprueba también el diff, el alcance del cambio, los casos límite y si los criterios representan el encargo.

Si se repite, conviertelo en regla / procedimiento / futura skill.
