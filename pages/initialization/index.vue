<template>
  <view class="container">
    <view class="title" @click="startFrom()">
      <view class="title-text">
        <text class="title-h2">九点荟库存管理系统</text>
        <text class="title-h3">出库入库、盘点、查库存、查用量，"码"上见！</text>
      </view>
      <view class="title-btn">
       <text class="btn">快速初始化</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    startFrom(){
      if (uni.getStorageSync('token')) {
        if (uni.getStorageSync('user_info').Hotel) {
          uni.switchTab({
            url: '../home/home'
          });
        } else {
          uni.navigateTo({
            url: '../form/form'
          });
        }
      }else {
        uni.switchTab({
          url: '../user/user'
        });
      }
    }
  }
}
</script>

<style scoped>
@import '../../common/index.css';
.container {
  background-color: #f6f6f6;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40rpx;
  background-color: rgba(0,0,0,1);
  border-radius: 10rpx;
  padding: 30rpx 20rpx;
}
.title-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title-h2 {
  color: rgba(236,199,169,1);
  font-size: 36rpx;
}
.title-h3 {
  color: rgba(233,157,66,1);
  font-size: 22rpx;
}
.title-btn {

}
.btn {
  padding: 10rpx 20rpx;
  border-radius: 32rpx;
  background-color: rgba(236,199,169,1);
  color: rgba(116,78,32,1);
  font-size: 28rpx;
}
</style>