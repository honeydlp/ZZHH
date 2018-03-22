const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const staticService = require('koa-static')
const session = require('koa-session')
const redis = require('koa-redis')
const config = require('config')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const env = config.get('env')

const app = new Koa()

app.keys = config.get('app.keys')

app.use(bodyParser({
  enableTypes: ['json', 'form']
}))
app.use(json())

const sessionConfig = {
  key: config.get('app.sessionKey'),
  maxAge: 7 * 24 * 60 * 60 * 1000, // 1 day.
  store: redis({
    host: config.get('redis.host'),
    port: config.get('redis.port')
  })
}

app.use(session(sessionConfig, app))

if (env === 'development') {
  app.use(logger())
  app.use(staticService(path.resolve(__dirname, './dist')))
}

app.use(errorHandler)

// 路由
app.use(router.routes())

if (env === 'development') {
  app.on('error', (err, ctx) => {
    console.error('Server error: ', err, ctx)
  })
}

module.exports = app
