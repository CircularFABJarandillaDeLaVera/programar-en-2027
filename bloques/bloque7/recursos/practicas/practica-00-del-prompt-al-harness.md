# Practica 00 - Del prompt al Harness: programa con un agente sin perder el control

Experiencia previa a SAMI Final. No toca SAMI. No instala nada. Solo libreria estandar.

## Objetivo

Comprobar por ti mismo que trabajar bien con un agente no es escribir un prompt mejor.
Es rodear al agente con contexto, limites, tarea clara, criterios de aceptacion,
estado, verificacion automatica y tu decision final.

## Que vamos a conseguir

Al terminar habras:

1. pedido una mejora a un agente de forma directa y observado que pasa;
2. dirigido la misma tarea con un flujo estructurado;
3. ejecutado `comprobar.py` y clasificado el resultado;
4. detectado al menos una diferencia entre pedir codigo y dirigir un agente;
5. explicado para que sirven contexto, limites, tareas y verificacion.

Frase de cierre esperada: "aprendi a no perder el control cuando programo con un agente".

## El proyecto

Carpeta `harness-bolsillo/` junto a esta practica:

- `inventario_taller.py`: inventario minimo de taller (carga, anade, total, guarda).
- `datos_ejemplo.json`: 5 piezas de ejemplo.
- `comprobar.py`: solo informa APTO / NO_APTO / NO_VERIFICADO. No corrige nada.

La mejora (igual en Fase A y Fase B):

> Descuento del 10% cuando `stock > 10` en el total, validar que
> `precio >= 0` y `stock >= 0`, sin romper el guardado en JSON.

## VER

Abre `inventario_taller.py` y leelo entero (son unas 50 lineas). Ejecuta:

```bash
python inventario_taller.py
python comprobar.py
```

Anota: el programa funciona, pero `comprobar.py` da NO_APTO en 2 criterios.
Esos 2 criterios pendientes son tu tarea. No los resuelvas a mano todavia.

## PROBAR - Fase A: SIN HARNESS

1. Pide directamente al agente que uses en B7, con este prompt vago (copialo tal cual):

```text
Mejora este programa para que gestione descuentos y sea mas robusto.
```

Pega el contenido de `inventario_taller.py` si tu herramienta lo necesita. Nada mas.

2. Acepta la primera propuesta que parezca razonable. Guardala como copia
   (por ejemplo `intento_A.py`) sin borrar el original.
3. Ejecuta `comprobar.py` contra lo que te dio. Si tu herramienta lo permite,
   ejecuta tambien `python intento_A.py`.
4. Rellena la ficha A (en papel o en 5 lineas de texto):
   - Que supuestos hizo el agente sin preguntar?
   - Que cambio sin que se lo pidieras?
   - Como sabes si termino bien?
   - Que tendrias que preguntarle ahora para entenderlo?
   - Lo aceptarias para SAMI Final? Por que?

No corrijas el codigo en esta fase. El objetivo es observar, no acertar.

## MODIFICAR - Fase B: CON MINI-HARNESS

Repite la misma tarea, pero ahora mandas tu. Una tarea cada vez.

### B1. Inspeccionar (el repo es la verdad)

Antes de pedir nada, anota: archivo afectado (`inventario_taller.py`),
funciones afectadas (`valor_total`, `anadir_pieza`) y lo que NO se toca
(`cargar_inventario`, `guardar_inventario`, `comprobar.py`).

### B2. Que quiero y que NO quiero

Escribelo en 6 lineas antes de abrir el agente:

```text
QUIERO: descuento 10% si stock > 10; validar precio >= 0 y stock >= 0.
NO QUIERO: nuevas dependencias, reescribir el archivo, cambiar el formato
JSON, menus ni funciones extra, tocar comprobar.py.
```

### B3. Criterios de aceptacion (como sabre que funciona)

Copia estos 5 criterios. Son los mismos que comprueba `comprobar.py`:

