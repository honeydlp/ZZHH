const Router = require('koa-router')
const authMiddlewares = require('../middlewares/auth')
const auth = require('../controllers/auth')

const router = new Router()

router.post('/auth/login', auth.login)
router.post('/auth/logout', authMiddlewares.loginRequired, auth.logout)
router.post('/auth/ip', auth.ip)

router.all('*', (ctx) => {
  ctx.status = 404
})

module.exports = router
