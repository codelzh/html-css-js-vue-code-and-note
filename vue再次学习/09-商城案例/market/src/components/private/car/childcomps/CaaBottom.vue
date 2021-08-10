<template>
  <div class="carbottom">
    <span class="all">
      <input
        type="checkbox"
        @click="checkclick"
        ref="check"
        :checked="isall"
      />
      全选
    </span>
    <span class="total">合计 ￥{{ gettotalprice }}</span>
    <button class="buy">去结算</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  computed: {
    //获取全部商品总价 就是遍历商品
    gettotalprice() {
      var totalprice = 0;
      for (let i of this.$store.state.carlist) {
        totalprice += parseInt(i.goodsprice * i.count);
      }
      return totalprice;
    },

    //全选框状态
    isall() {
      return !this.$store.state.carlist.find(function (item) {
        return !item.checked;
      });
    },
  },
  methods: {
    //全选按钮被单击，让所有商品的checked属性为取反
    checkclick() {
      for (let i of this.$store.state.carlist) {
        i.checked = !this.$store.state.allchecked;
      }
      this.$store.state.allchecked = !this.$store.state.allchecked;
    },
  },
};
</script>
<style lang="less" scoped>
.carbottom {
  box-sizing: border-box;
  position: relative;
  // bottom: 3%;
  display: flex;
  align-items: flex-end;

  .all {
    flex: 35%;
    display: block;
    margin-right: 4%;
  }

  .total {
    flex: 35%;
  }

  .buy {
    flex: 30%;
    border: 1px solid black;
    background-color: pink;
  }
}
</style>