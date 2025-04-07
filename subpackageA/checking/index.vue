<template>
  <view class="container">
    <div class="header">
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
          <text class="stat-value">{{ summaryList.Total }}</text>
        </view>
        <view class="stat-item">
          <text class="stat-label">已盘</text>
          <text class="stat-value">{{ summaryList.Already }}</text>
        </view>
        <view class="stat-item">
          <text class="stat-label">正确</text>
          <text class="stat-value">{{ summaryList.Correct }}</text>
        </view>
        <view class="stat-item">
          <text class="stat-label">盘盈</text>
          <text class="stat-value">{{ summaryList.More }}</text>
        </view>
        <view class="stat-item">
          <text class="stat-label">盘亏</text>
          <text class="stat-value">{{ summaryList.Loss }}</text>
        </view>
      </view>
    </div>
    <view class="list" v-if="inventoryList.length > 0">
      <view v-for="(item, index) in inventoryList" :key="index" class="list-item">
        <text class="item-name">{{ item.Goods.Name}}</text>
        <text>{{ ' ' + item.Goods.Format }}</text>
        <text class="item-status">{{ statusList[item.Status] }}</text>
        <view class="item-detail">
          <view>
            <text>账面数量：{{ item.Expect }}</text>
          </view>
          <view class="item-quantity">
            <text>盘点数量：</text>
            <input
              :disabled ="item.Status !== 'InProgress'"
              lable="盘点数量"
              v-model="item.Current"
              type="number"
              placeholder="盘点数"
              class="input"
              @input="handleInput(item, index, $event)"
            />
          </view>
        </view>
      </view>
    </view>
    <view class="sub-button" @click="nextStep">
      <text>盘点完成</text>
    </view>
    <tips-popup
      ref="tipsPopup"
      title="盘点提示"
      @print="onPrint"
      @save="onSave"
    />
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import TipsPopup from '@/components/tips-popup/tips-popup.vue'
import { updateStockTaking, updateStockTakingString, getStockTakingStringSummary, getStockTakingString} from '@/api/work.js'
import { debounce } from '../../util/debounce'
export default {
  components: {
    TipsPopup
  },
  data() {
    return {
      StockTakingRecordID: '',
      inventoryList: [],
      statusList:  {
        'InProgress': '未盘点',
        'Completed': '已盘点',
        'Discard': '已审核'
      },
      summaryList: {
        Already: 0,
        Correct: 0,
        Loss: 0,
        Total: 0,
        Wrong: 0
      }
    };
  },
  onLoad(options) {
    this.StockTakingRecordID = options.id;
  },
  methods: {
    onSave() {
      this.updateStockTaking();
    },
    // 盘点完成
    async updateStockTaking(){
      const params = {
          ID: Number(this.StockTakingRecordID),
          Status: 'Completed'
        };
      const res = await updateStockTaking(params)
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
			} else {
        uni.navigateTo({
          url: `/subpackageA/inventoryReport/index?id=${this.StockTakingRecordID}`
        });   
			}
    },
    // 单个输入盘点数量
    handleInput: debounce(function(item, index, e) {
      const value = e.detail.value;
      this.$set(this.inventoryList, index, { 
        ...this.inventoryList[index], 
        value,
        Status: 'Completed'
      });
      
      this.updateStockTakingString(item, value);
    }, 500),
    // 盘点完成按钮
    nextStep: throttle(function() {
      // 校验 是否都盘点完成
      const allFilled = this.inventoryList.every(item => item.Current !== '' && item.Current !== 0);
      if(allFilled){
        this.$refs.tipsPopup.open()
      } else {
        uni.showToast({ title: '你有未完成的盘点请盘点', icon: 'none' });
      }
    }, 1000),
    // 单个填写 更新盘点
    async updateStockTakingString(data, value){
      const params = {
        Current: parseInt(value), 
        Status: 'Completed',
        ID: data.ID,
        StockTakingRecordID: data.StockTakingRecordID
      }
      const res = await updateStockTakingString(params)
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
			} else {
          
			}
    },
    // 获取头部数据
    async getStockTakingStringSummary(){
      const params = {
        StockTakingRecordID: this.StockTakingRecordID
      }
      const res = await getStockTakingStringSummary(params)
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
			} else {
          this.summaryList = res.Data;
			}
    },
    // 获取盘点列表
    async getStockTakingString(){
      const params = {
        StockTakingRecordID: this.StockTakingRecordID
      }
      const res = await getStockTakingString(params)
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
			} else {
        this.inventoryList = res.Data
			}
    }
  },
  mounted(){
    if(this.StockTakingRecordID) {
      this.getStockTakingStringSummary();
      this.getStockTakingString();
    }
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
.sub-button {
  width: 40%;
  height: 40px;
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20rpx auto;
}
.header {
  height: 260rpx;
}
.stats {
  display: flex;
  justify-content: space-between;
  margin: 10rpx 0 20rpx 0;
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
  flex: 1;
  overflow-y: auto;
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
  color: #fff;
  background-color: #f97762;
  margin-top: 8rpx;
  border-radius: 10rpx;
  padding: 5rpx 10rpx;
  margin-left: 8rpx;
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