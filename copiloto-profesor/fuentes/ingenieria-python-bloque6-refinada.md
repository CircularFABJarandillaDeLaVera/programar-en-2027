# BLOQUE 6 · DEL NOTEBOOK AL ENTORNO DE DESARROLLO PROFESIONAL
## "Del Notebook al Entorno de Desarrollo Profesional"
### Orientación Temporal: "PROGRAMAR CON PYTHON EN 2027"

> **Nota de vigencia (revisión documental 2026-09-10):** Diseño histórico. La ruta actual tiene seis experiencias y una copia SAMI-Local con CSV de hardware y salida descriptiva en consola; no exige push ni generación de PDF. Consulta [04](../04-PRACTICAS-Y-APOYOS.md) y [06](../06-SAMI.md). Las lagunas sobre Git y depuración de estas fuentes de origen no describen todo el material publicado. Véase el [criterio de fuentes](README.md).


Este documento constituye la **versión consolidada y saneada de la Ingeniería del Conocimiento para el Bloque 6: Del Notebook al Entorno de Desarrollo Profesional**, adaptada para orientar curricularmente la formación técnica hacia el año **2027**, en estricta conformidad con el alcance curricular establecido en la versión consolidada V4 del itinerario [190].

El objetivo central de este bloque es capacitar al alumno para que realice la transición mental y operativa definitiva desde la ejecución de celdas experimentales de código en cuadernos interactivos (Google Colab) hacia la **organización, desarrollo, versionado y depuración de proyectos de software locales, aislados, reproducibles e integrados con herramientas del entorno moderno para 2027** dentro de Visual Studio Code (VS Code) [5, 6].

---

## 1. OBJETIVO OPERATIVO
Configurar, estructurar y ejecutar proyectos locales de software multipaquete en Python dentro de VS Code [5], aislando dependencias mediante entornos virtuales (`venv` y `pip`) [7], versionando el progreso de manera local e interactuando con repositorios remotos en **GitHub** mediante comandos estándar de Git [5], depurando de manera analítica mediante breakpoints y análisis de trazas (*Tracebacks*) [13], e integrando asistentes de programación como herramientas auxiliares del entorno de trabajo, logrando un espacio moderno y reproducible para la era de programación asistida en **2027** [6].

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 6)

El bloque progresa unificando los flujos de configuración, control de versiones e infraestructura local, preparando al alumno para el desarrollo profesional guiado:

