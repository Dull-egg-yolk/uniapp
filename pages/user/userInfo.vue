<template>
  <view class="page-container">
    <!-- 用户信息区 -->
    <common-header></common-header>
    <!-- 酒店信息区域 -->
    <view class="section-title">酒店信息</view>

    <view class="hotel-info">
      <view
        class="info-item"
        v-for="(item, index) in hotelLabelList"
        :key="index"
      >
        <text class="label">{{ item.label }}：</text>
        <text class="value">{{ hotelInfoList[item.value] }}</text>
      </view>
    </view>
  </view>
</template>
<script>
import commonHeader from "./components/commonHeader.vue";
import { getUserInfo } from '../../api/user.js';
export default {
  components: {
    commonHeader,
  },
  data() {
    return {
      hotelLabelList: [
        { label: "店名", value: 'Name' },
        { label: "地址", value: 'Address' },
        { label: "电话", value: 'Telephone' },
        { label: "公司", value: 'Company' },
        { label: "社会信用代码", value: 'SocialCode' },
        { label: "开户行", value: 'BankAddress' },
        { label: "账号", value: 'BankAccount' },
      ],
      hotelInfoList: [],
      userInfo: {}
    };
  },
  methods: {
    async getHotelInfoList() {
      console.info("13");
      const res = await getUserInfo();
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.hotelInfoList = res.Data.Hotel
        uni.setStorageSync('user_info', res.Data);
      }
    },
  },
  mounted(){
    this.getHotelInfoList();
  }
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
  width: 200rpx;
  color: #333;
  font-size: 28rpx;
}

.hotel-info .info-item .value {
  flex: 1;
  font-size: 28rpx;
  color: #666;
}
</style>




