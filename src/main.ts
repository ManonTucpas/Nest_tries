import { NestFactory } from '@nestjs/core';
import { DataUserpModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(DataUserpModule);
  await app.listen(3000);
}
bootstrap();
