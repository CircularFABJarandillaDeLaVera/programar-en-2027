# TASKS — mini-harness Python 2027 (FASE 3)

- [x] Verificar rama, `git status` y `AGENTS.md`.
  - Terminado cuando: rama y árbol limpio registrados en `ESTADO.md` sin contradecir `git status`.
- [x] FASE 3: crear `scripts/verificar.py` (comprueba, clasifica, informa; sin instalar ni corregir).
  - Terminado cuando: `python scripts/verificar.py` clasifica el estado real como NO_APTO con 1 fallo y 9 NO_VERIFICADO.
- [x] FASE 3: crear `plantillas/INFORME-VALIDACION.md` y generar informe con `--informe`.
  - Terminado cuando: el informe incluye fecha, rama, commit, alcance, estados, errores, no verificados y comando.
- [x] Identificar suites pytest razonables y ejecutarlas sin usar `lastfailed` como estado.
  - Terminado cuando: consta colección completa y resultado del subconjunto ejecutable (54/55) con evidencia.
- [ ] Acordar alcance del mini-harness (suites cubiertas, entorno y dependencias).
  - Terminado cuando: hay decisión explícita de qué suites entran y cómo se provee `fastapi`/entorno.
- [ ] Diagnosticar `test_cargar_demo_existe` (CWD/ruta) sin corregirlo aún.
  - Terminado cuando: causa registrada con evidencia reproducible desde raíz del repo.
