# Experiencia 24 · Una IA que responde con estructura

## Punto de partida pedagógico

La experiencia 23 mostró esta secuencia:

```text
LangGraph decide
Ollama explica
Python valida
```

Durante las pruebas reales apareció un problema claro:

1. Cuando se pidió JSON solo mediante prompt, `llama3.2:1b` podía devolver texto que no era JSON.
2. Al usar la API real de Ollama con `format` y JSON Schema, el modelo sí devolvió un JSON estructurado.
3. Pero dentro del JSON volvió a introducir afirmaciones no presentes en los datos, como microorganismos, evaporación y condiciones óptimas.

Eso significa algo importante:

```text
JSON válido ≠ contenido válido
```

El esquema resuelve la FORMA.
Python debe seguir controlando el CONTENIDO.

## Regla de responsabilidades

```text
LangGraph -> DECIDE
Ollama -> EXPLICA
JSON Schema -> ESTRUCTURA
Python -> VALIDA
```

No permitimos que el LLM:

- cambie la decisión;
- establezca reglas de negocio;
- invente causas;
- invente consecuencias;
- modifique cifras.

## Arquitectura didáctica

```text
FIWARE / DEMO
      ↓
LangGraph
      ↓
decisión determinista
      ↓
mensaje factual
      ↓
Ollama llama3.2:1b
+ JSON Schema
      ↓
{
  "explicacion": "...",
  "accion": "..."
}
      ↓
validador semántico Python
    ↙               ↘
 válida             inválida
   ↓                   ↓
usar respuesta      fallback determinista
```

## API de Ollama con JSON Schema

Se usa el endpoint real:

```text
POST http://localhost:11434/api/generate
```

Variables del entorno:

```text
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:1b
```

Y el campo `format` con este esquema:

```json
{
  "type": "object",
  "properties": {
    "explicacion": {"type": "string"},
    "accion": {"type": "string"}
  },
  "required": ["explicacion", "accion"],
  "additionalProperties": false
}
```

Se usa además:

```text
temperature = 0
```

## Importante pedagógico

No se debe enseñar que:

```text
“Ahora Ollama siempre dice la verdad porque usamos JSON Schema”
```

La verdad es otra:

```text
JSON Schema solo corrige la estructura.
Python sigue siendo la barrera contra contenido inventado.
```

## Validador semántico

Se reutiliza el guardrail didáctico de la experiencia 23, pero se refuerza con validación semántica.

Debe comprobar como mínimo:

- existen `explicacion` y `accion`;
- son strings;
- no aparecen números distintos de los datos permitidos;
- no cambia la decisión;
- la acción corresponde a la decisión;
- detecta términos no permitidos derivados de las pruebas reales, por ejemplo:
  - microorganismos
  - evaporación
  - gases tóxicos
  - contaminación
  - toxicidad
- no acepta causas o consecuencias externas.

Es importante explicar que esta blacklist es solo didáctica y no es una garantía universal contra alucinaciones.

## Fallback determinista

La explicación segura sigue construyéndose por Python.

Para 48 °C, 60 % y `REVISAR_TEMPERATURA`:

```text
EXPLICACIÓN
El dispositivo compostera-cf-01 registra 48 °C y 60 % de humedad. La decisión del sistema es REVISAR_TEMPERATURA.

ACCIÓN
Una persona debe revisar la temperatura del dispositivo.
```

## Fuentes y modo sin IA

Se mantiene:

- `--demo` explícito;
- FIWARE real por defecto;
- no fallback silencioso desde FIWARE a demo;
- `--sin-ia` como modo de demostración de que el sistema funciona sin LLM.

## Salida console

La salida esperada tiene este formato:

```text
FUENTE DE DATOS
DATOS DE DEMOSTRACIÓN

CONTEXTO
Dispositivo: compostera-cf-01
Temperatura: 48 °C
Humedad: 60 %

DECISIÓN LANGGRAPH
REVISAR_TEMPERATURA

SALIDA ESTRUCTURADA
JSON SCHEMA ACTIVO

MODELO
llama3.2:1b

RESPUESTA DEL MODELO
{
  "explicacion": "...",
  "accion": "..."
}

VALIDACIÓN SEMÁNTICA
RESPUESTA ACEPTADA
```

O bien:

```text
VALIDACIÓN SEMÁNTICA
RESPUESTA DESCARTADA
Motivo: ...

USANDO FALLBACK DETERMINISTA
```

Debe quedar muy claro que:

- estructura correcta
- contenido correcto

son dos problemas distintos.

## Diferencia con la experiencia 23

### Exp 23

```text
Pido JSON en el prompt
```

### Exp 24

```text
La API establece un contrato JSON Schema
```

Y después:

```text
JSON Schema valida estructura
Validador Python valida contenido
```

## Mini-reto

1. Ejecuta:
   ```bash
   python respuesta_estructurada.py --demo --sin-ia
   ```
2. Ejecuta:
   ```bash
   python respuesta_estructurada.py --demo
   ```
3. Observa el JSON generado.
4. Comprueba si el validador acepta o descarta el contenido.
5. Compara:
   - estructura válida
   - contenido válido

## Cierre pedagógico

Un esquema JSON ayuda a que el modelo no rompa la forma.
Pero la calidad semántica sigue siendo responsabilidad del software.

### La regla final

```text
Si el contenido es falso, Python debe rechazarlo.
Si la estructura es inválida, JSON Schema debe rechazarla.
```
