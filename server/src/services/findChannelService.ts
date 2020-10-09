import { Channel } from '@entities/Channel'
import ChannelRepository from '@repositories/channelRepository'
import filterItemInArray from 'src/utils/filterItemInArray'
import { getCustomRepository } from 'typeorm'

class findChannelService {
  static async execute (id: string, idCurrentUser: string): Promise<Channel> {
    const customChannelRepository = getCustomRepository(ChannelRepository)

    const channel = await customChannelRepository.findChannel(id)

    const currentUserInChannel = filterItemInArray(idCurrentUser, 'id', channel.users)

    if (!currentUserInChannel) {
      throw new Error('requisição pro canal recusada')
    }

    return channel
  }
}

export default findChannelService
