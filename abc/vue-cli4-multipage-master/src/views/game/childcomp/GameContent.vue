<!-- 游戏内容 -->
<template>
  <div class="container">
    <div class="row content">
      <!-- 一个个item -->
      <div class="col-md-2 col-xs-5 col-sm-5 citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
        </div>
      </div>

      <div class="col-md-2 col-xs-5 col-sm-5 citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
        </div>
      </div>

      <div class="col-md-2 col-xs-5 col-sm-5 citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
        </div>
      </div>

      <div class="col-md-2 col-xs-5 col-sm-5 citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
        </div>
      </div>

      <div class="col-md-2 col-xs-5 col-sm-5 citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
        </div>
      </div>

      <div class="col-md-2 col-xs-5 col-sm- citem">
        <!-- 贴子图片 -->
        <div class="img">
          <img src="~img/nav/1.jpg" alt="" />
        </div>
        <!-- 帖子文字 -->
        <div class="text">
          teadsssssssssadssssssssssssssssssssddddddddddddddddddddssxt
        </div>
        <!-- 帖子所属用户 -->
        <div class="user">
          <div class="uimg">
            <img src="~img/nav/1.jpg" alt="" />
          </div>
          <div class="uname">小明</div>
          <div class="udate">2020-1-1</div>
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
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .citem {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-left: 10px;
    margin-top: 15px;
    height: 210px;
    border-radius: 16px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 -1px 2px #000000;
    transition: all 1s;
    .img {
      width: 100%;
      height: 60%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-top: 11px;
      text-align: center;
      padding: 0 16px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      word-break: break-all;
      -webkit-box-orient: vertical;
    }

    .user {
      display: flex;
      padding: 0 10px;
      align-items: center;
      .uimg {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .uname {
        padding-left: 5px;
        text-align: center;
        color: #0099cc;
        font-size: 1.3rem;
      }
      .udate {
        padding-left: 50px;
        color: #959595;
        font-size: 1rem;
      }
    }
  }

  .citem:hover {
    background-color: #ccffff;
    cursor: pointer;
  }
}
</style>