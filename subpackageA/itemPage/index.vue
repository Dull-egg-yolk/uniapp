<template>
  <div style="width: 100%;">
    <view class="custom-navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="navbar-left" @click.stop="handleBack">
        <image src="../../static/img/back.svg" class="back-icon"></image>
      </view>
      <view class="navbar-title">物品列表</view>
    </view>
    <view class="container">
      <view class="section">
        <view class="filter-section filter-section-left">
          <picker class="picker picker-left" mode="selector" :range="classList" range-key="Name" @change="onCategoryChange">
            <view class="picker-selected">分类：{{ selectedCategory }}</view>
          </picker>
        </view>
        <view class="filter-section filter-section-right">
          <uni-icons :size="22" class="uni-icon-wrapper" color="#bbb" type="search" />
          <input class="picker in-picker" type="text" placeholder="请输入关键字" @input="onSearchInput" />
        </view>
      </view>
      <scroll-view class="item-list" scroll-y style="height: 800rpx;">
        <view class="item" v-for="(item, index) in categories" :key="index" @click.stop="navigateToDetail(item)">
            <view class="info">
              <text class="name">{{ item.Name }}</text>
              <text class="text">{{ item.Format + '/' + item.Uint }}</text>
            </view>
            <view class="actions">
                <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
            </view>
        </view>
      </scroll-view>
      <button class="addButton" @click.stop="addItem">物品录入</button>
      <uni-popup ref="popup" type="bottom" background-color="#fff">
        <view class="popup-content">
          <view class="popup-header">
            <text class="title">选择库房</text>
            <uni-icons type="close" size="20" @click.stop="closePopup"></uni-icons>
          </view>
          
          <scroll-view scroll-y class="warehouse-list">
            <view v-for="(item, index) in warehouseList" 
              :key="index" 
              class="warehouse-item"
              :class="{ 'selected': selectedWarehouse === item.Name }"
              @click="selectWarehouse(item)">
              <text>{{ item.Name }}</text>
              <uni-icons v-if="selectedWarehouse === item.Name" type="checkmarkempty" color="#007AFF" size="18"></uni-icons>
            </view>
          </scroll-view>
                  
          <button class="confirm-btn" @click.stop="confirmSelection">确定</button>
        </view>
      </uni-popup>
    </view>
  </div>
</template>

<script>
import { throttle } from '@/util/throttle';
import { getGoodsItme, getHotelClass, getWarehouse, upgateGoodsItem, addGoodsItem, deleteGoodsItem} from '@/api/work.js'
export default {
  data() {
    return {
      statusBarHeight: 0, // 状态栏高度
      menuButtonWidth: 0, // 菜单按钮宽度
      categories: [],
      selectedCategory: '全部',
      searchKeyword: '',
      items: [],
      classList: [],
      warehouseList: [],
      selectedWarehouse: '', // 当前选中的库房
      tempSelected: '',     // 临时选择（用于确认前）
      currentItem: {},     // 当前操作的物品
      selectedWarehouseId: null,
      GoodsClassID: null,
      
    };
  },
  computed: {
  },
  methods: {
    
    navigateToHome() {
      console.log('跳转到首页');
      
      // uni.reLaunch({
      //   url: '/pages/home/home'
      // })
      wx.switchTab({ url: '/pages/home/home',
      success() {
        console.log('跳转成功');
      },
      fail(err) {
        console.error('跳转失败:', err);
      }
       })
    },
    handleBack(){
      wx.switchTab({
        url: '/pages/home/home'
      });
    },
    // 显示弹出框
    showPopup() {
      this.tempSelected = this.selectedWarehouse;
      this.$refs.popup.open();
    },
    
    // 关闭弹出框
    closePopup() {
      this.$refs.popup.close();
    },
    
    // 选择库房
    selectWarehouse(item) {
      this.tempSelected = item.Name;
      this.selectedWarehouse = item.Name;
      this.selectedWarehouseId = item.ID
    },
    // 确认选择
    confirmSelection() {
      if (this.tempSelected === ''){
        uni.showToast({
          title: '请选择库房',
          icon: 'none'
        });
        return;
      }
      this.selectedWarehouse = this.tempSelected;
      this.closePopup();
   
      uni.navigateTo({
        url: `/subpackageA/itemDetail/index?id=${this.currentItem.Name}&goosId=${this.currentItem.ID}&warehouseId=${this.selectedWarehouseId}`,
        success: () => {
          this.selectedWarehouse =''
          // 跳转成功后触发事件（确保B页面已初始化）
          setTimeout(() => {
            uni.$emit('data-detail', { data: this.currentItem });
          }, 300); // 适当延迟
        }
      });
      
      // 也可以触发父组件事件
      this.$emit('selected', this.selectedWarehouse);
    },
    async getWarehouseList() {
      const res = await getWarehouse();
      console.log(res);
      this.warehouseList = res.Data;
    },
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    async getGoodsItmeList(params){
      uni.showLoading({
        title: '加载中...', // 提示文本
        mask: true        // 是否显示透明蒙层，防止触摸穿透
      });
      const res = await getGoodsItme(params)
      console.log(res);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.categories = res.Data
        console.log(this.categories, '000');
        setTimeout(() => {
          uni.hideLoading();
        }, 500)
        uni.hideLoading();
        if (this.categories === null || this.categories.length === 0) {
          uni.showToast({
            title: "暂无数据",
            icon: "none"
          });
        }
      }
      
    },
    navigateToDetail(item){
      this.currentItem = item;
      this.showPopup()
    },
    onCategoryChange(e) {
      this.selectedCategory = this.classList[e.detail.value].Name;
      this.GoodsClassID = this.classList[e.detail.value].ID
      const params = {
        GoodsClassID: this.classList[e.detail.value].ID,
        Search: this.searchKeyword
      }
      this.getGoodsItmeList(params)
    },
    onSearchInput(e) {
      console.log(e, 'value');
      
      this.searchKeyword = e.detail.value;
      const params = {
        GoodsClassID: this.GoodsClassID,
        Search: this.searchKeyword
      }
      this.getGoodsItmeList(params)
    },
    addItem: throttle(function() {
      console.log(11111);
      
      uni.navigateTo({ url: '/subpackageA/enter/index' })
    }, 500),
  },
  onLoad(){
    // 获取状态栏高度
    const systemInfo = uni.getWindowInfo();
    this.statusBarHeight = systemInfo.statusBarHeight || 0;
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.menuButtonWidth = menuButtonInfo.width;
    this.navBarHeight = menuButtonInfo.bottom + (menuButtonInfo.top - this.statusBarHeight);
  },
  mounted() {
    this.getGoodsItmeList()
    this.getHotelClassList()
    this.getWarehouseList()
  }
};
</script>
<style scoped>
@import '@/common/index.css';
.custom-navbar {
  display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 0 16px 0 0;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    z-index: 99999999;
}

