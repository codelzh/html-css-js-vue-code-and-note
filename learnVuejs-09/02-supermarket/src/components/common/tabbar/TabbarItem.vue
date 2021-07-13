<template>
  <div>
    <div class="tabbar-item" @click="itembtn">

      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-activeicon"></slot></div>

      <div :style="ActiveStyle"> <slot name="item-text"></slot></div>

    </div>
  </div>

</template>

<script>
export default {
  name: "TabbarItem",

  //父给子传数据
  props:{
    path:String,
    ActiveColor:{
      type:String,
      default:'red',
    }
  },
  data(){
    return {}
  },
  methods:{
    itembtn(){
      this.$router.push(this.path)
    },
  },

  computed:{
    isActive(){
      //获取当前活跃对象，跟传进来的path对比
      return  this.$route.path.indexOf(this.path) !==-1
    },

    ActiveStyle(){
      return this.isActive ? {color:this.ActiveColor} : {}

    }
  },

}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  margin-left: 35px;

}

.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top:2px ;
}


</style>
