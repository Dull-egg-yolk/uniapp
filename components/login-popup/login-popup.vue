<template>
  <div>
   <!-- 遮罩层（置灰禁用页面） -->
   <view 
     class="popup-mask" 
     v-if="visible" 
     @tap.stop="close"
     :style="{ zIndex: zIndex - 1 }"
   />
   <!-- 弹窗主体 -->
   <div 
     class="popup-container"
     :class="{ 'popup-show': visible }"
     :style="{ zIndex: zIndex }"
   >
     <!-- 标题栏 -->
     <view class="popup-header">
       <text class="popup-title-top">九点荟会员管理系统 <text class="span">申请</text></text>
       <text class="popup-title-center">获取你的头像、昵称</text>
       <text class="popup-title-bom">展示个人信息</text>
     </view>

     <!-- 内容区域（可滚动） -->
     <view class="popup-content">
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
            :src="userInfo.avatarUrl || '/static/img/header-img.svg'" 
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
     </view>

     <!-- 底部按钮 -->
     <view class="popup-footer">
       <button 
          class="save-btn" 
          :disabled="!canSubmit" 
           @tap.stop="handleConfirm"
        >
          立即登录
        </button>
     </view>
   </div> 
 </div>
</template>

<script>
import { getUserConfig } from "@/api/user";
export default {
 props: {
   zIndex: {
     type: Number,
     default: 9999 // 必须高于TabBar的z-index（通常为999）
   }
 },
 data() {
   return {
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    canSubmit: false,
     visible: false,
     popupContent: '',
     avatarUrl: '', // 用户头像URL
     nickName: '',  // 用户昵称
     agreed: false, // 是否同意协议
     canLogin: false, // 是否可以登录
     qiniuDomain: 'https://staticweb.jiudianhui.com.cn', // 七牛域名
     uploadToken: '', // 七牛上传token
   }
 },
 watch: {
    'userInfo.avatarUrl': 'checkCanSubmit',
    'userInfo.nickName': 'checkCanSubmit'
  },
 methods: {
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
   open() {
     // 隐藏TabBar（小程序专用）
     uni.hideTabBar()
     this.visible = true
   },
   close() {
     // 显示TabBar（小程序专用
     uni.showTabBar()
     this.visible = false
     this.$emit('close')
     // #ifdef MP-WEIXIN
     wx.hideTabBar();
     // #endif
   },
   handleConfirm() {
     this.$emit('confirm')
     this.close()
   },
    // 选择头像回调
    handleChooseAvatar(e) {
      console.log(e, '选择头像回调');
      
      this.userInfo.avatarUrl = e.detail.avatarUrl
      this.uploadImage(this.userInfo.avatarUrl, this.uploadToken);
    },
    
    // 昵称输入回调
    handleNicknameInput(e) {
      this.userInfo.nickName = e.detail.value
    },
    // 上传图片到七牛
    uploadImage(filePath, token) {
      return new Promise((resolve, reject) => {
          const fileName = `ims/dev/avatar/${Date.now()}.${filePath.split('.').pop()}`;
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
                this.userInfo.avatarUrl = `${this.qiniuDomain}/${data.key}`
                // this.imageUrl = `${this.qiniuDomain}/${data.key}`
                console.log(this.userInfo.avatarUrl, '0');
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
    // 检查是否可以提交
    checkCanSubmit() {
      this.canSubmit = !!this.userInfo.avatarUrl && !!this.userInfo.nickName
      if(this.canSubmit) {
        uni.setStorageSync('userInfo', this.userInfo);
      }
    },
 },
 mounted(){
    this.getUserConfig()
  }
}
</script>

<style lang="scss" scoped>
/* 遮罩层（置灰禁用） */
.popup-mask {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.6);
 backdrop-filter: blur(2px);
 z-index: 1;
}

/* 弹窗容器 */
.popup-container {
 position: fixed;
 left: 0;
 right: 0;
 bottom: -100%;
 background: #fff;
 border-radius: 24rpx 24rpx 0 0;
 transition: all 0.3s ease;
 max-height: 70vh;
 display: flex;
 flex-direction: column;
 padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
 z-index: 99999;
}

.popup-show {
 bottom: 0;
}

/* 标题栏 */
.popup-header {
 padding: 28rpx 32rpx;
 display: flex;
 flex-direction: column;
 border-bottom: 1rpx solid #f5f5f5;
 position: relative;
}
.popup-title-top {
  font-size: 26rpx;
  color: #000;
  margin-bottom: 40rpx;
}
.popup-title-top .span {
  font-size: 24rpx;
  color: #444544;
  padding-left: 20rpx;
}
.popup-title-bom {
  font-size: 22rpx;
  color: #444544;
  margin-top: 20rpx;
}
.popup-title-center {
  font-size: 28rpx;
  font-weight: bold;
  color: #000;
}
.popup-title {
 font-size: 34rpx;
 font-weight: bold;
 color: #333;
}

.close-btn {
 width: 40rpx;
 height: 40rpx;
 display: flex;
 align-items: center;
 justify-content: center;
}

.close-icon {
 font-size: 40rpx;
 color: #999;
 line-height: 1;
}

/* 内容区域 */
.popup-content {
 flex: 1;
 padding: 32rpx;
 font-size: 30rpx;
 color: #666;
 line-height: 1.6;
}

/* 底部按钮 */
.popup-footer {
 padding: 24rpx 32rpx;
 border-top: 1rpx solid #f5f5f5;
}

.confirm-btn {
 background: #07C160;
 color: #fff;
 border-radius: 48rpx;
 height: 88rpx;
 line-height: 88rpx;
 font-size: 32rpx;
 font-weight: 500;
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
</style>