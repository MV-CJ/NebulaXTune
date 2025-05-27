from fastapi import FastAPI
from app.api import router as api_router
from app.db.database import create_tables

app = FastAPI()

# Cria as tabelas automaticamente no startup
create_tables()

# Registra as rotas
app.include_router(api_router)
