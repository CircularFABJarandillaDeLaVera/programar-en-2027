# Guion técnico · Master Class opcional Python + FIWARE real

## Antes de la clase

- Comprobar Docker y PostgreSQL.
- Comprobar FastAPI.
- Generar un token FIWARE válido.
- Comprobar que el sandbox responde.
- Verificar el subservicio en ThinkingCity.
- Confirmar que `Fiware-ServicePath` coincide con el subservicio esperado.
- Preparar Postman con variables de entorno.
- No proyectar secretos, tokens ni credenciales.
- Tener abierta la práctica `control-horario-fiware-sandbox`.

## Demo 1 · Postman

Objetivo: enseñar la conversación mínima con el sandbox.

1. Autenticación:

```text
POST https://auth.iotplatform.telefonica.com:15001/v3/auth/tokens
```

2. Guardar token con script moderno:

```javascript
pm.environment.set(
    "token",
    pm.response.headers.get("X-Subject-Token")
);
```

3. Crear entidad ficticia:

```text
POST /v2/entities
Python2027_Employee_001
```

4. Consultar entidad:

```text
GET /v2/entities/Python2027_Employee_001
```

5. Actualizar atributos:

```text
PATCH /v2/entities/Python2027_Employee_001/attrs
```

6. Consultar de nuevo y enseñar `working`, `lastEvent`, `lastEventAt`.

## Demo 2 · Web

Objetivo: demostrar que el trabajador usa una interfaz normal.

1. Abrir `/app/fichar/`.
2. Iniciar sesión con trabajador de prueba.
3. Registrar ENTRADA.
4. Registrar SALIDA.
5. Recalcar que la interfaz no habla de Keystone, NGSI v2, Telefónica ni token.

Mensaje esperado:

```text
Fichaje registrado.
```

Si falla FIWARE:

```text
Fichaje registrado.
Hay un problema temporal actualizando el estado compartido.
```

## Demo 3 · PostgreSQL

Objetivo: enseñar el histórico.

Mostrar que PostgreSQL conserva:

```text
A -> ENTRADA
B -> ENTRADA
A -> SALIDA
```

Idea verbal:

```text
PostgreSQL responde a "qué ocurrió".
```

## Demo 4 · FIWARE

Objetivo: enseñar el contexto actual.

Mostrar:

```text
Employee_A
working=false
lastEvent=SALIDA

Employee_B
working=true
lastEvent=ENTRADA
```

Idea verbal:

```text
FIWARE responde a "qué contexto actual estoy compartiendo".
```

## Demo 5 · Dos trabajadores y dos dispositivos

Objetivo: hacer visible el contexto común.

Secuencia:

```text
Trabajador A -> móvil -> ENTRADA
Trabajador B -> otro dispositivo -> ENTRADA
Trabajador A -> SALIDA
```

Pantallas:

- web de fichaje;
- consulta PostgreSQL;
- consulta FIWARE.

Mensaje visual:

```text
MUCHOS ORÍGENES
        |
CONTEXTO COMÚN
        |
INTEROPERABILIDAD
```

## Pregunta al grupo

```text
Si PostgreSQL ya guarda los fichajes,
¿qué estamos ganando al publicar contexto en FIWARE?
```

Respuesta esperada:

- interoperabilidad;
- modelo común;
- contexto compartible;
- integración con otros sistemas.

## Bloque NGSI-LD frente a NGSI v2

Explicar de forma breve:

```text
Experiencias 17-18:
Orion-LD local -> NGSI-LD

Master Class:
Sandbox Telefónica -> NGSI v2
```

No decir que son exactamente la misma API.

Sí decir:

```text
Los dos trabajan con contexto FIWARE,
pero el formato y las operaciones concretas cambian.
```

## Privacidad

Recalcar:

```text
INTEROPERABLE
NO SIGNIFICA
PUBLICAR TODOS LOS DATOS.
```

FIWARE recibe únicamente:

- `working`
- `lastEvent`
- `lastEventAt`

No enviar ni mostrar:

- nombre;
- latitud;
- longitud;
- `precision_m`;
- usuario;
- password;
- token;
- sesiones;
- hashes;
- histórico completo.

## Cierre

Frase de salida:

```text
Hasta ahora el contexto lo actualizaban personas desde una aplicación.
La siguiente pregunta es:
¿y si el dato no lo genera una persona, sino un dispositivo?
```

Preparar el puente hacia MQTT, ESP32, MicroPython e IoT sin implementar esas experiencias todavía.
