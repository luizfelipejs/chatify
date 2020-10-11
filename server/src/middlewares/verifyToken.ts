import { NextFunction, Request, Response } from 'express'
import { key } from 'src/config/secret.json'
import jwt from 'jsonwebtoken'

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
  try {
    const tokenHeader = request.headers.authorization // token => bearer {token}

    if (!tokenHeader) {
      return response.status(404).json({
        message: 'token not provided'
      })
    }

    const splitToken = tokenHeader.split(' ')
    const [bearer, token] = splitToken

    if (splitToken.length !== 2) {
      return response.status(404).json({
        message: 'token format invalid'
      })
    } else if (bearer !== 'bearer') {
      return response.status(404).json({
        message: 'token format invalid'
      })
    }

    jwt.verify(token, key)
    next()
  } catch (error) {
    return response.status(404).json({ error: error.message })
  }
}

export default verifyToken
