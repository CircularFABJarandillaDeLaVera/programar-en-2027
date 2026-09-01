# MASTER CLASS OPCIONAL · PYTHON + FIWARE REAL

Subtítulo: Del dato local al contexto interoperable.

Esta sesión no es una Experiencia 19. Es una Master Class opcional impartida por un técnico cFAB con acceso autorizado al sandbox FIWARE / ThinkingCity / Telefónica.

Las Experiencias 17 y 18 siguen siendo gratuitas, locales y reproducibles por cualquier alumno. La Master Class muestra cómo ese mismo aprendizaje se traslada a una infraestructura FIWARE real.

## Idea central

PostgreSQL pregunta:

```text
¿Qué ocurrió?
-> conserva histórico
```

FIWARE pregunta:

```text
¿Qué contexto actual estoy compartiendo?
-> publica una representación común que otros sistemas pueden entender
```

No compiten.

## Beneficio real de FIWARE

No vender FIWARE como "permite fichar desde distintos móviles". FastAPI ya permite que distintos dispositivos usen la aplicación.

El beneficio visible es:

```text
FIWARE PERMITE REPRESENTAR Y COMPARTIR
UN CONTEXTO COMÚN E INTEROPERABLE
PROCEDENTE DE DISTINTOS ORÍGENES.
```

## Arquitectura

```text
TRABAJADOR
   |
móvil / tablet / PC
   |
FastAPI + Python
   +--------------------------> PostgreSQL
   |                            histórico
   |
   +---- HTTP + JSON ---------> FIWARE REAL
                                Context Broker
                                NGSI v2
                                contexto interoperable
```

Autenticación:

```text
Python/Postman
    |
Keystone
    |
token temporal
    |
Context Broker
```

Explicación suficiente: el sandbox exige autenticación y devuelve un token temporal.

## NGSI-LD local frente a NGSI v2 real

```text
Experiencias 17-18:
Orion-LD local -> NGSI-LD

Master Class:
Sandbox Telefónica -> NGSI v2
```

Los dos trabajan con el concepto FIWARE de contexto, pero el formato y las operaciones concretas cambian.

Ejemplo:

```text
LOCAL NGSI-LD:
Property

SANDBOX NGSI v2:
atributo con type + value + metadata
```

## Código Python

```text
main.py
-> aplicación

base_datos.py
-> histórico PostgreSQL

contexto_fiware_v2.py
-> comunicación NGSI v2
```

Puntos a mostrar:

- `httpx`
- headers
- JSON
- `PATCH`
- `POST`
- timeout
- `status_code`
- `try/except`

## Orden crítico

1. Validar fichaje.
2. Guardar PostgreSQL.
3. Usar la `fecha_hora` realmente guardada.
4. Intentar FIWARE.

Nunca presentar FIWARE primero y PostgreSQL después.

## Modelo NGSI v2

Entidad por trabajador:

```text
Python2027_Employee_{trabajador_id}
```

Ejemplos ficticios:

```text
Python2027_Employee_001
Python2027_Employee_002
```

Tipo:

```text
Employee
```

Atributos:

- `working`
- `lastEvent`
- `lastEventAt`

No enviar:

- nombre
- latitud
- longitud
- `precision_m`
- usuario
- password
- token
- sesiones
- hashes
- histórico completo

```text
INTEROPERABLE
NO SIGNIFICA
PUBLICAR TODOS LOS DATOS.
```

## Sandbox real confirmado

Autenticación:

```text
POST https://auth.iotplatform.telefonica.com:15001/v3/auth/tokens
201 Created
X-Subject-Token
```

Script moderno de Postman:

```javascript
pm.environment.set(
    "token",
    pm.response.headers.get("X-Subject-Token")
);
```

Context Broker:

```text
https://cb.iotplatform.telefonica.com:10027
```

API:

```text
NGSI v2
```

Headers:

```text
Fiware-Service: dip_caceres_sandbox
Fiware-ServicePath: /10_Jarandilla_de_la_Vera
X-Auth-Token: <token temporal>
Content-Type: application/json
```

En ThinkingCity el subservicio puede mostrarse sin barra inicial:

```text
10_Jarandilla_de_la_Vera
```

En el header se usa:

```text
/10_Jarandilla_de_la_Vera
```

No convertir esta configuración concreta en regla universal.

## Validación real

Validación automática:

```text
40 tests
OK

py_compile
OK
```

Validación end-to-end:

```text
FastAPI
-> PostgreSQL
-> sandbox FIWARE Telefónica
-> entidad actualizada
```

Resultado real documentado sin datos personales:

```text
ENTRADA -> PostgreSQL guarda -> FIWARE working=true, lastEvent=ENTRADA
SALIDA  -> PostgreSQL guarda -> FIWARE working=false, lastEvent=SALIDA
```

La hora guardada en PostgreSQL y la hora publicada en FIWARE corresponden al mismo instante, aunque se representen en zonas horarias distintas.

## Demo visual en vivo

Escenario:

```text
Trabajador A -> móvil -> ENTRADA
Trabajador B -> otro dispositivo -> ENTRADA
Trabajador A -> SALIDA
```

Mostrar:

```text
PostgreSQL
A -> ENTRADA
B -> ENTRADA
A -> SALIDA

FIWARE
Employee_A
working=false
lastEvent=SALIDA

Employee_B
working=true
lastEvent=ENTRADA
```

Mensaje visual:

```text
MUCHOS ORÍGENES
        |
CONTEXTO COMÚN
        |
INTEROPERABILIDAD
```

## Fallo FIWARE

Si FIWARE falla, PostgreSQL conserva el fichaje.

Mensaje al trabajador:

```text
Fichaje registrado.
Hay un problema temporal actualizando el estado compartido.
```

No decir:

```text
El fichaje ha fallado.
```

## Token y secretos

No incluir ningún token real.

No incluir credenciales reales.

`.env.example`:

```text
FIWARE_V2_URL=https://cb.iotplatform.telefonica.com:10027
FIWARE_SERVICE=dip_caceres_sandbox
FIWARE_SERVICE_PATH=/10_Jarandilla_de_la_Vera
FIWARE_TOKEN=
```

`.env` no se incluye en el ZIP y no debe versionarse.

Los tokens son temporales. No afirmar una duración fija; depende de la plataforma.

## Contacto oficial

¿Quieres conocer FIWARE en un entorno real?

FIWARE iHub El Círculo · Cáceres:

https://elcirculo.circularfab.es/fiware-ihub/

El acceso al sandbox utilizado en esta Master Class requiere autorización.

## Cierre pedagógico

Hasta ahora el contexto lo actualizaban personas desde una aplicación.

La siguiente pregunta es:

```text
¿Y SI EL DATO NO LO GENERA UNA PERSONA,
SINO UN DISPOSITIVO?
```

Eso prepara MQTT, ESP32, MicroPython e IoT. No se implementa todavía.
