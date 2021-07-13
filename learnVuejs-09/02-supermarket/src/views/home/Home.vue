<template>
    <div class="navebar-home">
      <navbar><div slot="center" class="navbar">购物街</div></navbar>

      <swiper>
        <swiper-item v-for="(item,key) in banner" :key="key">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </swiper>


      <home-show-recommend :recommend="recommend"></home-show-recommend>

      <home-feature></home-feature>

      <home-control :texts="['流行','新款','精选']"></home-control>

      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>


</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import {Swiper,SwiperItem} from 'components/common/swiper/index';


import HomeShowRecommend from "@/views/home/children/HomeShowRecommend";
import HomeFeature from "@/views/home/children/HomeFeature";
import HomeControl from "@/views/home/children/HomeControl";

import {HomeImgRequest,GetHomeGoods} from "@/network/home/Home";


export default {
  name: "Home",
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      }
    }
  },
  components:{
    Navbar,
    Swiper,
    SwiperItem,
    HomeShowRecommend,
    HomeFeature,
    HomeControl
  },
  methods:{
    HomeImgRequest(){
      HomeImgRequest().then((res)=>{
        //保存起来，不然数据函数执行之后将丢失
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },


    GetHomeGoods(type){
      let page = this.goods[type].page += 1
      GetHomeGoods(type,page).then((res)=>{
        console.log(res);
        this.goods[type].list.push(...res.data.data.list)
      })
    }
  },

  //首页模块创建时候。请求首页数据
  created(){
    //首页的多个数据
    this.HomeImgRequest();

    //首页的商品数据
    this.GetHomeGoods('new')
    this.GetHomeGoods('pop')
    this.GetHomeGoods('sell')
  }
}
</script>

<style scoped>
  .navebar-home{
    background-color: var(--color-deep-pink);
    color: white;
  }

  .control{
    position:sticky;
    top:0px;
    background-color: white;
  }

</style>
