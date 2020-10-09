import { getCustomRepository } from 'typeorm'
import userRepository from '@repositories/userRepository'
import bcrypt from 'bcrypt'
import generateToken from 'src/token/generateToken'

interface logonSchema {
  email: string
  password: string
}

class logonUserService {
  static async execute (logonParm: logonSchema): Promise<{token: string}> {
    const customUserRepository = getCustomRepository(userRepository)

    const user = await customUserRepository.findOne({ email: logonParm.email })
    const verificationPassword = await bcrypt.compare(logonParm.password, user.password)

    if (!user) {
      throw new Error('Usuario não encontrado')
    } else if (!verificationPassword) {
      throw new Error('Senha invalida')
    } else {
      return { token: generateToken(user.id) }
    }
  }
}

export default logonUserService
