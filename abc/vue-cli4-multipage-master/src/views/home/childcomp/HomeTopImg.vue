<template>
  <div class="topimg container-fluid">
    <div class="container">
      <div class="row" style="margin-top: 20px">
        <div class="col-md-4 col-xs-12 navindex">
          <span><a href="javascript:;" class="icon-card">个人中心</a></span>
          <span><a href="javascript:;" class="icon-nav">xxx导航</a></span>
          <span><a href="javascript:;" class="icon-phone">下载App</a></span>
          <span><a href="javascript:;">待定。。</a></span>
        </div>
      </div>
    </div>

    <!-- <home-nav/> -->
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {};
  },
  components: {
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.topimg {
  position: relative;
  background: url("~img/home/hometop.webp");
  height: 210px;
  background-position-x: -365px;
}

@font-face {
  font-family: "icomoon";
  src: url("~assets/fonts/icomoon.eot?mr47y7");
  src: url("~assets/fonts/icomoon.eot?mr47y7#iefix") format("embedded-opentype"),
    url("~assets/fonts/icomoon.ttf?mr47y7") format("truetype"),
    url("~assets/fonts/icomoon.woff?mr47y7") format("woff"),
    url("~assets/fonts/icomoon.svg?mr47y7#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon-card:before {
  content: "\f2c3";
  font-family: "icomoon";
}
.icon-nav:before {
  content: "\e90c";
  font-family: "icomoon";
}
.icon-phone:before {
  content: "\e90d";
  font-family: "icomoon";
}

.container {
  .navindex {
    display: flex;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.35);
    padding: 0;

    span {
      flex: 1;
      text-align: center;

      a {
        text-decoration: none;
        color: white;
        font-size: 13px;
      }
    }
    span:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>