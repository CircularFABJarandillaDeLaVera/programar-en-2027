window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque 5',
  documentTitle: 'Mapa mental - Python aplicado y librerias',
  brand: 'Programar en 2027',
  backHref: '../index.html',
  printNote: 'Programar en 2027 - Bloque 5 - Python aplicado',
  width: 1280,
  height: 760,
  nodeWidth: 235,
  centerWidth: 320,
  legend: [{ label: 'Flujo', tone: 'blue' }, { label: 'Aplicado', tone: 'green' }, { label: 'Conceptual', tone: 'amber' }],
  nodes: [
    { id: 'root', parent: null, x: 480, y: 300, type: 'central', title: 'Bloque 5', subtitle: 'Python aplicado', def: 'Datos -> calculos -> estructura -> ReportLab -> PDF.', key: 'Cada libreria entra por necesidad.', err: 'Aprender cinco herramientas como cinco minicursos.' },
    { id: 'datos', parent: 'root', x: 80, y: 90, type: 'rama', title: 'Datos', subtitle: 'CSV y origen', def: 'got_1.csv para practicar Pandas; hardware para SAMI-Applied.', key: 'Separar dataset didactico y proyecto.', err: 'Mezclar GOT con datos de mercado.' },
    { id: 'numpy', parent: 'root', x: 80, y: 270, type: 'rama', title: 'NumPy', subtitle: 'Arrays', def: 'np.array, np.nan y operaciones vectorizadas sencillas.', key: 'Rapidez en calculos numericos.', err: 'Tratar np.nan como cero.' },
    { id: 'pandas', parent: 'root', x: 80, y: 470, type: 'rama', title: 'Pandas', subtitle: 'Tablas', def: 'read_csv, set_index, loc, iloc, isin, drop y rename.', key: 'Filtrar e inspeccionar tablas.', err: 'Usar and/or en filtros de Series.' },
    { id: 'playwright', parent: 'root', x: 880, y: 90, type: 'rama', title: 'Playwright', subtitle: 'Automatizar', def: 'sync_playwright, chromium.launch, new_page, goto y browser.close.', key: 'Cerrar siempre el navegador.', err: 'Dejar procesos abiertos.' },
    { id: 'bs', parent: 'root', x: 900, y: 270, type: 'rama', title: 'BeautifulSoup', subtitle: 'Conceptual', def: 'Parsing de HTML estatico cuando no hace falta navegador.', key: 'Decidir herramienta ligera.', err: 'Inventar APIs no trazadas.' },
    { id: 'reportlab', parent: 'root', x: 900, y: 470, type: 'rama', title: 'ReportLab', subtitle: 'Platypus', def: 'PDF con story, Paragraph, Image, Table, TableStyle, Spacer y build().', key: 'Separar datos, calculos y presentacion.', err: 'Evaluar Canvas o usar strings largos sin Paragraph.' },
    { id: 'sami', parent: 'root', x: 485, y: 610, type: 'rama', title: 'SAMI-Applied', subtitle: 'Proyecto', def: 'Precios, disponibilidad de hardware e informe PDF.', key: 'CSV, analisis y reporte_final_sami.pdf.', err: 'Convertirlo en proyecto de facturacion.' }
  ]
};
