import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from "axios"
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()



import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


new Vue({
  el: "#app",
  router,
  store,
  render: (h) => {
    return h(App)
  }
})