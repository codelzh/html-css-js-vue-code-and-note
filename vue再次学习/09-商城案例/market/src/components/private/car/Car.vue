<template>
  <div class="car">
    <car-top></car-top>
    <scroll class="warp" ref="scroll" >
      <car-item :carlistitem="item" v-for="(item,index) in $store.state.carlist" :key="index"></car-item>
    </scroll>
    <car-bottom></car-bottom>
  </div>
</template>

<script>
import CarTop from "./childcomps/CarTop.vue";
import CarItem from "./childcomps/CarItem.vue";
import CarBottom from "./childcomps/CaaBottom.vue"
 
import scroll from "@/components/common/betterScroll/Scroll.vue";

export default {
  name: "car",
  data() {
    return {};
  },
  components: {
    CarTop,
    scroll,
    CarItem,
    CarBottom
  },
  computed: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.$refs.scroll.refresh;
    }, 1000);
  },
};
</script>
<style lang="less"  scoped>
.car {
  height: 100vh;
}

.warp {
  height: calc(100% - 97px - 18px);
  overflow: hidden;
}
</style>