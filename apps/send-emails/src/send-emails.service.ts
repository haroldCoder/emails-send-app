import { Injectable } from '@nestjs/common';
import {createTransport, Transporter} from "nodemailer"

@Injectable()
export class SendEmailsService {
  private transported: Transporter;

  constructor(){
    this.transported = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
      }
    })
  }

  async sendEmailMain(to_email: string, subject: string, text: string) : Promise<string>{
      await this.transported.sendMail({
        from: process.env.USER_EMAIL,
        to: to_email,
        subject: subject,
        text: text
      }, (err, info)=>{
        if(err){
          console.log(err);
          return err;
        }
        else{
          return info;
        }
      })
      return;
  }
}
