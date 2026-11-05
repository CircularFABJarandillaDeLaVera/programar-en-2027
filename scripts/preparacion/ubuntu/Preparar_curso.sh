#!/usr/bin/env bash
set -u

carpeta_paquete="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
preparador_iniciado=0
preparado_shell='ningún programa nuevo confirmado'

al_terminar() {
    resultado=$?
    if [ "$preparador_iniciado" -eq 0 ]; then
        printf '\nRESUMEN DE PREPARACIÓN\n  Preparado: %s\n  Pendiente: resuelve el mensaje anterior y vuelve a ejecutar.\n' "$preparado_shell"
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

printf 'PREPARAR PROGRAMAR EN 2027 — UBUNTU\n'
printf 'Se comprobarán Python, Git, VS Code y la primera práctica.\n'
printf 'Cada instalación o cambio pedirá confirmación antes de comenzar.\n\n'

if [ ! -f "$carpeta_paquete/preparar.py" ]; then
    printf 'Falta preparar.py. Extrae todo el ZIP y conserva los archivos juntos.\n' >&2
    exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
    printf 'No se encuentra Python 3. Ubuntu puede instalar python3, python3-pip y python3-venv con apt.\n'
    printf 'sudo pedirá tu contraseña solo para instalar esos paquetes. Necesitas Internet.\n'
    printf '¿Instalarlos ahora? [s/N]: '
    read -r respuesta || respuesta=''
    case "$respuesta" in
        s|S|si|SI|sí|SÍ)
            if ! command -v sudo >/dev/null 2>&1 || ! command -v apt >/dev/null 2>&1; then
                printf 'No se encuentran sudo y apt. Sigue la guía manual de Ubuntu.\n' >&2
                exit 1
            fi
            sudo apt update && sudo apt install -y python3 python3-pip python3-venv || exit 1
            preparado_shell='Python 3, pip y venv instalados mediante apt'
            ;;
        *)
            printf 'Python queda pendiente. Consulta la guía de Ubuntu y vuelve a ejecutar este archivo.\n'
            exit 1
            ;;
    esac
fi

if ! command -v python3 >/dev/null 2>&1; then
    printf 'Python 3 sigue sin estar disponible. Cierra y abre Terminal; después repite.\n' >&2
    exit 1
fi

preparador_iniciado=1
python3 "$carpeta_paquete/preparar.py"
