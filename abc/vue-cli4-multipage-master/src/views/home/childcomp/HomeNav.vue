<template>
  <!-- aaa这个属性用来兼容固定定位的 -->
  <div class="aaaaaaa" ref="nav">
    <div :class="{ fixed: isfixed }" class="homenav-index">
      <div class="container nav-index">
        <div class="left">
          <a href="javascript:;" class="navitem" @click="intohome">
            <div>
              <span class="icon-home1"></span>
              <span>首页</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem" @click="intogame">
            <div>
              <span class="icon-game"></span>
              <span>游戏</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem" >
            <div>
              <span class="icon-tv"></span>
              <span>番剧</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-book"></span>
              <span>小说</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-music"></span>
              <span>音乐</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-home1"></span>
              <span>黑科技</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-img"></span>
              <span>图片</span>
            </div>
          </a>
          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-open-book"></span>
              <span>漫画</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-question"></span>
              <span>关于</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-phone"></span>
              <span>APP</span>
            </div>
          </a>

          <a href="javascript:;" class="navitem">
            <div>
              <span class="icon-nav"></span>
              <span>导航</span>
            </div>
          </a>
        </div>
        <div class="right">
          <div class="text-right login" @click="login">登录</div>
        </div>
      </div>
      <div class="bg">
        <div></div>
      </div>
    </div>

    <home-login ref="login" />
  </div>
</template>

<script>
import HomeLogin from "./HomeLogin.vue";

export default {
  name: "",
  data() {
    return {
      isfixed: false,
    };
  },
  components: {
    HomeLogin,
  },
  mounted() {
    //当鼠标到达一定程度，让nav变固定定位
    let bridge = this;
    document.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset > bridge.$refs.nav.offsetTop) {
          bridge.isfixed = true;
        } else {
          bridge.isfixed = false;
        }
      },
      true
    );
  },
  methods: {
    //当登录被点击，访问子组件属性，打开模态窗口
    login() {
      this.$refs.login.isshow = true;
    },
    intogame() {
      this.$router.push("/game");
    },
    intohome() {
      this.$router.push("/home");
    },
  },
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

.icon-open-book:before {
  content: "\e911";
  font-family: "icomoon";
}
.icon-game:before {
  content: "\e912";
  font-family: "icomoon";
}
.icon-img:before {
  content: "\e913";
  font-family: "icomoon";
}
.icon-music:before {
  content: "\e914";
  font-family: "icomoon";
}
.icon-nav:before {
  content: "\e90c";
  font-family: "icomoon";
}
.icon-tv:before {
  content: "\e915";
  font-family: "icomoon";
}
.icon-phone:before {
  content: "\e90d";
  font-family: "icomoon";
}
.icon-person_outline:before {
  content: "\e90e";
  font-family: "icomoon";
}
.icon-science:before {
  content: "\e916";
  font-family: "icomoon";
}
.icon-question:before {
  content: "\f128";
  font-family: "icomoon";
}
.icon-home1:before {
  content: "\f015";
  font-family: "icomoon";
}
.icon-book:before {
  content: "\f02d";
  font-family: "icomoon";
}

.aaaaaaa {
  width: 100%;
  height: 49px;
  overflow: hidden;
  z-index: 999;
}
.homenav-index {
  width: 100%;

  .bg {
    position: relative;
    width: 100%;
    height: 49px;
    z-index: -1;
    height: 0;
    div {
      position: absolute;
      top: -52px;
      left: 0;
      background: url("~img/home/hometop.webp");
      width: 100%;
      height: 49px;
      filter: 5px;
      background-position: bottom;
      filter: blur(4px);
    }
  }

  .nav-index {
    display: flex;
    z-index: 3;
    height: 49px;
    .left {
      flex: 60%;
      display: flex;

      .navitem {
        flex: 1;
        text-decoration: none;

        div {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          z-index: 1;
          text-align: center;
          padding: 4px;

          span:nth-child(1) {
            /* flex: 40%; */
            width: 22px;
            height: 22px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 22px;
            color: white;
          }

          span:nth-child(2) {
            flex: 20%;
            color: white;
            font-size: 1rem;
          }
        }
      }

      .navitem:hover {
        background: rgba(93, 113, 121, 0.3);
      }
    }
    .right {
      flex: 50%;
      position: relative;
      .login {
        position: absolute;
        top: 4px;
        right: 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        font-size: 1rem;
        color: #00a1d6;
        font-weight: 600;
        background-color: white;
      }

      .login:hover {
        cursor: pointer;
      }
    }
  }
}

.fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>