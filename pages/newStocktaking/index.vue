<template>
  <view class="container">
    <view class="title">
      <text class="tab active-tab">新盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">选择物品</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">生成报表</text>
     </view>
     <view class="form-content">
        <!-- <view class="form-item">
          <text class="form-title">盘点日期</text>
          <picker mode="date" @change="onDateChange">
            <view class="date-picker">时间{{ selectedDate }}</view>
          </picker>
        </view>  -->
        <view class="form-item">
          <text class="form-title">盘点仓库</text>
          <picker mode="selector" :range="warehouseList" range-key="Name" range-value="ID" @change="onWarehouseChange">
            <view class="picker">{{ selectedWarehouse }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="form-title">盘点分类</text>
          <picker mode="selector" :range="classList" range-key="Name" @change="onClassChange">
            <view class="picker">{{ selectedClass }}</view>
          </picker>
        </view>
        <!-- <view class="form-item">
          <text class="form-title">盘点人</text>
          <input type="text" v-model="inventoryPerson" placeholder="请输入" />
        </view> -->
        <view class="form-item">
          <text class="form-title">备注</text>
          <input type="text" v-model="remarks" placeholder="请输入备注" />
        </view>
      </view>
    <view class="add-button" @click="nextStep">
      <text>确定</text>
    </view>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { addStockTaking, updateStockTaking, getWarehouse, getHotelClass } from '@/api/work.js'
export default {
  components: {},
  data() {
    return {
      activeStep: 0,
      warehouseList: [],
      classList: [],
      selectedWarehouse: '请选择仓库',
      selectedClass: '请选择分类',
      steps: ['选择物品', '盘点', '生成报表'],
      inventoryDate: '',
      departments: ['财务', '客房'],
      selectedDepartment: '财务',
      inventoryPerson: '',
      remarks: '',
      selectedDate: '',
      WarehouseID: null
    };
  },
  methods: {
    nextStep: throttle(async function() {
      const params = {
        WarehouseID: this.WarehouseID,
        Note: this.remarks
      }
      const res = await addStockTaking(params);
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
          uni.navigateTo({
            url: '../changeItem/index?id=' + res.Data.ID
          });
				}
    }, 1000),
    // 获取仓库
    async getWarehouseList() {
      const res = await getWarehouse();
      this.warehouseList = res.Data;
    },
    // 获取分类
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    onClassChange(e) {
      this.selectedClass = this.classList[e.detail.value].Name;
    },
    onWarehouseChange(e) {
      console.log(e, '88888');
      this.WarehouseID = this.warehouseList[e.detail.value].ID
      this.selectedWarehouse = this.warehouseList[e.detail.value].Name;
    }
  },
  mounted(){
    this.getHotelClassList();
    this.getWarehouseList();
  },
};
</script>

<style>
@import '../../common/index.css';
.container {
  background-color: #f5f5f5;
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
  /* border: 1px solid #ccc; */
  padding: 10px;
  border-radius: 5px;
}
</style>