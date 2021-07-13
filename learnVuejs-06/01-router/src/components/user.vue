<template>
  <div>
    <h1>用户页面</h1>
    <h1>{{userid}}</h1>
  </div>
</template>

<script>
export default {
  name: "user",
  computed:{
    userid(){
      //route对象是routes映射关系的活跃(被点击)对象
      return this.$route.params.userid
    }
  }
}
</script>

<style scoped>

</style>