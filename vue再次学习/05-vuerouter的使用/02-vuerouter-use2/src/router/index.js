import Vue from 'vue'
//1:导入路由组件
import VueRouter from 'vue-router'

const home = ()=>import("../components/home.vue")
const about = ()=>import("../components/about.vue")
const user = ()=> import("../components/user.vue")


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
  },

  //动态路由的使用
  {
    path:"/user/:id",
    component:user
  }
]

//3:创建路由实例对象
const router = new VueRouter({
  routes,
  mode:"history",
})

//4：导出，到vue实例挂载
export default router
