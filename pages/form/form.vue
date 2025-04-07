<template>
	<view class="container">
		<view class="title">快速初始化</view>
		<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :modelValue="valiFormData" :rules="rules" validate-trigger="bind">
					<uni-forms-item label="店名" required name="Name">
						<uni-easyinput v-model="valiFormData.Name" placeholder="请输入店名" />
					</uni-forms-item>
					<uni-forms-item label="地址" required name="Address">
						<uni-easyinput v-model="valiFormData.Address" placeholder="请输入地址" />
					</uni-forms-item>
					<uni-forms-item label="电话" required name="Telephone">
						<uni-easyinput v-model="valiFormData.Telephone" placeholder="请输入电话" />
					</uni-forms-item>
					<uni-forms-item label="公司名称" required name="Company">
						<uni-easyinput v-model="valiFormData.Company" placeholder="请输入公司名称" />
					</uni-forms-item>
					<uni-forms-item label="信用代码" required name="SocialCode">
						<uni-easyinput v-model="valiFormData.SocialCode" placeholder="请输入信用代码" />
					</uni-forms-item>
					<uni-forms-item label="开户行" required name="BankAddress">
						<uni-easyinput v-model="valiFormData.BankAddress" placeholder="请输入开户行" />
					</uni-forms-item>
					<uni-forms-item label="账号" required name="BankAccount">
						<uni-easyinput v-model="valiFormData.BankAccount" placeholder="请输入账号" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit()">提交</button>
			</view>
	</view>
</template>
<script>
  import { submitHotel } from '../../api/user.js';
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					Address: '',
					BankAccount: '',
					BankAddress: '',
					Company: '',
					Name: '',
					SocialCode: '',
					Telephone: ''
				},
				// 校验规则
				rules: {
					Name: {
						rules: [{
							required: true,
							errorMessage: '店名不能为空'
						}]
					},
					Address: {
						rules: [{
							required: true,
							errorMessage: '地址不能为空'
						}]
					},
					Telephone: {
						rules: [{
							required: true,
							errorMessage: '电话不能为空'
						},{

						}]
					},
					Company: {
						rules: [{
							required: true,
							errorMessage: '公司名称不能为空'
						}]
					},
					SocialCode: {
						rules: [{
						  required: true,
							errorMessage: '信用代码不能为空'
						}]
					},
					BankAddress: {
						rules: [{
							required: true,
							errorMessage: '开户行不能为空'
						}]
					},
					BankAccount: {
						rules: [{
							required: true,
							errorMessage: '账号不能为空'
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
			submit() {
				this.$refs.valiForm.validate().then(async (res) => {
				  await submitHotel(this.valiFormData).then(res => {
				    if (res.Data) {
							uni.showToast({
								title: '提交成功',
								icon: 'success'
							});
							setTimeout(() => {
								uni.switchTab({
									url: '../home/home'
								})
							}, 200)
						}else {
							uni.showToast({
								title: '提交失败',
								icon: 'none'
							});
						}
				  })
			})
		}
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

