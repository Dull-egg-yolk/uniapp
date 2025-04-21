<template>
    <view class="content">
		<noLoginPage v-if="!isLoginStatus"></noLoginPage>
		<loginPage v-else :userInfo="userInfoList" :updateUser="updateUser"></loginPage>
		<TabBar :activeIndex=1 @parent2Event="changeTO"></TabBar>
    </view>
</template>

<script>
	import TabBar from "../../components/custom-tab-bar/tabBar.vue"
	import loginPage from "./components/loginPage.vue"
	import  noLoginPage from "./components/noLoginPage.vue"
	import { getUserInfo } from '../../api/user.js';

  export default {
		components: {
			loginPage,
			noLoginPage,
			TabBar
		},
		data() {
			return {
				//将data文件夹中的数据读入
				isLoginStatus:false,
				userInfoList: [],
				updateUser: uni.getStorageSync('user_info')
			}
		},
		mounted() {
			// console.log('mounted');
			
			// if (uni.getStorageSync('token')) {
			//   this.getUserInfoList()
			// }
		},
		onLoad(option) {
			// if(uni.getStorageSync('user_info')) {
			// 	this.isLoginStatus = true;
			// } else {
			// 	this.isLoginStatus = false;
			// }
		},
		onShow() {
			if(uni.getStorageSync('user_info')) {
				this.isLoginStatus = true;
			} else {
				this.isLoginStatus = false;
			}
			// 每次页面显示时都请求数据
			if (uni.getStorageSync('token')) {
			  this.getUserInfoList()
			}
		},
    methods: {
			async getUserInfoList() {
				const res = await getUserInfo();
				if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {

					this.userInfoList = res.Data.Hotel
					this.updateUser = res.Data;
					uni.setStorageSync('user_info', res.Data);
					uni.setStorageSync('Role', res.Data.UserHotelRole.Role);
					console.log(this.updateUser, 'updateUser');
					uni.setStorageSync('hotalName', res.Data.Hotel.Name);
					uni.setStorageSync('hotalID', res.Data.Hotel.ID);
					if (res.Data.Token) {
						uni.setStorageSync('token', res.Data.Token);
					}
				}
			},
			changeTO(){
				console.log(1111);
			},
     }
    }
</script>

<style>
	.content {
		padding: 10;
		background-color: #f8f8f8;
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
