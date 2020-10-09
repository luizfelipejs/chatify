import messageController from '@controllers/messageController'
import { Router } from 'express'
import verifyToken from 'src/middlewares/verifyToken'

const messageRoutes = Router()

messageRoutes.use(verifyToken)
messageRoutes.post('/message', messageController.create)

export default messageRoutes
