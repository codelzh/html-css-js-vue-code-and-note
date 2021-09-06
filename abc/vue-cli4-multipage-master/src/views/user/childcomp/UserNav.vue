<!-- 用户导航栏 -->
<template>
  <div class="usernav">
    <ul class="article">
      <li class="manage">
        <span></span>
        <span>文章管理</span>
      </li>

      <li class="send">
        <span></span>
        <span>up主投稿</span>
      </li>

      <li class="myworks">
        <span></span>
        <span>我的作品</span>
      </li>

      <li class="myheart">
        <span></span>
        <span>我的收藏</span>
      </li>
    </ul>

    <ul class="personal">
      <li class="set">
        <span></span>
        <span>个人设置</span>
      </li>

      <li class="data">
        <span></span>
        <span>我的资料</span>
      </li>

      <li class="my">
        <span></span>
        <span>我的设置</span>
      </li>

      <li class="out">
        <span></span>
        <span>退出</span>
      </li>
    </ul>
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
.usernav {
  box-shadow: 0 0px 6px 0px rgba(80, 73, 73, 0.2);
  margin-top: 15px;
  .article {
    background-color: white;
    text-align: center;
    padding: 0;
    margin: 0;
    .manage {
      display: flex;
      list-style: none;
      color: #959595;
      align-items: center;
      width: 100%;
      height: 25px;
      span:nth-child(1) {
        width: 20px;
        height: 20px;
        background-color: #e5e5e5;
        border-radius: 20px;
        overflow: hidden;
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
        font-weight: 800;
      }
    }

    .send {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    .myworks {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    .myheart {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    li:hover {
      color: #0099cc;
      background: rgba(204, 255, 255, 0.25);
      cursor: pointer;

      span {
        color: #0099cc;
      }
    }
  }

  .personal {
    background-color: white;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    .set {
      display: flex;
      list-style: none;
      color: #959595;
      align-items: center;
      width: 100%;
      height: 25px;
      span:nth-child(1) {
        width: 25px;
        height: 20px;
        background-color: #e5e5e5;
        border-radius: 20px;
        overflow: hidden;
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
        font-weight: 800;
      }
    }

    .data {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    .my {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    .out {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 100%;
      height: 25px;
      list-style: none;
      color: #959595;

      span:nth-child(1) {
        font-family: "icomoon";
        color: #959595;
      }
      span:nth-child(2) {
        margin-left: 5px;
        font-size: 1rem;
      }
    }

    li:hover {
      color: #0099cc;
      background: rgba(204, 255, 255, 0.25);
      cursor: pointer;

      span {
        color: #0099cc;
      }
    }
  }
}
</style>