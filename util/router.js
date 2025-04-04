// utils/router.js
const whiteList = [
  '/pages/user/user'
]

function checkAuth(to) {
  const token = uni.getStorageSync('token')
  const isInWhiteList = whiteList.some(item => to.startsWith(item))
  
  if (!isInWhiteList && !token) {
    return false
  }
  return true
}

export const router = {
  navigateTo(options) {
    const url = typeof options === 'string' ? options : options.url
    if (!checkAuth(url)) {
      uni.redirectTo({
        url: '/pages/login/login?redirect=' + encodeURIComponent(url)
      })
      return
    }
    uni.navigateTo(options)
  },
  
  redirectTo(options) {
    const url = typeof options === 'string' ? options : options.url
    if (!checkAuth(url)) {
      uni.redirectTo({
        url: '/pages/login/login?redirect=' + encodeURIComponent(url)
      })
      return
    }
    uni.redirectTo(options)
  },
  
  switchTab(options) {
    // tabBar页面通常不做权限控制
    uni.switchTab(options)
  },
  
  reLaunch(options) {
    const url = typeof options === 'string' ? options : options.url
    if (!checkAuth(url)) {
      uni.reLaunch({
        url: '/pages/login/login'
      })
      return
    }
    uni.reLaunch(options)
  }
}