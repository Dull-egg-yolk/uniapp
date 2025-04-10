<template>
  <view class="container">
    <!-- 登录标题 -->
    <view class="login-title">微信登录</view>
    
    <!-- 头像选择区域 -->
    <view class="avatar-section">
      <text class="section-title">选择头像</text>
      <button 
        class="avatar-btn" 
        open-type="chooseAvatar" 
        @chooseavatar="handleChooseAvatar"
      >
        <image 
          class="avatar-image" 
          :src="avatarUrl || '/static/img/header-img.svg'" 
          mode="aspectFill"
        />
      </button>
    </view>
    
    <!-- 昵称输入区域 -->
    <view class="nickname-section">
      <text class="section-title">输入昵称</text>
      <input 
        class="nickname-input" 
        type="nickname" 
        v-model="nickname" 
        placeholder="请输入昵称"
        @input="handleNicknameInput"
      />
    </view>
    
    <!-- 登录按钮 -->
    <button 
      class="login-btn" 
      :disabled="!canLogin" 
      @click="handleLogin"
    >
      立即登录
    </button>
    
    <!-- 用户协议 -->
    <!-- <view class="agreement">
      <checkbox-group @change="toggleAgreement">
        <checkbox :checked="agreed" color="#07C160"/>
      </checkbox-group>
      <text>我已阅读并同意</text>
      <text class="agreement-link" @click="navigateToAgreement">《用户协议》</text>
      <text>和</text>
      <text class="agreement-link" @click="navigateToPrivacy">《隐私政策》</text>
    </view> -->
  </view>
</template>
<script>
import { getUserConfig } from "@/api/user";
export default {
  data() {
    return {
      avatarUrl: '', // 用户头像URL
      nickname: '',  // 用户昵称
      agreed: false, // 是否同意协议
      canLogin: false, // 是否可以登录
      qiniuDomain: 'https://staticweb.jiudianhui.com.cn', // 七牛域名
      uploadToken: '', // 七牛上传token
    }
  },
  watch: {
    // 监听数据变化，更新登录按钮状态
    avatarUrl() {
      this.checkCanLogin();
    },
    nickname() {
      this.checkCanLogin();
    },
    agreed() {
      this.checkCanLogin();
    }
  },
  methods: {
    // 处理选择头像
    handleChooseAvatar(e) {
      this.avatarUrl = e.detail.avatarUrl;
      console.log(this.avatarUrl);
      this.uploadImage(this.avatarUrl, this.uploadToken);
      // 如果需要上传到服务器s
      // this.uploadAvatar(e.detail.avatarUrl);
    },
    async getUserConfig(){
      const res = await getUserConfig().then(res=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else {
          this.uploadToken = res.Data.CdnT; 
        }
      })
    },
    // 上传图片到七牛
    uploadImage(filePath, token) {
      return new Promise((resolve, reject) => {
          const fileName = `ims/dev/goods/${this.HotelID}/${Date.now()}.${filePath.split('.').pop()}`;
          uni.uploadFile({
            url: 'https://up-z1.qiniup.com', // 根据区域修改s
            filePath: filePath,
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data' // 确保设置正确的Content-Type
            },
            formData: {
              token: token,
              key: fileName // 生成唯一文件名
            },
            success: (res) => {
              if (res.statusCode === 200) {
                const data = JSON.parse(res.data)
                this.form.Image = `${this.qiniuDomain}/${data.key}`
                this.imageUrl = `${this.qiniuDomain}/${data.key}`
                console.log(this.form.Image, '0');
                resolve(data)
              } else {
                reject(new Error('上传失败'))
              }
            },
            fail: (err) => {
              reject(err)
            }
          })
        })
    },
    // 处理昵称输入
    handleNicknameInput(e) {
      this.nickname = e.detail.value;
    },
    
    // 切换协议状态
    toggleAgreement(e) {
      this.agreed = e.detail.value.length > 0;
    },
    
    // 检查是否可以登录
    checkCanLogin() {
      this.canLogin = this.avatarUrl && this.nickname && this.agreed;
    },
    
    // 处理登录
    async handleLogin() {
      try {
        // 1. 获取微信登录code
        const loginRes = await uni.login({
          provider: 'weixin'
        });
        
        // 2. 发送数据到服务器（示例）
        const res = await uni.request({
          url: 'https://your-api-domain.com/login',
          method: 'POST',
          data: {
            code: loginRes.code,
            avatar: this.avatarUrl,
            nickname: this.nickname
          }
        });
        
        // 3. 登录成功处理
        if (res.data.success) {
          uni.setStorageSync('token', res.data.token);
          uni.showToast({
            title: '登录成功',
            icon: 'success'
          });
          
          // 跳转到首页
          setTimeout(() => {
            uni.switchTab({
              url: '/pages/home/index'
            });
          }, 1500);
        } else {
          uni.showToast({
            title: res.data.message || '登录失败',
            icon: 'none'
          });
        }
      } catch (error) {
        console.error('登录失败:', error);
        uni.showToast({
          title: '登录失败，请重试',
          icon: 'none'
        });
      }
    },
    
    // 上传头像到服务器（可选）
    async uploadAvatar(tempFilePath) {
      try {
        const res = await uni.uploadFile({
          url: 'https://your-api-domain.com/upload',
          filePath: tempFilePath,
          name: 'avatar',
          formData: {
            userId: '123' // 替换为实际用户ID
          }
        });
        
        const data = JSON.parse(res.data);
        if (data.success) {
          this.avatarUrl = data.url; // 使用服务器返回的URL
        }
      } catch (error) {
        console.error('头像上传失败:', error);
      }
    },
    
    // // 查看用户协议
    // navigateToAgreement() {
    //   uni.navigateTo({
    //     url: '/pages/agreement/index?type=user'
    //   });
    // },
    
    // // 查看隐私政策
    // navigateToPrivacy() {
    //   uni.navigateTo({
    //     url: '/pages/agreement/index?type=privacy'
    //   });
    // }
  },
  mounted(){
    this.getUserConfig()
  }
}
</script>
<style scoped>
@import '@/common/index.css';

.login-title {
  font-size: 48rpx;
  font-weight: bold;
  text-align: center;
  margin: 60rpx 0 80rpx;
}

.avatar-section, .nickname-section {
  text-align: center;
  margin-bottom: 60rpx;
}

.section-title {
  font-size: 32rpx;
  color: #666;
  margin-bottom: 20rpx;
  display: block;
}

.avatar-btn {
  padding: 0;
  background: none;
  border: none;
  line-height: 1;
}

.avatar-image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  border: 2rpx solid #eee;
}

.nickname-input {
  height: 80rpx;
  border-bottom: 1rpx solid #eee;
  padding: 10rpx 0;
  font-size: 32rpx;
}

.login-btn {
  height: 90rpx;
  line-height: 90rpx;
  background: #07C160;
  color: white;
  border-radius: 45rpx;
  margin-top: 80rpx;
  font-size: 34rpx;
  text-align: center;
}

.login-btn[disabled] {
  background: #DDD;
}

.agreement {
  margin-top: 40rpx;
  font-size: 24rpx;
  color: #999;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.agreement-link {
  color: #576B95;
  margin: 0 5rpx;
}
wx-button:after {
  border: none;
}
</style>