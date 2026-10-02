# Plan de validacion

## Pruebas manuales

1. Ejecutar `python main.py` desde la terminal integrada.
2. Comprobar que `got_1.csv` carga correctamente con Pandas.
3. Validar filtros de casas, indice y tratamiento de nulos.
4. Comprobar promedio, maximo, minimo y desviacion estandar de precios con NumPy.
5. Confirmar que Playwright cierra el navegador al terminar.
6. Verificar que el PDF de ReportLab se genera en la ruta esperada.
7. Probar entrada valida.
8. Probar entrada invalida.
9. Probar archivo ausente.
10. Comparar resultado esperado frente a resultado real.

## Preguntas de control

- Que cambio hizo la IA?
- Que cambiaste tu?
- Que salida esperabas?
- Que salida obtuviste?
- Que decidiste aceptar, modificar o rechazar?
- Que dependencia o API rechazaste por estar fuera de alcance?
- Como sabes que no quedan procesos del navegador abiertos?
- Que propuestas incorrectas o fallos de la IA observaste realmente? Si no aparecieron tres, que intervenciones realizaste, como las comprobaste y por que las aceptaste, modificaste o rechazaste?
