<template>
  <view class="container">
    <view class="filter-header">
        <!-- <picker style="margin-right:10rpx;" class="picker" mode="selector" :range="classList" range-key="Name" @change="onClassChange">
          <view class="date-picker">物品：{{ selectedClass }}</view>
        </picker>
        <picker style="margin-left:10rpx;" class="picker" mode="selector" :range="warehouseList" range-key="Name" @change="onWarehouseChange">
          <view class="date-picker">库房：{{ selectedonWarehouse }}</view>
        </picker> -->
        <view class="multi-picker" @click="showClassPicker = true">
          <text class="arrow-text">物品分类：{{ selectedCalssNames || '请选择' }}</text>
          <text class="arrow"></text>
        </view>
        <view class="multi-picker" @click="showPicker = true">
          <text class="arrow-text">库房：{{ selectedNames || '请选择' }}</text>
          <text class="arrow"></text>
        </view>
    </view>
    <view class="filter-section">
      <view class="date-picker">日期：{{ selectedDate | getStamp }}</view>
    </view>
    <view class="table-section">
      <uni-table border fixedHeader>
        <uni-tr>
          <uni-th>序号</uni-th>
          <uni-th>库房</uni-th>
          <uni-th>名称</uni-th>
          <uni-th>规格</uni-th>
          <uni-th>单位</uni-th>
          <uni-th>单价</uni-th>
          <uni-th>库存</uni-th>
          <!-- <uni-th>小计</uni-th> -->
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ index + 1 }}</uni-td>
          <uni-td>{{ item.Warehouse.Name }}</uni-td>
          <uni-td>{{ item.Goods.Name }}</uni-td>
          <uni-td>{{ item.Goods.Format }}</uni-td>
          <uni-td>{{ item.Goods.Uint }}</uni-td>
          <uni-td>{{ item.Goods.Price }}</uni-td>
          <uni-td>{{ item.CurrentCount }}</uni-td>
          <!-- <uni-td>{{ item.TotalPrice }}</uni-td> -->
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
        <button @click="sendEmail" :class="{'gray-button': isDisabled}" 
        :disabled="isDisabled">发送</button>
      </view>
      <view class="tips"><uni-icons type="info" size="16" color="#999"></uni-icons>发件邮箱为 ims@jiudianhui.com.cn，请添加至白名单</view>
    </view>
    <uni-popup ref="popup" type="bottom" :mask-click="false" @maskClick="closePopup" :safe-area="false">
      <view class="picker-container">
        <view class="picker-header">
          <text class="title">选择库房（可多选）</text>
          <view class="select-all" @click="toggleSelectAll">
            <text>{{ isAllSelected ? '取消全选' : '全选' }}</text>
          </view>
        </view>
        
        <scroll-view scroll-y class="picker-content">
          <view 
            class="picker-item" 
            v-for="(item, index) in warehouseList" 
            :key="index"
            @click="toggleItem(item)"
          >
            <view class="checkbox" :class="{ 'checked': isSelected(item) }"></view>
            <text class="item-name">{{ item.Name }}</text>
          </view>
        </scroll-view>
        
        <view class="picker-footer">
          <button class="btn cancel" @click="cancel">取消</button>
          <button class="btn confirm" @click="confirm">确定({{ selectedIds.length }})</button>
        </view>
      </view>
    </uni-popup>
    <uni-popup ref="classpopup" type="bottom" :mask-click="false" @maskClick="closeCalssPopup" :safe-area="false">
      <view class="picker-container">
        <view class="picker-header">
          <text class="title">选择分类（可多选）</text>
          <view class="select-all" @click="toggleClassSelectAll">
            <text>{{ isAllClassSelected ? '取消全选' : '全选' }}</text>
          </view>
        </view>
        
        <scroll-view scroll-y class="picker-content">
          <view 
            class="picker-item" 
            v-for="(item, index) in classList" 
            :key="index"
            @click="toggleClassItem(item)"
          >
            <view class="checkbox" :class="{ 'checked': isClassSelected(item) }"></view>
            <text class="item-name">{{ item.Name }}</text>
          </view>
        </scroll-view>
        
        <view class="picker-footer">
          <button class="btn cancel" @click="cancelClass">取消</button>
          <button class="btn confirm" @click="confirmClass">确定</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { formatTime } from '@/util/day.js'
