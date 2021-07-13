export  default {
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },

  //传数据
  incrementCounter(state,data){
    state.counter += data
  },

  //传数据第二种--对象
  incrementStu(state,payload){
    state.student.push(payload.s)
  },

  mupdateName(state){
    // state.name = 'ls'
    //如果在mutation里写异步代码，devtools工具是捕捉不到的
    // setTimeout(()=>{
    //   state.name = 'ls'
    // })

    state.name = 'ls'
  }

}
