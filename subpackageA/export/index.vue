<template>
  <view class="container">
    <!-- 分类列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in classList" :key="index" @click="navigateTo(item.key)">
        <view class="info">
          <text class="name">{{ item.name }}</text>
        </view>
        <view class="actions">
          <text class="edit"></text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      classList: [
        { name: '物品出入库明细',
          key: 'inventoryDetails'
         },
        { name: '实时库存明细',
          key: 'realTimeInventoryDetails'
         },
        { name: '盘点明细',
          key: 'stocktaking'
         },
        { name: '月度汇总',
          key: 'monthTimeInventoryDetails'
         },
      ],
      newCategory: {
        name: "",
        description: ""
      },
    }
  },
  methods: {
    navigateTo(page) {
      // 打开对应报表
      uni.navigateTo({
        url: `/subpackageA/${page}/index`
      })
    }
  }
}
</script>

<style scoped>
@import '@/common/index.css';
.list {
  margin-bottom: 100rpx;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}
/deep/.uni-popup__wrapper{
  width: 90%;
}
.popup-content {
  background-color: #fff;
  padding: 40rpx;
  border-radius: 20rpx;
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
  margin-top: 10rpx;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
}

.popup-button {
  flex: 1;
  margin: 0 10rpx;
  background-color: #f0f0f0;
  color: #333;
}
</style>