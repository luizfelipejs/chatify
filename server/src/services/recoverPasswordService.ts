import userRepository from '@repositories/userRepository'
import mailService from 'src/mail/mailService'
import crypto from 'crypto'
import { getCustomRepository } from 'typeorm'

class recoverPasswordService {
  static async execute (email: string) {
    const customUserRepository = getCustomRepository(userRepository)

    const user = await customUserRepository.findOne({ email: email })
    const token = crypto.randomBytes(10).toString('hex')
    const expiresUpdated = new Date()
    expiresUpdated.setHours(new Date().getHours() + 1)

    await customUserRepository.updateUser(user, { token, expires: expiresUpdated })

    if (!user) {
      throw new Error('Usuario não existe')
    }

    mailService.sendMail({
      to: user.email,
      subject: 'recuperação de senha',
      text: 'use deste token pra recuperar sua senha',
      html: `<p>utilize este token para recuperar sua senha ${token}</p>`
    })
  }
}

export default recoverPasswordService
