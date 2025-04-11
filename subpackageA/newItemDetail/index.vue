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
        <text class="label">最低库存</text>
        <input class="input" v-model="form.MinStock" disabled />
      </view>
      <view class="form-item">
        <text class="label">库存</text>
        <input class="input" v-model="form.CurrentStock" disabled />
      </view>
    </view>
  </view>
</template>

<script>
import { getNoGoodsItem } from '@/api/work.js';
const app = getApp(); // 获取 App 实例

export default {
  data() {
    return {
      showScan:false,
      imgContent: '',
      title: '',
      imageUrl: '',
      headerTitle: '',
      GoodsId: null,
      HotelID: null,
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
      ceneParams: '',
      list: {},
      imagePath: '',
      // 分类选项
      categories: ["默认分类", "分类1", "分类2", "分类3"]
    };
  },
  components: {
  },
  onLoad(option) {
    const launchOptions = uni.getLaunchOptionsSync();
    const sceneParams = decodeURIComponent(option.scene);
    console.log(sceneParams, 'sceneParams');
    // const sceneParams = 'g=21,w=0,h=93'
    this.GoodsId = this.getParamFromScene(sceneParams, 'g');
    this.HotelID = this.getParamFromScene(sceneParams, 'h');
    console.log(this.GoodsId, 'this.GoodsId');
    console.log(this.HotelID, 'this.HotelID');
      // 微信扫一扫进入的场景值
      const WX_SCAN_SCENES = [1047, 1048, 1049];
      
      if (WX_SCAN_SCENES.includes(launchOptions.scene)) {
        console.log('来自微信主界面扫一扫');
        // 微信扫一扫进入会携带scene参数
        if (options.scene) {
          const sceneParams = decodeURIComponent(options.scene);
          this.handleWxScan(sceneParams);
        }
      } else {
        console.log('来自小程序内部或其他方式');
        // 处理小程序内扫码或其他入口
      }
	},
  onUnload() {
  },
  onReady(){
	  uni.setNavigationBarTitle({
        title: this.headerTitle
     });
  },
  methods: {
    getParamFromScene(scene, paramName) {
      console.log(scene, paramName, 'getParamsFromScene');
      
        const params = scene.split(',');
        for (let i = 0; i < params.length; i++) {
            const param = params[i].split('=');
            if (param[0] === paramName) {
                return param[1];
            }
        }
        return null;
    },
    async getNoGoodsItem(){
      console.log(this.GoodsId, 'this.GoodsId');
      console.log(this.HotelID, 'this.HotelID');
      const params = {
        GoodsID: this.GoodsId,
        HotelID: this.HotelID
      }
      await getNoGoodsItem(params).then(res => {
        console.log(res, 'res');
        this.form = res.Data
        this.headerTitle = res.Data.Name
        uni.setNavigationBarTitle({
            title: this.headerTitle
        });
      })
    },
  },
  mounted() {
    this.getNoGoodsItem();
    
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
.floating-button-img {
  height: 120rpx;
}
.floating-button-img .img {
  width: 120rpx;
  height: 120rpx;
}
.floating-button-active {
  background-color: #fff;
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
  z-index: 100;
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
    width: 200rpx;
    height: 200rpx;
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
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
.update-btn {
  height: 80rpx;
  padding: 0 40rpx;
  background-color: #1587e8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}

</style>