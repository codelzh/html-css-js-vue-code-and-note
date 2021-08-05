<!--  -->
<template>
  <div class="goodsitem" @click="detail">
    <div><img :src="goodsitems.show.img" alt="" @load="goodsimgload"/></div>
    
    <div class="goodsinfo">
      <p>{{ goodsitems.title }}</p>
      <span>{{ goodsitems.price }}</span>
      <span>
        <img src="~assets/img/common/favor.png" alt="">
        {{ goodsitems.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    goodsitems: {
      type: Object,
      default: {},
    },
  },
  methods:{
    goodsimgload(){
      this.$bus.$emit("goodsimgload")
    },
    detail(){
      this.$router.push({
        path:"detail",
        query:{
          id:this.goodsitems.iid
        }
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.goodsitem {
  width: 48%;
  margin: 1%;
  text-align: center;
}
.goodsitem div:nth-child(1) {
  overflow: hidden;
  width: 100%;
  height: 85%;
  border-radius: 3%;
  background-color: pink;
}
.goodsitem div:nth-child(1) img {
  width: 100%;
  height: 100%;
}



.goodsinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goodsinfo span:nth-child(2){
  color: #ff699c;
  margin-right: 5%;
}

.goodsinfo span:nth-child(3) img{
  width: 8%;
  vertical-align: middle;
}
</style>