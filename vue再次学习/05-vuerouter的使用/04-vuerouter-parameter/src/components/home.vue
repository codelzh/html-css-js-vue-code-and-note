<template>
  <div>
    <h2>我是home页面</h2>
    <router-link to="/home/news">新闻 </router-link>
    <router-link to="/home/message">消息 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>