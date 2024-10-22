import { NestFactory } from '@nestjs/core';
import { SendEmailsModule } from './send-emails.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices"

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SendEmailsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    }
  );

  await app.listen();
}
bootstrap();
