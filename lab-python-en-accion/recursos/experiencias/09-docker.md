# Docker - La misma API en cualquier equipo

## Que problema resolvemos

En la Experiencia 8 teníamos una API FastAPI funcionando. Ahora respondemos a una pregunta muy real:

> Funciona en mi ordenador... ¿cómo hago para que funcione igual en otro?

Docker nos permite empaquetar la aplicación con su Python, sus dependencias y su forma de arrancar.

```text
MISMA API FASTAPI
      ↓
Dockerfile
      ↓
IMAGEN
      ↓
CONTENEDOR
      ↓
PUERTOS
      ↓
DOCKER HUB
      ↓
OTRO PC
      ↓
MISMA API
```

No vamos a cambiar la API. Vamos a cambiar cómo se ejecuta.

---

## Imagen y contenedor

```text
CÓDIGO + PYTHON + DEPENDENCIAS
              ↓
            IMAGEN
              ↓
          CONTENEDOR
```

- `IMAGEN` -> plantilla preparada.
- `CONTENEDOR` -> una ejecución concreta de esa imagen.

La imagen es como una receta ya preparada. El contenedor es la receta ejecutándose.

---

## 1. Comprueba Docker

Primero comprueba que Docker está instalado:

```powershell
docker --version
```

Después comprueba que el motor está funcionando:

```powershell
docker info
```

Durante la validación real vimos un caso importante: `docker info` mostraba el cliente, pero fallaba en `Server` porque Docker Desktop no estaba arrancado. Si aparece algo como `dockerDesktopLinuxEngine`, abre Docker Desktop, espera a que termine de iniciar y repite `docker info`.

No continúes con `docker build` mientras `docker info` siga fallando.

---

## 2. Lee el Dockerfile

El archivo clave se llama `Dockerfile`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Lectura sencilla:

- `FROM` -> parte de una imagen base con Python.
- `WORKDIR` -> define la carpeta de trabajo dentro del contenedor.
- `COPY` -> copia archivos desde tu carpeta hacia la imagen.
- `RUN` -> ejecuta una orden durante la construcción.
- `EXPOSE` -> documenta el puerto de la aplicación.
- `CMD` -> comando que arranca al iniciar el contenedor.

---

## 3. Construye la imagen

En la carpeta de la práctica:

```powershell
docker build -t participantes-api .
```

Después comprueba que la imagen existe:

```powershell
docker images
```

Durante la validación real, la imagen `participantes-api` se creó correctamente.

---

## 4. Arranca el contenedor

Ejecuta:

```powershell
docker run --rm -p 8000:8000 participantes-api
```

Abre:

```text
http://127.0.0.1:8000/docs
```

Este es el momento clave: debe aparecer el mismo Swagger de la Experiencia 8.

```text
ANTES:
Windows -> Python local -> FastAPI

AHORA:
Windows -> Docker -> Python del contenedor -> FastAPI
```

La API no ha cambiado. Ha cambiado cómo se ejecuta.

---

## 5. Comprueba docker ps

Con el contenedor funcionando, abre otra terminal:

```powershell
docker ps
```

Durante la validación real apareció:

```text
IMAGE: participantes-api
STATUS: Up
PORTS: 0.0.0.0:8000->8000/tcp
```

La parte de puertos se lee así:

```text
PC:8000 -> CONTENEDOR:8000
```

Tu navegador entra al puerto 8000 del PC, y Docker envía esa petición al puerto 8000 del contenedor.

---

## 6. Mini-reto de puertos

Prueba la misma API usando otro puerto exterior:

```powershell
docker run --rm -p 8080:8000 participantes-api
```

Abre:

```text
http://127.0.0.1:8080/docs
```

Ahora el mapa es:

```text
PC:8080 -> CONTENEDOR:8000
```

Esto también fue validado realmente: Swagger funcionó en `http://127.0.0.1:8080/docs`.

---

## 7. Del contenedor local a otro ordenador

Docker Hub es un registro donde podemos publicar imágenes Docker para que otros equipos puedan descargarlas.

Busca tu nombre de usuario en Docker Hub y sustituye `TU_USUARIO_DOCKER` por ese nombre.

Si tu usuario fuese `ana123`, el nombre sería `ana123/participantes-api:1.0`.

```powershell
docker tag participantes-api TU_USUARIO_DOCKER/participantes-api:1.0
docker push TU_USUARIO_DOCKER/participantes-api:1.0
```

Lectura:

- `participantes-api` -> nombre local.
- `TU_USUARIO_DOCKER/participantes-api` -> usuario/repositorio en Docker Hub.
- `1.0` -> etiqueta de versión.

```text
PC 1
  ↓ push
DOCKER HUB
  ↓ pull
PC 2
```

---

## 8. Paso final: probar en otro ordenador

En otro ordenador con Docker instalado y arrancado:

```powershell
docker pull TU_USUARIO_DOCKER/participantes-api:1.0
docker run --rm -p 8000:8000 TU_USUARIO_DOCKER/participantes-api:1.0
```

Después:

```text
http://127.0.0.1:8000/docs
```

Resultado esperado:

```text
PC 1 -> Docker Hub -> PC 2 -> misma API
```

El segundo ordenador no necesita tus archivos Python, tu entorno virtual ni instalar FastAPI manualmente. La aplicación viaja preparada dentro de la imagen Docker.
