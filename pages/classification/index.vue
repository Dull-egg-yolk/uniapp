<template>
  <view class="container">
    <!-- 分类列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in classList" :key="index">
        <view class="info">
          <text class="name">{{ item.name }}</text>
          <!-- <text class="description">{{ item.description }}</text> -->
        </view>
        <view class="actions">
          <text class="edit" @click="openEditPopup(index)">
            <uni-icons :size="16" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
          </text>
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
          <text class="label">类别名称</text>
          <input class="input" v-model="newCategory.name" placeholder="请输入类别名称" />
        </view>
        <view class="popup-buttons">
          <button class="popup-button" @click="closeAddPopup">取消</button>
          <button class="popup-button confirm" @click="addWarehouse">确认</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      classList: [
        { name: '分类1' },
        { name: '分类2' },
        { name: '分类3' },
      ],
      newCategory: {
        name: "",
        description: ""
      },
    }
  },
  methods: {
    openAddPopup(index) {
      this.newCategory = { name: "" };
      this.$refs.addPopup.open();
    },
    // 关闭新增弹窗
    closeAddPopup() {
      this.$refs.addPopup.close();
    },
    // 提交新增列表
    addWarehouse() {
      if (!this.newCategory.name) {
        uni.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return;
      }
      this.warehouseList.push({ ...this.newCategory });
      this.closeAddPopup();
    },
  }
}
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
</style>