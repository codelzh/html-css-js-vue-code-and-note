<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <slot></slot>
    <!-- <swiper-slide v-for="(item, index) in banners" :key="index">
      <img :src="item" ref="icon" />
    </swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>



<script>
import swiperItem from "./swiperItem.vue";

export default {
  name: "Banner",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiperItem,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
          observer: true,
          observeSlideChildren: true,
        },
        init: true,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        speed: 800,
        direction: "horizontal",
        on: {
          click: () => {
            //this.swiper.realIndex 选中的索引(对应我们传入的banners集合)
            //loop为true时轮播图前后会添加滑动时的占位图片
            //所以会多出2张图片 这里的索引就和数据对应不上了
            //所以需要使用realInedx
            //this.swiper.activeIndex 选中的索引(这里是当前真实dom的索引)
            this.$emit("itemClick", this.swiper.realIndex);
          },
        },
      },
    };
  },
  methods: {},
  mounted() {},
  activated() {
    setTimeout(() => {
      this.$refs.mySwiper.$swiper.update();
    }, 1000);
  },
 
};
</script>

<style scoped>
.swiper-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 80%;
  object-fit: contain;
}

.swiper-container {
  /*这里需要设置宽高*/
  --swiper-theme-color: tomato;
  /* --swiper-pagination-color: #00ff33; 两种都可以 */
}
</style>
