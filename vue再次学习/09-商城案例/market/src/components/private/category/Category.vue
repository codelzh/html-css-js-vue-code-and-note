<template>
  <div ref="wapper" class="wapper">
    <ul ref="content">
      <li>数据1</li>
      <li>数据2</li>
      <li>数据3</li>
      <li>数据4</li>
      <li>数据5</li>
      <li>数据6</li>
      <li>数据7</li>
      <li>数据8</li>
      <li>数据9</li>
      <li>数据10</li>
      <li>数据11</li>
      <li>数据12</li>
      <li>数据13</li>
      <li>数据14</li>
      <li>数据15</li>
      <li>数据16</li>
      <li>数据17</li>
      <li>数据18</li>
      <li>数据19</li>
      <li>数据20</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "category",
  data() {
    return {};
  },
  mounted(){
    const bs = new BScroll(this.$refs.wapper,{

    })
    console.log(bs);
  }
};
</script>
<style scoped>
.wapper{
  height: 200px;
  background:pink;
  overflow: hidden;
}
</style>