import axios from "axios";
import { storage } from "react-stax";
import modalStore from "../stores/modalStore";
import userStore from "../stores/userStore";

const api = axios.create({
  baseURL: "http://localhost:3005/api",
  timeout: 10000
});

if (storage.token) {
  api.defaults.headers.Authorization = `Bearer ${storage.token}`;
  userStore.token = storage.token;
}

if (userStore.token) {
  console.log({ userStore });
  api.defaults.headers.Authorization = `Bearer ${userStore.token}`;
}

api.interceptors.request.use(config => {
  config.intercepted = true;
  return config;
});

api.interceptors.response.use(
  resp => {
    return resp;
  },
  err => {
    const { msg } = err.response.data;
    // TODO: also display a notification here
    // if there is err.response.data.msg!
    modalStore.show(msg || err.message);
    throw err;
  }
);

export default api;
