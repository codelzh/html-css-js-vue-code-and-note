<template>
  <div>
    <!-- <router-link to="/home">跳转家</router-link>
    <router-link to="/about">跳转关于</router-link> -->

    <!-- <button @click="home">家</button>
    <button @click="about">关于</button> -->

    <router-link to="/home">跳转家</router-link>
    <router-link to="/about">跳转关于</router-link>
    <router-link v-bind:to="'/user/' + userid">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      userid:"zs",
    }
  },
  methods: {
    home() {
      this.$router.push("/home");
    },
    about() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
</style>