import channelController from '@controllers/channelController'
import { Router } from 'express'
import verifyToken from 'src/middlewares/verifyToken'

const channelRoutes = Router()

channelRoutes.use(verifyToken)
channelRoutes.post('/channel', channelController.create)
channelRoutes.get('/channel/:id', channelController.find)

export default channelRoutes
