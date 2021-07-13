<template>
  <div id="app">
    <router-view></router-view>
    <MainTbabar></MainTbabar>
  </div>
</template>

<script>
import MainTbabar from "./components/MainTbabar";

export default {
  name: 'App',
  components:{
    MainTbabar
  }

}
</script>

<style>


</style>
