<template>
  <div ref="wapper">
    <div ref="content" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from "better-scroll";
import ObserveDom from "@better-scroll/observe-dom";
Scroll.use(ObserveDom);

export default {
  name: "Scroll",
  data() {
    return {
      bs: null,
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  mounted() {
    const bs = new Scroll(this.$refs.wapper, {
      observeDOM: true,
      //这个值是父组件传来的，默认是0
      probeType: this.probetype,
      pullUpLoad: true,
      click: true,
    });
    this.bs = bs;

    //滚动事件
    var bridge = this;
    this.bs.on("scroll", function (position) {
      //发送给home
      bridge.$emit("homescroll", position);
    });

    //滑动到底
    bs.on("pullingUp", () => {
      bridge.$emit("tobottom", this.bs);
    });
  },
  methods: {
    backTop(x, y, time) {
      this.bs.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
</style>