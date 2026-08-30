# Del localhost al móvil

## La nueva necesidad

Hasta ahora hemos usado la aplicación desde el mismo ordenador donde ejecutamos FastAPI:

```text
http://localhost:8000
http://127.0.0.1:8000
```

Ahora queremos abrirla desde otro dispositivo conectado a la misma red local:

- móvil;
- tablet;
- otro PC.

La aplicación de la Experiencia 14 no necesita cambios de código para esta prueba. Vamos a cambiar cómo arrancamos el servidor y qué dirección escribe el cliente.

Si ya realizaste la Experiencia 14, reutiliza esa misma práctica.

---

## Localhost no es el PC servidor

La idea central es esta:

```text
LOCALHOST
=
ESTE MISMO DISPOSITIVO
```

En el PC:

```text
localhost:8000
      ↓
este PC
```

En el móvil:

```text
localhost:8000
      ↓
este móvil
```

Por eso `localhost:8000` desde el móvil no apunta al PC donde está ejecutándose FastAPI.

---

## Cliente y servidor

```text
PC SERVIDOR
FastAPI :8000
     ↑
     │ Wi-Fi / LAN
     │
MÓVIL
navegador
```

El móvil es el cliente: abre una página y envía peticiones.

El PC es el servidor: ejecuta FastAPI y responde.

PostgreSQL sigue estando detrás de FastAPI:

```text
MÓVIL
  ↓ HTTP
FASTAPI
  ↓
POSTGRESQL
```

El móvil no se conecta directamente a PostgreSQL. Solo habla con FastAPI.

---

## IP y puerto

Para entrar desde otro dispositivo necesitamos:

```text
IP DEL SERVIDOR + PUERTO
```

La IP identifica al equipo dentro de la red.

El puerto identifica el servicio dentro de ese equipo.

```text
192.168.1.X
        +
      8000
        ↓
192.168.1.X:8000
```

La URL de la práctica será:

```text
http://IP_DEL_PC:8000/app/fichar/
```

No fijes una IP concreta: cada red tendrá la suya.

---

## Arrancar para el propio PC

Primero arranca como siempre:

```bash
uvicorn main:app --reload
```

Esto sirve para trabajar desde el propio ordenador:

```text
http://localhost:8000/app/empresa/
http://localhost:8000/app/fichar/
```

Por defecto, Uvicorn escucha en `127.0.0.1`, que es acceso local.

---

## Arrancar para la red local

Para permitir conexiones desde otro dispositivo de la misma LAN:

```bash
uvicorn main:app --reload --host 0.0.0.0
```

`0.0.0.0` no es la dirección que debe escribir el usuario en el navegador.

Significa conceptualmente:

```text
Uvicorn escucha en las interfaces de red disponibles.
```

```text
SERVIDOR ESCUCHA:
0.0.0.0:8000

CLIENTE ABRE:
192.168.1.X:8000
```

---

## Obtener la IPv4 en Windows

Opción directa:

```powershell
ipconfig
```

Busca el adaptador que estás usando realmente:

- Wi-Fi;
- Ethernet.

Localiza la dirección IPv4.

Alternativa más limpia:

```powershell
Get-NetIPConfiguration |
Where-Object { $_.IPv4DefaultGateway -ne $null }
```

No elijas automáticamente interfaces virtuales como:

- WSL;
- Hyper-V;
- Docker;
- VPN.

Una IP de una interfaz virtual puede servir dentro del PC, pero no necesariamente será alcanzable desde el móvil.

---

## Windows Firewall

Al aceptar conexiones desde otros dispositivos, Windows puede pedir permiso.

Para una práctica en aula o red local:

- permite únicamente cuando corresponda;
- prefiere red privada;
- no abras puertos indiscriminadamente;
- no desactives el firewall.

Si funciona en `localhost` pero no desde otro dispositivo, revisa:

1. FastAPI arrancado con `--host 0.0.0.0`.
2. IP correcta.
3. Ambos dispositivos en la misma Wi-Fi/LAN.
4. Windows Firewall.
5. Aislamiento de clientes de la red.
6. VPN u otras interfaces.

