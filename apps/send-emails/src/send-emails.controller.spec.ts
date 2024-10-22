import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailsController } from './send-emails.controller';
import { SendEmailsService } from './send-emails.service';

describe('SendEmailsController', () => {
  let sendEmailsController: SendEmailsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SendEmailsController],
      providers: [SendEmailsService],
    }).compile();

    sendEmailsController = app.get<SendEmailsController>(SendEmailsController);
  });
});
