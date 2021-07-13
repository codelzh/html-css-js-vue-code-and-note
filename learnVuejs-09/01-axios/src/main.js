import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//基本使用
// axios({
//   url:'http://httpbin.org/get',
//   params:{
//     name:'1',
//     age:'16'
//   }
// }).then((res)=>{
//   console.log(res);
// })

//多个请求。同一处理
// axios.all([
//   {
//     url:'http://httpbin.org/get',
//     params:{
//       data:{message:'11111'}
//     }
//   },
//
//   {
//     url:'http://httpbin.org/get',
//     params:{
//       data:{message:'2222'}
//     }
//   },
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))


//修改默认全局配置
// axios.defaults.baseURL='http://httpbin.org'
// axios({
//   url:'/get',
//   params:{
//     name:'1',
//     age:'16'
//   }
// }).then((res)=>{
//   console.log(res);
// })



//自定义axios实例默认值
// const axios1 = axios.create({
//   baseURL:'http://httpbin.org/',
//   method:'get'
// })
//
// axios1({
//   url:'/get',
//   params:{name:'zs'},
// }).then((res)=>{
//   // console.log(res);
// })



//模块封装
// import {increment} from "./network/increment";
// increment({
//   url:'/get'
// },(success)=>{
//   console.log(success);
//   console.log('成功');
// },(fail)=>{
//   console.log(fail);
// })

//使用promise 封装
import {increment} from "./network/increment";
increment({
 url:'/get'
}).then((res)=>{
  // console.log(res);
}).catch((error)=>{
  // console.log(error);
})








