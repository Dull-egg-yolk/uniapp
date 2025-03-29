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
        <!-- <image 
          :src="imageUrl" 
          mode="widthFix" 
          class="content-image"
        /> -->
        <canvas 
          canvas-id="myCanvas" 
          id="myCanvas" 
          class="content-image"
        ></canvas>
      </scroll-view>

      <!-- 底部按钮组 -->
      <view class="popup-footer">
        <button class="footer-btn print-btn" @tap="handlePrint">打印</button>
        <button class="footer-btn save-btn" @tap="handleSave">保存</button>
      </view>
    </div>
  </div>
</template>

<script>
import { usePrint } from '@/util/print';

const {
  startJob,
  startDrawLabel,
  drawText,
  drawBarcode,
  drawQRCode,
  drawRectangle,
  drawLine,
  drawImage,
  endDrawLabel,
  print,
  didReadPrintCountInfo,
  didReadPrintErrorInfo,
  getMultiple,
  getSn,
  setPlatform,
  setBuildPlatform
} = usePrint();
export default {
  props: {
    title: {
      type: String,
      default: '图片预览'
    },
    imageUrl: {
      type: String,
      required: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      rqImg: '',
      visible: false
    }
  },
  methods: {
    // 打印
    async starPrint() {
      this.printed += 1
      //标签尺寸
      const labelWidth = 60
      const labelHeight = 40

      const multiple = 8

      console.log('开始绘制');
      console.log('1')
      let canvasId = '';
      canvasId = 'myCanvas';
      console.log('canvasId', canvasId)

      const ctx = uni.createCanvasContext(canvasId);
      console.log(' ctx', ctx)
      this.handleLabelDrawing(canvasId, ctx, labelWidth, labelHeight, 0)
    },

    // 提取公共逻辑
    async handleLabelDrawing(canvasId, ctx, labelWidth, labelHeight, rotation) {
      const localPath = await this.drawCanvas();
      startDrawLabel(canvasId, this, labelWidth, labelHeight, rotation, ctx);
      drawImage(localPath, 2, 2, 30, 30);
      endDrawLabel(() => {
        print(1, () => {
          if (this.quantity > this.printed) {
            this.starPrint();
          }
        });
      });
    },
    drawCanvas() {
      return new Promise((resolve) => {
        const ctx = uni.createCanvasContext('myCanvas', this);
        console.log(this.rqImg, 'this.rqImg222222');
        
        // 1. 绘制背景
        ctx.setFillStyle('#fff');
        ctx.fillRect(0, 0, 300, 300);
        // 2. 绘制图片（需先下载）
        uni.downloadFile({
          url: this.rqImg,
          success: (res) => {
            resolve(res.tempFilePath);
            ctx.drawImage(res.tempFilePath, 40, 20, 220, 220);
            const canvasWidth = 300;
            const text = "居中文字示例";
            const fontSize = 16;

            // 1. 设置文字样式
            ctx.setFontSize(fontSize);
            ctx.setFillStyle('#000');

            // 2. 测量文字宽度
            const textWidth = ctx.measureText(text).width;

            // 3. 计算居中坐标
            const x = (canvasWidth - textWidth) / 2;
            const y = 270
            // 3. 绘制文字
            ctx.setFontSize(16);
            ctx.setFillStyle('#333');;
            ctx.fillText(text, x, y);

            // 4. 执行绘制
            // ctx.draw();
            ctx.draw(false, () => {
              uni.canvasToTempFilePath({
                canvasId: 'myCanvas',
                success: (res) => {
                }
              });
            });
          }
        });
      });
    },
    generateImage() {
      this.drawCanvas(); // 先绘制内容
      uni.canvasToTempFilePath({
        canvasId: 'myCanvas',
        success: (res) => {
          this.imageReady = true;
          uni.showToast({ title: '内容已生成', icon: 'success' });
        }
      });
    },
    async getBuffer(){
      try {
        const imagePath = await this.base64ToTempPath(`data:image/png;base64,${this.imageUrl}`);
        this.rqImg = imagePath
        return imagePath;
      } catch (err) {
      }
    },
    base64ToTempPath(base64Data) {
      return new Promise((resolve) => {
        resolve(base64Data);
        const base64 = base64Data.split(',')[1] || base64Data; // 去除可能的头部
        const fileManager = uni.getFileSystemManager();
        const tempFilePath = `${wx.env.USER_DATA_PATH}/qrcode_${Date.now()}.png`;
        
        fileManager.writeFile({
          filePath: tempFilePath,
          data: base64,
          encoding: 'base64',
          success: () => resolve(tempFilePath),
        });
      });
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.getBuffer().then(data => {
          this.generateImage();
        });
      });
      
    },
    close() {
      this.visible = false
      this.$emit('close')
    },
    handleMaskClick() {
      if (this.closeOnClickMask) this.close()
    },
    handlePrint() {
      // this.$emit('print')
      // this.close()
      const app = getApp();
      const token = uni.getStorageSync('isBluetooth');
      if(!app.globalData.bluetoothConnected) {
        uni.navigateTo({
          url: '/pages/lian/lian'
        });
        return;
      } else {

       let connectStatus = 0;
        getSn((res) => {
          console.log('sn', res)
          console.log('code', res.code)
          if (res.code === -4) {
            connectStatus = -4;
          }
          console.log('code', '1')
          if (connectStatus === -4) {
            uni.showToast({
              title: '打印机未连接',
              icon: 'none'
            });
            return;
          }
          console.log('code', '2')

          this.printed = 0
          uni.showToast({
            title: '开始打印'
          });
          console.log('code', '3')
          didReadPrintCountInfo((res) => {
            console.log(res.count);
          });

          didReadPrintErrorInfo((res) => {
            console.log(res.errCode);
          });
          console.log('code', '4')
          // this.starPrint();

          startJob(1, 3, this.quantity, () => {
            this.starPrint();
          });
        });

      }
    },
    handleSave() {
      this.$emit('save')
      // this.close()
    }
  },
  mounted() {
    // this.getBuffer()
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
  /* padding: 20rpx; */
  overflow-y: auto;
}

.content-image {
  width: 100%;
  height: 600rpx;
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
  background: #2979FF;
  color: #fff;
}

.save-btn {
  background: #07C160;
  color: #fff;
}
</style>