const path = require('path')
const Router = require('koa-router')
const ejs = require('ejs')
const api = require('./api')
const mock = require('./mock-rules')

const router = new Router()
const viewFilePath = path.resolve(__dirname, '../dist/index.html')

router.use('/api', api.routes())
router.use('/mocks/api', mock.routes())

router.get('/*', (ctx) => {
  const store = {
    user: {}
  }

  const { userId, userInfo } = ctx.session

  if (userId) {
    store.user = userInfo
  }

  const data = {
    store: JSON.stringify(store)
  }

  ejs.renderFile(viewFilePath, data, {}, (err, str) => {
    if (err) {
      ctx.throw(err)
      return
    }

    ctx.body = str
  })
})

module.exports = router
