# Experiencia 21 · Del sensor al contexto de la empresa

## La necesidad

Hasta ahora el flujo de datos era sencillo:

```text
MQTT transporta mensajes
```

Pero una empresa no solo necesita saber que un mensaje ha circulado. También necesita saber:

```text
¿cuál es el estado actual de ese dispositivo en este momento?
```

Ese es el punto donde aparece FIWARE.

No lo presentamos como una base de datos histórica. La diferencia sigue siendo clara:

```text
POSTGRESQL -> conserva el histórico
MQTT       -> transporta mensajes
FIWARE     -> representa contexto actual e interoperable
```

## Arquitectura del aprendizaje

Usamos el simulador de la Experiencia 19 como fuente real de prueba:

```text
SIMULADOR PYTHON
      ↓
     MQTT
      ↓
  MOSQUITTO
      ↓
PUENTE PYTHON
      ↓
   FIWARE
      ↓
CONTEXTO ACTUAL
DE LA EMPRESA
```

El componente nuevo es `puente_mqtt_fiware.py`.

Debe:

1. suscribirse al topic MQTT;
2. recibir el JSON de la Experiencia 19;
3. validar el contrato;
4. transformar el mensaje al modelo FIWARE del curso;
5. crear o actualizar la entidad correspondiente;
6. mostrar en terminal qué ha recibido y qué ha enviado.

## Reutilización inteligente

La práctica reusa:

- `dispositivo_id`;
- `temperatura_c`;
- `humedad_pct`;
- topic MQTT;
- Mosquitto;
- simulador de compostera;
- configuración local de FIWARE;
- patrón de conexión Python → FIWARE;
- convenciones ya validadas.

La intención es clara:

```text
mismo contrato
+ misma infraestructura local
+ mismo patrón de integración
```

No se crea un segundo patrón FIWARE incompatible.

## Contrato MQTT

Se mantiene exactamente:

```json
{
  "dispositivo_id": "compostera-cf-01",
  "temperatura_c": 36.8,
  "humedad_pct": 62
}
```

Topic:

```text
circularfab/dispositivos/compostera-cf-01/telemetria
```

Suscripción reutilizable:

```text
circularfab/dispositivos/+/telemetria
```

## Modelo FIWARE

Representamos el dispositivo como entidad de contexto.

```text
id: urn:ngsi-ld:Device:compostera-cf-01

type: Device
```

Atributos:

- `temperature`
- `humidity`

La práctica sigue el mismo estilo del curso en Exp 17 y Exp 18, con propiedades `Property` y `@context` NGSI-LD.

## Resultado observable

El alumno debe poder ver dos terminales:

- Terminal A: simulador publicando MQTT.
- Terminal B: puente recibiendo y actualizando FIWARE.

Tras ello, se consulta Orion-LD y se observa el estado actual del dispositivo.

```text
Dispositivo: compostera-cf-01
Temperatura: ...
Humedad: ...
```

Con nuevas lecturas, el valor cambia.

## No se implementa aquí

- sensor real;
- ESP32;
- PostgreSQL nuevo;
- dashboard;
- alarmas;
- automatisms de decisión.

La práctica no convierte el curso en una plataforma IoT completa.

## Ejecución real

1. Levanta Mosquitto.
2. Levanta Orion-LD local.
3. Ejecuta `puente_mqtt_fiware.py`.
4. Ejecuta el simulador.
5. Comprueba mensajes MQTT.
6. Comprueba la entidad en FIWARE.
7. Detén los servicios.

Si Docker está disponible, debe hacerse de verdad. Si no, la práctica queda en validación estructural y documental.

## Mini-reto

Cambia el simulador a:

```python
dispositivo_id = "compostera-cf-02"
```

Comprueba que:

- MQTT sigue funcionando;
- el puente recibe el nuevo dispositivo;
- FIWARE crea o actualiza una entidad distinta;
- no hace falta modificar el puente.

Esto refuerza el contrato reutilizable y la regla de `dispositivo_id`.

## Puente con la Experiencia 20

> En esta validación seguimos usando el simulador de la Experiencia 19. Cuando hagamos la Experiencia 20, el origen será un sensor real, pero el contrato MQTT y este puente no deberían cambiar.

No se afirma validación con hardware real.

## Puente hacia la siguiente experiencia

Ya tenemos personas y dispositivos representados como contexto.

¿Qué podemos hacer cuando queremos razonar automáticamente sobre todo ese contexto?

Se deja planteado, sin resolver, el siguiente salto hacia razonamiento sobre contexto.

## Cierre

La experiencia muestra el paso desde mensaje en movimiento a contexto actual consultable. MQTT sigue llevando el dato; FIWARE lo convoca como estado compartido para la empresa.
