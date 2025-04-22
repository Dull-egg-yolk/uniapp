<template>
  <view class="custom-tabbar">
    <!-- 底部 Tab 容器 -->
    <di class="tabbar">
      <!-- 循环渲染 Tab 项 -->
      <div 
        v-for="(item, index) in list" 
        :key="index" 
        class="tabbar-item"
        :id="'tabbar'+ index"
        :class="{ 'active': activeIndex === index }"
        @click="switchTab(index)"
      >
        <!-- 图标和文字 -->
        <img 
          class="icon" 
            :class="{ 'img-active': activeIndex === index }"
          :src="activeIndex === index ? item.selectedIconPath : item.iconPath" 
        />
        <text class="text">{{ item.text }}</text>
      </div>
      <view class="scan-btn" @click="scanQRCode">
       <image class='scan-icon' src="/static/img/erweima3.png"/>
      </view>
    </di>
    <!-- 适配 iPhone X 底部安全区域 -->
    <view class="safe-area"></view>
  </view>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: [
        {
          pagePath: "/pages/home/home",  // 工作台页面路径
          text: "工作台",
          iconPath: "/static/img/workbench-active.png",
          selectedIconPath: "/static/img/workbench.png"
        },
        {
          pagePath: "/pages/user/user",      // 个人中心页面路径
          text: "个人中心",
          iconPath: "/static/img/profile-active.png",
          selectedIconPath: "/static/img/profile.png"
        }
      ]
    };
  },
    methods: {
    //switchTab
    switchTab(index) {
      console.log(index, '0000');
      if (index === 0) {
        // 通知父组件更新状态
        this.$emit("parent1Event", index);
      } else if (index === 1) {
        // 通知父组件更新状态
        this.$emit("parent2Event", index);
      }
      uni.switchTab({
        url: this.list[index].pagePath
      });
      
    },
    scanQRCode(){
      wx.showLoading({
        title: '处理中...',
        mask: true
      });
      uni.scanCode({
      // onlyFromCamera: true, // 是否只能从相机扫码
      // scanType: ['qrCode'], // 扫码类型，qrCode为二维码
        success: (res) => {
          var path = res.path; 
          // 解析path获取scene参数
          console.log(path, 'path');
          
          var scene = this.getSceneFromPath(path);
          const sceneParams = decodeURIComponent(scene);
          console.log(sceneParams, 'sceneParams');
          const goods = this.getParamFromScene(sceneParams, 'g');
          const warehouse = this.getParamFromScene(sceneParams, 'w');
          const hotalId = this.getParamFromScene(sceneParams, 'h');
          const HotelId = uni.getStorageSync('hotalID');
          console.log(hotalId, HotelId , '00000');
          
          if (HotelId === hotalId) {
            wx.hideLoading();
            uni.redirectTo({
              url: '/subpackageA/itemDetail/index?warehouseId=' + warehouse + '&goosId=' + goods + '&hotalId=' + hotalId + '&showScan=' + true
            })
          } else {
            wx.hideLoading();
            uni.redirectTo({
              url: '/subpackageA/newItemDetail/index?warehouseId=' + warehouse + '&goosId=' + goods + '&hotalId=' + hotalId + '&showScan=' + true
            })
          }
          
        },
        fail: (err) => {
          console.error('扫码失败:', err);
          uni.showToast({
            title: '扫码失败',
            icon: 'none'
          });
        }
      });
    },
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
    getSceneFromPath(path) {
      // 检查path中是否包含scene参数
      var index = path.indexOf('scene=');
      if (index === -1) {
          return null;
      }
      // 提取scene参数的值
      var start = index + 'scene='.length;
      var end = path.indexOf('&', start);
      if (end === -1) {
          end = path.length;
      }
      return path.slice(start, end);
    },
    handleScanResult(result) {
      // uni.navigateTo({
      //   url: '/pages/itemDetail/index?id=' + result.WarehouseID + '&goosId=' + result.GoodsID
      // })
    }
  }
};
</script>

<style scoped>
.custom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.tabbar {
  display: flex;
  height: 120rpx;
  background: url("/static/img/tab1.png") no-repeat;
  background-size: 100% auto;
  /* border-top: 1rpx solid #f0f0f0; */
}
#tabbar0 {
  border-top-right-radius:20rpx;
}
.tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 60rpx;
  height: 60rpx;
  color:rgba(190,190,190,1);
  margin-top: 14rpx;
}

.text {
  font-size: 24rpx;
  margin-top: 4rpx;
  color: rgba(190,190,190,1);
}

.active .text {

  color: rgba(0,0,0,1);/* 选中状态颜色 */
}
.ctive .icon{
  color:rgba(79,79,79,1);
}


/* 安全区域适配 */
.safe-area {
  height: env(safe-area-inset-bottom);
  background: #ffffff;
}
.tabbar-item {
  transition: transform 0.2s;
}
.tabbar-item:active {
  transform: scale(0.9);
}
.scan-btn .scan-icon{
  position: absolute;
  width: 110rpx;
  height: 110rpx;
  top: -45rpx;
  left: 50%;
  margin-left: -55rpx;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 6px 0px rgba(255,0,0,0.65);
  border-radius: 50%;
}
.scan-btn{
  /* background-color: rgba(246,82,55,1);
  box-shadow: 0px 2px 6px 0px rgba(255,0,0,0.65); */
  /* border-radius: 50%; */
  /* position: absolute;
  width: 110rpx;
  height: 110rpx;
  top: -45rpx;
  left: 50%;
  margin-left: -55rpx;
  background-size: cover;
  background-position: center; */

}
</style>