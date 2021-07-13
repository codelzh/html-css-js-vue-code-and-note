import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./module/moduleA";

Vue.use(Vuex)


const vuex = new Vuex.Store({
  //定义全局变量的
  state:{
    counter:100,
    student:[
      {id:1,name:'zs'},
      {id:2,name:'ls'},
      {id:3,name:'ws'},
      {id:4,name:'fs'},
    ],
    name:'zs',
  },
  //mutations的方法，会被devtools捕获
  mutations:mutations,

  actions:actions,

  getters:getters,

  modules:{
    a:moduleA
  }

})

export default vuex

