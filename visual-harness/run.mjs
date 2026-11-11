// Adaptación mínima del procedimiento Chrome/CDP de CircularFAB-EduSDK/visual-harness/run.mjs.
// Solo lectura del curso; capturas e informe en visual-harness/.out/ de este repositorio.
import { createServer } from 'node:http';
import { createServer as createTcpServer } from 'node:net';
import { createReadStream, existsSync } from 'node:fs';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const carpetaArnes = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(carpetaArnes, '..');
const salida = join(carpetaArnes, '.out');
const escenarios = [
  { nombre: 'escritorio-claro', ancho: 1440, alto: 900, tema: 'light' },
  { nombre: 'escritorio-oscuro', ancho: 1440, alto: 900, tema: 'dark' },
  { nombre: 'movil-claro', ancho: 390, alto: 844, tema: 'light' },
  { nombre: 'movil-oscuro', ancho: 390, alto: 844, tema: 'dark' },
];
const tipos = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};

function dentroDeRaiz(ruta, base = raiz) {
  const relativo = relative(base, ruta);
  return relativo === '' || (relativo !== '..' && !relativo.startsWith(`..${sep}`) && !isAbsolute(relativo));
}

async function puertoLibre() {
  return new Promise((resolver, rechazar) => {
    const servidor = createTcpServer();
    servidor.once('error', rechazar);
    servidor.listen(0, '127.0.0.1', () => {
      const puerto = servidor.address().port;
      servidor.close(() => resolver(puerto));
    });
  });
}

async function servir() {
  const puerto = await puertoLibre();
  const servidor = createServer(async (peticion, respuesta) => {
    try {
      const rutaWeb = decodeURIComponent(new URL(peticion.url, 'http://localhost').pathname);
      if (rutaWeb === '/favicon.ico') { respuesta.writeHead(204).end(); return; }
      const archivo = resolve(raiz, `.${rutaWeb}`);
      if (!dentroDeRaiz(archivo) || !(await stat(archivo)).isFile()) {
        respuesta.writeHead(404).end('No encontrado'); return;
      }
      respuesta.writeHead(200, {
        'Content-Type': tipos[extname(archivo).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      createReadStream(archivo).pipe(respuesta);
    } catch {
      respuesta.writeHead(404).end('No encontrado');
    }
  });
  await new Promise((resolver, rechazar) => {
    servidor.once('error', rechazar);
    servidor.listen(puerto, '127.0.0.1', resolver);
  });
  return { servidor, origen: `http://127.0.0.1:${puerto}` };
}

async function abrirChrome() {
  const ejecutable = [
    process.env.EDUSDK_CHROME,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  ].find((ruta) => ruta && existsSync(ruta));
  if (!ejecutable) throw new Error('No se encontró Chrome; indica EDUSDK_CHROME.');
  const perfil = join(salida, `perfil-${process.pid}-${Date.now()}`);
  await mkdir(perfil, { recursive: true });
  const puerto = await puertoLibre();
  const proceso = spawn(ejecutable, [
    '--headless=new', '--disable-gpu', '--disable-software-rasterizer',
    '--no-sandbox', '--remote-allow-origins=*', `--remote-debugging-port=${puerto}`,
    `--user-data-dir=${perfil}`, '--no-first-run', '--no-default-browser-check',
    'about:blank',
  ], { windowsHide: true, stdio: 'ignore' });
  for (let intento = 0; intento < 40; intento += 1) {
    try {
      const paginas = await (await fetch(`http://127.0.0.1:${puerto}/json/list`)).json();
      const pagina = paginas.find((elemento) => elemento.type === 'page');
      if (pagina?.webSocketDebuggerUrl) return { proceso, perfil, socket: pagina.webSocketDebuggerUrl };
    } catch { /* Chrome todavía está arrancando. */ }
    await new Promise((resolver) => setTimeout(resolver, 250));
  }
  cerrarChrome(proceso);
  throw new Error('Chrome no abrió el endpoint CDP.');
}

function cerrarChrome(proceso) {
  if (!proceso?.pid) return;
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/PID', String(proceso.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
  } else {
    proceso.kill('SIGTERM');
  }
}

class CDP {
  constructor(url) { this.url = url; this.id = 0; this.pendientes = new Map(); this.eventos = new Map(); }
  async conectar() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolver, rechazar) => {
      this.socket.addEventListener('open', resolver, { once: true });
      this.socket.addEventListener('error', rechazar, { once: true });
    });
    this.socket.addEventListener('message', async (evento) => {
      const mensaje = JSON.parse(typeof evento.data === 'string' ? evento.data : await evento.data.text());
      if (mensaje.id) {
        const pendiente = this.pendientes.get(mensaje.id);
        if (!pendiente) return;
        this.pendientes.delete(mensaje.id);
        if (mensaje.error) pendiente.rechazar(new Error(mensaje.error.message));
        else pendiente.resolver(mensaje.result);
      } else if (mensaje.method) {
        for (const atender of this.eventos.get(mensaje.method) || []) atender(mensaje.params);
      }
    });
  }
  escuchar(nombre, atender) {
    this.eventos.set(nombre, [...(this.eventos.get(nombre) || []), atender]);
  }
  enviar(nombre, parametros = {}) {
    const id = ++this.id;
    return new Promise((resolver, rechazar) => {
      this.pendientes.set(id, { resolver, rechazar });
      this.socket.send(JSON.stringify({ id, method: nombre, params: parametros }));
    });
  }
  async cerrar() {
    this.socket?.close();
    await new Promise((resolver) => setTimeout(resolver, 100));
  }
}

