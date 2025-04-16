<template>
  <view class="container">
    <!-- 上传照片 -->
    <view class="section">
      <view class="image-box">
        <image :src="form.Image" class="image"></image>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <view class="form-item">
        <text class="label">物品名称</text>
        <input class="input" v-model="form.Name" :disabled="!showScan" />
      </view>
      <view class="form-item">
        <text class="label">单位</text>
        <input class="input" v-model="form.Uint" disabled />
      </view>
      <view class="form-item">
        <text class="label">规格</text>
        <input class="input" v-model="form.Format" disabled />
      </view>
      <view class="form-item">
        <text class="label">单价</text>
        <input class="input" v-model="form.Price" disabled />
      </view>
      <view class="form-item">
        <text class="label">分类</text>
        <input class="input" v-model="form.Class.Name" disabled />
      </view>
      <view class="form-item">
        <text class="label">供货商</text>
        <input class="input" v-model="form.Suppliers" disabled />
      </view>
      <view class="form-item">
        <text class="label">最低库存</text>
        <input class="input" v-model="form.MinStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">备货量</text>
        <input class="input" v-model="form.MaxStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">实时库存</text>
        <input class="input" v-model="form.CurrentStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">备注</text>
        <input class="input" v-model="form.Note" disabled />
      </view>
    </view>

    <!-- 提交按钮 -->
     <view class="bottom-btn">
      <!-- <view class="qa-btn" @click="clickQrCode">
        <text>二维码</text>
      </view> -->
      <view class="update-btn" @click="updateItem">
        <text>编辑</text>
      </view>
      <view class="del-btn" @click="delectItme">
        <text>删除</text>
      </view>
     </view>
     <view>
      <movable-area class="movable-area">
        <movable-view
          class="movable-view"
          direction="all"
          :x="buttonX"
          :y="buttonY"
          :disabled="isButtonDisabled"
          @change="onMove"
        >
          <div class="floating-button" @click="toggleButtons" :class="{ 'floating-button-active': showAdditionalButtons }">
            <!-- <text class="floating-button-icon">...</text> -->
            <view class="floating-button-img" v-if="showAdditionalButtons"><image
              class="img"
              src="/static/img/logo-1.jpeg"
              mode="scaleToFill"
            /></view>
            <view class="floating-button-icon" v-else>...</view>
          </div>
        </movable-view>
      </movable-area>
		 </view>
     <view v-if="showAdditionalButtons">
      <view
        v-for="(button, index) in additionalButtons"
        :key="index"
        class="additional-button"
        :style="{
          left: button.x + 'px',
          top: button.y + 'px',
        }"
        @click.stop="handleButtonClick(button.text)"
      >
        <text>{{ button.text }}</text>
      </view>
    </view>
    <view class="mask" v-if="showAdditionalButtons" @click="closeSubButtons"></view>
    <img-popup 
      ref="imagePopup"
      title="二维码"
      :imageUrl="imageUrl"
      :imgContent="imgContent"
      @save="onSave"
      @close="onImgClose"
    />
    <inout-popup 
      ref="inoutPopup"
      :ID="parseInt(form.ID)"
      :Note="form.Note"
      :title=title
      @save="onSave"
      @close="onCloseInout"
    />
    <stock-popup 
      ref="stockPopup"
      :ID="parseInt(form.ID)"
      :Note="form.Note"
      :title=title
      @save="onSave"
      @close="onClose"
    />
  </view>
</template>

<script>
import { showModalAsync } from '@/util/modal.js';
import imgPopup from '@/components/img-popup/img-popup.vue';
import inoutPopup from '@/components/inout-popup/inout-popup.vue';
import stockPopup from '@/components/stock-popup/stock-popup.vue';
import { throttle } from '@/util/throttle';
import { getQrcode, getGoodsItme, deleteGoodsItme } from '@/api/work.js';
const app = getApp(); // 获取 App 实例

