<template>
  <div class="control">

    <div v-for="(item,index) in texts" class="controlintem" :class="{active:index===activeindex}"
    @click="controlbtn(index)">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "Control",
  data(){
    return {activeindex:0}
  },
  props:{
    texts:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    controlbtn(index){
      this.activeindex = index
    }
  }
}
</script>

<style scoped>
  .control{
    display: flex;
  }
.controlintem{
  flex: 1;
  text-align: center;
  padding-top: 5px;
  color: black;
  font-size: 15px;
}

.active{
  color: red;
}
.active span {
  border-bottom: 3px solid pink;
  padding: 4px;
}
</style>