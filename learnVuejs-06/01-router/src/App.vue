<template>
  <div>
<!--    <router-link to="/home">home</router-link>-->
<!--    <router-link to="/about">about</router-link>-->

    <!--通过代码跳转-->
    <button @click="goabout">关于</button><p></p>

    <router-link to="/home">home</router-link><p></p>
    <router-link to="/about">about</router-link><p></p>

    <!--动态路由单个参数传递-->
    <router-link v-bind:to="'/user/'+name">user</router-link><p></p>

    <!--多个参数传递-->
<!--    <router-link :to="{path:'profile',query:{name:'zhangsan',age:12}}">个人</router-link>-->
    <button @click="profilebtn">个人</button>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {name:'wws'}
  },
  methods:{
    gohome(){
      this.$router.push('/home')
    },
    goabout(){
      this.$router.push('/about')
    },

    //对象传多个数据
    profilebtn(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'zhangsan',
          age:'18'
        }
      })
    }
  }

}
</script>

<style>

</style>
