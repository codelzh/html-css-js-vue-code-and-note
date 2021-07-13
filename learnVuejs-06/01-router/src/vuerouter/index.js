import Vue from 'vue'
import VueRouter from 'vue-router'

// import home from "../components/home.vue"
// import about from '../components/about.vue'
// import user from '../components/user'

//路由懒加载的写法
const home  = () => import('../components/home')
const about  = () => import('../components/about')
const user  = () => import('../components/user')
const news = () => import('../components/News')
const message = () => import('../components/Message')
const profile = () => import('../components/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
    meta:{
      title:'首页'
    },
  },

  {
    path:'/home',
    component:home,
    meta:{
      title:'首页'
    },
    //路由的嵌套
    children:[
      {
        path: '',
        redirect:'news'
      },

      {
      path:'news',
      component:news,
    },
      {
        path:'message',
        component:message
      }
    ]

  },

  {
    path:'/about',
    component:about,
    meta:{
      title:'关于'
    }  },

  {
    //单个传递user后面想要id，就这样拼接
    path:'/user/:userid',
    component: user,
    meta:{
      title:'用户'
    }
  },

  {
    path: '/profile',
    component:profile,
    meta:{
      title:'档案'
    }
  }

]

const router =  new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
router.beforeEach(function (to,from,next){
  next()
  document.title = to.matched[0].meta.title
  //这个to是router类型，活跃状态自动调用beforeEach
  // console.log(to);
})



export default router
