<template>
  <view class="container">
    <!-- 上传照片 -->
    <view class="upload-section">
      <view class="upload-label">照片</view>
      <view class="upload-div">
        <view class="upload-box" @click="chooseImage">
        <image v-if="imageUrl" :src="imageUrl" class="uploaded-image"></image>
        <text v-else class="upload-text">点击上传照片</text>
      </view>
      </view>
    </view>

    <!-- 表单 -->
    <view class="form">
      <view class="form-item">
        <text class="label">物品名称 *</text>
        <input class="input" v-model="form.name" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">单位 *</text>
        <input class="input" v-model="form.unit" placeholder="个" />
      </view>
      <view class="form-item">
        <text class="label">规格</text>
        <input class="input" v-model="form.specification" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">单价</text>
        <input class="input" v-model="form.price" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">分类</text>
        <picker class="input" mode="selector" :range="categories" @change="onCategoryChange">
          <view>{{ form.category || '默认分类' }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">供货商</text>
        <input class="input" v-model="form.supplier" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">最低库存</text>
        <input class="input" v-model="form.minStock" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">最高库存</text>
        <input class="input" v-model="form.maxStock" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">期初库存</text>
        <input class="input" v-model="form.initialStock" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">备注</text>
        <input class="input" v-model="form.remark" placeholder="请输入" />
      </view>
    </view>

    <!-- 提交按钮 -->
    <view class="submit-button" @click="submitForm">
      <text>确定</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 上传的图片 URL
      imageUrl: "",
      // 表单数据
      form: {
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
      },
      // 分类选项
      categories: ["默认分类", "分类1", "分类2", "分类3"]
    };
  },
  methods: {
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
.container {
  padding: 20rpx;
  width: 100%;
}

.upload-section {
  margin-bottom: 40rpx;
}

.upload-label {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
  text-align: center;
}
.upload-div {
  width: 100%;
  display: flex;
  justify-content: center;
}
.upload-box {
  width: 200rpx;
  height: 200rpx;
  border: 1rpx dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.upload-text {
  font-size: 28rpx;
  color: #666;
}

.form {
  margin-bottom: 100rpx;
}

.form-item {
  margin-bottom: 40rpx;
}

.label {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.input {
  height: 80rpx;
  border: 1rpx solid #eee;
  padding: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
}

.submit-button {
  position: fixed;
  bottom: 40rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80rpx;
  background-color: #007aff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
</style>