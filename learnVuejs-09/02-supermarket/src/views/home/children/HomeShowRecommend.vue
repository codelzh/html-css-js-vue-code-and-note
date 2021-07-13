<template>
  <div class="recommend">

    <div v-for="(item,key) in recommend" class="recommend-item" :key="key">
      <div>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>

      <div>{{item.title}}</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "HomeShowRecommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  background-color: white;
  border-bottom: 8px solid lavenderblush;
  padding-bottom: 15px;
}

.recommend-item{
  flex: 1;
  color: black;
  font-size: 2px;
  text-align: center;
  padding-top: 10px;
}

.recommend-item img{
  width: 70px;
  height: 70px;
  padding-bottom: 2px;
}
</style>