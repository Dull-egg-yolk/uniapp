<template>
  <view class="container">
    <view class="filter-section">
      <!-- <picker class="picker" mode="selector" :range="classList" range-key="Name" @change="onClassChange">
        <view class="date-picker">选择物品：{{ selectedClass }}</view>
      </picker> -->
      <picker mode="date" @change="onDateChange">
        <view class="date-picker">日期筛选：{{ selectedDate }}</view>
      </picker>
    </view>
    <view class="table-section">
      <uni-table border fixedHeader>
        <uni-tr>
          <uni-th>序号</uni-th>
          <uni-th>名称</uni-th>
          <uni-th>规格</uni-th>
          <uni-th>单位</uni-th>
          <uni-th>单价</uni-th>
          <uni-th>库存</uni-th>
          <uni-th>小计</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ index + 1 }}</uni-td>
          <uni-td>{{ item.Goods.Name }}</uni-td>
          <uni-td>{{ item.Goods.Format }}</uni-td>
          <uni-td>{{ item.Goods.Uint }}</uni-td>
          <uni-td>{{ item.Goods.Price }}</uni-td>
          <uni-td>{{ item.CurrentCount }}</uni-td>
          <uni-td>{{ item.TotalPrice }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <view class="email-section">
      <view class="pagination-section">
        <uni-pagination :total="totalPages" title="" prev-text="上一页" next-text="下一页" @change="handlePageChange" />
      </view>
      <view>
        <input type="text" v-model="recipient" placeholder="请输入接收邮箱" />
        <text></text>
      </view>
      <view class="email-button">
        <input type="text" v-model="subject" placeholder="主题：名称 + 月份 + 进出库明细表" />
        <text @click="sendEmail">发送</text>
      </view>
    </view>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { formatTime } from '@/util/day.js'
import { getGoodsItme, getReportGoodsCurrent, reportEmail } from '@/api/work.js';
export default {
  data() {
    return {
      selectedDate: '2024-12-01',
      tableData: [],
      classList: [],
      currentPage: 1,
      totalPages: 5,
      recipient: '',
      subject: '',
      selectedClass: '',
      query: {
        Goods: null,
        Size: 1,
        Page: 10,
        Date: '2024-12-01',
      }
    };
  },
  filters: {
    getData (val) {
      if (!val) return '';
      return formatTime(val);
    },
  },
  methods: {
    // 实时库存明细
    async getReportGoodsCurrent(){
    //  const  params = this.query
     await getReportGoodsCurrent(this.query).then(res=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else {
          this.tableData = res.Data;
          this.totalPages = parseInt(res.Total)
          // uni.navigateTo({
          //   url: `/pages/inventoryReport/index?id=${this.StockTakingRecordID}`
          // });   
        }
      })
    },
    async getHotelClassList(){
      const res = await getGoodsItme();
      this.classList = res.Data;
    },
    handlePageChange(e) {
      if (e.type === 'prev') {
        this.query.Page = e.current
        this.getStockOperate()
      } else if (e.type === 'next') {
        this.query.Page = e.current
        this.getStockOperate()
      }
    },
    onDateChange(e) {
      this.selectedDate = e.detail.value;
      this.query.Date = e.detail.value;
      this.getReportGoodsCurrent();
      // 这里可以添加根据日期筛选数据的逻辑
    },
    sendEmail: throttle( async function() {
      const params = {
        Emails: [
          this.recipient
        ],
        ReportType: 'CurrentStock',
        StockTakingRecordID: parseInt(this.StockTakingRecordID),
        Subject: this.subject
      };
      await reportEmail(params).then(res => {
        if (res.ErrorMsg) {
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        } else {
          uni.showToast({
            title: '邮件已发送',
            icon: 'none'
          });
          setTimeout(() => {
            uni.switchTab({ url: '/pages/home/home' })
          },200)
        }
      });
    }, 1000),
    onClassChange(e) {
      this.selectedClass = this.classList[e.detail.value].Name;
      this.query.Goods = this.classList[e.detail.value].ID;
      this.getReportGoodsCurrent();
    },
  },
  mounted(){
    this.getHotelClassList();
    this.getReportGoodsCurrent();
  },
};
</script>

<style>
@import '@/common/index.css';
.container {
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.filter-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.page-button {
  background-color: #fff;
  border-radius: 20rpx;
  color: #000;
  padding: 10rpx 20rpx;
}
.uni-picker {
  height: 46rpx;
}
.date-picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}
.pagination-section {
  background: #fff;
  border-radius: 0 0 10rpx 10rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}
.table-section {
  flex: 1;
  overflow: auto;
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
}
.email-section {
  height: 400rpx;
}
.email-section input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.email-button { 
  display: flex;
}
.email-button input {
  width: 70%;
  height: 46rpx;
}
.email-button text{
  height: 46rpx;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;
  border: 1rpx solid #ccc;
  text-align: center;
  line-height: 46rpx;
  margin-left: 20rpx;
  background-color: red;
  color: #fff;
}
/deep/.uni-table{
  min-width: auto !important;
}
/deep/.uni-table-th-content {
  font-size: 20rpx!important;
}
</style>