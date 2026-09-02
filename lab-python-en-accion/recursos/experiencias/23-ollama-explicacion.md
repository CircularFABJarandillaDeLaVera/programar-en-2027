# Experiencia 23 · Una IA que explica, pero no decide

## Necesidad antes de tecnología

La empresa ya tiene una decisión determinista:

```text
REVISAR_TEMPERATURA
```

Eso basta para que LangGraph y FIWARE actúen con reglas claras. Pero ahora aparece un problema humano: la persona necesita entender por qué el sistema ha decidido eso.

La persona no quiere ver un código técnico. Necesita una explicación breve, comprensible y segura.

## Regla central

```text
LangGraph + reglas deterministas -> DECIDEN
Ollama -> EXPLICA
Python -> VALIDA la explicación
```

El LLM no decide. El LLM no cambia umbrales. El LLM no inventa causas. El LLM no reemplaza a LangGraph ni a FIWARE.

## Qué ocurre realmente

```text
FIWARE / contexto actual
       ↓
LangGraph
       ↓
decisión determinista
       ↓
mensaje factual seguro
       ↓
Ollama llama3.2:1b
       ↓
validación Python
      ↙         ↘
respuesta válida   respuesta no válida
      ↓                ↓
explicación IA     fallback determinista
```

## Modelo local

Se usa Ollama localmente con el modelo por defecto:

```text
llama3.2:1b
```

y la URL por defecto:

```text
http://localhost:11434
```

No se usan claves de pago, ni OpenAI, ni Claude, ni Gemini, ni LangChain adicional.

## La decisión que se va a explicar

La experiencia usa la misma entidad y los mismos campos didácticos que la experiencia 22:

```text
urn:ngsi-ld:Device:compostera-cf-01
```

```text
temperatura_c
humedad_pct
```

Y la decisión determinista sigue siendo esta:

```text
REVISAR_TEMPERATURA
```

## Datos de demostración

Para que la diferencia sea visible, el modo demo usa:

```json
{
  "dispositivo_id": "compostera-cf-01",
  "temperatura_c": 48,
  "humedad_pct": 60
}
```

En esos datos la ruta es:

```text
REVISAR_TEMPERATURA
```

La salida esperada es:

```text
FUENTE DE DATOS: DATOS DE DEMOSTRACIÓN

CONTEXTO
Dispositivo: compostera-cf-01
Temperatura: 48 °C
Humedad: 60 %

DECISIÓN LANGGRAPH
REVISAR_TEMPERATURA

MODELO LOCAL
llama3.2:1b

VALIDACIÓN IA
RESPUESTA ACEPTADA
```

## Por qué no confiamos ciegamente en un LLM

En clase se observa un problema importante:

- con un prompt poco controlado, un modelo puede inventar cosas como “gases tóxicos” o “contaminación del suelo”;
- con un prompt más estricto, un modelo puede decir “ha superado los 48 °C” cuando el valor real es exactamente 48 °C.

Esto no significa que el modelo sea defectuoso. Significa que el LLM genera lenguaje probabilístico y la aplicación debe limitar su responsabilidad.

La enseñanza central es:

```text
un LLM genera lenguaje natural, pero la decisión sigue perteneciendo a reglas y validación de software.
```

## Prompt controlado

El modelo recibe solo:

- dispositivo
- temperatura
- humedad
- decisión determinista
- acción determinista permitida

Y además se le exige explícitamente:

- no inventar causas;
- no predecir consecuencias;
- no añadir conocimiento externo;
- no modificar cifras;
- no cambiar la decisión;
- no usar “ha superado 48” si el valor es 48;
- producir una explicación breve.

## Salida estructurada

Se pide JSON con esta forma:

```json
{
  "explicacion": "...",
  "accion": "..."
}
```

Si la respuesta del modelo no es JSON válido, se descarta.

## Guardrail didáctico

Este validado es pedagógico y no garantiza que un LLM nunca pueda inventar información. Lo importante es que la aplicación no acepta cualquier salida.

Comprueba como mínimo:

- JSON válido;
- campos `explicacion` y `accion` presentes;
- la decisión no cambia;
- no introduce números distintos de los datos permitidos;
- no incluye palabras prohibidas como:
  - gases tóxicos
  - contaminación
  - toxicidad
- la acción coincide con la decisión determinista.

## Fallback determinista

Antes de llamar al LLM, Python puede generar una explicación segura por sí mismo:

```text
EXPLICACIÓN SEGURA
El dispositivo compostera-cf-01 registra 48 °C y 60 % de humedad.
La decisión del sistema es REVISAR_TEMPERATURA.

ACCIÓN
Una persona debe revisar la temperatura del dispositivo.
```

Si Ollama falla o la respuesta no supera la validación, se usa ese texto.

## Modo sin IA

Se añade `--sin-ia` para demostrar que el sistema sigue funcionando sin Ollama:

```bash
python explicar_decision.py --demo --sin-ia
```

En este modo:

- no se llama al modelo;
- no se usa respuesta IA;
- se usa directamente la explicación determinista;
- no aparece `VALIDACIÓN IA` ni `RESPUESTA DESCARTADA`.

Esto es importante pedagógicamente porque deja claro que:

```text
SIN LLM
El sistema ya funciona.

CON LLM
El mismo resultado puede explicarse de forma más natural.
```

Cuando sí se usa Ollama:

- se llama a la API local;
- Python valida la salida;
- si falla, entonces sí se usa el fallback determinista.

## Diferencias entre tecnologías

```text
POSTGRESQL -> historial
MQTT -> transporte de mensajes
FIWARE -> contexto actual interoperable
LangGraph -> organiza decisiones y flujos
Ollama/LLM -> genera lenguaje natural
```

La IA no sustituye a los sistemas de datos ni a la lógica de decisión. Solo añade una capa de explicación.

## Mini-reto

1. Ejecuta `python explicar_decision.py --demo --sin-ia`.
2. Ejecuta `python explicar_decision.py --demo` con Ollama activo.
3. Compara las dos salidas.
4. Observa qué pasa si el modelo devuelve un JSON inválido o una respuesta con números inventados.

## Requisitos

```bash
pip install -r requirements.txt
```

## Ejecución

### Modo demo

```bash
python explicar_decision.py --demo
```

### Sin IA

```bash
python explicar_decision.py --demo --sin-ia
```

### Modo real

```bash
python explicar_decision.py
```

## Cierre

La experiencia 23 no enseña que la IA debe decidir. Enseña algo más importante:

```text
La IA puede ayudar a explicar, pero no debe sustituir la responsabilidad del sistema.
```

Eso es la diferencia entre una herramienta útil y una decisión peligrosa.
