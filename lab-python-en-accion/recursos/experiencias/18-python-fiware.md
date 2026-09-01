# Python conecta PostgreSQL con FIWARE

## La nueva necesidad

Hasta ahora actualizábamos Orion-LD manualmente.

Pero cuando una persona ficha, nadie debería tener que abrir PowerShell.

La pregunta de esta experiencia es:

```text
¿PUEDE PYTHON ACTUALIZAR EL CONTEXTO AUTOMÁTICAMENTE?
```

El flujo que queremos conseguir es:

```text
FICHAJE
   ↓
FastAPI
   ↓
PYTHON
   ├──────────────→ PostgreSQL
   │                histórico
   │
   └── HTTP + JSON → Orion-LD
                    contexto actual
```

PostgreSQL sigue siendo el histórico. Orion-LD representa el contexto actual que publicamos.

---

## Python es el protagonista

La Experiencia 17 ya explicó:

- entidad;
- id;
- type;
- Property;
- broker de contexto.

Ahora el aprendizaje vuelve a Python:

- funciones;
- parámetros;
- diccionarios;
- JSON;
- módulos;
- peticiones HTTP;
- `PATCH`;
- `POST`;
- timeout;
- códigos HTTP;
- `try/except`;
- manejo de errores;
- mocks en tests.

FIWARE es el servicio externo que nos crea la necesidad.

---

## Separar el código

La práctica añade un módulo:

```text
contexto_fiware.py
```

La separación queda así:

```text
main.py
→ lógica de la aplicación y endpoints

base_datos.py
→ PostgreSQL

contexto_fiware.py
→ comunicación con Orion-LD
```

Dividir el código en módulos ayuda a que cada archivo tenga una responsabilidad comprensible.

---

## HTTP desde Python

En la Experiencia 17, PowerShell hacía peticiones:

```text
PATCH
POST
```

Ahora Python hace esa conversación mediante `httpx`.

El código trabaja con:

- URL;
- método HTTP;
- JSON;
- respuesta;
- timeout.

No añadimos `requests` ni nuevas dependencias. `httpx` ya estaba en la práctica por los tests.

---

## Datos mínimos

La entidad publica únicamente:

- `working`;
- `lastEvent`;
- `lastEventAt`.

El `trabajador_id` solo sirve para construir:

```text
urn:ngsi-ld:Employee:X
```

No publicamos:

- nombre;
- ubicación;
- `precision_m`;
- credenciales;
- sesiones;
- hashes;
- histórico completo.

```text
INTEROPERABLE
NO SIGNIFICA
PUBLICAR TODO
```

---

## Misma fecha y hora

Orion-LD no genera otra hora.

Python utiliza la `fecha_hora` del fichaje que PostgreSQL acaba de guardar.

En la validación real se observó:

```text
PostgreSQL:
22:30:56 Europe/Madrid

Orion-LD:
20:30:56Z

MISMO INSTANTE
DISTINTA REPRESENTACIÓN HORARIA
```

No necesitamos profundizar más en husos horarios para entender esta decisión.

---

## PATCH y POST

Python intenta actualizar primero:

```text
PATCH /ngsi-ld/v1/entities/{entity_id}/attrs
```

Si `Employee` todavía no existe:

```text
404
↓
POST
↓
se crea la entidad completa
```

Después, los siguientes fichajes usan `PATCH`.

No introducimos upsert ni operaciones batch.

---

## Punto de integración

El orden es deliberado:

```text
1. validar sesión, rol y regla ENTRADA/SALIDA;
2. guardar el fichaje en PostgreSQL;
3. obtener el fichaje guardado;
4. intentar actualizar Orion-LD.
```

Nunca hacemos:

```text
Orion-LD
↓
después PostgreSQL
```

Guardar PostgreSQL primero es importante porque el histórico no debe perderse.

---

## ¿Qué pasa si Orion-LD está apagado?

Este es el caso más importante.

```text
TRABAJADOR FICHA
       ↓
PostgreSQL
GUARDA OK
       ↓
Python intenta Orion-LD
       ↓
NO RESPONDE
```

Resultado:

```text
FICHAJE REGISTRADO OK

CONTEXTO NO ACTUALIZADO
```

Mensaje mostrado:

```text
Fichaje registrado. Hay un problema temporal actualizando el estado compartido.
```

No podemos decir "el fichaje ha fallado" porque sería falso.

---

## Dos sistemas, dos resultados

