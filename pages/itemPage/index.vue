<template>
  <view class="container">
    <view class="section">
      <view class="filter-section">
        <picker mode="selector" :range="classList" range-key="Name" @change="onCategoryChange">
          <view class="picker">物品分类：{{ selectedCategory }}</view>
        </picker>
      </view>
      <view>
        <input type="text" placeholder="关键字" @input="onSearchInput" />
      </view>
    </view>
    <view class="item" v-for="(item, index) in categories" :key="index" @click="navigateToDetail(item)">
        <view class="info">
          <text class="name">{{ item.Name }}</text>
          <text class="text">{{ item.Format + '/' + item.Uint }}</text>
        </view>
        <view class="actions">
            <uni-icons :size="18" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
        </view>
     </view>
    <button class="add-button" @click="addItem">新增</button>
  </view>
</template>

<script>
import { getGoodsItme, getHotelClass, upgateGoodsItem, addGoodsItem, deleteGoodsItem} from '@/api/work.js'
export default {
  data() {
    return {
      categories: [],
      selectedCategory: '全部',
      searchKeyword: '',
      items: [],
      classList: []
    };
  },
  computed: {
  },
  methods: {
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    async getGoodsItmeList(){
      const res = await getGoodsItme()
      console.log(res);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.categories = res.Data
        console.log(this.categories, '000');
        
      }
      
    },
    navigateToDetail(item){
      uni.navigateTo({
        url: `/pages/itemDetail/index?id=${item.Name}`,
        success: () => {
          // 跳转成功后触发事件（确保B页面已初始化）
          setTimeout(() => {
            uni.$emit('data-detail', { data: item });
          }, 300); // 适当延迟
        }
      });
    },
    onCategoryChange(e) {
      this.selectedCategory = this.classList[e.detail.value].Name;
    },
    onSearchInput(e) {
      this.searchKeyword = e.value;
    },
    addItem() {
      uni.navigateTo({ url: '/pages/enter/index' })
    },
  },
  mounted() {
    this.getGoodsItmeList()
    this.getHotelClassList()
  }
};
</script>
<style scoped>
@import '../../common/index.css';

.filter-section {
  margin-bottom: 20rpx;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20rpx 0;
}
.text {
  padding-left: 10rpx;
  color: #999;
  font-size: 28rpx;
}
.name {
  font-size: 36rpx;
}
.picker {
  padding: 10rpx;
  background-color: #f5f5f5;
  border-radius: 10rpx;
}
.section {
  display: flex;
  align-items: center;
}
</style>