# Geolocalización del fichaje - ¿Desde dónde estoy fichando?

## La nueva pregunta

Ya tenemos una interfaz para fichar desde el navegador.

Ahora aparece una necesidad natural: si una persona ficha desde el móvil, ¿desde dónde lo está haciendo?

```text
Persona
   ↓
interfaz web
   ↓
FICHAR ENTRADA / SALIDA
   ↓
ubicación aproximada opcional
```

En esta experiencia no comprobamos si está dentro de una empresa.

Solo registramos la ubicación que decide compartir al fichar.

---

## Flujo completo

```text
FICHAR
  ↓
permiso del navegador
  ↓
Geolocation API
  ↓
latitud + longitud + precisión
  ↓
fetch()
  ↓
FastAPI
  ↓
PostgreSQL
```

JavaScript pide la ubicación al navegador y la envía a FastAPI junto con el fichaje.

---

## Geolocation API

`navigator.geolocation` permite que el navegador pida al dispositivo su ubicación.

- El navegador pide permiso.
- El usuario decide si acepta o rechaza.
- La ubicación puede no estar disponible.
- La precisión siempre es aproximada.

---

## Privacidad

La ubicación es un dato sensible.

La aplicación debe pedirla de forma transparente y explicar qué se va a registrar.

Este laboratorio no resuelve normativa laboral ni RGPD en profundidad.

Se queda en una idea práctica: el usuario debe saberlo y poder decidir.

---

## Dos caminos válidos

```text
UBICACIÓN DISPONIBLE
→ fichaje + ubicación aproximada

UBICACIÓN NO DISPONIBLE / RECHAZADA
→ fichaje sin ubicación
```

La aplicación no se rompe si no hay ubicación.

El fichaje continúa y PostgreSQL guarda esos campos como `NULL`.

---

## Coordenadas no es exactitud

```text
COORDENADAS
≠
POSICIÓN EXACTA
```

`precision_m` representa la estimación de incertidumbre que da el dispositivo o el navegador.

```text
Precisión: 15 m  -> razonable para una demostración
Precisión: 70 km -> ubicación muy imprecisa
```

No rechazamos fichajes por mala precisión.

Eso podría convertirse en una regla nueva más adelante.

---

## Evolucionar la base

La base `control_horario` ya puede contener datos anteriores.

No queremos destruirlos.

```text
fichajes
  ↓
añadimos
  ├── latitud
  ├── longitud
  └── precision_m
```

```sql
ALTER TABLE fichajes ADD COLUMN IF NOT EXISTS latitud DOUBLE PRECISION;
ALTER TABLE fichajes ADD COLUMN IF NOT EXISTS longitud DOUBLE PRECISION;
ALTER TABLE fichajes ADD COLUMN IF NOT EXISTS precision_m DOUBLE PRECISION;
```

Los fichajes antiguos siguen existiendo.

Simplemente tienen ubicación no registrada.

---

## Mapa sin librerías

Si hay coordenadas, la interfaz muestra `Ver ubicación`.

Es un enlace normal a OpenStreetMap.

```text
latitud + longitud
      ↓
enlace web
      ↓
OpenStreetMap
```

No usamos API keys ni SDK cartográfico.

---

## LOCALHOST

Para la primera prueba usa el mismo PC:

```text
http://localhost:8000/app/
```

Los navegadores suelen exigir un contexto seguro para geolocalización.

`localhost` suele aceptarse para desarrollo.

---

## Móvil

Desde otro dispositivo de la red, una dirección HTTP con IP local puede no permitir geolocalización por seguridad del navegador.

No resolvemos todavía HTTPS, certificados ni túneles.

Esa limitación forma parte de lo que habrá que validar después.

---

## PROBAR

1. Abrir `http://localhost:8000/app/`.
2. Seleccionar trabajador.
3. Pulsar `FICHAR ENTRADA`.
4. Aceptar el permiso de ubicación.
5. Comprobar coordenadas, precisión y enlace de mapa.
6. Probar otro fichaje rechazando el permiso.
7. Confirmar que el fichaje sin ubicación también se guarda.

---

## RESULTADO

```text
fichaje
tipo + fecha/hora + trabajador
ubicación aproximada si el usuario la comparte
```

Ya sabemos dónde se realizó aproximadamente el fichaje.

Pero aparece una nueva necesidad: ¿cómo sabemos si estaba suficientemente cerca del lugar de trabajo?

---

## MINI-RETO

Ahora cambia una regla con ayuda de tu agente de programación: la aplicación ya no debe permitir fichar sin compartir ubicación.

```text
VERSIÓN BASE
con ubicación -> fichaje válido
sin ubicación -> fichaje válido

MINI-RETO
con ubicación -> fichaje válido
sin ubicación -> fichaje rechazado
```

La regla debe estar en FastAPI.

No basta con bloquear botones desde JavaScript: la interfaz puede ayudar, pero la API debe decidir.

1. Pedir al agente que analice.
2. No modificar todavía.
3. Revisar su propuesta.
4. Autorizar el cambio.
5. Revisar `git diff`.
6. Ejecutar.
7. Probar.
8. Hacer revisión humana.

Primer prompt:

```text
Analiza esta aplicación de control horario.

Quiero cambiar una sola regla de negocio:

ya no se debe permitir registrar ENTRADA ni SALIDA si la petición no incluye latitud, longitud y precisión.

Primero analiza qué archivos habría que modificar y por qué.

NO cambies nada todavía.

Mantén:
- FastAPI como responsable de la regla;
- PostgreSQL;
- los endpoints existentes;
- la interfaz actual;
- el resto de reglas de ENTRADA/SALIDA.

No añadas tecnologías nuevas.
```

Segundo prompt, solo después de revisar la propuesta:

```text
Ahora aplica únicamente el cambio necesario.

Si falta latitud, longitud o precisión, rechaza el fichaje con un mensaje comprensible.

Añade o adapta las pruebas necesarias.

No hagas Git.
```

```text
PRUEBA ESPERADA

CON UBICACIÓN
-> fichaje aceptado

SIN UBICACIÓN
-> fichaje rechazado
```

Este reto no consiste solo en “hacer que funcione”.

Una misma aplicación puede cambiar su comportamiento cuando cambian las reglas del problema.

El agente propone y modifica; la persona decide, revisa y valida.
