<template>
  <div>
    <tabbar>
      <tabbaritem path="/home">
        <img src="~assets/img/tabbar/icon01.png" alt="" slot="item-img" />
        <img src="~assets/img/tabbar/icon01_active.png" alt=""  slot="item-img-active"/>
        <div slot="item-text">首页</div>
      </tabbaritem>

      <tabbaritem path="/category">
        <img src="~assets/img/tabbar/icon02.png" alt="" slot="item-img" />
        <img src="~assets/img/tabbar/icon02_active.png" alt="" slot="item-img-active"/>
        <div slot="item-text">分类</div>
      </tabbaritem>

      <tabbaritem path="/car">
        <img src="~assets/img/tabbar/icon03.png" alt="" slot="item-img" />
        <img src="~assets/img/tabbar/icon03_active.png" alt="" slot="item-img-active"/>
        <div slot="item-text">购物车</div>
      </tabbaritem>

      <tabbaritem path="/my">
        <img src="~assets/img/tabbar/icon04.png" alt="" slot="item-img" />
        <img src="~assets/img/tabbar/icon04_active.png" alt=""  slot="item-img-active" />
        <div slot="item-text">我的</div>
        
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/tabbar/Tabbar.vue";
import Tabbaritem from "components/tabbar/Tabbaritem.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    tabbar: Tabbar,
    tabbaritem: Tabbaritem,
  },
};
</script>
<style scoped>
</style>