<template>
  <div class="nav">
    <div class="nav-item" v-for="item in navdata" :key="item.title">
      <a href="javascript:;">
        <img :src="item.image" alt="" />
        <div class="text">{{ item.title }}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  props: {
    navdata: null,
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  text-align: center;
  margin-top: 5%;
  border-bottom: 8px solid #ededed;
}

.nav-item {
  flex: 1;
}
.nav-item img {
  width: 80%;
}

.nav-item .text {
  font-size: 14px;
  color: #a3a3a3;
  margin-top: 5%;
  margin-bottom: 20%;
}

</style>