<template>
  <div class="tabcontorl">
    <div class="contorl-item" v-for="(item,index) in title" :key="item" :class="{active:index==activeindex}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeindex:0,
    };
  },
  props: {
    title: {
      type: Array,
      default: [],
    },
  },
  methods:{
    itemclick(index){
      this.activeindex = index;
      //当item被点击，往外面抛事件
      this.$emit("itemclick",index);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.tabcontorl {
  display: flex;
  text-align: center;
  margin-top: 5%;
  background-color: #fff;
  position: sticky;
  top: 5%;
}

.contorl-item {
  flex: 33.333333%;
  height: 45px;
  line-height: 45px;
}

.contorl-item  span{
  display: inline-block;
  height: 90%;
}

.active{
  color: pink;
}

.active span{
  border-bottom: 1px solid red;
}
</style>