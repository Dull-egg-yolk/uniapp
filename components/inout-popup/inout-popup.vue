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
        <text class="popup-title">{{ Title }}</text>
        <view class="close-btn" @tap="close">
          <text class="close-icon">×</text>
        </view>
      </view>

      <!-- 图片内容区域 -->
      <scroll-view class="popup-content" scroll-y>
        <view class="form-item">
          <text>{{Title}}数量</text>
          <input v-if="Title === '入库'" v-model="form.InCount" placeholder="请输入入库数量" type="number" />
          <input v-if="Title === '出库'" v-model="form.OutCount" placeholder="请输入出库数量" type="number" />
        </view>
        
        <!-- <view class="form-item">
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
        </view> -->
        
        <view class="form-item" v-if="Title === '入库'">
          <text>有效期</text>
          <uni-datetime-picker class="high-zindex" type="date" :value="form.ValidDate" 
            @change="dateChange" @maskClick="showDatePicker = false" />
        </view>
      </scroll-view>

      <!-- 底部按钮组 -->
      <view class="popup-footer">
        <view class="footer-btn save-btn" @tap="confirmStockIn">确认{{Title}}</view>
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
      default: ''
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
    },
    WarehouseID: {
      type: Number,
      default: true
    }
  },
  mounted() {
    this.getWarehouseList()
  },
  methods: {
    dateChange(e) {
      this.form.ValidDate = transformDateTime(e.detail.value)
    },
    close() {
      this.visible = false
      this.$emit('close')
    },
    handleMaskClick() {
    }
  },
  watch: {
    title(newVal) {
      console.log(newVal, 'title');
      this.Title = newVal
    }
  },
  data() {
    return {
      Title: '',
      visible: false,
      showDatePicker: false,
      categories: [],
      form: {
        WarehouseID: '', 
        GoodsID: '', 
        Note: '', 
        OperateType: 'In', 
        InCount: '', 
        ValidDate: null,
        OutCount: ''
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
        // uni.hideLoading()
        if (res.ErrorMsg) {
              uni.showToast({
                title: res.ErrorMsg,
                icon: "none"
              });
          } else {
            uni.showToast({
              title: `成功${this.Title}`,
              icon: "none"
            });
            // uni.hideLoading()
            this.close()
          }
      })
    },
    onChange(e){
      this.form.WarehouseID = this.categories[e.detail.value].Name;
    },
    confirmStockIn() {
      if (!this.validateForm()) return
      
      // uni.showLoading({ title: '提交中...' })
      this.form.GoodsID = this.ID
      this.form.Note = this.Note
      this.form.WarehouseID = this.WarehouseID
      // this.form.InCount = parseInt(this.form.InCount)
      if (this.Title === '入库') {
        delete this.form.OutCount
        this.form.InCount = parseInt(this.form.InCount)
      }else {
        this.form.OperateType = 'Out'
        delete this.form.InCount
        delete this.form.ValidDate
        this.form.OutCount = parseInt(this.form.OutCount)
      }

      this.addStockOperate()
    },
    validateForm() {
      if (this.Title === '入库') {
        console.log(1111, this.Title);
        console.log(this.form.InCount, this.form.OutCount, '0000');
        if (!this.form.InCount) {
          console.log('9999');
          
          uni.showToast({ title: '请输入入库数量', icon: 'none' })
          return false
        }
      } else {
        if (!this.form.OutCount) {
          uni.showToast({ title: '请输入出库数量', icon: 'none' })
          return false
        }
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
    console.log(this.title, '99999');
    
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