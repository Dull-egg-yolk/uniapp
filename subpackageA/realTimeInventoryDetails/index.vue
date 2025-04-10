<template>
  <view class="container">
    <view class="filter-section">
      <view class="date-picker">日期：{{ selectedDate | getStamp }}</view>
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
      <!-- <view>
        <input type="text" v-model="recipient" placeholder="请输入接收邮箱" />
        <text></text>
      </view> -->
      <view class="email-button">
        <input type="text" v-model="recipient" placeholder="请输入接收邮箱" />
        <text @click="sendEmail">发送</text>
      </view>
      <view class="tips"><uni-icons type="info" size="16" color="#999"></uni-icons>发件邮箱为 ims@jiudianhui.com.cn，请添加至白名单</view>
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
      selectedDate: new Date().getTime() + 8 * 60 * 60 * 1000,
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
    getStamp(selectedDate){
      // 获取当前北京时间的时间戳（单位为毫秒）
      var beijingTime = new Date(selectedDate).toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 19);
      return beijingTime;
      }
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
        Emails: this.recipient,
        ReportType: 'CurrentStock'
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
        }
      });
    }, 500),
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
  padding: 10px;
  font-size: 14px;
}
.tips {
  font-size: 26rpx;
  color: #999;
  margin-top: 10px;
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