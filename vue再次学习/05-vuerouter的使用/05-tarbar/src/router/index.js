import Vue from 'vue'
import VueRouter from 'vue-router'

const tabbar = () => import("../components/tabbar/Tabbar.vue")
const tabbaritem = () => import("../components/tabbar/Tabbaritem.vue")
const home = () => import("../components/home/Home.vue")
const category = () => import("../components/category/Category.vue")
const car = () => import("../components/car/Car.vue")
const my = () => import("../components/my/My.vue")



Vue.use(VueRouter)

const routes = [{
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/car",
    component: car
  },
  {
    path: "/my",
    component: my
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router