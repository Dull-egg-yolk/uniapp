<template>
  <view class="container">
    <view class="title">
      <text class="tab">
        <!-- <uni-icons type="checkbox" size="22" color="#666666" /> -->
        新盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab active-tab">选择物品</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">盘点</text>
      <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
      <text class="tab">生成报表</text>
     </view>
     <view class="tab-title">
      <!-- 全选 -->
      <view class="select-all">
        <checkbox-group @change="handleSelectAll">
          <label>
            <checkbox :checked="isAllSelected" /> 全选
          </label>
        </checkbox-group>
      </view>
      <!-- 搜索框 -->
      <view class="input-view">
				<uni-icons type="search" size="22" color="#666666" />
				<input v-model="searchKeyword" confirm-type="search" class="input" type="text" placeholder="输入出库单信息">
				<uni-icons :color="'#999999'" v-if="searchKeyword!==''" type="clear" size="22" @click="clear1" />
			</view>
      <!-- <view class="search-box">
        
        <input
          v-model="searchKeyword"
          placeholder="请输入关键字"
          class="search-input"
        />
      </view> -->
     </view>
    <!-- 商品列表 -->
    <view class="product-list">
      <view
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="product-item"
      >
        <checkbox-group @change="handleSelectProduct(index)">
          <label>
            <checkbox :checked="product.selected" /> {{ product.name }}
          </label>
        </checkbox-group>
      </view>
    </view>
    <view class="add-button" @click="nextStep">
      <text>下一步</text>
    </view>
  </view>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      activeStep: 0,
      steps: ['选择物品', '盘点', '生成报表'],
      inventoryDate: '',
      departments: ['财务', '客房'],
      selectedDepartment: '财务',
      inventoryPerson: '',
      remarks: '',
      selectedDate: '',
      searchKeyword: '', // 搜索关键字
      products: [
        { name: '可口可乐 330ml / 听', selected: false },
        { name: '雪碧 330ml / 听', selected: false },
        { name: '燕京啤酒 330ml / 听', selected: false },
        { name: '84 消毒 500ml / 瓶', selected: false },
        { name: '一次性拖鞋', selected: false },
      ],
    };
  },
  computed: {
    // 过滤后的商品列表
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.includes(this.searchKeyword)
      );
    },
    // 是否全选
    isAllSelected() {
      return this.filteredProducts.every((product) => product.selected);
    },
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.steps.length - 1) {
        this.activeStep++;
      }
    },
    onDateChange(e) {
      this.selectedDate = e.detail.value;
      // 这里可以添加根据日期筛选数据的逻辑
    },
    onDepartmentChange(e) {
      this.selectedDepartment = this.departments[e.detail.value];
    },
    // 处理全选
    handleSelectAll(e) {
      const isSelected = e.detail.value.length > 0;
      this.filteredProducts.forEach((product) => {
        product.selected = isSelected;
      });
    },
    // 处理单个商品选择
    handleSelectProduct(index) {
      this.filteredProducts[index].selected =
        !this.filteredProducts[index].selected;
    },
    // 处理搜索
    handleSearch() {
      // 搜索逻辑已在 computed 中实现
      console.log('搜索关键字:', this.searchKeyword);
    },
  }
};
</script>

<style scoped>
@import '../../common/index.css';
.container {
  background-color: #f5f5f5;
}
.uni-checkbox .uni-checkbox-input {
  width: 34rpx;
  height: 34rpx;
}
.input-view {
		align-items: center;
		justify-content: center;
		display: flex;
		background-color: #fff;
		height: 60rpx;
		border-radius: 15rpx;
		padding: 0 4%;
		flex-wrap: nowrap;
		margin: 14rpx 10rpx;
		line-height: 60rpx;
	}
	.input-view .input {
		height: 60rpx;
		line-height: 60rpx;
		width: 100%;
		padding: 0 3%;
	}
  .select-all {
    background: #fff;
    padding: 10rpx 50rpx;
    border-radius: 10rpx;
  }
.tab-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  margin: 20rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-title {
  margin-right: 20rpx;
  width: 130rpx;
}
.tab {
  padding: 10rpx 20rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  background-color: #fff;
  color: #918d8d;
}
.active-tab {
  background-color: #fcca00;
  color: #000;
}
.step-content {
  margin-top: 20px;
}
.form-content {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
}
.form-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.picker {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>