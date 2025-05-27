import importlib
import pkgutil
from fastapi import APIRouter

router = APIRouter()

def include_all_routers():
    # Percorre todos os módulos dentro da pasta 'app.api'
    package = __name__
    for _, module_name, _ in pkgutil.iter_modules(__path__):
        module = importlib.import_module(f"{package}.{module_name}")
        if hasattr(module, "router"):
            router.include_router(module.router)

include_all_routers()
