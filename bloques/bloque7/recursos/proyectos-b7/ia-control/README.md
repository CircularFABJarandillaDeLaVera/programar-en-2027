# Proyecto B7 · IA local bajo control (Ollama opcional)

Integrar una IA sin entregarle el control del programa.
Esto no es un curso de Ollama: Ollama es un backend real opcional,
nunca un requisito para completar la experiencia.

## Arquitectura

```text
Python -> llama al modelo si esta disponible -> recibe respuesta
       -> valida estructura -> valida contenido
       -> acepta o rechaza -> fallback determinista
```

## Archivos

```text
ia-control/
├── explicar.py                       # decide, llama, valida, fallback
├── test_explicar.py                  # pruebas sin red ni Ollama
├── ejemplo-respuesta-valida.json     # modelo simulado: se acepta
├── ejemplo-respuesta-inventada.json  # modelo simulado: se rechaza
├── requirements.txt                  # requests (opcional)
└── README.md                         # esta guia
```

## Ruta B (sin Ollama): toda la competencia es completable

```bash
python explicar.py --stock 3 --sin-ia
python -m unittest -v
```

## Demostracion sin Ollama: aceptada frente a rechazada

```bash
python explicar.py --stock 3 --demo-respuesta ejemplo-respuesta-valida.json
python explicar.py --stock 3 --demo-respuesta ejemplo-respuesta-inventada.json
```

Veras `RESPUESTA ACEPTADA` en el primer caso y `RESPUESTA DESCARTADA`
con `FALLBACK DETERMINISTA` en el segundo. El programa sigue
funcionando en ambos.

## Ruta A (con Ollama, opcional)

```bash
ollama pull llama3.2:1b
ollama serve
pip install -r requirements.txt
python explicar.py --stock 3
```

Si Ollama no responde, no es un fallo pedagogico: el programa informa
que la respuesta se descarta y usa el fallback determinista.

## Clasificacion correcta

- Ollama dentro de una comprobacion opcional y no disponible:
  opcional/no ejecutado.
- Se exige una comprobacion concreta y no puede hacerse: NO_VERIFICADO.
- Nunca llames NO_APTO a algo solo porque Ollama no arranca.
