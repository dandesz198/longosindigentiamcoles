const jwt = require('jsonwebtoken')
const userModel = require('../../../models/user')
const config = require('../../../config')

module.exports = async function login (req, res) {
  const user = await userModel.login(body)

  const token = jwt.sign({ _id: user._id }, config.server.jwtSecret)
  res.send({ user, token })
}