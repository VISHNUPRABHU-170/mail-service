import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor (private readonly mailerService: NestMailerService) { }

  async sendMail(to: string, subject: string, content: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text: content,
        html: `<p>${content}</p>`,
      });

      return { message: 'Email sent successfully' };
    } catch (error) {
      return { message: 'Email sending failed', error: error.message };
    }
  }
}
