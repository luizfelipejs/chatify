import nodemailer from 'nodemailer'
import { mailSchema } from '../dtos/mailDto'
import { host, port, user, pass } from 'src/config/MailConfig.json'

class MailService {
  private transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  })

  async sendMail (mail: mailSchema) {
    await this.transport.sendMail({
      from: 'luizfelipejs.svp@gmail.com',
      to: mail.to,
      subject: mail.subject,
      text: mail.text,
      html: mail.html
    })
  }
}

export default new MailService()
