import { storage } from "react-stax";
import api from "./api";
import modalStorage from './../stores/modalStore'
import modalStore from "./../stores/modalStore";

function processUser(data) {
  api.defaults.headers.Authorization = `Bearer ${data.token}`;
  storage.token = data.token;
  return data.user;
}

// body: { email, password }
export async function login(body) {
  const { data } = await api.post(`/login`, body).catch(function (error) {
    if (error.response) {
      if(error.response.data.email){
        modalStore.show(error.response.data.email, 'Something Is Not Correct')
      }else if(error.response.data.password){
        modalStore.show(error.response.data.password, 'Something Is Not Correct')
      }
    }
  });;
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
