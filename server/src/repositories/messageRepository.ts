import { Channel } from '@entities/Channel'
import { Message } from '@entities/Message'
import { User } from '@entities/User'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Message)
class messageRepository extends Repository<Message> {
  async createMessage (channel: Channel, user: User, content: string): Promise<Message> {
    const message = this.create({ channel: channel, content: content, sender: user })

    await this.save(message)

    return message
  }
}

export default messageRepository
