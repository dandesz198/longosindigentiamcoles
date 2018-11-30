import { store } from "react-stax";
import userStore from "./userStore";

const editorStore = store({
  id: Number,
  author: userStore.name,
  title: '',
  content: ''
});

export default editorStore;
