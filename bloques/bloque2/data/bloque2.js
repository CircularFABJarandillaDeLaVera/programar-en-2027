window.EDUSDK_BLOQUE = {
  producto: "Programar en 2027",
  curso: "Programar en 2027",
  bloque: "Bloque 2 - Estructuras de datos",
  descripcion: "Strings, slicing, listas, tuplas, sets, diccionarios, comprehensions y eleccion de estructuras.",
  duracion: "4 h",
  fuente: "ingenieria-python-bloque2-final.md",
  fuentes: [
    "ingenieria-conocimiento-python-v4.md",
    "ingenieria-python-bloque2-final.md"
  ],
  metodologia: "Explicacion breve -> codigo -> predecir -> ejecutar -> modificar -> mini-reto -> feedback -> continuar",
  objetivos: [
    "Manipular strings como secuencias indexadas e inmutables.",
    "Interpretar slicing directo, con paso y con paso inverso.",
    "Usar listas para colecciones ordenadas y mutables.",
    "Reconocer tuplas y el caso especial de la tupla de un solo elemento.",
    "Deduplicar con sets cuando el orden no es lo importante.",
    "Usar diccionarios y .get() para contar y acumular con seguridad.",
    "Construir comprehensions legibles para transformar o filtrar datos.",
    "Elegir la estructura adecuada para un problema concreto."
  ],
  slides: [
    {
      titulo: "De un valor a una estructura",
      objetivo: "Entender que una estructura permite organizar varios datos con una intencion.",
      guion: "Parte de una frase y una lista de palabras. Pregunta que necesitamos conservar: orden, repetidos, clave o valor unico.",
      pregunta: "Que cambia cuando pasamos de una variable suelta a una coleccion?",
      ejemplo: "frase = \"python aprende haciendo\"\npalabras = frase.split()\nprint(palabras)",
      modificar: "Cambia la frase por una de cinco palabras.",
      predecir: "Que lista saldra al usar split()?",
      reto: "Explica si para tu frase importa el orden de las palabras.",
      comprobar: "La salida debe ser una lista de strings.",
      nota: "Abrir con necesidad practica, no con definiciones largas."
    },
    {
      titulo: "Strings e indices",
      objetivo: "Leer caracteres por posicion sin olvidar que el string no se modifica por indice.",
      guion: "Usa la palabra Pradera como ejemplo fuente. Localizan posiciones positivas y negativas.",
      pregunta: "Que caracter esta en la posicion 0?",
      ejemplo: "a = \"Pradera\"\nprint(a[0])\nprint(a[-1])",
      modificar: "Prueba a[1], a[3] y a[-2].",
      predecir: "Antes de ejecutar, escribe cada caracter esperado.",
      reto: "Intenta cambiar a[0] por otra letra y lee el error.",
      comprobar: "El string se puede leer por indice, pero no mutar por indice.",
      nota: "Registrar TypeError como evidencia de inmutabilidad."
    },
    {
      titulo: "Slicing",
      objetivo: "Extraer partes de una secuencia usando inicio, final y paso.",
      guion: "Explica que el final no se incluye. Trabajan primero con cortes simples y luego con paso inverso.",
      pregunta: "Que significa que el limite final no se incluya?",
      ejemplo: "a = \"Pradera\"\nprint(a[1:5])\nprint(a[5:1:-1])",
      modificar: "Prueba a[:3], a[3:], a[::-1] y a[8:2:-2] con una palabra mas larga.",
      predecir: "Que imprime a[5:1:-1] si a vale Pradera?",
      reto: "Extrae las tres primeras letras y despues la palabra al reves.",
      comprobar: "Cada corte crea otro string; el original sigue igual.",
      nota: "No introducir temas de rendimiento ni complejidad."
    },
    {
      titulo: "Listas y mutabilidad",
      objetivo: "Usar listas cuando necesitamos ordenar, anadir o cambiar elementos.",
      guion: "Compara lectura por indice con modificacion por indice. Luego usa append y remove.",
      pregunta: "Por que una lista si cambia cuando asignamos por indice?",
      ejemplo: "alumnos = [\"Ana\", \"Luis\", \"Marta\"]\nalumnos[1] = \"Leo\"\nalumnos.append(\"Nora\")\nprint(alumnos)",
      modificar: "Cambia otro nombre y anade uno nuevo.",
      predecir: "Que lista queda despues de cada linea?",
      reto: "Crea una lista de tareas y marca una sustituyendo su texto.",
      comprobar: "La misma lista refleja los cambios realizados.",
      nota: "Contrastar con strings sin entrar en copias profundas."
    },
    {
      titulo: "Tuplas",
      objetivo: "Reconocer datos agrupados que no se quieren modificar.",
      guion: "Presenta coordenadas o pares como agrupaciones estables. Provoca el caso de un unico elemento.",
      pregunta: "Que convierte realmente un valor en tupla de un solo elemento?",
      ejemplo: "punto = (3, 7)\nsolo = (5,)\nprint(punto)\nprint(type(solo))",
      modificar: "Quita la coma de solo y observa el tipo.",
      predecir: "Que tipo tendra (5) y que tipo tendra (5,)?",
      reto: "Guarda dia y mes en una tupla y muestrala.",
      comprobar: "La coma distingue la tupla de un unico elemento.",
      nota: "Mantenerlo como estructura B2 sin derivar a objetos."
    },
    {
      titulo: "Sets y deduplicacion",
      objetivo: "Eliminar repetidos cuando el orden no es la prioridad.",
      guion: "Mezcla listas de estudiantes y convierte a set. Pregunta que se gana y que se pierde.",
      pregunta: "Que informacion puede perderse al convertir una lista en set?",
      ejemplo: "grupo_a = [\"Ana\", \"Luis\", \"Ana\"]\nunicos = set(grupo_a)\nprint(len(unicos))\nprint(unicos)",
      modificar: "Anade nombres repetidos y vuelve a contar.",
      predecir: "Cuantos elementos unicos quedan?",
      reto: "Une dos listas de asistentes y muestra solo nombres unicos.",
      comprobar: "Los duplicados desaparecen; el orden no debe usarse como criterio.",
      nota: "Usar lenguaje natural para hablar de busqueda o acceso."
    },
    {
      titulo: "Diccionarios y .get()",
      objetivo: "Guardar informacion por clave y acumular de forma segura.",
      guion: "Cuenta palabras. Primero muestra el problema de una clave que no existe; luego .get().",
      pregunta: "Por que .get(palabra, 0) evita un fallo de clave ausente?",
      ejemplo: "conteo = {}\nfor palabra in [\"python\", \"datos\", \"python\"]:\n    conteo[palabra] = conteo.get(palabra, 0) + 1\nprint(conteo)",
      modificar: "Cambia la lista de palabras y predice el diccionario final.",
      predecir: "Que valor tendra conteo[\"python\"]?",
      reto: "Cuenta cuantas veces aparece cada color en una lista.",
      comprobar: "Cada clave apunta a su contador actualizado.",
      nota: "El bucle es herramienta ya conocida de B1; no introducir contenidos posteriores."
    },
    {
      titulo: "Desempaquetado con .items()",
      objetivo: "Recorrer pares clave-valor de un diccionario.",
      guion: "Muestra que .items() entrega parejas. El alumno lee clave y valor por separado.",
      pregunta: "Que dos valores recibimos en cada vuelta?",
      ejemplo: "stock = {\"lapiz\": 4, \"cuaderno\": 2}\nfor producto, cantidad in stock.items():\n    print(producto, cantidad)",
      modificar: "Anade otro producto y predice las lineas impresas.",
      predecir: "Cuantas lineas imprime el bucle?",
      reto: "Muestra solo los productos con cantidad mayor que 2.",
      comprobar: "Cada vuelta trabaja con una clave y su valor.",
      nota: "No convertirlo en modularidad."
    },
    {
      titulo: "Comprehensions",
      objetivo: "Crear listas nuevas filtrando o transformando datos de forma compacta.",
      guion: "Construye una lista paso a paso y luego la version comprehension. Insistir en legibilidad.",
      pregunta: "Que parte transforma y que parte filtra?",
      ejemplo: "numeros = [1, 2, 3, 4, 5, 6]\npares = [n for n in numeros if n % 2 == 0]\nprint(pares)",
      modificar: "Genera cuadrados de los numeros pares.",
      predecir: "Cuantos elementos tendra pares?",
      reto: "A partir de palabras, crea una lista con las que tengan mas de 5 letras.",
      comprobar: "La lista nueva no cambia la lista original.",
      nota: "Evitar comprehensions crípticas; una linea debe poder leerse."
    },
    {
      titulo: "Analizador de frases profesional",
      objetivo: "Limpiar texto, separar palabras, contar, deduplicar e interpretar resultados.",
      guion: "Construir por pasos: frase, normalizacion, split, total, unicas, conteo con diccionario.",
      pregunta: "Que estructura usaras para palabras unicas y cual para frecuencias?",
      ejemplo: "frase = \"Python datos python\"\npalabras = frase.lower().split()\nunicas = set(palabras)\nconteo = {}\nfor palabra in palabras:\n    conteo[palabra] = conteo.get(palabra, 0) + 1\nprint(len(palabras), unicas, conteo)",
      modificar: "Prueba una frase mas larga con palabras repetidas.",
      predecir: "Cuantas palabras totales y cuantas unicas habra?",
      reto: "Muestra la palabra mas repetida revisando el diccionario.",
      comprobar: "Debe haber total, conjunto de unicas y diccionario de frecuencias.",
      nota: "Practica grounded indicada por la ingeniería final."
    },
    {
      titulo: "Elegir estructura",
      objetivo: "Justificar lista, tupla, set o diccionario segun el problema.",
      guion: "Dar tarjetas de problemas. El alumno elige estructura y defiende el motivo.",
      pregunta: "Que necesitas conservar: orden, cambio, unicidad o relacion clave-valor?",
      ejemplo: "problema = \"contar apariciones de palabras\"\nestructura = \"diccionario\"\nprint(estructura)",
      modificar: "Cambia problema por eliminar duplicados o guardar coordenadas.",
      predecir: "Que estructura escogerias antes de programar?",
      reto: "Completa una tabla con cinco necesidades y su estructura ideal.",
      comprobar: "La eleccion debe estar justificada por el uso, no por preferencia.",
      nota: "Cierre conceptual del bloque."
    },
    {
      titulo: "Proyecto B2: clasificador e indexador",
      objetivo: "Construir un script secuencial que clasifica palabras clave unicas e indexa frecuencias.",
      guion: "Usa texto tipo parrafo. El alumno limpia, separa, deduplica, cuenta y justifica decisiones.",
      pregunta: "Que evidencia demuestra que has elegido bien cada estructura?",
      ejemplo: "texto = \"datos python datos codigo\"\npalabras = texto.lower().split()\nunicas = set(palabras)\nindice = {}\nfor palabra in palabras:\n    indice[palabra] = indice.get(palabra, 0) + 1\nprint(unicas)\nprint(indice)",
      modificar: "Anade palabras repetidas, mayusculas y signos sencillos que debas limpiar.",
      predecir: "Que claves tendra el indice final?",
      reto: "Entrega texto, palabras unicas, indice de frecuencias y justificacion de estructuras.",
      comprobar: "El proyecto funciona si no duplica claves y permite consultar cada frecuencia.",
      nota: "No usar contenidos de bloques posteriores."
    }
  ],
  flashcards: [
    ["Que es un string como secuencia?", "Un texto que se puede leer por posiciones, pero no modificar por indice."],
    ["Que indica palabra[0]?", "El primer caracter de palabra."],
    ["Que hace palabra[::-1]?", "Devuelve una version invertida del string."],
    ["Que no incluye un slicing?", "El limite final."],
    ["Cuando usar una lista?", "Cuando importa el orden y necesitamos poder modificar elementos."],
    ["Que significa mutabilidad?", "Que la estructura puede cambiar despues de creada."],
    ["Como se escribe una tupla de un solo elemento?", "(valor,) con coma."],
    ["Para que sirve un set?", "Para trabajar con valores unicos sin depender del orden."],
    ["Que guarda un diccionario?", "Pares clave-valor."],
    ["Que hace .get(clave, 0)?", "Devuelve el valor de la clave o 0 si no existe."],
    ["Que crea una comprehension?", "Una nueva coleccion a partir de una secuencia."],
    ["Que estructura cuenta frecuencias?", "Un diccionario con palabra como clave y contador como valor."]
  ],
  casos: [
    { titulo: "Analizador de frase", situacion: "Quieres saber palabras totales, palabras unicas y repeticiones.", preguntas: ["Que obtienes con split()?", "Donde usas set?", "Donde usas diccionario y .get()?"] },
    { titulo: "Lista de asistentes", situacion: "Dos grupos entregan nombres con repetidos.", preguntas: ["Que estructura conserva el listado original?", "Que estructura elimina duplicados?", "Que riesgo tiene perder el orden?"] },
    { titulo: "Coordenada fija", situacion: "Un punto se representa con dos numeros que no deben cambiar.", preguntas: ["Lista o tupla?", "Como seria una tupla con un unico valor?", "Que pasaria si intentas cambiarla?"] },
    { titulo: "Inventario simple", situacion: "Cada producto necesita una cantidad asociada.", preguntas: ["Que usas como clave?", "Que usas como valor?", "Como recorres los pares con .items()?"] },
    { titulo: "Filtro compacto", situacion: "Quieres palabras de mas de cinco letras desde una frase.", preguntas: ["Que parte separa palabras?", "Que parte filtra?", "Cuando dejarias de usar comprehension por claridad?"] }
  ],
  test: [
    { tipo: "salida", pregunta: "Que imprime este codigo?\n\ntexto = \"Pradera\"\nprint(texto[0])", opciones: ["P", "r", "Pr"], correcta: 0, explicacion: "El indice 0 apunta al primer caracter." },
    { tipo: "slicing", pregunta: "Que devuelve \"Pradera\"[1:4]?", opciones: ["rad", "rade", "Pra"], correcta: 0, explicacion: "Empieza en 1 e incluye 1, 2 y 3; el 4 no entra." },
    { tipo: "slicing", pregunta: "Que hace palabra[::-1]?", opciones: ["Invierte la secuencia", "Borra la palabra", "Duplica la palabra"], correcta: 0, explicacion: "El paso -1 recorre de atras hacia delante." },
    { tipo: "mutabilidad", pregunta: "Que estructura permite alumnos[1] = \"Leo\"?", opciones: ["lista", "string", "set"], correcta: 0, explicacion: "Las listas son mutables y permiten sustituir por indice." },
    { tipo: "error", pregunta: "Que falta para crear una tupla de un solo elemento?", opciones: ["La coma: (5,)", "Un punto: (5.)", "La palabra tuple obligatoria"], correcta: 0, explicacion: "La coma crea la tupla de un solo elemento." },
    { tipo: "set", pregunta: "Que vale len(set([\"Ana\", \"Ana\", \"Luis\"]))?", opciones: ["2", "3", "1"], correcta: 0, explicacion: "set elimina repetidos: Ana y Luis." },
    { tipo: "diccionario", pregunta: "Completa para contar sin error si la clave no existe:\n\nconteo[p] = conteo.___(p, 0) + 1", opciones: ["get", "items", "split"], correcta: 0, explicacion: ".get(p, 0) devuelve 0 cuando p aun no esta en el diccionario." },
    { tipo: "items", pregunta: "Que entrega stock.items() en un bucle?", opciones: ["Pares clave-valor", "Solo claves", "Solo valores ordenados"], correcta: 0, explicacion: ".items() permite desempaquetar clave y valor en cada vuelta." },
    { tipo: "comprehension", pregunta: "Que imprime?\n\nnums = [1, 2, 3, 4]\npares = [n for n in nums if n % 2 == 0]\nprint(pares)", opciones: ["[2, 4]", "[1, 3]", "[1, 2, 3, 4]"], correcta: 0, explicacion: "La condicion conserva solo los numeros pares." },
    { tipo: "estructura", pregunta: "Quieres consultar rapidamente la cantidad de cada palabra. Que estructura encaja mejor?", opciones: ["diccionario", "tupla", "string"], correcta: 0, explicacion: "El diccionario asocia cada palabra con su contador." },
    { tipo: "estructura", pregunta: "Quieres eliminar nombres repetidos sin depender del orden. Que eliges?", opciones: ["set", "lista", "string"], correcta: 0, explicacion: "set representa valores unicos." },
    { tipo: "proyecto", pregunta: "En un indexador de palabras, que estructura guarda las palabras unicas?", opciones: ["set", "tupla", "numero"], correcta: 0, explicacion: "El set elimina duplicados y deja una coleccion de palabras unicas." }
  ],
  proyecto: {
    titulo: "Clasificador Unico e Indexador de Palabras Clave",
    evidencia: "Texto de entrada, lista de palabras, conjunto de unicas, diccionario de frecuencias y justificacion de estructuras."
  },
  mapa_mental_fuente: "recursos/mapa-mental.md"
};

