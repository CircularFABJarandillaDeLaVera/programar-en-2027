def describir_informe(tabla, alertas):
    return {
        "secciones": ["resumen", "tabla", "alertas", "conclusion"],
        "filas": len(tabla),
        "alertas": len(alertas)
    }
