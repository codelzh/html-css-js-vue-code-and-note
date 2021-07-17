var app = new Vue({
  el: "#app",
  data: {
    books: [{
        id: 1,
        name: "<算法>",
        date: "2001-1-1",
        price: 45,
        count: 1,
      },
      {
        id: 2,
        name: "<数据结构>>",
        date: "2001-1-1",
        price: 35,
        count: 1,

      },
      {
        id: 3,
        name: "<html5>",
        date: "2001-1-1",
        price: 85,
        count: 1,

      },
      {
        id: 4,
        name: "<css3>",
        date: "2001-1-1",
        price: 80,
        count: 1,

      },
      {
        id: 5,
        name: "<jquery>",
        date: "2001-1-1",
        price: 95,
        count: 1,

      },
    ],

    
  },

  methods: {
    //购买数量
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removebook(index){
      this.books.splice(index,1)
    }
  },

  computed: {
    //计算总价格
    totalPrice() {
      let total = 0;
      for (var i = 0; i < this.books.length; i++) {
        total += this.books[i].count * this.books[i].price;
      }
      return total;
    }
  }
})