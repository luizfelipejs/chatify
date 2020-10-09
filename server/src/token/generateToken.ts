import jwt from 'jsonwebtoken'
import { key } from 'src/config/secret.json'

const generateToken = (id: string) => {
  const token = jwt.sign({ id: id }, key, { expiresIn: '2d' })
  return token
}

export default generateToken
