import * as authServices from '@/services/login'

const state = {
  oAuth: {
    isLogIn: false,
    id: null
  },
  data: {}
}

const getters = {
  currentUser: state => state.data[state.oAuth.id] || {}
}

const mutations = {
  setUserInfo (state, payload) {
    state.data[payload.id] = payload
    state.oAuth.id = payload.id
    state.oAuth.isLogIn = true
  },

  logout (state) {
    state.oAuth.id = null
    state.oAuth.isLogIn = false
  }
}

const actions = {
  login (context, payload) {
    return authServices.login(payload).then((res) => {
      context.commit('setUserInfo', res.data)
      return Promise.resolve(res.data)
    }).catch((err) => {
      return Promise.reject(err.response.data)
    })
  },
  logout (context) {
    return authServices.logout().then((res) => {
      context.commit('logout')
      return Promise.resolve(res.data)
    }).catch((err) => {
      return Promise.reject(err.response.data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
