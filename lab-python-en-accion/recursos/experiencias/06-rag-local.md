# RAG local - Tu primer chat con documentos

## ¿Para qué sirve un RAG?

Un modelo de Inteligencia Artificial puede saber muchísimas cosas generales sobre el mundo, pero **no conoce necesariamente**:

- Los documentos o manuales internos de nuestra empresa.
- Los apuntes y materiales específicos de un curso.
- Un manual de procedimiento propio o guía de taller.
- Nuestro catálogo de productos o inventario del centro.
- Procedimientos propios y reglas particulares de la organización.
- Documentación que hemos creado nosotros mismos.
- Información privada, sensible o almacenada únicamente en local.
- Información reciente que no formaba parte de su entrenamiento público.

### El problema con un ejemplo sencillo

Imagina que tenemos 100 documentos en una organización y le preguntamos a la IA:

> *"¿Cuál es nuestro procedimiento para devolver un producto defectuoso?"*

No queremos que la IA responda utilizando únicamente lo que aprendió en internet durante su entrenamiento, ni que se invente una política de devoluciones genérica.

Queremos un proceso claro en 4 pasos:

1. **Buscar** primero dentro de *nuestros propios documentos*.
2. **Encontrar** los fragmentos específicos relacionados con la pregunta.
3. **Entregar** esos fragmentos al modelo como contexto.
4. **Pedirle** que responda utilizando exclusivamente esa información.

**Eso es la idea fundamental de RAG:**

```text
PREGUNTA
   ↓
BUSCAR EN MIS DOCUMENTOS
   ↓
ENCONTRAR LA INFORMACIÓN MÁS RELACIONADA
   ↓
DÁRSELA A LA IA (CONTEXTO)
   ↓
GENERAR LA RESPUESTA CON FUENTES
```

De ahí procede su nombre: **RAG** = *Retrieval-Augmented Generation* (**Generación Aumentada por Recuperación**).

---

## Ejemplos reales y comprensibles

¿Para qué podría utilizarse un RAG en situaciones reales?

- **Empresa:** Pregunta a la IA sobre nuestros procedimientos y normativas internas.
- **Curso:** Pregunta sobre los apuntes, materiales y documentación del curso.
- **Soporte técnico:** Busca primero en los manuales técnicos antes de responder al usuario.
- **Catálogo:** Responde utilizando las características y condiciones reales de nuestros productos.
- **Administración / Organización:** Consulta actas, protocolos y documentación interna.
- **Proyecto personal:** Pregunta sobre tus propios documentos, notas y registros de trabajo.

### ¿Cuándo NO hace falta un RAG?

No debemos considerar el RAG como una solución obligatoria para cualquier tarea. Si solo queremos preguntarle al modelo algo que ya puede responder con su conocimiento general (por ejemplo, *"¿qué es una función en Python?"* o *"redacta una carta de presentación"*), probablemente **no necesitamos un RAG**.

---

## De la idea a los vectores (Embeddings)

Una vez que entendemos para qué sirve, surge el problema técnico siguiente:

> *"Vale, tenemos cientos o miles de fragmentos de texto... ¿Cómo sabe Python cuáles están relacionados con nuestra pregunta?"*

Aquí es donde introducimos los **embeddings** de forma intuitiva:

Un **embedding** transforma un texto en una lista de números (un vector) que representa aproximadamente su **significado**. Textos con significados parecidos tienden a quedar próximos en ese espacio matemático.

### La analogía del mapa de significados

Imagina un mapa gigantesco, pero en lugar de tener solo dos dimensiones, tiene cientos. En ese mapa, frases que hablan de cosas parecidas tienden a quedar cerca, aunque no utilicen exactamente las mismas palabras.

Por ejemplo:

- `"¿Dónde guardamos la caja de demostración?"`
- `"En el aula, la caja de demostración debe guardarse siempre en la estantería AZUL."`

Aunque no sean exactamente iguales, ambas frases tratan sobre la ubicación de la caja, por lo que sus vectores quedan matemáticamente muy próximos.

