import { store } from "react-stax";

const editor = store({
  id: "",
  title: "",
  content: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  empty() {
    editor.id = null;
    editor.title = null;
    editor.content = null;
    editor.createdAt = null;
    editor.updatedAt = null;
  },
  setArticleData(article) {
    editor.id = article.id;
    editor.title = article.title;
    editor.content = article.content;
    editor.createdAt = article.createdAt;
    editor.updatedAt = article.updatedAt;
  },
  getArticleData() {
    return {
      id: editor.id,
      title: editor.title,
      content: editor.content,
      createdAt: editor.createdAt,
      updatedAt: editor.updatedAt
    };
  }
});

export default editor;
