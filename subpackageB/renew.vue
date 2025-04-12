<template>
  <view class="renew-container">
    <!-- 用户信息区 -->
    <common-header></common-header>
 <!-- 套餐选择 -->
    <view class="member-packages">
      <view
        v-for="(item, index) in packageList"
        :class="['package-item', selectedIndex === index ? 'active' : '']"
        :key="index"
        @click="selectPackage(item.ID, index, item.Price)"
      >
        <view class="package-title">{{ item.Name }}</view>
        <text class="package-price">¥{{ item.Price }}元</text>
        <text class="package-unit" v-if="item.Month !== -1">/{{ item.Month}}月</text>
      </view>
    </view>
    <!-- 会员套餐区 -->
   
    <!-- 优惠信息区 -->
    <view class="discount-info">
      <view class="discount-item-two">
        <text>请选择优惠券</text>
        <radio-group @change="handleCouponChange" class="coupon-group">
          <view class="package-item-two" v-for="item in couponList" :key="item.ID">
            <label>
              <radio :value="item.Price" :checked="selectedPackage === item.ID" />
              <text style="margin-right: 10rpx; width: 200rpx;">{{ item.Note }} </text>
              <text> ¥{{ item.Price }}</text>
            </label>
          </view>
        </radio-group>
        <!-- <text>{{ coupon }}</text> -->
      </view>
      <view class="discount-item">
        <text>实际支付（已优惠 {{coupon}} 元）</text>
        <text class="final-price">{{ finalPrice }}元</text>
      </view>
    </view>

    <!-- 联系客服 -->
    <view class="contact-customer">
      <button open-type="contact" class="contact-btn">
        <text class="function-text">如有疑问，请联系客服 ></text>
      </button>
    </view>

    <!-- 付款按钮 -->
    <button class="pay-btn" @click="handlePayment">付款</button>
  </view>
</template>
<script>
import commonHeader from "./components/commonHeader.vue";
import { getUserPrime, getUserShopping, shoppingBuy, shoppingBuyCallback  } from "@/api/user";
export default {
  components: {
    commonHeader,
  },
  data() {
    return {
      packages: [], // 套餐列表
      availableCoupons: [], // 可用优惠券列表
      selectedPackage: 0, // 选中的套餐ID
      selectedCoupons: [], // 选中的优惠券ID数组
      loading: false, // 加载状态
      //将data文件夹中的数据读入
      // 套餐数据
      packageList: [],
      couponList: [],
      one: '',
      two: '',
      selectedIndex: 0, // 选中的套餐索引
      coupon: 0, // 优惠券
      finalPrice: 0, // 初始实际支付价格
      currtPrice: 0, // 当前套餐价格
      PrimePlanID: null,
      CouponID: 0,
    };
  },
  computed: {
  },
  methods: {
    // 套餐选择变化
    handlePackageChange(e) {
      this.selectedPackage = e.detail.value
    },
    
    // 优惠券选择变化
    handleCouponChange(e) {
      this.coupon = e.detail.value
      this.CouponID = this.couponList[e.detail.value].ID;
      this.finalPrice = this.currtPrice - this.coupon
    },
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
          this.availableCoupons = res.Data
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
          this.packages = res.Data
					this.packageList = res.Data
				}
      })
    },
    async handlePayment() {
      try {
        // 调用后端接口获取支付参数
        const params = {
          PrimePlanID: this.PrimePlanID,
          CouponID: this.CouponID,
          PayMoney: this.finalPrice
        }
        const paymentParams = await shoppingBuy(params).then((res) => {
          if (res.ErrorMsg) {
            uni.showToast({
              title: res.ErrorMsg,
              icon: "none",
            });
          } else {
            console.log(res.Data, '支付参数');
            
            return res.Data;
          }
        })

        // 调用微信支付
        uni.requestPayment({
          provider: "wxpay",
          timeStamp: paymentParams.TimeStamp, // 微信支付时间戳
          nonceStr: paymentParams.NonceStr, // 微信支付随机字符串
          package: paymentParams.Package, // 微信支付包名
          signType: paymentParams.SignType, // 微信支付签名方式
          paySign: paymentParams.PaySign, // 微信支付签名
          success: (res) => {
            console.log("支付成功:", res);
            uni.showToast({
              title: "支付成功",
              icon: "success",
            });
            this.shoppingBuyCallback(paymentParams.BuyRecord.ID, paymentParams.PrepayID, 'SUCCESS')
          },
          fail: (err) => {
            console.error("支付失败:", err);
            uni.showToast({
              title: "支付失败",
              icon: "none",
            });
            this.shoppingBuyCallback(paymentParams.BuyRecord.ID, paymentParams.PrepayID, 'CLOSED')
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

    selectPackage(id, index, price) {
      this.PrimePlanID = id;
      this.finalPrice = price - this.coupon;
      this.selectedIndex = index;
      this.currtPrice = price;
    },
    async shoppingBuyCallback(id, prepayId, status){
      const params = {
        PrepayID: prepayId,
        status: status
      }
      await shoppingBuyCallback(params).then((res)=>{
        if(res.ErrorMsg){
          console.log(res.ErrorMsg, '回调失败');
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        } else {
          uni.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 500,
            complete: () => {
              uni.reLaunch({
                url: "/pages/user/user",
              });
            }
          });
        }
      })
    }
  },
  async mounted() {
   await this.getUserPrime();
    this.getUserShopping();
    setTimeout(() => {
      this.selectPackage(this.packageList[0].ID, 0, this.packageList[0].Price);
    },100)
  }
};
</script>

<style scoped>
.coupon-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 40rpx;
}
.section {
  margin-bottom: 30rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  display: block;
}

.package-item, .coupon-item {
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.summary {
  margin: 30rpx 0;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 15rpx 0;
}

.summary-item.total {
  font-weight: bold;
  color: #e74c3c;
  font-size: 36rpx;
  border-top: 1rpx solid #f5f5f5;
  margin-top: 10rpx;
  padding-top: 20rpx;
}
wx-button:after {
  border: none;
}
.function-text {
  font-size: 28rpx;
  color: #4F4F4F;
}
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
.package-item-two {
  text-align: center;
  padding-bottom: 20rpx;
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
.discount-item-two {
  padding: 20rpx;
  display: flex;
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


