# GRAFO DE FLUJO CON LANGGRAPH

## Resultado

EXP-05 usa un flujo pequeño para identificar estado, nodos, transiciones,
condiciones y resultados. El alumno termina pudiendo explicar la ruta tomada y
comparar LangGraph con Python normal.

## Modelo del proyecto

El proyecto `langgraph-taller` reutiliza un flujo de inventario:

- **Estado:** diccionario con pieza, stock, mínimo, ruta y decisión.
- **Nodos:** `obtener_contexto`, `validar_datos` y `evaluar_estado`.
- **Condición:** `decidir_siguiente(stock, minimo)` es una función Python pura.
- **Transiciones:** `START` → contexto → validación → evaluación →
  `sin_stock`, `pedir_material` o `disponible` → `END`.
- **Resultado:** `SIN_STOCK`, `PEDIR_MATERIAL` o `DISPONIBLE`.

El grafo es determinista: LangGraph organiza la ejecución y Python decide la
ruta. Para tres nodos, Python normal —llamadas secuenciales y un `if`— basta y
requiere menos preparación y mantenimiento. LangGraph aporta una representación
explícita cuando crecen los nodos, estados o transiciones.

Una ampliación con IA pondría un modelo dentro de un nodo y exigiría validar
coste, disponibilidad y respuestas. Un sistema multiagente tendría varios
agentes coordinados. Este proyecto no implementa ninguno de los dos.

## Requisitos y ejecución

Desde la carpeta donde se hayan extraído los cinco archivos del ZIP:

```bash
python --version
python -m venv .venv
# activa .venv
pip install -r requirements.txt
python flujo_taller.py --demo
python flujo_taller.py --demo --stock 0
python flujo_taller.py --demo --stock 20
python -m unittest -v
```

La demostración debe producir `PEDIR_MATERIAL`, `SIN_STOCK` y `DISPONIBLE`,
respectivamente. Las pruebas comprueban la regla pura, los nodos y el grafo.
Sin la dependencia, las pruebas puras siguen funcionando y la del grafo queda
`skipped`/`NO_VERIFICADO`. Un argumento no entero produce un error de uso.

## Siguiente paso

Explica qué estado recorrió cada caso, qué nodo tomó la decisión y si LangGraph
aporta valor para tu propio flujo. Después continúa con la siguiente experiencia
que corresponda a tu recorrido.
