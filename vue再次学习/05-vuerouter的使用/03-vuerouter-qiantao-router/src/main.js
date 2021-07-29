import Vue from 'vue'
import App from "./App"
import router from "./router/index"

Vue.config.productionTip = false

new Vue({
  el:"#app",
  //挂载路由对象
  router:router,
  render:(h)=>{
    return h(App);
  }
})
