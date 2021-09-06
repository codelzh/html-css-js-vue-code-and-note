<!-- 轮播图 -->
<template>
  <div class="container">
    <!-- 轮播图和右边的八个元素为一排。这个row占满了12 -->
    <div class="row load">
      <div class="col-md-5" style="padding: 0">
        <swiper-load />
      </div>

      <div class="col-md-7 content1">
        <div class="content1item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content1item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content1item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content1item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>
      </div>

      <div class="col-md-7 content2">
        <div class="content2item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content2item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content2item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>

        <div class="content2item">
          <div><img src="~img/home/1.jpg" alt="" /></div>
          <div class="text">
            【PC】[新增度盘][AVG]爱因斯坦携爱敬上 汉化免安装版[2.72G]
          </div>
          <div class="cover"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperLoad from "common/swiper/SwiperLoad.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    SwiperLoad,
  },
};
</script>
<style lang="less" scoped>
// 轮播图和右边的八个元素
.load {
  margin-top: 15px;

  .content1 {
    display: flex;
    padding: 0;
    .content1item {
      flex: 1;
      position: relative;
      margin-left: 10px;
      height: 115px;
      background-color: red;
      border-radius: 15px;

      div {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .cover {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.35);
        cursor: pointer;
        border-radius: 15px;  
      }

      .text {
        position: absolute;
        top: 91px;
        left: 15px;
        width: 80%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        color: #fff;
        text-shadow: 0 1px 3px #000;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.5s;
      }
    }
    .content1item:hover .cover {
      display: block;
    }

    .content1item:hover .text {
      top: 6rem;
      left: 15px;
      height: 50px;
      overflow: visible;
      word-wrap: break-word;
      word-break: break-all;
      white-space: normal;
      z-index: 1;
      font-weight: 400;
      color: #fff;
      text-shadow: 0 1px 3px #000;
      font-size: 1rem;
      overflow: hidden;
    }
  }

  .content2 {
    display: flex;
    margin-top: 5px;
    padding: 0;

    .content2item {
      flex: 1;
      position: relative;
      margin-left: 10px;
      height: 115px;
      background-color: red;
      border-radius: 15px;
      div {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .cover {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.35);
        border-radius: 15px;
        cursor: pointer;
      }

      .text {
        position: absolute;
        top: 91px;
        left: 15px;
        width: 80%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        color: #fff;
        text-shadow: 0 1px 3px #000;
        font-size: 1rem;
        transition: all 0.5s;
        cursor: pointer;
      }
    }
    .content2item:hover .cover {
      display: block;
    }

    .content2item:hover .text {
      top: 6rem;
      left: 15px;
      height: 50px;
      overflow: visible;
      word-wrap: break-word;
      word-break: break-all;
      white-space: normal;
      z-index: 1;
      font-weight: 400;
      color: #fff;
      text-shadow: 0 1px 3px #000;
      font-size: 1rem;
      overflow: hidden;
    }
  }
}
</style>