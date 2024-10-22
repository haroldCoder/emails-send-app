import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('EMAIL_SEND') private readonly client: ClientProxy) { }

  sendEmail(to_email: string, subject: string, text: string) {
    return this.client.send('send_email', { to_email, subject, text });
  }
}
