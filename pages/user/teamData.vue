<template>
  <view class="admin-container">
    <!-- 顶部标题 -->
    <view class="header">
      <text class="title">管理员</text>
    </view>

    <!-- 管理员列表 -->
    <view class="admin-list">
      <!-- 超级管理员 -->
      <view class="admin-group">
        <view class="admin-item super-admin">
          <text class="name">佟湘玉</text>
          <text class="role">超级管理员</text>
        </view>
      </view>

      <!-- 普通管理员分组 -->
      <view class="admin-group" v-for="(group, index) in adminGroups" :key="index">
        <view class="admin-item" @click="toggleGroup(index)">
          <text class="name">{{ group.name }}</text>
          <text class="role">管理员</text>
          <uni-icons type="arrowdown" size="16" color="#999" v-if="!group.expanded"></uni-icons>
          <uni-icons type="arrowup" size="16" color="#999" v-else></uni-icons>
        </view>

        <!-- 子管理员 (可折叠) -->
        <view class="sub-admin-list" v-show="group.expanded">
          <view class="sub-admin-item" v-for="(subAdmin, subIndex) in group.subAdmins" :key="subIndex">
            <text class="name">{{ subAdmin.name }}</text>
            <text class="role">管理员</text>
            <view class="settings" @click="navToSettings(subAdmin)">
              <text>设置 ></text>
            </view>
          </view>
        </view>
      </view>

      <!-- 新增按钮 -->
      <view class="add-btn" @click="addAdmin">
        <uni-icons type="plusempty" size="18" color="#07C160"></uni-icons>
        <text class="btn-text">新增</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      adminGroups: [
        {
          name: '白展堂',
          expanded: false,
          subAdmins: [
            { name: '跑堂', id: 2 },
            { name: '设置', id: 3 }
          ]
        },
        {
          name: '日常才',
          expanded: false,
          subAdmins: [
            { name: '账房', id: 4 },
            { name: '设置', id: 5 }
          ]
        }
      ]
    }
  },
  methods: {
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
      uni.showToast({
        title: '跳转新增页面',
        icon: 'none'
      })
      // 实际项目中跳转到新增页面
      // uni.navigateTo({ url: '/pages/admin/add' })
    }
  }
}
</script>
<style scoped>
.admin-container {
  width: 100%;
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  padding: 30rpx 0;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.admin-list {
  background-color: #fff;
  border-radius: 12rpx;
  overflow: hidden;
}

.admin-group {
  border-bottom: 1rpx solid #eee;
}

.admin-item {
  padding: 28rpx 30rpx;
  display: flex;
  align-items: center;
  position: relative;
}

.super-admin {
  background-color: #f9f9f9;
}

.name {
  font-size: 32rpx;
  color: #333;
  flex: 1;
}

.role {
  font-size: 26rpx;
  color: #999;
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
  padding: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #07C160;
  font-size: 30rpx;
}

.btn-text {
  margin-left: 10rpx;
}
</style>