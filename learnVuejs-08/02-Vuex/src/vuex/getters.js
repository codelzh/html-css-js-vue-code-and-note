export default {
  powercounter(state){
    return state.counter * state.counter
  },
  more2(state){
    return state.student.filter(stu=>{
      return stu.id > 2
    })
  },
  more2length(state,getters){
    return getters.more2.length
  },

  //如果需要传数据。return函数就行
  moreage(){
    return function (age){
      console.log(age);
    }
  }

}
