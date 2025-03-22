import request from '@/api/request.js';
// 获取分类
export const getHotelClass = (params) => {
    return request('/api/hotel/class', 'GET', params);
};
// 获取仓库列表
export const getWarehouse = (params) => {
  return request('/api/hotel/warehouse', 'GET', params);
};
// 修改仓库
export const updateWarehouse = (params) => {
  return request('/api/hotel/warehouse', 'GET', params);
};

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/api/hotel/item',
    method: 'POST',
    data: data,
  });
};