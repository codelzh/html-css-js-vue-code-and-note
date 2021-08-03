import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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

axios({
  url: "http://httpbin.org/get",
  method:"get",
    params:{
      name:'1',
      age:'16'
    }
}).then((res) => {
  // console.log(res);
})


//自定义实例默认值
const axios1 = axios.create({
  baseURL:"http://httpbin.org/get",
})

//使用自定义实例
// axios1(config)
axios1({
  url:"",
}).then((res)=>{
  // console.log(res);
})


//模块封装
import { network1 } from './network/request.js'
network1({
  url:"",
},(res)=>{
  console.log(res);
},(fail)=>{
  console.log(fail);
})