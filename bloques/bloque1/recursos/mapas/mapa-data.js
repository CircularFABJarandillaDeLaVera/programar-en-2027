window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 1',
  documentTitle: 'Mapa mental - Fundamentos y logica',
  brand: 'Circular FAB - Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 1 - Mapa mental',
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
      title: 'Fundamentos y logica',
      subtitle: 'B1',
      def: 'Primer contacto con Python mediante notebook, codigo corto, prediccion, ejecucion y comprobacion.',
      key: 'Aprender haciendo: escribir, ejecutar, modificar y validar.',
      err: 'Convertir el bloque en un manual teorico.'
    },
    {
      id: 'ejecutar',
      parent: 'root',
      x: 110,
      y: 120,
      type: 'rama',
      title: 'Ejecutar',
      subtitle: 'Notebook / Colab',
      def: 'El alumno escribe celdas pequenas y observa la salida inmediatamente.',
      key: 'print() permite comprobar rapido que el entorno funciona.',
      err: 'Empezar por configuracion compleja de VS Code.'
    },
    {
      id: 'datos',
      parent: 'root',
      x: 520,
      y: 80,
      type: 'rama',
      title: 'Datos',
      subtitle: 'Variables y tipos',
      def: 'Variables, strings, numeros y booleanos como base de programas pequenos.',
      key: 'input() devuelve texto; convertir solo cuando haga falta operar.',
      err: 'Confundir asignacion = con comparacion ==.'
    },
    {
      id: 'operar',
      parent: 'root',
      x: 940,
      y: 130,
      type: 'rama',
      title: 'Operar',
      subtitle: 'Calculo y logica',
      def: 'Operadores aritmeticos, comparaciones, and, or, not y divmod.',
      key: 'divmod() devuelve cociente y resto en una sola llamada.',
      err: 'Memorizar operadores sin probar salidas.'
    },
    {
      id: 'decidir',
      parent: 'root',
      x: 160,
      y: 570,
      type: 'rama',
      title: 'Decidir',
      subtitle: 'if / elif / else',
      def: 'El programa elige una rama segun condiciones y valores frontera.',
      key: 'Cada caso debe probarse con entradas pequenas y previsibles.',
      err: 'No probar limites como 11, 12, 17, 18, 64 y 65.'
    },
    {
      id: 'repetir',
      parent: 'root',
      x: 630,
      y: 720,
      type: 'rama',
      title: 'Repetir',
      subtitle: 'for / while',
      def: 'Bucles para conteos, acumuladores e intentos controlados.',
      key: 'break termina; continue salta a la siguiente vuelta.',
      err: 'Crear un while cuya condicion nunca cambia.'
    },
    {
      id: 'ia',
      parent: 'root',
      x: 1030,
      y: 560,
      type: 'rama',
      title: 'IA',
      subtitle: 'Ayuda con control',
      def: 'La IA puede proponer codigo, pero el alumno debe entenderlo y validarlo.',
      key: 'Problema -> plan -> codigo/IA -> ejecutar -> entender -> depurar -> modificar -> validar.',
      err: 'Aceptar codigo generado sin leerlo ni probarlo.'
    }
  ]
};



