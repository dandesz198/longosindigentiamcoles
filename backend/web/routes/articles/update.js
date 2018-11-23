const articleModel = require('../../../models/article')

module.exports = async function update (req, res) {
  const article = await articleModel.update(req.body.id, req.body.article)
  res.send({ article })
}
