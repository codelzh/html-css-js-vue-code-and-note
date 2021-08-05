<template>
  <div class="detail">
    <detail-top></detail-top>
    <swiper>
      <swiper-item v-for="(item, index) in detailimg" :key="index"
        ><img :src="item" alt=""
      /></swiper-item>
    </swiper>
  </div>
</template>

<script>
import detailTop from "@/components/private/detail/childcomps/detailTop.vue";
import swiper from "@/components/common/swiper/swiper.vue";
import swiperItem from "@/components/common/swiper/swiperItem.vue";

import { getdetaildata } from "@/network/detail.js";

export default {
  name: "detail",
  data() {
    return {
      goodsid: null,
      goodsdetaildata: null,
      detailimg: null,
    };
  },
  components: {
    detailTop,
    swiper,
    swiperItem,
  },
  created() {},
  mounted() {},
  activated() {
    this.goodsid = this.$route.query.id;
    getdetaildata(this.goodsid).then((res) => {
      this.goodsdetaildata = res.data.result;
      this.detailimg = res.data.result.itemInfo.topImages;
    });
  },

};
</script>
<style scoped>
.detail img {
  width: 100%;
  height: 320px;
}
</style>