import { getGoodsItme, getReportGoodsCurrent, reportEmail, getWarehouse, getHotelClass } from '@/api/work.js';
export default {
  data() {
    return {
      selectedDate: new Date().getTime() + 8 * 60 * 60 * 1000,
      tableData: [],
      classList: [],
      warehouseList: [],
      currentPage: 1,
      totalPages: 5,
      recipient: '',
      subject: '',
      selectedClass: '',
      isDisabled: false,
      query: {
        Page: 1,
        Size: 5,
        ClassIDs: '',
        WarehouseIDs: ''
      },
      timer: null,
      selectedIds: [], // 选中的ID数组
      selectedClassIds: [], // 选中的分类ID数组
      tempSelectedIds: [], // 临时存储的选中ID（用于取消时恢复）
      classSelectedIds: [], // 选中的分类ID数组
      showPicker: false,
      showClassPicker: false,
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
  computed: {
    // 选中的名称，用逗号分隔
    selectedNames() {
      console.log(this.selectedIds, 'kuf');
      
      return this.selectedIds.map(id => {
        const item = this.warehouseList.find(item => item.ID === id);
        return item ? item.Name : '';
      }).filter(name => name).join(', ');
    },
    selectedCalssNames() {
      console.log(this.selectedClassIds,'zhanshi ');
      
      return this.selectedClassIds.map(id => {
        const item = this.classList.find(item => item.ID === id);
        return item ? item.Name : '';
      }).filter(name => name).join(', ');
    },
    // 是否全选
    isAllSelected() {
      return this.tempSelectedIds.length === this.warehouseList.length;
    },
    isAllClassSelected() {
      return this.classSelectedIds.length === this.classList.length;
    }
  },
  watch: {
    showPicker(newVal) {
      if (newVal) {
        this.tempSelectedIds = [...this.selectedIds];
        this.$refs.popup.open();
      } else {
        this.$refs.popup.close();
      }
    },
    showClassPicker(newVal) {
      if (newVal) {
        this.classSelectedIds = [...this.selectedClassIds];
        this.$refs.classpopup.open();
      } else {
        this.$refs.classpopup.close();
      }
    }
  },
  onLoad() {
    this.getWarehouseList();
    this.getHotelClassList();
    this.getReportGoodsCurrent();
  },
  methods: {
    async getClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    closePopup(){
      this.showPicker = false;
    },
    closeCalssPopup(){
      this.showClassPicker = false;
    },
    async getWarehouseList() {
      const res = await getWarehouse();
      console.log(res);
      res.Data.push({
        CreatedAt: "2025-04-19T21:11:34.41+08:00",
        DeletedAt: null,
        ID: 0,
        Name: "汇总",
        Place: "",
        UpdatedAt: "2025-04-19T21:11:34.41+08:00",
      })
      this.warehouseList = res.Data;
    },
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
      // this.classList = res.Data;
    },
    handlePageChange(e) {
      if (e.type === 'prev') {
        this.query.Page = e.current
        this.getReportGoodsCurrent()
      } else if (e.type === 'next') {
        this.query.Page = e.current
        this.getReportGoodsCurrent()
      }
    },
    onDateChange(e) {
      this.selectedDate = e.detail.value;
      this.query.Date = e.detail.value;
      this.getReportGoodsCurrent();
      // 这里可以添加根据日期筛选数据的逻辑
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
        ReportType: 'CurrentStock',
        WarehouseIDs: this.selectedIds.toString(),
        ClassIDs: this.selectedClassIds.toString(),
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
    onClassChange(e) {
      this.selectedClass = this.classList[e.detail.value].Name;
      this.query.Goods = this.classList[e.detail.value].ID;
      this.getReportGoodsCurrent();
    },
    // 切换单项选择
    toggleItem(item) {
      const index = this.tempSelectedIds.indexOf(item.ID);
      if (index > -1) {
        this.tempSelectedIds.splice(index, 1);
      } else {
        this.tempSelectedIds.push(item.ID);
      }
    },
    // 判断是否选中
    isSelected(item) {
      return this.tempSelectedIds.includes(item.ID);
    },
    // 全选/取消全选
    toggleSelectAll() {
      if (this.isAllSelected) {
        this.tempSelectedIds = [];
      } else {
        this.tempSelectedIds = this.warehouseList.map(item => item.ID);
      }
    },
    // 确认选择
    confirm() {
      this.selectedIds = [...this.tempSelectedIds];
      console.log(this.selectedIds, '确认选择');
      
      this.query.WarehouseIDs = this.selectedIds.toString();
      this.showPicker = false;
      this.$emit('change', this.selectedIds);
      this.getReportGoodsCurrent();
    },
    // 取消选择
    cancel() {
      this.tempSelectedIds = [...this.selectedIds];
      this.showPicker = false;
    },
     // 切换单项选择
     toggleClassItem(item) {
      const index = this.classSelectedIds.indexOf(item.ID);
      if (index > -1) {
        this.classSelectedIds.splice(index, 1);
      } else {
        this.classSelectedIds.push(item.ID);
      }
    },
    // 判断是否选中
    isClassSelected(item) {
      return this.classSelectedIds.includes(item.ID);
    },
    // 全选/取消全选
    toggleClassSelectAll() {
      if (this.isAllClassSelected) {
        this.classSelectedIds = [];
      } else {
        this.classSelectedIds = this.classList.map(item => item.ID);
      }
    },
    // 确认选择
    confirmClass() {
      this.selectedClassIds = [...this.classSelectedIds];
      
      this.showClassPicker = false;
      this.$emit('change', this.selectedClassIds);
      this.query.ClassIDs = this.selectedClassIds.toString();
      this.getReportGoodsCurrent();
    },
    // 取消选择
    cancelClass() {
      this.classSelectedIds = [...this.selectedClassIds];
      this.showClassPicker = false;
    },
    openPicker() {
      this.showPicker = true;
    },
  },
  mounted(){
    this.getHotelClassList();
    this.getReportGoodsCurrent();
    this.getWarehouseList();
    this.getClassList();
  },
  beforeDestroy() {
    // 组件销毁时清除定时器
    if (this.timer) {
      clearInterval(this.timer);
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
  overflow: hidden;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.filter-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.filter-header .multi-picker {
  flex: 1;
  min-width: 0;          /* 关键：允许内容收缩 */
  width: 50%;            /* 固定宽度50% */
  box-sizing: border-box; /* 包含padding和border */
  word-wrap: break-word;  /* 允许长单词换行 */
  overflow-wrap: break-word; /* 更现代的属性 */
  white-space: normal;    /* 允许换行 */
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
.multi-picker {
  display: flex;
  align-items: center;
  padding: 10rpx;
  border: 1rpx solid #e5e5e5;
  border-radius: 8rpx;
  background-color: #fff;
}
.multi-picker:first-child{
  margin-right: 10rpx;
}
.multi-picker:last-child{
  margin-left: 10rpx;
}

.arrow {
  margin-left: auto;
  font-size: 24rpx;
  color: #999;
}

.count {
  margin-left: 10rpx;
  color: #07c160;
  font-size: 24rpx;
}

.picker-container {
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
  padding-bottom: constant(safe-area-inset-bottom); /* iOS */
  padding-bottom: env(safe-area-inset-bottom); /* Android */
}
.picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #f5f5f5;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
}

.select-all {
  color: #07c160;
  font-size: 28rpx;
}

.picker-content {
  height: 600rpx;
  padding: 0 30rpx;
}

.picker-item {
  display: flex;
  align-items: center;
  padding: 25rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}
.checkbox {
  width: 36rpx;
  height: 36rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  margin-right: 20rpx;
}

.checkbox.checked {
  background-color: #07c160;
  position: relative;
  border-color: #07c160;
}

.checkbox.checked::after {
  content: '';
  position: absolute;
  top: 6rpx;
  left: 12rpx;
  width: 8rpx;
  height: 16rpx;
  border: solid white;
  border-width: 0 2rpx 2rpx 0;
  transform: rotate(45deg);
}
.item-name {
  font-size: 28rpx;
}

.picker-footer {
  display: flex;
  padding: 20rpx 30rpx;
  border-top: 1rpx solid #f5f5f5;
}

.btn {
  flex: 1;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  border-radius: 40rpx;
  margin: 0 15rpx;
}

.cancel {
  color: #333;
}
.cancel::after {
  border: none;
}

.confirm {
  background-color: #07c160;
  color: #fff;
}
.arrow-text {
  width: 100%;
  white-space: nowrap;      /* 禁止换行 */
  overflow: hidden;        /* 隐藏超出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
/deep/.uni-popup__wrapper {
  padding-bottom: 0 !important;
}
</style>