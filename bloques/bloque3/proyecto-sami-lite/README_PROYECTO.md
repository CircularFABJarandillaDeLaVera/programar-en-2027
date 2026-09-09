# SAMI-Lite — Proyecto de B3 (prototipo, copia de trabajo)

> Copia intacta del SAMI-Lite real de `bloques/bloque3/recursos/proyecto/`
> (`main.py`, `analizador.py`, `persistencia.py`). El original no se toca:
> aquí se experimenta y se rompe sin miedo.

## Flujo real del programa

```text
main (ejecutar: pide datos en bucle)
  ↓ procesar_transaccion
analizador (calcular_precio_final → evaluar_alerta_precio)
  ↓ registrar_transaccion_csv / registrar_error_log
persistencia (config.json / transacciones_auditoras.csv / auditoria_errores.log)
  ↓
resultado en consola + archivos
```

Errores previstos sin detener el programa: `ValueError` (precio no
numérico) y `TypeError` (dato interno no válido). Ambos quedan en el log.

## PREPARAR

1. Abre esta carpeta (`proyecto-sami-lite`) en VS Code.
2. Nada que instalar: solo librería estándar (`csv`, `json`, `datetime`).

## ORIENTARSE

Sin ejecutar aún, responde leyendo los `def` y los `import`:

- ¿Qué archivo arranca el programa?
- ¿Cuál analiza (calcula y valida)?
- ¿Cuál guarda y carga (archivos)?

## PROBAR

Ejecuta `main.py` con el botón *Run Python File* de VS Code
(sin terminal todavía). Prueba:

1. Un producto normal (p. ej. `Teclado`, `50`).
2. Una entrada no numérica (p. ej. `abc`) y observa que el programa sigue.
3. `salir` para terminar.

Mira los archivos que aparecen: `config.json`, `transacciones_auditoras.csv`,
`auditoria_errores.log`.

## COMPRENDER

Sigue con el dedo una llamada desde `main.py` (`procesar_transaccion`)
hasta `analizador.py` y de vuelta a `persistencia.py`. Di cada salto en voz
alta. Fíjate: `main.py` coordina; los módulos no piden datos por teclado.

## MODIFICAR (cambio acotado)

En `evaluar_alerta_precio` (`analizador.py`) distingue el caso límite:
cuando `precio_final == umbral`, devuelve `"PRECIO_EN_UMBRAL"`.

- Pista 1: es un `if` nuevo antes del `return` final.
- Pista 2: no toques `main.py`.
- Pista 3: comprueba con `evaluar_alerta_precio(100.0, 100.0)`.

## COMPROBAR (tres casos manuales)

1. **Normal:** `50` → `PRECIO_NORMAL`.
2. **Límite:** precio que clave el umbral → `PRECIO_EN_UMBRAL`.
3. **Inválido:** texto como precio → mensaje + línea en el log, sin detenerse.

## MINI-RETO (objetivo + pistas, sin receta)

Añade en `analizador.py` una función
`resumen_transaccion(nombre, precio_final, estado)` que devuelva una frase
lista para mostrar, y úsala en `main.py` donde hoy se imprime el precio final.

- Pista 1: un `def` con tres parámetros y `return` de frase.
- Pista 2: en `main.py` solo cambia la línea del `print`.
- Pista 3: repite los tres casos de COMPROBAR.

## Notas honestas (B3 no lo esconde)

- Las rutas (`config.json`, el CSV, el log) son relativas a la carpeta desde
  la que arrancas: ejecuta siempre con esta carpeta como actual.
- `main.py` solo arranca al ejecutarse directamente (guardia `if __name__ == "__main__"`);
  al importarlo, solo trae sus funciones sin entrar en el bucle.
