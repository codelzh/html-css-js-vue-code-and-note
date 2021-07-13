import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function (createElement){
    //1:runder函数的普通用法:传入普通元素，就和template的作用一样，代替前端dom中的app
    // return createElement('h1',{class:'h'},['你好'])

    //2:runder函数也可以传入一个模版
    return createElement(App)
  }
})
