<template>
  <view class="container">
    <!-- 库房列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in warehouseList" :key="index">
        <view class="info">
          <text class="name">{{ item.Name }}</text>
          <text class="description">{{ item.Place }}</text>
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

    <!-- 新增库房弹窗 -->
    <uni-popup ref="addPopup" type="dialog">
      <view class="popup-content">
        <view class="form-item">
          <text class="label">库房名称</text>
          <input class="input" v-model="newWarehouse.name" placeholder="请输入库房名称" />
        </view>
        <view class="form-item">
          <text class="label">库房描述</text>
          <input class="input" v-model="newWarehouse.description" placeholder="请输入库房描述" />
        </view>
        <view class="popup-buttons">
          <button class="popup-button" @click="closeAddPopup">取消</button>
          <button class="popup-button confirm" @click="confirmAddWarehouse">确认</button>
        </view>
      </view>
    </uni-popup>

    <!-- 编辑库房弹窗 -->
    <uni-popup ref="editPopup" type="center">
      <view class="popup-content">
        <view class="form-item">
          <text class="label">库房名称</text>
          <input class="input" v-model="editWarehouse.name" placeholder="请输入库房名称" />
        </view>
        <view class="form-item">
          <text class="label">库房描述</text>
          <input class="input" v-model="editWarehouse.description" placeholder="请输入库房描述" />
        </view>
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
import { getWarehouse, addWarehouse, updateWarehouse, deleteWarehouse } from "@/api/work.js";
export default {
  data() {
    return {
      showAddPopup: false,
      // 库房列表数据
      warehouseList: [],
      // 新增库房数据
      newWarehouse: {
        name: "",
        description: ""
      },
      // 编辑库房数据
      editWarehouse: {
        index: -1,
        name: "",
        description: ""
      }
    };
  },
  methods: {
    async deletePopup(data) {
      try {
        const confirm = await showModalAsync({
          content: `确定删除${data.Name}吗？`
        });
        
        if (confirm) {
          const res = await deleteWarehouse({
            ID: data.ID,
            Name: data.Name,
            Place: data.Place
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
    async getWarehouseList() {
      const res = await getWarehouse();
      console.log(res);
      this.warehouseList = res.Data;
    },
    openAddPopup: throttle(function() {
      this.newWarehouse = { name: "", description: "" };
      this.$refs.addPopup.open();
    }, 500),
    // 关闭新增弹窗
    closeAddPopup() {
      this.$refs.addPopup.close();
    },
    // 提交新增库房
    confirmAddWarehouse: throttle( async function() {
      if (!this.newWarehouse.name || !this.newWarehouse.description) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      const params = {
        Name: this.newWarehouse.name,
        Place: this.newWarehouse.description
      }
      const res = await addWarehouse(params);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        uni.showToast({
          title: '新增成功',
          icon: "success"
        });
        this.getWarehouseList();
        this.closeAddPopup();
      }
    }, 1000),
    // 打开编辑弹窗
    openEditPopup(index) {
      console.log(index);
      this.editWarehouse = {
        index: this.warehouseList[index].ID,
        name: this.warehouseList[index].Name,
        description: this.warehouseList[index].Place
      };
      this.$refs.editPopup.open();
    },
    // 关闭编辑弹窗
    closeEditPopup() {
      this.$refs.editPopup.close();
    },
    // 提交编辑库房
    confirmWarehouse: throttle( async function() {
      if (!this.editWarehouse.name || !this.editWarehouse.description) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      const params = {
        ID: this.editWarehouse.index,
        Name: this.editWarehouse.name,
        Place: this.editWarehouse.description
      }
      const res = await updateWarehouse(params);
      if (res.ErrorMsg) {
        uni.showToast({
          title: res.ErrorMsg,
          icon: "none"
        });
      } else {
        this.getWarehouseList();
        this.closeEditPopup();
      }
    },1000),
  },
  mounted(){
    this.getWarehouseList();
  },
  created(){
    // this.getWarehouseList();
  }
};
</script>

<style scoped>
@import '@/common/index.css';
.container {
  background-color: #f8f8f8;
  color: rgba(108,108,108,1);
}
.list {
  margin-bottom: 100rpx;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  border-bottom: 1rpx solid #eee;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 28rpx;
  font-weight: bold;
  color: #000;
}

.description {
  font-size: 24rpx;
  color: #666;
}

.actions {
  /* color: #007aff; */
  font-size: 24rpx;
}
.edit {
  border:1px solid #ccc;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  margin-left: 10rpx;
}

/deep/.uni-popup__wrapper{
  width: 90%;
}
.popup-content {
  background-color: #fff;
  padding: 40rpx;
  border-radius: 20rpx;
  margin-bottom: 300rpx;
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