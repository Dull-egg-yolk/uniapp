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
        <input class="input" v-model="form.Name" disabled />
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
        <text class="label">最高库存</text>
        <input class="input" v-model="form.MaxStock" disabled />
      </view>
      <!-- <view class="form-item">
        <text class="label">期初库存</text>
        <input class="input" v-model="form.initialStock" disabled />
      </view> -->
      <view class="form-item">
        <text class="label">备注</text>
        <input class="input" v-model="form.Note" disabled />
      </view>
    </view>

    <!-- 提交按钮 -->
     <view class="bottom-btn">
      <view class="qa-btn" @click="clickQrCode">
        <text>二维码</text>
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
            <text>{{ showAdditionalButtons ? '×' : '+' }}</text>
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
        @click="handleButtonClick(button.text)"
      >
        <text>{{ button.text }}</text>
      </view>
    </view>
    <img-popup 
      ref="imagePopup"
      title="二维码"
      :imageUrl="imageUrl"
      :imgContent="imgContent"
      @save="onSave"
      @close="onClose"
    />
    <inout-popup 
      ref="inoutPopup"
      :ID="parseInt(form.ID)"
      :Note="form.Note"
      :title=title
      @save="onSave"
      @close="onClose"
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
import { throttle } from '@/util/throttle';
import { getQrcode, getGoodsItme, deleteGoodsItme } from '@/api/work.js';
const app = getApp(); // 获取 App 实例

export default {
  data() {
    return {
      imgContent: '',
      title: '',
      imageUrl: '',
      screenWidth: '',
      buttonX: 140, // 悬浮按钮的 X 坐标
      buttonY: 140, // 悬浮按钮的 Y 坐标
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
  onLoad(option) {
    console.log(option, 'option');
    this.GoodsId = option.goosId
    this.headerTitle = option.id
    // setTimeout(() => {
    //   uni.$on('data-detail', (res) => {
    //     this.form = res.data
    //     this.getGoodsItme()
    //   });
    // }, 100);
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
    delectItme: throttle(async function() {
      await deleteGoodsItme(this.form).then(res => {
        console.log(res);
        if(res.ErrorMsg){
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        }else{
          uni.showToast({
            title: '删除成功',
            icon: "none"
          });
          uni.navigateBack({
            delta: 1
          });
        }
      })
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
    showPopup() {
      this.$refs.imagePopup.open()
    },
    onSave() {
      uni.showToast({ title: '执行保存操作', icon: 'none' })
    },
    onClose() {
      console.log('弹窗已关闭')
    },
    clickQrCode: throttle(async function() {
      const params = {
        WarehouseID: this.form.HotelID,
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
        
        this.$refs.imagePopup.open()

        // this.decodeAndShowImage(res.Data)
        // const decodedStr = this.decodeBase64(res.Data)
        // console.log(decodedStr, '解码后的字符串');
        // this.decodeAndShowImage(res.Data)
        
      }
    }, 500),
    // 悬浮按钮移动事件
    onMove(e) {
      this.buttonX = e.detail.x;
      this.buttonY = e.detail.y;
      // this.buttonX = Math.max(100, Math.min(this.screenWidth - 100, x));
    },

    // 切换新增按钮的显示和隐藏
    toggleButtons() {
      console.log(111111);
      
      if (this.showAdditionalButtons) {
        this.showAdditionalButtons = false; // 隐藏新增按钮
        this.isButtonDisabled = false; // 恢复中间按钮的拖动功能
      } else {
        const offset = 80; // 按钮之间的间距
        const screenWidth = uni.getWindowInfo().windowWidth;
        const screenHeight = uni.getWindowInfo().windowHeight;

        // 计算新增按钮的位置，确保不超出屏幕
        this.additionalButtons = [
          { text: '明细', x: this.buttonX, y: Math.max(0, this.buttonY - offset) },
          { text: '盘点', x: this.buttonX, y: Math.min(screenHeight - 60, this.buttonY + offset) },
          { text: '入库', x: Math.max(0, this.buttonX - offset), y: this.buttonY },
          { text: '出库', x: Math.min(screenWidth - 60, this.buttonX + offset), y: this.buttonY },
        ];
        this.showAdditionalButtons = true; // 显示新增按钮
        this.isButtonDisabled = true; // 禁用中间按钮的拖动功能
      }
    },
    // 处理动态按钮点击
    handleButtonClick(text) {
      
      // uni.showToast({
      //   title: `点击了：${text}`,
      //   icon: 'none',
      // });
      if(text === '明细'){
        uni.navigateTo({
          url: '/pages/inventoryDetails/index?id=' + this.form.ID
        });
      }
      if(text === '盘点'){
        this.title = text
        this.$refs.stockPopup.open()
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
@import '../../common/index.css';

.movable-area {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
}

.movable-view {
  width: 60px;
  height: 60px;
}

.floating-button {
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}

.floating-button-active {
  background-color: #ff3b30; /* 中间按钮激活时的背景色 */
  transform: rotate(45deg); /* 中间按钮激活时的旋转效果 */
}

.additional-button {
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
}
.section {
  display: flex;
  justify-content: center;
}
.image-box {
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  padding: 10rpx;
}
.image {
    width: 160rpx;
    height: 160rpx;
}
.form {
  margin-bottom: 100rpx;
}

.form-item {
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}

.label {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
  margin-right: 10rpx;
  width: 160rpx;
}

.input {
  height: 80rpx;
  /* border: 1rpx solid #eee; */
  padding: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
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
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}

</style>