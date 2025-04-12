<template>
  <view class="container">
    <view class="title">
      <!-- <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="checkbox" /> -->
      <view class="tab">
        <uni-icons :size="16" class="uni-icon-wrapper uni-icon-left" color="#F65237" type="checkbox" />
        新盘点</view>
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
			</view>
     </view>
    <!-- 商品列表 -->
    <view class="product-list">
      <view
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="product-item"
      >
        <checkbox-group @change="handleSelectProduct($event, index)">
          <label>
            <checkbox :value="JSON.stringify(product.ID)" :checked="product.selected" /> {{ product.Name + ' ' + product.Format + '/' + product.Uint }}
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
import { throttle } from '@/util/throttle';
import { getGoodsItme, addStockTakingString } from '@/api/work.js';
export default {
  components: {},
  data() {
    return {
      query: {
        StockTakingRecordID: null,
        Page: 1,
        Size: 10,
        Search: '',
        Status: ''
      },
      remarks: '',
      selectedDate: '',
      searchKeyword: '', // 搜索关键字
      products: [],
      selectedIds: []
    };
  },
  computed: {
    // 过滤后的商品列表
    filteredProducts() {
      return this.products.filter((product) =>
        product.Name.includes(this.searchKeyword)
      );
    },
    // 是否全选
    isAllSelected() {
      return this.filteredProducts.every((product) => product.selected);
    },
  },
  methods: {
    async getGoodsItme() {
      const res = await getGoodsItme(this.query);
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
          this.products = res.Data;
          this.products = this.products.map((item) => {
            return{
              ...item,
              selected: false
            }
          })
				}
    },
    nextStep: throttle(async function() {
      // uni.navigateTo({
      //   url: `/subpackageA/checking/index?id=${this.query.StockTakingRecordID}`
      // });
      const params = {
        StockTakingRecordID: parseInt(this.query.StockTakingRecordID),
        GoodsIDs: this.selectedIds
      }
      // 判断 如果未选择 提示
      if (this.selectedIds.length === 0) {
        uni.showToast({
          title: '请选择商品',
          icon: "none"
        });
        return;
      }
      const res = await addStockTakingString(params)
      if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
          // this.products = res.Data;
          // this.products = this.products.map((item) => {
          //   return{
          //     ...item,
          //     selected: false
          //   }
          // })
          uni.navigateTo({
            url: `/subpackageA/checking/index?id=${this.query.StockTakingRecordID}`
          });
				}
    }, 1000),
    // 处理全选
    handleSelectAll(e) {
      const isSelected = e.detail.value.length > 0;
      this.filteredProducts.forEach((product) => {
        product.selected = isSelected;
      });
      this.selectedIds = e.detail.value.length ? this.products.map(item => item.ID) : []
    },
    // 处理单个商品选择
    handleSelectProduct(e,index) {
      this.filteredProducts[index].selected =
        !this.filteredProducts[index].selected;
      this.selectedIds.push(parseInt(e.detail.value))
    },
  },
  onLoad(options) {
    this.query.StockTakingRecordID = options.id;
    console.log(options.id); // 输出 "value"
  },
  mounted(){
    if(this.query.StockTakingRecordID) {
      this.getGoodsItme();
    }
  },
};
</script>

<style scoped>
@import '@/common/index.css';
.container {
  background-color: #f5f5f5;
}
.product-list {
  background: #fff;
  border-radius: 20rpx;
  padding: 20rpx;
  height: 800rpx;
  overflow-y: scroll;
}
.product-item {
  margin-bottom: 20rpx;
  padding-bottom: 10rpx;
  border-bottom: 1px solid #eee;
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
    padding: 10rpx 30rpx;
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
  font-size: 26rpx;
  display: flex;
  align-items: center;
}
.uni-icon-left {
  margin-right: 10rpx;
}
.active-tab {
  display: flex;
  align-items: center;
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