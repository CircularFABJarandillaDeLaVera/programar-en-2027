# Programar con Python en 2027

Curso en castellano para aprender Python haciendo (B1-B7 + lab opcional).

> El repositorio es la fuente de verdad. No dupliques contenido aquí; sigue los enlaces.

## Documentos canónicos

- Visión del curso: `copiloto-profesor/01-GUIA-CURSO.md`
- Rol docente y modos: `copiloto-profesor/00-INSTRUCCIONES-AGENTE.md`
- Fuentes saneadas: `copiloto-profesor/fuentes/README.md`
- Si hay duplicidad, `copiloto-profesor/fuentes/` prevalece sobre `ingenieria/`.

## Dónde está cada cosa

- Límites pedagógicos: `copiloto-profesor/07-LAGUNAS-Y-LIMITES.md`
- Flujo y metodología: `copiloto-profesor/fuentes/ingenieria-python-bloque7.md`
- Generador de bloques: `generador-bloques-base/README.md`, `generador-bloques-base/docs/FLUJO-BLOQUES.md`, `generador-bloques-base/scripts/crear_bloque.py`
- Configs reales: `config-bloque1.json` (...2-7)
- Experiencias lab: `lab-python-en-accion/data/lab-python-en-accion.json`, `lab-python-en-accion/recursos/experiencias/`
- Profesor Plus: `profesor-plus/README.md`, `profesor-plus/data/esquema-profesor-plus.json`
- Design system: `assets/edusdk-design-system/`, `assets/js/theme-toggle.js`
- Validaciones: `bloques/bloque7/recursos/proyecto/plan-validacion.md`, `bloques/bloque1/recursos/trazabilidad.md` (patrón repetido en bloque2-7)

## Reglas de trabajo

1. Cambios pequeños e incrementales; no mezcles cambios ajenos.
2. Comprueba `git status` y `git diff` antes de editar.
3. No avances más de una fase sin autorización cuando la tarea lo exija.
4. Valida después de modificar (JSON, rutas relativas, pruebas que apliquen).
5. Español descriptivo en ejemplos, variables y funciones cuando sea razonable.
6. No inventes tecnologías fuera del alcance descrito en límites.