En nuestra práctica, el modelo `nomic-embed-text` genera vectores de **768 dimensiones**. No es necesario comprender la matemática de 768 dimensiones; basta comprender el flujo:

```text
TEXTO DE TUS DOCUMENTOS  ➔  EMBEDDING  ➔  VECTOR
PREGUNTA DEL USUARIO    ➔  EMBEDDING  ➔  VECTOR
```

Después, Python compara los vectores mediante **similitud coseno** y recupera los fragmentos con mayor puntuación.

---

## Del vector a la respuesta: el flujo completo

Conectamos todo el proceso paso a paso tal como se ejecuta en el script:

1. **Documentos:** Leemos los archivos de texto locales (`.txt`).
2. **Fragmentos:** Dividimos los documentos en bloques manejables con solape.
3. **Vectores de fragmentos:** Convertimos cada fragmento en un vector numérico con `nomic-embed-text`.
4. **Vector de la pregunta:** Convertimos la consulta del usuario en otro vector.
5. **Comparación:** Calculamos cuáles se parecen más mediante similitud coseno.
6. **Top K:** Elegimos los mejores fragmentos (en la práctica, los $K=2$ con mayor puntuación).
7. **Construcción de contexto:** Empaquetamos esos fragmentos en un texto ordenado citando sus fuentes.
8. **Envío al LLM:** Entregamos contexto + pregunta a `llama3.2:1b` con la orden de no inventar.
9. **Respuesta final:** El modelo redacta la respuesta apoyándose exclusivamente en el contexto recibido.

```text
DOCUMENTOS
    ↓
FRAGMENTOS
    ↓
VECTORES
       ↖
        comparar ← VECTOR DE LA PREGUNTA
    ↓
TOP K
    ↓
CONTEXTO
    ↓
LLM (llama3.2:1b)
    ↓
RESPUESTA
```

---

## 1. Instalación y preparación del entorno (desde cero en Windows)

Para ejecutar esta práctica en tu ordenador solo necesitas dos componentes gratuitos y locales:

1. **Comprobar Python:** Abre una ventana de PowerShell y escribe `python --version`. Debes tener instalada una versión de Python 3.10 o superior.
2. **Instalar Ollama en Windows:** Descarga el instalador desde la página oficial **ollama.com** y ejecútalo. *(Importante: **no es necesaria ninguna cuenta**, ni tarjeta, ni registrarse en ningún servicio web).*
3. **Abrir un PowerShell nuevo:** Cierra la ventana anterior y abre un PowerShell nuevo para que reconozca el nuevo comando del sistema.
4. **Comprobar Ollama:** Escribe `ollama --version` en PowerShell y comprueba que responde con la versión instalada.

---

## 2. Descarga y preparación de los modelos

Necesitamos dos modelos locales especializados, cada uno con una tarea diferente:

- `nomic-embed-text`: **Modelo de embeddings (vectorizador).** Transforma textos y preguntas en vectores de 768 números para medir su cercanía semántica. No genera conversación.
- `llama3.2:1b`: **Modelo de lenguaje (LLM).** Lee el contexto recuperado y redacta la respuesta en lenguaje natural siguiendo la restricción de no inventar.

Descárgalos ejecutando estos comandos en PowerShell (solo se descargan una vez):

```powershell
ollama pull nomic-embed-text
ollama pull llama3.2:1b
```

Comprueba que ambos modelos están disponibles:

```powershell
ollama list
```

---

## 3. Descarga y preparación de la práctica

Descarga el archivo `rag-local.zip` y descomprímelo en tu equipo.

El paquete contiene:

```text
rag-local/
├── rag_local_visible.py         (script principal)
├── requirements-rag.txt         (librería de conexión Python)
└── rag_documentos/
    ├── manual_sami.txt          (manual del sistema)
    ├── tarifas_envio.txt        (tarifas y envíos)
    └── protocolo_aula.txt       (normas y ubicación de materiales)
```

### El truco sencillo de Windows para abrir la terminal

