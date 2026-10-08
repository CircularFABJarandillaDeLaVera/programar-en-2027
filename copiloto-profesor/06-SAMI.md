# 06 · SAMI: PROYECTOS, VERSIONES Y EVIDENCIAS

## Qué es SAMI

**SAMI** se presenta en el portal como **Sistema de Auditoría de Precios y Generación Automatizada de Reportes de Mercado**. Los proyectos de B3-B5 trabajan con productos, precios y registros; las antiguas descripciones basadas en `Sensor`, `Actuador` o `FabLabManager` no describen esos proyectos.

La progresión conceptual continúa hacia entorno local y desarrollo asistido. Para explicar una entrega concreta, identifica primero la carpeta: las versiones publicadas no son copias idénticas ni producen siempre los mismos artefactos.

## B3 · SAMI-Lite

Referencia práctica: [README del proyecto de B3](../bloques/bloque3/proyecto-sami-lite/README_PROYECTO.md). Es una copia de trabajo del [material de autor](../bloques/bloque3/recursos/proyecto/).

- `main.py` coordina la entrada y llama a `procesar_transaccion`.
- `analizador.py` contiene `calcular_precio_final` y `evaluar_alerta_precio`.
- `persistencia.py` carga configuración y registra transacciones y errores.
- Los archivos son `config.json`, `transacciones_auditoras.csv` y `auditoria_errores.log`; su creación depende del recorrido ejecutado.
- Solo usa biblioteca estándar. Las rutas se resuelven desde la carpeta de trabajo.

Evidencia: el alumno sigue un precio desde la entrada hasta su cálculo, alerta y registro. El cambio guiado distingue el precio exactamente igual al umbral; se comprueban un caso normal, el límite y una entrada inválida. `analizador.py` incluye además `comprobar_transaccion(...)`, que devuelve `True`/`False` para un caso conocido: el programa comprueba su propio cálculo. No se exige POO.

## B4 · SAMI-OOP

Referencia: [README del proyecto de B4](../bloques/bloque4/proyecto-sami-oop/README_PROYECTO.md).

| Clase | Responsabilidad |
| --- | --- |
| `Producto` | Nombre, precio validado y cálculo base. |
| `ProductoHardware` | Producto con peso y recargo por envío. |
| `ProductoLicencia` | Producto digital con regla de descuento. |
| `AuditoriaMercado` | Composición de productos, alertas y reporte polimórfico. |
| `ManejadorDatos` | Configuración y persistencia CSV/log. |

Se mantienen `analizador.py`, `persistencia.py` y `main.py`. La copia práctica protege el arranque con `if __name__ == "__main__":`; el README explica esa diferencia respecto al material de autor.

El alumnado decide qué objeto debe validar el peso y revisa la diferencia real en el tratamiento del IVA entre clases. No afirmes que todas aplican ya la misma regla: unificarla es parte del mini-reto.

Evidencia: justificar composición y herencia, localizar la clase responsable, realizar un cambio acotado y explicar el reporte antes y después. Tras modificar una clase se repiten tres casos en consola (normal, límite, inválido); si el total cambia donde no se tocó, el cambio no está listo.

## B5 · SAMI-Applied

Referencia: [README del proyecto de B5](../bloques/bloque5/proyecto-sami-applied/README_PROYECTO.md).

```text
datos_hardware.csv
  → analizador.py (Pandas: lectura y filtro; NumPy: indicadores)
  → generador_informe.py (ReportLab Platypus)
  → reporte_final_sami.pdf + resumen por consola
```

Este proyecto usa CSV local, `numpy`, `pandas` y `reportlab`. **Playwright no es requisito para generar su PDF**: su demo queda aparte en el material de autor. `got_1.csv` se utiliza en el cuaderno de Pandas y no se mezcla con los datos de hardware.

El README declara como resultado esperado del CSV inicial cuatro ofertas válidas, precio medio 147.35 y stock total 26. Son valores de referencia documental; hay que ejecutarlo para comprobar una copia concreta.

