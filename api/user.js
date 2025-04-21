import request from '@/api/request.js';

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/ims-webapp/hotel/item',
    method: 'POST',
    data: data,
  });
};
// 更新酒店信息
export const updateHotel = (data) => {
  return request({
    url: '/ims-webapp/hotel/item',
    method: 'PUT',
    data: data,
  });
};

// 获取反馈
export const getAppFeedback = (data) => {
  return request({
    url: '/ims-webapp/app/feedback',
    method: 'GET',
    data: data,
  });
};

// 新增反馈
export const addAppFeedback = (data) => {
  return request({
    url: '/ims-webapp/app/feedback',
    method: 'POST',
    data: data,
  });
};

// 获取帮助文档
export const getAppHelp = (data) => {
  return request({
    url: '/ims-webapp/app/help',
    method: 'GET',
    data: data,
  });
};
// 获取消息
export const getAppMessage = (data) => {
  return request({
    url: '/ims-webapp/app/message',
    method: 'GET',
    data: data,
  });
};
export const readAppMessage = (data) => {
  return request({
    url: '/ims-webapp/app/message/read',
    method: 'POST',
    data: data,
  });
};
// 获取酒店人员
export const getHotelUser = (data) => {
  return request({
    url: '/ims-webapp/hotel/user',
    method: 'GET',
    data: data,
  });
};
// 更新酒店人员角色
export const updateHotelUser = (data) => {
  return request({
    url: '/ims-webapp/hotel/user',
    method: 'PUT',
    data: data,
  });
};
// 删除酒店人员
export const deleteHotelUser = (data) => {
  return request({
    url: '/ims-webapp/hotel/user',
    method: 'DELETE',
    data: data,
  });
};
// 获取用户配置
export const getUserConfig = (data) => {
  return request({
    url: '/ims-webapp/user/config',
    method: 'GET',
    data: data,
  });
};

// 获取用户信息
export const getUserInfo = (data) => {
  return request({
    url: '/ims-webapp/user/info',
    method: 'GET',
    data: data,
  });
};

// 获取邀请记录
export const getUserInvite = (data) => {
  return request({
    url: '/ims-webapp/user/invite',
    method: 'GET',
    data: data,
  });
};
// 获取会员套餐
export const getUserPrime = (data) => {
  return request({
    url: '/ims-webapp/user/prime/plan',
    method: 'GET',
    data: data,
  });
};
// 获取可用优惠卷
export const getUserShopping = (data) => {
  return request({
    url: '/ims-webapp/user/shopping/coupon',
    method: 'GET',
    data: data,
  });
};
// 登录
export const userLogin = (data) => {
  return request({
    url: '/ims-webapp/user/login',
    method: 'POST',
    data: data,
  });
};

export const userLogOut = (data) => {
  return request({
    url: '/ims-webapp/user/logout',
    method: 'POST',
    data: data,
  });
};
export const userPage = (data) => {
  return request({
    url: '/ims-webapp/app/page',
    method: 'GET',
    data: data,
  });
};
export const appConfig = (data) => {
  return request({
    url: '/ims-webapp/app/config',
    method: 'GET',
    data: data,
  });
};
// 支付
export const shoppingBuy = (data) => {
  return request({
    url: '/ims-webapp/user/shopping/buy',
    method: 'POST',
    data: data,
  });
};
// 支付回调
export const shoppingBuyCallback = (data) => {
  return request({
    url: '/ims-webapp/user/shopping/buy/callback',
    method: 'POST',
    data: data,
  });
};

export const prelogin = (data) => {
  return request({
    url: '/ims-webapp/user/prelogin',
    method: 'POST',
    data: data,
  });
};