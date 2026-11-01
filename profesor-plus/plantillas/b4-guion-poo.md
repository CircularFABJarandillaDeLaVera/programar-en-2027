# B4 Guion docente - Programacion orientada a objetos

## Secuencia recomendada

1. Mostrar un producto como diccionario.
2. Separar funciones que trabajan sobre ese diccionario.
3. Preguntar que ocurre cuando hay muchos productos y reglas repetidas.
4. Crear `class Producto`.
5. Instanciar dos productos y comparar su estado.
6. Anadir metodos con `self`.
7. Introducir `__init__` para evitar inicializacion repetida.
8. Encapsular precio con validacion simple.
9. Componer `Producto` con `AuditoriaMercado`.
10. Crear `ProductoHardware` y `ProductoLicencia` con herencia y `super()`.
11. Sobrescribir un metodo y observar polimorfismo.
12. Conectar todo con el Proyecto aplicado 2.

## Demostracion base

```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def resumen(self):
        return f"{self.nombre}: {self.precio} euros"


teclado = Producto("Teclado", 29.90)
raton = Producto("Raton", 14.50)

print(teclado.resumen())
print(raton.resumen())
```

## Ritmo de aula

- Explicacion breve: una clase agrupa datos y comportamiento.
- Codigo minimo: una clase con dos atributos y un metodo.
- Predecir: que imprimen dos instancias distintas.
- Ejecutar: observar que cada objeto conserva su propio estado.
- Modificar: cambiar un precio y comprobar que no cambia el otro.
- Error util: quitar `self` en un metodo.
- Mini-reto: anadir un metodo `aplicar_descuento`.
- Feedback: justificar si el metodo pertenece al objeto o a una funcion externa.

