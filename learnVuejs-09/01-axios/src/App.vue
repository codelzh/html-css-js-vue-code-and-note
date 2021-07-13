<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data(){
    return {message:''}
  },
  created(){
    axios({
      url:'http://httpbin.org/get',
      method:'get'
    }).then((res)=>{
      // console.log(res);
      this.message = res
    })
  }
}
</script>

<style>

</style>
