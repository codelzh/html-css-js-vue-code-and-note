let app = new Vue({
  el:'#app',
  data:{
    books:[
      {id:1,name:'算法',date:'2020-1-1',price:54,count:'1'},
      {id:2,name:'java核心卷',date:'2020-1-1',price:74,count:'1'},
      {id:3,name:'eachjava',date:'2020-1-1',price:34,count:'1'},
      {id:4,name:'大话数据结构',date:'2020-1-1',price:64,count:'1'}
    ],
  },

  filters:{
    showprice(count){
      return "￥" + count.toFixed(2)
    }
  },

  methods:{
    incrment(index){
      this.books[index].count++
    },
    decrment(index){
      this.books[index].count--
    },
    removebook(index){
      this.books.splice(index,1)
    }
  },

  computed:{
    totalprice(){
      let totalprice = 0;
      for(let i=0;i<this.books.length;i++){
        totalprice += this.books[i].price * this.books[i].count
      }
      return totalprice
    }
  }


})