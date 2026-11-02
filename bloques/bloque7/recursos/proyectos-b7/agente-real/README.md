# Proyecto B7 · Repositorio de participantes y agente bajo control

Pequeño proyecto para practicar un cambio acotado con un agente de programación. Funciona con cualquier agente que tenga acceso a la carpeta del proyecto.

## Preparar la carpeta

1. Descarga el ZIP del repositorio.
2. Crea o elige una carpeta nueva y extrae dentro el ZIP completo, conservando `.agents/`.
3. En VS Code, usa **Archivo > Abrir carpeta** y selecciona esa carpeta. Después abre allí una terminal.
4. Comprueba que contiene `app.py`, `participantes.py`, `test_participantes.py`, `README.md`, `AGENTS.md` y la skill. La misma copia se utiliza en EXP-02, EXP-03 y EXP-04.

La carpeta incluye el código, las pruebas, esta guía, las instrucciones del agente y la skill portátil:

```text
mi-repo-agente-b7/
├── app.py
├── participantes.py
├── test_participantes.py
├── README.md
├── AGENTS.md
└── .agents/
    └── skills/
        └── preparar-cambio/
            ├── SKILL.md
            └── agents/
                └── openai.yaml
```

README.md orienta a la persona, AGENTS.md da instrucciones al agente y SKILL.md describe el procedimiento reutilizable. La skill acompaña la preparación del cambio; la persona sigue revisando y autorizando.

Puedes activarla explícitamente con `$preparar-cambio`. AGENTS.md también indica al agente que la utilice antes de crear o modificar código. Si tu herramienta no reconoce esa sintaxis, conserva la skill y pide al agente que lea su ubicación; no inventes una activación automática.

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

El cambio debe conservar las pruebas existentes y terminar con las comprobaciones disponibles correctas. No se incluye una solución corregida.

## 1. Comprueba el fallo

```text
python app.py
```

Cuando el programa lo pida, introduce por separado:

```text
Nombre: Luis
Edad: -15
```

No corrijas todavía el código.

## 2. Prepara Git como red de seguridad

Antes de proponer `git init`, comprueba si ya existe un repositorio. Git es un punto de control claro, no un requisito para abrir ni practicar. Si no existe, no lo inicialices automáticamente. Si quieres guardar el estado inicial y la persona lo autoriza:

```text
git init
git add app.py participantes.py test_participantes.py README.md AGENTS.md .agents/skills/preparar-cambio/SKILL.md
git commit -m "inicio: practica de agentes"
```

Guarda solo cuando la persona lo autorice y siguiendo el procedimiento del repositorio.

## 3. Comprobaciones disponibles

```text
git status
git diff
python app.py
python -m unittest -v
```

`git status` muestra los archivos modificados; `git diff` permite revisar el contenido del cambio; `python app.py` comprueba el caso manual; y `python -m unittest -v` ejecuta las pruebas. `unittest` forma parte de Python: un fallo del detector de pruebas del editor no demuestra que las pruebas no existan. Reutiliza un intérprete disponible y no crees un entorno ni instales dependencias por rutina. Si no puedes ejecutar una comprobación, marca `NO_VERIFICADO`, explica el impedimento y propone cómo realizarla. Tras un cambio autorizado informa del archivo, líneas cambiadas, comprobaciones y pendientes. Si no hay Git, muestra una comparación antes/después si conservaste el original y declara cualquier limitación.

La corrección inicial debe limitarse, si el plan lo confirma, a `participantes.py`, conservando `app.py` y las pruebas. La ampliación del caso `edad = 120` es un cambio separado y solo puede tocar `test_participantes.py`.

## 4. Llevar la skill a otro proyecto

La skill se puede compartir por correo, WhatsApp u otro medio:

1. Descarga `preparar-cambio-codex.zip`.
2. Extrae el ZIP en la raíz del proyecto y conserva la estructura completa `.agents/skills/preparar-cambio/SKILL.md`.
3. Abre el proyecto en Codex y activa la skill con `$preparar-cambio`, si esa sintaxis está reconocida por tu instalación.

Si ya existe una skill con ese nombre, no la sobrescribas sin revisar ambas versiones. Extraer el ZIP no modifica ni configura automáticamente `AGENTS.md`, y no garantiza reconocimiento en otros agentes.

Para conectar las instrucciones en otro proyecto, puedes pedir:

```text
Lee las instrucciones existentes y el README de este proyecto. Comprueba si existe .agents/skills/preparar-cambio/SKILL.md y si existe AGENTS.md. Propón añadir únicamente una regla breve que indique utilizar esa skill antes de crear o modificar código, presentar objetivo, alcance, criterios de aceptación y plan, y esperar autorización. Si no existe AGENTS.md, propone un archivo mínimo sin inventar convenciones. Muestra el cambio y espera mi autorización antes de escribirlo.
```

## Continuar

Después de revisar y aceptar el cambio, conserva la versión validada según el procedimiento autorizado y continúa a EXP-03 con esta misma carpeta. No des permiso genérico al agente para crear commits, tags o publicar.
