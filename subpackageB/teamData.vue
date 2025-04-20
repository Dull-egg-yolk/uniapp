<template>
  <view class="admin-container">
    <!-- 顶部标题 -->
    <view class="header">
      <text class="title">管理员</text>
    </view>

      <!-- 普通管理员分组 -->
       <view class="group-box">
        <view class="admin-group" v-for="(group, index) in adminGroups" :key="index">
          <view class="admin-item" @click="showFilter(group)">
            <view class="admin-info">
              <view class="avatar"><image class="avatar-img"
                :src="group.Avatar"
                mode="scaleToFill"
              /></view>
              <view class="info">
                <text class="name">{{ group.Name }} <text class="ico">{{ teamData[group.UserHotelRole.Role] }}</text></text>
                <text class="role">{{ teamData[group.UserHotelRole.Role] }}</text>
              </view>
            </view>
            <view>
              <text class="set">设置</text><uni-icons type="forward" size="16" color="#999"></uni-icons>
            </view>
          </view>
        </view>
      </view>
      <uni-popup ref="popup" type="dialog">
        <uni-popup-dialog 
          mode="base" 
          title="配置职位" 
          :content="`当前用户: ${currentUser.Name}`"
          :before-close="true"
          @close="closeFilter"
          @confirm="confirmRole"
        >
          <radio-group class="role-radio-group" @change="roleChange">
            <label class="role-option" v-for="(role, index) in roleOptions" :key="index">
              <radio :value="role.value" :checked="currentUser.roleValue === role.value" />
              <text>{{role.label}}</text>
            </label>
          </radio-group>
        </uni-popup-dialog>
      </uni-popup>

      <!-- 新增按钮 -->
      <view class="add-btn" @click="addAdmin">
        <text class="btn-text">添加同事加入</text>
      </view>
      <inviteFriends-popup 
        ref="InviteFriendsPopup"
        confirmText="邀请同事加入"
        closeText="取消"
        @confirm="onConfirm"
      />
    </view>
