# ¿Qué es un broker de contexto?

## Orion-LD + NGSI-LD

Venimos de la Experiencia 16.

PostgreSQL puede responder:

```text
¿QUÉ OCURRIÓ?
```

Por ejemplo:

```text
08:00 ENTRADA
10:00 SALIDA
10:30 ENTRADA
```

Pero aparece una nueva pregunta:

```text
¿CUÁL ES EL ESTADO ACTUAL QUE QUIERO COMPARTIR?
```

Por ejemplo:

```text
Employee:001
working = true
lastEvent = ENTRADA
```

La idea central de esta experiencia es:

```text
HISTÓRICO
!=
CONTEXTO ACTUAL
```

Esto no significa que Orion-LD sea "una base que solo guarda el último dato". Es la forma en que lo utilizamos en este proyecto para representar y compartir contexto actual.

---

## Qué es un broker de contexto

Un broker de contexto es un servicio al que podemos decir cuál es el estado actual de algo y después preguntárselo.

Le decimos:

```text
Employee:001 está trabajando
```

Más tarde preguntamos:

```text
¿Cuál es el estado de Employee:001?
```

Orion-LD nos devuelve el contexto almacenado.

No estamos conectando todavía FastAPI. Primero queremos entender qué es el broker y qué le estamos enviando.

---

## NGSI-LD mínimo

En esta práctica necesitamos solo cuatro conceptos:

ENTIDAD:
la cosa que representamos.

ID:
identificador único.

TYPE:
qué clase de cosa es.

PROPERTY:
una característica o estado.

Usaremos:

```text
id   = urn:ngsi-ld:Employee:001
type = Employee
```

Y estas propiedades:

- `name`
- `working`
- `lastEvent`
- `lastEventAt`

No introducimos todavía `Relationship`, `GeoProperty`, suscripciones, API temporal ni conceptos avanzados.

---

## JSON para hablar con otro servicio

El alumno ya conoce JSON. Ahora lo usa para comunicarse con Orion-LD.

La entidad ficticia es:

```json
{
  "id": "urn:ngsi-ld:Employee:001",
  "type": "Employee",
  "name": {
    "type": "Property",
    "value": "Empleado de prueba"
  },
  "working": {
    "type": "Property",
    "value": false
  },
  "lastEvent": {
    "type": "Property",
    "value": "SALIDA"
  },
  "lastEventAt": {
    "type": "Property",
    "value": "2026-01-01T10:00:00Z"
  }
}
```

No usamos datos reales.

---

## Docker en esta práctica

Docker levanta:

```text
ORION-LD
+
MONGODB
```

Orion-LD necesita su propio almacenamiento.

```text
MongoDB de Orion-LD
!=
PostgreSQL del control horario
```

MongoDB aquí es infraestructura necesaria para Orion-LD. No lo convertimos en nueva materia del curso.

---

## Secuencia validada

La secuencia real de la práctica es:

```text
docker compose up -d
        ↓
Orion-LD :1026
        ↓
crear Employee:001
        ↓
working = false
        ↓
consultar
        ↓
PATCH
        ↓
working = true
        ↓
consultar
```

Queremos ver claramente el antes y el después.

ANTES:

```text
working = false
lastEvent = SALIDA
```

DESPUÉS:

```text
working = true
lastEvent = ENTRADA
```

---

## Práctica

Arranca los servicios:

```powershell
docker compose up -d
```

Qué le pedimos:

```text
Arranca Orion-LD y MongoDB en segundo plano.
```

Comprueba el broker:

```powershell
Invoke-RestMethod -Uri "http://localhost:1026/version"
```

Qué esperamos:

```text
orionld version : 1.12.0
```

---

## Crear la entidad

Creamos `Employee:001` desde el archivo `ejemplos/empleado.json`:

```powershell
Invoke-RestMethod `
  -Method Post `
  -Uri "http://localhost:1026/ngsi-ld/v1/entities" `
  -ContentType "application/ld+json" `
  -InFile "ejemplos/empleado.json"
```

Qué le pedimos:

```text
Guarda en el broker el contexto inicial de Employee:001.
```

Qué esperamos:

```text
No aparece ningún error.
```

