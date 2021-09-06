<template>
  <div class="">
    <div class="notice-top">
      <!-- 公告 -->
      <div class="notice-index">
        <!-- 公告头部 -->
        <div class="notice-top">
          <span>
            <i class="icon-megaphone"></i>
            <i>公告</i>
          </span>
          <span class="text-right"
            ><a href="javascript:;" class="icon-chevron-right">更多</a></span
          >
        </div>
        <!-- 公告内容 -->
        <div class="row notice">
          <div class="clo-md-2 notice-item">
            <div>
              <img src="~img/home/1.jpg" alt="" />
            </div>
            <div class="noticetext">
              爱动手收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾
            </div>
          </div>

          <div class="clo-md-2 notice-item">
            <div>
              <img src="~img/home/1.jpg" alt="" />
            </div>
            <div class="noticetext">
              爱动手收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾
            </div>
          </div>
          <div class="clo-md-2 notice-item">
            <div>
              <img src="~img/home/1.jpg" alt="" />
            </div>
            <div class="noticetext">
              爱动手收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾
            </div>
          </div>

          <div class="clo-md-2 notice-item">
            <div>
              <img src="~img/home/1.jpg" alt="" />
            </div>
            <div class="noticetext">
              爱动手收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾
            </div>
          </div>

          <div class="clo-md-2 notice-item">
            <div>
              <img src="~img/home/1.jpg" alt="" />
            </div>
            <div class="noticetext">
              爱动手收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾收拾
            </div>
          </div>
        </div>
        <div class="morenotice">
          <a href="javascript:;" class="icon-chevron-right">更多公告</a>
        </div>
      </div>
    </div>

    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
//公告的自体图标
.icon-megaphone:before {
  content: "\e917";
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
}

//公告模块
.notice-index {
  //公告头部
  .notice-top {
    display: flex;
    margin-top: 15px;
    height: 30px;
    line-height: 30px;
    span {
      flex: 1;
      background-color: white;
    }

    span:nth-child(1) i:nth-child(1) {
      display: inline-block;
      font-style: normal;
      width: 30px;
      height: 30px;
      background: #0099cc;
      border-radius: 30px;
      text-align: center;
      transition: all 0.6s;
    }

    span:nth-child(1) i:nth-child(2) {
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      width: 50px;
      height: 30px;
      margin-left: 5px;
      color: #55292a;
      font-size: 1.8rem;
    }

    span:hover i:nth-child(1) {
      transform: rotate(50deg);
    }
    span:hover i:nth-child(2) {
      color: #0099CC;
    }

    span:nth-child(2) {
      a {
        text-decoration: none;
        color: #0099cc;
      }
    }
    span:nth-child(2):hover {
      a {
        color: #66ccff;
      }
    }
  }

  //公告内容
  .notice {
    display: flex;
    margin-top: 10px;
    .notice-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 146px;
      background-color: #ffffff;
      margin-left: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px -8px rgb(0, 0, 0, 0.2);
      transition: all 1s;

      div:nth-child(1) {
        flex: 70%;
        width: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-child(2) {
        /* flex: 30%; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        word-break: break-all;
        -webkit-box-orient: vertical;
        padding: 1px 30px;
        height: 35px;
        font-size: 1.3rem;
      }
    }

    .notice-item:hover {
      background-color: #ccffff;
      cursor: pointer;
      .noticetext {
        color: #0099cc;
      }
    }
  }

  .morenotice {
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

  .morenotice:hover {
    background-color: #ccffff;
    cursor: pointer;
  }
  .morenotice:hover a {
    color: #0099cc;
  }
}
</style>