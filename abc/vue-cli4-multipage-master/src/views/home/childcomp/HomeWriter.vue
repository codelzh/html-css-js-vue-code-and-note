<!-- 作者排行榜 -->
<template>
  <div class="hidden-xs hidden-sm homewriter">
    <!-- 头部 -->
    <div class="writertop">
      <span class="icon-users"></span>
      <span>作者排行榜</span>
    </div>
    <!-- 内容 -->
    <div class="row writercontent">
      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>呃呃呃</span>
        <div class="good">10</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>我的很大啊</span>
        <div class="good">324</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>打工</span>
        <div class="good">22</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>叫姐姐</span>
        <div class="good">32</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>牛牛牛</span>
        <div class="good">324</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>2</span>
        <div class="good">324</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>2</span>
        <div class="good">324</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>2</span>
        <div class="good">324</div>
      </div>

      <div class="col-md-2 writercontentitem">
        <span><img src="~img/home/1.jpg" alt="" /></span><span>2</span>
        <div class="good">324</div>
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
.icon-users:before {
  content: "\f0c0";
  font-family: "icomoon";
  color: #959595;
}

.homewriter {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 15px;
  //头部
  .writertop {
    flex: 1;
    margin-bottom: 5px;
    span:nth-child(2) {
      color: #959595;
      margin-left: 5px;
    }
  }

  //内容
  .writercontent {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .writercontentitem {
      flex: 33.33333%;
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 0;
      height: 100px;

      span:nth-child(1) {
        /* flex: 45%; */
        display: inline-block;
        overflow: hidden;
        border-radius: 60px;
        background-color: red;
        /* height: 20%; */
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span:nth-child(2) {
        text-align: center;
        width: 60px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        white-space: nowrap;
        transition: all 0.5s;

      }
    }

    .writercontentitem:hover {
      cursor: pointer;
      span {
        color: #ff4a4d;
      }
      .good{
        background-color: #0099cc;
      }
    }

    .good {
      position: absolute;
      width: 42px;
      height: 17px;
      top: -2px;
      left: 22px;
      background: rgba(0, 153, 204, 0.7);
      border-radius: 10px;
      color: white;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      transition: all 1s;
    }
  }
}
</style>