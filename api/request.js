// utils/request.js

const baseUrl = 'http://101.43.59.126:30001'; // 替换为你的接口地址

// 请求拦截器
const requestInterceptor = (config) => {
  // 在请求发送之前做一些处理
  const token = uni.getStorageSync('token'); // 从本地存储获取 token
  if (token) {
    config.header = {
      ...config.header,
      Authorization: `Bearer ${token}`, // 添加 token 到请求头
    };
  }
  return config;
};

// 响应拦截器
const responseInterceptor = (response) => {
  // 对响应数据做一些处理
  if (response.statusCode === 200) {
    return response.data; // 返回响应数据
  } else if (response.statusCode === 401) {
    // Token 过期，跳转到登录页面
    uni.showToast({
      title: '登录已过期，请重新登录',
      icon: 'none',
    });
    uni.removeStorageSync('userInfo')
    uni.removeStorageSync('user_info'); // 清除本地存储的 用户信息
    uni.removeStorageSync('token'); // 清除本地存储的 token
    uni.switchTab({
      url: '/pages/user/user',
    });
    return Promise.reject(response.data);
  } else {
    // 处理其他错误状态码
    uni.showToast({
      title: `请求失败：${response.statusCode}`,
      icon: 'none',
    });
    return Promise.reject(response.data);
  }
};

// 封装 request 方法
const request = (config) => {
  // 请求拦截
  config = requestInterceptor(config);

  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token')
    
    // 设置请求头
    config.header = config.header || {}
    if (token) {
      config.header['Authorization'] = `Bearer ${token}`
    }
    uni.request({
      url: baseUrl + config.url, // 拼接完整 URL
      method: config.method || 'GET', // 默认 GET 请求
      data: config.data || {}, // 请求参数
      header: config.header || {}, // 请求头
      success: (res) => {
        
        // 响应拦截
        resolve(responseInterceptor(res));
      },
      fail: (err) => {
        // 请求失败处理
        uni.showToast({
          title: '网络请求失败',
          icon: 'none',
        });
        uni.removeStorageSync('userInfo')
        uni.removeStorageSync('user_info'); // 清除本地存储的 用户信息
        uni.removeStorageSync('token'); // 清除本地存储的 token
        uni.switchTab({
          url: '/pages/user/user',
        });
        reject(new Error('登录已过期，请重新登录'))
        reject(err);
      },
    });
  });
};

export default request;