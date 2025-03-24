<template>
  <view class="container">
    <view class="section">
      <view class="filter-section">
        <picker mode="selector" :range="categories" @change="onCategoryChange">
          <view class="picker">物品分类：{{ selectedCategory }}</view>
        </picker>
      </view>
      <uni-search-bar placeholder="关键字" @input="onSearchInput" />
    </view>
    <uni-list>
      <uni-list-item v-for="(item, index) in filteredItems" :key="index" :title="item.name" @click="navigateToDetail(item)" link />
    </uni-list>
    <button class="add-button" @click="addItem">新增</button>
  </view>
</template>

<script>
import { getGoodsItme, upgateGoodsItem, addGoodsItem, deleteGoodsItem} from '@/api/work.js'
export default {
  data() {
    return {
      categories: ['全部', '饮料', '消毒用品', '日用品'],
      selectedCategory: '全部',
      searchKeyword: '',
      items: []
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        const matchesCategory = this.selectedCategory === '全部' || item.category === this.selectedCategory;
        const matchesKeyword = item.name.includes(this.searchKeyword) || item.description.includes(this.searchKeyword);
        return matchesCategory && matchesKeyword;
      });
    }
  },
  methods: {
    async getGoodsItmeList(){
      const res = await getGoodsItme()
      console.log(res);
      
    },
    navigateToDetail(item){
      console.log(item);
      uni.navigateTo({ url: `/pages/itemDetail/index?id=${item.name}`, })
    },
    onCategoryChange(e) {
      this.selectedCategory = this.categories[e.detail.value];
    },
    onSearchInput(e) {
      this.searchKeyword = e.value;
    },
    addItem() {
      uni.navigateTo({ url: '/pages/enter/index' })
    },
    fetchItems() {
      // 模拟从服务器获取数据
      setTimeout(() => {
        this.items = [
          { name: '可口可乐 330ml / 听', description: '饮料', category: '饮料' },
          { name: '雪碧 330ml / 听', description: '饮料', category: '饮料' },
          { name: '燕京啤酒 330ml / 听', description: '饮料', category: '饮料' },
          { name: '84 消毒 500ml / 瓶', description: '消毒用品', category: '消毒用品' },
          { name: '一次性拖鞋', description: '日用品', category: '日用品' }
        ];
      }, 100);
    }
  },
  mounted() {
    this.fetchItems();
    this.getGoodsItmeList()
  }
};
</script>
<style scoped>
@import '../../common/index.css';

.filter-section {
  margin-bottom: 20rpx;
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