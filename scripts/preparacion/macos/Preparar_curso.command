#!/usr/bin/env bash
set -u

carpeta_paquete="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
preparador_iniciado=0

al_terminar() {
    resultado=$?
    if [ "$preparador_iniciado" -eq 0 ]; then
        printf '\nRESUMEN DE PREPARACIÓN\n  Preparado: ningún programa instalado por este lanzador.\n  Pendiente: resuelve el mensaje anterior y vuelve a ejecutar.\n'
    fi
    if [ "$resultado" -ne 0 ]; then
        printf '\nLa preparación tiene pasos pendientes. Lee el resumen anterior y vuelve a ejecutar este archivo.\n'
    fi
    if [ -t 0 ]; then
        printf '\nPulsa Intro para cerrar esta ventana... '
        read -r _ || true
    fi
}
trap al_terminar EXIT

printf 'PREPARAR PROGRAMAR EN 2027 — macOS\n'
printf 'Se comprobarán Python, Git, VS Code y la primera práctica.\n'
printf 'Cada instalación o cambio pedirá confirmación antes de comenzar.\n\n'

if [ ! -f "$carpeta_paquete/preparar.py" ]; then
    printf 'Falta preparar.py. Extrae todo el ZIP y conserva los archivos juntos.\n' >&2
    exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
    printf 'No se encuentra Python 3. Descarga el instalador para macOS desde:\n'
    printf 'https://www.python.org/downloads/macos/\n'
    printf 'Elige la versión adecuada, instálala y vuelve a ejecutar este archivo.\n'
    printf '¿Abrir ahora la página oficial en tu navegador? [s/N]: '
    read -r respuesta || respuesta=''
    case "$respuesta" in
        s|S|si|SI|sí|SÍ) open 'https://www.python.org/downloads/macos/' || true ;;
    esac
    exit 1
fi

preparador_iniciado=1
python3 "$carpeta_paquete/preparar.py"
