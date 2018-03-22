import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// error
const Error404 = r => require.ensure([], () => r(require('@/containers/error/404')))
const Error403 = r => require.ensure([], () => r(require('@/containers/error/403')))

const Login = r => require.ensure([], () => r(require('@/containers/Login')))
const Layout = r => require.ensure([], () => r(require('@/components/Layout/src/Layout')))

// dashboard
const Dashboard = r => require.ensure([], () => r(require('@/containers/dashboard/Dashboard')))

Vue.use(Router)

const rules = {
  loginRequired (to) {
    // window.__INITIALSTORE__  是node注入的 全局变量 用户信息
    const userInfo = window.__INITIALSTORE__ === '<%- store %>' ? false : JSON.parse(window.__INITIALSTORE__)

    if (userInfo) {
      store.commit('setUserInfo', userInfo.user)
      return true
    } else {
      return '登录以后再来查看咯！'
    }
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/auth/login'
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
      meta: {
        title: ''
      }
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404,
      meta: {
        title: '404'
      }
    },
    {
      path: '/403',
      name: 'Error403',
      component: Error403,
      meta: {
        title: '403'
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      components: {
        layout: Layout,
        content: Dashboard
      },
      meta: {
        title: '仪表盘',
        rules: ['loginRequired']
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next(`/404`)
  } else {
    next()
  }

  if (!to.meta.rules) return next()

  const middlewares = to.meta.rules.map(item => rules[item])

  for (let i = 0; i < middlewares.length; i += 1) {
    const result = middlewares[i](to)

    if (result !== true) {
      return next(`/403?message=${result}`)
    }
  }

  return next()
})

router.afterEach(to => {
  document.title = to.meta.title || 'VUE'
})

export default router
