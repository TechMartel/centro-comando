# 1. Importamos la clase FastAPI desde la librería fastapi
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # Nueva importación
import os  # Nueva importación para leer variables de entorno

# 2. Creamos una instancia de la aplicación
app = FastAPI()

# 3. Lista de orígenes permitidos (los "domicilios" de confianza)
#    Por ahora, solo permitimos nuestro servidor de desarrollo de React.
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Leemos la URL del frontend en producción desde una variable de entorno.
# Si la variable FRONTEND_URL existe (la configuraremos en Render),
# la añadimos a nuestra lista de orígenes permitidos.
FRONTEND_URL = os.getenv("FRONTEND_URL")
if FRONTEND_URL:
    origins.append(FRONTEND_URL)

# 4. Añadimos el middleware de CORS a la aplicación.
#    Este es el "guardia de seguridad" que añade los permisos.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir orígenes específicos
    allow_credentials=True, # Permitir cookies (lo usaremos más adelante)
    allow_methods=["*"],    # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],    # Permitir todas las cabeceras
)


# 5. Nuestra ruta raíz (sin cambios)
@app.get("/")
def read_root():
    """
    Esta función se ejecutará cuando alguien visite la URL principal.
    """
    return {"message": "¡API del Centro de Comando Online! (con CORS habilitado) modificacion rama"}



