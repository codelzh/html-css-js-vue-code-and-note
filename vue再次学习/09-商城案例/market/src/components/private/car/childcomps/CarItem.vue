<template>
  <div class="caritem">
    <label for="input"></label>
    <input
      type="checkbox"
      class="input"
      id="input"
      :checked="carlistitem.checked"
      @click="checkclick"
    />

    <img :src="carlistitem.goodsimg" alt="" />
    <div class="right">
      <div class="hide title">
        {{ carlistitem.goodstitle }}
      </div>
      <div class="hide desc">
        {{ carlistitem.goodsdesc }}
      </div>
      <span class="price">{{ carlistitem.goodsprice }}</span>
      <span class="count">×{{ carlistitem.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    carlistitem: null,
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    checkclick() {
      //1：选择和不选的切换
      this.carlistitem.checked = !this.carlistitem.checked;
      
      //2：只要有一个没选择，就取消全选
      // this.$store.state.carlist.every(function(){
      //   return 
      // })
    },
  },
};
</script>
<style lang="less" scoped>
.caritem {
  // position: relative;
  display: flex;
  width: 100%;
  height: calc(100% / 5);
  margin-top: 3%;

  label {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    border: 1px solid #ccc; /*改变复选框的边框颜色也可以不要边框*/
  }

  input[type="checkbox"] {
    margin-top: 20%;
  }

  img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;

    width: 100px;
    height: 100%;
    vertical-align: middle;
  }

  .right {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 68%;
    margin-left: 2%;

    .hide {
      width: 90%;
      /*1:禁止换行*/
      white-space: nowrap;
      /*2:溢出的内容隐藏*/
      overflow: hidden;
      /*3:溢出的文字为省略号*/
      text-overflow: ellipsis;
    }
    .title {
      font-size: 14px;
    }
    .desc {
      font-size: 10px;
      color: grey;
      margin-top: 3%;
      margin-bottom: 20%;
    }
    .price {
      width: 50%;
      font-size: 14px;
      color: tomato;
    }
    .count {
      position: absolute;
      bottom: 10px;
      right: 35px;
      font-size: 15px;
    }
  }
}
</style>