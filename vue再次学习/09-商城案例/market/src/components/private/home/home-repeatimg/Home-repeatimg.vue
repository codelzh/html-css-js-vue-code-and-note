<template>
  <div class="repeatimg-index" @load="test" ref="banner">
    <ul class="ul" ref="ul">
      <li><img :src="bannerData[3].image" alt="" /></li>

      <li v-for="item in bannerData" :key="item.title">
        <img :src="item.image" alt="" />
      </li>

      <li><img :src="bannerData[0].image" alt="" /></li>
    </ul>

    <ol class="ol" ref="ol">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    bannerData: Array,
  },
  computed: {},
  created() {},
  mounted() {
    var t = this;
    setTimeout(() => {
      t.test();
    }, 1000);
  },
  beforeDestroy() {},

  methods: {
    //轮播图的js
    test() {
      var ul = this.$refs.ul
      var banner = this.$refs.banner
      var index = 0;
      var w = banner.offsetWidth;

      var ol = this.$refs.ol
      //开启定时器，让图片滚动
      setInterval(() => {
        index++;
        var move = -index * w;
        ul.style.transform = "translateX(" + move + "px)";
        ul.style.transition = "all 0.5s";
      }, 2000);

      //当每次过渡结束，都要判断index
      ul.addEventListener("transitionend", function () {
        if (index >= 4) {
          index = 0;
          var move = -index * w;
          ul.style.transition = "none";

          ul.style.transform = "translateX(" + move + "px)";
        }

        //小圆点
        ol.querySelector("li.active").classList.remove("active");
        ol.children[index].classList.add("active");
      });
    },
  },
};
</script>
<style scoped>
.repeatimg-index {
  position: relative;
  overflow: hidden;
  /* height: 100%; */
}

.repeatimg-index ul {
  width: 600%;
  margin-left: -100%;
}
.repeatimg-index ul li {
  float: left;
  list-style: none;
  width: 16.666666666666%;
}
.repeatimg-index ul li img {
  width: 100%;
}

.repeatimg-index ol {
  position: absolute;
  position: absolute;
  top: 200px;
  left: 30px;
}
.repeatimg-index ol li {
  float: left;
  width: 8px;
  height: 8px;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  transition: all 0.3s;
}

.repeatimg-index ol .active {
  width: 20px;
  background-color: white;
  border-radius: 5px;
}
</style>