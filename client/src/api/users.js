import { storage } from "react-stax";
import api from "./api";
import modalStore from "./../stores/modalStore";
import {trigger} from './../components/Admin/Modal'

function processUser(data) {
  api.defaults.headers.Authorization = `Bearer ${data.token}`;
  storage.token = data.token;
  return data.user;
}

// body: { email, password }
export async function login(body) {
  const { data } = await api.post(`/login`, body).catch(trigger(error));;
  return processUser(data);
}

// body: { email, password, name, role }
export async function register(body) {
  const { data } = await api.post("/register", body);
  return processUser(data);
}

export function logout() {
  delete api.defaults.headers.Authorization;
  delete storage.token;
}

export async function list() {
  const { data } = await api.get("/users");
  return data;
}
