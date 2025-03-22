<template>
  <view class="feedback-page">
    <!-- 手机信息部分 -->
    <view class="info-item">
      <text class="label">手机 *</text>
      <text class="value-phone">{{ phone }}</text>
      <!-- <navigator class="my-feedback" url="/pages/myFeedback/myFeedback"
        >我的反馈</navigator
      > -->
    </view>
    <!-- 需求详情部分 -->
    <!-- <view class="label">需求详情 *</view> -->
    <view class="info-item">
      <view class="label">需求详情 *</view>
      <textarea class="detail-input" v-model="detail"></textarea>
    </view>
    <!-- 上传图片部分 -->

    <view class="info-item">
      <view class="label">上传图片</view>
      <view class="image-upload" @click="chooseImage">
        <!-- 这里可以添加选择图片后的展示逻辑 -->
      </view>
    </view>
    <!-- 提示信息部分 -->
    <text class="tip-text"
      >您的需求就是我们的动力，我们会认真评估，感谢您的反馈！</text
    >
    <!-- 提交按钮部分 -->
    <button class="submit-btn" @click="submitFeedback">提交</button>
  </view>
</template>
<script>
// import commonHeader from "./components/commonHeader.vue";
// import { chooseImage, showToast } from "uni-app";

export default {
  components: {
    // commonHeader,
  },
  data() {
    return {
      phone: 15011499876,
      detail: "",
      images: [],
    };
  },
  methods: {
    chooseImage() {
      try {
        const res = chooseImage({
          count: 9, // 最多选择9张图片
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
        });
        images.value = images.value.concat(res.tempFilePaths);
      } catch (error) {
        console.error("选择图片失败", error);
      }
    },
    // 提交反馈
    submitFeedback() {
      if (!detail.value) {
        showToast({
          title: "请填写需求详情",
          icon: "none",
        });
        return;
      }
      // 这里可以编写提交反馈到服务器的逻辑，比如使用uni.request
      showToast({
        title: "提交成功",
        icon: "success",
      });
    },
  },
};
</script>
<style scoped>
.feedback-page {
  padding: 20rpx;
  width: 100%;
  background-color: #f5f5f5;
}
.info-item {
  background-color: #fff;
  padding: 20rpx;
  margin-bottom: 20rpx;
  /* display: flex; */
  /* align-items: center; */
}
.label {
  width: 160rpx;
  color: #333;
}
.value {
  flex: 1;
}
.value-phone {
  color: rgba(154, 154, 154, 1);
  font-size: 28rpx;
  text-align: left;
  font-family: PingFangSC-regular;
}
.my-feedback {
  color: #1aad19;
}
.detail-input {
  width: 100%;
  min-height: 200rpx;
  border: none;
  padding-top: 10rpx;
}
.image-upload {
  width: 100%;
  height: 150rpx;
  border: 1rpx dashed #ccc;
  border-radius: 10rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
}
.tip-text {
  text-align: center;
  color: #666;
  margin-bottom: 30rpx;
}
.submit-btn {
  width: 100%;
  padding: 15rpx;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 50rpx;
  font-size: 32rpx;
}
</style>



