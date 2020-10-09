import createChannelService from '@services/createChannelService'
import findChannelService from '@services/findChannelService'
import { Request, Response } from 'express'
import { channelMap } from 'src/dtos/channelDto'
import getIdFromToken from 'src/token/getToken'

class ChannelController {
  async create (request: Request, response: Response) {
    try {
      const { id } = request.body
      const idCurrentUser = getIdFromToken(request)

      const channel = await createChannelService.execute([id, idCurrentUser])
      const channelMapped = channelMap(channel)

      return response.json({
        channel: channelMapped
      })
    } catch (error) {
      return response.status(404).json({
        error: error.message
      })
    }
  }

  async find (request: Request, response: Response) {
    try {
      const id = request.params.id
      const idCurrentUser = getIdFromToken(request)

      const channel = await findChannelService.execute(id, idCurrentUser)

      const channelMapped = channelMap(channel)

      return response.json({ channel: channelMapped })
    } catch (error) {
      return response.status(404).json({
        error: error.message
      })
    }
  }
}

export default new ChannelController()
