import axios from 'axios'
import { storage } from 'react-stax'
import modalStore from '../stores/modalStore';

const api = axios.create({
  baseURL: 'http://localhost:3005/api',
  timeout: 10000
})

if (storage.token) {
  api.defaults.headers.Authorization = `Bearer ${storage.token}`
}

api.interceptors.request.use(config => {
  config.intercepted = true
  return config
})

api.interceptors.response.use(
  resp => {
    return resp
  },
  err => {
    // TODO: also display a notification here
    // if there is err.response.data.msg!
    modalStore.show(err.response.data.msg)
    throw err
  }
)

export default api
