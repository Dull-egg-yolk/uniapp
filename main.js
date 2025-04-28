import Vue from 'vue'
import App from './App'

import store from './store'

import config from './common/config.js'
Vue.prototype.config = config
import request from './common/request.js'
Vue.prototype.$http = request

Vue.config.productionTip = false

Vue.prototype.$store = store
//检查登录函数
//参数:backpage:登录后返回的页面 backtype:返回类型(一般传switchTab,因为需要返回下方Tab的位置,也可选择其他方式)
Vue.prototype.checkLogin = function(backpage, backtype) {
	console.log(backpage, backtype, 'checkLogin');
	
	var myinfo = uni.getStorageSync('user_info')
	var mytoken = uni.getStorageSync('token')
	var hotelinfo = uni.getStorageSync('hotalName')
	console.log(1111, 'checkLogin');
	
	if(myinfo && mytoken && hotelinfo){
		uni.redirectTo({
			url: "/pages/home/home"
		});
	} else {
		uni.redirectTo({
			url: "/pages/user/user"
		});
	}
}

Vue.mixin({
  onShareAppMessage(res) {
		const InvitedCode = uni.getStorageSync('user_info').InvitedCode
		console.log(InvitedCode, 'InvitedCode');
		
    return {
      title: '出入库、查库存、查用量，“码”上见 免费使用2个月',  // 必填
      path: `/pages/user/user?InvitedByCode=${InvitedCode}`, // 必填，分享页面路径
      imageUrl: '/static/img/share.jpg',
      success(res) {
        console.log('分享成功', res);
        uni.showToast({ title: '分享成功' });
      },
      fail(err) {
        console.log('分享失败', err);
      }
    }
  },
	onShareTimeline() {
		return {
			title: '快来加入我们吧',
			query: `InvitedByCode=${InvitedCode}`,
			imageUrl: '/static/img/logo.png'
		};
	}
});
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
