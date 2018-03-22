const config = require('config')
const _ = require('lodash')

exports.loginRequired = function loginRequired (ctx, next) {
  if (config.get('env') === 'testing') {
    _.assign(ctx.session, config.get('mock.session'))
  }

  if (ctx.session.userId) {
    return next()
  }

  return ctx.throw(401, '您还未登录，请先登录后再进行访问。')
}
