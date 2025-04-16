<template>
  <view class="container">
    <view class="title">
      <img src="@/static/img/Invitation.jpg" alt="">
      <view class="text">
        <text class="big">邀好友，有好礼</text>
        <text class="sm">每邀请2名用户，赠送1个月使用期</text>
        <text class="sm">一个酒店为一个用户</text>
      </view>
    </view>
    <view class="content-box">
      <view class="po">返利明细</view>
      <view>
        <text>已邀好友</text>
        <text class="red">{{ InvitedFriends }}人</text>
      </view>
      <view>
        <text>赠送时长</text>
        <text class="red">{{ BonusMonth }}人</text>
      </view>
    </view>
  </view>
</template>
<script>
import { getUserInvite } from '@/api/user'

export default {
  components: {
  },
  data() {
    return {
      BonusMonth: 0,
      InvitedFriends: 0,
    };
  },
  methods: {
    async getUserInvite() {
      const res = await getUserInvite()
      console.log(res)
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.BonusMonth = res.Data.BonusMonth
        this.InvitedFriends = res.Data.InvitedFriends
      }
    }
  },
  mounted() {
    this.getUserInvite()
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  /* background-color: #f5f5f5; */
}
.title img{
  width: 100%;
  height: 600rpx;
}
.title {
  position: relative;
}
.title .text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-size: 24rpx;
  text-align: center;
}
.title .text .big {
  font-size: 52rpx;
  font-weight: 600;
  margin-bottom: 30rpx;
  color: #9B7D31;
}
.container .content-box {
  padding: 40rpx;
  margin: 60rpx 40rpx 40rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-content: center;
  box-shadow: 0 0 20rpx #8f8f8f;
  position: relative;
}
.container .content-box .po {
  position: absolute;
  top: -20rpx;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
}
.content-box view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 0;
  /* border-bottom: 1px solid #f5f5f5; */
}
.content-box view .red {
  color: #F65237;
  font-size: 54rpx;
  font-weight: 600;
}

</style>