export default {
  data() {
    return {
      showScan: false,
      imgContent: '',
      title: '',
      imageUrl: '',
      screenWidth: '',
      buttonX: 220, // 悬浮按钮的 X 坐标
      buttonY: 380, // 悬浮按钮的 Y 坐标
      showAdditionalButtons: false, // 是否显示新增按钮
      isButtonDisabled: false, // 是否禁用中间按钮的拖动
      additionalButtons: [], // 动态生成的按钮
      headerTitle: '',
      GoodsId: null,
      // 表单数据
      form: {
        Image: '',
        Name: '',
        Uint: '',
        Format: '',
        Price: '',
        Class: {
          Name: '',
        },
        Suppliers: "1",
        minStock: "1",
        maxStock: "1",
        initialStock: "1",
        remark: "1",
        ID: ''
      },
      list: {},
      imagePath: '',
      // 分类选项
      categories: ["默认分类", "分类1", "分类2", "分类3"]
    };
  },
  components: {
    imgPopup,
    inoutPopup,
    stockPopup
  },
  onLoad(option) {
    console.log(option, 'option');
    this.GoodsId = option.goosId
    this.headerTitle = option.id
    this.showScan = option.showScan
	},
  onUnload() {
    uni.$off('data-detail'); // 解绑
  },
  onReady(){
	  uni.setNavigationBarTitle({
        title: this.headerTitle
     });
  },
  methods: {
    updateItem(){
      console.log(this.form, 'form');
      uni.navigateTo({
        url: '/subpackageA/enter/index?form=' + encodeURIComponent(JSON.stringify(this.form))
      })
    },
    onCloseInout() {
      this.getGoodsItme();
    },
    closeSubButtons() {
      this.showAdditionalButtons = false
      this.isButtonDisabled = true;
    },
    delectItme: throttle(async function() {
      if (this.form.CurrentStock) {
        uni.showToast({
          title: '当前库存不为0，无法删除',
          icon: "none"
        });
        return;
      }
      try {
        const confirm = await showModalAsync({
          content: `确定删除${this.form.Name}吗？`
        });
        
        if (confirm) {
          const res = await deleteGoodsItme({
            ID: this.form.ID
          });
          
          if (res.ErrorMsg) {
            uni.showToast({ title: res.ErrorMsg, icon: "none" });
          } else {
            uni.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 500,
              complete: () => {
                uni.navigateTo({
                  url: '/subpackageA/itemPage/index'
                })
              }
            });
          }
        }
      } catch (error) {
        uni.showToast({ title: '删除失败', icon: "none" });
      }
    }, 1000),
    async getGoodsItme(){
      await getGoodsItme({ID: this.GoodsId}).then(res => {
        console.log(res, 'res');
        this.form = res.Data[0]
        this.headerTitle = res.Data[0].Name
        uni.setNavigationBarTitle({
            title: this.headerTitle
        });
      })
    },
    onSave() {
      uni.showToast({ title: '执行保存操作', icon: 'none' })
    },
    onImgClose() {
      console.log('弹窗已关闭')
    },
    clickQrCode: throttle(async function() {
      const params = {
        WarehouseID: this.form.DefaultWarehouseID,
        GoodsID: this.form.ID
      }
      const res = await getQrcode(params)
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.imageUrl = res.Data
        this.imgContent = this.form.Name + ' ' + this.form.Format + '/' + this.form.Uint
        console.log(this.$refs.imagePopup, 'this.$refs.imagePopup');
        
        this.$refs.imagePopup.open()
        
      }
    }, 0),
    // 悬浮按钮移动事件
    onMove(e) {
      this.buttonX = e.detail.x;
      this.buttonY = e.detail.y;
    },

    // 切换新增按钮的显示和隐藏
    toggleButtons() {
      console.log(111111);
      
      if (this.showAdditionalButtons) {
        this.showAdditionalButtons = false; // 隐藏新增按钮
        this.isButtonDisabled = false; // 恢复中间按钮的拖动功能
      } else {
        const offset = 80; // 按钮之间的间距
        const radius = 80; 
        const screenWidth = uni.getWindowInfo().windowWidth;
        const screenHeight = uni.getWindowInfo().windowHeight;
        this.additionalButtons = [];
        // 计算新增按钮的位置，确保不超出屏幕
        this.additionalButtons = [
          { text: '明细', x: this.buttonX, y: Math.max(0, this.buttonY - offset) },
          { text: '二维码', x: this.buttonX, y: Math.min(screenHeight - 60, this.buttonY + offset) },
          { text: '入库', x: Math.max(0, this.buttonX - offset), y: this.buttonY },
          { text: '出库', x: Math.min(screenWidth - 60, this.buttonX + offset), y: this.buttonY },
          // { 
          //   text: '调拨', 
          //   x: Math.min(screenWidth - 60, this.buttonX + offset * 0.7), 
          //   y: Math.max(0, this.buttonY - offset * 0.7)
          // }
        ];
        // for (let i = 0; i < 5; i++) {
        //   const startAngle = -90; // 起始角度设为-90度（正上方）
        //   const angle = (startAngle + i * 72) * Math.PI / 180;
        //   // const angle = (i * 72 * Math.PI) / 180; // 转换为弧度
        //   const x = this.buttonX + radius * Math.cos(angle);
        //   const y = this.buttonY + radius * Math.sin(angle);
          
        //   // 确保按钮不会超出屏幕边界
        //   this.additionalButtons.push({
        //     text: ['明细', '转入库', '入库', '出库', '二维码'][i],
        //     x: Math.max(10, Math.min(screenWidth - 60, x)),
        //     y: Math.max(10, Math.min(screenHeight - 60, y))
        //   });
        // }
        this.showAdditionalButtons = true; // 显示新增按钮
        this.isButtonDisabled = true; // 禁用中间按钮的拖动功能
      }
    },
    // 处理动态按钮点击
    handleButtonClick(text) {
      if(text === '明细'){
        console.log(this.form.ID, 'this.form.ID');
        
        uni.navigateTo({
          url: '/subpackageA/inventoryDetails/index?id=' + this.form.ID
        });
      }
      if(text === '盘点'){
        this.title = text
        this.$refs.stockPopup.open()
      }
      if(text === '转入库'){
        this.title = text
        this.$refs.imagePopup.open()
      }
      if(text === '二维码'){
        // this.$refs.imagePopup.open()
        this.clickQrCode()
      }
      if(text === '入库'){
        const otherList = uni.getStorageSync('user_page')['fe:workbench']
        const showRenew = otherList.find(item => item.Name === '入库');
        if (showRenew) {
          this.title = text
          this.$refs.inoutPopup.open()
        } else {
          uni.showToast({
            title: '暂无权限',
            icon: 'error'
          })
        }
        
      }
      if(text === '出库'){
        const otherList = uni.getStorageSync('user_page')['fe:workbench']
        const showRenew = otherList.find(item => item.Name === '出库');
        if (showRenew) {
          this.title = text
          this.$refs.inoutPopup.open()
        } else {
          uni.showToast({
            title: '暂无权限',
          })
        }
      }
      this.showAdditionalButtons = false; // 点击后隐藏新增按钮
      this.isButtonDisabled = false; // 恢复中间按钮的拖动功能
    },
    // 分类选择器变化事件
    onCategoryChange(e) {
      this.form.category = this.categories[e.detail.value];
    },
    async decodeAndShowImage(data) {
      try {
        // 1. 获取纯Base64数据
        const pureBase64 = this.getPureBase64(data);
        
        // 2. 转换为临时文件路径
        this.imagePath = await this.base64ToTempFilePath(pureBase64);
        console.log(this.imagePath, 'this.imagePath');
        
      } catch (err) {
        uni.showToast({ title: '图片解码失败', icon: 'none' });
        console.error(err);
      }
    }, 
    getPureBase64(base64Str) {
      return base64Str.replace(/^data:image\/\w+;base64,/, '');
    },
    base64ToTempFilePath(base64Data) {
      return new Promise((resolve, reject) => {
        const buffer = wx.base64ToArrayBuffer(base64Data);
        const tempFilePath = `${wx.env.USER_DATA_PATH}/temp_${Date.now()}.png`;
        
        wx.getFileSystemManager().writeFile({
          filePath: tempFilePath,
          data: buffer,
          encoding: 'binary',
          success: () => resolve(tempFilePath),
          fail: (err) => reject(err)
        });
      });
    },
    // Base64 解码字符串
    decodeBase64(base64Str) {
      // 兼容处理（去除可能的数据URL前缀）
      const base64 = base64Str.replace(/^data:.+;base64,/, '');
      return uni.base64ToArrayBuffer(base64); // UniApp 提供的API
    }
  },
  mounted() {
    this.getGoodsItme();
  }
};
</script>

