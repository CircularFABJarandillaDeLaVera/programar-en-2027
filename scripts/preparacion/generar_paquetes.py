"""Regenera los tres ZIP de preparación desde las fuentes locales.

El CMD y preparar.py de Windows se conservan del ZIP publicado; solo se reemplaza
su LEEME. Las guías DOCX de Ubuntu y macOS proceden de la raíz del proyecto.
"""

from __future__ import annotations

from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED


RAIZ = Path(__file__).resolve().parents[2]
FUENTES = Path(__file__).resolve().parent
DESCARGAS = RAIZ / "assets/descargas"
FECHA_ZIP = (2026, 11, 5, 0, 0, 0)


def entrada(nombre: str, contenido: bytes, ejecutable: bool = False) -> tuple[ZipInfo, bytes]:
    info = ZipInfo(nombre, date_time=FECHA_ZIP)
    info.compress_type = ZIP_DEFLATED
    info.create_system = 3
    info.external_attr = (0o100755 if ejecutable else 0o100644) << 16
    return info, contenido


def leeme_bom(sistema: str) -> bytes:
    texto = (FUENTES / sistema / "texto-leeme.md").read_text(encoding="utf-8")
    return texto.encode("utf-8-sig")


def escribir_zip(destino: Path, archivos: list[tuple[ZipInfo, bytes]]) -> None:
    temporal = destino.with_suffix(".zip.tmp")
    with ZipFile(temporal, "w") as paquete:
        for info, contenido in archivos:
            paquete.writestr(info, contenido)
    with ZipFile(temporal) as paquete:
        if paquete.testzip() is not None:
            raise RuntimeError(f"ZIP dañado: {temporal}")
    temporal.replace(destino)
    print(destino.relative_to(RAIZ))


def main() -> None:
    windows = DESCARGAS / "preparar-python-windows-2027.zip"
    with ZipFile(windows) as paquete:
        if set(paquete.namelist()) != {"LEEME.txt", "preparar.py", "Preparar_curso.cmd"}:
            raise RuntimeError("El paquete Windows cambió de estructura; revísalo antes de regenerar.")
        preparar_windows = paquete.read("preparar.py")
        lanzar_windows = paquete.read("Preparar_curso.cmd")
    escribir_zip(windows, [
        entrada("LEEME.txt", leeme_bom("windows")),
        entrada("preparar.py", preparar_windows),
        entrada("Preparar_curso.cmd", lanzar_windows),
    ])

    preparar_unix = (FUENTES / "preparar.py").read_bytes()
    for sistema, carpeta, lanzador in (
        ("Ubuntu", "ubuntu", "Preparar_curso.sh"),
        ("macOS", "macos", "Preparar_curso.command"),
    ):
        guia = RAIZ / f"Guia_instalacion_Programar_2027_{sistema}.docx"
        escribir_zip(DESCARGAS / f"Programar_2027_Instalacion_{sistema}.zip", [
            entrada(guia.name, guia.read_bytes()),
            entrada("LEEME.txt", leeme_bom(carpeta)),
            entrada("preparar.py", preparar_unix),
            entrada(lanzador, (FUENTES / carpeta / lanzador).read_bytes(), ejecutable=True),
        ])


if __name__ == "__main__":
    main()
