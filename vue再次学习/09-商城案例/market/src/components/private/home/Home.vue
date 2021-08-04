<template>
  <div class="home-index">
    <hometop></hometop>
    <scroll
      class="wapper"
      ref="scroll"
      :probetype="3"
      @homescroll="homescroll"
      @tobottom="tobottom"
    >
      <home-repeat-img :bannerData="homebannerData"></home-repeat-img>
      <home-nav :navdata="homenav"></home-nav>
      <home-middle-img />
      <tab-contorl
        class="tabcontorl"
        :title="['流行', '新款', '精选']"
        @itemclick="itemclick"
        ref="tabcontorl"
      ></tab-contorl>
      <goods :goodsdata="goods[currentcategory].list"></goods>
    </scroll>
    <back-top @click.native="backTopclick" v-show="isshow"></back-top>
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
import Scroll from "@/components/common/betterScroll/Scroll.vue";
import BackTop from "@/components/common/backTop/BackTop.vue";

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
      isshow: false,
    };
  },
  components: {
    hometop: HomeTop,
    HomeRepeatImg,
    HomeNav,
    HomeMiddleImg,
    TabContorl,
    Goods,
    Scroll,
    BackTop,
  },

  mounted() {},
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

    //返回顶部
    backTopclick() {
      //通过组件访问，拿到scroll对象
      this.$refs.scroll.backTop(0, 0, 500);
    },

    //滚动
    homescroll(position) {
      this.isshow = -position.y > 1000 ? true : false;
    },

    //到达底部
    tobottom(bs) {
    
      this.getgoods(this.currentcategory);
      bs.finishPullUp();
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
.home-index {
  height: 100vh;
}

.wapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>