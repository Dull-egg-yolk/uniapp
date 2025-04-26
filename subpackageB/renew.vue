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
        <view class="original-price" v-if="item.OriginPrice !== item.Price">原价 {{ item.OriginPrice + '/' + item.Month}}月</view>
        <text class="package-price">¥{{ item.Price }}元</text>
        <text class="package-unit" v-if="item.Month !== -1">/{{ item.Month}}月</text>
      </view>
    </view>
    <!-- 会员套餐区 -->
    <view class="tips">注:标签打印机型号为NIIMBOT B1，可自行采购</view>
    <!-- 优惠信息区 -->
    <view class="discount-info">
      <view class="discount-item-two" @click.stop="handleCouponClick">
        <text>请选择优惠券</text>
        <text class="final-price"> ¥{{ planData }}</text>
        <!-- <radio-group @change="handleCouponChange" class="coupon-group">
          <view class="package-item-two" v-for="item in couponList" :key="item.ID">
            <label>
              <radio :value="item.Price" :checked="selectedPackage === item.ID" />
              <text style="margin-right: 10rpx; width: 200rpx;">{{ item.Note }} </text>
              <text> ¥{{ item.Price }}</text>
            </label>
          </view>
        </radio-group> -->
        <!-- <text>{{ coupon }}</text> -->
      </view>
      <view class="discount-item">
        <text>实际支付（已优惠 {{coupon}} 元）</text>
        <text class="final-price">{{ finalPrice }}元</text>
      </view>
    </view>
    <view class="form-container">
      <view class="form-item">
        <text class="label">收件人</text>
        <input 
          class="input"
          type="text" 
          v-model="formData.recipient" 
          placeholder="请输入收件人姓名"
          placeholder-class="placeholder"
        />
      </view>
      <view class="form-item">
        <text class="label">手机号</text>
        <input 
          class="input"
          type="number" 
          v-model="formData.phone" 
          placeholder="请输入手机号码"
          placeholder-class="placeholder"
          maxlength="11"
        />
      </view>
      <view class="form-item">
        <text class="label">收货地址</text>
        <textarea 
          class="textarea"
          v-model="formData.address" 
          placeholder="请输入详细收货地址"
          placeholder-class="placeholder"
          auto-height
        />
      </view>
    </view>
    <!-- 联系客服 -->
    <view class="contact-customer" @click="contactCustomerService">
      <button class="contact-btn">
        <text class="function-text">如有疑问，请联系客服 ></text>
      </button>
    </view>
    <uni-popup ref="popup" type="bottom" :mask-click="true" @change="popupChange">
      <view class="coupon-popup">
        <!-- 标题栏 -->
        <view class="popup-header">
          <text class="title">选择优惠券</text>
          <uni-icons type="close" size="20" @click="closePopup"></uni-icons>
        </view>
        
        <!-- 优惠券列表 -->
        <scroll-view scroll-y class="coupon-list">
          <view 
            v-for="(item, index) in couponList" 
            :key="index"
            class="coupon-item"
            :class="{ 'active': selectedCoupon && selectedCoupon.ID === item.ID }"
            @click="selectCoupon(item)"
          >
            <view class="coupon-info">
              <text class="name">{{ item.Note }}</text>
              <text>¥{{ item.Price }}</text>
            </view>
            <view class="selected-icon" v-if="selectedCoupon && selectedCoupon.ID === item.ID">
              <uni-icons type="checkmarkempty" color="#07C160" size="20"></uni-icons>
            </view>
          </view>
          <!-- 无优惠券提示 -->
          <view class="empty-tip" v-if="couponList.length === 0">
            <text>暂无可用优惠券</text>
          </view>
        </scroll-view>
        
        <!-- 底部按钮 -->
        <view class="popup-footer">
          <button class="confirm-btn" @click="confirmSelection">确定</button>
        </view>
      </view>
    </uni-popup>
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
      planData: 0, // 优惠金额
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
      formData: {
        recipient: '', // 收件人
        phone: '', // 手机号
        address: '', // 收货地址
      },
      selectedCoupon: 0,
      show: false
    };
  },
  computed: {
  },
  methods: {
    // 选择优惠券
    handleCouponClick(){
      this.$refs.popup.open()
    },
    contactCustomerService(){
      wx.openCustomerServiceChat({
        extInfo: {url: 'https://work.weixin.qq.com/kfid/kfc31c83ef5ca238ab7'},
        corpId: 'ww00aa5bcecce5872d', // 如果是企业微信客服
        success(res) {
          console.log('客服打开成功', res);
        },
        fail(err) {
          console.error('客服打开失败', err);
        }
      });
    },
    // 套餐选择变化
    handlePackageChange(e) {
      this.selectedPackage = e.detail.value
    },
    popupChange(e){
      this.show = e.show
    },
     // 选择优惠券
     selectCoupon(item) {
      console.log(item, 'item');
      
      this.selectedCoupon = item
      this.planData = item.Price
      this.CouponID = this.couponList.find(item1 => item1.Price === item.Price).ID
      this.finalPrice = this.currtPrice - this.planData
    },
    closePopup() {
      this.$refs.popup.close()
    },
    // 确认选择
    confirmSelection() {
      this.closePopup()
    },
    // 优惠券选择变化
    handleCouponChange(e) {
      console.log(typeof e.detail.value, 'e.detail.value');
      
      this.coupon = e.detail.value
      this.CouponID = this.couponList.find(item => item.Price === parseInt(e.detail.value)).ID
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
        const amountFen = Math.round(this.finalPrice * 100); // 分（避免浮点数问题）
        const params = {
          PrimePlanID: this.PrimePlanID,
          CouponID: this.CouponID,
          PayMoney: amountFen,
          ShoppingAddress: this.formData.address || '',
          ShoppingPhone: this.formData.phone || '',
          ShoppingUser: this.formData.recipient || '',
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
        
        if (!paymentParams) {
          return;
        }
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
            console.log(res, '8888');
            console.log(paymentParams, '999');
            
            this.shoppingBuyCallback(paymentParams.BuyRecord.ID, paymentParams.BuyRecord.PrepayID, 'SUCCESS')
          },
          fail: (err) => {
            console.error("支付失败:", err);
            uni.showToast({
              title: "支付失败",
              icon: "none",
            });
            this.shoppingBuyCallback(paymentParams.BuyRecord.ID, paymentParams.BuyRecord.PrepayID, 'CLOSED')
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
      this.finalPrice = price - this.planData;
      this.selectedIndex = index;
      this.currtPrice = price;
    },
    async shoppingBuyCallback(id, prepayId, status){
      console.log(id, prepayId, status, '回调参数');
      
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

<style lang="scss" scoped>
.coupon-list {
  flex: 1;
  padding: 0 30rpx;
  max-height: 50vh;
  box-sizing: border-box;
}

.coupon-item {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
  position: relative;
  
  &.active {
    background-color: #f9f9f9;
  }
}

.coupon-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  .name {
    font-size: 28rpx;
    color: #333;
    margin-bottom: 10rpx;
  }
  
  .desc {
    font-size: 24rpx;
    color: #999;
  }
}

.coupon-value {
  font-size: 32rpx;
  color: #FF5A5F;
  font-weight: bold;
  margin-right: 40rpx;
}

.selected-icon {
  position: absolute;
  right: 30rpx;
}

.empty-tip {
  text-align: center;
  padding: 40rpx;
  color: #999;
  font-size: 28rpx;
}

.popup-footer {
  padding: 20rpx 30rpx;
  
  .confirm-btn {
    background-color: #07C160;
    color: #fff;
    border-radius: 50rpx;
  }
}
.coupon-popup {
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #f5f5f5;
  
  .title {
    font-size: 32rpx;
    font-weight: bold;
  }
}
.coupon-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 40rpx;
}
.form-container{
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
}
.form-item {
  display: flex;
  margin-bottom: 16rpx;
}
.textarea {
  padding-left: 20rpx;
}
.form-item .label {
  width: 150rpx;
  display: block;
}
.tips {
  font-size: 24rpx;
  margin-bottom: 16rpx;
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
  box-sizing: border-box;
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
  align-items: center;
  flex-wrap: wrap;
}
.package-item {
  min-height: 168rpx;
  text-align: center;
  padding: 20rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  background-color: #fff;
  width: 32%;
  box-sizing: border-box;
  margin-bottom: 5px;
  
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
  font-size: 26rpx;
  margin-bottom: 5rpx;
}
.original-price {
  font-size: 24rpx;
  text-decoration: line-through;
}
.package-price {
  font-size: 30rpx;
  color: #ff5722;
}
.package-unit {
  font-size: 30rpx;
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


