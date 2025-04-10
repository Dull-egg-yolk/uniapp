<template>
  <view class="feedback-page">
    <!-- 手机信息部分 -->
    <view class="info-item">
      <view class="info-input">
        <text class="label">手机 <text class="icon">*</text></text>
        <input class="input" type="number" v-model="form.Telephone" placeholder="请输入" />
      </view>
      <view class="my-feedback" @click="MyFeedback">我的反馈</view>
    </view>
    <!-- 需求详情部分 -->
    <view class="info-textarea">
      <view class="label">需求详情<text class="icon">*</text></view>
      <textarea maxlength="200" class="detail-input" v-model="form.Demand"></textarea>
    </view>
    <!-- 上传图片部分 -->
     <view class="info-img">
      <view class="label">上传图片<text class="icon">*</text></view>
      <view class="upload-area">
        <!-- 已选图片预览 -->
        <view 
          v-for="(item, index) in imageList" 
          :key="index" 
          class="image-item"
        >
          <image 
            :src="item.tempPath" 
            mode="aspectFill" 
            class="preview-image"
            @click="previewImage(index)"
          ></image>
          <view class="delete-btn" @click.stop="deleteImage(index)">×</view>
          <view class="progress" v-if="item.progress < 100">
            <progress :percent="item.progress" stroke-width="4" />
          </view>
        </view>
        
        <!-- 添加图片按钮 -->
        <view 
          class="upload-btn" 
          @click="chooseImage" 
          v-if="imageList.length < maxCount"
        >
          <uni-icons type="plusempty" size="30" color="#999"></uni-icons>
          <text>添加图片</text>
          <text class="tip">(最多{{maxCount}}张)</text>
        </view>
      </view>
    </view>
        <!-- 提示信息部分 -->
        <text class="tip-text"
          >您的需求就是我们的动力，我们会认真评估，感谢您的反馈！</text
        >
      <!-- 上传按钮 -->
      <button 
      class="submit-btn"
        type="primary" 
        @click="uploadImages" 
        :disabled="uploading || imageList.length === 0"
        :loading="uploading"
      >
        提交
      </button>
  </view>
