<template>
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
      <view class="item" v-for="(item, index) in categories" :key="index" @click="navigateToDetail(item)">
          <view class="info">
            <text class="name">{{ item.Name }}</text>
            <text class="text">{{ item.Format + '/' + item.Uint }}</text>
          </view>
          <view class="actions">
              <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
          </view>
      </view>
    </scroll-view>
    <button class="addButton" @click="addItem">新增</button>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { getGoodsItme, getHotelClass, upgateGoodsItem, addGoodsItem, deleteGoodsItem} from '@/api/work.js'
export default {
  data() {
    return {
      categories: [],
      selectedCategory: '全部',
      searchKeyword: '',
      items: [],
      classList: []
    };
  },
  computed: {
  },
  methods: {
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    async getGoodsItmeList(params){
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
        if (this.categories.length === 0) {
          uni.showToast({
            title: "暂无数据",
            icon: "none"
          });
        }
      }
      
    },
    navigateToDetail(item){
      uni.navigateTo({
        url: `/subpackageA/itemDetail/index?id=${item.Name}&goosId=${item.ID}`,
        success: () => {
          // 跳转成功后触发事件（确保B页面已初始化）
          setTimeout(() => {
            uni.$emit('data-detail', { data: item });
          }, 300); // 适当延迟
        }
      });
    },
    onCategoryChange(e) {
      this.selectedCategory = this.classList[e.detail.value].Name;
      const params = {
        GoodsClassID: this.classList[e.detail.value].ID
      }
      this.getGoodsItmeList(params)
    },
    onSearchInput(e) {
      console.log(e, 'value');
      
      this.searchKeyword = e.detail.value;
      const params = {
        Search: this.searchKeyword
      }
      this.getGoodsItmeList(params)
    },
    addItem: throttle(function() {
      console.log(11111);
      
      uni.navigateTo({ url: '/subpackageA/enter/index' })
    }, 500),
  },
  mounted() {
    this.getGoodsItmeList()
    this.getHotelClassList()
  },
  onUnload() {
    //#ifdef MP-WEIXIN
    uni.switchTab({
      url: '/pages/home/home'
    });
    //#endif
  },
};
</script>
<style scoped>
@import '@/common/index.css';
.container {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.addButton {
  margin-top: 40rpx;
  width: 40%;
  height: 80rpx;
  background-color: red;
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
.text {
  padding-left: 10rpx;
  color: #999;
  font-size: 28rpx;
}
.name {
  font-size: 36rpx;
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