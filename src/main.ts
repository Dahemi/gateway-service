import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    credentils:true,
  });

  await app.listen(process.env.PORT ?? 4000);
  console.log('Gateway running on http://localhost:4000/graphql');
}
bootstrap();
