<template>
  <div id="app">
    <tabbar>
      <tabbar-item>
        <img src="./assets/img/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tabbar-item>

      <tabbar-item>
        <img src="./assets/img/category.svg" alt="" slot="item-icon">
        <div slot="item-text">分类</div>
      </tabbar-item>

      <tabbar-item>
        <img src="./assets/img/cart.svg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tabbar-item>

      <tabbar-item>
        <img src="./assets/img/profile.svg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";

export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style>



</style>
