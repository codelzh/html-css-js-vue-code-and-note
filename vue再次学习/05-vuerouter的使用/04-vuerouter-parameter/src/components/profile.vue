<template>
  <div>
    <h2>我是档案页面</h2>
    {{$route.query}}
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