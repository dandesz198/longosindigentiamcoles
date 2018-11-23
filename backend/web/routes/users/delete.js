const userModel = require('../../../models/user')

module.exports = async function getById (req, res) {
  await userModel.deleteById(req.query.id)
  res.send('Success!')
}
