# Proyecto base B6 · Entorno local y control de cambios

La carpeta técnica `sami_local` conserva un identificador interno. El nombre
público de este apoyo es «Entorno local y control de cambios»; no es una cuarta
práctica aplicada.

## Evolucion

Proyecto aplicado 1 -> Proyecto aplicado 2 -> Proyecto aplicado 3 -> base de herramientas B6

## Objetivo

Preparar el entorno local de trabajo, seguir el flujo, depurar un cambio y
registrarlo con Git sin añadir grandes funcionalidades.

## Estructura

- `sami_local/.gitignore`
- `sami_local/requirements.txt`
- `sami_local/main.py`
- `sami_local/src/`
- `sami_local/data/`
- `sami_local/logs/`

La descarga pública es `proyecto-b6-entorno-control.zip`. Se extrae sin carpeta
raíz y contiene la misma base que `recursos/proyecto-seguro/`: `main.py`,
`config.json`, `requirements.txt`, `data/`, `src/` y `.gitignore`. El flujo
principal usa Pandas y termina en resultados de consola; `src/generador_pdf.py`
conserva un nombre técnico heredado, pero solo construye un resumen, no genera
un PDF.

## Cambio acotado (Objetivo / Contexto / Verificacion)

- **Objetivo:** que comportamiento quieres modificar, en una frase.
- **Contexto:** que archivo y funcion tocas y que debe permanecer intacto
  (ver EXP-05: QUIERO / NO QUIERO / ARCHIVO / FUNCION / casos).
- **Verificacion:** ejecuta los casos ANTES y DESPUES, corre `python main.py`
  y lee `git diff` antes de `commit` (ver EXP-06). Si el programa ya no hace
  lo mismo que antes donde no lo tocaste, el cambio no esta listo.

## Evidencia

- Estructura local reproducible.
- Dependencias declaradas.
- Carpeta `venv/` excluida.
- Logs excluidos.
- Traceback provocado y explicado.
- Primer uso de asistente IA documentado y validado.

