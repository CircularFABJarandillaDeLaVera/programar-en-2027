# 07 · DELIMITACIÓN CURRICULAR, LÍMITES Y CONOCIMIENTO COMPLEMENTARIO

## 1. Propósito de este Documento

Este documento establece las **fronteras exactas** entre lo que constituye el currículo canónico oficial del curso **"Programar con Python en 2027"** y aquellos conceptos, herramientas o detalles técnicos que pertenecen al ámbito de la **explicación complementaria**.

Su objetivo es salvaguardar la coherencia del curso y evitar que el agente (o el formador) sobrecargue al alumnado con contenidos fuera de programa o presente conceptos externos como si fueran obligatorios.

Este documento también protege el pack frente a fuentes vivas antiguas o no saneadas. Si una fuente externa contiene mojibake, referencias de año obsoleto, PyPDF como laguna antigua, restos conversacionales o contradicciones con el estado validado del curso, debe prevalecer la versión curada de `copiloto-profesor/`.

---

## 2. La Regla de Oro de la Doble Etiqueta

Cada vez que el Copiloto del Profesor proporcione información técnica al formador de la Red Circular FAB, debe respetar el siguiente marco:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           [SEGÚN EL CURSO]                              │
│  Contenido canónico, prácticas obligatorias y criterios de evaluación   │
│  oficiales de los bloques B1 a B7.                                      │
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
| **Control de Versiones (Git)** | Comandos esenciales para flujo local y respaldo en B6-B7: `git init`, `git add`, `git commit -m`, `git status`, `.gitignore` y clonación inicial `git clone`. | No forma parte del temario la gestión avanzada de ramas (`git branch`, `git checkout/switch`), fusión (`git merge`), rebase (`git rebase`) ni resolución interactiva de conflictos de código. |
| **Complejidad Algorítmica (Big-O)** | Explicación cualitativa en lenguaje natural descriptivo: *"acceso instantáneo por clave en diccionarios frente a búsqueda elemento a elemento en listas"*. | No se utiliza ni se evalúa la notación matemática formal Big-O ($O(1), O(N), O(N^2)$). |
| **Mutabilidad y Copias Profundas** | Comprensión de referencias en memoria con listas, copia superficial mediante slicing `b = a[:]` o `.copy()`, e inmutabilidad de tuplas y strings. | No se profundiza en el módulo `copy` (`deepcopy`) para estructuras anidadas complejas ni en el caso de tuplas que contienen listas mutables en su interior. |
| **Generación de Informes en PDF** | Uso canónico de **ReportLab** (`SimpleDocTemplate`, `Paragraph`, `Table`, `Spacer`) para maquetar tablas y resúmenes ejecutivos en B5. | No se cubre maquetación gráfica compleja de imprenta, diseño vectorial milimétrico ni librerías externas no respaldadas en los materiales. |
| **Automatización Web (Scraping)** | Automatización de flujos básicos de navegación, esperas de elementos y extracción de texto visible con **Playwright** en B5. | No se cubren técnicas de evasión de sistemas anti-bot, resolución de captchas ni pipelines distribuidos de scraping masivo. |
| **BeautifulSoup en B5** | Puede aparecer como concepto acotado para parsing de HTML estático si el material actual lo conserva. | No compite con el itinerario práctico principal NumPy -> Pandas -> Playwright -> ReportLab -> SAMI-Applied y no debe convertirse en dependencia central. |
| **Orquestación de Agentes (LangGraph)** | El proyecto final obligatorio de B7 se completa y valida con asistentes de IA en VS Code. **LangGraph es una ampliación avanzada y estrictamente opcional**. | No es obligatorio ni evaluable para la superación del curso. Se reserva como reto optativo para alumnos avanzados. |
| **Lab Python en Acción** | Recurso final opcional con cinco experiencias: OpenCV, Pillow, automatización segura, openpyxl y Tkinter. | No es B8, no es evaluable, no pertenece a SAMI y no debe alterar la progresión obligatoria B1-B7. |
| **OpenCV en el Lab** | Webcam interactiva con `VideoCapture`, `read`, `imshow`, `waitKey`, `cvtColor`, `GaussianBlur`, `Canny`, `imwrite`, `release` y `destroyAllWindows`. | No incluye reconocimiento facial, reconocimiento de objetos, `CascadeClassifier`, YOLO, MediaPipe ni modelos de IA. |
| **Automatización de archivos del Lab** | Organización de archivos falsos exclusivamente dentro de `lab_archivos_prueba/`. | No recomendar Descargas, Documentos, Escritorio ni carpetas reales externas del alumno. |

---

## 4. Directivas de Actuación para el Copiloto del Profesor

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

El Copiloto no debe presentar como contenido del curso: OCR, PyPDF, XML, facturación electrónica, normativa fiscal, firma digital, bases de datos ni aplicaciones web de facturación.

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
