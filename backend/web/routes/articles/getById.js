const articleModel = require('../../../models/article')

module.exports = async function getById (req, res) {
  const article = await articleModel.get(req.query.id)
  res.send({ article })
}
