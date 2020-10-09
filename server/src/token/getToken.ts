import { Request } from 'express'
import jwt from 'jsonwebtoken'

interface tokenSchema {
    id: string,
    iat: number,
    exp: number
}

const getIdFromToken = (request: Request) => {
  const tokenHeader = request.headers.authorization // token => bearer {token}

  const splitToken = tokenHeader.split(' ')
  const [, token] = splitToken

  const decodedToken = jwt.decode(token) as tokenSchema

  return decodedToken.id
}

export default getIdFromToken
