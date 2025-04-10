<template>
  <div>
    <!-- 遮罩层（置灰+禁用点击） -->
    <view 
      class="popup-mask" 
      v-if="visible" 
      @tap="handleMaskClick"
    />

    <!-- 弹窗主体 -->
    <div 
      v-if="visible" 
      class="popup-container"
      :class="{ 'popup-show': visible }"
    >
      <!-- 标题栏 -->
      <view class="popup-header">
        <text class="popup-title">{{ title }}</text>
        <view class="close-btn" @tap="close">
          <text class="close-icon">×</text>
        </view>
      </view>

      <!-- 图片内容区域 -->
      <scroll-view class="popup-content" scroll-y>
        <view class="form-item">
          <text>入库数量</text>
          <input v-model="form.InCount" placeholder="请输入" type="number" />
        </view>
        
        <view class="form-item">
          <text>库房编号</text>
          <picker 
            mode="selector" 
            :range="categories" 
            range-key="Name" 
            @change="onChange"
          >
            <view class="picker-input">
              {{ form.WarehouseID || '请选择仓库' }}
            </view>
          </picker>
        </view>
        
        <view class="form-item">
          <text>有效期</text>
          <uni-datetime-picker class="high-zindex" type="datetime" :value="form.ValidDate" 
            @change="dateChange" @maskClick="showDatePicker = false" />
        </view>
      </scroll-view>

      <!-- 底部按钮组 -->
      <view class="popup-footer">
        <view class="footer-btn save-btn" @tap="confirmStockIn">确认{{title}}</view>
      </view>
    </div>
  </div>
</template>

<script>
import { addStockOperate, getWarehouse } from '@/api/work'
import { transformDateTime } from '@/util/day'
export default {
  props: {
    title: {
      type: String,
      default: '图片预览'
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    Note: {
      type: String,
      default: ''
    },
    ID: {
      type: Number,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      showDatePicker: false,
      categories: [],
      form: {
        WarehouseID: '', 
        GoodsID: '', 
        Note: '', 
        OperateType: 'In', 
        InCount: '', 
        ValidDate: ''
      }
    }
  },
  methods: {
    // 获取仓库
    async getWarehouseList() {
      const res = await getWarehouse();
      this.categories = res.Data;
    },
    async addStockOperate(){
      await addStockOperate(this.form).then(res=>{
        console.log(res);
        uni.hideLoading()
        if (res.ErrorMsg) {
              uni.showToast({
                title: res.ErrorMsg,
                icon: "none"
              });
          } else {
            uni.hideLoading()
            this.close()
          }
      })
    },
    onChange(e){
      this.form.WarehouseID = this.categories[e.detail.value].Name;
    },
    confirmStockIn() {
      if (!this.validateForm()) return
      
      uni.showLoading({ title: '提交中...' })
      this.form.GoodsID = this.ID
      this.form.Note = this.Note
      this.form.WarehouseID = this.categories.find(item => item.Name === this.form.WarehouseID).ID
      this.form.InCount = parseInt(this.form.InCount)
      this.addStockOperate()
    },
    validateForm() {
      if (!this.form.InCount) {
        uni.showToast({ title: '请输入入库数量', icon: 'none' })
        return false
      }
      if (!this.form.WarehouseID) {
        uni.showToast({ title: '请输入库房编号', icon: 'none' })
        return false
      }
      return true
    },
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
      this.resetForm()
      this.$emit('close')
    },
    dateChange(e) {
      this.form.ValidDate = transformDateTime(e);
      this.showDatePicker = false
    },
    resetForm() {
      this.form = {
        InCount: '',
        WarehouseID: '',
        ValidDate: ''
      }
    },
    handleMaskClick() {
      if (this.closeOnClickMask) this.close()
    },
    handlePrint() {
      this.$emit('print')
      this.close()
    },
    handleSave() {
      this.$emit('save')
      this.close()
    }
  },
  mounted() {
    this.getWarehouseList()
  }
}
</script>

<style scoped>
/* .high-zindex .uni-datepicker-modal {
  z-index: 99999 !important;
} */
/* 遮罩层 */
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1;
}
.form-item {
  margin-bottom: 30rpx;
}

.form-item text {
  display: block;
  margin-bottom: 10rpx;
  font-size: 28rpx;
  color: #666;
}

.form-item input {
  height: 80rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  padding: 0 20rpx;
  font-size: 28rpx;
}
.form-item .picker-input {
  height: 80rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  padding: 0 20rpx;
  font-size: 28rpx;
  line-height: 80rpx;
}
/* 弹窗容器（居中） */
.popup-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -100%;
  background: #fff;
  border-radius: 24rpx 24rpx 0 0;
  transition: all 0.3s ease;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  z-index: 99999;
}

.popup-show {
  bottom: 0;
}

/* 标题栏 */
.popup-header {
  padding: 24rpx 32rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #f5f5f5;
}

.popup-title {
  font-size: 34rpx;
  font-weight: bold;
  color: #333;
}

.close-btn {
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  font-size: 40rpx;
  color: #999;
  line-height: 1;
}
/* 内容区域 */
.popup-content {
  flex: 1;
  padding: 80rpx 20rpx;
  overflow-y: auto;
  width: auto !important;
}
.popup-content .txt {
  text-align: center;
}

.content-image {
  width: 100%;
  border-radius: 8rpx;
}

/* 底部按钮 */
.popup-footer {
  display: flex;
  padding: 20rpx;
  border-top: 1rpx solid #f5f5f5;
}

.footer-btn {
  flex: 1;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  border-radius: 8rpx;
  margin: 0 10rpx;
  text-align: center;
}

.print-btn {
  background: #bebebe;
  color: #fff;
}

.save-btn {
  background: #f65237;
  color: #fff;
}
/deep/.uni-date-changed {
  padding: 20rpx 30rpx !important;
}
</style>