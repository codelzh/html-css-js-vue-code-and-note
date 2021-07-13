<template>
  <div>
<!--    <router-link to="/home" tag="button" replace active-class="">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->

    <button @click="gohome">home</button>
    <button @click="goabout">about</button>

    <router-view></router-view>

  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    //通过代码路由跳转
    gohome(){
      console.log('this is home');
      //== pushState，vue-router,会给每一个模块一个$router对象
      // this.$router.push('home')
      this.$router.replace('home')
    },
    goabout(){
      console.log('this is about');
      // this.$router.push('about')
      this.$router.replace('about')

    }
  }
}
</script>

<style>
.test1{
  color: red;
}
</style>