1. Abre la carpeta `rag-local` en el **Explorador de archivos de Windows**.
2. Haz clic en la **barra de dirección** superior (donde aparece la ruta).
3. Escribe `powershell` y pulsa `Enter`.
4. PowerShell se abrirá directamente situado dentro de la carpeta.

---

## 4. Instalar las dependencias de Python

En la ventana de PowerShell abierta en la carpeta, ejecuta:

```powershell
python -m pip install -r requirements-rag.txt
```

### Comprender la diferencia técnica

- **Ollama (instalado en Windows):** Es el motor y servidor local en segundo plano que ejecuta los modelos de IA en la CPU/GPU de tu ordenador.
- **Paquete `ollama` de Python (`requirements-rag.txt`):** Es la librería puente que permite a nuestro script de Python enviar peticiones locales a ese motor y recibir los vectores y las respuestas.

---

## 5. Primera ejecución y lectura de la salida real

Ejecuta el script en PowerShell:

```powershell
python .\rag_local_visible.py
```

La consola muestra secuencialmente:

1. **Documentos cargados:** Lectura de los archivos `.txt` en `rag_documentos/`.
2. **Fragmentos creados:** Troceado del texto con solape (chunking); cada documento corto forma un único fragmento.
3. **Embeddings:** Creación de vectores de dimensión 768.
4. **Consulta:** Pregunta realizada y valor $K=2$.
5. **Fragmentos recuperados:** Puntuación de similitud coseno (score) y TOP K más relevante.
6. **Contexto enviado al modelo:** Ensamble del prompt con las fuentes reales.
7. **Respuesta final:** Inferencia generada por `llama3.2:1b` (`"La caja de demostración debe guardarse en la estantería AZUL."`).

---

## 6. Mini-reto: Comprobar el funcionamiento del RAG (AZUL ➔ VERDE)

1. Comprueba que en la primera ejecución la respuesta del modelo fue `estantería AZUL`.
2. Abre con el **Bloc de notas** o tu editor favorito el archivo `rag_documentos/protocolo_aula.txt`.
3. Modifica la norma número 2 cambiando únicamente la palabra **AZUL** por **VERDE**:
   `2. En el aula, la caja de demostración debe guardarse siempre en la estantería VERDE.`
4. Guarda el archivo `.txt` (`Ctrl + S`).
5. Vuelve a PowerShell y ejecuta de nuevo el script:
   `python .\rag_local_visible.py`
6. Comprueba que la respuesta del modelo cambia automáticamente a `estantería VERDE`.

### La pregunta pedagógica fundamental

**¿Hemos reentrenado el modelo `llama3.2:1b`?**

**Respuesta razonada: NO.** El modelo no ha cambiado ni un solo parámetro de su entrenamiento. Lo único que ha cambiado es la información viva que Python ha buscado y le ha entregado como contexto dinámico en el prompt en el momento de responder.

---

## 7. Aprendizaje crítico: Recuperación correcta ≠ Respuesta garantizada

Si los documentos de origen contienen instrucciones del reto, comentarios fuera de lugar, datos contradictorios o ruido, el modelo de lenguaje puede verse confundido al redactar la respuesta final, **a pesar de que el recuperador haya encontrado el fragmento correcto con una puntuación muy alta**.

En un sistema RAG, la limpieza, claridad y estructuración de los documentos originales es tan determinante como la precisión del algoritmo de búsqueda vectorial.

---

## 8. Plan B (Resiliencia en aula)

- **Si falla el modelo de chat:** El script conserva la fase de embeddings y recuperación por similitud coseno, imprimiendo en pantalla los fragmentos con mayor score y el contexto seleccionado para responder manualmente.
- **Si falla Ollama por completo:** Lectura manual de los tres archivos de texto en `rag_documentos/` y reconstrucción mental de los 4 pasos del RAG.

---

## 9. Qué no entra en esta práctica

No se trabaja con LangChain, LangGraph, ChromaDB obligatorio, bases de datos vectoriales complejas, PDFs pesados, APIs de pago en la nube ni claves de acceso.
