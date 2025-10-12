# nestjs-docker-boilerplate

### NestJS + Docker + PostgreSQL + TypeORM Starter

This boilerplate provides a ready-to-use setup for building NestJS applications with:

- PostgreSQL via Docker
- TypeORM integration
- Environment variable validation with Zod, including type safety
- Runs on the FastifyAdapter
---

### Features

- Dockerized PostgreSQL setup for local development
- TypeORM ready with database configuration
- EnvService with Zod for validating environment variables (inspired by [this Medium article](https://medium.com/nestjs-ninja/creating-a-configuration-module-like-a-specialist-with-zod-inside-nestjs-c61430de896b))
- Modular NestJS project structure

---

### ⚙️ Quick Navigation

- [Setup](#setup)
- [Optional: Move NestJS into a Backend Folder](#optional-move-nestjs-into-a-backend-folder)

---

### Setup

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. run the project:

```bash
docker compose up -d
```

### Optional: Move NestJS into a backend Folder

If you prefer keeping the NestJS app inside a backend/ directory:

1. move everything to the backend folder

```bash
mv !(docker-compose.yml) backend/
```

2. change the backend service in docker compose

```yml
backend:
  build: './backend'
```

