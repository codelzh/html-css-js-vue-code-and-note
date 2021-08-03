<template>
  <div class="goods">
    <goods-item v-for="item in goodsdata" :key="item.iid" :goodsitems="item" class="goodsitem"></goods-item>
  </div>
</template>

<script>
import GoodsItem from  "@/components/common/goods/GoodsItem.vue";

export default {
  name: "",
  data() {
    return {};
  },
  props:{
    goodsdata:{
      type:Array,
      default:[]
    }
  },
  components:{
    GoodsItem
    
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
}

</style>