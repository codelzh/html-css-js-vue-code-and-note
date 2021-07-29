import Vue from 'vue'
//1:导入路由组件
import VueRouter from 'vue-router'

import home from "../components/home.vue";
import about from "../components/about.vue";

//2：注册路由组件
Vue.use(VueRouter)

const routes = [

  {
    path:"",
    redirect:"/home"
  },

  {
    path:"/home",
    component:home,
  },  

  {
    path:"/about",
    component:about,
  }

]

//3:创建路由实例对象
const router = new VueRouter({
  routes,
  mode:"history",
})

//4：导出，到vue实例挂载
export default router
