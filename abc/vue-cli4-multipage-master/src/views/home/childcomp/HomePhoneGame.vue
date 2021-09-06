<!-- 手机游戏界面 -->
<template>
  <div class="phoneGame">
    <!-- 头部 -->
    <div class="row phonegametop">
      <div class="col-md-6 left">
        <span class="icon-phone gameicon"></span>
        <span>手机游戏</span>
      </div>
      <div class="col-md-6 text-right icon-chevron-right right">
        <a href="javascript" class="">更多</a>
      </div>
    </div>
    <!-- 游戏内容 -->
    <div class="row phonegamecontent">
      <div class="col-md-2 contentitem">
        <div>
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="contenttext">2asddddddddddddddddddd</div>
      </div>

      <div class="col-md-2 contentitem">
        <div>
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="contenttext">2asddddddddddddddddddd</div>
      </div>

      <div class="col-md-2 contentitem">
        <div>
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="contenttext">2asddddddddddddddddddd</div>
      </div>

      <div class="col-md-2 contentitem">
        <div>
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="contenttext">2asddddddddddddddddddd</div>
      </div>

      <div class="col-md-2 contentitem">
        <div>
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="contenttext">2asddddddddddddddddddd</div>
      </div>
    </div>

    <div class="morephonegame">
      <a href="javascript:;" class="icon-chevron-right">更多手机游戏</a>
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
.icon-phone:before {
  content: "\e90d";
  font-family: "icomoon";
  color: white;
  font-size: 1.9rem;
}

.icon-chevron-right::after {
  content: "\e918";
  font-family: "icomoon";
  font-size: 1rem;
  position: relative;
  top: 1px;
  right: 52px;
  color: #0099cc;
}

.phoneGame {
  margin-top: 15px;
  // 头部
  .phonegametop {
    display: flex;
    .left {
      flex: 1;
      span:nth-child(1) {
        display: inline-block;
        font-style: normal;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background: #61b4ca;
        color: white;
        border-radius: 30px;
        text-align: center;
        transition: all 0.6s;
        margin-right: 5px;
      }
      span:nth-child(2) {
        display: inline-block;
        font-style: normal;
        font-weight: 700;
        width: 100px;
        height: 30px;
        margin-left: 5px;
        color: #55292a;
        font-size: 1.8rem;
      }
    }
    .right {
      flex: 1;
      height: 30px;
      line-height: 30px;
      position: relative;

      a {
        text-decoration: none;
        position: absolute;
        right: 77px;
      }
    }

    .right:hover {
      color: #66ccff;
      a {
        color: #66ccff;
      }
    }

    .gameicon {
      transform: rotate(-30deg);
    }

    .left:hover {
      .gameicon {
        transform: rotate(30deg);
      }
      span {
        color: #0099cc;
      }
    }
  }

  //内容
  .phonegamecontent {
    .contentitem {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      height: 310px;
      padding: 0;
      border-radius: 13px;
      margin-top: 10px;
      box-shadow: 0 0 10px -8px rgb(0, 0, 0, 0.2);
      margin-left: 20px;
      transition: all 1s;

      div:nth-child(1) {
        flex: 80%;
        width: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }

      div:nth-child(2) {
        flex: 20%;
        width: 100%;
        overflow: hidden;
        text-align: center;
        padding: 20px;
        /*3:溢出的文字为省略号*/
        text-overflow: ellipsis;
      }
    }
    .contentitem:hover {
      background: #ccffff;
      cursor: pointer;
      .contenttext {
        color: #0099cc;
      }
    }
  }

  //更多
  .morephonegame {
    margin-top: 15px;
    border-radius: 10px;
    background-color: white;
    text-align: center;
    box-shadow: 0 0 10px -8px rgb(0, 0, 0, 0.2);
    transition: all 1s;
    a {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      color: #959595;
    }
  }

  .morephonegame:hover {
    background-color: #ccffff;
    cursor: pointer;
  }
  .morephonegame:hover a {
    color: #0099cc;
  }
}
</style>