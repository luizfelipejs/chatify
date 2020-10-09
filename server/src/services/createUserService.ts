import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import userRepository from '@repositories/userRepository'
import { UserSchema } from '../dtos/userDto'
import bcrypt from 'bcrypt'

export default class createUserService {
  static async execute (user: UserSchema): Promise<User> {
    const customUserRepository = getCustomRepository(userRepository)
    const findUser = await customUserRepository.findOne({ email: user.email })

    if (findUser) {
      throw new Error('Usuario ja cadastrado')
    }

    const passwordHashed = await bcrypt.hash(user.password, 10)

    user.password = passwordHashed

    const userCreated = await customUserRepository.createUser(user)

    return userCreated
  }
}
