<template>
  <div id="app">
    <h1>app数据</h1>
    <h1>{{$store.state.counter}}</h1>

    <h1>vuex数据</h1>
    <HellowVuex></HellowVuex>

<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->

    <button @click="add">+</button>
    <button @click="subtract">-</button>

    <!--
      getters 相关
    -->
    <h1>{{$store.getters.powercounter}}</h1>
    <h1>{{$store.getters.more2}}</h1>
    <h1>{{$store.getters.more2length}}</h1>
    <h1>{{$store.getters.moreage(16)}}</h1>

    <!--
      mutation 相关
    -->
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="addStu">+学生</button>

    <p></p>
    <!--
      action相关
    -->
    <button @click="updateName">改变姓名</button>
    <h1>{{$store.state.name}}</h1>

    <p></p><p></p>

    <!--
      module相关
      //模块会被添加到state 中，所以通过state
    -->
    <h1>{{$store.state.a.name}}</h1>
    <button @click="revise">改变姓名</button>
    <button @click="synzrevise">异步改变姓名</button>
    <h1>{{$store.getters.fullname}}</h1>
    <h1>{{$store.getters.fullname2}}</h1>
    <h1>{{$store.getters.fullname3}}</h1>
  </div>
</template>

<script>
import HellowVuex from "./components/HellowVuex";

export default {
  name: 'App',
  data(){
    return {}
  },
  components:{
    HellowVuex
  },

  methods:{
    add(){
      this.$store.commit('increment')
    },
    subtract(){
      this.$store.commit('decrement')
    },


    addCounter(numb){
      this.$store.commit('incrementCounter',numb)
    },
    addStu(){
      const s = {id:4,name:'nick'}
      this.$store.commit({
        type:'incrementStu',
        s
      })
    },

    updateName(){
      this.$store.dispatch('aupdateName',{
        name:'zs',
        success:()=>{
          console.log('成功');
        }
      })
    },


    revise(){
      this.$store.commit('reviseName','china')
    },

    synzrevise(){
      this.$store.dispatch("areviseName")
    }


  }

}
</script>

<style>

</style>
