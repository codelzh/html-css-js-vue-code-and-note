<template>
  <div>
    <h1>哈dadssda哈哈</h1>
    <button @click=btn>123</button>
  </div>
</template>

<script>
export default {
  name: "Vue",
  data(){
    return {
      message:'hello zhangsan'
    }
  },
  methods:{
    btn(){
      console.log('1')
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: green;
  }
</style>