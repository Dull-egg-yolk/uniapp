let SDKErrorCode = {
  "JCSDK_PRINT_ERR_TIMEOUT":{"errCode":0xff00,"msg":"打印超时"},
  "JCSDK_PRINT_ERR_DISCONNECT":{"errCode":0xff01,"msg":"打印机断开"},
  "JCSDK_PRINT_ERR_DATA":{"errCode":0xff02,"msg":"数据错误"},
  "JCSDK_PRINT_ERR_BUSY":{"errCode":0xff03,"msg":"打印机忙碌"},
  "JCSDK_PRINT_ERR_GetDATA":{"errCode":0xff04,"msg":"画布获取数据错误"},
  "JCSDK_PRINT_ERR_SetPaperFailed":{"errCode":0xff05,"msg":"设置纸张失败错误"},
  "JCSDK_PRINT_ERR_PrinterNotWork":{"errCode":0xff06,"msg":"查询打印纸张状态异常"},
  "JCSDK_PRINT_ERR_0x01":{"errCode":0xff07,"msg":"盒盖打开"},
  "JCSDK_PRINT_ERR_0x02":{"errCode":0xff08,"msg":"缺纸"},
  "JCSDK_PRINT_ERR_0x03":{"errCode":0xff09,"msg":"电量不足"},
  "JCSDK_PRINT_ERR_0x04":{"errCode":0xff0a,"msg":"电池异常"},
  "JCSDK_PRINT_ERR_0x05":{"errCode":0xff0b,"msg":"手动停止"},
  "JCSDK_PRINT_ERR_0x06":{"errCode":0xff0c,"msg":"数据错误"},
  "JCSDK_PRINT_ERR_0x07":{"errCode":0xff0d,"msg":"温度过高"},
  "JCSDK_PRINT_ERR_0x08":{"errCode":0xff0e,"msg":"出纸异常"},
  "JCSDK_PRINT_ERR_0x09":{"errCode":0xff0f,"msg":"纸张错误"},
  "JCSDK_PRINT_ERR_0x0a":{"errCode":0xff10,"msg":"rfid写入失败"},
  "JCSDK_PRINT_ERR_0x0b":{"errCode":0xff11,"msg":"出纸异常"},
  "JCSDK_PRINT_ERR_0x0c":{"errCode":0xff12,"msg":"发送epc指令但未检测到RFID标签"},
  "JCSDK_PRINT_ERR_0x0d":{"errCode":0xff13,"msg":"检测到RFID标签但未发送EPC指令"},
  "JCSDK_PRINT_ERR_0x0e":{"errCode":0xff14,"msg":"缺碳带"},
  "JCSDK_PRINT_ERR_0x0f":{"errCode":0xff15,"msg":"打印头未锁紧"},
  "JCSDK_PRINT_ERR_0x11":{"errCode":0xff16,"msg":"碳带已用完"},
  "JCSDK_PRINT_ERR_0x12":{"errCode":0xff17,"msg":"碳带不匹配"},
  "JCSDK_PRINT_ERR_0x13":{"errCode":0xff18,"msg":"标签纸安装异常"},
  "JCSDK_PRINT_ERR_0x14":{"errCode":0xff19,"msg":"非法标签"},
  "JCSDK_PRINT_ERR_0x15":{"errCode":0xff20,"msg":"非法碳带和标签"},
  "JCSDK_PRINT_ERR_0x16":{"errCode":0xff21,"msg":"超时(打印机超时)"},
  "JCSDK_PRINT_ERR_0x17":{"errCode":0xff22,"msg":"非专业碳带"},
  "JCSDK_PRINT_ERR_epc":{"errCode":0xfe01,"msg":"epc格式不对"},
  "JCSDK_PRINT_ERR_Drawing_Timeout":{"errCode":0xfe00,"msg":"绘制元素超时错误"},
  "JCSDK_PRINT_ERR_noSupport":{"errCode":0xfffd,"msg":"打印机不支持"},
  "JCSDK_PRINT_ERR_fail":{"errCode":0xfd01,"msg":"失败"},
  "JCSDK_PRINT_ERR_none":{"errCode":0xfd00,"msg":"正常"},
  "JCSDK_PLATFORM_WX":"微信",
  "JCSDK_PLATFORM_DD":"钉钉",
  "JCSDK_PLATFORM_FS":"飞书",
  "JCSDK_PLATFORM_Build_Origin":"原生环境编译",
  "JCSDK_PLATFORM_Build_Uni":"Uni环境编译"
};


export default SDKErrorCode