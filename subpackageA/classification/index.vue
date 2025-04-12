<template>
  <view class="container">
    <!-- 分类列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in classList" :key="index">
        <view class="info">
          <text class="name">{{ item.Name }}</text>
        </view>
        <view class="actions">
          <text class="edit" @click="openEditPopup(index)">编辑</text>
          <text class="edit" @click="deletePopup(item)">删除</text>
        </view>
      </view>
    </view>
       <!-- 新增按钮 -->
    <view class="add-button" @click="openAddPopup">
      <text>新增</text>
    </view>
     <!-- 新增分类弹窗 -->
     <uni-popup ref="addPopup" type="dialog">
      <view class="popup-content">
        <view class="form-item">
          <text class="label">类别名称</text>
          <input class="input" v-model="newCategory.name" placeholder="请输入类别名称" />
        </view>
        <!-- <view class="form-item">
          <text class="label">仓库</text>
          <picker mode="selector" :range="categories" range-key="Name" @change="onCategoryChange" >
            <input class="input" v-model="selectedCategory" placeholder="请选择仓库" />
          </picker>
        </view> -->
        <view class="popup-buttons">
          <button class="popup-button" @click="closeAddPopup">取消</button>
          <button class="popup-button confirm" @click="addWarehouse">确认</button>
        </view>
      </view>
    </uni-popup>
     <!-- 编辑分类弹窗 -->
     <uni-popup ref="editPopup" type="center">
      <view class="popup-content">
        <view class="form-item">
          <text class="label">类别名称</text>
          <input class="input" v-model="editWarehouse.name" placeholder="请输入库房名称" />
        </view>
        <!-- <view class="form-item">
          <text class="label">仓库</text>
          <picker mode="selector" :range="categories" range-key="Name" @change="onChange" >
            <input class="input" v-model="editWarehouse.selectedCategory" placeholder="请选择仓库" />
          </picker>
        </view> -->
        <view class="popup-buttons">
          <button class="popup-button" @click="closeEditPopup">取消</button>
          <button class="popup-button confirm" @click="confirmWarehouse">确认</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { showModalAsync } from '@/util/modal.js';
import { throttle } from '@/util/throttle';
import { getWarehouse, getHotelClass, addHotelClass, updateHotelClass, deleteHotelClass} from '@/api/work.js'
export default {
  data() {
    return {
      classList: [],
      newCategory: {
        name: "",
      },
      selectedCategory: '',
       // 编辑库房数据
       editWarehouse: {
        index: -1,
        name: "",
        selectedCategory: '',
      },
      categories: []
    }
  },
  methods: {
    async deletePopup(data) {
      try {
        const confirm = await showModalAsync({
          content: `确定删除${data.Name}吗？`
        });
        
        if (confirm) {
          const res = await deleteHotelClass({
            ID: data.ID,
            Name: data.Name
          });
          
          if (res.ErrorMsg) {
            uni.showToast({ title: res.ErrorMsg, icon: "none" });
          } else {
            uni.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 500,
              complete: () => {
                // 提示消失后执行
                this.getWarehouseList();
              }
            });
          }
        }
      } catch (error) {
        uni.showToast({ title: '删除失败', icon: "none" });
      }
    },
    // 获取仓库
    async getWarehouseList() {
      const res = await getWarehouse();
      this.categories = res.Data;
    },
    // 选择仓库
    onCategoryChange(e) {
      this.selectedCategory = this.categories[e.detail.value].Name;
    },
    onChange(e){
      this.editWarehouse.selectedCategory = this.categories[e.detail.value].Name;
    },
    async getHotelClassList(){
      const res = await getHotelClass();
      this.classList = res.Data;
    },
    openAddPopup: throttle(function() {
      this.newCategory = { name: "" };
      this.$refs.addPopup.open();
    },500),
    // 关闭新增弹窗
    closeAddPopup() {
      this.$refs.addPopup.close();
    },
    // 提交新增列表
    addWarehouse: throttle(async function() {
      if (!this.newCategory.name) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      const params = {
        Name: this.newCategory.name,
        // WarehouseID: this.categories.find(item => item.Name === this.selectedCategory).ID
      }
      const res = await addHotelClass(params);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "error"
        });
      } else {
        this.getHotelClassList();
        this.closeAddPopup();
      }
    },1000),
    closeEditPopup(){
      this.$refs.editPopup.close();
    },
     // 打开编辑弹窗
     openEditPopup(index) {
      this.editWarehouse = {
        index: this.classList[index].ID,
        name: this.classList[index].Name,
        // selectedCategory: this.categories[this.categories.findIndex( item => item.ID == this.classList[index].WarehouseID)].Name
      };
      this.$refs.editPopup.open();
    },
      // 提交编辑分类
    confirmWarehouse: throttle(async function() {
      if (!this.editWarehouse.name) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      const params = {
        ID: this.editWarehouse.index,
        Name: this.editWarehouse.name,
        // WarehouseID: this.categories[this.categories.findIndex( item => item.Name == this.editWarehouse.selectedCategory)].ID
      }
      const res = await updateHotelClass(params);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.getHotelClassList();
        this.closeEditPopup();
      }
    },1000),
  },
  mounted(){
    this.getHotelClassList();
    this.getWarehouseList();
  },
}
</script>

<style scoped>
@import '@/common/index.css';

.list {
  margin-bottom: 100rpx;
  height: 500px;
  overflow-y: scroll;
}
.edit {
  border:1px solid #ccc;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  margin-left: 10rpx;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}
.edit {
  font-size: 24rpx;
  color: #666;
}
/deep/.uni-popup__wrapper{
  width: 90%;
}
.popup-content {
  background-color: #fff;
  padding: 40rpx;
  border-radius: 20rpx;
  margin-bottom: 220rpx;
}

.form-item {
  margin-bottom: 40rpx;
}

.label {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.input {
  height: 80rpx;
  border: 1rpx solid #eee;
  padding: 10rpx;
  border-radius: 10rpx;
  margin-top: 10rpx;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
}

.popup-button {
  flex: 1;
  margin: 0 10rpx;
  background-color: #f0f0f0;
  color: #333;
}
.popup-button.confirm {
  background-color: #007aff;
  color: #fff;
}
</style>