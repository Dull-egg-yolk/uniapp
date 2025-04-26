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
        <text class="popup-title">{{ title }}</text>
        <view class="close-btn" @tap.stop="close">
          <text class="close-icon">×</text>
        </view>
      </view>

      <!-- 内容区域（可滚动） -->
      <scroll-view class="popup-content" scroll-y>
        <rich-text :nodes="content"></rich-text>
      </scroll-view>

      <!-- 底部大按钮 -->
      <view class="popup-footer">
        <button 
          class="confirm-btn" 
          @tap.stop="handleConfirm"
        >{{ confirmText }}</button>
      </view>
    </div> 
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    zIndex: {
      type: Number,
      default: 9999 // 必须高于TabBar的z-index（通常为999）
    }
  },
  data() {
    return {
      visible: false,
      popupContent: ''
    }
  },
  methods: {
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
    }
  },
}
</script>

<style scoped>
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #f5f5f5;
  position: relative;
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
  width: auto;
  white-space: pre-line;
  overflow-y: scroll;
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
</style>