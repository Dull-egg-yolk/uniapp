<template>
  <view class="box">
     <!-- 自定义导航栏 -->
    <view class="custom-navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="custom-navbar-left" @click="gotoUser">
        <image :src="userInfo.Avatar || '/static/img/header-img.svg'" class="avatar" />
        <view class="name">
          <text>{{userInfo.Name}}</text>
        </view>
      </view>
      <view class="message" v-if="showMeg" :style="{ marginRight: menuButtonWidth + 'px' }" @click="navigateTo('earlyWarning')">
        <image src="/static/img/message.svg" class="meg" />
        <text class="unread-count" v-if="unreadMessageCount > 0">{{ unreadMessageCount }}</text>
      </view>
    </view>
    <view class="header-top">
      <view class="header" @click="showPopup" v-if="isShow">
      <text class="title">点击查看新手指引，1 分钟快速掌握！ </text>
    </view>
    <view class="container">
      <!-- 无缝轮播图 -->
      <swiper
        class="swiper"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="500"
        :circular="true"
      >
        <!-- 轮播项 -->
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <image class="swiper-image" :src="item" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    </view>
    <view class="button-container">
      <view class="button-row">
        <view class="function-button" v-for="item in functionData" :key="item.name" @click="navigateTo(item.url)">
          <img :src="`/static/images/${item.img}.svg`"/>
          <button class="btn">{{ item.name }}</button>
        </view>
        <!-- <view class="function-button" @click="navigateTo('classification')"><img src="../../static/img/allHL.png"/><button class="btn">分类设置</button></view>
        <view class="function-button" @click="navigateTo('itemPage')"><img src="../../static/img/allHL.png"/><button class="btn">物品列表</button></view>
        <view class="function-button" @click="navigateTo('enter')"><img src="../../static/img/allHL.png"/><button class="btn">物品录入</button></view>
        <view class="function-button" @click="navigateTo('stocktaking')"><img src="../../static/img/allHL.png"/><button class="btn">盘点</button></view>
        <view class="function-button" @click="navigateTo('export')"><img src="../../static/img/allHL.png"/><button class="btn">报表下载</button></view> -->
      </view>
    </view>
    <global-popup 
      ref="globalPopup"
      title="新手指引"
      :content="popupContent"
      confirmText="我已掌握，关闭并不再提示"
      @confirm="onConfirm"
    />
    <TabBar :activeIndex=0 @parent1Event="changeTO"></TabBar>
  </view>
</template>

