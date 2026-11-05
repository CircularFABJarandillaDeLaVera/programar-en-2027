"""Comprueba los archivos que recibirá la persona participante."""

from html.parser import HTMLParser
from pathlib import Path
import tempfile
import unittest
from zipfile import ZipFile


RAIZ = Path(__file__).resolve().parents[2]
FUENTES = Path(__file__).resolve().parent
DESCARGAS = RAIZ / "assets/descargas"
PAQUETES = {
    "Windows": ("preparar-python-windows-2027.zip", "Preparar_curso.cmd"),
    "Ubuntu": ("Programar_2027_Instalacion_Ubuntu.zip", "Preparar_curso.sh"),
    "macOS": ("Programar_2027_Instalacion_macOS.zip", "Preparar_curso.command"),
}


class EnlacesZip(HTMLParser):
    def __init__(self):
        super().__init__()
        self.enlaces = []

    def handle_starttag(self, etiqueta, atributos):
        atributos = dict(atributos)
        if etiqueta == "a" and "download" in atributos and atributos.get("href", "").endswith(".zip"):
            self.enlaces.append((atributos["href"], ""))


class PruebaPaquetes(unittest.TestCase):
    def test_los_tres_enlaces_apuntan_a_los_paquetes(self):
        pagina = (RAIZ / "preparacion.html").read_text(encoding="utf-8")
        self.assertIn("Si quieres trabajar en tu equipo, descarga el paquete correspondiente a tu sistema operativo", pagina)
        analizador = EnlacesZip()
        analizador.feed(pagina)
        encontrados = {ruta for ruta, _ in analizador.enlaces}
        esperados = {f"assets/descargas/{nombre}" for nombre, _ in PAQUETES.values()}
        self.assertEqual(encontrados, esperados)
        for ruta in encontrados:
            self.assertTrue((RAIZ / ruta).is_file(), ruta)

    def test_leeme_extraidos_con_bom_y_tildes(self):
        for sistema, (nombre_zip, _) in PAQUETES.items():
            with self.subTest(sistema=sistema), ZipFile(DESCARGAS / nombre_zip) as paquete, \
                 tempfile.TemporaryDirectory() as temporal:
                self.assertIsNone(paquete.testzip())
                paquete.extractall(temporal)
                contenido = (Path(temporal) / "LEEME.txt").read_bytes()
                self.assertTrue(contenido.startswith(bytes.fromhex("efbbbf")))
                texto = contenido.decode("utf-8-sig", errors="strict")
                self.assertTrue(texto.startswith("Empieza aqu\u00ed"))
                self.assertIn("\u00ed", texto)
                self.assertIn("\u00f3", texto)
                self.assertNotIn("\ufffd", texto)
                fuente = {"Windows": "windows", "Ubuntu": "ubuntu", "macOS": "macos"}[sistema]
                esperado = (FUENTES / fuente / "texto-leeme.md").read_text(encoding="utf-8")
                self.assertEqual(texto, esperado)

    def test_entradas_unix_corresponden_a_las_fuentes(self):
        for sistema, carpeta in (("Ubuntu", "ubuntu"), ("macOS", "macos")):
            with self.subTest(sistema=sistema):
                nombre_zip, lanzador = PAQUETES[sistema]
                guia = f"Guia_instalacion_Programar_2027_{sistema}.docx"
                with ZipFile(DESCARGAS / nombre_zip) as paquete:
                    self.assertEqual(set(paquete.namelist()), {guia, "LEEME.txt", "preparar.py", lanzador})
                    self.assertEqual(paquete.read(guia), (RAIZ / guia).read_bytes())
                    self.assertEqual(paquete.read("preparar.py"), (FUENTES / "preparar.py").read_bytes())
                    self.assertEqual(paquete.read(lanzador), (FUENTES / carpeta / lanzador).read_bytes())
                    self.assertEqual((paquete.getinfo(lanzador).external_attr >> 16) & 0o111, 0o111)
                    self.assertFalse(any(entrada.lower().endswith((".cmd", ".bat", ".exe", ".ps1"))
                                         for entrada in paquete.namelist()))

    def test_windows_conserva_los_tres_archivos(self):
        nombre_zip, _ = PAQUETES["Windows"]
        with ZipFile(DESCARGAS / nombre_zip) as paquete:
            self.assertEqual(set(paquete.namelist()), {"LEEME.txt", "preparar.py", "Preparar_curso.cmd"})


if __name__ == "__main__":
    unittest.main()
