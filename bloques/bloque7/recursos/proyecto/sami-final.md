# Proyecto B7 - SAMI Final

## Evolucion

SAMI-Lite -> SAMI-OOP -> SAMI-Applied -> SAMI-Local -> SAMI Final

## Objetivo

Cerrar el proyecto con programacion asistida por IA critica, controlada y verificable, partiendo de SAMI-Local.

El alumno debe demostrar que gobierna el codigo: planifica, pide ayuda acotada, inspecciona, ejecuta, depura, modifica y valida personalmente.

## Arquitectura minima

- `main.py`: orquesta la ejecucion completa.
- `src/scraper.py`: obtiene datos de ofertas simuladas con Playwright y cierra el navegador con `browser.close()`.
- `src/analizador.py`: limpia, filtra y analiza datos con Pandas y NumPy.
- `src/generador_pdf.py`: genera el informe final con ReportLab.
- `data/got_1.csv`: dataset usado para practicar carga, filtrado, indice y nulos con Pandas.
- `requirements.txt`: dependencias autorizadas del proyecto.
- `.gitignore`: excluye `venv/`, logs y archivos generados que no deban versionarse.

## La IA puede ayudar a

- planificar;
- explicar;
- modificar partes localizadas;
- depurar;
- documentar;
- refactorizar si se valida;
- preparar la defensa.

## Requisitos tecnicos

- Ejecutar el proyecto desde VS Code con entorno virtual activo.
- Declarar dependencias en `requirements.txt`.
- Mantener el repositorio local organizado con `.gitignore`.
- Usar Pandas para cargar `got_1.csv`, filtrar casas, definir indice y tratar nulos.
- Usar NumPy para calcular promedio, maximo, minimo y desviacion estandar de precios.
- Usar Playwright solo donde aporte adquisicion/automatizacion de datos y cerrar procesos del navegador.
- Usar ReportLab para producir el informe final.
- Ejecutar `python main.py` y comprobar la salida completa.
- Registrar al menos 3 fallas o propuestas incorrectas sugeridas por la IA y como fueron detectadas.

## Prohibido

- tecnologias nuevas;
- frameworks nuevos;
- dependencias no autorizadas;
- APIs inventadas;
- optimizaciones avanzadas fuera de alcance.
- integrar codigo que el alumno no pueda explicar o defender.

## Via avanzada: trabajar con un agente (opcional, sobre este mismo SAMI)

No es otro proyecto ni otro final. El proyecto conductor sigue siendo SAMI Final.
Esta via es una forma avanzada de intervenir sobre el mismo SAMI, solo cuando
el alumno ya entiende el proyecto y lo tiene funcionando en la via base.

Antes de delegar un cambio, escribe estas tres lineas:

### Objetivo

Que cambio concreto quiero (una sola funcion o comportamiento, verificable).

### Contexto

Que necesita saber el agente: archivo o zona relevante, comportamiento esperado,
restricciones (ver `Prohibido` mas arriba) y como sabras que funciona.

### Verificacion

Como comprobare que el cambio es correcto: ejecucion, `plan-validacion.md`,
pruebas puntuales y `git diff` revisado antes de aceptar nada.

Flujo de cada intervencion del agente:

```text
reproducir necesidad o fallo
  ↓
punto seguro en Git (commit con todo funcionando)
  ↓
tarea acotada + contexto al agente
  ↓
AGENTE interviene
  ↓
git status        ¿Que archivos ha tocado?
  ↓
git diff          ¿Que ha cambiado exactamente?
  ↓
EJECUTAR          ¿Funciona?
  ↓
PRUEBAS           (`plan-validacion.md`, tests puntuales si los hay)
  ↓
REVISION HUMANA   ¿Aceptamos el cambio?
  ↓
ACEPTAR / MODIFICAR / RECHAZAR (registrado en `registro-ia.md`)
  ↓
git commit        Solo lo validado
```

Ejemplo practico de referencia (no duplicado aqui): el proyecto
`agente-real` demuestra este mismo flujo sobre un fallo pequeno y verificable
(validar edad entre 0 y 120). Ver
`../proyectos-b7/agente-real/README.md` y sus reglas para el agente en
`../proyectos-b7/agente-real/AGENTS.md`. En SAMI se aplica igual, pero sobre
tu propio codigo.

Git acotado a lo ya usado en el curso: `status`, `diff`, `add`, `commit`
(y `log` o revertir si hace falta volver al punto seguro). Sin ramas ni merges.

## Evidencia

- `README-defensa.md`
- `registro-ia.md`
- `plan-validacion.md`
- informe generado
- ejecucion por terminal
- explicacion oral del flujo
