# Proyecto B7 · Grafo de flujo: Python orquesta (sin LLM)

Grafo sencillo y ejecutable. Sin modelo de lenguaje, sin red, sin FIWARE.

El ZIP descargable es plano: crea o elige una carpeta vacía, descomprímelo
directamente dentro y abre esa carpeta en tu terminal. No se crea
automáticamente una carpeta `langgraph-taller`.

## Idea en una frase

No es la IA quien controla el programa. Python decide el flujo:
LangGraph organiza los pasos y una funcion Python pura elige la ruta.

## Archivos

```text
mi-grafo-b7/
├── flujo_taller.py      # estado -> nodos -> condicion -> ruta -> resultado
├── datos_demo.json      # contexto local (pieza, stock, minimo)
├── test_flujo_taller.py # pruebas con unittest (libreria estandar)
├── requirements.txt     # dependencias del proyecto
└── README.md            # esta guia
```

## Que es cada cosa

- **Estado**: diccionario que viaja por el grafo
  (`pieza`, `stock`, `stock_minimo`, `decision`, `ruta`, ...).
- **Nodo**: funcion que hace una tarea
  (`obtener_contexto`, `validar_datos`, `evaluar_estado`, ...).
- **Condicion**: `decidir_siguiente(stock, minimo)` elige la ruta.
- **Rutas**: `sin_stock` / `pedir_material` / `disponible`.

## Qué aporta frente a Python normal

Este flujo tiene tres nodos y una condición. Python normal, con llamadas
secuenciales y un `if`, resuelve la misma necesidad con menos instalación y
mantenimiento. LangGraph hace visibles el estado, los nodos y las transiciones;
empieza a aportar cuando el flujo crece y necesitas inspeccionar u organizar
muchas rutas. No se añade una segunda implementación: se compara la idea, no se
duplica el proyecto.

El ejemplo es un grafo determinista: no usa LLM, claves, Ollama, red ni
servicios externos. Una ampliación con IA pondría un modelo dentro de un nodo y
necesitaría validación adicional. Un sistema multiagente tendría varios agentes
coordinados; este proyecto no lo implementa.

## Preparación y comprobación

Primero descomprime el ZIP en una carpeta nueva o que hayas elegido para este
proyecto. Después abre esa carpeta en VS Code y abre una terminal allí. Desde
esa terminal, prepara el entorno virtual:

`.venv` mantiene las dependencias del proyecto separadas de las de otros
proyectos.

Windows PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

Si `.venv` ya existe, basta con activarlo o utilizar su intérprete. Si PowerShell
bloquea la activación, no cambies la política de ejecución del sistema. Ejecuta
directamente:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe flujo_taller.py --demo
```

Con el entorno preparado, conserva estos comandos de ejecución y pruebas:

```bash
python flujo_taller.py --demo
python flujo_taller.py --demo --stock 0
python flujo_taller.py --demo --stock 20
python -m unittest -v
```

La salida principal debe terminar en `PEDIR_MATERIAL`; con stock 0 termina en
`SIN_STOCK` y con stock 20 en `DISPONIBLE`. Las 8 pruebas pasan cuando la
dependencia está instalada. Sin ella, las pruebas puras pasan y la prueba del
grafo queda `skipped`/`NO_VERIFICADO`. Un argumento no entero, como
`--stock no-es-numero`, produce un error de uso y código de salida 2.

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

La regla pura (`decidir_siguiente`) y los nodos se pueden probar sin LangGraph.
El grafo completo requiere la dependencia declarada; no requiere modelo de
lenguaje ni servicios externos.
