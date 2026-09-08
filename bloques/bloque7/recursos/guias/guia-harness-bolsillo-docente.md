# Guia docente - Practica 00: Del prompt al Harness

Previa a SAMI Final. El alumno dirige a un agente sobre un inventario minimo
aislado (`practicas/harness-bolsillo/`). No toca SAMI. Sin red obligatoria.

## Intencion pedagogica

Que el alumno sienta en sus manos que el prompt no basta: sin contexto,
limites, criterios y verificacion, el agente inventa y nadie puede defender
el resultado. La Fase A fabrica el problema; la Fase B entrena el metodo
(Problema -> Plan -> Contexto -> IA -> Codigo -> Ejecutar -> Entender ->
Depurar -> Modificar -> Validar) y la decision humana final.
Exito = dice "aprendi a no perder el control", no "aprendi OpenSpec".

## Tiempos

| Fase | 90 min (recomendado) | 60 min (compacto) | 30 min (capsula) |
| --- | --- | --- | --- |
| VER (demo + comprobar.py) | 10 | 10 | 10 (solo docente) |
| PROBAR Fase A sin harness | 20 | 10 (rapida) | 0 (se cuenta como historia) |
| MODIFICAR Fase B (T1+T2) | 35 | 25 (solo T1) | 10 (T1 guiado en vivo) |
| Revision adversarial | 15 | 10 (por parejas, 3 hallazgos) | 0 (se omite) |
| Chuleta + cierre | 10 | 5 | 10 (reparto + Mini-Reto casa) |

## Que observar

- Fase A: casi nadie define criterios; la mayoria acepta la primera respuesta.
- B5-B6: cuesta pedir PLAN y frenar la implementacion. Exige el OK escrito.
- B8: ejecutan poco; recuerda que "dice la IA" no es evidencia.
- Cierre: cada alumno nombra 1 diferencia A/B y 1 regla repetida.

## Errores previsibles del alumnado

- Pedir "arreglalo" reenviando el error sin linea ni esperado.
- Aceptar codigo que no puede explicar linea por linea.
- Saltar de T1 a T2 sin verificar.
- Confundir NO_VERIFICADO con fallo y borrar codigo que estaba bien.

## Desviaciones tipicas del agente (para mostrar en VER)

- Aplica descuento con `>= 10` en vez de `> 10` (rompe el borde 500.0).
- Valida solo precio y olvida stock, o valida con `assert` en vez de `ValueError`.
- Anade `pandas`, `click`, menu CLI o logging no pedidos.
- Reescribe `cargar/guardar` o cambia el formato JSON.
- Toca `comprobar.py` para "ponerlo en verde".
- Devuelve el archivo completo cuando se pidio solo T1.

Ten preparado un diff con 2-3 de estas para la demo y el Plan B sin red.

## Preguntas socraticas (3 niveles)

- Nivel 1 (reflexiva): "Que esperabas que pasara con stock 10? Que paso?"
- Nivel 2 (foco): "Mira el operador de esa linea. Que casos deja dentro?"
- Nivel 3 (plantilla minima): `if stock > ___:` / `raise ValueError("___")`.
- Para defensa: "Que cambio la IA? Que cambiaste tu? Como lo comprobaste?
  Que queda NO_VERIFICADO?"

## Plan B tecnico (sin red)

- Sin agente/red: usa los diffs impresos (uno "sin harness" con 3 desviaciones
  y un plan "con harness"). Se trabaja lectura critica + `comprobar.py` local.
- Si falla el entorno: modo simulacion, sin escribir disco; imprimir
  `esperado vs real` por consola.
- Si Colab no carga: prediccion de salida en papel a partir del diff.

## Plan B pedagogico

- Grupo rapido: convierte una regla repetida en procedimiento escrito y actua
  de revisor adversarial de otro grupo.
- Grupo atascado: reduce a solo T1 (descuento). T2 y revision, en comun.
- Parejas: uno dirige, otro vigila el NO QUIERO y pide el OK antes de seguir.
- Nunca dar la solucion completa; pistas en 3 niveles.

## Plan B temporal

- Completa: A + B (T1+T2) + adversarial 5 hallazgos + chuleta.
- Reducida: A rapida + B solo T1 + verificacion.
- Emergencia: demo docente A vs B + chuleta + Mini-Reto para casa.

## Revision por parejas (como ejecutarla)

1. Intercambian solo: objetivo, 5 criterios, codigo, salida de `comprobar.py`.
2. Consigna exacta del revisor: "Actua como revisor esceptico. No propongas
   codigo. Compara objetivo + criterios contra codigo y salida. Busca:
   1) supuestos no escritos, 2) casos borde no contemplados, 3) diferencias
   entre lo pedido y lo implementado. Maximo 5 hallazgos: hallazgo /
   evidencia / gravedad."
3. El autor clasifica cada hallazgo (APTO / NO_APTO / NO_VERIFICADO).
   Sin obligacion de corregirlo en clase.

## Que NO evaluar como memorizacion

Definiciones de Harness, siglas, OpenSpec/Specboot, Jira, MCP, worktrees,
LangGraph, coverage o cadena de PRs. Se evalua: dirige, limita, exige plan,
verifica, distingue no-verificado y decide. Nada de recitar teoria de LLM.
