window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 7',
  documentTitle: 'Mapa mental - Python + IA',
  brand: 'Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 7 - Python + IA',
  width: 1280,
  height: 760,
  nodeWidth: 240,
  centerWidth: 320,
  legend: [{ label: 'Metodo', tone: 'blue' }, { label: 'Decision', tone: 'green' }, { label: 'Opcional', tone: 'amber' }],
  nodes: [
    { id: 'root', parent: null, x: 480, y: 300, type: 'central', title: 'Python + IA', subtitle: 'Critica y verificable', def: 'Problema -> plan -> contexto -> IA -> codigo -> ejecutar -> entender -> depurar -> modificar -> validar.', key: 'El alumno sigue al mando.', err: 'Programacion zombi.' },
    { id: 'plan', parent: 'root', x: 80, y: 70, type: 'rama', title: 'Plan', subtitle: 'Antes del prompt', def: 'Problema, pasos, entrada, salida y prueba esperada.', key: 'Pensar antes de pedir.', err: 'Pedir hazlo todo.' },
    { id: 'contexto', parent: 'root', x: 80, y: 230, type: 'rama', title: 'Contexto', subtitle: 'Acotar', def: 'Archivo, funcion, datos, restricciones y criterio de exito.', key: 'Menos invencion.', err: 'Arregla esto.' },
    { id: 'auditar', parent: 'root', x: 80, y: 390, type: 'rama', title: 'Auditar', subtitle: 'Leer codigo', def: 'Detectar dependencias nuevas, APIs inventadas y cambios de alcance.', key: 'Aceptar, modificar o rechazar.', err: 'Copiar sin leer.' },
    { id: 'validar', parent: 'root', x: 80, y: 550, type: 'rama', title: 'Validar', subtitle: 'Ejecutar', def: 'Pruebas pequenas con resultado esperado.', key: 'Evidencia antes de confiar.', err: 'No ejecutar.' },
    { id: 'debug', parent: 'root', x: 890, y: 70, type: 'rama', title: 'Depurar', subtitle: 'Con IA', def: 'Traceback, fragmento minimo y explicacion de la causa.', key: 'Entender la correccion.', err: 'Pegar todo sin contexto.' },
    { id: 'refactor', parent: 'root', x: 900, y: 230, type: 'rama', title: 'Refactor', subtitle: 'Controlado', def: 'Mejorar estructura sin cambiar comportamiento.', key: 'Salida antes/despues.', err: 'Cambiar de alcance.' },
    { id: 'sami', parent: 'root', x: 900, y: 390, type: 'rama', title: 'SAMI Final', subtitle: 'Defensa', def: 'Registro IA, plan de validacion y explicacion del flujo.', key: 'Demostrar autoria.', err: 'No saber explicar.' },
    { id: 'langgraph', parent: 'root', x: 900, y: 550, type: 'rama', title: 'LangGraph', subtitle: 'Opcional no evaluable', def: 'StateGraph, nodos, aristas, estado, reducers, threads/memoria y human-in-the-loop.', key: 'No entra en SAMI Final.', err: 'Convertirlo en requisito.' }
  ]
};
