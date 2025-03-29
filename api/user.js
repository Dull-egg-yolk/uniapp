import request from '@/api/request.js';

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/api/hotel/item',
    method: 'POST',
    data: data,
  });
};

// 获取反馈
export const getAppFeedback = (data) => {
  return request({
    url: '/api/app/feedback',
    method: 'GET',
    data: data,
  });
};

// 新增反馈
export const addAppFeedback = (data) => {
  return request({
    url: '/api/app/feedback',
    method: 'POST',
    data: data,
  });
};

// 获取帮助文档
export const getAppHelp = (data) => {
  return request({
    url: '/api/app/help',
    method: 'GET',
    data: data,
  });
};
// 获取消息
export const getAppMessage = (data) => {
  return request({
    url: '/api/app/message',
    method: 'GET',
    data: data,
  });
};
// 获取酒店人员
export const getHotelUser = (data) => {
  return request({
    url: '/api/hotel/user',
    method: 'GET',
    data: data,
  });
};
// 更新酒店人员角色
export const updateHotelUser = (data) => {
  return request({
    url: '/api/hotel/user',
    method: 'PUT',
    data: data,
  });
};
// 删除酒店人员
export const deleteHotelUser = (data) => {
  return request({
    url: '/api/hotel/user',
    method: 'DELETE',
    data: data,
  });
};
// 获取用户配置
export const getUserConfig = (data) => {
  return request({
    url: '/api/user/config',
    method: 'GET',
    data: data,
  });
};

// 获取用户信息
export const getUserInfo = (data) => {
  return request({
    url: '/api/user/info',
    method: 'GET',
    data: data,
  });
};

// 获取邀请记录
export const getUserInvite = (data) => {
  return request({
    url: '/api/user/invite',
    method: 'GET',
    data: data,
  });
};
// 获取会员套餐
export const getUserPrime = (data) => {
  return request({
    url: '/api/user/prime/plan',
    method: 'GET',
    data: data,
  });
};
// 获取可用优惠卷
export const getUserShopping = (data) => {
  return request({
    url: '/api/user/shopping/coupon',
    method: 'GET',
    data: data,
  });
};