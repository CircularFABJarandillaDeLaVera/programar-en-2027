# Experiencia 19 · Una compostera conectada

Esta experiencia introduce la necesidad de recibir datos generados continuamente por un dispositivo. Como todavía no tenemos sensor físico, Python simula una secuencia de temperatura y humedad y la publica mediante MQTT.

El flujo es:

```text
SIMULADOR PYTHON → MQTT / MOSQUITTO → MONITOR PYTHON
```

La secuencia es una demostración plausible, no un modelo científico del compostaje. El contrato usa `dispositivo_id`, `temperatura_c` y `humedad_pct`.

La práctica utiliza Mosquitto dentro de Docker y dos scripts Python visibles: `simulador_compostera.py` y `monitor_compostera.py`.

El paquete completo está en `recursos/descargas/compostera-mqtt.zip`.

El siguiente paso será sustituir el simulador por un sensor real. No se implementa aquí.
