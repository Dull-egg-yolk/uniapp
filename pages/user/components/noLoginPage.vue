<template>
    <view >
		<!-- 登录/注册区 -->
  <view class="login-section">
    <view class="login-info">
      <view class="login-title">
		<view>
			<button 
				open-type="getPhoneNumber"
				@getphonenumber="onGetPhoneNumber"
				class="login-btn"
			>
			<image src="@/static/img/header-img.svg" mode="aspectFit" class="avatar"></image>
			<view class="login-btn-two">
				<view>登录/注册</view>
				<view class="login-subtitle">年费会员</view>
			</view>
			</button>
		</view>
		</view>
    </view> 
  </view>

		<!-- 系统价格 -->
		<view class="price-section">
			<view class="section-title">系统价格</view>
			<view class="price-btns">
				<view class="price-btn free-btn">
					<view class="btn-text">免费试用 2 个月</view>
					<view class="btn-desc">注册后申请免费试用</view>
				</view>
				<view class="price-btn">
					<view class="btn-text">{{ packageList[0].Name }}</view>
					<view class="btn-desc">{{packageList[0].Price}} 元 /{{ packageList[0].Month }}月</view>
				</view>
				<view class="price-btn">
					<view class="btn-text">{{ packageList[1].Name }}</view>
					<view class="btn-desc">{{packageList[1].Price}} 元</view>
				</view>
			</view>
		</view>

		<!-- 邀请有礼 -->
		<!-- <view class="invite-section">
			<view class="invite-banner">
				<view class="invite-title">自己有会员，经营更稳健</view>
				<view class="invite-desc">点击了解 <a @click="gotoWebsite">九点荟会员管理系统</a></view>
			</view>
		</view> -->

		<!-- 我们的优点 -->
		<view class="advantage-section">
			<view class="section-title">我们的优点</view>
			<view class="advantage-list">
				<view class="advantage-item">
					<image src="/static/img/mai.png" mode="aspectFit" class="advantage-icon"></image>
					<view class="advantage-text">易操作</view>
				</view>
				<view class="advantage-item">
					<image src="/static/img/mai.png" mode="aspectFit" class="advantage-icon"></image>
					<view class="advantage-text">库存准</view>
				</view>
				<view class="advantage-item">
					<image src="/static/img/mai.png" mode="aspectFit" class="advantage-icon"></image>
					<view class="advantage-text">有报表</view>
				</view>
				<view class="advantage-item">
					<image src="/static/img/mai.png" mode="aspectFit" class="advantage-icon"></image>
					<view class="advantage-text">码上见</view>
				</view>
			</view>
		</view>
		<login-popup 
				ref="loginPopup"
				@confirm="onConfirm"
			/>
		  <!-- 3. 自定义协议弹窗 -->
			<view v-if="showAgreement" class="custom-modal">
				<view class="modal-content">
					<text>同意并遵行九点荟库存管理</text>
					<text class="link" @click="goAgreement('userAgreement')">《用户协议》</text>
					<text>和</text>
					<text class="link" @click="goAgreement('privacyPolicy')">《隐私政策》</text>
					<button class="custom-btn" @click="handleAgree">同意并继续</button>
				</view>
			</view>
    </view>
</template>

