<script>
import { userPage, appConfig } from '@/api/user.js'
	export default {
		globalData: {
			bluetoothConnected: false,
		},
		onLaunch(options) {
			console.log('场景值:', options.scene) // 场景值
			console.log('进入路径:', options.path) // 页面路径
			console.log('参数:', options.query) // 页面参数
			uni.setStorageSync('launchOptions', options)
			this.userPage();
			this.appConfig();
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			async appConfig() {
			  await appConfig().then(res => {
					if (res.ErrorMsg) {
						uni.showToast({
							title: res.ErrorMsg,
							icon: "none"
						});
					} else {
						uni.setStorageSync('user_config', res.Data)  
					}
			  })
			},
			async userPage() {
			  await userPage().then(res => {
					if (res.ErrorMsg) {
						uni.showToast({
							title: res.ErrorMsg,
							icon: "none"
						});
					} else {
						uni.setStorageSync('user_page', res.Data)  
					}
			  })
			},
			async checkLoginStatus() {
				const token = uni.getStorageSync('token')
				if (token) {
					// 已登录，验证token有效性
					try {
						const res = await uni.request({
							url: '/api/checkToken',
							header: { Authorization: `Bearer ${token}` }
						})
						
						if (res.data.valid) {
							this.$store.commit('setToken', token)
							this.handlePostLogin()
						} else {
							this.goToLogin()
						}
					} catch (error) {
						this.goToLogin()
					}
				} else {
					this.goToLogin()
				}
			},
  
			handlePostLogin() {
				// 获取进入时的参数
				const launchParams = uni.getStorageSync('launchParams') || {}
				const { path, query } = launchParams
				
				if (path) {
					// 跳转到原目标页面并携带参数
					let url = path
					if (query && Object.keys(query).length > 0) {
						url += `?${this.serializeQuery(query)}`
					}
					
					setTimeout(() => {
						uni.reLaunch({ url })
					}, 300)
				} else {
					// 默认跳转到首页
					uni.switchTab({ url: '/pages/home/home' })
				}
			},
  
			goToLogin() {
				const launchParams = uni.getStorageSync('launchParams') || {}
				const { path, query } = launchParams
				
				let loginUrl = '/pages/user/user'
				if (path) {
					loginUrl += `?redirect=${encodeURIComponent(path)}`
					if (query) {
						loginUrl += `&${this.serializeQuery(query)}`
					}
				}
				
				uni.reLaunch({ url: loginUrl })
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20upx;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>
