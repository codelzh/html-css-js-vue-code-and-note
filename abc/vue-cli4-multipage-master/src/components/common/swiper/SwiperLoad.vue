<!-- 轮播图 -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper-load-item
        v-for="(item, index) in imgarray"
        :key="index"
        :iteming="item"
      ></swiper-load-item>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import SwiperLoadItem from "./SwiperLoadItem.vue";

export default {
  name: "",
  data() {
    return {};
  },
  props: {
    imgarray: {
      type: Array,
      default: () => {
        return [
          "https://s3.bmp.ovh/imgs/2021/08/353db2b05778e71a.jpg",
          "https://s3.bmp.ovh/imgs/2021/08/c34d9fe8044166cd.jpg",
          "https://ftp.bmp.ovh/imgs/2021/02/08b20f06b08089b1.jpg",
          "https://wx2.sinaimg.cn/mw690/008gHacnly1gtd26i3ljej31hc0u0n87.jpg",
        ];
      },
    },
  },
  components: {
    SwiperLoadItem,
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      delay: 1000,
      autoplay: {
        Autoplay: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 250px;
}
</style>