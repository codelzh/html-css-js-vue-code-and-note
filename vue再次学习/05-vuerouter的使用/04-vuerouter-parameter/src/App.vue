<template>
  <div>
    <h2>我是app组件</h2>
    <!-- <router-link to="/home">跳转家</router-link>
    <router-link to="/about">跳转关于</router-link> -->

    <!-- <button @click="home">家</button>
    <button @click="about">关于</button> -->

    <!-- <router-link to="/home">跳转家 </router-link> 
    <router-link to="/about">跳转关于 </router-link>
    <router-link v-bind:to="'/user/' + userid">用户 </router-link> -->

    <router-link :to="{ path: '/profile', query: { name: 'zs', age: 18 } }"
      >档案</router-link
    >
    <button @click="profilebtn">档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userid: "zs",
    };
  },
  methods: {
    home() {
      console.log(this.$router);
      this.$router.push("/home");
    },
    about() {
      this.$router.push("/about");
    },
    profilebtn() {
      this.$router.push({
        path:"profile",
        query:{name:"zs",age:20}
      });
    },
  },
};
</script>

<style scoped>
</style>