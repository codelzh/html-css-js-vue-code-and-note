<template>
  <div class="Navbar">

    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

.Navbar{
  display: flex;

}

.left,.right{
  width: 50px;
}

.center{
  flex: 1;
  text-align: center;
  line-height: 39px;
}


</style>