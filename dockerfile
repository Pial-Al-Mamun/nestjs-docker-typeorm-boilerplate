FROM node:22-alpine

RUN npm install -g pnpm@latest-10

WORKDIR /app

COPY . .

RUN pnpm install

CMD [ "pnpm", "run", "start:dev" ]