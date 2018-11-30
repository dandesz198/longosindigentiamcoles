import { store } from "react-stax";
import { getAll } from "./../api/article";

const articleStore = store({ articles: [] });

export default articleStore;
