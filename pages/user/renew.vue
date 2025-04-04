<template>
  <view class="renew-container">
    <!-- 用户信息区 -->
    <common-header></common-header>

    <!-- 会员套餐区 -->
    <view class="member-packages">
      <view
        v-for="(item, index) in packageList"
        :class="['package-item', selectedIndex === index ? 'active' : '']"
        :key="index"
        @click="selectPackage(item.ID, index)"
      >
        <view class="package-title">{{ item.Name }}</view>
        <text class="package-price">{{ item.Price }}元</text>
        <text class="package-unit" v-if="item.Month !== -1">/{{ item.Month}}月</text>
      </view>
    </view>
    <!-- 优惠信息区 -->
    <view class="discount-info">
      <view class="discount-item">
        <text>扣减优惠券</text>
        <text>{{ coupon }}</text>
      </view>
      <view class="discount-item">
        <text>实际支付（已优惠 {{coupon}} 元）</text>
        <text class="final-price">{{ finalPrice }}元</text>
      </view>
    </view>

    <!-- 联系客服 -->
    <view class="contact-customer">
      <text>如有疑问，请联系客服 ></text>
    </view>

    <!-- 付款按钮 -->
    <button class="pay-btn" @click="handlePayment">付款</button>
  </view>
</template>
<script>
import commonHeader from "./components/commonHeader.vue";
import { getUserPrime, getUserShopping } from "@/api/user";
export default {
  components: {
    commonHeader,
  },
  data() {
    return {
      //将data文件夹中的数据读入
      // 套餐数据
      packageList: [
        { Name: "年费会员", Price: "198", Month: 12, index: 0 },
        { Name: "3年会员", Price: "298", Month: 36, index: 1 },
        { Name: "终身会员", Price: "998", Month: -1, index: 2 },
      ],
      couponList: [],
      one: '',
      two: '',
      selectedIndex: 0, // 选中的套餐索引
      coupon: 0, // 优惠券
      finalPrice: 0, // 初始实际支付价格
    };
  },
  methods: {
    // 获取优惠券
    async getUserShopping(){
      await getUserShopping().then((res)=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
          this.couponList = res.Data
          // this.couponList.map(item => {
          //   if (item.ID == id){
          //     this.two = item.Price
          //   } else {
          //     this.two = 0
          //   }
          // });
				}
      })
    },
    // 获取会员套餐
    async getUserPrime(){
      await getUserPrime().then((res)=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
					this.packageList = res.Data
				}
      })
    },
    async handlePayment() {
      try {
        // 调用后端接口获取支付参数
        const paymentParams = await this.getPaymentParams();

        // 调用微信支付
        uni.requestPayment({
          provider: "wxpay",
          ...paymentParams,
          success: (res) => {
            console.log("支付成功:", res);
            uni.showToast({
              title: "支付成功",
              icon: "success",
            });
          },
          fail: (err) => {
            console.error("支付失败:", err);
            uni.showToast({
              title: "支付失败",
              icon: "none",
            });
          },
        });
      } catch (err) {
        console.error("获取支付参数失败:", err);
        uni.showToast({
          title: "获取支付参数失败",
          icon: "none",
        });
      }
    },
    async getPaymentParams() {
      // 模拟调用后端接口获取支付参数
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            timeStamp: "1621234567890",
            nonceStr: "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
            package: "prepay_id=wx2021052017001234567890",
            signType: "MD5",
            paySign: "C428A6F0F5E6B8C7D8E9F0A1B2C3D4E5",
          });
        }, 1000);
      });
    },

    selectPackage(id, index) {
      console.log(id, index);
      this.packageList.map(item => {
        if (item.ID == id){
          this.one = item.Price
        }
      });
      this.couponList.map(item => {
        if (item.ID == id){
          this.two = item.Price
        } else {
          this.two = 0
        }
      });
      this.coupon = this.two;
      this.finalPrice = this.one - this.two;
      this.selectedIndex = index;
    },
  },
  mounted() {
    this.getUserPrime();
    this.getUserShopping();
    setTimeout(() => {
      this.selectPackage(this.packageList[0].ID, 0);
    },100)
  }
};
</script>

<style >
.renew-container {
  background-color: #f5f5f5;
  padding: 20rpx;
  width: 100%;
}

.user-info {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}
.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}
.user-detail text {
  display: block;
  margin-bottom: 5rpx;
  font-size: 28rpx;
}
.verified-icon {
  display: inline-block;
  width: 16rpx;
  height: 16rpx;
  /* background-image: url("认证图标地址"); */
  background-size: contain;
  margin-left: 5rpx;
}

.member-packages {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
}
.package-item {
  text-align: center;
  padding: 20rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  background-color: #fff;
  flex: 1;
  margin-right: 10rpx;
}
.package-item:last-child {
  margin-right: 0;
}
.package-item.active {
  border-color: #ff5722;
  color: #ff5722;
}
.package-title {
  font-size: 30rpx;
  margin-bottom: 10rpx;
}
.package-price {
  font-size: 26rpx;
  color: #ff5722;
}
.package-unit {
  font-size: 26rpx;
}

.discount-info {
  background-color: #fff;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}
.discount-item {
  padding: 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.discount-item:last-child {
  border-bottom: none;
}
.final-price {
  color: #ff5722;
  font-weight: bold;
}

.contact-customer {
  text-align: center;
  margin: 20rpx 0;
  color: #999;
  font-size: 28rpx;
}

.pay-btn {
  width: 100%;
  padding: 20rpx;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 50rpx;
  font-size: 32rpx;
}
</style>


