# Practica 05 - Modulos, imports y responsabilidades

## Objetivo
Dividir un programa en varios archivos conectados por imports.

## Estructura
```text
proyecto/
  analizador.py
  persistencia.py
  main.py
```

## Flujo
1. Escribe una funcion de calculo en `analizador.py`.
2. Escribe una funcion de archivo en `persistencia.py`.
3. Importa ambas desde `main.py`.
4. Ejecuta `main.py`.
5. Provoca un error de import y lee el mensaje.
6. Corrige el nombre del modulo o la funcion.

## Regla practica
`main.py` coordina. Los modulos auxiliares calculan o guardan, pero no preguntan datos al usuario.

## Mini-reto
Organiza el Proyecto aplicado 1 en los tres archivos previstos.
