<!-- 用户页面 -->
<template>
  <div>
    <home-top />
    <div class="container usermanage">
      <div class="row">
        <user-nav class="col-md-2" />
        <user-content-send class="col-md-10" />
      </div>
    </div>
    <home-bottom />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeTop from "views/home/HomeTop.vue";
import HomeLoad from "home/childcomp/HomeLoad.vue";
import HomeBottom from "views/home/HomeBottom.vue";

import UserNav from "./childcomp/UserNav.vue";
import UserContentSend from "./childcomp/UserContentSend.vue";

export default {
  name: "user",
  data() {
    return {};
  },
  components: {
    HomeLoad,
    HomeTop,
    HomeBottom,

    UserNav,
    UserContentSend,
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.usermanage {
  .row {
    display: flex;
  }
}
</style>