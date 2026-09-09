# Proyecto B7 · El agente entra en un repositorio real

Pequeño proyecto preparado para practicar un flujo seguro con un agente
de programación. Funciona con cualquier agente (OpenCode, Codex, Copilot,
Claude Code u otro) que tenga acceso a la carpeta del proyecto.

## Objetivo observable

Al principio, el programa acepta una edad negativa:

```text
Nombre: Luis
Edad: -15
Participante registrado: Luis (-15 años)
```

Al terminar EXP-02 debe responder:

```text
Nombre: Luis
Edad: -15
Error: la edad debe estar entre 0 y 120 años.
```

Además, las pruebas deben terminar correctamente.

## Archivos

```text
agente-real/
├── app.py                  # entrada del programa
├── participantes.py        # logica (contiene el fallo)
├── test_participantes.py   # pruebas automaticas
├── README.md               # esta guia
└── AGENTS.md               # instrucciones permanentes para el agente
```

`AGENTS.md` contiene instrucciones permanentes para orientar al agente
dentro de este proyecto: trabajar con cambios pequenos, no anadir
dependencias, no eliminar pruebas y explicar que se ha tocado.

## 1. Comprueba el fallo (sin agente todavia)

```bash
python app.py
```

Prueba, por ejemplo:

```text
Nombre: Luis
Edad: -15
```

No corrijas todavia el codigo.

## 2. Prepara Git como red de seguridad

Si esta carpeta todavia no es un repositorio Git:

```bash
git init
git add app.py participantes.py test_participantes.py README.md AGENTS.md
git commit -m "inicio: practica de agentes"
```

El flujo completo de cada experiencia es:

```text
AGENTE
  ↓
git status        ¿Que archivos ha tocado?
  ↓
git diff          ¿Que ha cambiado exactamente?
  ↓
EJECUTAR          ¿Funciona?
  ↓
PRUEBAS           ¿Cumple lo esperado?
  ↓
REVISION HUMANA   ¿Aceptamos el cambio?
  ↓
git commit        Guardamos el resultado validado
```

No aceptes automaticamente una modificacion solo porque el agente diga
que esta bien.

## 3. Pruebas

```bash
python -m unittest -v
```

El objetivo es terminar con:

```text
OK
```
