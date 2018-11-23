const articleModel = require('../../../models/article')

module.exports = async function getById (req, res) {
  await articleModel.deleteById(req.query.id)
  res.send('Success!')
}
