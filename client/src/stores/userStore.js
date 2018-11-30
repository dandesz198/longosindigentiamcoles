import { store } from "react-stax";
import * as userApi from "../api/users";

const userStore = store({
  name: "",
  email: "",
  token: undefined,
  async init() {
    const { name, email } = await userApi.getMe();
    userStore.name = name;
    userStore.email = email;
  }
});

export default userStore;
