<template>
  <div class="tabbar-item" @click="changelink">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>

    <div v-else>
      <slot name="item-img-active"></slot>
    </div>

    <div :class="{ Active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      // isActive: true,
    };
  },
  props:{
    //父传来的，用来路由跳转
    path:"",
  },
  methods: {
    changelink() {
      this.$router.push(this.path)
    },
  },

  computed:{
    isActive(){
      //利用$route 和path 实现排他思想的tabbar 的active类
      return this.$route.path.indexOf(this.path) !==-1
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
}

.tabbar-item img {
  width: 34px;
  height: 32px;
  vertical-align: middle;
}

.Active {
  color: #fa554a;
}
</style>