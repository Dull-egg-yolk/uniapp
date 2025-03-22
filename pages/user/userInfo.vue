<template>
  <view class="page-container">
    <!-- 用户信息区 -->
    <common-header></common-header>
    <!-- 酒店信息区域 -->
    <view class="section-title">酒店信息</view>

    <view class="hotel-info">
      <view
        class="info-item"
        v-for="(item, index) in hotelInfoList"
        :key="index"
      >
        <text class="label">{{ item.label }}：</text>
        <text class="value">{{ item.value }}</text>
      </view>
    </view>
  </view>
</template>
<script>
import commonHeader from "./components/commonHeader.vue";

export default {
  components: {
    commonHeader,
  },
  data() {
    return {
      hotelInfoList: [
        { label: "店名", value: "同福客栈" },
        { label: "地址", value: "七侠镇 01 大街 01 号" },
        { label: "电话", value: "888 - 8888 8888" },
        { label: "公司", value: "七侠镇同福客栈有限公司" },
        { label: "社会信用代码", value: "888888888888888888" },
        { label: "开户行", value: "大德通票号七侠镇分号" },
        { label: "账号", value: "888888888888888888" },
      ],
    };
  },
  methods: {
    getHotelInfoList() {
      console.info("13");
    },
  },
};
</script>
<style scoped>
.page-container {
  background-color: #f5f5f5;
  padding: 20rpx;
  width: 100%;
}

.user-info {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15rpx;
  padding: 20rpx;
  margin-bottom: 30rpx;
}

.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.user-detail .name {
  font-size: 32rpx;
  margin-bottom: 10rpx;
}

.user-detail .store {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 5rpx;
}

.user-detail .store .verified-icon {
  display: inline-block;
  width: 20rpx;
  height: 20rpx;
  /* background-image: url("认证图标地址"); */
  background-size: contain;
  margin-left: 10rpx;
}

.user-detail .expire {
  font-size: 28rpx;
  color: #ff5722;
}

.hotel-info {
  background-color: #fff;
  border-radius: 15rpx;
  padding: 20rpx;
}

.section-title {
  font-size: 28rpx;
  color: #333;
  margin: 20rpx 0rpx;
}

.hotel-info .info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15rpx;
}

.hotel-info .info-item .label {
  width: 180rpx;
  color: #333;
  font-size: 28rpx;
}

.hotel-info .info-item .value {
  flex: 1;
  font-size: 28rpx;
  color: #666;
}
</style>




