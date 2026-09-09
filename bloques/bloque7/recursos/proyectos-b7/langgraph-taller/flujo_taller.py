"""Taller: Python orquesta. Primera parte SIN LLM.

Un grafo sencillo y ejecutable:

    estado -> nodo -> condicion -> ruta A / ruta B / ruta C -> resultado

No es la IA quien controla el programa. Python decide el flujo:
LangGraph organiza los pasos, una funcion Python pura elige la ruta.

Uso:
    python flujo_taller.py --demo
    python flujo_taller.py --demo --stock 0
    python flujo_taller.py --demo --stock 2 --minimo 5
"""

import argparse
import json
from pathlib import Path

try:
    from langgraph.graph import END, START, StateGraph

    HAY_LANGGRAPH = True
except ImportError:  # pragma: no cover - el aula lo instala via requirements
    HAY_LANGGRAPH = False

DEMO_PATH = Path(__file__).with_name("datos_demo.json")


def decidir_siguiente(stock, minimo):
    """Regla pura de Python: elige la ruta segun el estado.

    Devuelve "sin_stock", "pedir_material" o "disponible".
    Esta funcion NO necesita LangGraph y se puede probar sola.
    """
    if stock is None:
        return "sin_stock"
    if stock <= 0:
        return "sin_stock"
    if stock < minimo:
        return "pedir_material"
    return "disponible"


def cargar_contexto_demo():
    """Lee el contexto de demostracion (sin red, sin FIWARE)."""
    with DEMO_PATH.open("r", encoding="utf-8") as archivo:
        return json.load(archivo)


def obtener_contexto(estado):
    """Nodo 1: carga el contexto al estado."""
    contexto = cargar_contexto_demo()
    if estado.get("forzar_stock") is not None:
        contexto["stock"] = estado["forzar_stock"]
    if estado.get("forzar_minimo") is not None:
        contexto["stock_minimo"] = estado["forzar_minimo"]
    estado["pieza"] = contexto.get("pieza", "Pieza")
    estado["stock"] = contexto.get("stock")
    estado["stock_minimo"] = contexto.get("stock_minimo", 5)
    estado["fuente"] = "DATOS DE DEMOSTRACION"
    return estado


def validar_datos(estado):
    """Nodo 2: marca si los datos estan completos."""
    if estado.get("stock") is None or estado.get("stock_minimo") is None:
        estado["datos_validos"] = False
    else:
        estado["datos_validos"] = True
    return estado


def evaluar_estado(estado):
    """Nodo 3: aplica la regla Python y guarda la decision."""
    if not estado.get("datos_validos", False):
        estado["decision"] = "SIN_STOCK"
        estado["ruta"] = "sin_stock"
        return estado
    ruta = decidir_siguiente(estado.get("stock"), estado.get("stock_minimo"))
    estado["ruta"] = ruta
    estado["decision"] = {
        "sin_stock": "SIN_STOCK",
        "pedir_material": "PEDIR_MATERIAL",
        "disponible": "DISPONIBLE",
    }[ruta]
    return estado


def nodo_sin_stock(estado):
    estado["ruta"] = "sin_stock"
    return estado


def nodo_pedir_material(estado):
    estado["ruta"] = "pedir_material"
    return estado


def nodo_disponible(estado):
    estado["ruta"] = "disponible"
    return estado


def construir_grafo():
    """Monta el grafo. Requiere langgraph (ver requirements.txt)."""
    if not HAY_LANGGRAPH:
        raise RuntimeError(
            "langgraph no esta instalado. Ejecuta: pip install -r requirements.txt"
        )
    grafo = StateGraph(dict)
    grafo.add_node("obtener_contexto", obtener_contexto)
    grafo.add_node("validar_datos", validar_datos)
    grafo.add_node("evaluar_estado", evaluar_estado)
    grafo.add_node("sin_stock", nodo_sin_stock)
    grafo.add_node("pedir_material", nodo_pedir_material)
    grafo.add_node("disponible", nodo_disponible)
    grafo.add_edge(START, "obtener_contexto")
    grafo.add_edge("obtener_contexto", "validar_datos")
    grafo.add_edge("validar_datos", "evaluar_estado")
    grafo.add_conditional_edges(
        "evaluar_estado",
        lambda estado: estado.get("ruta", "sin_stock"),
        {
            "sin_stock": "sin_stock",
            "pedir_material": "pedir_material",
            "disponible": "disponible",
        },
    )
    grafo.add_edge("sin_stock", END)
    grafo.add_edge("pedir_material", END)
    grafo.add_edge("disponible", END)
    return grafo.compile()


def ejecutar_flujo(forzar_stock=None, forzar_minimo=None):
    """Ejecuta el grafo y muestra el resultado observable."""
    app = construir_grafo()
    resultado = app.invoke(
        {"forzar_stock": forzar_stock, "forzar_minimo": forzar_minimo}
    )
    print(f"FUENTE DE DATOS: {resultado['fuente']}")
    print()
    print("CONTEXTO RECIBIDO")
    print(f"Pieza: {resultado['pieza']}")
    print(f"Stock: {resultado['stock']}")
    print(f"Minimo: {resultado['stock_minimo']}")
    print()
    print("GRAFO")
    print(f"obtener_contexto -> validar_datos -> evaluar_estado -> {resultado['ruta']}")
    print()
    print("RESULTADO")
    print(resultado["decision"])
    return resultado


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Grafo sencillo sin LLM: Python decide la ruta."
    )
    parser.add_argument("--demo", action="store_true",
                        help="Usa los datos de demostracion locales.")
    parser.add_argument("--stock", type=int, default=None,
                        help="Sobreescribe el stock del demo.")
    parser.add_argument("--minimo", type=int, default=None,
                        help="Sobreescribe el stock minimo del demo.")
    args = parser.parse_args()
    if not args.demo and (args.stock is None and args.minimo is None):
        print("Usa --demo para ejecutar con datos locales.")
        print("Ejemplo: python flujo_taller.py --demo")
        raise SystemExit(1)
    ejecutar_flujo(forzar_stock=args.stock, forzar_minimo=args.minimo)
