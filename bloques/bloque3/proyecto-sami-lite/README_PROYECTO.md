# Proyecto aplicado 1 · Calcula y guarda precios

> Base de consola del proyecto aplicado de B3. No incluye una interfaz
> terminada: la ventana se genera desde esta base después de comprobarla.

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

## PREPARAR Y EJECUTAR

La descarga pública es `proyecto-b3-calcula-precios.zip`. El ZIP no añade una
carpeta raíz: tras extraerlo, abre esta carpeta técnica (`proyecto-sami-lite`)
en VS Code.

1. Abre esta carpeta (`proyecto-sami-lite`) en VS Code.
2. Nada que instalar: solo librería estándar (`csv`, `json`, `datetime`).
3. Desde esta carpeta ejecuta `python --version` y después `python main.py`.
4. La carpeta actual importa: ahí se crean `config.json`,
   `transacciones_auditoras.csv` y `auditoria_errores.log`.

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

## COMPROBAR CON UNA FUNCIÓN (tu programa también comprueba)

`analizador.py` trae `comprobar_transaccion(...)`: le das un caso conocido
y devuelve `True` si el cálculo coincide, `False` si no. Pruébala en consola
desde esta carpeta:

```text
python
>>> from analizador import comprobar_transaccion
>>> comprobar_transaccion(50, 0.21, 100.0, 60.5, "PRECIO_NORMAL")
True
>>> comprobar_transaccion(50, 0.21, 100.0, 999.0, "PRECIO_NORMAL")
False
```

Un caso válido (`True`) y uno inválido (`False`). Si sale `False`, el
programa te está diciendo que algo no cuadra: revisa tus valores esperados
antes de tocar el cálculo.

En tres preguntas: ¿qué quiero conseguir? (el caso esperado), ¿qué necesita
saber la función? (precio, tasa, umbral), ¿cómo compruebo que funciona?
(`True` en el válido, `False` en el inválido).

## SI ALGO FALLA (depurar en 6 pasos)

1. Reproduce el error con los mismos datos.
2. Lee la última línea del traceback: dice el tipo de error.
3. Localiza la función (`def`) donde ocurre.
4. Escribe tu hipótesis en una frase ("falla porque...").
5. Corrige una sola cosa.
6. Vuelve a ejecutar y repite los tres casos de COMPROBAR.

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

## Resultado inicial y límites

Con la configuración inicial (`iva_aplicado: 0.21`), `Teclado` y `50` deben
mostrar `Precio final: 60.5 - PRECIO_NORMAL`. La entrada `abc` debe mostrar un
error, escribir en el log y permitir reintentar. Los precios `0` y negativos se
aceptan todavía: no se corrigen en esta práctica y cualquier rechazo posterior
debe ser un cambio funcional separado en la lógica compartida.

## Convierte tu programa en una aplicación con ventana

Después de la primera ejecución correcta, pide a un agente que genere
`interfaz.py` desde esta base. No sustituyas el ejercicio por una interfaz ya
terminada. Usa este prompt:

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

- `50` debe dar `60.5` con IVA del 21 %, igual que la consola.
- Compara una operación de consola y otra de ventana: deben quedar dos filas,
  sin duplicados por una pulsación.
- Una entrada no numérica debe mostrar un error, no registrar una operación
  válida y permitir reintentar.
- La ventana no debe depender de preguntas ocultas en la terminal.
- Configuración, CSV y log deben conservar la misma carpeta.
- Comprueba limpiar, tabulación, redimensionado y cierre sin procesos colgados.
- La sintaxis no certifica el aspecto ni la interacción: si no puedes abrir la
  ventana, deja esa revisión pendiente de comprobación humana.

Cuando puedas explicar la consola y, si procede, la ventana, continúa con el
Proyecto aplicado 2 de B4: **Organiza productos con clases**.
