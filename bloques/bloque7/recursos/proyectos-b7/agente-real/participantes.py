"""Funciones del pequeño registro de participantes.

Este archivo contiene intencionadamente un fallo:
la edad no se valida correctamente.
"""


def registrar_participante(nombre: str, edad: int) -> str:
    """Registra un participante y devuelve un mensaje legible."""
    if not isinstance(edad, int):
        return "Error: la edad debe ser un número entero."

    # FALLO INTENCIONADO PARA LA PRACTICA:
    # No se comprueba que la edad esté entre 0 y 120.
    return f"Participante registrado: {nombre} ({edad} años)"
