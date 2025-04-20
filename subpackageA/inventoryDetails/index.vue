<template>
  <view class="container">
    <view class="filter-section">
      <view class="filter-header">
        <view class="picker" @click="showPopup">
            <view class="date-picker">物品：{{ selectedClass }}</view>
            <uni-icons type="arrowdown" size="20" color="#999" />
        </view>
        <picker style="margin-left:10rpx;" class="picker" mode="selector" :range="warehouseList" range-key="Name" @change="onWarehouseChange">
          <view class="date-picker">库房：{{ selectedonWarehouse }}</view>
        </picker>
      </view>
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
        <button @click="sendEmail" :class="{'gray-button': isDisabled}" 
        :disabled="isDisabled">发送</button>
      </view>
      <view class="tips"><uni-icons type="info" size="16" color="#999"></uni-icons>发件邮箱为 ims@jiudianhui.com.cn，请添加至白名单</view>
    </view>
    <uni-popup ref="popup" type="bottom" mode="bottom" :mask-click="false" @maskClick="closeCalssPopup" :safe-area="flase">
        <view class="popup-content">
            <input v-model="searchKeyword" placeholder="搜索物品" @input="filterOptions" />
            <scroll-view scroll-y class="picker-content">
                <view v-for="(item, index) in filteredClassList" :key="index" @click="selectClass(item)">
                    {{ item.Name }}
                </view>
            </scroll-view>
        </view>
    </uni-popup>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { formatTime } from '@/util/day.js'
import { getGoodsItme, getStockOperate, reportEmail, getWarehouse } from '@/api/work.js';
export default {
  data() {
    return {
      searchKeyword: '',
      filteredClassList: [],
      range: [],
      tableData: [],
      classList: [],
      classList1: [],
      warehouseList: [],
      currentPage: 1,
      totalPages: 0,
      recipient: '',
      subject: '',
      selectedClass: '请选择',
      selectedText: '',
      selectedonWarehouse: '请选择',
      goodsID: null,
      isDisabled: false,
      query: {
        WarehouseIDs: '',
        GoodsID: '',
        Size: 10,
        Page: 1,
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
    showPopup(){
      this.$refs.popup.open();
    },
    closeCalssPopup(){
      this.$refs.popup.close();
    },
    async getWarehouseList() {
      const res = await getWarehouse();
      console.log(res);
      this.warehouseList = res.Data;
    },
     sendEmail: throttle( async function() {
      if (this.recipient === '') {
        uni.showToast({
          title: '请输入接收邮箱',
          icon: 'none'
        });
        return;
      }
      if (this.query.TimestampFrom === '' || this.query.TimestampTo === '') {
        uni.showToast({
          title: '请选择时间',
          icon: 'none'
        });
        return;
      }
      const params = {
        Emails: this.recipient,
        ReportType: 'InOutDetail',
        TimestampFrom: this.query.TimestampFrom,
        TimestampTo: this.query.TimestampTo,
        GoodsID: this.query.GoodsID,
        WarehouseIDs: this.query.WarehouseIDs.toString()
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
    // 出入库明细
    async getStockOperate(){
      if (this.query.GoodsID === '' || this.query.WarehouseIDs === '') {
        return;
      }
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
      this.filteredClassList = this.classList;
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
      this.selectedClass = this.classList[e.detail.value].Name
      this.query.GoodsID = this.classList[e.detail.value].ID;
      this.getStockOperate();
    },
    onWarehouseChange(e){
      this.selectedonWarehouse = this.warehouseList[e.detail.value].Name;
      this.query.WarehouseIDs = this.warehouseList[e.detail.value].ID;
      this.getStockOperate();
    },
    filterOptions() {
      if (this.searchKeyword) {
          this.filteredClassList = this.classList.filter(item =>
              item.Name.includes(this.searchKeyword)
          );
      } else {
          this.filteredClassList = this.classList;
      }
    },
    selectClass(item) {
        this.query.GoodsID = item.ID;
        this.selectedClass = item.Name;
        this.$refs.popup.close();
        this.getStockOperate();
    }
  },
  mounted(){
    this.getHotelClassList();
    this.getStockOperate();
    this.getWarehouseList();
  },
  beforeDestroy() {
    // 组件销毁时清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  async onLoad(option) {
    await this.getHotelClassList();
    await this.getWarehouseList();
    console.log(this.classList, '9999');
    
    if (option.id) {
      this.query.GoodsID = parseInt(option.id);
      this.query.WarehouseIDs = parseInt(option.warehouseId);
      console.log(option, 'option');
      
      this.goodsID = parseInt(option.id)
      console.log(this.warehouseList, 'this.warehouseLis');
      
      this.selectedClass = this.classList[this.classList.findIndex( item => item.ID == option.id)].Name
      this.selectedonWarehouse = this.warehouseList[this.warehouseList.findIndex( item => item.ID == this.query.WarehouseIDs)].Name
      this.getStockOperate();
    }
  }
};
</script>

<style scoped>
@import '@/common/index.css';
.container {
  padding: 20rpx;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.gray-button {
  background-color: #ccc !important;
  color: #999 !important;
}
.filter-header {
  display: flex;
  justify-content: space-between;
}
.filter-header .picker {
  flex: 1;
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
/deep/.uni-table{
  min-width: auto !important;
}
/deep/.uni-table-th-content {
  font-size: 20rpx!important;
}
.popup-content {
    padding: 40rpx 20rpx 0 20rpx;
    background-color: #fff;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
    padding-bottom: constant(safe-area-inset-bottom); /* iOS */
    padding-bottom: env(safe-area-inset-bottom); /* Android */
    -webkit-overflow-scrolling: touch;
    overflow-anchor: none;
}

.popup-content input {
    padding: 10rpx;
    margin-bottom: 20rpx;
    border: 1px solid #ccc;
    border-radius: 5rpx;
}

scroll-view view {
    padding: 10rpx;
    border-bottom: 1px solid #eee;
}
.picker-content {
  height: 600rpx;
}
/* 覆盖 uni-popup 默认样式 */
:deep(.uni-popup__wrapper.uni-popup__wrapper--bottom) {
  background-color: #fff !important; /* 强制白色背景 */
  border-radius: 16rpx 16rpx 0 0 !important;
}

/* 去除遮罩层默认透明度 */
:deep(.uni-popup__mask) {
  opacity: 1;
  background-color: rgba(0,0,0,0.5);
}
</style>