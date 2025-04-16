<template>
  <view class="container">
    <!-- 上传照片 -->
    <view class="upload-section">
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
        <text class="label">物品名称 <text class="span">*</text></text> 
        <input class="input" v-model="form.Name" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">单位 <text class="span">*</text></text>
        <input class="input" v-model="form.Uint" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">规格 <text class="span">*</text></text>
        <input class="input" v-model="form.Format" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">单价</text>
        <input class="input" type="digit" v-model="form.Price" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">分类</text>
        <picker class="picker" mode="selector" :range="classList" range-key="Name" @change="onClassChange">
          <view class="date-picker">{{ selectedClass }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">供货商</text>
        <input class="input" v-model="form.Suppliers" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">最低库存 <text class="span">*</text></text>
        <input class="input" type="number" v-model.number="form.MinStock" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">备货量</text>
        <input class="input" type="number" v-model.number="form.MaxStock" placeholder="请输入" />
      </view>
      <view class="form-item">
        <text class="label">备注</text>
        <input class="input" v-model="form.Note" placeholder="请输入" />
      </view>
    </view>

    <!-- 提交按钮 -->
    <view class="add-button" @click="submitForm">
      <text>确定</text>
    </view>
    <img-popup 
      ref="imagePopup"
      title="二维码"
      :imageUrl="scanUrl"
      :imgContent="imgContent"
      @save="onSave"
      @close="onClose"
    />
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { addGoodsItme, getHotelClass, getQrcode, updateGoodsItme } from "@/api/work";
import { getUserConfig } from "@/api/user";
import imgPopup from '@/components/img-popup/img-popup.vue';
export default {
  components: {
    imgPopup
  },
  data() {
    return {
      imgContent: '',
      scanUrl: '',
      title: '',
      DefaultWarehouseID: 0,
      GoodsID: 0,
      goodList: {},
      // 上传的图片 URL
      imageUrl: "",
      imagePath: '',
      uploadToken: '',
      classList: [],
      selectedClass: '请选择',
      isUpdate: false,
      // 表单数据
      form: {
        Name: "",
        Uint: "",
        Format: "",
        Price: "",
        ClassID: "",
        Suppliers: "",
        MinStock: 0,
        MaxStock: 0,
        Image: "",
        Note: ""
      },
      HotelID: 0,
      qiniuDomain: 'https://staticweb.jiudianhui.com.cn', // 七牛域名
      // 分类选项
      categories: ["默认分类", "分类1", "分类2", "分类3"]
    };
  },
  methods: {
    onClose(){
      // uni.switchTab({
      //   url: '/pages/home/home'
      // });
    },
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    async getUserConfig(){
      const res = await getUserConfig().then(res=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else {
          this.uploadToken = res.Data.CdnT; 
        }
      })
    },
    // 选择图片
   chooseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
          success: async (res) => {
          this.imagePath = res.tempFilePaths[0]
          console.log(this.imagePath, '1');
          
          // 压缩图片
          const compressResult = await new Promise((resolve) => {
             wx.compressImage({
              src: this.imagePath,
              quality: 80, // 压缩质量，范围0～100
              success: resolve,
              fail: (err) => {
                console.log('压缩失败', err);
                resolve({ tempFilePath: this.imagePath }); // 压缩失败使用原图
              }
            });
          });
          setTimeout(() => {
            this.uploadImage(compressResult.tempFilePath, this.uploadToken)
          },100)
        }
      })
    },
    // 上传图片到七牛
    uploadImage(filePath, token) {
      return new Promise((resolve, reject) => {
          const fileName = `ims/dev/goods/${this.HotelID}/${Date.now()}.${filePath.split('.').pop()}`;
          uni.uploadFile({
            url: 'https://up-z1.qiniup.com', // 根据区域修改s
            filePath: filePath,
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data' // 确保设置正确的Content-Type
            },
            formData: {
              token: token,
              key: fileName // 生成唯一文件名
            },
            success: (res) => {
              if (res.statusCode === 200) {
                const data = JSON.parse(res.data)
                this.form.Image = `${this.qiniuDomain}/${data.key}`
                this.imageUrl = `${this.qiniuDomain}/${data.key}`
                console.log(this.form.Image, '0');
                resolve(data)
              } else {
                reject(new Error('上传失败'))
              }
            },
            fail: (err) => {
              reject(err)
            }
          })
        })
    },
    // 提交表单
    submitForm: throttle(async function() {
      this.form.Price = Number(this.form.Price) || 0;
      this.form.MinStock = Number(this.form.MinStock) || 0;
      this.form.MaxStock = Number(this.form.MaxStock) || 0;
      console.log((this.selectedClass, '请选择'))
      
      if (this.selectedClass === '请选择') {
        this.form.ClassID = 0
      } else {
        this.form.ClassID = this.classList.find(item => item.Name === this.selectedClass).ID;
      }
      // 表单校验
      if (!this.form.Name) {
        uni.showToast({
          title: "请填写物品名称",
          icon: "none"
        });
        return;
      }
      if (!this.form.Uint) {
        uni.showToast({
          title: "请填写单位",
          icon: "none"
        });
        return;
      }
      if (!this.form.Format) {
        uni.showToast({
          title: "请填写物品规格",
          icon: "none"
        });
        return;
      }
      if (typeof this.form.MinStock !== 'number') {
        uni.showToast({
          title: "请填写物品最小库存",
          icon: "none"
        });
        return;
      }
      if (!this.form.Image) {
        uni.showToast({
          title: "请上传物品图片",
          icon: "none"
        });
        return;
      }
      if (this.isUpdate){
        await updateGoodsItme(this.form).then(res=>{
          if (res.ErrorMsg) {
            uni.showToast({
              title: res.ErrorMsg,
              icon: "none"
            });
          } else{
            this.DefaultWarehouseID = res.Data.DefaultWarehouseID
            this.GoodsID = res.Data.ID
            this.goodList = res.Data
            uni.showToast({
              title: "提交成功",
              icon: "success"
            });
            this.form = {
              Name: "",
              Uint: "",
              Format: "",
              Price: "",
              ClassID: "",
              Suppliers: "",
              MinStock: "",
              MaxStock: "",
              Image: "",
              Note: ""
            };
            this.imageUrl = "";
            // 
            uni.navigateTo({
              url: '/subpackageA/itemPage/index'
            })
          }
        })
      } else {
        await addGoodsItme(this.form).then(res=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else{
           this.DefaultWarehouseID = res.Data.DefaultWarehouseID
           this.GoodsID = res.Data.ID
           this.goodList = res.Data
          uni.showToast({
            title: "提交成功",
            icon: "success"
          });
          this.form = {
            Name: "",
            Uint: "",
            Format: "",
            Price: "",
            ClassID: "",
            Suppliers: "",
            MinStock: "",
            MaxStock: "",
            Image: "",
            Note: ""
          };
          this.imageUrl = "";
          this.getScan()
          }
      })
      }
    }, 500),
    onClassChange(e) {
      this.selectedClass = this.classList[e.detail.value].Name;
    },
   async getScan(){
      const params = {
        WarehouseID: this.DefaultWarehouseID,
        GoodsID: this.GoodsID
      }
      const res = await getQrcode(params)
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.scanUrl = res.Data
        this.imgContent = this.goodList.Name + ' ' + this.goodList.Format + '/' + this.goodList.Uint
        
        this.$refs.imagePopup.open()

        // this.decodeAndShowImage(res.Data)
        // const decodedStr = this.decodeBase64(res.Data)
        // console.log(decodedStr, '解码后的字符串');
        // this.decodeAndShowImage(res.Data)
        
      }
    }
  },
  mounted(){
    this.getUserConfig();
    this.getHotelClassList();
    this.HotelID = uni.getStorageSync('user_info').Hotel.ID;
  },
  onUnload() {
    //#ifdef MP-WEIXIN
    uni.switchTab({
      url: '/pages/home/home'
    });
    //#endif
  },
  async onLoad(options) {
    console.log(options, 'options');
    if (JSON.stringify(options) === '{}') {
        return; // 如果为空,返回false
    }
    await this.getHotelClassList();
    const data = JSON.parse(decodeURIComponent(options.form))
    if (data) {
      this.isUpdate = true
      console.log(data, 'options.form');
      this.form = data;
      this.imageUrl = data.Image;
      this.selectedClass = this.classList.find(item => item.ID === data.ClassID).Name;
    }
  }
};
</script>

<style scoped>
@import '@/common/index.css';

.upload-section {
  margin-bottom: 40rpx;
}
.date-picker {
  color: grey;
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
  width: 240rpx;
  height: 240rpx;
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
  margin-bottom: 10rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}

.label {
  font-size: 28rpx;
  font-weight: 500;
  margin-bottom: 10rpx;
  margin-right: 10rpx;
  width: 150rpx;
}
.label .span {
  color: #F65237;
  margin-left: 10rpx;
}

.input {
  height: 60rpx;
  padding: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  color: #3e3c3c;
  font-size: 28rpx;
}
.picker {
  height: 60rpx;
  padding: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
}
.date-picker {
  color: #3e3c3c;;
}


</style>