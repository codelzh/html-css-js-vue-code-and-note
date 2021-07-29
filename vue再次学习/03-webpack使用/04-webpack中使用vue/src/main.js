import { sum } from "./js/mathUtil";


//导入css文件
import "./css/index.css"

//导入less文件
import "./css/spe.less"


//使用vue
import Vue from "vue";


//vue的终极方案
import App from "./vue/App.vue";
new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    App
  }
})