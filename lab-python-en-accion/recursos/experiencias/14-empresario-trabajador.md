# Empresario y trabajador - autenticación y autorización

## La nueva necesidad

Ya sabemos fichar con una interfaz web y guardar ubicación aproximada.

Ahora aparece un problema real:

```text
No todas las personas deben poder hacer lo mismo.
```

La empresa puede crear trabajadores y consultar fichajes.

El trabajador debe poder identificarse y fichar, pero no debe poder usar operaciones administrativas aunque conozca la URL.

---

## Cuatro ideas clave

```text
AUTENTICACIÓN
¿Quién eres?

AUTORIZACIÓN
¿Qué puedes hacer?

INTERFAZ
!=
SEGURIDAD

EL CLIENTE
NO DECIDE
SU IDENTIDAD
```

Autenticarse es demostrar quién eres.

Autorizar es comprobar que esa persona puede realizar una operación concreta.

Ocultar un botón en HTML puede mejorar la interfaz, pero no protege la aplicación. La seguridad debe estar en FastAPI.

---

## Dos interfaces

```text
/app/empresa/
  -> crear trabajadores
  -> ver trabajadores
  -> consultar fichajes

/app/fichar/
  -> fichar entrada
  -> fichar salida
  -> ubicación opcional
  -> estado propio
  -> historial propio
```

Separar pantallas ayuda a que cada persona vea solo lo que necesita.

Pero la autorización real no depende de esas pantallas. Depende de FastAPI.

---

## 401 y 403

```text
401 Unauthorized
= no estás autenticado

403 Forbidden
= sabemos quién eres, pero no tienes permiso
```

Si alguien no ha iniciado sesión e intenta usar un endpoint protegido, FastAPI responde `401`.

Si un trabajador autenticado intenta usar una operación de empresa, FastAPI responde `403`.

---

## Autorización real

```text
TRABAJADOR
   ↓
POST /trabajadores
   ↓
FastAPI comprueba rol
   ↓
403 FORBIDDEN
```

Esto es distinto a ocultar el botón de crear trabajador.

Aunque el trabajador invoque directamente `POST /trabajadores` desde Swagger o desde otra herramienta, FastAPI comprueba el rol y rechaza la operación.

---

## Identidad controlada por el servidor

El cliente no decide su identidad.

```text
cookie
  ↓
sesión
  ↓
usuario autenticado
  ↓
trabajador_id real
  ↓
fichaje
```

La interfaz de fichar no envía el identificador del trabajador para decidir a quién pertenece el fichaje.

FastAPI lee la sesión, localiza el usuario autenticado y usa el `trabajador_id` real asociado a ese usuario.

Incluso si alguien intenta enviar otro `trabajador_id`, el servidor no debe usarlo para decidir la identidad.

---

## Trabajador no es usuario

```text
trabajadores
  id
  nombre

usuarios
  id
  usuario
  password_hash
  rol
  trabajador_id
```

Un trabajador representa una persona del negocio.

Un usuario representa una identidad que puede acceder al sistema.

```text
EMPRESA
usuario
rol = EMPRESA
trabajador_id = NULL

TRABAJADOR
usuario
rol = TRABAJADOR
trabajador_id -> trabajadores.id
```

Esta separación permite que la empresa tenga una cuenta administrativa y que cada trabajador tenga su propia cuenta para fichar.

---

## Contraseñas

Una contraseña nunca debe guardarse en texto plano.

Tampoco basta con aplicar un SHA-256 directo a la contraseña.

Esta práctica utiliza:

- PBKDF2;
- salt aleatorio;
- comparación segura.

No vamos a convertir esta experiencia en una clase de criptografía. La idea importante es esta:

```text
password escrito por el usuario
  ↓
verificación
  ↓
password_hash guardado
```

La base de datos guarda `password_hash`, no la contraseña original.

---

## Sesión

```text
login
 ↓
FastAPI verifica contraseña
 ↓
token aleatorio
 ↓
cookie HttpOnly
 ↓
servidor conserva sesión
 ↓
cada petición puede saber quién es el usuario
```

Usamos una cookie `HttpOnly` para que el navegador envíe la sesión al servidor.

No usamos JWT, OAuth ni OpenID Connect. Es una solución pedagógica para entender autenticación y autorización antes de introducir sistemas más complejos.

Seguimos trabajando en `localhost` con HTTP. HTTPS llegará más adelante, cuando abordemos acceso real desde móvil.

---

## Modelo completo

```text
trabajadores
  id
  nombre

fichajes
  id
  trabajador_id
  tipo
  fecha_hora
  latitud
  longitud
  precision_m

usuarios
  id
  usuario
  password_hash
  rol
  trabajador_id

sesiones
  token_hash
  usuario_id
  creada_en
  expira_en
```

La base existente evoluciona sin destruir los datos anteriores.

---

## Frontend y backend

```text
FRONTEND
-> orienta y comunica

BACKEND
-> aplica realmente la regla
```

La interfaz puede mostrar mensajes claros:

```text
Ya has registrado una entrada. Debes registrar la salida antes de volver a entrar.

No puedes registrar una salida porque no hay una entrada pendiente.
```

Pero FastAPI debe seguir rechazando peticiones inválidas si alguien las invoca directamente.

---

## Flujo de práctica

1. Preparar PostgreSQL y `.env`.
2. Arrancar FastAPI.
3. Entrar en `/app/empresa/`.
4. Iniciar sesión como empresa.
5. Crear un trabajador con usuario y contraseña.
6. Entrar en `/app/fichar/`.
7. Iniciar sesión como trabajador.
8. Fichar ENTRADA y SALIDA.
9. Comprobar que el trabajador solo ve sus propios fichajes.
10. Probar desde Swagger que un trabajador recibe `403` al intentar `POST /trabajadores`.

---

## Pruebas validadas

En la validación real se ejecutó:

```text
.\.venv\Scripts\python.exe -m unittest -v test_api.py

Ran 18 tests
OK
```

Las pruebas cubren login, logout, `401`, `403`, fichaje con identidad de sesión, geolocalización opcional y reglas anteriores de entrada/salida.

Apareció una advertencia técnica de Starlette relacionada con `TestClient` y `httpx`. No es un fallo de los tests y no cambiamos dependencias solo para eliminarla.

---

## Mini-reto con agente

Usa tu agente de programación para hacer un cambio pequeño de autorización.

Primero pide análisis:

```text
Analiza esta aplicación.

Quiero que localices dónde se comprueba que solo la empresa puede crear trabajadores.

Explica qué archivo habría que modificar si quisiéramos permitir que la empresa también pudiera consultar el usuario asociado a cada trabajador.

NO modifiques nada todavía.
```

Después, si la propuesta es razonable, autoriza un cambio pequeño:

```text
Aplica únicamente el cambio necesario para que la empresa pueda ver el nombre de usuario asociado a cada trabajador en la respuesta de listado.

Mantén la autorización en FastAPI.
No permitas que un trabajador vea la lista de trabajadores.
Añade o adapta las pruebas necesarias.
No hagas Git.
```

Revisa `git diff`, ejecuta tests y haz una prueba manual. El objetivo no es confiar en el agente: es dirigirlo, revisar lo que cambia y validar el resultado.

---

## Cierre

Ya sabemos quién es cada trabajador y qué puede hacer.

Pero una pequeña empresa agrícola puede tener varias fincas y el trabajador puede estar hoy en una y mañana en otra.

¿Cómo indicamos en qué finca o lugar está trabajando?

Eso abre la siguiente experiencia:

```text
Experiencia 15 - Fincas / centros de trabajo variables
```
