const articleModel = require('../../../models/article')

module.exports = async function all (req, res) {
  res.send(await articleModel.all())
}