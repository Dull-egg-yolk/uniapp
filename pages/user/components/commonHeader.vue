<template>
  <view class="user-info-content">
    <!-- 用户信息区 -->
    <view class="user-info">
      <image :src="userAvatar" mode="aspectFill" class="avatar"></image>
      <view class="user-desc">
        <view class="name"
          >{{ myinfo.Name }} <text class="role">{{ teamData[myinfo.UserHotelRole.Role] }}</text></view
        >
        <view class="shop"
          >{{ myinfo.Hotel.Name }}
          <img class="svg-bkg-diamond" src="/static/images/iconPark-level.svg" alt="">
        </view>
        <view class="member"
          >{{ myinfo.PrimeRight.Name }}，有效期至
          <text class="expire-date"> {{ myinfo.PrimeRight.ExpireAt | getData }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// import cmdAvatar from "../../components/cmd-avatar/cmd-avatar.vue"
// import cmdIcon from "../../components/cmd-icon/cmd-icon.vue"
import { formatTime } from "../../../util/day";

// import cmdCellItem from "../../components/cmd-cell-item/cmd-cell-item.vue"

export default {
  components: {
    // cmdAvatar,
    // cmdIcon,
    // cmdCellItem
  },
  prop: {
  },
  filters: {
    getData (val) {
      if (!val) return '';
      return formatTime(val);
    },
  },
  data() {
    return {
      myinfo: {
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
      teamData: {
        'superuser': '超级管理员',
        'operator': '操作员',
        'financial': '财务员',
      },
      userAvatar: "",
    };
  },
  mounted() {
    if (uni.getStorageSync("userInfo")) {
      this.userAvatar = uni.getStorageSync("userInfo").avatarUrl;
      console.log( this.userAvatar, '8989');
      
    }
    const cachedUser = uni.getStorageSync('user_info');
    if (cachedUser) {
      this.myinfo = cachedUser; // 覆盖默认值
    }else{
      console.log('未找到用户缓存'); 
    }
  },
  onLoad() {
  },
  methods: {},
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
  width: 22rpx;
  height: 22rpx;
  background-size: cover;
  background-position: center;
  margin-left: 8rpx;
}
</style>