```
          [Bloque 5: Python Aplicado y Librerías (SAMI-Applied)]
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.1 Del Notebook al Script (Notebook ➔ Script)          │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.2 VS Code y la Terminal Integrada (VS Code)           │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.3 Estructura de un Proyecto Local (Proyecto)          │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.4 Entornos Virtuales y Dependencias (venv, pip, reqs) │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.5 Control de Versiones Local (Git)                    │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.6 Conexión y Repositorios Remotos (GitHub)             │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.7 Depuración de Código e Inspección (Debugger)        │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 6.8 Contacto con Asistentes de Programación (Asistente) │
        └────────────────────────────┬────────────────────────────┘
                                     │
                                     ▼
          [PROYECTO INTEGRADO: SAMI-Local (Proyecto Reproducible, Git e IA)]
                                     │
                                     ▼
           [Bloque 7: Python + IA (Desarrollo y Agentes Avanzados)]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 6

*   **IMPRESCINDIBLES (Configuración de Entorno e Infraestructura)**:
    *   La progresión del flujo de trabajo: De cuadernos interactivos (`.ipynb`) a scripts individuales (`.py`) y arquitecturas de proyecto multipaquete locales [5, 16].
    *   Ejecución de archivos Python de forma directa desde la terminal o consola de comandos (`python script.py`) [7].
    *   Estructuración jerárquica de archivos locales en carpetas de proyecto (directorios raíz, `/src`, `/logs`, `/data`) [5].
    *   Aislamiento de dependencias: creación física de entornos virtuales nativos de Python (`python -m venv venv`) [7] y comandos de activación según sistemas operativos (Windows vs. Mac/Linux) [7].
    *   Gestión de paquetes externos con el instalador de Python `pip` [5, 7] y congelado de dependencias reproducibles en ficheros `requirements.txt` [16].
    *   Conceptos de control de versiones locales con **Git**: inicialización (`git init`), registro de cambios (`git add`, `git commit`), consulta de estado (`git status`) y clonación de repositorios existentes (`git clone`) [5].
    *   Conexión remota con **GitHub**: vinculación de servidores remotos (`git remote`), y sincronización bidireccional (`git push` y `git pull`) [5].
    *   Depuración física analítica mediante análisis de trazas (*Tracebacks*) de abajo hacia arriba, localizando el origen exacto del colapso del software [13].
*   **ÚTILES (Uso y Optimización del Editor)**:
    *   Uso de Visual Studio Code como editor de código extensible, manejando su interfaz de explorador, paneles y terminal integrada [5, 6].
    *   Configuración y selección de intérpretes locales de Python en la barra de estado (*status bar*) de VS Code [7].
    *   Instalación de extensiones fundamentales para el flujo de trabajo de Python de 2027 (extensión oficial de Python de Microsoft, extensión oficial de Jupyter Notebooks) [6].
    *   Uso de breakpoints visuales e inspección de variables en tiempo real en la depuración física del código [6, 7].
*   **AMPLIACIÓN (Entornos Híbridos y Contacto con IA)**:
    *   Uso de la extensión oficial de **Google Colab para VS Code** para conectar cuadernos locales de VS Code con runtimes de procesamiento GPU/TPU administrados en la nube de Colab [6].
    *   Primer contacto práctico con asistentes de programación como herramientas integradas en el entorno: **GitHub Copilot**, **herramienta de Google para VS Code (Google Colab/Gemini Extension)**, **Codex** y **Claude Code**, entendiéndolos como copilotos de asistencia en el editor [6].

---

## 4. DESARROLLO INSTRUCCIONAL DE CONCEPTOS (APRENDER HACIENDO)

### CONCEPTO 6.1: Del Notebook al Script (Notebook ➔ Script)
*   **CONCEPTO**: Un cuaderno interactivo (`.ipynb`) es un entorno de celdas acopladas al estado de memoria de un kernel Jupyter, ideal para experimentación rápida [5, 6]. Un script (`.py`) es un archivo de texto plano ejecutable por el intérprete de Python de arriba a abajo en un único flujo de control libre de estados de celdas [16]. La producción de software profesional exige migrar el código maduro desde cuadernos hacia scripts estructurados `.py` [16].
*   **PRERREQUISITO**: Bloques 1 al 5.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: `Python_Notes` [5] (organiza cuadernos Jupyter para fases iniciales y scripts `.py` como `python.py` para la ejecución general de tareas en producción [5]).
*   **CÓDIGO MÍNIMO** (Migración de celda a script):
    ```python
    # En una celda de Colab ejecutamos código suelto:
    # x = 10; x

    # En un script físico de Python (script_prueba.py) debemos explicitar la impresión:
    x = 10
    print(x)  # Obligatorio para visualizar salidas en consola
    ```
*   **PREDECIR**: Si escribimos un script `.py` donde la última línea es únicamente la variable `resultado` (sin usar `print()`), ¿qué se visualizará en la pantalla al correr el script? El alumno debe predecir que no se mostrará nada, pues la visualización interactiva de última línea es una característica exclusiva de los kernels de Jupyter, no de los scripts `.py`.
*   **EJECUTAR**: Escribir el código en un archivo de texto llamado `prueba.py` y correrlo por consola.
*   **MODIFICAR**: Añadir una llamada explícita `print(resultado)` para forzar que el valor aparezca en la salida de comandos de la terminal.
*   **ERROR HABITUAL**: Copiar y pegar celdas completas de Colab que contienen comandos de shell de Jupyter (como `%pip install` o `!ls`) directamente en archivos `.py`, lo que provoca que el intérprete de Python lance un error de sintaxis inmediata (`SyntaxError`).
*   **MINI-RETO**: Tomar un código de limpieza de strings del Bloque 2 desarrollado en un cuaderno y escribirlo en un archivo local llamado `limpiador.py` asegurando el uso correcto de `print()`.
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Completar fragmento*: Completa la línea de código requerida en un script de Python `.py` para que imprima en consola la longitud de la lista de personajes.
        ```python
        # got_script.py
        personajes = ["Jon", "Arya", "Sansa"]
        ________________ # Mostrar el tamaño en consola
        ```
        *   A) `len(personajes)`
        *   B) `print len(personajes)`
        *   C) `print(len(personajes))`
        *   D) `len(personajes);`
    *   *Respuesta*: **C**. (Los scripts `.py` requieren la invocación explícita de la función `print()` con paréntesis para renderizar las salidas en el flujo de la terminal).
*   **EVIDENCIA**: Archivo `.py` limpio generado en el workspace local libre de sintaxis de cuadernos de Jupyter.

---

### CONCEPTO 6.2: VS Code y la Terminal Integrada (VS Code)
*   **CONCEPTO**: Visual Studio Code (VS Code) es un editor de código fuente extensible de alto rendimiento [5, 6]. Integra en una sola interfaz gráfica un explorador jerárquico de archivos, editores de texto plano avanzados, una terminal integrada del sistema operativo (que elimina la necesidad de alternar entre ventanas externas), y soporte del intérprete para desarrollo [5, 6, 7].
*   **PRERREQUISITO**: Concepto 6.1.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: "Google Colab is Coming to VS Code" [6] (especifica la integración del editor VS Code con extensiones Jupyter para alternar entornos locales y remotos [6]) y "Playwright Python" [7] (menciona el uso de VS Code, instalación de extensiones de Python y el botón de la barra de estado para monitorear el entorno [7]).
*   **CÓDIGO MÍNIMO**:
    *   En la interfaz de VS Code: Menú Superior ➔ Terminal ➔ New Terminal. Abre una consola de sistema apuntando automáticamente al directorio activo de trabajo.
*   **PREDECIR**: Si abrimos la terminal integrada de VS Code en un proyecto recién configurado, ¿necesitamos navegar manualmente con comandos `cd` para ejecutar el script `main.py` de la raíz? No, la terminal integrada se inicializa posicionada automáticamente en la carpeta del espacio de trabajo abierto.
*   **EJECUTAR**: Abrir el proyecto en VS Code local y desplegar la terminal integrada.
*   **MODIFICAR**: Configurar la terminal integrada de VS Code para usar el shell de tu preferencia (Bash, CMD o PowerShell).
*   **ERROR HABITUAL**: Escribir comandos de Python en el editor de texto y esperar que se ejecuten sin lanzar la terminal integrada, confundiendo la pantalla de código con la consola de ejecución de comandos.
*   **MINI-RETO**: Instalar en tu VS Code local la extensión oficial de Python de Microsoft y comprobar que se visualice la barra de estado de intérpretes [7].
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Elegir solución*: De acuerdo con la documentación de entornos integrados [6, 7], ¿cuál es el beneficio técnico de utilizar la terminal integrada de VS Code frente a una consola del sistema externa?
        *   A) Permite compilar Python a C++ de forma directa.
        *   B) Se inicializa posicionada automáticamente en el directorio raíz del espacio de trabajo del proyecto abierto, facilitando la ejecución inmediata del software sin navegación manual.
        *   C) Elimina por completo la necesidad de instalar Python en el ordenador.
        *   D) Modifica el sistema operativo de tu máquina para hacerlo más rápido.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Captura de pantalla de la interfaz de VS Code del alumno mostrando el explorador de archivos izquierdo y la terminal integrada de consola abierta.
*   **LAGUNA DE CONOCIMIENTO (Instalación de Python y VS Code)**: Las fuentes oficiales del notebook no documentan paso a paso el proceso físico de descarga de los instaladores para Windows/macOS/Linux, la configuración manual de las variables de entorno PATH, ni los requisitos mínimos de instalación de VS Code. Esto se marca formalmente como una laguna que debe ser suplida mediante la documentación oficial externa recomendada (Sección 10).

---

### CONCEPTO 6.3: Estructura Básica de un Proyecto (Proyecto)
*   **CONCEPTO**: Un proyecto de software profesional en Python no se limita a un script flotante. Requiere una organización jerárquica física de archivos en el disco duro, dividiendo de forma clara los datos de entrada, las configuraciones, el código fuente modular, los logs de error y el script orquestador principal.
*   **PRERREQUISITO**: Concepto 6.2 y Bloque 3.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: `Python_Notes` [5] (que detalla estructuras organizadas con carpetas para Jupyter Notebooks, módulos de librerías, sample data y archivos de log de salida de forma separada [5]).
*   **CÓDIGO MÍNIMO** (Esquema físico de directorios del proyecto):
    ```
    proyecto_sami/
    ├── data/               # Archivos CSV reales (got_1.csv)
    ├── logs/               # Almacenamiento de auditoria_errores.log
    ├── src/                # Código fuente modular (.py)
    │   ├── persistencia.py
    │   └── analizador.py
    ├── config.json         # Parámetros fijos de auditoría
    └── main.py             # Script orquestador CLI raíz
    ```
*   **PREDECIR**: Si un script en `src/analizador.py` intenta cargar un archivo JSON de configuración situado en la raíz del proyecto mediante la ruta relativa `with open("config.json")`, ¿funcionará la llamada si ejecutamos el programa con el comando de consola ejecutado desde el directorio raíz? El alumno debe predecir que sí funcionará, porque la ruta relativa se calcula en base al directorio desde el cual se ejecuta el comando de la terminal, no en base a la ubicación física del script de origen.
*   **EJECUTAR**: Construir la estructura de carpetas física en tu disco local y correr el script principal.
*   **MODIFICAR**: Cambiar la ejecución a diferentes carpetas para comprobar cómo se alteran las resoluciones de rutas de archivos planos.
*   **ERROR HABITUAL**: Escribir rutas absolutas alambradas en el código (ej. `C:/Users/Usuario/Documents/proyecto/config.json`), imposibilitando que el proyecto se ejecute de manera reproducible en ordenadores de otros programadores. Las rutas deben modelarse siempre como rutas relativas calculadas desde el directorio de trabajo del proyecto.
*   **MINI-RETO**: Maquetar la estructura física de carpetas del proyecto en local utilizando la terminal integrada o el explorador, posicionando un archivo de datos de prueba en la carpeta correspondiente.
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Elegir solución*: Tienes un proyecto con la estructura del código mínimo descrita arriba. El script principal `main.py` necesita importar de manera selectiva la función `calcular_precio` ubicada en el archivo `analizador.py` de la carpeta `src`. ¿Cuál es la sintaxis de importación correcta y estándar en Python?
        *   A) `import calcular_precio from src.analizador`
        *   B) `from src.analizador import calcular_precio`
        *   C) `import src/analizador/calcular_precio`
        *   D) `from analizador import calcular_precio`
    *   *Respuesta*: **B**. (La directiva `from` debe referenciar la jerarquía de directorios notación de punto de paquetes en lugar de barras de directorios, importando el recurso del módulo de forma selectiva).
*   **EVIDENCIA**: Estructura física completa de carpetas creada de forma real en el disco del ordenador del estudiante.

---

### CONCEPTO 6.4: Gestión de Entornos Virtuales e Instalación de Dependencias (venv, pip, requirements.txt)
*   **CONCEPTO**: Un entorno virtual (`venv`) es una copia ligera y aislada del intérprete de Python y su estructura de librerías, creada localmente en la carpeta de un proyecto [7]. Su propósito fundamental de ingeniería de software es garantizar el aislamiento de dependencias: evitar que la instalación de librerías en un proyecto colisione o rompa el funcionamiento de las librerías de otros proyectos de la máquina [7]. El gestor `pip` es la utilidad estándar de Python que se encarga de descargar e instalar paquetes de terceros en el entorno virtual activo [5, 7], permitiendo definir dependencias en un archivo centralizado `requirements.txt` [16].
*   **PRERREQUISITO**: Concepto 6.3.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: `Playwright Python` [7] (especifica de forma exacta el comando para la creación de un entorno virtual: `python -m venv venv` [7]; y documenta los comandos de activación específicos para sistemas operativos: `source venv/bin/activate` en Mac/Linux, y `venv\Scripts\activate` en Windows [7]).
*   **CÓDIGO MÍNIMO** (Flujo de comandos nativos de la consola de terminal [7]):
    ```bash
    # 1. Crear el entorno virtual llamado 'venv' en la carpeta activa
    python -m venv venv

    # 2. Activar el entorno virtual (Mac/Linux)
    source venv/bin/activate

    # 2. Activar el entorno virtual (Windows)
    venv\Scripts\activate

    # 3. Comprobar que el prompt de la terminal muestra el prefijo "(venv)"
    # 4. Instalar de manera masiva desde el archivo de texto
    pip install -r requirements.txt
    ```
*   **PREDECIR**: Si abrimos una nueva terminal de consola en el sistema y ejecutamos `pip install numpy` sin haber corrido previamente el comando de activación de nuestro entorno virtual, ¿dónde se instalará la librería? El alumno debe predecir que se instalará en el entorno de Python global del sistema, perdiendo los beneficios del aislamiento local.
*   **EJECUTAR**: Ejecutar los comandos de creación y activación del entorno virtual en la terminal integrada de VS Code.
*   **MODIFICAR**: Validar el aislamiento consultando la lista de paquetes instalados en el entorno activo con `pip list` (debe mostrar una lista minimalista libre de librerías globales).
*   **ERROR HABITUAL**: Escribir el comando de activación `source venv/bin/activate` en una terminal del sistema Windows que está configurada con PowerShell en lugar de Git Bash, lo que lanzará un error de comando no reconocido. Windows PowerShell requiere activar mediante `venv\Scripts\Activate.ps1`.
*   **MINI-RETO**: Crear un entorno virtual llamado `entorno_prueba` en tu terminal local, activarlo e instalar la librería de generación de PDFs `reportlab` empleando `pip` [7].
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Detectar errores*: El alumno ejecuta `python -m venv venv` y luego intenta instalar directamente una librería ejecutando `pip install numpy`. Al inspeccionar la consola de su máquina global, observa que los proyectos antiguos fallan por colisiones de librerías. ¿Cuál fue el error de flujo técnico cometido?
        *   A) Olvidó descargar el instalador pip de internet previamente.
        *   B) No activó físicamente el entorno virtual creado (`source` o `activate`) antes de invocar a `pip install`, instalando la librería de forma global en la máquina [7].
        *   C) El nombre de la carpeta virtual debe ser obligatoriamente `virtual_env`.
        *   D) Python no permite usar `pip` dentro de proyectos con entornos virtuales.
    *   *Respuesta*: **B**.
*   **EVIDENCIA**: Carpeta física local `venv` creada en el directorio de trabajo del estudiante que almacena de forma aislada los binarios del intérprete local de Python.
*   **LAGUNA DE CONOCIMIENTO (Instalador Anaconda/Conda)**: Conda se menciona brevemente como un comando alternativo para instalar Playwright [7], pero las fuentes **no documentan el aprovisionamiento de la suite Anaconda, comandos de creación de entornos `conda create`, ni la administración de dependencias bajo esta distribución**. Se enseña únicamente de forma teórica su rol científico.

---

### CONCEPTO 6.5: Control de Versiones Local (Git)
*   **CONCEPTO**: Git es el sistema de control de versiones descentralizado estándar en la industria de software. Permite realizar un seguimiento cronológico preciso de los cambios realizados sobre el código fuente del proyecto, facilitando la creación de puntos de restauración seguros (commits) sin duplicar archivos físicamente en el disco.
*   **PRERREQUISITO**: Concepto 6.4.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: La estructura del repositorio de prácticas de DevSharma03 [5] hace uso explícito de Git para su alojamiento y clonación local mediante el comando `git clone` [5].
*   **CÓDIGO MÍNIMO** (Comandos esenciales de Git local):
    ```bash
    # Clonación de un repositorio de código existente [5]
    git clone https://github.com/DevSharma03/Python_Practice.git
    ```
*   **PREDECIR**: Si clonamos un proyecto con `git clone`, ¿se descargará de forma física la carpeta `venv` de dependencias locales del desarrollador original? El alumno debe predecir que no, dado que la carpeta `venv` es pesada, específica del sistema operativo del creador, y se excluye sistemáticamente del repositorio (usualmente mediante el archivo `.gitignore`), requiriendo que la instalemos nosotros localmente usando el archivo `requirements.txt`.
*   **EJECUTAR**: Ejecutar la clonación de un repositorio público sencillo utilizando la terminal integrada de VS Code para observar el flujo de descarga de archivos.
*   **MODIFICAR**: Crear un archivo de texto en el repositorio descargado y consultar su estado con el comando de consola de Git.
*   **ERROR HABITUAL**: Intentar ejecutar comandos de Git (como `git status` o `git init`) en carpetas locales de la máquina que no han sido inicializadas como repositorios de Git, obteniendo el error `fatal: not a git repository (or any of the parent directories): .git`.
*   **MINI-RETO**: Clonar de forma física un repositorio de código de tu base de conocimiento en tu ordenador local empleando la consola de comandos de VS Code [5].
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Elegir solución*: De acuerdo con la estructura del repositorio de DevSharma03 [5], ¿cuál es el comando estándar empleado para descargar una copia física completa de un repositorio de Git remoto hacia tu directorio de trabajo local?
        *   A) `git init`
        *   B) `git status`
        *   C) `git clone`
        *   D) `git commit`
    *   *Respuesta*: **C**.
*   **EVIDENCIA**: Proyecto descargado en local de forma exitosa mediante terminal integrada utilizando el comando `git clone` [5].
*   **LAGUNA DE CONOCIMIENTO (Comandos Operativos de Git Local)**: El notebook menciona el comando para clonar (`git clone`) [5], pero las fuentes **no proveen explicaciones ni sintaxis de comandos operativos clave de Git local** (como `git init`, `git add`, `git commit` o `git status`). Estos conceptos lógicos de control de cambios se introducen de forma teórica en la Ingeniería, marcando la sintaxis detallada de comandos como una laguna que requiere documentación externa recomendada (Sección 10).

---

### CONCEPTO 6.6: Conexión y Repositorios Remotos (GitHub)

> Apoyo de la ingeniería de origen. La experiencia actual de B6 trabaja con Git local y no requiere publicar ni simular conflictos.
*   **CONCEPTO**: GitHub es una plataforma de alojamiento en la nube que actúa como repositorio remoto centralizado de código fuente Git. Permite conectar un repositorio de desarrollo local con un servidor remoto en la nube, facilitando el respaldo del código, el trabajo colaborativo en equipos de ingeniería y la sincronización continua de cambios mediante operaciones de envío (`push`) y descarga (`pull`).
*   **PRERREQUISITO**: Concepto 6.5.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: Los repositorios y guías del notebook hacen referencia sistemática a la conexión y alojamiento de proyectos en GitHub [5].
*   **CÓDIGO MÍNIMO** (Vinculación conceptual remota):
    *   `git remote add origin <URL>`: Vincula el repositorio Git local con la dirección URL del repositorio remoto en GitHub.
    *   `git push -u origin main`: Envía los commits locales de la rama principal hacia GitHub.
    *   `git pull`: Descarga y fusiona los últimos cambios del repositorio en la nube hacia la máquina local.
*   **PREDECIR**: Si realizamos cambios sobre un script de forma local e intentamos recuperarlos desde la oficina ejecutando `git pull`, ¿se descargarán si previamente olvidamos ejecutar `git push` desde el ordenador de casa? El alumno debe predecir que no se descargará nada nuevo, dado que `git pull` solo recupera cambios que ya han sido sincronizados y subidos físicamente a los servidores remotos de GitHub.
*   **EJECUTAR**: Vincular de forma teórica y lógica los pasos para emparejar un directorio local con un nuevo repositorio en blanco en GitHub.
*   **MODIFICAR**: Simular un conflicto de sincronización local si el repositorio de GitHub tiene cambios que no posee la máquina física.
*   **ERROR HABITUAL**: Intentar empujar cambios con `git push` sin haber configurado previamente las credenciales de seguridad (OAuth o SSH) o sin haber inicializado la rama principal de trabajo local como `main`, arrojando errores de autenticación o de referencia ausente.
*   **MINI-RETO**: Explicar por escrito en un log de desarrollo el flujo secuencial de comandos de Git necesarios para tomar un proyecto local nuevo en blanco, convertirlo en repositorio de versiones, y conectarlo por primera vez a un repositorio remoto en GitHub.
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Completar flujo*: Selecciona la opción que completa las directivas lógicas de Git requeridas para descargar los últimos cambios realizados por un colega en el repositorio de GitHub remoto antes de continuar programando localmente.
        ```bash
        # En la terminal integrada de VS Code ejecutamos:
        git __________
        ```
        *   A) `git init`
        *   B) `git push`
        *   C) `git pull`
        *   D) `git status`
    *   *Respuesta*: **C**. (El comando `git pull` se encarga de descargar y fusionar los cambios de la rama remota vinculada directamente en el espacio de trabajo local).
*   **EVIDENCIA**: Flujo lógico documentado por el alumno de forma secuencial y limpia para la conexión de repositorios remotos.
*   **LAGUNA DE CONOCIMIENTO (Sintaxis Operativa de Sincronización Remota)**: Las fuentes no contienen explicaciones detalladas ni sintaxis de comandos de sincronización (`git remote`, `git push`, `git pull`) ni guías de autenticación mediante llaves SSH o tokens personales de acceso de GitHub, declarándose como una laguna de infraestructura que requiere el soporte de manuales de ampliación (Sección 10).

---

### CONCEPTO 6.7: Depuración de Código e Inspección (Debugger y Breakpoints)
*   **CONCEPTO**: Un *Traceback* o traza de error es la pila de llamadas de ejecución impresa en la consola por el intérprete de Python cuando el programa aborta abruptamente ante una excepción no capturada [13]. Es una herramienta analítica crucial para el programador. Se lee de abajo hacia arriba [13]: la última línea detalla la excepción que provocó la parada (ej. `ZeroDivisionError` o `KeyError`) [13]; las líneas intermedias listan secuencialmente los archivos, funciones y números de línea por los cuales fluyó la ejecución antes de colapsar, permitiendo depurar de forma lógica [13]. El uso del **Debugger** y la fijación de **Breakpoints** (puntos de interrupción lógicos) en el editor de código permite pausar la ejecución en tiempo real para inspeccionar el valor activo de las variables en memoria y seguir el flujo secuencial paso a paso sin colapsar [6, 7].
*   **PRERREQUISITO**: Bloque 3 (Manejo de Excepciones) y Concepto 6.2.
*   **EJEMPLO PROCEDENTE DE LAS FUENTES**: `Google Colaboratory 4` [13] (ilustra trazas de excepción con pila de llamadas detalladas indicando líneas y bloques lógicos de error para facilitar la depuración [13]).
*   **CÓDIGO MÍNIMO** (Interpretación analítica de Traceback):
    ```text
    Traceback (most recent call last):
      File "main.py", line 12, in <module>
        analizar_datos()
      File "src/analizador.py", line 5, in analizar_datos
        df = pd.read_csv("data/got_1.csv")
    FileNotFoundError: [Errno 2] No such file or directory: 'data/got_1.csv'
    ```
*   **PREDECIR**: De acuerdo con el Traceback de ejemplo, ¿en qué archivo, en qué función y en qué línea exacta ocurrió el colapso del software? El alumno debe predecir que el error se generó en la línea 5 del archivo `src/analizador.py`, dentro del bloque de la función `analizar_datos()`.
*   **EJECUTAR**: Escribir un script con un error de división por cero intencional y correrlo por terminal para forzar la traza y analizarla de abajo hacia arriba.
*   **MODIFICAR**: Corregir la línea de código afectada y comprobar la ejecución limpia.
*   **ERROR HABITUAL**: Ignorar la pila del Traceback de la consola e intentar parchar el código de forma aleatoria a ciegas leyendo solo la última línea del mensaje de error, perdiendo la trazabilidad física que el compilador suministra.
*   **MINI-RETO**: Crear un script local que fuerce un error de tipo `KeyError` al acceder a un diccionario, ejecutarlo, e interpretar por escrito en un log la pila de llamadas de la traza indicando las líneas implicadas.
*   **MICROEVALUACIÓN TIPO SOLOLEARN**:
    *   *Localizar error en traza*: El alumno ejecuta su script por consola y recibe el siguiente traceback:
        ```text
        Traceback (most recent call last):
          File "main.py", line 8, in <module>
            procesar_calculo()
          File "main.py", line 3, in procesar_calculo
            print(10 / 0)
        ZeroDivisionError: division by zero
        ```
        Al leer analíticamente la pila de llamadas, ¿en qué línea del archivo de código se originó el bug directo de cálculo matemático?
        *   A) En la línea 8 de `main.py` de forma directa.
        *   B) En la línea 3 de `main.py` de forma directa.
        *   C) El error ocurrió en una librería externa no visible.
        *   D) Python no indica en qué línea ocurrió el fallo.
    *   *Respuesta*: **B**. (La operación física matemática que provocó la detención abrupta por división entre cero fue estrictamente la ejecutada en la línea 3 de `main.py`).
*   **EVIDENCIA**: Reporte de depuración analítico redactado por el alumno donde se detalla la interpretación y resolución de tres trazas de error diferentes de forma secuencial.
*   **LAGUNA DE CONOCIMIENTO (Debugger Gráfico de VS Code)**: Aunque se menciona el soporte de depuradores en VS Code [6, 7], **las fuentes carecen de manuales o explicaciones gráficas detalladas sobre su interfaz visual** (fijar breakpoints con el ratón en la canaleta izquierda del editor, paneles interactivos "Watch", panel de variables "Local/Global" o el árbol de la pila de llamadas "Call Stack"). Se introduce de forma conceptual en la Ingeniería, marcando su uso visual práctico como laguna que requiere documentación complementaria externa (Sección 10).

---

### CONCEPTO 6.8: Primer contacto con asistencia de programación

El objetivo conservado es pedir una explicación, localizar un error o proponer un cambio pequeño con revisión humana. No se confunde una extensión para ejecutar cuadernos con un agente de programación.

La configuración depende de la herramienta. Para preparar clase consulta [04 · Recursos actuales](../04-PRACTICAS-Y-APOYOS.md); B7 desarrolla el trabajo con agentes. No se exige instalar una herramienta comercial ni disponer de una API para este pack docente.

**Evidencia:** el alumno distingue propuesta, cambio aplicado y resultado comprobado. Si no tiene agente, puede analizar una propuesta preparada por el docente.

---

## 5. ERRORES HABITUALES COMPILADOS (BUGS)

1.  **Copiar y pegar sintaxis de Jupyter en scripts de Python**: Incluir comandos interactivos y sintaxis de celdas (como `%pip install` o comandos de exclamación `!`) dentro de archivos ejecutables `.py`, rompiendo la compilación del intérprete de Python.
2.  **No activar el entorno virtual local**: Invocar a `pip install` de forma abierta en la terminal del sistema operativo sin haberse asegurado de que el prefijo del entorno virtual `(venv)` se muestre en pantalla, contaminando el Python global de la máquina [7].
3.  **Confundir consolas de comandos de terminal**: Intentar correr comandos del sistema operativo (como `cd` o `python script.py`) dentro del shell interactivo de comandos de Python (caracterizado por las llaves de entrada `>>>`), arrojando errores sintácticos continuos de sintaxis no válida.
4.  **Uso de rutas absolutas locales**: Escribir de forma explícita rutas absolutas complejas de directorios locales en el código físico del proyecto, impidiendo la portabilidad y reproducibilidad de la aplicación en ordenadores de otros ingenieros.
5.  **Aceptar código de IA sin auditar (Desarrollo Zombi)**: Integrar de forma ciega código autocompletado en el proyecto local sin comprender su comportamiento, heredando bugs silenciosos de versiones o lógicas corruptas en memoria.

---

## 6. PRÁCTICAS RECOMENDADAS DE LAS FUENTES (APRENDER HACIENDO)

*   **Migración de Celdas a Scripts**: Tomar los algoritmos de la base de Game of Thrones desarrollados en Colab (`02_pandas.ipynb` [2]) y consolidar su lógica completa de limpieza y filtrado en un archivo físico de comandos `.py` para correrlo de forma nativa desde la terminal integrada de VS Code.
*   **Aprovisionamiento de Entornos Locales**: Crear, activar e instalar dependencias de automatización web de forma síncrona en un entorno virtual aislado local empleando los comandos documentados en la guía técnica de Playwright [7].
*   **Auditoría de Tracebacks**: Forzar de manera intencional errores sintácticos y de inicialización en scripts locales, registrando y leyendo de abajo hacia arriba la pila de llamadas del traceback en la terminal integrada para identificar y corregir los fallos de forma analítica [13].

---

## 7. DISEÑO HISTÓRICO DEL PROYECTO INTEGRADOR B6

### "SAMI-Local: El Entorno Local de Producción, GitHub y Herramientas Modernas de SAMI"

*   **Objetivo de Aprendizaje**: Evolucionar el software de **SAMI-Applied** (adquisición con Playwright, tratamiento NumPy, análisis Pandas y ReportLab PDF) hacia un **proyecto físico local estructurado multipaquete** en VS Code, aislado mediante entornos virtuales (`venv`), versionado de forma local, conectado de manera teórica a un repositorio en **GitHub**, y preparado con extensiones del entorno moderno de asistentes de programación (IA) de forma reproducible en el ordenador del estudiante.

#### Estructura de Directorios Física del Proyecto SAMI-Local

El estudiante debe estructurar y maquetar físicamente el proyecto en su máquina local de acuerdo con el siguiente esquema de arquitectura de carpetas:

```
sami_local/
├── .git/                   # Repositorio Git local oculto (inicializado localmente)
├── .gitignore              # Archivo de exclusión de Git (excluye /venv y archivos .log)
├── venv/                   # Entorno virtual de Python aislado (creado localmente) [7]
├── data/                   # Carpeta de almacenamiento de datasets de entrada
│   └── got_1.csv           # Archivo real de Game of Thrones para prácticas de Pandas [222]
├── logs/                   # Almacenamiento físico de reportes de error
│   └── auditoria_errores.log
├── src/                    # Código fuente modular con responsabilidad única [5, 16]
│   ├── __init__.py
│   ├── persistencia.py     # Clase ManejadorDatos (JSON/CSV)
│   ├── scraper.py          # Clase Scraper síncrono (Playwright) [7]
│   ├── analizador.py       # Clase Analizador (NumPy/Pandas) [15]
│   └── generador_pdf.py    # Clase PdfReporter (ReportLab PDF) [15]
├── config.json             # Fichero JSON con umbrales límites de auditoría [66]
├── requirements.txt        # Declaración estricta de versiones de dependencias [16]
└── main.py                 # Script orquestador CLI interactivo raíz [5]
```

#### Flujo Operativo y de Verificación Física del Estudiante (Sin IA para Algoritmia)

El alumno debe ejecutar de forma manual el siguiente protocolo de ingeniería para validar la entrega técnica del proyecto SAMI-Local:

1.  **Fase de Aislamiento y Entorno**: Crear el entorno virtual en la terminal integrada de VS Code utilizando el comando nativo `python -m venv venv` [7]. Activar de forma física el entorno según su sistema operativo (`source` o `activate`) y validar que el prefijo `(venv)` aparezca en consola [7].
2.  **Fase de Aprovisionamiento**: Redactar de forma manual el archivo `requirements.txt` declarando las versiones exactas probadas de `numpy`, `pandas`, `pytest-playwright` y `reportlab` [16]. Invocar la instalación masiva ejecutando el comando de terminal `pip install -r requirements.txt` [16].
3.  **Fase de Versionado local**: Inicializar el repositorio Git local en la terminal integrada del proyecto. Configurar el archivo `.gitignore` para excluir de forma obligatoria la carpeta pesada de dependencias `/venv` y los archivos de la carpeta `/logs`. Realizar el seguimiento de cambios y consolidar su primer commit de versiones en el sistema.
4.  **Fase de Sincronización Remota**: Diseñar y estructurar lógicamente el mapa de comandos requeridos para conectar de manera segura su repositorio local con un repositorio en GitHub (`git remote`), simulando el envío definitivo de su código fuente de producción a la nube.
5.  **Fase de Depuración Controlada**: El alumno debe provocar de forma intencionada dos fallas físicas en la sesión (renombrar el archivo `config.json` para forzar un `FileNotFoundError` e introducir caracteres alfabéticos en los precios interactivos para forzar un `ValueError` en consola) [13]. El estudiante debe leer analíticamente el Traceback arrojado por terminal de abajo hacia arriba para documentar qué líneas y archivos lógicos originaron las capturas del error en el log físico de texto, y corregirlos de forma analítica en su código fuente [13].
6.  **Fase de Integración de IA del Entorno**: Utilizar una herramienta de asistencia disponible; una extensión para ejecutar cuadernos no implica disponer de un agente. Utilizar el chat o autocompletador de la herramienta únicamente para generar la documentación (docstrings) de los scripts o solicitar la sintaxis de redondeo numérico, aplicando el protocolo de auditoría crítica (verificación de tipos de datos de variables y flujos lógicos) antes de aceptar cualquier sugerencia en el archivo físico [6].
7.  **Fase de Validación**: Verificar que la ejecución se complete de forma limpia y exporte de manera física el reporte final `reporte_final_sami.pdf` en el espacio de trabajo local del proyecto.

---

## 8. TRAZABILIDAD DE INGENIERÍA DEL CONOCIMIENTO (BLOQUE 6)

| Concepto Técnico del Bloque 6 | Documento de la Fuente Oficial | Práctica Asociada del Itinerario | Microevaluación de Validación (SoloLearn) | Proyecto Integrador (SAMI-Local) |
| :--- | :--- | :--- | :--- | :--- |
| **Migración ipynb a script .py** | `Reporte de Investigación` [15, 16] y `Python_Notes` [5] | Migrar rutinas lógicas de Pandas desde celdas Colab a archivos estructurados `.py`. | Reto SoloLearn de predecir la salida de un script de consola que omite llamadas `print()`. | Redacción de todos los scripts de la carpeta `src/` en archivos físicos de texto `.py`. |
| **Ejecución de scripts por terminal**| `Installation \| Playwright Python` [7] y `Python_Notes` [5] | Invocar ejecuciones de scripts de forma directa con comandos de consola en terminal [7]. | Reto SoloLearn de ordenación de pasos secuenciales para creación y corrida de archivos `.py` [7]. | Ejecución interactiva del software mediante el comando físico `python main.py` [7]. |
| **Estructuración de proyectos** | `GitHub - DevSharma03/Python_Notes` [5] | Diseñar esquemas de carpetas separando data, logs y códigos fuente lógicos en local [5]. | Selección óptima de llamadas de importación selectivas de archivos `.py` de la carpeta `src/`. | Distribución del proyecto SAMI-Local bajo subcarpetas de data, logs y fuentes `src/` [5]. |
| **Entornos virtuales y venv** | `Installation \| Playwright Python` [7] | Creación y activación física de entornos virtuales de control local aislados [7]. | Identificación del error por omisión de la activación física del entorno `venv` [7]. | Aislamiento completo de dependencias creando y activando la carpeta local `venv` [7]. |
| **Gestión con pip y requirements** | `Reporte de Investigación` [15, 16] y `Playwright Python` [7] | Instalación masiva de dependencias científicas congelando versiones exactas de producción. | Selección de la sintaxis correcta del comando `pip install` para lectura de archivos de dependencias. | Configuración e instalación de dependencias masivas usando `requirements.txt` [16]. |
| **Versionado con Git y GitHub** | `GitHub - DevSharma03/Python_Notes` [5] | Clonación de repositorios de código de la base de conocimiento utilizando comandos de consola [5]. | Completar los comandos necesarios para sincronizar y descargar cambios remotos mediante terminal. | Clonación, inicialización de repositorio local Git y exclusión con `.gitignore` [5]. |
| **Interpretación de Tracebacks** | `Google Colaboratory 4` [13] | Forzar y leer analíticamente trazas de error de abajo hacia arriba en consola [13]. | Reto SoloLearn de localizar la línea exacta de error directo en una pila de llamadas simulada [13]. | Depuración y registro de excepciones `ValueError` e `FileNotFoundError` en archivos log físicos [13]. |
| **Asistencia en el entorno** | Apoyo metodológico de origen; herramientas en la sección específica del curso. | Leer una propuesta y comprobarla. | Identificar una afirmación no verificada. | No se exige una plataforma concreta. |

---

## 9. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 6)

De acuerdo con el análisis de los materiales de tu base de conocimiento, se identifican las siguientes áreas técnicas de infraestructura, versionado y asistentes locales que **no se encuentran documentadas a nivel técnico o práctico en las fuentes del notebook**, por lo que se declaran formalmente como lagunas en este bloque:

1.  **Manual de Instalación física local de Python**: Las fuentes mencionan de forma genérica a Python 3 [2], pero **no proveen un manual de instalación paso a paso de los instaladores ejecutables oficiales para sistemas Windows, macOS o Linux**, ni la configuración manual de las variables de entorno PATH del sistema operativo (un gran punto de fricción técnica inicial).
2.  **Manual de Descarga e Instalación física de Visual Studio Code**: Se menciona VS Code como editor de código para conectar runtimes [6], pero **no existe en las fuentes una guía de aprovisionamiento de la interfaz local, requisitos mínimos de instalación de la máquina ni la gestión inicial de extensiones** de forma nativa.
3.  **Depuración con el Debugger gráfico nativo de VS Code**: Se cita la existencia de herramientas de depuración e inspección de variables en VS Code [6, 7], pero **las fuentes del notebook carecen de manuales o explicaciones de su interfaz de depuración gráfica** (fijar breakpoints gráficos con el ratón en la canaleta izquierda del editor, paneles interactivos "Watch", panel de variables "Local/Global" o el árbol de la pila de llamadas "Call Stack"), limitándose las fuentes únicamente al análisis del Traceback textual de consola.
4.  **Flujos de comandos locales de Anaconda/Conda**: Conda se lista como comando alternativo para instalar Playwright [7], pero **las fuentes no documentan de forma técnica la suite de Anaconda, comandos de consola `conda create` de entornos, ni la administración de canales** de descarga.
5.  **Comandos Operativos de Git Local (init, add, commit, status)**: Se incluye la clonación inicial por consola de repositorios Git (`git clone`) [5], pero las fuentes del notebook **carecen por completo de la sintaxis y explicación técnica de comandos de control de versiones locales** (como `git init`, `git add`, `git commit` o `git status`).
6.  **Comandos de Conexión Remota y Autenticación con GitHub (remote, push, pull)**: El notebook no provee explicaciones de comandos de sincronización (`git remote`, `git push`, `git pull`) ni guías de autenticación mediante tokens personales de acceso (PAT) o llaves SSH para emparejar de manera física repositorios locales con GitHub de forma segura.
7.  **Instalación y Configuración de Asistentes comerciales de IA (Copilot, Codex, Claude Code)**: Las fuentes no contienen manuales de configuración, tokens de API de acceso, suscripciones ni comandos específicos de terminal para orquestar herramientas comerciales como GitHub Copilot, Codex, o Claude Code en la máquina física local.

---

## 10. FUENTES DE AMPLIACIÓN RECOMENDADAS (BLOQUE 6)

Para suplir con total rigor las lagunas de conocimiento detectadas y garantizar que el alumno termine con un entorno moderno de desarrollo preparado para las demandas profesionales de 2027, se conservan los siguientes recursos como opciones de ampliación para el docente; no son dependencias ni incorporaciones automáticas al curso:

1.  **VS Code Python Debugging Tutorial**: Para incorporar lecciones ilustradas con capturas de pantalla sobre cómo depurar código de forma visual, fijar breakpoints interactivos, e inspeccionar el árbol de variables en caliente en el panel izquierdo.
2.  **Git Book & GitHub Guides (Getting Started)**: Para documentar de forma clara los flujos de control de versiones locales, inicialización de repositorios `.git`, exclusión de carpetas de dependencias locales con `.gitignore` (para evitar subir la carpeta pesada de `venv` en repositorios públicos) y flujos de trabajo colaborativos remotos con comandos de consola (`git push` y `git pull`).
3.  **Python 3 Setup and Usage Guides**: Las guías oficiales de instalación de Python Software Foundation para Windows, macOS y Linux para instruir de forma clara sobre la selección de la opción de configuración "Add Python to PATH" durante el instalador gráfico.
4.  **Anaconda / Miniconda Command Reference**: Para estructurar el aprendizaje de gestión de entornos científicos complejos empleando comandos conda nativos.
5.  **GitHub Copilot & Claude Code Setup Manuals**: Para proporcionar guías paso a paso del proceso de instalación de extensiones de IA del entorno, vinculación con cuentas, y configuración de accesibilidad segura en el editor VS Code.
