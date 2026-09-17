window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 3',
  documentTitle: 'Mapa mental - Funciones y programacion modular',
  brand: 'Circular FAB - Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 3 - Mapa mental',
  width: 1640,
  height: 1020,
  nodeWidth: 245,
  centerWidth: 350,
  legend: [
    { label: 'Concepto', tone: 'blue' },
    { label: 'Practica', tone: 'green' },
    { label: 'Archivo', tone: 'amber' },
    { label: 'Riesgo', tone: 'red' }
  ],
  nodes: [
    {
      id: 'root',
      parent: null,
      x: 645,
      y: 405,
      type: 'central',
      title: 'Funciones y modularidad',
      subtitle: 'B3',
      def: 'Pasar de scripts lineales a programas organizados en funciones y archivos.',
      key: 'Cada funcion hace una tarea clara y devuelve datos utiles.',
      err: 'Mezclar calculo, consola y archivos en el mismo lugar.'
    },
    {
      id: 'def-return',
      parent: 'root',
      x: 95,
      y: 115,
      type: 'rama',
      title: 'def y return',
      subtitle: 'Reutilizar',
      def: 'def nombra una tarea; return devuelve un resultado al flujo principal.',
      key: 'print muestra; return entrega.',
      err: 'Guardar el resultado de una funcion que solo imprime.'
    },
    {
      id: 'parametros',
      parent: 'root',
      x: 520,
      y: 70,
      type: 'rama',
      title: 'Parametros',
      subtitle: 'Entradas',
      def: 'Los parametros reciben argumentos; los opcionales tienen valor por defecto.',
      key: 'Los valores por defecto van al final de la firma.',
      err: 'Colocar un obligatorio despues de uno opcional.'
    },
    {
      id: 'scope',
      parent: 'root',
      x: 950,
      y: 120,
      type: 'rama',
      title: 'Scope',
      subtitle: 'Local/global',
      def: 'Una variable local vive dentro de una funcion; una exterior vive en el script.',
      key: 'global se usa solo en experimentos controlados.',
      err: 'Leer y asignar una variable exterior sin entender el ambito.'
    },
    {
      id: 'docstrings',
      parent: 'root',
      x: 1240,
      y: 390,
      type: 'rama',
      title: 'Docstrings',
      subtitle: 'Documentar',
      def: 'Texto breve al inicio de la funcion para explicar responsabilidad.',
      key: 'Indica que recibe y que devuelve.',
      err: 'Confundir comentario disperso con documentacion de firma.'
    },
    {
      id: 'excepciones',
      parent: 'root',
      x: 95,
      y: 610,
      type: 'rama',
      title: 'Excepciones',
      subtitle: 'try/except',
      def: 'Capturar fallos previsibles para observar, interpretar y corregir.',
      key: 'ValueError y FileNotFoundError deben leerse antes de resolver.',
      err: 'Capturar todo sin saber que ha fallado.'
    },
    {
      id: 'archivos',
      parent: 'root',
      x: 555,
      y: 755,
      type: 'rama',
      title: 'TXT JSON CSV',
      subtitle: 'with open()',
      def: 'Persistencia local para texto, diccionarios y tablas.',
      key: 'with open() gestiona el cierre del archivo.',
      err: 'Usar w cuando se queria anadir al final.'
    },
    {
      id: 'modulos',
      parent: 'root',
      x: 1010,
      y: 650,
      type: 'rama',
      title: 'Modulos e import',
      subtitle: 'Responsabilidades',
      def: 'Dividir el programa en archivos con tareas claras y conectarlos.',
      key: 'main.py coordina; los modulos calculan o guardan.',
      err: 'Crear dependencias cruzadas entre archivos.'
    },
    {
      id: 'sami-lite',
      parent: 'root',
      x: 1290,
      y: 755,
      type: 'rama',
      title: 'SAMI-Lite',
      subtitle: 'Proyecto',
      def: 'persistencia.py, analizador.py y main.py integran el bloque.',
      key: 'Funciones, imports, validacion, excepciones, JSON, CSV y TXT.',
      err: 'Convertirlo en un programa monolitico.'
    }
  ]
};
