import Vue from 'vue'
import Vuex from 'vuex'


const mutations = ()=> import("./mutations.js")
const actions = ()=> import("./actions.js")
const getters = ()=> import("./getters.js")


Vue.use(Vuex)

export default new Vuex.Store({
  //状态,要共享的数据
  state: {
  },
  mutations,
  getters,
  actions,
  modules: {}
})