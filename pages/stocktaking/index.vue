<template>
  <view class="container">
    <!-- 盘点列表 -->
     <view>
      <text>新盘点</text>
      <text>选择物品</text>
      <text>盘点</text>
      <text>生成报表</text>
     </view>
    <view class="list">
      <view class="item" v-for="(item, index) in inventoryList" :key="index">
        <view class="info">
          <text class="name">盘点 <text class="icon">{{ item.title }}</text></text>
        </view>
        <view class="actions">
          <text class="edit">{{ item.date }}</text>
        </view>
      </view>
    </view>
    <!-- 点击新盘点 -->
    <view class="add-button" @click="navigateTo">
      <text>新盘点</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      inventoryList: [
        { title: '盘点中', date: '2024.12.01' },
        { title: '已完成', date: '2024.11.01' },
        { title: '已完成', date: '2024.10.01' },
        { title: '已完成', date: '2024.09.01' },
        { title: '已完成', date: '2024.08.01' }
      ]
    }
  },
  methods: {
    navigateTo(){
      uni.navigateTo({
				url: '../newStocktaking/index'
			});
    }
  }
}
</script>

<style scoped>
@import '../../common/index.css';
.list {
  margin-bottom: 100rpx;
}

.container {
  background-color: #f5f5f5;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}
.icon {
  margin-left: 5rpx;
  display: inline-block;
  background-color: #ff9500;
  border-radius: 10rpx;
  padding: 5rpx 10rpx;
  color: #fff;
  font-size: 18rpx;
}
</style>
