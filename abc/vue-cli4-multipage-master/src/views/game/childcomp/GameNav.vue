<!-- 游戏导航 -->
<template>
  <div class="container gamenav">
    <div class="category">
      <a href="javascript:;">全部</a>
      <a href="javascript:;">3D大作</a>
      <a href="javascript:;">GalGame</a>
      <a href="javascript:;">GMV</a>
      <a href="javascript:;">电脑游戏</a>
      <a href="javascript:;">手机游戏</a>
      <a href="javascript:;">游戏攻略</a>
    </div>
    <div class="sort">
      <div class="lookfor">
        <span>找到</span>
        <span>355</span>
      </div>
      <div class="row oder">
        <span class="hidden-xs">排序</span>
        <a href="javascript:;" class="col-xs-6 col-md-1 col-sm-4">最新</a>
        <a href="javascript:;" class="col-xs-6 col-md-1 col-sm-4">最赞</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.gamenav {
  display: flex;
  flex-direction: column;
  .category {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 8px;
    a {
      text-decoration: none;
      margin-left: 5px;
      height: 26px;
      line-height: 26px;
      padding: 0 1rem;
      border-radius: 10rem;
      margin-top: 3px;
      background-color: white;
      color: #55292a;
      text-align: center;
      font-size: 1.4rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    a:hover {
      background-color: #0099cc;
      color: white;
    }
  }
  .sort {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 1.7rem;
    .lookfor {
      display: flex;
      // border-right: 1px solid black;
      padding-right: 1rem;
      span:nth-child(1) {
        margin-right: 1rem;
      }
    }
    .oder {
      display: flex;
      align-items: center;
      width: 80%;

      span {
        margin-left: 2rem;
            font-size: 1.2rem;
      }
      a {
        text-decoration: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-left: 10px;
        font-size: 1.2rem;
        text-align: center;
        padding: 0 1rem;
        color: #666;
      }
    }
  }
}
</style>