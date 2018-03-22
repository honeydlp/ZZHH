import axios from 'axios'

export const getIp = function () {
  return axios.post('/api/auth/ip')
}

export const login = function (userMsg) {
  return axios.post('/api/auth/login', userMsg)
}

export const logout = function () {
  return axios.post('/api/auth/logout')
}
