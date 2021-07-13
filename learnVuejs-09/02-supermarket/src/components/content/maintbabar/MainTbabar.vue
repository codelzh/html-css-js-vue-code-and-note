<template>
  <tabbar>
    <tabbar-item path="/home" ActiveColor="blue">
      <img src="~assets/img/home/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/home/home_active.svg" alt="" slot="item-activeicon">
      <div slot="item-text">首页</div>
    </tabbar-item>

    <tabbar-item path="/category" ActiveColor="blue">
      <img src="~assets/img/home/category.svg" alt="" slot="item-icon">
      <img src="~assets/img/home/category_active.svg" alt="" slot="item-activeicon">
      <div slot="item-text">分类</div>
    </tabbar-item>

    <tabbar-item path="/cart" ActiveColor="blue">
      <img src="~assets/img/home/cart.svg" alt="" slot="item-icon">
      <img src="~assets/img/home/cart_active.svg" alt="" slot="item-activeicon">
      <div slot="item-text">购物车</div>
    </tabbar-item>

    <tabbar-item path="/profile" ActiveColor="blue">
      <img src="~assets/img/home/profile.svg" alt="" slot="item-icon">
      <img src="~assets/img/home/profile_active.svg" alt="" slot="item-activeicon">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";


export default {
name: "MainTbabar",
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
