<template>
  <div>
    <home-top />
    <home-load />
    <home-content />
    <home-bottom />
  </div>
</template>

<script>
import HomeTop from "views/home/HomeTop.vue";
import HomeLoad from "home/childcomp/HomeLoad.vue";
import HomeContent from "views/home/HomeContent.vue";
import HomeBottom from "views/home/HomeBottom.vue";


export default {
  name: "HomeNanage",
  data() {
    return {};
  },
  components: {
    HomeLoad,
    HomeTop,
    HomeContent,
    HomeBottom,
  },
};
</script>
<style lang="less" scoped>
</style>