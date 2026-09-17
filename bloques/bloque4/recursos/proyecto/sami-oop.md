# Proyecto B4 - SAMI-OOP

## Evolucion
SAMI-Lite -> SAMI-OOP.

## Objetivo
Reorganizar el problema conocido de auditoria de mercado usando objetos.

## Estructura
```text
sami_oop/
  analizador.py
  persistencia.py
  main.py
```

## Clases
- `Producto`: nombre, precio base validado y calculo base.
- `ProductoHardware`: producto con peso y recargo.
- `ProductoLicencia`: producto digital con clave y descuento posible.
- `AuditoriaMercado`: contiene productos y genera reporte.
- `ManejadorDatos`: carga configuracion y registra salidas.

## Evidencias
- Objetos instanciados.
- Herencia con `super()`.
- Composicion en `AuditoriaMercado`.
- Sobrescritura de `calcular_precio_final`.
- Reporte polimorfico.
- Configuracion JSON y CSV de transacciones.

## Comprobar que sigue funcionando

Tras modificar una clase, repite tres casos en consola (sin arrancar el menu):
normal (`Teclado, 80.0, 1.2` + `Suite, 140.0` → total `229.8`),
limite (`evaluar_alerta(100.0)` → `PRECIO_NORMAL`) e invalido
(precio `-5.0` → `ValueError`). Si el total cambia donde no tocaste,
el cambio no esta listo. Mismo habito de B3, ahora sobre objetos.

## Archivos base
Los tres archivos Python estan en esta carpeta.
