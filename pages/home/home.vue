<template>
  <view class="box">
    <view class="header">
      <text class="title">Welcome to My App</text>
    </view>
    <view class="container">
      <!-- 无缝轮播图 -->
      <swiper
        class="swiper"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="500"
        :circular="true"
      >
        <!-- 轮播项 -->
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <image class="swiper-image" :src="item.image" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="button-container">
      <view class="button-row">
        <view class="function-button" @click="navigateTo('warehouseManagement')"><img src="../../static/img/allHL.png"/><button class="btn">库房</button></view>
        <view class="function-button" @click="navigateTo('classification')"><img src="../../static/img/allHL.png"/><button class="btn">分类</button></view>
        <view class="function-button" @click="navigateTo('itemPage')"><img src="../../static/img/allHL.png"/><button class="btn">物品列表</button></view>
        <view class="function-button" @click="navigateTo('enter')"><img src="../../static/img/allHL.png"/><button class="btn">物品录入</button></view>
        <view class="function-button" @click="navigateTo('stocktaking')"><img src="../../static/img/allHL.png"/><button class="btn">盘点</button></view>
        <view class="function-button" @click="navigateTo('export')"><img src="../../static/img/allHL.png"/><button class="btn">报表</button></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        { image: 'https://fanyiapp.cdn.bcebos.com/cms/image/251c4882ab58867d5795df104f3fcd9e.jpg' },
        { image: 'https://fanyiapp.cdn.bcebos.com/cms/image/251c4882ab58867d5795df104f3fcd9e.jpg' },
        { image: 'https://fanyiapp.cdn.bcebos.com/cms/image/251c4882ab58867d5795df104f3fcd9e.jpg' }
      ]
    };
  },
  methods: {
    navigateTo(page) {
      uni.navigateTo({
        url: `/pages/${page}/index`
      });
    }
	},
};
</script>

<style scoped>
.box {
  width: 100%;
  background: rgb(248 248 248);
}
.container {
  width: 100%;
}

swiper {
  width: 100%;
  height: 400rpx;
}

.swiper-image {
  width: 100%;
  height: 100%;
}

.button-container {
  margin: 40rpx 20rpx;
  background-color: #fff;
  padding: 10rpx;
  border-radius: 15rpx;
}

.button-row {
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20rpx;
}

.function-button {
  width: 25%;
  margin: 20rpx 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  color: #000;
  border: none;
  box-sizing: border-box;
  /* border-radius: 10rpx; */
}
img{
  height: 80rpx;
  width: 80rpx;
}
.function-button::after{
  border: none;
  margin: 0;
  padding: 0;
}
.btn {
  margin: 0;
  padding: 0;
  line-height: normal;
  font-size: 24rpx;
}
.btn::after{
  border: none;
}
/deep/.button-hover {
  background-color: #fff;
  color: #000;
}

.function-button:active {
  background-color: #fff;
}
</style>