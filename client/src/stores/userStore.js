import { store } from "react-stax";

const userStore = store({
  name: '',
  email: '',
  token: undefined
});

export default userStore;