.navbar-left {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  width: 80rpx;
  height: 66rpx;
}

.navbar-title {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-right: 60rpx;
  font-weight: 500;
}
.container {
  transition: transform 0.3s ease;
  will-change: transform;
  width: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
/* 选择框样式 */
.select-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 30rpx;
  border: 1rpx solid #e5e5e5;
  border-radius: 8rpx;
  background-color: #f9f9f9;
}

/* 弹出框内容样式 */
.popup-content {
  padding: 30rpx;
  border-radius: 20rpx 20rpx 0 0;
}
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
}

/* 库房列表样式 */
.warehouse-list {
  max-height: 600rpx;
  padding: 0 30rpx;
}
.warehouse-item {
  padding: 25rpx 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
  display: flex;
  flex-direction: column;
  position: relative;
}


.address {
  font-size: 24rpx;
  color: #999;
  margin-top: 10rpx;
}
.warehouse-item uni-icons {
  position: absolute;
  right: 20rpx;
  top: 50%;
  transform: translateY(-50%);
}

/* 确认按钮样式 */
.confirm-btn {
  margin-top: 30rpx;
  background-color: #F65237;
  color: white;
  border-radius: 50rpx;
}
.addButton {
  margin-top: 40rpx;
  width: 40%;
  height: 80rpx;
  background-color:#F65237;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
.filter-section {
  margin-bottom: 20rpx;
}
.filter-section-right {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10rpx;
  padding-left: 10rpx;
  width: 55%;
}
.filter-section-left {
  width: 40%;
}
.picker-selected {
  font-size: 32rpx;
}
.item-list {
  background-color: #fff;
  border-radius: 10rpx;
  flex: 1;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20rpx;
  border-bottom: 1px solid #e8e5e5;
  padding-bottom: 10rpx;
}
.item .info{
  display: flex;
  align-items: center;
}
.text {
  padding-left: 10rpx;
  color: #999;
  font-size: 28rpx;
}
.name {
  font-size: 36rpx;
  max-width: 400rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.picker {
  padding: 10rpx;
  background-color: #fff;
  border-radius: 10rpx;
  /* border: 1px solid #ccc; */
}
.picker-left {
  padding-left: 20rpx;
}
.in-picker {
  padding: 10rpx;
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  width: 100%;
  margin-top: 160rpx;
}
uni-button::after {
  content: none !important;
  width: 0 !important;
  height: 0 !important;
  border: none !important;
  background: none !important;
  box-shadow: none !important;
}
</style>