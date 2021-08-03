import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

Vue.use(Vuex)

export default new Vuex.Store({
  //状态,要共享的数据
  state: {
    count: 100,
    stu: [10],
  },
  mutations,
  getters,
  actions,
  modules: {}
})