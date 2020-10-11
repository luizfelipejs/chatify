import { User } from '@entities/User'
import { channelMap } from './channelDto'

export interface UserSchema {
  username: string
  urlImage: string
  email: string
  password: string
}

export const UserMap = (user: User) => {
  const channelsMapped = user.channels ? user.channels.map(channel => channelMap(channel)) : undefined
  return {
    id: user.id,
    username: user.username,
    urlImage: user.urlImage,
    email: user.email,
    channels: channelsMapped,
    createdAt: user.createdAt
  }
}