</template>
<script>
import inviteFriendsPopup from '../components/inviteFriends-popup/inviteFriends-popup.vue'
import { getHotelUser, updateHotelUser } from '@/api/user'
export default {
  data() {
    return {
      adminGroups: [],
      InvitedCode: '',
      teamData: {
        'superuser': '超级管理员',
        'operator': '操作员',
        'financial': '财务员',
      },
      roleOptions: [
        { label: '超级管理员', value: 'superuser' },
        { label: '财务员', value: 'financial' },
        { label: '操作员', value: 'operator' }
      ],
      currentUser: {},
      selectedRole: ''
    }
  },
  components: {
    inviteFriendsPopup
  },
  methods: {
     // 显示筛选弹窗
     showFilter(user) {
      this.currentUser = JSON.parse(JSON.stringify(user))
      this.selectedRole = user.roleValue
      this.$refs.popup.open()
    },
    
    // 关闭弹窗
    closeFilter() {
      this.selectedRole = ''
      this.$refs.popup.close()
    },
    // 角色选择变化
    roleChange(e) {
      this.selectedRole = e.detail.value
    },
     // 确认角色修改
     confirmRole() {
      // const index = this.adminGroups.findIndex(user => user.ID === this.currentUser.ID)
      // if (index !== -1) {
      //   // 更新角色
      //   const selectedOption = this.roleOptions.find(role => role.value === this.selectedRole)
      //   if (selectedOption) {
      //     this.adminGroups[index].UserHotelRole.Role = this.selectedRole
      //   }
      // }
      this.updateHotelUser(this.currentUser.ID, this.selectedRole)
    },
    // 获取酒店用户信息
    async getHotelUsers() {
      try {
        const res = await getHotelUser()
        console.log(res)
        // 处理返回的数据，生成adminGroups
        this.adminGroups = res.Data
      } catch (error) {
        console.error(error)
      }
    },
    async updateHotelUser(id,role){
      if (role === 'superuser') {
        uni.showToast({
          title: '超级管理员一旦修改，你将不再是超级管理员，请谨慎操作',
          icon: 'none'
        });
      }
      const params = {
        ID: id,
        UserHotelRole: {
          Role: role
        }
      }
      await updateHotelUser(params).then(res => {
        if (res.ErrorMsg) {
          uni.showToast({
            title: res.ErrorMsg,
            icon: "none"
          });
        } else {
          uni.showToast({
            title: '权限修改成功',
            icon: 'none'
          });
          const index = this.adminGroups.findIndex(user => user.ID === this.currentUser.ID)
          if (index !== -1) {
            // 更新角色
            const selectedOption = this.roleOptions.find(role => role.value === this.selectedRole)
            if (selectedOption) {
              this.adminGroups[index].UserHotelRole.Role = this.selectedRole
            }
          }
          this.$refs.popup.close()
          this.getHotelUsers()
        }
      }
      )
    },
    // 新增管理员
    addAdmin() {
      this.$refs.InviteFriendsPopup.open()
    },
    // 分享好友功能配置
    onShareAppMessage(res) {
      console.log(res, '分享好友');
      const userInfo = uni.getStorageSync('user_info')
      console.log(userInfo.Hotel.ID, '888');
      
      return {
        title: '快来加入我们吧',  // 必填
        path: `/pages/user/user?InvitedByCode=${this.InvitedCode}&InvitedByHotelID=${userInfo.Hotel.ID}`, // 必填，分享页面路径
        imageUrl: '/static/img/weixin.png', // 可选，分享图片
        desc: '自己有会员，经营更稳健',   // 可选，微信小程序支持
        success(res) {
          console.log('分享成功', res);
          uni.showToast({ title: '分享成功' });
        },
        fail(err) {
          console.log('分享失败', err);
        }
      }
    },
    // 微信朋友圈分享
    onShareTimeline() {
      return {
        title: this.shareData.title,
        query: `ref=${uni.getStorageSync('userId')}`,
        imageUrl: this.shareData.image
      };
    }
  },
  mounted() {
    this.getHotelUsers()
    this.InvitedCode = uni.getStorageSync('user_info').InvitedCode
    console.log(this.InvitedCode);
    
  }
}
</script>
<style scoped>
.admin-container {
  width: 100%;
  padding: 20rpx;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--status-bar-height));
}
.admin-info {
  display: flex;
  align-items: center;
}
.header {
  padding: 30rpx 0;
  height: 60rpx;
}
.info {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}
.role-radio-group {
  width: 100%;
  padding: 20rpx 0;
}

.role-option {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.role-option text {
  margin-left: 20rpx;
  font-size: 28rpx;
}

.group-box {
  flex: 1;
}
.admin-list {
  background-color: #fff;
  border-radius: 12rpx;
  overflow: hidden;
}

.admin-group {
  border-radius: 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
}
.avatar-img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.admin-item {
  padding: 28rpx 30rpx;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
}
.filter-popup {
  background: #fff;
  padding: 30rpx;
  border-radius: 20rpx 20rpx 0 0;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
  font-size: 32rpx;
  font-weight: bold;
}
.role-options {
  margin-bottom: 40rpx;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
}

.option-item text {
  margin-left: 20rpx;
}
.super-admin {
  background-color: #f9f9f9;
}

.name {
  font-size: 32rpx;
  color: #000;
  flex: 1;
}
.ico {
  font-size: 20rpx;
  color: #999;
  margin-left: 10rpx;
}
.set {
  font-size: 30rpx;
  color: #999;
}

.role {
  font-size: 30rpx;
  color: #f40e0e;
  margin-right: 40rpx;
}

.sub-admin-list {
  background-color: #fafafa;
  padding-left: 60rpx;
}

.sub-admin-item {
  padding: 24rpx 30rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx dashed #eee;
  position: relative;
}

.settings {
  position: absolute;
  right: 30rpx;
  color: #07C160;
  font-size: 28rpx;
}

.add-btn {
  margin-top: 40rpx;
  background-color: #F65237;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
  margin: 20rpx auto;
  padding: 16rpx 50rpx;
}

.btn-text {
  /* width: 200rpx;
  height: 80rpx; */
}
</style>