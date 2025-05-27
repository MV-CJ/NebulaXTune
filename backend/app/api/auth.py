from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.user import User
from app.core.security import hash_password, verify_password, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from pydantic import BaseModel, model_validator
import httpx
from datetime import timedelta

router = APIRouter()

class LoginRequest(BaseModel):
    email: str | None = None
    password: str | None = None
    github_token: str | None = None

    @model_validator(mode='after')
    def check_one_method(cls, values):
        email, password, token = values.email, values.password, values.github_token
        if token and (email or password):
            raise ValueError("Use either github_token OR email+password, not both")
        if not token and (not email or not password):
            raise ValueError("You must provide github_token OR both email and password")
        return values

@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    if data.github_token:
        # Login via GitHub
        headers = {"Authorization": f"token {data.github_token}"}
        response = httpx.get("https://api.github.com/user", headers=headers)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Invalid GitHub token")

        github_user = response.json()
        github_id = str(github_user["id"])
        github_email = github_user.get("email") or f"{github_id}@github.com"
        github_name = github_user.get("name") or github_user.get("login")

        user = db.query(User).filter(User.github_id == github_id).first()
        if not user:
            user = User(
                name=github_name,
                email=github_email,
                hashed_password=None,
                github_id=github_id,
            )
            db.add(user)
            db.commit()
            db.refresh(user)

    else:
        # Login local (email + senha)
        user = db.query(User).filter(User.email == data.email).first()
        if not user or not user.hashed_password:
            raise HTTPException(status_code=400, detail="Invalid credentials")
        if not verify_password(data.password, user.hashed_password):
            raise HTTPException(status_code=400, detail="Invalid credentials")

    # Geração de token para ambos os casos
    access_token = create_access_token(
        data={"sub": str(user.id)},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": user.id,
        "email": user.email
    }
