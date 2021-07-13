import Vue from 'vue'
import App from './App.vue'


import css from './assets/css/reset.css'

import router from "@/router/index";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

