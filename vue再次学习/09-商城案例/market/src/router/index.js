import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)


const home = () => import("components/private/home/Home.vue")
const category = () => import("components/private/category/Category.vue")
const car = () => import("components/private/car/Car.vue")

const my = () => import("components/private/my/My.vue")
const detail = () => import("components/private/detail/detail")

const routes = [

  {
    path: "",
    component: home,
  },

  {
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
  {
    path: "/detail",
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router