<style scoped>
@import '@/common/index.css';
.container{
  padding-top: 0;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 99;
}
.movable-area {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
}

.movable-view {
  width: 120rpx;
  height: 120rpx;
}
.floating-button-icon {
  margin-bottom: 26rpx;
}
.floating-button {
  width: 120rpx;
  height: 120rpx;
  background-color: #F65237;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}
.floating-button-img {
  height: 120rpx;
}
.floating-button-img .img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50% ;
}
.floating-button-active {
  background-color: #fff;
}

.additional-button {
  width: 60px;
  height: 60px;
  background-color: #F65237;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 100;
}
.section {
  display: flex;
  justify-content: center;
  margin-bottom: 40rpx;
}
.image-box {
  border: 1px solid rgba(187,187,187,1);
  border-radius: 10rpx;
  padding: 20rpx;
}
.image {
    width: 240rpx;
    height: 240rpx;
    border-radius: 10rpx;
}
.form {
  margin-bottom: 100rpx;
}

.form-item {
  height: 80rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}

.label {
  color: rgba(154,154,154,1);
  font-size: 30rpx;
  margin-bottom: 10rpx;
  margin-right: 10rpx;
  width: 160rpx;
}

.input {
  height: 66rpx;
  /* border: 1rpx solid #eee; */
  padding: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  font-size: 30rpx;
}
.bottom-btn {
  position: fixed;
  bottom: 40rpx;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.qa-btn{
  height: 80rpx;
  padding: 0 40rpx;
  background-color: #bebebe;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
.del-btn {
  height: 80rpx;
  padding: 0 40rpx;
  background-color: #bebebe;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
.update-btn {
  height: 80rpx;
  padding: 0 40rpx;
  background-color: #F65237;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}

</style>