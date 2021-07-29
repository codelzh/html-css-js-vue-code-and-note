<template>
  <div>
    <!-- <router-link to="/home">跳转家</router-link>
    <router-link to="/about">跳转关于</router-link> -->

    <button @click="home">家</button>
    <button @click="about">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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