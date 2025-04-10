<template>
  <view class="page-container">
    <!-- 用户信息区 -->
    <common-header></common-header>
    <!-- 酒店信息区域 -->
     <view class="hotel-info-header">
      <view class="section-title">酒店信息</view>
      <view class="hotel-info-edit" @click="editInfo">修改信息</view>
     </view>
    <view class="hotel-info">
      <view
        class="info-item"
        v-for="(item, index) in hotelLabelList"
        :key="index"
      >
        <text class="label">{{ item.label }}：</text>
        <text class="value">{{ userInfo[item.value] }}</text>
      </view>
    </view>
    <view class="add-button"  @click="loginOut()">
      <text>退出登录</text>
    </view>
    <logout-popup
      ref="logoutPopup"
      title="退出登录"
      @print="onPrint"
      @save="onSave"
    />
  </view>
</template>
<script>
import { userLogOut } from '@/api/user.js';
import commonHeader from "./components/commonHeader.vue";
import logoutPopup from '@/components/logout-popup/lohout-popup.vue';
export default {
  components: {
    commonHeader,
    logoutPopup
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
    editInfo(){
      uni.navigateTo({
        url: '/subpackageA/form/form?data=' + encodeURIComponent(JSON.stringify(this.userInfo)),
      })
    },
    loginOut(){
      this.$refs.logoutPopup.open()
    },
    async onSave(){
      await userLogOut().then(res => {
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else {
          uni.showToast({
						title: '退出成功',
						icon: "none"
					});
          uni.clearStorageSync();
          uni.reLaunch({
            url: "/pages/user/user",
          });
        }
      })
    },
  },
  mounted(){
    if (uni.getStorageSync("user_info")) {
      this.hotelInfoList = uni.getStorageSync("user_info");
      this.userInfo = this.hotelInfoList.Hotel
      console.log(this.userInfo, '995559');
      
    }
  }
};
</script>
<style scoped>
@import '@/common/index.css';
.page-container {
  background-color: #f5f5f5;
  padding: 20rpx;
  width: 100%;
}
.hotel-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
}
.hotel-info-edit {
  font-size: 28rpx;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  border:1px solid #ccc;

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




