<template>
  <view class="container">
    <!-- <view class="custom-nav">
      <view @click="handleBack">></view>
      <view>当前页面</view>
    </view> -->
    <div class="header">
      <view class="title">
        <view class="tab">
          <uni-icons :size="16" class="uni-icon-wrapper uni-icon-left" color="#F65237" type="checkbox" />
          新盘点</view>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <view class="tab">
          <uni-icons :size="16" class="uni-icon-wrapper uni-icon-left" color="#F65237" type="checkbox" />
          选择物品</view>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <view class="tab">
          <uni-icons :size="16" class="uni-icon-wrapper uni-icon-left" color="#F65237" type="checkbox" />
          盘点</view>
        <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        <text class="tab active-tab">生成报表</text>
      </view>
      <view class="filter-section">
        <text>盘点人：{{ tableData[0].User.Name }}</text>
        <text>盘点日期：{{ tableData[0].UpdatedAt | getData }}</text>
      </view>
    </div>
    <view class="table-section">
      <uni-table border>
        <uni-tr>
          <uni-th>序号</uni-th>
          <uni-th>名称</uni-th>
          <uni-th>规格</uni-th>
          <uni-th>单位</uni-th>
          <uni-th>单价</uni-th>
          <uni-th>账面库存</uni-th>
          <uni-th>盘点库存</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ index + 1 }}</uni-td>
          <uni-td>{{ item.Goods.Name }}</uni-td>
          <uni-td>{{ item.Goods.Format }}</uni-td>
          <uni-td>{{ item.Goods.Uint }}</uni-td>
          <uni-td>{{ item.Goods.Price }}</uni-td>
          <uni-td>{{ item.Expect }}</uni-td>
          <uni-td>{{ item.Current }}</uni-td>
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
import { getStockTakingString, reportEmail } from '@/api/work.js'
export default {
  data() {
    return {
      selectedDate: '2024-12-01',
      tableData: [
          {
          "ID": 12,
          "CreatedAt": "2025-03-30T15:34:02.883+08:00",
          "UpdatedAt": "2025-03-30T15:34:12.021+08:00",
          "DeletedAt": null,
          "StockTakingRecordID": 51,
          "GoodsID": 1,
          "Goods": {
              "ID": 1,
              "CreatedAt": "2025-03-23T23:56:44.117+08:00",
              "UpdatedAt": "2025-03-23T23:56:44.117+08:00",
              "DeletedAt": null,
              "Image": "https://avatars.githubusercontent.com/u/53512912?v=4",
              "Name": "lemon tea",
              "Uint": "瓶",
              "Format": "500ML",
              "Price": 10.11,
              "Suppliers": "wahaha",
              "Note": "this is a note",
              "MinStock": 1,
              "MaxStock": 100,
              "HotelID": 1,
              "ClassID": 1,
            },
            "WarehouseID": 2,
            "Expect": 0,
            "Current": 3,
            "Status": "Completed"
        }
      ],
      StockTakingRecordID: '',
      currentPage: 1,
      totalPages: 0,
      recipient: '',
      subject: '',
      queryList: {
        Page: 1,
        Size: 10,
        StockTakingRecordID: ''
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
    handlePageChange(e) {
      // e.type 可能的值: 'prev'(上一页), 'next'(下一页), 'current'(页码按钮)
      if (e.type === 'prev') {
        this.queryList.Page = e.current
        this.getStockTakingString()
      } else if (e.type === 'next') {
        this.queryList.Page = e.current
        this.getStockTakingString()
      }
    },
    onDateChange(e) {
      this.selectedDate = e.detail.value;
    },
    sendEmail: throttle( async function() {
      const params = {
        Emails: this.recipient,
        ReportType: 'StockTaking',
        StockTakingRecordID: parseInt(this.StockTakingRecordID)
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
            uni.navigateTo({
              url: '/subpackageA/stocktaking/index'
            })
          },200)
        }
      });
    }, 1000),
    async getStockTakingString(){
      this.queryList.StockTakingRecordID = this.StockTakingRecordID
     await getStockTakingString(this.queryList).then(res=>{
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
    }
  },
  mounted(){
    this.getStockTakingString();
  },
  onLoad(options) {
    this.StockTakingRecordID = options.id;
  },
  onShow() {
    const pages = getCurrentPages();
    console.log(pages, '8888');
    
    // if (pages.length === 1) { // 返回后只剩当前页面
    //   console.log('可能是返回操作触发的 onShow');
    //   // 这里执行你的拦截逻辑
    // }
  },
};
</script>

<style>
@import '@/common/index.css';
.container {
  padding: 10px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.header {
  height: 200rpx;
}
.date-picker {
  border: none !important;
}
.table-section {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
  overflow-x: hidden;
}
.title {
  margin: 20rpx 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tips {
  font-size: 26rpx;
  color: #999;
  margin-top: 10px;
}
.tab {
  padding: 10rpx 15rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  background-color: #fff;
  color: #918d8d;
  font-size: 24rpx;
  display: flex;
  align-items: center;
}
.uni-icon-left {
  margin-right: 10rpx;
}
.active-tab {
  background-color: #fcca00;
  color: #000;
}
.page-button {
  background-color: #fff;
  border-radius: 20rpx;
  color: #000;
  padding: 10rpx 20rpx;
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
  font-size: 14px;
}
.pagination-section {
  background: #fff;
  border-radius: 0 0 10rpx 10rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
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
  height: 100%;
}
/deep/.uni-table-th-content {
  font-size: 20rpx!important;
}
</style>