import { Channel } from '@entities/Channel'
import { UserMap } from './userDto'
import { MessageMap } from './messageDto'

export const channelMap = (channel: Channel) => {
  const usersMapped = channel.users ? channel.users.map(user => UserMap(user)) : undefined
  const messagesMapped = channel.messages !== undefined ? channel.messages.map(message => MessageMap(message)) : undefined

  return {
    id: channel.id,
    users: usersMapped,
    createdAt: channel.createdAt,
    messages: messagesMapped
  }
}
