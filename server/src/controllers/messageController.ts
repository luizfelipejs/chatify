import sendMessageService from '@services/sendMessageService'
import { Request, Response } from 'express'
import getIdFromToken from 'src/token/getToken'

export default new class MessageController {
  async create (request: Request, response: Response) {
    try {
      const { content, idChannel } = request.body
      const idUser = getIdFromToken(request)

      await sendMessageService.execute(idUser, idChannel, content)

      return response.json({ message: `mensagem enviada para o canal ${idChannel}` })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}()
