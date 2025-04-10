import request from '@/api/request.js';
// 获取分类
export const getHotelClass = (data) => {
  return request({
    url: '/ims-webapp/hotel/class',
    method: 'GET',
    data: data,
  });
};
// 新增分类
export const addHotelClass = (data) => {
  return request({
    url: '/ims-webapp/hotel/class',
    method: 'POST',
    data: data,
  });
};
// 修改分类
export const updateHotelClass = (data) => {
  return request({
    url: '/ims-webapp/hotel/class',
    method: 'PUT',
    data: data,
  });
};
// 删除分类
export const deleteHotelClass = (data) => {
  return request({
    url: '/ims-webapp/hotel/class',
    method: 'DELETE',
    data: data,
  });
};
// 获取仓库列表
export const getWarehouse = (data) => {
  return request({
    url: '/ims-webapp/hotel/warehouse',
    method: 'GET',
    data: data,
  });
};
// 修改仓库
export const updateWarehouse = (data) => {
  return request({
    url: '/ims-webapp/hotel/warehouse',
    method: 'PUT',
    data: data,
  });
};
// 新增仓库
export const addWarehouse = (data) => {
  return request({
    url: '/ims-webapp/hotel/warehouse',
    method: 'POST',
    data: data,
  });
};
// 删除仓库
export const deleteWarehouse = (data) => {
  return request({
    url: '/ims-webapp/hotel/warehouse',
    method: 'DELETE',
    data: data,
  });
};
// 删除商品
export const deleteGoodsItme = (data) => {
  return request({
    url: '/ims-webapp/goods/item',
    method: 'DELETE',
    data: data,
  });
};
// 获取商品列表
export const getGoodsItme = (data) => {
  return request({
    url: '/ims-webapp/goods/item',
    method: 'GET',
    data: data,
  });
};
// 修改商品
export const updateGoodsItme = (data) => {
  return request({
    url: '/ims-webapp/goods/item',
    method: 'PUT',
    data: data,
  });
};
// 新增商品
export const addGoodsItme = (data) => {
  return request({
    url: '/ims-webapp/goods/item',
    method: 'POST',
    data: data,
  });
};

// 初始化提交
export const submitHotel = (data) => {
  return request({
    url: '/ims-webapp/hotel/item',
    method: 'POST',
    data: data,
  });
};

// 新增盘点
export const addStockTaking = (data) => {
  return request({
    url: '/ims-webapp/stock/taking',
    method: 'POST',
    data: data,
  });
};
// 修改盘点
export const updateStockTaking = (data) => {
  return request({
    url: '/ims-webapp/stock/taking',
    method: 'PUT',
    data: data,
  });
};
// 获取盘点
export const getStockTaking = (data) => {
  return request({
    url: '/ims-webapp/stock/taking',
    method: 'GET',
    data: data,
  });
};

// 商品列表下拉
export const getGoodsString = (data) => {
  return request({
    url: '/ims-webapp/goods/string',
    method: 'GET',
    data: data,
  });
};
// 获取当前盘点列表
export const getStockTakingString = (data) => {
  return request({
    url: '/ims-webapp/stock/taking/goods',
    method: 'GET',
    data: data,
  });
};
// 盘点填写数量（个）
export const updateStockTakingString = (data) => {
  return request({
    url: '/ims-webapp/stock/taking/goods',
    method: 'PUT',
    data: data,
  });
};
// 新增选择商品
export const addStockTakingString = (data) => {
  return request({
    url: '/ims-webapp/stock/taking/goods',
    method: 'POST',
    data: data,
  });
};
// 获取盘点统计信息
export const getStockTakingStringSummary = (data) => {
  return request({
    url: '/ims-webapp/stock/taking/goods/summary',
    method: 'GET',
    data: data,
  });
};

// 获取月度用户消耗表
export const getReportConsumeMonth = (data) => {
  return request({
    url: '/ims-webapp/report/consume/month',
    method: 'GET',
    data: data,
  });
};
// 发送邮件
export const reportEmail = (data) => {
  return request({
    url: '/ims-webapp/report/email',
    method: 'POST',
    data: data,
  });
};

// 获取实时库存明细
export const getReportGoodsCurrent = (data) => {
  return request({
    url: '/ims-webapp/report/goods/current',
    method: 'GET',
    data: data,
  });
};

// 获取出入库明细
export const getStockOperate = (data) => {
  return request({
    url: '/ims-webapp/stock/operate',
    method: 'GET',
    data: data,
  });
};
// 出入库
export const addStockOperate = (data) => {
  return request({
    url: '/ims-webapp/stock/operate',
    method: 'POST',
    data: data,
  });
};
// 获取商品二维码
export const getQrcode = (data) => {
  return request({
    url: '/ims-webapp/goods/item/qrcode',
    method: 'GET',
    data: data,
  });
};
// 商品详情进入盘点
export const goodsDirectly = (data) => {
  return request({
    url: '/ims-webapp/stock/taking/goods/directly',
    method: 'POST',
    data: data,
  });
};