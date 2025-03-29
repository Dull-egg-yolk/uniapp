<template>
  <view class="container">
    <div class="header">
      <view class="title">
        <text class="tab">新盘点</text>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <text class="tab">选择物品</text>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <text class="tab">盘点</text>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <text class="tab active-tab">生成报表</text>
      </view>
    </div>
    <view class="filter-section">
      <text>盘点人：洗发水</text>
      <picker mode="date" @change="onDateChange">
        <view class="date-picker">日期筛选：{{ selectedDate }}</view>
      </picker>
    </view>
    <uni-table>
      <uni-tr>
        <uni-th>日期</uni-th>
        <uni-th>入库数</uni-th>
        <uni-th>出库数</uni-th>
        <uni-th>结存</uni-th>
        <uni-th>经手人</uni-th>
        <uni-th>备注</uni-th>
      </uni-tr>
      <uni-tr v-for="(item, index) in tableData" :key="index">
        <uni-td>{{ item.date }}</uni-td>
        <uni-td>{{ item.inbound }}</uni-td>
        <uni-td>{{ item.outbound }}</uni-td>
        <uni-td>{{ item.balance }}</uni-td>
        <uni-td>{{ item.handler }}</uni-td>
        <uni-td>{{ item.remarks }}</uni-td>
      </uni-tr>
    </uni-table>
    <view class="pagination-section">
      <text @click="prevPage">上一页</text>
      <text>{{ currentPage }}/{{ totalPages }}</text>
      <text @click="nextPage">下一页</text>
    </view>
    <view class="email-section">
      <input type="text" v-model="recipient" placeholder="请输入接收邮箱" />
      <input type="text" v-model="subject" placeholder="主题：名称 + 月份 + 进出库明细表" />
      <button @click="sendEmail">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '2024-12-01',
      tableData: [
        { date: '2024-12-01', inbound: 100, outbound: 0, balance: 100, handler: '张三丰', remarks: '' },
        { date: '2024-12-02', inbound: 0, outbound: 10, balance: 90, handler: '郭靖', remarks: '' },
        { date: '2024-12-03', inbound: 0, outbound: 70, balance: 20, handler: '小龙女', remarks: '' },
        { date: '2024-12-04', inbound: 110, outbound: 0, balance: 130, handler: '王语嫣', remarks: '' }
      ],
      currentPage: 1,
      totalPages: 5,
      recipient: '',
      subject: ''
    };
  },
  methods: {
    onDateChange(e) {
      this.selectedDate = e.detail.value;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        // 这里可以添加分页查询数据的逻辑
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        // 这里可以添加分页查询数据的逻辑
      }
    },
    sendEmail() {
      // 这里可以添加发送邮件的逻辑
      uni.showToast({
        title: '邮件已发送',
        icon: 'none'
      });
    }
  }
};
</script>

<style>
@import '../../common/index.css';
.container {
  padding: 10px;
}
.date-picker {
  border: none !important;
}
.title {
  margin: 20rpx 0;
  display: flex;
  justify-content: space-between;
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
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.date-picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
.pagination-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.email-section {
  margin-top: 20px;
}
.email-section input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
/deep/.uni-table{
  min-width: auto !important;
}
</style>