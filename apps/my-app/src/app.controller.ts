import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/send-email')
  async sendEmail(@Body() {to_email, subject, text}: {to_email: string, subject: string, text: string}){
    return this.appService.sendEmail(to_email, subject, text);
  }
}
