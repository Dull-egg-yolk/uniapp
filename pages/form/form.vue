<template>
	<view class="container">
		<view class="title">快速初始化</view>
		<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :modelValue="valiFormData">
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
				<button type="primary" @click="submit('valiForm')">提交</button>
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
			async	submit(ref) {
				const valid = this.$refs[ref].validate();
				if (valid) {
					const res = await submitHotel(this.valiFormData);
					console.log(res, '000');
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
					} else {
						uni.showToast({
							title: '提交失败',
							icon: 'none'
						});
					}
				} else {
					console.log('表单校验失败');
				}
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

