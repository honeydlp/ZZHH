import axios from 'axios'

const instance = axios.create()

instance.interceptors.response.use((response) => {
  return Promise.resolve(response)
}, (err) => {
  // 身份认证失败
  if (err.response.status === 401) {
    window.location.href = '/auth/login'
  }
  return Promise.reject(err.response.data)
})

export default instance
