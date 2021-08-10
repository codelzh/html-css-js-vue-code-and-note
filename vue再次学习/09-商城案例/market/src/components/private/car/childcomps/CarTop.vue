<template>
  <!-- 圣杯布局 -->
  <div class="home-top-index">
    <div class="home-top">
      <div class="left"></div>
      <div class="content">购物车({{gettotalcount}})</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-top",
  data() {
    return {};
  },
  computed: {
    gettotalcount() {
      var count = 0;
      for (let i of this.$store.state.carlist) {
        count += parseInt(i.count);
      }
      return count;
    },
  },
};
</script>
<style scoped>
.home-top-index {
  height: 44px;
}

.home-top {
  display: flex;
  height: 44px;
  position: fixed;
  width: 100%;
  z-index: 1;
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
  line-height: 44px;
  color: white;
}
</style>