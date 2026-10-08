# 07 · DELIMITACIÓN CURRICULAR, LÍMITES Y CONOCIMIENTO COMPLEMENTARIO

## 1. Propósito de este Documento

Este documento establece las **fronteras exactas** entre lo que constituye el currículo canónico oficial del curso **"Programar en 2027"** y aquellos conceptos, herramientas o detalles técnicos que pertenecen al ámbito de la **explicación complementaria**.

Su objetivo es salvaguardar la coherencia del curso y evitar que el Copiloto, el alumnado o el formador conviertan contenidos externos o decisiones pendientes en requisitos obligatorios.

El pack debe contrastarse con las actividades actuales. La ingeniería de origen conserva diseños y lagunas históricas: consulta su [índice](fuentes/README.md). Si hay una contradicción, identifica ambas fuentes; no presentes la síntesis como evidencia superior al código actual ni decidas por tu cuenta nuevos requisitos.

---

## 2. La Regla de Oro de la Doble Etiqueta

Cada vez que Copiloto Programar proporcione información técnica al alumnado o al formador de la Red Circular FAB, debe respetar el siguiente marco:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           [SEGÚN EL CURSO]                              │
│  Contenido documentado: señalar fuente y carácter de la actividad.     │
│  Estar documentado no implica ser obligatorio ni evaluable.            │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      [EXPLICACIÓN COMPLEMENTARIA]                       │
│  Contexto técnico avanzado, detalles de bajo nivel, buenas prácticas de  │
│  ingeniería y extensiones útiles para el dominio del formador.          │
│  *NO exigible a los alumnos en clase ni evaluable formalmente.*         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Catálogo de Límites Curriculares y Lagunas Identificadas

| Área Técnica | Alcance Canónico `[SEGÚN EL CURSO]` | Límite / `[EXPLICACIÓN COMPLEMENTARIA]` |
| :--- | :--- | :--- |
| **Instalación de Python en el SO** | Uso inmediato de **Google Colab** en B1-B5. En B6 se asume Python 3.10+ preinstalado o provisto por el taller para la creación de entornos virtuales (`venv`). | No se incluye un manual paso a paso del instalador ejecutable de Windows/macOS/Linux (variables de entorno PATH, compilación desde código fuente, etc.). Si un alumno lo requiere, se le asiste como apoyo complementario. |
| **Control de Versiones (Git)** | Comandos esenciales para flujo local y respaldo en B6-B7: `git init`, `git add`, `git commit -m`, `git status`, `git diff`, `.gitignore` y clonación inicial `git clone`. | No forma parte del temario la gestión avanzada de ramas (`git branch`, `git checkout/switch`), fusión (`git merge`), rebase (`git rebase`) ni resolución interactiva de conflictos de código. |
| **Complejidad Algorítmica (Big-O)** | Explicación cualitativa en lenguaje natural descriptivo: *"acceso instantáneo por clave en diccionarios frente a búsqueda elemento a elemento en listas"*. | No se utiliza ni se evalúa la notación matemática formal Big-O ($O(1), O(N), O(N^2)$). |
| **Mutabilidad y Copias Profundas** | Comprensión de referencias en memoria con listas, copia superficial mediante slicing `b = a[:]` o `.copy()`, e inmutabilidad de tuplas y strings. | No se profundiza en el módulo `copy` (`deepcopy`) para estructuras anidadas complejas ni en el caso de tuplas que contienen listas mutables en su interior. |
| **Generación de Informes en PDF** | Uso canónico de **ReportLab** (`SimpleDocTemplate`, `Paragraph`, `Table`, `Spacer`) para maquetar tablas y resúmenes ejecutivos en B5. | No se cubre maquetación gráfica compleja de imprenta, diseño vectorial milimétrico ni librerías externas no respaldadas en los materiales. |
| **Automatización Web (Scraping)** | Automatización de flujos básicos de navegación, esperas de elementos y extracción de texto visible con **Playwright** en B5. | No se cubren técnicas de evasión de sistemas anti-bot, resolución de captchas ni pipelines distribuidos de scraping masivo. |
| **BeautifulSoup en B5** | Puede aparecer como concepto acotado para parsing de HTML estático si el material actual lo conserva. | No compite con el itinerario práctico principal NumPy -> Pandas -> Playwright -> ReportLab -> SAMI-Applied y no debe convertirse en dependencia central. |
| **LangGraph en B7** | EXP-05 publicada contiene un grafo ejecutable sin LLM. Las reglas puras se pueden probar sin instalar LangGraph; el grafo queda no verificado si falta. | Su obligatoriedad y evaluación están pendientes. Memoria conversacional, herramientas e intervención humana pertenecen a la ampliación avanzada. |
| **SAMI Final en B7** | Existen guía, registro IA, plan de validación y defensa. La portada de B7 publica además seis experiencias con cuatro proyectos propios. | La integración definitiva de SAMI Final como conductor de esa ruta está pendiente. No mezclar entregables ni declarar una opción sustituida. |
| **Laboratorio de programación** | Recorrido y laboratorios adicionales documentados en el portal; mapa en 08. | No es B8, no añade requisitos evaluables por defecto y no pertenece a SAMI. Cada experiencia conserva sus prerrequisitos. |
| **OpenCV en el Lab** | Webcam interactiva con `VideoCapture`, `read`, `imshow`, `waitKey`, `cvtColor`, `GaussianBlur`, `Canny`, `imwrite`, `release` y `destroyAllWindows`. | No incluye reconocimiento facial, reconocimiento de objetos, `CascadeClassifier`, YOLO, MediaPipe ni modelos de IA. |
| **Automatización de archivos del Lab** | Organización de archivos falsos exclusivamente dentro de `lab_archivos_prueba/`. | No recomendar Descargas, Documentos, Escritorio ni carpetas reales externas del alumno. |

