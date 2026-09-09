import unittest

from participantes import registrar_participante


class TestRegistroParticipantes(unittest.TestCase):
    def test_edad_valida(self):
        resultado = registrar_participante("Ana", 35)
        self.assertEqual(resultado, "Participante registrado: Ana (35 años)")

    def test_edad_negativa_debe_rechazarse(self):
        resultado = registrar_participante("Luis", -15)
        self.assertEqual(
            resultado,
            "Error: la edad debe estar entre 0 y 120 años.",
        )

    def test_edad_mayor_de_120_debe_rechazarse(self):
        resultado = registrar_participante("Marta", 130)
        self.assertEqual(
            resultado,
            "Error: la edad debe estar entre 0 y 120 años.",
        )


if __name__ == "__main__":
    unittest.main()
