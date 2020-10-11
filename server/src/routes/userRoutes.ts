import { Router } from 'express'
import userController from '@controllers/userController'

const userRoutes = Router()

userRoutes.post('/user', userController.create)
userRoutes.get('/user', userController.findCurrent)
userRoutes.get('/user/:id', userController.find)

export default userRoutes
