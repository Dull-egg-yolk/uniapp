<template>
  <view class="container">
     <view class="content-list">
      <view class="list">
        <view class="item" v-for="(item, index) in feedbackList" :key="index">
          <view class="info">
            <view class="name">{{ item.Demand }}</view>
          </view>
          <view class="actions">
            <text class="edit">{{ item.CreatedAt | getData }}</text>
          </view>
        </view>
      </view>
      <view class="pagination">
        <uni-pagination :total="totalPages" title="" prev-text="上一页" next-text="下一页" @change="handlePageChange" />
      </view>
     </view>
  </view>
</template>

<script>
import { getAppFeedback } from '@/api/user.js'
import { formatTime } from '@/util/day.js'
export default {
  data() {
    return {
      feedbackList: [],
      totalPages: 0,
      queryList: {
        Page: 1,
        Size: 10
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
        this.getAppFeedbackList()
      } else if (e.type === 'next') {
        this.queryList.Page = e.current
        this.getAppFeedbackList()
      }
    },
    async getAppFeedbackList(){
      const res = await getAppFeedback(this.queryList)
      if (res.ErrorMsg) {
				uni.showToast({
					title: res.ErrorMsg,
					icon: "none"
				});
      } else {
        this.feedbackList = res.Data;
        this.totalPages = parseInt(res.Total)
        // uni.navigateTo({
        //   url: `/pages/inventoryReport/index?id=${this.StockTakingRecordID}`
        // });   
      }
      
    }
  },
  mounted(){
    this.getAppFeedbackList()
  },
  onUnload() {
    //#ifdef MP-WEIXIN
    uni.switchTab({
      url: '/pages/user/user'
    });
    //#endif
  }

}
</script>

<style scoped>
@import '@/common/index.css';
.list {
  /* margin-bottom: 100rpx; */
  background-color: #fff;
  border-radius: 20rpx;
  flex: 1;
}
.info {
  display: flex;
  align-items: center;
}
.info .name {
  width: auto;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
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
</style>
