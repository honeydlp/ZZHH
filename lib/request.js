const querystring = require('querystring')
const axios = require('axios')
const config = require('config')
const logger = require('./logger')('lib:request')

let apiBaseURL = config.get('proxy.host') || 'http://127.0.0.1'

if (config.get('proxy.port')) {
  apiBaseURL += `:${config.get('proxy.port')}`
}

if (config.get('proxy.prefix')) {
  apiBaseURL += `${config.get('proxy.prefix')}`
}

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 2000
})

instance.interceptors.request.use((configurations) => {
  configurations.data = querystring.stringify(configurations.data)

  logger.debug(`--> ${configurations.method.toUpperCase()} ${configurations.baseURL}${configurations.url}`, configurations.params, configurations.data)

  if (config.get('mock.status')) {
    const redirectURL = `http://127.0.0.1:${config.get('app.port')}/mocks/api`

    logger.debug(`${configurations.baseURL} => ${redirectURL}`)
    configurations.baseURL = redirectURL
  }

  return configurations
}, (err) => {
  logger.warn(err.message)

  return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  logger.debug(`<-- ${response.status}`, response.data)

  return response.data
}, (err) => {
  if (err.response) {
    logger.debug(`<-- ${err.response.status}`, err.response.data)
    return Promise.reject({
      status: err.response.status,
      message: err.response.data.message
    })
  }

  logger.debug(`<-- 400`, err.message)
  return Promise.reject({
    status: 400,
    message: err.message
  })
})

module.exports = instance
