import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from "axios"
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => {
    return h(App)
  }
})

