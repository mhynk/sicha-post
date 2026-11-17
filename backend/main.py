import os

import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
DATABASE_URL = os.environ["DATABASE_URL"]
ALLOWED_ORIGINS = os.environ.get("ALLOWED_ORIGINS", "http://localhost:5173").split(",")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOWED_ORIGINS],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    with psycopg.connect(DATABASE_URL) as conn:
        db_time = conn.execute("SELECT now()").fetchone()[0]
    return {"status": "ok", "db_time": db_time.isoformat()}
