import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

import home from "components/private/home/Home.vue"
import category from "components/private/category/Category.vue"
import car from "components/private/car/Car.vue"
import my from "components/private/my/My.vue"

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router