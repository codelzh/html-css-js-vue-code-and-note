<template>
  <div class="detail">
    <detail-top class="detail-top"></detail-top>
    <scroll class="wapper" ref="scroll">
      <swiper>
        <swiper-item v-for="(item, index) in detailimg" :key="index"
          ><img :src="item" alt=""
        /></swiper-item>
      </swiper>
      <goods-detail :goods="Goods"></goods-detail>
      <shop-detail :shop="Shop"></shop-detail>
      <goods-img-more :imglist="goodsimgmore"></goods-img-more>
      <detail-params :rule="Param.rule" :info="Param.info"></detail-params>
    </scroll>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul>
  </div>
</template>

<script>
import detailTop from "@/components/private/detail/childcomps/detailTop.vue";
import swiper from "@/components/common/swiper/swiper.vue";
import swiperItem from "@/components/common/swiper/swiperItem.vue";
import goodsDetail from "@/components/private/detail/childcomps/DetailBaseInfo.vue";
import shopDetail from "@/components/private/detail/childcomps/DetailShopInfo.vue";
import Scroll from "@/components/common/betterScroll/Scroll.vue";
import GoodsImgMore from "@/components/private/detail/childcomps/GoodsImgMore.vue";
import DetailParams from "@/components/private/detail/childcomps/DetailParams.vue";

import { getdetaildata, Goods, Shop, Param } from "@/network/detail.js";

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
    });
  },
  mounted() {
    //scroll 滚动bug解决
    var bridge = this;
    const refresh = this.debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("goodsimgload", function () {
      refresh();
    });
  },
  activated() {},
  methods: {
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
}
</style>