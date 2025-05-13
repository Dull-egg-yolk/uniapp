<template>
  <view>
    <header-info :userInfon="userInfon"></header-info>
    <!-- 常用功能 -->
    <view class="function-section">
      <view class="section-title">常用功能</view>
      <view class="function-grid">
        <view class="function-item" v-for="(item,index) in functionList" :key="index" @click="goToPage(item.url)">
          <image :src="`/static/images/${item.img}.svg`" class="function-icon" />
          <text class="function-text">{{ item.name }}</text>
        </view>
        <view class="function-item">
          <button class="contact-btn" @click="contactCustomerService">
            <image src='/static/images/iconPark-headset.svg' class="function-icon" />
            <text class="function-text">联系客服</text>
          </button>
        </view>
      </view>
    </view>

    <!-- 广告横幅 -->
    <!-- <view class="invite-section">
      <view class="invite-banner">
        <view class="invite-title">自己有会员，经营更稳健</view>
        <view class="invite-desc">点击了解 <a @click="gotoWebsite">九点荟会员管理系统</a></view>
      </view>
    </view> -->
    <global-popup 
      ref="globalPopup"
      title="新手指引"
      :content="popupContent"
      confirmText="我已掌握，关闭并不再提示"
      @confirm="onConfirm"
    />
  </view>
</template>

<script>
import headerInfo from "./headerInfo.vue";
import globalPopup from '@/components/global-popup/global-popup.vue'

export default {
  components: {
    headerInfo,
    globalPopup
  },
  props: {
    updateUser: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    updateUser(newVal) {
      this.userInfon = newVal;
      console.log(newVal, 22222);
    }
  },
  data() {
    return {
      userInfon: {},
      personalInvitePage: '',
      //将data文件夹中的数据读入
      userAvatar: "用户头像地址",
      userName: "佟湘玉",
      userRole: "掌柜",
      storeName: "同福客栈七侠镇衙门口店",
      expireDate: "2025-12-31",
      functionList: [
        { icon: "person-info", name: "用户信息",url:'subpackageB/userInfo', img: 'riLine-contacts-line' },
        { icon: "team-setting", name: "团队设置" ,url:'subpackageB/teamData', img: 'antOutline-team'},
        { icon: "invite-gift", name: "邀请有礼" ,url:'subpackageB/InvitationGifts', img: 'riLine-mail-send-line' },
        { icon: "help-doc", name: "帮助文档",url:'subpackageB/helpDoc', img: 'iconPark-doc-search-two' },
        { icon: "new-guide", name: "新手指南" ,url:'subpackageB/guide', img: 'if-compass' },
        { icon: "info-feedback", name: "需求反馈" ,url:'subpackageB/feedback', img: 'riLine-feedback-line' },
        { icon: "add-desktop", name: "添加到桌面" ,url:'subpackageB/addHome', img: 'md-airplay' },
      ],
      popupContent: ''
    };
  },
  mounted() {
    const tabList = uni.getStorageSync('user_page')['fe:user']
    const result = this.functionList.filter(itemA => 
      tabList.some(itemB => itemB.Name === itemA.name)
      );
    this.functionList = result;
    const configList = uni.getStorageSync('user_config')
    configList.forEach(item => {
      if (item.Key === "BeginnerGuide") {
        this.popupContent = item.Value
      }else if (item.Key === "PersonalInvitePage") {
        this.personalInvitePage = item.Value
      }
    });
  },
  onLoad(option) {
		if(uni.getStorageSync('user_page')) {
			console.log(uni.getStorageSync('user_page'));
		} else {
			this.isLoginStatus = false;
		}
	},
  onShow() {
    console.log(this.updateUser, 11111);
  },
  methods: {
    contactCustomerService(){
      wx.openCustomerServiceChat({
        extInfo: {url: 'https://work.weixin.qq.com/kfid/kfc31c83ef5ca238ab7'},
        corpId: 'ww00aa5bcecce5872d', // 如果是企业微信客服
        success(res) {
          console.log('客服打开成功', res);
        },
        fail(err) {
          console.error('客服打开失败', err);
        }
      });
    },
    gotoWebsite() {
      wx.navigateTo({
        url: '/subpackageB/webview/webview?url=' + encodeURIComponent(this.personalInvitePage)
      })
    },
    goToPage(url) {
      console.log(url);
      if (url === 'subpackageB/guide') {
        this.$refs.globalPopup.open()
        return;
      }
      uni.navigateTo({
        url: `/${url}`, // 替换为实际页面路径
      })
    }
  },
};
</script>

<style>
.content {
  padding: 0;
}

/* 常用功能 */
.function-section {
  /* padding: 20rpx; */
  margin: 20rpx 0;
}
.section-title {
  font-size: 30rpx;
  color: #333;
  margin-bottom: 20rpx;
}
.function-grid {
  background: white;
  display: flex;
  flex-wrap: wrap;
  padding: 25rpx 10rpx 15rpx 10rpx;
  border-radius: 10rpx;
}
.invite-section {
		background-color: white;
		margin-top: 40rpx;
	
	}

	.invite-banner {
		background-color: #1a1a1a;
		color: #E99D42;
		padding: 30rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	.invite-banner a {
		color: #E99D42;
		padding-left: 4rpx;
	}

	.invite-title {
		font-size: 32rpx;
		margin-bottom: 10rpx;
	}

 .invite-desc {
	font-size: 28rpx;
	}
  .invite-desc a {
    display: inline-block;
    text-decoration: underline;
  }
.function-item {
  width: 23%;
  margin-right: 2.66%;
  text-align: center;
  margin-bottom: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.function-item:nth-child(4n) {
  margin-right: 0;
}
.function-icon {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 16rpx;
  background-size: cover;
  background-position: center;
}
.contact-btn {
  background-color: #fff;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-btn::after {
  border: none;
}

.function-text {
  font-size: 24rpx;
  color: #666;
}

/* 广告横幅 */
.ad-banner {
  background: #1a1a1a;
  color: #ffd700;
  padding: 30rpx;
  text-align: center;
  margin: 20rpx 0;
}
.ad-title {
  font-size: 36rpx;
  margin-bottom: 10rpx;
}
.ad-desc {
  font-size: 24rpx;
}
.link-text {
  text-decoration: underline;
}

/* 底部自定义tab */
.custom-tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10rpx 0;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-icon {
  width: 40rpx;
  height: 40rpx;
  margin-bottom: 5rpx;
}
.tab-text {
  font-size: 24rpx;
  color: #666;
}
.tab-center {
  position: relative;
  top: -20rpx;
}
.center-icon {
  width: 80rpx;
  height: 80rpx;
  background: #ff4444;
  border-radius: 50%;
}
</style>
