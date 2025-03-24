<template>
  <view class="container">
    <view class="title">
      <text class="tab">新盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">选择物品</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab active-tab">盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">生成报表</text>
     </view>
     <view class="stats">
      <view class="stat-item">
        <text class="stat-label">应盘</text>
        <text class="stat-value">5</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">已盘</text>
        <text class="stat-value">3</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">正确</text>
        <text class="stat-value">1</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">盘盈</text>
        <text class="stat-value">1</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">盘亏</text>
        <text class="stat-value">1</text>
      </view>
    </view>
    <view class="list">
      <view v-for="(item, index) in inventoryList" :key="index" class="list-item">
        <text class="item-name">{{ item.name }}</text>
        <text class="item-status">{{ item.status }}</text>
        <view class="item-detail">
          <view>
            <text>账面数量：{{ item.bookQuantity }}</text>
          </view>
          <view class="item-quantity">
            <text>盘点数量：</text>
            <input
              lable="盘点数量"
              v-model="item.actualQuantity"
              type="number"
              placeholder="盘点数量"
              class="input"
            />
          </view>
        </view>
      </view>
    </view>
    <view class="add-button" @click="nextStep">
      <text>盘点完成</text>
    </view>
  </view>
</template>

<script>
import { addStockTaking, updateStockTaking} from '@/api/work.js'
export default {
  components: {},
  data() {
    return {
      activeStep: 0,
      steps: ['选择物品', '盘点', '生成报表'],
      inventoryDate: '',
      departments: ['财务', '客房'],
      selectedDepartment: '财务',
      inventoryPerson: '',
      remarks: '',
      selectedDate: '',
      inventoryList: [
        {
          name: '可口可乐 330ml',
          status: '已盘点',
          bookQuantity: 10,
          actualQuantity: 10,
        },
        {
          name: '雪碧 330ml',
          status: '已盘点',
          bookQuantity: 10,
          actualQuantity: 9,
        }
      ]
    };
  },
  methods: {
    nextStep() {
      uni.navigateTo({
				url: '../changeItem/index'
			});
    },
    handleSubmit() {
      // 检查盘点数量是否填写完整
      const isComplete = this.inventoryList.every(
        (item) => item.actualQuantity !== null && item.actualQuantity !== ''
      );

      if (!isComplete) {
        uni.showToast({
          title: '请填写所有盘点数量',
          icon: 'none',
        });
        return;
      }

      // 提交盘点数据
      console.log('盘点数据:', this.inventoryList);
      uni.showToast({
        title: '提交成功',
        icon: 'success',
      });
    },
  }
};
</script>

<style scoped>
@import '../../common/index.css';
.container {
  background-color: #f5f5f5;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin: 40rpx 0 20rpx 0;
  background-color: #fff;
  border-radius: 20rpx;
  padding: 20rpx;
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
}

.stat-label {
  font-size: 28rpx;
  color: #666;
}

.stat-value {
  font-size: 32rpx;
  font-weight: bold;
}

.list {
  background-color: #fff;
  padding: 30rpx;
  border-radius: 16rpx;
}

.list-item {
  margin-bottom: 40rpx;
  padding-bottom: 10rpx;
  border-bottom: 1px solid #ccc;
}

.item-name {
  font-size: 32rpx;
  font-weight: bold;
}

.item-status {
  font-size: 28rpx;
  color: #07c160;
  margin-top: 8rpx;
}

.item-detail {
  margin-top: 16rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-quantity {
  display: flex;
  align-items: center;
}
.input {
  width: 100rpx;
}
.title {
  margin: 20rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-title {
  margin-right: 20rpx;
  width: 130rpx;
}
.tab {
  padding: 10rpx 20rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  background-color: #fff;
  color: #918d8d;
}
.active-tab {
  background-color: #fcca00;
  color: #000;
}
.step-content {
  margin-top: 20px;
}
.form-content {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
}
.form-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>