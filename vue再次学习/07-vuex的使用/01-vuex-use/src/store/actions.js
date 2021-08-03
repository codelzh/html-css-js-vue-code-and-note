export default {
  //context就是store
  asynz(context) {
    setTimeout(() => {
      //如果异步操作想修改数据，通过mutations
      context.commit("changState")
    }, 1000);
  }
}