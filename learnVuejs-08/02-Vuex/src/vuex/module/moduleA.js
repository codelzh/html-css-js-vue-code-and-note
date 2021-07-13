export default  {
  state:{
    name:'我是zs'
  },
  mutations:{
    reviseName(state,payload){
      state.name = payload
    }
  },
  actions:{
    //这里的context commit的是上面的
    areviseName(context){
      setTimeout(()=>{
        context.commit('reviseName','异步修改')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name + '11111'
    },
    fullname2(state,getters){
      return getters.fullname + '22222'
    },
    fullname3(state,getters,root){
      return getters.fullname2 + root.counter
    }
  },

}
