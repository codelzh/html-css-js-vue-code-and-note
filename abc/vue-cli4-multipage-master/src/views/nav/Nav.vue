<template>
  <div class="nav container-fluid">
    <img src="~img/nav/1.jpg" alt="" class="img-responsive" />

    <div class="row no-gutters seize">
      <div class="col-md-12">xxxx导航</div>
    </div>

    <div class="row no-gutters ffff">
      <div class="col-md-7 col-md-offset-4 col-xs-7 col-xs-offset-4">
        <label for="search" class="lable">
          <input
            id="search"
            tFype="text"
            class="search"
            ref="input"
            @keyup="inputkeyup"
          />
          <a href="http://www.baidu.com">
            <span class="icon1 icon-baidu"></span>
          </a>
          <a href="http://google.com/">
            <span class="icon2 icon-google"></span>
          </a>
          <a href="https://cn.bing.com/">
            <span class="icon3 icon-bing"></span>
          </a>
          <span class="intobdserach" @click="intobdclick"></span>
        </label>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-md-2 col-md-offset-5 col-xs-offset-6 col-xs-5 on">
        <div class="col-md-1 intoclick">
          <a href="javascript:;" @click="intohome">进入首页</a>
        </div>
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
  methods: {
    //当用户点击那个放大镜
    intobdclick() {
      window.location.href =
        "https://www.baidu.com/s?wd=" + this.$refs.input.value;
    },
    //用户在搜索框按下回车
    inputkeyup(event) {
      if (event.code == "Enter") {
        window.location.href =
          "https://www.baidu.com/s?wd=" + this.$refs.input.value;
      }
    },
    intohome(){
      this.$router.push("/home")
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
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

.row {
  padding: 0;
  margin: 0;
}

.nav {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  img {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .seize {
    height: 40%;
  }

  .lable {
    position: relative;

    .search {
      border-radius: 10px;
      border: 0;
      outline: none;
      padding-left: 120px;
      width: 500px;
      height: 47px;
    }

    .icon1 {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 30px;
      font-family: "icomoon";
    }
    .icon2 {
      position: absolute;
      top: 0;
      left: 35px;
      font-size: 30px;
      font-family: "icomoon";
    }
    .icon3 {
      position: absolute;
      top: 0;
      left: 70px;
      font-size: 30px;
      font-family: "icomoon";
    }
    .intobdserach {
      position: absolute;
      top: 6px;
      right: 20px;
      width: 48px;
      height: 33px;
      background: url(~img/nav/3.png) no-repeat;
      background-position: -283px 0;
    }
  }

  .on {
    color: red;
    margin-left: 45%;

    .intoclick {
      width: 132px;
      height: 23px;
      border-radius: 10px;
      background-color: purple;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
        height: 23px;
        line-height: 23px;
      }
    }
  }
}
.icon-baidu:before {
  content: "\e909";
  color: #2319dc;
}
.icon-bing:before {
  content: "\e90a";
  color: #008373;
}
.icon-google:before {
  content: "\e90b";
  color: #4285f4;
}
</style>