# Programar en 2027

Curso en castellano para aprender a programar haciendo, con Python como lenguaje
principal (B1-B7 + Recorrido práctico): fundamentos, proyectos reales, debugging,
comprobación y validación, Git, e IA y agentes bajo revisión humana.

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

## Material externo de trabajo

- `assets/referencias_privadas/` contiene material externo para auditorías y comparación. No forma parte del currículo, no es fuente canónica y no debe publicarse ni versionarse.

## Copias del arnés de bolsillo

- La fuente principal del proyecto descargable es `bloques/bloque7/recursos/proyectos-b7/harness-bolsillo/`; contiene los cuatro archivos de `proyecto-b7-harness.zip`.
- `bloques/bloque7/recursos/practicas/harness-bolsillo/` es una copia auxiliar junto a la práctica en Markdown. No la sincronices ni la edites como fuente principal sin revisar antes el ZIP y la experiencia publicada.

## Reglas de trabajo

1. Cambios pequeños e incrementales; no mezcles cambios ajenos.
2. Comprueba `git status` y `git diff` antes de editar.
3. No avances más de una fase sin autorización cuando la tarea lo exija.
4. Valida después de modificar (JSON, rutas relativas, pruebas que apliquen).
5. Español descriptivo en ejemplos, variables y funciones cuando sea razonable.
6. No inventes tecnologías fuera del alcance descrito en límites.

## Cambios visuales

- Respeta la identidad corporativa existente en cualquier cambio visual. Usa los recursos originales de `assets/edusdk-design-system/` y comprueba sus rutas; no improvises logotipos, tramas ni sustitutos genéricos.
- En modificaciones de HTML, CSS o componentes, ejecuta obligatoriamente `node visual-harness/run.mjs RUTA/DE/PAGINA.html` desde la raíz. Consulta `visual-harness/README.md`; revisa `visual-harness/.out/<pagina>/informe.json` y sus cuatro capturas. El ejecutor adapta el procedimiento Chrome/CDP del proyecto hermano EduSDK sin modificarlo.
- Compara capturas de escritorio y móvil con la última referencia visual válida del repositorio. Comprueba que cargan logotipos, tramas, tipografías y estilos, también en los temas que admita la página.
- No des por terminada una microfase visual solo porque pasen las pruebas técnicas: revisa las capturas y corrige cualquier pérdida de identidad o composición.
- Si no existe una referencia visual válida o el arnés visual no está disponible o falla, detente e informa antes de improvisar cambios.