<script>
import TabBar from '../../components/custom-tab-bar/tabBar.vue';
import globalPopup from '@/components/global-popup/global-popup.vue'
import { userPage, appConfig, getAppMessage } from '@/api/user.js'
export default {
  data() {
    return {
      functionList: [
        { icon: "person-info", name: "库房设置",url:'warehouseManagement', img: 'iconPark-city-one' },
        { icon: "team-setting", name: "分类设置" ,url:'classification', img: 'iconPark-more-four'},
        { icon: "invite-gift", name: "物品列表" ,url:'itemPage', img: 'iconPark-list' },
        { icon: "help-doc", name: "物品录入",url:'enter', img: 'iconPark-newlybuild' },
        { icon: "new-guide", name: "盘点" ,url:'stocktaking', img: 'iconPark-checklist' },
        { icon: "info-feedback", name: "报表下载" ,url:'export', img: 'stLine-download-l' }
      ],
      functionData: [],
      showMeg: true,
      popupContent: '',
      statusBarHeight: 0, // 状态栏高度
      menuButtonWidth: 0, // 菜单按钮宽度
      navBarHeight: 0,
      unreadMessageCount: 0, // 未读消息数量
      appMessage: [],
      swiperList: [],
      userInfo: {},
      isShow: false
    };
  },
  onLoad() {
    // 获取状态栏高度
    const systemInfo = uni.getWindowInfo();
    this.statusBarHeight = systemInfo.statusBarHeight || 0;
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.menuButtonWidth = menuButtonInfo.width;
    this.navBarHeight = menuButtonInfo.bottom + (menuButtonInfo.top - this.statusBarHeight);
  },
  onShow() {
    this.userInfo = uni.getStorageSync('user_info');
    this.userPage();
    this.appConfig();
    const isSHow = uni.getStorageSync('isShow')
    if (isSHow !== '') {
      this.isShow = isSHow
    }else {
      this.isShow = true
    }
    if (!this.userInfo) return;
    this.getAppMessage();
	},
  components: {
    TabBar,
    globalPopup
  },
  methods: {
    gotoUser(){
      uni.navigateTo({
        url: '/pages/user/userInfo'
      })
    },
    changeTO(data){
    },
    async getAppMessage(){
      await getAppMessage().then(res=>{
        if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
        } else {
          this.unreadMessageCount = res.Unread;
          this.appMessage = res.Data;
        }
      })
    },
    showPopup() {
      this.$refs.globalPopup.open()
    },
    onConfirm() {
      this.$refs.globalPopup.close()
      this.isShow = false
      uni.setStorageSync('isShow', false)
    },
    navigateTo(page) {
      uni.navigateTo({
        url: `/subpackageA/${page}/index`,
        success: () => {
          // 跳转成功后触发事件（确保B页面已初始化）
          setTimeout(() => {
            uni.$emit('unread-message', { data: this.appMessage });
          }, 100); // 适当延迟
        }
      });
    },
    async appConfig() {
			  await appConfig().then(res => {
					if (res.ErrorMsg) {
						uni.showToast({
							title: res.ErrorMsg,
							icon: "none"
						});
					} else {
            const configList = res.Data;
            configList.forEach(item => {
            if (item.Key === "Slideshow") {
                // this.swiperList = item.Value
                this.swiperList = item.Value.split(',')
              } else if (item.Key === "BeginnerGuide") {
                this.popupContent = item.Value
              }
            });
						uni.setStorageSync('user_config', res.Data)  
					}
			  })
			},
		async userPage() {
		  await userPage().then(res => {
				if (res.ErrorMsg) {
					uni.showToast({
						title: res.ErrorMsg,
						icon: "none"
					});
				} else {
          const tabList = res.Data['fe:workbench']
          const result = this.functionList.filter(itemA => 
            tabList.some(itemB => itemB.Name === itemA.name)
            );
          this.functionData = result;
          const showMeg = tabList.find(item => item.Name === '查看预警');
          if (showMeg) {
            this.showMeg = true;
          } else {
            this.showMeg = false;
          }
					uni.setStorageSync('user_page', res.Data)  
				}
		  })
		},
	},
  mounted() {
  },
  onReady() {
	},
};
</script>

<style scoped>
.header {
  height: 28px;
  padding: 0 20rpx;
  background-color: #f8f8f8;
}
.header-top {
  margin-top: 134rpx;
}
.unread-count {
  background-color: #F65237;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  width: 30rpx;
  height: 30rpx;
  line-height: 30rpx;
  text-align: center;
}
.header .title {
  line-height: 28px;
  color: rgba(96,137,247,1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.box {
  width: 100%;
  background: rgb(248 248 248);
}
.container {
  width: 100%;
}
.custom-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  z-index: 99999999;
}
.custom-navbar-left {
  display: flex;
  align-items: center;
}
.avatar {
  width: 70rpx;
  height: 70rpx;
  margin: 10rpx;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.meg {
  width: 56rpx;
  height: 56rpx;
}

.message {
  margin-left: 10px;
  font-size: 16px;
  color: #333;
  position: relative;
}

swiper {
  width: 100%;
  height: 300rpx;
}

.swiper-image {
  width: 100%;
  height: 100%;
}

.button-container {
  margin: 40rpx 20rpx;
  background-color: #fff;
  padding: 10rpx;
  border-radius: 15rpx;
}

.button-row {
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20rpx;
}

.function-button {
  width: 25%;
  margin: 20rpx 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  color: #000;
  border: none;
  box-sizing: border-box;
  /* border-radius: 10rpx; */
}
img{
  height: 60rpx;
  width: 60rpx;
  margin-bottom: 16rpx;
}
.function-button::after{
  border: none;
  margin: 0;
  padding: 0;
}
.btn {
  margin: 0;
  padding: 0;
  line-height: normal;
  font-size: 24rpx;
  background-color: #fff;
  color: #666;
}
.btn::after{
  border: none;
}
/deep/.button-hover {
  background-color: #fff;
  color: #000;
}

.function-button:active {
  background-color: #fff;
}
</style>