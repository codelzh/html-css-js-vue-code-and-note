<template>
  <div>
    <div class="rule">
      <div class="rule-item" v-for="(item, index) in rule[0]" :key="index">
        <span>{{ item[0] }}</span>
        <span>{{ item[1] }}</span>
        <span>{{ item[2] }}</span>
        <span>{{ item[3] }}</span>
      </div>
    </div>

    <div class="info">
      <div class="info-item" v-for="(item, index) in info" :key="index">
        <span>{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      newrule: [],
    };
  },
  props: {
    rule: {
      type: Array,
      default: ()=>{return[]},
    },
    info: {
      type: Array,
      default: ()=>{return[]},
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // for(item of this.rule[0]){
    //   console.log(item);
    // }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>

.rule-item {
  /* background-color: red; */
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
  display: flex;

  span {
    flex: 1;
    margin-bottom: 2%;
    margin-left: 5%;
  }
  span:nth-child(1) {
    flex: 1;
  }
}

.info-item {
  display: flex;
  margin-top: 2%;
  // background-color: red;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
  align-items: center;

  span {
    margin-bottom: 2%;
    margin-left: 5%;
  }
  span:nth-child(1) {
    flex: 1;
    font-size: 14px;
  }

  span:nth-child(2) {
    flex: 2;
    font-size: 14px;
    color: tomato;
  }
}
</style>