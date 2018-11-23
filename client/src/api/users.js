import { storage } from 'react-stax'
import api from './api'

function processUser(data) {
  api.defaults.headers.Authorization = `Bearer ${data.token}`
  storage.token = data.token
  return data.user
}

export async function login(loginData) {
  const { data } = await api.post('/login', loginData)
  return processUser(data)
}

export async function register(registerData) {
  const { data } = await api.post('/register', registerData)
  return processUser(data)
}

export function logout() {
  delete api.defaults.headers.Authorization
  delete storage.token
}

export async function list() {
  const { data } = await api.get('/users')
  return data
}