---

## 4. Directivas de actuación para Copiloto Programar

Cuando el formador de Circular FAB consulte sobre algún tema que sobrepase el alcance del curso, el agente debe aplicar el siguiente protocolo:

1. **Aclarar el límite curricular de inmediato:**
   > *"En el temario oficial del curso esto no se exige a los alumnos, ya que el enfoque del bloque está en..."*
2. **Brindar la explicación técnica complementaria para el profesor:**
   > *`[EXPLICACIÓN COMPLEMENTARIA]` "Para tu información como formador, la razón técnica detrás de esto es..."*
3. **Ofrecer una analogía o respuesta simplificada para el aula:**
   > *"Si un alumno curioso te lo pregunta en clase, puedes explicárselo de forma sencilla diciéndole que..."*
4. **Reconducir la atención hacia el objetivo del bloque:**
   > *"Para la práctica de hoy, lo importante es que el grupo domine [Concepto del curso] antes de pasar al siguiente paso."*

## 5. Límites Específicos de ReportLab

Según el curso, ReportLab se trabaja de forma práctica en B5 mediante Platypus. La factura `factura_2027_001.pdf` y el informe PDF de SAMI-Applied son salidas reales.

El Copiloto no debe presentar como parte de la práctica B5 de factura: OCR, PyPDF, XML, facturación electrónica, normativa fiscal, firma digital, bases de datos ni aplicaciones web de facturación. Las APIs y bases de datos que aparecen después en el Laboratorio de programación no amplían automáticamente B5.

## 6. Límites del Pack Portable

El pack `copiloto-profesor/` es documentación portable. No requiere ni debe proponer para su uso:

- APIs.
- Claves.
- Tokens.
- Backend.
- RAG.
- Bases vectoriales.
- Servicios externos.

Puede cargarse en herramientas compatibles con instrucciones y archivos de conocimiento. La herramienta concreta es decisión del profesor o del centro.

## 7. Diferencias entre versiones y estado tras la evolución

Auditoría documental del 10 de septiembre de 2026, actualizada tras contrastar las rutas publicadas de Programar en 2027:

| Discrepancia encontrada | Criterio operativo del Copiloto | Estado |
| --- | --- | --- |
| B7 conserva guía y plantillas de SAMI Final junto a seis experiencias con cuatro proyectos publicados. | Identificar el material elegido; aplicar tarea acotada → contexto → plan → autorización → diff → pruebas → ACEPTAR/MODIFICAR/RECHAZAR. No mezclar entregables. | **Decisión pendiente:** integración definitiva de SAMI Final en la ruta. |
| La ingeniería y los datos llaman opcional a LangGraph; EXP-05 lo presenta como experiencia ejecutable en la ruta. | Describir el grafo actual y su Plan B; distinguirlo de la ampliación conversacional. No deducir obligatoriedad ni evaluación de su posición en el portal. | **Decisión pendiente:** obligatoriedad y evaluación de EXP-05. Ollama en EXP-06 sí es explícitamente opcional. |
| El JSON del Lab contiene seis experiencias, el JavaScript más y sus subtítulos numéricos no coinciden con el portal. | Usar el [portal publicado](../lab-python-en-accion/index.html) y las páginas enlazadas; no fijar un número de experiencias en el pack. | Pendiente fuera de esta carpeta; el Lab sigue siendo vitrina opcional no evaluable. |
| Algunas configs de bloques aún dicen «Pendiente» y las fuentes guardan lagunas ya cubiertas por cuadernos o experiencias. | Consultar los recursos existentes del [mapa de prácticas](04-PRACTICAS-Y-APOYOS.md), no deducir ausencia de contenido de esos metadatos. | Pendiente en su ámbito de mantenimiento. |

El Copiloto no resuelve diferencias cambiando el curso, sus proyectos o la evaluación sin autorización. Sí puede preparar una propuesta acotada conforme al flujo del archivo 00.
