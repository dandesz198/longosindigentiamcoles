const db = require("./db");
const { generate } = require("../utils/id");
const { throw400, checkDuplicates } = require("../utils/errors");

const collectionName = "articles";

async function search() {
  return db
    .collection(collectionName)
    .find()
    .sort({ title: 1 })
    .project({ id: 1 })
    .toArray();
}

async function all() {
  return db
    .collection(collectionName)
    .find()
    .project({ id: 1 })
    .toArray();
}

async function get(id) {
  const article = await db.collection(collectionName).findOne({ id });

  if (!article) {
    throw400({
      id: "No post with matching ID found!"
    });
  }

  return article;
}

async function create({ title, content, tags }) {
  const article = { title, content, tags };
  article.id = generate(10)
  await db
    .collection(collectionName)
    .insertOne(article);
  return article;
}

async function update(id, data) {
  await db
    .collection(collectionName)
    .updateOne({ id: id }, { $set: data })
  return data;
}

async function deleteById(id) {
    await db
      .collection(collectionName)
      .remove({ id: id })
    return 'Success!';
  }

module.exports = {
  get raw() {
    return db.collection(collectionName);
  },
  all,
  search,
  create,
  get,
  update,
  deleteById
};