async function evaluar(cdp, expresion) {
  const respuesta = await cdp.enviar('Runtime.evaluate', {
    expression: expresion, awaitPromise: true, returnByValue: true,
  });
  if (respuesta.exceptionDetails) throw new Error(respuesta.exceptionDetails.text);
  return respuesta.result?.value;
}

async function revisarPagina(cdp, origen, pagina, ancla, escenario, carpeta, errores, recursosFallidos) {
  await cdp.enviar('Emulation.setDeviceMetricsOverride', {
    width: escenario.ancho, height: escenario.alto, deviceScaleFactor: 1, mobile: false,
  });
  await cdp.enviar('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-color-scheme', value: escenario.tema }],
  });
  const inicioTema = await cdp.enviar('Page.addScriptToEvaluateOnNewDocument', {
    source: `try { localStorage.setItem('edusdk-theme', '${escenario.tema}'); } catch {}`,
  });
  await cdp.enviar('Page.navigate', {
    url: `${origen}/${pagina}?escenario=${escenario.nombre}${ancla ? `#${ancla}` : ''}`,
  });
  await new Promise((resolver) => setTimeout(resolver, 500));
  await cdp.enviar('Page.removeScriptToEvaluateOnNewDocument', { identifier: inicioTema.identifier });
  await evaluar(cdp, `(async () => {
    localStorage.setItem('edusdk-theme', '${escenario.tema}');
    document.documentElement.setAttribute('data-theme', '${escenario.tema}');
    await document.fonts.ready;
    for (const imagen of document.images) imagen.loading = 'eager';
    await Promise.race([
      Promise.all([...document.images].map((imagen) => imagen.complete
        ? Promise.resolve()
        : new Promise((resolver) => {
            imagen.addEventListener('load', resolver, { once: true });
            imagen.addEventListener('error', resolver, { once: true });
          }))),
      new Promise((resolver) => setTimeout(resolver, 5000)),
    ]);
    await new Promise((resolver) => setTimeout(resolver, 350));
    return true;
  })()`);
  const diagnostico = await evaluar(cdp, `(() => {
    const visible = (elemento) => {
      const estilo = getComputedStyle(elemento);
      const caja = elemento.getBoundingClientRect();
      return estilo.display !== 'none' && estilo.visibility !== 'hidden'
        && caja.width > 0 && caja.height > 0;
    };
    const imagenes = [...document.images].map((imagen) => ({
      ruta: imagen.getAttribute('src'), cargada: imagen.complete && imagen.naturalWidth > 0,
      visible: visible(imagen), anchoNatural: imagen.naturalWidth,
      opacidad: Number(getComputedStyle(imagen).opacity),
    }));
    const tramas = imagenes.filter((imagen) => imagen.ruta?.includes('Trama_CFab'));
    const logos = imagenes.filter((imagen) => imagen.ruta?.includes('Logos_CFAB_2026_con-Ministerio'));
    const isotipos = imagenes.filter((imagen) => imagen.ruta?.includes('logo-circular-fab.png'));
    const hojas = [...document.querySelectorAll('link[rel="stylesheet"]')].map((hoja) => ({
      ruta: hoja.getAttribute('href'), cargada: !!hoja.sheet,
    }));
    const enlaces = [...document.querySelectorAll('a[href]')].map((enlace) => ({
      texto: enlace.textContent.trim().replace(/\\s+/g, ' '),
      ruta: enlace.getAttribute('href'),
    }));
    const botones = [...document.querySelectorAll('a.cf-button, button.cf-button')].map((boton) => ({
      texto: boton.textContent.trim().replace(/\\s+/g, ' '),
      ancho: Math.round(boton.getBoundingClientRect().width),
      desborda: boton.scrollWidth > boton.clientWidth + 1,
      color: getComputedStyle(boton).color,
      fondo: getComputedStyle(boton).backgroundColor,
    }));
    const cabecera = document.querySelector('header');
    const rect = cabecera?.getBoundingClientRect();
    return {
      titulo: document.title, tema: document.documentElement.getAttribute('data-theme'),
      viewport: innerWidth, anchoDocumento: document.documentElement.scrollWidth,
      desbordamientoHorizontal: document.documentElement.scrollWidth > innerWidth + 1,
      cabecera: rect ? { ancho: rect.width, izquierda: rect.left, alto: rect.height } : null,
      tipografia: getComputedStyle(document.body).fontFamily,
      colores: { fondo: getComputedStyle(document.body).backgroundColor,
        texto: getComputedStyle(document.body).color },
      hojas, imagenes, tramas, logos, isotipos, enlaces, botones,
    };
  })()`);
  const captura = await cdp.enviar('Page.captureScreenshot', {
    format: 'png', fromSurface: true, captureBeyondViewport: true,
  });
  const archivo = join(carpeta, `${escenario.nombre}.png`);
  await writeFile(archivo, Buffer.from(captura.data, 'base64'));
  return { escenario, archivo: relative(raiz, archivo), diagnostico,
    errores: [...errores], recursosFallidos: [...recursosFallidos] };
}

