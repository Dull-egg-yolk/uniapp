import request from '@/api/request.js';
export const getData = (params) => {
    return request('/api/hotel/item', 'GET', params);
};

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/api/hotel/item',
    method: 'POST',
    data: data,
  });
};