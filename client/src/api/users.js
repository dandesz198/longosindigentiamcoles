import { storage } from "react-stax";
import api from "./api";

function processUser(data) {
  api.defaults.headers.Authorization = `Bearer ${data.token}`;
  storage.token = data.token;
  return data.user;
}

export async function login({ email, password }) {
  const { data } = await api.post(`/login?email=${email}&password=${password}`);
  return processUser(data);
}

export async function register({ email, password, name, role }) {
  const { data } = await api.post(
    `/register?email=${email}&password=${password}&name=${name}&role=${role}`
  );
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
