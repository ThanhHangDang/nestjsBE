import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ValidationPipe,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new LoggingMiddleware().use);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(
          validationErrors.map((error) => ({
            // field: error.property,
            // message: Object.values(error.constraints || {}).join(', '),

            [error.property]: Object.values(error.constraints || {})[0],
          })),
        );
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
