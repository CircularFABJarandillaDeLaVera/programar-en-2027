# Practica 03 - venv, pip y requirements

## Requisito tecnico / laguna

La activacion exacta depende del sistema operativo. La fuente respalda el uso de `python -m venv venv` y `pip install -r requirements.txt`, pero no sustituye la preparacion tecnica del aula.

## Configurar

```text
python -m venv venv
```

## Probar

Comprueba si aparece `(venv)` antes de instalar paquetes.

## requirements.txt

```text
pandas
```

La base de B6 solo declara `pandas` porque es la dependencia que usa su flujo
principal. Playwright y ReportLab pertenecen a otros materiales y no son
requisitos de estas seis experiencias.

## Ejecutar

```text
pip install -r requirements.txt
```

## Validar

Explica por que `venv/` no debe subirse al repositorio.

