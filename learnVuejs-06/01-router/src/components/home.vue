<template>
  <div>
    <h1>我是home</h1>
    <!--
      嵌套路由，在home下还有路由
    -->
    <router-view></router-view>
    <router-link to="/home/news">news</router-link><p></p>
    <router-link to="/home/message">message</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {path:'/home/new'}
  },
  //组件生命周期函数，当函数被创建，调用此函数
  created() {
    // console.log('created');
  },
  //当函数被销毁，调用此函数，组件显示---路由跳转其他页面，就是一次创建销毁
  destroyed(){
    // console.log('destroyed');
  },

  //当组件是活跃状态，执行此函数，此函数对应的组件必须keep-alive里面，才会生效，才不会被销毁
  activated() {
    // console.log('activated')
  },

  //当组件是不活跃状态，执行此函数，此函数对应的组件必须keep-alive里面，才会生效，才不会被销毁
  deactivated(){
    // console.log('deactivated');
  },



}
</script>

<style>

</style>