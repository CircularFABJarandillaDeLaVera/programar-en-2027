window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 6',
  documentTitle: 'Mapa mental - Entorno profesional',
  brand: 'Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 6 - Entorno profesional',
  width: 1280,
  height: 760,
  nodeWidth: 235,
  centerWidth: 320,
  legend: [{ label: 'Flujo', tone: 'blue' }, { label: 'Herramienta', tone: 'green' }, { label: 'Laguna', tone: 'amber' }],
  nodes: [
    { id: 'root', parent: null, x: 480, y: 300, type: 'central', title: 'Bloque 6', subtitle: 'Entorno profesional', def: 'Notebook -> script -> VS Code -> proyecto -> venv -> Git -> debugger -> IA.', key: 'Profesionalizar el entorno.', err: 'Anadir grandes funcionalidades a SAMI.' },
    { id: 'script', parent: 'root', x: 80, y: 70, type: 'rama', title: 'Script .py', subtitle: 'Salida explicita', def: 'Un script ejecuta de arriba abajo y necesita print para mostrar resultados.', key: 'Sin sintaxis de notebook.', err: 'Pegar %pip o !ls en un .py.' },
    { id: 'vscode', parent: 'root', x: 80, y: 230, type: 'rama', title: 'VS Code', subtitle: 'Editor y terminal', def: 'Explorador, editor, terminal integrada e interprete.', key: 'Comandos en terminal.', err: 'Escribir python main.py dentro del archivo.' },
    { id: 'proyecto', parent: 'root', x: 80, y: 390, type: 'rama', title: 'Proyecto', subtitle: 'src/data/logs', def: 'Separar codigo, datos, configuracion y registros.', key: 'Rutas relativas.', err: 'Usar rutas absolutas locales.' },
    { id: 'venv', parent: 'root', x: 80, y: 550, type: 'rama', title: 'venv', subtitle: 'Dependencias', def: 'Entorno virtual y requirements.txt.', key: 'Comprobar entorno activo.', err: 'Instalar fuera del venv.' },
    { id: 'git', parent: 'root', x: 890, y: 70, type: 'rama', title: 'Git', subtitle: 'Local', def: 'status, add y commit como flujo conceptual.', key: 'Commit guarda version local.', err: 'Confundir commit con push.' },
    { id: 'github', parent: 'root', x: 900, y: 230, type: 'rama', title: 'GitHub', subtitle: 'Remoto', def: 'remote, push y pull como sincronizacion conceptual.', key: 'Autenticacion es laguna.', err: 'Inventar configuracion remota.' },
    { id: 'debug', parent: 'root', x: 900, y: 390, type: 'rama', title: 'Depuracion', subtitle: 'Traceback', def: 'Leer archivo, linea y tipo de error.', key: 'De abajo arriba.', err: 'Mirar solo el color rojo.' },
    { id: 'ia', parent: 'root', x: 900, y: 550, type: 'rama', title: 'Asistente IA', subtitle: 'Primer contacto', def: 'Explicar codigo, cambio pequeno, funcion sencilla, localizar error o revisar propuesta.', key: 'Leer, probar y validar.', err: 'Delegar logica completa.' }
  ]
};
