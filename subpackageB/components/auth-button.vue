<!-- components/one-click-login/one-click-login.vue -->
<template>
  <div>
    <button 
      class="login-btn"
      :loading="loading"
      @click="handleLogin"
    >
      <slot>一键登录</slot>
    </button>

    <!-- 隐藏的授权按钮 -->
    <button 
      v-show="false"
      ref="hiddenUserInfoBtn"
      open-type="getUserInfo"
      @getuserinfo="onGetUserInfo"
      id="hiddenUserInfoBtn"
    ></button>
    
    <button 
      v-show="false"
      ref="hiddenPhoneBtn"
      open-type="getPhoneNumber"
      @getphonenumber="onGetPhoneNumber"
      id="hiddenPhoneBtn"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    // 是否强制重新授权用户信息
    forceUserInfo: {
      type: Boolean,
      default: false
    }
  },
  emits: ['success', 'fail'],
  data() {
    return {
      loading: false,
      userInfo: null,
      loginCode: '',
      phoneCode: ''
    }
  },
  methods: {
    // 主登录方法
    async handleLogin() {
      this.loading = true
      
      try {
        // 1. 获取用户信息
        await this.fetchUserInfo()
        
        // 2. 获取手机号
        await this.fetchPhoneNumber()
        
        // 3. 触发成功事件
        this.$emit('success', {
          userInfo: this.userInfo,
          loginCode: this.loginCode,
          phoneCode: this.phoneCode
        })
      } catch (error) {
        this.$emit('fail', error)
      } finally {
        this.loading = false
      }
    },
    
    // 获取用户信息
    fetchUserInfo() {
      return new Promise((resolve, reject) => {
        if (!this.forceUserInfo) {
          const cachedUserInfo = uni.getStorageSync('userInfo')
          if (cachedUserInfo) {
            this.userInfo = cachedUserInfo
            return resolve()
          }
        }
        
        this.triggerButton('hiddenUserInfoBtn', 'onGetUserInfo', (e) => {
          if (e.detail.userInfo) {
            this.userInfo = e.detail.userInfo
            uni.setStorageSync('userInfo', this.userInfo)
            resolve()
          } else {
            reject(new Error('请授权用户信息以继续'))
          }
        })
      })
    },
    
    // 获取手机号
    fetchPhoneNumber() {
      return new Promise((resolve, reject) => {
        // 先获取登录code
        uni.login({
          success: (res) => {
            this.loginCode = res.code
            
            this.triggerButton('hiddenPhoneBtn', 'onGetPhoneNumber', (e) => {
              if (e.detail.code) {
                this.phoneCode = e.detail.code
                resolve()
              } else {
                reject(new Error('请授权手机号以继续'))
              }
            })
          },
          fail: () => {
            reject(new Error('微信登录失败'))
          }
        })
      })
    },
    
    // 触发隐藏按钮的点击事件
    triggerButton(selector, eventName, callback) {
      this.$nextTick(() => {
      uni.createSelectorQuery()
        .in(this)
        .select(selector)
        .node()
        .exec(res => {
          console.log(res, 'sdkfgfdjkgh');
          
          if (res[0] && res[0].node) {
            const button = res[0].node
            button[eventName] = callback
            button.click()
          } else {
            this.fallbackGetNode(selector, callback)
            throw new Error('授权按钮初始化失败')
          }
        })
      })
    },
    
    // 用户信息回调
    onGetUserInfo(e) {
      // 由隐藏按钮触发，逻辑在fetchUserInfo中处理
    },
    
    // 手机号回调
    onGetPhoneNumber(e) {
      // 由隐藏按钮触发，逻辑在fetchPhoneNumber中处理
    },
    fallbackGetNode(selector, callback) {
      const el = document.querySelector(selector)
      if (el) {
        callback(el)
      } else {
        console.error('无法获取节点:', selector)
      }
    }
  }
}
</script>

<style>
.login-btn {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  background: linear-gradient(90deg, #07C160, #09BB07);
  color: #fff;
  border-radius: 45rpx;
  font-size: 32rpx;
  margin-top: 60rpx;
  border: none;
}

.login-btn[disabled] {
  opacity: 0.6;
}
</style>