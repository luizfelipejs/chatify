import { Router } from 'express'
import authController from '@controllers/authController'
const authRoutes = Router()

authRoutes.post('/auth/logon', authController.login)
authRoutes.post('/auth/recover-password', authController.recoverPassword)
authRoutes.put('/auh/reset-password', authController.resetPassword)

export default authRoutes
