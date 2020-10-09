import { User } from '@entities/User'

export interface UserSchema {
  username: string
  urlImage: string
  email: string
  password: string
}

export const UserMap = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    urlImage: user.urlImage,
    email: user.email,
    createdAt: user.createdAt
  }
}
