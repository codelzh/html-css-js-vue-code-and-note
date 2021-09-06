<!-- home头部 -->
<template>
  <div class="hometop">
    <div>
      <home-top-img  class="topimg"/>
    </div>
    <div>
      <home-nav class="homenav"/>
    </div>
  </div>
</template>

<script>
import HomeTopImg from "home/childcomp/HomeTopImg.vue";
import HomeNav from "home/childcomp/HomeNav.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeTopImg,
    HomeNav,
  },
};
</script>

<style lang="less" scoped>
.hometop {
  display: flex;
  flex-direction: column;
  .homenav {
    flex: 80%;
  }

  .homenav {
    flex: 20%;
  }
}
</style>