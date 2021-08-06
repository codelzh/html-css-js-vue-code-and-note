<template>
  <div class="shop">
    <div class="shop-top">
      <h2>
        <img :src="shop.shopLogo" alt="" />
        <span>{{ shop.name }}</span>
      </h2>
    </div>
    <div class="shop-middle">
      <div>
        <span>{{ shop.cSells }}件</span>
        <span>总销量</span>
      </div>

      <div>
        <span>{{ shop.cGoods }}</span>
        <span>全部商品</span>
      </div>

      <div>
        <div class="describe">
          <span>{{ shop.score[0].name }}</span>
          <span>{{ shop.score[0].score }}</span>
          <span>
            <i v-if="shop.score[0].isBetter" class="high">高</i>
            <i v-else class="low">低</i>
          </span>
        </div>

        <div class="price">
          <span>{{ shop.score[1].name }}</span>
          <span>{{ shop.score[1].score }}</span>
          <span>
            <i v-if="shop.score[1].isBetter" class="high">高</i>
            <i v-else class="low">低</i>
          </span>
        </div>

        <div class="mass">
          <span>{{ shop.score[2].name }}</span>
          <span>{{ shop.score[2].score }}</span>
          <span>
            <i v-if="shop.score[2].isBetter" class="high">高</i>
            <i v-else class="low">低</i>
          </span>
        </div>
      </div>
    
		
		
		
		
		</div>

		<div class="on-shop">进店逛逛</div>
		<div class="line"></div>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.shop-top img {
  width: 20%;
  vertical-align: middle;
}

.shop-top h2 {
  display: inline-block;
  width: 100%;
  line-height: 70px;
  margin-top: 15px;
}

.shop-top span {
  display: inline-block;
  line-height: 70px;
  font-size: 18px;
  font-weight: normal;
  margin-left: 10px;
  color: #cdcdcd;
}

.shop-middle {
  display: flex;
  flex-direction: row;

  div {
    flex: 1;
  }

  div:nth-child(1) {
    text-align: center;
    margin-top: 4%;
  }

  div:nth-child(1) span {
    display: inline-block;
    width: 100%;
    padding-top: 5%;
  }

  div:nth-child(2) {
    margin-top: 4%;
  }

  div:nth-child(2) span {
    display: inline-block;
    width: 100%;
    padding-top: 5%;
  }

  div:nth-child(3) {
    flex: 2;
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;

    div span:nth-child(1) {
      flex: 2;
      padding-top: 0;
    }
    div span:nth-child(2) {
      flex: 1;
      padding-top: 0;
    }
    div span:nth-child(3) {
      flex: 1;
      padding-top: 0;
    }
    div {
      margin-top: 5px;
    }

    // div span:nth-child(3) i:nth-child(1) {
    //   background-color: green;
    //   font-style: normal;
    //   color: white;
    // }
  }

  div:nth-child(3) .describe {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  div:nth-child(3) .price {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  div:nth-child(3) .mass {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
    span {
      text-align: center;
      display: inline-block;
      width: 60%;
    }
  }
}

.high {
  background-color: red;
  font-style: normal;
  color: white;
}
.low {
  background-color: green;
  font-style: normal;
  color: white;
}

.on-shop{
	width: 30%;
	line-height: 30px;
	transform: translateX(100%);
	text-align: center;
	background: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin-top: 3%;
}

.line{
	width:100%;
	height: 1px;
	background-color: #ccc;
	margin-top: 10%;
}
</style>