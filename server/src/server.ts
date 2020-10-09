import { createConnection } from 'typeorm'
import express from 'express'
import cors from 'cors'
import http from 'http'
import routes from './routes'

createConnection()
  .then(async connection => {
    const app = express()
    const server = http.createServer(app)
    const port = process.env.PORT || 8080

    app.use(cors())
    app.use(express.json())
    app.use(routes)

    server.listen(port, () => console.log(`> listenning on ${port}`))
  })
  .catch(error => console.log(error))
