<template>
  <!-- 内容模块，flex分左右两部分 -->
  <div class="container">
    <div class="row homecontent">
      <div class="col-md-10 content">
        <home-notice />
        <home-pc-game/>
        <home-gal-game/>
        <home-phone-game/>
        <home-cartoon/>
      </div>
      <div class="col-md-2 side">
        <home-list/>
        <home-writer/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNotice from "./childcomp/HomeNotice.vue";
import HomePcGame from "./childcomp/HomePcGame.vue";
import HomeGalGame from "./childcomp/HomeGalGame.vue";
import HomePhoneGame from "./childcomp/HomePhoneGame.vue"
import HomeCartoon from "./childcomp/HomeCartoon.vue";

import HomeList from "./childcomp/HomeList.vue";
import HomeWriter from "./childcomp/HomeWriter.vue"

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HomeNotice,
    HomePcGame,
    HomeGalGame,
    HomePhoneGame,
    HomeCartoon,

    HomeList,
    HomeWriter
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
// 轮播图和右边的八个元素
.load {
  margin-top: 15px;

  .content1 {
    display: flex;
    div {
      flex: 1;
      margin-left: 10px;
      height: 115px;
      background-color: red;
      border-radius: 15px;
    }
  }

  .content2 {
    display: flex;
    margin-top: 5px;

    div {
      flex: 1;
      margin-left: 10px;
      height: 125px;
      background-color: red;
      border-radius: 1.1rem;
    }
  }
}
.homecontent {
  display: flex;
  div:nth-child(1) {
    flex: 80%;
  }
  div:nth-child(2) {
    flex: 20%;
  }
}
</style>