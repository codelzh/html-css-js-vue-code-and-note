<template>
  <div>
    <div class="top">
      <span>用户评价</span>
      <span>更多</span>
    </div>

    <div class="content">
      <div class="user">
        <div class="userimg"><img :src="evaluation.user.avatar" alt="" /></div>
        <span>{{ evaluation.user.uname }}</span>
      </div>

      <div class="content">
        {{ evaluation.content }}
      </div>

      <div class="other">
        <span>{{ evaluation.created | showtime }}</span>
        <span>{{ evaluation.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/components/common/utils/utils.js"
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    evaluation: {
      type: Object
    },
  },
  filters: {
    showtime(value) {
      var time = new Date(value * 1000);
      return formatDate(time,'yyyy-m-d')
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5%;
}

.content {
  .user {
    width: 100%;
    margin-bottom: 3%;

    img {
      width: 100%;
      vertical-align: middle;
    }
    .userimg {
      float: left;
      width: 10%;
      overflow: hidden;
      border-radius: 50px;
    }
    span {
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      color: #8a8a8a;
    }
  }
  .content {
    color: #8a8a8a;
    margin-bottom: 2%;
  }

  .other span{
    font-size: 14px;
    color: #ccc;
  }
  .other span:nth-child(2){
    margin-left: 5%;
  }
}
</style>