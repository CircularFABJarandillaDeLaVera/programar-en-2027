# Control horario - De API de ejemplo a aplicación real

## De tecnología a problema real

Hasta ahora has aprendido piezas: una API, Swagger, Docker, PostgreSQL y persistencia.

Ahora las usamos juntas para resolver una necesidad concreta.

```text
Python
   ↓
FastAPI
   ↓
reglas de negocio
   ↓
PostgreSQL
   ↓
aplicación real
```

El caso es sencillo: una empresa pequeña necesita registrar cuándo entran y salen sus trabajadores.

---

## Qué vamos a construir

1. Crear trabajadores.
2. Registrar una entrada.
3. Registrar una salida.
4. Consultar todos los fichajes.
5. Consultar el historial de un trabajador.
6. Comprobar que los datos permanecen en PostgreSQL.

```text
Ana
08:02 -> ENTRADA
14:07 -> SALIDA
```

---

## Quién hace qué

Swagger es la página para probar la API.

FastAPI es nuestra API.

PostgreSQL es donde permanecen los datos.

```text
Swagger
   ↓
FastAPI
   ↓
reglas de negocio
   ↓
PostgreSQL
```

Swagger envía peticiones. FastAPI decide si tienen sentido. PostgreSQL guarda trabajadores y fichajes.

---

## Modelo de datos

Ya no basta una sola tabla de ejemplo. Ahora necesitamos separar trabajadores y fichajes.

```text
trabajadores
     │
     │ 1
     ↓
fichajes
     muchos
```

- `trabajadores`: guarda quién puede fichar.
- `fichajes`: guarda cada entrada o salida.
- `trabajador_id`: indica a qué trabajador pertenece cada fichaje.

---

## Clave foránea

Una clave foránea es el dato que permite relacionar un fichaje con el trabajador al que pertenece.

```text
trabajadores.id = 1
        ↑
fichajes.trabajador_id = 1
```

Gracias a esa relación podemos preguntar: “muéstrame los fichajes de Ana”.

---

## Reglas de negocio

Una regla de negocio es una condición que la aplicación debe respetar porque tiene sentido en el problema real.

```text
ENTRADA -> ENTRADA  no
ENTRADA -> SALIDA   sí
SALIDA sin entrada  no
```

La API no solo guarda datos: también rechaza operaciones que no tienen sentido.

---

## Fecha y hora

El trabajador no escribe la hora manualmente.

Cuando pulsa fichar entrada o salida, el servidor registra cuándo ocurrió.

```text
POST /fichajes/entrada
        ↓
FastAPI recibe la petición
        ↓
el servidor genera fecha_hora
        ↓
PostgreSQL guarda el fichaje
```

En esta práctica se guarda la fecha y hora en UTC para tener un punto de referencia claro.

---

## ENTENDER -> HACER

La práctica empieza preparando PostgreSQL y arrancando FastAPI.

Después abres Swagger en `/docs` y creas una trabajadora llamada Ana.

```json
{
  "nombre": "Ana"
}
```

FastAPI ejecuta un `INSERT` en la tabla `trabajadores`.

---

## PROBAR

Con Ana creada, registras una entrada y consultas su historial.

```text
POST /fichajes/entrada
```

```json
{
  "trabajador_id": 1
}
```

```text
GET /trabajadores/1/fichajes
```

Debe aparecer una `ENTRADA` con fecha y hora generada por el servidor.

---

## ROMPER UNA REGLA

Si intentas registrar otra entrada seguida, la API debe rechazarla.

```text
ENTRADA
ENTRADA

No se puede registrar otra ENTRADA sin una SALIDA previa
```

Después registras una salida.

Si intentas otra salida seguida, también debe rechazarse.

---

## COMPROBAR

El historial final debe mostrar entrada y salida en orden.

```text
Ana
ENTRADA -> fecha/hora
SALIDA  -> fecha/hora
```

Ahora paras FastAPI, vuelves a arrancarlo y consultas el historial otra vez.

---

## RESULTADO

```text
Los fichajes siguen allí.
```

Esto es distinto de las primeras APIs de ejemplo porque los datos ya no viven en una lista temporal de Python: permanecen en PostgreSQL.

Ya no estás probando una tecnología aislada. Has construido el núcleo de una aplicación real.
