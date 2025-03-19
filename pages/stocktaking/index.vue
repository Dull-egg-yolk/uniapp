<template>
  <view class="container">
    <uni-steps :active="activeStep" :options="steps" />
    <view v-if="activeStep === 0" class="step-content">
      <text>新盘点</text>
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
      <!-- 这里可以添加选择物品的组件或表单 -->
    </view>
    <view v-if="activeStep === 1" class="step-content">
      <text>盘点</text>
      <!-- 这里可以添加盘点的组件或表单 -->
    </view>
    <view v-if="activeStep === 2" class="step-content">
      <text>生成报表</text>
      <!-- 这里可以添加生成报表的组件或表单 -->
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
.container {
  padding: 20px;
  width: 100%;
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
.add-button {
  position: fixed;
  bottom: 40rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80rpx;
  background-color: #007aff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
}
</style>