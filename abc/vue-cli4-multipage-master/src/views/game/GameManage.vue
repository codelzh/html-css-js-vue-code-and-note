<!-- 游戏页面 -->
<template>
  <div>
    <home-top />
    <game-nav/>
    <game-content/>
    <home-bottom />
  </div>
</template>

<script>
import HomeTop from "views/home/HomeTop.vue";
import HomeLoad from "home/childcomp/HomeLoad.vue";
import HomeBottom from "views/home/HomeBottom.vue";

import GameNav from "./childcomp/GameNav.vue";
import GameContent from './childcomp/GameContent.vue'

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeLoad,
    HomeTop,
    HomeBottom,

    GameNav,
    GameContent
  },
};
</script>
<style lang="less" scoped>
</style>