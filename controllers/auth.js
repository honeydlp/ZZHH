const config = require('config')
const axios = require('axios')
const validator = require('../lib/validateSchema')
const request = require('../lib/request')
const encrypt = require('../lib/encrypt')

exports.login = async function login (ctx) {
  const body = ctx.request.body

  const valid = validator({
    required: [ 'phone', 'password' ],
    properties: {
      phone: {
        type: 'string',
        minLength: 11,
        maxLength: 11
      },
      password: {
        type: 'string',
        minLength: 6
      }
    }
  }, body)

  if (!valid) {
    ctx.throw(400, '存在非法的请求参数')
    return
  }

  let response

  try {
    response = await request.post('/auth/login', body)
  } catch (err) {
    ctx.throw(err.status || 500, err.message)
    return
  }

  ctx.session.userId = response.id
  ctx.session.hash = encrypt.md5(response.id)
  ctx.session.userInfo = response
  ctx.body = response
}

exports.ip = async function ip (ctx) {
  const ip = ctx.request.headers['x-real-ip'] ||
    ctx.request.headers['x-forwarded-for'] ||
    ctx.ip

  if (['::1', '127.0.0.1', '::ffff:127.0.0.1'].includes(ip)) {
    ctx.body = { isIntranetIP: true, ip }
    return
  }

  if (ip.startsWith('192.168')) {
    ctx.body = { isIntranetIP: true, ip }
    return
  }

  if (config.get('intranetIPList').includes(ip)) {
    ctx.body = { isIntranetIP: true, ip }
    return
  }

  try {
    const response = await axios.get('http://ip.taobao.com/service/getIpInfo.php', {
      params: { ip }
    })

    if (response.data.code) {
      return ctx.throw(400)
    }

    ctx.body = response.data.data
    return
  } catch (err) {
    ctx.throw(err.status || 500, err.message)
  }
}

exports.logout = function logout (ctx) {
  ctx.session.userId = null
  ctx.session.hash = null
  ctx.status = 200
}
