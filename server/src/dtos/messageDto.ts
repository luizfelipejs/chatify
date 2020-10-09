import { Message } from '@entities/Message'
import { UserMap } from './userDto'

export const MessageMap = (message: Message) => {
  const messageMapped = {
    id: message.id,
    content: message.content,
    createdAt: message.createdAt,
    sender: UserMap(message.sender)
  }

  return messageMapped
}
