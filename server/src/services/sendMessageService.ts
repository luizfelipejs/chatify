import { Message } from '@entities/Message'
import ChannelRepository from '@repositories/channelRepository'
import messageRepository from '@repositories/messageRepository'
import UserRepository from '@repositories/userRepository'
import filterItemInArray from 'src/utils/filterItemInArray'
import { getCustomRepository } from 'typeorm'

class sendMessageService {
  static async execute (userId, channelId, content): Promise<Message> {
    const customMessageRepository = getCustomRepository(messageRepository)
    const customUserRepository = getCustomRepository(UserRepository)
    const customChannelRepository = getCustomRepository(ChannelRepository)

    const user = await customUserRepository.findOne({ id: userId })
    const channel = await customChannelRepository.findChannel(channelId)
    const userInChannel = filterItemInArray(user.id, 'id', channel.users)

    if (!userInChannel) {
      throw new Error('Envio de mensagem recusado')
    }

    const message = await customMessageRepository.createMessage(channel, user, content)

    return message
  }
}

export default sendMessageService
