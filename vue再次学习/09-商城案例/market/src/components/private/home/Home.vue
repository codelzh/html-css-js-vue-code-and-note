<template>
  <div class="home-index">
    <hometop></hometop>
    <tab-contorl
      class="tabcontorl"
      :title="['流行', '新款', '精选']"
      @itemclick="itemclick"
      ref="tabcontorlcopy"
      v-show="tabcontorloisshow"
    ></tab-contorl>

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
      tabcontorloffsettop: 0,
      tabcontorloisshow: false,
      saveY: 0,
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

  //让home保持原来的状态。  离开时候记录y，进入时候把y给到
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.bs.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.bs.y;
    // this.$refs.scroll.refresh();
  },

  mounted() {
    //解决betterscroll bug
    var bridge = this;
    const refresh = this.debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("goodsimgload", function () {
      refresh();
    });

    //做tabcontorl 吸顶效果 先获取offsetTop值，然后这个值和滚动的y值做对比
    setTimeout(() => {
      this.tabcontorloffsettop = this.$refs.tabcontorl.$el.offsetTop;
    }, 300);
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
      this.$refs.tabcontorlcopy.activeindex = index;
      this.$refs.tabcontorl.activeindex = index;
    },

    //返回顶部
    backTopclick() {
      //通过组件访问，拿到scroll对象
      this.$refs.scroll.backTop(0, 0, 500);
    },

    //滚动
    homescroll(position) {
      //1：返回顶部
      this.isshow = -position.y > 1000 ? true : false;

      //2：tabcontorl
      this.tabcontorloisshow =
        -position.y > this.tabcontorloffsettop ? true : false;
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