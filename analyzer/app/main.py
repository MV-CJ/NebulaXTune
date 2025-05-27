from fastapi import FastAPI, UploadFile, File
import io
import numpy as np
import soundfile as sf
from essentia.standard import KeyExtractor
import logging

from app.core.log_config import setup_logger  # Corrigido aqui

setup_logger()  # Isso inicializa o logger com cor
logger = logging.getLogger(__name__)  # Usa o logger com o formatter amarelo

app = FastAPI()

@app.post("/detect_key/")
async def detect_key(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        logger.info(f"Arquivo recebido: {file.filename} ({len(contents)} bytes)")
        logger.info(f"Iniciando processamento de áudio: {file.filename}")

        audio_data, samplerate = sf.read(io.BytesIO(contents))
        if audio_data.ndim > 1:
            audio_data = np.mean(audio_data, axis=1)

        key_extractor = KeyExtractor()
        key, scale, strength = key_extractor(audio_data)
        full_key = f"{key}{'m' if scale == 'minor' else ''}"

        logger.info(f"Tom identificado: {full_key} (força={strength:.2f})")
        return {
            "key": full_key,
            "strength": strength,
            "mode": scale
        }

    except Exception as e:
        logger.error(f"Erro ao processar áudio: {str(e)}")
        return {"detail": f"Erro ao processar áudio: {str(e)}"}
