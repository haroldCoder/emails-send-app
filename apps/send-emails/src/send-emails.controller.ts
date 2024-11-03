import { Controller, Get } from '@nestjs/common';
import { SendEmailsService } from './send-emails.service';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SendEmailsController {
  constructor(private readonly sendEmailsService: SendEmailsService) {}

  @MessagePattern('send_email')
  async sendEmailMain(@Payload() {to_email, subject, text}: {to_email: string, subject: string, text: string}, @Ctx() context): Promise<string>{
    console.log(context);
    return await this.sendEmailsService.sendEmailMain(to_email, subject, text);
  }
}
