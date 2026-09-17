# Registro de uso de IA

| Fecha | Tarea | Contexto dado | Respuesta | Decision | Validacion |
| --- | --- | --- | --- | --- | --- |
| | | | | aceptar / modificar / rechazar | |

Registra al menos 3 fallas o propuestas incorrectas de la IA. Ejemplos validos:

- olvido de `browser.close()` en Playwright;
- uso de una dependencia no autorizada;
- API inventada o no comprobada;
- cambio masivo fuera de la funcion solicitada;
- resultado correcto solo para un caso de prueba.

## Via avanzada con agente (una linea por intervencion)

Si usas la via avanzada sobre SAMI (ver `sami-final.md`), anade una fila por
cada intervencion del agente con: tarea pedida, contexto dado, que cambio,
resultado de la comprobacion y decision (ACEPTAR / MODIFICAR / RECHAZAR) con
motivo breve. Ejemplo de formato en una sola linea:

| 2027-05-01 | Validar precio en `src/analizador.py` | Archivo + rango > 0 + sin dependencias nuevas | Rechazo de precio -5 | ACEPTAR: diff minimo, `python main.py` OK | Ejecutado + plan-validacion OK |

## Regla

Si no se puede explicar, no se integra.
