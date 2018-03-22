const config = require('config')
const Router = require('koa-router')
const logger = require('../lib/logger')('mock-server')

const router = new Router()

router.all('*', (ctx, next) => {
  logger.debug(`=> ${ctx.method} ${ctx.url}`)

  return next()
})

const response = (data = {}) => {
  return (ctx) => {
    const num = Math.round(Math.random())
    const failureRate = config.get('mock.failureRate')
    const status = num >= failureRate ? 200 : 400
    const body = num >= failureRate ? data : { message: '请求出现错误（该错误信息由 Mock 服务自动提供。）' }

    logger.debug(`<= ${status}`, body)
    ctx.status = status
    ctx.body = body
  }
}

router.post('/auth/login', response({
  'id': 1,
  'username': 'admin',
  'password': null,
  'phone': '18888888888',
  'avtar': null,
  'role': '1',
  'createDate': '2017-11-01 16:07',
  'note': '超级管理员'
}))
router.post('/auth/logout', response())
router.post('/auth/ip', response({
  'ip': '210.75.225.254',
  'country': '中国',
  'area': '华北',
  'region': '北京市',
  'city': '北京市',
  'county': '',
  'isp': '电信',
  'country_id': '86',
  'area_id': '100000',
  'region_id': '110000',
  'city_id': '110000',
  'county_id': '-1',
  'isp_id': '100017'
}))

router.all('*', (ctx) => {
  ctx.status = 404
})

module.exports = router
