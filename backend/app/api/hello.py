from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.database import get_db
from app.dependencies.auth import get_current_user
import traceback

router = APIRouter()

@router.get("/")
def hello(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    try:
        db.execute(text("SELECT 1"))
        return {
            "message": "Hello, World! Database connected successfully.",
            "user": current_user.email
        }
    except Exception as e:
        traceback_str = traceback.format_exc()
        print(traceback_str)
        raise HTTPException(
            status_code=500,
            detail=f"Database connection failed: {str(e)}"
        )
