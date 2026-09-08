# ESTADO — mini-harness Python 2027 (FASE 3)

Verificado ahora: 2026-09-08 (UTC). Fuentes canónicas: ver `AGENTS.md`.

- Rama actual: `feature/harness-python-2027`.
- Último punto estable: `1281805` — árbol limpio (`git status --short` vacío al verificar).
- En curso: FASE 3 del mini-harness. Verificador creado y ejecutado; sin correcciones aplicadas.

## Verificado ahora (FASE 3, `python scripts/verificar.py`)

- Estado global: **NO_APTO** (un fallo real; Git sucio solo informativo).
- Git: rama `feature/harness-python-2027`, commit `b1bf3a4`; árbol sucio por `scripts/` y `plantillas/` (nuevos, sin trackear) más `ESTADO.md`/`TASKS.md` (esta actualización). No bloquea.
- JSON: 17/17 válidos (BOM UTF-8 tolerado).
- Python: 25 .py trackeados compilan, sin ejecutar.
- Rutas: 36 referencias locales revisadas, 0 ausentes.
- Tests: 54 passed, 1 failed (`test_cargar_demo_existe`); 9 `test_api.py` NO_VERIFICADO por `fastapi` ausente (nada instalado).
- Informe: plantilla `plantillas/INFORME-VALIDACION.md`, salida con `--informe <ruta>`.

## Verificado antes

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
