# FastAPI - Tu primera API

## Para que sirve esta experiencia

Una API es una forma acordada para que dos programas se comuniquen. En esta practica, el navegador habla con FastAPI usando HTTP, y FastAPI ejecuta codigo Python.

```text
NAVEGADOR / APP
      ↓ HTTP
   FASTAPI
      ↓
    PYTHON
```

Vas a crear y consultar participantes desde Swagger, una interfaz profesional que FastAPI genera automaticamente en `/docs`.

---

## Metodos y codigos HTTP

Los metodos indican que queremos hacer:

- `GET` -> consultar.
- `POST` -> crear o enviar.
- `PUT/PATCH` -> modificar.
- `DELETE` -> eliminar.

Los codigos HTTP ayudan a interpretar que ha ocurrido:

- `200` -> correcto.
- `201` -> creado.
- `400` -> peticion problematica.
- `404` -> recurso inexistente.
- `422` -> datos que no cumplen las reglas.
- `500` -> error del servidor.

No hace falta memorizarlos todos. Piensalos como mensajes del servidor. Ademas, `200` no significa necesariamente "encontre lo que tu esperabas"; significa que la peticion se proceso correctamente.

---

## 1. Ubicate antes de ejecutar

Abre PowerShell dentro de la carpeta de la practica y ejecuta:

```powershell
dir
```

Debes ver:

```text
main.py
modelos.py
test_api.py
requirements.txt
README.md
```

Si no ves esos archivos, no estas en la carpeta correcta todavia.

---

## 2. Crear entorno e instalar dependencias

Crea el entorno virtual:

```powershell
python -m venv .venv
```

Crear un entorno virtual no instala FastAPI ni Uvicorn. Solo prepara una carpeta aislada para instalar paquetes.

En algunos Windows, PowerShell bloquea `Activate.ps1`. No hace falta modificar `ExecutionPolicy`: puedes usar directamente el Python del entorno.

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

---

## 3. Arrancar FastAPI

Ejecuta:

```powershell
.\.venv\Scripts\python.exe -m uvicorn main:app --reload
```

Abre:

```text
http://127.0.0.1:8000/docs
```

Swagger puede impresionar al principio, pero se lee por partes.

---

## 4. Aprender a leer Swagger

- `Try it out` -> preparar una prueba.
- `Execute` -> enviar la peticion.
- `Request body` -> datos que enviamos.
- `Server response` -> respuesta del servidor.
- `Response body` -> contenido recibido.
- `Code` -> codigo HTTP.

Ver el ejemplo no significa que sea editable. Primero pulsa `Try it out`.

Swagger puede mostrar una peticion `curl`, pero no necesitas copiarla ni ejecutarla.

---

## 5. GET /participantes: lista vacia

Abre `GET /participantes`.

Aparece `No parameters`: no hay que pegar nada.

Pulsa:

```text
Try it out -> Execute
```

Busca:

```text
Code: 200
Response body: []
```

`200 + []` significa que la peticion ha funcionado y la lista esta vacia.

---

## 6. POST /participantes: crear Ana

Abre `POST /participantes`.

1. Pulsa `Try it out`.
2. Edita `Request body`.
3. Usa:

```json
{
  "nombre": "Ana",
  "edad": 35
}
```

4. Pulsa `Execute`.
5. Comprueba `Code: 201`.
6. Comprueba `Response body`.

Respuesta esperada:

```json
{
  "id": 1,
  "nombre": "Ana",
  "edad": 35
}
```

---

## 7. GET y ver a Ana

Repite `GET /participantes`.

Ahora la lista ya no deberia estar vacia: debe aparecer Ana. Esta es la primera idea importante:

```text
POST crea
GET consulta
```

---

## 8. GET por ID, 404 y 422

En `GET /participantes/{participante_id}`, prueba `1`. Debes recibir `200` y los datos de Ana.

Despues prueba `999`. Debes recibir `404`, porque ese participante no existe:

```json
{"detail": "Participante no encontrado"}
```

Ahora vuelve a `POST /participantes` y provoca un `422` con una edad que no cumple las reglas:

```json
{
  "nombre": "Luis",
  "edad": -10
}
```

FastAPI rechaza esos datos porque `modelos.py` marca la edad entre 0 y 120.

Un warning no es lo mismo que un error. Si las pruebas o el servidor siguen funcionando, lee el mensaje antes de asumir que algo se ha roto.

---

## 9. Ejecutar los 6 tests iniciales

Deten Uvicorn con `Ctrl + C` y ejecuta:

```powershell
.\.venv\Scripts\python.exe -m unittest -v
```

Antes del mini-reto, el objetivo es:

```text
Ran 6 tests
OK
```

---

# Mini-reto: DELETE

Anade:

```text
DELETE /participantes/{participante_id}
```

Requisitos:

- Eliminar si el ID existe.
- Devolver un mensaje claro.
- Devolver `404` si el ID no existe.
- Anadir un test de eliminacion correcta.
- Anadir otro test para ID inexistente.

No anadas dependencias ni base de datos.

No asumas que los IDs posteriores se reutilizan si eliminas un participante. Un ID identifica un recurso concreto.

## Criterio de exito manual

```text
POST Ana
↓
GET Ana
↓
DELETE Ana
↓
GET Ana otra vez
↓
404
```

## Criterio de exito con tests

Durante la validacion real, al completar el reto se alcanzo:

```text
Ran 8 tests
OK
```

La idea final: Swagger ayuda a probar una API con sentido, y los tests ayudan a comprobar que no hemos roto comportamientos que ya funcionaban.
