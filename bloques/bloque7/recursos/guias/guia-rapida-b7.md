# Guia rapida - Bloque 7

Elige la solución más sencilla que resuelva la necesidad. Considera el esfuerzo
inicial, cuánto puedes reutilizarla y quién mantendrá las instrucciones. No
instales otro agente ni configures una cuenta externa para completar B7.

## Python + IA

1. PROBLEMA: escribe que falla o que quieres mejorar.
2. PLAN: divide en pasos.
3. CONTEXTO: archivo, funcion, datos, restricciones.
4. IA: pide ayuda pequena.
5. CODIGO: lee la propuesta.
6. EJECUTAR: prueba con datos conocidos.
7. ENTENDER: explica que hace.
8. DEPURAR: usa error y fragmento minimo.
9. MODIFICAR: ajusta sin romper alcance.
10. VALIDAR: compara salida esperada y real.

## Regla antizombi

No aceptes codigo que no puedas explicar, probar y defender.

## Agente habitual y skill de preparación

Una petición de depuración al agente habitual no es por sí sola un agente
especializado. La especialización solo merece conservarse cuando define una
responsabilidad, contexto, herramientas permitidas, límites y resultado
esperado. Puede aplicarse con la herramienta que ya utilizas.

EXP-02 aplica esa decisión sobre el repositorio de participantes con la skill
portátil `preparar-cambio`, incluida en `.agents/skills/preparar-cambio/`.
La persona conserva la petición usada, la ficha, el plan, el diff, las pruebas,
los casos manuales y su decisión. La skill prepara el cambio; no lo autoriza ni
lo publica por sí sola.

Antes de ejecutar, inspecciona un intérprete Python disponible y reutilízalo. No
crees entornos, instales dependencias ni cambies configuración por rutina. En
EXP-02, `unittest` forma parte de Python y se ejecuta con `python -m unittest -v`;
un fallo del detector de pruebas del editor no demuestra que las pruebas no
existan. Si el entorno no permite ejecutar algo, explica el impedimento y marca
el resultado como `NO_VERIFICADO`.

Tras una autorización, informa del archivo modificado, las líneas cambiadas
mediante `git diff` o comparación equivalente, las comprobaciones y resultados,
y lo que siga sin verificarse. Si no hay Git, no lo inicialices automáticamente
ni finjas disponer de `git diff`: compara antes/después cuando conserves el
original y declara la limitación si no es posible.

## Cierre y continuidad

Mantén preparado un punto de control Git cuando sea posible, pero no lo
conviertas en requisito de acceso ni bloquees la práctica por no tenerlo.

El material de evidencia y defensa es opcional. LangGraph es una ampliación
opcional pendiente de validación específica; no se presenta un sistema
multiagente como implementado.

Cuando termines las comprobaciones de B7, continúa en
[Recorrido práctico · Construye y conecta tus proyectos](../../../lab-python-en-accion/index.html).

