import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(5000);
  const logger = new Logger('App')
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
