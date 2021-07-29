import Vue from 'vue'
import App from "./App"

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render:function(createlement){
    return createlement(App);
  }
})