El cambio consiste en destacar el stock bajo. `comprobar.py` comprueba el CSV, la estructura del análisis y la existencia de un PDF no vacío; el docente revisa además su contenido visual. La factura `factura_2027_001.pdf` es otra práctica de ReportLab, no la salida de SAMI-Applied.

## B6 · SAMI-Local: trabajar dentro de un proyecto

La [ruta de B6](../bloques/bloque6/inicio.html) usa una copia personal de [proyecto-seguro](../bloques/bloque6/recursos/proyecto-seguro/), también distribuida como [ZIP de B6](../bloques/bloque6/proyecto-b6-trabajo-developer.zip).

Seis experiencias: orientarse, preparar entorno, seguir el flujo, depurar, modificar sin romper y registrar con Git. La base contiene `main.py`, `src/`, `config.json`, `data/datos_hardware.csv` y `requirements.txt`.

El flujo real de `main.py` carga configuración y datos, calcula precios, filtra stock y muestra una descripción del informe en consola. La presencia de `generador_pdf.py` o de ReportLab en las dependencias **no demuestra que esta base genere un PDF**. Tampoco se invoca el scraper desde ese flujo.

Evidencia: cambio funcional comprobado y commit local explicado. La experiencia de Git no exige remoto ni push. Si falta entorno o ejecución, se documenta como no verificado.

## B7 · SAMI Final y ruta publicada de agentes

La guía de **SAMI Final** se conserva en [recursos/proyecto](../bloques/bloque7/recursos/proyecto/sami-final.md) con una primera intervención puente: mostrar un mensaje claro cuando falta `data/got_1.csv`. Por otra parte, la [portada publicada de B7](../bloques/bloque7/inicio.html) organiza seis experiencias y cuatro proyectos propios. La integración definitiva de SAMI Final como conductor de esa ruta está pendiente; identifica siempre qué material utiliza el grupo.

Ciclo de cada intervención: reproducir necesidad → punto seguro Git → tarea acotada → contexto → agente → `git status`/`git diff` → ejecutar → comprobar → revisión humana → ACEPTAR/MODIFICAR/RECHAZAR → commit solo de lo validado.

La ruta publicada utiliza:

- Harness: contexto, restricciones, plan, autorización y comprobación.
- [Agente real](../bloques/bloque7/recursos/proyectos-b7/agente-real/README.md): ejemplo del flujo (validar participantes, depurar y refactorizar con pruebas y diff).
- [LangGraph](../bloques/bloque7/recursos/proyectos-b7/langgraph-taller/README.md): grafo ejecutable sin LLM; reglas Python y rutas observables.
- [IA bajo control](../bloques/bloque7/recursos/proyectos-b7/ia-control/README.md): validación de respuestas y alternativa determinista; Ollama es opcional.

EXP-05 confirma una práctica ejecutable de LangGraph sin LLM, pero no determina por sí sola su obligatoriedad o evaluación. Memoria conversacional, herramientas e intervención humana pertenecen a la ampliación avanzada.

Si se trabaja SAMI Final, su defensa usa [registro IA](../bloques/bloque7/recursos/proyecto/registro-ia.md) (una línea por intervención con decisión), [plan de validación](../bloques/bloque7/recursos/proyecto/plan-validacion.md) y [README de defensa](../bloques/bloque7/recursos/proyecto/README-defensa.md).

## Preguntas para la revisión docente

1. ¿Qué archivo recibe los datos, cuál los transforma y dónde aparece el resultado?
2. ¿Qué caso normal, límite e inválido has comprobado? ¿Qué queda sin verificar?
3. ¿Qué propuso la IA y por qué lo aceptaste, modificaste o rechazaste?
4. ¿Qué muestra el diff y puedes explicar el cambio?

No se exige recitar el código ni inventar errores de la IA para rellenar un registro. El docente decide la evaluación aplicable y revisa las evidencias reales.

El **Laboratorio de programación** es una continuación práctica independiente; no añade una fase a SAMI ni se convierte en B8. Consulta [08 · Lab y recorrido](08-LAB-PYTHON-EN-ACCION.md).
