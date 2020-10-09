import { Request, Response } from 'express'
import logonUserService from '@services/logonUserService'
import recoverPasswordService from '@services/recoverPasswordService'
import resetPasswordService from '@services/resetPasswordService'

class AuthController {
  async login (request: Request, response: Response) {
    try {
      const { email, password } = request.body

      const logonUserServiceToken = await logonUserService.execute({ email, password })

      return response.json({ logonUserServiceToken })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async recoverPassword (request: Request, response: Response) {
    try {
      const { email } = request.body

      await recoverPasswordService.execute(email)

      return response.json({
        message: 'email de recuperação de senha enviado'
      })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }

  async resetPassword (request: Request, response: Response) {
    try {
      const { email, token, password } = request.body

      await resetPasswordService.execute(email, token, password)

      return response.json({
        message: 'senha atualizada'
      })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export default new AuthController()
