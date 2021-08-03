import Vue from "vue"
export default {
  increment(state) {
    this.state.count++
  },
  decrement(state) {
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
}