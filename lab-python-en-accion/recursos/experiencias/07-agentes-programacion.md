# Agentes de programacion - Trabajar con control

## Para que sirve esta experiencia

En esta practica vas a trabajar con un agente de programacion sobre un proyecto pequeno de Python. El objetivo no es que el agente "haga magia", sino aprender a pedirle ayuda sin perder el control del codigo.

El proyecto inicial contiene un fallo visible: permite registrar una edad negativa.

```text
Nombre: Luis
Edad: -15
Participante registrado: Luis (-15 anos)
```

Al terminar el recorrido guiado, ese caso debe rechazarse:

```text
Error: la edad debe estar entre 0 y 120 anos.
```

Puedes hacer la practica con Codex u otro agente de programacion que tenga acceso a la carpeta del proyecto.

---

## El flujo completo

```text
ENTENDER
  ↓
PEDIR AL AGENTE QUE ANALICE
  ↓
AUTORIZAR EL CAMBIO
  ↓
git status
  ↓
git diff
  ↓
EJECUTAR
  ↓
PRUEBAS
  ↓
REVISION HUMANA
  ↓
git commit
```

La idea importante es esta: **analizar no significa autorizar modificaciones**. Primero pedimos al agente que investigue y explique. Solo despues, si el analisis tiene sentido, autorizamos un cambio concreto.

---

## 1. Descarga y prepara la practica

Descarga `agentes-programacion.zip`, descomprimelo y abre la carpeta `agente-programacion`.

La carpeta del alumno contiene:

```text
agente-programacion/
├── app.py
├── participantes.py
├── test_participantes.py
├── README.md
└── AGENTS.md
```

`AGENTS.md` contiene instrucciones permanentes para orientar al agente dentro de este proyecto: trabajar con cambios pequenos, no anadir dependencias, no eliminar pruebas y explicar que se ha tocado. Es como dejar una nota fija al ayudante antes de empezar.

---

## 2. ENTENDER: comprueba el fallo inicial

Abre PowerShell dentro de la carpeta `agente-programacion` y ejecuta:

```powershell
python app.py
```

Prueba este caso:

```text
Nombre: Luis
Edad: -15
```

Si el programa registra a Luis con `-15 anos`, has visto el fallo real. Esta comprobacion manual es util porque demuestra un caso concreto, pero no demuestra que todo el programa funcione.

---

## 3. PEDIR AL AGENTE QUE ANALICE

Ahora pide solo analisis. No autorices cambios todavia.

```text
Analiza este proyecto y localiza por que permite registrar edades negativas.
No modifiques ningun archivo todavia.

Explicame:
1. donde esta el problema;
2. que comportamiento produce;
3. que archivo necesitarias modificar para corregirlo.
```

Un agente puede investigar sin modificar archivos si delimitamos correctamente el alcance. En esta fase esperas una explicacion, no un parche.

---

## 4. AUTORIZAR EL CAMBIO

Si el analisis es correcto, autoriza una modificacion pequena y concreta:

```text
Corrige el problema.

Una edad valida debe estar entre 0 y 120 anos, ambos incluidos.
Modifica unicamente los archivos estrictamente necesarios.
No anadas dependencias.
No hagas ninguna otra mejora.
Despues explica exactamente que has cambiado.
```

La precision de los requisitos condiciona directamente la solucion que genera el agente. Si le pides poco, puede quedarse corto. Si le pides algo ambiguo, puede cambiar demasiado.

---

## 5. git status: que archivos ha tocado

Despues de la modificacion, ejecuta:

```powershell
git status
```

`git status` responde a la pregunta:

```text
Que archivos han cambiado desde el ultimo punto guardado?
```

Aqui revisas si el agente ha tocado solo lo autorizado. Si pediste corregir la edad, lo normal es que cambie `participantes.py`, no media practica.

---

## 6. git diff: que lineas ha cambiado

Ahora ejecuta:

```powershell
git diff
```

`git diff` compara la version guardada con la version actual. Muestra exactamente que lineas ha anadido, eliminado o modificado el agente.

No debemos asumir que algo funciona porque el agente lo diga. El `diff` es la revision del codigo real, linea por linea.

---

## 7. EJECUTAR: prueba manual

Ejecuta otra vez:

```powershell
python app.py
```

Vuelve a probar:

```text
Nombre: Luis
Edad: -15
```

Ahora deberia aparecer:

```text
Error: la edad debe estar entre 0 y 120 anos.
```

Esta ejecucion manual comprueba un caso real. Es necesaria, pero sigue siendo limitada: un solo caso correcto no demuestra que todo funcione.

---

## 8. PRUEBAS: varios comportamientos

Ejecuta:

```powershell
python -m unittest -v
```

Las pruebas automaticas comprueban varios comportamientos y ayudan a detectar regresiones: errores que aparecen cuando arreglamos una cosa y rompemos otra.

Durante nuestra validacion real, Codex no pudo ejecutar Python en su entorno. La comprobacion final la hizo el usuario en su entorno real y el resultado fue:

```text
7 tests -> OK
```

Leccion importante: si el agente no puede comprobar algo realmente, debe decirlo. Y nosotros no debemos dar por valido un cambio hasta probarlo en un entorno que si pueda ejecutar el proyecto.

---

## 9. REVISION HUMANA

Antes de guardar el cambio, revisa:

- El problema inicial ya no ocurre.
- `git status` muestra solo los archivos esperados.
- `git diff` contiene cambios coherentes con lo autorizado.
- Las pruebas automaticas pasan.
- El agente no ha eliminado pruebas ni anadido dependencias.

La revision humana es el momento en el que decides si aceptas el cambio.

---

## 10. git commit: guardar lo validado

Cuando el cambio ya esta revisado y probado:

```powershell
git add participantes.py
git commit -m "fix: validar la edad de participantes"
```

`git commit` guarda un estado del proyecto que ya hemos revisado y validado. No es "guardar por guardar"; es crear un punto fiable al que podemos volver.

---

# Mini-reto: validacion del nombre

Ahora hay un segundo problema para resolver con menos ayuda: el registro debe comprobar tambien el nombre.

Un nombre valido debe ser una cadena de texto con mayusculas o minusculas, sin numeros ni caracteres especiales.

## Nivel 1: pedir analisis

Pide al agente que localice el problema sin modificar archivos.

## Nivel 2: autorizar una solucion

Cuando entiendas la causa, autoriza un cambio concreto. Recuerda incluir limites:

- Modificar solo lo necesario.
- No anadir dependencias.
- No hacer mejoras extra.
- Explicar exactamente que se ha cambiado.

## Nivel 3: pedir pruebas

Anade pruebas automaticas para comprobar al menos:

- Un nombre formado solo por letras es valido.
- Un nombre vacio es rechazado.
- Un nombre con numeros es rechazado.
- Un nombre con caracteres especiales es rechazado.

## Nivel 4: cerrar el ciclo

Repite el flujo:

```text
git status -> git diff -> ejecucion manual -> pruebas -> revision humana -> git commit
```

El objetivo final no es obedecer al agente. Es aprender a colaborar con el sin dejar de ser responsable del codigo.
