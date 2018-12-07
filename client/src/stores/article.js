import { store } from "react-stax";
import { getAll } from "../api/article";

const article = store({
  articles: [],
  article: {},
  async updateAll() {
    article.articles = await getAll();
  }
});

export default article;
