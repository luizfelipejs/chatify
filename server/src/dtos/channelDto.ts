import { Channel } from '@entities/Channel'
import { UserMap } from './userDto'
import { MessageMap } from './messageDto'

export const channelMap = (channel: Channel) => {
  const usersMapped = channel.users.map(user => UserMap(user))
  const messagesMapped = channel.messages.map(message => MessageMap(message))

  return {
    id: channel.id,
    users: usersMapped,
    createdAt: channel.createdAt,
    messages: messagesMapped
  }
}
