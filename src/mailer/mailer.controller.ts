import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mail')
export class MailerController {
  constructor (private readonly mailService: MailerService) { }

  @Post('send')
  async sendEmail(
    @Body() body: { to: string; subject: string; content: string; }
  ) {
    return this.mailService.sendMail(body.to, body.subject, body.content);
  }
}
