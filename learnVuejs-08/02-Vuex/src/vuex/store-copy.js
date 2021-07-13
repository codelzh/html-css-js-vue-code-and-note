import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
    name:'我是zs'
  },
  mutations:{
    reviseName(state,payload){
      state.name = payload
    }
  },
  actions:{
    //这里的context commit的是上面的
    areviseName(context){
      setTimeout(()=>{
        context.commit('reviseName','异步修改')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name + '11111'
    },
    fullname2(state,getters){
      return getters.fullname + '22222'
    },
    fullname3(state,getters,root){
      return getters.fullname2 + root.counter
    }
  },

}

const vuex = new Vuex.Store({
  //定义全局变量的
  state:{
    counter:100,
    student:[
      {id:1,name:'zs'},
      {id:2,name:'ls'},
      {id:3,name:'ws'},
      {id:4,name:'fs'},
    ],
    name:'zs',
  },
  //mutations的方法，会被devtools捕获
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },

    //传数据
    incrementCounter(state,data){
      state.counter += data
    },

    //传数据第二种--对象
    incrementStu(state,payload){
      state.student.push(payload.s)
    },

    mupdateName(state){
      // state.name = 'ls'
      //如果在mutation里写异步代码，devtools工具是捕捉不到的
      // setTimeout(()=>{
      //   state.name = 'ls'
      // })

        state.name = 'ls'
    }



  },

  actions:{
    //context 上下文对象  现在理解为store
    aupdateName(context,payload){
      setTimeout(()=>{
        context.commit('mupdateName')
        console.log(payload.name);

        payload.success()
      },1000)
    }
  },

  getters:{
    powercounter(state){
      return state.counter * state.counter
    },
    more2(state){
      return state.student.filter(stu=>{
        return stu.id > 2
      })
    },
    more2length(state,getters){
      return getters.more2.length
    },

    //如果需要传数据。return函数就行
    moreage(){
      return function (age){
        console.log(age);
      }
    }

  },

  modules:{
    a:moduleA
  }




})

export default vuex

