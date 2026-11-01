# Practica 02 - Pandas con got_1.csv

## Necesidad

Aprender a cargar y consultar tablas reales sin mezclar este dataset con el Proyecto aplicado 3.

## Codigo

```python
import pandas as pd

df = pd.read_csv("got_1.csv")
print(df.head())
print(df.columns)
```

## Predecir

Que tipo de estructura crea `pd.read_csv()`?

## Modificar

Imprime solo las columnas `Personaje`, `Casa` y `Estado`.

## Mini-reto

Explica por que `got_1.csv` sirve para aprender Pandas, pero no para el proyecto de hardware.

