window.EDUSDK_BLOQUE = {
  producto: "Programar en 2027",
  curso: "Programar en 2027",
  bloque: "Bloque 7 - Python + IA",
  descripcion: "Programacion asistida por IA de forma critica, controlada y verificable: planificar, pedir, inspeccionar, ejecutar, depurar, modificar y validar.",
  duracion: "4 h",
  fuente: "ingenieria-python-bloque7.md",
  fuentes: ["ingenieria-conocimiento-python-v4.md", "ingenieria-python-bloque7.md"],
  metodologia: "Problema -> plan -> contexto -> IA -> codigo -> ejecutar -> entender -> depurar -> modificar -> validar",
  objetivos: [
    "Planificar antes de pedir codigo a un asistente.",
    "Dar contexto util y acotado para una tarea de programacion.",
    "Pedir cambios localizados en vez de delegar el proyecto completo.",
    "Inspeccionar codigo generado y detectar propuestas incorrectas.",
    "Ejecutar, romper, depurar y corregir con ayuda critica.",
    "Aceptar, modificar o rechazar sugerencias de IA con criterio.",
    "Preparar SAMI Final partiendo de SAMI-Local.",
    "Defender el proyecto explicando decisiones, flujo y validaciones.",
    "Reconocer LangGraph como ampliacion opcional no evaluable."
  ],
  slides: [
    { titulo: "El alumno sigue al mando", objetivo: "Entender que la IA ayuda, pero no asume la responsabilidad del codigo.", guion: "Abre con la metodologia antizombi: pensar antes, pedir con contexto, comprobar despues.", pregunta: "Que parte no puede delegar el alumno?", ejemplo: "responsabilidad = [\"plan\", \"revision\", \"prueba\", \"validacion\"]\nfor paso in responsabilidad:\n    print(paso)", modificar: "Anade una accion que nunca aceptarias sin revisar.", predecir: "Que falla si copias codigo sin entenderlo?", error_util: "Delegar la logica completa y no poder defender el resultado.", reto: "Escribe una regla personal para usar IA programando.", comprobar: "El alumno asume autoria y validacion." },
    { titulo: "Problema y plan", objetivo: "Convertir una necesidad en pasos antes de abrir el asistente.", guion: "Usa SAMI Final: primero describir entrada, salida y criterio de validacion.", pregunta: "Que debe existir antes del prompt?", ejemplo: "problema = \"validar precios\"\nplan = [\"leer csv\", \"filtrar\", \"calcular\", \"mostrar resumen\"]\nprint(plan)", modificar: "Anade una prueba esperada a cada paso.", predecir: "La IA dara mejor codigo con o sin plan?", error_util: "Pedir 'hazme el proyecto' sin descomponer.", reto: "Planifica una mejora pequena de SAMI.", comprobar: "Hay plan y no solo peticion." },
    { titulo: "Contexto util", objetivo: "Dar al asistente la informacion justa para una modificacion localizada.", guion: "Pedir archivo, funcion, entrada, salida, restricciones y criterio de exito.", pregunta: "Que contexto falta si solo dices 'arregla esto'?", ejemplo: "contexto = {\n    \"archivo\": \"src/analizador.py\",\n    \"funcion\": \"filtrar_stock_bajo\",\n    \"entrada\": \"DataFrame\",\n    \"salida\": \"filas con stock bajo\"\n}\nprint(contexto)", modificar: "Anade restricciones: no nuevas dependencias.", predecir: "Que riesgo hay si no das el archivo afectado?", error_util: "La IA inventa estructura que no existe.", reto: "Escribe contexto para corregir una funcion concreta.", comprobar: "El contexto limita alcance y dependencias." },
    { titulo: "Peticion acotada", objetivo: "Pedir codigo pequeno y revisable.", guion: "Compara mala peticion con buena peticion.", pregunta: "Cual es mas revisable: todo el proyecto o una funcion?", ejemplo: "mala = \"haz SAMI entero\"\nbuena = \"modifica solo calcular_precio_final para redondear a 2 decimales\"\nprint(buena)", modificar: "Reescribe una peticion vaga en una peticion verificable.", predecir: "Que salida esperas de una buena peticion?", error_util: "Aceptar una refactorizacion gigante sin necesidad.", reto: "Formula tres prompts pequenos para SAMI Final.", comprobar: "La peticion tiene limite y prueba." },
    { titulo: "Inspeccionar codigo", objetivo: "Leer antes de ejecutar y detectar tecnologia inventada.", guion: "Buscar dependencias nuevas, APIs no conocidas, rutas absolutas y cambios de alcance.", pregunta: "Que haces si aparece una libreria no autorizada?", ejemplo: "dependencias_autorizadas = {\"numpy\", \"pandas\", \"pytest-playwright\", \"reportlab\"}\npropuesta = {\"numpy\", \"fastapi\"}\nprint(propuesta - dependencias_autorizadas)", modificar: "Cambia fastapi por pandas y compara.", predecir: "Que conjunto indica riesgo?", error_util: "Aceptar dependencias nuevas sin permiso.", reto: "Audita una propuesta y marca aceptar/modificar/rechazar.", comprobar: "El alumno detecta invenciones y cambios de alcance." },
    { titulo: "Ejecutar y validar", objetivo: "Probar codigo con datos conocidos antes de confiar.", guion: "Usa entradas pequenas y resultado esperado.", pregunta: "Que prueba minima valida una funcion modificada?", ejemplo: "precios = [10, 20]\nesperado = [12.1, 24.2]\nprint(esperado)", modificar: "Anade un caso limite.", predecir: "Que debe pasar si el stock es cero?", error_util: "Dar por bueno codigo no ejecutado.", reto: "Crea dos pruebas manuales para SAMI Final.", comprobar: "Hay resultado esperado antes de ejecutar." },
    { titulo: "Depurar con IA", objetivo: "Usar el asistente para explicar un error, no para ocultarlo.", guion: "Pasar traceback, fragmento pequeno y que se intento.", pregunta: "Que partes del traceback son necesarias?", ejemplo: "error = \"ValueError: could not convert string to float: 'abc'\"\nprint(error)", modificar: "Anade la linea de codigo que provoco el error.", predecir: "Que tipo de dato causa el problema?", error_util: "Pegar un traceback sin codigo ni contexto.", reto: "Pide una explicacion del error y verifica la correccion.", comprobar: "La correccion se entiende y se prueba." },
    { titulo: "Modificar o rechazar", objetivo: "Tomar decisiones sobre una propuesta de IA.", guion: "Tres salidas: aceptar si cumple, modificar si casi cumple, rechazar si rompe alcance.", pregunta: "Cuando rechazas una propuesta?", ejemplo: "decision = \"rechazar\" if \"nueva dependencia\" else \"revisar\"\nprint(decision)", modificar: "Define criterios de aceptar, modificar y rechazar.", predecir: "Que haria si la IA cambia varios archivos sin pedirlo?", error_util: "Confundir sugerencia con verdad.", reto: "Clasifica cinco propuestas.", comprobar: "El alumno decide con criterios." },
    { titulo: "Refactorizacion controlada", objetivo: "Mejorar estructura sin cambiar comportamiento esperado.", guion: "Solo refactorizar partes respaldadas y con prueba antes/despues.", pregunta: "Que debe permanecer igual tras refactorizar?", ejemplo: "antes = {\"ofertas\": 3, \"precio_medio\": 110.0}\ndespues = {\"ofertas\": 3, \"precio_medio\": 110.0}\nprint(antes == despues)", modificar: "Anade una metrica que debe conservarse.", predecir: "Que indica True?", error_util: "Refactorizar y cambiar la salida sin darse cuenta.", reto: "Divide una funcion grande sin cambiar resultado.", comprobar: "La salida se conserva." },
    { titulo: "SAMI Final", objetivo: "Cerrar el proyecto integrando metodo IA responsable.", guion: "Partir de SAMI-Local. La IA ayuda a planificar, explicar, modificar, depurar, documentar y validar.", pregunta: "Que delegaste y que comprobaste personalmente?", ejemplo: "registro_ia = [\n    \"pidio explicacion\",\n    \"modifico una funcion\",\n    \"ejecuto prueba manual\",\n    \"valido salida\"\n]\nprint(registro_ia)", modificar: "Anade una entrada al registro de decisiones.", predecir: "Que evidencia defiende el proyecto?", error_util: "No registrar que se acepto de la IA.", reto: "Crear README de defensa de SAMI Final.", comprobar: "El proyecto incluye defensa, validacion y decisiones." },
    { titulo: "Defensa del proyecto", objetivo: "Explicar partes relevantes sin recitar cada linea.", guion: "Preparar entradas, salidas, flujo, fallos, ayuda IA y comprobaciones personales.", pregunta: "Que debes poder justificar ante el profesor?", ejemplo: "defensa = [\"entrada\", \"salida\", \"flujo\", \"fallo\", \"decision IA\", \"validacion\"]\nprint(defensa)", modificar: "Escribe una respuesta para cada punto.", predecir: "Que pregunta demuestra autoria?", error_util: "No saber explicar una parte aceptada.", reto: "Ensaya defensa en cinco minutos.", comprobar: "El alumno puede explicar y localizar fallos." },
    { titulo: "LangGraph opcional", objetivo: "Presentar StateGraph, nodos, aristas, estado, reducers, memoria y human-in-the-loop como ampliacion no evaluable.", guion: "Identificar visualmente como AMPLIACION OPCIONAL - NO EVALUABLE. No entra en SAMI Final.", pregunta: "LangGraph es requisito para aprobar?", ejemplo: "ampliacion = \"opcional\"\nprint(ampliacion)", modificar: "Enumera conceptos sin implementarlos.", predecir: "Debe dominar el bloque?", error_util: "Convertir la ampliacion en requisito.", reto: "Dibuja un grafo conceptual simple sin codigo obligatorio.", comprobar: "Queda separado del proyecto evaluable." }
  ],
  flashcards: [
    ["Metodologia antizombi", "Pensar, pedir, revisar, ejecutar, depurar y validar antes de aceptar."],
    ["Plan antes de IA", "Define problema, pasos, entradas, salidas y prueba esperada."],
    ["Contexto util", "Archivo, funcion, datos, restricciones y criterio de exito."],
    ["Peticion acotada", "Cambio pequeno, localizado y verificable."],
    ["Alucinacion", "Propuesta plausible pero falsa, inventada o fuera de alcance."],
    ["Aceptar", "Cuando entiendes, ejecutas y valida el resultado."],
    ["Modificar", "Cuando la idea ayuda pero necesita ajuste."],
    ["Rechazar", "Cuando rompe alcance, inventa APIs o no puedes defenderla."],
    ["Depurar con IA", "Pasar traceback, codigo minimo y que se intento."],
    ["Refactorizar", "Mejorar estructura sin cambiar comportamiento esperado."],
    ["Defensa SAMI", "Explicar flujo, decisiones, errores, IA usada y validaciones."],
    ["LangGraph B7", "Ampliacion opcional no evaluable, fuera de SAMI Final."]
  ],
  casos: [
    { titulo: "Prompt sin contexto", situacion: "Un alumno escribe 'arregla mi proyecto' sin archivo ni error.", preguntas: ["Que contexto falta?", "Como lo acotarias?", "Que riesgo hay?"] },
    { titulo: "Dependencia inventada", situacion: "La IA propone usar un framework nuevo para una funcion pequena.", preguntas: ["Aceptar, modificar o rechazar?", "Que regla rompe?", "Como pedirias una alternativa?"] },
    { titulo: "Codigo que no entiende", situacion: "El codigo funciona una vez, pero el alumno no puede explicarlo.", preguntas: ["Esta listo para entrega?", "Que debe pedir a la IA?", "Que debe comprobar personalmente?"] },
    { titulo: "Traceback con ayuda", situacion: "Hay ValueError al convertir precio y el alumno quiere pegar todo al asistente.", preguntas: ["Que fragmento minimo aporta?", "Que salida espera?", "Como valida la correccion?"] },
    { titulo: "Refactor grande", situacion: "La IA cambia cinco archivos aunque se pidio una funcion.", preguntas: ["Que decision tomas?", "Que parte revisarias?", "Como limitas el alcance?"] },
    { titulo: "LangGraph brillante", situacion: "Un equipo quiere meter grafos en SAMI Final.", preguntas: ["Es evaluable?", "Debe entrar en SAMI?", "Como lo dejarian como ampliacion?"] }
  ],
  test: [
    { tipo: "contexto", pregunta: "Una buena peticion a la IA para programar debe incluir...", opciones: ["archivo, objetivo, restricciones y criterio de validacion", "solo 'hazlo mejor'", "un framework nuevo obligatorio"], correcta: 0, explicacion: "El contexto acotado reduce invenciones y facilita validar." },
    { tipo: "plan", pregunta: "Que va antes de pedir codigo?", opciones: ["Plan y prueba esperada", "Aceptar la primera respuesta", "Subir todo a produccion"], correcta: 0, explicacion: "Primero se define problema, pasos y resultado esperado." },
    { tipo: "alcance", pregunta: "La IA propone anadir una dependencia no autorizada. Decision mas segura:", opciones: ["Rechazar o pedir alternativa sin nueva dependencia", "Aceptar sin mirar", "Cambiar todo el curso"], correcta: 0, explicacion: "B7 prohibe dependencias nuevas no autorizadas." },
    { tipo: "validacion", pregunta: "Codigo generado que no se ejecuto todavia es...", opciones: ["Una propuesta pendiente de validar", "Codigo probado", "Una evidencia final"], correcta: 0, explicacion: "La ejecucion y comprobacion siguen siendo responsabilidad del alumno." },
    { tipo: "depurar", pregunta: "Para pedir ayuda con un traceback conviene aportar...", opciones: ["error, fragmento minimo y que se intento", "solo una captura sin contexto", "todo el ordenador"], correcta: 0, explicacion: "La IA necesita contexto pequeno y trazable." },
    { tipo: "entender", pregunta: "Si no puedes explicar el codigo aceptado, debes...", opciones: ["Pedir explicacion, probar y simplificar", "Entregarlo igual", "Ocultar que usaste IA"], correcta: 0, explicacion: "La defensa exige comprender las partes relevantes." },
    { tipo: "refactor", pregunta: "Una refactorizacion controlada debe conservar...", opciones: ["el comportamiento esperado", "el numero exacto de lineas", "todos los errores"], correcta: 0, explicacion: "Refactorizar mejora estructura sin cambiar resultado validado." },
    { tipo: "decision", pregunta: "Aceptar/modificar/rechazar sirve para...", opciones: ["tomar criterio sobre una propuesta", "obedecer siempre a la IA", "evitar ejecutar pruebas"], correcta: 0, explicacion: "El alumno decide y valida." },
    { tipo: "alucinacion", pregunta: "Una API inventada por la IA es...", opciones: ["una alucinacion o propuesta no valida", "una fuente oficial", "obligatoria si suena bien"], correcta: 0, explicacion: "Las APIs deben existir y estar dentro del alcance autorizado." },
    { tipo: "sami", pregunta: "SAMI Final parte de...", opciones: ["SAMI-Local", "un framework nuevo", "LangGraph obligatorio"], correcta: 0, explicacion: "SAMI Final evoluciona desde SAMI-Local." },
    { tipo: "defensa", pregunta: "En la defensa debes demostrar responsabilidad tecnica porque...", opciones: ["entiendes, validas y puedes justificar el codigo integrado", "la IA asume los fallos del proyecto", "basta con recitar cada linea de memoria"], correcta: 0, explicacion: "La defensa pide comprender flujo, decisiones y validaciones, no memorizar linea por linea." },
    { tipo: "langgraph", pregunta: "LangGraph en B7 es...", opciones: ["ampliacion opcional no evaluable", "requisito para aprobar", "parte obligatoria de SAMI Final"], correcta: 0, explicacion: "Debe quedar separado del proyecto evaluable." }
  ],
  proyecto: {
    titulo: "SAMI Final",
    evolucion: "SAMI-Lite -> SAMI-OOP -> SAMI-Applied -> SAMI-Local -> SAMI Final",
    estructura: ["main.py", "src/scraper.py", "src/analizador.py", "src/generador_pdf.py", "data/got_1.csv", "requirements.txt", ".gitignore", "sami_final/README-defensa.md", "sami_final/registro-ia.md", "sami_final/plan-validacion.md"],
    evidencia: "Ejecucion por terminal, informe generado, defensa del proyecto, registro de propuestas incorrectas o fallos de IA realmente observados, validaciones manuales y decisiones aceptar/modificar/rechazar. Si no aparecen tres fallos, se documentan las intervenciones, sus comprobaciones y el motivo de cada decision.",
    alcance: "Cerrar SAMI-Local como SAMI Final con Playwright, Pandas, NumPy y ReportLab, sin introducir tecnologias nuevas ni dependencias no autorizadas."
  },
  mapa_mental_fuente: "recursos/mapa-mental.md"
};
