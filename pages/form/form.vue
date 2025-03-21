<template>
	<view class="container">
		<view class="title">快速初始化</view>
		<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :modelValue="valiFormData">
					<uni-forms-item label="店名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="地址" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="电话" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="公司名称" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="信用代码" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="开户行" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="账号" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
			}
		},
		computed: {
		},
		onLoad() {},
		onReady() {
		},
		methods: {
			submit(ref) {
				uni.switchTab({
					url: '../home/home'
				})
				// this.$refs[ref].validate().then(res => {
				// 	console.log('success', res);
				// 	uni.showToast({
				// 		title: `校验通过`
				// 	})
				// }).catch(err => {
				// 	console.log('err', err);
				// })
			},
		}
	}
</script>
<style scoped>
@import '../../common/index.css';
	.container {
		background-color: #f8f8f8;
	}
	.title {
		text-align: center;
		margin: 20rpx 0;
	}
	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>

