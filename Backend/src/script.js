import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { details, host, port, users } from './config'
import { createToken, verifyToken } from './auth/JWT_auth'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/auth', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (!username || !password) res.sendStatus(401)
  else if (users[username] !== password) res.sendStatus(403)
  else
    res.status(200).json({
      token: createToken({ username: username }),
    })
})

app.get('/get-details', verifyToken, (req, res) => {
  res.send(details[req.data.username])
})

export const start = () => {
  app.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`)
  })
}
