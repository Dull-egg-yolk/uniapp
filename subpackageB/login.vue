<template>
  <view class="container">
    <!-- 顶部标题 -->
    <view class="header">
      <text class="title">在线逛商场 一站式购物</text>
      <text class="subtitle">东坝万达广场 申请</text>
    </view>

    <!-- 授权说明 -->
    <view class="auth-notice">
      <text>获取你的头像、昵称</text>
      <text>展示个人信息</text>
    </view>

    <!-- 头像选择 -->
    <view class="avatar-section">
      <text class="section-label">头像</text>
      <button 
        class="avatar-btn" 
        open-type="chooseAvatar" 
        @chooseavatar="handleChooseAvatar"
      >
        <image 
          class="avatar-img" 
          :src="userInfo.avatarUrl || '/static/default-avatar.png'" 
          mode="aspectFill"
        />
      </button>
    </view>

    <!-- 昵称输入 -->
    <view class="nickname-section">
      <text class="section-label">昵称</text>
      <input
        class="nickname-input"
        type="nickname"
        v-model="userInfo.nickName"
        placeholder="请输入昵称"
        @input="handleNicknameInput"
      />
    </view>

    <!-- 底部按钮 -->
    <view class="button-group">
      <button class="skip-btn" @click="handleSkip">跳过</button>
      <button 
        class="save-btn" 
        :disabled="!canSubmit" 
        @click="handleSubmit"
      >
        保存
      </button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        avatarUrl: '',
        nickName: ''
      },
      canSubmit: false
    }
  },
  watch: {
    'userInfo.avatarUrl': 'checkCanSubmit',
    'userInfo.nickName': 'checkCanSubmit'
  },
  methods: {
    // 选择头像回调
    handleChooseAvatar(e) {
      this.userInfo.avatarUrl = e.detail.avatarUrl
      // 如果需要上传到服务器
      // this.uploadAvatar(e.detail.avatarUrl)
    },
    
    // 昵称输入回调
    handleNicknameInput(e) {
      this.userInfo.nickName = e.detail.value
    },
    
    // 检查是否可以提交
    checkCanSubmit() {
      this.canSubmit = !!this.userInfo.avatarUrl && !!this.userInfo.nickName
    },
    
    // 跳过按钮
    handleSkip() {
      uni.showModal({
        title: '提示',
        content: '跳过将使用默认头像和昵称',
        success: (res) => {
          if (res.confirm) {
            this.saveUserInfo({
              avatarUrl: '/static/default-avatar.png',
              nickName: '微信用户'
            })
          }
        }
      })
    },
    
    // 保存按钮
    handleSubmit() {
      if (!this.canSubmit) return
      this.saveUserInfo(this.userInfo)
    },
    
    // 保存用户信息（实际项目应调用API）
    saveUserInfo(userInfo) {
      uni.showLoading({ title: '保存中...' })
      
      // 模拟API请求
      setTimeout(() => {
        uni.hideLoading()
        uni.setStorageSync('userInfo', userInfo)
        uni.showToast({ title: '保存成功' })
        
        // 跳转到首页
        setTimeout(() => {
          uni.switchTab({ url: '/pages/index/index' })
        }, 1500)
      }, 1000)
    },
    
    // 上传头像到服务器（可选）
    uploadAvatar(tempFilePath) {
      uni.uploadFile({
        url: 'https://your-api.com/upload',
        filePath: tempFilePath,
        name: 'avatar',
        success: (res) => {
          const data = JSON.parse(res.data)
          if (data.success) {
            this.userInfo.avatarUrl = data.url
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/common/index.css';
.container {
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 60rpx;
  .title {
    font-size: 36rpx;
    font-weight: bold;
    display: block;
  }
  .subtitle {
    font-size: 28rpx;
    color: #666;
  }
}

.auth-notice {
  margin-bottom: 80rpx;
  text {
    display: block;
    font-size: 28rpx;
    color: #888;
    margin-bottom: 10rpx;
  }
}

.avatar-section, .nickname-section {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid #eee;
  .section-label {
    width: 120rpx;
    font-size: 32rpx;
  }
}

.avatar-btn {
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  line-height: 1;
  &::after {
    border: none;
  }
}

.avatar-img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  border: 1rpx solid #f0f0f0;
}

.nickname-input {
  flex: 1;
  font-size: 32rpx;
  height: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 80rpx;
  button {
    width: 48%;
    height: 90rpx;
    line-height: 90rpx;
    border-radius: 45rpx;
    font-size: 34rpx;
  }
  .skip-btn {
    background: #f5f5f5;
    color: #666;
  }
  .save-btn {
    background: #07C160;
    color: white;
    &[disabled] {
      background: #DDD;
    }
  }
}
</style>