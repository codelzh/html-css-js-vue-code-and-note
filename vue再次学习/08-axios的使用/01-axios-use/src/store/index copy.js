import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态,要共享的数据
  state: {
    count: 100,
    stu: [10],
  },
  //里面主要写改变数据的函数
  mutations: {
    increment() {
      this.state.count++
    },
    decrement() {
      this.state.count--
    },
    incrementCount(state, data) {
      this.state.count += data
    },
    changState(state) {
      //使用Vue.set() 和Vue.delete()  来响应式的增加删除vuex的数据
      Vue.set(state.stu, 0, "abc")
      // Vue.delete(state.stu,0)
    }
  },
  //getters作用和计算属性一样，都是在我这里改变数据
  getters: {
    //state是默认给的
    towcount(state) {
      return state.count * 2;
    }
  },
  actions: {
    //context就是store
    asynz(context) {
      setTimeout(() => {
        //如果异步操作想修改数据，通过mutations
        context.commit("changState")
      }, 1000);
    }
  },
  modules: {}
})