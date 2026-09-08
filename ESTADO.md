# ESTADO — mini-harness Python 2027 (FASE 2)

Verificado ahora: 2026-09-08 (UTC). Fuentes canónicas: ver `AGENTS.md`.

- Rama actual: `feature/harness-python-2027`.
- Último punto estable: `1281805` — árbol limpio (`git status --short` vacío al verificar).
- En curso: FASE 2 del mini-harness, solo diagnóstico. Sin correcciones aplicadas.

## Verificado ahora

- `python -m pytest --collect-only -q`: 3 suites coleccionables + 9 módulos con error de colección.
- Subconjunto ejecutable (55 tests): `langgraph-contexto` + `ollama-estructurado` + `ollama-explicacion` → **54 passed, 1 failed** (`test_cargar_demo_existe`, `assert path.exists()` sobre `datos_contexto_demo.json`).
- `git ls-files "*.py"`: 25 ficheros trackeados, 0 suites de tests trackeadas. Los 12 ficheros `test_*.py` en disco están bajo `lab-python-en-accion/recursos/descargas/*/`, ruta ignorada por `.gitignore`.

## Pendiente de verificar

- 9 módulos `test_api.py` (`control-horario*`, `docker-fastapi`, `postgresql-participantes`): no ejecutables aquí por falta de dependencia (ver abajo).

## Histórico / no confirmado

- `.pytest_cache/v/cache/{lastfailed,nodeids}`: no se usa como estado actual, solo referencia histórica.

## Limitaciones del entorno actual

- `ModuleNotFoundError: No module named 'fastapi'` — los 9 módulos `test_api.py` no pueden ejecutarse en este entorno; no demuestra que esos proyectos fallen.

## Problemas reales

- `test_cargar_demo_existe` falla (ruta relativa a CWD). Solo registrado, no corregido.

## Siguiente paso autorizado

- Ninguno ejecutado sin autorización: decidir alcance del harness (suites cubiertas + gestión de dependencias) antes de FASE 3.
