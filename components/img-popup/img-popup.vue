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
          :width="canvasWidthResponsive"
          :height="canvasHeightResponsive"
          :style="{
          width: canvasWidthResponsive + 'px',
          height: canvasHeightResponsive + 'px'
          }"
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
import { base64ToTempPath } from '@/util/fq';

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
    },
    imgContent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rqImg: '',
      visible: false,
      saveImg: '',
      canvasHeight: 320,
      canvasWidth: 400
    }
  },
  computed: {
      // 响应式宽高
      canvasWidthResponsive() {
        return this.canvasWidth;
      },
      canvasHeightResponsive() {
        return this.canvasHeight;
      },
    },
  methods: {
    async draw() {
      // 获取Canvas节点
      // #ifdef MP-WEIXIN
      // 微信小程序使用 type="2d"
      const query = uni.createSelectorQuery().in(this);
      query.select('#myCanvas').fields({ node: true }).exec(/* ... */);
      // #endif

      // #ifdef H5
      // H5 使用标准DOM API
      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      // #endif
      // const query = uni.createSelectorQuery().in(this);
      query.select('#myCanvas')
        .fields({ node: true, size: true })
        .exec(async (res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          const { width, height } = res[0];
          
          // 高清适配
          const dpr = uni.getSystemInfoSync().pixelRatio;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.scale(dpr, dpr);
          
          // 绘制背景
          ctx.setFontSize(16);
          ctx.setFillStyle("#000000");
          ctx.setTextAlign("center");
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, width, height);
          // ctx.fillText("Hello UniApp Canvas", 150, 200); // (x, y) 是文字左下角坐标
          // 绘制网络图片
          const { tempFilePath } = await uni.downloadFile({
            url: this.rqImg
          });
          const img = canvas.createImage();
          img.src = tempFilePath;
          img.onload = () => {
            ctx.drawImage(img, 50, 30, 100, 100);
          };
        });
    },
    // 打印
    async starPrint() {
      this.printed += 1
      //标签尺寸
      const labelWidth = 50
      const labelHeight = 40

      const multiple = 8
      let canvasId = '';
      canvasId = 'myCanvas';
      const ctx = uni.createCanvasContext(canvasId);
      this.handleLabelDrawing(canvasId, ctx, labelWidth, labelHeight, 0)
    },

    // 提取公共逻辑
    async handleLabelDrawing(canvasId, ctx, labelWidth, labelHeight, rotation) {
      const localPath = await this.generateImage();
      startDrawLabel(canvasId, this, labelWidth, labelHeight, rotation, ctx);
      drawImage(localPath, 0, 3, 50, 40);
      endDrawLabel(() => {
        console.log('打印完成');
        setTimeout(() => {
          this.close();
        }, 500);
        print(1, () => {
          if (this.quantity > this.printed) {
            this.starPrint();
          }
        });
      });
    },
    async drawCanvas() {
      const imagePath = await base64ToTempPath(`data:image/png;base64,${this.imageUrl}`);
      return new Promise((resolve) => {
        const ctx = uni.createCanvasContext('myCanvas', this);
        ctx.drawImage(imagePath, 40, 20, 220, 220);
        ctx.setFontSize(20);
        ctx.setFillStyle("#000000");
        ctx.setTextAlign("center");
        const textY = 20 + 220 + 30; // 图片Y + 图片高度 + 间距
        ctx.fillText(this.imgContent, 150, textY);
        // ctx.draw();
        // resolve();
        ctx.draw(false, () => {
          setTimeout(resolve, 300); // 延迟确保渲染完成
        });
      })
   
    },
    async generateImage() {
      await this.drawCanvas();
      return new Promise((resolve, reject) => {
        uni.canvasToTempFilePath({
          canvasId: "myCanvas",
          success: (res) => {
            this.saveImg = res.tempFilePath
            resolve(res.tempFilePath);
          },
          fail: (err) => {
            console.error("Canvas转图片失败:", err);
            reject(err);
          }
        }, this);
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
        // #ifdef H5
        // H5环境直接使用Base64
        resolve(base64Data);
        // #endif

        // #ifdef MP-WEIXIN || MP-ALIPAY
        // 小程序端写入临时文件
        // 去除Base64头（如"data:image/png;base64,"）
        const base64 = base64Data.split(',')[1] || base64Data; // 去除可能的头部
        const fileManager = uni.getFileSystemManager();
        const tempFilePath = `${wx.env.USER_DATA_PATH}/qrcode_${Date.now()}.png`;
        
        // 写入临时文件
        fileManager.writeFile({
          filePath: tempFilePath,
          data: base64,
          encoding: 'base64',
          success: () => resolve(tempFilePath)
        });
        // #endif
      });
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.getBuffer().then(data => {
          this.rqImg = data
          setTimeout(() => {
            this.generateImage();
          }, 300)
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
          if (res.code === -4) {
            connectStatus = -4;
          }
          if (connectStatus === -4) {
            uni.showToast({
              title: '打印机未连接',
              icon: 'none'
            });
            return;
          }

          this.printed = 0
          uni.showToast({
            title: '开始打印'
          });
          didReadPrintCountInfo((res) => {
            console.log(res.count);
          });

          didReadPrintErrorInfo((res) => {
            console.log(res.errCode);
          });
          console.log('code', '4')
          startJob(1, 3, this.quantity, () => {
            this.starPrint();
          });
        });

      }
    },
   async handleSave() {
      const localPath = await this.generateImage();
      uni.saveImageToPhotosAlbum({
        filePath: localPath, // 临时路径
        success() {
          uni.showToast({ title: '保存成功', icon: 'success' });
        },
        fail(err) {
          console.error('保存失败:', err);
          if (err.errMsg.includes('auth deny')) {
            uni.showModal({
              title: '提示',
              content: '需要相册权限才能保存',
              success(res) {
                if (res.confirm) {
                  // 引导用户去设置页开启权限
                  uni.openSetting();
                }
              }
            });
          }
        }
      });
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
  background: #ffffff;
  opacity: 1;
}

/* 底部按钮 */
.popup-footer {
  display: flex;
  padding: 20rpx;
  border-top: 1rpx solid #f5f5f5;
}
/deep/uni-canvas>canvas {
  background-color: #fff;
  opacity: 1;
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