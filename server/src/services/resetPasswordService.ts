import userRepository from '@repositories/userRepository'
import { getCustomRepository } from 'typeorm'

class resetPasswordService {
  static async execute (email: string, token: string, newPassword: string) {
    const customUserRepository = getCustomRepository(userRepository)
    const user = await customUserRepository.findOne({ email: email })
    const now = new Date()

    if (!user) {
      throw new Error('Usuario não existe')
    } else if (user.token === 'token') {
      throw new Error('a recuperação de senha não foi requisitada')
    } else if (user.expires < now) {
      await customUserRepository.updateUser(user, { token: 'token' })
      throw new Error('Token ja expirou')
    } else if (user.token === token) {
      await customUserRepository.updateUser(user, { token: 'token', expires: 'none' })
    }
  }
}

export default resetPasswordService
