import { Module } from '@nestjs/common';
import { SendEmailsController } from './send-emails.controller';
import { SendEmailsService } from './send-emails.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:  [ConfigModule.forRoot()],
  controllers: [SendEmailsController],
  providers: [SendEmailsService],
})
export class SendEmailsModule {}