Una misma acción puede afectar a dos sistemas.

Eso no significa que ambos tengan que tener siempre el mismo resultado.

Durante la validación real se observó:

```text
PostgreSQL:
último evento = ENTRADA

Orion-LD:
lastEvent = SALIDA
```

El histórico podía estar correcto mientras el contexto publicado quedaba desactualizado.

No fue un ejemplo inventado. Ocurrió durante la prueba.

---

## Recuperación

Después se volvió a arrancar Orion-LD.

El siguiente fichaje válido hizo una nueva actualización.

PostgreSQL y Orion-LD volvieron a coincidir.

Eso no reconstruye automáticamente todos los posibles estados perdidos. Simplemente el nuevo evento vuelve a publicar el contexto vigente.

Una reconciliación real podría construirse posteriormente desde PostgreSQL, pero no se implementa aquí.

---

## Fuente de verdad

```text
PostgreSQL
→ histórico de fichajes

Orion-LD
→ contexto que queremos compartir
```

Si FIWARE falla, el histórico no desaparece.

Por eso guardar PostgreSQL primero es una decisión importante.

---

## Tests

Durante la validación real se ejecutaron:

```text
38 tests
OK
```

No necesitamos listar los 38. Cubren:

- funcionamiento anterior;
- autenticación y autorización;
- entrada y salida;
- geolocalización opcional;
- dashboard anterior;
- construcción de entidad FIWARE;
- `PATCH`;
- `POST` cuando la entidad no existe;
- timeout;
- error de conexión;
- conservación del fichaje si FIWARE falla.

Los tests automáticos usan mocks para Orion-LD.

Un mock es una sustitución controlada de un servicio externo durante una prueba.

Eso permite comprobar nuestro código Python sin depender siempre de que Orion-LD real esté arrancado.

---

## Validación real con Orion-LD

Además de los tests con mocks, se validó con Orion-LD real.

CASO A: Orion-LD encendido

```text
ENTRADA
→ PostgreSQL guarda
→ Orion-LD working=true
→ Orion-LD lastEvent=ENTRADA

SALIDA
→ PostgreSQL guarda
→ Orion-LD working=false
→ Orion-LD lastEvent=SALIDA
```

CASO B: Orion-LD apagado

```text
Fichaje válido
→ PostgreSQL guarda
→ la aplicación muestra aviso
→ FastAPI sigue operativo
```

CASO C: Orion-LD recuperado

```text
nuevo fichaje válido
→ se vuelve a publicar el contexto vigente
```

---

## Práctica

1. Levanta PostgreSQL como en las experiencias anteriores.
2. Levanta Orion-LD y MongoDB con el Compose de la Experiencia 17.
3. Copia `.env.example` a `.env`.
4. Configura:

```text
ORION_LD_URL=http://localhost:1026
```

5. Ejecuta tests:

```powershell
python -m unittest -v test_api.py
```

6. Arranca FastAPI:

```powershell
uvicorn main:app --reload
```

7. Crea un trabajador desde `/app/empresa/`.
8. Inicia sesión en `/app/fichar/`.
9. Registra ENTRADA.
10. Consulta Orion-LD.
11. Registra SALIDA.
12. Consulta Orion-LD de nuevo.

---

## Mini-reto con agente

Queremos que el timeout de Orion-LD pueda configurarse desde `.env`.

Primero pide análisis:

```text
Analiza esta práctica.

Quiero que el timeout de Orion-LD pueda configurarse desde .env.

Primero localiza dónde está fijado actualmente el timeout y qué archivos habría que tocar.

NO modifiques nada todavía.
```

Si la propuesta es razonable, autoriza un cambio pequeño:

```text
Aplica únicamente el cambio necesario para leer ORION_LD_TIMEOUT desde .env.

Mantén el comportamiento actual si la variable no existe.
Añade o adapta las pruebas necesarias.
No cambies la lógica de fichaje.
No hagas Git.
```

Después revisa `git diff`, ejecuta tests y comprueba que el comportamiento del fichaje no cambia.

---

## Cierre

Python ya no trabaja solo.

Ahora:

- habla con PostgreSQL;
- sirve una web;
- gestiona usuarios;
- recibe fichajes;
- transforma datos;
- se comunica con otro servicio mediante HTTP.

Ya podemos publicar contexto desde una aplicación.

¿Y si el siguiente dato no procede de una persona pulsando un botón, sino de un dispositivo?
