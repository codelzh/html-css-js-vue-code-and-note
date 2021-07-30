import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态,要共享的数据
  state: {
    count:100
  },
  //里面主要写改变数据的函数
  mutations: {
    increment(){
      this.state.count++
    },
    decrement(){
      this.state.count--
    },
    incrementCount(state,data){
      this.state.count+=data
    }
  },
  //getters作用和计算属性一样，都是在我这里改变数据
  getters:{
    //state是默认给的
    towcount(state){
      return state.count * 2;
    }
  },
  actions: {},
  modules: {}
})