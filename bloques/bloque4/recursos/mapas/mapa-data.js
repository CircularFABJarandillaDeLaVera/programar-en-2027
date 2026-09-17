window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 4',
  documentTitle: 'Mapa mental - Programacion orientada a objetos',
  brand: 'Circular FAB - Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 4 - Mapa mental',
  width: 1700,
  height: 1080,
  nodeWidth: 250,
  centerWidth: 370,
  legend: [
    { label: 'Concepto', tone: 'blue' },
    { label: 'Practica', tone: 'green' },
    { label: 'Diseno', tone: 'amber' },
    { label: 'Riesgo', tone: 'red' }
  ],
  nodes: [
    {
      id: 'root',
      parent: null,
      x: 665,
      y: 430,
      type: 'central',
      title: 'POO',
      subtitle: 'B4',
      def: 'Agrupar estado y comportamiento en objetos.',
      key: 'Una clase tiene sentido cuando protege y organiza un concepto del problema.',
      err: 'Usar clases solo por decorar codigo.'
    },
    {
      id: 'necesidad',
      parent: 'root',
      x: 80,
      y: 120,
      type: 'rama',
      title: 'Por que POO',
      subtitle: 'Origen',
      def: 'Diccionario + funciones externas puede crecer de forma desordenada.',
      key: 'La clase une dato y comportamiento.',
      err: 'Aceptar estado corrupto sin validacion.'
    },
    {
      id: 'clase-objeto',
      parent: 'root',
      x: 500,
      y: 70,
      type: 'rama',
      title: 'Clase y objeto',
      subtitle: 'Molde / instancia',
      def: 'La clase define; el objeto existe con datos concretos.',
      key: 'Producto es molde; teclado es instancia.',
      err: 'Olvidar parentesis al instanciar.'
    },
    {
      id: 'self-init',
      parent: 'root',
      x: 945,
      y: 105,
      type: 'rama',
      title: 'self y __init__',
      subtitle: 'Instancia',
      def: 'self referencia el objeto; __init__ inicializa su estado.',
      key: 'self no se pasa a mano al llamar.',
      err: 'Omitir self o escribir mal __init__.'
    },
    {
      id: 'estado',
      parent: 'root',
      x: 1275,
      y: 350,
      type: 'rama',
      title: 'Atributos',
      subtitle: 'Estado',
      def: 'Datos propios de cada instancia.',
      key: 'Cambiar p1 no cambia p2.',
      err: 'Confundir variable local con self.atributo.'
    },
    {
      id: 'encapsulacion',
      parent: 'root',
      x: 85,
      y: 670,
      type: 'rama',
      title: 'Encapsulacion',
      subtitle: 'Validar',
      def: 'Controlar cambios mediante una interfaz clara.',
      key: '__atributo evita acceso accidental directo, no privacidad absoluta.',
      err: 'Convertir getters y setters en ceremonia sin utilidad.'
    },
    {
      id: 'composicion',
      parent: 'root',
      x: 515,
      y: 815,
      type: 'rama',
      title: 'Composicion',
      subtitle: 'Tiene un',
      def: 'Un objeto contiene otros objetos.',
      key: 'AuditoriaMercado tiene productos.',
      err: 'Forzar herencia donde hay contencion.'
    },
    {
      id: 'herencia',
      parent: 'root',
      x: 965,
      y: 775,
      type: 'rama',
      title: 'Herencia y super',
      subtitle: 'Es un',
      def: 'Una subclase especializa otra y delega inicializacion con super().',
      key: 'ProductoHardware es un Producto.',
      err: 'Pasar self dentro de super().__init__.'
    },
    {
      id: 'polimorfismo',
      parent: 'root',
      x: 1325,
      y: 655,
      type: 'rama',
      title: 'Polimorfismo',
      subtitle: 'Misma llamada',
      def: 'Objetos distintos responden a un metodo comun con reglas propias.',
      key: 'calcular_precio_final cambia segun la subclase.',
      err: 'Romper la firma comun del metodo.'
    },
    {
      id: 'sami',
      parent: 'root',
      x: 1310,
      y: 120,
      type: 'rama',
      title: 'SAMI-OOP',
      subtitle: 'Proyecto',
      def: 'Evoluciona SAMI-Lite a clases cohesivas.',
      key: 'Producto, subclases, AuditoriaMercado y ManejadorDatos.',
      err: 'Introducir librerias de bloques posteriores.'
    }
  ]
};
