from pathlib import Path
from math import sqrt
import sys

import ollama


sys.stdout.reconfigure(encoding="utf-8")


CARPETA_SCRIPT = Path(__file__).resolve().parent
CARPETA_DOCUMENTOS = CARPETA_SCRIPT / "rag_documentos"
if not CARPETA_DOCUMENTOS.exists():
    CARPETA_DOCUMENTOS = CARPETA_SCRIPT.parent / "rag_documentos"
MODELO_EMBEDDINGS = "nomic-embed-text"
MODELO_CHAT = "llama3.2:1b"

PREGUNTA = "¿En qué estantería debe guardarse la caja de demostración?"
K_FRAGMENTOS = 2

TAMANO_FRAGMENTO = 600
SOLAPE = 40


def linea(titulo):
    print(f"\n=== {titulo} ===")


def recortar(texto, limite=180):
    texto_limpio = " ".join(texto.split())
    if len(texto_limpio) <= limite:
        return texto_limpio
    return texto_limpio[: limite - 3] + "..."


def cargar_documentos(carpeta):
    documentos = []
    for ruta in sorted(carpeta.glob("*.txt")):
        contenido = ruta.read_text(encoding="utf-8").strip()
        if contenido:
            documentos.append({"archivo": ruta.name, "texto": contenido})
    return documentos


def crear_fragmentos(documentos, tamano, solape):
    fragmentos = []
    for documento in documentos:
        texto = documento["texto"]
        inicio = 0
        numero = 1
        while inicio < len(texto):
            fin = inicio + tamano
            fragmento = texto[inicio:fin].strip()
            if fragmento:
                fragmentos.append(
                    {
                        "id": len(fragmentos),
                        "archivo": documento["archivo"],
                        "numero": numero,
                        "texto": fragmento,
                    }
                )
            numero += 1
            inicio += tamano - solape
    return fragmentos


def pedir_embeddings(textos):
    respuesta = ollama.embed(model=MODELO_EMBEDDINGS, input=textos)
    if hasattr(respuesta, "embeddings"):
        return respuesta.embeddings
    return respuesta["embeddings"]


def similitud_coseno(vector_a, vector_b):
    producto = sum(a * b for a, b in zip(vector_a, vector_b))
    norma_a = sqrt(sum(a * a for a in vector_a))
    norma_b = sqrt(sum(b * b for b in vector_b))
    if norma_a == 0 or norma_b == 0:
        return 0.0
    return producto / (norma_a * norma_b)


def recuperar_fragmentos(fragmentos, embedding_pregunta, k):
    ranking = []
    for fragmento in fragmentos:
        score = similitud_coseno(embedding_pregunta, fragmento["embedding"])
        ranking.append({**fragmento, "score": score})
    ranking.sort(key=lambda item: item["score"], reverse=True)
    return ranking[:k]


def construir_contexto(fragmentos_recuperados):
    bloques = []
    for fragmento in fragmentos_recuperados:
        bloques.append(
            f"[{fragmento['archivo']} | fragmento {fragmento['numero']}]\n"
            f"{fragmento['texto']}"
        )
    return "\n\n".join(bloques)


def responder_con_ollama(pregunta, contexto):
    prompt = f"""Responde a la pregunta utilizando ÚNICAMENTE la información del contexto proporcionado.
No inventes información.
Si el contexto no contiene la respuesta, indica que no dispones de información suficiente en los documentos.

CONTEXTO:
{contexto}

PREGUNTA:
{pregunta}

RESPUESTA:"""

    respuesta = ollama.chat(
        model=MODELO_CHAT,
        messages=[{"role": "user", "content": prompt}],
        options={"temperature": 0},
    )
    if hasattr(respuesta, "message"):
        return respuesta.message.content
    return respuesta["message"]["content"]


def main():
    documentos = cargar_documentos(CARPETA_DOCUMENTOS)

    linea("DOCUMENTOS CARGADOS")
    if not documentos:
        print(f"No se encontraron documentos .txt en {CARPETA_DOCUMENTOS}")
        return

    for numero, documento in enumerate(documentos, start=1):
        print(f"{numero}. {documento['archivo']} ({len(documento['texto'])} caracteres)")

    fragmentos = crear_fragmentos(documentos, TAMANO_FRAGMENTO, SOLAPE)

    linea("FRAGMENTOS CREADOS")
    for fragmento in fragmentos:
        print(
            f"[{fragmento['id']}] {fragmento['archivo']} "
            f"(fragmento {fragmento['numero']}): {recortar(fragmento['texto'])}"
        )

    linea("EMBEDDINGS")
    print(f"Modelo de embeddings: {MODELO_EMBEDDINGS}")
    print("Creando vectores para los fragmentos...")

    try:
        embeddings_fragmentos = pedir_embeddings([fragmento["texto"] for fragmento in fragmentos])
        embedding_pregunta = pedir_embeddings([PREGUNTA])[0]
    except Exception as error:
        print("No se pudieron crear embeddings con Ollama.")
        print(f"Detalle técnico: {error}")
        print("\nPlan B pedagógico:")
        print("1. Lee los fragmentos impresos arriba.")
        print("2. Decide manualmente cuál responde mejor a la pregunta.")
        print("3. Ese fragmento sería el contexto enviado al modelo.")
        return

    for fragmento, embedding in zip(fragmentos, embeddings_fragmentos):
        fragmento["embedding"] = embedding

    print(f"Embeddings creados: {len(embeddings_fragmentos)} fragmentos")
    print(f"Dimensión de cada vector: {len(embeddings_fragmentos[0])}")

    linea("CONSULTA")
    print(PREGUNTA)
    print(f"K_FRAGMENTOS = {K_FRAGMENTOS}")

    fragmentos_recuperados = recuperar_fragmentos(fragmentos, embedding_pregunta, K_FRAGMENTOS)

    linea("FRAGMENTOS RECUPERADOS")
    for posicion, fragmento in enumerate(fragmentos_recuperados, start=1):
        print(
            f"{posicion}. score={fragmento['score']:.4f} | "
            f"{fragmento['archivo']} | fragmento {fragmento['numero']}"
        )
        print(f"   {recortar(fragmento['texto'], 260)}")

    contexto = construir_contexto(fragmentos_recuperados)

    linea("CONTEXTO ENVIADO AL MODELO")
    print(contexto)

    linea("RESPUESTA FINAL")
    try:
        respuesta = responder_con_ollama(PREGUNTA, contexto)
        print(respuesta)
    except Exception as error:
        print("La recuperación ha funcionado, pero falló la llamada al modelo de chat.")
        print(f"Detalle técnico: {error}")
        print("\nPlan B técnico ligero:")
        print("Usa el contexto recuperado arriba para responder manualmente.")
        print("Mejor fragmento recuperado:")
        print(recortar(fragmentos_recuperados[0]["texto"], 500))


if __name__ == "__main__":
    main()
