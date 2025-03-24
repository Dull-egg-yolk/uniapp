import request from '@/api/request.js';
// 获取分类
export const getHotelClass = (data) => {
  return request({
    url: '/api/hotel/class',
    method: 'GET',
    data: data,
  });
};
// 新增分类
export const addHotelClass = (data) => {
  return request({
    url: '/api/hotel/class',
    method: 'POST',
    data: data,
  });
};
// 修改分类
export const updateHotelClass = (data) => {
  return request({
    url: '/api/hotel/class',
    method: 'PUT',
    data: data,
  });
};
// 删除分类
export const deleteHotelClass = (data) => {
  return request({
    url: '/api/hotel/class',
    method: 'DELETE',
    data: data,
  });
};
// 获取仓库列表
export const getWarehouse = (data) => {
  return request({
    url: '/api/hotel/warehouse',
    method: 'GET',
    data: data,
  });
};
// 修改仓库
export const updateWarehouse = (data) => {
  return request({
    url: '/api/hotel/warehouse',
    method: 'PUT',
    data: data,
  });
};
// 新增仓库
export const addWarehouse = (data) => {
  return request({
    url: '/api/hotel/warehouse',
    method: 'POST',
    data: data,
  });
};
// 删除仓库
export const deleteWarehouse = (data) => {
  return request({
    url: '/api/hotel/warehouse',
    method: 'DELETE',
    data: data,
  });
};
// 删除商品
export const deleteGoodsItme = (data) => {
  return request({
    url: '/api/goods/item',
    method: 'DELETE',
    data: data,
  });
};
// 获取商品列表
export const getGoodsItme = (data) => {
  return request({
    url: '/api/goods/item',
    method: 'GET',
    data: data,
  });
};
// 修改商品
export const updateGoodsItme = (data) => {
  return request({
    url: '/api/goods/item',
    method: 'PUT',
    data: data,
  });
};
// 新增商品
export const addGoodsItme = (data) => {
  return request({
    url: '/api/goods/item',
    method: 'POST',
    data: data,
  });
};

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/api/hotel/item',
    method: 'POST',
    data: data,
  });
};
// 新增盘点
export const addStockTaking = (data) => {
  return request({
    url: '/api/stock/taking',
    method: 'POST',
    data: data,
  });
};
// 修改盘点
export const updateStockTaking = (data) => {
  return request({
    url: '/api/stock/taking',
    method: 'PUT',
    data: data,
  });
};
// 获取盘点
export const getStockTaking = (data) => {
  return request({
    url: '/api/stock/taking',
    method: 'GET',
    data: data,
  });
};