Si repites la práctica y la entidad ya existe, puede aparecer un conflicto. Para repetir desde cero, limpia la entidad de prueba al final.

---

## Consultar

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:1026/ngsi-ld/v1/entities/urn:ngsi-ld:Employee:001" `
  -Headers @{ Accept = "application/ld+json" }
```

Qué le pedimos:

```text
Dime cuál es el contexto actual de Employee:001.
```

Qué esperamos observar:

```text
working = false
lastEvent = SALIDA
```

---

## Modificar

Ahora cambiamos el contexto actual:

```text
working = false → true
lastEvent = SALIDA → ENTRADA
```

En PowerShell:

```powershell
$actualizacion = @{
  working = @{
    type = "Property"
    value = $true
  }
  lastEvent = @{
    type = "Property"
    value = "ENTRADA"
  }
  lastEventAt = @{
    type = "Property"
    value = "2026-01-01T10:30:00Z"
  }
  "@context" = @(
    "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
  )
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Method Patch `
  -Uri "http://localhost:1026/ngsi-ld/v1/entities/urn:ngsi-ld:Employee:001/attrs" `
  -ContentType "application/ld+json" `
  -Body $actualizacion
```

No estamos añadiendo una fila histórica como en PostgreSQL. Estamos actualizando el contexto actual publicado en el broker.

---

## Consultar de nuevo

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:1026/ngsi-ld/v1/entities/urn:ngsi-ld:Employee:001" `
  -Headers @{ Accept = "application/ld+json" }
```

Resultado esperado:

```text
ANTES
Employee:001
working = false
lastEvent = SALIDA

DESPUÉS
Employee:001
working = true
lastEvent = ENTRADA
```

---

## PostgreSQL vs Orion-LD

POSTGRESQL:

```text
08:00 ENTRADA
10:00 SALIDA
10:30 ENTRADA
```

Pregunta:

```text
¿Qué ocurrió?
```

ORION-LD:

```text
Employee:001
working = true
lastEvent = ENTRADA
```

Pregunta:

```text
¿Qué contexto actual estoy publicando?
```

No compiten. Resuelven necesidades distintas en nuestro proyecto.

---

## Privacidad

Interoperable no significa publicar todos los datos.

Hemos elegido deliberadamente no publicar:

- latitud;
- longitud;
- precisión;
- credenciales;
- sesiones;
- hashes;
- histórico completo.

Solo compartimos lo necesario para el contexto que queremos representar.

---

## Limpiar para repetir

Si quieres repetir la práctica desde cero, elimina la entidad ficticia:

```powershell
Invoke-RestMethod `
  -Method Delete `
  -Uri "http://localhost:1026/ngsi-ld/v1/entities/urn:ngsi-ld:Employee:001"
```

Qué le pedimos:

```text
Borra solo Employee:001 para poder volver a crearla.
```

Después puedes parar los servicios:

```powershell
docker compose down
```

---

## Mini-reto

Añade una nueva propiedad ficticia:

```text
statusMessage = Disponible
```

El reto consiste en:

1. analizar la entidad;
2. decidir cómo representar la `Property`;
3. modificarla mediante NGSI-LD;
4. consultar la entidad;
5. comprobar el resultado.

No necesitas introducir conceptos nuevos.

---

## Validación real

Durante la validación real de esta práctica se comprobó:

- Orion-LD 1.12.0;
- `/version` OK;
- creación de entidad OK;
- consulta inicial OK;
- `working=false` comprobado;
- `lastEvent=SALIDA` comprobado;
- `PATCH` de propiedades OK;
- consulta posterior OK;
- `working=true` comprobado;
- `lastEvent=ENTRADA` comprobado;
- `docker compose down` OK;
- JSON validado;
- sin datos reales;
- sin credenciales.

---

## Cierre

Hemos cambiado el estado de `Employee:001` manualmente.

Pero cuando una persona ficha ENTRADA o SALIDA, nadie debería tener que abrir PowerShell para actualizar Orion-LD.

¿Puede nuestra aplicación Python hacerlo automáticamente?

Eso abre:

```text
Experiencia 18 · Python conecta PostgreSQL con FIWARE
```