1. Total del ejemplo = 960.0 con descuento aplicado.
2. Pieza con stock 10 = 500.0 (sin descuento, es el borde).
3. Precio negativo lanza `ValueError`.
4. Stock negativo lanza `ValueError`.
5. Guardar y cargar conserva el inventario identico.

### B4. Tareas pequenas y estado

Divide en tareas y marca el estado a mano:

```text
T1 descuento en valor_total -> pendiente
T2 validacion en anadir_pieza -> pendiente
T3 verificar todo con comprobar.py -> pendiente
```

### B5. Pide PLAN, no codigo

Copia y adapta este prompt:

```text
Archivo: inventario_taller.py. Funciones: valor_total, anadir_pieza.
Objetivo: <pega tu QUIERO>. Restricciones: <pega tu NO QUIERO>.
Propon un plan por pasos para T1. No escribas codigo todavia.
```

### B6. OK humano (obligatorio)

Lee el plan. Tacha o anade lo que falte. Escribe literalmente:

```text
OK - seguir con T1 / NO - ajustar: <que debe cambiar>
```

Sin tu OK no hay implementacion. Marca `T1 en curso`.

### B7. Implementa solo T1

```text
Implementa solo T1 segun el plan aprobado. No toques nada mas.
```

### B8. Ejecuta y verifica

```bash
python comprobar.py
```

Marca `T1 verificado` o `T1 bloqueado`. Solo entonces pasa a T2 y repite B5-B8.

### B9. Decide: aceptar, modificar o rechazar

- **Aceptar:** entiendes cada linea, cumple criterios, no rompe alcance.
- **Modificar:** la idea sirve pero ajustas tu a mano (y vuelves a comprobar).
- **Rechazar:** rompe el NO QUIERO, inventa dependencias o no puedes defenderlo.

Si algo se repite (siempre tienes que decir "sin dependencias"),
apuntatelo como regla permanente. Esa es la semilla de un procedimiento.

## APTO / NO_APTO / NO_VERIFICADO

- Que la IA diga "funciona" no es evidencia. Evidencia es `comprobar.py` en verde.
- Un test verde no demuestra todo: lo no probado es **NO_VERIFICADO**, no fallo.
  Ejemplo: el rendimiento con miles de piezas queda NO_VERIFICADO en clase.
- Un criterio rojo es **NO_APTO** y pide decision tuya, no otro prompt a ciegas.
- La decision final siempre es humana.

## Revision adversarial ligera (10 min, por parejas o nueva sesion)

Pasa a tu revisor solo esto: objetivo, los 5 criterios, tu codigo y tu salida
de `comprobar.py`. Consigna exacta:

```text
Actua como revisor esceptico. No propongas codigo.
Compara objetivo + criterios contra el codigo y la salida.
Busca: 1) supuestos no escritos, 2) casos borde no contemplados,
3) diferencias entre lo pedido y lo implementado.
Devuelve maximo 5 hallazgos en tabla: hallazgo / evidencia / gravedad.
```

Tu decides por cada hallazgo: APTO, NO_APTO o NO_VERIFICADO, y que harias.
No es obligatorio corregirlo en clase.

## MINI-RETO

Aplica la chuleta a una micro-tarea real de tu SAMI (ej. redondear a 2 decimales
en una funcion). Trae por escrito: que pediste, que NO pediste, que comprobacion
ejecutaste y tu decision (acepto / modifico / rechazo).

## Reflexion final (2 min)

Responde en voz alta o en 3 lineas:

- Que diferencia concreta viste entre Fase A y Fase B?
- Para que sirven contexto, limites, tareas y verificacion?
- Que regla repetida convertirias en procedimiento?

## Que no entra

Jira, ramas Git, MCP, OpenSpec, Specboot, TypeScript, coverage, PRs,
LangGraph, dependencias nuevas ni tocar SAMI. La idea, no la maquinaria.
