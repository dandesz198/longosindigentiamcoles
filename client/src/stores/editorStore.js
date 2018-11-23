import { store } from "react-stax";
import user from "./userStore";

const editor = store({
  id: Number,
  author: user.name,
  title: '',
  content: ''
});

export default editor;
