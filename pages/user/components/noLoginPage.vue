<template>
    <view >
		<!-- <view class="person-head">
			<cmd-avatar src="https://avatar.bbs.miui.com/images/noavatar_small.gif" @click="mydetail()" size="md" :make="{'background-color': '#fff', 'margin-right': '10upx'}"></cmd-avatar>
			<view class="person-head-box" @click="mydetail()">
				<view class="user-name">{{ user_name }}</view>
				<view class="user-id">ID：{{ user_id }}</view>
			</view>
		</view> -->
		<!-- 登录/注册区 -->
  <view class="login-section">
    <image src="/images/login-avatar.png" mode="aspectFit" class="avatar"></image>
    <view class="login-info">
      <view class="login-title">
		<view>
			<!-- 在页面中添加按钮 -->
			<button 
				open-type="getPhoneNumber" 
				@getphonenumber="onGetPhoneNumber"
				class="login-btn"
			>
			 登录/注册
			</button>
			<!-- <span  @click="loginFun()">登录</span>
			<span>/</span>
			<span>注册</span> -->
		</view>
		
	  </view>
      <view class="login-subtitle">年费会员</view>
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
        <view class="btn-text">年费会员</view>
        <view class="btn-desc">198 元/年</view>
      </view>
      <view class="price-btn">
        <view class="btn-text">终身会员</view>
        <view class="btn-desc">998 元</view>
      </view>
    </view>
  </view>

   <!-- 邀请有礼 -->
  <view class="invite-section">
    <view class="invite-banner">
      <view class="invite-title">邀请有礼</view>
      <view class="invite-desc">每邀请 2 名用户，赠送 1 个月使用期</view>
    </view>
  </view>

   <!-- 我们的优点 -->
  <view class="advantage-section">
    <view class="section-title">我们的优点</view>
    <view class="advantage-list">
      <view class="advantage-item">
        <image src="/images/advantage1.png" mode="aspectFit" class="advantage-icon"></image>
        <view class="advantage-text">易操作</view>
      </view>
      <view class="advantage-item">
        <image src="/images/advantage2.png" mode="aspectFit" class="advantage-icon"></image>
        <view class="advantage-text">库存准</view>
      </view>
      <view class="advantage-item">
        <image src="/images/advantage3.png" mode="aspectFit" class="advantage-icon"></image>
        <view class="advantage-text">有报表</view>
      </view>
      <view class="advantage-item">
        <image src="/images/advantage4.png" mode="aspectFit" class="advantage-icon"></image>
        <view class="advantage-text">码上见</view>
      </view>
    </view>
  </view>
		<!-- <view class="person-list">
			<cmd-cell-item title="联系我们12" slot-left arrow @click="phone">
			    <cmd-icon type="phone" size="24" color="#368dff"></cmd-icon>
			</cmd-cell-item>
			<cmd-cell-item title="系统设置" slot-left arrow @click="setting">
			    <cmd-icon type="settings" size="24" color="#368dff"></cmd-icon>
			</cmd-cell-item>
		</view> -->
    </view>
</template>

<script>
	// import cmdAvatar from "../../components/cmd-avatar/cmd-avatar.vue"
	// import cmdIcon from "../../components/cmd-icon/cmd-icon.vue"
	// import cmdCellItem from "../../components/cmd-cell-item/cmd-cell-item.vue"
	var _this;

  export default {
		components: {
			// cmdAvatar,
			// cmdIcon,
			// cmdCellItem
		},
		data() {
			return {
				//将data文件夹中的数据读入
				user_name: '',
				user_id: ''
			}
		},
		mounted() {
			_this = this;
		},
		onLoad: function() {
			var myinfo = uni.getStorageSync('user_info')
			this.user_name = myinfo.data.user.user_name
			this.user_id = myinfo.data.user.username
		},
    methods: {
			async onGetPhoneNumber(e) {
				// 1. 检查是否授权成功
				if (e.detail.errMsg !== 'getPhoneNumber:ok') {
					uni.showToast({ title: '用户拒绝了授权', icon: 'none' });
					return;
				}

				// 2. 显示加载状态
				uni.showLoading({ title: '登录中...', mask: true });

				try {
					// 3. 获取微信登录code
					const [loginErr, loginRes] = await uni.login({
						provider: 'weixin'
					});
					if (loginErr) throw new Error('微信登录失败');

					// 4. 发送到后端解密
					const [requestErr, res] = await uni.request({
						url: 'https://your-api-domain.com/api/decrypt-phone',
						method: 'POST',
						data: {
							code: loginRes.code,
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv
						}
					});
					
					if (requestErr || res.data.code !== 200) {
						throw new Error(res.data?.msg || '解密手机号失败');
					}
					this.hasLogin = true;
					this.userInfo = {
						...res.data.data,
						phoneNumber: res.data.data.phoneNumber.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
					};
					
					// 6. 存储登录状态
					uni.setStorageSync('token', res.data.token);
					uni.showToast({ title: '登录成功' });
					
				} catch (error) {
					uni.showToast({ title: error.message, icon: 'none' });
				} finally {
					uni.hideLoading();
				}
			},
			mydetail() {
				uni.navigateTo({
				    url: 'myinfo',
				});
			},
			//登陆
			loginFun() {
				// uni.navigateTo({
				// 	url: 'userLoginPage'
				// })
				uni.switchTab({
					url: '../home/home'
					})
			},
			phone() {
				uni.navigateTo({
				    url: 'phoneus',
				});
			},
			setting() {
				uni.navigateTo({
				    url: 'setting',
				});
			}
    },
		onLoad() {
			// 检查已有登录状态
			if (uni.getStorageSync('token')) {
				this.hasLogin = true;
				this.userInfo = uni.getStorageSync('userInfo') || {};
			}
		}
  }
</script>

<style scoped>
	.login-btn {
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
	}

	.avatar {
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	margin-right: 30rpx;
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
		background-color: white;
		padding: 20rpx;
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
	}
	.free-btn{
		width: 38%;
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
		color: #ffd700;
		padding: 30rpx;
		text-align: center;
	}

	.invite-title {
		font-size: 32rpx;
		margin-bottom: 10rpx;
	}

	.invite-desc {
	font-size: 28rpx;
	}

	.advantage-section {
		
		padding: 20rpx;
		margin: 20rpx 0;
	}

	.advantage-list {
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.advantage-item {
	width: 23%;
	text-align: center;
	margin-bottom: 20rpx;
	}

	.advantage-icon {
	width: 80rpx;
	height: 80rpx;
	margin-bottom: 10rpx;
	}

	.advantage-text {
	font-size: 26rpx;
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
