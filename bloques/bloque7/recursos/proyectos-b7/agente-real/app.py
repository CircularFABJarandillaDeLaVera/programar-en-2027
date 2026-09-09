from participantes import registrar_participante


def main() -> None:
    print("=== REGISTRO DE PARTICIPANTES ===")
    nombre = input("Nombre: ").strip()

    try:
        edad = int(input("Edad: "))
    except ValueError:
        print("Error: la edad debe ser un número entero.")
        return

    resultado = registrar_participante(nombre, edad)
    print(resultado)


if __name__ == "__main__":
    main()
