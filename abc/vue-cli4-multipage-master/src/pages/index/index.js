import Vue from 'vue'
import App from './index.vue'
import router from "@/router/index.js"

Vue.config.productionTip = false

//引入bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
