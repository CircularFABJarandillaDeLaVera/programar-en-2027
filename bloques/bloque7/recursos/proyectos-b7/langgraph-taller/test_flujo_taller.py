"""Pruebas del taller LangGraph. Solo libreria estandar (unittest).

La regla pura se prueba siempre. El grafo completo se prueba solo
si langgraph esta instalado; si no, queda NO_VERIFICADO, no es fallo.
"""

import unittest

import flujo_taller as taller


class TestReglaPura(unittest.TestCase):
    def test_stock_cero_es_sin_stock(self):
        self.assertEqual(taller.decidir_siguiente(0, 5), "sin_stock")

    def test_stock_negativo_es_sin_stock(self):
        self.assertEqual(taller.decidir_siguiente(-2, 5), "sin_stock")

    def test_stock_bajo_pide_material(self):
        self.assertEqual(taller.decidir_siguiente(3, 5), "pedir_material")

    def test_stock_igual_al_minimo_esta_disponible(self):
        self.assertEqual(taller.decidir_siguiente(5, 5), "disponible")

    def test_stock_alto_esta_disponible(self):
        self.assertEqual(taller.decidir_siguiente(20, 5), "disponible")


class TestNodos(unittest.TestCase):
    def test_evaluar_estado_pide_material_con_demo(self):
        estado = {"stock": 3, "stock_minimo": 5, "datos_validos": True}
        resultado = taller.evaluar_estado(estado)
        self.assertEqual(resultado["decision"], "PEDIR_MATERIAL")
        self.assertEqual(resultado["ruta"], "pedir_material")

    def test_datos_incompletos_van_a_sin_stock(self):
        estado = {"stock": None, "stock_minimo": 5, "datos_validos": False}
        resultado = taller.evaluar_estado(estado)
        self.assertEqual(resultado["decision"], "SIN_STOCK")


@unittest.skipUnless(taller.HAY_LANGGRAPH, "langgraph no instalado: grafo NO_VERIFICADO")
class TestGrafo(unittest.TestCase):
    def test_grafo_lleva_a_pedir_material(self):
        resultado = taller.ejecutar_flujo()
        self.assertEqual(resultado["ruta"], "pedir_material")
        self.assertEqual(resultado["decision"], "PEDIR_MATERIAL")


if __name__ == "__main__":
    unittest.main()
