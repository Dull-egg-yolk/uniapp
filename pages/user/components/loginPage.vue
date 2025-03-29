<template>
  <view>
    <header-info></header-info>
    <!-- 常用功能 -->
    <view class="function-section">
      <view class="section-title">常用功能</view>
      <view class="function-grid">
        <view class="function-item" v-for="(item,index) in functionList" :key="index">
          <!-- <image src="{{item.icon}}" mode="aspectFit" class="function-icon"></image> -->
          <view :class="['function-icon', item.icon]" @click="goToPage(item.url)"></view>
          <text class="function-text">{{ item.name }}</text>
        </view>
      </view>
    </view>

    <!-- 广告横幅 -->
    <view class="ad-banner" @click="goToAdPage()">
      <view class="ad-title">自己有会员，经营更稳健</view>
      <text class="ad-desc"
        >点击了解 <text class="link-text">九点荟会员管理系统</text></text
      >
    </view>
  </view>
</template>

<script>
import headerInfo from "./headerInfo.vue";
var _this;

export default {
  components: {
    headerInfo,
  },
  props: {
    userInfoList: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      //将data文件夹中的数据读入
      userAvatar: "用户头像地址",
      userName: "佟湘玉",
      userRole: "掌柜",
      storeName: "同福客栈七侠镇衙门口店",
      expireDate: "2025-12-31",
      functionList: [
        { icon: "person-info", name: "用户信息",url:'pages/user/userInfo' },
        { icon: "team-setting", name: "团队设置" ,url:'pages/user/teamData'},
        { icon: "invite-gift", name: "邀请有礼" ,url:'pages/user/userInfo'},
        { icon: "help-doc", name: "帮助文档",url:'pages/user/helpDoc' },
        { icon: "online-service", name: "在线客服" ,url:'pages/user/userInfo' },
        { icon: "new-guide", name: "新手指南" ,url:'pages/user/guide' },
        { icon: "info-feedback", name: "需求反馈" ,url:'pages/user/feedback' },
        { icon: "add-desktop", name: "添加到桌面" ,url:'pages/user/userInfo' },
      ],
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
    goToAdPage() {
      wx.navigateTo({
        url: "/pages/ad/ad", // 替换为实际广告页面路径
      });
    },
    goToPage(url) {
      console.log(url);
      uni.navigateTo({
        url: `/${url}`, // 替换为实际页面路径
      })
    }
  },
};
</script>

<style>
.content {
  padding: 0;
}

/* 常用功能 */
.function-section {
  padding: 20rpx;
  margin: 20rpx 0;
}
.section-title {
  font-size: 30rpx;
  color: #333;
  margin-bottom: 20rpx;
}
.function-grid {
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15rpx 10rpx;
}
.function-item {
  width: 23%;
  text-align: center;
  margin-bottom: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.function-icon {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 16rpx;
  background-size: cover;
  background-position: center;
}
.person-info {
  background-image: url("../images/riLine-contacts-line.svg");
}
.team-setting {
  background-image: url("../images/antOutline-team.svg");
}
.invite-gift {
  background-image: url("../images/riLine-feedback-line.svg");
}
.help-doc {
  background-image: url("../images/iconPark-doc-search-two.svg");
}
.online-service {
  background-image: url("../images/riLine-mail-send-line.svg");
}
.new-guide {
  background-image: url("../images/if-compass.svg");
}
.info-feedback {
  background-image: url("../images/riLine-feedback-line.svg");
}
.add-desktop {
  background-image: url("../images/md-airplay.svg");
}

.function-text {
  font-size: 20rpx;
  color: #666;
}

/* 广告横幅 */
.ad-banner {
  background: #1a1a1a;
  color: #ffd700;
  padding: 30rpx;
  text-align: center;
  margin: 20rpx 0;
}
.ad-title {
  font-size: 36rpx;
  margin-bottom: 10rpx;
}
.ad-desc {
  font-size: 24rpx;
}
.link-text {
  text-decoration: underline;
}

/* 底部自定义tab */
.custom-tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10rpx 0;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-icon {
  width: 40rpx;
  height: 40rpx;
  margin-bottom: 5rpx;
}
.tab-text {
  font-size: 24rpx;
  color: #666;
}
.tab-center {
  position: relative;
  top: -20rpx;
}
.center-icon {
  width: 80rpx;
  height: 80rpx;
  background: #ff4444;
  border-radius: 50%;
}
</style>
