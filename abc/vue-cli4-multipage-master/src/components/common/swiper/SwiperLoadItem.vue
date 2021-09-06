<template>
  <div class="swiper-slide">
    <img :src="iteming" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    iteming:{
      type:String,
      default:""
    }
  },
};
</script>
<style lang="less" scoped>
.swiper-slide {
  width: 100%;
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
}

.swiper-slide:hover {
  cursor: pointer;
}
</style>