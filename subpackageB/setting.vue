<template>
  <view class="settings-container">
    
    <view class="settings-list">
      <!-- 用户协议 -->
      <view class="settings-item" @click="navigateTo('userAgreement')">
        <text>用户协议</text>
        <uni-icons type="arrowright" size="20" color="#999"></uni-icons>
      </view>
      
      <!-- 隐私政策 -->
      <view class="settings-item" @click="navigateTo('privacyPolicy')">
        <text>隐私政策</text>
        <uni-icons type="arrowright" size="20" color="#999"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      uni.navigateTo({
        url: `/subpackageB/agreement/${page}`
      });
    }
  }
}
</script>

<style>
.settings-container {
  padding: 20rpx;
  width: 100%;
}

.header {
  padding: 30rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
}

.settings-list {
  margin-top: 20rpx;
}

.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
  font-size: 32rpx;
}
</style>