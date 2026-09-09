from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Image, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


def formato_eur(valor):
    return f"{float(valor):.2f} EUR"


def buscar_logo():
    """Localiza el logo sin depender de una profundidad fija de carpetas.

    Si no hay logo disponible, devuelve None y el PDF se genera sin logo:
    un logo ausente nunca debe romper el informe.
    """
    for base in Path(__file__).resolve().parents:
        candidato = base / "assets" / "branding" / "logo-circular-fab.png"
        if candidato.exists():
            return candidato
    local = Path(__file__).resolve().parent / "logo-circular-fab.png"
    return local if local.exists() else None


def compilar_reporte_ejecutivo_pdf(ruta_pdf, tabla, indicadores, ruta_logo=None):
    logo = Path(ruta_logo) if ruta_logo else buscar_logo()

    doc = SimpleDocTemplate(
        str(ruta_pdf),
        pagesize=A4,
        rightMargin=36,
        leftMargin=36,
        topMargin=32,
        bottomMargin=32,
    )
    styles = getSampleStyleSheet()
    story = []

    if logo is not None and logo.exists():
        story.append(Image(str(logo), width=120, height=42))
        story.append(Spacer(1, 12))

    story.append(Paragraph("SAMI-Applied: informe de mercado", styles["Heading1"]))
    story.append(Paragraph(
        "Resumen ejecutivo de componentes disponibles generado a partir de datos de hardware.",
        styles["BodyText"],
    ))
    story.append(Spacer(1, 14))

    resumen = [
        ["Indicador", "Valor"],
        ["Ofertas validas", str(indicadores["ofertas_validas"])],
        ["Precio medio", formato_eur(indicadores["precio_medio"])],
        ["Precio minimo", formato_eur(indicadores["precio_minimo"])],
        ["Precio maximo", formato_eur(indicadores["precio_maximo"])],
        ["Stock total", str(indicadores["stock_total"])],
    ]
    tabla_resumen = Table(resumen, colWidths=[180, 180])
    tabla_resumen.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.lightgrey),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ALIGN", (1, 1), (-1, -1), "RIGHT"),
    ]))
    story.append(tabla_resumen)
    story.append(Spacer(1, 16))

    story.append(Paragraph("Tabla analizada", styles["Heading2"]))
    datos_tabla = [["ID", "Componente", "Categoria", "Precio", "Stock"]]
    for _, fila in tabla.reset_index().iterrows():
        datos_tabla.append([
            str(fila["id"]),
            Paragraph(str(fila["componente"]), styles["BodyText"]),
            str(fila["categoria"]),
            formato_eur(fila["precio"]),
            str(fila["stock"]),
        ])

    tabla_ofertas = Table(datos_tabla, colWidths=[70, 180, 105, 85, 55])
    tabla_ofertas.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.lightgrey),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ALIGN", (3, 1), (-1, -1), "RIGHT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(tabla_ofertas)
    story.append(Spacer(1, 14))

    story.append(Paragraph(
        "Conclusion: revisar primero los componentes disponibles con mejor equilibrio entre precio y stock.",
        styles["BodyText"],
    ))

    doc.build(story)
    return ruta_pdf