async function principal() {
  const entrada = (process.argv[2] || '').replaceAll('\\', '/');
  const [pagina, ancla = ''] = entrada.split('#');
  if (!pagina || !pagina.endsWith('.html') || pagina.startsWith('/') || pagina.includes('..')
    || (ancla && !/^[a-z0-9_-]+$/i.test(ancla)) || entrada.split('#').length > 2) {
    throw new Error('Uso: node visual-harness/run.mjs preparacion.html o "inicio.html#rutas"');
  }
  const archivo = resolve(raiz, pagina);
  if (!dentroDeRaiz(archivo) || !(await stat(archivo)).isFile()) throw new Error('Página fuera del proyecto o inexistente.');
  const carpeta = join(salida, pagina.replaceAll('/', '--').replace(/\.html$/, '') + (ancla ? `--${ancla}` : ''));
  await mkdir(carpeta, { recursive: true });
  const web = await servir();
  let chrome;
  let cdp;
  try {
    chrome = await abrirChrome();
    cdp = new CDP(chrome.socket);
    await cdp.conectar();
    await Promise.all(['Page.enable', 'Runtime.enable', 'Network.enable'].map((nombre) => cdp.enviar(nombre)));
    let errores = [];
    let recursosFallidos = [];
    cdp.escuchar('Runtime.consoleAPICalled', (evento) => {
      if (evento.type === 'error') errores.push(evento.args?.map((arg) => arg.value ?? arg.description).join(' '));
    });
    cdp.escuchar('Runtime.exceptionThrown', (evento) => errores.push(evento.exceptionDetails?.text || 'Error JavaScript'));
    cdp.escuchar('Network.loadingFailed', (evento) => recursosFallidos.push({ error: evento.errorText }));
    cdp.escuchar('Network.responseReceived', (evento) => {
      if (evento.response.status >= 400) recursosFallidos.push({
        ruta: evento.response.url, estado: evento.response.status,
      });
    });
    const resultados = [];
    for (const escenario of escenarios) {
      errores = [];
      recursosFallidos = [];
      resultados.push(await revisarPagina(cdp, web.origen, pagina, ancla, escenario, carpeta, errores, recursosFallidos));
    }
    const fallos = resultados.flatMap(({ escenario, diagnostico, errores: erroresJs, recursosFallidos: fallidos }) => {
      const prefijo = escenario.nombre;
      return [
        ...erroresJs.map((error) => `${prefijo}: JS: ${error}`),
        ...fallidos.map((error) => `${prefijo}: recurso: ${JSON.stringify(error)}`),
        ...diagnostico.hojas.filter((hoja) => !hoja.cargada).map((hoja) => `${prefijo}: CSS: ${hoja.ruta}`),
        ...diagnostico.imagenes.filter((imagen) => !imagen.cargada).map((imagen) => `${prefijo}: imagen: ${imagen.ruta}`),
        ...(diagnostico.desbordamientoHorizontal ? [`${prefijo}: desbordamiento horizontal`] : []),
        ...diagnostico.botones.filter((boton) => boton.desborda).map((boton) => `${prefijo}: botón desborda: ${boton.texto}`),
      ];
    });
    const diferenciasIdentidad = resultados.flatMap(({ escenario, diagnostico }) => {
      const prefijo = escenario.nombre;
      const variante = escenario.tema === 'dark' ? '_blanco.png' : 'con-Ministerio.png';
      return [
        ...(diagnostico.tramas.some((trama) => trama.cargada && trama.visible && trama.opacidad > 0)
          ? [] : [`${prefijo}: trama corporativa ausente o invisible`]),
        ...(diagnostico.logos.some((logo) => logo.ruta.endsWith(variante) && logo.cargada && logo.visible)
          ? [] : [`${prefijo}: logotipo institucional auténtico ausente o invisible`]),
        ...(diagnostico.isotipos.some((isotipo) => isotipo.cargada && isotipo.visible)
          ? [] : [`${prefijo}: isotipo Circular FAB ausente o invisible`]),
      ];
    });
    const enlacesRotos = resultados[0].diagnostico.enlaces
      .filter((enlace) => enlace.ruta && !enlace.ruta.startsWith(('#')) && !/^https?:/i.test(enlace.ruta))
      .filter((enlace) => !existsSync(resolve(dirname(archivo), enlace.ruta.split(/[?#]/)[0])))
      .map((enlace) => enlace.ruta);
    fallos.push(...enlacesRotos.map((enlace) => `enlace local roto: ${enlace}`));
    const informe = { pagina: entrada, origen: 'CircularFAB-EduSDK/visual-harness/run.mjs',
      generado: new Date().toISOString(), resultados, fallos, diferenciasIdentidad,
      referenciaAprobada: null };
    await writeFile(join(carpeta, 'informe.json'), JSON.stringify(informe, null, 2), 'utf8');
    console.log(`[visual-harness] ${entrada}: ${fallos.length} fallos técnicos, ${diferenciasIdentidad.length} diferencias de identidad; informe y capturas en ${relative(raiz, carpeta)}`);
    for (const fallo of fallos) console.log(`[visual-harness] ${fallo}`);
    for (const diferencia of diferenciasIdentidad) console.log(`[visual-harness] ${diferencia}`);
    if (fallos.length || diferenciasIdentidad.length) process.exitCode = 1;
  } finally {
    await cdp?.cerrar();
    cerrarChrome(chrome?.proceso);
    if (chrome?.perfil && dentroDeRaiz(chrome.perfil, salida)) {
      for (let intento = 0; intento < 20; intento += 1) {
        try {
          await rm(chrome.perfil, { recursive: true, force: true });
          break;
        } catch (error) {
          if (intento === 19) console.warn(`[visual-harness] Perfil temporal pendiente de limpieza: ${error.message}`);
          else await new Promise((resolver) => setTimeout(resolver, 250));
        }
      }
    }
    web.servidor.closeAllConnections?.();
    await new Promise((resolver) => web.servidor.close(resolver));
  }
}

principal().catch((error) => { console.error(`[visual-harness] ERROR: ${error.message}`); process.exitCode = 1; });
