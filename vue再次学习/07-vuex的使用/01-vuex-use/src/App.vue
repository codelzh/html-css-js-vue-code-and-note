<template>
  <div>
    <h2>我是App</h2>
    <!-- 使用vuex的数据 -->
    {{ $store.state.count }}
    <button @click="add">+++</button>
    <button @click="odd">---</button>
    <p></p>
    {{ $store.getters.towcount }}

    <button @click="addCount(10)">---</button>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    odd() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", count);
    },
  },
};
</script>
<style scoped>
</style>