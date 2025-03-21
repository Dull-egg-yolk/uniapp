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
        <view class="form-item">
          <text>盘点日期</text>
          <input type="date" v-model="inventoryDate" />
        </view>
        <view class="form-item">
          <text>盘点部门</text>
          <picker mode="selector" :range="departments" @change="onDepartmentChange">
            <view class="picker">{{ selectedDepartment }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text>盘点人</text>
          <input type="text" v-model="inventoryPerson" placeholder="请输入" />
        </view>
        <view class="form-item">
          <text>备注</text>
          <input type="text" v-model="remarks" placeholder="请输入备注" />
        </view>
      </view>
    <view class="add-button" @click="nextStep">
      <text>下一步</text>
    </view>
  </view>
</template>

<script>

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
      remarks: ''
    };
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.steps.length - 1) {
        this.activeStep++;
      }
    },
    onDepartmentChange(e) {
      this.selectedDepartment = this.departments[e.detail.value];
    }
  }
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
}
.form-item {
  margin-bottom: 15px;
}
.picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>