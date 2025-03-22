<template>
  <view class="user-info-content">
    <!-- 用户信息区 -->
    <view class="user-info">
      <image src="/images/avatar.png" mode="aspectFill" class="avatar"></image>
      <view class="user-desc">
        <view class="name"
          >{{ userName }} <text class="role">{{ userRole }}</text></view
        >
        <view class="shop"
          >{{ storeName }}
          <view class="svg-bkg-diamond"></view>
        </view>
        <view class="member"
          >年费会员，有效期至
          <text class="expire-date"> {{ expireDate }}</text>
        </view>
      </view>
      <button class="renew-btn" @click="goRenewPage()">续费</button>
    </view>
  </view>
</template>

<script>
// import cmdAvatar from "../../components/cmd-avatar/cmd-avatar.vue"
// import cmdIcon from "../../components/cmd-icon/cmd-icon.vue"
// import cmdCellItem from "../../components/cmd-cell-item/cmd-cell-item.vue"
var _this;

export default {
  components: {
    // cmdAvatar,
    // cmdIcon,
    // cmdCellItem
  },
  data() {
    return {
      //将data文件夹中的数据读入
      userAvatar: "用户头像地址",
      userName: "佟湘玉",
      userRole: "掌柜",
      storeName: "同福客栈七侠镇衙门口店",
      expireDate: "2025-12-31",
    };
  },
  mounted() {
    _this = this;
  },
  onLoad: function () {
    // var myinfo = uni.getStorageSync("user_info");
    // this.user_name = myinfo.data.user.user_name;
    // this.user_id = myinfo.data.user.username;
  },
  methods: {
    // 广告横幅点击跳转
    goRenewPage() {
      wx.navigateTo({
        url: "/pages/user/renew", // 替换为实际广告页面路径
      });
    },
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
  background-image: url("../images/iconPark-level.svg");
  width: 22rpx;
  height: 22rpx;
  background-size: cover;
  background-position: center;
  margin-left: 8rpx;
}
</style>
