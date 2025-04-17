<template>
  <view class="container">
    <view class="filter-section">
      <!-- <picker mode="date" @change="onDateChange">
        <view class="date-picker">日期筛选：{{ selectedDate }}</view>
      </picker> -->
      
      <view class="example-body">
        <view class="title">日期筛选：</view>
        <uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" @change="onDateChange" />
      </view>
    </view>
    <view class="table-section">
      <uni-table border fixedHeader>
        <uni-tr>
          <uni-th>序号</uni-th>
          <uni-th>名称</uni-th>
          <uni-th>规格</uni-th>
          <uni-th>单位</uni-th>
          <uni-th>单价</uni-th>
          <uni-th>出库数量</uni-th>
          <uni-th>小计</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ index + 1 }}</uni-td>
          <uni-td>{{ item.Goods.Name }}</uni-td>
          <uni-td>{{ item.Goods.Format }}</uni-td>
          <uni-td>{{ item.Goods.Uint }}</uni-td>
          <uni-td>{{ item.Goods.Price }}</uni-td>
          <uni-td>{{ item.ChangedCount }}</uni-td>
          <uni-td>{{ item.TotalPrice }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <view class="email-section">
      <view class="pagination-section">
        <uni-pagination :total="totalPages" title="" prev-text="上一页" next-text="下一页" @change="handlePageChange" />
      </view>
      <view class="email-button">
        <input type="text" v-model="recipient" placeholder="请输入接收邮箱" />
        <button @click="sendEmail" :class="{'gray-button': isDisabled}" 
        :disabled="isDisabled">发送</button>
      </view>
      <view class="tips"><uni-icons type="info" size="16" color="#999"></uni-icons>发件邮箱为 ims@jiudianhui.com.cn，请添加至白名单</view>
    </view>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { formatTime } from '@/util/day.js'
import { getGoodsItme, getReportConsumeMonth, reportEmail } from '@/api/work.js';
export default {
  data() {
    return {
      selectedDate: '2024-12-01',
      tableData: [],
      classList: [],
      range: [],
      currentPage: 1,
      totalPages: 5,
      recipient: '',
      subject: '',
      selectedClass: '',
      isDisabled: false,
      query: {
        Page: 1,
        Size: 10,
        TimestampFrom: '',
        TimestampTo: '',
      },
      timer: null
    };
  },
  filters: {
    getData (val) {
      if (!val) return '';
      return formatTime(val);
    },
  },
  methods: {
    handlePageChange(e) {
      if (e.type === 'prev') {
        this.query.Page = e.current
        this.getReportConsumeMonth()
      } else if (e.type === 'next') {
        this.query.Page = e.current
        this.getReportConsumeMonth()
      }
    },
    sendEmail: throttle( async function() {
      if (this.recipient === '') {
        uni.showToast({
          title: '请输入接收邮箱',
          icon: 'none'
        });
        return;
      }
      const params = {
        Emails: this.recipient,
        ReportType: 'MonthConsume',
        TimestampFrom: this.query.TimestampFrom,
        TimestampTo: this.query.TimestampTo,
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
          this.isDisabled = true;
          this.timer = setTimeout(() => {
            this.isDisabled = false;
          },1000*60)
        }
      });
    }, 0),
    // 月度明细
    async getReportConsumeMonth(){
      if (this.query.TimestampFrom === '' || this.query.TimestampTo === ''){
        return;
      }
     await getReportConsumeMonth(this.query).then(res=>{
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
    onDateChange(e){
      this.query.TimestampFrom = e[0];
      this.query.TimestampTo = e[1];
      this.getReportConsumeMonth();
			console.log('maskClick事件:', e);
		}
  },
  mounted(){
    this.getHotelClassList();
    this.getReportConsumeMonth();
  },
  beforeDestroy() {
    // 组件销毁时清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style>
@import '@/common/index.css';
.container {
  padding: 20rpx;
  background: #f5f5f5;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.gray-button {
  background-color: #ccc !important;
  color: #999 !important;
}
.example-body {
	background-color: #fff;
	padding: 10px;
  width: 100%;
  border-radius: 10rpx;
}
.example-body .title {
  margin-bottom: 10rpx;
}
.filter-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
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
.tips {
  font-size: 26rpx;
  color: #999;
  margin-top: 10px;
}
.table-section {
  flex: 1;
  overflow: auto;
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
  overflow-x: hidden;
}
.email-section {
  height: 320rpx;
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
.email-button button{
  height: 90rpx;
  padding: 20rpx 30rpx;
  border-radius: 20rpx;
  border: 1rpx solid #ccc;
  text-align: center;
  line-height: 46rpx;
  margin-left: 20rpx;
  background-color: #F65237;
  color: #fff;
}
wx-button:after {
  content: none;
  border: none;
}
/deep/.uni-table{
  min-width: auto !important;
}
/deep/.uni-table-th-content {
  font-size: 20rpx!important;
}
</style>