</template>
<script>
import { throttle } from '@/util/throttle';
import { getUserConfig, addAppFeedback } from "@/api/user";
export default {
  components: {
    // commonHeader,
  },
  data() {
    return {
      phone: 15011499876,
      detail: "",
      images: [],
      form: {
        Telephone: '',
        Demand: '',
        Images: [],
      },
      imageList: [],       // 图片列表 { tempPath, file, progress, key }
      maxCount: 9,         // 最大上传数量
      uploading: false,    // 上传状态
      uploadedCount: 0,    // 已上传计数
      qiniuToken: '',      // 七牛上传token
      qiniuDomain: 'https://staticweb.jiudianhui.com.cn', // 七牛域名
      compressQuality: 0.7,  // 压缩质量(0-1)
      HotelID: 0, // 酒店ID
    };
  },
  methods: {
    MyFeedback(){
      uni.navigateTo({
        url: '/subpackageB/myFeedback'
      })
    },
    // 选择图片并压缩
    async chooseImage() {
      try {
        const res = await uni.chooseImage({
          count: this.maxCount - this.imageList.length,
          sizeType: ['compressed'], // 压缩图
          sourceType: ['album', 'camera'],
        });
        console.log(res, '999999');
        
        // 压缩选中的图片
        const compressTasks = res[1].tempFilePaths.map(async (tempPath) => {
          const compressRes = await this.compressImage(tempPath);
          return {
            tempPath: compressRes.tempFilePath,
            file: compressRes.tempFile,
            progress: 0,
            key: ''
          };
        });
        
        const compressedImages = await Promise.all(compressTasks);
        this.imageList = [...this.imageList, ...compressedImages];
      } catch (error) {
        console.error('选择图片失败:', error);
        uni.showToast({ title: '选择图片失败', icon: 'none' });
      }
    },
    
    // 压缩图片
    compressImage(tempFilePath) {
      return new Promise((resolve, reject) => {
        wx.compressImage({
          src: tempFilePath,
          quality: this.compressQuality * 100, // 转换为百分比
          success: resolve,
          fail: reject
        });
      });
    },
        // 删除图片
        deleteImage(index) {
      uni.showModal({
        title: '提示',
        content: '确定删除这张图片吗？',
        success: (res) => {
          if (res.confirm) {
            this.imageList.splice(index, 1);
            this.uploadedCount = Math.max(0, this.uploadedCount - 1);
          }
        }
      });
    },
    
    // 预览图片
    previewImage(index) {
      uni.previewImage({
        current: index,
        urls: this.imageList.map(item => item.tempPath)
      });
    },
    
    // 获取七牛上传token
    async getToken() {
      try {
        const res = await getUserConfig();
        this.qiniuToken = res.Data.CdnT;
        return true;
      } catch (error) {
        uni.showToast({ title: '获取上传凭证失败', icon: 'none' });
        return false;
      }
    },
    
    // 上传图片到七牛云
    uploadImages: throttle( async function() {
      if (!this.qiniuToken && !(await this.getToken())) {
        return;
      }
      if(this.form.Telephone == '' || this.form.Demand == ''){
        uni.showToast({
          title: "请填写完整信息",
          icon: "none",
        });
        return;
      }
      
      this.uploading = true;
      this.uploadedCount = 0;
      
      try {
        await Promise.all(this.imageList.map((item, index) => {
          if (item.progress === 100) return Promise.resolve(); // 跳过已上传
          
          return this.uploadSingleImage(item, index);
        }));
        
        uni.showToast({ title: '上传完成' });
       const aaa = this.imageList.map(item => ({
          url: `${this.qiniuDomain}/${item.key}`
        }))
        this.form.Images = aaa.map(item => item.url);
        this.submitFeedback(this.form)
      } catch (error) {
        uni.showToast({ title: '上传出错', icon: 'none' });
      } finally {
        this.uploading = false;
      }
    }, 1000),
    
    // 上传单张图片
    uploadSingleImage(item, index) {
      return new Promise((resolve, reject) => {
        const fileName = `ims/dev/feedback/${this.HotelID}/${Date.now()}.${item.tempPath.split('.').pop()}`;
        const uploadTask = uni.uploadFile({
          url: 'https://up-z1.qiniup.com', // 七牛上传地址
          filePath: item.tempPath,
          name: 'file',
          formData: {
            token: this.qiniuToken,
            key: fileName,
            'x:isPublic': '1' // 设为公开
          },
          success: (res) => {
            const data = JSON.parse(res.data);
            this.imageList[index].key = data.key;
            this.imageList[index].progress = 100;
            this.uploadedCount++;
            resolve(data);
          },
          fail: (err) => {
            console.error(`图片${index}上传失败:`, err);
            reject(err);
          }
        });
        
        // 监听上传进度
        uploadTask.onProgressUpdate = (res) => {
          this.imageList[index].progress = res.progress;
          this.$forceUpdate(); // 确保进度条更新
        };
      });
    },
    // 提交反馈
    async submitFeedback(data) {
      await addAppFeedback(data).then(res => {
        if (res.ErrorMsg) {
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        } else {
          uni.showToast({ title: '提交成功', icon: 'success' });
          this.imageList = [];
          this.form.Demand = '';
          this.form.Telephone = '';
          setTimeout(() => {
            uni.navigateTo({
              url: '/subpackageB/myFeedback'
            })
          }, 200)
        }
      }
      )
    },
  },
  mounted(){
    this.HotelID = uni.getStorageSync('user_info').Hotel.ID;
  },
};
</script>
<style scoped>
.feedback-page {
  padding: 20rpx;
  width: 100%;
  background-color: #f5f5f5;
}
.info-update {
  margin-top: 20rpx;
  background-color: #fff;
  padding: 20rpx;
}
.info-img {
  background-color: #fff;
  margin: 20rpx 0;
  border-radius: 10rpx;
  padding: 20rpx;
}
.info-img .label {
  margin-bottom: 20rpx;
}
.image-picker {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30rpx;
}
.image-item, .add-btn {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx;
  position: relative;
  border-radius: 10rpx;
  overflow: hidden;
}
.image-item image {
  width: 100%;
  height: 100%;
}
.add-btn {
  border: 1px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80rpx;
  color: #ccc;
}
.delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 40rpx;
  height: 40rpx;
  background: red;
  color: white;
  border-radius: 0 0 0 10rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rpx;
}
.info-item {
  padding: 20rpx 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-input {
  background-color: #fff;
  display: flex;
  border-radius: 10rpx;
  padding: 20rpx;
}
.info-textarea {
  background-color: #fff;
  /* display: flex; */
  border-radius: 10rpx;
  padding: 20rpx;
}
.label {
  width: 150rpx;
  color: #333;
}
.icon {
  color: red;
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
  color: #000;
  border-radius: 10rpx;
  background-color: #fff;
  padding: 20rpx 10rpx;
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
  margin-top: 20rpx;
}
.upload-area {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30rpx;
}

.image-item {
  position: relative;
  width: 220rpx;
  height: 220rpx;
  margin-right: 15rpx;
  margin-bottom: 15rpx;
}

.preview-image {
  width: 100%;
  height: 100%;
  border-radius: 8rpx;
}

.delete-btn {
  position: absolute;
  right: -10rpx;
  top: -10rpx;
  width: 40rpx;
  height: 40rpx;
  background: #ff5a5f;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  z-index: 2;
}

.upload-btn {
  width: 220rpx;
  height: 220rpx;
  border: 1px dashed #ddd;
  border-radius: 8rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
}

.tip {
  font-size: 24rpx;
  margin-top: 10rpx;
}

.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10rpx;
  background: rgba(0,0,0,0.3);
}

progress {
  width: 100%;
}
</style>



