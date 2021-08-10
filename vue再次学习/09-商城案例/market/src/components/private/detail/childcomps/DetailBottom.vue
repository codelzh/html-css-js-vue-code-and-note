<template>
  <div class="detailbottom">
    <div class="left">
      <div>
        <img src="~assets/img/detail/service.png" alt="" />
        <span>客服</span>
      </div>
      <div>
        <img src="~assets/img/detail/shop.png" alt="" />
        <span>店铺</span>
      </div>
      <div>
        <img src="~assets/img/detail/collect.png" alt="" />
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="addcar">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    addcar() {
      this.$emit("addcar")
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.detailbottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: white;
  height: 49px;
  z-index: 4;

  .left {
    flex: 50%;
    display: flex;
    text-align: center;
    font-size: 13px;
    img {
      width: 35%;
      vertical-align: bottom;
      margin-top: 5%;
    }
    span {
      display: block;
      margin-top: 5%;
    }
  }
  .right {
    flex: 50%;
    display: flex;

    div {
      flex: 1;
      height: 49px;
      line-height: 49px;
      text-align: center;
      font-size: 13px;
    }

    div:nth-child(1) {
      background-color: #fddd11;
    }
    div:nth-child(2) {
      background-color: #fd7499;
    }
  }
}
</style>