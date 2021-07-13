import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import store from './vuex/store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
