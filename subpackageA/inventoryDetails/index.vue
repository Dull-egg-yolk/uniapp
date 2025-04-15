<template>
  <view class="container">
    <view class="filter-section">
      <picker class="picker" mode="selector" :range="classList" range-key="Name" @change="onClassChange">
        <view class="date-picker">选择物品：{{ selectedClass }}</view>
      </picker>
      <view class="example-body">
        <uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" @change="onDateChange" />
      </view>
    </view>
    <view class="table-section">
      <uni-table border fixedHeader>
        <uni-tr>
          <uni-th>日期</uni-th>
          <uni-th>入库数</uni-th>
          <uni-th>出库数</uni-th>
          <uni-th>结存</uni-th>
          <uni-th>经手人</uni-th>
          <uni-th>备注</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ item.UpdatedAt | getData }}</uni-td>
          <uni-td>{{ item.InCount }}</uni-td>
          <uni-td>{{ item.OutCount }}</uni-td>
          <uni-td>{{ item.CurrentCount }}</uni-td>
          <uni-td>{{ item.User.Name }}</uni-td>
          <uni-td>{{ item.Note }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <view class="email-section">
      <view class="pagination-section">
        <uni-pagination :total="totalPages" title="" prev-text="上一页" next-text="下一页" @change="handlePageChange" />
      </view>
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
import { getGoodsItme, getStockOperate, reportEmail } from '@/api/work.js';
export default {
  data() {
    return {
      range: [],
      tableData: [],
      classList: [],
      currentPage: 1,
      totalPages: 0,
      recipient: '',
      subject: '',
      selectedClass: '全部',
      goodsID: null,
      query: {
        GoodsID: '',
        Size: 10,
        Page: 1,
        TimestampFrom: '',
        TimestampTo: '',
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
     sendEmail: throttle( async function() {
      const params = {
        Emails: this.recipient,
        ReportType: 'InOutDetail',
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
        }
      });
    }, 1000),
    // 出入库明细
    async getStockOperate(){
     const params = this.query
     await getStockOperate(params).then(res=>{
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
    onDateChange(e) {
      this.query.TimestampFrom = e[0];
      this.query.TimestampTo = e[1];
      this.getStockOperate();
      // 这里可以添加根据日期筛选数据的逻辑
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
    onClassChange(e) {
      this.selectedClass = this.classList[e.detail.value].Name;
      this.query.GoodsID = this.classList[e.detail.value].ID;
      this.getStockOperate();
    },
  },
  mounted(){
    this.getHotelClassList();
    this.getStockOperate();
  },
  async onLoad(option) {
    await this.getHotelClassList();
    console.log(this.classList, '9999');
    
    if (option.id) {
      this.query.GoodsID = option.id;
      this.goodsID = parseInt(option.id)
      this.selectedClass = this.classList[this.classList.findIndex( item => item.ID == option.id)].Name
      this.getStockOperate();
    }
  }
};
</script>

<style>
@import '@/common/index.css';
.container {
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.tips {
  font-size: 26rpx;
  color: #999;
  margin-top: 10px;
}
.example-body {
	background-color: #fff;
  width: 100%;
  border-radius: 10rpx;
  margin-top: 20rpx;
}
.example-body .title {
  margin-bottom: 10rpx;
}
.filter-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20rpx;
  background: #fff;
  padding: 20rpx;
  border-radius: 10rpx;
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
  overflow-y: auto;
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