<template>
  <view class="container">
    <!-- 上传照片 -->
    <view class="section">
      <view class="image-box">
        <image :src="form.imageUrl" class="image"></image>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <view class="form-item">
        <text class="label">物品名称 *</text>
        <input class="input" v-model="form.name" disabled />
      </view>
      <view class="form-item">
        <text class="label">单位 *</text>
        <input class="input" v-model="form.unit" disabled />
      </view>
      <view class="form-item">
        <text class="label">规格</text>
        <input class="input" v-model="form.specification" disabled />
      </view>
      <view class="form-item">
        <text class="label">单价</text>
        <input class="input" v-model="form.price" disabled />
      </view>
      <view class="form-item">
        <text class="label">分类</text>
        <input class="input" v-model="form.category" disabled />
      </view>
      <view class="form-item">
        <text class="label">供货商</text>
        <input class="input" v-model="form.supplier" disabled />
      </view>
      <view class="form-item">
        <text class="label">最低库存</text>
        <input class="input" v-model="form.minStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">最高库存</text>
        <input class="input" v-model="form.maxStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">期初库存</text>
        <input class="input" v-model="form.initialStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">备注</text>
        <input class="input" v-model="form.remark" disabled />
      </view>
    </view>

    <!-- 提交按钮 -->
     <view class="bottom-btn">
      <view class="qa-btn" @click="sq">
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
          <view
            class="floating-button"
            :class="{ 'floating-button-active': showAdditionalButtons }"
            @click="toggleButtons"
          >
            <text>{{ showAdditionalButtons ? '×' : '+' }}</text>
          </view>
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      buttonX: 140, // 悬浮按钮的 X 坐标
      buttonY: 140, // 悬浮按钮的 Y 坐标
      showAdditionalButtons: false, // 是否显示新增按钮
      isButtonDisabled: false, // 是否禁用中间按钮的拖动
      additionalButtons: [], // 动态生成的按钮
      headerTitle: '',
      // 上传的图片 URL
      imageUrl: "",
      // 表单数据
      form: {
        imageUrl: 'https://livuapp.com/logo2.png',
        name: "hh",
        unit: "1",
        specification: "1",
        price: "1",
        category: "1",
        supplier: "1",
        minStock: "1",
        maxStock: "1",
        initialStock: "1",
        remark: "1"
      },
      // 分类选项
      categories: ["默认分类", "分类1", "分类2", "分类3"]
    };
  },
  onLoad(option) {
    this.headerTitle = option
	},
  onReady(){
	 uni.setNavigationBarTitle({
        title: this.headerTitle.id
     });
  },
  methods: {
    // 悬浮按钮移动事件
    onMove(e) {
      this.buttonX = e.detail.x;
      this.buttonY = e.detail.y;
      this.buttonX = Math.max(100, Math.min(this.screenWidth - 100, x));
    },

    // 切换新增按钮的显示和隐藏
    toggleButtons() {
      if (this.showAdditionalButtons) {
        this.showAdditionalButtons = false; // 隐藏新增按钮
        this.isButtonDisabled = false; // 恢复中间按钮的拖动功能
      } else {
        const offset = 80; // 按钮之间的间距
        const screenWidth = uni.getSystemInfoSync().windowWidth;
        const screenHeight = uni.getSystemInfoSync().windowHeight;

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
      uni.showToast({
        title: `点击了：${text}`,
        icon: 'none',
      });
      this.showAdditionalButtons = false; // 点击后隐藏新增按钮
      this.isButtonDisabled = false; // 恢复中间按钮的拖动功能
    },
    // 选择图片
    chooseImage() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          this.imageUrl = res.tempFilePaths[0];
        }
      });
    },
    // 分类选择器变化事件
    onCategoryChange(e) {
      this.form.category = this.categories[e.detail.value];
    },
    // 提交表单
    submitForm() {
      // 表单校验
      if (!this.form.name) {
        uni.showToast({
          title: "请填写物品名称",
          icon: "none"
        });
        return;
      }
      if (!this.form.unit) {
        uni.showToast({
          title: "请填写单位",
          icon: "none"
        });
        return;
      }

      // 打印表单数据（实际开发中可以提交到服务器）
      console.log("表单数据：", this.form);
      console.log("上传的图片：", this.imageUrl);

      uni.showToast({
        title: "提交成功",
        icon: "success"
      });

      // 清空表单和图片
      this.form = {
        name: "",
        unit: "",
        specification: "",
        price: "",
        category: "",
        supplier: "",
        minStock: "",
        maxStock: "",
        initialStock: "",
        remark: ""
      };
      this.imageUrl = "";
    }
  }
};
</script>

<style scoped>
@import '../../common/index.css';

.movable-area {
  width: 100%;
  height: 100%;
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