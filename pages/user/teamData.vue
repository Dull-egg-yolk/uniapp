<template>
  <view class="admin-container">
    <!-- 顶部标题 -->
    <view class="header">
      <text class="title">管理员</text>
    </view>

      <!-- 普通管理员分组 -->
       <view class="group-box">
        <view class="admin-group" v-for="(group, index) in adminGroups" :key="index">
          <view class="admin-item" @click="toggleGroup(index)">
            <view class="admin-info">
              <view class="avatar"><image class="avatar-img"
                src="https://cdn.uviewui.com/uview/album/1.jpg"
                mode="scaleToFill"
              /></view>
              <view class="info">
                <text class="name">{{ group.Name }} <text class="ico">{{ group.UserHotelRole.Department }}</text></text>
                <text class="role">{{ group.UserHotelRole.Role }}</text>
              </view>
            </view>
            <view>
              <text class="set">设置</text><uni-icons type="forward" size="16" color="#999"></uni-icons>
            </view>
          </view>
        </view>
      </view>

      <!-- 新增按钮 -->
      <view class="add-btn" @click="addAdmin">
        <text class="btn-text">新增</text>
      </view>
      <inviteFriends-popup 
        ref="InviteFriendsPopup"
        confirmText="邀请同事加入"
        closeText="取消"
        @confirm="onConfirm"
      />
    </view>
</template>
<script>
import { getHotelUser } from '@/api/user'
export default {
  data() {
    return {
      adminGroups: [],
      InvitedCode: ''
    }
  },
  methods: {
    // 获取酒店用户信息
    async getHotelUsers() {
      try {
        const res = await getHotelUser()
        console.log(res)
        // 处理返回的数据，生成adminGroups
        this.adminGroups = res.Data
      } catch (error) {
        console.error(error)
      }
    },
    // 切换分组展开/折叠
    toggleGroup(index) {
      this.adminGroups[index].expanded = !this.adminGroups[index].expanded
    },
    
    // 跳转到设置页
    navToSettings(admin) {
      if (admin.name === '设置') {
        uni.navigateTo({
          url: '/pages/admin/settings?id=' + admin.id
        })
      }
    },
    
    // 新增管理员
    addAdmin() {
      this.$refs.InviteFriendsPopup.open()
    },
    // 分享好友功能配置
    onShareAppMessage() {
      return {
        title: '快来加入我们吧',  // 必填
        path: `/pages/user/user?InvitedCode=${this.InvitedCode}`, // 必填，分享页面路径
        imageUrl: '/static/img/weixin.png', // 可选，分享图片
        desc: '自己有会员，经营更稳健',   // 可选，微信小程序支持
        success(res) {
          console.log('分享成功', res);
          uni.showToast({ title: '分享成功' });
        },
        fail(err) {
          console.log('分享失败', err);
        }
      }
    },
    // 微信朋友圈分享
    onShareTimeline() {
      return {
        title: this.shareData.title,
        query: `ref=${uni.getStorageSync('userId')}`,
        imageUrl: this.shareData.image
      };
    }
  },
  mounted() {
    this.getHotelUsers()
    this.InvitedCode = uni.getStorageSync('user_info').InvitedCode
    console.log(this.InvitedCode);
    
  }
}
</script>
<style scoped>
.admin-container {
  width: 100%;
  padding: 20rpx;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.admin-info {
  display: flex;
  align-items: center;
}
.header {
  padding: 30rpx 0;
  height: 60rpx;
}
.info {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}
.group-box {
  flex: 1;
}
.admin-list {
  background-color: #fff;
  border-radius: 12rpx;
  overflow: hidden;
}

.admin-group {
  border-radius: 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
}
.avatar-img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.admin-item {
  padding: 28rpx 30rpx;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
}

.super-admin {
  background-color: #f9f9f9;
}

.name {
  font-size: 32rpx;
  color: #000;
  flex: 1;
}
.ico {
  font-size: 20rpx;
  color: #999;
  margin-left: 10rpx;
}
.set {
  font-size: 30rpx;
  color: #999;
}

.role {
  font-size: 30rpx;
  color: #f40e0e;
  margin-right: 40rpx;
}

.sub-admin-list {
  background-color: #fafafa;
  padding-left: 60rpx;
}

.sub-admin-item {
  padding: 24rpx 30rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx dashed #eee;
  position: relative;
}

.settings {
  position: absolute;
  right: 30rpx;
  color: #07C160;
  font-size: 28rpx;
}

.add-btn {
  margin-top: 40rpx;
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
  margin: 20rpx auto;
  padding: 16rpx 50rpx;
}

.btn-text {
  /* width: 200rpx;
  height: 80rpx; */
}
</style>