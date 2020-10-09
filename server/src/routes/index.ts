import { Router } from 'express'
import userRoutes from './userRoutes'
import authRoutes from './authRoutes'
import channelRoutes from './channelRoutes'
import messageRoutes from './messageRoutes'

const routes = Router()

routes.use(userRoutes)
routes.use(authRoutes)
routes.use(channelRoutes)
routes.use(messageRoutes)

export default routes
