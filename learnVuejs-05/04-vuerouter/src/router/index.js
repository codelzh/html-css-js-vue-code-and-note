import Vuerouter from 'vue-router'
import Vue from 'vue'

import home from "../components/home.vue";
import about from "../components/about.vue";

//1:使用vue插件时候必须使用Vue.use()注册
Vue.use(Vuerouter)

let routes = [

  {
    //如果地址是默认则重定向
    path:'',
    //重定向home模块
    redirect:'home'
  },

  //一个对象就是一个映射关系
  {
    path:'/home',
    component:home
  },
  {
    path:'/about',
    component:about
  },


]
	
//2:创建vueroute对象
const router = new Vuerouter({
  //配置router映射关系
  routes:routes,
  //将url模式改为 html history
  mode:"history",
  //设置全部组件默认class
  linkActiveClass:'test1'

})

//3:导出router对象
export default router
