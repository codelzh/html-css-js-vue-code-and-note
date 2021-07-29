<template>
  <div>
    <h2>我是user页面</h2>
    <button @click="t">点击</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },

  methods: {
    t(){
      console.log(this.$route.params);
    }
  },  
};
</script>
<style scoped>
</style>