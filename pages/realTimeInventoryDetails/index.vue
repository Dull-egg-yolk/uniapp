<template>
  <view class="container">
    <!-- 库房列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in warehouseList" :key="index">
        <view class="info">
          <text class="name">{{ item.name }}</text>
          <text class="description">{{ item.description }}</text>
        </view>
        <view class="actions">
          <text class="edit" @click="openEditPopup(index)">编辑 ></text>
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
          <button class="popup-button confirm" @click="addWarehouse">确认</button>
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
          <button class="popup-button confirm" @click="updateWarehouse">确认</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showAddPopup: false,
      // 库房列表数据
      warehouseList: [
        { name: "1 号库房", description: "底下 1 层大库房" },
        { name: "2 号库房", description: "3 层小库房" }
      ],
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
    // 打开新增弹窗
    openAddPopup() {
      // this.showAddPopup = true;
      this.newWarehouse = { name: "", description: "" };
      this.$refs.addPopup.open();
    },
    // 关闭新增弹窗
    closeAddPopup() {
      this.$refs.addPopup.close();
    },
    // 提交新增库房
    addWarehouse() {
      if (!this.newWarehouse.name || !this.newWarehouse.description) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      this.warehouseList.push({ ...this.newWarehouse });
      this.closeAddPopup();
    },
    // 打开编辑弹窗
    openEditPopup(index) {
      this.editWarehouse = {
        index,
        name: this.warehouseList[index].name,
        description: this.warehouseList[index].description
      };
      this.$refs.editPopup.open();
    },
    // 关闭编辑弹窗
    closeEditPopup() {
      this.$refs.editPopup.close();
    },
    // 提交编辑库房
    updateWarehouse() {
      if (!this.editWarehouse.name || !this.editWarehouse.description) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      this.warehouseList[this.editWarehouse.index] = {
        name: this.editWarehouse.name,
        description: this.editWarehouse.description
      };
      this.closeEditPopup();
    }
  }
};
</script>

<style scoped>
@import '../../common/index.css';

.list {
  margin-bottom: 100rpx;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #eee;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 32rpx;
  font-weight: bold;
}

.description {
  font-size: 28rpx;
  color: #666;
}

.actions {
  color: #007aff;
}

/deep/.uni-popup__wrapper{
  width: 90%;
}
.popup-content {
  background-color: #fff;
  padding: 40rpx;
  border-radius: 20rpx;
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