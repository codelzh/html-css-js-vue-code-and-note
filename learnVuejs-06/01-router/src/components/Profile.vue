<template>
  <div>
    <h1>个人档案</h1>
    <!--如果是对象形式传过来的参数，必须使用$route.query-->
    <h1>{{this.$route.query.name}}</h1>
    <h1>{{this.$route.query.age}}</h1>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created(){
    console.log('created');
  },
  destroyed() {
    console.log('destroyed');
  }

}
</script>

<style scoped>

</style>