---

## No hemos necesitado CORS

En esta práctica, frontend y API salen del mismo FastAPI:

```text
http://IP:8000/app/fichar/
http://IP:8000/auth/...
http://IP:8000/fichajes/...
```

El navegador está hablando con el mismo origen: mismo protocolo, misma IP y mismo puerto.

Por eso no añadimos CORS.

```text
NO TODA APLICACIÓN CON fetch() NECESITA CORS.
```

---

## Sesión desde el móvil

La sesión existente sigue funcionando desde el móvil:

```text
móvil
 ↓
cookie de sesión
 ↓
FastAPI
 ↓
usuario autenticado
 ↓
rol
 ↓
operación permitida
```

No cambiamos autenticación ni autorización.

No introducimos JWT.

---

## Geolocalización

En nuestra validación real:

- el navegador móvil abrió la aplicación;
- permitió iniciar sesión;
- permitió fichar;
- la geolocalización funcionó.

Pero no lo conviertas en una afirmación universal.

Las APIs sensibles del navegador pueden depender del navegador, del sistema operativo y de las condiciones de seguridad.

HTTPS sigue siendo importante para despliegues reales y se abordará cuando aparezca una necesidad concreta.

```text
NO RESOLVER UN PROBLEMA QUE TODAVÍA NO TENEMOS.
```

---

## Práctica

1. Arranca primero normalmente:

```bash
uvicorn main:app --reload
```

2. Comprueba `localhost` desde el PC.
3. Razona por qué `localhost` no sirve igual desde el móvil.
4. Para y vuelve a arrancar:

```bash
uvicorn main:app --reload --host 0.0.0.0
```

5. Ejecuta:

```powershell
ipconfig
```

6. Identifica la IPv4 del adaptador activo.
7. Prueba desde el propio PC:

```text
http://IP_DEL_PC:8000/app/fichar/
```

8. Conecta móvil, tablet u otro PC a la misma red.
9. Abre:

```text
http://IP_DEL_PC:8000/app/fichar/
```

10. Inicia sesión.
11. Realiza un fichaje.
12. Observa si la geolocalización funciona en ese dispositivo.
13. Explica lo ocurrido.

---

## Mini-reto de diagnóstico

Situación:

```text
En mi PC funciona localhost:8000,
pero desde el móvil no abre.
```

Investiga antes de modificar código.

Puedes pedir ayuda a tu agente con este prompt:

```text
Analiza esta práctica.

En mi PC funciona http://localhost:8000, pero desde el móvil no puedo abrir la aplicación.

Primero ayúdame a diagnosticar el problema sin modificar código.

Comprueba o dime cómo comprobar:
- cómo está arrancado Uvicorn;
- cuál es la IP correcta del PC;
- si ambos dispositivos están en la misma red;
- si Windows Firewall puede estar bloqueando;
- si estoy usando una interfaz virtual;
- si el puerto 8000 es el correcto.

NO modifiques archivos todavía.
```

Aprendizaje:

```text
UN PROBLEMA TÉCNICO NO SIEMPRE REQUIERE CAMBIAR CÓDIGO.
```

---

## Resultado

El objetivo observable es:

```text
PC
  ejecuta FastAPI

OTRO DISPOSITIVO
  abre la interfaz mediante la IP del PC
```

Al terminar debes poder explicar:

- qué es `localhost`;
- por qué `localhost` no sirve desde el móvil;
- qué es la IP del servidor;
- qué representa `:8000`;
- por qué usamos `--host 0.0.0.0`;
- qué dispositivo es cliente;
- qué dispositivo es servidor;
- por qué el móvil no accede directamente a PostgreSQL.

---

## Cierre

Hasta ahora nuestro programa funcionaba en el ordenador donde lo desarrollábamos.

Ahora ya sabemos convertir ese PC en servidor para otros dispositivos de la red.

Pero consultar filas de fichajes no es la mejor forma de entender qué está ocurriendo.

¿Cómo mostramos la información de forma clara?

Eso abre la siguiente experiencia:

```text
Experiencia 16 - Dashboard
```
