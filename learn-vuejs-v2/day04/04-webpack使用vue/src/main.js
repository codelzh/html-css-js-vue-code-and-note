import {add} from './js/mathUtils';


console.log(add(1,20))

//依赖css文件，使得webpack在用这一个main.js文件，把css也给我打包了
require("./css/ordinary.css")

//依赖less文件
require("./css/ordinary2.less")


import Vue from 'vue'

//把模块导入
// import app from './vue/app.js'

//导入vue模块
import app from './vue/Vue.vue'

new Vue({
  el:'#app',
  template: '<app></app>',
  components:{
    app:app
  }
})