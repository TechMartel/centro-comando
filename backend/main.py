# 1. Importamos la clase FastAPI desde la librería fastapi
from fastapi import FastAPI

# 2. Creamos una instancia de la aplicación
app = FastAPI()

# 3. Definimos un "decorador" de ruta.
#    Esto le dice a FastAPI que la función de abajo
#    se encargará de las peticiones que vayan a:
#    - la ruta raíz ("/")
#    - usando un método GET
@app.get("/")
def read_root():
    """
    Esta función se ejecutará cuando alguien visite la URL principal.
    """
    # 4. Devolvemos un diccionario que FastAPI convertirá a JSON.
    return {"message1": "¡API del Centro de Comando Online!"}

