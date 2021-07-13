import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
