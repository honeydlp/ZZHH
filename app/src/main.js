// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VCharts from 'v-charts'
import Components from './components'
import store from './store'

import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VCharts)
Vue.use(Components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
