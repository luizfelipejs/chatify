import { User } from '@entities/User'
import UserRepository from '@repositories/userRepository'
import { getCustomRepository } from 'typeorm'

class findUserService {
  static async execute (id: string): Promise<User> {
    const customUserRepository = getCustomRepository(UserRepository)

    const user = await customUserRepository.findOne({ id: id }, { relations: ['channels', 'channels.users'] })

    if (!user) {
      throw new Error('Usuario não existe')
    }

    return user
  }
}

export default findUserService
