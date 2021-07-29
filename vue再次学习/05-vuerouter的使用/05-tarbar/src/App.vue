<template>
  <div>
    <tabbar>
      <tabbaritem>
        <img src="./assets/img/icon01.png" alt="" slot="item-img" />
        <div slot="item-text">首页</div>
      </tabbaritem>

      <tabbaritem>
        <img src="./assets/img/icon02.png" alt="" slot="item-img" />
        <div slot="item-text">商品</div>
      </tabbaritem>

      <tabbaritem>
        <img src="./assets/img/icon03.png" alt="" slot="item-img" />
        <div slot="item-text">分类</div>
      </tabbaritem>

      <tabbaritem>
        <img src="./assets/img/icon04.png" alt="" slot="item-img" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue";
import Tabbaritem from "./components/Tabbaritem.vue";

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
@import "./assets/css/normalize.css";
</style>