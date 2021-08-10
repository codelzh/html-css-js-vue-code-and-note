import Vue from 'vue'
import Vuex from 'vuex'


// const mutations = ()=> import("./mutations.js")
const actions = () => import("./actions.js")
const getters = () => import("./getters.js")


Vue.use(Vuex)

export default new Vuex.Store({
  //状态,要共享的数据
  state: {
    carlist: [],
    allchecked: false,
  },
  mutations: {
    addcar(state, payload) {
      return new Promise((resolve, reject) => {

        let oldProduct = state.carlist.find(function (item) {
          return item.goodsid === payload.goodsid
        })
        if (oldProduct) {
          oldProduct.count += 1;
          resolve("商品数量加一")
        } else {
          payload.count = 1;
          payload.checked = true;
          state.carlist.push(payload)
          reject("成功添加到购物车")
        }
      })

    }
  },
  getters: {

  },
  actions: {
    addcar(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.carlist.find(function (item) {
          return item.goodsid === payload.goodsid
        })
        if (oldProduct) {
          oldProduct.count += 1;
          resolve("商品数量加一")
        } else {
          payload.count = 1;
          payload.checked = true;
          context.state.carlist.push(payload)
          reject("成功添加到购物车")
        }
      })

    }
  },
  modules: {}
})