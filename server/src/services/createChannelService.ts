import { Channel } from '@entities/Channel'
import channelRepository from '@repositories/channelRepository'
import UserRepository from '@repositories/userRepository'
import { getCustomRepository } from 'typeorm'

export default class createChannelService {
  static async execute (ids: string[]): Promise<Channel> {
    const customUserRepository = getCustomRepository(UserRepository)
    const customChannelRepository = getCustomRepository(channelRepository)

    const users = await customUserRepository.findArrayUser(ids)
    const channel = await customChannelRepository.createChannel(users)

    return channel
  }
}
