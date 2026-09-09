# Proyecto B7 · LangGraph: Python orquesta (sin LLM)

Grafo sencillo y ejecutable. Sin modelo de lenguaje, sin red, sin FIWARE.

## Idea en una frase

No es la IA quien controla el programa. Python decide el flujo:
LangGraph organiza los pasos y una funcion Python pura elige la ruta.

## Archivos

```text
langgraph-taller/
├── flujo_taller.py      # estado -> nodos -> condicion -> ruta -> resultado
├── datos_demo.json      # contexto local (pieza, stock, minimo)
├── test_flujo_taller.py # pruebas con unittest (libreria estandar)
├── requirements.txt     # solo langgraph
└── README.md            # esta guia
```

## Que es cada cosa

- **Estado**: diccionario que viaja por el grafo
  (`pieza`, `stock`, `stock_minimo`, `decision`, `ruta`, ...).
- **Nodo**: funcion que hace una tarea
  (`obtener_contexto`, `validar_datos`, `evaluar_estado`, ...).
- **Condicion**: `decidir_siguiente(stock, minimo)` elige la ruta.
- **Rutas**: `sin_stock` / `pedir_material` / `disponible`.

## Instalacion

```bash
pip install -r requirements.txt
```

## Ejecucion

```bash
python flujo_taller.py --demo
```

Salida esperada:

```text
FUENTE DE DATOS: DATOS DE DEMOSTRACION

CONTEXTO RECIBIDO
Pieza: Broca 5mm
Stock: 3
Minimo: 5

GRAFO
obtener_contexto -> validar_datos -> evaluar_estado -> pedir_material

RESULTADO
PEDIR_MATERIAL
```

Prueba otras rutas sin tocar codigo:

```bash
python flujo_taller.py --demo --stock 0
python flujo_taller.py --demo --stock 20
```

## Pruebas

```bash
python -m unittest -v
```

La regla pura (`decidir_siguiente`) se prueba siempre, sin langgraph.
El grafo completo solo se prueba si langgraph esta instalado; si no,
queda NO_VERIFICADO, que no es un fallo.
