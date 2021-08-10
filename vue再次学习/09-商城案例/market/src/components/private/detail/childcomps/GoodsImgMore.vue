<template>
  <div style="more">
    <img
      v-for="(item, index) in imglist"
      :key="index"
      :src="item"
      alt=""
      @load="imgload"
    />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    imglist: {
      type: Array,
      default: [],
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("goodsimgload");
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.more {
  -webkit-overflow-scrolling: touch;
}
img {
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>