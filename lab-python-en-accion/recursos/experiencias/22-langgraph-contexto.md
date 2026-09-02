# Experiencia 22 · Del contexto a una decisión

## Necesidad antes de tecnología

Ya tenemos contexto actual del dispositivo. La empresa puede consultar:

```text
Dispositivo: compostera-cf-01
Temperatura: 43.5 °C
Humedad: 60 %
```

Eso es útil, pero no resuelve por sí solo una decisión. El siguiente problema no es “¿qué dato tenemos?”, sino “¿qué camino sigue el sistema según ese contexto?”

## ¿Por qué LangGraph aquí?

Este ejemplo también podría hacerse con funciones y `if/else`, y debe decirse explícitamente. La razón pedagógica para usar LangGraph es pequeña y visible:

- estado
- nodo
- transición
- ruta condicional

La necesidad aparece antes que la tecnología: primero queremos decidir según el contexto del dispositivo, y entonces LangGraph organiza ese proceso con un grafo claro.

La función `add_conditional_edges` hace exactamente eso: después de `evaluar_estado`, el sistema mira el estado actual y elige el siguiente nodo según una regla. En esta práctica, esa regla es determinista y didáctica.

## No se usa LLM

Esta práctica es determinista y sin modelo generativo:

- sin OpenAI
- sin Claude
- sin Gemini
- sin Ollama
- sin LangChain agents
- sin API de modelos

La siguiente experiencia podrá introducir un modelo.

## Arquitectura del flujo

```text
START
  ↓
obtener_contexto
  ↓
validar_datos
  ↓
evaluar_estado
  ↓
add_conditional_edges
  ├── datos_incompletos
  ├── revisar_temperatura
  ├── revisar_humedad
  └── sin_revision
       ↓
      END
```

## Estado del grafo

El estado del flujo es pequeño y legible:

- `dispositivo_id`
- `temperatura_c`
- `humedad_pct`
- `datos_validos`
- `estado_revision`
- `mensaje`

## Fuente de datos principal

La práctica intenta consultar Orion-LD real:

```text
http://localhost:1026
```

Entidad esperada:

```text
urn:ngsi-ld:Device:compostera-cf-01
```

Se reutiliza el modelo FIWARE y el mismo patrón de la Experiencia 21.

## Plan B educativo

La práctica incluye un archivo de demostración:

```text
datos_contexto_demo.json
```

El modo demo es una elección explícita mediante `--demo`. No se usa automáticamente cuando FIWARE falla, ni se oculta el problema.

La salida debe mostrar claramente:

```text
FUENTE DE DATOS: FIWARE REAL
```

o:

```text
FUENTE DE DATOS: DATOS DE DEMOSTRACIÓN
```

Si FIWARE no está disponible, el programa debe indicar el error y recomendar ejecutar `--demo` para seguir con la práctica.

## Reglas didácticas

Son reglas ficticias para aprender rutas condicionales, no umbrales científicos ni recomendaciones reales.

- si falta temperatura o humedad → `DATOS_INCOMPLETOS`
- si temperatura_c >= 45 → `REVISAR_TEMPERATURA`
- si humedad_pct < 50 → `REVISAR_HUMEDAD`
- en otro caso → `SIN_REVISION_PRIORITARIA`

## Resultado observable

Terminal esperada:

```text
FUENTE DE DATOS: FIWARE REAL

CONTEXTO RECIBIDO
Dispositivo: compostera-cf-01
Temperatura: 43.5 °C
Humedad: 60 %

GRAFO
obtener_contexto → validar_datos → evaluar_estado → sin_revision

RESULTADO
SIN_REVISION_PRIORITARIA
```

## Mini-reto

Cambia solo `datos_contexto_demo.json`:

```json
{
  "dispositivo_id": "compostera-cf-01",
  "temperatura_c": 48,
  "humedad_pct": 60
}
```

Ejecútalo en modo demo y comprueba que la ruta cambia a:

```text
obtener_contexto → validar_datos → evaluar_estado → revisar_temperatura
```

Después prueba:

```json
{
  "dispositivo_id": "compostera-cf-01",
  "temperatura_c": 40,
  "humedad_pct": 45
}
```

y observa:

```text
obtener_contexto → validar_datos → evaluar_estado → revisar_humedad
```

No hace falta modificar el grafo.

## Conceptos clave

Máximo cuatro conceptos:

- `ESTADO`: información que viaja por el workflow.
- `NODO`: función que realiza una tarea.
- `TRANSICIÓN`: paso entre nodos.
- `RUTA CONDICIONAL`: decide el siguiente paso.

## Diferencias entre tecnologías

```text
POSTGRESQL -> guarda histórico
MQTT -> mueve mensajes
FIWARE -> representa contexto actual interoperable
LANGGRAPH -> organiza un proceso con estado y decisiones
```

LangGraph no almacena contexto de negocio sustituyendo a FIWARE; tampoco es un broker.

## Requisitos

```bash
pip install -r requirements.txt
```

## Ejecutar

### Modo real

```bash
python flujo_contexto.py
```

### Modo demo

```bash
python flujo_contexto.py --demo
```

## Tests

```bash
pytest -q
```

## Puente hacia la siguiente experiencia

Ahora el workflow puede consultar contexto y decidir una ruta, pero el mensaje final sigue estando escrito por nosotros.

La siguiente etapa será que un modelo interprete ese contexto y explique la situación en lenguaje natural, sin resolver todavía ese salto.
