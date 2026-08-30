# Una interfaz para fichar - Del Swagger a una aplicación que puede usar una persona

## La nueva necesidad

La API de control horario ya funciona, guarda datos en PostgreSQL y aplica reglas.

Pero un trabajador real no va a utilizar Swagger para fichar.

```text
ANTES

Persona -> Swagger -> API
```

```text
AHORA

Persona -> interfaz web -> API
```

Swagger no desaparece: sigue siendo útil para desarrollar y probar la API.

Simplemente ya no será la pantalla pensada para el trabajador.

---

## Qué vamos a construir

1. Abrir una página web.
2. Crear o seleccionar un trabajador.
3. Pulsar `FICHAR ENTRADA`.
4. Ver una confirmación clara.
5. Pulsar `FICHAR SALIDA`.
6. Consultar el historial.
7. Comprobar que PostgreSQL conserva los datos.

---

## Quién hace qué

La interfaz solicita y muestra.

FastAPI decide y aplica reglas.

PostgreSQL guarda.

```text
INTERFAZ
solicita y muestra

FASTAPI
decide y aplica reglas

POSTGRESQL
guarda
```

---

## HTML, CSS y JavaScript

La interfaz tiene tres piezas pequeñas.

- `HTML`: coloca el selector, los botones, los mensajes y el historial.
- `CSS`: hace que la página sea clara y usable también en pantalla estrecha.
- `JavaScript`: reacciona a los botones y habla con la API.

---

## fetch()

`fetch()` permite que JavaScript envíe peticiones HTTP a nuestra API.

```text
BOTÓN
  ↓
JavaScript
  ↓
fetch()
  ↓
FastAPI
  ↓
PostgreSQL
```

Hasta ahora tú enviabas peticiones desde Swagger.

Ahora la página las envía por ti cuando pulsas un botón.

---

## FastAPI sirve la página

Para mantener la práctica sencilla, FastAPI sirve también los archivos de la interfaz.

```text
FastAPI
├── API
└── interfaz en /app/
```

Así no necesitamos otro servidor para la página ni resolver problemas de conexión entre servidores distintos.

---

## ARRANCAR

Primero preparas PostgreSQL y arrancas FastAPI como en la experiencia anterior.

```bash
uvicorn main:app --reload
```

Swagger sigue en `/docs`.

La nueva interfaz está en `/app/`.

---

## ABRIR

Desde el navegador abres la interfaz y eliges un trabajador.

Si no existe, puedes crearlo desde la propia página.

```text
http://127.0.0.1:8000/app/
```

---

## FICHAR

Cuando pulsas entrada, JavaScript envía una petición a FastAPI.

```text
FICHAR ENTRADA
      ↓
POST /fichajes/entrada
      ↓
FastAPI comprueba la regla
      ↓
PostgreSQL guarda el fichaje
```

---

## PROVOCAR UN ERROR

Si pulsas entrada dos veces seguidas, la interfaz no decide por su cuenta.

Pide la operación y FastAPI la rechaza.

```text
ENTRADA -> ENTRADA

No se puede registrar otra ENTRADA sin una SALIDA previa
```

La página transforma esa respuesta en un mensaje comprensible.

---

## COMPROBAR HISTORIAL

Al seleccionar un trabajador, la interfaz consulta su historial y muestra entradas y salidas.

```text
GET /trabajadores/1/fichajes

ENTRADA -> fecha/hora
SALIDA  -> fecha/hora
```

PostgreSQL guarda la fecha y hora en UTC.

El navegador la presenta en hora local para que sea más fácil leerla.

---

## REINICIAR

Paras FastAPI, lo arrancas otra vez y vuelves a abrir `/app/`.

```text
Los fichajes siguen apareciendo.
```

La interfaz no guarda los datos.

Los datos permanecen porque están en PostgreSQL.

---

## RESULTADO

```text
Hasta ahora teníamos una aplicación que funcionaba.
Ahora también tenemos una forma sencilla de utilizarla.
```

Y aparece una nueva pregunta para más adelante: si una persona puede fichar desde el móvil, ¿desde dónde está fichando?
