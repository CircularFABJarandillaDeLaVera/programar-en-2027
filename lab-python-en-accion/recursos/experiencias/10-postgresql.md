# PostgreSQL - Datos que permanecen

## ¿Qué problema tenemos?

En la API de participantes ya podíamos crear datos desde Swagger. El problema era dónde vivían esos datos.

Swagger es una página web que FastAPI genera automáticamente para ver y probar nuestra API sin tener que programar otra aplicación. Desde aquí podemos ejecutar peticiones como `GET` y `POST` y ver la respuesta del servidor. En nuestro proyecto está disponible en `/docs`.

**Swagger no es nuestra API ni nuestra base de datos.** Es una interfaz de prueba que utilizamos para enviar peticiones a la API y ver sus respuestas.

```text
SWAGGER
(página para probar)
   ↓
FASTAPI
(nuestra API)
   ↓
POSTGRESQL
(los datos)
```

```text
ANTES

Swagger -> FastAPI -> memoria
                       ↓
                  desaparece
```

Si la aplicación se paraba, la lista de Python desaparecía con ella.

---

## Memoria vs base de datos

La memoria sirve para trabajar mientras el programa está encendido.

Una base de datos sirve para guardar información de forma organizada y recuperarla después.

```text
MEMORIA       -> los datos desaparecen
BASE DE DATOS -> los datos permanecen
```

PostgreSQL es la base de datos que usaremos en esta práctica.

---

## PostgreSQL

Ahora queremos este recorrido:

```text
DESPUÉS

Swagger -> FastAPI -> psycopg -> PostgreSQL
                                  ↓
                                datos
```

`psycopg` es la librería que permite a Python hablar con PostgreSQL.

---

## Tabla, fila, columna y clave

La tabla de la práctica se llama `participantes`.

```text
id | nombre | edad
---+--------+-----
1  | Ana    | 35
```

- `tabla`: grupo de datos del mismo tipo.
- `fila`: un registro concreto.
- `columna`: un dato de cada registro.
- `clave primaria`: identificador único de cada fila.

SQL mínimo:

```sql
CREATE TABLE participantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INTEGER NOT NULL
);
```

---

## FastAPI + psycopg

La API se ejecuta en Windows y PostgreSQL en Docker:

```text
FastAPI en Windows
        ↓
localhost:5432
        ↓
PostgreSQL en Docker
```

La conexión se configura con `.env`, creado a partir de `.env.example`.

---

## POST = INSERT

Cuando haces `POST /participantes` desde Swagger:

```text
FastAPI recibe POST
        ↓
Python ejecuta INSERT
        ↓
PostgreSQL guarda la fila
```

```sql
INSERT INTO participantes (nombre, edad)
VALUES (..., ...)
RETURNING id, nombre, edad;
```

---

## GET = SELECT

Cuando haces `GET /participantes`:

```text
FastAPI recibe GET
        ↓
Python ejecuta SELECT
        ↓
PostgreSQL devuelve las filas
```

```sql
SELECT id, nombre, edad FROM participantes ORDER BY id;
```

---

## Persistencia

La comprobación clave:

1. Crear Ana desde Swagger.
2. Ver Ana con `SELECT * FROM participantes;`.
3. Parar FastAPI.
4. Volver a arrancar FastAPI.
5. Ejecutar `GET /participantes`.

Resultado:

```text
Ana sigue existiendo.
```

Persistencia FastAPI -> PostgreSQL: validada realmente.

---

## ¿Y si elimino el contenedor?

PostgreSQL está dentro de un contenedor. Si paras y arrancas el mismo contenedor, los datos siguen.

Pero si eliminas el contenedor y creas otro sin almacenamiento persistente, puedes perder tabla y datos.

Esto nos lleva al segundo problema.

---

## Volumen Docker

Un volumen separa la vida del contenedor de la vida de los datos.

```text
FastAPI
   ↓
PostgreSQL
   ↓
VOLUMEN
   ↓
datos persistentes
```

```powershell
docker volume create datos-postgres-python
```

Y PostgreSQL se arranca usando:

```powershell
-v datos-postgres-python:/var/lib/postgresql/data
```

Con el mismo volumen, un nuevo contenedor puede encontrar los datos anteriores.

---

## Resultado

```text
No solo hemos conseguido que FastAPI guarde datos en PostgreSQL.
También hemos separado la vida del contenedor de la vida de los datos.
```
