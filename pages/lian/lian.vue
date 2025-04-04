<template>
	<view class="bluetooth-wrapper">
		<view class="device-connect" v-if="printDevice">
			<view class="title">已连接的设备</view>
			<view class="flex-space-between">
				<text class="device-text">
					<uni-icons custom-prefix="iconfont" type="icon-lanya" size="20" />
					{{ printDevice.name || '' }}
				</text>
				<text class="connect-stop" @tap="cancelConnect">断开</text>
			</view>
		</view>
		<view class="flex-space-between">
			<text class="scan-device-number">共搜索到{{ deviceData.length }}个蓝牙设备</text>
			<text class="refresh-scan" @tap="handleSearchDevice">重新搜索</text>
		</view>
		<view class="device-list">
			<view class="flex-space-between" v-for="(item, index) in deviceData" :key="index"
				@tap="handleConnect(item)">
				<uni-icons custom-prefix="iconfont" type="icon-lanya" size="20" />
				<text class="device-text">{{ item.name }}</text>
			</view>
		</view>
		<view class="section-wrapper">
			<view>温馨提示</view>
			<view>1.首次使用需将手机与打印机配对</view>
			<view>2.打印时请保持打印机与蓝牙均属于开启状态</view>
			<view>3.未搜索到可用机型,可尝试以下解决方法:</view>
			<view class="sub">a.检查打印机是否打开状态</view>
			<view class="sub">b.关闭手机蓝牙重新打开</view>
		</view>
	</view>
</template>

<script>
	import {
		usePrint
	} from '@/util/print';
	const {
		scanedPrinters,
		getConnName,
		openPrinter,
		closePrinter
	} = usePrint();


	var isConnectManually = false;
	export default {
		data() {
			return {
				deviceData: [],
				printDevice: null,

			}
		},
		methods: {
			// 取消连接
			cancelConnect() {
				closePrinter();
				isConnectManually = false;
				console.log('断开打印机');
				this.printDevice = null;
				this.handleSearchDevice();
			},
			// 搜索打印机
			handleSearchDevice() {
				uni.showLoading({
					title: '搜索打印机中...',
				});
				scanedPrinters((printers) => {
          console.log(printers, 'printers');
          printers = printers.filter((val) => val.name && !val.name.includes("未知设备"));
					if (this.printDevice && this.printDevice.name) {
						if (!printers.some((val) => val.deviceId === this.printDevice.deviceId)) {
							printers.unshift(this.printDevice.value);
						} else {
							printers = printers.filter((val) => val.deviceId !== this.printDevice.deviceId);
						}
					}
					this.deviceData = printers.reduce((res, item) => {
						if (!res.some((val) => val.deviceId === item.deviceId)) {
							res.push(item);
						}
						return res;
					}, []);

					uni.hideLoading();
					console.log(this.deviceData, 'deviceData');
				});
			},
			// 连接打印机
			handleConnect(item) {
				console.log('开始连接');
				console.log('handleConnect', item);
				uni.showLoading({
					title: '正在连接中...',
				});
				isConnectManually = true;
				openPrinter(
					item.name,
					() => {
						uni.hideLoading();
						console.log('连接成功');
            const app = getApp();
            app.globalData.bluetoothConnected = true;
            uni.setL
						this.printDevice = item;
						this.deviceData = this.deviceData.filter((val) => val.deviceId !== item.deviceId);
            uni.setStorageSync('isBluetooth', true);
					},
					() => {
						if (isConnectManually) {
							uni.hideLoading();
							console.log('连接失败');

							uni.showToast({
								icon: 'none',
								title: '打印机连接失败，请确认打印机是否开机',
							});
						} else {
							uni.showToast({
								icon: 'none',
								title: '断开打印机成功',
							});
						}

					},
				);
			}
		},
		mounted() {
			const connDevice = getConnName();
			if (connDevice) {
				this.printDevice = connDevice;
			}
			this.handleSearchDevice();
		}
	}
</script>

<style lang="scss">
	.bluetooth-wrapper {
		height: 100vh;
    width: 100%;
		background-color: #f5f5f5;
		padding: 32px;

		>.device-connect {
			>.title {
				color: #595959;
				margin-bottom: 32px;
			}

			>.flex-space-between {
				padding: 30px;
				border-radius: 24px;
				background: #fafafa;

				>.connect-stop {
					padding: 12px 32px;
          margin-left: 10px;
					border-radius: 36px;
					text-align: center;
					background-color: #ebebeb;
				}
			}
		}

		>.flex-space-between {
			display: flex;
			justify-content: space-between;
			margin-top: 42px;

			.refresh-scan {
				font-size: 16px;
				color: #3e8c80;
			}

			.scan-device-number {
				font-size: 16px;
				color: #595959;
			}
		}

		.device-list {
			margin-top: 28px;

			>.flex-space-between {
				padding: 30px;
				margin-bottom: 32px;
				justify-content: flex-start;
				border-radius: 24px;
				background: #fafafa;

				.device-text {
					margin-left: 17px;
					font-size: 14px;
					color: #262626;
					font-weight: 500;
				}
			}
		}

		.section-wrapper {
			margin-top: 60px;
			font-size: 14px;
			color: $uni-text-color-grey;

			>view {
				&:first-of-type {
					font-size: 16px;
					font-weight: 600;
					color: $uni-text-color;
					margin-bottom: 20px;
				}

				&.sub {
					padding-left: 40px;
				}
			}
		}
	}
</style>