# Del dato al dashboard

## La nueva necesidad

Ya tenemos una aplicación que registra fichajes, guarda trabajadores, usa sesiones, conserva la geolocalización y aplica permisos.

Pero aparece un problema nuevo:

```text
TENEMOS DATOS

pero...

LEER FILAS
NO ES LO MISMO QUE
ENTENDER QUÉ ESTÁ PASANDO
```

Antes teníamos fichajes individuales. Ahora queremos responder preguntas útiles:

- ¿cuántas personas están trabajando?
- ¿quién está trabajando?
- ¿cuántas entradas y salidas hubo hoy?
- ¿cuál fue la última actividad?
- ¿cuánto tiempo registrado tiene cada trabajador hoy?

La idea principal es:

```text
DATO != INFORMACIÓN
```

---

## Qué vamos a construir

Vamos a añadir una pantalla de empresa que resume lo que ya existe en PostgreSQL.

```text
FICHAJES
   ↓
PostgreSQL
   ↓
Python
   ↓
listas + diccionarios
datetime + timedelta
funciones
   ↓
RESUMEN
   ↓
DASHBOARD
```

El dashboard no guarda fichajes nuevos. Lee los datos, los interpreta y los presenta de forma comprensible.

---

## PostgreSQL y Python trabajan juntos

PostgreSQL guarda, filtra y ordena datos.

Python interpreta esos datos y construye información.

No es una competición entre SQL y Python. Cada herramienta resuelve una parte del problema:

```text
POSTGRESQL
  ↓
datos ordenados
  ↓
PYTHON
  ↓
agrupa
interpreta
calcula
  ↓
DASHBOARD
  ↓
información comprensible
```

---

## Un ejemplo de tiempo registrado

Imagina estos fichajes de una persona:

```text
ENTRADA 08:00
SALIDA 10:00
ENTRADA 10:30
SALIDA 13:00
```

Python puede calcular:

```text
2 h
+
2 h 30 min
=
4 h 30 min registrados
```

Eso ya no es una fila suelta de una base de datos. Es información útil.

---

## Jornadas abiertas

También puede ocurrir esto:

```text
ENTRADA 14:00
sin SALIDA
```

Resultado:

```text
TRABAJANDO
```

No inventamos una hora de salida.

Una ENTRADA todavía abierta:

- indica TRABAJANDO;
- no inventa una SALIDA;
- no se suma como tramo terminado.

El tiempo registrado hoy solo suma tramos completos:

```text
ENTRADA → SALIDA
```

---

## Qué muestra el dashboard

La pantalla de empresa muestra:

- Trabajando ahora
- Entradas hoy
- Salidas hoy
- Última actividad
- Trabajador
- Estado
- Último fichaje
- Tiempo registrado hoy

Todavía no necesitamos una gráfica para entender estos datos.

Primero queremos una respuesta clara:

```text
¿Qué está pasando ahora?
```

---

## Qué significa hoy

PostgreSQL conserva `fecha_hora` en UTC.

UTC no tiene por qué ser la hora que ve necesariamente el usuario.

La aplicación necesita saber qué significa "hoy" para quien usa el dashboard. Por eso se configura:

```text
APP_TIMEZONE=Europe/Madrid
```

Python calcula el día local y lo traduce correctamente al rango UTC necesario para consultar PostgreSQL.

En esta práctica se usa `zoneinfo` y `tzdata` para disponer de zonas horarias IANA de forma reproducible en Windows.

No vamos a profundizar en teoría de husos horarios. Solo necesitamos entender que "hoy" depende de la zona horaria de la aplicación.

---

## Autorización

El dashboard pertenece a la empresa.

```text
SIN SESIÓN
→ 401

TRABAJADOR
→ 403

EMPRESA
→ dashboard
```

El dashboard no está protegido porque "el trabajador no vea el botón".

FastAPI sigue decidiendo los permisos.

Ocultar algo en HTML puede mejorar la interfaz, pero no es seguridad.

---

## Pruebas reales

Durante la validación real de esta práctica se ejecutaron:

```text
29 tests
OK
```

No vamos a convertir esta experiencia en una lista de 29 pruebas. Lo importante es qué familias de comportamiento cubren:

- autenticación y autorización;
- fichajes anteriores;
- geolocalización;
- jornadas abiertas y cerradas;
- varios trabajadores;
- varios tramos;
- contadores de hoy;
- fechas fuera de hoy.

Las pruebas automáticas ayudan a detectar regresiones, pero no sustituyen la revisión humana del dashboard con navegador y PostgreSQL real.

---

## Práctica

1. Prepara PostgreSQL como en las experiencias anteriores.
2. Copia `.env.example` a `.env`.
3. Revisa `APP_TIMEZONE=Europe/Madrid`.
4. Instala dependencias:

```bash
pip install -r requirements.txt
```

5. Ejecuta tests:

```bash
python -m unittest
```

6. Arranca FastAPI:

```bash
uvicorn main:app --reload
```

7. Abre la interfaz de empresa:

```text
http://localhost:8000/app/empresa/
```

8. Crea trabajadores.
9. Entra como trabajador en:

```text
http://localhost:8000/app/fichar/
```

10. Registra entradas y salidas.
11. Vuelve al dashboard de empresa.
12. Comprueba que el resumen cambia.

---

## Qué debes observar

Comprueba que:

- al registrar una ENTRADA aumenta "Entradas hoy";
- un trabajador con ENTRADA abierta aparece como TRABAJANDO;
- al registrar una SALIDA aumenta "Salidas hoy";
- un trabajador que ha salido aparece como FUERA;
- "Última actividad" cambia con el último fichaje;
- "Tiempo registrado hoy" solo suma tramos completos.

Ese es el momento importante:

```text
datos históricos
→
información útil para decidir
```

---

## Mini-reto con agente

La empresa quiere saber también cuántos trabajadores han fichado al menos una vez hoy.

Primero pide a tu agente que analice:

```text
Analiza esta aplicación de control horario.

Quiero añadir al dashboard una métrica nueva:

"Trabajadores con algún fichaje hoy"

Primero localiza dónde se construye el resumen de empresa.

Explica qué partes pertenecen a PostgreSQL, cuáles a Python y cuáles al frontend.

NO modifiques nada todavía.
```

Después revisa su propuesta y decide si tiene sentido.

Si la autorizas, pide un cambio pequeño:

```text
Aplica únicamente el cambio necesario para añadir al dashboard la métrica:

"Trabajadores con algún fichaje hoy"

Mantén PostgreSQL, FastAPI y la interfaz actual.
Añade o adapta las pruebas necesarias.
No cambies las reglas de fichaje.
No hagas Git.
```

Después:

1. revisa `git diff`;
2. ejecuta tests;
3. prueba visualmente el dashboard;
4. revisa humanamente el resultado.

El objetivo no es que el agente "haga magia". El objetivo es decidir qué dato se transforma, dónde se calcula y cómo se valida.

---

## Cierre

Ya sabemos convertir datos históricos en información útil.

Pero todo este sistema sigue utilizando nuestro propio modelo de datos.

¿Cómo podríamos representar el estado actual del sistema de una forma interoperable que otras aplicaciones pudieran entender?

Eso abre la siguiente etapa:

```text
Experiencia 17 · FIWARE / NGSI-LD
```
