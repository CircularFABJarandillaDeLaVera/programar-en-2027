"""Pruebas del control de IA. Solo libreria estandar (unittest).

Ninguna prueba necesita Ollama ni red: las respuestas de modelo
se inyectan como diccionarios. Si Ollama no esta disponible en el
aula, eso es opcional/no ejecutado, nunca un fallo.
"""

import unittest

import explicar


class TestDecisionPython(unittest.TestCase):
    def test_stock_cero_es_sin_stock(self):
        decision, _ = explicar.decidir(0, 5)
        self.assertEqual(decision, "SIN_STOCK")

    def test_stock_bajo_pide_material(self):
        decision, accion = explicar.decidir(3, 5)
        self.assertEqual(decision, "PEDIR_MATERIAL")
        self.assertEqual(accion, explicar.ACCIONES_BASE["PEDIR_MATERIAL"])

    def test_stock_suficiente_es_ok(self):
        decision, _ = explicar.decidir(5, 5)
        self.assertEqual(decision, "STOCK_OK")


class TestValidacion(unittest.TestCase):
    def test_respuesta_valida_se_acepta(self):
        respuesta = {
            "explicacion": "La pieza Broca 5mm tiene 3 unidades (minimo 5). "
                           "La decision del sistema es PEDIR_MATERIAL.",
            "accion": explicar.ACCIONES_BASE["PEDIR_MATERIAL"],
        }
        aceptada, motivo = explicar.validar_respuesta(respuesta, "PEDIR_MATERIAL", 3, 5)
        self.assertTrue(aceptada)
        self.assertEqual(motivo, "RESPUESTA ACEPTADA")

    def test_respuesta_inventada_se_rechaza(self):
        respuesta = {
            "explicacion": "La pieza tiene 3 unidades pero hacen falta 99. "
                           "La decision es PEDIR_MATERIAL.",
            "accion": explicar.ACCIONES_BASE["PEDIR_MATERIAL"],
        }
        aceptada, motivo = explicar.validar_respuesta(respuesta, "PEDIR_MATERIAL", 3, 5)
        self.assertFalse(aceptada)
        self.assertIn("no permitido", motivo)

    def test_respuesta_con_termino_prohibido_se_rechaza(self):
        respuesta = {
            "explicacion": "La pieza tiene 3 unidades. Por contaminación "
                           "la decision es PEDIR_MATERIAL.",
            "accion": explicar.ACCIONES_BASE["PEDIR_MATERIAL"],
        }
        aceptada, motivo = explicar.validar_respuesta(respuesta, "PEDIR_MATERIAL", 3, 5)
        self.assertFalse(aceptada)
        self.assertIn("prohibido", motivo)

    def test_accion_cambiada_se_rechaza(self):
        respuesta = {
            "explicacion": "La decision del sistema es PEDIR_MATERIAL con 3 unidades.",
            "accion": explicar.ACCIONES_BASE["STOCK_OK"],
        }
        aceptada, _ = explicar.validar_respuesta(respuesta, "PEDIR_MATERIAL", 3, 5)
        self.assertFalse(aceptada)

    def test_no_diccionario_se_rechaza(self):
        aceptada, _ = explicar.validar_respuesta("todo bien", "PEDIR_MATERIAL", 3, 5)
        self.assertFalse(aceptada)


class TestFallback(unittest.TestCase):
    def test_sin_ia_usa_determinista(self):
        resultado = explicar.explicar("Broca 5mm", 3, 5, sin_ia=True)
        self.assertEqual(resultado["decision"], "PEDIR_MATERIAL")
        self.assertIn("--sin-ia", resultado["origen"])
        self.assertIn("3", resultado["explicacion"])

    def test_demo_valida_se_acepta(self):
        resultado = explicar.explicar("Broca 5mm", 3, 5,
                                      demo_respuesta="ejemplo-respuesta-valida.json")
        self.assertEqual(resultado["validacion"], "RESPUESTA ACEPTADA")

    def test_demo_inventada_cae_a_fallback(self):
        resultado = explicar.explicar("Broca 5mm", 3, 5,
                                      demo_respuesta="ejemplo-respuesta-inventada.json")
        self.assertIn("DESCARTADA", resultado["validacion"])
        self.assertEqual(resultado["origen"], "FALLBACK DETERMINISTA")


if __name__ == "__main__":
    unittest.main()
