import Vue from 'vue'
//1:导入路由组件
import VueRouter from 'vue-router'

const home = () => import("../components/home.vue")
const about = () => import("../components/about.vue")
const user = () => import("../components/user.vue")
const homeMessage = () => import("../components/home-message.vue")
const homeNews = () => import("../components/home-news.vue")
const profile = () => import("../components/profile.vue")


//2：注册路由组件
Vue.use(VueRouter)

const routes = [

  // {
  //   path: "",
  //   redirect: "/home"
  // },

  // {
  //   path: "/home",
  //   component: home,
  //   children: [

  //     {
  //       path: "",
  //       component: homeNews
  //     },
  //     {
  //       path: "message",
  //       component: homeMessage
  //     },
  //     {
  //       path: "news",
  //       component: homeNews
  //     }
  //   ]
  // },

  {
    path: "/about",
    component: about,
  },

  //动态路由的使用
  {
    path: "/user/:id",
    component: user
  },

  {
    path:"/profile",
    component:profile
  }
]

//3:创建路由实例对象
const router = new VueRouter({
  routes: routes,
  mode: "history",
})

//4：导出，到vue实例挂载
export default router