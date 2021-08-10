<template>
  <div>
    <div class="detail-top">
      <div class="back" @click="goback">←</div>
      <ul>
        <li
          v-for="(item, index) in title"
          :key="index"
          @click="topclick(index)"
          :class="{ active: currentIndex == index ? true : false }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentIndex: 0,
      title: ["商品", "参数", "评价", "推荐"],
    };
  },
  methods: {
    topclick(index) {
      this.currentIndex = index;
      this.$emit("detailtopclick",index)
    },
    goback() {
      this.$router.go(-1);
    },
  },

  created() {
    //获取数据
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.detail-top {
  /* position: fixed; */
  display: flex;
  background-color: white;
  height: 44px;
  line-height: 44px;
  width: 100%;
  z-index: 2;
}

.back {
  flex: 30%;
  font-size: 32px;
  text-align: center;
}

.detail-top ul {
  display: flex;
  flex: 70%;
}
.detail-top ul li {
  float: left;
  flex: 1;
}

.active {
  color: tomato;
}
</style>