"""Comprobaciones locales del preparador, sin instalar programas."""

import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

import preparar


class PruebaPreparador(unittest.TestCase):
    def test_primera_practica_se_crea_y_se_conserva_al_repetir(self):
        with tempfile.TemporaryDirectory() as temporal:
            curso = Path(temporal) / "programar-2027"
            practica = curso / "primera-practica"

            def crear_venv(argumentos, **_):
                self.assertEqual(argumentos[1:3], ["-m", "venv"])
                python = practica / ".venv/bin/python"
                python.parent.mkdir(parents=True)
                python.write_text("python simulado", encoding="utf-8")

            with patch.object(preparar, "CARPETA_CURSO", curso), \
                 patch.object(preparar, "CARPETA_PRACTICA", practica), \
                 patch.object(preparar, "confirmar", return_value=True) as confirmar, \
                 patch.object(preparar, "ejecutar", side_effect=crear_venv) as ejecutar:
                preparador = preparar.Preparador()
                preparador.primera_practica()
                self.assertEqual(confirmar.call_count, 1)
                self.assertEqual(ejecutar.call_count, 1)
                self.assertFalse(preparador.pendiente)
                self.assertIn("Hola desde Programar en 2027", (practica / "hola.py").read_text(encoding="utf-8"))
                ajustes = json.loads((practica / ".vscode/settings.json").read_text(encoding="utf-8"))
                self.assertEqual(ajustes["python.defaultInterpreterPath"], str(practica / ".venv/bin/python"))
                (practica / "hola.py").write_text("mi ejercicio\n", encoding="utf-8")

            with patch.object(preparar, "CARPETA_CURSO", curso), \
                 patch.object(preparar, "CARPETA_PRACTICA", practica), \
                 patch.object(preparar, "confirmar", side_effect=AssertionError("No debe pedir cambios")), \
                 patch.object(preparar, "ejecutar", side_effect=AssertionError("No debe reinstalar")):
                repetir = preparar.Preparador()
                repetir.primera_practica()
                self.assertFalse(repetir.pendiente)
                self.assertEqual((practica / "hola.py").read_text(encoding="utf-8"), "mi ejercicio\n")

    def test_git_presente_no_se_reinstala(self):
        respuesta = subprocess.CompletedProcess(["git", "--version"], 0, "git version 2.0\n", "")
        with patch.object(preparar.shutil, "which", return_value="/usr/bin/git"), \
             patch.object(preparar.subprocess, "run", return_value=respuesta), \
             patch.object(preparar, "confirmar", side_effect=AssertionError("No debe pedir instalación")), \
             patch.object(preparar, "ejecutar", side_effect=AssertionError("No debe instalar")):
            preparador = preparar.Preparador()
            preparador.git()
            self.assertEqual(preparador.preparado, ["git version 2.0"])
            self.assertFalse(preparador.pendiente)


if __name__ == "__main__":
    unittest.main()
