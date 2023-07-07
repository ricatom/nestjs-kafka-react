import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { kafkaMicroserviceConfig } from './config/kafka-microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.connectMicroservice(kafkaMicroserviceConfig);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();