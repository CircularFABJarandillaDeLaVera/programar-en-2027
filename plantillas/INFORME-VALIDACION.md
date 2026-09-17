# INFORME DE VALIDACIÓN — Programar en 2027

> Plantilla del mini-harness (FASE 3). La rellena `scripts/verificar.py`
> con `--informe <ruta>`. El verificador comprueba, clasifica e informa:
> no instala, no corrige, no modifica el entorno ni descarga nada.

- Fecha/hora (UTC): {{FECHA_HORA_UTC}}
- Rama: {{RAMA}}
- Commit: {{COMMIT}}
- Comando usado: {{COMANDO}}
- Estado global: **{{ESTADO_GLOBAL}}**

## Alcance

{{ALCANCE}}

## Comprobaciones

| Comprobación | Estado | Detalle |
|---|---|---|
{{TABLA_COMPROBACIONES}}

## Errores reales (NO_APTO)

{{ERRORES_REALES}}

## Elementos no verificados (NO_VERIFICADO)

{{NO_VERIFICADOS}}

## Notas de Git (informativo)

{{NOTAS_GIT}}

## Salida resumida de tests (recorte, no volcado completo)

{{RECORTE_TESTS}}
