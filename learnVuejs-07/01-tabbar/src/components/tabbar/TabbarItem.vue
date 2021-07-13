<template>
  <div class="tabbar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem"
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;

}

.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top:2px ;

}
</style>
