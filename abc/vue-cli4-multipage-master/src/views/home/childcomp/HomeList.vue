<template>
  <!-- 榜单 -->
  <div class="hidden-xs hidden-sm list">
    <div class="allList-top">
      <span class="icon-tongji"></span>
      <span>全站榜单</span>
    </div>
    <!-- 榜单内容 -->
    <div class="row allList">
      <div class="col-md-12 list-item">
        <div class="left">
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="hidecontent">
            哈哈哈哈啊哈哈哈哈哈啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="icons">
            <span class="icon-thumbs-up">1</span>
            <span class="icon-message">2</span>
          </div>
        </div>

        <div class="ranking">1</div>
      </div>

      <div class="col-md-12 list-item">
        <div class="left">
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="hidecontent">
            哈哈哈哈啊哈哈哈哈哈啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="icons">
            <span class="icon-thumbs-up">1</span>
            <span class="icon-message">2</span>
          </div>
        </div>

        <div class="ranking">1</div>
      </div>

      <div class="col-md-12 list-item">
        <div class="left">
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="hidecontent">
            哈哈哈哈啊哈哈哈哈哈啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="icons">
            <span class="icon-thumbs-up">1</span>
            <span class="icon-message">2</span>
          </div>
        </div>

        <div class="ranking">1</div>
      </div>

      <div class="col-md-12 list-item">
        <div class="left">
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="hidecontent">
            哈哈哈哈啊哈哈哈哈哈啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="icons">
            <span class="icon-thumbs-up">1</span>
            <span class="icon-message">2</span>
          </div>
        </div>

        <div class="ranking">1</div>
      </div>

      <div class="col-md-12 list-item">
        <div class="left">
          <img src="~img/home/1.jpg" alt="" />
        </div>
        <div class="right">
          <div class="hidecontent">
            哈哈哈哈啊哈哈哈哈哈啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="icons">
            <span class="icon-thumbs-up">1</span>
            <span class="icon-message">2</span>
          </div>
        </div>

        <div class="ranking">1</div>
      </div>
    </div>
    <div style="clear: both"></div>

    <!-- 榜单内容结束 -->
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
.icon-message:before {
  content: "\e91f";
  font-family: "icomoon";
}
.icon-thumbs-up:before {
  content: "\f087";
  font-family: "icomoon";
}
.icon-tongji:before {
  content: "\f080";
  font-family: "icomoon";
  color: #959595;
}
//榜单
.list {
  margin-top: 15px;
}
//榜单头部
.allList-top {
  margin-left: 30px;
  display: flex;
  span:nth-child(1) {
    flex: 10%;
  }
  span:nth-child(2) {
    flex: 90%;
  }
  span {
    display: inline-block;
    font-size: 1.37rem;
    color: #959595;
  }
}

//榜单内容
.allList {
  flex-direction: column;
  margin-left: 30px;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);
  height: 100px;

  .list-item {
    position: relative;
    height: 100px;
    background-color: white;
    border-radius: 1rem;
    transition: all 0.5s;
    margin-top: 3px;
    display: flex;
    padding: 10px;
    align-items: center;

    .left {
      flex: 40%;
      overflow: hidden;
      box-sizing: content-box;
      margin-right: 15px;

      img {
        width: 100%;
      }
    }
    .right {
      flex: 60%;
      flex-direction: column;
      .hidecontent {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        word-break: break-all;
        -webkit-box-orient: vertical;
        color: #55292a;
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 1rem;
      }
      .icons {
        margin-top: 1rem;
        span:nth-child(2) {
          margin-left: 2rem;
        }
      }
    }
  }

  .ranking {
    position: absolute;
    top: 65px;
    right: 22px;
    font-size: 2.2rem;
    font-style: oblique;
    color: rgba(0, 0, 0, 0.3);
  }

  .list-item:hover {
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
  }
}
</style>