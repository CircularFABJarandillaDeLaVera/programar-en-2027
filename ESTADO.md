# ESTADO — Programar en 2027

Actualizado: 2026-11-01. Fuentes canónicas: ver `AGENTS.md`.

## Microfase 1 — entrada común y dos rutas

### Comprobado ahora

- Se actualizaron únicamente los siete índices autorizados: la portada, el índice del Recorrido práctico y los índices B3–B7.
- La portada ofrece `Empieza por aquí`, una Ruta A para crear proyectos con agentes y una Ruta B para aprender programación con Python. Ambas sitúan los proyectos aplicados de B3, B4 y B5 y continúan hacia B6 y B7.
- B3–B5 muestran los nombres públicos acordados sin renombrar archivos técnicos, cuadernos, ZIP ni PDF.
- B6 ya no enlaza al ZIP inexistente `proyecto-b6-trabajo-developer.zip`; presenta sus seis experiencias reales como entrada.
- B7 conserva sus materiales actuales y marca LangGraph como ampliación en desarrollo, no como requisito obligatorio.
- El Laboratorio se presenta como `Recorrido práctico · Construye y conecta tus proyectos`, con acceso libre posterior y seis etapas descriptivas; no se han eliminado sus recursos.
- Se conservaron sin tocar los cambios no seguidos de `Cambios_portada_2027/`.

### Evidencia y límites

- Se revisaron 176 referencias locales de los siete índices: 0 destinos ausentes.
- `python scripts/verificar.py`: JSON 17/17 correcto, sintaxis Python 53/53 correcta y 52 rutas generales correctas. Las suites no se ejecutaron porque `pytest` no está disponible.
- Se hizo revisión visual con Chrome de la portada en escritorio y móvil, sin comparar píxeles con el curso de prueba de EduSDK. La aceptación final de las cuatro combinaciones claro/oscuro y de la lectura en dispositivos reales queda pendiente de revisión humana.
- No se ejecutaron los proyectos ni se validaron ZIP, cuadernos, PDF o dependencias; su sincronización queda fuera de esta microfase.

### Siguiente paso

- Revisar con personas la elección de ruta y, si procede, encargar la microfase 2 para B3. No hacer todavía cambios de proyectos, descargas o materiales de apoyo.

## Comprobado ahora

- Rama: `main`; commit de partida: `a324b34`.
- El árbol contiene cambios sin commit. `.gitignore` ya estaba modificado al iniciar esta intervención.
- El miniarnés existe en `scripts/verificar.py` y su plantilla en `plantillas/INFORME-VALIDACION.md`.
- Hay pruebas versionadas en los proyectos de B7 y comprobadores específicos en B5 y B7.

## Pendiente

- Ejecutar de nuevo el miniarnés en un entorno Python disponible y registrar un resultado actual.
- Acordar qué proyectos y dependencias forman parte de su alcance antes del piloto.
- No se considera vigente ningún resultado de pruebas que no proceda de una nueva ejecución.

## Histórico

- La antigua FASE 3 se realizó en la rama `feature/harness-python-2027` en septiembre de 2026.
- Sus recuentos de pruebas, fallos y elementos no verificados son evidencia histórica, no el estado actual del repositorio.
