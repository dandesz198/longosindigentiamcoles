import { store } from "react-stax";
import userStore from "./userStore";

const editorStore = store({
  title: '',
  content: ''
});

export default editorStore;
