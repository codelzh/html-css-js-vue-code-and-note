<template>
  <div class="detail-top">
    <div class="back">←</div>
    <ul>
      <li class="active">商品</li>
      <li>参数</li>
      <li>评价</li>
      <li>推荐</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {};
  },
  created() {
    //获取数据
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.detail-top {
  display: flex;
  background-color: white;
  height: 44px;
  line-height: 44px;
}

.back {
  flex: 30%;
  font-size: 32px;
  text-align: center;
}

.detail-top ul {
  display: flex;
  flex: 70%;
}
.detail-top ul li {
  float: left;
  flex: 1;
}

.active {
  color: tomato;
}
</style>