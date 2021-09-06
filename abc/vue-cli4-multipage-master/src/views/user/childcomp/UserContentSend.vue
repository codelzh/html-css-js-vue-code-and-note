<!-- 投稿 -->
<template>
  <div class="send">
    <form action="">
      <!-- 看我模块 -->
      <div class="lookme">
        <span class="title">看我</span>

        <div class="bg">
          <ul>
            <li>1.欢迎大家踊跃投稿，凡是造福人类的事 我们一律支持！</li>
            <li>
              2.投稿后作品被下载和点赞收藏 投稿者都会获得相应的钻石奖励哦！
            </li>
            <li>3.文章编辑完毕提交会进入审核阶，请按规定投稿哦!</li>
            <li>4.详细投稿姿势请点我查看教程！！</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </div>
      <!-- 文章标题 -->
      <div class="article">
        <span class="title">文章标题</span>
        <div><input type="text" placeholder="文章标题（*）" /></div>
      </div>
      <!-- 文章内容 -->
      <div class="content">
        <span class="title">文章内容</span>
        <div ref="editor"></div>
      </div>
    </form>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "",
  data() {
    return {
      editor: null,
      historytext: "a",
    };
  },
  methods: {},
  created() {
    console.log("-----------------------------------");

  },
  mounted() {
    //创建富文本编辑器
    let bridge = this;
    const editor = new E(bridge.$refs.editor);
    editor.config.zIndex = 0;
    editor.config.focus = false;

    editor.config.compatibleMode = function () {
      // 返回 true 表示使用兼容模式；返回 false 使用标准模式
      return true;
    };
    editor.config.onchangeTimeout = 2000; // 修改为 500 ms
    // 配置 onchange 回调函数
    editor.config.onchange = function (newHtml) {
      bridge.historytext = newHtml;
      console.log(bridge.historytext);
    };
    editor.create();
    this.editor = editor;
  },
  activated() {
    this.editor.txt.append(this.historytext);
    console.log(this.historytext);
  },
  beforeDestroy(){
    console.log("销毁");
  }
};
</script>
<style lang="less" scoped>
.send {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-radius: 15px;
  .lookme {
    background-color: white;
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 0 0px 6px 0px rgba(80, 73, 73, 0.2);
    .title {
      margin: 0;
      padding: 1;
      display: inline-block;
      border-radius: 27px;
      font-size: 1rem;
      padding: 1px 5px;
      font-family: "icomoon";
      color: white;
      background-color: #0099cc;
    }
    .title:hover {
      cursor: pointer;
    }

    .bg {
      width: 100%;
      height: 100%;
      background-color: #f7f7f7;
      li {
        list-style: none;
        font-size: 1rem;
        color: #666;
        margin: 6px 0;
      }
    }
  }

  .article {
    background-color: white;
    padding: 15px 20px;
    box-shadow: 0 0px 6px 0px rgba(80, 73, 73, 0.2);
    border-radius: 15px;
    margin-top: 15px;
    .title {
      margin: 0;
      padding: 1;
      display: inline-block;
      border-radius: 27px;
      font-size: 1rem;
      padding: 1px 5px;
      font-family: "icomoon";
      color: white;
      background-color: #0099cc;
      margin-bottom: 10px;
    }
    .title:hover {
      cursor: pointer;
    }

    input {
      width: 100%;
      border-radius: 15px;
      outline: none;
      border: 1px solid #ccc;
      transition: all 1s;
      padding-left: 13px;
      font-size: 1.9rem;
    }
  }

  .content {
    background-color: white;
    padding: 15px 20px;
    box-shadow: 0 0px 6px 0px rgba(80, 73, 73, 0.2);
    border-radius: 15px;
    margin-top: 15px;
    .title {
      margin: 0;
      padding: 1;
      display: inline-block;
      border-radius: 27px;
      font-size: 1rem;
      padding: 1px 5px;
      font-family: "icomoon";
      color: white;
      background-color: #0099cc;
      margin-bottom: 10px;
    }
    .title:hover {
      cursor: pointer;
    }
  }
}
</style>