import { store } from "react-stax";
import * as userApi from "../api/users";

const user = store({
  name: "",
  email: "",
  token: undefined,
  async init() {
    const { name, email } = await userApi.getMe();
    user.name = name;
    user.email = email;
  }
});

export default user;
