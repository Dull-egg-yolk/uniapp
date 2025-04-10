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
       <image class='scan-icon' src="/static/img/tabbar/erweima2.png"/>
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
          iconPath: "/static/img/tabbar/workbench-active.png",
          selectedIconPath: "/static/img/tabbar/workbench.png"
        },
        {
          pagePath: "/pages/user/user",      // 个人中心页面路径
          text: "个人中心",
          iconPath: "/static/img/tabbar/profile-active.png",
          selectedIconPath: "/static/img/tabbar/profile.png"
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
      uni.scanCode({
      onlyFromCamera: true, // 是否只能从相机扫码
      scanType: ['qrCode'], // 扫码类型，qrCode为二维码
        success: (res) => {
          console.log(res.result);
          const result = JSON.parse(res.result)
          uni.navigateTo({
            url: '/subpackageA/itemDetail/index?id=' + result.WarehouseID + '&goosId=' + result.GoodsID + '&showScan=' + true
          })
          // 处理扫码结果
          // this.handleScanResult(res.result);
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
  width: 74rpx;
  height: 74rpx;
  left: 50%;
  margin-left: -37rpx;
  display: flex;
  justify-content: center;
  top:15rpx
}
.scan-btn{
  background-image: url(/static/img/tabbar/erweima1.png);
   position: absolute;
  width: 110rpx;
  height: 110rpx;
  top:-26rpx;
  left: 50%;
  margin-left: -55rpx;
  background-size: cover;
  background-position: center;

}
</style>