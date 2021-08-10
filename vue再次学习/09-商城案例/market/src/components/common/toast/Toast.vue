<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message:"",
      isShow:false
    };
  },
  props: {
    // message: String,
    // show: Boolean,
  },
  methods:{
    show(message,time){
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
      }, time);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

</style>