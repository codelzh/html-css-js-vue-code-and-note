<template>
  <!-- 圣杯布局 -->
  <div class="home-top">
    <div class="left"></div>
    <div class="content">蘑菇街</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "home-top",
  data() {
    return {};
  },
};
</script>
<style scoped>
.home-top {
  display: flex;
}
.left {
  flex: 20%;
  background-color: pink;
}
.right {
  flex: 20%;
  background-color: pink;
}

.content {
  flex: 60%;
  text-align: center;
  background-color: pink;
}
</style>