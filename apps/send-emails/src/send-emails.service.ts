import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import * as nodemailerSendgrid from 'nodemailer-sendgrid';

@Injectable()
export class SendEmailsService {
  private transported: Transporter;

  constructor() {
    this.transported = createTransport(
      nodemailerSendgrid({
        apiKey: process.env.USER_PASS,
      }),
    );
  }

  async sendEmailMain(
    to_email: string,
    subject: string,
    text: string,
  ): Promise<string> {
    try {
      const res = await this.transported.sendMail({
        from: process.env.USER_EMAIL,
        to: to_email,
        subject: subject,
        text: text,
      });

      return res;
    } catch (err) {
      return err;
    }
  }
}
