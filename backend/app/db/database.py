import os
import sqlalchemy
from sqlalchemy.orm import sessionmaker
from app.db.base import Base
from app.models import *  # para registrar modelos

DB_URL = os.getenv("DATABASE_URL")

engine = sqlalchemy.create_engine(
    DB_URL,
    # **remova** connect_args para Postgres (Neon)
    # use apenas para SQLite se quiser
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def create_tables():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
