<template>
  <div class="tabbar-item">
    <slot name="item-img"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {};
  },
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
}

.tabbar-item img {
  width: 34px;
  height: 34px;
  vertical-align: middle;
}
</style>