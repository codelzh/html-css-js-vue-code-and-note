<!-- home底部 -->
<template>
  <div class="container homebottom">
    <div class="top">
      <div class="help">
        <span>帮助中心</span>
        <a href="javascript:;">如何获取xxx</a>
        <a href="javascript:;">免责申明</a>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">投稿须知</a>
      </div>
      <div class="free">
        <span>声明</span>
        <span
          >本站为ACG动漫爱好者的兴趣交流站，由志愿者们审核和监督，不含上传下载存储服务及经营性内容，站内所提供的内容依据均为各大动漫官方、站点提供的公开引用资源。
          萌站内用户所发布的一切汉化补丁、注册机和注册信息及软件的解密分析文章仅限用于学习和研究目的；不得将上述内容用于商业或者非法用途，否则，一切后果请使用者自负。本站信息来自网络，版权争议与本站无关。您必须在下载后的24个小时之内，从您的电脑中彻底删除上述内容。如果您喜欢该程序，请支持正版软件，购买注册，得到更好的正版服务。如存在侵权或非法内容，欢迎举报，我们将予以删除。</span
        >
      </div>
      <div class="desc">
        <div>交流论坛</div>
        <div>2</div>
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
.homebottom {
  margin-top: 75px;
  .top {
    display: flex;
    div {
      flex: 1;
    }
    .help {
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        color: #959595;
      }
      a {
        text-decoration: none;
        color: black;
      }
    }

    .free {
      display: flex;
      flex-direction: column;
      text-align: center;
      span:nth-child(1) {
        flex: 10%;
      }
      span:nth-child(2) {
        flex: 90%;
        color: #959595;
        font-size: 1rem;
      }
    }

    .desc {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      text-align: center;
      div:nth-child(1) {
        flex: 20%;
      }
      div:nth-child(2) {
        flex: 80%;
      }
    }
  }
}
</style>