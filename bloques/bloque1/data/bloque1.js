window.EDUSDK_BLOQUE = {
  producto: "Programar en 2027",
  curso: "Programar en 2027",
  bloque: "Bloque 1 - Fundamentos y logica",
  descripcion: "Primeros programas en notebook: salida, variables, tipos, operadores, decisiones y bucles.",
  duracion: "4 h",
  fuente: "ingenieria-conocimiento-python-v4.md",
  objetivos: [
    "Ejecutar codigo Python en notebook o Google Colab.",
    "Usar print, variables, tipos basicos, casting y f-strings.",
    "Tomar decisiones con comparaciones, booleanos y operadores logicos.",
    "Repetir acciones con for, range y while usando break y continue cuando tenga sentido.",
    "Probar codigo, predecir resultados, detectar errores y validar cambios."
  ],
  slides: [
    {
      titulo: "Abrir un notebook y ejecutar",
      objetivo: "Quitar friccion: escribir una celda, ejecutarla y leer la salida.",
      guion: "Abre Colab o un notebook. Escribe print(\"Hola, Python\") y ejecuta. Cambia el texto y vuelve a ejecutar.",
      pregunta: "Que cambia si modificas solo el texto entre comillas?",
      ejemplo: "print(\"Hola, Python\")",
      modificar: "Cambia el mensaje por tu nombre y una accion que quieras automatizar.",
      predecir: "Antes de ejecutar, di exactamente que aparecera en pantalla.",
      reto: "Escribe dos print seguidos: uno con una palabra y otro con un numero.",
      comprobar: "Debe aparecer una linea por cada print, en el mismo orden.",
      nota: "No introducir instalacion local. El foco inicial es notebook -> ejecutar -> entender."
    },
    {
      titulo: "Variables y tipos basicos",
      objetivo: "Guardar valores en nombres y distinguir texto, numeros y booleanos.",
      guion: "Una variable es una etiqueta para reutilizar un valor. Ejecuta nombre, edad y le_gusta_python.",
      pregunta: "Que valor se reutiliza cuando escribimos el nombre de una variable?",
      ejemplo: "nombre = \"Ana\"\nedad = 12\nle_gusta_python = True\nprint(nombre, edad, le_gusta_python)",
      modificar: "Cambia los valores para que describan a otra persona.",
      predecir: "Que imprimira si cambias edad a 13?",
      reto: "Crea una variable curso con el texto Programar en 2027 e imprimela junto a tu nombre.",
      comprobar: "La salida debe usar los nuevos valores, no los anteriores.",
      nota: "Nombrar tipos dinamicos sin convertirlo en teoria."
    },
    {
      titulo: "Numeros, operadores y divmod",
      objetivo: "Calcular con operadores aritmeticos y usar divmod cuando conviene.",
      guion: "Trabaja con minutos y grupos. Primero calcula // y %, luego usa divmod para cociente y resto simultaneos.",
      pregunta: "Por que divmod puede ser mas claro que calcular // y % por separado?",
      ejemplo: "minutos = 137\nhoras, resto = divmod(minutos, 60)\nprint(horas, resto)",
      modificar: "Cambia minutos por 95, 180 y 241.",
      predecir: "Para 137 minutos, cuantas horas completas y cuantos minutos sobran?",
      reto: "Calcula cuantas cajas completas de 6 objetos salen de 29 objetos y cuantos sobran.",
      comprobar: "Con 29 y 6, el resultado esperado es 4 cajas y 5 sobrantes.",
      nota: "divmod esta respaldado por la V4 y aparece cuando resulta pedagogicamente natural."
    },
    {
      titulo: "Strings y f-strings",
      objetivo: "Combinar texto con valores de variables de forma legible.",
      guion: "Compara concatenacion simple con f-string. Formatea dos decimales y relleno con cero.",
      pregunta: "Que parte de una f-string se calcula y que parte queda como texto?",
      ejemplo: "precio = 7.5\nhora = 9\nprint(f\"Entrada: {precio:.2f} euros\")\nprint(f\"Hora: {hora:02}:00\")",
      modificar: "Cambia precio y hora. Prueba una hora de una cifra y una de dos cifras.",
      predecir: "Que imprime {precio:.2f} si precio vale 7.5?",
      reto: "Crea una frase con tu nombre, tu edad y una actividad.",
      comprobar: "La frase debe mezclar texto fijo y variables sin signos +.",
      nota: "Mantenerlo ejecutable y corto."
    },
    {
      titulo: "Booleanos y comparaciones",
      objetivo: "Obtener True o False con comparaciones y usarlas para razonar.",
      guion: "Ejecuta comparaciones con edad, precio y nombre. Insiste en predecir antes de ejecutar.",
      pregunta: "Que diferencia hay entre = y ==?",
      ejemplo: "edad = 14\nprint(edad >= 12)\nprint(edad == 18)\nprint(edad != 10)",
      modificar: "Cambia edad hasta conseguir True, False, True.",
      predecir: "Que valor tendra edad >= 12 si edad vale 9?",
      reto: "Crea una variable puntos y comprueba si es mayor o igual que 50.",
      comprobar: "Cada comparacion devuelve un booleano: True o False.",
      nota: "Aprovechar errores con = dentro de una condicion como error util."
    },
    {
      titulo: "Operadores logicos",
      objetivo: "Combinar condiciones con and, or y not.",
      guion: "Usa una decision concreta: puede entrar si cumple edad y tiene entrada.",
      pregunta: "Cuando es verdadera una condicion con and?",
      ejemplo: "edad = 13\ntiene_entrada = True\npuede_entrar = edad >= 12 and tiene_entrada\nprint(puede_entrar)",
      modificar: "Cambia edad y tiene_entrada para probar las cuatro combinaciones.",
      predecir: "Que pasa si edad vale 10 aunque tiene_entrada sea True?",
      reto: "Escribe una condicion para descuento si una persona es menor de 12 o mayor de 65.",
      comprobar: "and exige que todo sea verdadero; or permite que baste una parte.",
      nota: "Conectar con tramos de edad y precios indicados por la V4."
    },
    {
      titulo: "Entrada de datos y casting",
      objetivo: "Leer texto con input y convertirlo cuando necesitamos numeros.",
      guion: "Muestra que input devuelve texto. Provoca el error de sumar texto y numero, luego arregla con int.",
      pregunta: "Por que int(input(...)) aparece tan a menudo en programas pequenos?",
      ejemplo: "edad = int(input(\"Edad: \"))\nprint(f\"El ano que viene tendras {edad + 1}\")",
      modificar: "Pide dos numeros y suma ambos.",
      predecir: "Que ocurre si no conviertes a int antes de sumar?",
      reto: "Pide precio y cantidad; calcula el total.",
      comprobar: "El programa debe operar con numeros, no concatenar textos.",
      nota: "No abrir instalacion local; hacerlo en Colab/notebook."
    },
    {
      titulo: "Condicionales",
      objetivo: "Elegir una rama de ejecucion con if, elif y else.",
      guion: "Construye precios por edad. Primero dos ramas, luego tramos.",
      pregunta: "Que rama se ejecuta cuando varias condiciones parecen posibles?",
      ejemplo: "edad = int(input(\"Edad: \"))\nif edad < 12:\n    precio = 5\nelif edad >= 65:\n    precio = 4\nelse:\n    precio = 8\nprint(f\"Precio: {precio} euros\")",
      modificar: "Anade un tramo adolescente de 12 a 17 anos con precio 6.",
      predecir: "Que precio sale para 10, 16, 30 y 70?",
      reto: "Crea un programa que clasifique una nota en insuficiente, aprobado o notable.",
      comprobar: "Cada entrada debe activar solo una rama.",
      nota: "Evitar tablas teoricas largas; probar valores frontera."
    },
    {
      titulo: "for, range y conteos",
      objetivo: "Repetir una accion un numero controlado de veces.",
      guion: "Cuenta de 1 a 5, luego acumula suma. Usa range con inicio, fin y paso.",
      pregunta: "Por que range(1, 6) llega hasta 5 y no hasta 6?",
      ejemplo: "total = 0\nfor numero in range(1, 6):\n    total = total + numero\nprint(total)",
      modificar: "Suma del 1 al 10. Luego solo pares hasta 20.",
      predecir: "Que valores toma numero en range(2, 11, 2)?",
      reto: "Cuenta cuantos numeros del 1 al 30 son multiplos de 3.",
      comprobar: "El contador debe aumentar dentro del for, no despues.",
      nota: "Priorizar conteos y pequenas transformaciones."
    },
    {
      titulo: "while, break y continue",
      objetivo: "Repetir mientras una condicion sea verdadera y controlar interrupciones.",
      guion: "Construye un bucle de intentos. break termina; continue salta al siguiente intento.",
      pregunta: "Que riesgo aparece si la condicion de un while nunca cambia?",
      ejemplo: "intentos = 0\nwhile intentos < 3:\n    intentos += 1\n    texto = input(\"Escribe python: \")\n    if texto != \"python\":\n        continue\n    print(\"Correcto\")\n    break",
      modificar: "Cambia el numero maximo de intentos y el texto secreto.",
      predecir: "Que ocurre cuando el texto no coincide?",
      reto: "Crea un bucle que pida numeros hasta introducir 0.",
      comprobar: "El bucle debe terminar por condicion o por break, nunca quedarse infinito.",
      nota: "Relacionar con depurar y validar, no con memorizar sintaxis."
    },
    {
      titulo: "IA como ayudante",
      objetivo: "Usar IA para proponer codigo, pero entenderlo, ejecutarlo, depurarlo y validarlo.",
      guion: "Da un pequeno problema. El alumno escribe plan antes de pedir ayuda. Luego predice, ejecuta y corrige.",
      pregunta: "Como compruebas si el codigo sugerido por una IA hace lo que promete?",
      ejemplo: "# Problema: calcular media de tres notas\n# Plan: pedir tres numeros, sumarlos, dividir entre 3, mostrar resultado",
      modificar: "Pide a la IA una solucion y cambia una condicion o un mensaje.",
      predecir: "Antes de ejecutar, senala que variables espera el codigo.",
      reto: "Encuentra un error en una solucion generada y explica la correccion.",
      comprobar: "Debe haber problema, plan, codigo, ejecucion, explicacion, depuracion, modificacion y validacion.",
      nota: "Flujo V4: PROBLEMA -> PLAN -> CODIGO/IA -> EJECUTAR -> ENTENDER -> DEPURAR -> MODIFICAR -> VALIDAR."
    }
  ],
  flashcards: [
    ["Que hace print()?", "Muestra un valor o mensaje en la salida."],
    ["Que devuelve input()?", "Texto. Si necesitas numeros, convierte con int() o float()."],
    ["Que significa ==?", "Compara si dos valores son iguales."],
    ["Que operador calcula el resto?", "%"],
    ["Para que sirve divmod(a, b)?", "Devuelve cociente y resto al mismo tiempo."],
    ["Que hace range(1, 6)?", "Genera 1, 2, 3, 4 y 5."],
    ["Cuando se usa break?", "Para salir de un bucle antes de que termine por su condicion normal."],
    ["Cuando se usa continue?", "Para saltar el resto de una vuelta y pasar a la siguiente."],
    ["Que es una f-string?", "Una cadena con variables o expresiones dentro de llaves."],
    ["Que debe hacer el alumno antes de ejecutar?", "Predecir el resultado y despues comprobarlo."]
  ],
  casos: [
    { titulo: "Precio de entrada", situacion: "Una sala necesita calcular precio segun edad.", preguntas: ["Que variables necesitas?", "Que tramos probarias?", "Que valores frontera pueden fallar?"] },
    { titulo: "Media de tres notas", situacion: "Un programa pide tres notas y muestra la media con dos decimales.", preguntas: ["Donde aparece el casting?", "Como validas el resultado?", "Que cambiarias si fueran cinco notas?"] },
    { titulo: "Bucle de intentos", situacion: "Un alumno crea un while que nunca termina.", preguntas: ["Que condicion no cambia?", "Donde pondrias el contador?", "Cuando usarias break?"] },
    { titulo: "Codigo sugerido por IA", situacion: "Una IA entrega una solucion que parece correcta.", preguntas: ["Que predices antes de ejecutar?", "Que pruebas pequenas haces?", "Que modificacion demuestra que lo entiendes?"] }
  ],
  test: [
    { tipo: "salida", pregunta: "Que imprime este codigo?\n\nx = 4\nprint(x + 3)", opciones: ["7", "43", "x + 3"], correcta: 0, explicacion: "x guarda el numero 4; 4 + 3 es 7." },
    { tipo: "completa", pregunta: "Completa la linea para convertir una edad escrita por teclado en numero.", opciones: ["edad = int(input(\"Edad: \"))", "edad = input + int(\"Edad\")", "edad == input(\"Edad\")"], correcta: 0, explicacion: "input lee texto; int(...) lo convierte en entero." },
    { tipo: "operador", pregunta: "Que operador comprueba igualdad?", opciones: ["==", "=", "!="], correcta: 0, explicacion: "= asigna; == compara igualdad." },
    { tipo: "valor", pregunta: "Que valor tiene resto?\n\ncajas, resto = divmod(29, 6)", opciones: ["5", "4", "6"], correcta: 0, explicacion: "29 contiene 4 grupos de 6 y sobran 5." },
    { tipo: "error", pregunta: "Detecta el error: if edad = 18:", opciones: ["Debe ser edad == 18", "Debe ser edad === 18", "Debe quitarse if"], correcta: 0, explicacion: "Dentro de una condicion se compara con ==." },
    { tipo: "salida", pregunta: "Que imprime range en este bucle?\n\nfor n in range(1, 4):\n    print(n)", opciones: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3"], correcta: 0, explicacion: "El final de range no se incluye." },
    { tipo: "logica", pregunta: "edad = 10; entrada = True. Que vale edad >= 12 and entrada?", opciones: ["False", "True", "10"], correcta: 0, explicacion: "and solo es True si ambas partes son True." },
    { tipo: "f-string", pregunta: "Que produce f\"{7.5:.2f}\"?", opciones: ["7.50", "7.5:.2f", "75"], correcta: 0, explicacion: ":.2f formatea con dos decimales." },
    { tipo: "bucle", pregunta: "Que instruccion termina un bucle inmediatamente?", opciones: ["break", "continue", "range"], correcta: 0, explicacion: "break sale del bucle; continue salta a la siguiente vuelta." },
    { tipo: "ia", pregunta: "Una IA genera codigo. Que haces antes de aceptarlo?", opciones: ["Ejecutarlo, entenderlo, depurarlo y validarlo", "Copiarlo sin leer", "Cambiar solo los colores"], correcta: 0, explicacion: "La V4 pide razonamiento y validacion manual." }
  ],
  mapa_mental_fuente: "recursos/mapa-mental.md"
};



