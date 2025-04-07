<template>
  <view class="container">
    <!-- 盘点列表 -->
     <view class="title">
      <text class="tab">新盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">选择物品</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">生成报表</text>
     </view>
     <view class="content-list">
      <view class="list">
        <view class="item" v-for="(item, index) in inventoryList" :key="index" @click="gotoReport(item)">
          <view class="info">
            <view class="name">{{ item.Warehouse.Name }}</view><view :class="{'icon': item.Status === 'Completed', 'icon-in-progress': item.Status === 'InProgress'}">{{ statusList[item.Status] }}</view>
          </view>
          <view class="actions">
            <text class="edit">{{ item.CreatedAt | getData }}</text>
            <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
          </view>
        </view>
      </view>
      <view class="pagination">
        <uni-pagination :total="totalPages" title="" prev-text="上一页" next-text="下一页" @change="handlePageChange" />
      </view>
     </view>
    <!-- 点击新盘点 -->
    <view class="add-stock" @click="navigateTo">
      <text>新盘点</text>
    </view>
  </view>
</template>

<script>
import { throttle } from '@/util/throttle';
import { getStockTaking } from '@/api/work.js'
import { formatTime } from '@/util/day.js'
export default {
  data() {
    return {
      inventoryList: [
        { title: '盘点中', date: '2024.12.01' },
        { title: '已完成', date: '2024.11.01' },
        { title: '已完成', date: '2024.10.01' },
        { title: '已完成', date: '2024.09.01' },
        { title: '已完成', date: '2024.08.01' },
        { title: '盘点中', date: '2024.12.01' },
        { title: '已完成', date: '2024.11.01' },
        { title: '已完成', date: '2024.10.01' },
        { title: '已完成', date: '2024.09.01' },
        { title: '已完成', date: '2024.09.01' }
      ],
      statusList:  {
        'InProgress': '盘点中',
        'Completed': '已盘点',
      },
      totalPages: 0,
      queryList: {
        Page: 1,
        Size: 9
      }
    }
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
        this.getStockTakingList()
      } else if (e.type === 'next') {
        this.queryList.Page = e.current
        this.getStockTakingList()
      }
    },
    navigateTo: throttle(function() {
      uni.navigateTo({
				url: '../newStocktaking/index'
			});
    }, 500),
    async getStockTakingList(){
      const res = await getStockTaking(this.queryList)
      if (res.ErrorMsg) {
				uni.showToast({
					title: res.ErrorMsg,
					icon: "none"
				});
      } else {
        this.inventoryList = res.Data;
        this.totalPages = parseInt(res.Total)
        // uni.navigateTo({
        //   url: `/pages/inventoryReport/index?id=${this.StockTakingRecordID}`
        // });   
      }
      
    },
    gotoReport(item) {
      uni.navigateTo({
        url: `/pages/inventoryReport/index?id=${item.ID}`
      });
    }
  },
  mounted(){
    this.getStockTakingList()
  }
}
</script>

<style scoped>
@import '../../common/index.css';
.list {
  /* margin-bottom: 100rpx; */
  background-color: #fff;
  border-radius: 20rpx;
  flex: 1;
}
.actions {
  display: flex;
  align-items: center;
}
.info {
  display: flex;
  align-items: center;
}
.info .name {
  width: 120rpx;
}
.container {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - var(--status-bar-height));
}
.add-stock {
  width: 40%;
  height: 80rpx;
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
  margin: 20rpx auto;
}
.pagination {
  padding: 20rpx;
}
.content-list {
  background-color: #fff;
  border-radius: 20rpx;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.title {
  height: 70rpx;
  margin: 20rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab {
  padding: 10rpx 20rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  background-color: #fff;
  color: #918d8d;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}
.icon {
  margin-left: 5rpx;
  display: inline-block;
  background-color: #ed3b3b;
  border-radius: 10rpx;
  padding: 5rpx 10rpx;
  color: #fff;
  font-size: 18rpx;
}
.icon-in-progress {
  margin-left: 5rpx;
  display: inline-block;
  background-color: green;
  border-radius: 10rpx;
  padding: 5rpx 10rpx;
  color: #fff;
  font-size: 18rpx;
}
</style>
