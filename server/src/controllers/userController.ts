import { Request, Response } from 'express'
import createUserService from '@services/createUserService'
import { UserMap } from '../dtos/userDto'
import findUserService from '@services/findUserService'
import getIdFromToken from 'src/token/getToken'

class UserController {
  async create (request: Request, response: Response) {
    try {
      const { username, urlImage, email, password } = request.body

      await createUserService.execute({
        username: username,
        email: email,
        urlImage: urlImage,
        password: password
      })

      return response.json({ message: 'user Created' })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async find (request: Request, response: Response) {
    try {
      const id = request.params.id

      const user = await findUserService.execute(id)

      const userMapped = UserMap(user)

      return response.json({ user: userMapped })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async findCurrent (request: Request, response: Response) {
    try {
      const idCurrentUser = getIdFromToken(request)

      const user = await findUserService.execute(idCurrentUser)

      const userMapped = UserMap(user)

      return response.json({ user: userMapped })
    } catch (error) {
      console.log(error)
      return response.status(404).json({ error: error.message })
    }
  }
}

export default new UserController()
