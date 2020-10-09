import { User } from '@entities/User'
import UserRepository from '@repositories/userRepository'
import { getCustomRepository } from 'typeorm'

class findUserService {
  static async execute (username: string): Promise<User> {
    const customUserRepository = getCustomRepository(UserRepository)

    const user = await customUserRepository.findUserByUsername(username)

    if (!user) {
      throw new Error('Usuario não existe')
    }

    return user
  }
}

export default findUserService