<script>
import loginPopup from '@/components/login-popup/login-popup.vue'
import { userLogin, appConfig, prelogin, getUserPrime } from '@/api/user.js'
  export default {
		components: {
			loginPopup
			// cmdAvatar,
			// cmdIcon,
			// cmdCellItem
		},
		data() {
			return {
				user_name: '',
				user_id: '',
				personalInvitePage: '',
				configList: [],
				WxCode: '',
				isAuthorize: false,
				showAgreement: false,
        showRealAuthBtn: false,
				IV: '',
				EncryptedData: '',
				packageList: []
			}
		},
		mounted() {
			this.appConfig()
			this.getUserPrime()
		},
		onLoad: function() {
			var myinfo = uni.getStorageSync('user_info')
			this.user_name = myinfo.data.user.user_name
			this.user_id = myinfo.data.user.username
		},
    methods: {
			async getUserPrime(){
				await getUserPrime({IsLogin: false}).then((res)=>{
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
			goAgreement(page){
				uni.navigateTo({
					url: `/subpackageB/agreement/${page}`
				});
			},
			// 1. 点击登录按钮时先显示协议弹窗
			showAgreementModal() {
				this.showAgreement = true;
			},
			// 2. 用户同意协议后触发真实授权
			handleAgree() {
				this.showAgreement = false;
				this.showRealAuthBtn = true;
				this.prelogin(this.WxCode, this.EncryptedData, this.IV)
			},
			async	prelogin(Code, EncryptedData, IV){
				const params = {
					Code: Code,
					EncryptedData: EncryptedData,
					IV: IV
				}
				await prelogin(params).then(res => {
					if (res.ErrorMsg) {
						uni.showToast({
							title: res.ErrorMsg,
							icon: "none"
						});
						// 接口不成功走原有逻辑
						this.$refs.loginPopup.open()
					} else {
						// 接口成功就是登录成功
						if (res.Data.Avatar && res.Data.Name) {
							uni.setStorageSync('Role', res.Data.UserHotelRole.Role);
							uni.setStorageSync('token', res.Data.Token);
							uni.setStorageSync('user_info', res.Data);
							uni.setStorageSync('hotalName', res.Data.Hotel.Name);
							uni.setStorageSync('hotalID', res.Data.Hotel.ID);
							uni.showToast({
								title: '登录成功',
								icon: "none"
							});
							setTimeout(() => {
								if (res.Data.Hotel.ID === 0) {
									uni.navigateTo({
										url: '/subpackageA/form/form'
									});
								} else {
									uni.switchTab({
										url: '/pages/home/home'
									});
								}
							}, 300)
						} else {
							this.$refs.loginPopup.open()
						}
					}
				})
			},
			async onConfirm(){
				try {
						// 3. 获取微信登录code
						const [loginErr, loginRes] = await uni.login({
							provider: 'weixin'
						});
						this.WxCode = loginRes.code
					} catch (error) {
						uni.showToast({ title: error.message, icon: 'none' });
					} finally {
				}
				const userInfo =  uni.getStorageSync('userInfo')
				const invited = uni.getStorageSync('launchOptions')
				if (invited && invited.query.InvitedByHotelID !== 'undefined') {
					invited.query.InvitedByHotelID === parseInt(invited.query.InvitedByHotelID)
				}
				const params = {
							Name: userInfo.nickName,
							WxCode: this.WxCode,
							Avatar: userInfo.avatarUrl,
							InvitedByHotelID: invited ? parseInt(invited.query.InvitedByHotelID) : 0 || 0,
							InvitedByCode: invited ? invited.query.InvitedByCode : '' || '',
						}
						const res = await userLogin(params)
						if (res.ErrorMsg) {
							uni.showToast({
								title: res.ErrorMsg,
								icon: "none"
							});
						} else {
							uni.hideLoading()
							uni.setStorageSync('Role', res.Data.UserHotelRole.Role);
							uni.setStorageSync('token', res.Data.Token);
							uni.setStorageSync('user_info', res.Data);
							uni.setStorageSync('hotalName', res.Data.Hotel.Name);
							uni.setStorageSync('hotalID', res.Data.Hotel.ID);
							uni.showToast({
								title: '登录成功',
								icon: "none"
							});
							setTimeout(() => {
								if (res.Data.Hotel.ID === 0) {
									uni.navigateTo({
										url: '/subpackageA/form/form'
									});
								} else {
									uni.switchTab({
										url: '/pages/home/home'
									});
								}
							}, 300)
						}
			},
			async appConfig() {
			  await appConfig().then(res => {
					if (res.ErrorMsg) {
						uni.showToast({
							title: res.ErrorMsg,
							icon: "none"
						});
					} else {
            const configList = res.Data;
            configList.forEach(item => {
							if (item.Key === "PersonalInvitePage") {
								this.personalInvitePage = item.Value
							}
						});
						uni.setStorageSync('user_config', res.Data)  
					}
			  })
			},
			gotoWebsite() {
				wx.navigateTo({
					url: '/subpackageB/webview/webview?url=' + encodeURIComponent(this.personalInvitePage)
				})
			},
			async onGetPhoneNumber(e) {
				// 1. 检查是否授权成功
				if (e.detail.errMsg !== 'getPhoneNumber:ok') {
						uni.showToast({ title: '用户拒绝了授权', icon: 'none' });
						return;
				}
				try {
						// 3. 获取微信登录code
						const [loginErr, loginRes] = await uni.login({
							provider: 'weixin'
						});
						this.WxCode = loginRes.code
						this.EncryptedData =  e.detail.encryptedData
						this.IV = e.detail.iv
						// this.$refs.loginPopup.open()
						// 调用预登录接口
						this.showAgreement = true
						// this.prelogin(loginRes.code,e.detail.encryptedData,e.detail.iv)
				} catch (error) {
					uni.showToast({ title: error.message, icon: 'none' });
				} finally {
				}
			}
    },
		onLoad(options) {
			console.log(options, 11111);
			// 检查已有登录状态
			if (uni.getStorageSync('token')) {
				this.userInfo = uni.getStorageSync('userInfo') || {};
			}
		}
  }
</script>

<style scoped>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}
.link {
  color: #007AFF;
  text-decoration: underline;
}
.modal-content {
	background-color: #fff;
	padding: 50rpx 30rpx;
	border-radius: 10rpx;
	margin: 0 40rpx;
}
.custom-btn {
	margin-top: 30rpx;
}
	.login-btn {
		display: flex;
		font-size: 26rpx;
		background-color: #fff;
		text-align: left;
		padding-left: 0;
	}
	.login-btn::after {
		border: none;
	}
	.content {
		padding: 10;
	}
	.person-head {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 170upx;
		padding-left: 20rpx;
		background: linear-gradient(to top, #4073ff, #20a0ff);
		border-top: 0;
	}
	.person-head-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-left: 20rpx;
	}
	.user-name {
		font-size: 18px;
		font-weight: 1000;
		color: #000000;
		font-family: '楷体';
	}
	.user-id {
		font-size: 14px;
		font-weight: 1000;
		color: #000000;
	}
	.person-list {
		background: #FFFFFF;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		height: 80rpx;
		background-color: white;
	}

	.back-icon, .more-icon {
		display: flex;
		align-items: center;
	}

	.back-icon image, .more-icon image {
	width: 30rpx;
	height: 30rpx;
	}

	.title {
	font-size: 36rpx;
	font-weight: bold;
	}

	.menu-btn {
	margin-right: 20rpx;
	padding: 0;
	border: none;
	}

	.login-section {
	display: flex;
	align-items: center;
	padding: 30rpx;
	background-color: white;
	margin: 20rpx 0;
	border-radius: 10rpx;
	}

	.avatar {
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	margin-right: 30rpx;
	background-color: #f5f5f5;
	}

	.login-info .login-title {
		font-size: 28rpx;
		margin-bottom: 10rpx;
	}

	.login-info .login-subtitle {
		font-size: 24rpx;
		color: #999;
	}

	.price-section {
		/* padding: 20rpx; */
		margin: 20rpx 0;
	}

	.section-title {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 20rpx;
	}

	.price-btns {
		display: flex;
		justify-content: space-between;
	}

	.price-btn {
		/* width: 30%; */
		text-align: center;
		padding: 18rpx 30rpx;
		border: 1rpx solid #e5e5e5;
		border-radius: 8rpx;
		background-color: #fff;
		border-radius: 10rpx;
	}
	.free-btn{
		width: 40%;
		background-color: #fff;
		border-radius: 10rpx;
	}



	.btn-text {
		font-size: 24rpx;
		margin-bottom: 10rpx;
	}

	.btn-desc {
		font-size: 18rpx;
		color: #999;
	}

	.invite-section {
		background-color: white;
		margin: 20rpx 0;
	
	}

	.invite-banner {
		background-color: #1a1a1a;
		color: #E99D42;
		padding: 30rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	.invite-banner a {
		color: #E99D42;
		padding-left: 4rpx;
	}

	.invite-title {
		font-size: 32rpx;
		margin-bottom: 10rpx;
	}

	.invite-desc {
	font-size: 28rpx;
	}
	.invite-desc a {
    display: inline-block;
    text-decoration: underline;
  }

	.advantage-section {
		margin: 20rpx 0;
		padding: 40rpx 0;
	}

	.advantage-list {
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		border-radius: 10rpx;
	}

	.advantage-item {
		width: 23%;
		text-align: center;
		margin-top: 20rpx;
		position: relative;
		margin-bottom: 0;
	}

	.advantage-icon {
		width: 120rpx;
		height: 120rpx;
		margin-bottom: 10rpx;
	}

	.advantage-text {
		font-size: 26rpx;
		position: absolute;
		left: 0;
		right:0;
		top:30rpx;
		bottom:0;
		margin:auto;
	}

	.custom-tab {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10rpx 0;
	}

	.tab-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	}

	.tab-icon {
	width: 40rpx;
	height: 40rpx;
	margin-bottom: 5rpx;
	}

	.tab-text {
	font-size: 24rpx;
	color: #666;
	}

	.tab-center {
	position: relative;
	top: -20rpx;
	}

	.center-icon {
	width: 80rpx;
	height: 80rpx;
	background-color: #ff4444;
	border-radius: 50%;
	}
</style>
