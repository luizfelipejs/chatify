import { EntityRepository, Repository } from 'typeorm'
import { Channel } from '@entities/Channel'
import { User } from '@entities/User'

@EntityRepository(Channel)
class ChannelRepository extends Repository<Channel> {
  async createChannel (users: User[]): Promise<Channel> {
    const channel = this.create({
      users: users
    })

    await this.save(channel)

    return channel
  }

  async findChannel (id: string): Promise<Channel> {
    const channel = await this.findOne({ id }, { relations: ['users', 'messages', 'messages.sender'] })

    return channel
  }
}

export default ChannelRepository
