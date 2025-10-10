import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './env/env.service';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: {
        transport: {
          target: 'pino-pretty',
          level: process.env.NODE_ENV === 'PROD' ? 'info' : 'debug',
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'HH:MM:ss',
            ignoreElements: 'pid,hostname',
            singleLine: false,
          },
        },
      },
    }),
  );

  const configService = app.get(EnvService);
  const port = configService.get('PORT') || 3000;

  await app.listen(port);
  console.log(`Server running on port ${port}`);
}

bootstrap();
