<template>
  <div>
    <hometop></hometop>
    <home-repeat-img :bannerData="homebannerData"></home-repeat-img>
    <home-nav :navdata="homenav"></home-nav>
    <home-middle-img />
    <tab-contorl
      class="tabcontorl"
      :title="['流行', '新款', '精选']"
      @itemclick="itemclick"
    ></tab-contorl>
    <goods :goodsdata="goods[currentcategory].list"></goods>
  </div>
</template>

<script>
const HomeTop = () => import("components/private/home/Home-top.vue");

import { gethomedata } from "@/network/home.js";
import { getgoods } from "@/network/home.js";

import HomeRepeatImg from "@/components/private/home/home-repeatimg/Home-repeatimg.vue";
import HomeNav from "@/components/private/home/homenav.vue";
import HomeMiddleImg from "@/components/private/home/home-middleimg.vue";

import TabContorl from "@/components/common/tabcontorl/TabContorl.vue";
import Goods from "@/components/common/goods/Goods.vue";

export default {
  name: "home",
  data() {
    return {
      homebannerData: null,
      homenav: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentcategory: "pop",
    };
  },
  components: {
    hometop: HomeTop,
    HomeRepeatImg,
    HomeNav,
    HomeMiddleImg,
    TabContorl,
    Goods,
  },
  created() {
    //请求首页图片
    this.gethomedata();

    //请求首页商品
    this.getgoods("pop");
    this.getgoods("new");
    this.getgoods("sell");
  },

  methods: {
    /**
     * 事件方法
     */

    //Tabcontorl的item被点击
    itemclick(index) {
      if (index == 0) {
        this.currentcategory = "pop";
      }
      if (index == 1) {
        this.currentcategory = "new";
      }
      if (index == 2) {
        this.currentcategory = "sell";
      }
    },

    /**
     * 网络请求的方法
     */
    gethomedata() {
      gethomedata().then((res) => {
        //把banner数据传给轮播图组件
        this.homebannerData = res.data.data.banner.list;
        //nav数据
        this.homenav = res.data.data.recommend.list;
      });
    },

    getgoods(type) {
      let page = this.goods[type].page + 1;

      getgoods(type, page).then((res) => {
        //把结果存放到data里面
        for (let i of res.data.data.list) {
          this.goods[type].list.push(i);
        }
        //当前商品页码+1
        this.goods[type].page += 1;
      });
    },
  },
};
</script>
<style scoped>
</style>