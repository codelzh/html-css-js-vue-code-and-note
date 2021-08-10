<template>
  <div class="detail">
    <detail-top
      class="detail-top"
      @detailtopclick="detailtopclick"
      ref="detailtop"
    ></detail-top>
    <scroll class="wapper" ref="scroll" @scroll="detailscroll">
      <swiper>
        <swiper-item v-for="(item, index) in detailimg" :key="index"
          ><img :src="item" alt=""
        /></swiper-item>
      </swiper>
      <goods-detail :goods="Goods"></goods-detail>
      <shop-detail :shop="Shop"></shop-detail>
      <goods-img-more :imglist="goodsimgmore"></goods-img-more>
      <detail-params
        :rule="Param.rule"
        :info="Param.info"
        class="params"
        ref="params"
      ></detail-params>
      <detail-evaluation
        :evaluation="evaluation"
        ref="evaluation"
      ></detail-evaluation>
      <detail-recommend
        :recommendInfo="recommend"
        ref="recommend"
      ></detail-recommend>
    </scroll>
    <detail-bottom @addcar="addcar"></detail-bottom>
  </div>
</template>

<script>
import detailTop from "@/components/private/detail/childcomps/detailTop.vue";
import goodsDetail from "@/components/private/detail/childcomps/DetailBaseInfo.vue";
import shopDetail from "@/components/private/detail/childcomps/DetailShopInfo.vue";
import GoodsImgMore from "@/components/private/detail/childcomps/GoodsImgMore.vue";
import DetailParams from "@/components/private/detail/childcomps/DetailParams.vue";
import DetailEvaluation from "@/components/private/detail/childcomps/DetailEvaluation.vue";
import DetailRecommend from "@/components/private/detail/childcomps/DetailRecommendInfo.vue";
import DetailBottom from "@/components/private/detail/childcomps/DetailBottom.vue";

import swiper from "@/components/common/swiper/swiper.vue";
import swiperItem from "@/components/common/swiper/swiperItem.vue";
import Scroll from "@/components/common/betterScroll/Scroll.vue";

import {
  getdetaildata,
  getrecommend,
  Goods,
  Shop,
  Param,
} from "@/network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      goodsid: 0,
      goodsdetaildata: {},
      detailimg: {},
      Goods: {},
      Shop: {},
      Param: {},
      goodsimgmore: [],
      evaluation: {},
      recommend: [],
      detailtopposition: [],
    };
  },
  components: {
    detailTop,
    swiper,
    swiperItem,
    goodsDetail,
    shopDetail,
    Scroll,
    GoodsImgMore,
    DetailParams,
    DetailEvaluation,
    DetailRecommend,
    DetailBottom,
    
  },
  created() {
    this.goodsid = this.$route.query.id;
    getdetaildata(this.goodsid).then((res) => {
      var data = res.data.result;
      this.goodsdetaildata = data;
      this.detailimg = data.itemInfo.topImages;

      //2：获取商品信息
      this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo);

      //3：店铺信息
      this.Shop = new Shop(data.shopInfo);

      //4:参数信息
      this.Param = new Param(data.itemParams.info, data.itemParams.rule);

      //商品详情页图片
      this.goodsimgmore = data.detailInfo.detailImage[0].list;

      //商品评价
      this.evaluation = data.rate.list[0];
    }).catch((erro)=>{
      console.log(erro);
    });

    //商品推荐
    getrecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
  mounted() {
    //scroll 滚动bug解决
    var bridge = this;
    const refresh = this.debounce(this.$refs.scroll.refresh, 300);
    const detailtopoisition = this.debounce(function () {
      bridge.detailtopposition = [];
      bridge.detailtopposition.push(0);
      bridge.detailtopposition.push(bridge.$refs.params.$el.offsetTop);
      bridge.detailtopposition.push(bridge.$refs.evaluation.$el.offsetTop);
      bridge.detailtopposition.push(bridge.$refs.recommend.$el.offsetTop);
    }, 2000);

    this.$bus.$on("goodsimgload", function () {
      refresh();

      //点击top栏，走相应的位置
      detailtopoisition()
    });
  },
  activated() {},
  methods: {
    addcar() {
      //把购物车相应的数据添加到vuex
      let car = {};
      car.goodsimg = this.goodsdetaildata.itemInfo.topImages[0];
      car.goodstitle = this.goodsdetaildata.itemInfo.title;
      car.goodsdesc = this.goodsdetaildata.itemInfo.desc;
      car.goodsprice = this.goodsdetaildata.itemInfo.lowNowPrice;
      car.goodsid = this.goodsdetaildata.itemInfo.iid;

      //调用actions添加到购物车，并返回promise  then是count+1 erro是添加购物车
      this.$store.dispatch("addcar", car).then((res)=>{
      }).catch((erro)=>{
        this.$toast.show(erro,2000)
      })
    },
    //防抖函数
    debounce(func, wait) {
      let timeout;
      return function () {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
          func();
        }, wait);
      };
    },
    //点击top栏，滚动相应的位置
    detailtopclick(index) {
      this.$refs.scroll.backTop(0, -this.detailtopposition[index], 300);
    },

    //监听滚动事件，改变top栏
    detailscroll(position) {
      if (-position.y >= this.detailtopposition[0]) {
        this.$refs.detailtop.currentIndex = 0;
      }
      if (-position.y >= this.detailtopposition[1]) {
        this.$refs.detailtop.currentIndex = 1;
      }
      if (-position.y >= this.detailtopposition[2]) {
        this.$refs.detailtop.currentIndex = 2;
      }
      if (-position.y >= this.detailtopposition[3]) {
        this.$refs.detailtop.currentIndex = 3;
      }
    },
  },
};
</script>
<style scoped>
.detail-top {
  position: relative;
}
.detail {
  height: 100vh;
  position: relative;
  z-index: 2;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;
}
.detail img {
  width: 100%;
  height: 320px;
}

.wapper {
  height: calc(100% - 44px);
  position: relative;
}

.params {
  margin-bottom: 3%;
}
</style>