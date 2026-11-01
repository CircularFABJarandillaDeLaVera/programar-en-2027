# Proyecto aplicado 2 · Organiza productos con clases

Continuación conceptual de **Proyecto aplicado 1 · Calcula y guarda precios**:
en B3 separaste funciones y módulos; aquí organizas el mismo problema con
objetos y responsabilidades. La carpeta descargada es una base nueva e
independiente: no reutiliza automáticamente los archivos ni los datos de B3.
Solo biblioteca estándar (`csv`, `json`, `datetime`). Sin conceptos avanzados.

## Estructura

```text
proyecto-sami-oop/
  analizador.py    # Producto, ProductoHardware, ProductoLicencia, AuditoriaMercado
  persistencia.py  # ManejadorDatos
  main.py          # entrada: pide datos, crea objetos, genera reporte
  README_PROYECTO.md
```

`main.py` protege el arranque con `if __name__ == "__main__":`, por lo que solo
se ejecuta al lanzar el programa y puede importarse para estudiar sus funciones.

## Preparar y ejecutar

1. Descarga `proyecto-b4-productos-clases.zip` y extráelo. El ZIP no añade
   una carpeta raíz; abre en VS Code la carpeta técnica que contiene los archivos.
2. Abre en VS Code la carpeta que contiene `analizador.py`, `persistencia.py`,
   `main.py` y este README.
3. No instales dependencias: se usa la biblioteca estándar de Python.
4. Desde esa carpeta, comprueba `python --version` y ejecuta:

   ```text
   python main.py
   ```

El programa pide productos de tipo `hardware` o `licencia`. Escribe `salir`
para generar el reporte. Crea `config.json`, añade filas a
`transacciones_oop.csv` y registra errores en `auditoria_oop.log`.

## Clases y responsabilidades (una frase cada una)

- `Producto`: guarda nombre y precio validado; calcula el precio final base con IVA.
- `ProductoHardware`: ES UN producto con peso; añade recargo si pesa más de 5 kg.
- `ProductoLicencia`: ES UN producto digital con clave; aplica 5 % de descuento si supera 100.
- `AuditoriaMercado`: TIENE productos (composición); evalúa alertas y genera el reporte.
- `ManejadorDatos`: carga la configuración y registra salidas (CSV + log).

Relaciones: composición (`AuditoriaMercado` → lista de `Producto`),
herencia de una sola capa (`ProductoHardware`, `ProductoLicencia` → `Producto`),
sobrescritura de `calcular_precio_final`, reporte polimórfico.

## Experiencia

### PREPARAR Y ORIENTARSE

Abre esta carpeta en VS Code. Solo `main.py` se ejecuta; `analizador.py` y
`persistencia.py` se importan. Antes de ejecutar, responde:

### ORIENTARSE (10 min, responde por escrito)

1. ¿Qué archivo es la entrada y qué función arranca el programa?
2. ¿Qué objetos crea `main.py` y cuáles colaboran entre sí?
3. ¿Dónde hay composición y dónde herencia? («TIENE-UN / ES-UN porque…»).

### COMPRENDER

Sigue el flujo real: `main.ejecutar` → `AuditoriaMercado.agregar_producto`
→ `generar_reporte` → `producto.calcular_precio_final(...)` → fila + estado.
La auditoría delega; cada objeto aplica SU regla con la MISMA llamada.

### DECIDIR (sin receta)

1. Compara `calcular_precio_final` en las tres clases: ¿todas tratan `tasa_iva`
   igual? ¿Qué clase rompe la regla común y cómo afecta al total?
2. `ProductoHardware` acepta cualquier `peso_kg`. ¿Qué clase debe impedir
   un peso no positivo y por qué ella y no `AuditoriaMercado`?

### RETO POSTERIOR (cambio acotado, no es el comportamiento inicial)

En el comportamiento inicial, `ProductoHardware` acepta cualquier `peso_kg`.
Como reto posterior separado, haz que rechace un peso no positivo con una
excepción clara, siguiendo el estilo de `set_precio`. Ningún otro archivo debe
cambiar en ese reto.

### COMPROBAR (casos manuales suficientes)

```text
normal:   Teclado, 80.0, 1.2  +  Suite, 140.0, ABC-123  → total 229.8
          (96.8 PRECIO_NORMAL + 133.0 ALERTA_PRECIO_ELEVADO)
límite:   evaluar_alerta(100.0) → PRECIO_NORMAL; evaluar_alerta(100.01) → ALERTA
inválido: precio -5.0 → ValueError; agregar "texto" → TypeError.
Estado inicial: peso 0 o -3 se aceptan; el rechazo pertenece al reto posterior.
```

En Python, sin arrancar el menú:

```python
from analizador import AuditoriaMercado, ProductoHardware, ProductoLicencia
auditoria = AuditoriaMercado(umbral_alerta=100.0)
auditoria.agregar_producto(ProductoHardware("Teclado", 80.0, 1.2))
auditoria.agregar_producto(ProductoLicencia("Suite", 140.0, "ABC-123"))
print(auditoria.generar_reporte(0.21))
```

### MINI-RETO (objetivo + restricciones, sin receta)

Unifica el significado de `tasa_iva` en las tres clases de `analizador.py`
sin cambiar ninguna firma. Restricciones: la licencia conserva su descuento
del 5 % cuando el precio supera 100; el hardware conserva su recargo por peso;
la lista mixta se sigue calculando con la misma llamada. Evidencia: muestra
el reporte con los mismos datos antes y después.
