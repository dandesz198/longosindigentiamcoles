const jwt = require('jsonwebtoken')
const userModel = require('../../../models/user')
const config = require('../../../config')

module.exports = async function register (req, res) {
  const user = await userModel.register(body)

  const token = jwt.sign({ _id: user._id }, config.server.jwtSecret)
  res.send({ user, token })
}
