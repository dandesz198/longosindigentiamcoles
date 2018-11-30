import { store } from "react-stax";
import { getAll } from "./../api/article";

const article = store({ articles: [getAll()] });

export default article;
