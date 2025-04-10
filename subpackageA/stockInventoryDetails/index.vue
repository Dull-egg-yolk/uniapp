<template>
  <view class="container">
    <div class="header">
      <view class="filter-section">
        <picker mode="date" @change="onDateChange">
          <view class="date-picker">日期筛选：{{ selectedDate }}</view>
        </picker>
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
      totalPages: 5,
      recipient: '',
      subject: '',
      query: {
        Page: 1,
        Size: 10,
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
    onDateChange(e) {
      this.selectedDate = e.detail.value;
      this.query.TimestampFrom = e.detail.value;
      this.getStockTakingString();
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
    sendEmail: throttle( async function() {
      const params = {
        Emails: [
          this.recipient
        ],
        ReportType: 'StockTaking',
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
        }
      });
    }, 1000),
    async getStockTakingString(){
     await getStockTakingString(this.query).then(res=>{
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
  onBackPress(options) {
    // 判断是返回按钮点击（Android物理返回键也会触发）
    if (options.from === 'backbutton' || options.from === 'navigateBack') {
      // 跳转到首页
      // uni.reLaunch({
      //   url: '/pages/home/home'
      // });
      uni.switchTab({
				url: '../home/home'
			})
      // 阻止默认返回行为
      return true;
    }
  }
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
  height: 1s00rpx;
}
.tips {
  font-size: 26rpx;
  color: #999;
  margin-top: 10px;
}
.date-picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
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