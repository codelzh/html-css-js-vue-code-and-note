<template>
  <div>
    <tabbarmain></tabbarmain>
    <router-view></router-view>
  </div>
</template>

<script>
import TabbarMain from "components/tabbar/TabbarMain.vue"

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    tabbarmain:TabbarMain
  },
};
</script>
<style scoped>
@import "assets/css/normalize.css";
</style>