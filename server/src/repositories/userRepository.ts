import { EntityRepository, Repository } from 'typeorm'
import { User } from '@entities/User'
import { UserSchema } from '../dtos/userDto'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async createUser (User: UserSchema): Promise<User> {
    const userCreated = this.create(User)

    await this.save(userCreated)

    return userCreated
  }

  async updateUser (user: User, update: object): Promise<User> {
    const updateUser = this.merge(user, update)

    await this.save(updateUser)

    return updateUser
  }

  async findArrayUser (ids: string[]): Promise<User[]> {
    const usersPromisse = ids.map(async id => {
      return await this.findOne({ id })
    })

    const usersResolved = await Promise.all(usersPromisse)

    return usersResolved
  }

  async findUserByID (id: string): Promise<User> {
    const user = await this.findOne({ id: id }, { relations: ['channels', 'channels.users'] })
    return user
  }
}

export default UserRepository
