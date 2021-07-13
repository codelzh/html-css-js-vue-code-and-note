<template>
  <div>
    <router-view></router-view>
    <main-tbabar></main-tbabar>
  </div>
</template>

<script>

import MainTbabar from "components/content/maintbabar/MainTbabar";
import router from "@/router";

export default {
  name: "App",
  components:{
    MainTbabar,
    router
  }
}
</script>
<style>


</style>
