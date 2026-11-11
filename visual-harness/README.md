# Revisión visual de Programar en 2027

Adaptación mínima del procedimiento de servidor local y Chrome/CDP de
`../../CircularFAB-EduSDK/visual-harness/run.mjs` (proyecto hermano
`C:/Users/circularfab/Documents/DronLab/DronLab-Organizado/CircularFAB-EduSDK/`).
EduSDK se consulta en modo lectura; este ejecutor no modifica sus archivos.

## Requisitos

- Node.js 22 o posterior, sin paquetes externos.
- Google Chrome. Si está en otra ubicación, indica `EDUSDK_CHROME`.

## Uso

Desde la raíz de Programar en 2027:

```powershell
node visual-harness/run.mjs preparacion.html
```

Se puede pasar cualquier HTML del proyecto, por ejemplo `inicio.html`.
Para capturar un panel que se abre por ancla, usa
`node visual-harness/run.mjs "inicio.html#rutas"`; sus resultados se guardan
en `visual-harness/.out/inicio--rutas/`.
El ejecutor sirve el repositorio solo en `127.0.0.1`, abre Chrome mediante
CDP y genera cuatro capturas: escritorio (1440 × 900) y móvil (390 × 844),
en claro y oscuro. Comprueba errores de red y JavaScript, carga de CSS e
imágenes, presencia de trama, isotipo y logotipos institucionales, anchura
de la página, enlaces locales y desbordamiento de botones. El informe registra
tipografía, colores y enlaces para revisión. Una ausencia de la trama, el
isotipo o la variante institucional correspondiente al tema se informa como
diferencia de identidad y devuelve código de salida 1.

Las capturas y el `informe.json` quedan en
`visual-harness/.out/<pagina>/`, carpeta temporal ignorada por Git. La
valoración estética y la comparación con una referencia válida requieren
revisión humana. El ejecutor no crea ni aprueba referencias automáticamente.
