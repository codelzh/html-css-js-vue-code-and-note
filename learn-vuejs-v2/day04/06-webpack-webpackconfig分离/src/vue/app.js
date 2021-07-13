export default {
  template:`
    <div>
      <h1>哈dadssda哈哈</h1>
      <button @click=btn>123</button>
    </div>
  `,
  data(){
    return {
      message:'hello webpack'
    }
  },

  methods:{
    btn(){
      console.log('1')
    }
  }
}