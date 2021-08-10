<template>

  <div class="index">
    <tabbarmain></tabbarmain>
    <keep-alive exclude="Detail,car">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

import router from "./router/index"
const TabbarMain = ()=> import("components/common/tabbar/TabbarMain.vue")


// gethomedate();
export default {
  name: "App",
  
  router,
  data() {
    return {};
  },
  methods: {
   
  },
  components:{
    tabbarmain:TabbarMain,
  }
};

</script>
<style scoped>
@import "~assets/css/normalize.css";

</style>