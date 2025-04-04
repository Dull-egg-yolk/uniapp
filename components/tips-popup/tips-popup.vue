<template>
  <div>
    <!-- 遮罩层（置灰+禁用点击） -->
    <view 
      class="popup-mask" 
      v-if="visible" 
      @tap="handleMaskClick"
    />

    <!-- 弹窗主体 -->
    <div 
      v-if="visible" 
      class="popup-container"
      :class="{ 'popup-show': visible }"
    >
      <!-- 标题栏 -->
      <view class="popup-header">
        <text class="popup-title">{{ title }}</text>
        <view class="close-btn" @tap="close">
          <text class="close-icon">×</text>
        </view>
      </view>

      <!-- 图片内容区域 -->
      <scroll-view class="popup-content" scroll-y>
        <text class="txt">盘点完成后，盘点数量不能修改！</text>
      </scroll-view>

      <!-- 底部按钮组 -->
      <view class="popup-footer">
        <button class="footer-btn print-btn" @tap="close">返回</button>
        <button class="footer-btn save-btn" @tap="handleSave">确定</button>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '图片预览'
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
      this.$emit('close')
    },
    handleMaskClick() {
      if (this.closeOnClickMask) this.close()
    },
    handlePrint() {
      this.$emit('print')
      this.close()
    },
    handleSave() {
      this.$emit('save')
      this.close()
    }
  }
}
</script>

<style scoped>
/* 遮罩层 */
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 999;
}

/* 弹窗容器（居中） */
.popup-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 80%;
  max-width: 600rpx;
  background: #fff;
  border-radius: 16rpx;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
}

.popup-show {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* 标题栏 */
.popup-header {
  padding: 24rpx 32rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #f5f5f5;
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
  padding: 80rpx 20rpx;
  overflow-y: auto;
  width: auto !important;
}
.popup-content .txt {
  text-align: center;
}

.content-image {
  width: 100%;
  border-radius: 8rpx;
}

/* 底部按钮 */
.popup-footer {
  display: flex;
  padding: 20rpx;
  border-top: 1rpx solid #f5f5f5;
}

.footer-btn {
  flex: 1;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  border-radius: 8rpx;
  margin: 0 10rpx;
}

.print-btn {
  background: #bebebe;
  color: #fff;
}

.save-btn {
  background: #f65237;
  color: #fff;
}
</style>