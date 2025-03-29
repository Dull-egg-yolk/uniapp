// 将Base64转为临时文件路径（兼容所有平台）
export function base64ToTempPath(base64Data) {
  return new Promise((resolve) => {
    // #ifdef H5
    // H5环境直接使用Base64
    resolve(base64Data);
    // #endif

    // #ifdef MP-WEIXIN || MP-ALIPAY
    // 小程序端写入临时文件
    const base64 = base64Data.split(',')[1] || base64Data; // 去除可能的头部
    const fileManager = uni.getFileSystemManager();
    const tempFilePath = `${wx.env.USER_DATA_PATH}/qrcode_${Date.now()}.png`;
    
    fileManager.writeFile({
      filePath: tempFilePath,
      data: base64,
      encoding: 'base64',
      success: () => resolve(tempFilePath),
    });
    // #endif
  });
}