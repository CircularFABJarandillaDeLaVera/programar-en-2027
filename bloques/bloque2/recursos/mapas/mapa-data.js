window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 2',
  documentTitle: 'Mapa mental - Estructuras de datos',
  brand: 'Circular FAB - Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 2 - Mapa mental',
  width: 1560,
  height: 980,
  nodeWidth: 230,
  centerWidth: 330,
  legend: [
    { label: 'Concepto', tone: 'blue' },
    { label: 'Practica', tone: 'green' },
    { label: 'Dato', tone: 'amber' },
    { label: 'Riesgo', tone: 'red' }
  ],
  nodes: [
    {
      id: 'root',
      parent: null,
      x: 615,
      y: 390,
      type: 'central',
      title: 'Estructuras de datos',
      subtitle: 'B2',
      def: 'Organizar varios datos segun orden, cambio, estabilidad, unicidad o relacion clave-valor.',
      key: 'La estructura se elige por necesidad, no por costumbre.',
      err: 'Elegir una estructura sin justificar que problema resuelve.'
    },
    {
      id: 'strings',
      parent: 'root',
      x: 100,
      y: 110,
      type: 'rama',
      title: 'Strings y slicing',
      subtitle: 'Leer secuencias',
      def: 'Un string se lee por indices y cortes, pero no se modifica por indice.',
      key: 'El limite final del slicing no se incluye.',
      err: 'Intentar cambiar un caracter de un string directamente.'
    },
    {
      id: 'listas',
      parent: 'root',
      x: 500,
      y: 70,
      type: 'rama',
      title: 'Listas',
      subtitle: 'Orden + cambio',
      def: 'Colecciones ordenadas y mutables.',
      key: 'Permiten sustituir, anadir y quitar elementos.',
      err: 'Usarlas cuando solo importa unicidad.'
    },
    {
      id: 'tuplas',
      parent: 'root',
      x: 900,
      y: 120,
      type: 'rama',
      title: 'Tuplas',
      subtitle: 'Agrupar estable',
      def: 'Agrupan valores que no se pretende modificar.',
      key: 'Una tupla de un elemento necesita coma: (5,).',
      err: 'Creer que (5) es una tupla.'
    },
    {
      id: 'sets',
      parent: 'root',
      x: 145,
      y: 570,
      type: 'rama',
      title: 'Sets',
      subtitle: 'Unicidad',
      def: 'Eliminan duplicados cuando el orden no es lo importante.',
      key: 'Son utiles para nombres o palabras unicas.',
      err: 'Esperar un orden concreto despues de deduplicar.'
    },
    {
      id: 'dicts',
      parent: 'root',
      x: 575,
      y: 730,
      type: 'rama',
      title: 'Diccionarios',
      subtitle: 'Clave-valor',
      def: 'Asocian claves con valores y permiten contar con .get().',
      key: '.items() recorre parejas clave-valor.',
      err: 'Acceder a una clave ausente sin valor por defecto.'
    },
    {
      id: 'comprehensions',
      parent: 'root',
      x: 1015,
      y: 565,
      type: 'rama',
      title: 'Comprehensions',
      subtitle: 'Filtrar y transformar',
      def: 'Crean colecciones nuevas desde otra secuencia.',
      key: 'Deben ser compactas, pero legibles.',
      err: 'Convertir una linea en codigo dificil de leer.'
    },
    {
      id: 'proyecto',
      parent: 'root',
      x: 1160,
      y: 340,
      type: 'rama',
      title: 'Proyecto B2',
      subtitle: 'Indexador',
      def: 'Clasificador Unico e Indexador de Palabras Clave.',
      key: 'Lista completa, set de unicas y diccionario de frecuencias.',
      err: 'No justificar por que cada estructura encaja.'
    }
  ]
};
