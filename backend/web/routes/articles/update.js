const articleModel = require('../../../models/article')

module.exports = async function update (req, res) {
  const article = await articleModel.update(req.query.id, req.query.article)
  res.send({ article })
}
