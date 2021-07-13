export default {
  //context 上下文对象  现在理解为store
  aupdateName(context,payload){
    setTimeout(()=>{
      context.commit('mupdateName')
      console.log(payload.name);

      payload.success()
    },1000)
  }
}
