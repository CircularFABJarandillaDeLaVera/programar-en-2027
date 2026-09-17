window.EDUSDK_BLOQUE = {
  producto: "Programar en 2027",
  curso: "Programar en 2027",
  bloque: "Bloque 6 - Del notebook al entorno de desarrollo profesional",
  descripcion: "Transicion de notebook a proyecto local reproducible: scripts, VS Code, terminal, venv, dependencias, Git, GitHub, depuracion y primer contacto con asistentes IA.",
  duracion: "4 h",
  fuente: "ingenieria-python-bloque6-refinada.md",
  fuentes: ["ingenieria-conocimiento-python-v4.md", "ingenieria-python-bloque6-refinada.md"],
  metodologia: "Concepto breve -> configurar -> probar -> ejecutar -> provocar/observar error -> diagnosticar -> corregir -> validar",
  objetivos: [
    "Migrar una celda de notebook a script .py con salida explicita.",
    "Abrir y ejecutar un proyecto en VS Code con terminal integrada.",
    "Organizar carpetas src, data y logs.",
    "Reconocer interprete Python correcto y entorno virtual activo.",
    "Usar pip y requirements.txt como flujo reproducible.",
    "Comprender el flujo local de Git sin ejecutar Git desde esta generacion.",
    "Entender remote, push y pull como conexion conceptual con GitHub.",
    "Leer tracebacks y ubicar la linea de fallo.",
    "Usar asistentes IA solo como apoyo controlado y revisado."
  ],
  slides: [
    { titulo: "Notebook no es script", objetivo: "Ver por que una celda no se comporta igual que un archivo .py.", guion: "Compara una ultima linea de notebook con un script que necesita print().", pregunta: "Que se ve si un script termina con resultado sin print?", ejemplo: "resultado = 10 * 2\nresultado\n# En script no muestra salida por si solo.", modificar: "Cambia la ultima linea por print(resultado).", predecir: "Que aparecera en consola antes y despues del print?", error_util: "Copiar %pip o !ls dentro de un .py provoca SyntaxError.", reto: "Migra una celda sencilla a limpiador.py.", comprobar: "El script usa print y no contiene sintaxis de notebook." },
    { titulo: "VS Code como taller", objetivo: "Distinguir editor, explorador y terminal integrada.", guion: "Ubica archivo, terminal y salida. No describas instalacion como canon si el equipo no esta preparado.", pregunta: "Donde se escriben comandos: editor o terminal?", ejemplo: "python main.py\n# Comando de terminal, no linea dentro del archivo Python.", modificar: "Crea una nota con la ruta del proyecto abierto.", predecir: "La terminal integrada parte de la carpeta del proyecto?", error_util: "Escribir comandos del sistema dentro del interprete >>>.", reto: "Abrir terminal integrada y localizar la carpeta raiz.", comprobar: "El alumno diferencia codigo, terminal y salida." },
    { titulo: "Interprete Python", objetivo: "Reconocer si VS Code apunta al Python correcto.", guion: "Tratalo como requisito tecnico si el equipo no tiene Python preparado.", pregunta: "Que sintoma aparece si VS Code usa otro interprete?", ejemplo: "import sys\nprint(sys.executable)", modificar: "Compara la ruta mostrada con la esperada por el profesor.", predecir: "Que pasa si instalas paquetes en un Python y ejecutas con otro?", error_util: "ModuleNotFoundError por interprete distinto.", reto: "Registrar la ruta de interprete usada.", comprobar: "El alumno justifica que interprete esta ejecutando." },
    { titulo: "Estructura de proyecto", objetivo: "Pasar de archivos sueltos a carpetas con responsabilidad.", guion: "Construye el mapa sami_local: main.py, src, data, logs.", pregunta: "Por que data no debe mezclarse con src?", ejemplo: "sami_local/\n  main.py\n  src/\n  data/\n  logs/", modificar: "Anade README.md y explica su funcion.", predecir: "Donde guardarias un CSV de entrada?", error_util: "Usar rutas absolutas locales que rompen portabilidad.", reto: "Dibuja el arbol de carpetas antes de escribir codigo.", comprobar: "La estructura separa codigo, datos y salidas." },
    { titulo: "venv y aislamiento", objetivo: "Entender el entorno virtual como caja de dependencias.", guion: "Marca activacion/instalacion como requisito tecnico sustentado solo a nivel basico.", pregunta: "Que indica el prefijo (venv)?", ejemplo: "python -m venv venv\n# REQUISITO TECNICO: activacion segun sistema operativo.", modificar: "Escribe una comprobacion: antes/despues de activar.", predecir: "Que riesgo hay si pip instala fuera del venv?", error_util: "Contaminar el Python global o no encontrar paquetes.", reto: "Completa una ficha: entorno activo si veo ____.", comprobar: "El alumno no instala a ciegas sin verificar entorno." },
    { titulo: "pip y requirements", objetivo: "Registrar dependencias para reproducir el proyecto.", guion: "Muestra requirements.txt como contrato de paquetes.", pregunta: "Por que no basta decir 'instala pandas'?", ejemplo: "numpy\npandas\npytest-playwright\nreportlab", modificar: "Anade una linea solo si el proyecto la necesita.", predecir: "Que lee pip install -r requirements.txt?", error_util: "Instalar paquetes uno a uno y olvidar documentarlos.", reto: "Explica cada dependencia en una frase.", comprobar: "El requirements existe y no contiene paquetes gratuitos." },
    { titulo: "Git local: flujo", objetivo: "Comprender cambios, status, add y commit sin entrar en Git avanzado.", guion: "No ejecutes comandos en esta generacion; muestra el flujo pedagogico.", pregunta: "Que diferencia hay entre archivo modificado y commit?", ejemplo: "cambios -> git status -> git add -> git commit", modificar: "Ordena tarjetas de pasos.", predecir: "Que paso prepara archivos antes del commit?", error_util: "Hacer commit sin revisar status.", reto: "Escribe el mensaje de commit que describiria una mejora real.", comprobar: "El alumno entiende versionado local como historial." },
    { titulo: "GitHub: remoto", objetivo: "Entender remote, push y pull como sincronizacion conceptual.", guion: "Autenticacion y remotos detallados son laguna; mantener nivel de mapa.", pregunta: "Que problema resuelve un remoto?", ejemplo: "repositorio local -> remote -> push/pull", modificar: "Marca que informacion seria sensible y no debe compartirse.", predecir: "Push sube cambios o los descarga?", error_util: "Confundir Git local con GitHub remoto.", reto: "Dibuja flujo local/remoto.", comprobar: "El alumno separa Git de GitHub." },
    { titulo: "Traceback: leer de abajo arriba", objetivo: "Diagnosticar el archivo y linea que origina el fallo.", guion: "Provoca errores controlados y lee la ultima linea significativa.", pregunta: "Que linea del traceback suele nombrar el error concreto?", ejemplo: "Traceback ...\n  File \"main.py\", line 8, in <module>\nValueError: could not convert string to float", modificar: "Cambia un precio por texto y observa el error.", predecir: "Que tipo de error esperas?", error_util: "Leer solo la primera linea del traceback.", reto: "Subraya archivo, linea y tipo de error.", comprobar: "El alumno documenta causa y correccion." },
    { titulo: "Debugger y breakpoint", objetivo: "Usar la idea de pausa para observar variables.", guion: "El debugger grafico detallado es laguna; trabajar concepto: parar antes de una linea critica.", pregunta: "Donde pondrias una pausa si precio final sale mal?", ejemplo: "precio = float(entrada)\nprecio_final = precio * 1.21\nprint(precio_final)", modificar: "Elige la linea donde inspeccionarias precio.", predecir: "Que variable mirarias primero?", error_util: "Depurar imprimiendo todo sin hipotesis.", reto: "Escribe una hipotesis antes de pausar.", comprobar: "El alumno sabe que variable necesita inspeccionar." },
    { titulo: "Asistentes IA: primer contacto", objetivo: "Usar Copilot, Google para VS Code, Codex o Claude Code como apoyo pequeno.", guion: "Limita a explicar codigo, proponer cambio pequeno, funcion sencilla, localizar error o revisar propuesta.", pregunta: "Aceptarias una sugerencia sin leerla ni probarla?", ejemplo: "Peticion segura: explica esta funcion y sugiere una mejora pequena.", modificar: "Convierte una sugerencia en checklist de validacion.", predecir: "Que riesgo tiene aceptar codigo no comprendido?", error_util: "Delegar la logica completa al asistente.", reto: "Redacta protocolo: leer, probar, comparar salida.", comprobar: "El alumno valida cualquier ayuda antes de integrarla." },
    { titulo: "SAMI-Local", objetivo: "Profesionalizar SAMI-Applied sin anadir grandes funcionalidades.", guion: "Organiza estructura, requirements, .gitignore, ejecucion, trazas y protocolo IA.", pregunta: "Que cambia en SAMI-Local: funciones o entorno?", ejemplo: "sami_local/\n  .gitignore\n  requirements.txt\n  main.py\n  src/\n  data/\n  logs/", modificar: "Anade una carpeta docs si el profesor la permite.", predecir: "Que carpeta no deberia subirse al repositorio?", error_util: "Subir venv o logs por no usar .gitignore.", reto: "Entregar estructura local reproducible.", comprobar: "SAMI-Local demuestra entorno preparado, no nuevas funciones grandes." }
  ],
  flashcards: [
    ["Notebook vs script", "El notebook muestra celdas; el script .py ejecuta de arriba abajo y necesita print para salida."],
    ["Terminal integrada", "Consola dentro de VS Code situada en el proyecto abierto."],
    ["Interprete", "Python concreto que ejecuta el codigo."],
    ["venv", "Entorno virtual que aisla dependencias del proyecto."],
    ["requirements.txt", "Archivo que lista dependencias reproducibles."],
    ["pip", "Herramienta para instalar paquetes Python."],
    ["git status", "Muestra cambios y estado del repositorio local."],
    ["git add", "Prepara archivos para el commit."],
    ["git commit", "Guarda una version local con mensaje."],
    ["remote", "Conexion conceptual entre repositorio local y GitHub."],
    ["traceback", "Pila textual para localizar archivo, linea y tipo de error."],
    ["Asistente IA en B6", "Apoyo pequeno que siempre se lee, prueba y valida."]
  ],
  casos: [
    { titulo: "Script sin salida", situacion: "Un alumno migra una celda y deja resultado como ultima linea.", preguntas: ["Por que no aparece nada?", "Que print falta?", "Que diferencia hay con notebook?"] },
    { titulo: "Interprete incorrecto", situacion: "Pandas esta instalado, pero VS Code lanza ModuleNotFoundError.", preguntas: ["Que interprete esta activo?", "Donde se instalo el paquete?", "Que comprobacion haria sys.executable?"] },
    { titulo: "venv no activo", situacion: "pip instala paquetes sin prefijo (venv).", preguntas: ["Que riesgo hay?", "Que evidencia indica entorno activo?", "Que archivo registra dependencias?"] },
    { titulo: "Git o GitHub", situacion: "El alumno cree que commit ya sube codigo a la nube.", preguntas: ["Que hace commit?", "Que hace push?", "Que representa remote?"] },
    { titulo: "Traceback largo", situacion: "La terminal muestra muchas lineas tras un ValueError.", preguntas: ["Que linea lees primero?", "Que archivo aparece?", "Que dato provoco el fallo?"] },
    { titulo: "Sugerencia IA", situacion: "Un asistente propone codigo que el alumno no comprende.", preguntas: ["Se acepta directamente?", "Que pruebas minimas haria?", "Que parte puede pedir que explique?"] }
  ],
  test: [
    { tipo: "script", pregunta: "En un script .py, que linea muestra la longitud?\n\npersonajes = [\"Jon\", \"Arya\", \"Sansa\"]\n_______", opciones: ["print(len(personajes))", "len(personajes)", "print len(personajes)"], correcta: 0, explicacion: "Un script necesita print(...) para mostrar salida en consola." },
    { tipo: "notebook", pregunta: "Que error suele aparecer al copiar %pip install dentro de un .py?", opciones: ["SyntaxError", "KeyError", "No pasa nada"], correcta: 0, explicacion: "%pip es sintaxis de notebook, no de script Python." },
    { tipo: "terminal", pregunta: "Donde escribes python main.py?", opciones: ["Terminal integrada", "Dentro de main.py", "En requirements.txt"], correcta: 0, explicacion: "python main.py es un comando de terminal." },
    { tipo: "interprete", pregunta: "Que ayuda a comprobar que Python ejecuta VS Code?", opciones: ["print(sys.executable)", "print(sys.version_info[99])", "git status"], correcta: 0, explicacion: "sys.executable muestra la ruta del interprete activo." },
    { tipo: "venv", pregunta: "Si no ves (venv) antes de instalar dependencias, que sospechas?", opciones: ["El entorno puede no estar activo", "El commit ya esta hecho", "GitHub esta conectado"], correcta: 0, explicacion: "El prefijo suele indicar que el entorno virtual esta activo." },
    { tipo: "requirements", pregunta: "Que comando lee dependencias desde un archivo?", opciones: ["pip install -r requirements.txt", "python requirements.txt", "git add requirements.txt"], correcta: 0, explicacion: "pip install -r instala lo listado en requirements.txt." },
    { tipo: "git-status", pregunta: "Que paso revisa cambios antes de preparar archivos?", opciones: ["git status", "git push", "git remote"], correcta: 0, explicacion: "git status muestra el estado local del repositorio." },
    { tipo: "git-add", pregunta: "Que paso prepara archivos para un commit?", opciones: ["git add", "git pull", "remote"], correcta: 0, explicacion: "git add pasa cambios al area preparada." },
    { tipo: "github", pregunta: "Que accion sube cambios al remoto?", opciones: ["push", "pull", "status"], correcta: 0, explicacion: "push envia commits locales al remoto configurado." },
    { tipo: "traceback", pregunta: "En un traceback, que buscas para diagnosticar?", opciones: ["Archivo, linea y tipo de error", "Solo el color rojo", "El nombre del editor"], correcta: 0, explicacion: "La lectura util localiza archivo, linea y excepcion." },
    { tipo: "breakpoint", pregunta: "Donde colocarias una pausa si falla precio_final?", opciones: ["Antes o en la linea que calcula precio_final", "Al final del README", "En .gitignore"], correcta: 0, explicacion: "Un breakpoint debe acercarse a la variable que quieres inspeccionar." },
    { tipo: "ia", pregunta: "Un asistente IA propone codigo. Que haces antes de aceptarlo?", opciones: ["Leerlo, probarlo y validar la salida", "Pegarlo todo sin mirar", "Borrar el proyecto"], correcta: 0, explicacion: "En B6 la IA es apoyo controlado, no sustituto de validacion." }
  ],
  proyecto: {
    titulo: "SAMI-Local",
    evolucion: "SAMI-Lite -> SAMI-OOP -> SAMI-Applied -> SAMI-Local",
    estructura: ["sami_local/.gitignore", "sami_local/requirements.txt", "sami_local/main.py", "sami_local/src", "sami_local/data", "sami_local/logs"],
    evidencia: "Proyecto local estructurado, dependencias declaradas, .gitignore, lectura de traceback y protocolo de uso de asistente IA.",
    alcance: "Profesionalizar el entorno sin anadir funcionalidades importantes."
  },
  mapa_mental_fuente: "recursos/mapa-mental.md"
};
