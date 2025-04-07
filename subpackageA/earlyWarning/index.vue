<template>
  <view>
    <view class="container">
      <view class="conent" v-for="item in unreadMessageList" :key="item.ID" @click="toDetail(item.GoodsID)">
        <view>预警：</view>
        <view class="message">{{ item.Message }}</view>
        <view class="time">{{ item.UpdatedAt | getData}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { formatTime } from '@/util/day.js'
import { readAppMessage } from '@/api/user.js'
export default {
  data() {
    return {
      unreadMessageList: [],
    }
  },
  filters: {
    getData (val) {
      if (!val) return '';
      return formatTime(val);
    },
  },
  onLoad(option) {
    uni.$on('unread-message', (res) => {
      this.unreadMessageList = res.data
    });
	},
  methods: {
    async toDetail(id) {
      await readAppMessage({ ID: id }).then((res) => {
        if (res.ErrorMsg) {
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        } else {
          uni.navigateTo({
              url: `/subpackageA/itemDetail/index?goosId=${id}`,
              success: () => {
              }
            });
        }
      })
    }
  },
  mounted() {
  }

}
</script>

<style scoped>
@import '@/common/index.css';
.container {
  padding: 0;
}
.conent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rpx;
  height: 100rpx;
  border-bottom: 1rpx solid #e5e5e5;
}
.message {
  width: 60%;
  font-size: 10px;
  color: #999999;
}
.time {
  font-size: 12px;
  color: #999999;
}

</style>