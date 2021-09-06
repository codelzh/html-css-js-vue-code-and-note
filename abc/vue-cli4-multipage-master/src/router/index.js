import Vue from 'vue'
import VueRouter from 'vue-router'

// const Nav = () => import("views/nav/Nav.vue");
const HomeManage = () => import("views/home/HomeManage.vue")
// const GameManage = () => import("views/game/GameManage.vue")
const UserManage = () => import("views/user/UserManage.vue")



Vue.use(VueRouter)

const routes = [

  {
    path: "/home",
    component: HomeManage,
    meta: { requiresAuth: false },

  },


  {
    path: "/user",
    component: UserManage,
    meta: { requiresAuth: false },

  },

  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router