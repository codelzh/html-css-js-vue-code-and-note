import Vue from 'vue'
import VueRouter from 'vue-router'

const tabbar = ()=> import("../components/Tabbar.vue")
const tabbaritem = ()=> import("../components/Tabbaritem.vue")


Vue.use(VueRouter)

const routes = [
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
