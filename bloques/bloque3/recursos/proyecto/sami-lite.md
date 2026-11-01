# Proyecto aplicado 1 · Calcula y guarda precios

## Objetivo
Construir y comprobar un programa modular de consola con funciones, manejo de
errores y persistencia local. Puede empezarse sin terminar antes el cuaderno.

La descarga pública es `proyecto-b3-calcula-precios.zip`; la carpeta técnica
de extracción conserva el nombre `proyecto-sami-lite`.

## Estructura
```text
sami_lite/
  persistencia.py
  analizador.py
  main.py
```

## Responsabilidades
- `persistencia.py`: cargar configuracion JSON, registrar transacciones CSV y escribir errores TXT.
- `analizador.py`: validar precios, calcular precio final y evaluar alertas.
- `main.py`: pedir datos, coordinar imports y mantener el flujo de consola.

## Evidencias
- `config.json` creado o cargado.
- `transacciones_auditoras.csv` con filas nuevas.
- `auditoria_errores.log` si aparece un error controlado.
- Captura de una ejecucion correcta y una ejecucion con entrada no numerica.

## Flujo de depuracion
EJECUTAR -> OBSERVAR ERROR/EXCEPCION -> INTERPRETAR -> CORREGIR -> VOLVER A EJECUTAR

## Archivos base
Los tres archivos estan en esta carpeta como punto de partida.

`main.py` solo arranca el menú cuando se ejecuta directamente. Esto permite
que una interfaz posterior importe `procesar_transaccion` sin abrir la consola.
