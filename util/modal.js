// utils/modal.js
export function showModalAsync(options) {
  return new Promise((resolve) => {
    uni.showModal({
      title: '提示',
      confirmText: '确定',
      cancelText: '取消',
      ...options,
      success: (res) => resolve(res.confirm)
    });
  });
}