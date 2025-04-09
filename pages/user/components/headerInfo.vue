<template>
  <view class="user-info-content">
    <!-- 用户信息区 -->
    <view class="user-info">
      <image :src="userAvatar.avatarUrl" mode="aspectFill" class="avatar" @click="loginOut()"></image>
      <view class="user-desc">
        <view class="name"
          >{{ userList.Name }} <text class="role">{{ teamData[userList.UserHotelRole.Role] }}</text></view
        >
        <view class="shop"
          >{{ userList.Hotel.Name }}
          <img class="svg-bkg-diamond" src="/static/images/iconPark-level.svg" alt="">
        </view>
        <view class="member"
          >{{userList.PrimeRight.Name}}，有效期至 
          <text class="expire-date"> {{ userList.PrimeRight.ExpireAt | getData }}</text>
        </view>
      </view>
      <button class="renew-btn" v-if="showRenew" @click="goRenewPage()">续费</button>
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
import { throttle } from '@/util/throttle';
import { formatTime } from "../../../util/day";
import logoutPopup from '@/components/logout-popup/lohout-popup.vue';

export default {
  components: {
    logoutPopup
  },
  filters: {
    getData (val) {
      if (!val) return '';
      return formatTime(val);
    },
  },
  data() {
    return {
      userList: {
        PrimeRight:{
          Name: ''
        },
        UserHotelRole: {
          Role: ''
        },
        Hotel: {
          Name: ''
        }
      },
      userAvatar: '',
      showRenew: true,
      teamData: {
        'superuser': '超级管理员',
        'operator': '操作员',
        'financial': '财务员',
      }
    };
  },
  mounted() {
    if (uni.getStorageSync("userInfo")) {
      this.userAvatar = uni.getStorageSync("userInfo");
    }
    const cachedUser = uni.getStorageSync('user_info');
    if (cachedUser) {
      this.userList = cachedUser; // 覆盖默认值
    }else{
      console.log('未找到用户缓存'); 
    }
    const otherList = uni.getStorageSync('user_page')['fe:other']
    const renew = otherList.find(item => item.Name === '续费');
    if (renew) {
      this.showRenew = true;
    } else {
      this.showRenew = false;
    }
  },
  onShow() {
  },
  methods: {
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
    loginOut(){
      this.$refs.logoutPopup.open()
    },
    // 续费
    goRenewPage: throttle(function() {
      wx.navigateTo({
        url: "/subpackageB/renew",
      });
    }, 1000),
  },
  onLoad(option) {
	},
};
</script>

<style>
/* 用户信息区 */
.user-info {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background: white;
  margin: 20rpx 0;
}
.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 30rpx;
}
.user-desc {
  flex: 1;
}
.name {
  font-size: 28rpx;
  margin-bottom: 10rpx;
}
.role {
  color: #666;
  font-size: 18rpx;
  margin-left: 15rpx;
}
.shop {
  font-size: 20rpx;
  color: #999;
  margin-bottom: 10rpx;
  display: flex;
  align-items: center;
}
.verify-icon {
  width: 20rpx;
  height: 20rpx;
  margin-left: 10rpx;
}
.member {
  font-size: 20rpx;
  color: #999;
}
.expire-date {
  color: #ff4444;
  padding-left: 5rpx;
}
.renew-btn {
  background: #ff4444;
  color: white;
  padding: 0rpx 6rpx 6rpx 3rpx;
  border-radius: 8rpx;
  font-size: 20rpx;
  text-align: center;
  width: 74rpx;
  height: 48rpx;
}
.svg-bkg-diamond {
  /* background-image: url("../images/iconPark-level.svg"); */
  width: 22rpx;
  height: 22rpx;
  background-size: cover;
  background-position: center;
  margin-left: 8rpx;
}
</style>
