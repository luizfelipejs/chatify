import { Request, Response } from 'express'
import createUserService from '@services/createUserService'
import { UserMap } from '../dtos/userDto'
import findUserService from '@services/findUserService'

class UserController {
  async create (request: Request, response: Response) {
    try {
      const { username, urlImage, email, password } = request.body

      const userCreated = await createUserService.execute({
        username: username,
        email: email,
        urlImage: urlImage,
        password: password
      })

      const userMapped = UserMap(userCreated)

      return response.json({ userMapped })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async find (request: Request, response: Response) {
    try {
      const username = request.params.id

      const user = await findUserService.execute(username)

      const userMapped = UserMap(user)

      return response.json({ user: userMapped })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export default new UserController()
