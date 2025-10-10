# nestjs-docker-boilerplate

### NestJS + Docker + PostgreSQL + TypeORM Starter

This boilerplate provides a ready-to-use setup for building NestJS applications with:

- PostgreSQL via Docker
- TypeORM integration
- Environment variable validation with Zod, including type safety

---

### Features

- Dockerized PostgreSQL setup for local development
- TypeORM ready with database configuration
- EnvService with Zod for validating environment variables (inspired by [this Medium article](https://medium.com/nestjs-ninja/creating-a-configuration-module-like-a-specialist-with-zod-inside-nestjs-c61430de896b))
- Modular NestJS project structure

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
