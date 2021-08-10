import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from "axios"
Vue.prototype.axios = axios


//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require("./assets/img/home/lazyload.gif"),
  throttleWait:1000,
})


//fastclick的使用
import FastClick from "fastclick"
FastClick.attach(document.body);


//自定义组件
import toast from "@/components/common/toast/index.js"
Vue.use(toast)

//事件总线
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


//swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )


new Vue({
  el: "#app",
  router,
  store,
  render: (h) => {
    return h(App)
  }
})