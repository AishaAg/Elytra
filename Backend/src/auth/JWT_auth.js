import jwt from 'jsonwebtoken'
import { secretKey } from '../config'

export const createToken = (data) => {
  return jwt.sign(data, secretKey, {
    expiresIn: '1h',
  })
}

export const verifyToken = (req, res, next) => {
  const token = req.headers['x-auth-token']
  if (!token) res.sendStatus(400)
  try {
    req.data = jwt.verify(token, secretKey)
    next()
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) res.sendStatus(408)
    else if (e instanceof jwt.JsonWebTokenError) res.sendStatus(403)
    else res.sendStatus(417)
  }
}
