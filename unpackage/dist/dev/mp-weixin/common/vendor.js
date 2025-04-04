(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
if (!target[key].canIUse('getAppBaseInfo')) {
  target[key].getAppBaseInfo = target[key].getSystemInfoSync;
}
if (!target[key].canIUse('getWindowInfo')) {
  target[key].getWindowInfo = target[key].getSystemInfoSync;
}
if (!target[key].canIUse('getDeviceInfo')) {
  target[key].getDeviceInfo = target[key].getSystemInfoSync;
}
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 113:
/*!*************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/util/day.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDateTime = exports.formatTime = void 0;
var formatTime = function formatTime(data) {
  var date = new Date(data);

  // 获取年、月、日、时、分、秒
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var padZero = function padZero(num) {
    return String(num).padStart(2, '0');
  };
  return "".concat(year, "-").concat(padZero(month), "-").concat(padZero(day));
};
exports.formatTime = formatTime;
var transformDateTime = function transformDateTime(input) {
  // 1. 解析原始日期时间
  var originalDate = new Date(input.replace(' ', 'T') + '+08:00');

  // 2. 创建目标日期对象 (2026-01-01)
  var targetDate = new Date(originalDate);
  targetDate.setFullYear(2026);
  targetDate.setMonth(0); // 月份是0-11，0表示一月
  targetDate.setDate(1);

  // 3. 重置时间为00:00:00
  targetDate.setHours(0, 0, 0, 0);

  // 4. 格式化为ISO字符串并保留时区
  var timezoneOffset = -targetDate.getTimezoneOffset() / 60;
  var timezone = (timezoneOffset >= 0 ? '+' : '-') + Math.abs(timezoneOffset).toString().padStart(2, '0') + ':00';

  // 5. 构建最终字符串
  var isoString = targetDate.toISOString().replace('Z', timezone);
  return isoString;
};
exports.transformDateTime = transformDateTime;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 162:
/*!******************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/util/debounce.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;
var debounce = function debounce(fn, delay) {
  var timer = null;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      return fn.apply(_this, args);
    }, delay);
  };
};
exports.debounce = debounce;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 179:
/*!***************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/util/print.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrint = usePrint;
var _JCAPI = _interopRequireDefault(__webpack_require__(/*! ../static/img/JCAPI/JCAPI.js */ 180));
/**
 * @Description
 * @Version
 * @Author xuyi
 * @date 2023/1/3 16:55
 */
// 引入打印类，CommonJs规范
// const api = require('../static/JCAPI/JCAPI.js');

function usePrint() {
  return {
    setPlatform: function setPlatform(platform) {
      _JCAPI.default.setPlatform(platform);
    },
    setBuildPlatform: function setBuildPlatform(platform) {
      _JCAPI.default.setBuildPlatform(platform);
    },
    startJob: function startJob(gapType, darkness, totalCount, callback) {
      _JCAPI.default.startJob(gapType, darkness, totalCount, callback);
    },
    startDrawLabel: function startDrawLabel(canvasId, component, labelWidth, labelHeight) {
      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var canvas = arguments.length > 5 ? arguments[5] : undefined;
      _JCAPI.default.startDrawLabel(canvasId, component, labelWidth, labelHeight, rotation, canvas);
    },
    drawText: function drawText(content, x, y, fontHeight) {
      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      _JCAPI.default.drawText(content, x, y, fontHeight, rotation, options);
    },
    drawBarcode: function drawBarcode(content, x, y, width, height) {
      var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var fontSize = arguments.length > 6 ? arguments[6] : undefined;
      var fontHeight = arguments.length > 7 ? arguments[7] : undefined;
      var position = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 2;
      _JCAPI.default.drawBarcode(content, x, y, width, height, rotation, fontSize, fontHeight, position);
    },
    drawQRCode: function drawQRCode(content, x, y, width, height) {
      var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var ecc = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;
      _JCAPI.default.drawQRCode(content, x, y, width, height, rotation, ecc);
    },
    drawRectangle: function drawRectangle(x, y, width, height, lineWidth) {
      var isFilled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var rotation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      _JCAPI.default.drawRectangle(x, y, width, height, lineWidth, isFilled, rotation);
    },
    drawLine: function drawLine(x, y, width, height) {
      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      _JCAPI.default.drawLine(x, y, width, height, rotation);
    },
    drawImage: function drawImage(path, x, y, width, height) {
      var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      _JCAPI.default.drawImage(path, x, y, width, height, rotation);
    },
    endDrawLabel: function endDrawLabel(callback) {
      _JCAPI.default.endDrawLabel(callback);
    },
    print: function print() {
      var onePageCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      var optionPara = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _JCAPI.default.print(onePageCount, callback, optionPara);
    },
    didReadPrintCountInfo: function didReadPrintCountInfo(callback) {
      _JCAPI.default.didReadPrintCountInfo(callback);
    },
    didReadPrintErrorInfo: function didReadPrintErrorInfo(callback) {
      _JCAPI.default.didReadPrintErrorInfo(callback);
    },
    scanedPrinters: function scanedPrinters(callback) {
      _JCAPI.default.scanedPrinters(callback);
    },
    openPrinter: function openPrinter(name, successConnect, failConnect) {
      _JCAPI.default.openPrinter(name, successConnect, failConnect);
    },
    getConnName: function getConnName() {
      return _JCAPI.default.getConnName();
    },
    getSn: function getSn(callback) {
      return _JCAPI.default.getSN(callback);
    },
    // 打印机断开连接
    closePrinter: function closePrinter() {
      _JCAPI.default.closePrinter();
    }
  };
}

// module.exports = { usePrint };

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 180:
/*!***************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCAPI.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _JCAPIManager = _interopRequireDefault(__webpack_require__(/*! ./JCAPIManager */ 181));
var _JCAPIErrorCode = _interopRequireDefault(__webpack_require__(/*! ./JCAPIErrorCode */ 188));
/**
 * 小程序SDK V3.0.0
 */

// 初始化JCSDKManager实例
var manager = (0, _JCAPIManager.default)();
var JCSDKPrintOptionParas = {
  //仅B32R支持该参数
  epc: '',
  //仅H1S支持该参数
  hasDash: false,
  //部分机型支持, 0-高质量打印，缺省  1-高速度打印
  speedOrQuality: 0
};
var JCSDKPrinterGetParas = {
  code: 0,
  //0:正常获取，-1:获取失败  -2:忙碌 -3:不支持 -4:打印机未连接/断开/未响应
  res: Object
};

/**
 * JCAPI对象
 */
var JCAPI = {
  /**
   * 设置编译目标平台类型
   * @param {String} platform 平台类型,缺省微信
   */
  setPlatform: function setPlatform(platform) {
    manager.setPlatform(platform);
  },
  /**
   * 设置编译平台类型
   * @param {String} platform 平台类型,缺省微信
   */
  setBuildPlatform: function setBuildPlatform(platform) {
    console.log("setBuildPlatform", platform);
    manager.setBuildPlatform(platform);
  },
  /**
   * 设置是否使用第三方BLE监听。需要在连接（openPrinter）之前使用
   * @param {boolean} use - 指定是否使用第三方BLE监听。默认为true。当程序多个使用蓝牙监听时，调用此方法，将监听外置出来供第三方调用
   */
  setUseThirdBleListen: function setUseThirdBleListen() {
    var use = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    manager.setUseBleListen(use);
  },
  /**
   * 当setUseThirdBleListen设置为true时有效，用于处理蓝牙特征值变化的事件。
   * 需要先通过JCAPI.setUseThirdBleListen(true)启用第三方蓝牙监听。
   * 示例
   * JCAPI.setUseThirdBleListen(true)
   *     wx.onBLECharacteristicValueChange((res) => {
   *       JCAPI.bleValueChanged(res)
   *     })
   * @param {*} res - 蓝牙监听到的数据对象。
   */
  bleValueChanged: function bleValueChanged(res) {
    manager.onBleValueChange(res);
  },
  /**
   * 打开打印机
   * @param {string} printerName - 打印机名称
   * @param {function} didConnectedHandler - 连接成功回调函数
   * @param {function} didDisconnectedHandler - 连接断开回调函数
   */
  openPrinter: function openPrinter(printerName, didConnectedHandler, didDisconnectedHandler) {
    manager.openPrinter(printerName, didConnectedHandler, didDisconnectedHandler);
  },
  /**
   * 关闭打印机
   */
  closePrinter: function closePrinter() {
    manager.closePrinter();
  },
  /**
   * 搜索蓝牙设备
   * @param {function} didGetScanedPrinters - 搜索后的回调函数，用于处理搜索结果 function(list){}
   */
  scanedPrinters: function scanedPrinters(didGetScanedPrinters) {
    manager.scanedPrinters(didGetScanedPrinters);
  },
  /**
   * 开始打印任务
   * @param {number} gapType - 纸张类型 1.间隙纸  2.黑标纸  3.连续纸  4.定孔纸  5.透明纸  6.标牌
   * @param {number} darkness - 打印浓度B3S/B1/B203/B21/K3/K3W/M2 浓度范围1-5 建议3  B32/Z401 浓度范围1-15 建议8
   * @param {number} totalCount - 总打印份数，表示所有页面的打印份数之和。例如，如果你有3页需要打印，第一页打印3份，第二页打印2份，第三页打印5份，那么count的值应为10（3+2+5）。
   * @param {function} callback - 任务开启后的回调函数
   */
  startJob: function startJob(gapType, darkness, totalCount, callback) {
    manager.startJob(gapType, darkness, totalCount, callback);
  },
  /**
   * 打印前开始绘制
   * @param {string} canvasId - 画布ID
   * @param {object} component - 画布所在js对象
   * @param {number} labelWidth - 标签画布宽（标签宽度，单位mm）
   * @param {number} labelHeight - 标签画布高（标签高度，单位mm）
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270
   * @param {Canvas} canvas - 画布对象，当使用原生小程序IDE时 canvas为null即可，但是uni编译时需要传入canvas对象，否则打印会失败
   * @description
   * 对应的canvas宽高建议使用变量
   */
  startDrawLabel: function startDrawLabel(canvasId, component, labelWidth, labelHeight) {
    var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var canvas = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    console.log("canvas", canvas);
    manager.startDrawLabel(canvasId, component, labelWidth, labelHeight, rotation, canvas);
  },
  /**
   * 绘制文本
   * @param {string} content - 文本内容
   * @param {number} x - 起点x，单位mm
   * @param {number} y - 起点y，单位mm（左下角坐标）
   * @param {number} fontHeight - 字体大小，单位mm
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左下角
   * @param {object} options - 选项，如下：
   *                         {
   *                           bold: false,       // 是否加粗
   *                           italic: false,     // 是否倾斜
   *                           family: 'SimHei', // 字体设置
   *                           align: 'left'/'right'/'center' // 对齐方式
   *                         }
   * @description
   * 注意事项：
   * 1. IOS斜体不支持中文，字体自定义不支持中文，仅支持小程序内置字体。
   * 2. 0°对齐方式中心点为X坐标，即左对齐时文本左下角坐标为x，右对齐时文本右下角坐标为x，居中对齐时文本底部中心点坐标为x。
   * 3. 90°对齐方式中心点为旋转后的Y坐标，即左对齐时文本左下角坐标为旋转后的Y坐标，右对齐时文本右下角坐标为旋转后的Y坐标，居中对齐时文本底部中心点坐标为旋转后的Y坐标。
   * 4.180°和270°类似，可自行尝试
   */
  drawText: function drawText(content, x, y, fontHeight) {
    var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    manager.drawText(content, x, y, fontHeight, rotation, options);
  },
  /**
   * 绘制条码
   * @param {string} content - 条码内容
   * @param {number} x - 起点x,单位mm
   * @param {number} y - 起点y,单位mm
   * @param {number} width - 宽,单位mm
   * @param {number} height - 高,单位mm
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左上角
   * @param {number} fontSize - 文本的字体大小,单位mm
   * @param {number} fontHeight - 文本的高度,单位mm
   * @param {number} position - 文本位置，0-条码下方 1-条码上方 2-不显示文体，此时fontSize/fontHeight无效
   */
  drawBarcode: function drawBarcode(content, x, y, width, height) {
    var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var fontSize = arguments.length > 6 ? arguments[6] : undefined;
    var fontHeight = arguments.length > 7 ? arguments[7] : undefined;
    var position = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 2;
    manager.drawBarcode(content, x, y, width, height, rotation, fontSize, fontHeight, position);
  },
  /**
   * 绘制二维码
   * @param {string} content - 二维码内容
   * @param {number} x - 起点x,单位mm
   * @param {number} y - 起点y,单位mm（左上角坐标）
   * @param {number} width - 宽,单位mm
   * @param {number} height - 高,单位mm
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左上角
   * @param {number} ecc - 纠错等级 0-3
   */
  drawQRCode: function drawQRCode(content, x, y, width, height) {
    var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var ecc = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;
    manager.drawQRCode(content, x, y, width, height, rotation, ecc);
  },
  /**
   * 绘制矩形
   * @param {number} x - 起点x,单位mm
   * @param {number} y - 起点y,单位mm
   * @param {number} width - 宽,单位mm
   * @param {number} height - 高,单位mm
   * @param {number} lineWidth - 线条宽,单位mm
   * @param {boolean} isFilled - 是否填充
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左上角
   */
  drawRectangle: function drawRectangle(x, y, width, height, lineWidth) {
    var isFilled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var rotation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    manager.drawRectangle(x, y, width, height, lineWidth, isFilled, rotation);
  },
  /**
   * 绘制线条
   * @param {number} x - 起点x，单位mm
   * @param {number} y - 起点y，单位mm（左下角坐标）
   * @param {number} width - 宽度，单位mm
   * @param {number} height - 高度，单位mm
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左上角
   *
   * @description
   * 计算线条的左上角为y坐标+线高
   */
  drawLine: function drawLine(x, y, width, height) {
    var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    manager.drawLine(x, y, width, height, rotation);
  },
  /**
   * 绘制图片
   * @param {string} path - 本地图片路径（暂不支持网络图片）
   * @param {number} x 起点x,单位mm
   * @param {number} y 起点y,单位mm
   * @param {number} width 宽,单位mm
   * @param {number} height 高,单位mm
   * @param {number} rotation - 旋转角度，默认为0，支持0/90/180/270，旋转中心点左上角
   *
   * @description
   * 暂不支持网络图片，需要将图片缓存到本地后，传入本地路径进行绘制
   * 图像背景不可以设置为透明色，否则会打印出黑块
   */
  drawImage: function drawImage(path, x, y, width, height) {
    var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    manager.drawImage(path, x, y, width, height, rotation);
  },
  /**
   * 结束绘制标签
   * @param {function} callback - 绘制完之后的回调
   */
  endDrawLabel: function endDrawLabel(callback) {
    manager.endDrawLabel(callback);
  },
  /**
   * 打印图像数据。
   *
   * @param {number} onePageCount - 图像打印份数，默认为 1。
   * @param {number} dataW - 图像数据的宽度，单位px
   * @param {number} dataH - 图像数据的高度，单位px
   * @param {Array} dataArray - 包含图像数据的数组，要求无符号整型，数组长度=宽*高*4
   * @param {Function} callback - 打印完成后的回调函数。
   * @param {Object|null} optionPara - 可选参数，用于配置打印选项。默认为 null。
   */
  printImageData: function printImageData() {
    var onePageCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var dataW = arguments.length > 1 ? arguments[1] : undefined;
    var dataH = arguments.length > 2 ? arguments[2] : undefined;
    var dataArray = arguments.length > 3 ? arguments[3] : undefined;
    var callback = arguments.length > 4 ? arguments[4] : undefined;
    var optionPara = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    // 调用底层管理器的打印图像数据方法
    manager.printImageData(onePageCount, {
      width: dataW,
      height: dataH,
      data: dataArray
    }, callback, optionPara);
  },
  /**
   * 启动打印操作。
   *
   * @param {number} onePageCount - 一页中的打印份数，默认为 1。
   * @param {Function} callback - 回调,表示可以发送下一页数据，不表示已打印完成，打印完成与否监听页码变化状态
   * @param {Object|null} optionPara - 可选参数，用于配置打印选项。默认为 null。
   */
  print: function print() {
    var onePageCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    var optionPara = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (optionPara === null || optionPara === undefined) {
      optionPara = JCSDKPrintOptionParas;
    }
    manager.startPrint(onePageCount, callback, optionPara);
  },
  /**
   * 读取打印进度信息并触发回调函数
   *
   * @param {Function} callback - 回调函数，用于接收页码数据的对象：{'count': int（必需）， 'tid': string（非必需）}。
   */
  didReadPrintCountInfo: function didReadPrintCountInfo(callback) {
    manager.didReadPrintCountInfo(callback);
  },
  /**
   * 读取打印错误信息并触发回调函数。
   *
   * @param {Function} callback - 回调函数，用于接收打印错误信息的数据。
   */
  didReadPrintErrorInfo: function didReadPrintErrorInfo(callback) {
    manager.didReadPrintErrorInfo(callback);
  },
  /**
   * 取消打印
   * @param {function} callback - 回调函数，用于处理打印取消操作的结果
   */
  cancelPrint: function cancelPrint(callback) {
    manager.cancelPrint(callback);
  },
  /**
   * 获取当前的连接名称
   *
   * 此函数通过调用manager对象的getConnName方法来获取连接名称
   *
   * @returns {string} 当前的连接名称
   */
  getConnName: function getConnName() {
    // 获取连接名称
    return manager.getConnName();
  },
  /**
   * 获取设备序列号（SN）并通过回调函数返回。
   *
   * @param {JCSDKPrinterGetParas} callback - 回调函数，用于接收设备序列号（SN）信息。
   */
  getSN: function getSN(callback) {
    manager.getSN(callback);
  },
  /**
   * 获取软件版本信息并通过回调函数返回。
   * @param {JCSDKPrinterGetParas} callback - 回调函数，用于接收软件版本信息
   */
  getSoftVersion: function getSoftVersion(callback) {
    manager.getSoftVersion(callback);
  },
  /**
   * 获取获取硬件版本信息并通过回调函数返回。
   * @param {JCSDKPrinterGetParas} callback - 回调函数，用于接收硬件版本信息
   */
  getHardVersion: function getHardVersion(callback) {
    manager.getHardVersion(callback);
  },
  /**
   * 获取倍率
   * @returns {*} - 返回打印倍率
   */
  getMultiple: function getMultiple() {
    var dpi = manager.getMultiple();
    return dpi >= 300 && dpi < 350 ? 11.81 : 8;
  },
  /**
   * 获取打印机速度/质量模式
   * @param {JCSDKPrinterGetParas} callback 可选参数
   */
  gePrintSpeedQualityWay: function gePrintSpeedQualityWay(callback) {
    manager.getPrintWithSpeedOrQuality(callback);
  },
  /**
   * 执行纸张校准操作。
   *
   * @param {number} paperType - 1.间隙纸  2.黑标纸  3.连续纸  4.定孔纸  5.透明纸  6.标牌
   * @param {Function} callback - 校准完成后的回调。
   */
  paperCalibration: function paperCalibration(paperType, callback) {
    manager.testPaperGap(paperType, callback);
  }
};
var _default = JCAPI; // module.exports = JCAPI
exports.default = _default;

/***/ }),

/***/ 181:
/*!**********************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCAPIManager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _JCCodeWriter = _interopRequireDefault(__webpack_require__(/*! ./JCCodeWriter */ 182));
var _JCBle = _interopRequireDefault(__webpack_require__(/*! ./JCBle */ 185));
var _JCPrinter = _interopRequireDefault(__webpack_require__(/*! ./JCPrinter */ 189));
var _JCAPIErrorCode = _interopRequireDefault(__webpack_require__(/*! ./JCAPIErrorCode */ 188));
var _JCDataUntil = _interopRequireDefault(__webpack_require__(/*! ./JCDataUntil */ 186));
(function (_0x2b0ee8, _0x19a313) {
  var _0x55938b = a0_0x51ee,
    _0x148ec2 = _0x2b0ee8();
  while (!![]) {
    try {
      var _0x1b37cd = parseInt(_0x55938b(0x183)) / 0x1 * (-parseInt(_0x55938b(0x184)) / 0x2) + parseInt(_0x55938b(0xfe)) / 0x3 + parseInt(_0x55938b(0x109)) / 0x4 + -parseInt(_0x55938b(0x10c)) / 0x5 * (parseInt(_0x55938b(0x147)) / 0x6) + parseInt(_0x55938b(0x10f)) / 0x7 + -parseInt(_0x55938b(0x124)) / 0x8 * (-parseInt(_0x55938b(0x141)) / 0x9) + parseInt(_0x55938b(0x173)) / 0xa;
      if (_0x1b37cd === _0x19a313) break;else _0x148ec2['push'](_0x148ec2['shift']());
    } catch (_0x38927f) {
      _0x148ec2['push'](_0x148ec2['shift']());
    }
  }
})(a0_0x5528, 0x76d55);
function a0_0x51ee(_0x49abf1, _0x5d8884) {
  var _0x552887 = a0_0x5528();
  return a0_0x51ee = function a0_0x51ee(_0x51eebb, _0x3508d5) {
    _0x51eebb = _0x51eebb - 0xf8;
    var _0x268df0 = _0x552887[_0x51eebb];
    return _0x268df0;
  }, a0_0x51ee(_0x49abf1, _0x5d8884);
}
var labelModel = /*#__PURE__*/(0, _createClass2.default)(function labelModel(_0xa7955c) {
  (0, _classCallCheck2.default)(this, labelModel);
  var _0x2c199e = a0_0x51ee;
  this['id'] = _0xa7955c, this[_0x2c199e(0x174)] = null, this['path'] = null, this['roration'] = 0x0, this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this[_0x2c199e(0x168)] = 0x0, this['lineWidth'] = 0x0, this[_0x2c199e(0x111)] = ![], this[_0x2c199e(0xfa)] = 0x0, this[_0x2c199e(0x103)] = null, this['debug'] = 0x0;
});
var ManagerSDK = function () {
  var _0x39dc03 = a0_0x51ee;
  var _0x3e3cc2 = null;
  function _0x5d831a() {
    var _0x54ea3e = a0_0x51ee;
    this[_0x54ea3e(0x116)] = null, this[_0x54ea3e(0x133)] = null, this['protoVer'] = 0x0, this[_0x54ea3e(0x14b)] = 0x0, this[_0x54ea3e(0x108)] = 0x0, this['sendBleInterval'] = 0x0, this[_0x54ea3e(0x122)] = null, this[_0x54ea3e(0x12c)] = null, this[_0x54ea3e(0x152)] = {}, this[_0x54ea3e(0x185)] = null, this[_0x54ea3e(0x153)] = null, this[_0x54ea3e(0x110)] = null, this['deviceScale'] = null, this[_0x54ea3e(0x15c)] = null, this['maxOnceSendRows'] = 0x0, this[_0x54ea3e(0x13b)] = 0x0, this['labelModels'] = [], this[_0x54ea3e(0x116)] = 0x0, this[_0x54ea3e(0x162)] = ![], this[_0x54ea3e(0x135)] = null, this[_0x54ea3e(0x152)] = {}, this[_0x54ea3e(0x123)] = ![], this[_0x54ea3e(0x187)] = ![], this[_0x54ea3e(0x155)] = _JCAPIErrorCode.default[_0x54ea3e(0x145)], this[_0x54ea3e(0x169)]();
  }
  return _0x5d831a['prototype']['init'] = function () {
    var _0xc0fcc4 = a0_0x51ee;
    this['data'] = _0xc0fcc4(0x140);
  }, _0x5d831a['prototype'][_0x39dc03(0x10a)] = function (_0x8838e1, _0x28ea6d, _0x48af70) {
    var _this = this;
    var _0x17261a = _0x39dc03;
    this[_0x17261a(0x187)] == ![] && this[_0x17261a(0x12e)](_JCAPIErrorCode.default[_0x17261a(0x132)]), this[_0x17261a(0x122)] == null && (this[_0x17261a(0x122)] = new _JCBle.default(this)), this['ble'][_0x17261a(0x10a)](_0x8838e1, _0x28ea6d, function () {
      var _0x12647e = _0x17261a;
      _this['ble'][_0x12647e(0x115)] = ![], _0x48af70 && _0x48af70(), _this[_0x12647e(0x122)] != null && (_this[_0x12647e(0x122)] = null), _this[_0x12647e(0x133)] != null && (_this[_0x12647e(0x133)] = null), _this[_0x12647e(0x116)] = 0x0;
    });
  }, _0x5d831a['prototype']['scanedPrinters'] = function (_0x16c14b) {
    var _0x18e7d7 = _0x39dc03;
    this[_0x18e7d7(0x187)] == ![] && this[_0x18e7d7(0x12e)](_JCAPIErrorCode.default[_0x18e7d7(0x132)]), this[_0x18e7d7(0x122)] == null && (this[_0x18e7d7(0x122)] = new _JCBle.default(this)), this[_0x18e7d7(0x122)][_0x18e7d7(0x186)](_0x16c14b);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x18f)] = function (_0x720108) {
    var _0x2af756 = _0x39dc03;
    this[_0x2af756(0xff)] = _0x720108;
  }, _0x5d831a['prototype'][_0x39dc03(0x17c)] = function (_0x4de661) {
    this['useOutBleListen'] = _0x4de661;
  }, _0x5d831a['prototype']['setBuildPlatform'] = function (_0x16ade1) {
    var _0x3cb8db = _0x39dc03;
    (this[_0x3cb8db(0x114)] & 0x100) == 0x100 && console[_0x3cb8db(0x11a)]('设置了编译平台' + _0x16ade1), this[_0x3cb8db(0x155)] = _0x16ade1;
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x12e)] = function (_0x1cfdf2) {
    var _0x55c105 = _0x39dc03;
    this[_0x55c105(0x187)] = !![], this[_0x55c105(0x19c)] = _0x1cfdf2;
    if (this[_0x55c105(0x19c)] == _JCAPIErrorCode.default[_0x55c105(0x19f)]) {
      var _0x895c7 = dd['getSystemInfoSync']();
      this[_0x55c105(0x12c)] = _0x895c7[_0x55c105(0x12c)], this[_0x55c105(0x185)] = _0x895c7['SDKVersion'], this[_0x55c105(0x110)] = _0x895c7['screenHeight'], this[_0x55c105(0x153)] = _0x895c7[_0x55c105(0x199)], this[_0x55c105(0x150)] = _0x895c7[_0x55c105(0x139)];
    } else {
      if (this['sdkPlatform'] == _JCAPIErrorCode.default[_0x55c105(0x1a0)]) {
        var _0x895c7 = tt[_0x55c105(0x101)]();
        this[_0x55c105(0x12c)] = _0x895c7[_0x55c105(0x12c)], this['wxSDKVersion'] = _0x895c7['SDKVersion'], this[_0x55c105(0x110)] = _0x895c7[_0x55c105(0x14c)], this[_0x55c105(0x153)] = _0x895c7[_0x55c105(0x199)], this[_0x55c105(0x150)] = _0x895c7['devicePixelRatio'];
      } else {
        var _0x895c7 = wx[_0x55c105(0x101)]();
        this[_0x55c105(0x12c)] = _0x895c7['platform'], this[_0x55c105(0x185)] = _0x895c7[_0x55c105(0x120)], this[_0x55c105(0x110)] = _0x895c7[_0x55c105(0x14c)], this[_0x55c105(0x153)] = _0x895c7[_0x55c105(0x199)], this[_0x55c105(0x150)] = _0x895c7[_0x55c105(0x13e)];
      }
    }
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x195)] = function (_0x6b7a1e) {
    var _0x2757b8 = _0x39dc03;
    this[_0x2757b8(0x122)] && this[_0x2757b8(0x122)][_0x2757b8(0x107)](_0x6b7a1e);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x18e)] = function (_0x2fa369) {
    this['gapType'] = _0x2fa369;
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x128)] = function (_0x194f3b, _0x3d3ef8, _0x32f1fb, _0x549838, _0x16cddf, _0x29e3db) {
    var _0xf52a09 = _0x39dc03;
    this[_0xf52a09(0x100)] = !![], this[_0xf52a09(0x16d)] = _0x194f3b, this[_0xf52a09(0x18b)] = _0x32f1fb, this[_0xf52a09(0x197)] = _0x549838, this['compent'] = _0x3d3ef8, this[_0xf52a09(0x18d)] = this['getRotation'](_0x16cddf);
    var _0x6b898b = null;
    if (this['buildPlatform'] == _JCAPIErrorCode.default[_0xf52a09(0x164)]) {
      _0x29e3db != null && _0x29e3db != undefined ? (console['log'](_0xf52a09(0x1a9)), _0x6b898b = _0x29e3db) : _0x6b898b = uni[_0xf52a09(0x196)](_0x194f3b, _0x3d3ef8);
      this[_0xf52a09(0x13f)] = _0x6b898b;
      var _0x32e18e = this[_0xf52a09(0x18b)] > this['canvasHeight'] ? this[_0xf52a09(0x18b)] : this[_0xf52a09(0x197)];
      _0x32e18e = this['mm2px'](_0x32e18e);
      _0x3d3ef8 && _0x3d3ef8[_0xf52a09(0x170)] != null ? _0x3d3ef8[_0xf52a09(0x170)]({
        'canvasWidth': _0x32e18e,
        'canvasHeight': _0x32e18e
      }) : (_0x3d3ef8[_0xf52a09(0x18b)] = _0x32e18e, _0x3d3ef8[_0xf52a09(0x197)] = _0x32e18e, _0x3d3ef8[_0xf52a09(0x11b)](), (this['debug'] & 0x100) == 0x100 && console['log'](_0xf52a09(0x12f) + _0x32e18e));
      _0x6b898b['setFillStyle'](_0xf52a09(0x157)), _0x6b898b[_0xf52a09(0x181)](0x0, 0x0, _0x32e18e, _0x32e18e);
      return;
    } else {
      if (this[_0xf52a09(0x19c)] == _JCAPIErrorCode.default[_0xf52a09(0x19f)]) _0x6b898b = dd[_0xf52a09(0x196)](_0x194f3b);else {
        if (this[_0xf52a09(0x19c)] == _JCAPIErrorCode.default[_0xf52a09(0x1a0)]) {
          _0x6b898b = tt[_0xf52a09(0x196)](_0x194f3b, _0x3d3ef8), this[_0xf52a09(0x13f)] = _0x6b898b;
          var _0x408b7e = this['mm2px'](this['canvasWidth']),
            _0x1c0bf5 = this['mm2px'](this['canvasHeight']);
          _0x3d3ef8 && _0x3d3ef8[_0xf52a09(0x170)] != null && _0x3d3ef8[_0xf52a09(0x170)]({
            'canvasWidth': _0x408b7e,
            'canvasHeight': _0x1c0bf5
          });
          _0x6b898b[_0xf52a09(0x12b)](), _0x6b898b[_0xf52a09(0x136)]('#fff'), _0x6b898b[_0xf52a09(0x181)](0x0, 0x0, _0x408b7e, _0x1c0bf5);
          return;
        } else _0x6b898b = wx[_0xf52a09(0x196)](_0x194f3b, _0x3d3ef8);
      }
    }
    this[_0xf52a09(0x13f)] = _0x6b898b;
    var _0x381a9b = this[_0xf52a09(0x18b)] > this[_0xf52a09(0x197)] ? this[_0xf52a09(0x18b)] : this[_0xf52a09(0x197)];
    _0x381a9b = this[_0xf52a09(0x13c)](_0x381a9b), _0x3d3ef8 && _0x3d3ef8['setData'] != null && _0x3d3ef8[_0xf52a09(0x170)]({
      'canvasWidth': _0x381a9b,
      'canvasHeight': _0x381a9b
    }), _0x6b898b[_0xf52a09(0x12b)](), _0x6b898b[_0xf52a09(0x136)]('#fff'), _0x6b898b['fillRect'](0x0, 0x0, _0x381a9b, _0x381a9b);
  }, _0x5d831a[_0x39dc03(0x160)]['startJob'] = function (_0x2fcdd5, _0x3c9851, _0x102835, _0x37920a) {
    var _0x2e3432 = _0x39dc03;
    if (this[_0x2e3432(0x133)] == null || this[_0x2e3432(0x133)] === undefined || this[_0x2e3432(0x122)]['bleDevice'] == null) return;
    if (this['startJobFlag'] != null && this[_0x2e3432(0x1a8)]) return;
    this[_0x2e3432(0x1a8)] = !![];
    _0x2fcdd5 != null ? this[_0x2e3432(0x171)] = _0x2fcdd5 : this[_0x2e3432(0x171)] = 0x1;
    if (this[_0x2e3432(0x162)] || this[_0x2e3432(0x133)][_0x2e3432(0x13a)] == undefined || this[_0x2e3432(0x133)]['checkRFID'] == ![]) this[_0x2e3432(0x133)]['startJob'](_0x2fcdd5, _0x3c9851, _0x102835, _0x37920a);else {
      var _0x197d8d = this;
      this[_0x2e3432(0x133)]['getRFIDInfos'](function (_0x1c6b73) {
        var _0x5898f2 = _0x2e3432;
        var _0x91e378 = _0x3c9851;
        _0x1c6b73['res'] != 0x0 ? ((_0x197d8d[_0x5898f2(0x114)] & 0x1) == 0x1 && console[_0x5898f2(0x11a)](_0x5898f2(0x149) + _0x1c6b73['res'] + _0x5898f2(0x127)), _0x91e378 = -0x2) : _0x1c6b73[_0x5898f2(0x17a)] && _0x1c6b73[_0x5898f2(0x17a)]['total'] <= _0x1c6b73[_0x5898f2(0x17a)][_0x5898f2(0x156)] && ((_0x197d8d[_0x5898f2(0x114)] & 0x1) == 0x1 && console[_0x5898f2(0x11a)](_0x5898f2(0x149) + _0x1c6b73['data'][_0x5898f2(0x11c)] + '--' + _0x1c6b73[_0x5898f2(0x17a)][_0x5898f2(0x156)] + '--low2'), _0x91e378 = -0x2), _0x197d8d['printer']['startJob'](_0x2fcdd5, _0x91e378, _0x102835, _0x37920a);
      });
    }
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x12d)] = function (_0x5959ac) {
    var _0x11cad6 = _0x39dc03;
    if (this[_0x11cad6(0x133)] == null || this[_0x11cad6(0x133)] === undefined || this[_0x11cad6(0x122)][_0x11cad6(0x10b)] == null) return;
    this[_0x11cad6(0x133)][_0x11cad6(0x12d)](_0x5959ac);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x121)] = function (_0x59421e) {
    var _0x5b6526 = _0x39dc03;
    if (this[_0x5b6526(0x133)] == null || this[_0x5b6526(0x133)] === undefined || this[_0x5b6526(0x122)][_0x5b6526(0x10b)] == null) return;
    this[_0x5b6526(0x133)]['didReadPrintErrorInfo'](_0x59421e);
  }, _0x5d831a['prototype'][_0x39dc03(0x1a3)] = function (_0x5cc239) {
    var _0x19fb03 = parseInt((_0x5cc239 % 0x168 + 0x168) % 0x168);
    if (_0x19fb03 % 0x5a == 0x0) return _0x19fb03;
    if (_0x19fb03 < 0x5a) return 0x0;else {
      if (_0x19fb03 < 0xb4) return 0x5a;else return _0x19fb03 < 0x10e ? 0xb4 : 0x10e;
    }
  }, _0x5d831a['prototype'][_0x39dc03(0x13c)] = function (_0x11212a) {
    var _0x328c63 = _0x39dc03;
    return this[_0x328c63(0x133)] != null && this['printer'] != undefined ? this[_0x328c63(0x133)][_0x328c63(0x13c)](_0x11212a) : Math['ceil'](_0x11212a * 0x8);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x191)] = function (_0x54b479, _0x3ce9dc, _0x23fb31, _0x444eef, _0x3a8c0c, _0x5d8216) {
    var _0x345a6d = _0x39dc03;
    var _0x1add47 = this[_0x345a6d(0x13f)];
    _0x1add47[_0x345a6d(0x15f)]();
    var _0x17aaf0 = this['mm2px'](_0x444eef);
    _0x3ce9dc = this[_0x345a6d(0x13c)](_0x3ce9dc), _0x23fb31 = this[_0x345a6d(0x13c)](_0x23fb31), _0x1add47['setFontSize'](_0x17aaf0);
    this['sdkPlatform'] == _JCAPIErrorCode.default[_0x345a6d(0x1a0)] && _0x1add47['scale'](0x1 / this[_0x345a6d(0x150)], 0x1 / this['deviceScale']);
    _0x1add47[_0x345a6d(0x19a)](_0x3ce9dc, _0x23fb31), _0x1add47[_0x345a6d(0x154)](this[_0x345a6d(0x1a3)](_0x3a8c0c) * Math['PI'] / 0xb4), _0x1add47['translate'](-_0x3ce9dc, -_0x23fb31), _0x1add47['setFillStyle'](_0x345a6d(0x126));
    var _0x35cc78 = 'left';
    if (_0x5d8216) {
      var _0x35995b = '';
      _0x5d8216[_0x345a6d(0x161)] ? _0x35995b += _0x345a6d(0xf8) : _0x35995b += 'normal\x20';
      _0x5d8216['bold'] && (_0x35995b += 'bold\x20');
      _0x35995b += _0x17aaf0, _0x35995b += 'px\x20';
      _0x5d8216['family'] && _0x5d8216[_0x345a6d(0x194)] != '' ? _0x35995b += _0x5d8216[_0x345a6d(0x194)] : _0x35995b += _0x345a6d(0x1a7);
      _0x1add47['font'] = _0x35995b;
      if (_0x5d8216[_0x345a6d(0x16e)]) {
        if (_0x5d8216['align'] == 'center') _0x35cc78 = _0x345a6d(0x15b);else _0x5d8216[_0x345a6d(0x16e)] == _0x345a6d(0x1a1) && (_0x35cc78 = _0x345a6d(0x1a1));
      }
    } else {
      if (this[_0x345a6d(0x19c)] == _JCAPIErrorCode.default[_0x345a6d(0x19f)]) {
        var _0x13fcb9 = _0x345a6d(0x104) + _0x17aaf0 + 'px\x20SimHei\x20SimHei';
        _0x1add47['font'] = _0x13fcb9;
      }
    }
    _0x1add47[_0x345a6d(0x166)](_0x35cc78), _0x1add47['fillText'](_0x54b479, _0x3ce9dc, _0x23fb31), _0x1add47[_0x345a6d(0x146)]();
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x148)] = function (_0x4ebb10, _0x271be0, _0x2a8824, _0x278b4c, _0x233031, _0x2eebb1, _0x596790, _0x27e7b0, _0x4917a1) {
    var _0x3d6fc5 = _0x39dc03;
    var _0x58ee5f = this[_0x3d6fc5(0x13f)];
    _0x271be0 = this[_0x3d6fc5(0x13c)](_0x271be0), _0x2a8824 = this[_0x3d6fc5(0x13c)](_0x2a8824), _0x278b4c = this['mm2px'](_0x278b4c), _0x233031 = this[_0x3d6fc5(0x13c)](_0x233031);
    var _0x19493f = this['mm2px'](_0x596790),
      _0x4b9175 = this[_0x3d6fc5(0x13c)](_0x27e7b0);
    if ((_0x19493f > _0x4b9175 || _0x4b9175 >= _0x233031) && _0x4917a1 != 0x2) {
      (this[_0x3d6fc5(0x114)] & 0x1) == 0x1 && console[_0x3d6fc5(0x11a)](_0x3d6fc5(0x17e) + _0x233031 + '--fontH=' + _0x19493f + '---fontHeight=' + _0x4b9175);
      this[_0x3d6fc5(0x103)] = _JCAPIErrorCode.default[_0x3d6fc5(0x190)];
      return;
    }
    _0x58ee5f[_0x3d6fc5(0x15f)]();
    this[_0x3d6fc5(0x19c)] == _JCAPIErrorCode.default[_0x3d6fc5(0x1a0)] && _0x58ee5f[_0x3d6fc5(0x142)](0x1 / this[_0x3d6fc5(0x150)], 0x1 / this['deviceScale']);
    _0x58ee5f[_0x3d6fc5(0x19a)](_0x271be0, _0x2a8824), _0x58ee5f[_0x3d6fc5(0x154)](this[_0x3d6fc5(0x1a3)](_0x2eebb1) * Math['PI'] / 0xb4), _0x58ee5f[_0x3d6fc5(0x19a)](-_0x271be0, -_0x2a8824);
    if (_0x4917a1 == 0x0) _JCCodeWriter.default[_0x3d6fc5(0x192)](_0x58ee5f, _0x4ebb10, _0x271be0, _0x2a8824, _0x278b4c, _0x233031 - _0x4b9175);else _0x4917a1 == 0x1 ? _JCCodeWriter.default[_0x3d6fc5(0x192)](_0x58ee5f, _0x4ebb10, _0x271be0, _0x4b9175 + _0x2a8824, _0x278b4c, _0x233031 - _0x4b9175) : _JCCodeWriter.default[_0x3d6fc5(0x192)](_0x58ee5f, _0x4ebb10, _0x271be0, _0x2a8824, _0x278b4c, _0x233031);
    _0x58ee5f['restore']();
    if (_0x4917a1 == 0x0) {
      _0x58ee5f['save']();
      var _0x5c3832 = 0x0;
      if (this[_0x3d6fc5(0x19c)] == _JCAPIErrorCode.default[_0x3d6fc5(0x1a0)]) _0x58ee5f['scale'](0x1 / this[_0x3d6fc5(0x150)], 0x1 / this['deviceScale']), _0x58ee5f[_0x3d6fc5(0x118)](_0x19493f), _0x5c3832 = _0x271be0 + _0x278b4c / 0x2, _0x58ee5f['setTextAlign'](_0x3d6fc5(0x15b));else {
        if (this[_0x3d6fc5(0x19c)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) _0x58ee5f[_0x3d6fc5(0x118)](_0x19493f), _0x5c3832 = _0x271be0 + _0x278b4c / 0x2, _0x58ee5f['setTextAlign'](_0x3d6fc5(0x15b));else {
          _0x58ee5f[_0x3d6fc5(0x118)](_0x19493f);
          var _0x3a2ed2 = _0x58ee5f[_0x3d6fc5(0x119)](_0x4ebb10);
          _0x5c3832 = _0x271be0 + (_0x278b4c - _0x3a2ed2[_0x3d6fc5(0x167)]) / 0x2;
        }
      }
      var _0x20b11a = _0x2a8824 + _0x233031;
      _0x58ee5f[_0x3d6fc5(0x19a)](_0x271be0, _0x2a8824), _0x58ee5f['rotate'](this[_0x3d6fc5(0x1a3)](_0x2eebb1) * Math['PI'] / 0xb4), _0x58ee5f[_0x3d6fc5(0x19a)](-_0x271be0, -_0x2a8824), _0x58ee5f[_0x3d6fc5(0x136)]('#000'), _0x58ee5f[_0x3d6fc5(0x10d)]('bottom'), _0x58ee5f['fillText'](_0x4ebb10, _0x5c3832, _0x20b11a), _0x58ee5f[_0x3d6fc5(0x146)]();
    } else {
      if (_0x4917a1 == 0x1) {
        _0x58ee5f['save']();
        var _0x13ad09 = 0x0;
        if (this[_0x3d6fc5(0x19c)] == _JCAPIErrorCode.default[_0x3d6fc5(0x1a0)]) _0x58ee5f[_0x3d6fc5(0x142)](0x1 / this[_0x3d6fc5(0x150)], 0x1 / this[_0x3d6fc5(0x150)]), _0x58ee5f[_0x3d6fc5(0x118)](_0x19493f), _0x13ad09 = _0x271be0 + _0x278b4c / 0x2, _0x58ee5f['setTextAlign'](_0x3d6fc5(0x15b));else {
          if (this['sdkPlatform'] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) _0x58ee5f[_0x3d6fc5(0x118)](_0x19493f), _0x13ad09 = _0x271be0 + _0x278b4c / 0x2, _0x58ee5f['setTextAlign']('center');else {
            _0x58ee5f['setFontSize'](_0x19493f);
            var _0x463b53 = _0x58ee5f[_0x3d6fc5(0x119)](_0x4ebb10);
            _0x13ad09 = _0x271be0 + (_0x278b4c - _0x463b53[_0x3d6fc5(0x167)]) / 0x2;
          }
        }
        var _0x4a7ed5 = _0x2a8824 + _0x19493f;
        _0x58ee5f[_0x3d6fc5(0x19a)](_0x271be0, _0x2a8824), _0x58ee5f[_0x3d6fc5(0x154)](this[_0x3d6fc5(0x1a3)](_0x2eebb1) * Math['PI'] / 0xb4), _0x58ee5f[_0x3d6fc5(0x19a)](-_0x271be0, -_0x2a8824), _0x58ee5f[_0x3d6fc5(0x136)](_0x3d6fc5(0x126)), _0x58ee5f[_0x3d6fc5(0x10d)]('bottom'), _0x58ee5f[_0x3d6fc5(0x151)](_0x4ebb10, _0x13ad09, _0x4a7ed5), _0x58ee5f[_0x3d6fc5(0x146)]();
      }
    }
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x106)] = function (_0x40d232, _0x63ffd2, _0x55ba80, _0x4f15f3, _0x247018, _0x3988e2, _0x56abf3) {
    var _0x146c57 = _0x39dc03;
    var _0x42f9ea = this[_0x146c57(0x13f)];
    _0x63ffd2 = this['mm2px'](_0x63ffd2), _0x55ba80 = this['mm2px'](_0x55ba80), _0x4f15f3 = this[_0x146c57(0x13c)](_0x4f15f3), _0x247018 = this['mm2px'](_0x247018), _0x42f9ea[_0x146c57(0x15f)](), this['sdkPlatform'] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] && _0x42f9ea[_0x146c57(0x142)](0x1 / this[_0x146c57(0x150)], 0x1 / this[_0x146c57(0x150)]), _0x42f9ea['translate'](_0x63ffd2, _0x55ba80), _0x42f9ea['rotate'](this[_0x146c57(0x1a3)](_0x3988e2) * Math['PI'] / 0xb4), _0x42f9ea[_0x146c57(0x19a)](-_0x63ffd2, -_0x55ba80), _JCCodeWriter.default[_0x146c57(0x17d)](_0x42f9ea, _0x40d232, _0x63ffd2, _0x55ba80, _0x4f15f3, _0x247018, _0x56abf3), _0x42f9ea['restore']();
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x1ab)] = function (_0x356442, _0x2193b6, _0x3ffc57, _0xdfe76, _0x226624, _0xc84447, _0x12797c) {
    var _0x2cf3f0 = _0x39dc03;
    var _0x5445c9 = this[_0x2cf3f0(0x13f)];
    _0x356442 = this[_0x2cf3f0(0x13c)](_0x356442), _0x2193b6 = this[_0x2cf3f0(0x13c)](_0x2193b6), _0x3ffc57 = this[_0x2cf3f0(0x13c)](_0x3ffc57), _0xdfe76 = this['mm2px'](_0xdfe76), _0x5445c9[_0x2cf3f0(0x15f)]();
    this[_0x2cf3f0(0x19c)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] && _0x5445c9['scale'](0x1 / this[_0x2cf3f0(0x150)], 0x1 / this[_0x2cf3f0(0x150)]);
    var _0x3fd069 = this[_0x2cf3f0(0x13c)](_0x226624);
    _0x5445c9[_0x2cf3f0(0x19a)](_0x356442, _0x2193b6), _0x5445c9[_0x2cf3f0(0x154)](this['getRotation'](_0x12797c) * Math['PI'] / 0xb4), _0x5445c9['translate'](-_0x356442, -_0x2193b6), _0xc84447 ? (_0x5445c9[_0x2cf3f0(0x136)](_0x2cf3f0(0x126)), _0x5445c9['fillRect'](_0x356442, _0x2193b6, _0x3ffc57, _0xdfe76)) : (_0x5445c9[_0x2cf3f0(0x163)](_0x3fd069), _0x5445c9[_0x2cf3f0(0x14e)]('#000'), _0x5445c9['strokeRect'](_0x356442, _0x2193b6, _0x3ffc57, _0xdfe76)), _0x5445c9[_0x2cf3f0(0x146)]();
  }, _0x5d831a['prototype']['drawLine'] = function (_0x1e3cfe, _0x141130, _0x5c467a, _0x41b9b1, _0x52ce66) {
    var _0x219b90 = _0x39dc03;
    var _0x4a29d5 = this[_0x219b90(0x13f)];
    _0x1e3cfe = this[_0x219b90(0x13c)](_0x1e3cfe), _0x141130 = this[_0x219b90(0x13c)](_0x141130), _0x5c467a = this[_0x219b90(0x13c)](_0x5c467a), _0x41b9b1 = this['mm2px'](_0x41b9b1), _0x4a29d5[_0x219b90(0x15f)](), this[_0x219b90(0x19c)] == _JCAPIErrorCode.default[_0x219b90(0x1a0)] && _0x4a29d5[_0x219b90(0x142)](0x1 / this[_0x219b90(0x150)], 0x1 / this[_0x219b90(0x150)]), _0x4a29d5[_0x219b90(0x136)](_0x219b90(0x126)), _0x4a29d5[_0x219b90(0x19a)](_0x1e3cfe, _0x141130), _0x4a29d5[_0x219b90(0x154)](this[_0x219b90(0x1a3)](_0x52ce66) * Math['PI'] / 0xb4), _0x4a29d5['translate'](-_0x1e3cfe, -_0x141130), _0x4a29d5[_0x219b90(0x181)](_0x1e3cfe, _0x141130, _0x5c467a, _0x41b9b1), _0x4a29d5[_0x219b90(0x146)]();
  }, _0x5d831a['prototype']['drawImage'] = function (_0x1efd08, _0x3c97d3, _0x45cca6, _0x4a0603, _0x5ae4fa, _0x23b2aa) {
    var _0x1aacd8 = _0x39dc03;
    var _0x833787 = this[_0x1aacd8(0x13f)];
    _0x3c97d3 = this[_0x1aacd8(0x13c)](_0x3c97d3), _0x45cca6 = this[_0x1aacd8(0x13c)](_0x45cca6), _0x4a0603 = this[_0x1aacd8(0x13c)](_0x4a0603), _0x5ae4fa = this[_0x1aacd8(0x13c)](_0x5ae4fa), _0x833787['save'](), this[_0x1aacd8(0x19c)] == _JCAPIErrorCode.default[_0x1aacd8(0x1a0)] && _0x833787[_0x1aacd8(0x142)](0x1 / this[_0x1aacd8(0x150)], 0x1 / this[_0x1aacd8(0x150)]), _0x833787[_0x1aacd8(0x19a)](_0x3c97d3, _0x45cca6), _0x833787[_0x1aacd8(0x154)](this[_0x1aacd8(0x1a3)](_0x23b2aa) * Math['PI'] / 0xb4), _0x833787['translate'](-_0x3c97d3, -_0x45cca6), _0x833787[_0x1aacd8(0x159)](_0x1efd08, _0x3c97d3, _0x45cca6, _0x4a0603, _0x5ae4fa), _0x833787['restore']();
  }, _0x5d831a['prototype'][_0x39dc03(0x131)] = function (_0x2922c9) {
    var _0x4a1777 = _0x39dc03;
    var _0x85abaf = this,
      _0x401b16 = this['ctx'],
      _0x367e84 = setTimeout(function () {
        var _0x3690f7 = a0_0x51ee;
        _0x85abaf[_0x3690f7(0x103)] = _JCAPIErrorCode.default[_0x3690f7(0x1ac)], _0x2922c9 && _0x2922c9();
      }, 0x1388);
    _0x401b16[_0x4a1777(0x12b)](![], function () {
      clearTimeout(_0x367e84), _0x2922c9 && setTimeout(function () {
        var _0x923fa2 = a0_0x51ee;
        _0x85abaf[_0x923fa2(0x100)] = ![], _0x2922c9();
      }, 0x96);
    });
  }, _0x5d831a[_0x39dc03(0x160)]['printImageData'] = function (_0x3ef63b, _0x22a125, _0x4c2c73, _0x3652be) {
    var _0x3f6f68 = _0x39dc03;
    if (this[_0x3f6f68(0x133)] == null || this[_0x3f6f68(0x133)] === undefined || this[_0x3f6f68(0x122)]['bleDevice'] == null) return;
    if (!_0x22a125 || !_0x22a125['width'] || !_0x22a125[_0x3f6f68(0x168)] || !_0x22a125[_0x3f6f68(0x17a)]) return;
    var _0x4cc412 = _0x22a125[_0x3f6f68(0x167)],
      _0x431ac2 = _0x22a125['height'],
      _0x3c5570 = this[_0x3f6f68(0x133)][_0x3f6f68(0x10e)](_0x4cc412, this[_0x3f6f68(0x171)]),
      _0x2f52ca = _0x3c5570['left'],
      _0x30e7a6 = _0x3c5570[_0x3f6f68(0x178)],
      _0xb4a57e = _0x3c5570['width'],
      _0x39f502 = _0x431ac2 - _0x3c5570['top'] - _0x3c5570[_0x3f6f68(0x13d)];
    if (_0x2f52ca > 0x0 || _0x30e7a6 > 0x0 || _0xb4a57e < _0x4cc412 || _0x39f502 < _0x431ac2) {
      var _0x1e1b1f = [];
      for (var _0x5a5e9d = 0x0; _0x5a5e9d < _0x431ac2; _0x5a5e9d++) {
        for (var _0x293ff5 = 0x0; _0x293ff5 < _0x4cc412; _0x293ff5++) {
          if (_0x5a5e9d < _0x30e7a6) continue;
          if (_0x293ff5 < _0x2f52ca) continue;
          if (_0x293ff5 >= _0x2f52ca + _0xb4a57e) continue;
          if (_0x5a5e9d >= _0x39f502) continue;
          var _0x3bc42e = _0x22a125['data'][(_0x4cc412 * _0x5a5e9d + _0x293ff5) * 0x4 + 0x1];
          _0x3bc42e > 0x0 ? (_0x1e1b1f[_0x3f6f68(0x1a4)](0xff), _0x1e1b1f[_0x3f6f68(0x1a4)](0xff), _0x1e1b1f['push'](0xff), _0x1e1b1f[_0x3f6f68(0x1a4)](0xff)) : (_0x1e1b1f['push'](0xff), _0x1e1b1f[_0x3f6f68(0x1a4)](0x0), _0x1e1b1f[_0x3f6f68(0x1a4)](0x0), _0x1e1b1f[_0x3f6f68(0x1a4)](0x0));
        }
      }
      var _0x1a4571 = {
        'width': _0x4cc412 < _0xb4a57e ? _0x4cc412 : _0xb4a57e,
        'height': _0x39f502,
        'data': _0x1e1b1f
      };
      this[_0x3f6f68(0x100)] = ![], this['printer'][_0x3f6f68(0x129)](_0x1a4571, _0x3ef63b, 0x0, _0x4c2c73, _0x3652be);
    } else this['isDrawing'] = ![], this[_0x3f6f68(0x133)]['startPrint'](_0x22a125, _0x3ef63b, 0x0, _0x4c2c73, _0x3652be);
  }, _0x5d831a[_0x39dc03(0x160)]['startPrint'] = function (_0x1534c3, _0x3dcd14, _0x267180) {
    var _0x1f0c5b = _0x39dc03;
    if (this[_0x1f0c5b(0x133)] == null || this[_0x1f0c5b(0x133)] === undefined || this['ble']['bleDevice'] == null) return;
    if (this[_0x1f0c5b(0x103)] != null) {
      var _0x1dbea2 = this['drawError'];
      this[_0x1f0c5b(0x103)] = null, this[_0x1f0c5b(0x133)]['sendPrintError'](_0x1dbea2, this['printer']['printErrorInfoCallback']);
      return;
    }
    var _0x338125 = this,
      _0x1371e2 = this['canvasWidth'],
      _0x719541 = this[_0x1f0c5b(0x197)],
      _0x3e41d3 = this[_0x1f0c5b(0x133)][_0x1f0c5b(0x19d)](_0x1371e2, this[_0x1f0c5b(0x171)]),
      _0x388fa9 = _0x3e41d3[_0x1f0c5b(0x182)],
      _0xba1293 = _0x3e41d3[_0x1f0c5b(0x178)],
      _0x2b533e = _0x3e41d3[_0x1f0c5b(0x167)],
      _0x14de45 = this['printer'][_0x1f0c5b(0x13c)](_0x719541) - _0x3e41d3[_0x1f0c5b(0x178)];
    _0x14de45 < 0x0 && (_0x14de45 = this[_0x1f0c5b(0x133)][_0x1f0c5b(0x13c)](_0x719541), _0xba1293 = 0x0);
    _0x3e41d3['bottom'] && _0x3e41d3[_0x1f0c5b(0x13d)] > 0x0 && _0x3e41d3[_0x1f0c5b(0x13d)] < _0x14de45 && (_0x14de45 = _0x14de45 - _0x3e41d3[_0x1f0c5b(0x13d)]);
    this[_0x1f0c5b(0x18d)] % 0xb4 != 0x0 && (_0x3e41d3 = this[_0x1f0c5b(0x133)][_0x1f0c5b(0x19d)](_0x719541, this[_0x1f0c5b(0x171)]), _0x388fa9 = _0x3e41d3[_0x1f0c5b(0x178)], _0xba1293 = _0x3e41d3['left'], _0x2b533e = this['printer'][_0x1f0c5b(0x13c)](_0x1371e2) - _0x3e41d3[_0x1f0c5b(0x178)], _0x2b533e < 0x0 && (_0x2b533e = this[_0x1f0c5b(0x133)][_0x1f0c5b(0x13c)](_0x1371e2), _0x388fa9 = 0x0), _0x14de45 = _0x3e41d3[_0x1f0c5b(0x167)], _0x3e41d3[_0x1f0c5b(0x13d)] && _0x3e41d3['bottom'] > 0x0 && _0x3e41d3['bottom'] < _0x2b533e && (_0x2b533e = _0x2b533e - _0x3e41d3[_0x1f0c5b(0x13d)]));
    (this[_0x1f0c5b(0x114)] & 0x1) == 0x1 && console[_0x1f0c5b(0x11a)]('x=' + _0x388fa9 + _0x1f0c5b(0x16f) + _0x2b533e + _0x1f0c5b(0x176) + _0x14de45 + _0x1f0c5b(0x158) + _0xba1293);
    var _0x30634b = function _0x30634b(_0x4f8944) {
        var _0x135b7d = _0x1f0c5b;
        (_0x338125['debug'] & 0x1) == 0x1 && console[_0x135b7d(0x11a)](_0x4f8944), _0x338125['printer'][_0x135b7d(0x129)](_0x4f8944, _0x1534c3, _0x338125[_0x135b7d(0x18d)], _0x3dcd14, _0x267180);
      },
      _0x4e3aa9 = function _0x4e3aa9(_0x29e8b0) {};
    if (this[_0x1f0c5b(0x155)] == _JCAPIErrorCode.default[_0x1f0c5b(0x164)]) uni[_0x1f0c5b(0x144)]({
      'canvasId': this[_0x1f0c5b(0x13f)][_0x1f0c5b(0x16d)],
      'height': _0x14de45,
      'width': _0x2b533e,
      'x': _0x388fa9,
      'y': _0xba1293,
      'success': _0x30634b,
      'fail': _0x4e3aa9
    }, this[_0x1f0c5b(0x16c)]);else {
      if (this[_0x1f0c5b(0x19c)] == _JCAPIErrorCode.default[_0x1f0c5b(0x19f)]) this[_0x1f0c5b(0x13f)]['getImageData']({
        'x': _0x388fa9,
        'y': _0xba1293,
        'width': _0x2b533e,
        'height': _0x14de45,
        'success': _0x30634b,
        'fail': _0x4e3aa9
      });else this[_0x1f0c5b(0x19c)] == _JCAPIErrorCode.default[_0x1f0c5b(0x1a0)] ? tt[_0x1f0c5b(0x144)]({
        'canvasId': this[_0x1f0c5b(0x13f)]['canvasId'],
        'height': _0x14de45,
        'width': _0x2b533e,
        'x': _0x388fa9,
        'y': _0xba1293,
        'success': _0x30634b,
        'fail': _0x4e3aa9
      }, this['compent']) : wx[_0x1f0c5b(0x144)]({
        'canvasId': this['ctx'][_0x1f0c5b(0x16d)],
        'height': _0x14de45,
        'width': _0x2b533e,
        'x': _0x388fa9,
        'y': _0xba1293,
        'success': _0x30634b,
        'fail': _0x4e3aa9
      }, this[_0x1f0c5b(0x16c)]);
    }
  }, _0x5d831a['prototype']['cancelPrint'] = function (_0x31bbfc) {
    var _0xb2908a = _0x39dc03;
    if (this[_0xb2908a(0x133)] == null || this['printer'] == undefined) return;
    this[_0xb2908a(0x133)][_0xb2908a(0x19e)] = _0x31bbfc, this[_0xb2908a(0x133)][_0xb2908a(0x1a5)] = !![];
  }, _0x5d831a[_0x39dc03(0x160)]['testPaperGap'] = function (_0x422512, _0x30fa38) {
    var _0x15fd35 = _0x39dc03;
    if (this[_0x15fd35(0x133)] == null || this['printer'] == undefined) {
      _0x30fa38 && _0x30fa38(_JCAPIErrorCode.default[_0x15fd35(0x134)]);
      return;
    }
    if (this[_0x15fd35(0x11f)] < 0x300 || this[_0x15fd35(0x152)] == null || this['printerInfos'] == undefined) {
      _0x30fa38 && _0x30fa38(_JCAPIErrorCode.default['JCSDK_PRINT_ERR_noSupport']);
      return;
    }
    if (this['printerInfos'][0x16] == 0x0) {
      _0x30fa38 && _0x30fa38(_JCAPIErrorCode.default[_0x15fd35(0x112)]);
      return;
    }
    var _0x3322ec = this,
      _0x4bc0fb = function _0x4bc0fb(_0x4fbbb9) {
        var _0x5bcd64 = _0x15fd35;
        if (_0x30fa38) {
          if (_0x4fbbb9 == -0x4) _0x30fa38(_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT']);else _0x4fbbb9 == 0x1 ? _0x30fa38(_JCAPIErrorCode.default[_0x5bcd64(0x172)]) : _0x30fa38(_JCAPIErrorCode.default[_0x5bcd64(0x125)]);
        }
      },
      _0x25dfd0 = function _0x25dfd0(_0x5df7ba) {
        var _0x5e36f8 = _0x15fd35;
        _0x3322ec[_0x5e36f8(0x133)]['getBiaoDingResult'](_0x4bc0fb);
      };
    this[_0x15fd35(0x133)][_0x15fd35(0x175)](_0x422512, _0x25dfd0);
  }, _0x5d831a[_0x39dc03(0x160)]['closePrinter'] = function () {
    var _0x4764e3 = _0x39dc03;
    if (this[_0x4764e3(0x122)] == null || this[_0x4764e3(0x122)] == undefined) return;
    this[_0x4764e3(0x122)][_0x4764e3(0x198)]();
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x1aa)] = function () {
    var _0x82996 = _0x39dc03;
    if (this[_0x82996(0x122)] == null || this[_0x82996(0x122)] == undefined || this[_0x82996(0x133)] == null || this[_0x82996(0x133)] == undefined || this['ble'][_0x82996(0x10b)] == null) return null;
    return this['ble'][_0x82996(0x10b)];
  }, _0x5d831a['prototype'][_0x39dc03(0x188)] = function (_0x5f2b4a) {
    var _0x4e6646 = _0x39dc03;
    if (this[_0x4e6646(0x133)] == null || this['printer'] == undefined) return _0x5f2b4a && _0x5f2b4a({
      'code': -0x4
    }), null;
    return this[_0x4e6646(0x133)]['getSn'](_0x5f2b4a);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x180)] = function (_0x2e187e) {
    var _0x191428 = _0x39dc03;
    if (this[_0x191428(0x133)] == null || this[_0x191428(0x133)] == undefined) return _0x2e187e && _0x2e187e({
      'code': -0x4
    }), null;
    return this[_0x191428(0x133)][_0x191428(0x1a2)](_0x2e187e);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0xfb)] = function (_0x5d159c) {
    var _0x5e3806 = _0x39dc03;
    if (this[_0x5e3806(0x133)] == null || this[_0x5e3806(0x133)] == undefined) return _0x5d159c && _0x5d159c({
      'code': -0x4
    }), null;
    return this[_0x5e3806(0x133)]['getHversion'](_0x5d159c);
  }, _0x5d831a[_0x39dc03(0x160)][_0x39dc03(0x12a)] = function (_0xf8d0c3) {
    var _0x1666bf = _0x39dc03;
    if (this[_0x1666bf(0x133)] == null || this[_0x1666bf(0x133)] == undefined) return _0xf8d0c3 && _0xf8d0c3({
      'code': -0x4
    }), null;
    return this[_0x1666bf(0x133)][_0x1666bf(0x12a)](_0xf8d0c3);
  }, _0x5d831a['prototype']['getPageInfos'] = function (_0x2b00ed) {
    var _0x47b7d4 = _0x39dc03;
    if (this[_0x47b7d4(0x133)] == null || this[_0x47b7d4(0x133)] == undefined) return _0x2b00ed && _0x2b00ed({
      'code': -0x4
    }), null;
    return this[_0x47b7d4(0x133)][_0x47b7d4(0x193)](_0x2b00ed);
  }, _0x5d831a['prototype'][_0x39dc03(0x14f)] = function () {
    var _0x3c4c15 = _0x39dc03;
    if (this[_0x3c4c15(0x133)] == null || this['printer'] == undefined) return 0xc8;
    return this[_0x3c4c15(0x133)][_0x3c4c15(0x14f)]();
  }, _0x5d831a[_0x39dc03(0x160)]['clear'] = function () {
    var _0x4a83da = _0x39dc03;
    this['startJobFlag'] = ![], this[_0x4a83da(0x133)] && this[_0x4a83da(0x133)][_0x4a83da(0x117)]();
  }, _0x5d831a['prototype'][_0x39dc03(0x14d)] = function (_0x6ac156) {
    var _0x309da3 = _0x39dc03;
    this[_0x309da3(0x17b)] = _0x6ac156;
    var _0xb7f56c = _JCDataUntil.default[_0x309da3(0xfc)](0xaf, 0x1);
    this[_0x309da3(0x116)] = 0xbf;
    var _0x3fd63a = this;
    this['ble']['sendData'](_0xb7f56c, 0xa, function () {
      var _0x4e4ec9 = _0x309da3;
      _0x3fd63a[_0x4e4ec9(0x189)](_0x3fd63a[_0x4e4ec9(0x17b)], -0x4);
    });
  }, _0x5d831a[_0x39dc03(0x160)]['setPrinter'] = function (_0x203100) {
    var _0x3b82d9 = _0x39dc03;
    var _0x2f2502 = _0x203100 >> 0x8,
      _0x211ae6 = _0x203100 & 0xff;
    (this[_0x3b82d9(0x114)] & 0x1) == 0x1 && console[_0x3b82d9(0x11a)](_0x3b82d9(0x113) + _0x203100 + _0x3b82d9(0x1a6) + _0x2f2502 + _0x3b82d9(0x18a) + _0x211ae6);
    this[_0x3b82d9(0x133)] = null;
    if (this[_0x3b82d9(0x11f)] >= 0x300) {
      this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x15d)](this);
      (this[_0x3b82d9(0x152)][0x1d] > 0x0 || this[_0x3b82d9(0x152)][0x22] > 0x0) && (this[_0x3b82d9(0x133)] = new _JCPrinter.default['SAutoPrinter'](this));
      this[_0x3b82d9(0x133)][_0x3b82d9(0x138)] = this[_0x3b82d9(0x152)][0x4];
      var _0x2e61b1 = this['printerInfos'][0x4] == 0x12c ? 0xc : 0x8;
      this[_0x3b82d9(0x133)][_0x3b82d9(0x143)] = this[_0x3b82d9(0x152)][0xa] / _0x2e61b1, this[_0x3b82d9(0x133)][_0x3b82d9(0x130)] = this['printerInfos'][0xa] / 0x8, this[_0x3b82d9(0x133)][_0x3b82d9(0x14a)] = this[_0x3b82d9(0x152)][0x5] > 0x0, this[_0x3b82d9(0x133)][_0x3b82d9(0x179)] = this[_0x3b82d9(0x152)][0xd] - 0x1;
    } else {
      if (_0x2f2502 == 0x1) this[_0x3b82d9(0x15c)] == 0x3 ? _0x211ae6 == 0x10 ? this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x15a)](this) : this[_0x3b82d9(0x133)] = new _JCPrinter.default['QB3SPrinter'](this) : this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x16a)](this);else {
        if (_0x2f2502 == 0x2) this['agreement'] == 0x3 ? this['printer'] = new _JCPrinter.default[_0x3b82d9(0x137)](this) : this['printer'] = new _JCPrinter.default[_0x3b82d9(0x15e)](this);else {
          if (_0x2f2502 == 0x6) this[_0x3b82d9(0x133)] = new _JCPrinter.default['B16Printer'](this);else {
            if (_0x2f2502 == 0x3) this[_0x3b82d9(0x15c)] == 0x3 ? this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x19b)](this) : this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x177)](this);else {
              if (_0x2f2502 == 0x7) this[_0x3b82d9(0x15c)] == 0x3 ? this['printer'] = new _JCPrinter.default[_0x3b82d9(0x137)](this) : this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x15e)](this);else {
                if (_0x2f2502 == 0x4) {} else {
                  if (_0x2f2502 == 0x8) _0x211ae6 == 0x2 ? this['printer'] = new _JCPrinter.default[_0x3b82d9(0x105)](this) : this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x16b)](this);else {
                    if (_0x2f2502 == 0x9) this[_0x3b82d9(0x133)] = new _JCPrinter.default['B16Printer'](this);else {
                      if (_0x2f2502 == 0xa) this['printer'] = new _JCPrinter.default['B101Printer'](this);else {
                        if (_0x2f2502 == 0x10) this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x102)](this);else {
                          if (_0x2f2502 == 0xb) this[_0x3b82d9(0x133)] = new _JCPrinter.default['QB203Printer'](this);else {
                            if (_0x2f2502 == 0x13) this[_0x3b82d9(0x133)] = new _JCPrinter.default[_0x3b82d9(0x17f)](this);else {
                              this['ble'][_0x3b82d9(0x18c)](![]);
                              return;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var _0x10498e = this;
    this[_0x3b82d9(0x133)][_0x3b82d9(0x1a2)](function (_0x1f2851) {
      var _0x4a579e = _0x3b82d9;
      _0x10498e[_0x4a579e(0x133)][_0x4a579e(0xf9)](function (_0x1cdcdb) {
        var _0x551bfe = _0x4a579e;
        (0, _typeof2.default)(_0x1f2851) == _0x551bfe(0x11e) || typeof _0x1cdcdb == 'number' ? _0x10498e['ble'][_0x551bfe(0x18c)](![]) : _0x10498e[_0x551bfe(0x133)]['getBleInfos'](function (_0x520899) {
          var _0x37df = _0x551bfe;
          _0x10498e[_0x37df(0x133)][_0x37df(0x11d)] = _0x1f2851, _0x10498e[_0x37df(0x133)][_0x37df(0x165)] = _0x1cdcdb, _0x10498e[_0x37df(0x15c)] == 0x3 ? _0x10498e[_0x37df(0x133)][_0x37df(0xfd)](function (_0x2e00c4) {
            var _0xfd4b09 = _0x37df;
            _0x10498e['ble'][_0xfd4b09(0x18c)](!![]);
          }) : _0x10498e['ble'][_0x37df(0x18c)](!![]);
        });
      });
    });
  }, function () {
    return _0x3e3cc2 == null && (_0x3e3cc2 = new _0x5d831a()), _0x3e3cc2;
  };
}();
var _default = ManagerSDK;
exports.default = _default;
function a0_0x5528() {
  var _0x506f2a = ['ctx', 'ManagerSDK', '5711841ALWilA', 'scale', 'maxDeviceLength', 'canvasGetImageData', 'JCSDK_PLATFORM_Build_Origin', 'restore', '150MsOxMr', 'drawBarcode', '获取到的信息:', 'supportRFID', 'doubleColorPrintSupport', 'screenHeight', 'getInfos', 'setStrokeStyle', 'getMultiple', 'deviceScale', 'fillText', 'printerInfos', 'deviceWidth', 'rotate', 'buildPlatform', 'used', '#ffffff', '---y=', 'drawImage', 'QB3SPPrinter', 'center', 'agreement', 'QAutoPrinter', 'B16Printer', 'save', 'prototype', 'italic', 'isJCUser', 'setLineWidth', 'JCSDK_PLATFORM_Build_Uni', 'hVer', 'setTextAlign', 'width', 'height', 'init', 'B3SPrinter', 'QB32Printer', 'compent', 'canvasId', 'align', '----width=', 'setData', 'gapType', 'JCSDK_PRINT_ERR_none', '3606110qjbqcy', 'content', 'setBiaoDing', '----height=', 'B21Printer', 'top', 'printWay', 'data', 'getPrinterInfosCallback', 'setUseBleListen', 'qrcode', '条码输入参数有误：height=', 'QK1Printer', 'getSoftVersion', 'fillRect', 'left', '233xrGuqF', '8006SviMdW', 'wxSDKVersion', 'scanedPrinters', 'isSetPlatform', 'getSN', 'callbackOnce', '---subType=', 'canvasWidth', 'openStatus', 'canvasRotation', 'setPrintPageGapType', 'setPrintDarkness', 'JCSDK_PRINT_ERR_DATA', 'drawText', 'barcode', 'getBlackPaperSpaceBetween', 'family', 'onBleValueChange', 'createCanvasContext', 'canvasHeight', 'closePrinter', 'screenWidth', 'translate', 'QB21Printer', 'sdkPlatform', 'getDropSize', 'cancelCallback', 'JCSDK_PLATFORM_DD', 'JCSDK_PLATFORM_FS', 'right', 'getSversion', 'getRotation', 'push', 'wantCancel', '---type=', 'SimHei', 'startJobFlag', '----------传入了canvas', 'getConnName', 'drawRectangle', 'JCSDK_PRINT_ERR_Drawing_Timeout', 'italic\x20', 'getHversion', 'fontHeight', 'getHardVersion', 'createData', 'getCutDataInfos', '1971021ocRFYX', 'darkness', 'isDrawing', 'getSystemInfoSync', 'QB1Printer', 'drawError', 'normal\x20normal\x20', 'QB32RPrinter', 'drawQRCode', 'onOutValueChange', 'doublePrinterMaxCache', '531708rFNgcg', 'openPrinter', 'bleDevice', '100565FJQcSF', 'setTextBaseline', 'getDropByRealWidth', '959497kdVztH', 'deviceHeight', 'filled', 'JCSDK_PRINT_ERR_noSupport', '---printerType=', 'debug', 'bleConnectionState', 'needCMD', 'clear', 'setFontSize', 'measureText', 'log', '$forceUpdate', 'total', 'sVer', 'number', 'protoVer', 'SDKVersion', 'didReadPrintErrorInfo', 'ble', 'useOutBleListen', '8TKUfBO', 'JCSDK_PRINT_ERR_fail', '#000', '--low1', 'startDrawLabel', 'startPrint', 'getPrintWithSpeedOrQuality', 'draw', 'platform', 'didReadPrintCountInfo', 'setPlatform', 'Canvas\x20dimensions\x20updated2:', 'maxWordSizeLength', 'endDrawLabel', 'JCSDK_PLATFORM_WX', 'printer', 'JCSDK_PRINT_ERR_DISCONNECT', 'getInfosCallback', 'setFillStyle', 'QB16Printer', 'dpi', 'pixelRatio', 'checkRFID', 'maxCacheRows', 'mm2px', 'bottom', 'devicePixelRatio'];
  a0_0x5528 = function a0_0x5528() {
    return _0x506f2a;
  };
  return a0_0x5528();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 182:
/*!**********************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCCodeWriter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _JCBarcode = _interopRequireDefault(__webpack_require__(/*! ./JCBarcode */ 183));
var _JCQrcode = _interopRequireDefault(__webpack_require__(/*! ./JCQrcode */ 184));
(function (_0x2eb4de, _0x497fa0) {
  var _0x3b60dc = a0_0xf7bb,
    _0x420fda = _0x2eb4de();
  while (!![]) {
    try {
      var _0x560d66 = parseInt(_0x3b60dc(0x7a)) / 0x1 + parseInt(_0x3b60dc(0x7c)) / 0x2 + parseInt(_0x3b60dc(0x85)) / 0x3 * (-parseInt(_0x3b60dc(0x81)) / 0x4) + parseInt(_0x3b60dc(0x88)) / 0x5 * (parseInt(_0x3b60dc(0x87)) / 0x6) + -parseInt(_0x3b60dc(0x7e)) / 0x7 + -parseInt(_0x3b60dc(0x84)) / 0x8 * (parseInt(_0x3b60dc(0x86)) / 0x9) + -parseInt(_0x3b60dc(0x80)) / 0xa;
      if (_0x560d66 === _0x497fa0) break;else _0x420fda['push'](_0x420fda['shift']());
    } catch (_0x2114bb) {
      _0x420fda['push'](_0x420fda['shift']());
    }
  }
})(a0_0x4f5b, 0xf2687);
function a0_0x4f5b() {
  var _0x40a1c7 = ['54711HkWsKg', '27Rttfid', '3820962dJPGXd', '15Zebruc', '1153292HYjPMs', 'code128WithxAndY', '2315280yFGsMK', 'log', '3294158OYNDgI', '绘制出错', '1061800bkVDGf', '296PiFPeF', 'draw', 'api', '3472528tdEpve'];
  a0_0x4f5b = function a0_0x4f5b() {
    return _0x40a1c7;
  };
  return a0_0x4f5b();
}
function a0_0xf7bb(_0x241af9, _0xee4f50) {
  var _0x4f5bcc = a0_0x4f5b();
  return a0_0xf7bb = function a0_0xf7bb(_0xf7bb26, _0x5bb806) {
    _0xf7bb26 = _0xf7bb26 - 0x7a;
    var _0x4e0148 = _0x4f5bcc[_0xf7bb26];
    return _0x4e0148;
  }, a0_0xf7bb(_0x241af9, _0xee4f50);
}
function barCode(_0x41328, _0x13e379, _0x427bb9, _0x18dfae, _0x3cab7e, _0x1c397b) {
  var _0x1aa339 = a0_0xf7bb;
  try {
    _JCBarcode.default[_0x1aa339(0x83)][_0x1aa339(0x7b)](_0x41328, _0x13e379, _0x427bb9, _0x18dfae, _0x3cab7e, _0x1c397b);
  } catch (_0x469fed) {
    console[_0x1aa339(0x7d)](_0x1aa339(0x7f));
  }
}
function qrCode(_0x2c85f7, _0x4b9774, _0x4b4e44, _0x31176b, _0x123f99, _0x53ec23, _0x33c601) {
  var _0x11b5a4 = a0_0xf7bb;
  try {
    _JCQrcode.default['api'][_0x11b5a4(0x82)](_0x4b9774, _0x2c85f7, _0x4b4e44, _0x31176b, _0x123f99, _0x53ec23, _0x33c601 % 0x4);
  } catch (_0x568cd7) {
    console[_0x11b5a4(0x7d)](_0x11b5a4(0x7f));
  }
}
var _default = {
  'barcode': barCode,
  'qrcode': qrCode
};
exports.default = _default;

/***/ }),

/***/ 183:
/*!*******************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCBarcode.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var a0_0x2b9442 = a0_0x50f0;
(function (_0x427466, _0x41e6c2) {
  var _0x513d33 = a0_0x50f0,
    _0x183a73 = _0x427466();
  while (!![]) {
    try {
      var _0x3ae4ee = -parseInt(_0x513d33(0x8b)) / 0x1 + -parseInt(_0x513d33(0x9c)) / 0x2 + -parseInt(_0x513d33(0x8a)) / 0x3 * (-parseInt(_0x513d33(0x92)) / 0x4) + parseInt(_0x513d33(0x93)) / 0x5 + parseInt(_0x513d33(0x9d)) / 0x6 * (parseInt(_0x513d33(0x90)) / 0x7) + -parseInt(_0x513d33(0x9b)) / 0x8 + -parseInt(_0x513d33(0x91)) / 0x9 * (-parseInt(_0x513d33(0x99)) / 0xa);
      if (_0x3ae4ee === _0x41e6c2) break;else _0x183a73['push'](_0x183a73['shift']());
    } catch (_0x265abd) {
      _0x183a73['push'](_0x183a73['shift']());
    }
  }
})(a0_0x8f17, 0x49a51);
var CHAR_TILDE = 0x7e,
  CODE_FNC1 = 0x66,
  SET_STARTA = 0x67,
  SET_STARTB = 0x68,
  SET_STARTC = 0x69,
  SET_SHIFT = 0x62,
  SET_CODEA = 0x65,
  SET_CODEB = 0x64,
  SET_STOP = 0x6a,
  REPLACE_CODES = {
    'CHAR_TILDE': CODE_FNC1
  },
  CODESET = {
    'ANY': 0x1,
    'AB': 0x2,
    'A': 0x3,
    'B': 0x4,
    'C': 0x5
  };
function getBytes(_0x40e9ff) {
  var _0x4778e8 = a0_0x50f0,
    _0x2e8888 = [];
  for (var _0x3a0028 = 0x0; _0x3a0028 < _0x40e9ff['length']; _0x3a0028++) {
    _0x2e8888['push'](_0x40e9ff[_0x4778e8(0x94)](_0x3a0028));
  }
  return _0x2e8888;
}
function a0_0x50f0(_0x430cce, _0x5dcbe1) {
  var _0x8f1758 = a0_0x8f17();
  return a0_0x50f0 = function a0_0x50f0(_0x50f0eb, _0x112de5) {
    _0x50f0eb = _0x50f0eb - 0x81;
    var _0x4d9b6c = _0x8f1758[_0x50f0eb];
    return _0x4d9b6c;
  }, a0_0x50f0(_0x430cce, _0x5dcbe1);
}
var api = {
  'code128': function code128(_0xd62992, _0x4b8c6e, _0x46fd6a, _0x15b675) {
    var _0xdc84d5 = a0_0x50f0;
    _0x46fd6a = parseInt(_0x46fd6a), _0x15b675 = parseInt(_0x15b675);
    var _0x4e1cd6 = stringToCode128(_0x4b8c6e),
      _0x1d7761 = new Graphics(_0xd62992, _0x46fd6a, _0x15b675),
      _0x4bb9ef = _0x1d7761[_0xdc84d5(0x9e)]['width'] / ((_0x4e1cd6['length'] - 0x3) * 0xb + 0x23),
      _0x253be6 = _0x1d7761[_0xdc84d5(0x9e)][_0xdc84d5(0x87)],
      _0x24422a = _0x1d7761['area']['top'];
    for (var _0x248da5 = 0x0; _0x248da5 < _0x4e1cd6[_0xdc84d5(0x98)]; _0x248da5++) {
      var _0x112476 = _0x4e1cd6[_0x248da5];
      for (var _0x261099 = 0x0; _0x261099 < 0x8; _0x261099 += 0x2) {
        var _0x55dd52 = PATTERNS[_0x112476][_0x261099] * _0x4bb9ef,
          _0x2ab21d = _0x15b675 - _0x24422a,
          _0x714f26 = PATTERNS[_0x112476][_0x261099 + 0x1] * _0x4bb9ef;
        _0x55dd52 > 0x0 && _0x1d7761[_0xdc84d5(0x83)](_0x253be6, _0x24422a, _0x55dd52, _0x2ab21d), _0x253be6 += _0x55dd52 + _0x714f26;
      }
    }
    _0xd62992['draw']();
  },
  'code128WithxAndY': function code128WithxAndY(_0x4f4e3e, _0x26c083) {
    var _0x2e28b5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x0;
    var _0x24c151 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x0;
    var _0x3a0f1f = arguments.length > 4 ? arguments[4] : undefined;
    var _0x2aae7e = arguments.length > 5 ? arguments[5] : undefined;
    var _0x2f487c = a0_0x50f0;
    _0x3a0f1f = parseInt(_0x3a0f1f), _0x2aae7e = parseInt(_0x2aae7e);
    var _0x357fd1 = stringToCode128(_0x26c083),
      _0x5f87e1 = new Graphics(_0x4f4e3e, _0x3a0f1f, _0x2aae7e),
      _0x5c6eb8 = _0x5f87e1['area'][_0x2f487c(0x81)] / ((_0x357fd1[_0x2f487c(0x98)] - 0x3) * 0xb + 0x23),
      _0x36db6a = _0x5f87e1['area'][_0x2f487c(0x87)],
      _0x4d355e = _0x5f87e1[_0x2f487c(0x9e)]['top'];
    _0x36db6a += _0x2e28b5, _0x4d355e += _0x24c151, _0x36db6a = _0x2e28b5, _0x4d355e = _0x24c151;
    for (var _0x107ffb = 0x0; _0x107ffb < _0x357fd1['length']; _0x107ffb++) {
      var _0x1fb253 = _0x357fd1[_0x107ffb];
      for (var _0x1e415b = 0x0; _0x1e415b < 0x8; _0x1e415b += 0x2) {
        var _0x27623f = PATTERNS[_0x1fb253][_0x1e415b] * _0x5c6eb8,
          _0x5ddb92 = _0x2aae7e - _0x4d355e,
          _0xba9290 = PATTERNS[_0x1fb253][_0x1e415b + 0x1] * _0x5c6eb8;
        _0x27623f > 0x0 && (_0x5ddb92 += _0x24c151, _0x5f87e1['fillFgRect'](_0x36db6a, _0x4d355e, _0x27623f, _0x5ddb92)), _0x36db6a += _0x27623f + _0xba9290;
      }
    }
  }
};
function stringToCode128(_0x33519a) {
  var _0x212d1e = a0_0x50f0,
    _0xfc8647 = {
      'currcs': CODESET['C']
    },
    _0x377300 = getBytes(_0x33519a),
    _0x1a4b47 = _0x377300[0x0] == CHAR_TILDE ? 0x1 : 0x0,
    _0x24e9a2 = _0x377300[_0x212d1e(0x98)] > 0x0 ? codeSetAllowedFor(_0x377300[_0x1a4b47++]) : CODESET['AB'],
    _0x547c10 = _0x377300[_0x212d1e(0x98)] > 0x0 ? codeSetAllowedFor(_0x377300[_0x1a4b47++]) : CODESET['AB'];
  _0xfc8647['currcs'] = _0xb40fa3(_0x24e9a2, _0x547c10), _0xfc8647['currcs'] = _0x79e5db(_0x377300, _0xfc8647[_0x212d1e(0x88)]);
  var _0x25f4a4 = ![];
  _0xfc8647[_0x212d1e(0x88)] == CODESET['C'] && _0x33519a['length'] % 0x2 == 0x1 && (_0x25f4a4 = !![]);
  var _0x52bd79 = new Array();
  switch (_0xfc8647[_0x212d1e(0x88)]) {
    case CODESET['A']:
      _0x52bd79['push'](SET_STARTA);
      break;
    case CODESET['B']:
      _0x52bd79[_0x212d1e(0x85)](SET_STARTB);
      break;
    default:
      _0x52bd79[_0x212d1e(0x85)](SET_STARTC);
      break;
  }
  for (var _0x43956f = 0x0; _0x43956f < _0x377300[_0x212d1e(0x98)]; _0x43956f++) {
    var _0x11c0aa = _0x377300[_0x43956f];
    _0x11c0aa in REPLACE_CODES && (_0x52bd79[_0x212d1e(0x85)](REPLACE_CODES[_0x11c0aa]), _0x43956f++, _0x11c0aa = _0x377300[_0x43956f]);
    var _0x4481b4 = _0x377300[_0x212d1e(0x98)] > _0x43956f + 0x1 ? _0x377300[_0x43956f + 0x1] : -0x1;
    _0x52bd79 = _0x52bd79[_0x212d1e(0x95)](_0x2a2598(_0x11c0aa, _0x4481b4, _0xfc8647[_0x212d1e(0x88)]));
    if (_0xfc8647[_0x212d1e(0x88)] == CODESET['C']) _0x43956f++;
    _0x25f4a4 && _0x43956f == _0x377300[_0x212d1e(0x98)] - 0x2 && (_0x52bd79['push'](SET_CODEB), _0x11c0aa = _0x377300[_0x43956f + 0x1], _0x4481b4 = -0x1, _0x52bd79 = _0x52bd79[_0x212d1e(0x95)](_0x2a2598(_0x11c0aa, _0x4481b4, CODESET['B'])), _0x43956f++);
  }
  var _0x180686 = _0x52bd79[0x0];
  for (var _0x216fc9 = 0x1; _0x216fc9 < _0x52bd79[_0x212d1e(0x98)]; _0x216fc9++) {
    _0x180686 += _0x216fc9 * _0x52bd79[_0x216fc9];
  }
  _0x52bd79['push'](_0x180686 % 0x67), _0x52bd79[_0x212d1e(0x85)](SET_STOP);
  return _0x52bd79;
  function _0xb40fa3(_0x4126dd, _0x14c695) {
    var _0x3cf80f = 0x0;
    return _0x3cf80f += _0x4126dd == CODESET['A'] ? 0x1 : 0x0, _0x3cf80f += _0x4126dd == CODESET['B'] ? -0x1 : 0x0, _0x3cf80f += _0x14c695 == CODESET['A'] ? 0x1 : 0x0, _0x3cf80f += _0x14c695 == CODESET['B'] ? -0x1 : 0x0, _0x3cf80f > 0x0 ? CODESET['A'] : CODESET['B'];
  }
  function _0x79e5db(_0x22c94c, _0x1444a7) {
    for (var _0x173892 = 0x0; _0x173892 < _0x22c94c['length']; _0x173892++) {
      var _0xe45ffb = _0x22c94c[_0x173892];
      if ((_0xe45ffb < 0x30 || _0xe45ffb > 0x39) && _0xe45ffb != CHAR_TILDE) return _0x1444a7;
    }
    return CODESET['C'];
  }
  function _0x2a2598(_0x6d1081, _0x4c0e00, _0x4766b7) {
    var _0x3f7ceb = _0x212d1e,
      _0x47a318 = [],
      _0xecc6ab = -0x1;
    if (charCompatible(_0x6d1081, _0x4766b7)) {
      if (_0x4766b7 == CODESET['C']) {
        if (_0x4c0e00 == -0x1) _0xecc6ab = SET_CODEB, _0x4766b7 = CODESET['B'];else _0x4c0e00 != -0x1 && !charCompatible(_0x4c0e00, _0x4766b7) && (charCompatible(_0x4c0e00, CODESET['A']) ? (_0xecc6ab = SET_CODEA, _0x4766b7 = CODESET['A']) : (_0xecc6ab = SET_CODEB, _0x4766b7 = CODESET['B']));
      }
    } else {
      if (_0x4c0e00 != -0x1 && !charCompatible(_0x4c0e00, _0x4766b7)) switch (_0x4766b7) {
        case CODESET['A']:
          _0xecc6ab = SET_CODEB, _0x4766b7 = CODESET['B'];
          break;
        case CODESET['B']:
          _0xecc6ab = SET_CODEA, _0x4766b7 = CODESET['A'];
          break;
      } else _0xecc6ab = SET_SHIFT;
    }
    return _0xecc6ab != -0x1 ? (_0x47a318[_0x3f7ceb(0x85)](_0xecc6ab), _0x47a318[_0x3f7ceb(0x85)](codeValue(_0x4c0e00))) : _0x4766b7 == CODESET['C'] ? _0x47a318[_0x3f7ceb(0x85)](codeValue(_0x6d1081, _0x4c0e00)) : _0x47a318[_0x3f7ceb(0x85)](codeValue(_0x6d1081)), _0xfc8647[_0x3f7ceb(0x88)] = _0x4766b7, _0x47a318;
  }
}
function codeValue(_0x1b9feb, _0x5bc380) {
  var _0x244bb5 = a0_0x50f0;
  return (0, _typeof2.default)(_0x5bc380) == _0x244bb5(0x97) ? _0x1b9feb >= 0x20 ? _0x1b9feb - 0x20 : _0x1b9feb + 0x40 : parseInt(String['fromCharCode'](_0x1b9feb) + String[_0x244bb5(0x9a)](_0x5bc380));
}
function charCompatible(_0x1153ce, _0x24c1b1) {
  var _0xcd1ea6 = codeSetAllowedFor(_0x1153ce);
  if (_0xcd1ea6 == CODESET['ANY']) return !![];
  if (_0xcd1ea6 == CODESET['AB']) return !![];
  if (_0xcd1ea6 == CODESET['A'] && _0x24c1b1 == CODESET['A']) return !![];
  if (_0xcd1ea6 == CODESET['B'] && _0x24c1b1 == CODESET['B']) return !![];
  return ![];
}
function a0_0x8f17() {
  var _0x3219ef = ['4638456HKgGYd', '757380PHRrHm', '870JWgASQ', 'area', '_fillRect', 'fillRect', 'width', '#ffffff', 'fillFgRect', 'ANY', 'push', 'height', 'left', 'currcs', 'padding_width', '6QPpUIl', '383248FGxCFn', 'ctx', 'quiet', 'round', 'prototype', '18417GHXCbY', '37521wqmuRP', '907292EmryqN', '2978170aMjrKU', 'charCodeAt', 'concat', 'border_size', 'undefined', 'length', '510VgGXJd', 'fromCharCode'];
  a0_0x8f17 = function a0_0x8f17() {
    return _0x3219ef;
  };
  return a0_0x8f17();
}
function codeSetAllowedFor(_0x76f819) {
  var _0x18ac4c = a0_0x50f0;
  if (_0x76f819 >= 0x30 && _0x76f819 <= 0x39) return CODESET[_0x18ac4c(0x84)];else return _0x76f819 >= 0x20 && _0x76f819 <= 0x5f ? CODESET['AB'] : _0x76f819 < 0x20 ? CODESET['A'] : CODESET['B'];
}
var Graphics = function Graphics(_0x476a18, _0x3724d5, _0x17d709) {
  var _0x4ffaba = a0_0x50f0;
  this[_0x4ffaba(0x81)] = _0x3724d5, this[_0x4ffaba(0x86)] = _0x17d709, this[_0x4ffaba(0x8d)] = Math[_0x4ffaba(0x8e)](this[_0x4ffaba(0x81)] / 0x28), this[_0x4ffaba(0x96)] = 0x0, this['padding_width'] = 0x0, this['area'] = {
    'width': _0x3724d5 - this[_0x4ffaba(0x89)] * 0x2 - this['quiet'] * 0x2,
    'height': _0x17d709 - this[_0x4ffaba(0x96)] * 0x2,
    'top': this[_0x4ffaba(0x96)] - 0x4,
    'left': this[_0x4ffaba(0x89)] + this['quiet']
  }, this[_0x4ffaba(0x8c)] = _0x476a18, this['fg'] = '#000000', this['bg'] = _0x4ffaba(0x82);
};
Graphics[a0_0x2b9442(0x8f)][a0_0x2b9442(0x9f)] = function (_0x4b8cd3, _0x361b9a, _0x3c0d46, _0x42a991, _0x16fcdd) {
  var _0x4ae2f7 = a0_0x2b9442;
  this[_0x4ae2f7(0x8c)]['setFillStyle'](_0x16fcdd), this[_0x4ae2f7(0x8c)][_0x4ae2f7(0xa0)](_0x4b8cd3, _0x361b9a, _0x3c0d46, _0x42a991);
}, Graphics[a0_0x2b9442(0x8f)][a0_0x2b9442(0x83)] = function (_0x5acc26, _0x433eb4, _0x398117, _0x18d2db) {
  var _0x173ec6 = a0_0x2b9442;
  this[_0x173ec6(0x9f)](_0x5acc26, _0x433eb4, _0x398117, _0x18d2db, this['fg']);
}, Graphics[a0_0x2b9442(0x8f)]['fillBgRect'] = function (_0x1d2f34, _0x3a0927, _0x37ea0f, _0x5be840) {
  var _0x57743b = a0_0x2b9442;
  this[_0x57743b(0x9f)](_0x1d2f34, _0x3a0927, _0x37ea0f, _0x5be840, this['bg']);
};
var PATTERNS = [[0x2, 0x1, 0x2, 0x2, 0x2, 0x2, 0x0, 0x0], [0x2, 0x2, 0x2, 0x1, 0x2, 0x2, 0x0, 0x0], [0x2, 0x2, 0x2, 0x2, 0x2, 0x1, 0x0, 0x0], [0x1, 0x2, 0x1, 0x2, 0x2, 0x3, 0x0, 0x0], [0x1, 0x2, 0x1, 0x3, 0x2, 0x2, 0x0, 0x0], [0x1, 0x3, 0x1, 0x2, 0x2, 0x2, 0x0, 0x0], [0x1, 0x2, 0x2, 0x2, 0x1, 0x3, 0x0, 0x0], [0x1, 0x2, 0x2, 0x3, 0x1, 0x2, 0x0, 0x0], [0x1, 0x3, 0x2, 0x2, 0x1, 0x2, 0x0, 0x0], [0x2, 0x2, 0x1, 0x2, 0x1, 0x3, 0x0, 0x0], [0x2, 0x2, 0x1, 0x3, 0x1, 0x2, 0x0, 0x0], [0x2, 0x3, 0x1, 0x2, 0x1, 0x2, 0x0, 0x0], [0x1, 0x1, 0x2, 0x2, 0x3, 0x2, 0x0, 0x0], [0x1, 0x2, 0x2, 0x1, 0x3, 0x2, 0x0, 0x0], [0x1, 0x2, 0x2, 0x2, 0x3, 0x1, 0x0, 0x0], [0x1, 0x1, 0x3, 0x2, 0x2, 0x2, 0x0, 0x0], [0x1, 0x2, 0x3, 0x1, 0x2, 0x2, 0x0, 0x0], [0x1, 0x2, 0x3, 0x2, 0x2, 0x1, 0x0, 0x0], [0x2, 0x2, 0x3, 0x2, 0x1, 0x1, 0x0, 0x0], [0x2, 0x2, 0x1, 0x1, 0x3, 0x2, 0x0, 0x0], [0x2, 0x2, 0x1, 0x2, 0x3, 0x1, 0x0, 0x0], [0x2, 0x1, 0x3, 0x2, 0x1, 0x2, 0x0, 0x0], [0x2, 0x2, 0x3, 0x1, 0x1, 0x2, 0x0, 0x0], [0x3, 0x1, 0x2, 0x1, 0x3, 0x1, 0x0, 0x0], [0x3, 0x1, 0x1, 0x2, 0x2, 0x2, 0x0, 0x0], [0x3, 0x2, 0x1, 0x1, 0x2, 0x2, 0x0, 0x0], [0x3, 0x2, 0x1, 0x2, 0x2, 0x1, 0x0, 0x0], [0x3, 0x1, 0x2, 0x2, 0x1, 0x2, 0x0, 0x0], [0x3, 0x2, 0x2, 0x1, 0x1, 0x2, 0x0, 0x0], [0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x0, 0x0], [0x2, 0x1, 0x2, 0x1, 0x2, 0x3, 0x0, 0x0], [0x2, 0x1, 0x2, 0x3, 0x2, 0x1, 0x0, 0x0], [0x2, 0x3, 0x2, 0x1, 0x2, 0x1, 0x0, 0x0], [0x1, 0x1, 0x1, 0x3, 0x2, 0x3, 0x0, 0x0], [0x1, 0x3, 0x1, 0x1, 0x2, 0x3, 0x0, 0x0], [0x1, 0x3, 0x1, 0x3, 0x2, 0x1, 0x0, 0x0], [0x1, 0x1, 0x2, 0x3, 0x1, 0x3, 0x0, 0x0], [0x1, 0x3, 0x2, 0x1, 0x1, 0x3, 0x0, 0x0], [0x1, 0x3, 0x2, 0x3, 0x1, 0x1, 0x0, 0x0], [0x2, 0x1, 0x1, 0x3, 0x1, 0x3, 0x0, 0x0], [0x2, 0x3, 0x1, 0x1, 0x1, 0x3, 0x0, 0x0], [0x2, 0x3, 0x1, 0x3, 0x1, 0x1, 0x0, 0x0], [0x1, 0x1, 0x2, 0x1, 0x3, 0x3, 0x0, 0x0], [0x1, 0x1, 0x2, 0x3, 0x3, 0x1, 0x0, 0x0], [0x1, 0x3, 0x2, 0x1, 0x3, 0x1, 0x0, 0x0], [0x1, 0x1, 0x3, 0x1, 0x2, 0x3, 0x0, 0x0], [0x1, 0x1, 0x3, 0x3, 0x2, 0x1, 0x0, 0x0], [0x1, 0x3, 0x3, 0x1, 0x2, 0x1, 0x0, 0x0], [0x3, 0x1, 0x3, 0x1, 0x2, 0x1, 0x0, 0x0], [0x2, 0x1, 0x1, 0x3, 0x3, 0x1, 0x0, 0x0], [0x2, 0x3, 0x1, 0x1, 0x3, 0x1, 0x0, 0x0], [0x2, 0x1, 0x3, 0x1, 0x1, 0x3, 0x0, 0x0], [0x2, 0x1, 0x3, 0x3, 0x1, 0x1, 0x0, 0x0], [0x2, 0x1, 0x3, 0x1, 0x3, 0x1, 0x0, 0x0], [0x3, 0x1, 0x1, 0x1, 0x2, 0x3, 0x0, 0x0], [0x3, 0x1, 0x1, 0x3, 0x2, 0x1, 0x0, 0x0], [0x3, 0x3, 0x1, 0x1, 0x2, 0x1, 0x0, 0x0], [0x3, 0x1, 0x2, 0x1, 0x1, 0x3, 0x0, 0x0], [0x3, 0x1, 0x2, 0x3, 0x1, 0x1, 0x0, 0x0], [0x3, 0x3, 0x2, 0x1, 0x1, 0x1, 0x0, 0x0], [0x3, 0x1, 0x4, 0x1, 0x1, 0x1, 0x0, 0x0], [0x2, 0x2, 0x1, 0x4, 0x1, 0x1, 0x0, 0x0], [0x4, 0x3, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0], [0x1, 0x1, 0x1, 0x2, 0x2, 0x4, 0x0, 0x0], [0x1, 0x1, 0x1, 0x4, 0x2, 0x2, 0x0, 0x0], [0x1, 0x2, 0x1, 0x1, 0x2, 0x4, 0x0, 0x0], [0x1, 0x2, 0x1, 0x4, 0x2, 0x1, 0x0, 0x0], [0x1, 0x4, 0x1, 0x1, 0x2, 0x2, 0x0, 0x0], [0x1, 0x4, 0x1, 0x2, 0x2, 0x1, 0x0, 0x0], [0x1, 0x1, 0x2, 0x2, 0x1, 0x4, 0x0, 0x0], [0x1, 0x1, 0x2, 0x4, 0x1, 0x2, 0x0, 0x0], [0x1, 0x2, 0x2, 0x1, 0x1, 0x4, 0x0, 0x0], [0x1, 0x2, 0x2, 0x4, 0x1, 0x1, 0x0, 0x0], [0x1, 0x4, 0x2, 0x1, 0x1, 0x2, 0x0, 0x0], [0x1, 0x4, 0x2, 0x2, 0x1, 0x1, 0x0, 0x0], [0x2, 0x4, 0x1, 0x2, 0x1, 0x1, 0x0, 0x0], [0x2, 0x2, 0x1, 0x1, 0x1, 0x4, 0x0, 0x0], [0x4, 0x1, 0x3, 0x1, 0x1, 0x1, 0x0, 0x0], [0x2, 0x4, 0x1, 0x1, 0x1, 0x2, 0x0, 0x0], [0x1, 0x3, 0x4, 0x1, 0x1, 0x1, 0x0, 0x0], [0x1, 0x1, 0x1, 0x2, 0x4, 0x2, 0x0, 0x0], [0x1, 0x2, 0x1, 0x1, 0x4, 0x2, 0x0, 0x0], [0x1, 0x2, 0x1, 0x2, 0x4, 0x1, 0x0, 0x0], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x0, 0x0], [0x1, 0x2, 0x4, 0x1, 0x1, 0x2, 0x0, 0x0], [0x1, 0x2, 0x4, 0x2, 0x1, 0x1, 0x0, 0x0], [0x4, 0x1, 0x1, 0x2, 0x1, 0x2, 0x0, 0x0], [0x4, 0x2, 0x1, 0x1, 0x1, 0x2, 0x0, 0x0], [0x4, 0x2, 0x1, 0x2, 0x1, 0x1, 0x0, 0x0], [0x2, 0x1, 0x2, 0x1, 0x4, 0x1, 0x0, 0x0], [0x2, 0x1, 0x4, 0x1, 0x2, 0x1, 0x0, 0x0], [0x4, 0x1, 0x2, 0x1, 0x2, 0x1, 0x0, 0x0], [0x1, 0x1, 0x1, 0x1, 0x4, 0x3, 0x0, 0x0], [0x1, 0x1, 0x1, 0x3, 0x4, 0x1, 0x0, 0x0], [0x1, 0x3, 0x1, 0x1, 0x4, 0x1, 0x0, 0x0], [0x1, 0x1, 0x4, 0x1, 0x1, 0x3, 0x0, 0x0], [0x1, 0x1, 0x4, 0x3, 0x1, 0x1, 0x0, 0x0], [0x4, 0x1, 0x1, 0x1, 0x1, 0x3, 0x0, 0x0], [0x4, 0x1, 0x1, 0x3, 0x1, 0x1, 0x0, 0x0], [0x1, 0x1, 0x3, 0x1, 0x4, 0x1, 0x0, 0x0], [0x1, 0x1, 0x4, 0x1, 0x3, 0x1, 0x0, 0x0], [0x3, 0x1, 0x1, 0x1, 0x4, 0x1, 0x0, 0x0], [0x4, 0x1, 0x1, 0x1, 0x3, 0x1, 0x0, 0x0], [0x2, 0x1, 0x1, 0x4, 0x1, 0x2, 0x0, 0x0], [0x2, 0x1, 0x1, 0x2, 0x1, 0x4, 0x0, 0x0], [0x2, 0x1, 0x1, 0x2, 0x3, 0x2, 0x0, 0x0], [0x2, 0x3, 0x3, 0x1, 0x1, 0x1, 0x2, 0x0]];
var _default = {
  'api': api
};
exports.default = _default;

/***/ }),

/***/ 184:
/*!******************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCQrcode.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var a0_0x509e70 = a0_0x475b;
(function (_0x17380c, _0xc2dea1) {
  var _0x1cc832 = a0_0x475b,
    _0x6a0fa3 = _0x17380c();
  while (!![]) {
    try {
      var _0x448b24 = parseInt(_0x1cc832(0x13a)) / 0x1 + parseInt(_0x1cc832(0x160)) / 0x2 + -parseInt(_0x1cc832(0x18c)) / 0x3 + parseInt(_0x1cc832(0x185)) / 0x4 * (-parseInt(_0x1cc832(0x183)) / 0x5) + -parseInt(_0x1cc832(0x141)) / 0x6 + parseInt(_0x1cc832(0x189)) / 0x7 + -parseInt(_0x1cc832(0x170)) / 0x8 * (-parseInt(_0x1cc832(0x186)) / 0x9);
      if (_0x448b24 === _0xc2dea1) break;else _0x6a0fa3['push'](_0x6a0fa3['shift']());
    } catch (_0x1d2761) {
      _0x6a0fa3['push'](_0x6a0fa3['shift']());
    }
  }
})(a0_0x20e7, 0xd9384);
var QRCode;
function QR8bitByte(_0x9d1bed) {
  var _0x572bfe = a0_0x475b;
  this['mode'] = QRMode[_0x572bfe(0x184)], this[_0x572bfe(0x192)] = _0x9d1bed, this[_0x572bfe(0x15f)] = [];
  for (var _0x4bae7e = 0x0, _0x30cbb8 = this[_0x572bfe(0x192)][_0x572bfe(0x151)]; _0x4bae7e < _0x30cbb8; _0x4bae7e++) {
    var _0x2a4767 = [],
      _0x28b3c6 = this['data'][_0x572bfe(0x150)](_0x4bae7e);
    if (_0x28b3c6 > 0x10000) _0x2a4767[0x0] = 0xf0 | (_0x28b3c6 & 0x1c0000) >>> 0x12, _0x2a4767[0x1] = 0x80 | (_0x28b3c6 & 0x3f000) >>> 0xc, _0x2a4767[0x2] = 0x80 | (_0x28b3c6 & 0xfc0) >>> 0x6, _0x2a4767[0x3] = 0x80 | _0x28b3c6 & 0x3f;else {
      if (_0x28b3c6 > 0x800) _0x2a4767[0x0] = 0xe0 | (_0x28b3c6 & 0xf000) >>> 0xc, _0x2a4767[0x1] = 0x80 | (_0x28b3c6 & 0xfc0) >>> 0x6, _0x2a4767[0x2] = 0x80 | _0x28b3c6 & 0x3f;else _0x28b3c6 > 0x80 ? (_0x2a4767[0x0] = 0xc0 | (_0x28b3c6 & 0x7c0) >>> 0x6, _0x2a4767[0x1] = 0x80 | _0x28b3c6 & 0x3f) : _0x2a4767[0x0] = _0x28b3c6;
    }
    this[_0x572bfe(0x15f)][_0x572bfe(0x179)](_0x2a4767);
  }
  this[_0x572bfe(0x15f)] = Array[_0x572bfe(0x167)][_0x572bfe(0x161)][_0x572bfe(0x17c)]([], this[_0x572bfe(0x15f)]), this[_0x572bfe(0x15f)][_0x572bfe(0x151)] != this[_0x572bfe(0x192)][_0x572bfe(0x151)] && (this[_0x572bfe(0x15f)][_0x572bfe(0x143)](0xbf), this['parsedData'][_0x572bfe(0x143)](0xbb), this[_0x572bfe(0x15f)][_0x572bfe(0x143)](0xef));
}
QR8bitByte[a0_0x509e70(0x167)] = {
  'getLength': function getLength(_0xa87110) {
    var _0x2cb22f = a0_0x509e70;
    return this[_0x2cb22f(0x15f)][_0x2cb22f(0x151)];
  },
  'write': function write(_0x2723ac) {
    var _0x182ca4 = a0_0x509e70;
    for (var _0x212f25 = 0x0, _0x4cde23 = this['parsedData'][_0x182ca4(0x151)]; _0x212f25 < _0x4cde23; _0x212f25++) {
      _0x2723ac[_0x182ca4(0x13b)](this[_0x182ca4(0x15f)][_0x212f25], 0x8);
    }
  }
};
function a0_0x20e7() {
  var _0x4d9609 = ['PATTERN001', 'glog(', 'apply', 'addData', '/errorCorrectLevel:', 'lineTo', 'EXP_TABLE', 'setupPositionAdjustPattern', 'No\x20canvas\x20provided\x20to\x20draw\x20QR\x20code\x20in!', '16865AzStjk', 'MODE_8BIT_BYTE', '316VnjJzb', '909ebwASE', 'G15', 'write', '9865198hCkfFI', 'type:', 'mode', '1941234Xffdqu', 'dataCache', 'dataCount', 'setupPositionProbePattern', 'glog', 'multiply', 'data', 'RS_BLOCK_TABLE', 'PAD1', 'setupTypeNumber', 'isDark', 'bad\x20rs\x20block\x20@\x20typeNumber:', 'getLostPoint', 'abs', 'typeNumber', 'LOG_TABLE', 'createEmptyMovieClip', '589578wMTfAx', 'put', 'getModuleCount', 'code\x20length\x20overflow.\x20(', 'getBestMaskPattern', 'get', 'G18', '6211644BCfBSE', 'endFill', 'unshift', 'PATTERN010', 'putBit', 'PATTERN100', 'getRSBlocks', 'getPatternPosition', 'PATTERN111', 'setupTypeInfo', 'createData', 'MODE_ALPHA_NUM', '#000000', 'PATTERN011', 'getLength', 'charCodeAt', 'length', 'getBCHDigit', '_oQRCode', 'floor', 'G15_MASK', 'getRsBlockTable', 'createBytes', 'dataList', 'gexp', 'PATTERN110', 'moveTo', 'replace', 'PATTERN_POSITION_TABLE', 'Nothing\x20provided\x20to\x20draw\x20QR\x20code\x20in!', 'parsedData', '1675278vLnaFn', 'concat', 'errorCorrectLevel', 'num', 'totalCount', 'PATTERN000', 'setFillStyle', 'prototype', 'mapData', 'MODE_NUMBER', 'mod', 'moduleCount', 'getLengthInBits', 'fillRect', 'mode:', 'makeImpl', '160mVRwPd', 'getBCHTypeInfo', 'buffer', 'modules', 'MODE_KANJI', 'bad\x20maskPattern:', 'getBCHTypeNumber', 'PATTERN101', 'PAD0', 'push'];
  a0_0x20e7 = function a0_0x20e7() {
    return _0x4d9609;
  };
  return a0_0x20e7();
}
function QRCodeModel(_0x305c3f, _0xe5d56c) {
  var _0x4eecb5 = a0_0x509e70;
  this[_0x4eecb5(0x137)] = _0x305c3f, this['errorCorrectLevel'] = _0xe5d56c, this[_0x4eecb5(0x173)] = null, this[_0x4eecb5(0x16b)] = 0x0, this[_0x4eecb5(0x18d)] = null, this[_0x4eecb5(0x158)] = [];
}
QRCodeModel[a0_0x509e70(0x167)] = {
  'addData': function addData(_0xf82f0f) {
    var _0x395f48 = a0_0x509e70,
      _0x586666 = new QR8bitByte(_0xf82f0f);
    this[_0x395f48(0x158)][_0x395f48(0x179)](_0x586666), this[_0x395f48(0x18d)] = null;
  },
  'isDark': function isDark(_0x570500, _0x37f1ff) {
    var _0x196f32 = a0_0x509e70;
    if (_0x570500 < 0x0 || this[_0x196f32(0x16b)] <= _0x570500 || _0x37f1ff < 0x0 || this[_0x196f32(0x16b)] <= _0x37f1ff) throw new Error(_0x570500 + ',' + _0x37f1ff);
    return this[_0x196f32(0x173)][_0x570500][_0x37f1ff];
  },
  'getModuleCount': function getModuleCount() {
    var _0x378ab9 = a0_0x509e70;
    return this[_0x378ab9(0x16b)];
  },
  'make': function make() {
    var _0x3da870 = a0_0x509e70;
    this[_0x3da870(0x16f)](![], this[_0x3da870(0x13e)]());
  },
  'makeImpl': function makeImpl(_0x5549a7, _0x594113) {
    var _0x51cdf4 = a0_0x509e70;
    this[_0x51cdf4(0x16b)] = this[_0x51cdf4(0x137)] * 0x4 + 0x11, this['modules'] = new Array(this['moduleCount']);
    for (var _0x5407e1 = 0x0; _0x5407e1 < this[_0x51cdf4(0x16b)]; _0x5407e1++) {
      this[_0x51cdf4(0x173)][_0x5407e1] = new Array(this[_0x51cdf4(0x16b)]);
      for (var _0x3de9d4 = 0x0; _0x3de9d4 < this[_0x51cdf4(0x16b)]; _0x3de9d4++) {
        this[_0x51cdf4(0x173)][_0x5407e1][_0x3de9d4] = null;
      }
    }
    this[_0x51cdf4(0x18f)](0x0, 0x0), this[_0x51cdf4(0x18f)](this[_0x51cdf4(0x16b)] - 0x7, 0x0), this[_0x51cdf4(0x18f)](0x0, this[_0x51cdf4(0x16b)] - 0x7), this[_0x51cdf4(0x181)](), this['setupTimingPattern'](), this[_0x51cdf4(0x14a)](_0x5549a7, _0x594113), this[_0x51cdf4(0x137)] >= 0x7 && this[_0x51cdf4(0x195)](_0x5549a7), this[_0x51cdf4(0x18d)] == null && (this[_0x51cdf4(0x18d)] = QRCodeModel[_0x51cdf4(0x14b)](this[_0x51cdf4(0x137)], this['errorCorrectLevel'], this['dataList'])), this[_0x51cdf4(0x168)](this[_0x51cdf4(0x18d)], _0x594113);
  },
  'setupPositionProbePattern': function setupPositionProbePattern(_0x27210c, _0x2a97f7) {
    var _0x2e6bc4 = a0_0x509e70;
    for (var _0x369289 = -0x1; _0x369289 <= 0x7; _0x369289++) {
      if (_0x27210c + _0x369289 <= -0x1 || this[_0x2e6bc4(0x16b)] <= _0x27210c + _0x369289) continue;
      for (var _0x5e868e = -0x1; _0x5e868e <= 0x7; _0x5e868e++) {
        if (_0x2a97f7 + _0x5e868e <= -0x1 || this['moduleCount'] <= _0x2a97f7 + _0x5e868e) continue;
        0x0 <= _0x369289 && _0x369289 <= 0x6 && (_0x5e868e == 0x0 || _0x5e868e == 0x6) || 0x0 <= _0x5e868e && _0x5e868e <= 0x6 && (_0x369289 == 0x0 || _0x369289 == 0x6) || 0x2 <= _0x369289 && _0x369289 <= 0x4 && 0x2 <= _0x5e868e && _0x5e868e <= 0x4 ? this[_0x2e6bc4(0x173)][_0x27210c + _0x369289][_0x2a97f7 + _0x5e868e] = !![] : this[_0x2e6bc4(0x173)][_0x27210c + _0x369289][_0x2a97f7 + _0x5e868e] = ![];
      }
    }
  },
  'getBestMaskPattern': function getBestMaskPattern() {
    var _0x564867 = a0_0x509e70,
      _0x109436 = 0x0,
      _0xd700e0 = 0x0;
    for (var _0x3fe812 = 0x0; _0x3fe812 < 0x8; _0x3fe812++) {
      this[_0x564867(0x16f)](!![], _0x3fe812);
      var _0x4ecf69 = QRUtil[_0x564867(0x198)](this);
      (_0x3fe812 == 0x0 || _0x109436 > _0x4ecf69) && (_0x109436 = _0x4ecf69, _0xd700e0 = _0x3fe812);
    }
    return _0xd700e0;
  },
  'createMovieClip': function createMovieClip(_0x27214e, _0x2ab816, _0x30b58a) {
    var _0x452fd5 = a0_0x509e70,
      _0x13fd51 = _0x27214e[_0x452fd5(0x139)](_0x2ab816, _0x30b58a),
      _0x1cfc88 = 0x1;
    this['make']();
    for (var _0xfe7dea = 0x0; _0xfe7dea < this[_0x452fd5(0x173)][_0x452fd5(0x151)]; _0xfe7dea++) {
      var _0x120b3c = _0xfe7dea * _0x1cfc88;
      for (var _0x411645 = 0x0; _0x411645 < this[_0x452fd5(0x173)][_0xfe7dea]['length']; _0x411645++) {
        var _0x5567d2 = _0x411645 * _0x1cfc88,
          _0x4e29d6 = this[_0x452fd5(0x173)][_0xfe7dea][_0x411645];
        _0x4e29d6 && (_0x13fd51['beginFill'](0x0, 0x64), _0x13fd51[_0x452fd5(0x15b)](_0x5567d2, _0x120b3c), _0x13fd51[_0x452fd5(0x17f)](_0x5567d2 + _0x1cfc88, _0x120b3c), _0x13fd51[_0x452fd5(0x17f)](_0x5567d2 + _0x1cfc88, _0x120b3c + _0x1cfc88), _0x13fd51[_0x452fd5(0x17f)](_0x5567d2, _0x120b3c + _0x1cfc88), _0x13fd51[_0x452fd5(0x142)]());
      }
    }
    return _0x13fd51;
  },
  'setupTimingPattern': function setupTimingPattern() {
    var _0x28e8d9 = a0_0x509e70;
    for (var _0x54752c = 0x8; _0x54752c < this[_0x28e8d9(0x16b)] - 0x8; _0x54752c++) {
      if (this[_0x28e8d9(0x173)][_0x54752c][0x6] != null) continue;
      this[_0x28e8d9(0x173)][_0x54752c][0x6] = _0x54752c % 0x2 == 0x0;
    }
    for (var _0x9a4df1 = 0x8; _0x9a4df1 < this[_0x28e8d9(0x16b)] - 0x8; _0x9a4df1++) {
      if (this[_0x28e8d9(0x173)][0x6][_0x9a4df1] != null) continue;
      this[_0x28e8d9(0x173)][0x6][_0x9a4df1] = _0x9a4df1 % 0x2 == 0x0;
    }
  },
  'setupPositionAdjustPattern': function setupPositionAdjustPattern() {
    var _0x9d23c4 = a0_0x509e70,
      _0xcb89da = QRUtil[_0x9d23c4(0x148)](this[_0x9d23c4(0x137)]);
    for (var _0x11f886 = 0x0; _0x11f886 < _0xcb89da[_0x9d23c4(0x151)]; _0x11f886++) {
      for (var _0x10b004 = 0x0; _0x10b004 < _0xcb89da[_0x9d23c4(0x151)]; _0x10b004++) {
        var _0x5186b3 = _0xcb89da[_0x11f886],
          _0x390a45 = _0xcb89da[_0x10b004];
        if (this['modules'][_0x5186b3][_0x390a45] != null) continue;
        for (var _0x161875 = -0x2; _0x161875 <= 0x2; _0x161875++) {
          for (var _0x282f4b = -0x2; _0x282f4b <= 0x2; _0x282f4b++) {
            _0x161875 == -0x2 || _0x161875 == 0x2 || _0x282f4b == -0x2 || _0x282f4b == 0x2 || _0x161875 == 0x0 && _0x282f4b == 0x0 ? this[_0x9d23c4(0x173)][_0x5186b3 + _0x161875][_0x390a45 + _0x282f4b] = !![] : this[_0x9d23c4(0x173)][_0x5186b3 + _0x161875][_0x390a45 + _0x282f4b] = ![];
          }
        }
      }
    }
  },
  'setupTypeNumber': function setupTypeNumber(_0x3573d7) {
    var _0x91aaef = a0_0x509e70,
      _0x120747 = QRUtil[_0x91aaef(0x176)](this[_0x91aaef(0x137)]);
    for (var _0x529d01 = 0x0; _0x529d01 < 0x12; _0x529d01++) {
      var _0x4c6f78 = !_0x3573d7 && (_0x120747 >> _0x529d01 & 0x1) == 0x1;
      this[_0x91aaef(0x173)][Math[_0x91aaef(0x154)](_0x529d01 / 0x3)][_0x529d01 % 0x3 + this[_0x91aaef(0x16b)] - 0x8 - 0x3] = _0x4c6f78;
    }
    for (var _0x529d01 = 0x0; _0x529d01 < 0x12; _0x529d01++) {
      var _0x4c6f78 = !_0x3573d7 && (_0x120747 >> _0x529d01 & 0x1) == 0x1;
      this[_0x91aaef(0x173)][_0x529d01 % 0x3 + this[_0x91aaef(0x16b)] - 0x8 - 0x3][Math[_0x91aaef(0x154)](_0x529d01 / 0x3)] = _0x4c6f78;
    }
  },
  'setupTypeInfo': function setupTypeInfo(_0x31abb1, _0x161abe) {
    var _0x1c51e2 = a0_0x509e70,
      _0x110d93 = this[_0x1c51e2(0x162)] << 0x3 | _0x161abe,
      _0x7ac91b = QRUtil[_0x1c51e2(0x171)](_0x110d93);
    for (var _0x9e23a0 = 0x0; _0x9e23a0 < 0xf; _0x9e23a0++) {
      var _0x93ceb1 = !_0x31abb1 && (_0x7ac91b >> _0x9e23a0 & 0x1) == 0x1;
      if (_0x9e23a0 < 0x6) this[_0x1c51e2(0x173)][_0x9e23a0][0x8] = _0x93ceb1;else _0x9e23a0 < 0x8 ? this[_0x1c51e2(0x173)][_0x9e23a0 + 0x1][0x8] = _0x93ceb1 : this['modules'][this['moduleCount'] - 0xf + _0x9e23a0][0x8] = _0x93ceb1;
    }
    for (var _0x9e23a0 = 0x0; _0x9e23a0 < 0xf; _0x9e23a0++) {
      var _0x93ceb1 = !_0x31abb1 && (_0x7ac91b >> _0x9e23a0 & 0x1) == 0x1;
      if (_0x9e23a0 < 0x8) this[_0x1c51e2(0x173)][0x8][this['moduleCount'] - _0x9e23a0 - 0x1] = _0x93ceb1;else _0x9e23a0 < 0x9 ? this[_0x1c51e2(0x173)][0x8][0xf - _0x9e23a0 - 0x1 + 0x1] = _0x93ceb1 : this['modules'][0x8][0xf - _0x9e23a0 - 0x1] = _0x93ceb1;
    }
    this[_0x1c51e2(0x173)][this['moduleCount'] - 0x8][0x8] = !_0x31abb1;
  },
  'mapData': function mapData(_0x122d58, _0x5820eb) {
    var _0x5a8a13 = a0_0x509e70,
      _0xc5cf1f = -0x1,
      _0x2424f0 = this['moduleCount'] - 0x1,
      _0x537987 = 0x7,
      _0x2369be = 0x0;
    for (var _0x225292 = this['moduleCount'] - 0x1; _0x225292 > 0x0; _0x225292 -= 0x2) {
      if (_0x225292 == 0x6) _0x225292--;
      while (!![]) {
        for (var _0x548467 = 0x0; _0x548467 < 0x2; _0x548467++) {
          if (this[_0x5a8a13(0x173)][_0x2424f0][_0x225292 - _0x548467] == null) {
            var _0x1eded7 = ![];
            _0x2369be < _0x122d58[_0x5a8a13(0x151)] && (_0x1eded7 = (_0x122d58[_0x2369be] >>> _0x537987 & 0x1) == 0x1);
            var _0x2420dd = QRUtil['getMask'](_0x5820eb, _0x2424f0, _0x225292 - _0x548467);
            _0x2420dd && (_0x1eded7 = !_0x1eded7), this['modules'][_0x2424f0][_0x225292 - _0x548467] = _0x1eded7, _0x537987--, _0x537987 == -0x1 && (_0x2369be++, _0x537987 = 0x7);
          }
        }
        _0x2424f0 += _0xc5cf1f;
        if (_0x2424f0 < 0x0 || this['moduleCount'] <= _0x2424f0) {
          _0x2424f0 -= _0xc5cf1f, _0xc5cf1f = -_0xc5cf1f;
          break;
        }
      }
    }
  }
}, QRCodeModel[a0_0x509e70(0x178)] = 0xec, QRCodeModel['PAD1'] = 0x11, QRCodeModel[a0_0x509e70(0x14b)] = function (_0x232d13, _0x214055, _0x31168f) {
  var _0x484783 = a0_0x509e70,
    _0x5698d4 = QRRSBlock['getRSBlocks'](_0x232d13, _0x214055),
    _0x41add5 = new QRBitBuffer();
  for (var _0x4cbd02 = 0x0; _0x4cbd02 < _0x31168f[_0x484783(0x151)]; _0x4cbd02++) {
    var _0x4eb0ca = _0x31168f[_0x4cbd02];
    _0x41add5[_0x484783(0x13b)](_0x4eb0ca[_0x484783(0x18b)], 0x4), _0x41add5[_0x484783(0x13b)](_0x4eb0ca['getLength'](), QRUtil['getLengthInBits'](_0x4eb0ca[_0x484783(0x18b)], _0x232d13)), _0x4eb0ca[_0x484783(0x188)](_0x41add5);
  }
  var _0x1461ce = 0x0;
  for (var _0x4cbd02 = 0x0; _0x4cbd02 < _0x5698d4['length']; _0x4cbd02++) {
    _0x1461ce += _0x5698d4[_0x4cbd02][_0x484783(0x18e)];
  }
  if (_0x41add5[_0x484783(0x16c)]() > _0x1461ce * 0x8) throw new Error(_0x484783(0x13d) + _0x41add5['getLengthInBits']() + '>' + _0x1461ce * 0x8 + ')');
  _0x41add5['getLengthInBits']() + 0x4 <= _0x1461ce * 0x8 && _0x41add5[_0x484783(0x13b)](0x0, 0x4);
  while (_0x41add5[_0x484783(0x16c)]() % 0x8 != 0x0) {
    _0x41add5[_0x484783(0x145)](![]);
  }
  while (!![]) {
    if (_0x41add5[_0x484783(0x16c)]() >= _0x1461ce * 0x8) break;
    _0x41add5[_0x484783(0x13b)](QRCodeModel[_0x484783(0x178)], 0x8);
    if (_0x41add5[_0x484783(0x16c)]() >= _0x1461ce * 0x8) break;
    _0x41add5['put'](QRCodeModel[_0x484783(0x194)], 0x8);
  }
  return QRCodeModel[_0x484783(0x157)](_0x41add5, _0x5698d4);
}, QRCodeModel[a0_0x509e70(0x157)] = function (_0x890f, _0x5bf577) {
  var _0x451231 = a0_0x509e70,
    _0x4ccdb2 = 0x0,
    _0x5b2265 = 0x0,
    _0x29de07 = 0x0,
    _0x1f0a6b = new Array(_0x5bf577[_0x451231(0x151)]),
    _0x3f9f01 = new Array(_0x5bf577['length']);
  for (var _0x51a696 = 0x0; _0x51a696 < _0x5bf577[_0x451231(0x151)]; _0x51a696++) {
    var _0x1bbb26 = _0x5bf577[_0x51a696][_0x451231(0x18e)],
      _0x40f999 = _0x5bf577[_0x51a696]['totalCount'] - _0x1bbb26;
    _0x5b2265 = Math['max'](_0x5b2265, _0x1bbb26), _0x29de07 = Math['max'](_0x29de07, _0x40f999), _0x1f0a6b[_0x51a696] = new Array(_0x1bbb26);
    for (var _0x51d325 = 0x0; _0x51d325 < _0x1f0a6b[_0x51a696][_0x451231(0x151)]; _0x51d325++) {
      _0x1f0a6b[_0x51a696][_0x51d325] = 0xff & _0x890f[_0x451231(0x172)][_0x51d325 + _0x4ccdb2];
    }
    _0x4ccdb2 += _0x1bbb26;
    var _0x552674 = QRUtil['getErrorCorrectPolynomial'](_0x40f999),
      _0x1b35e3 = new QRPolynomial(_0x1f0a6b[_0x51a696], _0x552674['getLength']() - 0x1),
      _0x432d90 = _0x1b35e3[_0x451231(0x16a)](_0x552674);
    _0x3f9f01[_0x51a696] = new Array(_0x552674[_0x451231(0x14f)]() - 0x1);
    for (var _0x51d325 = 0x0; _0x51d325 < _0x3f9f01[_0x51a696][_0x451231(0x151)]; _0x51d325++) {
      var _0x23803e = _0x51d325 + _0x432d90['getLength']() - _0x3f9f01[_0x51a696][_0x451231(0x151)];
      _0x3f9f01[_0x51a696][_0x51d325] = _0x23803e >= 0x0 ? _0x432d90[_0x451231(0x13f)](_0x23803e) : 0x0;
    }
  }
  var _0x2d6127 = 0x0;
  for (var _0x51d325 = 0x0; _0x51d325 < _0x5bf577[_0x451231(0x151)]; _0x51d325++) {
    _0x2d6127 += _0x5bf577[_0x51d325][_0x451231(0x164)];
  }
  var _0x16670c = new Array(_0x2d6127),
    _0xb1ef82 = 0x0;
  for (var _0x51d325 = 0x0; _0x51d325 < _0x5b2265; _0x51d325++) {
    for (var _0x51a696 = 0x0; _0x51a696 < _0x5bf577[_0x451231(0x151)]; _0x51a696++) {
      _0x51d325 < _0x1f0a6b[_0x51a696]['length'] && (_0x16670c[_0xb1ef82++] = _0x1f0a6b[_0x51a696][_0x51d325]);
    }
  }
  for (var _0x51d325 = 0x0; _0x51d325 < _0x29de07; _0x51d325++) {
    for (var _0x51a696 = 0x0; _0x51a696 < _0x5bf577[_0x451231(0x151)]; _0x51a696++) {
      _0x51d325 < _0x3f9f01[_0x51a696][_0x451231(0x151)] && (_0x16670c[_0xb1ef82++] = _0x3f9f01[_0x51a696][_0x51d325]);
    }
  }
  return _0x16670c;
};
var QRMode = {
    'MODE_NUMBER': 0x1 << 0x0,
    'MODE_ALPHA_NUM': 0x1 << 0x1,
    'MODE_8BIT_BYTE': 0x1 << 0x2,
    'MODE_KANJI': 0x1 << 0x3
  },
  QRErrorCorrectLevel = {
    'L': 0x1,
    'M': 0x0,
    'Q': 0x3,
    'H': 0x2
  },
  QRMaskPattern = {
    'PATTERN000': 0x0,
    'PATTERN001': 0x1,
    'PATTERN010': 0x2,
    'PATTERN011': 0x3,
    'PATTERN100': 0x4,
    'PATTERN101': 0x5,
    'PATTERN110': 0x6,
    'PATTERN111': 0x7
  },
  QRUtil = {
    'PATTERN_POSITION_TABLE': [[], [0x6, 0x12], [0x6, 0x16], [0x6, 0x1a], [0x6, 0x1e], [0x6, 0x22], [0x6, 0x16, 0x26], [0x6, 0x18, 0x2a], [0x6, 0x1a, 0x2e], [0x6, 0x1c, 0x32], [0x6, 0x1e, 0x36], [0x6, 0x20, 0x3a], [0x6, 0x22, 0x3e], [0x6, 0x1a, 0x2e, 0x42], [0x6, 0x1a, 0x30, 0x46], [0x6, 0x1a, 0x32, 0x4a], [0x6, 0x1e, 0x36, 0x4e], [0x6, 0x1e, 0x38, 0x52], [0x6, 0x1e, 0x3a, 0x56], [0x6, 0x22, 0x3e, 0x5a], [0x6, 0x1c, 0x32, 0x48, 0x5e], [0x6, 0x1a, 0x32, 0x4a, 0x62], [0x6, 0x1e, 0x36, 0x4e, 0x66], [0x6, 0x1c, 0x36, 0x50, 0x6a], [0x6, 0x20, 0x3a, 0x54, 0x6e], [0x6, 0x1e, 0x3a, 0x56, 0x72], [0x6, 0x22, 0x3e, 0x5a, 0x76], [0x6, 0x1a, 0x32, 0x4a, 0x62, 0x7a], [0x6, 0x1e, 0x36, 0x4e, 0x66, 0x7e], [0x6, 0x1a, 0x34, 0x4e, 0x68, 0x82], [0x6, 0x1e, 0x38, 0x52, 0x6c, 0x86], [0x6, 0x22, 0x3c, 0x56, 0x70, 0x8a], [0x6, 0x1e, 0x3a, 0x56, 0x72, 0x8e], [0x6, 0x22, 0x3e, 0x5a, 0x76, 0x92], [0x6, 0x1e, 0x36, 0x4e, 0x66, 0x7e, 0x96], [0x6, 0x18, 0x32, 0x4c, 0x66, 0x80, 0x9a], [0x6, 0x1c, 0x36, 0x50, 0x6a, 0x84, 0x9e], [0x6, 0x20, 0x3a, 0x54, 0x6e, 0x88, 0xa2], [0x6, 0x1a, 0x36, 0x52, 0x6e, 0x8a, 0xa6], [0x6, 0x1e, 0x3a, 0x56, 0x72, 0x8e, 0xaa]],
    'G15': 0x1 << 0xa | 0x1 << 0x8 | 0x1 << 0x5 | 0x1 << 0x4 | 0x1 << 0x2 | 0x1 << 0x1 | 0x1 << 0x0,
    'G18': 0x1 << 0xc | 0x1 << 0xb | 0x1 << 0xa | 0x1 << 0x9 | 0x1 << 0x8 | 0x1 << 0x5 | 0x1 << 0x2 | 0x1 << 0x0,
    'G15_MASK': 0x1 << 0xe | 0x1 << 0xc | 0x1 << 0xa | 0x1 << 0x4 | 0x1 << 0x1,
    'getBCHTypeInfo': function getBCHTypeInfo(_0x1db910) {
      var _0x4a3a35 = a0_0x509e70,
        _0x498647 = _0x1db910 << 0xa;
      while (QRUtil[_0x4a3a35(0x152)](_0x498647) - QRUtil[_0x4a3a35(0x152)](QRUtil[_0x4a3a35(0x187)]) >= 0x0) {
        _0x498647 ^= QRUtil[_0x4a3a35(0x187)] << QRUtil['getBCHDigit'](_0x498647) - QRUtil['getBCHDigit'](QRUtil['G15']);
      }
      return (_0x1db910 << 0xa | _0x498647) ^ QRUtil[_0x4a3a35(0x155)];
    },
    'getBCHTypeNumber': function getBCHTypeNumber(_0x3a7f03) {
      var _0x30b2ba = a0_0x509e70,
        _0x104ef8 = _0x3a7f03 << 0xc;
      while (QRUtil['getBCHDigit'](_0x104ef8) - QRUtil[_0x30b2ba(0x152)](QRUtil[_0x30b2ba(0x140)]) >= 0x0) {
        _0x104ef8 ^= QRUtil['G18'] << QRUtil[_0x30b2ba(0x152)](_0x104ef8) - QRUtil['getBCHDigit'](QRUtil[_0x30b2ba(0x140)]);
      }
      return _0x3a7f03 << 0xc | _0x104ef8;
    },
    'getBCHDigit': function getBCHDigit(_0x240f41) {
      var _0x521e8e = 0x0;
      while (_0x240f41 != 0x0) {
        _0x521e8e++, _0x240f41 >>>= 0x1;
      }
      return _0x521e8e;
    },
    'getPatternPosition': function getPatternPosition(_0x4906c1) {
      var _0x26ab93 = a0_0x509e70;
      return QRUtil[_0x26ab93(0x15d)][_0x4906c1 - 0x1];
    },
    'getMask': function getMask(_0x13b0a1, _0x541111, _0x2c3281) {
      var _0x52bebc = a0_0x509e70;
      switch (_0x13b0a1) {
        case QRMaskPattern[_0x52bebc(0x165)]:
          return (_0x541111 + _0x2c3281) % 0x2 == 0x0;
        case QRMaskPattern[_0x52bebc(0x17a)]:
          return _0x541111 % 0x2 == 0x0;
        case QRMaskPattern[_0x52bebc(0x144)]:
          return _0x2c3281 % 0x3 == 0x0;
        case QRMaskPattern[_0x52bebc(0x14e)]:
          return (_0x541111 + _0x2c3281) % 0x3 == 0x0;
        case QRMaskPattern[_0x52bebc(0x146)]:
          return (Math[_0x52bebc(0x154)](_0x541111 / 0x2) + Math['floor'](_0x2c3281 / 0x3)) % 0x2 == 0x0;
        case QRMaskPattern[_0x52bebc(0x177)]:
          return _0x541111 * _0x2c3281 % 0x2 + _0x541111 * _0x2c3281 % 0x3 == 0x0;
        case QRMaskPattern[_0x52bebc(0x15a)]:
          return (_0x541111 * _0x2c3281 % 0x2 + _0x541111 * _0x2c3281 % 0x3) % 0x2 == 0x0;
        case QRMaskPattern[_0x52bebc(0x149)]:
          return (_0x541111 * _0x2c3281 % 0x3 + (_0x541111 + _0x2c3281) % 0x2) % 0x2 == 0x0;
        default:
          throw new Error(_0x52bebc(0x175) + _0x13b0a1);
      }
    },
    'getErrorCorrectPolynomial': function getErrorCorrectPolynomial(_0x1f1f65) {
      var _0x5005dd = a0_0x509e70,
        _0x44324b = new QRPolynomial([0x1], 0x0);
      for (var _0x34cf11 = 0x0; _0x34cf11 < _0x1f1f65; _0x34cf11++) {
        _0x44324b = _0x44324b[_0x5005dd(0x191)](new QRPolynomial([0x1, QRMath[_0x5005dd(0x159)](_0x34cf11)], 0x0));
      }
      return _0x44324b;
    },
    'getLengthInBits': function getLengthInBits(_0xd6bc67, _0x442932) {
      var _0x4af454 = a0_0x509e70;
      if (0x1 <= _0x442932 && _0x442932 < 0xa) switch (_0xd6bc67) {
        case QRMode['MODE_NUMBER']:
          return 0xa;
        case QRMode[_0x4af454(0x14c)]:
          return 0x9;
        case QRMode[_0x4af454(0x184)]:
          return 0x8;
        case QRMode[_0x4af454(0x174)]:
          return 0x8;
        default:
          throw new Error(_0x4af454(0x16e) + _0xd6bc67);
      } else {
        if (_0x442932 < 0x1b) switch (_0xd6bc67) {
          case QRMode[_0x4af454(0x169)]:
            return 0xc;
          case QRMode['MODE_ALPHA_NUM']:
            return 0xb;
          case QRMode[_0x4af454(0x184)]:
            return 0x10;
          case QRMode['MODE_KANJI']:
            return 0xa;
          default:
            throw new Error('mode:' + _0xd6bc67);
        } else {
          if (_0x442932 < 0x29) switch (_0xd6bc67) {
            case QRMode['MODE_NUMBER']:
              return 0xe;
            case QRMode['MODE_ALPHA_NUM']:
              return 0xd;
            case QRMode['MODE_8BIT_BYTE']:
              return 0x10;
            case QRMode[_0x4af454(0x174)]:
              return 0xc;
            default:
              throw new Error('mode:' + _0xd6bc67);
          } else throw new Error(_0x4af454(0x18a) + _0x442932);
        }
      }
    },
    'getLostPoint': function getLostPoint(_0x440169) {
      var _0xa781b = a0_0x509e70,
        _0x35b11f = _0x440169['getModuleCount'](),
        _0x420438 = 0x0;
      for (var _0x5735cb = 0x0; _0x5735cb < _0x35b11f; _0x5735cb++) {
        for (var _0x3b4254 = 0x0; _0x3b4254 < _0x35b11f; _0x3b4254++) {
          var _0x52c91c = 0x0,
            _0x5b7b70 = _0x440169['isDark'](_0x5735cb, _0x3b4254);
          for (var _0x3f6502 = -0x1; _0x3f6502 <= 0x1; _0x3f6502++) {
            if (_0x5735cb + _0x3f6502 < 0x0 || _0x35b11f <= _0x5735cb + _0x3f6502) continue;
            for (var _0x59f4c2 = -0x1; _0x59f4c2 <= 0x1; _0x59f4c2++) {
              if (_0x3b4254 + _0x59f4c2 < 0x0 || _0x35b11f <= _0x3b4254 + _0x59f4c2) continue;
              if (_0x3f6502 == 0x0 && _0x59f4c2 == 0x0) continue;
              _0x5b7b70 == _0x440169[_0xa781b(0x196)](_0x5735cb + _0x3f6502, _0x3b4254 + _0x59f4c2) && _0x52c91c++;
            }
          }
          _0x52c91c > 0x5 && (_0x420438 += 0x3 + _0x52c91c - 0x5);
        }
      }
      for (var _0x5735cb = 0x0; _0x5735cb < _0x35b11f - 0x1; _0x5735cb++) {
        for (var _0x3b4254 = 0x0; _0x3b4254 < _0x35b11f - 0x1; _0x3b4254++) {
          var _0x19ed58 = 0x0;
          if (_0x440169['isDark'](_0x5735cb, _0x3b4254)) _0x19ed58++;
          if (_0x440169['isDark'](_0x5735cb + 0x1, _0x3b4254)) _0x19ed58++;
          if (_0x440169['isDark'](_0x5735cb, _0x3b4254 + 0x1)) _0x19ed58++;
          if (_0x440169[_0xa781b(0x196)](_0x5735cb + 0x1, _0x3b4254 + 0x1)) _0x19ed58++;
          (_0x19ed58 == 0x0 || _0x19ed58 == 0x4) && (_0x420438 += 0x3);
        }
      }
      for (var _0x5735cb = 0x0; _0x5735cb < _0x35b11f; _0x5735cb++) {
        for (var _0x3b4254 = 0x0; _0x3b4254 < _0x35b11f - 0x6; _0x3b4254++) {
          _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254) && !_0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254 + 0x1) && _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254 + 0x2) && _0x440169['isDark'](_0x5735cb, _0x3b4254 + 0x3) && _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254 + 0x4) && !_0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254 + 0x5) && _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254 + 0x6) && (_0x420438 += 0x28);
        }
      }
      for (var _0x3b4254 = 0x0; _0x3b4254 < _0x35b11f; _0x3b4254++) {
        for (var _0x5735cb = 0x0; _0x5735cb < _0x35b11f - 0x6; _0x5735cb++) {
          _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254) && !_0x440169[_0xa781b(0x196)](_0x5735cb + 0x1, _0x3b4254) && _0x440169['isDark'](_0x5735cb + 0x2, _0x3b4254) && _0x440169[_0xa781b(0x196)](_0x5735cb + 0x3, _0x3b4254) && _0x440169['isDark'](_0x5735cb + 0x4, _0x3b4254) && !_0x440169[_0xa781b(0x196)](_0x5735cb + 0x5, _0x3b4254) && _0x440169[_0xa781b(0x196)](_0x5735cb + 0x6, _0x3b4254) && (_0x420438 += 0x28);
        }
      }
      var _0x1921e4 = 0x0;
      for (var _0x3b4254 = 0x0; _0x3b4254 < _0x35b11f; _0x3b4254++) {
        for (var _0x5735cb = 0x0; _0x5735cb < _0x35b11f; _0x5735cb++) {
          _0x440169[_0xa781b(0x196)](_0x5735cb, _0x3b4254) && _0x1921e4++;
        }
      }
      var _0x654bb2 = Math[_0xa781b(0x199)](0x64 * _0x1921e4 / _0x35b11f / _0x35b11f - 0x32) / 0x5;
      return _0x420438 += _0x654bb2 * 0xa, _0x420438;
    }
  },
  QRMath = {
    'glog': function glog(_0x30163b) {
      var _0x41e310 = a0_0x509e70;
      if (_0x30163b < 0x1) throw new Error(_0x41e310(0x17b) + _0x30163b + ')');
      return QRMath[_0x41e310(0x138)][_0x30163b];
    },
    'gexp': function gexp(_0x45c131) {
      var _0xa4d782 = a0_0x509e70;
      while (_0x45c131 < 0x0) {
        _0x45c131 += 0xff;
      }
      while (_0x45c131 >= 0x100) {
        _0x45c131 -= 0xff;
      }
      return QRMath[_0xa4d782(0x180)][_0x45c131];
    },
    'EXP_TABLE': new Array(0x100),
    'LOG_TABLE': new Array(0x100)
  };
for (var i = 0x0; i < 0x8; i++) {
  QRMath[a0_0x509e70(0x180)][i] = 0x1 << i;
}
for (var i = 0x8; i < 0x100; i++) {
  QRMath['EXP_TABLE'][i] = QRMath['EXP_TABLE'][i - 0x4] ^ QRMath[a0_0x509e70(0x180)][i - 0x5] ^ QRMath[a0_0x509e70(0x180)][i - 0x6] ^ QRMath[a0_0x509e70(0x180)][i - 0x8];
}
for (var i = 0x0; i < 0xff; i++) {
  QRMath['LOG_TABLE'][QRMath[a0_0x509e70(0x180)][i]] = i;
}
function QRPolynomial(_0x460679, _0x13b5e0) {
  var _0x181b93 = a0_0x509e70;
  if (_0x460679['length'] == undefined) throw new Error(_0x460679[_0x181b93(0x151)] + '/' + _0x13b5e0);
  var _0x2f1aff = 0x0;
  while (_0x2f1aff < _0x460679[_0x181b93(0x151)] && _0x460679[_0x2f1aff] == 0x0) {
    _0x2f1aff++;
  }
  this['num'] = new Array(_0x460679[_0x181b93(0x151)] - _0x2f1aff + _0x13b5e0);
  for (var _0x54d857 = 0x0; _0x54d857 < _0x460679[_0x181b93(0x151)] - _0x2f1aff; _0x54d857++) {
    this[_0x181b93(0x163)][_0x54d857] = _0x460679[_0x54d857 + _0x2f1aff];
  }
}
QRPolynomial['prototype'] = {
  'get': function get(_0x583e14) {
    var _0x4b9710 = a0_0x509e70;
    return this[_0x4b9710(0x163)][_0x583e14];
  },
  'getLength': function getLength() {
    var _0x4e40f9 = a0_0x509e70;
    return this['num'][_0x4e40f9(0x151)];
  },
  'multiply': function multiply(_0xa63b06) {
    var _0x5431cb = a0_0x509e70,
      _0x3c5648 = new Array(this['getLength']() + _0xa63b06[_0x5431cb(0x14f)]() - 0x1);
    for (var _0x140389 = 0x0; _0x140389 < this['getLength'](); _0x140389++) {
      for (var _0x579e14 = 0x0; _0x579e14 < _0xa63b06['getLength'](); _0x579e14++) {
        _0x3c5648[_0x140389 + _0x579e14] ^= QRMath[_0x5431cb(0x159)](QRMath[_0x5431cb(0x190)](this[_0x5431cb(0x13f)](_0x140389)) + QRMath[_0x5431cb(0x190)](_0xa63b06[_0x5431cb(0x13f)](_0x579e14)));
      }
    }
    return new QRPolynomial(_0x3c5648, 0x0);
  },
  'mod': function mod(_0x22194a) {
    var _0x1b7081 = a0_0x509e70;
    if (this['getLength']() - _0x22194a[_0x1b7081(0x14f)]() < 0x0) return this;
    var _0x27befb = QRMath[_0x1b7081(0x190)](this[_0x1b7081(0x13f)](0x0)) - QRMath[_0x1b7081(0x190)](_0x22194a[_0x1b7081(0x13f)](0x0)),
      _0x41b5e3 = new Array(this[_0x1b7081(0x14f)]());
    for (var _0x4a6ff1 = 0x0; _0x4a6ff1 < this[_0x1b7081(0x14f)](); _0x4a6ff1++) {
      _0x41b5e3[_0x4a6ff1] = this['get'](_0x4a6ff1);
    }
    for (var _0x4a6ff1 = 0x0; _0x4a6ff1 < _0x22194a[_0x1b7081(0x14f)](); _0x4a6ff1++) {
      _0x41b5e3[_0x4a6ff1] ^= QRMath[_0x1b7081(0x159)](QRMath[_0x1b7081(0x190)](_0x22194a[_0x1b7081(0x13f)](_0x4a6ff1)) + _0x27befb);
    }
    return new QRPolynomial(_0x41b5e3, 0x0)[_0x1b7081(0x16a)](_0x22194a);
  }
};
function QRRSBlock(_0x3c850c, _0x3c3487) {
  var _0x41d337 = a0_0x509e70;
  this['totalCount'] = _0x3c850c, this[_0x41d337(0x18e)] = _0x3c3487;
}
QRRSBlock['RS_BLOCK_TABLE'] = [[0x1, 0x1a, 0x13], [0x1, 0x1a, 0x10], [0x1, 0x1a, 0xd], [0x1, 0x1a, 0x9], [0x1, 0x2c, 0x22], [0x1, 0x2c, 0x1c], [0x1, 0x2c, 0x16], [0x1, 0x2c, 0x10], [0x1, 0x46, 0x37], [0x1, 0x46, 0x2c], [0x2, 0x23, 0x11], [0x2, 0x23, 0xd], [0x1, 0x64, 0x50], [0x2, 0x32, 0x20], [0x2, 0x32, 0x18], [0x4, 0x19, 0x9], [0x1, 0x86, 0x6c], [0x2, 0x43, 0x2b], [0x2, 0x21, 0xf, 0x2, 0x22, 0x10], [0x2, 0x21, 0xb, 0x2, 0x22, 0xc], [0x2, 0x56, 0x44], [0x4, 0x2b, 0x1b], [0x4, 0x2b, 0x13], [0x4, 0x2b, 0xf], [0x2, 0x62, 0x4e], [0x4, 0x31, 0x1f], [0x2, 0x20, 0xe, 0x4, 0x21, 0xf], [0x4, 0x27, 0xd, 0x1, 0x28, 0xe], [0x2, 0x79, 0x61], [0x2, 0x3c, 0x26, 0x2, 0x3d, 0x27], [0x4, 0x28, 0x12, 0x2, 0x29, 0x13], [0x4, 0x28, 0xe, 0x2, 0x29, 0xf], [0x2, 0x92, 0x74], [0x3, 0x3a, 0x24, 0x2, 0x3b, 0x25], [0x4, 0x24, 0x10, 0x4, 0x25, 0x11], [0x4, 0x24, 0xc, 0x4, 0x25, 0xd], [0x2, 0x56, 0x44, 0x2, 0x57, 0x45], [0x4, 0x45, 0x2b, 0x1, 0x46, 0x2c], [0x6, 0x2b, 0x13, 0x2, 0x2c, 0x14], [0x6, 0x2b, 0xf, 0x2, 0x2c, 0x10], [0x4, 0x65, 0x51], [0x1, 0x50, 0x32, 0x4, 0x51, 0x33], [0x4, 0x32, 0x16, 0x4, 0x33, 0x17], [0x3, 0x24, 0xc, 0x8, 0x25, 0xd], [0x2, 0x74, 0x5c, 0x2, 0x75, 0x5d], [0x6, 0x3a, 0x24, 0x2, 0x3b, 0x25], [0x4, 0x2e, 0x14, 0x6, 0x2f, 0x15], [0x7, 0x2a, 0xe, 0x4, 0x2b, 0xf], [0x4, 0x85, 0x6b], [0x8, 0x3b, 0x25, 0x1, 0x3c, 0x26], [0x8, 0x2c, 0x14, 0x4, 0x2d, 0x15], [0xc, 0x21, 0xb, 0x4, 0x22, 0xc], [0x3, 0x91, 0x73, 0x1, 0x92, 0x74], [0x4, 0x40, 0x28, 0x5, 0x41, 0x29], [0xb, 0x24, 0x10, 0x5, 0x25, 0x11], [0xb, 0x24, 0xc, 0x5, 0x25, 0xd], [0x5, 0x6d, 0x57, 0x1, 0x6e, 0x58], [0x5, 0x41, 0x29, 0x5, 0x42, 0x2a], [0x5, 0x36, 0x18, 0x7, 0x37, 0x19], [0xb, 0x24, 0xc], [0x5, 0x7a, 0x62, 0x1, 0x7b, 0x63], [0x7, 0x49, 0x2d, 0x3, 0x4a, 0x2e], [0xf, 0x2b, 0x13, 0x2, 0x2c, 0x14], [0x3, 0x2d, 0xf, 0xd, 0x2e, 0x10], [0x1, 0x87, 0x6b, 0x5, 0x88, 0x6c], [0xa, 0x4a, 0x2e, 0x1, 0x4b, 0x2f], [0x1, 0x32, 0x16, 0xf, 0x33, 0x17], [0x2, 0x2a, 0xe, 0x11, 0x2b, 0xf], [0x5, 0x96, 0x78, 0x1, 0x97, 0x79], [0x9, 0x45, 0x2b, 0x4, 0x46, 0x2c], [0x11, 0x32, 0x16, 0x1, 0x33, 0x17], [0x2, 0x2a, 0xe, 0x13, 0x2b, 0xf], [0x3, 0x8d, 0x71, 0x4, 0x8e, 0x72], [0x3, 0x46, 0x2c, 0xb, 0x47, 0x2d], [0x11, 0x2f, 0x15, 0x4, 0x30, 0x16], [0x9, 0x27, 0xd, 0x10, 0x28, 0xe], [0x3, 0x87, 0x6b, 0x5, 0x88, 0x6c], [0x3, 0x43, 0x29, 0xd, 0x44, 0x2a], [0xf, 0x36, 0x18, 0x5, 0x37, 0x19], [0xf, 0x2b, 0xf, 0xa, 0x2c, 0x10], [0x4, 0x90, 0x74, 0x4, 0x91, 0x75], [0x11, 0x44, 0x2a], [0x11, 0x32, 0x16, 0x6, 0x33, 0x17], [0x13, 0x2e, 0x10, 0x6, 0x2f, 0x11], [0x2, 0x8b, 0x6f, 0x7, 0x8c, 0x70], [0x11, 0x4a, 0x2e], [0x7, 0x36, 0x18, 0x10, 0x37, 0x19], [0x22, 0x25, 0xd], [0x4, 0x97, 0x79, 0x5, 0x98, 0x7a], [0x4, 0x4b, 0x2f, 0xe, 0x4c, 0x30], [0xb, 0x36, 0x18, 0xe, 0x37, 0x19], [0x10, 0x2d, 0xf, 0xe, 0x2e, 0x10], [0x6, 0x93, 0x75, 0x4, 0x94, 0x76], [0x6, 0x49, 0x2d, 0xe, 0x4a, 0x2e], [0xb, 0x36, 0x18, 0x10, 0x37, 0x19], [0x1e, 0x2e, 0x10, 0x2, 0x2f, 0x11], [0x8, 0x84, 0x6a, 0x4, 0x85, 0x6b], [0x8, 0x4b, 0x2f, 0xd, 0x4c, 0x30], [0x7, 0x36, 0x18, 0x16, 0x37, 0x19], [0x16, 0x2d, 0xf, 0xd, 0x2e, 0x10], [0xa, 0x8e, 0x72, 0x2, 0x8f, 0x73], [0x13, 0x4a, 0x2e, 0x4, 0x4b, 0x2f], [0x1c, 0x32, 0x16, 0x6, 0x33, 0x17], [0x21, 0x2e, 0x10, 0x4, 0x2f, 0x11], [0x8, 0x98, 0x7a, 0x4, 0x99, 0x7b], [0x16, 0x49, 0x2d, 0x3, 0x4a, 0x2e], [0x8, 0x35, 0x17, 0x1a, 0x36, 0x18], [0xc, 0x2d, 0xf, 0x1c, 0x2e, 0x10], [0x3, 0x93, 0x75, 0xa, 0x94, 0x76], [0x3, 0x49, 0x2d, 0x17, 0x4a, 0x2e], [0x4, 0x36, 0x18, 0x1f, 0x37, 0x19], [0xb, 0x2d, 0xf, 0x1f, 0x2e, 0x10], [0x7, 0x92, 0x74, 0x7, 0x93, 0x75], [0x15, 0x49, 0x2d, 0x7, 0x4a, 0x2e], [0x1, 0x35, 0x17, 0x25, 0x36, 0x18], [0x13, 0x2d, 0xf, 0x1a, 0x2e, 0x10], [0x5, 0x91, 0x73, 0xa, 0x92, 0x74], [0x13, 0x4b, 0x2f, 0xa, 0x4c, 0x30], [0xf, 0x36, 0x18, 0x19, 0x37, 0x19], [0x17, 0x2d, 0xf, 0x19, 0x2e, 0x10], [0xd, 0x91, 0x73, 0x3, 0x92, 0x74], [0x2, 0x4a, 0x2e, 0x1d, 0x4b, 0x2f], [0x2a, 0x36, 0x18, 0x1, 0x37, 0x19], [0x17, 0x2d, 0xf, 0x1c, 0x2e, 0x10], [0x11, 0x91, 0x73], [0xa, 0x4a, 0x2e, 0x17, 0x4b, 0x2f], [0xa, 0x36, 0x18, 0x23, 0x37, 0x19], [0x13, 0x2d, 0xf, 0x23, 0x2e, 0x10], [0x11, 0x91, 0x73, 0x1, 0x92, 0x74], [0xe, 0x4a, 0x2e, 0x15, 0x4b, 0x2f], [0x1d, 0x36, 0x18, 0x13, 0x37, 0x19], [0xb, 0x2d, 0xf, 0x2e, 0x2e, 0x10], [0xd, 0x91, 0x73, 0x6, 0x92, 0x74], [0xe, 0x4a, 0x2e, 0x17, 0x4b, 0x2f], [0x2c, 0x36, 0x18, 0x7, 0x37, 0x19], [0x3b, 0x2e, 0x10, 0x1, 0x2f, 0x11], [0xc, 0x97, 0x79, 0x7, 0x98, 0x7a], [0xc, 0x4b, 0x2f, 0x1a, 0x4c, 0x30], [0x27, 0x36, 0x18, 0xe, 0x37, 0x19], [0x16, 0x2d, 0xf, 0x29, 0x2e, 0x10], [0x6, 0x97, 0x79, 0xe, 0x98, 0x7a], [0x6, 0x4b, 0x2f, 0x22, 0x4c, 0x30], [0x2e, 0x36, 0x18, 0xa, 0x37, 0x19], [0x2, 0x2d, 0xf, 0x40, 0x2e, 0x10], [0x11, 0x98, 0x7a, 0x4, 0x99, 0x7b], [0x1d, 0x4a, 0x2e, 0xe, 0x4b, 0x2f], [0x31, 0x36, 0x18, 0xa, 0x37, 0x19], [0x18, 0x2d, 0xf, 0x2e, 0x2e, 0x10], [0x4, 0x98, 0x7a, 0x12, 0x99, 0x7b], [0xd, 0x4a, 0x2e, 0x20, 0x4b, 0x2f], [0x30, 0x36, 0x18, 0xe, 0x37, 0x19], [0x2a, 0x2d, 0xf, 0x20, 0x2e, 0x10], [0x14, 0x93, 0x75, 0x4, 0x94, 0x76], [0x28, 0x4b, 0x2f, 0x7, 0x4c, 0x30], [0x2b, 0x36, 0x18, 0x16, 0x37, 0x19], [0xa, 0x2d, 0xf, 0x43, 0x2e, 0x10], [0x13, 0x94, 0x76, 0x6, 0x95, 0x77], [0x12, 0x4b, 0x2f, 0x1f, 0x4c, 0x30], [0x22, 0x36, 0x18, 0x22, 0x37, 0x19], [0x14, 0x2d, 0xf, 0x3d, 0x2e, 0x10]], QRRSBlock[a0_0x509e70(0x147)] = function (_0xdd9a2c, _0x344435) {
  var _0x5e1b30 = a0_0x509e70,
    _0x3d18b1 = QRRSBlock[_0x5e1b30(0x156)](_0xdd9a2c, _0x344435);
  if (_0x3d18b1 == undefined) throw new Error(_0x5e1b30(0x197) + _0xdd9a2c + _0x5e1b30(0x17e) + _0x344435);
  var _0x2bc72d = _0x3d18b1['length'] / 0x3,
    _0x141128 = [];
  for (var _0x5bceba = 0x0; _0x5bceba < _0x2bc72d; _0x5bceba++) {
    var _0x52d47a = _0x3d18b1[_0x5bceba * 0x3 + 0x0],
      _0x18902a = _0x3d18b1[_0x5bceba * 0x3 + 0x1],
      _0x59adc = _0x3d18b1[_0x5bceba * 0x3 + 0x2];
    for (var _0x4eb51d = 0x0; _0x4eb51d < _0x52d47a; _0x4eb51d++) {
      _0x141128[_0x5e1b30(0x179)](new QRRSBlock(_0x18902a, _0x59adc));
    }
  }
  return _0x141128;
}, QRRSBlock['getRsBlockTable'] = function (_0x1d5d16, _0x37681e) {
  var _0x3b988d = a0_0x509e70;
  switch (_0x37681e) {
    case QRErrorCorrectLevel['L']:
      return QRRSBlock[_0x3b988d(0x193)][(_0x1d5d16 - 0x1) * 0x4 + 0x0];
    case QRErrorCorrectLevel['M']:
      return QRRSBlock[_0x3b988d(0x193)][(_0x1d5d16 - 0x1) * 0x4 + 0x1];
    case QRErrorCorrectLevel['Q']:
      return QRRSBlock[_0x3b988d(0x193)][(_0x1d5d16 - 0x1) * 0x4 + 0x2];
    case QRErrorCorrectLevel['H']:
      return QRRSBlock['RS_BLOCK_TABLE'][(_0x1d5d16 - 0x1) * 0x4 + 0x3];
    default:
      return undefined;
  }
};
function QRBitBuffer() {
  var _0x2e56e9 = a0_0x509e70;
  this['buffer'] = [], this[_0x2e56e9(0x151)] = 0x0;
}
QRBitBuffer[a0_0x509e70(0x167)] = {
  'get': function get(_0x5721e7) {
    var _0x431e8c = a0_0x509e70,
      _0x3091cc = Math[_0x431e8c(0x154)](_0x5721e7 / 0x8);
    return (this['buffer'][_0x3091cc] >>> 0x7 - _0x5721e7 % 0x8 & 0x1) == 0x1;
  },
  'put': function put(_0x1ad9fd, _0x3e26a4) {
    var _0x3a8e66 = a0_0x509e70;
    for (var _0x4f1dae = 0x0; _0x4f1dae < _0x3e26a4; _0x4f1dae++) {
      this[_0x3a8e66(0x145)]((_0x1ad9fd >>> _0x3e26a4 - _0x4f1dae - 0x1 & 0x1) == 0x1);
    }
  },
  'getLengthInBits': function getLengthInBits() {
    var _0x14cfa4 = a0_0x509e70;
    return this[_0x14cfa4(0x151)];
  },
  'putBit': function putBit(_0x1677b6) {
    var _0x2e117f = a0_0x509e70,
      _0x56c685 = Math[_0x2e117f(0x154)](this[_0x2e117f(0x151)] / 0x8);
    this[_0x2e117f(0x172)][_0x2e117f(0x151)] <= _0x56c685 && this[_0x2e117f(0x172)][_0x2e117f(0x179)](0x0), _0x1677b6 && (this[_0x2e117f(0x172)][_0x56c685] |= 0x80 >>> this[_0x2e117f(0x151)] % 0x8), this[_0x2e117f(0x151)]++;
  }
};
var QRCodeLimitLength = [[0x11, 0xe, 0xb, 0x7], [0x20, 0x1a, 0x14, 0xe], [0x35, 0x2a, 0x20, 0x18], [0x4e, 0x3e, 0x2e, 0x22], [0x6a, 0x54, 0x3c, 0x2c], [0x86, 0x6a, 0x4a, 0x3a], [0x9a, 0x7a, 0x56, 0x40], [0xc0, 0x98, 0x6c, 0x54], [0xe6, 0xb4, 0x82, 0x62], [0x10f, 0xd5, 0x97, 0x77], [0x141, 0xfb, 0xb1, 0x89], [0x16f, 0x11f, 0xcb, 0x9b], [0x1a9, 0x14b, 0xf1, 0xb1], [0x1ca, 0x16a, 0x102, 0xc2], [0x208, 0x19c, 0x124, 0xdc], [0x24a, 0x1c2, 0x142, 0xfa], [0x284, 0x1f8, 0x16c, 0x118], [0x2ce, 0x230, 0x18a, 0x136], [0x318, 0x270, 0x1ba, 0x152], [0x35a, 0x29a, 0x1e2, 0x17e], [0x3a1, 0x2c7, 0x1fd, 0x193], [0x3eb, 0x30b, 0x235, 0x1b7], [0x443, 0x359, 0x263, 0x1cd], [0x493, 0x38f, 0x295, 0x1ff], [0x4f9, 0x3e5, 0x2cb, 0x217], [0x557, 0x423, 0x2ef, 0x251], [0x5b9, 0x465, 0x325, 0x271], [0x5f8, 0x4a6, 0x364, 0x292], [0x65c, 0x4f0, 0x38c, 0x2ba], [0x6c4, 0x55a, 0x3d6, 0x2e6], [0x730, 0x5ac, 0x406, 0x316], [0x7a0, 0x602, 0x458, 0x34a], [0x814, 0x65c, 0x490, 0x382], [0x88c, 0x6ba, 0x4cc, 0x3be], [0x8ff, 0x711, 0x503, 0x3d7], [0x97f, 0x777, 0x547, 0x41b], [0xa03, 0x7c5, 0x58f, 0x445], [0xa8b, 0x833, 0x5db, 0x473], [0xaf9, 0x8a5, 0x62b, 0x4c3], [0xb89, 0x91b, 0x67f, 0x4f9]];
function _getTypeNumber(_0x18d8b0, _0x1bae79) {
  var _0x57b10a = a0_0x509e70,
    _0x525489 = 0x1,
    _0x384089 = _getUTF8Length(_0x18d8b0);
  for (var _0x463239 = 0x0, _0x3525e6 = QRCodeLimitLength[_0x57b10a(0x151)]; _0x463239 <= _0x3525e6; _0x463239++) {
    var _0x321e99 = 0x0;
    switch (_0x1bae79) {
      case QRErrorCorrectLevel['L']:
        _0x321e99 = QRCodeLimitLength[_0x463239][0x0];
        break;
      case QRErrorCorrectLevel['M']:
        _0x321e99 = QRCodeLimitLength[_0x463239][0x1];
        break;
      case QRErrorCorrectLevel['Q']:
        _0x321e99 = QRCodeLimitLength[_0x463239][0x2];
        break;
      case QRErrorCorrectLevel['H']:
        _0x321e99 = QRCodeLimitLength[_0x463239][0x3];
        break;
    }
    if (_0x384089 <= _0x321e99) break;else _0x525489++;
  }
  if (_0x525489 > QRCodeLimitLength[_0x57b10a(0x151)]) throw new Error('Too\x20long\x20data');
  return _0x525489;
}
function a0_0x475b(_0x2cd49a, _0x2095fb) {
  var _0x20e7c8 = a0_0x20e7();
  return a0_0x475b = function a0_0x475b(_0x475b3d, _0x388b83) {
    _0x475b3d = _0x475b3d - 0x137;
    var _0x3fab7e = _0x20e7c8[_0x475b3d];
    return _0x3fab7e;
  }, a0_0x475b(_0x2cd49a, _0x2095fb);
}
function _getUTF8Length(_0x49bae3) {
  var _0x513432 = a0_0x509e70,
    _0x5d6bbf = encodeURI(_0x49bae3)['toString']()[_0x513432(0x15c)](/\%[0-9a-fA-F]{2}/g, 'a');
  return _0x5d6bbf[_0x513432(0x151)] + (_0x5d6bbf[_0x513432(0x151)] != _0x49bae3 ? 0x3 : 0x0);
}
var api = {
  'draw': function draw(_0x22baca, _0x3c370c, _0x563937, _0x1414e3, _0x53fcd4, _0xd61892, _0xb11fd2) {
    var _0x2bdcd2 = a0_0x509e70;
    if (!_0x22baca) {
      console['warn'](_0x2bdcd2(0x15e));
      return;
    }
    if (!_0x3c370c) {
      console['warn'](_0x2bdcd2(0x182));
      return;
    }
    _0xb11fd2 = _0xb11fd2 ? _0xb11fd2 % 0x4 : QRErrorCorrectLevel['H'];
    var _0x58a6b6 = Math['min'](_0x53fcd4, _0xd61892);
    this[_0x2bdcd2(0x153)] = new QRCodeModel(_getTypeNumber(_0x22baca, _0xb11fd2), _0xb11fd2), this[_0x2bdcd2(0x153)][_0x2bdcd2(0x17d)](_0x22baca), this[_0x2bdcd2(0x153)]['make']();
    var _0xd0aaae = this[_0x2bdcd2(0x153)][_0x2bdcd2(0x13c)](),
      _0x29cdc3 = _0x58a6b6 / _0xd0aaae,
      _0x283710 = _0x29cdc3;
    _0x3c370c[_0x2bdcd2(0x166)](_0x2bdcd2(0x14d));
    for (var _0x3f829d = 0x0; _0x3f829d < _0xd0aaae; _0x3f829d++) {
      for (var _0x53feb1 = 0x0; _0x53feb1 < _0xd0aaae; _0x53feb1++) {
        var _0x58533e = this[_0x2bdcd2(0x153)][_0x2bdcd2(0x196)](_0x3f829d, _0x53feb1),
          _0x4230ec = _0x53feb1 * _0x29cdc3,
          _0x28ae88 = _0x3f829d * _0x283710;
        _0x58533e && _0x3c370c[_0x2bdcd2(0x16d)](_0x563937 + _0x4230ec, _0x1414e3 + _0x28ae88, _0x29cdc3, _0x283710);
      }
    }
  }
};
var _default = {
  'api': api
};
exports.default = _default;

/***/ }),

/***/ 185:
/*!***************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCBle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _JCDataUntil = _interopRequireDefault(__webpack_require__(/*! ./JCDataUntil */ 186));
var _JCAPIErrorCode = _interopRequireDefault(__webpack_require__(/*! ./JCAPIErrorCode */ 188));
var a0_0x4ebaee = a0_0x1c78;
(function (_0x2f54b6, _0x1a3ac0) {
  var _0x2da02d = a0_0x1c78,
    _0x55046b = _0x2f54b6();
  while (!![]) {
    try {
      var _0x4bb382 = -parseInt(_0x2da02d(0x1a9)) / 0x1 + -parseInt(_0x2da02d(0x16e)) / 0x2 * (parseInt(_0x2da02d(0x169)) / 0x3) + -parseInt(_0x2da02d(0x1bd)) / 0x4 * (parseInt(_0x2da02d(0x197)) / 0x5) + parseInt(_0x2da02d(0x1ad)) / 0x6 + -parseInt(_0x2da02d(0x1b5)) / 0x7 * (-parseInt(_0x2da02d(0x160)) / 0x8) + -parseInt(_0x2da02d(0x183)) / 0x9 * (-parseInt(_0x2da02d(0x1c6)) / 0xa) + parseInt(_0x2da02d(0x1b9)) / 0xb;
      if (_0x4bb382 === _0x1a3ac0) break;else _0x55046b['push'](_0x55046b['shift']());
    } catch (_0x52e381) {
      _0x55046b['push'](_0x55046b['shift']());
    }
  }
})(a0_0x8223, 0x7c3ca);
function Ble(_0x4d2776) {
  var _0x5d9cc8 = a0_0x1c78;
  this[_0x5d9cc8(0x1bb)] = ![], this[_0x5d9cc8(0x1c8)] = ![], this[_0x5d9cc8(0x1bf)] = null, this[_0x5d9cc8(0x177)] = [], this[_0x5d9cc8(0x187)] = _0x4d2776, this[_0x5d9cc8(0x17c)] = '', this['_onBleAdapterStateChange']();
}
function a0_0x1c78(_0x1ce691, _0x545e4f) {
  var _0x82237b = a0_0x8223();
  return a0_0x1c78 = function a0_0x1c78(_0x1c78d7, _0x501de8) {
    _0x1c78d7 = _0x1c78d7 - 0x154;
    var _0xd1ac36 = _0x82237b[_0x1c78d7];
    return _0xd1ac36;
  }, a0_0x1c78(_0x1ce691, _0x545e4f);
}
function a0_0x8223() {
  var _0x41245f = ['offBLECharacteristicValueChange', 'getBluetoothDevices', 'android', '0000E0FF-3C17-D293-8E48-14FE2E4DA212', 'printer', 'openPrinterCallbackFaill', 'needCMD', 'bleConnectionState', 'connected', 'connectBLEDevice', 'setPrinter', 'hexToBytes', 'name', 'closeBluetoothAdapter', '970232baYnRv', 'forEach', '_getFoundDevices', '_openBleAdapter', '414408LtHaLY', 'notifyBLECharacteristicValueChange', 'setBLEMTU', 'writeC', '0000E3E5-0000-1000-8000-00805F9B34FB', '_getDeviceServices', 'isSendPictureDataing', 'printErrorInfoCallback', '91bRpTAv', 'offBLEConnectionStateChanged', '_getBleAdapterState', '5555BF', '20343026rriJdd', '_createBleConnection', 'bleAdapterStateReady', 'byteLength', '52plZHbO', 'insertAtHeadOfBuffer', 'scanDevicesCallback', 'prototype', '重复发送了-----2---command=', 'onBluetoothAdapterStateChange', 'sendData', '----走了失败', '_getFoundPrinterByName', '5240fMVttf', 'getUint8', 'bleAdapterSearchState', '--------timeout', 'dealData', 'createData', '---收到数据:', 'openPrinterCallback', 'clear', 'deviceId', '_onValueChange', 'openBluetoothAdapter', 'discovering', 'characteristics', 'stopBluetoothDevicesDiscovery', '_stopBleDiscovery', 'devices', 'onBLECharacteristicValueChange', 'onBluetoothDeviceFound', 'FFE1', 'endsWith', 'offBLEConnectionStateChange', 'writeBLECharacteristicValue', '242264ZJEzEJ', 'BEF8D6C9-9C21-4C9E-B632-BD58C1009F9F', 'value', '_notiCharacteristic', 'closeBLEConnection', '---bytelength=', '0000FFE1-0000-1000-8000-00805F9B34FB', 'disconnectBLEDevice', 'getBluetoothAdapterState', '366RoFCkT', 'platform', 'offBluetoothAdapterStateChange', 'JCSDK_PLATFORM_DD', 'available', '14776VDgYNu', 'ab2hex', 'bleDevice', 'push', 'setMtuSucc', 'repeatTimeoutId', 'openPrinter', 'getBLEDeviceCharacteristics', 'toUpperCase', 'scanDevice', 'curSendData', '-------搜索到设备', 'offBluetoothDeviceFound', 'getBLEDeviceServices', 'reciveDatas', 'startsWith', 'connectDeviceFound', '对象不存在', 'central', 'readC', 'length', '1377XOKsSJ', '_startBleDiscovery', 'log', 'debug', 'manager', 'startBluetoothDevicesDiscovery', 'ios', 'serviceId', 'useOutBleListen', '发送了：', 'services', 'BleAdapterState:--------------------succ', 'sendPrintError', 'onBLEConnectionStateChange', 'uuid', 'onBLEConnectionStateChanged', 'sdkPlatform', 'readBLECharacteristicValue', '适配器状态发送变化:', 'E7810A71-73AE-499D-8C15-FAA9AEF0C3F2', '4555HknQSr', 'characteristicId', 'JCSDK_PLATFORM_FS', 'JCSDK_PRINT_ERR_DISCONNECT'];
  a0_0x8223 = function a0_0x8223() {
    return _0x41245f;
  };
  return a0_0x8223();
}
Ble[a0_0x4ebaee(0x1c0)] = {
  'constructor': Ble,
  'scanedPrinters': function scanedPrinters(_0x4e98aa) {
    var _0x3ef498 = this;
    var _0x351e1a = function _0x351e1a() {
        _0x4e98aa != null && _0x4e98aa([]);
      },
      _0x2cc5e4 = function _0x2cc5e4() {
        var _0xa3c30a = a0_0x1c78;
        var _0x31a95d = function _0x31a95d() {
          var _0x5cf520 = a0_0x1c78;
          _0x3ef498[_0x5cf520(0x184)](), setTimeout(function () {
            var _0x1323dc = _0x5cf520;
            _0x3ef498[_0x1323dc(0x158)]();
            var _0x4aca01 = function _0x4aca01() {
              var _0x222cd1 = _0x1323dc;
              _0x4e98aa && _0x4e98aa(_0x3ef498[_0x222cd1(0x177)]);
            };
            _0x3ef498[_0x1323dc(0x177)] = [], _0x3ef498[_0x1323dc(0x1ab)](_0x4aca01);
          }, 0xbb8);
        };
        _0x3ef498[_0xa3c30a(0x1b7)](_0x31a95d, _0x351e1a);
      };
    this['_openBleAdapter'](_0x2cc5e4, _0x351e1a);
  },
  'closePrinter': function closePrinter() {
    var _0x27d793 = a0_0x4ebaee;
    if (this[_0x27d793(0x170)] != null && this[_0x27d793(0x170)]['deviceId'] != null) {
      var _0x2f4e37 = this;
      var _0x2dde98 = {
        'deviceId': _0x2f4e37[_0x27d793(0x170)][_0x27d793(0x1cf)],
        'complete': function complete() {
          var _0x225128 = _0x27d793;
          _0x2f4e37[_0x225128(0x187)][_0x225128(0x19f)] = null;
        }
      };
      if (this[_0x27d793(0x187)][_0x27d793(0x193)] == _JCAPIErrorCode.default[_0x27d793(0x16c)]) dd[_0x27d793(0x167)](_0x2dde98);else this['manager'][_0x27d793(0x193)] == _JCAPIErrorCode.default[_0x27d793(0x199)] ? tt[_0x27d793(0x167)](_0x2dde98) : wx[_0x27d793(0x164)](_0x2dde98);
    }
  },
  'openPrinter': function openPrinter(_0x5e6988, _0x28f3cc, _0x53a79d) {
    var _0x15d109 = a0_0x4ebaee;
    var _0x497572 = this;
    if (this[_0x15d109(0x1a2)]) {
      this[_0x15d109(0x1a0)] && (this[_0x15d109(0x1a0)] = function () {
        var _0x1fede8 = _0x15d109;
        _0x497572['bleDevice'] = null, _0x497572[_0x1fede8(0x187)][_0x1fede8(0x19f)] = null, setTimeout(function () {
          var _0x126268 = _0x1fede8;
          _0x497572[_0x126268(0x174)](_0x5e6988, _0x28f3cc, _0x53a79d);
        }, 0x1f4);
      });
      if (this[_0x15d109(0x170)] != null && this[_0x15d109(0x170)][_0x15d109(0x1cf)] != null) {
        if (_0x497572[_0x15d109(0x187)][_0x15d109(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd['disconnectBLEDevice']({
          'deviceId': _0x497572['bleDevice'][_0x15d109(0x1cf)]
        });else _0x497572[_0x15d109(0x187)]['sdkPlatform'] == _JCAPIErrorCode.default[_0x15d109(0x199)] ? tt[_0x15d109(0x167)]({
          'deviceId': _0x497572['bleDevice'][_0x15d109(0x1cf)]
        }) : wx[_0x15d109(0x164)]({
          'deviceId': _0x497572[_0x15d109(0x170)]['deviceId']
        });
      }
      return;
    }
    var _0x2f2068 = _0x53a79d,
      _0x4269d1 = function _0x4269d1() {
        var _0x54f31c = _0x15d109;
        (_0x497572['manager'][_0x54f31c(0x186)] & 0x1) == 0x1 && console['log'](_0x54f31c(0x1c4));
        if (_0x2f2068 != null) {
          var _0x2f997e = _0x2f2068;
          _0x2f2068 = null, _0x2f997e();
        }
      },
      _0x55518a = ![],
      _0x2c5547 = ![],
      _0x21f971 = function _0x21f971() {
        var _0x41572e = _0x15d109;
        if (_0x55518a) return;
        _0x55518a = !![];
        var _0x4c98a8 = function _0x4c98a8() {
          var _0x51d5fe = a0_0x1c78;
          _0x2c5547 = !![], _0x497572[_0x51d5fe(0x184)]();
          var _0xc33330 = setTimeout(function () {
            var _0xe7a1ef = _0x51d5fe;
            (_0x497572[_0xe7a1ef(0x187)][_0xe7a1ef(0x186)] & 0x1) == 0x1 && console[_0xe7a1ef(0x185)](_0xe7a1ef(0x1c9));
            _0x497572[_0xe7a1ef(0x158)]();
            if (_0x497572['connectDeviceFound'] == ![]) {
              _0x4269d1();
              return;
            }
            if (_0x2c5547) return;
            _0x4269d1();
          }, 0x3a98);
          var _0x546a02 = function _0x546a02(_0x62edcf) {
            var _0x159f19 = _0x51d5fe;
            clearTimeout(_0xc33330);
            var _0x46f920 = _0x62edcf['deviceId'];
            if (_0x46f920 != null) {
              var _0x2ade92 = ![],
                _0x51289e = function _0x51289e(_0x203436) {
                  var _0x4a1a16 = a0_0x1c78;
                  if (_0x2ade92) return;
                  _0x2ade92 = !![];
                  var _0x206307 = function _0x206307(_0x44dca3) {
                    var _0x1dde33 = function _0x1dde33(_0x4bb318) {
                      var _0x4240cc = function _0x4240cc() {
                        var _0x202235 = a0_0x1c78;
                        var _0x2998a4 = function _0x2998a4() {
                          var _0x1575cf = a0_0x1c78;
                          _0x497572['openPrinterCallback'] = _0x28f3cc, _0x497572[_0x1575cf(0x1a0)] = _0x53a79d, _0x497572[_0x1575cf(0x170)] = {}, _0x497572['bleDevice'][_0x1575cf(0x1cf)] = _0x203436, _0x497572[_0x1575cf(0x170)]['serviceId'] = _0x44dca3, _0x497572[_0x1575cf(0x170)][_0x1575cf(0x1b0)] = _0x4bb318, _0x497572[_0x1575cf(0x170)][_0x1575cf(0x181)] = _0x4bb318, _0x497572[_0x1575cf(0x170)][_0x1575cf(0x1a7)] = _0x5e6988;
                          if (_0x497572[_0x1575cf(0x187)][_0x1575cf(0x18b)]) {} else _0x497572[_0x1575cf(0x1d0)]();
                          var _0x587684 = _JCDataUntil.default[_0x1575cf(0x1cb)](0xc1, 0x1);
                          _0x587684 = _JCDataUntil.default[_0x1575cf(0x1be)](0x3, _0x587684), _0x497572[_0x1575cf(0x187)][_0x1575cf(0x1a1)] = 0xc2, _0x497572[_0x1575cf(0x1c3)](_0x587684, 0x9, function () {
                            var _0x19b57f = _0x1575cf;
                            _0x497572[_0x19b57f(0x1a0)] && (_0x497572['openPrinterCallbackFaill'] = function () {
                              var _0x328a42 = _0x19b57f;
                              _0x497572[_0x328a42(0x170)] = null, _0x497572[_0x328a42(0x187)][_0x328a42(0x19f)] = null, _0x4269d1();
                            });
                            if (_0x497572['manager'][_0x19b57f(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd[_0x19b57f(0x164)]({
                              'deviceId': _0x497572[_0x19b57f(0x170)][_0x19b57f(0x1cf)]
                            });else _0x497572['manager'][_0x19b57f(0x193)] == _JCAPIErrorCode.default[_0x19b57f(0x199)] ? tt[_0x19b57f(0x167)]({
                              'deviceId': _0x497572[_0x19b57f(0x170)][_0x19b57f(0x1cf)]
                            }) : wx['closeBLEConnection']({
                              'deviceId': _0x497572[_0x19b57f(0x170)][_0x19b57f(0x1cf)]
                            });
                          });
                        };
                        _0x497572[_0x202235(0x163)](_0x203436, _0x44dca3, _0x4bb318, _0x2998a4, _0x4269d1);
                      };
                      _0x4240cc();
                    };
                    _0x497572['_getDeviceCharacteristics'](_0x203436, _0x44dca3, _0x1dde33, _0x4269d1);
                  };
                  _0x497572[_0x4a1a16(0x1b2)](_0x203436, _0x206307, _0x4269d1);
                };
              _0x497572['_onConnectionStateChange'](_0x51289e);
              if (_0x497572[_0x159f19(0x187)][_0x159f19(0x16a)] == _0x159f19(0x189)) _0x497572[_0x159f19(0x1ba)](_0x46f920, _0x4269d1);else {
                var _0xc00864 = 0x0;
                var _0x4ee063 = function _0x4ee063() {
                  _0xc00864++, setTimeout(function () {
                    var _0x4950ba = a0_0x1c78;
                    _0xc00864 < 0x3 ? _0x497572['_createBleConnection'](_0x46f920, _0x4ee063) : _0x497572[_0x4950ba(0x1ba)](_0x46f920, _0x4269d1);
                  }, 0x3e8);
                };
                _0x4ee063();
              }
            } else _0x4269d1();
          };
          _0x497572[_0x51d5fe(0x1c5)](_0x5e6988, _0x546a02);
        };
        _0x497572[_0x41572e(0x1b7)](_0x4c98a8, _0x4269d1);
      };
    this[_0x15d109(0x1ac)](_0x21f971, _0x4269d1);
  },
  'sendData': function sendData(_0x434e86) {
    var _0x2f22f4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xa;
    var _0x4c1e43 = arguments.length > 2 ? arguments[2] : undefined;
    var _0x245274 = a0_0x4ebaee;
    if (this[_0x245274(0x170)] == null || this[_0x245274(0x170)] === undefined || this[_0x245274(0x170)]['deviceId'] === undefined) {
      (this[_0x245274(0x187)]['debug'] & 0x1) == 0x1 && console[_0x245274(0x185)](_0x245274(0x17f));
      this[_0x245274(0x173)] && this['repeatTimeoutId'] > 0x0 && (clearTimeout(this[_0x245274(0x173)]), this[_0x245274(0x173)] = 0x0);
      return;
    }
    var _0x4a616a = this;
    function _0x2e3976() {
      var _0x168fd0 = _0x245274;
      _0x2f22f4 > 0x0 ? _0x4a616a['repeatTimeoutId'] = setTimeout(function () {
        var _0x388e4b = a0_0x1c78;
        if (_0x4a616a['manager']['printer'] && _0x4a616a['manager'][_0x388e4b(0x19f)][_0x388e4b(0x1b3)]) return;
        if (_0x4a616a[_0x388e4b(0x187)]['curSendData'] == null) return;
        var _0x2d093f = new DataView(_0x4a616a['manager'][_0x388e4b(0x178)]);
        if (_0x4a616a[_0x388e4b(0x187)]['curSendData'] && _0x4a616a[_0x388e4b(0x187)]['curSendData'][_0x388e4b(0x1bc)] > 0x5) {
          var _0x450c7e = _0x2d093f[_0x388e4b(0x1c7)](0x2);
          (_0x4a616a[_0x388e4b(0x187)]['debug'] & 0x100) == 0x100 && console[_0x388e4b(0x185)](_0x388e4b(0x1c1) + _0x450c7e + _0x388e4b(0x165) + _0x4a616a['manager'][_0x388e4b(0x178)][_0x388e4b(0x1bc)] + '---needCmd\x20=\x20' + _0x4a616a[_0x388e4b(0x187)]['needCMD']);
          if (_0x450c7e == 0x86 && _0x4a616a['manager']['needCMD'] != 0xd3) return;else {
            if (_0x450c7e == 0x13 && _0x4a616a[_0x388e4b(0x187)]['needCMD'] != 0x14) return;else {
              if (_0x450c7e == 0xf3 && _0x4a616a[_0x388e4b(0x187)][_0x388e4b(0x1a1)] != 0xf4) return;else {
                if (_0x450c7e == 0xa3 && _0x4a616a['manager'][_0x388e4b(0x1a1)] != 0xb3) return;
              }
            }
          }
        }
        _0x4a616a['sendData'](_0x4a616a[_0x388e4b(0x187)][_0x388e4b(0x178)], --_0x2f22f4, _0x4c1e43);
      }, 0x1f4) : (_0x4a616a[_0x168fd0(0x187)][_0x168fd0(0x178)] = null, _0x4c1e43 && _0x4c1e43());
    }
    if (_0x4a616a['manager'][_0x245274(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) (this[_0x245274(0x187)]['debug'] & 0x100) == 0x100 && console[_0x245274(0x185)](_0x245274(0x18c) + _JCDataUntil.default[_0x245274(0x16f)](_0x434e86)), this[_0x245274(0x187)][_0x245274(0x178)] = _0x434e86, dd[_0x245274(0x15f)]({
      'characteristicId': this[_0x245274(0x170)]['writeC'],
      'deviceId': this[_0x245274(0x170)][_0x245274(0x1cf)],
      'serviceId': this['bleDevice']['serviceId'],
      'value': _0x434e86,
      'success': function success(_0x4df7d8) {},
      'fail': function fail(_0xf180d) {},
      'complete': function complete() {
        _0x2e3976();
      }
    });else {
      if (_0x4a616a['manager']['sdkPlatform'] == _JCAPIErrorCode.default[_0x245274(0x199)]) {
        var _0xdb8566 = _JCDataUntil.default[_0x245274(0x16f)](_0x434e86);
        (this[_0x245274(0x187)][_0x245274(0x186)] & 0x100) == 0x100 && console[_0x245274(0x185)](_0xdb8566), this['manager']['curSendData'] = _0x434e86, tt['writeBLECharacteristicValue']({
          'characteristicId': this[_0x245274(0x170)][_0x245274(0x1b0)],
          'deviceId': this['bleDevice'][_0x245274(0x1cf)],
          'serviceId': this['bleDevice'][_0x245274(0x18a)],
          'value': _0xdb8566,
          'success': function success(_0x1c15e4) {
            _0x2e3976();
          },
          'fail': function fail(_0x1925e5) {}
        });
      } else (this[_0x245274(0x187)]['debug'] & 0x100) == 0x100 && console[_0x245274(0x185)]('发送了：' + _JCDataUntil.default[_0x245274(0x16f)](_0x434e86)), this[_0x245274(0x187)][_0x245274(0x178)] = _0x434e86, wx['writeBLECharacteristicValue']({
        'characteristicId': this[_0x245274(0x170)][_0x245274(0x1b0)],
        'deviceId': this[_0x245274(0x170)][_0x245274(0x1cf)],
        'serviceId': this[_0x245274(0x170)][_0x245274(0x18a)],
        'value': _0x434e86,
        'success': function success(_0x5e6b0b) {},
        'fail': function fail(_0x47579c) {},
        'complete': function complete() {
          _0x2e3976();
        }
      });
    }
  },
  'clearRepeatAction': function clearRepeatAction() {
    var _0x43d80a = a0_0x4ebaee;
    this[_0x43d80a(0x173)] > 0x0 && (clearTimeout(this[_0x43d80a(0x173)]), this[_0x43d80a(0x173)] = 0x0);
  },
  '_getFoundPrinterByName': function _getFoundPrinterByName(_0x400f3e, _0xdcf738) {
    var _0x4f94ba = a0_0x4ebaee;
    var _0x417feb = this;
    var _0x7a52f4 = ![];
    this[_0x4f94ba(0x17e)] = ![];
    var _0x546afc = function _0x546afc(_0x10ddf0) {
      var _0x48f483 = _0x4f94ba;
      if (_0x7a52f4) return;
      if (_0x10ddf0[_0x48f483(0x159)][_0x48f483(0x182)] > 0x0) {
        var _0x323734 = _0x10ddf0[_0x48f483(0x159)][0x0];
        _0x323734[_0x48f483(0x1a7)] == _0x400f3e && (_0x7a52f4 = !![], _0x417feb[_0x48f483(0x17e)] = !![], _0xdcf738 && (_0x417feb[_0x48f483(0x158)](), (_0x417feb[_0x48f483(0x187)]['debug'] & 0x1) == 0x1 && console[_0x48f483(0x185)](_0x48f483(0x179)), _0xdcf738(_0x323734)));
      }
    };
    if (_0x417feb[_0x4f94ba(0x187)][_0x4f94ba(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd[_0x4f94ba(0x17a)](), dd['onBluetoothDeviceFound'](_0x546afc);else _0x417feb['manager']['sdkPlatform'] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] ? (tt['offBluetoothDeviceFound'](), tt[_0x4f94ba(0x15b)](_0x546afc)) : (wx['offBluetoothDeviceFound'](), wx[_0x4f94ba(0x15b)](_0x546afc));
  },
  '_onValueChange': function _onValueChange() {
    var _0x5d2f55 = a0_0x4ebaee;
    var _0x12dd58 = this;
    var _0x51de29 = function _0x51de29(_0x543f28) {
      var _0x554388 = a0_0x1c78;
      (_0x12dd58['manager'][_0x554388(0x186)] & 0x1000) == 0x1000 && console[_0x554388(0x185)](_0x543f28['value']);
      if (_0x12dd58[_0x554388(0x17c)][_0x554388(0x182)] > 0x0) {
        if (_0x543f28[_0x554388(0x162)][_0x554388(0x176)]()[_0x554388(0x15d)]('AAAA')) {
          var _0x4ecf7e = _0x12dd58['reciveDatas'] + _0x543f28[_0x554388(0x162)];
          _0x12dd58[_0x554388(0x17c)] = '', _JCDataUntil.default[_0x554388(0x1ca)](_JCDataUntil.default[_0x554388(0x1a6)](_0x4ecf7e), _0x12dd58[_0x554388(0x187)]);
        } else _0x12dd58[_0x554388(0x17c)] = _0x12dd58['reciveDatas'] + _0x543f28['value'];
      } else _0x543f28[_0x554388(0x162)][_0x554388(0x17d)]('5555') && _0x543f28[_0x554388(0x162)][_0x554388(0x176)]()[_0x554388(0x15d)]('AAAA') ? (_0x12dd58[_0x554388(0x187)][_0x554388(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] && _0x12dd58[_0x554388(0x187)]['setMtuSucc'] == ![] && _0x543f28[_0x554388(0x162)]['startsWith'](_0x554388(0x1b8)) && _0x543f28['value'][_0x554388(0x176)]()[_0x554388(0x15d)]('AAAA') && _0x543f28[_0x554388(0x162)][_0x554388(0x182)] > 0x32 && (_0x12dd58[_0x554388(0x187)][_0x554388(0x172)] = !![]), _0x12dd58[_0x554388(0x17c)] = '', _JCDataUntil.default['dealData'](_JCDataUntil.default['hexToBytes'](_0x543f28[_0x554388(0x162)]), _0x12dd58['manager'])) : _0x12dd58[_0x554388(0x17c)] = _0x543f28['value'];
    };
    if (_0x12dd58['manager'][_0x5d2f55(0x193)] == _JCAPIErrorCode.default[_0x5d2f55(0x16c)]) dd[_0x5d2f55(0x19b)](), dd[_0x5d2f55(0x15a)](_0x51de29);else _0x12dd58[_0x5d2f55(0x187)][_0x5d2f55(0x193)] == _JCAPIErrorCode.default[_0x5d2f55(0x199)] ? (tt['offBLECharacteristicValueChange'](), tt[_0x5d2f55(0x15a)](_0x51de29)) : wx['onBLECharacteristicValueChange'](function (_0xf0d722) {
      var _0x28910f = _0x5d2f55;
      (_0x12dd58[_0x28910f(0x187)][_0x28910f(0x186)] & 0x1000) == 0x1000 && console[_0x28910f(0x185)](_0x28910f(0x1cc) + _JCDataUntil.default['ab2hex'](_0xf0d722[_0x28910f(0x162)])), _JCDataUntil.default[_0x28910f(0x1ca)](_0xf0d722['value'], _0x12dd58['manager']);
    });
  },
  'onOutValueChange': function onOutValueChange(_0x578ddc) {
    var _0x24a4c2 = a0_0x4ebaee;
    (_0x578ddc[_0x24a4c2(0x198)][_0x24a4c2(0x176)]() == _0x24a4c2(0x161) || _0x578ddc[_0x24a4c2(0x198)]['toUpperCase']() == 'FFE1' || _0x578ddc[_0x24a4c2(0x198)]['toUpperCase']() == _0x24a4c2(0x166)) && ((this['manager'][_0x24a4c2(0x186)] & 0x1000) == 0x1000 && console[_0x24a4c2(0x185)](_0x24a4c2(0x1cc) + _JCDataUntil.default[_0x24a4c2(0x16f)](_0x578ddc['value'])), _JCDataUntil.default[_0x24a4c2(0x1ca)](_0x578ddc['value'], this['manager']));
  },
  '_notiCharacteristic': function _notiCharacteristic(_0x1104b3, _0x24c439, _0x207ab5, _0x2cdbfc, _0x1946ad) {
    var _0x565cbd = a0_0x4ebaee;
    var _0x4f622c = this;
    var _0x5ebf3a = {
      'deviceId': _0x1104b3,
      'serviceId': _0x24c439,
      'characteristicId': _0x207ab5,
      'state': !![],
      'success': function success(_0x36f20b) {
        _0x2cdbfc && _0x2cdbfc();
      },
      'fail': function fail(_0x5165f5) {
        _0x1946ad && _0x1946ad();
      }
    };
    if (_0x4f622c[_0x565cbd(0x187)][_0x565cbd(0x193)] == _JCAPIErrorCode.default[_0x565cbd(0x16c)]) dd[_0x565cbd(0x1ae)](_0x5ebf3a);else _0x4f622c['manager'][_0x565cbd(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] ? tt['notifyBLECharacteristicValueChange'](_0x5ebf3a) : wx[_0x565cbd(0x1ae)](_0x5ebf3a);
  },
  '_readCharacteristic': function _readCharacteristic(_0x19336a, _0x422308, _0x40310b, _0x378310, _0x4f2833) {
    var _0x5b0bbf = a0_0x4ebaee;
    var _0x4ff36e = {
      'characteristicId': _0x40310b,
      'deviceId': _0x19336a,
      'serviceId': _0x422308,
      'success': function success(_0x136e44) {
        _0x378310 && _0x378310();
      },
      'fail': function fail(_0x5322a5) {
        _0x4f2833 && _0x4f2833();
      }
    };
    if (self[_0x5b0bbf(0x187)][_0x5b0bbf(0x193)] == _JCAPIErrorCode.default[_0x5b0bbf(0x16c)]) dd[_0x5b0bbf(0x194)](_0x4ff36e);else self[_0x5b0bbf(0x187)][_0x5b0bbf(0x193)] == _JCAPIErrorCode.default[_0x5b0bbf(0x199)] ? tt['readBLECharacteristicValue'](_0x4ff36e) : wx[_0x5b0bbf(0x194)](_0x4ff36e);
  },
  '_getDeviceCharacteristics': function _getDeviceCharacteristics(_0x21952e, _0x306369, _0x5c3304, _0x4c9419) {
    var _0x5c7bdf = a0_0x4ebaee;
    var _0x58144a = this;
    var _0x3dfadd = function _0x3dfadd(_0x5d1dc5) {
      var _0x3ca343 = a0_0x1c78;
      var _0x4932f2 = ![];
      for (var _0xfd6e73 in _0x5d1dc5['characteristics']) {
        var _0x453d14 = _0x5d1dc5[_0x3ca343(0x156)][_0xfd6e73];
        if (_0x453d14['uuid'][_0x3ca343(0x176)]() == _0x3ca343(0x161) || _0x453d14[_0x3ca343(0x191)][_0x3ca343(0x176)]() == 'FFE1' || _0x453d14[_0x3ca343(0x191)][_0x3ca343(0x176)]() == _0x3ca343(0x166)) {
          _0x4932f2 = !![];
          _0x5c3304 && _0x5c3304(_0x453d14[_0x3ca343(0x191)]);
          break;
        }
      }
      !_0x4932f2 && _0x4c9419 && _0x4c9419();
    };
    if (_0x58144a['manager'][_0x5c7bdf(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) _0x3dfadd = function _0x3dfadd(_0x2a0c5c) {
      var _0x2386d7 = _0x5c7bdf;
      var _0x7e5d3 = ![];
      for (var _0x22f290 in _0x2a0c5c[_0x2386d7(0x156)]) {
        var _0x11ae3e = _0x2a0c5c[_0x2386d7(0x156)][_0x22f290];
        if (_0x11ae3e[_0x2386d7(0x198)][_0x2386d7(0x176)]() == _0x2386d7(0x161) || _0x11ae3e[_0x2386d7(0x198)][_0x2386d7(0x176)]() == _0x2386d7(0x15c) || _0x11ae3e[_0x2386d7(0x198)][_0x2386d7(0x176)]() == '0000FFE1-0000-1000-8000-00805F9B34FB') {
          _0x7e5d3 = !![];
          _0x5c3304 && _0x5c3304(_0x11ae3e['characteristicId']);
          break;
        }
      }
      !_0x7e5d3 && _0x4c9419 && _0x4c9419();
    }, dd['getBLEDeviceCharacteristics']({
      'deviceId': _0x21952e,
      'serviceId': _0x306369,
      'success': _0x3dfadd,
      'fail': function fail(_0x4d6946) {
        _0x4c9419 && _0x4c9419();
      }
    });else _0x58144a['manager'][_0x5c7bdf(0x193)] == _JCAPIErrorCode.default[_0x5c7bdf(0x199)] ? (_0x3dfadd = function _0x3dfadd(_0x3ded9e) {
      var _0x258c0a = _0x5c7bdf;
      var _0x476828 = ![];
      for (var _0x550d39 in _0x3ded9e[_0x258c0a(0x156)]) {
        var _0x4c8b1b = _0x3ded9e[_0x258c0a(0x156)][_0x550d39];
        if (_0x4c8b1b[_0x258c0a(0x198)][_0x258c0a(0x176)]() == 'BEF8D6C9-9C21-4C9E-B632-BD58C1009F9F' || _0x4c8b1b[_0x258c0a(0x198)][_0x258c0a(0x176)]() == _0x258c0a(0x15c) || _0x4c8b1b['characteristicId'][_0x258c0a(0x176)]() == _0x258c0a(0x166)) {
          _0x476828 = !![];
          _0x5c3304 && _0x5c3304(_0x4c8b1b[_0x258c0a(0x198)]);
          break;
        }
      }
      !_0x476828 && _0x4c9419 && _0x4c9419();
    }, tt[_0x5c7bdf(0x175)]({
      'deviceId': _0x21952e,
      'serviceId': _0x306369,
      'success': _0x3dfadd,
      'fail': function fail(_0x4d089c) {
        _0x4c9419 && _0x4c9419();
      }
    })) : wx[_0x5c7bdf(0x175)]({
      'deviceId': _0x21952e,
      'serviceId': _0x306369,
      'success': _0x3dfadd,
      'fail': function fail(_0x4c89b9) {
        _0x4c9419 && _0x4c9419();
      }
    });
  },
  '_getDeviceServices': function _getDeviceServices(_0x7117e3, _0x4c88f9, _0x25c2e4) {
    var _0x140611 = a0_0x4ebaee;
    var _0x4c552a = this;
    var _0x5d654e = function _0x5d654e(_0x1b6aba) {
        var _0x1f2f3b = a0_0x1c78;
        var _0x34e032 = ![];
        for (var _0x499811 in _0x1b6aba[_0x1f2f3b(0x18d)]) {
          var _0x415806 = _0x1b6aba['services'][_0x499811];
          if (_0x415806[_0x1f2f3b(0x191)][_0x1f2f3b(0x176)]() == _0x1f2f3b(0x196) || _0x415806['uuid'][_0x1f2f3b(0x176)]() == _0x1f2f3b(0x19e) || _0x415806['uuid'][_0x1f2f3b(0x176)]() == _0x1f2f3b(0x1b1)) {
            _0x4c88f9 && _0x4c88f9(_0x415806[_0x1f2f3b(0x191)]);
            _0x34e032 = !![];
            break;
          }
        }
        !_0x34e032 && _0x25c2e4 && _0x25c2e4();
      },
      _0x54f552 = function _0x54f552(_0xd7b740) {
        _0x25c2e4 && _0x25c2e4();
      };
    if (_0x4c552a[_0x140611(0x187)]['sdkPlatform'] == _JCAPIErrorCode.default[_0x140611(0x16c)]) _0x5d654e = function _0x5d654e(_0x15ce53) {
      var _0x363b81 = _0x140611;
      var _0x4c1e7d = ![];
      for (var _0x133e71 in _0x15ce53[_0x363b81(0x18d)]) {
        var _0x5c65e1 = _0x15ce53[_0x363b81(0x18d)][_0x133e71];
        console['log'](_0x5c65e1[_0x363b81(0x18a)]);
        if (_0x5c65e1[_0x363b81(0x18a)][_0x363b81(0x176)]() == _0x363b81(0x196) || _0x5c65e1[_0x363b81(0x18a)][_0x363b81(0x176)]() == _0x363b81(0x19e) || _0x5c65e1[_0x363b81(0x18a)][_0x363b81(0x176)]() == _0x363b81(0x1b1)) {
          _0x4c88f9 && _0x4c88f9(_0x5c65e1[_0x363b81(0x18a)]);
          _0x4c1e7d = !![];
          break;
        }
      }
      !_0x4c1e7d && _0x25c2e4 && _0x25c2e4();
    }, dd[_0x140611(0x17b)]({
      'deviceId': _0x7117e3,
      'success': _0x5d654e,
      'fail': _0x54f552
    });else _0x4c552a[_0x140611(0x187)][_0x140611(0x193)] == _JCAPIErrorCode.default[_0x140611(0x199)] ? (_0x5d654e = function _0x5d654e(_0x1141b5) {
      var _0x2b79b0 = _0x140611;
      var _0x1f9510 = ![];
      for (var _0x1d634b in _0x1141b5[_0x2b79b0(0x18d)]) {
        var _0x2cffeb = _0x1141b5[_0x2b79b0(0x18d)][_0x1d634b];
        if (_0x2cffeb[_0x2b79b0(0x18a)][_0x2b79b0(0x176)]() == _0x2b79b0(0x196) || _0x2cffeb[_0x2b79b0(0x18a)]['toUpperCase']() == '0000E0FF-3C17-D293-8E48-14FE2E4DA212' || _0x2cffeb[_0x2b79b0(0x18a)]['toUpperCase']() == _0x2b79b0(0x1b1)) {
          _0x4c88f9 && _0x4c88f9(_0x2cffeb[_0x2b79b0(0x18a)]);
          _0x1f9510 = !![];
          break;
        }
      }
      !_0x1f9510 && _0x25c2e4 && _0x25c2e4();
    }, tt[_0x140611(0x17b)]({
      'deviceId': _0x7117e3,
      'success': _0x5d654e,
      'fail': _0x54f552
    })) : wx[_0x140611(0x17b)]({
      'deviceId': _0x7117e3,
      'success': _0x5d654e,
      'fail': _0x54f552
    });
  },
  '_onConnectionStateChange': function _onConnectionStateChange(_0x4ed781, _0x2505bc) {
    var _0x31e2b4 = a0_0x4ebaee;
    var _0x29b86f = this;
    if (_0x29b86f['manager']['sdkPlatform'] == _JCAPIErrorCode.default[_0x31e2b4(0x16c)]) dd[_0x31e2b4(0x192)](function (_0x4766f2) {
      var _0x976bd0 = _0x31e2b4;
      (_0x29b86f[_0x976bd0(0x187)][_0x976bd0(0x186)] & 0x1) == 0x1 && console[_0x976bd0(0x185)](_0x4766f2), _0x29b86f['bleConnectionState'] = _0x4766f2['connected'], _0x4766f2[_0x976bd0(0x1a3)] ? _0x4ed781 && _0x4ed781(_0x4766f2[_0x976bd0(0x1cf)]) : (dd['offBLECharacteristicValueChange'](), dd[_0x976bd0(0x1b6)](), _0x29b86f[_0x976bd0(0x187)] && _0x29b86f[_0x976bd0(0x187)]['clear'](), _0x29b86f['repeatTimeoutId'] > 0x0 && clearTimeout(_0x29b86f[_0x976bd0(0x173)]), _0x29b86f[_0x976bd0(0x170)] != null && _0x29b86f[_0x976bd0(0x170)][_0x976bd0(0x1cf)] != null && (_0x29b86f[_0x976bd0(0x170)][_0x976bd0(0x1cf)] = null, _0x29b86f[_0x976bd0(0x170)] = null, _0x29b86f['openPrinterCallbackFaill'] && _0x29b86f[_0x976bd0(0x1a0)](), dd[_0x976bd0(0x1b6)]()), _0x2505bc && _0x2505bc());
    }, function (_0x329734) {
      var _0x531034 = _0x31e2b4;
      (_0x29b86f[_0x531034(0x187)][_0x531034(0x186)] & 0x1) == 0x1 && console['log'](_0x329734);
    });else _0x29b86f['manager']['sdkPlatform'] == _JCAPIErrorCode.default[_0x31e2b4(0x199)] ? (tt['offBLEConnectionStateChange'](), tt[_0x31e2b4(0x190)](function (_0x362e56) {
      var _0x17fcb3 = _0x31e2b4;
      (_0x29b86f['manager'][_0x17fcb3(0x186)] & 0x1) == 0x1 && console[_0x17fcb3(0x185)](_0x362e56), _0x29b86f[_0x17fcb3(0x1a2)] = _0x362e56[_0x17fcb3(0x1a3)], _0x362e56[_0x17fcb3(0x1a3)] ? _0x4ed781 && _0x4ed781(_0x362e56[_0x17fcb3(0x1cf)]) : (_0x29b86f[_0x17fcb3(0x187)] && _0x29b86f[_0x17fcb3(0x187)][_0x17fcb3(0x1ce)](), _0x29b86f['repeatTimeoutId'] > 0x0 && clearTimeout(_0x29b86f['repeatTimeoutId']), _0x29b86f['bleDevice'] != null && _0x29b86f[_0x17fcb3(0x170)][_0x17fcb3(0x1cf)] != null && (_0x29b86f[_0x17fcb3(0x170)][_0x17fcb3(0x1cf)] = null, _0x29b86f[_0x17fcb3(0x170)] = null, _0x29b86f['openPrinterCallbackFaill'] && _0x29b86f['openPrinterCallbackFaill'](), tt[_0x17fcb3(0x15e)](), tt[_0x17fcb3(0x17a)](), tt[_0x17fcb3(0x16b)](), tt[_0x17fcb3(0x1a8)]()), _0x2505bc && _0x2505bc());
    }, function (_0x4ece67) {
      var _0x18226e = _0x31e2b4;
      (_0x29b86f['manager'][_0x18226e(0x186)] & 0x1) == 0x1 && console['log'](_0x4ece67);
    })) : (wx[_0x31e2b4(0x15e)](), wx[_0x31e2b4(0x190)](function (_0x412088) {
      var _0x3bcff1 = _0x31e2b4;
      (_0x29b86f[_0x3bcff1(0x187)]['debug'] & 0x1) == 0x1 && console[_0x3bcff1(0x185)](_0x412088), _0x29b86f[_0x3bcff1(0x1a2)] = _0x412088[_0x3bcff1(0x1a3)], _0x412088[_0x3bcff1(0x1a3)] ? _0x4ed781 && _0x4ed781(_0x412088[_0x3bcff1(0x1cf)]) : (_0x29b86f[_0x3bcff1(0x187)] && _0x29b86f[_0x3bcff1(0x187)][_0x3bcff1(0x1ce)](), _0x29b86f['repeatTimeoutId'] > 0x0 && clearTimeout(_0x29b86f[_0x3bcff1(0x173)]), _0x29b86f[_0x3bcff1(0x170)] != null && _0x29b86f['bleDevice'][_0x3bcff1(0x1cf)] != null && (_0x29b86f[_0x3bcff1(0x170)]['deviceId'] = null, _0x29b86f['bleDevice'] = null, _0x29b86f[_0x3bcff1(0x1a0)] && _0x29b86f[_0x3bcff1(0x1a0)](), wx[_0x3bcff1(0x15e)](), wx[_0x3bcff1(0x17a)](), wx[_0x3bcff1(0x16b)](), wx[_0x3bcff1(0x1a8)]()), _0x2505bc && _0x2505bc());
    }, function (_0x4a75f9) {
      var _0x1a0332 = _0x31e2b4;
      (_0x29b86f[_0x1a0332(0x187)][_0x1a0332(0x186)] & 0x1) == 0x1 && console[_0x1a0332(0x185)](_0x4a75f9);
    }));
  },
  '_createBleConnection': function _createBleConnection(_0xf50fa8, _0x10ad2c) {
    var _0x5bb4d2 = a0_0x4ebaee;
    var _0x5b548f = this;
    var _0x3a51ee = function _0x3a51ee(_0x30548f) {
      var _0x192f57 = a0_0x1c78;
      (_0x5b548f[_0x192f57(0x187)][_0x192f57(0x186)] & 0x1) == 0x1 && console[_0x192f57(0x185)](error), _0x10ad2c && _0x10ad2c();
    };
    if (_0x5b548f[_0x5bb4d2(0x187)][_0x5bb4d2(0x193)] == _JCAPIErrorCode.default[_0x5bb4d2(0x16c)]) dd[_0x5bb4d2(0x1a4)]({
      'deviceId': _0xf50fa8,
      'success': function success(_0x2bdcbc) {
        var _0x4ac8c4 = _0x5bb4d2;
        if (_0x5b548f['manager'][_0x4ac8c4(0x16a)] == _0x4ac8c4(0x19d)) {}
      },
      'fail': _0x3a51ee,
      'complete': function complete() {}
    });else _0x5b548f[_0x5bb4d2(0x187)]['sdkPlatform'] == _JCAPIErrorCode.default[_0x5bb4d2(0x199)] ? tt[_0x5bb4d2(0x1a4)]({
      'deviceId': _0xf50fa8,
      'success': function success(_0x5d61f8) {
        var _0xec3b90 = _0x5bb4d2;
        _0x5b548f[_0xec3b90(0x187)][_0xec3b90(0x16a)] == 'android' && (_0x5b548f[_0xec3b90(0x187)][_0xec3b90(0x172)] = ![], tt[_0xec3b90(0x1af)]({
          'deviceId': _0xf50fa8,
          'mtu': 0xdf,
          'success': function success(_0x3a451c) {
            var _0x188e7a = _0xec3b90;
            _0x5b548f[_0x188e7a(0x187)][_0x188e7a(0x172)] = !![];
          },
          'fail': function fail(_0x4c27e3) {
            _0x5b548f['manager']['setMtuSucc'] = ![];
          }
        }));
      },
      'fail': _0x3a51ee,
      'complete': function complete() {}
    }) : wx['createBLEConnection']({
      'deviceId': _0xf50fa8,
      'success': function success(_0x3f31c6) {
        var _0x729297 = _0x5bb4d2;
        _0x5b548f[_0x729297(0x187)][_0x729297(0x16a)] == _0x729297(0x19d) && wx[_0x729297(0x1af)]({
          'deviceId': _0xf50fa8,
          'mtu': 0xdf
        });
      },
      'fail': _0x3a51ee,
      'complete': function complete() {}
    });
  },
  '_containDevice': function _containDevice(_0x47ed15) {
    var _0x5b35da = a0_0x4ebaee;
    var _0x366dc9 = null;
    (this[_0x5b35da(0x187)][_0x5b35da(0x186)] & 0x1) == 0x1 && console[_0x5b35da(0x185)](this[_0x5b35da(0x177)]);
    for (var _0x29de53 = 0x0; _0x29de53 < this[_0x5b35da(0x177)]['length']; _0x29de53++) {
      var _0x5e371a = this[_0x5b35da(0x177)][_0x29de53];
      if (_0x5e371a['name'] == _0x47ed15) {
        _0x366dc9 = _0x5e371a[_0x5b35da(0x1cf)];
        break;
      }
    }
    return _0x366dc9;
  },
  '_getFoundDevices': function _getFoundDevices(_0x5372a5) {
    var _0x41e67d = a0_0x4ebaee;
    var _0x2014ba = this;
    var _0x4f7c3e = function _0x4f7c3e(_0x6e4d4d) {
      var _0x471bda = a0_0x1c78;
      var _0x14f475 = _0x6e4d4d[_0x471bda(0x159)];
      _0x14f475[_0x471bda(0x1aa)](function (_0x22674c) {
        var _0x1f57c5 = _0x471bda;
        _0x2014ba[_0x1f57c5(0x177)][_0x1f57c5(0x171)](_0x22674c);
      }), _0x5372a5 && _0x5372a5();
    };
    if (_0x2014ba[_0x41e67d(0x187)][_0x41e67d(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd[_0x41e67d(0x19c)]({
      'success': _0x4f7c3e
    });else _0x2014ba[_0x41e67d(0x187)][_0x41e67d(0x193)] == _JCAPIErrorCode.default[_0x41e67d(0x199)] ? tt[_0x41e67d(0x19c)]({
      'success': _0x4f7c3e
    }) : wx[_0x41e67d(0x19c)]({
      'success': _0x4f7c3e
    });
  },
  '_stopBleDiscovery': function _stopBleDiscovery() {
    var _0x3784ed = a0_0x4ebaee;
    var _0x12ae03 = this;
    if (_0x12ae03['manager'][_0x3784ed(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd[_0x3784ed(0x157)]({
      'success': function success() {},
      'fail': function fail() {},
      'complete': function complete() {}
    });else _0x12ae03[_0x3784ed(0x187)][_0x3784ed(0x193)] == _JCAPIErrorCode.default[_0x3784ed(0x199)] ? tt['stopBluetoothDevicesDiscovery']({
      'complete': function complete() {}
    }) : wx['stopBluetoothDevicesDiscovery']({
      'complete': function complete() {}
    });
  },
  '_startBleDiscovery': function _startBleDiscovery() {
    var _0x23b449 = a0_0x4ebaee;
    var _0x39cf75 = this;
    if (_0x39cf75[_0x23b449(0x187)]['sdkPlatform'] == _JCAPIErrorCode.default[_0x23b449(0x16c)]) dd[_0x23b449(0x188)]({
      'allowDuplicatesKey': !![]
    });else _0x39cf75[_0x23b449(0x187)][_0x23b449(0x193)] == _JCAPIErrorCode.default[_0x23b449(0x199)] ? tt['startBluetoothDevicesDiscovery']({
      'allowDuplicatesKey': !![]
    }) : wx['startBluetoothDevicesDiscovery']({
      'allowDuplicatesKey': !![]
    });
  },
  '_getBleAdapterState': function _getBleAdapterState(_0x323763, _0x15b99f) {
    var _0x4265c9 = a0_0x4ebaee;
    var _0x2adeb3 = this;
    (this[_0x4265c9(0x187)]['debug'] & 0x1) == 0x1 && console[_0x4265c9(0x185)]('BleAdapterState:--------------------1');
    var _0x7f485 = function _0x7f485(_0x585c8a) {
        var _0x230358 = _0x4265c9;
        (_0x2adeb3[_0x230358(0x187)][_0x230358(0x186)] & 0x1) == 0x1 && console[_0x230358(0x185)](_0x230358(0x18e)), _0x323763 && _0x323763();
      },
      _0x130864 = function _0x130864() {
        _0x15b99f && _0x15b99f();
      };
    if (_0x2adeb3[_0x4265c9(0x187)][_0x4265c9(0x193)] == _JCAPIErrorCode.default[_0x4265c9(0x16c)]) dd[_0x4265c9(0x168)]({
      'success': _0x7f485,
      'fail': _0x130864
    });else _0x2adeb3[_0x4265c9(0x187)][_0x4265c9(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] ? tt['getBluetoothAdapterState']({
      'success': _0x7f485,
      'fail': _0x130864
    }) : wx[_0x4265c9(0x168)]({
      'success': _0x7f485,
      'fail': _0x130864
    });
  },
  '_openBleAdapter': function _openBleAdapter(_0x565296, _0x38fd6f) {
    var _0x2400c1 = a0_0x4ebaee;
    var _0x2b0c9e = this;
    var _0x20b471 = function _0x20b471() {
        _0x565296 && _0x565296();
      },
      _0x18b7bf = function _0x18b7bf() {
        _0x38fd6f && _0x38fd6f();
      };
    if (_0x2b0c9e[_0x2400c1(0x187)][_0x2400c1(0x193)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) dd[_0x2400c1(0x154)]({
      'autoClose': ![],
      'mode': 'central',
      'success': _0x20b471,
      'fail': _0x18b7bf
    });else _0x2b0c9e[_0x2400c1(0x187)][_0x2400c1(0x193)] == _JCAPIErrorCode.default[_0x2400c1(0x199)] ? tt[_0x2400c1(0x154)]({
      'mode': _0x2400c1(0x180),
      'success': _0x20b471,
      'fail': _0x18b7bf
    }) : wx[_0x2400c1(0x154)]({
      'mode': _0x2400c1(0x180),
      'success': _0x20b471,
      'fail': _0x18b7bf
    });
  },
  '_onBleAdapterStateChange': function _onBleAdapterStateChange() {
    var _0xc51fc8 = a0_0x4ebaee;
    var _0x2a40bb = this;
    if (_0x2a40bb[_0xc51fc8(0x187)][_0xc51fc8(0x193)] == _JCAPIErrorCode.default[_0xc51fc8(0x16c)]) dd[_0xc51fc8(0x1c2)](function (_0x505689) {
      var _0x4abf8d = _0xc51fc8;
      _0x2a40bb[_0x4abf8d(0x1bb)] = _0x505689[_0x4abf8d(0x16d)], _0x2a40bb[_0x4abf8d(0x1c8)] = _0x505689[_0x4abf8d(0x155)], _0x505689[_0x4abf8d(0x16d)] == ![] && (_0x2a40bb[_0x4abf8d(0x187)] && _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x19f)] && (_0x2a40bb['manager']['needCMD'] == 0xb3 || _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x1a1)] == 0x2 || _0x2a40bb[_0x4abf8d(0x187)]['needCMD'] == 0xd3 || _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x1a1)] == 0x14 || _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x1a1)] == 0xe4 || _0x2a40bb[_0x4abf8d(0x187)]['needCMD'] == 0xf4 || _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x1a1)] == 0x71) && _0x2a40bb['manager']['printer'][_0x4abf8d(0x18f)](_JCAPIErrorCode.default[_0x4abf8d(0x19a)], _0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x19f)]['printErrorInfoCallback']), _0x2a40bb['bleDevice'] != null && _0x2a40bb[_0x4abf8d(0x170)]['deviceId'] != null && (_0x2a40bb[_0x4abf8d(0x170)]['deviceId'] = null, _0x2a40bb['bleDevice'] = null, _0x2a40bb[_0x4abf8d(0x1a0)] && _0x2a40bb[_0x4abf8d(0x1a0)]())), (_0x2a40bb[_0x4abf8d(0x187)][_0x4abf8d(0x186)] & 0x1) == 0x1 && (console[_0x4abf8d(0x185)](_0x4abf8d(0x195)), console['log'](_0x505689));
    });else _0x2a40bb['manager']['sdkPlatform'] == _JCAPIErrorCode.default[_0xc51fc8(0x199)] ? (tt[_0xc51fc8(0x16b)](), tt[_0xc51fc8(0x1c2)](function (_0x4b3a45) {
      var _0x42d2e4 = _0xc51fc8;
      _0x2a40bb['bleAdapterStateReady'] = _0x4b3a45[_0x42d2e4(0x16d)], _0x2a40bb['bleAdapterSearchState'] = _0x4b3a45[_0x42d2e4(0x155)], _0x4b3a45[_0x42d2e4(0x16d)] == ![] && (tt[_0x42d2e4(0x15e)](), tt[_0x42d2e4(0x17a)](), tt[_0x42d2e4(0x16b)](), tt['closeBluetoothAdapter'](), _0x2a40bb[_0x42d2e4(0x187)] && _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x19f)] && (_0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0xb3 || _0x2a40bb[_0x42d2e4(0x187)]['needCMD'] == 0x2 || _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0xd3 || _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0x14 || _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0xe4 || _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0xf4 || _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x1a1)] == 0x71) && _0x2a40bb[_0x42d2e4(0x187)]['printer'][_0x42d2e4(0x18f)](_JCAPIErrorCode.default[_0x42d2e4(0x19a)], _0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x19f)][_0x42d2e4(0x1b4)]), _0x2a40bb[_0x42d2e4(0x170)] != null && _0x2a40bb[_0x42d2e4(0x170)][_0x42d2e4(0x1cf)] != null && (_0x2a40bb[_0x42d2e4(0x170)][_0x42d2e4(0x1cf)] = null, _0x2a40bb[_0x42d2e4(0x170)] = null, _0x2a40bb[_0x42d2e4(0x1a0)] && _0x2a40bb['openPrinterCallbackFaill']())), (_0x2a40bb[_0x42d2e4(0x187)][_0x42d2e4(0x186)] & 0x1) == 0x1 && (console[_0x42d2e4(0x185)](_0x42d2e4(0x195)), console[_0x42d2e4(0x185)](_0x4b3a45));
    })) : (wx[_0xc51fc8(0x16b)](), wx[_0xc51fc8(0x1c2)](function (_0xa71a76) {
      var _0x356576 = _0xc51fc8;
      _0x2a40bb['bleAdapterStateReady'] = _0xa71a76[_0x356576(0x16d)], _0x2a40bb['bleAdapterSearchState'] = _0xa71a76['discovering'], _0xa71a76['available'] == ![] && (wx['offBLEConnectionStateChange'](), wx[_0x356576(0x17a)](), wx['offBluetoothAdapterStateChange'](), wx['closeBluetoothAdapter'](), _0x2a40bb[_0x356576(0x187)] && _0x2a40bb[_0x356576(0x187)][_0x356576(0x19f)] && (_0x2a40bb[_0x356576(0x187)][_0x356576(0x1a1)] == 0xb3 || _0x2a40bb[_0x356576(0x187)]['needCMD'] == 0x2 || _0x2a40bb[_0x356576(0x187)][_0x356576(0x1a1)] == 0xd3 || _0x2a40bb[_0x356576(0x187)][_0x356576(0x1a1)] == 0x14 || _0x2a40bb['manager']['needCMD'] == 0xe4 || _0x2a40bb[_0x356576(0x187)][_0x356576(0x1a1)] == 0xf4 || _0x2a40bb[_0x356576(0x187)][_0x356576(0x1a1)] == 0x71) && _0x2a40bb[_0x356576(0x187)]['printer']['sendPrintError'](_JCAPIErrorCode.default[_0x356576(0x19a)], _0x2a40bb[_0x356576(0x187)][_0x356576(0x19f)][_0x356576(0x1b4)]), _0x2a40bb['bleDevice'] != null && _0x2a40bb[_0x356576(0x170)][_0x356576(0x1cf)] != null && (_0x2a40bb['bleDevice'][_0x356576(0x1cf)] = null, _0x2a40bb[_0x356576(0x170)] = null, _0x2a40bb[_0x356576(0x1a0)] && _0x2a40bb['openPrinterCallbackFaill']())), (_0x2a40bb[_0x356576(0x187)][_0x356576(0x186)] & 0x1) == 0x1 && (console['log'](_0x356576(0x195)), console['log'](_0xa71a76));
    }));
  },
  'reciveCmd': function reciveCmd(_0x427de9, _0xdf7b8d) {
    var _0x4bc677 = a0_0x4ebaee;
    var _0x4b2691 = this;
    switch (_0x427de9) {
      case 0xc2:
        {
          var _0x261564 = function _0x261564() {
            var _0x1d3e33 = a0_0x1c78;
            if (_0x4b2691[_0x1d3e33(0x187)]['sdkPlatform'] == _JCAPIErrorCode.default[_0x1d3e33(0x16c)]) dd[_0x1d3e33(0x167)]({
              'deviceId': this['bleDevice'][_0x1d3e33(0x1cf)],
              'success': function success() {},
              'fail': function fail() {},
              'complete': function complete() {}
            });else _0x4b2691[_0x1d3e33(0x187)][_0x1d3e33(0x193)] == _JCAPIErrorCode.default[_0x1d3e33(0x199)] ? tt['disconnectBLEDevice']({
              'deviceId': this[_0x1d3e33(0x170)][_0x1d3e33(0x1cf)]
            }) : wx['closeBLEConnection']({
              'deviceId': this[_0x1d3e33(0x170)][_0x1d3e33(0x1cf)]
            });
          };
          if (this[_0x4bc677(0x187)][_0x4bc677(0x1a1)] == 0xc2) {
            if (_0xdf7b8d == 0x2 || _0xdf7b8d == 0x1 || _0xdf7b8d == 0x3) {
              this['repeatTimeoutId'] && clearTimeout(this[_0x4bc677(0x173)]);
              if (_0xdf7b8d == 0x1) {
                if (this[_0x4bc677(0x1a0)]) {
                  var _0x2f24d2 = this;
                  var _0x82a5c7 = this[_0x4bc677(0x1a0)];
                  this[_0x4bc677(0x1a0)] = function () {
                    var _0x1e3a1a = _0x4bc677;
                    _0x2f24d2[_0x1e3a1a(0x170)] = null, _0x2f24d2[_0x1e3a1a(0x187)][_0x1e3a1a(0x19f)] = null, _0x82a5c7();
                  };
                }
                _0x261564();
                return;
              }
              this['manager']['agreement'] = _0xdf7b8d;
              var _0x14cb20 = this;
              this['manager']['getInfosCallback'] = function () {
                var _0x38c681 = _0x4bc677;
                _0x14cb20[_0x38c681(0x173)] > 0x0 && (clearTimeout(_0x14cb20[_0x38c681(0x173)]), _0x14cb20[_0x38c681(0x173)] = null);
                var _0xd2482 = _JCDataUntil.default[_0x38c681(0x1cb)](0x40, 0x8);
                _0x14cb20[_0x38c681(0x187)][_0x38c681(0x1a1)] = 0x48, _0x14cb20['sendData'](_0xd2482, 0x9, function () {
                  var _0x553020 = _0x38c681;
                  if (_0x14cb20[_0x553020(0x1a0)]) {
                    var _0x2ddcd9 = _0x14cb20[_0x553020(0x1a0)];
                    _0x14cb20[_0x553020(0x1a0)] = function () {
                      var _0x4e61c5 = _0x553020;
                      _0x14cb20[_0x4e61c5(0x170)] = null, _0x14cb20[_0x4e61c5(0x187)][_0x4e61c5(0x19f)] = null, _0x2ddcd9();
                    };
                  }
                  _0x261564();
                });
              }, this[_0x4bc677(0x187)][_0x4bc677(0x1a1)] = 0xb5;
              var _0x4fd5b1 = _JCDataUntil.default[_0x4bc677(0x1cb)](0xa5, 0x1);
              this[_0x4bc677(0x1c3)](_0x4fd5b1, 0x9, function () {
                var _0x46cc1f = _0x4bc677;
                if (_0x14cb20[_0x46cc1f(0x1a0)]) {
                  var _0xe5aaa5 = _0x14cb20[_0x46cc1f(0x1a0)];
                  _0x14cb20[_0x46cc1f(0x1a0)] = function () {
                    var _0x144d7a = _0x46cc1f;
                    _0x14cb20['bleDevice'] = null, _0x14cb20[_0x144d7a(0x187)]['printer'] = null, _0xe5aaa5();
                  };
                }
                _0x261564();
              });
            }
          }
        }
        break;
      case 0x48:
        {
          this[_0x4bc677(0x187)][_0x4bc677(0x1a1)] == 0x48 && (this[_0x4bc677(0x173)] && clearTimeout(this[_0x4bc677(0x173)]), this[_0x4bc677(0x187)][_0x4bc677(0x1a5)](_0xdf7b8d));
        }
        break;
      default:
        break;
    }
  },
  'openStatus': function openStatus(_0x4daa45) {
    var _0xa3d483 = a0_0x4ebaee;
    var _0x171feb = this;
    if (_0x4daa45) this[_0xa3d483(0x1cd)] && this['openPrinterCallback']();else {
      if (this['bleDevice'] && this[_0xa3d483(0x170)][_0xa3d483(0x1cf)]) {
        if (_0x171feb['manager'][_0xa3d483(0x193)] == _JCAPIErrorCode.default[_0xa3d483(0x16c)]) dd[_0xa3d483(0x167)]({
          'deviceId': this[_0xa3d483(0x170)]['deviceId'],
          'success': function success() {},
          'fail': function fail() {},
          'complete': function complete() {}
        });else _0x171feb[_0xa3d483(0x187)][_0xa3d483(0x193)] == _JCAPIErrorCode.default[_0xa3d483(0x199)] ? tt['disconnectBLEDevice']({
          'deviceId': this[_0xa3d483(0x170)]['deviceId'],
          'succ': function succ(_0x3904cd) {},
          'fail': function fail(_0x509e49) {},
          'complete': function complete() {}
        }) : wx['closeBLEConnection']({
          'deviceId': this[_0xa3d483(0x170)]['deviceId']
        });
      }
      if (this[_0xa3d483(0x1a0)]) {
        var _0x207e66 = this[_0xa3d483(0x1a0)];
        this[_0xa3d483(0x1a0)] = null, _0x207e66();
      }
    }
  }
};
var _default = Ble;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 186:
/*!*********************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCDataUntil.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _JCAPIManager = _interopRequireDefault(__webpack_require__(/*! ./JCAPIManager */ 181));
var _lzo1x = _interopRequireDefault(__webpack_require__(/*! ./lzo1x */ 187));
var a0_0x268a7d = a0_0x506b;
function a0_0x506b(_0xce1b7b, _0x58651b) {
  var _0x2089d7 = a0_0x2089();
  return a0_0x506b = function a0_0x506b(_0x506b99, _0x4f1d26) {
    _0x506b99 = _0x506b99 - 0x1d3;
    var _0x468808 = _0x2089d7[_0x506b99];
    return _0x468808;
  }, a0_0x506b(_0xce1b7b, _0x58651b);
}
(function (_0x2db3e7, _0x5a1443) {
  var _0xfd25a0 = a0_0x506b,
    _0x347395 = _0x2db3e7();
  while (!![]) {
    try {
      var _0x315e60 = parseInt(_0xfd25a0(0x1ea)) / 0x1 * (-parseInt(_0xfd25a0(0x1ed)) / 0x2) + parseInt(_0xfd25a0(0x1f3)) / 0x3 + parseInt(_0xfd25a0(0x209)) / 0x4 * (-parseInt(_0xfd25a0(0x1d5)) / 0x5) + parseInt(_0xfd25a0(0x1e4)) / 0x6 + parseInt(_0xfd25a0(0x1e3)) / 0x7 + -parseInt(_0xfd25a0(0x1fd)) / 0x8 * (parseInt(_0xfd25a0(0x1dd)) / 0x9) + -parseInt(_0xfd25a0(0x205)) / 0xa * (-parseInt(_0xfd25a0(0x206)) / 0xb);
      if (_0x315e60 === _0x5a1443) break;else _0x347395['push'](_0x347395['shift']());
    } catch (_0x1aaf2e) {
      _0x347395['push'](_0x347395['shift']());
    }
  }
})(a0_0x2089, 0x2ecb9);
function DataUntils() {}
DataUntils[a0_0x268a7d(0x1f9)] = function (_0x6a280a) {
  var _0x14d8dc = a0_0x268a7d,
    _0x41d661 = Array['prototype'][_0x14d8dc(0x1fe)][_0x14d8dc(0x1d4)](new Uint8Array(_0x6a280a), function (_0xe4e17e) {
      var _0x5732bd = _0x14d8dc;
      return ('00' + _0xe4e17e[_0x5732bd(0x203)](0x10))[_0x5732bd(0x1df)](-0x2);
    });
  return _0x41d661[_0x14d8dc(0x1de)]('');
}, DataUntils['hexToBytes'] = function (_0x55ec11) {
  var _0x2dc571 = a0_0x268a7d;
  for (var _0x59f026 = [], _0x56b6dc = 0x0; _0x56b6dc < _0x55ec11[_0x2dc571(0x1da)]; _0x56b6dc += 0x2) {
    _0x59f026[_0x2dc571(0x1fb)](parseInt(_0x55ec11[_0x2dc571(0x1f0)](_0x56b6dc, 0x2), 0x10));
  }
  var _0x2dff14 = new ArrayBuffer(_0x59f026[_0x2dc571(0x1da)]),
    _0x4c5463 = new DataView(_0x2dff14);
  for (var _0x204ba4 = 0x0; _0x204ba4 < _0x59f026[_0x2dc571(0x1da)]; _0x204ba4++) {
    var _0x1f1076 = _0x59f026[_0x204ba4];
    _0x4c5463['setInt8'](_0x204ba4, _0x1f1076);
  }
  return _0x2dff14;
}, DataUntils[a0_0x268a7d(0x204)] = function (_0x53bb08, _0x4fa746) {
  var _0x245f85 = a0_0x268a7d;
  var _0x2bd91e = _0x4fa746[_0x245f85(0x1da)];
  var _0x37de3a = new ArrayBuffer(0x7 + _0x2bd91e),
    _0x23ff5d = new DataView(_0x37de3a);
  _0x23ff5d[_0x245f85(0x1e6)](0x0, 0x55), _0x23ff5d[_0x245f85(0x1e6)](0x1, 0x55), _0x23ff5d['setInt8'](0x2, _0x53bb08), _0x23ff5d[_0x245f85(0x1e6)](0x3, _0x2bd91e);
  var _0x434c95 = _0x53bb08 ^ _0x2bd91e;
  for (var _0x5b2555 = 0x0; _0x5b2555 <= _0x4fa746['length']; _0x5b2555++) {
    var _0x42962b = _0x4fa746[_0x5b2555];
    _0x23ff5d[_0x245f85(0x1e6)](0x4 + _0x5b2555, _0x42962b), _0x434c95 ^= _0x42962b;
  }
  return _0x23ff5d['setInt8'](0x4 + _0x2bd91e, _0x434c95), _0x23ff5d[_0x245f85(0x1e6)](0x5 + _0x2bd91e, 0xaa), _0x23ff5d[_0x245f85(0x1e6)](0x6 + _0x2bd91e, 0xaa), _0x37de3a;
}, DataUntils[a0_0x268a7d(0x1f2)] = function (_0x5eec71) {
  var _0x33f6d1 = a0_0x268a7d;
  var _0x10f751 = arguments[_0x33f6d1(0x1da)];
  _0x10f751--;
  var _0x930364 = new ArrayBuffer(0x7 + _0x10f751),
    _0x2b1395 = new DataView(_0x930364);
  _0x2b1395[_0x33f6d1(0x1e6)](0x0, 0x55), _0x2b1395[_0x33f6d1(0x1e6)](0x1, 0x55), _0x2b1395[_0x33f6d1(0x1e6)](0x2, _0x5eec71), _0x2b1395[_0x33f6d1(0x1e6)](0x3, _0x10f751);
  var _0xf12d36 = _0x5eec71 ^ _0x10f751;
  for (var _0x3f8093 = 0x1; _0x3f8093 <= _0x10f751; _0x3f8093++) {
    var _0x1bb9c3 = arguments[_0x3f8093];
    _0x2b1395[_0x33f6d1(0x1e6)](0x3 + _0x3f8093, _0x1bb9c3), _0xf12d36 ^= _0x1bb9c3;
  }
  return _0x2b1395[_0x33f6d1(0x1e6)](0x4 + _0x10f751, _0xf12d36), _0x2b1395[_0x33f6d1(0x1e6)](0x5 + _0x10f751, 0xaa), _0x2b1395[_0x33f6d1(0x1e6)](0x6 + _0x10f751, 0xaa), _0x930364;
}, DataUntils[a0_0x268a7d(0x210)] = function (_0x519dff, _0x268c45) {
  var _0x17fc4b = a0_0x268a7d;
  var _0x3a5d3c = new ArrayBuffer(0x1 + _0x268c45[_0x17fc4b(0x1f5)]),
    _0x2117e4 = new DataView(_0x3a5d3c),
    _0x40b4df = new DataView(_0x268c45);
  var _0x2c9764 = 0x0;
  _0x2117e4['setInt8'](_0x2c9764, _0x519dff), _0x2c9764++;
  for (var _0x36db44 = 0x0; _0x36db44 < _0x268c45[_0x17fc4b(0x1f5)]; _0x36db44++) {
    _0x2117e4[_0x17fc4b(0x1e6)](_0x2c9764, _0x40b4df[_0x17fc4b(0x1e7)](_0x36db44)), _0x2c9764++;
  }
  return _0x3a5d3c;
}, DataUntils[a0_0x268a7d(0x1ec)] = function (_0x145da0, _0x1bda02, _0x57bf3a) {
  var _0x58c5fa = a0_0x268a7d;
  var _0x2bdbe1 = new ArrayBuffer(0xa),
    _0x4998de = new DataView(_0x2bdbe1);
  _0x4998de[_0x58c5fa(0x1d7)](0x0, 0x55), _0x4998de['setUint8'](0x1, 0x55), _0x4998de[_0x58c5fa(0x1d7)](0x2, 0x84), _0x4998de[_0x58c5fa(0x1d7)](0x3, 0x3);
  var _0x573996 = _0x1bda02 / 0x100,
    _0x474dcd = _0x1bda02 % 0x100;
  return _0x4998de[_0x58c5fa(0x1d7)](0x4, _0x573996), _0x4998de[_0x58c5fa(0x1d7)](0x5, _0x474dcd), _0x4998de[_0x58c5fa(0x1d7)](0x6, _0x57bf3a), _0x4998de[_0x58c5fa(0x1d7)](0x7, 0x84 ^ 0x3 ^ _0x573996 ^ _0x474dcd ^ _0x57bf3a), _0x4998de[_0x58c5fa(0x1d7)](0x8, 0xaa), _0x4998de[_0x58c5fa(0x1d7)](0x9, 0xaa), _0x2bdbe1;
}, DataUntils[a0_0x268a7d(0x1f8)] = function (_0x42529c, _0x733437, _0x523973, _0x1fce4d) {
  var _0x253b89 = a0_0x268a7d;
  var _0x39d32d = 0x83,
    _0xadcebb = 0x0,
    _0x4a4c63 = 0x0;
  var _0x48a60a = _0x733437 / 0x100,
    _0x48e1a7 = _0x733437 % 0x100;
  _0x4a4c63 = _0x48a60a ^ _0x48e1a7;
  var _0x516eed = new DataView(_0x42529c),
    _0x5af847 = 0x48;
  _0x1fce4d != null && _0x1fce4d > 0x0 && (_0x5af847 = _0x1fce4d);
  var _0x533fa8 = _0x5af847 / 0x3,
    _0x2286ce = _0x5af847 * 0x2 / 0x3;
  var _0x2e7fb7 = 0x0,
    _0x530270 = 0x0,
    _0x4a2027 = 0x0,
    _0x94fd41 = 0x0;
  var _0x27432e = new ArrayBuffer(_0x42529c[_0x253b89(0x1f5)] * 0x10),
    _0x26e085 = new DataView(_0x27432e);
  var _0x4bab8e = _0x4a4c63;
  var _0x28794e = new ArrayBuffer(_0x42529c['byteLength'] * 0x10 + 0xe),
    _0x2a4d14 = new ArrayBuffer(_0x42529c[_0x253b89(0x1f5)] * 0x10 + 0xe),
    _0x4a5db8 = new DataView(_0x28794e),
    _0x4d3aa5 = new DataView(_0x2a4d14);
  _0x4a5db8[_0x253b89(0x1d7)](0x0, 0x55), _0x4a5db8[_0x253b89(0x1d7)](0x1, 0x55), _0x4a5db8[_0x253b89(0x1d7)](0x2, 0x85), _0x4d3aa5[_0x253b89(0x1d7)](0x0, 0x55), _0x4d3aa5['setUint8'](0x1, 0x55), _0x4d3aa5[_0x253b89(0x1d7)](0x2, 0x83);
  for (var _0x3cef1c = 0x0; _0x3cef1c < _0x42529c[_0x253b89(0x1f5)]; _0x3cef1c++) {
    var _0x11d00a = _0x516eed['getUint8'](_0x3cef1c);
    _0x4a5db8[_0x253b89(0x1d7)](0xa + _0x3cef1c, _0x11d00a), _0x4a4c63 ^= _0x11d00a;
    if (_0x3cef1c < _0x533fa8) {
      if ((_0x11d00a & 0x80) == 0x80) {
        _0x2e7fb7++;
        var _0x377baa = _0x3cef1c * 0x8,
          _0x1815b1 = _0x377baa / 0x100,
          _0x142e29 = _0x377baa % 0x100;
        _0x4bab8e ^= _0x1815b1, _0x4bab8e ^= _0x142e29, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x1815b1), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x142e29), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x1815b1), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x142e29), _0x94fd41++;
      }
      if ((_0x11d00a & 0x40) == 0x40) {
        _0x2e7fb7++;
        var _0x239b71 = _0x3cef1c * 0x8 + 0x1,
          _0x56e1db = _0x239b71 / 0x100,
          _0x1b224f = _0x239b71 % 0x100;
        _0x4bab8e ^= _0x56e1db, _0x4bab8e ^= _0x1b224f, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x56e1db), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x1b224f), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x56e1db), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x1b224f), _0x94fd41++;
      }
      if ((_0x11d00a & 0x20) == 0x20) {
        _0x2e7fb7++;
        var _0x4b0a9c = _0x3cef1c * 0x8 + 0x2,
          _0x5681db = _0x4b0a9c / 0x100,
          _0x211c74 = _0x4b0a9c % 0x100;
        _0x4bab8e ^= _0x5681db, _0x4bab8e ^= _0x211c74, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x5681db), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x211c74), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x5681db), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x211c74), _0x94fd41++;
      }
      if ((_0x11d00a & 0x10) == 0x10) {
        _0x2e7fb7++;
        var _0x59b130 = _0x3cef1c * 0x8 + 0x3,
          _0x396dd2 = _0x59b130 / 0x100,
          _0x1ba8b = _0x59b130 % 0x100;
        _0x4bab8e ^= _0x396dd2, _0x4bab8e ^= _0x1ba8b, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x396dd2), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x1ba8b), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x396dd2), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x1ba8b), _0x94fd41++;
      }
      if ((_0x11d00a & 0x8) == 0x8) {
        _0x2e7fb7++;
        var _0x49acda = _0x3cef1c * 0x8 + 0x4,
          _0x2f8145 = _0x49acda / 0x100,
          _0x3f3a48 = _0x49acda % 0x100;
        _0x4bab8e ^= _0x2f8145, _0x4bab8e ^= _0x3f3a48, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x2f8145), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x3f3a48), _0x4d3aa5['setUint8'](0xa + _0x94fd41 * 0x2, _0x2f8145), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x3f3a48), _0x94fd41++;
      }
      if ((_0x11d00a & 0x4) == 0x4) {
        _0x2e7fb7++;
        var _0x2b1a2f = _0x3cef1c * 0x8 + 0x5,
          _0x153db8 = _0x2b1a2f / 0x100,
          _0x41d424 = _0x2b1a2f % 0x100;
        _0x4bab8e ^= _0x153db8, _0x4bab8e ^= _0x41d424, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x153db8), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x41d424), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x153db8), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x41d424), _0x94fd41++;
      }
      if ((_0x11d00a & 0x2) == 0x2) {
        _0x2e7fb7++;
        var _0x150a12 = _0x3cef1c * 0x8 + 0x6,
          _0x55f680 = _0x150a12 / 0x100,
          _0x56fe22 = _0x150a12 % 0x100;
        _0x4bab8e ^= _0x55f680, _0x4bab8e ^= _0x56fe22, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x55f680), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x56fe22), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x55f680), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x56fe22), _0x94fd41++;
      }
      if ((_0x11d00a & 0x1) == 0x1) {
        _0x2e7fb7++;
        var _0x3efe3c = _0x3cef1c * 0x8 + 0x7,
          _0x57ad19 = _0x3efe3c / 0x100,
          _0x106cbd = _0x3efe3c % 0x100;
        _0x4bab8e ^= _0x57ad19, _0x4bab8e ^= _0x106cbd, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x57ad19), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x106cbd), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x57ad19), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x106cbd), _0x94fd41++;
      }
    } else {
      if (_0x3cef1c < _0x2286ce) {
        if ((_0x11d00a & 0x80) == 0x80) {
          _0x530270++;
          var _0x4dd514 = _0x3cef1c * 0x8,
            _0x3a9f96 = _0x4dd514 / 0x100,
            _0x184fb7 = _0x4dd514 % 0x100;
          _0x4bab8e ^= _0x3a9f96, _0x4bab8e ^= _0x184fb7, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x3a9f96), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x184fb7), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x3a9f96), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x184fb7), _0x94fd41++;
        }
        if ((_0x11d00a & 0x40) == 0x40) {
          _0x530270++;
          var _0x4787b0 = _0x3cef1c * 0x8 + 0x1,
            _0x517712 = _0x4787b0 / 0x100,
            _0xe60b95 = _0x4787b0 % 0x100;
          _0x4bab8e ^= _0x517712, _0x4bab8e ^= _0xe60b95, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x517712), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0xe60b95), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x517712), _0x4d3aa5['setUint8'](0xb + _0x94fd41 * 0x2, _0xe60b95), _0x94fd41++;
        }
        if ((_0x11d00a & 0x20) == 0x20) {
          _0x530270++;
          var _0x24e0a7 = _0x3cef1c * 0x8 + 0x2,
            _0x1c44e3 = _0x24e0a7 / 0x100,
            _0x489402 = _0x24e0a7 % 0x100;
          _0x4bab8e ^= _0x1c44e3, _0x4bab8e ^= _0x489402, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x1c44e3), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x489402), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x1c44e3), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x489402), _0x94fd41++;
        }
        if ((_0x11d00a & 0x10) == 0x10) {
          _0x530270++;
          var _0x57e6d8 = _0x3cef1c * 0x8 + 0x3,
            _0x226b45 = parseInt(_0x57e6d8 / 0x100),
            _0x1f49f4 = _0x57e6d8 % 0x100;
          _0x4bab8e ^= _0x226b45, _0x4bab8e ^= _0x1f49f4, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x226b45), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x1f49f4), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x226b45), _0x4d3aa5['setUint8'](0xb + _0x94fd41 * 0x2, _0x1f49f4), _0x94fd41++;
        }
        if ((_0x11d00a & 0x8) == 0x8) {
          _0x530270++;
          var _0x25a247 = _0x3cef1c * 0x8 + 0x4,
            _0x4ccccf = _0x25a247 / 0x100,
            _0x2f9648 = _0x25a247 % 0x100;
          _0x4bab8e ^= _0x4ccccf, _0x4bab8e ^= _0x2f9648, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x4ccccf), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x2f9648), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x4ccccf), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x2f9648), _0x94fd41++;
        }
        if ((_0x11d00a & 0x4) == 0x4) {
          _0x530270++;
          var _0x1bba4b = _0x3cef1c * 0x8 + 0x5,
            _0x398d61 = _0x1bba4b / 0x100,
            _0x4f3663 = _0x1bba4b % 0x100;
          _0x4bab8e ^= _0x398d61, _0x4bab8e ^= _0x4f3663, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x398d61), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x4f3663), _0x4d3aa5['setUint8'](0xa + _0x94fd41 * 0x2, _0x398d61), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x4f3663), _0x94fd41++;
        }
        if ((_0x11d00a & 0x2) == 0x2) {
          _0x530270++;
          var _0x15516a = _0x3cef1c * 0x8 + 0x6,
            _0x44a7a4 = _0x15516a / 0x100,
            _0x3e77d6 = _0x15516a % 0x100;
          _0x4bab8e ^= _0x44a7a4, _0x4bab8e ^= _0x3e77d6, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x44a7a4), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x3e77d6), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x44a7a4), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x3e77d6), _0x94fd41++;
        }
        if ((_0x11d00a & 0x1) == 0x1) {
          _0x530270++;
          var _0x1e2566 = _0x3cef1c * 0x8 + 0x7,
            _0x2a9b8d = _0x1e2566 / 0x100,
            _0x4bedfd = _0x1e2566 % 0x100;
          _0x4bab8e ^= _0x2a9b8d, _0x4bab8e ^= _0x4bedfd, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x2a9b8d), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x4bedfd), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x2a9b8d), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x4bedfd), _0x94fd41++;
        }
      } else {
        if ((_0x11d00a & 0x80) == 0x80) {
          _0x4a2027++;
          var _0x10b919 = _0x3cef1c * 0x8,
            _0x4cf5d5 = _0x10b919 / 0x100,
            _0x563546 = _0x10b919 % 0x100;
          _0x4bab8e ^= _0x4cf5d5, _0x4bab8e ^= _0x563546, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x4cf5d5), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x563546), _0x4d3aa5['setUint8'](0xa + _0x94fd41 * 0x2, _0x4cf5d5), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x563546), _0x94fd41++;
        }
        if ((_0x11d00a & 0x40) == 0x40) {
          _0x4a2027++;
          var _0x41c682 = _0x3cef1c * 0x8 + 0x1,
            _0x4546de = _0x41c682 / 0x100,
            _0x396a38 = _0x41c682 % 0x100;
          _0x4bab8e ^= _0x4546de, _0x4bab8e ^= _0x396a38, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x4546de), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x396a38), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x4546de), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x396a38), _0x94fd41++;
        }
        if ((_0x11d00a & 0x20) == 0x20) {
          _0x4a2027++;
          var _0x5837af = _0x3cef1c * 0x8 + 0x2,
            _0x983b45 = _0x5837af / 0x100,
            _0x48df4a = _0x5837af % 0x100;
          _0x4bab8e ^= _0x983b45, _0x4bab8e ^= _0x48df4a, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x983b45), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x48df4a), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x983b45), _0x4d3aa5['setUint8'](0xb + _0x94fd41 * 0x2, _0x48df4a), _0x94fd41++;
        }
        if ((_0x11d00a & 0x10) == 0x10) {
          _0x4a2027++;
          var _0x42b968 = _0x3cef1c * 0x8 + 0x3,
            _0x2bb5f3 = _0x42b968 / 0x100,
            _0x4e00f3 = _0x42b968 % 0x100;
          _0x4bab8e ^= _0x2bb5f3, _0x4bab8e ^= _0x4e00f3, _0x26e085['setUint8'](_0x94fd41 * 0x2, _0x2bb5f3), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x4e00f3), _0x4d3aa5['setUint8'](0xa + _0x94fd41 * 0x2, _0x2bb5f3), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x4e00f3), _0x94fd41++;
        }
        if ((_0x11d00a & 0x8) == 0x8) {
          _0x4a2027++;
          var _0x232cf4 = _0x3cef1c * 0x8 + 0x4,
            _0x4d8b5b = _0x232cf4 / 0x100,
            _0x207254 = _0x232cf4 % 0x100;
          _0x4bab8e ^= _0x4d8b5b, _0x4bab8e ^= _0x207254, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x4d8b5b), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x207254), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x4d8b5b), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x207254), _0x94fd41++;
        }
        if ((_0x11d00a & 0x4) == 0x4) {
          _0x4a2027++;
          var _0x54a509 = _0x3cef1c * 0x8 + 0x5,
            _0x3680cc = _0x54a509 / 0x100,
            _0x3878af = _0x54a509 % 0x100;
          _0x4bab8e ^= _0x3680cc, _0x4bab8e ^= _0x3878af, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x3680cc), _0x26e085['setUint8'](_0x94fd41 * 0x2 + 0x1, _0x3878af), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0x3680cc), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x3878af), _0x94fd41++;
        }
        if ((_0x11d00a & 0x2) == 0x2) {
          _0x4a2027++;
          var _0x1f4bb = _0x3cef1c * 0x8 + 0x6,
            _0xb8699e = _0x1f4bb / 0x100,
            _0x41f812 = _0x1f4bb % 0x100;
          _0x4bab8e ^= _0xb8699e, _0x4bab8e ^= _0x41f812, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0xb8699e), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x41f812), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x94fd41 * 0x2, _0xb8699e), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x41f812), _0x94fd41++;
        }
        if ((_0x11d00a & 0x1) == 0x1) {
          _0x4a2027++;
          var _0x561afa = _0x3cef1c * 0x8 + 0x7,
            _0x154c56 = _0x561afa / 0x100,
            _0x36afa8 = _0x561afa % 0x100;
          _0x4bab8e ^= _0x154c56, _0x4bab8e ^= _0x36afa8, _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2, _0x154c56), _0x26e085[_0x253b89(0x1d7)](_0x94fd41 * 0x2 + 0x1, _0x36afa8), _0x4d3aa5['setUint8'](0xa + _0x94fd41 * 0x2, _0x154c56), _0x4d3aa5[_0x253b89(0x1d7)](0xb + _0x94fd41 * 0x2, _0x36afa8), _0x94fd41++;
        }
      }
    }
  }
  _0x4a5db8[_0x253b89(0x1d7)](0x4, _0x48a60a), _0x4a5db8[_0x253b89(0x1d7)](0x5, _0x48e1a7), _0x4a5db8[_0x253b89(0x1d7)](0x6, _0x2e7fb7), _0x4a5db8[_0x253b89(0x1d7)](0x7, _0x530270), _0x4a5db8[_0x253b89(0x1d7)](0x8, _0x4a2027), _0x4a5db8[_0x253b89(0x1d7)](0x9, _0x523973), _0x4d3aa5[_0x253b89(0x1d7)](0x4, _0x48a60a), _0x4d3aa5[_0x253b89(0x1d7)](0x5, _0x48e1a7), _0x4d3aa5[_0x253b89(0x1d7)](0x6, _0x2e7fb7), _0x4d3aa5[_0x253b89(0x1d7)](0x7, _0x530270), _0x4d3aa5[_0x253b89(0x1d7)](0x8, _0x4a2027), _0x4d3aa5[_0x253b89(0x1d7)](0x9, _0x523973);
  var _0x114bbd = _0x27432e['slice'](0x0, _0x94fd41 * 0x2);
  return _0x114bbd[_0x253b89(0x1f5)] > _0x42529c[_0x253b89(0x1f5)] ? (_0x39d32d = 0x85, _0xadcebb = _0x42529c[_0x253b89(0x1f5)] + 0x2 + 0x1 + 0x1 + 0x2 + 0x3 + 0x1 + 0x1 + 0x2) : (_0xadcebb = _0x114bbd['byteLength'] + 0x2 + 0x1 + 0x1 + 0x2 + 0x3 + 0x1 + 0x1 + 0x2, _0x4a4c63 = _0x4bab8e), _0x4a4c63 ^= _0x39d32d, _0x4a4c63 ^= _0xadcebb - 0x7, _0x4a4c63 ^= _0x2e7fb7, _0x4a4c63 ^= _0x530270, _0x4a4c63 ^= _0x4a2027, _0x4a4c63 ^= _0x523973, _0x39d32d == 0x85 ? (_0x4a5db8[_0x253b89(0x1d7)](0x3, _0xadcebb - 0x7), _0x4a5db8[_0x253b89(0x1d7)](0xa + _0x42529c[_0x253b89(0x1f5)], _0x4a4c63), _0x4a5db8['setUint8'](0xb + _0x42529c[_0x253b89(0x1f5)], 0xaa), _0x4a5db8[_0x253b89(0x1d7)](0xc + _0x42529c[_0x253b89(0x1f5)], 0xaa), _0x28794e[_0x253b89(0x1df)](0x0, _0xadcebb)) : (_0x4d3aa5['setUint8'](0x3, _0xadcebb - 0x7), _0x4d3aa5[_0x253b89(0x1d7)](0xa + _0x114bbd[_0x253b89(0x1f5)], _0x4a4c63), _0x4d3aa5['setUint8'](0xb + _0x114bbd[_0x253b89(0x1f5)], 0xaa), _0x4d3aa5[_0x253b89(0x1d7)](0xc + _0x114bbd[_0x253b89(0x1f5)], 0xaa), _0x2a4d14[_0x253b89(0x1df)](0x0, _0xadcebb));
}, DataUntils['dealImageData'] = function (_0x35acaa, _0x4f2719, _0x14731a) {
  var _0xf70a7e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x64;
  var _0x5d4952 = arguments.length > 4 ? arguments[4] : undefined;
  var _0x5238b4 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xc8;
  var _0x559992 = a0_0x268a7d;
  var _0x435f5d = _0x35acaa[_0x559992(0x1e1)],
    _0x374cc5 = _0x35acaa['height'],
    _0x27152c = _0x35acaa['data'];
  var _0x48ec53 = 0xff;
  var _0x304c8f = 0x8;
  var _0x36a235 = parseInt((_0x435f5d - 0x1) / _0x304c8f + 0x1);
  _0x5d4952 % 0xb4 == 0x5a && (_0x36a235 = parseInt((_0x374cc5 - 0x1) / _0x304c8f + 0x1));
  var _0x5891ff = new ArrayBuffer(_0x36a235),
    _0x59b27f = new DataView(_0x5891ff);
  var _0x3b4397 = null,
    _0x137530 = 0x0,
    _0x272309 = 0x0,
    _0x2c97b7 = !![],
    _0x3b530d = ![],
    _0x26dd12 = 0x0,
    _0x59488b = [],
    _0x1c657d = [];
  if (_0x5d4952 == 0x5a) {
    var _0x1af754 = (_0x374cc5 - 0x1) % 0x8;
    for (var _0x30ee53 = 0x0; _0x30ee53 < _0x435f5d; _0x30ee53++) {
      _0x26dd12 = 0x0;
      for (var _0x4df994 = _0x374cc5 - 0x1; _0x4df994 >= 0x0; _0x4df994--) {
        var _0x1854b7 = _0x4df994 * _0x435f5d + _0x30ee53,
          _0x5b5ff9 = _0x1854b7 * 0x4;
        var _0x1947e8 = _0x27152c[_0x5b5ff9] * 0.299 + _0x27152c[_0x5b5ff9 + 0x1] * 0.587 + _0x27152c[_0x5b5ff9 + 0x2] * 0.114;
        var _0x2795ed = 0x80;
        if (_0x4df994 % 0x8 == _0x1af754) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0x7f;else {
          if (_0x4df994 % 0x8 == (_0x1af754 - 0x1 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xbf;else {
            if (_0x4df994 % 0x8 == (_0x1af754 - 0x2 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xdf;else {
              if (_0x4df994 % 0x8 == (_0x1af754 - 0x3 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xef;else {
                if (_0x4df994 % 0x8 == (_0x1af754 - 0x4 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xf7;else {
                  if (_0x4df994 % 0x8 == (_0x1af754 - 0x5 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xfb;else {
                    if (_0x4df994 % 0x8 == (_0x1af754 - 0x6 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xfd;else _0x4df994 % 0x8 == (_0x1af754 - 0x7 + 0x8) % 0x8 && (_0x48ec53 &= _0x1947e8 < _0x2795ed ? 0xff : 0xfe, _0x59b27f['setUint8'](_0x26dd12, _0x48ec53), _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0), _0x48ec53 = 0xff, _0x26dd12++);
                  }
                }
              }
            }
          }
        }
        if (_0x4df994 == 0x0) {
          if (_0x4df994 % 0x8 != (_0x1af754 - 0x7 + 0x8) % 0x8) {
            var _0x459f21 = 0x8 - _0x374cc5 % 0x8;
            _0x48ec53 = _0x48ec53 >> _0x459f21 << _0x459f21, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x26dd12 = 0x0, _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0);
          }
          var _0x4eedb4 = _0x5891ff[_0x559992(0x1df)](0x0, _0x36a235);
          if (_0x3b4397 == null) _0x3b4397 = _0x4eedb4[_0x559992(0x1df)](0x0, _0x36a235), _0x272309++, _0x3b530d = _0x2c97b7;else {
            var _0x137042 = DataUntils[_0x559992(0x1f9)](_0x3b4397),
              _0x1ae3ce = DataUntils[_0x559992(0x1f9)](_0x4eedb4);
            var _0x2adbfe = ![],
              _0x3c7d1f = ![];
            if ((_0x272309 + _0x137530) % _0x5238b4 == 0x0 && _0x272309 > 0x0) {
              _0x3c7d1f = !![];
              var _0xc70ae8 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3b4397, _0x137530, _0x272309);
              _0x1c657d['push'](_0xc70ae8);
              var _0x3597f6 = _0x1c657d[_0x559992(0x1df)](0x0, _0x1c657d[_0x559992(0x1da)]),
                _0xe7f415 = DataUntils[_0x559992(0x1e5)](_0x3597f6, _0xf70a7e);
              _0x1c657d[_0x559992(0x1d9)](0x0, _0x1c657d[_0x559992(0x1da)]), _0x59488b[_0x559992(0x1fb)](_0xe7f415), _0x137530 += _0x272309, _0x272309 = 0x0;
            }
            _0x137042 == _0x1ae3ce && (_0x272309++, _0x2adbfe = !![]);
            if (!_0x2adbfe) {
              var _0x575e67 = null;
              if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                var _0x191470 = parseInt(_0x14731a['left'] / 0x8);
                _0x575e67 = _0x3b4397['slice'](_0x191470, _0x3b4397[_0x559992(0x1f5)] - _0x191470);
              }
              if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                var _0x6aa6ec = parseInt(_0x14731a[_0x559992(0x1d6)] / 0x8);
                _0x575e67 != null ? _0x575e67 = _0x575e67['slice'](0x0, _0x575e67[_0x559992(0x1f5)] - _0x6aa6ec) : _0x575e67 = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397['byteLength'] - _0x6aa6ec);
              }
              _0x575e67 == null && (_0x575e67 = _0x3b4397);
              if (_0x272309 > 0x0) {
                var _0x51f4bb = DataUntils[_0x559992(0x213)](_0x3b530d, _0x575e67, _0x137530, _0x272309, _0x4f2719);
                _0x1c657d[_0x559992(0x1fb)](_0x51f4bb);
              }
              _0x3b4397 = _0x4eedb4['slice'](0x0, _0x36a235), _0x3b530d = _0x2c97b7, _0x137530 += _0x272309, _0x272309 = 0x1;
            }
            if (_0x30ee53 == _0x435f5d - 0x1) {
              if (!_0x3c7d1f) {
                var _0x448868 = null;
                if (_0x14731a['left'] > 0x0) {
                  var _0x368387 = parseInt(_0x14731a['left'] / 0x8);
                  _0x448868 = _0x3b4397[_0x559992(0x1df)](_0x368387, _0x3b4397[_0x559992(0x1f5)] - _0x368387);
                }
                if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                  var _0x50e328 = parseInt(_0x14731a[_0x559992(0x1d6)] / 0x8);
                  _0x448868 != null ? _0x448868 = _0x448868['slice'](0x0, _0x448868[_0x559992(0x1f5)] - _0x50e328) : _0x448868 = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x50e328);
                }
                _0x448868 == null && (_0x448868 = _0x3b4397);
                var _0x1d0568 = DataUntils['doCreateBuffer'](_0x3b530d, _0x448868, _0x137530, _0x272309, _0x4f2719);
                _0x1c657d[_0x559992(0x1fb)](_0x1d0568);
                var _0x129be8 = DataUntils['deal120ByteArray'](_0x1c657d, _0xf70a7e);
                _0x59488b[_0x559992(0x1fb)](_0x129be8);
              }
            }
          }
          _0x2c97b7 = !![], _0x48ec53 = 0xff;
        }
      }
    }
    return _0x59488b;
  } else {
    if (_0x5d4952 == 0xb4) {
      var _0x5c2b65 = (_0x435f5d - 0x1) % 0x8;
      for (var _0x30ee53 = _0x374cc5 - 0x1; _0x30ee53 >= 0x0; _0x30ee53--) {
        _0x26dd12 = 0x0;
        for (var _0x4df994 = _0x435f5d - 0x1; _0x4df994 >= 0x0; _0x4df994--) {
          var _0x494ac9 = _0x4df994 + _0x30ee53 * _0x435f5d,
            _0x4c3a13 = _0x494ac9 * 0x4;
          var _0x1947e8 = _0x27152c[_0x4c3a13] * 0.299 + _0x27152c[_0x4c3a13 + 0x1] * 0.587 + _0x27152c[_0x4c3a13 + 0x2] * 0.114;
          var _0xbaf1a = 0x80;
          if (_0x4df994 % 0x8 == _0x5c2b65) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0x7f;else {
            if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x1 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xbf;else {
              if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x2 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xdf;else {
                if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x3 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xef;else {
                  if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x4 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xf7;else {
                    if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x5 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xfb;else {
                      if (_0x4df994 % 0x8 == (_0x5c2b65 - 0x6 + 0x8) % 0x8) _0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xfd;else _0x4df994 % 0x8 == (_0x5c2b65 - 0x7 + 0x8) % 0x8 && (_0x48ec53 &= _0x1947e8 < _0xbaf1a ? 0xff : 0xfe, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0), _0x48ec53 = 0xff, _0x26dd12++);
                    }
                  }
                }
              }
            }
          }
          if (_0x4df994 == 0x0) {
            if (_0x4df994 % 0x8 != (_0x5c2b65 - 0x7 + 0x8) % 0x8) {
              var _0x63573f = 0x8 - _0x435f5d % 0x8;
              _0x48ec53 = _0x48ec53 >> _0x63573f << _0x63573f, _0x59b27f['setUint8'](_0x26dd12, _0x48ec53), _0x26dd12 = 0x0, _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0);
            }
            var _0x28cd30 = _0x5891ff[_0x559992(0x1df)](0x0, _0x36a235);
            if (_0x3b4397 == null) _0x3b4397 = _0x28cd30[_0x559992(0x1df)](0x0, _0x36a235), _0x272309++, _0x3b530d = _0x2c97b7;else {
              var _0x8cf868 = DataUntils[_0x559992(0x1f9)](_0x3b4397),
                _0x36c0e1 = DataUntils[_0x559992(0x1f9)](_0x28cd30);
              var _0x2adbfe = ![],
                _0x3c7d1f = ![];
              if ((_0x272309 + _0x137530) % _0x5238b4 == 0x0 && _0x272309 > 0x0) {
                _0x3c7d1f = !![];
                var _0x428919 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3b4397, _0x137530, _0x272309);
                _0x1c657d[_0x559992(0x1fb)](_0x428919);
                var _0xb3f46d = _0x1c657d[_0x559992(0x1df)](0x0, _0x1c657d[_0x559992(0x1da)]),
                  _0x3a91c = DataUntils[_0x559992(0x1e5)](_0xb3f46d, _0xf70a7e);
                _0x1c657d[_0x559992(0x1d9)](0x0, _0x1c657d[_0x559992(0x1da)]), _0x59488b[_0x559992(0x1fb)](_0x3a91c), _0x137530 += _0x272309, _0x272309 = 0x0;
              }
              _0x8cf868 == _0x36c0e1 && (_0x272309++, _0x2adbfe = !![]);
              if (!_0x2adbfe) {
                var _0x5cac9d = null;
                if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                  var _0x312251 = parseInt(_0x14731a['left'] / 0x8);
                  _0x5cac9d = _0x3b4397[_0x559992(0x1df)](_0x312251, _0x3b4397[_0x559992(0x1f5)] - _0x312251);
                }
                if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                  var _0x5e341f = parseInt(_0x14731a['right'] / 0x8);
                  _0x5cac9d != null ? _0x5cac9d = _0x5cac9d[_0x559992(0x1df)](0x0, _0x5cac9d[_0x559992(0x1f5)] - _0x5e341f) : _0x5cac9d = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397['byteLength'] - _0x5e341f);
                }
                _0x5cac9d == null && (_0x5cac9d = _0x3b4397);
                if (_0x272309 > 0x0) {
                  var _0x598b06 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x5cac9d, _0x137530, _0x272309, _0x4f2719);
                  _0x1c657d[_0x559992(0x1fb)](_0x598b06);
                }
                _0x3b4397 = _0x28cd30[_0x559992(0x1df)](0x0, _0x36a235), _0x3b530d = _0x2c97b7, _0x137530 += _0x272309, _0x272309 = 0x1;
              }
              if (_0x30ee53 == 0x0) {
                if (!_0x3c7d1f) {
                  var _0x72a0d = null;
                  if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                    var _0x5a5210 = parseInt(_0x14731a[_0x559992(0x20b)] / 0x8);
                    _0x72a0d = _0x3b4397[_0x559992(0x1df)](_0x5a5210, _0x3b4397['byteLength'] - _0x5a5210);
                  }
                  if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                    var _0x2bfba1 = parseInt(_0x14731a[_0x559992(0x1d6)] / 0x8);
                    _0x72a0d != null ? _0x72a0d = _0x72a0d[_0x559992(0x1df)](0x0, _0x72a0d[_0x559992(0x1f5)] - _0x2bfba1) : _0x72a0d = _0x3b4397['slice'](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x2bfba1);
                  }
                  _0x72a0d == null && (_0x72a0d = _0x3b4397);
                  var _0x38fe51 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x72a0d, _0x137530, _0x272309, _0x4f2719);
                  _0x1c657d[_0x559992(0x1fb)](_0x38fe51);
                  var _0x5234d7 = DataUntils[_0x559992(0x1e5)](_0x1c657d, _0xf70a7e);
                  _0x59488b[_0x559992(0x1fb)](_0x5234d7);
                }
              }
            }
            _0x2c97b7 = !![], _0x48ec53 = 0xff;
          }
        }
      }
      return _0x59488b;
    } else {
      if (_0x5d4952 == 0x10e) {
        for (var _0x30ee53 = _0x435f5d - 0x1; _0x30ee53 >= 0x0; _0x30ee53--) {
          _0x26dd12 = 0x0;
          for (var _0x4df994 = 0x0; _0x4df994 < _0x374cc5; _0x4df994++) {
            var _0x2582a2 = _0x4df994 * _0x435f5d + _0x30ee53,
              _0x37a21c = _0x2582a2 * 0x4;
            var _0x1947e8 = _0x27152c[_0x37a21c] * 0.299 + _0x27152c[_0x37a21c + 0x1] * 0.587 + _0x27152c[_0x37a21c + 0x2] * 0.114;
            var _0x43f2c2 = 0x80;
            if (_0x4df994 % 0x8 == 0x0) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0x7f;else {
              if (_0x4df994 % 0x8 == 0x1) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xbf;else {
                if (_0x4df994 % 0x8 == 0x2) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xdf;else {
                  if (_0x4df994 % 0x8 == 0x3) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xef;else {
                    if (_0x4df994 % 0x8 == 0x4) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xf7;else {
                      if (_0x4df994 % 0x8 == 0x5) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xfb;else {
                        if (_0x4df994 % 0x8 == 0x6) _0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xfd;else _0x4df994 % 0x8 == 0x7 && (_0x48ec53 &= _0x1947e8 < _0x43f2c2 ? 0xff : 0xfe, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0), _0x48ec53 = 0xff, _0x26dd12++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x4df994 == _0x374cc5 - 0x1) {
              if (_0x4df994 % 0x8 != 0x7) {
                var _0x27288c = 0x8 - _0x374cc5 % 0x8;
                _0x48ec53 = _0x48ec53 >> _0x27288c << _0x27288c, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x26dd12 = 0x0, _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0);
              }
              var _0x88bada = _0x5891ff[_0x559992(0x1df)](0x0, _0x36a235);
              if (_0x3b4397 == null) _0x3b4397 = _0x88bada[_0x559992(0x1df)](0x0, _0x36a235), _0x272309++, _0x3b530d = _0x2c97b7;else {
                var _0x54a800 = DataUntils[_0x559992(0x1f9)](_0x3b4397),
                  _0x514b36 = DataUntils['ab2hex'](_0x88bada);
                var _0x2adbfe = ![],
                  _0x3c7d1f = ![];
                if ((_0x272309 + _0x137530) % _0x5238b4 == 0x0 && _0x272309 > 0x0) {
                  _0x3c7d1f = !![];
                  var _0x133830 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3b4397, _0x137530, _0x272309);
                  _0x1c657d[_0x559992(0x1fb)](_0x133830);
                  var _0x4efc3c = _0x1c657d['slice'](0x0, _0x1c657d['length']),
                    _0x52cbaa = DataUntils[_0x559992(0x1e5)](_0x4efc3c, _0xf70a7e);
                  _0x1c657d[_0x559992(0x1d9)](0x0, _0x1c657d['length']), _0x59488b[_0x559992(0x1fb)](_0x52cbaa), _0x137530 += _0x272309, _0x272309 = 0x0;
                }
                _0x54a800 == _0x514b36 && (_0x272309++, _0x2adbfe = !![]);
                if (!_0x2adbfe) {
                  var _0xd632d = null;
                  if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                    var _0x2f2515 = parseInt(_0x14731a['left'] / 0x8);
                    _0xd632d = _0x3b4397[_0x559992(0x1df)](_0x2f2515, _0x3b4397[_0x559992(0x1f5)] - _0x2f2515);
                  }
                  if (_0x14731a['right'] > 0x0) {
                    var _0x2e8234 = parseInt(_0x14731a['right'] / 0x8);
                    _0xd632d != null ? _0xd632d = _0xd632d['slice'](0x0, _0xd632d[_0x559992(0x1f5)] - _0x2e8234) : _0xd632d = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x2e8234);
                  }
                  _0xd632d == null && (_0xd632d = _0x3b4397);
                  if (_0x272309 > 0x0) {
                    var _0x4098b0 = DataUntils['doCreateBuffer'](_0x3b530d, _0xd632d, _0x137530, _0x272309, _0x4f2719);
                    _0x1c657d[_0x559992(0x1fb)](_0x4098b0);
                  }
                  _0x3b4397 = _0x88bada['slice'](0x0, _0x36a235), _0x3b530d = _0x2c97b7, _0x137530 += _0x272309, _0x272309 = 0x1;
                }
                if (_0x30ee53 == 0x0) {
                  if (!_0x3c7d1f) {
                    var _0x25c31e = null;
                    if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                      var _0x3e9e68 = parseInt(_0x14731a[_0x559992(0x20b)] / 0x8);
                      _0x25c31e = _0x3b4397[_0x559992(0x1df)](_0x3e9e68, _0x3b4397[_0x559992(0x1f5)] - _0x3e9e68);
                    }
                    if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                      var _0x2bc6e8 = parseInt(_0x14731a['right'] / 0x8);
                      _0x25c31e != null ? _0x25c31e = _0x25c31e[_0x559992(0x1df)](0x0, _0x25c31e[_0x559992(0x1f5)] - _0x2bc6e8) : _0x25c31e = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x2bc6e8);
                    }
                    _0x25c31e == null && (_0x25c31e = _0x3b4397);
                    var _0x3869ef = DataUntils[_0x559992(0x213)](_0x3b530d, _0x25c31e, _0x137530, _0x272309, _0x4f2719);
                    _0x1c657d[_0x559992(0x1fb)](_0x3869ef);
                    var _0x1ccca1 = DataUntils[_0x559992(0x1e5)](_0x1c657d, _0xf70a7e);
                    _0x59488b[_0x559992(0x1fb)](_0x1ccca1);
                  }
                }
              }
              _0x2c97b7 = !![], _0x48ec53 = 0xff;
            }
          }
        }
        return _0x59488b;
      } else {
        if (_0x5d4952 == 0x0) {
          for (var _0x30ee53 = 0x0; _0x30ee53 < _0x374cc5; _0x30ee53++) {
            _0x26dd12 = 0x0;
            for (var _0x4df994 = 0x0; _0x4df994 < _0x435f5d; _0x4df994++) {
              var _0x70eea4 = _0x4df994 + _0x30ee53 * _0x435f5d,
                _0x1299f8 = _0x70eea4 * 0x4;
              var _0x1947e8 = _0x27152c[_0x1299f8] * 0.299 + _0x27152c[_0x1299f8 + 0x1] * 0.587 + _0x27152c[_0x1299f8 + 0x2] * 0.114;
              var _0x482a0c = 0x80;
              if (_0x4df994 % 0x8 == 0x0) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0x7f;else {
                if (_0x4df994 % 0x8 == 0x1) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xbf;else {
                  if (_0x4df994 % 0x8 == 0x2) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xdf;else {
                    if (_0x4df994 % 0x8 == 0x3) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xef;else {
                      if (_0x4df994 % 0x8 == 0x4) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xf7;else {
                        if (_0x4df994 % 0x8 == 0x5) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xfb;else {
                          if (_0x4df994 % 0x8 == 0x6) _0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xfd;else _0x4df994 % 0x8 == 0x7 && (_0x48ec53 &= _0x1947e8 < _0x482a0c ? 0xff : 0xfe, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0), _0x48ec53 = 0xff, _0x26dd12++);
                        }
                      }
                    }
                  }
                }
              }
              if (_0x4df994 == _0x435f5d - 0x1) {
                if (_0x4df994 % 0x8 != 0x7) {
                  var _0x360651 = 0x8 - _0x435f5d % 0x8;
                  _0x48ec53 = _0x48ec53 >> _0x360651 << _0x360651, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x26dd12 = 0x0, _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0);
                }
                var _0x524aae = _0x5891ff[_0x559992(0x1df)](0x0, _0x36a235);
                if (_0x3b4397 == null) _0x3b4397 = _0x524aae['slice'](0x0, _0x36a235), _0x272309++, _0x3b530d = _0x2c97b7;else {
                  var _0x362bb2 = DataUntils[_0x559992(0x1f9)](_0x3b4397),
                    _0x225bff = DataUntils[_0x559992(0x1f9)](_0x524aae);
                  var _0x2adbfe = ![],
                    _0x3c7d1f = ![];
                  if ((_0x272309 + _0x137530) % _0x5238b4 == 0x0 && _0x272309 > 0x0) {
                    _0x3c7d1f = !![];
                    var _0x6efb33 = DataUntils['doCreateBuffer'](_0x3b530d, _0x3b4397, _0x137530, _0x272309);
                    _0x1c657d[_0x559992(0x1fb)](_0x6efb33);
                    var _0x5a7b7b = _0x1c657d[_0x559992(0x1df)](0x0, _0x1c657d[_0x559992(0x1da)]),
                      _0x330dde = DataUntils[_0x559992(0x1e5)](_0x5a7b7b, _0xf70a7e);
                    _0x1c657d['splice'](0x0, _0x1c657d['length']), _0x59488b[_0x559992(0x1fb)](_0x330dde), _0x137530 += _0x272309, _0x272309 = 0x0;
                  }
                  _0x362bb2 == _0x225bff && (_0x272309++, _0x2adbfe = !![]);
                  if (!_0x2adbfe) {
                    var _0x21bf00 = null;
                    if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                      var _0x410059 = parseInt(_0x14731a[_0x559992(0x20b)] / 0x8);
                      _0x21bf00 = _0x3b4397[_0x559992(0x1df)](_0x410059, _0x3b4397[_0x559992(0x1f5)] - _0x410059);
                    }
                    if (_0x14731a['right'] > 0x0) {
                      var _0x4c92d1 = parseInt(_0x14731a['right'] / 0x8);
                      _0x21bf00 != null ? _0x21bf00 = _0x21bf00[_0x559992(0x1df)](0x0, _0x21bf00['byteLength'] - _0x4c92d1) : _0x21bf00 = _0x3b4397['slice'](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x4c92d1);
                    }
                    _0x21bf00 == null && (_0x21bf00 = _0x3b4397);
                    if (_0x272309 > 0x0) {
                      var _0x51b144 = DataUntils['doCreateBuffer'](_0x3b530d, _0x21bf00, _0x137530, _0x272309, _0x4f2719);
                      _0x1c657d[_0x559992(0x1fb)](_0x51b144);
                    }
                    _0x3b4397 = _0x524aae['slice'](0x0, _0x36a235), _0x3b530d = _0x2c97b7, _0x137530 += _0x272309, _0x272309 = 0x1;
                  }
                  if (_0x30ee53 == _0x374cc5 - 0x1) {
                    if (!_0x3c7d1f) {
                      var _0x3882d8 = null;
                      if (_0x14731a['left'] > 0x0) {
                        var _0x229291 = parseInt(_0x14731a['left'] / 0x8);
                        _0x3882d8 = _0x3b4397[_0x559992(0x1df)](_0x229291, _0x3b4397[_0x559992(0x1f5)] - _0x229291);
                      }
                      if (_0x14731a['right'] > 0x0) {
                        var _0x5db01e = parseInt(_0x14731a[_0x559992(0x1d6)] / 0x8);
                        _0x3882d8 != null ? _0x3882d8 = _0x3882d8[_0x559992(0x1df)](0x0, _0x3882d8[_0x559992(0x1f5)] - _0x5db01e) : _0x3882d8 = _0x3b4397['slice'](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x5db01e);
                      }
                      _0x3882d8 == null && (_0x3882d8 = _0x3b4397);
                      var _0x54ab64 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3882d8, _0x137530, _0x272309, _0x4f2719);
                      _0x1c657d[_0x559992(0x1fb)](_0x54ab64);
                      var _0x4cc015 = DataUntils['deal120ByteArray'](_0x1c657d, _0xf70a7e);
                      _0x59488b[_0x559992(0x1fb)](_0x4cc015);
                    }
                  }
                }
                _0x2c97b7 = !![], _0x48ec53 = 0xff;
              }
            }
          }
          return _0x59488b;
        }
      }
    }
  }
  for (var _0x30ee53 = 0x0; _0x30ee53 < _0x27152c[_0x559992(0x1da)] - 0x3; _0x30ee53 += 0x4) {
    var _0x1947e8 = _0x27152c[_0x30ee53] * 0.299 + _0x27152c[_0x30ee53 + 0x1] * 0.587 + _0x27152c[_0x30ee53 + 0x2] * 0.114;
    var _0x85ebba = 0x80;
    if (_0x30ee53 % 0x20 == 0x0) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0x7f;else {
      if (_0x30ee53 % 0x20 == 0x4) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xbf;else {
        if (_0x30ee53 % 0x20 == 0x8) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xdf;else {
          if (_0x30ee53 % 0x20 == 0xc) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xef;else {
            if (_0x30ee53 % 0x20 == 0x10) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xf7;else {
              if (_0x30ee53 % 0x20 == 0x14) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xfb;else {
                if (_0x30ee53 % 0x20 == 0x18) _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xfd;else {
                  if (_0x30ee53 % 0x20 == 0x1c) {
                    _0x48ec53 &= _0x1947e8 < _0x85ebba ? 0xff : 0xfe, _0x59b27f[_0x559992(0x1d7)](_0x26dd12, _0x48ec53), _0x26dd12++;
                    _0x2c97b7 && (_0x2c97b7 = _0x48ec53 == 0x0);
                    if ((_0x30ee53 + 0x4) % (_0x435f5d * 0x4) == 0x0) {
                      _0x26dd12 = 0x0;
                      _0x435f5d % _0x304c8f > 0x0 && _0x59b27f[_0x559992(0x1d7)](_0x36a235 - 0x1, 0x0);
                      var _0x949945 = _0x5891ff[_0x559992(0x1df)](0x0, _0x36a235);
                      if (_0x3b4397 == null) _0x3b4397 = _0x949945[_0x559992(0x1df)](0x0, _0x36a235), _0x272309++, _0x3b530d = _0x2c97b7;else {
                        var _0x33516a = DataUntils['ab2hex'](_0x3b4397),
                          _0x278655 = DataUntils[_0x559992(0x1f9)](_0x949945);
                        var _0x2adbfe = ![];
                        _0x33516a == _0x278655 && (_0x272309++, _0x2adbfe = !![]);
                        var _0x3c7d1f = ![];
                        if ((_0x272309 + _0x137530) % _0x5238b4 == 0x0 && _0x272309 > 0x0) {
                          _0x3c7d1f = !![];
                          var _0x1d2d36 = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3b4397, _0x137530, _0x272309);
                          _0x1c657d['push'](_0x1d2d36);
                          var _0x16826a = _0x1c657d[_0x559992(0x1df)](0x0, _0x1c657d[_0x559992(0x1da)]),
                            _0x5b68c6 = DataUntils[_0x559992(0x1e5)](_0x16826a, _0xf70a7e);
                          _0x1c657d[_0x559992(0x1d9)](0x0, _0x1c657d['length']), _0x59488b[_0x559992(0x1fb)](_0x5b68c6), _0x137530 += _0x272309, _0x272309 = 0x0;
                        }
                        if (!_0x2adbfe) {
                          var _0x3a64c7 = null;
                          if (_0x14731a['left'] > 0x0) {
                            var _0x172b21 = parseInt(_0x14731a[_0x559992(0x20b)] / 0x8);
                            _0x3a64c7 = _0x3b4397['slice'](_0x172b21, _0x3b4397[_0x559992(0x1f5)] - _0x172b21);
                          }
                          if (_0x14731a[_0x559992(0x1d6)] > 0x0) {
                            var _0x59a07a = parseInt(_0x14731a[_0x559992(0x1d6)] / 0x8);
                            _0x3a64c7 != null ? _0x3a64c7 = _0x3a64c7[_0x559992(0x1df)](0x0, _0x3a64c7[_0x559992(0x1f5)] - _0x59a07a) : _0x3a64c7 = _0x3b4397['slice'](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x59a07a);
                          }
                          _0x3a64c7 == null && (_0x3a64c7 = _0x3b4397);
                          if (_0x272309 > 0x0) {
                            var _0x461d3f = DataUntils['doCreateBuffer'](_0x3b530d, _0x3a64c7, _0x137530, _0x272309, _0x4f2719);
                            _0x1c657d['push'](_0x461d3f);
                          }
                          _0x3b4397 = _0x949945[_0x559992(0x1df)](0x0, _0x36a235), _0x3b530d = _0x2c97b7, _0x137530 += _0x272309, _0x272309 = 0x1;
                        }
                        if (_0x30ee53 + 0x4 == _0x27152c['length']) {
                          if (!_0x3c7d1f) {
                            var _0x3f4174 = null;
                            if (_0x14731a[_0x559992(0x20b)] > 0x0) {
                              var _0x1800d7 = parseInt(_0x14731a[_0x559992(0x20b)] / 0x8);
                              _0x3f4174 = _0x3b4397[_0x559992(0x1df)](_0x1800d7, _0x3b4397[_0x559992(0x1f5)] - _0x1800d7);
                            }
                            if (_0x14731a['right'] > 0x0) {
                              var _0x5bf09e = parseInt(_0x14731a['right'] / 0x8);
                              _0x3f4174 != null ? _0x3f4174 = _0x3f4174[_0x559992(0x1df)](0x0, _0x3f4174[_0x559992(0x1f5)] - _0x5bf09e) : _0x3f4174 = _0x3b4397[_0x559992(0x1df)](0x0, _0x3b4397[_0x559992(0x1f5)] - _0x5bf09e);
                            }
                            _0x3f4174 == null && (_0x3f4174 = _0x3b4397);
                            var _0x183c6e = DataUntils[_0x559992(0x213)](_0x3b530d, _0x3f4174, _0x137530, _0x272309, _0x4f2719);
                            _0x1c657d[_0x559992(0x1fb)](_0x183c6e);
                            var _0x3ce97f = DataUntils[_0x559992(0x1e5)](_0x1c657d, _0xf70a7e);
                            _0x59488b['push'](_0x3ce97f);
                          }
                        }
                      }
                      _0x2c97b7 = !![];
                    }
                    _0x48ec53 = 0xff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return _0x59488b;
}, DataUntils[a0_0x268a7d(0x1e5)] = function (_0x46a080, _0xa593d7) {
  var _0x166262 = a0_0x268a7d;
  var _0x3311a8 = [];
  var _0x236860 = _0xa593d7,
    _0x549b77 = new ArrayBuffer(_0x236860),
    _0x29802e = new DataView(_0x549b77),
    _0x14e4a1 = 0x0;
  for (var _0x281e6c = 0x0; _0x281e6c < _0x46a080[_0x166262(0x1da)]; _0x281e6c++) {
    var _0x335f25 = _0x46a080[_0x281e6c],
      _0x558317 = new DataView(_0x335f25);
    for (var _0x128edf = 0x0; _0x128edf < _0x335f25[_0x166262(0x1f5)]; _0x128edf++) {
      _0x29802e[_0x166262(0x1d7)](_0x14e4a1, _0x558317[_0x166262(0x1e7)](_0x128edf));
      var _0xa4b8a6 = ![];
      _0x14e4a1 % _0x236860 == _0x236860 - 0x1 && _0x14e4a1 > 0x0 ? (_0x14e4a1 = 0x0, _0xa4b8a6 = !![], _0x3311a8[_0x166262(0x1fb)](_0x549b77[_0x166262(0x1df)](0x0, _0x236860))) : _0x14e4a1++, _0x281e6c == _0x46a080[_0x166262(0x1da)] - 0x1 && _0x128edf == _0x335f25['byteLength'] - 0x1 && !_0xa4b8a6 && _0x3311a8['push'](_0x549b77[_0x166262(0x1df)](0x0, _0x14e4a1));
    }
  }
  return _0x3311a8;
}, DataUntils[a0_0x268a7d(0x213)] = function (_0x49ce10, _0x47960e, _0x42b8cd, _0x5dddb4, _0x67e3fb) {
  var _0x34b39c = a0_0x268a7d;
  return _0x49ce10 ? DataUntils[_0x34b39c(0x1ec)](_0x47960e, _0x42b8cd, _0x5dddb4) : DataUntils['createRowData'](_0x47960e, _0x42b8cd, _0x5dddb4, _0x67e3fb);
}, DataUntils['compareImageData'] = function (_0x25d2c8, _0x4efdf2, _0x19ca02) {
  var _0x5eb54c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x64;
  var _0x4f667a = arguments.length > 4 ? arguments[4] : undefined;
  var _0x157c69 = arguments.length > 5 ? arguments[5] : undefined;
  var _0x3e4c3d = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0xc8;
  var _0x32b5ef = a0_0x268a7d;
  if (_0x157c69 == null) {
    var _0x1a549b = DataUntils[_0x32b5ef(0x1d8)](_0x25d2c8, _0x4efdf2, _0x19ca02, _0x5eb54c, _0x4f667a, _0x3e4c3d);
    return {
      '0': _0x1a549b
    };
  }
  var _0x33c35f = _0x25d2c8[_0x32b5ef(0x1e1)],
    _0x44a86e = _0x25d2c8[_0x32b5ef(0x1f7)],
    _0x409225 = _0x25d2c8['data'];
  var _0x348852 = 0xff;
  var _0x3f57b8 = 0x8;
  var _0x422f63 = parseInt((_0x33c35f - 0x1) / _0x3f57b8 + 0x1);
  _0x4f667a % 0xb4 == 0x5a && (_0x422f63 = parseInt((_0x44a86e - 0x1) / _0x3f57b8 + 0x1));
  var _0x339970 = new ArrayBuffer(_0x422f63),
    _0x3d9184 = new DataView(_0x339970);
  var _0x4463e1 = null,
    _0x4ece71 = 0x0,
    _0x1d9c84 = 0x0,
    _0x421cdb = !![],
    _0x446319 = ![],
    _0x59a8b8 = 0x0,
    _0x1731df = [],
    _0x4667a6 = [],
    _0x8ec8b7 = 0x0,
    _0x4d04c1 = ![],
    _0x2904a7 = null,
    _0x2dc54c = 0x0,
    _0x39056c = 0x0,
    _0x2b510f = 0x0;
  var _0x1dca04 = _0x157c69[_0x32b5ef(0x212)];
  var _0x3cfd48 = [],
    _0x43489e = [],
    _0x4906d4 = 0xff;
  if (_0x4f667a == 0x5a) {
    var _0x23d5e8 = (_0x44a86e - 0x1) % 0x8;
    for (var _0xca2525 = 0x0; _0xca2525 < _0x33c35f; _0xca2525++) {
      _0x59a8b8 = 0x0;
      var _0xb317a8 = !![];
      for (var _0x4148c2 = _0x44a86e - 0x1; _0x4148c2 >= 0x0; _0x4148c2--) {
        var _0x399ce8 = _0x4148c2 * _0x33c35f + _0xca2525,
          _0x68928d = _0x399ce8 * 0x4;
        var _0x49ad50 = _0x409225[_0x68928d] * 0.299 + _0x409225[_0x68928d + 0x1] * 0.587 + _0x409225[_0x68928d + 0x2] * 0.114,
          _0x10ecfa = _0x1dca04[_0x68928d] * 0.299 + _0x1dca04[_0x68928d + 0x1] * 0.587 + _0x1dca04[_0x68928d + 0x2] * 0.114;
        var _0x1787d4 = 0x80;
        if (_0x4148c2 % 0x8 == _0x23d5e8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0x7f, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0x7f;else {
          if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x1 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xbf, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xbf;else {
            if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x2 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xdf, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xdf;else {
              if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x3 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xef, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xef;else {
                if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x4 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xf7, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xf7;else {
                  if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x5 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xfb, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xfb;else {
                    if (_0x4148c2 % 0x8 == (_0x23d5e8 - 0x6 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xfd, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xfd;else _0x4148c2 % 0x8 == (_0x23d5e8 - 0x7 + 0x8) % 0x8 && (_0x348852 &= _0x49ad50 < _0x1787d4 ? 0xff : 0xfe, _0x4906d4 &= _0x10ecfa < _0x1787d4 ? 0xff : 0xfe, _0x3d9184['setUint8'](_0x59a8b8, _0x348852), _0x421cdb && (_0x421cdb = _0x348852 == 0x0), _0xb317a8 && (_0xb317a8 = _0x348852 == _0x4906d4), _0x4906d4 = 0xff, _0x348852 = 0xff, _0x59a8b8++);
                  }
                }
              }
            }
          }
        }
        if (_0x4148c2 == 0x0) {
          if (_0x4148c2 % 0x8 != (_0x23d5e8 - 0x7 + 0x8) % 0x8) {
            var _0x446914 = 0x8 - _0x44a86e % 0x8;
            _0x348852 = _0x348852 >> _0x446914 << _0x446914, _0x3d9184['setUint8'](_0x59a8b8, _0x348852), _0x59a8b8 = 0x0, _0x421cdb && (_0x421cdb = _0x348852 == 0x0);
          }
          if (_0xb317a8) {
            if (_0xca2525 == _0x33c35f - 0x1) {
              if (_0x2904a7 != null) {
                var _0x3a4000 = DataUntils['doCreateBuffer'](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                _0x3cfd48['push'](_0x3a4000);
              }
              var _0x19e986 = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
              _0x3cfd48 = [], _0x19e986[_0x32b5ef(0x1da)] > 0x0 && _0x43489e['push'](_0x19e986), _0x2904a7 = null;
            }
          } else {
            if (_0x8ec8b7 == 0x0) {
              _0x2dc54c = _0xca2525, _0x8ec8b7++, _0x39056c++, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
              ;
              _0x4d04c1 = _0x421cdb;
            } else {
              _0x8ec8b7++;
              if (_0x2dc54c + _0x39056c == _0xca2525) {
                if (_0x2904a7 == null) {
                  _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                  ;
                  _0x4d04c1 = _0x421cdb, _0x2dc54c = _0xca2525, _0x39056c = 0x1;
                } else {
                  var _0x5e38fb = DataUntils[_0x32b5ef(0x1f9)](_0x2904a7),
                    _0x262848 = DataUntils[_0x32b5ef(0x1f9)](_0x339970);
                  if (_0x5e38fb == _0x262848) _0x39056c++;else {
                    var _0x5f047f = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                    _0x3cfd48[_0x32b5ef(0x1fb)](_0x5f047f), _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                    ;
                    _0x4d04c1 = _0x421cdb;
                  }
                }
              } else {
                if (_0x2904a7 == null) {
                  _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970['slice'](0x0, _0x422f63);
                  ;
                  _0x4d04c1 = _0x421cdb;
                } else {
                  var _0x3e1946 = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                  _0x3cfd48[_0x32b5ef(0x1fb)](_0x3e1946), _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                  ;
                  _0x4d04c1 = _0x421cdb;
                }
              }
              if (_0x39056c > 0x0 && _0x39056c % _0x3e4c3d == 0x0 || _0xca2525 == _0x33c35f - 0x1 || _0x8ec8b7 % _0x3e4c3d == 0x0) {
                if (_0x2904a7 != null) {
                  var _0x57afd1 = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                  _0x3cfd48[_0x32b5ef(0x1fb)](_0x57afd1);
                }
                var _0x2912ea = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                _0x3cfd48 = [], _0x2912ea[_0x32b5ef(0x1da)] > 0x0 && _0x43489e[_0x32b5ef(0x1fb)](_0x2912ea), _0x2904a7 = null;
              }
            }
          }
          var _0x1b9100 = _0x339970['slice'](0x0, _0x422f63);
          if (_0x4463e1 == null) _0x4463e1 = _0x1b9100[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x1d9c84++, _0x446319 = _0x421cdb;else {
            var _0x270d69 = DataUntils[_0x32b5ef(0x1f9)](_0x4463e1),
              _0x40285a = DataUntils['ab2hex'](_0x1b9100);
            var _0x2fa68d = ![],
              _0x51cc28 = ![];
            if ((_0x1d9c84 + _0x4ece71) % _0x3e4c3d == 0x0 && _0x1d9c84 > 0x0) {
              _0x51cc28 = !![];
              var _0x113785 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x4463e1, _0x4ece71, _0x1d9c84);
              _0x4667a6['push'](_0x113785);
              var _0x49ee80 = _0x4667a6[_0x32b5ef(0x1df)](0x0, _0x4667a6[_0x32b5ef(0x1da)]),
                _0x32e85c = DataUntils[_0x32b5ef(0x1e5)](_0x49ee80, _0x5eb54c);
              _0x4667a6['splice'](0x0, _0x4667a6[_0x32b5ef(0x1da)]), _0x1731df[_0x32b5ef(0x1fb)](_0x32e85c), _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x0;
            }
            _0x270d69 == _0x40285a && (_0x1d9c84++, _0x2fa68d = !![]);
            if (!_0x2fa68d) {
              var _0x91aa6f = null;
              if (_0x19ca02['left'] > 0x0) {
                var _0x5d24d4 = parseInt(_0x19ca02[_0x32b5ef(0x20b)] / 0x8);
                _0x91aa6f = _0x4463e1[_0x32b5ef(0x1df)](_0x5d24d4, _0x4463e1[_0x32b5ef(0x1f5)] - _0x5d24d4);
              }
              if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                var _0x144167 = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                _0x91aa6f != null ? _0x91aa6f = _0x91aa6f[_0x32b5ef(0x1df)](0x0, _0x91aa6f['byteLength'] - _0x144167) : _0x91aa6f = _0x4463e1['slice'](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x144167);
              }
              _0x91aa6f == null && (_0x91aa6f = _0x4463e1);
              if (_0x1d9c84 > 0x0) {
                var _0x5322ee = DataUntils['doCreateBuffer'](_0x446319, _0x91aa6f, _0x4ece71, _0x1d9c84, _0x4efdf2);
                _0x4667a6['push'](_0x5322ee);
              }
              _0x4463e1 = _0x1b9100[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x446319 = _0x421cdb, _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x1;
            }
            if (_0xca2525 == _0x33c35f - 0x1) {
              if (!_0x51cc28) {
                var _0x3381ac = null;
                if (_0x19ca02[_0x32b5ef(0x20b)] > 0x0) {
                  var _0xe25f07 = parseInt(_0x19ca02['left'] / 0x8);
                  _0x3381ac = _0x4463e1[_0x32b5ef(0x1df)](_0xe25f07, _0x4463e1[_0x32b5ef(0x1f5)] - _0xe25f07);
                }
                if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                  var _0x45b47b = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                  _0x3381ac != null ? _0x3381ac = _0x3381ac[_0x32b5ef(0x1df)](0x0, _0x3381ac['byteLength'] - _0x45b47b) : _0x3381ac = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x45b47b);
                }
                _0x3381ac == null && (_0x3381ac = _0x4463e1);
                var _0x449868 = DataUntils['doCreateBuffer'](_0x446319, _0x3381ac, _0x4ece71, _0x1d9c84, _0x4efdf2);
                _0x4667a6[_0x32b5ef(0x1fb)](_0x449868);
                var _0x53125f = DataUntils[_0x32b5ef(0x1e5)](_0x4667a6, _0x5eb54c);
                _0x1731df['push'](_0x53125f);
              }
            }
          }
          _0x421cdb = !![], _0x348852 = 0xff;
        }
      }
    }
    var _0x472a24 = {
      '0': _0x1731df,
      '1': _0x43489e,
      '2': _0x8ec8b7
    };
    return _0x472a24;
  } else {
    if (_0x4f667a == 0xb4) {
      var _0xe41874 = (_0x33c35f - 0x1) % 0x8;
      for (var _0xca2525 = _0x44a86e - 0x1; _0xca2525 >= 0x0; _0xca2525--) {
        _0x59a8b8 = 0x0;
        var _0xb317a8 = !![];
        for (var _0x4148c2 = _0x33c35f - 0x1; _0x4148c2 >= 0x0; _0x4148c2--) {
          var _0x4711d7 = _0x4148c2 + _0xca2525 * _0x33c35f,
            _0x24da29 = _0x4711d7 * 0x4;
          var _0x49ad50 = _0x409225[_0x24da29] * 0.299 + _0x409225[_0x24da29 + 0x1] * 0.587 + _0x409225[_0x24da29 + 0x2] * 0.114,
            _0x10ecfa = _0x1dca04[_0x24da29] * 0.299 + _0x1dca04[_0x24da29 + 0x1] * 0.587 + _0x1dca04[_0x24da29 + 0x2] * 0.114;
          var _0x18b162 = 0x80;
          if (_0x4148c2 % 0x8 == _0xe41874) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0x7f, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0x7f;else {
            if (_0x4148c2 % 0x8 == (_0xe41874 - 0x1 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xbf, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xbf;else {
              if (_0x4148c2 % 0x8 == (_0xe41874 - 0x2 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xdf, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xdf;else {
                if (_0x4148c2 % 0x8 == (_0xe41874 - 0x3 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xef, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xef;else {
                  if (_0x4148c2 % 0x8 == (_0xe41874 - 0x4 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xf7, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xf7;else {
                    if (_0x4148c2 % 0x8 == (_0xe41874 - 0x5 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xfb, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xfb;else {
                      if (_0x4148c2 % 0x8 == (_0xe41874 - 0x6 + 0x8) % 0x8) _0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xfd, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xfd;else _0x4148c2 % 0x8 == (_0xe41874 - 0x7 + 0x8) % 0x8 && (_0x348852 &= _0x49ad50 < _0x18b162 ? 0xff : 0xfe, _0x4906d4 &= _0x10ecfa < _0x18b162 ? 0xff : 0xfe, _0x3d9184[_0x32b5ef(0x1d7)](_0x59a8b8, _0x348852), _0x421cdb && (_0x421cdb = _0x348852 == 0x0), _0xb317a8 && (_0xb317a8 = _0x348852 == _0x4906d4), _0x4906d4 = 0xff, _0x348852 = 0xff, _0x59a8b8++);
                    }
                  }
                }
              }
            }
          }
          if (_0x4148c2 == 0x0) {
            if (_0x4148c2 % 0x8 != (_0xe41874 - 0x7 + 0x8) % 0x8) {
              var _0x2c0241 = 0x8 - _0x33c35f % 0x8;
              _0x348852 = _0x348852 >> _0x2c0241 << _0x2c0241, _0x3d9184['setUint8'](_0x59a8b8, _0x348852), _0x59a8b8 = 0x0, _0x421cdb && (_0x421cdb = _0x348852 == 0x0);
            }
            if (_0xb317a8) {
              if (_0xca2525 == 0x0) {
                if (_0x2904a7 != null) {
                  var _0x35bb44 = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                  _0x3cfd48[_0x32b5ef(0x1fb)](_0x35bb44);
                }
                var _0x33e93a = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                _0x3cfd48 = [], _0x33e93a[_0x32b5ef(0x1da)] > 0x0 && _0x43489e['push'](_0x33e93a), _0x2904a7 = null;
              }
            } else {
              if (_0x8ec8b7 == 0x0) {
                _0x2dc54c = _0x2b510f, _0x8ec8b7++, _0x39056c++, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                ;
                _0x4d04c1 = _0x421cdb;
              } else {
                _0x8ec8b7++;
                if (_0x2dc54c + _0x39056c == _0x2b510f) {
                  if (_0x2904a7 == null) {
                    _0x2904a7 = _0x339970['slice'](0x0, _0x422f63);
                    ;
                    _0x4d04c1 = _0x421cdb, _0x2dc54c = _0x2b510f, _0x39056c = 0x1;
                  } else {
                    var _0x349bc2 = DataUntils[_0x32b5ef(0x1f9)](_0x2904a7),
                      _0x190fd2 = DataUntils[_0x32b5ef(0x1f9)](_0x339970);
                    if (_0x349bc2 == _0x190fd2) _0x39056c++;else {
                      var _0x234577 = DataUntils['doCreateBuffer'](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                      _0x3cfd48[_0x32b5ef(0x1fb)](_0x234577), _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb;
                    }
                  }
                } else {
                  if (_0x2904a7 == null) {
                    _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970['slice'](0x0, _0x422f63);
                    ;
                    _0x4d04c1 = _0x421cdb;
                  } else {
                    var _0x2169ec = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                    _0x3cfd48[_0x32b5ef(0x1fb)](_0x2169ec), _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                    ;
                    _0x4d04c1 = _0x421cdb;
                  }
                }
                if (_0x39056c > 0x0 && _0x39056c % _0x3e4c3d == 0x0 || _0xca2525 == 0x0 || _0x8ec8b7 % _0x3e4c3d == 0x0) {
                  if (_0x2904a7 != null) {
                    var _0xdb8b39 = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                    _0x3cfd48['push'](_0xdb8b39);
                  }
                  var _0x5ae341 = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                  _0x3cfd48 = [], _0x5ae341[_0x32b5ef(0x1da)] > 0x0 && _0x43489e[_0x32b5ef(0x1fb)](_0x5ae341), _0x2904a7 = null;
                }
              }
            }
            _0x2b510f++;
            var _0x10d688 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
            if (_0x4463e1 == null) _0x4463e1 = _0x10d688[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x1d9c84++, _0x446319 = _0x421cdb;else {
              var _0x46fb93 = DataUntils[_0x32b5ef(0x1f9)](_0x4463e1),
                _0x22b974 = DataUntils[_0x32b5ef(0x1f9)](_0x10d688);
              var _0x2fa68d = ![],
                _0x51cc28 = ![];
              if ((_0x1d9c84 + _0x4ece71) % _0x3e4c3d == 0x0 && _0x1d9c84 > 0x0) {
                _0x51cc28 = !![];
                var _0x136cf9 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x4463e1, _0x4ece71, _0x1d9c84);
                _0x4667a6['push'](_0x136cf9);
                var _0x4ddf91 = _0x4667a6[_0x32b5ef(0x1df)](0x0, _0x4667a6[_0x32b5ef(0x1da)]),
                  _0xbe0f4a = DataUntils[_0x32b5ef(0x1e5)](_0x4ddf91, _0x5eb54c);
                _0x4667a6[_0x32b5ef(0x1d9)](0x0, _0x4667a6[_0x32b5ef(0x1da)]), _0x1731df[_0x32b5ef(0x1fb)](_0xbe0f4a), _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x0;
              }
              _0x46fb93 == _0x22b974 && (_0x1d9c84++, _0x2fa68d = !![]);
              if (!_0x2fa68d) {
                var _0x39a037 = null;
                if (_0x19ca02['left'] > 0x0) {
                  var _0xf77e81 = parseInt(_0x19ca02[_0x32b5ef(0x20b)] / 0x8);
                  _0x39a037 = _0x4463e1[_0x32b5ef(0x1df)](_0xf77e81, _0x4463e1[_0x32b5ef(0x1f5)] - _0xf77e81);
                }
                if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                  var _0x30f95e = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                  _0x39a037 != null ? _0x39a037 = _0x39a037['slice'](0x0, _0x39a037['byteLength'] - _0x30f95e) : _0x39a037 = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x30f95e);
                }
                _0x39a037 == null && (_0x39a037 = _0x4463e1);
                if (_0x1d9c84 > 0x0) {
                  var _0xcbbc4b = DataUntils['doCreateBuffer'](_0x446319, _0x39a037, _0x4ece71, _0x1d9c84, _0x4efdf2);
                  _0x4667a6[_0x32b5ef(0x1fb)](_0xcbbc4b);
                }
                _0x4463e1 = _0x10d688[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x446319 = _0x421cdb, _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x1;
              }
              if (_0xca2525 == 0x0) {
                if (!_0x51cc28) {
                  var _0x351754 = null;
                  if (_0x19ca02[_0x32b5ef(0x20b)] > 0x0) {
                    var _0xd00644 = parseInt(_0x19ca02['left'] / 0x8);
                    _0x351754 = _0x4463e1['slice'](_0xd00644, _0x4463e1[_0x32b5ef(0x1f5)] - _0xd00644);
                  }
                  if (_0x19ca02['right'] > 0x0) {
                    var _0x5708d7 = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                    _0x351754 != null ? _0x351754 = _0x351754[_0x32b5ef(0x1df)](0x0, _0x351754['byteLength'] - _0x5708d7) : _0x351754 = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x5708d7);
                  }
                  _0x351754 == null && (_0x351754 = _0x4463e1);
                  var _0x598ce8 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x351754, _0x4ece71, _0x1d9c84, _0x4efdf2);
                  _0x4667a6[_0x32b5ef(0x1fb)](_0x598ce8);
                  var _0x2bd225 = DataUntils['deal120ByteArray'](_0x4667a6, _0x5eb54c);
                  _0x1731df[_0x32b5ef(0x1fb)](_0x2bd225);
                }
              }
            }
            _0x421cdb = !![], _0x348852 = 0xff;
          }
        }
      }
      var _0x1fd42b = {
        '0': _0x1731df,
        '1': _0x43489e,
        '2': _0x8ec8b7
      };
      return _0x1fd42b;
    } else {
      if (_0x4f667a == 0x10e) {
        for (var _0xca2525 = _0x33c35f - 0x1; _0xca2525 >= 0x0; _0xca2525--) {
          _0x59a8b8 = 0x0;
          var _0xb317a8 = !![];
          for (var _0x4148c2 = 0x0; _0x4148c2 < _0x44a86e; _0x4148c2++) {
            var _0x4d2e8b = _0x4148c2 * _0x33c35f + _0xca2525,
              _0x5bc0c0 = _0x4d2e8b * 0x4;
            var _0x49ad50 = _0x409225[_0x5bc0c0] * 0.299 + _0x409225[_0x5bc0c0 + 0x1] * 0.587 + _0x409225[_0x5bc0c0 + 0x2] * 0.114,
              _0x10ecfa = _0x1dca04[_0x5bc0c0] * 0.299 + _0x1dca04[_0x5bc0c0 + 0x1] * 0.587 + _0x1dca04[_0x5bc0c0 + 0x2] * 0.114;
            var _0x475c61 = 0x80;
            if (_0x4148c2 % 0x8 == 0x0) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0x7f, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0x7f;else {
              if (_0x4148c2 % 0x8 == 0x1) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xbf, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xbf;else {
                if (_0x4148c2 % 0x8 == 0x2) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xdf, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xdf;else {
                  if (_0x4148c2 % 0x8 == 0x3) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xef, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xef;else {
                    if (_0x4148c2 % 0x8 == 0x4) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xf7, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xf7;else {
                      if (_0x4148c2 % 0x8 == 0x5) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xfb, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xfb;else {
                        if (_0x4148c2 % 0x8 == 0x6) _0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xfd, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xfd;else _0x4148c2 % 0x8 == 0x7 && (_0x348852 &= _0x49ad50 < _0x475c61 ? 0xff : 0xfe, _0x4906d4 &= _0x10ecfa < _0x475c61 ? 0xff : 0xfe, _0x3d9184['setUint8'](_0x59a8b8, _0x348852), _0x421cdb && (_0x421cdb = _0x348852 == 0x0), _0xb317a8 && (_0xb317a8 = _0x348852 == _0x4906d4), _0x4906d4 = 0xff, _0x348852 = 0xff, _0x59a8b8++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x4148c2 == _0x44a86e - 0x1) {
              if (_0x4148c2 % 0x8 != 0x7) {
                var _0x24d512 = 0x8 - _0x44a86e % 0x8;
                _0x348852 = _0x348852 >> _0x24d512 << _0x24d512, _0x3d9184[_0x32b5ef(0x1d7)](_0x59a8b8, _0x348852), _0x59a8b8 = 0x0, _0x421cdb && (_0x421cdb = _0x348852 == 0x0);
              }
              if (_0xb317a8) {
                if (_0xca2525 == 0x0) {
                  if (_0x2904a7 != null) {
                    var _0x1729cb = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                    _0x3cfd48[_0x32b5ef(0x1fb)](_0x1729cb);
                  }
                  var _0x19d8cc = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                  _0x3cfd48 = [], _0x19d8cc[_0x32b5ef(0x1da)] > 0x0 && _0x43489e[_0x32b5ef(0x1fb)](_0x19d8cc), _0x2904a7 = null;
                }
              } else {
                if (_0x8ec8b7 == 0x0) {
                  _0x2dc54c = _0x2b510f, _0x8ec8b7++, _0x39056c++, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                  ;
                  _0x4d04c1 = _0x421cdb;
                } else {
                  _0x8ec8b7++;
                  if (_0x2dc54c + _0x39056c == _0x2b510f) {
                    if (_0x2904a7 == null) {
                      _0x2904a7 = _0x339970['slice'](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb, _0x2dc54c = _0x2b510f, _0x39056c = 0x1;
                    } else {
                      var _0x5d9615 = DataUntils[_0x32b5ef(0x1f9)](_0x2904a7),
                        _0x31c268 = DataUntils['ab2hex'](_0x339970);
                      if (_0x5d9615 == _0x31c268) _0x39056c++;else {
                        var _0x376414 = DataUntils['doCreateBuffer'](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                        _0x3cfd48[_0x32b5ef(0x1fb)](_0x376414), _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                        ;
                        _0x4d04c1 = _0x421cdb;
                      }
                    }
                  } else {
                    if (_0x2904a7 == null) {
                      _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb;
                    } else {
                      var _0x7777ac = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                      _0x3cfd48[_0x32b5ef(0x1fb)](_0x7777ac), _0x2dc54c = _0x2b510f, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb;
                    }
                  }
                  if (_0x39056c > 0x0 && _0x39056c % _0x3e4c3d == 0x0 || _0xca2525 == 0x0 || _0x8ec8b7 % _0x3e4c3d == 0x0) {
                    if (_0x2904a7 != null) {
                      var _0x1fd400 = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                      _0x3cfd48[_0x32b5ef(0x1fb)](_0x1fd400);
                    }
                    var _0x1f2680 = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                    _0x3cfd48 = [], _0x1f2680[_0x32b5ef(0x1da)] > 0x0 && _0x43489e[_0x32b5ef(0x1fb)](_0x1f2680), _0x2904a7 = null;
                  }
                }
              }
              _0x2b510f++;
              var _0xab9671 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
              if (_0x4463e1 == null) _0x4463e1 = _0xab9671[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x1d9c84++, _0x446319 = _0x421cdb;else {
                var _0x20759c = DataUntils[_0x32b5ef(0x1f9)](_0x4463e1),
                  _0x298d27 = DataUntils[_0x32b5ef(0x1f9)](_0xab9671);
                var _0x2fa68d = ![],
                  _0x51cc28 = ![];
                if ((_0x1d9c84 + _0x4ece71) % _0x3e4c3d == 0x0 && _0x1d9c84 > 0x0) {
                  _0x51cc28 = !![];
                  var _0x2d124e = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x4463e1, _0x4ece71, _0x1d9c84);
                  _0x4667a6['push'](_0x2d124e);
                  var _0x3dae1c = _0x4667a6[_0x32b5ef(0x1df)](0x0, _0x4667a6[_0x32b5ef(0x1da)]),
                    _0x35886e = DataUntils[_0x32b5ef(0x1e5)](_0x3dae1c, _0x5eb54c);
                  _0x4667a6[_0x32b5ef(0x1d9)](0x0, _0x4667a6['length']), _0x1731df[_0x32b5ef(0x1fb)](_0x35886e), _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x0;
                }
                _0x20759c == _0x298d27 && (_0x1d9c84++, _0x2fa68d = !![]);
                if (!_0x2fa68d) {
                  var _0x58c2a0 = null;
                  if (_0x19ca02[_0x32b5ef(0x20b)] > 0x0) {
                    var _0x54fc0e = parseInt(_0x19ca02['left'] / 0x8);
                    _0x58c2a0 = _0x4463e1[_0x32b5ef(0x1df)](_0x54fc0e, _0x4463e1[_0x32b5ef(0x1f5)] - _0x54fc0e);
                  }
                  if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                    var _0x5aa0d6 = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                    _0x58c2a0 != null ? _0x58c2a0 = _0x58c2a0['slice'](0x0, _0x58c2a0[_0x32b5ef(0x1f5)] - _0x5aa0d6) : _0x58c2a0 = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x5aa0d6);
                  }
                  _0x58c2a0 == null && (_0x58c2a0 = _0x4463e1);
                  if (_0x1d9c84 > 0x0) {
                    var _0x316aee = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x58c2a0, _0x4ece71, _0x1d9c84, _0x4efdf2);
                    _0x4667a6[_0x32b5ef(0x1fb)](_0x316aee);
                  }
                  _0x4463e1 = _0xab9671['slice'](0x0, _0x422f63), _0x446319 = _0x421cdb, _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x1;
                }
                if (_0xca2525 == 0x0) {
                  if (!_0x51cc28) {
                    var _0x191af5 = null;
                    if (_0x19ca02[_0x32b5ef(0x20b)] > 0x0) {
                      var _0x352103 = parseInt(_0x19ca02[_0x32b5ef(0x20b)] / 0x8);
                      _0x191af5 = _0x4463e1[_0x32b5ef(0x1df)](_0x352103, _0x4463e1[_0x32b5ef(0x1f5)] - _0x352103);
                    }
                    if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                      var _0x1f61c0 = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                      _0x191af5 != null ? _0x191af5 = _0x191af5['slice'](0x0, _0x191af5[_0x32b5ef(0x1f5)] - _0x1f61c0) : _0x191af5 = _0x4463e1['slice'](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x1f61c0);
                    }
                    _0x191af5 == null && (_0x191af5 = _0x4463e1);
                    var _0x1f3da6 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x191af5, _0x4ece71, _0x1d9c84, _0x4efdf2);
                    _0x4667a6[_0x32b5ef(0x1fb)](_0x1f3da6);
                    var _0x3db474 = DataUntils['deal120ByteArray'](_0x4667a6, _0x5eb54c);
                    _0x1731df[_0x32b5ef(0x1fb)](_0x3db474);
                  }
                }
              }
              _0x421cdb = !![], _0x348852 = 0xff;
            }
          }
        }
        var _0x46ed50 = {
          '0': _0x1731df,
          '1': _0x43489e,
          '2': _0x8ec8b7
        };
        return _0x46ed50;
      } else {
        for (var _0xca2525 = 0x0; _0xca2525 < _0x44a86e; _0xca2525++) {
          _0x59a8b8 = 0x0;
          var _0xb317a8 = !![];
          for (var _0x4148c2 = 0x0; _0x4148c2 < _0x33c35f; _0x4148c2++) {
            var _0x1ff31f = _0x4148c2 + _0xca2525 * _0x33c35f,
              _0x4f9700 = _0x1ff31f * 0x4;
            var _0x49ad50 = _0x409225[_0x4f9700] * 0.299 + _0x409225[_0x4f9700 + 0x1] * 0.587 + _0x409225[_0x4f9700 + 0x2] * 0.114,
              _0x10ecfa = _0x1dca04[_0x4f9700] * 0.299 + _0x1dca04[_0x4f9700 + 0x1] * 0.587 + _0x1dca04[_0x4f9700 + 0x2] * 0.114;
            var _0x27ea19 = 0x80;
            if (_0x4148c2 % 0x8 == 0x0) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0x7f, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0x7f;else {
              if (_0x4148c2 % 0x8 == 0x1) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xbf, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xbf;else {
                if (_0x4148c2 % 0x8 == 0x2) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xdf, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xdf;else {
                  if (_0x4148c2 % 0x8 == 0x3) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xef, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xef;else {
                    if (_0x4148c2 % 0x8 == 0x4) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xf7, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xf7;else {
                      if (_0x4148c2 % 0x8 == 0x5) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xfb, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xfb;else {
                        if (_0x4148c2 % 0x8 == 0x6) _0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xfd, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xfd;else _0x4148c2 % 0x8 == 0x7 && (_0x348852 &= _0x49ad50 < _0x27ea19 ? 0xff : 0xfe, _0x4906d4 &= _0x10ecfa < _0x27ea19 ? 0xff : 0xfe, _0x3d9184[_0x32b5ef(0x1d7)](_0x59a8b8, _0x348852), _0x421cdb && (_0x421cdb = _0x348852 == 0x0), _0xb317a8 && (_0xb317a8 = _0x348852 == _0x4906d4), _0x348852 = 0xff, _0x4906d4 = 0xff, _0x59a8b8++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x4148c2 == _0x33c35f - 0x1) {
              if (_0x4148c2 % 0x8 != 0x7) {
                var _0x455307 = 0x8 - _0x33c35f % 0x8;
                _0x348852 = _0x348852 >> _0x455307 << _0x455307, _0x3d9184[_0x32b5ef(0x1d7)](_0x59a8b8, _0x348852), _0x59a8b8 = 0x0, _0x421cdb && (_0x421cdb = _0x348852 == 0x0);
              }
              if (_0xb317a8) {
                if (_0xca2525 == _0x44a86e - 0x1) {
                  if (_0x2904a7 != null) {
                    var _0x37201e = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                    _0x3cfd48['push'](_0x37201e);
                  }
                  var _0x2cced2 = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                  _0x3cfd48 = [], _0x2cced2[_0x32b5ef(0x1da)] > 0x0 && _0x43489e['push'](_0x2cced2), _0x2904a7 = null;
                }
              } else {
                if (_0x8ec8b7 == 0x0) {
                  _0x2dc54c = _0xca2525, _0x8ec8b7++, _0x39056c++, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                  ;
                  _0x4d04c1 = _0x421cdb;
                } else {
                  _0x8ec8b7++;
                  if (_0x2dc54c + _0x39056c == _0xca2525) {
                    if (_0x2904a7 == null) {
                      _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb, _0x2dc54c = _0xca2525, _0x39056c = 0x1;
                    } else {
                      var _0x56f514 = DataUntils[_0x32b5ef(0x1f9)](_0x2904a7),
                        _0x272237 = DataUntils[_0x32b5ef(0x1f9)](_0x339970);
                      if (_0x56f514 == _0x272237) _0x39056c++;else {
                        var _0x3a3947 = DataUntils['doCreateBuffer'](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                        _0x3cfd48[_0x32b5ef(0x1fb)](_0x3a3947), _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970['slice'](0x0, _0x422f63);
                        ;
                        _0x4d04c1 = _0x421cdb;
                      }
                    }
                  } else {
                    if (_0x2904a7 == null) {
                      _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb;
                    } else {
                      var _0x593f3f = DataUntils['doCreateBuffer'](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                      _0x3cfd48[_0x32b5ef(0x1fb)](_0x593f3f), _0x2dc54c = _0xca2525, _0x39056c = 0x1, _0x2904a7 = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
                      ;
                      _0x4d04c1 = _0x421cdb;
                    }
                  }
                  if (_0x39056c > 0x0 && _0x39056c % _0x3e4c3d == 0x0 || _0xca2525 == _0x44a86e - 0x1 || _0x8ec8b7 % _0x3e4c3d == 0x0) {
                    if (_0x2904a7 != null) {
                      var _0xc024be = DataUntils[_0x32b5ef(0x213)](_0x4d04c1, _0x2904a7, _0x2dc54c, _0x39056c);
                      _0x3cfd48['push'](_0xc024be);
                    }
                    var _0x3a9625 = DataUntils[_0x32b5ef(0x1e5)](_0x3cfd48, _0x5eb54c);
                    _0x3cfd48 = [], _0x3a9625[_0x32b5ef(0x1da)] > 0x0 && _0x43489e[_0x32b5ef(0x1fb)](_0x3a9625), _0x2904a7 = null;
                  }
                }
              }
              var _0x5392ec = _0x339970[_0x32b5ef(0x1df)](0x0, _0x422f63);
              if (_0x4463e1 == null) _0x4463e1 = _0x5392ec['slice'](0x0, _0x422f63), _0x1d9c84++, _0x446319 = _0x421cdb;else {
                var _0x101f01 = DataUntils[_0x32b5ef(0x1f9)](_0x4463e1),
                  _0x14e67c = DataUntils[_0x32b5ef(0x1f9)](_0x5392ec);
                var _0x2fa68d = ![],
                  _0x51cc28 = ![];
                if ((_0x1d9c84 + _0x4ece71) % _0x3e4c3d == 0x0 && _0x1d9c84 > 0x0) {
                  _0x51cc28 = !![];
                  var _0x5bf007 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x4463e1, _0x4ece71, _0x1d9c84);
                  _0x4667a6['push'](_0x5bf007);
                  var _0x1adb0f = _0x4667a6['slice'](0x0, _0x4667a6[_0x32b5ef(0x1da)]),
                    _0xd97ff3 = DataUntils[_0x32b5ef(0x1e5)](_0x1adb0f, _0x5eb54c);
                  _0x4667a6['splice'](0x0, _0x4667a6[_0x32b5ef(0x1da)]), _0x1731df[_0x32b5ef(0x1fb)](_0xd97ff3), _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x0;
                }
                _0x101f01 == _0x14e67c && (_0x1d9c84++, _0x2fa68d = !![]);
                if (!_0x2fa68d) {
                  var _0x510e7c = null;
                  if (_0x19ca02[_0x32b5ef(0x20b)] > 0x0) {
                    var _0x45c48f = parseInt(_0x19ca02[_0x32b5ef(0x20b)] / 0x8);
                    _0x510e7c = _0x4463e1[_0x32b5ef(0x1df)](_0x45c48f, _0x4463e1[_0x32b5ef(0x1f5)] - _0x45c48f);
                  }
                  if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                    var _0x24088f = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                    _0x510e7c != null ? _0x510e7c = _0x510e7c[_0x32b5ef(0x1df)](0x0, _0x510e7c[_0x32b5ef(0x1f5)] - _0x24088f) : _0x510e7c = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1[_0x32b5ef(0x1f5)] - _0x24088f);
                  }
                  _0x510e7c == null && (_0x510e7c = _0x4463e1);
                  if (_0x1d9c84 > 0x0) {
                    var _0xcf1996 = DataUntils[_0x32b5ef(0x213)](_0x446319, _0x510e7c, _0x4ece71, _0x1d9c84, _0x4efdf2);
                    _0x4667a6[_0x32b5ef(0x1fb)](_0xcf1996);
                  }
                  _0x4463e1 = _0x5392ec[_0x32b5ef(0x1df)](0x0, _0x422f63), _0x446319 = _0x421cdb, _0x4ece71 += _0x1d9c84, _0x1d9c84 = 0x1;
                }
                if (_0xca2525 == _0x44a86e - 0x1) {
                  if (!_0x51cc28) {
                    var _0x19e866 = null;
                    if (_0x19ca02['left'] > 0x0) {
                      var _0x4cae37 = parseInt(_0x19ca02['left'] / 0x8);
                      _0x19e866 = _0x4463e1[_0x32b5ef(0x1df)](_0x4cae37, _0x4463e1[_0x32b5ef(0x1f5)] - _0x4cae37);
                    }
                    if (_0x19ca02[_0x32b5ef(0x1d6)] > 0x0) {
                      var _0x4828aa = parseInt(_0x19ca02[_0x32b5ef(0x1d6)] / 0x8);
                      _0x19e866 != null ? _0x19e866 = _0x19e866['slice'](0x0, _0x19e866[_0x32b5ef(0x1f5)] - _0x4828aa) : _0x19e866 = _0x4463e1[_0x32b5ef(0x1df)](0x0, _0x4463e1['byteLength'] - _0x4828aa);
                    }
                    _0x19e866 == null && (_0x19e866 = _0x4463e1);
                    var _0xe3a229 = DataUntils['doCreateBuffer'](_0x446319, _0x19e866, _0x4ece71, _0x1d9c84, _0x4efdf2);
                    _0x4667a6['push'](_0xe3a229);
                    var _0x334e88 = DataUntils['deal120ByteArray'](_0x4667a6, _0x5eb54c);
                    _0x1731df[_0x32b5ef(0x1fb)](_0x334e88);
                  }
                }
              }
              _0x421cdb = !![], _0x348852 = 0xff;
            }
          }
        }
        var _0x17e5a7 = {
          '0': _0x1731df,
          '1': _0x43489e,
          '2': _0x8ec8b7
        };
        return _0x17e5a7;
      }
    }
  }
}, DataUntils[a0_0x268a7d(0x20d)] = function (_0x3380c2, _0x418344, _0x226b05, _0x32c028) {
  var _0x3198f5 = a0_0x268a7d;
  var _0x37da3b = [];
  var _0x22ff67 = _0x418344,
    _0x1762e9 = new Uint8Array(_0x226b05),
    _0x2650df = 0x0;
  for (var _0x214844 = 0x0; _0x214844 < _0x3380c2[_0x3198f5(0x1da)]; _0x214844++) {
    var _0x2b529c = _0x3380c2[_0x214844],
      _0x2e3584 = new DataView(_0x2b529c);
    for (var _0x901a23 = 0x0; _0x901a23 < _0x2b529c[_0x3198f5(0x1f5)]; _0x901a23++) {
      _0x1762e9[_0x2650df] = _0x2e3584[_0x3198f5(0x1e7)](_0x901a23), _0x2650df++;
    }
  }
  var _0x2f943c = {
      'inputBuffer': _0x1762e9,
      'outputBuffer': null
    },
    _0x3c0048 = _lzo1x.default[_0x3198f5(0x1ef)][_0x3198f5(0x211)](_0x2f943c);
  _0x2650df = 0x0;
  if (_0x2f943c[_0x3198f5(0x200)] != null) {
    _0x2f943c['outputBuffer'] = DataUntils[_0x3198f5(0x218)](_0x32c028, _0x2f943c[_0x3198f5(0x200)]);
    while (_0x2650df < _0x2f943c[_0x3198f5(0x200)][_0x3198f5(0x1f5)]) {
      var _0x346d2f = _0x22ff67;
      _0x2650df + _0x22ff67 >= _0x2f943c['outputBuffer']['byteLength'] && (_0x346d2f = _0x2f943c[_0x3198f5(0x200)]['byteLength'] - _0x2650df);
      var _0x352502 = _0x2f943c['outputBuffer']['slice'](_0x2650df, _0x346d2f + _0x2650df);
      _0x37da3b['push'](_0x352502), _0x2650df += _0x22ff67;
    }
  }
  return _0x37da3b;
}, DataUntils[a0_0x268a7d(0x218)] = function (_0x3a4d70, _0x5603c1) {
  var _0x4ab84d = a0_0x268a7d;
  var _0x18b295 = 0x87,
    _0x5c8940 = _0x5603c1['byteLength'] + 0x2,
    _0x3c9a46 = 0x0;
  var _0xd3aebf = _0x5c8940 / 0x100,
    _0x296525 = _0x5c8940 % 0x100,
    _0x349533 = _0x3a4d70 / 0x100,
    _0x4e221a = _0x3a4d70 % 0x100;
  _0x3c9a46 ^= _0x349533 ^ _0x4e221a ^ _0xd3aebf ^ _0x296525 ^ _0x18b295;
  var _0x4f2704 = new ArrayBuffer(_0x5c8940 + 0xa),
    _0x384c5a = new DataView(_0x4f2704);
  _0x384c5a['setUint8'](0x0, 0x55), _0x384c5a[_0x4ab84d(0x1d7)](0x1, 0x55), _0x384c5a[_0x4ab84d(0x1d7)](0x2, _0x18b295), _0x384c5a[_0x4ab84d(0x1d7)](0x3, _0xd3aebf), _0x384c5a['setUint8'](0x4, _0x296525), _0x384c5a[_0x4ab84d(0x1d7)](0x5, _0x349533), _0x384c5a['setUint8'](0x6, _0x4e221a);
  for (var _0x30945b = 0x0; _0x30945b < _0x5603c1['byteLength']; _0x30945b++) {
    _0x384c5a[_0x4ab84d(0x1d7)](0x7 + _0x30945b, _0x5603c1[_0x30945b]), _0x3c9a46 ^= _0x5603c1[_0x30945b];
  }
  return _0x384c5a[_0x4ab84d(0x1d7)](0x7 + _0x5603c1[_0x4ab84d(0x1f5)], _0x3c9a46), _0x384c5a[_0x4ab84d(0x1d7)](0x8 + _0x5603c1[_0x4ab84d(0x1f5)], 0xaa), _0x384c5a['setUint8'](0x9 + _0x5603c1[_0x4ab84d(0x1f5)], 0xaa), _0x4f2704;
}, DataUntils['deal120TotalPictureByteArrayWithZip'] = function (_0x3504c1, _0x34f781, _0x39743d, _0x31fb9e) {
  var _0x16c8f1 = a0_0x268a7d;
  var _0x5d6906 = [];
  var _0x43d873 = _0x34f781,
    _0x23b92d = new Uint8Array(_0x39743d),
    _0x5e60c3 = 0x0;
  for (var _0x303ade = 0x0; _0x303ade < _0x3504c1[_0x16c8f1(0x1da)]; _0x303ade++) {
    var _0x578eab = _0x3504c1[_0x303ade],
      _0x16d7be = new DataView(_0x578eab);
    for (var _0xb20a97 = 0x0; _0xb20a97 < _0x578eab[_0x16c8f1(0x1f5)]; _0xb20a97++) {
      _0x23b92d[_0x5e60c3] = _0x16d7be[_0x16c8f1(0x1e7)](_0xb20a97), _0x5e60c3++;
    }
  }
  var _0x59df0d = {
      'inputBuffer': _0x23b92d,
      'outputBuffer': null
    },
    _0x482662 = _lzo1x.default[_0x16c8f1(0x1ef)][_0x16c8f1(0x211)](_0x59df0d);
  _0x5e60c3 = 0x0;
  if (_0x59df0d['outputBuffer'] != null) {
    _0x59df0d[_0x16c8f1(0x200)] = DataUntils[_0x16c8f1(0x1f4)](_0x31fb9e, _0x59df0d['outputBuffer']);
    while (_0x5e60c3 < _0x59df0d[_0x16c8f1(0x200)][_0x16c8f1(0x1f5)]) {
      var _0x22daa8 = _0x43d873;
      _0x5e60c3 + _0x43d873 >= _0x59df0d[_0x16c8f1(0x200)][_0x16c8f1(0x1f5)] && (_0x22daa8 = _0x59df0d[_0x16c8f1(0x200)][_0x16c8f1(0x1f5)] - _0x5e60c3);
      var _0xa3bdd8 = _0x59df0d[_0x16c8f1(0x200)][_0x16c8f1(0x1df)](_0x5e60c3, _0x22daa8 + _0x5e60c3);
      _0x5d6906['push'](_0xa3bdd8), _0x5e60c3 += _0x43d873;
    }
  }
  return _0x5d6906;
}, DataUntils[a0_0x268a7d(0x1f4)] = function (_0x5aa158, _0x46838e) {
  var _0x51f0f9 = a0_0x268a7d;
  var _0x4f5322 = 0xa7,
    _0x2eecd6 = _0x46838e[_0x51f0f9(0x1f5)] + 0x2,
    _0x21e563 = 0x0;
  var _0x433151 = _0x2eecd6 >> 0x18,
    _0x53a9b7 = _0x2eecd6 >> 0x10,
    _0x5d8e61 = _0x2eecd6 >> 0x8,
    _0x39e565 = _0x2eecd6 % 0x100,
    _0x52fe68 = _0x5aa158 / 0x100,
    _0x42b920 = _0x5aa158 % 0x100;
  _0x21e563 ^= _0x52fe68 ^ _0x42b920 ^ _0x433151 ^ _0x53a9b7 ^ _0x5d8e61 ^ _0x39e565 ^ _0x4f5322;
  var _0x57b11c = new ArrayBuffer(_0x2eecd6 + 0xc),
    _0x1644a2 = new DataView(_0x57b11c);
  _0x1644a2[_0x51f0f9(0x1d7)](0x0, 0x55), _0x1644a2[_0x51f0f9(0x1d7)](0x1, 0x55), _0x1644a2['setUint8'](0x2, _0x4f5322), _0x1644a2[_0x51f0f9(0x1d7)](0x3, _0x433151), _0x1644a2['setUint8'](0x4, _0x53a9b7), _0x1644a2[_0x51f0f9(0x1d7)](0x5, _0x5d8e61), _0x1644a2[_0x51f0f9(0x1d7)](0x6, _0x39e565), _0x1644a2[_0x51f0f9(0x1d7)](0x7, _0x52fe68), _0x1644a2[_0x51f0f9(0x1d7)](0x8, _0x42b920);
  for (var _0x1534cd = 0x0; _0x1534cd < _0x46838e[_0x51f0f9(0x1f5)]; _0x1534cd++) {
    _0x1644a2[_0x51f0f9(0x1d7)](0x9 + _0x1534cd, _0x46838e[_0x1534cd]), _0x21e563 ^= _0x46838e[_0x1534cd];
  }
  return _0x1644a2['setUint8'](0x9 + _0x46838e['byteLength'], _0x21e563), _0x1644a2[_0x51f0f9(0x1d7)](0xa + _0x46838e[_0x51f0f9(0x1f5)], 0xaa), _0x1644a2[_0x51f0f9(0x1d7)](0xb + _0x46838e[_0x51f0f9(0x1f5)], 0xaa), _0x57b11c;
}, DataUntils['compareTotalImageDataWithZip'] = function (_0x584667, _0x5e98dd, _0x4d2abf) {
  var _0x51b009 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x64;
  var _0x1df044 = arguments.length > 4 ? arguments[4] : undefined;
  var _0x3f038d = arguments.length > 5 ? arguments[5] : undefined;
  var _0x20733b = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0xc8;
  var _0x1909a4 = a0_0x268a7d;
  var _0x5d4fb4 = 0x1800;
  _0x3f038d > 0x0 && (_0x5d4fb4 = _0x3f038d);
  _0x5d4fb4 -= 0xc;
  var _0x22c0c4 = _0x584667[_0x1909a4(0x1e1)],
    _0x3d778c = _0x584667[_0x1909a4(0x1f7)];
  var _0x3b2e62 = 0x8;
  var _0xc443e0 = parseInt((_0x22c0c4 - 0x1) / _0x3b2e62 + 0x1);
  _0x1df044 % 0xb4 == 0x5a && (_0xc443e0 = parseInt((_0x3d778c - 0x1) / _0x3b2e62 + 0x1));
  var _0x52f101 = new ArrayBuffer(_0xc443e0),
    _0x3ad5e4 = new DataView(_0x52f101),
    _0x17d9fb = _0x584667[_0x1909a4(0x212)],
    _0x56676a = parseInt(_0x5d4fb4 / _0xc443e0);
  _0x56676a > _0x20733b && (_0x56676a = _0x20733b);
  var _0x313d71 = 0x0,
    _0x2764f0 = [],
    _0x7ff5cc = [],
    _0x2dd02a = [],
    _0x3e332c = 0x0,
    _0x32dfcd = 0xff;
  var _0x5d2abe = 0x1;
  if (_0x1df044 == 0x5a) {
    var _0x1f37f4 = (_0x3d778c - 0x1) % 0x8;
    for (var _0x44d310 = 0x0; _0x44d310 < _0x22c0c4; _0x44d310++) {
      _0x313d71 = 0x0;
      for (var _0x13f38e = _0x3d778c - 0x1; _0x13f38e >= 0x0; _0x13f38e--) {
        var _0x29c327 = _0x13f38e * _0x22c0c4 + _0x44d310,
          _0x172c88 = _0x29c327 * 0x4;
        var _0x3f9f82 = _0x17d9fb[_0x172c88] * 0.299 + _0x17d9fb[_0x172c88 + 0x1] * 0.587 + _0x17d9fb[_0x172c88 + 0x2] * 0.114;
        var _0x4f52fa = 0x80;
        if (_0x13f38e % 0x8 == _0x1f37f4) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0x7f;else {
          if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x1 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xbf;else {
            if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x2 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xdf;else {
              if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x3 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xef;else {
                if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x4 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xf7;else {
                  if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x5 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xfb;else {
                    if (_0x13f38e % 0x8 == (_0x1f37f4 - 0x6 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xfd;else _0x13f38e % 0x8 == (_0x1f37f4 - 0x7 + 0x8) % 0x8 && (_0x32dfcd &= _0x3f9f82 < _0x4f52fa ? 0xff : 0xfe, _0x3ad5e4[_0x1909a4(0x1d7)](_0x313d71, _0x32dfcd), _0x32dfcd = 0xff, _0x313d71++);
                  }
                }
              }
            }
          }
        }
        if (_0x13f38e == 0x0) {
          if (_0x13f38e % 0x8 != (_0x1f37f4 - 0x7 + 0x8) % 0x8) {
            var _0x472e79 = 0x8 - _0x3d778c % 0x8;
            _0x32dfcd = _0x32dfcd >> _0x472e79 << _0x472e79, _0x3ad5e4['setUint8'](_0x313d71, _0x32dfcd), _0x313d71 = 0x0;
          }
          var _0x2bfa5d = _0x52f101[_0x1909a4(0x1df)](0x0, _0xc443e0);
          _0x2dd02a[_0x1909a4(0x1fb)](_0x2bfa5d);
          if (_0x44d310 == _0x22c0c4 - 0x1) {
            var _0x124b5a = _0x3d778c % _0x56676a,
              _0xca2e4e = _0x124b5a * _0xc443e0,
              _0x520d29 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0xca2e4e, _0x3e332c);
            _0x2764f0[_0x1909a4(0x1fb)](_0x520d29), _0x7ff5cc[_0x1909a4(0x1fb)](_0x124b5a), _0x3e332c++;
          } else {
            if (_0x44d310 / _0x56676a == _0x5d2abe) {
              var _0x990f30 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x56676a * _0xc443e0, _0x3e332c);
              _0x2764f0[_0x1909a4(0x1fb)](_0x990f30), _0x7ff5cc[_0x1909a4(0x1fb)](_0x56676a), _0x2dd02a = [], _0x3e332c++, _0x5d2abe++;
            }
          }
          _0x32dfcd = 0xff;
        }
      }
    }
  } else {
    if (_0x1df044 == 0xb4) {
      var _0x28fb31 = (_0x22c0c4 - 0x1) % 0x8;
      for (var _0x44d310 = _0x3d778c - 0x1; _0x44d310 >= 0x0; _0x44d310--) {
        _0x313d71 = 0x0;
        for (var _0x13f38e = _0x22c0c4 - 0x1; _0x13f38e >= 0x0; _0x13f38e--) {
          var _0x33a6fd = _0x13f38e + _0x44d310 * _0x22c0c4,
            _0x4e0c2e = _0x33a6fd * 0x4;
          var _0x3f9f82 = _0x17d9fb[_0x4e0c2e] * 0.299 + _0x17d9fb[_0x4e0c2e + 0x1] * 0.587 + _0x17d9fb[_0x4e0c2e + 0x2] * 0.114;
          var _0x46be5 = 0x80;
          if (_0x13f38e % 0x8 == _0x28fb31) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0x7f;else {
            if (_0x13f38e % 0x8 == (_0x28fb31 - 0x1 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xbf;else {
              if (_0x13f38e % 0x8 == (_0x28fb31 - 0x2 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xdf;else {
                if (_0x13f38e % 0x8 == (_0x28fb31 - 0x3 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xef;else {
                  if (_0x13f38e % 0x8 == (_0x28fb31 - 0x4 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xf7;else {
                    if (_0x13f38e % 0x8 == (_0x28fb31 - 0x5 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xfb;else {
                      if (_0x13f38e % 0x8 == (_0x28fb31 - 0x6 + 0x8) % 0x8) _0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xfd;else _0x13f38e % 0x8 == (_0x28fb31 - 0x7 + 0x8) % 0x8 && (_0x32dfcd &= _0x3f9f82 < _0x46be5 ? 0xff : 0xfe, _0x3ad5e4[_0x1909a4(0x1d7)](_0x313d71, _0x32dfcd), _0x32dfcd = 0xff, _0x313d71++);
                    }
                  }
                }
              }
            }
          }
          if (_0x13f38e == 0x0) {
            if (_0x13f38e % 0x8 != (_0x28fb31 - 0x7 + 0x8) % 0x8) {
              var _0x5410bb = 0x8 - _0x22c0c4 % 0x8;
              _0x32dfcd = _0x32dfcd >> _0x5410bb << _0x5410bb, _0x3ad5e4[_0x1909a4(0x1d7)](_0x313d71, _0x32dfcd), _0x313d71 = 0x0;
            }
            var _0x4a1e3f = _0x52f101[_0x1909a4(0x1df)](0x0, _0xc443e0);
            _0x2dd02a['push'](_0x4a1e3f);
            if (_0x44d310 == 0x0) {
              var _0x5185df = _0x3d778c % _0x56676a,
                _0x46f5a2 = _0x5185df * _0xc443e0,
                _0x3cd626 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x46f5a2, _0x3e332c);
              _0x2764f0[_0x1909a4(0x1fb)](_0x3cd626), _0x7ff5cc[_0x1909a4(0x1fb)](_0x5185df), _0x3e332c++;
            } else {
              if (_0x44d310 / _0x56676a == _0x5d2abe) {
                var _0x184f81 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x56676a * _0xc443e0, _0x3e332c);
                _0x2764f0['push'](_0x184f81), _0x7ff5cc['push'](_0x56676a), _0x2dd02a = [], _0x3e332c++, _0x5d2abe++;
              }
            }
            _0x32dfcd = 0xff;
          }
        }
      }
    } else {
      if (_0x1df044 == 0x10e) for (var _0x44d310 = _0x22c0c4 - 0x1; _0x44d310 >= 0x0; _0x44d310--) {
        _0x313d71 = 0x0;
        for (var _0x13f38e = 0x0; _0x13f38e < _0x3d778c; _0x13f38e++) {
          var _0x279715 = _0x13f38e * _0x22c0c4 + _0x44d310,
            _0x153cb4 = _0x279715 * 0x4;
          var _0x3f9f82 = _0x17d9fb[_0x153cb4] * 0.299 + _0x17d9fb[_0x153cb4 + 0x1] * 0.587 + _0x17d9fb[_0x153cb4 + 0x2] * 0.114;
          var _0x5ce7f6 = 0x80;
          if (_0x13f38e % 0x8 == 0x0) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0x7f;else {
            if (_0x13f38e % 0x8 == 0x1) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xbf;else {
              if (_0x13f38e % 0x8 == 0x2) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xdf;else {
                if (_0x13f38e % 0x8 == 0x3) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xef;else {
                  if (_0x13f38e % 0x8 == 0x4) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xf7;else {
                    if (_0x13f38e % 0x8 == 0x5) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xfb;else {
                      if (_0x13f38e % 0x8 == 0x6) _0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xfd;else _0x13f38e % 0x8 == 0x7 && (_0x32dfcd &= _0x3f9f82 < _0x5ce7f6 ? 0xff : 0xfe, _0x3ad5e4[_0x1909a4(0x1d7)](_0x313d71, _0x32dfcd), _0x32dfcd = 0xff, _0x313d71++);
                    }
                  }
                }
              }
            }
          }
          if (_0x13f38e == _0x3d778c - 0x1) {
            if (_0x13f38e % 0x8 != 0x7) {
              var _0x358330 = 0x8 - _0x3d778c % 0x8;
              _0x32dfcd = _0x32dfcd >> _0x358330 << _0x358330, _0x3ad5e4['setUint8'](_0x313d71, _0x32dfcd), _0x313d71 = 0x0;
            }
            var _0x165f06 = _0x52f101[_0x1909a4(0x1df)](0x0, _0xc443e0);
            _0x2dd02a['push'](_0x165f06);
            if (_0x44d310 == 0x0) {
              var _0xaa80c2 = _0x3d778c % _0x56676a,
                _0x2d7e9d = _0xaa80c2 * _0xc443e0,
                _0x570dc2 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x2d7e9d, _0x3e332c);
              _0x2764f0[_0x1909a4(0x1fb)](_0x570dc2), _0x7ff5cc['push'](_0xaa80c2), _0x3e332c++;
            } else {
              if (_0x44d310 / _0x56676a == _0x5d2abe) {
                var _0x483998 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x56676a * _0xc443e0, _0x3e332c);
                _0x2764f0['push'](_0x483998), _0x7ff5cc['push'](_0x56676a), _0x2dd02a = [], _0x3e332c++, _0x5d2abe++;
              }
            }
            _0x32dfcd = 0xff;
          }
        }
      } else for (var _0x44d310 = 0x0; _0x44d310 < _0x3d778c; _0x44d310++) {
        _0x313d71 = 0x0;
        for (var _0x13f38e = 0x0; _0x13f38e < _0x22c0c4; _0x13f38e++) {
          var _0x576c63 = _0x13f38e + _0x44d310 * _0x22c0c4,
            _0x44fa6e = _0x576c63 * 0x4;
          var _0x3f9f82 = _0x17d9fb[_0x44fa6e] * 0.299 + _0x17d9fb[_0x44fa6e + 0x1] * 0.587 + _0x17d9fb[_0x44fa6e + 0x2] * 0.114;
          var _0x3322db = 0x80;
          if (_0x13f38e % 0x8 == 0x0) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0x7f;else {
            if (_0x13f38e % 0x8 == 0x1) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xbf;else {
              if (_0x13f38e % 0x8 == 0x2) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xdf;else {
                if (_0x13f38e % 0x8 == 0x3) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xef;else {
                  if (_0x13f38e % 0x8 == 0x4) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xf7;else {
                    if (_0x13f38e % 0x8 == 0x5) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xfb;else {
                      if (_0x13f38e % 0x8 == 0x6) _0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xfd;else _0x13f38e % 0x8 == 0x7 && (_0x32dfcd &= _0x3f9f82 < _0x3322db ? 0xff : 0xfe, _0x3ad5e4[_0x1909a4(0x1d7)](_0x313d71, _0x32dfcd), _0x32dfcd = 0xff, _0x313d71++);
                    }
                  }
                }
              }
            }
          }
          if (_0x13f38e == _0x22c0c4 - 0x1) {
            if (_0x13f38e % 0x8 != 0x7) {
              var _0x2de8de = 0x8 - _0x22c0c4 % 0x8;
              _0x32dfcd = _0x32dfcd >> _0x2de8de << _0x2de8de, _0x3ad5e4['setUint8'](_0x313d71, _0x32dfcd);
            }
            var _0x378510 = _0x52f101[_0x1909a4(0x1df)](0x0, _0xc443e0);
            _0x2dd02a[_0x1909a4(0x1fb)](_0x378510);
            if (_0x44d310 == _0x3d778c - 0x1) {
              var _0x302445 = _0x3d778c % _0x56676a,
                _0x2ffc27 = _0x302445 * _0xc443e0,
                _0x279111 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x2ffc27, _0x3e332c);
              _0x2764f0['push'](_0x279111), _0x7ff5cc[_0x1909a4(0x1fb)](_0x302445), _0x3e332c++;
            } else {
              if (_0x44d310 / _0x56676a == _0x5d2abe) {
                var _0x4ddd61 = DataUntils[_0x1909a4(0x1e8)](_0x2dd02a, _0x51b009, _0x56676a * _0xc443e0, _0x3e332c);
                _0x2764f0[_0x1909a4(0x1fb)](_0x4ddd61), _0x7ff5cc['push'](_0x56676a), _0x2dd02a = [], _0x3e332c++, _0x5d2abe++;
              }
            }
            _0x32dfcd = 0xff;
          }
        }
      }
    }
  }
  var _0x574645 = {
    '0': _0x2764f0,
    '3': _0x7ff5cc
  };
  return _0x574645;
}, DataUntils['compareImageDataWithZip'] = function (_0x1c5db2, _0xf5a13e, _0x2628c1) {
  var _0x3672c3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x64;
  var _0x5adaff = arguments.length > 4 ? arguments[4] : undefined;
  var _0x1de12c = arguments.length > 5 ? arguments[5] : undefined;
  var _0x34f6ff = arguments.length > 6 ? arguments[6] : undefined;
  var _0x51c633 = a0_0x268a7d;
  var _0x4bde42 = 0x1800;
  _0x34f6ff > 0x0 && (_0x4bde42 = _0x34f6ff);
  _0x4bde42 -= 0x8;
  if (_0x1de12c == null) {
    var _0x22d084 = DataUntils[_0x51c633(0x201)](_0x1c5db2, _0xf5a13e, _0x2628c1, _0x3672c3 = 0x64, _0x5adaff, _0x4bde42);
    return _0x22d084;
  }
  var _0x14a146 = _0x1c5db2[_0x51c633(0x1e1)],
    _0x3211d2 = _0x1c5db2[_0x51c633(0x1f7)],
    _0x3d82f0 = _0x1c5db2['data'];
  var _0x2ae66f = 0xff;
  var _0x301f87 = 0x8;
  var _0x33b8f7 = parseInt((_0x14a146 - 0x1) / _0x301f87 + 0x1);
  _0x5adaff % 0xb4 == 0x5a && (_0x33b8f7 = parseInt((_0x3211d2 - 0x1) / _0x301f87 + 0x1));
  var _0x36e809 = new ArrayBuffer(_0x33b8f7),
    _0x264bf2 = new DataView(_0x36e809);
  var _0x4f9221 = null,
    _0x1847b1 = 0x0,
    _0x5bd85f = 0x0,
    _0x5eccfa = !![],
    _0x522bda = ![],
    _0x253d74 = 0x0,
    _0x2b23ef = [],
    _0x1463c7 = [],
    _0x74e07 = 0x0,
    _0x3649d2 = ![],
    _0x7b704f = null,
    _0x4a29f7 = 0x0,
    _0xed3e2d = 0x0,
    _0x536e41 = -0x1;
  var _0x3393f1 = _0x1de12c[_0x51c633(0x212)];
  var _0x55a945 = [],
    _0xe8f3b3 = [],
    _0x2b9198 = 0xff,
    _0x288527 = 0x0,
    _0x3b9fef = 0x0,
    _0x211fec = 0x0,
    _0x221839 = 0x0,
    _0x35f9cf = 0x0,
    _0x2205df = [];
  if (_0x5adaff == 0x5a) {
    var _0x1cc6cb = (_0x3211d2 - 0x1) % 0x8;
    for (var _0x4ecef9 = 0x0; _0x4ecef9 < _0x14a146; _0x4ecef9++) {
      _0x253d74 = 0x0, _0x536e41++;
      for (var _0x563e1e = _0x3211d2 - 0x1; _0x563e1e >= 0x0; _0x563e1e--) {
        var _0x54cf1f = _0x563e1e * _0x14a146 + _0x4ecef9,
          _0x125e20 = _0x54cf1f * 0x4;
        var _0x99b5f7 = _0x3d82f0[_0x125e20] * 0.299 + _0x3d82f0[_0x125e20 + 0x1] * 0.587 + _0x3d82f0[_0x125e20 + 0x2] * 0.114;
        var _0x5328dd = 0x80;
        if (_0x563e1e % 0x8 == _0x1cc6cb) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0x7f;else {
          if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x1 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xbf;else {
            if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x2 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xdf;else {
              if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x3 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xef;else {
                if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x4 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xf7;else {
                  if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x5 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xfb;else {
                    if (_0x563e1e % 0x8 == (_0x1cc6cb - 0x6 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xfd;else _0x563e1e % 0x8 == (_0x1cc6cb - 0x7 + 0x8) % 0x8 && (_0x2ae66f &= _0x99b5f7 < _0x5328dd ? 0xff : 0xfe, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0), _0x2ae66f = 0xff, _0x253d74++);
                  }
                }
              }
            }
          }
        }
        if (_0x563e1e == 0x0) {
          if (_0x563e1e % 0x8 != (_0x1cc6cb - 0x7 + 0x8) % 0x8) {
            var _0x53f566 = 0x8 - _0x3211d2 % 0x8;
            _0x2ae66f = _0x2ae66f >> _0x53f566 << _0x53f566, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x253d74 = 0x0, _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0);
          }
          if (_0x564c01) {
            if (_0x4ecef9 == _0x14a146 - 0x1) {
              if (_0x7b704f != null) {
                var _0x5557c5 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                if (_0x221839 + _0x5557c5[_0x51c633(0x1f5)] >= _0x4bde42) {
                  var _0x313c84 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                  _0x55a945[_0x51c633(0x1fb)](_0x313c84), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                  var _0x159a52 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x313c84['byteLength'], _0x211fec);
                  _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x159a52), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x5557c5), _0x221839 += _0x5557c5[_0x51c633(0x1f5)];
                } else _0x55a945[_0x51c633(0x1fb)](_0x5557c5), _0x221839 += _0x5557c5[_0x51c633(0x1f5)];
              }
              var _0x53adec = DataUntils['createData'](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
              _0x55a945[_0x51c633(0x1fb)](_0x53adec), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
              var _0x2b1844 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x53adec[_0x51c633(0x1f5)], _0x211fec);
              _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x2b1844), _0x7b704f = null;
            }
          } else {
            if (_0x74e07 == 0x0) {
              _0x4a29f7 = _0x536e41, _0x74e07++, _0xed3e2d++, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
              ;
              _0x3649d2 = _0x5eccfa;
            } else {
              _0x74e07++;
              if (_0x4a29f7 + _0xed3e2d == _0x536e41) {
                if (_0x7b704f == null) {
                  _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                  ;
                  _0x3649d2 = _0x5eccfa, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1;
                } else {
                  var _0x1e7427 = DataUntils[_0x51c633(0x1f9)](_0x7b704f),
                    _0x135e46 = DataUntils['ab2hex'](_0x36e809);
                  if (_0x1e7427 == _0x135e46) {
                    if (_0xed3e2d >= 0xff) {
                      var _0x2b8921 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x2b8921['byteLength'] >= _0x4bde42) {
                        var _0x1f9597 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945['push'](_0x1f9597), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x523885 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x1f9597['byteLength'], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x523885), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x2b8921), _0x221839 += _0x2b8921[_0x51c633(0x1f5)];
                      } else _0x55a945[_0x51c633(0x1fb)](_0x2b8921), _0x221839 += _0x2b8921[_0x51c633(0x1f5)];
                    }
                    _0xed3e2d++;
                  } else {
                    var _0x364c30 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                    if (_0x221839 + _0x364c30['byteLength'] >= _0x4bde42) {
                      var _0x37b1f9 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                      _0x55a945['push'](_0x37b1f9), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x4aeb46 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x37b1f9['byteLength'], _0x211fec);
                      _0x211fec++, _0x221839 = 0x0, _0xe8f3b3['push'](_0x4aeb46), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x364c30), _0x221839 += _0x364c30[_0x51c633(0x1f5)];
                    } else _0x55a945[_0x51c633(0x1fb)](_0x364c30), _0x221839 += _0x364c30[_0x51c633(0x1f5)];
                    _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809['slice'](0x0, _0x33b8f7);
                    ;
                    _0x3649d2 = _0x5eccfa;
                  }
                }
              } else {
                if (_0x7b704f == null) {
                  _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                  ;
                  _0x3649d2 = _0x5eccfa;
                } else {
                  var _0x5ac8d3 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                  if (_0x221839 + _0x5ac8d3[_0x51c633(0x1f5)] >= _0x4bde42) {
                    var _0x1f105c = DataUntils['createData'](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                    _0x55a945[_0x51c633(0x1fb)](_0x1f105c), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0x383edd = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x1f105c['byteLength'], _0x211fec);
                    _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x383edd), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x5ac8d3), _0x221839 += _0x5ac8d3[_0x51c633(0x1f5)];
                  } else _0x55a945[_0x51c633(0x1fb)](_0x5ac8d3), _0x221839 += _0x5ac8d3[_0x51c633(0x1f5)];
                  _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                  ;
                  _0x3649d2 = _0x5eccfa;
                }
              }
              if (_0x4ecef9 == _0x14a146 - 0x1) {
                if (_0x7b704f != null) {
                  var _0x282a35 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                  if (_0x221839 + _0x282a35['byteLength'] >= _0x4bde42) {
                    var _0x4e73c3 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                    _0x55a945['push'](_0x4e73c3), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0xc4d20f = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x4e73c3['byteLength'], _0x211fec);
                    _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0xc4d20f), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x282a35), _0x221839 += _0x282a35[_0x51c633(0x1f5)];
                  } else _0x55a945['push'](_0x282a35), _0x221839 += _0x282a35[_0x51c633(0x1f5)];
                }
                var _0x17e610 = DataUntils['createData'](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                _0x55a945[_0x51c633(0x1fb)](_0x17e610), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                var _0x4013c1 = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x17e610[_0x51c633(0x1f5)], _0x211fec);
                _0x55a945 = [], _0xe8f3b3['push'](_0x4013c1), _0x7b704f = null;
              }
            }
          }
          var _0xeba045 = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
          if (_0x4f9221 == null) _0x4f9221 = _0xeba045[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x5bd85f++, _0x522bda = _0x5eccfa;else {
            var _0x557fb2 = DataUntils[_0x51c633(0x1f9)](_0x4f9221),
              _0x617621 = DataUntils[_0x51c633(0x1f9)](_0xeba045);
            var _0x4707e8 = ![],
              _0x1aa1a3 = ![];
            if (_0x557fb2 == _0x617621) {
              if (_0x5bd85f >= 0xff) {
                var _0x14afc8 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x4f9221, _0x1847b1, _0x5bd85f, _0xf5a13e);
                _0x35f9cf += _0x5bd85f;
                if (_0x288527 + _0x14afc8[_0x51c633(0x1f5)] >= _0x4bde42) {
                  var _0x498c05 = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                  _0x1463c7[_0x51c633(0x1fb)](_0x498c05), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                  var _0x24edb3 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x498c05['byteLength'], _0x3b9fef);
                  _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x24edb3), _0x1463c7 = [], _0x1463c7[_0x51c633(0x1fb)](_0x14afc8), _0x288527 += _0x14afc8[_0x51c633(0x1f5)];
                } else _0x1463c7['push'](_0x14afc8), _0x288527 += _0x14afc8[_0x51c633(0x1f5)];
                _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x0;
              }
              _0x5bd85f++, _0x4707e8 = !![];
            } else {
              var _0x702188 = null;
              if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                var _0x58b58c = parseInt(_0x2628c1['left'] / 0x8);
                _0x702188 = _0x4f9221['slice'](_0x58b58c, _0x4f9221['byteLength'] - _0x58b58c);
              }
              if (_0x2628c1['right'] > 0x0) {
                var _0x5c683c = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                _0x702188 != null ? _0x702188 = _0x702188[_0x51c633(0x1df)](0x0, _0x702188[_0x51c633(0x1f5)] - _0x5c683c) : _0x702188 = _0x4f9221[_0x51c633(0x1df)](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x5c683c);
              }
              _0x702188 == null && (_0x702188 = _0x4f9221);
              if (_0x5bd85f > 0x0) {
                var _0x66ff32 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x702188, _0x1847b1, _0x5bd85f, _0xf5a13e);
                if (_0x288527 + _0x66ff32[_0x51c633(0x1f5)] >= _0x4bde42) {
                  var _0x2d2c9b = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                  _0x1463c7[_0x51c633(0x1fb)](_0x2d2c9b);
                  var _0x36ca82 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x2d2c9b[_0x51c633(0x1f5)], _0x3b9fef);
                  _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x36ca82), _0x1463c7 = [], _0x1463c7['push'](_0x66ff32), _0x288527 += _0x66ff32[_0x51c633(0x1f5)];
                } else _0x1463c7[_0x51c633(0x1fb)](_0x66ff32), _0x288527 += _0x66ff32[_0x51c633(0x1f5)];
              }
              _0x4f9221 = _0xeba045['slice'](0x0, _0x33b8f7), _0x522bda = _0x5eccfa, _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x1;
            }
            if (_0x4ecef9 == _0x14a146 - 0x1) {
              var _0x499e8b = null;
              if (_0x2628c1['left'] > 0x0) {
                var _0x242cc2 = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                _0x499e8b = _0x4f9221[_0x51c633(0x1df)](_0x242cc2, _0x4f9221[_0x51c633(0x1f5)] - _0x242cc2);
              }
              if (_0x2628c1['right'] > 0x0) {
                var _0x2121d4 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                _0x499e8b != null ? _0x499e8b = _0x499e8b[_0x51c633(0x1df)](0x0, _0x499e8b['byteLength'] - _0x2121d4) : _0x499e8b = _0x4f9221['slice'](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x2121d4);
              }
              _0x499e8b == null && (_0x499e8b = _0x4f9221);
              var _0x44fae5 = DataUntils['doCreateBuffer'](_0x522bda, _0x499e8b, _0x1847b1, _0x5bd85f, _0xf5a13e);
              if (_0x288527 + _0x44fae5[_0x51c633(0x1f5)] >= _0x4bde42) {
                var _0x3ceea4 = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                _0x1463c7[_0x51c633(0x1fb)](_0x3ceea4);
                var _0x868800 = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x3ceea4[_0x51c633(0x1f5)], _0x3b9fef);
                _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x868800), _0x1463c7 = [];
              }
              _0x1463c7['push'](_0x44fae5), _0x288527 += _0x44fae5[_0x51c633(0x1f5)];
              var _0x20122b = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
              _0x1463c7[_0x51c633(0x1fb)](_0x20122b);
              var _0x4add64 = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x20122b[_0x51c633(0x1f5)], _0x3b9fef);
              _0x288527 = 0x0, _0x2b23ef['push'](_0x4add64);
            }
          }
          _0x5eccfa = !![], _0x2ae66f = 0xff;
        }
      }
    }
    var _0x1a95fe = {
      '0': _0x2b23ef,
      '1': _0xe8f3b3,
      '2': _0x74e07,
      '3': _0x2205df,
      '4': !![]
    };
    return _0x1a95fe;
  } else {
    if (_0x5adaff == 0xb4) {
      var _0x51021 = (_0x14a146 - 0x1) % 0x8;
      for (var _0x4ecef9 = _0x3211d2 - 0x1; _0x4ecef9 >= 0x0; _0x4ecef9--) {
        _0x253d74 = 0x0, _0x536e41++;
        var _0x564c01 = !![];
        for (var _0x563e1e = _0x14a146 - 0x1; _0x563e1e >= 0x0; _0x563e1e--) {
          var _0x4fbb36 = _0x563e1e + _0x4ecef9 * _0x14a146,
            _0x3b18c7 = _0x4fbb36 * 0x4;
          var _0x99b5f7 = _0x3d82f0[_0x3b18c7] * 0.299 + _0x3d82f0[_0x3b18c7 + 0x1] * 0.587 + _0x3d82f0[_0x3b18c7 + 0x2] * 0.114,
            _0x2b08d8 = _0x3393f1[_0x3b18c7] * 0.299 + _0x3393f1[_0x3b18c7 + 0x1] * 0.587 + _0x3393f1[_0x3b18c7 + 0x2] * 0.114;
          var _0x134061 = 0x80;
          if (_0x563e1e % 0x8 == _0x51021) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0x7f, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0x7f;else {
            if (_0x563e1e % 0x8 == (_0x51021 - 0x1 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xbf, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xbf;else {
              if (_0x563e1e % 0x8 == (_0x51021 - 0x2 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xdf, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xdf;else {
                if (_0x563e1e % 0x8 == (_0x51021 - 0x3 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xef, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xef;else {
                  if (_0x563e1e % 0x8 == (_0x51021 - 0x4 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xf7, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xf7;else {
                    if (_0x563e1e % 0x8 == (_0x51021 - 0x5 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xfb, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xfb;else {
                      if (_0x563e1e % 0x8 == (_0x51021 - 0x6 + 0x8) % 0x8) _0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xfd, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xfd;else _0x563e1e % 0x8 == (_0x51021 - 0x7 + 0x8) % 0x8 && (_0x2ae66f &= _0x99b5f7 < _0x134061 ? 0xff : 0xfe, _0x2b9198 &= _0x2b08d8 < _0x134061 ? 0xff : 0xfe, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0), _0x564c01 && (_0x564c01 = _0x2ae66f == _0x2b9198), _0x2b9198 = 0xff, _0x2ae66f = 0xff, _0x253d74++);
                    }
                  }
                }
              }
            }
          }
          if (_0x563e1e == 0x0) {
            if (_0x563e1e % 0x8 != (_0x51021 - 0x7 + 0x8) % 0x8) {
              var _0x383427 = 0x8 - _0x14a146 % 0x8;
              _0x2ae66f = _0x2ae66f >> _0x383427 << _0x383427, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x253d74 = 0x0, _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0);
            }
            if (_0x564c01) {
              if (_0x4ecef9 == 0x0) {
                if (_0x7b704f != null) {
                  var _0x51b7b5 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                  if (_0x221839 + _0x51b7b5[_0x51c633(0x1f5)] >= _0x4bde42) {
                    var _0x1db32e = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                    _0x55a945['push'](_0x1db32e), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0x3cc6cf = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x1db32e[_0x51c633(0x1f5)], _0x211fec);
                    _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x3cc6cf), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x51b7b5), _0x221839 += _0x51b7b5['byteLength'];
                  } else _0x55a945[_0x51c633(0x1fb)](_0x51b7b5), _0x221839 += _0x51b7b5[_0x51c633(0x1f5)];
                }
                var _0x28a4ca = DataUntils['createData'](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                _0x55a945[_0x51c633(0x1fb)](_0x28a4ca), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                var _0x14c51c = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x28a4ca[_0x51c633(0x1f5)], _0x211fec);
                _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x14c51c), _0x7b704f = null;
              }
            } else {
              if (_0x74e07 == 0x0) {
                _0x4a29f7 = _0x536e41, _0x74e07++, _0xed3e2d++, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                ;
                _0x3649d2 = _0x5eccfa;
              } else {
                _0x74e07++;
                if (_0x4a29f7 + _0xed3e2d == _0x536e41) {
                  if (_0x7b704f == null) {
                    _0x7b704f = _0x36e809['slice'](0x0, _0x33b8f7);
                    ;
                    _0x3649d2 = _0x5eccfa, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1;
                  } else {
                    var _0xa95d16 = DataUntils[_0x51c633(0x1f9)](_0x7b704f),
                      _0x4366ed = DataUntils[_0x51c633(0x1f9)](_0x36e809);
                    if (_0xa95d16 == _0x4366ed) {
                      if (_0xed3e2d >= 0xff) {
                        var _0x1622ae = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                        if (_0x221839 + _0x1622ae['byteLength'] >= _0x4bde42) {
                          var _0x5ed990 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                          _0x55a945[_0x51c633(0x1fb)](_0x5ed990), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                          var _0x323c84 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x5ed990['byteLength'], _0x211fec);
                          _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x323c84), _0x55a945 = [], _0x55a945['push'](_0x1622ae), _0x221839 += _0x1622ae[_0x51c633(0x1f5)];
                        } else _0x55a945[_0x51c633(0x1fb)](_0x1622ae), _0x221839 += _0x1622ae[_0x51c633(0x1f5)];
                      }
                      _0xed3e2d++;
                    } else {
                      var _0x11760d = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x11760d[_0x51c633(0x1f5)] >= _0x4bde42) {
                        var _0x560665 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945[_0x51c633(0x1fb)](_0x560665), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x144cb8 = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x560665[_0x51c633(0x1f5)], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x144cb8), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x11760d), _0x221839 += _0x11760d['byteLength'];
                      } else _0x55a945['push'](_0x11760d), _0x221839 += _0x11760d[_0x51c633(0x1f5)];
                      _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809['slice'](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa;
                    }
                  }
                } else {
                  if (_0x7b704f == null) {
                    _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                    ;
                    _0x3649d2 = _0x5eccfa;
                  } else {
                    var _0xfadedb = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                    if (_0x221839 + _0xfadedb[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x499e0f = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                      _0x55a945[_0x51c633(0x1fb)](_0x499e0f), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x159484 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x499e0f[_0x51c633(0x1f5)], _0x211fec);
                      _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x159484), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0xfadedb), _0x221839 += _0xfadedb['byteLength'];
                    } else _0x55a945[_0x51c633(0x1fb)](_0xfadedb), _0x221839 += _0xfadedb['byteLength'];
                    _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                    ;
                    _0x3649d2 = _0x5eccfa;
                  }
                }
                if (_0x4ecef9 == 0x0) {
                  if (_0x7b704f != null) {
                    var _0x54cf74 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                    if (_0x221839 + _0x54cf74[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x38a323 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                      _0x55a945[_0x51c633(0x1fb)](_0x38a323), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x25f225 = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x38a323[_0x51c633(0x1f5)], _0x211fec);
                      _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x25f225), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x54cf74), _0x221839 += _0x54cf74['byteLength'];
                    } else _0x55a945['push'](_0x54cf74), _0x221839 += _0x54cf74[_0x51c633(0x1f5)];
                  }
                  var _0x4776ac = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                  _0x55a945[_0x51c633(0x1fb)](_0x4776ac), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                  var _0x808c1a = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x4776ac[_0x51c633(0x1f5)], _0x211fec);
                  _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x808c1a), _0x7b704f = null;
                }
              }
            }
            var _0x10dee8 = _0x36e809['slice'](0x0, _0x33b8f7);
            if (_0x4f9221 == null) _0x4f9221 = _0x10dee8[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x5bd85f++, _0x522bda = _0x5eccfa;else {
              var _0x4721f6 = DataUntils[_0x51c633(0x1f9)](_0x4f9221),
                _0x183d8e = DataUntils[_0x51c633(0x1f9)](_0x10dee8);
              var _0x4707e8 = ![],
                _0x1aa1a3 = ![];
              if (_0x4721f6 == _0x183d8e) {
                if (_0x5bd85f >= 0xff) {
                  var _0x492920 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x4f9221, _0x1847b1, _0x5bd85f, _0xf5a13e);
                  _0x35f9cf += _0x5bd85f;
                  if (_0x288527 + _0x492920['byteLength'] >= _0x4bde42) {
                    var _0x304796 = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                    _0x1463c7[_0x51c633(0x1fb)](_0x304796), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0x1fa9b6 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x304796['byteLength'], _0x3b9fef);
                    _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x1fa9b6), _0x1463c7 = [], _0x1463c7['push'](_0x492920), _0x288527 += _0x492920[_0x51c633(0x1f5)];
                  } else _0x1463c7[_0x51c633(0x1fb)](_0x492920), _0x288527 += _0x492920[_0x51c633(0x1f5)];
                  _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x0;
                }
                _0x5bd85f++, _0x4707e8 = !![];
              } else {
                var _0x52b27e = null;
                if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                  var _0x4a946b = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                  _0x52b27e = _0x4f9221[_0x51c633(0x1df)](_0x4a946b, _0x4f9221[_0x51c633(0x1f5)] - _0x4a946b);
                }
                if (_0x2628c1[_0x51c633(0x1d6)] > 0x0) {
                  var _0x100880 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                  _0x52b27e != null ? _0x52b27e = _0x52b27e[_0x51c633(0x1df)](0x0, _0x52b27e['byteLength'] - _0x100880) : _0x52b27e = _0x4f9221['slice'](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x100880);
                }
                _0x52b27e == null && (_0x52b27e = _0x4f9221);
                if (_0x5bd85f > 0x0) {
                  var _0x491082 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x52b27e, _0x1847b1, _0x5bd85f, _0xf5a13e);
                  if (_0x288527 + _0x491082[_0x51c633(0x1f5)] >= _0x4bde42) {
                    var _0x1362dd = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                    _0x1463c7['push'](_0x1362dd);
                    var _0x3d2562 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x1362dd[_0x51c633(0x1f5)], _0x3b9fef);
                    _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x3d2562), _0x1463c7 = [], _0x1463c7['push'](_0x491082), _0x288527 += _0x491082[_0x51c633(0x1f5)];
                  } else _0x1463c7['push'](_0x491082), _0x288527 += _0x491082[_0x51c633(0x1f5)];
                }
                _0x4f9221 = _0x10dee8[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x522bda = _0x5eccfa, _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x1;
              }
              if (_0x4ecef9 == 0x0) {
                var _0x5a6063 = null;
                if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                  var _0x58ddb1 = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                  _0x5a6063 = _0x4f9221[_0x51c633(0x1df)](_0x58ddb1, _0x4f9221[_0x51c633(0x1f5)] - _0x58ddb1);
                }
                if (_0x2628c1[_0x51c633(0x1d6)] > 0x0) {
                  var _0x592495 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                  _0x5a6063 != null ? _0x5a6063 = _0x5a6063[_0x51c633(0x1df)](0x0, _0x5a6063[_0x51c633(0x1f5)] - _0x592495) : _0x5a6063 = _0x4f9221[_0x51c633(0x1df)](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x592495);
                }
                _0x5a6063 == null && (_0x5a6063 = _0x4f9221);
                var _0xbccd52 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x5a6063, _0x1847b1, _0x5bd85f, _0xf5a13e);
                if (_0x288527 + _0xbccd52[_0x51c633(0x1f5)] >= _0x4bde42) {
                  var _0x1cac96 = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                  _0x1463c7['push'](_0x1cac96);
                  var _0x357098 = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x1cac96[_0x51c633(0x1f5)], _0x3b9fef);
                  _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x357098), _0x1463c7 = [];
                }
                _0x1463c7[_0x51c633(0x1fb)](_0xbccd52), _0x288527 += _0xbccd52[_0x51c633(0x1f5)];
                var _0x2c7b20 = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                _0x1463c7[_0x51c633(0x1fb)](_0x2c7b20);
                var _0x2fd204 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x2c7b20[_0x51c633(0x1f5)], _0x3b9fef);
                _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x2fd204);
              }
            }
            _0x5eccfa = !![], _0x2ae66f = 0xff;
          }
        }
      }
      var _0x1171cc = {
        '0': _0x2b23ef,
        '1': _0xe8f3b3,
        '2': _0x74e07,
        '3': _0x2205df,
        '4': !![]
      };
      return _0x1171cc;
    } else {
      if (_0x5adaff == 0x10e) {
        for (var _0x4ecef9 = _0x14a146 - 0x1; _0x4ecef9 >= 0x0; _0x4ecef9--) {
          _0x253d74 = 0x0, _0x536e41++;
          for (var _0x563e1e = 0x0; _0x563e1e < _0x3211d2; _0x563e1e++) {
            var _0x39415c = _0x563e1e * _0x14a146 + _0x4ecef9,
              _0x48d5e8 = _0x39415c * 0x4;
            var _0x99b5f7 = _0x3d82f0[_0x48d5e8] * 0.299 + _0x3d82f0[_0x48d5e8 + 0x1] * 0.587 + _0x3d82f0[_0x48d5e8 + 0x2] * 0.114;
            var _0x3afbc7 = 0x80;
            if (_0x563e1e % 0x8 == 0x0) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0x7f;else {
              if (_0x563e1e % 0x8 == 0x1) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xbf;else {
                if (_0x563e1e % 0x8 == 0x2) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xdf;else {
                  if (_0x563e1e % 0x8 == 0x3) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xef;else {
                    if (_0x563e1e % 0x8 == 0x4) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xf7;else {
                      if (_0x563e1e % 0x8 == 0x5) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xfb;else {
                        if (_0x563e1e % 0x8 == 0x6) _0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xfd;else _0x563e1e % 0x8 == 0x7 && (_0x2ae66f &= _0x99b5f7 < _0x3afbc7 ? 0xff : 0xfe, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0), _0x2ae66f = 0xff, _0x253d74++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x563e1e == _0x3211d2 - 0x1) {
              if (_0x563e1e % 0x8 != 0x7) {
                var _0x2f901f = 0x8 - _0x3211d2 % 0x8;
                _0x2ae66f = _0x2ae66f >> _0x2f901f << _0x2f901f, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x253d74 = 0x0, _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0);
              }
              if (_0x564c01) {
                if (_0x4ecef9 == 0x0) {
                  if (_0x7b704f != null) {
                    var _0x50eefb = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                    if (_0x221839 + _0x50eefb[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x2e269a = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                      _0x55a945[_0x51c633(0x1fb)](_0x2e269a), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x59d059 = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x2e269a['byteLength'], _0x211fec);
                      _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x59d059), _0x55a945 = [], _0x55a945['push'](_0x50eefb), _0x221839 += _0x50eefb[_0x51c633(0x1f5)];
                    } else _0x55a945['push'](_0x50eefb), _0x221839 += _0x50eefb[_0x51c633(0x1f5)];
                  }
                  var _0x2182e2 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                  _0x55a945[_0x51c633(0x1fb)](_0x2182e2), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                  var _0x7d975a = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x2182e2[_0x51c633(0x1f5)], _0x211fec);
                  _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x7d975a), _0x7b704f = null;
                }
              } else {
                if (_0x74e07 == 0x0) {
                  _0x4a29f7 = _0x536e41, _0x74e07++, _0xed3e2d++, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                  ;
                  _0x3649d2 = _0x5eccfa;
                } else {
                  _0x74e07++;
                  if (_0x4a29f7 + _0xed3e2d == _0x536e41) {
                    if (_0x7b704f == null) {
                      _0x7b704f = _0x36e809['slice'](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1;
                    } else {
                      var _0x590a82 = DataUntils['ab2hex'](_0x7b704f),
                        _0x6cf1da = DataUntils[_0x51c633(0x1f9)](_0x36e809);
                      if (_0x590a82 == _0x6cf1da) {
                        if (_0xed3e2d >= 0xff) {
                          var _0x53e96f = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                          if (_0x221839 + _0x53e96f['byteLength'] >= _0x4bde42) {
                            var _0x47ee1b = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                            _0x55a945[_0x51c633(0x1fb)](_0x47ee1b), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                            var _0x30a2db = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0x47ee1b['byteLength'], _0x211fec);
                            _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x30a2db), _0x55a945 = [], _0x55a945['push'](_0x53e96f), _0x221839 += _0x53e96f[_0x51c633(0x1f5)];
                          } else _0x55a945[_0x51c633(0x1fb)](_0x53e96f), _0x221839 += _0x53e96f[_0x51c633(0x1f5)];
                        }
                        _0xed3e2d++;
                      } else {
                        var _0x2ca6ae = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                        if (_0x221839 + _0x2ca6ae['byteLength'] >= _0x4bde42) {
                          var _0x10dbe2 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                          _0x55a945['push'](_0x10dbe2), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                          var _0x3a0abc = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x10dbe2[_0x51c633(0x1f5)], _0x211fec);
                          _0x211fec++, _0x221839 = 0x0, _0xe8f3b3['push'](_0x3a0abc), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x2ca6ae), _0x221839 += _0x2ca6ae[_0x51c633(0x1f5)];
                        } else _0x55a945['push'](_0x2ca6ae), _0x221839 += _0x2ca6ae[_0x51c633(0x1f5)];
                        _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                        ;
                        _0x3649d2 = _0x5eccfa;
                      }
                    }
                  } else {
                    if (_0x7b704f == null) {
                      _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa;
                    } else {
                      var _0x35bbb1 = DataUntils['doCreateBuffer'](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x35bbb1[_0x51c633(0x1f5)] >= _0x4bde42) {
                        var _0x4cb191 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945['push'](_0x4cb191), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x3d512e = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x4cb191[_0x51c633(0x1f5)], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3['push'](_0x3d512e), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x35bbb1), _0x221839 += _0x35bbb1[_0x51c633(0x1f5)];
                      } else _0x55a945[_0x51c633(0x1fb)](_0x35bbb1), _0x221839 += _0x35bbb1[_0x51c633(0x1f5)];
                      _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x536e41, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa;
                    }
                  }
                  if (_0x4ecef9 == 0x0) {
                    if (_0x7b704f != null) {
                      var _0x1f76ae = DataUntils['doCreateBuffer'](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x1f76ae['byteLength'] >= _0x4bde42) {
                        var _0x271292 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945[_0x51c633(0x1fb)](_0x271292), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x573f32 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x271292[_0x51c633(0x1f5)], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x573f32), _0x55a945 = [], _0x55a945['push'](_0x1f76ae), _0x221839 += _0x1f76ae['byteLength'];
                      } else _0x55a945[_0x51c633(0x1fb)](_0x1f76ae), _0x221839 += _0x1f76ae['byteLength'];
                    }
                    var _0x4ef874 = DataUntils['createData'](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                    _0x55a945[_0x51c633(0x1fb)](_0x4ef874), _0x35f9cf += _0xed3e2d, _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0xfa8be5 = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x4ef874[_0x51c633(0x1f5)], _0x211fec);
                    _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0xfa8be5), _0x7b704f = null;
                  }
                }
              }
              var _0x53d907 = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
              if (_0x4f9221 == null) _0x4f9221 = _0x53d907[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x5bd85f++, _0x522bda = _0x5eccfa;else {
                var _0x4bcb06 = DataUntils[_0x51c633(0x1f9)](_0x4f9221),
                  _0xe9ff11 = DataUntils['ab2hex'](_0x53d907);
                var _0x4707e8 = ![],
                  _0x1aa1a3 = ![];
                if (_0x4bcb06 == _0xe9ff11) {
                  if (_0x5bd85f >= 0xff) {
                    var _0x105f95 = DataUntils['doCreateBuffer'](_0x522bda, _0x4f9221, _0x1847b1, _0x5bd85f, _0xf5a13e);
                    _0x35f9cf += _0x5bd85f;
                    if (_0x288527 + _0x105f95[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x440200 = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                      _0x1463c7[_0x51c633(0x1fb)](_0x440200), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x10220e = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x440200[_0x51c633(0x1f5)], _0x3b9fef);
                      _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x10220e), _0x1463c7 = [], _0x1463c7['push'](_0x105f95), _0x288527 += _0x105f95[_0x51c633(0x1f5)];
                    } else _0x1463c7[_0x51c633(0x1fb)](_0x105f95), _0x288527 += _0x105f95['byteLength'];
                    _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x0;
                  }
                  _0x5bd85f++, _0x4707e8 = !![];
                } else {
                  var _0x1d5345 = null;
                  if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                    var _0x3bf204 = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                    _0x1d5345 = _0x4f9221[_0x51c633(0x1df)](_0x3bf204, _0x4f9221[_0x51c633(0x1f5)] - _0x3bf204);
                  }
                  if (_0x2628c1[_0x51c633(0x1d6)] > 0x0) {
                    var _0xdfd3d0 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                    _0x1d5345 != null ? _0x1d5345 = _0x1d5345[_0x51c633(0x1df)](0x0, _0x1d5345['byteLength'] - _0xdfd3d0) : _0x1d5345 = _0x4f9221['slice'](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0xdfd3d0);
                  }
                  _0x1d5345 == null && (_0x1d5345 = _0x4f9221);
                  if (_0x5bd85f > 0x0) {
                    var _0x1c07bd = DataUntils[_0x51c633(0x213)](_0x522bda, _0x1d5345, _0x1847b1, _0x5bd85f, _0xf5a13e);
                    if (_0x288527 + _0x1c07bd[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x836ea6 = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                      _0x1463c7['push'](_0x836ea6);
                      var _0x5d07d4 = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x836ea6[_0x51c633(0x1f5)], _0x3b9fef);
                      _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x5d07d4), _0x1463c7 = [], _0x1463c7[_0x51c633(0x1fb)](_0x1c07bd), _0x288527 += _0x1c07bd[_0x51c633(0x1f5)];
                    } else _0x1463c7[_0x51c633(0x1fb)](_0x1c07bd), _0x288527 += _0x1c07bd[_0x51c633(0x1f5)];
                  }
                  _0x4f9221 = _0x53d907['slice'](0x0, _0x33b8f7), _0x522bda = _0x5eccfa, _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x1;
                }
                if (_0x4ecef9 == 0x0) {
                  var _0x529461 = null;
                  if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                    var _0xbb0cd = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                    _0x529461 = _0x4f9221[_0x51c633(0x1df)](_0xbb0cd, _0x4f9221[_0x51c633(0x1f5)] - _0xbb0cd);
                  }
                  if (_0x2628c1['right'] > 0x0) {
                    var _0x562eb7 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                    _0x529461 != null ? _0x529461 = _0x529461[_0x51c633(0x1df)](0x0, _0x529461[_0x51c633(0x1f5)] - _0x562eb7) : _0x529461 = _0x4f9221['slice'](0x0, _0x4f9221['byteLength'] - _0x562eb7);
                  }
                  _0x529461 == null && (_0x529461 = _0x4f9221);
                  var _0x2c1b86 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x529461, _0x1847b1, _0x5bd85f, _0xf5a13e);
                  if (_0x288527 + _0x2c1b86['byteLength'] >= _0x4bde42) {
                    var _0xa1231e = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                    _0x1463c7['push'](_0xa1231e);
                    var _0x35781a = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0xa1231e[_0x51c633(0x1f5)], _0x3b9fef);
                    _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef['push'](_0x35781a), _0x1463c7 = [];
                  }
                  _0x1463c7[_0x51c633(0x1fb)](_0x2c1b86), _0x288527 += _0x2c1b86[_0x51c633(0x1f5)];
                  var _0x35e969 = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                  _0x1463c7[_0x51c633(0x1fb)](_0x35e969);
                  var _0x13110f = DataUntils['deal120ByteArrayWithZip'](_0x1463c7, _0x3672c3, _0x288527 + _0x35e969[_0x51c633(0x1f5)], _0x3b9fef);
                  _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x13110f);
                }
              }
              _0x5eccfa = !![], _0x2ae66f = 0xff;
            }
          }
        }
        var _0x8ad7bc = {
          '0': _0x2b23ef,
          '1': _0xe8f3b3,
          '2': _0x74e07,
          '3': _0x2205df,
          '4': !![]
        };
        return _0x8ad7bc;
      } else {
        for (var _0x4ecef9 = 0x0; _0x4ecef9 < _0x3211d2; _0x4ecef9++) {
          _0x253d74 = 0x0;
          var _0x564c01 = !![];
          for (var _0x563e1e = 0x0; _0x563e1e < _0x14a146; _0x563e1e++) {
            var _0x37ab9d = _0x563e1e + _0x4ecef9 * _0x14a146,
              _0x45f5d8 = _0x37ab9d * 0x4;
            var _0x99b5f7 = _0x3d82f0[_0x45f5d8] * 0.299 + _0x3d82f0[_0x45f5d8 + 0x1] * 0.587 + _0x3d82f0[_0x45f5d8 + 0x2] * 0.114,
              _0x2b08d8 = _0x3393f1[_0x45f5d8] * 0.299 + _0x3393f1[_0x45f5d8 + 0x1] * 0.587 + _0x3393f1[_0x45f5d8 + 0x2] * 0.114;
            var _0x27a01f = 0x80;
            if (_0x563e1e % 0x8 == 0x0) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0x7f, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0x7f;else {
              if (_0x563e1e % 0x8 == 0x1) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xbf, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xbf;else {
                if (_0x563e1e % 0x8 == 0x2) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xdf, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xdf;else {
                  if (_0x563e1e % 0x8 == 0x3) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xef, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xef;else {
                    if (_0x563e1e % 0x8 == 0x4) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xf7, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xf7;else {
                      if (_0x563e1e % 0x8 == 0x5) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xfb, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xfb;else {
                        if (_0x563e1e % 0x8 == 0x6) _0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xfd, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xfd;else _0x563e1e % 0x8 == 0x7 && (_0x2ae66f &= _0x99b5f7 < _0x27a01f ? 0xff : 0xfe, _0x2b9198 &= _0x2b08d8 < _0x27a01f ? 0xff : 0xfe, _0x264bf2['setUint8'](_0x253d74, _0x2ae66f), _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0), _0x564c01 && (_0x564c01 = _0x2ae66f == _0x2b9198), _0x2ae66f = 0xff, _0x2b9198 = 0xff, _0x253d74++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x563e1e == _0x14a146 - 0x1) {
              if (_0x563e1e % 0x8 != 0x7) {
                var _0x272a03 = 0x8 - _0x14a146 % 0x8;
                _0x2ae66f = _0x2ae66f >> _0x272a03 << _0x272a03, _0x264bf2[_0x51c633(0x1d7)](_0x253d74, _0x2ae66f), _0x253d74 = 0x0, _0x5eccfa && (_0x5eccfa = _0x2ae66f == 0x0);
              }
              if (_0x564c01) {
                if (_0x4ecef9 == _0x3211d2 - 0x1) {
                  if (_0x7b704f != null) {
                    var _0xce37ff = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                    if (_0x221839 + _0xce37ff[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x582875 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                      _0x55a945[_0x51c633(0x1fb)](_0x582875), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x32611b = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x582875[_0x51c633(0x1f5)], _0x211fec);
                      _0x211fec++, _0x221839 = 0x0, _0xe8f3b3['push'](_0x32611b), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0xce37ff), _0x221839 += _0xce37ff[_0x51c633(0x1f5)];
                    } else _0x55a945['push'](_0xce37ff), _0x221839 += _0xce37ff[_0x51c633(0x1f5)];
                  }
                  var _0x12c89c = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                  _0x55a945['push'](_0x12c89c), _0x35f9cf += _0xed3e2d, _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                  var _0x56ec2c = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x12c89c[_0x51c633(0x1f5)], _0x211fec);
                  _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x56ec2c), _0x7b704f = null;
                }
              } else {
                if (_0x74e07 == 0x0) {
                  _0x4a29f7 = _0x4ecef9, _0x74e07++, _0xed3e2d++, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                  ;
                  _0x3649d2 = _0x5eccfa;
                } else {
                  _0x74e07++;
                  if (_0x4a29f7 + _0xed3e2d == _0x4ecef9) {
                    if (_0x7b704f == null) {
                      _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa, _0x4a29f7 = _0x4ecef9, _0xed3e2d = 0x1;
                    } else {
                      var _0x5c2ea7 = DataUntils[_0x51c633(0x1f9)](_0x7b704f),
                        _0x10fdf = DataUntils[_0x51c633(0x1f9)](_0x36e809);
                      if (_0x5c2ea7 == _0x10fdf) {
                        if (_0xed3e2d >= 0xff) {
                          var _0x1da027 = DataUntils['doCreateBuffer'](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                          if (_0x221839 + _0x1da027[_0x51c633(0x1f5)] >= _0x4bde42) {
                            var _0x1c4dbe = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                            _0x55a945['push'](_0x1c4dbe), _0x35f9cf += _0xed3e2d, _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                            var _0xafc52c = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x1c4dbe['byteLength'], _0x211fec);
                            _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0xafc52c), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x1da027), _0x221839 += _0x1da027[_0x51c633(0x1f5)];
                          } else _0x55a945['push'](_0x1da027), _0x221839 += _0x1da027[_0x51c633(0x1f5)];
                        }
                        _0xed3e2d++;
                      } else {
                        var _0x4403be = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                        if (_0x221839 + _0x4403be['byteLength'] >= _0x4bde42) {
                          var _0x10b655 = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                          _0x55a945[_0x51c633(0x1fb)](_0x10b655), _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                          var _0x329d6b = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x10b655[_0x51c633(0x1f5)], _0x211fec);
                          _0x211fec++, _0x221839 = 0x0, _0xe8f3b3['push'](_0x329d6b), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x4403be), _0x221839 += _0x4403be[_0x51c633(0x1f5)];
                        } else _0x55a945[_0x51c633(0x1fb)](_0x4403be), _0x221839 += _0x4403be[_0x51c633(0x1f5)];
                        _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x4ecef9, _0xed3e2d = 0x1, _0x7b704f = _0x36e809['slice'](0x0, _0x33b8f7);
                        ;
                        _0x3649d2 = _0x5eccfa;
                      }
                    }
                  } else {
                    if (_0x7b704f == null) {
                      _0x4a29f7 = _0x4ecef9, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa;
                    } else {
                      var _0x504ed6 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x504ed6[_0x51c633(0x1f5)] >= _0x4bde42) {
                        var _0x131bda = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945[_0x51c633(0x1fb)](_0x131bda), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x2d580b = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0x131bda[_0x51c633(0x1f5)], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x2d580b), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x504ed6), _0x221839 += _0x504ed6['byteLength'];
                      } else _0x55a945[_0x51c633(0x1fb)](_0x504ed6), _0x221839 += _0x504ed6[_0x51c633(0x1f5)];
                      _0x35f9cf += _0xed3e2d, _0x4a29f7 = _0x4ecef9, _0xed3e2d = 0x1, _0x7b704f = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
                      ;
                      _0x3649d2 = _0x5eccfa;
                    }
                  }
                  if (_0x4ecef9 == _0x3211d2 - 0x1) {
                    if (_0x7b704f != null) {
                      var _0x9dc203 = DataUntils[_0x51c633(0x213)](_0x3649d2, _0x7b704f, _0x4a29f7, _0xed3e2d);
                      if (_0x221839 + _0x9dc203['byteLength'] >= _0x4bde42) {
                        var _0xe1c92b = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                        _0x55a945['push'](_0xe1c92b), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                        var _0x34f3be = DataUntils[_0x51c633(0x20d)](_0x55a945, _0x3672c3, _0x221839 + _0xe1c92b[_0x51c633(0x1f5)], _0x211fec);
                        _0x211fec++, _0x221839 = 0x0, _0xe8f3b3[_0x51c633(0x1fb)](_0x34f3be), _0x55a945 = [], _0x55a945[_0x51c633(0x1fb)](_0x9dc203), _0x221839 += _0x9dc203[_0x51c633(0x1f5)];
                      } else _0x55a945['push'](_0x9dc203), _0x221839 += _0x9dc203[_0x51c633(0x1f5)];
                    }
                    var _0xb8cdae = DataUntils[_0x51c633(0x1f2)](0x89, _0x211fec / 0x100, _0x211fec % 0x100);
                    _0x55a945[_0x51c633(0x1fb)](_0xb8cdae), _0x35f9cf += _0xed3e2d, _0x2205df['push'](_0x35f9cf), _0x35f9cf = 0x0;
                    var _0x32e47e = DataUntils['deal120ByteArrayWithZip'](_0x55a945, _0x3672c3, _0x221839 + _0xb8cdae['byteLength'], _0x211fec);
                    _0x55a945 = [], _0xe8f3b3[_0x51c633(0x1fb)](_0x32e47e), _0x7b704f = null;
                  }
                }
              }
              var _0x492fc0 = _0x36e809[_0x51c633(0x1df)](0x0, _0x33b8f7);
              if (_0x4f9221 == null) _0x4f9221 = _0x492fc0[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x5bd85f++, _0x522bda = _0x5eccfa;else {
                var _0x17d74e = DataUntils[_0x51c633(0x1f9)](_0x4f9221),
                  _0x106480 = DataUntils['ab2hex'](_0x492fc0);
                var _0x4707e8 = ![],
                  _0x1aa1a3 = ![];
                if (_0x17d74e == _0x106480) {
                  if (_0x5bd85f >= 0xff) {
                    var _0x51690f = DataUntils[_0x51c633(0x213)](_0x522bda, _0x4f9221, _0x1847b1, _0x5bd85f, _0xf5a13e);
                    _0x35f9cf += _0x5bd85f;
                    if (_0x288527 + _0x51690f[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x5570bb = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                      _0x1463c7[_0x51c633(0x1fb)](_0x5570bb), _0x2205df[_0x51c633(0x1fb)](_0x35f9cf), _0x35f9cf = 0x0;
                      var _0x175b45 = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x5570bb[_0x51c633(0x1f5)], _0x3b9fef);
                      _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x175b45), _0x1463c7 = [], _0x1463c7[_0x51c633(0x1fb)](_0x51690f), _0x288527 += _0x51690f[_0x51c633(0x1f5)];
                    } else _0x1463c7['push'](_0x51690f), _0x288527 += _0x51690f['byteLength'];
                    _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x0;
                  }
                  _0x5bd85f++, _0x4707e8 = !![];
                } else {
                  var _0x2a4525 = null;
                  if (_0x2628c1['left'] > 0x0) {
                    var _0x2883a1 = parseInt(_0x2628c1[_0x51c633(0x20b)] / 0x8);
                    _0x2a4525 = _0x4f9221['slice'](_0x2883a1, _0x4f9221[_0x51c633(0x1f5)] - _0x2883a1);
                  }
                  if (_0x2628c1[_0x51c633(0x1d6)] > 0x0) {
                    var _0x21b174 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                    _0x2a4525 != null ? _0x2a4525 = _0x2a4525[_0x51c633(0x1df)](0x0, _0x2a4525['byteLength'] - _0x21b174) : _0x2a4525 = _0x4f9221[_0x51c633(0x1df)](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x21b174);
                  }
                  _0x2a4525 == null && (_0x2a4525 = _0x4f9221);
                  if (_0x5bd85f > 0x0) {
                    var _0x26b3f3 = DataUntils[_0x51c633(0x213)](_0x522bda, _0x2a4525, _0x1847b1, _0x5bd85f, _0xf5a13e);
                    if (_0x288527 + _0x26b3f3[_0x51c633(0x1f5)] >= _0x4bde42) {
                      var _0x43fa99 = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                      _0x1463c7[_0x51c633(0x1fb)](_0x43fa99);
                      var _0x704c7c = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x43fa99[_0x51c633(0x1f5)], _0x3b9fef);
                      _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x704c7c), _0x1463c7 = [], _0x1463c7['push'](_0x26b3f3), _0x288527 += _0x26b3f3[_0x51c633(0x1f5)];
                    } else _0x1463c7[_0x51c633(0x1fb)](_0x26b3f3), _0x288527 += _0x26b3f3['byteLength'];
                  }
                  _0x4f9221 = _0x492fc0[_0x51c633(0x1df)](0x0, _0x33b8f7), _0x522bda = _0x5eccfa, _0x1847b1 += _0x5bd85f, _0x5bd85f = 0x1;
                }
                if (_0x4ecef9 == _0x3211d2 - 0x1) {
                  var _0x37e9cc = null;
                  if (_0x2628c1[_0x51c633(0x20b)] > 0x0) {
                    var _0x16c9a9 = parseInt(_0x2628c1['left'] / 0x8);
                    _0x37e9cc = _0x4f9221[_0x51c633(0x1df)](_0x16c9a9, _0x4f9221[_0x51c633(0x1f5)] - _0x16c9a9);
                  }
                  if (_0x2628c1[_0x51c633(0x1d6)] > 0x0) {
                    var _0x13ecd7 = parseInt(_0x2628c1[_0x51c633(0x1d6)] / 0x8);
                    _0x37e9cc != null ? _0x37e9cc = _0x37e9cc[_0x51c633(0x1df)](0x0, _0x37e9cc[_0x51c633(0x1f5)] - _0x13ecd7) : _0x37e9cc = _0x4f9221[_0x51c633(0x1df)](0x0, _0x4f9221[_0x51c633(0x1f5)] - _0x13ecd7);
                  }
                  _0x37e9cc == null && (_0x37e9cc = _0x4f9221);
                  var _0x5e392c = DataUntils['doCreateBuffer'](_0x522bda, _0x37e9cc, _0x1847b1, _0x5bd85f, _0xf5a13e);
                  if (_0x288527 + _0x5e392c[_0x51c633(0x1f5)] >= _0x4bde42) {
                    var _0x4c7dac = DataUntils[_0x51c633(0x1f2)](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                    _0x1463c7['push'](_0x4c7dac);
                    var _0x15167a = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x4c7dac['byteLength'], _0x3b9fef);
                    _0x3b9fef++, _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x15167a), _0x1463c7 = [];
                  }
                  _0x1463c7[_0x51c633(0x1fb)](_0x5e392c), _0x288527 += _0x5e392c[_0x51c633(0x1f5)];
                  var _0x40cc8f = DataUntils['createData'](0x89, _0x3b9fef / 0x100, _0x3b9fef % 0x100);
                  _0x1463c7[_0x51c633(0x1fb)](_0x40cc8f);
                  var _0x46fedd = DataUntils[_0x51c633(0x20d)](_0x1463c7, _0x3672c3, _0x288527 + _0x40cc8f[_0x51c633(0x1f5)], _0x3b9fef);
                  _0x288527 = 0x0, _0x2b23ef[_0x51c633(0x1fb)](_0x46fedd);
                }
              }
              _0x5eccfa = !![], _0x2ae66f = 0xff;
            }
          }
        }
        var _0x274353 = {
          '0': _0x2b23ef,
          '1': _0xe8f3b3,
          '2': _0x74e07,
          '3': _0x2205df,
          '4': !![]
        };
        return _0x274353;
      }
    }
  }
}, DataUntils[a0_0x268a7d(0x201)] = function (_0x30b391, _0x21ec1c, _0x165e24) {
  var _0x2647a7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x64;
  var _0x5b5b45 = arguments.length > 4 ? arguments[4] : undefined;
  var _0x4224cd = arguments.length > 5 ? arguments[5] : undefined;
  var _0x211f4a = a0_0x268a7d;
  var _0x3781c0 = 0x1800;
  _0x4224cd > 0x0 && (_0x3781c0 = _0x4224cd);
  _0x3781c0 -= 0x8;
  var _0x523489 = _0x30b391[_0x211f4a(0x1e1)],
    _0xd8c344 = _0x30b391[_0x211f4a(0x1f7)],
    _0x5bfa26 = _0x30b391['data'];
  var _0x26dbfa = 0xff;
  var _0x15d086 = 0x8;
  var _0x1b6712 = parseInt((_0x523489 - 0x1) / _0x15d086 + 0x1);
  _0x5b5b45 % 0xb4 == 0x5a && (_0x1b6712 = parseInt((_0xd8c344 - 0x1) / _0x15d086 + 0x1));
  var _0x275200 = new ArrayBuffer(_0x1b6712),
    _0x626b04 = new DataView(_0x275200);
  var _0x34c49c = null,
    _0x6a255b = 0x0,
    _0x383e0a = 0x0,
    _0x560852 = !![],
    _0x489739 = ![],
    _0x55f776 = 0x0,
    _0x39cd8c = [],
    _0x1f12d6 = [],
    _0x150355 = [],
    _0x417d17 = 0x0,
    _0x337ee6 = 0x0,
    _0x50e106 = 0x0;
  if (_0x5b5b45 == 0x5a) {
    var _0x24d38d = (_0xd8c344 - 0x1) % 0x8;
    for (var _0x563eab = 0x0; _0x563eab < _0x523489; _0x563eab++) {
      _0x55f776 = 0x0;
      for (var _0x1ae0a4 = _0xd8c344 - 0x1; _0x1ae0a4 >= 0x0; _0x1ae0a4--) {
        var _0x2633d4 = _0x1ae0a4 * _0x523489 + _0x563eab,
          _0x5daae2 = _0x2633d4 * 0x4;
        var _0x4e09dc = _0x5bfa26[_0x5daae2] * 0.299 + _0x5bfa26[_0x5daae2 + 0x1] * 0.587 + _0x5bfa26[_0x5daae2 + 0x2] * 0.114;
        var _0x55019d = 0x80;
        if (_0x1ae0a4 % 0x8 == _0x24d38d) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0x7f;else {
          if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x1 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xbf;else {
            if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x2 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xdf;else {
              if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x3 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xef;else {
                if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x4 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xf7;else {
                  if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x5 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xfb;else {
                    if (_0x1ae0a4 % 0x8 == (_0x24d38d - 0x6 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xfd;else _0x1ae0a4 % 0x8 == (_0x24d38d - 0x7 + 0x8) % 0x8 && (_0x26dbfa &= _0x4e09dc < _0x55019d ? 0xff : 0xfe, _0x626b04['setUint8'](_0x55f776, _0x26dbfa), _0x560852 && (_0x560852 = _0x26dbfa == 0x0), _0x26dbfa = 0xff, _0x55f776++);
                  }
                }
              }
            }
          }
        }
        if (_0x1ae0a4 == 0x0) {
          if (_0x1ae0a4 % 0x8 != (_0x24d38d - 0x7 + 0x8) % 0x8) {
            var _0x372f9b = 0x8 - _0xd8c344 % 0x8;
            _0x26dbfa = _0x26dbfa >> _0x372f9b << _0x372f9b, _0x626b04['setUint8'](_0x55f776, _0x26dbfa), _0x55f776 = 0x0, _0x560852 && (_0x560852 = _0x26dbfa == 0x0);
          }
          var _0x1ad078 = _0x275200[_0x211f4a(0x1df)](0x0, _0x1b6712);
          if (_0x34c49c == null) _0x34c49c = _0x1ad078[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x383e0a++, _0x489739 = _0x560852;else {
            var _0xaca534 = DataUntils['ab2hex'](_0x34c49c),
              _0x238f59 = DataUntils[_0x211f4a(0x1f9)](_0x1ad078);
            var _0x5c3f59 = ![],
              _0x378ffb = ![];
            if (_0xaca534 == _0x238f59) {
              if (_0x383e0a >= 0xff) {
                var _0x498932 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x34c49c, _0x6a255b, _0x383e0a, _0x21ec1c);
                _0x417d17 += _0x383e0a;
                if (_0x337ee6 + _0x498932[_0x211f4a(0x1f5)] >= _0x3781c0) {
                  var _0x43fdf2 = DataUntils['createData'](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x43fdf2), _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
                  var _0x1d572a = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x43fdf2[_0x211f4a(0x1f5)], _0x50e106);
                  _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c['push'](_0x1d572a), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x498932), _0x337ee6 += _0x498932[_0x211f4a(0x1f5)];
                } else _0x1f12d6[_0x211f4a(0x1fb)](_0x498932), _0x337ee6 += _0x498932[_0x211f4a(0x1f5)];
                _0x6a255b += _0x383e0a, _0x383e0a = 0x0;
              }
              _0x383e0a++, _0x5c3f59 = !![];
            } else {
              var _0x5c8f1d = null;
              if (_0x165e24[_0x211f4a(0x20b)] > 0x0) {
                var _0x3df5f4 = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                _0x5c8f1d = _0x34c49c[_0x211f4a(0x1df)](_0x3df5f4, _0x34c49c['byteLength'] - _0x3df5f4);
              }
              if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                var _0x5ec691 = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                _0x5c8f1d != null ? _0x5c8f1d = _0x5c8f1d['slice'](0x0, _0x5c8f1d[_0x211f4a(0x1f5)] - _0x5ec691) : _0x5c8f1d = _0x34c49c[_0x211f4a(0x1df)](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x5ec691);
              }
              _0x5c8f1d == null && (_0x5c8f1d = _0x34c49c);
              if (_0x383e0a > 0x0) {
                var _0x1c1f7e = DataUntils['doCreateBuffer'](_0x489739, _0x5c8f1d, _0x6a255b, _0x383e0a, _0x21ec1c);
                _0x417d17 += _0x383e0a;
                if (_0x337ee6 + _0x1c1f7e['byteLength'] >= _0x3781c0) {
                  var _0x150ec2 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x150ec2), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                  var _0x2b3870 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x150ec2[_0x211f4a(0x1f5)], _0x50e106);
                  _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x2b3870), _0x1f12d6 = [], _0x1f12d6['push'](_0x1c1f7e), _0x337ee6 += _0x1c1f7e[_0x211f4a(0x1f5)];
                } else _0x1f12d6[_0x211f4a(0x1fb)](_0x1c1f7e), _0x337ee6 += _0x1c1f7e[_0x211f4a(0x1f5)];
              }
              _0x34c49c = _0x1ad078[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x489739 = _0x560852, _0x6a255b += _0x383e0a, _0x383e0a = 0x1;
            }
            if (_0x563eab == _0x523489 - 0x1) {
              var _0x5925d0 = null;
              if (_0x165e24[_0x211f4a(0x20b)] > 0x0) {
                var _0x587723 = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                _0x5925d0 = _0x34c49c[_0x211f4a(0x1df)](_0x587723, _0x34c49c[_0x211f4a(0x1f5)] - _0x587723);
              }
              if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                var _0x10eb9e = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                _0x5925d0 != null ? _0x5925d0 = _0x5925d0['slice'](0x0, _0x5925d0[_0x211f4a(0x1f5)] - _0x10eb9e) : _0x5925d0 = _0x34c49c[_0x211f4a(0x1df)](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x10eb9e);
              }
              _0x5925d0 == null && (_0x5925d0 = _0x34c49c);
              var _0x11e598 = DataUntils['doCreateBuffer'](_0x489739, _0x5925d0, _0x6a255b, _0x383e0a, _0x21ec1c);
              if (_0x337ee6 + _0x11e598[_0x211f4a(0x1f5)] >= _0x3781c0) {
                var _0x105ce8 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                _0x1f12d6[_0x211f4a(0x1fb)](_0x105ce8), _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
                var _0x4278a0 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x105ce8[_0x211f4a(0x1f5)], _0x50e106);
                _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x4278a0), _0x1f12d6 = [];
              }
              _0x1f12d6[_0x211f4a(0x1fb)](_0x11e598), _0x337ee6 += _0x11e598[_0x211f4a(0x1f5)];
              var _0x16212d = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
              _0x1f12d6[_0x211f4a(0x1fb)](_0x16212d), _0x417d17 += _0x383e0a, _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
              var _0x1be8ef = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x16212d['byteLength'], _0x50e106);
              _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x1be8ef);
            }
          }
          _0x560852 = !![], _0x26dbfa = 0xff;
        }
      }
    }
    return {
      '0': _0x39cd8c,
      '1': null,
      '2': 0x0,
      '3': _0x150355,
      '4': ![]
    };
  } else {
    if (_0x5b5b45 == 0xb4) {
      var _0x203542 = (_0x523489 - 0x1) % 0x8;
      for (var _0x563eab = _0xd8c344 - 0x1; _0x563eab >= 0x0; _0x563eab--) {
        _0x55f776 = 0x0;
        for (var _0x1ae0a4 = _0x523489 - 0x1; _0x1ae0a4 >= 0x0; _0x1ae0a4--) {
          var _0x17a8af = _0x1ae0a4 + _0x563eab * _0x523489,
            _0x1f06b2 = _0x17a8af * 0x4;
          var _0x4e09dc = _0x5bfa26[_0x1f06b2] * 0.299 + _0x5bfa26[_0x1f06b2 + 0x1] * 0.587 + _0x5bfa26[_0x1f06b2 + 0x2] * 0.114;
          var _0x19c9de = 0x80;
          if (_0x1ae0a4 % 0x8 == _0x203542) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0x7f;else {
            if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x1 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xbf;else {
              if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x2 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xdf;else {
                if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x3 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xef;else {
                  if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x4 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xf7;else {
                    if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x5 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xfb;else {
                      if (_0x1ae0a4 % 0x8 == (_0x203542 - 0x6 + 0x8) % 0x8) _0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xfd;else _0x1ae0a4 % 0x8 == (_0x203542 - 0x7 + 0x8) % 0x8 && (_0x26dbfa &= _0x4e09dc < _0x19c9de ? 0xff : 0xfe, _0x626b04[_0x211f4a(0x1d7)](_0x55f776, _0x26dbfa), _0x560852 && (_0x560852 = _0x26dbfa == 0x0), _0x26dbfa = 0xff, _0x55f776++);
                    }
                  }
                }
              }
            }
          }
          if (_0x1ae0a4 == 0x0) {
            if (_0x1ae0a4 % 0x8 != (_0x203542 - 0x7 + 0x8) % 0x8) {
              var _0x3bb5eb = 0x8 - _0x523489 % 0x8;
              _0x26dbfa = _0x26dbfa >> _0x3bb5eb << _0x3bb5eb, _0x626b04[_0x211f4a(0x1d7)](_0x55f776, _0x26dbfa), _0x55f776 = 0x0, _0x560852 && (_0x560852 = _0x26dbfa == 0x0);
            }
            var _0x5dfcc7 = _0x275200[_0x211f4a(0x1df)](0x0, _0x1b6712);
            if (_0x34c49c == null) _0x34c49c = _0x5dfcc7[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x383e0a++, _0x489739 = _0x560852;else {
              var _0x4aa0f1 = DataUntils[_0x211f4a(0x1f9)](_0x34c49c),
                _0x4268c9 = DataUntils[_0x211f4a(0x1f9)](_0x5dfcc7);
              var _0x5c3f59 = ![],
                _0x378ffb = ![];
              if (_0x4aa0f1 == _0x4268c9) {
                if (_0x383e0a >= 0xff) {
                  var _0x39ea73 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x34c49c, _0x6a255b, _0x383e0a, _0x21ec1c);
                  _0x417d17 += _0x383e0a;
                  if (_0x337ee6 + _0x39ea73[_0x211f4a(0x1f5)] >= _0x3781c0) {
                    var _0x4c5668 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                    _0x1f12d6[_0x211f4a(0x1fb)](_0x4c5668), _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
                    var _0x2ad497 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x4c5668[_0x211f4a(0x1f5)], _0x50e106);
                    _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c['push'](_0x2ad497), _0x1f12d6 = [], _0x1f12d6['push'](_0x39ea73), _0x337ee6 += _0x39ea73[_0x211f4a(0x1f5)];
                  } else _0x1f12d6['push'](_0x39ea73), _0x337ee6 += _0x39ea73[_0x211f4a(0x1f5)];
                  _0x6a255b += _0x383e0a, _0x383e0a = 0x0;
                }
                _0x383e0a++, _0x5c3f59 = !![];
              } else {
                var _0x1422c2 = null;
                if (_0x165e24[_0x211f4a(0x20b)] > 0x0) {
                  var _0x11124e = parseInt(_0x165e24['left'] / 0x8);
                  _0x1422c2 = _0x34c49c[_0x211f4a(0x1df)](_0x11124e, _0x34c49c[_0x211f4a(0x1f5)] - _0x11124e);
                }
                if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                  var _0x3d36a9 = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                  _0x1422c2 != null ? _0x1422c2 = _0x1422c2[_0x211f4a(0x1df)](0x0, _0x1422c2[_0x211f4a(0x1f5)] - _0x3d36a9) : _0x1422c2 = _0x34c49c[_0x211f4a(0x1df)](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x3d36a9);
                }
                _0x1422c2 == null && (_0x1422c2 = _0x34c49c);
                if (_0x383e0a > 0x0) {
                  var _0x3eede9 = DataUntils['doCreateBuffer'](_0x489739, _0x1422c2, _0x6a255b, _0x383e0a, _0x21ec1c);
                  _0x417d17 += _0x383e0a;
                  if (_0x337ee6 + _0x3eede9[_0x211f4a(0x1f5)] >= _0x3781c0) {
                    var _0xc9d174 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                    _0x1f12d6[_0x211f4a(0x1fb)](_0xc9d174), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                    var _0x43c56c = DataUntils['deal120ByteArrayWithZip'](_0x1f12d6, _0x2647a7, _0x337ee6 + _0xc9d174[_0x211f4a(0x1f5)], _0x50e106);
                    _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x43c56c), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x3eede9), _0x337ee6 += _0x3eede9[_0x211f4a(0x1f5)];
                  } else _0x1f12d6['push'](_0x3eede9), _0x337ee6 += _0x3eede9['byteLength'];
                }
                _0x34c49c = _0x5dfcc7[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x489739 = _0x560852, _0x6a255b += _0x383e0a, _0x383e0a = 0x1;
              }
              if (_0x563eab == 0x0) {
                var _0x2c1d42 = null;
                if (_0x165e24['left'] > 0x0) {
                  var _0x464dff = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                  _0x2c1d42 = _0x34c49c[_0x211f4a(0x1df)](_0x464dff, _0x34c49c[_0x211f4a(0x1f5)] - _0x464dff);
                }
                if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                  var _0x413b5d = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                  _0x2c1d42 != null ? _0x2c1d42 = _0x2c1d42[_0x211f4a(0x1df)](0x0, _0x2c1d42[_0x211f4a(0x1f5)] - _0x413b5d) : _0x2c1d42 = _0x34c49c[_0x211f4a(0x1df)](0x0, _0x34c49c['byteLength'] - _0x413b5d);
                }
                _0x2c1d42 == null && (_0x2c1d42 = _0x34c49c);
                var _0x5950a7 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x2c1d42, _0x6a255b, _0x383e0a, _0x21ec1c);
                if (_0x337ee6 + _0x5950a7[_0x211f4a(0x1f5)] >= _0x3781c0) {
                  var _0x4bf06c = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x4bf06c), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                  var _0x303140 = DataUntils['deal120ByteArrayWithZip'](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x4bf06c[_0x211f4a(0x1f5)], _0x50e106);
                  _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c['push'](_0x303140), _0x1f12d6 = [];
                }
                _0x1f12d6[_0x211f4a(0x1fb)](_0x5950a7), _0x337ee6 += _0x5950a7['byteLength'];
                var _0x1bdbdd = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                _0x1f12d6[_0x211f4a(0x1fb)](_0x1bdbdd), _0x417d17 += _0x383e0a, _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
                var _0x315746 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x1bdbdd[_0x211f4a(0x1f5)], _0x50e106);
                _0x337ee6 = 0x0, _0x39cd8c['push'](_0x315746);
              }
            }
            _0x560852 = !![], _0x26dbfa = 0xff;
          }
        }
      }
      return {
        '0': _0x39cd8c,
        '1': null,
        '2': 0x0,
        '3': _0x150355,
        '4': ![]
      };
    } else {
      if (_0x5b5b45 == 0x10e) {
        for (var _0x563eab = _0x523489 - 0x1; _0x563eab >= 0x0; _0x563eab--) {
          _0x55f776 = 0x0;
          for (var _0x1ae0a4 = 0x0; _0x1ae0a4 < _0xd8c344; _0x1ae0a4++) {
            var _0x401ed2 = _0x1ae0a4 * _0x523489 + _0x563eab,
              _0x734b2 = _0x401ed2 * 0x4;
            var _0x4e09dc = _0x5bfa26[_0x734b2] * 0.299 + _0x5bfa26[_0x734b2 + 0x1] * 0.587 + _0x5bfa26[_0x734b2 + 0x2] * 0.114;
            var _0xecdba0 = 0x80;
            if (_0x1ae0a4 % 0x8 == 0x0) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0x7f;else {
              if (_0x1ae0a4 % 0x8 == 0x1) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xbf;else {
                if (_0x1ae0a4 % 0x8 == 0x2) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xdf;else {
                  if (_0x1ae0a4 % 0x8 == 0x3) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xef;else {
                    if (_0x1ae0a4 % 0x8 == 0x4) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xf7;else {
                      if (_0x1ae0a4 % 0x8 == 0x5) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xfb;else {
                        if (_0x1ae0a4 % 0x8 == 0x6) _0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xfd;else _0x1ae0a4 % 0x8 == 0x7 && (_0x26dbfa &= _0x4e09dc < _0xecdba0 ? 0xff : 0xfe, _0x626b04['setUint8'](_0x55f776, _0x26dbfa), _0x560852 && (_0x560852 = _0x26dbfa == 0x0), _0x26dbfa = 0xff, _0x55f776++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x1ae0a4 == _0xd8c344 - 0x1) {
              if (_0x1ae0a4 % 0x8 != 0x7) {
                var _0x5de24e = 0x8 - _0xd8c344 % 0x8;
                _0x26dbfa = _0x26dbfa >> _0x5de24e << _0x5de24e, _0x626b04[_0x211f4a(0x1d7)](_0x55f776, _0x26dbfa), _0x55f776 = 0x0, _0x560852 && (_0x560852 = _0x26dbfa == 0x0);
              }
              var _0xc2fee9 = _0x275200['slice'](0x0, _0x1b6712);
              if (_0x34c49c == null) _0x34c49c = _0xc2fee9[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x383e0a++, _0x489739 = _0x560852;else {
                var _0x4d84bc = DataUntils[_0x211f4a(0x1f9)](_0x34c49c),
                  _0x159c4 = DataUntils['ab2hex'](_0xc2fee9);
                var _0x5c3f59 = ![],
                  _0x378ffb = ![];
                if (_0x4d84bc == _0x159c4) {
                  if (_0x383e0a >= 0xff) {
                    var _0x1c36ed = DataUntils['doCreateBuffer'](_0x489739, _0x34c49c, _0x6a255b, _0x383e0a, _0x21ec1c);
                    _0x417d17 += _0x383e0a;
                    if (_0x337ee6 + _0x1c36ed[_0x211f4a(0x1f5)] >= _0x3781c0) {
                      var _0x4db4c = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                      _0x1f12d6[_0x211f4a(0x1fb)](_0x4db4c), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                      var _0x151c6e = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x4db4c[_0x211f4a(0x1f5)], _0x50e106);
                      _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c['push'](_0x151c6e), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x1c36ed), _0x337ee6 += _0x1c36ed[_0x211f4a(0x1f5)];
                    } else _0x1f12d6[_0x211f4a(0x1fb)](_0x1c36ed), _0x337ee6 += _0x1c36ed[_0x211f4a(0x1f5)];
                    _0x6a255b += _0x383e0a, _0x383e0a = 0x0;
                  }
                  _0x383e0a++, _0x5c3f59 = !![];
                } else {
                  var _0x4391fd = null;
                  if (_0x165e24['left'] > 0x0) {
                    var _0x2fa2e5 = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                    _0x4391fd = _0x34c49c[_0x211f4a(0x1df)](_0x2fa2e5, _0x34c49c[_0x211f4a(0x1f5)] - _0x2fa2e5);
                  }
                  if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                    var _0x43c11d = parseInt(_0x165e24['right'] / 0x8);
                    _0x4391fd != null ? _0x4391fd = _0x4391fd['slice'](0x0, _0x4391fd['byteLength'] - _0x43c11d) : _0x4391fd = _0x34c49c[_0x211f4a(0x1df)](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x43c11d);
                  }
                  _0x4391fd == null && (_0x4391fd = _0x34c49c);
                  if (_0x383e0a > 0x0) {
                    var _0x55aadb = DataUntils[_0x211f4a(0x213)](_0x489739, _0x4391fd, _0x6a255b, _0x383e0a, _0x21ec1c);
                    _0x417d17 += _0x383e0a;
                    if (_0x337ee6 + _0x55aadb[_0x211f4a(0x1f5)] >= _0x3781c0) {
                      var _0x4339ac = DataUntils['createData'](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                      _0x1f12d6['push'](_0x4339ac), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                      var _0x105425 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x4339ac[_0x211f4a(0x1f5)], _0x50e106);
                      _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x105425), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x55aadb), _0x337ee6 += _0x55aadb[_0x211f4a(0x1f5)];
                    } else _0x1f12d6['push'](_0x55aadb), _0x337ee6 += _0x55aadb[_0x211f4a(0x1f5)];
                  }
                  _0x34c49c = _0xc2fee9[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x489739 = _0x560852, _0x6a255b += _0x383e0a, _0x383e0a = 0x1;
                }
                if (_0x563eab == 0x0) {
                  var _0x22f6a4 = null;
                  if (_0x165e24[_0x211f4a(0x20b)] > 0x0) {
                    var _0x1163d4 = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                    _0x22f6a4 = _0x34c49c[_0x211f4a(0x1df)](_0x1163d4, _0x34c49c[_0x211f4a(0x1f5)] - _0x1163d4);
                  }
                  if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                    var _0x10185a = parseInt(_0x165e24['right'] / 0x8);
                    _0x22f6a4 != null ? _0x22f6a4 = _0x22f6a4[_0x211f4a(0x1df)](0x0, _0x22f6a4['byteLength'] - _0x10185a) : _0x22f6a4 = _0x34c49c['slice'](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x10185a);
                  }
                  _0x22f6a4 == null && (_0x22f6a4 = _0x34c49c);
                  var _0x2d0f6f = DataUntils['doCreateBuffer'](_0x489739, _0x22f6a4, _0x6a255b, _0x383e0a, _0x21ec1c);
                  if (_0x337ee6 + _0x2d0f6f[_0x211f4a(0x1f5)] >= _0x3781c0) {
                    var _0x592456 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                    _0x1f12d6[_0x211f4a(0x1fb)](_0x592456), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                    var _0x222013 = DataUntils['deal120ByteArrayWithZip'](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x592456[_0x211f4a(0x1f5)], _0x50e106);
                    _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x222013), _0x1f12d6 = [];
                  }
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x2d0f6f), _0x337ee6 += _0x2d0f6f['byteLength'];
                  var _0x37127f = DataUntils['createData'](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x37127f), _0x417d17 += _0x383e0a, _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                  var _0x3536fd = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x37127f['byteLength'], _0x50e106);
                  _0x337ee6 = 0x0, _0x39cd8c['push'](_0x3536fd);
                }
              }
              _0x560852 = !![], _0x26dbfa = 0xff;
            }
          }
        }
        return {
          '0': _0x39cd8c,
          '1': null,
          '2': 0x0,
          '3': _0x150355,
          '4': ![]
        };
      } else {
        for (var _0x563eab = 0x0; _0x563eab < _0xd8c344; _0x563eab++) {
          _0x55f776 = 0x0;
          for (var _0x1ae0a4 = 0x0; _0x1ae0a4 < _0x523489; _0x1ae0a4++) {
            var _0x4b4c23 = _0x1ae0a4 + _0x563eab * _0x523489,
              _0x5bd9ec = _0x4b4c23 * 0x4;
            var _0x4e09dc = _0x5bfa26[_0x5bd9ec] * 0.299 + _0x5bfa26[_0x5bd9ec + 0x1] * 0.587 + _0x5bfa26[_0x5bd9ec + 0x2] * 0.114;
            var _0x3baa90 = 0x80;
            if (_0x1ae0a4 % 0x8 == 0x0) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0x7f;else {
              if (_0x1ae0a4 % 0x8 == 0x1) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xbf;else {
                if (_0x1ae0a4 % 0x8 == 0x2) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xdf;else {
                  if (_0x1ae0a4 % 0x8 == 0x3) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xef;else {
                    if (_0x1ae0a4 % 0x8 == 0x4) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xf7;else {
                      if (_0x1ae0a4 % 0x8 == 0x5) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xfb;else {
                        if (_0x1ae0a4 % 0x8 == 0x6) _0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xfd;else _0x1ae0a4 % 0x8 == 0x7 && (_0x26dbfa &= _0x4e09dc < _0x3baa90 ? 0xff : 0xfe, _0x626b04['setUint8'](_0x55f776, _0x26dbfa), _0x560852 && (_0x560852 = _0x26dbfa == 0x0), _0x26dbfa = 0xff, _0x55f776++);
                      }
                    }
                  }
                }
              }
            }
            if (_0x1ae0a4 == _0x523489 - 0x1) {
              if (_0x1ae0a4 % 0x8 != 0x7) {
                var _0x27490c = 0x8 - _0x523489 % 0x8;
                _0x26dbfa = _0x26dbfa >> _0x27490c << _0x27490c, _0x626b04[_0x211f4a(0x1d7)](_0x55f776, _0x26dbfa), _0x55f776 = 0x0, _0x560852 && (_0x560852 = _0x26dbfa == 0x0);
              }
              var _0x30a3d4 = _0x275200[_0x211f4a(0x1df)](0x0, _0x1b6712);
              if (_0x34c49c == null) _0x34c49c = _0x30a3d4[_0x211f4a(0x1df)](0x0, _0x1b6712), _0x383e0a++, _0x489739 = _0x560852;else {
                var _0x2c1d08 = DataUntils['ab2hex'](_0x34c49c),
                  _0x4ab10a = DataUntils[_0x211f4a(0x1f9)](_0x30a3d4);
                var _0x5c3f59 = ![],
                  _0x378ffb = ![];
                if (_0x2c1d08 == _0x4ab10a) {
                  if (_0x383e0a >= 0xff) {
                    var _0x510553 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x34c49c, _0x6a255b, _0x383e0a, _0x21ec1c);
                    _0x417d17 += _0x383e0a;
                    if (_0x337ee6 + _0x510553[_0x211f4a(0x1f5)] >= _0x3781c0) {
                      var _0x1a261b = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                      _0x1f12d6[_0x211f4a(0x1fb)](_0x1a261b), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                      var _0x4c55a6 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x1a261b[_0x211f4a(0x1f5)], _0x50e106);
                      _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x4c55a6), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x510553), _0x337ee6 += _0x510553[_0x211f4a(0x1f5)];
                    } else _0x1f12d6[_0x211f4a(0x1fb)](_0x510553), _0x337ee6 += _0x510553[_0x211f4a(0x1f5)];
                    _0x6a255b += _0x383e0a, _0x383e0a = 0x0;
                  }
                  _0x383e0a++, _0x5c3f59 = !![];
                } else {
                  var _0x179067 = null;
                  if (_0x165e24[_0x211f4a(0x20b)] > 0x0) {
                    var _0x3c6e1c = parseInt(_0x165e24[_0x211f4a(0x20b)] / 0x8);
                    _0x179067 = _0x34c49c[_0x211f4a(0x1df)](_0x3c6e1c, _0x34c49c[_0x211f4a(0x1f5)] - _0x3c6e1c);
                  }
                  if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                    var _0x40b6c2 = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                    _0x179067 != null ? _0x179067 = _0x179067[_0x211f4a(0x1df)](0x0, _0x179067[_0x211f4a(0x1f5)] - _0x40b6c2) : _0x179067 = _0x34c49c['slice'](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x40b6c2);
                  }
                  _0x179067 == null && (_0x179067 = _0x34c49c);
                  if (_0x383e0a > 0x0) {
                    var _0x320899 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x179067, _0x6a255b, _0x383e0a, _0x21ec1c);
                    _0x417d17 += _0x383e0a;
                    if (_0x337ee6 + _0x320899[_0x211f4a(0x1f5)] >= _0x3781c0) {
                      var _0x995fce = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                      _0x1f12d6[_0x211f4a(0x1fb)](_0x995fce), _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                      var _0x39a900 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x995fce[_0x211f4a(0x1f5)], _0x50e106);
                      _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x39a900), _0x1f12d6 = [], _0x1f12d6[_0x211f4a(0x1fb)](_0x320899), _0x337ee6 += _0x320899[_0x211f4a(0x1f5)];
                    } else _0x1f12d6[_0x211f4a(0x1fb)](_0x320899), _0x337ee6 += _0x320899[_0x211f4a(0x1f5)];
                  }
                  _0x34c49c = _0x30a3d4['slice'](0x0, _0x1b6712), _0x489739 = _0x560852, _0x6a255b += _0x383e0a, _0x383e0a = 0x1;
                }
                if (_0x563eab == _0xd8c344 - 0x1) {
                  var _0x47ad85 = null;
                  if (_0x165e24['left'] > 0x0) {
                    var _0x5705b9 = parseInt(_0x165e24['left'] / 0x8);
                    _0x47ad85 = _0x34c49c[_0x211f4a(0x1df)](_0x5705b9, _0x34c49c[_0x211f4a(0x1f5)] - _0x5705b9);
                  }
                  if (_0x165e24[_0x211f4a(0x1d6)] > 0x0) {
                    var _0x588f0a = parseInt(_0x165e24[_0x211f4a(0x1d6)] / 0x8);
                    _0x47ad85 != null ? _0x47ad85 = _0x47ad85[_0x211f4a(0x1df)](0x0, _0x47ad85['byteLength'] - _0x588f0a) : _0x47ad85 = _0x34c49c['slice'](0x0, _0x34c49c[_0x211f4a(0x1f5)] - _0x588f0a);
                  }
                  _0x47ad85 == null && (_0x47ad85 = _0x34c49c);
                  var _0x354288 = DataUntils[_0x211f4a(0x213)](_0x489739, _0x47ad85, _0x6a255b, _0x383e0a, _0x21ec1c);
                  if (_0x337ee6 + _0x354288[_0x211f4a(0x1f5)] >= _0x3781c0) {
                    var _0x12c8c3 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                    _0x1f12d6['push'](_0x12c8c3), _0x150355['push'](_0x417d17), _0x417d17 = 0x0;
                    var _0x2bc703 = DataUntils['deal120ByteArrayWithZip'](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x12c8c3[_0x211f4a(0x1f5)], _0x50e106);
                    _0x50e106++, _0x337ee6 = 0x0, _0x39cd8c['push'](_0x2bc703), _0x1f12d6 = [];
                  }
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x354288), _0x337ee6 += _0x354288[_0x211f4a(0x1f5)];
                  var _0x787490 = DataUntils[_0x211f4a(0x1f2)](0x89, _0x50e106 / 0x100, _0x50e106 % 0x100);
                  _0x1f12d6[_0x211f4a(0x1fb)](_0x787490), _0x417d17 += _0x383e0a, _0x150355[_0x211f4a(0x1fb)](_0x417d17), _0x417d17 = 0x0;
                  var _0x46baa0 = DataUntils[_0x211f4a(0x20d)](_0x1f12d6, _0x2647a7, _0x337ee6 + _0x787490['byteLength'], _0x50e106);
                  _0x337ee6 = 0x0, _0x39cd8c[_0x211f4a(0x1fb)](_0x46baa0);
                }
              }
              _0x560852 = !![], _0x26dbfa = 0xff;
            }
          }
        }
        return {
          '0': _0x39cd8c,
          '1': null,
          '2': 0x0,
          '3': _0x150355,
          '4': ![]
        };
      }
    }
  }
}, DataUntils['dealData'] = function (_0x55bf7a, _0x30d395) {
  var _0x21460f = a0_0x268a7d,
    _0x82f3eb = new DataView(_0x55bf7a);
  if (_0x55bf7a[_0x21460f(0x1f5)] > 0x7) {
    var _0x1b0600 = 0x55,
      _0x1fc486 = 0xaa;
    var _0x2e0f3b = 0x0,
      _0xbc5cc3 = 0x0,
      _0xbf484e = 0x0;
    while (_0x55bf7a[_0x21460f(0x1f5)] > _0xbf484e + 0x7) {
      var _0x2dbcd0 = _0x82f3eb[_0x21460f(0x1e7)](_0xbf484e),
        _0x5dc30e = _0x82f3eb[_0x21460f(0x1e7)](_0xbf484e + 0x1),
        _0x24e36f = _0x82f3eb['getUint8'](_0xbf484e + 0x2),
        _0x1c9522 = _0x82f3eb[_0x21460f(0x1e7)](_0xbf484e + 0x3);
      if (_0x2dbcd0 == _0x1b0600 && _0x5dc30e == _0x1b0600) {
        var _0x2c8b0b = _0x82f3eb['getUint8'](_0xbf484e + 0x5 + _0x1c9522),
          _0x45eba5 = _0x82f3eb[_0x21460f(0x1e7)](_0xbf484e + 0x6 + _0x1c9522);
        if (_0x2c8b0b == _0x1fc486 && _0x45eba5 == _0x1fc486) {
          _0x2e0f3b = _0x24e36f, _0xbc5cc3 = _0x1c9522;
          break;
        }
      }
      _0xbf484e++;
    }
    if (_0xbc5cc3 == 0x0) return;
    if (_0xbc5cc3 > 0x0 && _0x55bf7a[_0x21460f(0x1f5)] > _0xbc5cc3 + 0x7 + _0xbf484e) {
      var _0x4e08be = _0x55bf7a[_0x21460f(0x1df)](_0xbf484e, _0xbf484e + _0xbc5cc3 + 0x7),
        _0x56af73 = _0x55bf7a[_0x21460f(0x1df)](_0xbf484e + _0xbc5cc3 + 0x7, _0x55bf7a[_0x21460f(0x1f5)] - (_0xbf484e + _0xbc5cc3 + 0x7));
      if (_0x56af73[_0x21460f(0x1f5)] >= _0x4e08be['byteLength']) {
        var _0x3331ca = this[_0x21460f(0x214)](_0x4e08be, _0x56af73);
        !this[_0x21460f(0x1eb)](_0x4e08be, _0x3331ca) && this[_0x21460f(0x1e0)](_0x4e08be), this[_0x21460f(0x1e0)](_0x3331ca);
      } else !this[_0x21460f(0x1eb)](_0x4e08be, _0x56af73) && this[_0x21460f(0x1e0)](_0x4e08be), this[_0x21460f(0x1e0)](_0x56af73);
      return;
    }
    switch (_0x2e0f3b) {
      case 0xc2:
        {
          var _0x55cdcd = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x1dc)][_0x21460f(0x1ff)](_0x2e0f3b, _0x55cdcd);
        }
        break;
      case 0x48:
        {
          var _0x52abf9 = (_0x82f3eb['getUint8'](0x4, 0x1) << 0x8) + _0x82f3eb['getUint8'](0x5, 0x1);
          _0x30d395['ble'][_0x21460f(0x1ff)](_0x2e0f3b, _0x52abf9);
        }
        break;
      case 0x41:
      case 0x42:
      case 0x43:
      case 0x46:
      case 0x47:
      case 0x4a:
        {
          var _0x1b740b = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395['printer'] && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, _0x1b740b);
        }
        break;
      case 0x4b:
        {
          var _0x5eab59 = '';
          var _0xcd76c2 = _0x82f3eb['getUint8'](0x3, 0x1);
          if (_0x30d395[_0x21460f(0x1d3)] >= 0x300 || _0xcd76c2 > 0x8) for (var _0x40ec5d = 0x0; _0x40ec5d < _0xcd76c2; _0x40ec5d++) {
            var _0x51b557 = String[_0x21460f(0x20f)](_0x82f3eb[_0x21460f(0x1e7)](0x3 + _0x40ec5d + 0x1, 0x1));
            _0x5eab59 += _0x51b557;
          } else for (var _0x40ec5d = 0x0; _0x40ec5d < _0xcd76c2; _0x40ec5d++) {
            var _0x51b557 = _0x82f3eb[_0x21460f(0x1e7)](0x3 + _0x40ec5d + 0x1, 0x1)[_0x21460f(0x203)](0x10);
            _0x51b557[_0x21460f(0x1da)] < 0x2 && (_0x51b557 = '0' + _0x51b557), _0x5eab59 += _0x51b557;
          }
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)]['reciveCmd'](_0x2e0f3b, _0x5eab59);
        }
        break;
      case 0x49:
        {
          var _0xb313e1 = _0x82f3eb['getUint8'](0x4, 0x1),
            _0x2fad99 = _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0xb313e1 + '.' + (_0x2fad99 >= 0xa ? _0x2fad99 + '' : '0' + _0x2fad99));
        }
        break;
      case 0x4c:
        {
          var _0x252f2e = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1),
            _0x4ad140 = _0x82f3eb['getUint8'](0x5, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x252f2e + '.' + (_0x4ad140 >= 0xa ? _0x4ad140 + '' : '0' + _0x4ad140));
        }
        break;
      case 0x31:
      case 0x32:
      case 0x33:
      case 0x36:
      case 0x37:
      case 0x38:
        var _0x10a8dc = _0x82f3eb['getUint8'](0x4, 0x1);
        _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x10a8dc);
        break;
      case 0x4d:
        {
          var _0x3d6e3c = _0x82f3eb['getUint8'](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x3d6e3c);
        }
        break;
      case 0x2:
        {
          var _0x44d0df = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395['printer']['reciveCmd'](_0x2e0f3b, _0x44d0df);
        }
        break;
      case 0x4:
        {
          var _0x55c16f = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x55c16f);
        }
        break;
      case 0x14:
        {
          var _0x4164c8 = _0x82f3eb['getUint8'](0x4, 0x1);
          _0x30d395['printer'] && _0x30d395['printer']['reciveCmd'](_0x2e0f3b, _0x4164c8);
        }
        break;
      case 0x71:
        {
          var _0x686ab9 = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x686ab9);
        }
        break;
      case 0x16:
        {
          var _0x4dfc4c = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, _0x4dfc4c);
        }
        break;
      case 0xd3:
        {
          var _0x52ee0e = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) * 0x100 * 0x100 + _0x82f3eb['getUint8'](0x5, 0x1) * 0x100 + _0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x52ee0e);
        }
        break;
      case 0xe4:
        {
          var _0x17b90a = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x17b90a);
        }
        break;
      case 0xf4:
        {
          var _0x7aa894 = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x7aa894);
        }
        break;
      case 0xb3:
        {
          var _0x453a57 = (_0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) << 0x18) + (_0x82f3eb['getUint8'](0x5, 0x1) << 0x10) + (_0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x7, 0x1);
          if (_0x30d395[_0x21460f(0x1f6)] == 0x3) {
            _0x453a57 = (_0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) << 0x38) + (_0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1) << 0x30) + (_0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1) << 0x28) + (_0x82f3eb['getUint8'](0x7, 0x1) << 0x20) + (_0x82f3eb[_0x21460f(0x1e7)](0x8, 0x1) << 0x18) + (_0x82f3eb[_0x21460f(0x1e7)](0x9, 0x1) << 0x10) + (_0x82f3eb[_0x21460f(0x1e7)](0xa, 0x1) << 0x8) + (_0x82f3eb[_0x21460f(0x1e7)](0xb, 0x1) << 0x0), _0x453a57 = {
              'count': (_0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1),
              'cache': (_0x82f3eb[_0x21460f(0x1e7)](0x8, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x9, 0x1),
              'status': _0x82f3eb[_0x21460f(0x1e7)](0xb, 0x1),
              'error': _0x82f3eb[_0x21460f(0x1e7)](0xa, 0x1),
              'value': '' + _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) + '' + _0x82f3eb['getUint8'](0x5, 0x1) + '' + _0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1) + '' + _0x82f3eb[_0x21460f(0x1e7)](0x7, 0x1) + '' + _0x82f3eb['getUint8'](0x8, 0x1) + '' + _0x82f3eb[_0x21460f(0x1e7)](0x9, 0x1) + '' + _0x82f3eb[_0x21460f(0x1e7)](0xa, 0x1) + '' + _0x82f3eb[_0x21460f(0x1e7)](0xb, 0x1)
            };
            if (_0xbc5cc3 > 0x8) {
              var _0x2c8d8a = _0x82f3eb[_0x21460f(0x1e7)](0xc, 0x1),
                _0x323a4c = '';
              for (var _0x932205 = 0x0; _0x932205 < _0x2c8d8a; _0x932205++) {
                var _0x5609b6 = _0x82f3eb[_0x21460f(0x1e7)](0xd + _0x932205, 0x1);
                _0x323a4c = _0x323a4c + ('00' + _0x5609b6[_0x21460f(0x203)](0x10))['slice'](-0x2);
              }
              _0x453a57[_0x21460f(0x1fc)] = _0x323a4c;
              if (_0xbc5cc3 > 0x8 + _0x2c8d8a) {
                var _0x53e763 = _0x82f3eb['getUint8'](0xd + _0x2c8d8a, 0x1);
                _0x453a57[_0x21460f(0x202)] = _0x53e763;
              }
            }
          }
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)]['reciveCmd'](_0x2e0f3b, _0x453a57);
        }
        break;
      case 0xdb:
        {
          var _0x181ed9 = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395['printer'] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x181ed9);
        }
        break;
      case 0x0:
        {
          var _0x1f848c = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)]['reciveCmd'](_0x2e0f3b, _0x1f848c);
        }
        break;
      case 0xd0:
        {
          var _0x32abc8 = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)]['reciveCmd'](_0x2e0f3b, _0x32abc8);
        }
        break;
      case 0xb5:
        {
          _0x30d395[_0x21460f(0x1e9)] = (_0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x7, 0x1), _0x30d395[_0x21460f(0x216)] = (_0x82f3eb[_0x21460f(0x1e7)](0x8, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x9, 0x1), _0x30d395[_0x21460f(0x208)] = 0x0, _0x30d395[_0x21460f(0x1fa)] = 0x0, _0x30d395[_0x21460f(0x1d3)] = 0x0, _0x30d395[_0x21460f(0x217)] = 0x0, clearTimeout(_0x30d395[_0x21460f(0x1dc)]['repeatTimeoutId']), _0x30d395[_0x21460f(0x1dc)][_0x21460f(0x20e)] = 0x0;
          _0x82f3eb[_0x21460f(0x1f5)] >= 0xd && (_0x30d395[_0x21460f(0x208)] = _0x82f3eb[_0x21460f(0x1e7)](0xd, 0x1));
          _0x82f3eb['byteLength'] >= 0x14 && (_0x30d395[_0x21460f(0x1fa)] = _0x82f3eb[_0x21460f(0x1e7)](0xe, 0x1), _0x30d395[_0x21460f(0x1d3)] = (_0x82f3eb[_0x21460f(0x1e7)](0xf, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x10, 0x1), _0x30d395[_0x21460f(0x217)] = (_0x82f3eb['getUint8'](0x11, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x12, 0x1));
          var _0x696a55 = function _0x696a55() {
            var _0x19e528 = _0x21460f;
            if (_0x30d395[_0x19e528(0x20a)]) {
              var _0x5ddaff = _0x30d395[_0x19e528(0x20a)];
              _0x30d395[_0x19e528(0x20a)] = null, _0x5ddaff();
            }
          };
          _0x30d395[_0x21460f(0x1db)] = {};
          if (_0x30d395[_0x21460f(0x1d3)] >= 0x300) {
            _0x30d395[_0x21460f(0x207)](function () {
              _0x696a55();
            });
            return;
          }
          _0x696a55();
        }
        break;
      case 0xb4:
        {
          var _0x267e5c = (_0x82f3eb['getUint8'](0x4, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395[_0x21460f(0x215)]['reciveCmd'](_0x2e0f3b, _0x267e5c);
        }
        break;
      case 0x1b:
        {
          if (_0xbc5cc3 > 0x1) {
            var _0x14c229 = (_0x82f3eb['getUint8'](0x4, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1),
              _0x4ff902 = '',
              _0x241555 = 0x4,
              _0x4ed11c = 0x8,
              _0x4c644f = _0x21460f(0x1ee);
            for (var _0x122872 = 0x0; _0x122872 < _0x4ed11c; _0x122872++) {
              var _0x1729c4 = _0x82f3eb['getUint8'](_0x241555 + _0x122872, 0x1);
              _0x4ff902 += _0x4c644f[_0x21460f(0x1f1)](_0x1729c4 >> 0x4 & 0xf) + _0x4c644f[_0x21460f(0x1f1)](_0x1729c4 & 0xf);
            }
            _0x241555 += _0x4ed11c;
            var _0x585971 = _0x82f3eb[_0x21460f(0x1e7)](_0x241555, 0x1);
            _0x241555++;
            var _0x5eebcb = '';
            for (var _0x4f1306 = 0x0; _0x4f1306 < _0x585971; _0x4f1306++) {
              var _0x249cad = _0x82f3eb['getUint8'](_0x241555 + _0x4f1306, 0x1);
              _0x5eebcb += String['fromCharCode'](_0x249cad);
            }
            _0x241555 += _0x585971;
            var _0x5e677e = _0x82f3eb[_0x21460f(0x1e7)](_0x241555, 0x1);
            _0x241555++;
            var _0x44699e = '';
            for (var _0x83808d = 0x0; _0x83808d < _0x5e677e; _0x83808d++) {
              var _0x31f83b = _0x82f3eb[_0x21460f(0x1e7)](_0x241555 + _0x83808d, 0x1);
              _0x44699e += String['fromCharCode'](_0x31f83b);
            }
            _0x241555 += _0x5e677e;
            var _0x26452d = (_0x82f3eb[_0x21460f(0x1e7)](_0x241555, 0x1) << 0x8) + _0x82f3eb['getUint8'](_0x241555 + 0x1, 0x1);
            _0x241555 += 0x2;
            var _0x1321c8 = (_0x82f3eb['getUint8'](_0x241555, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](_0x241555 + 0x1, 0x1);
            _0x241555 += 0x2;
            var _0x3ad583 = _0x82f3eb['getUint8'](_0x241555, 0x1);
            _0x30d395[_0x21460f(0x215)] && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, {
              'res': 0x0,
              'data': {
                'uuid': _0x4ff902,
                'bar': _0x5eebcb,
                'pici': _0x44699e,
                'used': _0x1321c8,
                'total': _0x26452d,
                'paper': _0x3ad583
              }
            });
          } else _0x30d395[_0x21460f(0x215)] && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, {
            'res': 0x1
          });
        }
        break;
      case 0xbf:
        {
          var _0x4f96c3 = {},
            _0x393b72 = _0x82f3eb[_0x21460f(0x1e7)](0x3, 0x1),
            _0x2f2864 = 0x4;
          while (_0x2f2864 < _0x393b72 + 0x4) {
            var _0xe8022b = _0x82f3eb[_0x21460f(0x1e7)](_0x2f2864, 0x1);
            _0x2f2864++;
            var _0x3cd57d = _0x82f3eb[_0x21460f(0x1e7)](_0x2f2864, 0x1);
            _0x2f2864++;
            var _0x479a72 = 0x0,
              _0xe22ce6 = 0x0;
            while (_0x479a72 < _0x3cd57d) {
              _0xe22ce6 = _0xe22ce6 * 0x100 + _0x82f3eb[_0x21460f(0x1e7)](_0x2f2864, 0x1), _0x2f2864++, _0x479a72++;
            }
            _0x4f96c3[_0xe8022b] = _0xe22ce6;
          }
          _0x30d395[_0x21460f(0x1db)] = _0x4f96c3;
          if (_0x30d395[_0x21460f(0x20c)] != null) {
            var _0x1e428b = _0x30d395[_0x21460f(0x20c)];
            _0x30d395['getPrinterInfosCallback'] = null, _0x1e428b();
          }
        }
        break;
      case 0x69:
        {
          var _0x210bf9 = {
              0x0: (_0x82f3eb['getUint8'](0x4, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1),
              0x1: (_0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x7, 0x1)
            },
            _0x10d937 = _0x82f3eb[_0x21460f(0x1e7)](0x3, 0x1);
          _0x10d937 >= 0x12 ? (_0x210bf9[0x2] = _0x82f3eb['getUint8'](0x8, 0x1), _0x210bf9[0x3] = ((_0x82f3eb['getUint8'](0x9, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0xa, 0x1)) / 0xa, _0x210bf9[0x4] = ((_0x82f3eb[_0x21460f(0x1e7)](0xb, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0xc, 0x1)) / 0xa, _0x210bf9[0x5] = (_0x82f3eb[_0x21460f(0x1e7)](0xd, 0x1) << 0x8) + _0x82f3eb['getUint8'](0xe, 0x1), _0x210bf9[0x6] = ((_0x82f3eb[_0x21460f(0x1e7)](0xf, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x10, 0x1)) / 0xa, _0x210bf9[0x7] = _0x82f3eb[_0x21460f(0x1e7)](0x11, 0x1), _0x210bf9[0x8] = (_0x82f3eb[_0x21460f(0x1e7)](0x12, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x13, 0x1), _0x210bf9[0x9] = ((_0x82f3eb[_0x21460f(0x1e7)](0x14, 0x1) << 0x8) + _0x82f3eb[_0x21460f(0x1e7)](0x15, 0x1)) / 0xa) : (_0x210bf9[0x2] = 0x0, _0x210bf9[0x3] = 0x0, _0x210bf9[0x4] = 0x0, _0x210bf9[0x5] = 0x0, _0x210bf9[0x6] = 0x0, _0x210bf9[0x7] = 0x0, _0x210bf9[0x8] = 0x0, _0x210bf9[0x9] = 0x0), _0x30d395[_0x21460f(0x215)] && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, _0x210bf9);
        }
        break;
      case 0x8f:
        {
          var _0x15e73f = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x30d395['printer']['reciveCmd'](_0x2e0f3b, _0x15e73f);
        }
        break;
      case 0x6a:
        {
          var _0x3301b5 = _0x82f3eb['getUint8'](0x4, 0x1);
          _0x30d395[_0x21460f(0x215)] && _0x3301b5 < 0x2 && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x3301b5);
        }
      case 0x88:
        {
          var _0x35ba49 = _0x82f3eb[_0x21460f(0x1e7)](0x4, 0x1) * 0x100 + _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1),
            _0x5e8a15 = _0x82f3eb[_0x21460f(0x1e7)](0x6, 0x1),
            _0x9979fb = _0x82f3eb[_0x21460f(0x1e7)](0x7, 0x1) * 0x100 + _0x82f3eb[_0x21460f(0x1e7)](0x8, 0x1),
            _0x1c4e7e = _0x82f3eb['getUint8'](0xb, 0x1) * 0x100 + _0x82f3eb[_0x21460f(0x1e7)](0xc, 0x1),
            _0x519117 = _0x82f3eb['getUint8'](0xd, 0x1),
            _0xfea23f = _0x82f3eb[_0x21460f(0x1e7)](0xe, 0x1),
            _0x28e870 = {
              0x0: _0x35ba49,
              0x1: _0x5e8a15,
              0x2: _0x9979fb,
              0x3: _0x1c4e7e,
              0x4: _0xfea23f,
              0x5: _0x519117
            };
          _0x30d395['printer'] && _0x30d395[_0x21460f(0x215)][_0x21460f(0x1ff)](_0x2e0f3b, _0x28e870);
        }
        break;
      case 0xd:
        {
          var _0x2a0c8b = _0x82f3eb['getUint8'](0x4, 0x1),
            _0x158a1b = _0x82f3eb[_0x21460f(0x1e7)](0x5, 0x1);
          _0x30d395['printer'] && _0x2a0c8b == 0x2 && _0x30d395['printer'][_0x21460f(0x1ff)](_0x2e0f3b, _0x158a1b);
        }
        break;
      default:
        break;
    }
  }
}, DataUntils[a0_0x268a7d(0x214)] = function (_0x253883, _0x134c58) {
  var _0x521f38 = a0_0x268a7d;
  if (_0x253883[_0x521f38(0x1f5)] < _0x134c58[_0x521f38(0x1f5)]) {
    var _0x312c0c = _0x134c58[_0x521f38(0x1df)](0x0, _0x253883[_0x521f38(0x1f5)]);
    return this[_0x521f38(0x1eb)](_0x253883, _0x312c0c) ? this[_0x521f38(0x214)](_0x253883, _0x134c58[_0x521f38(0x1df)](_0x253883[_0x521f38(0x1f5)], _0x134c58[_0x521f38(0x1f5)] - _0x253883['byteLength'])) : _0x134c58;
  } else return _0x134c58;
}, DataUntils[a0_0x268a7d(0x1eb)] = function (_0x1a094d, _0x5afb65) {
  var _0x5cd3ae = a0_0x268a7d;
  if (_0x1a094d[_0x5cd3ae(0x1f5)] != _0x5afb65['byteLength']) return ![];else {
    var _0x5019c0 = new DataView(_0x1a094d),
      _0x13b229 = new DataView(_0x5afb65);
    for (var _0x2425c1 = 0x0; _0x2425c1 < _0x5afb65['byteLength']; _0x2425c1++) {
      if (_0x5019c0[_0x5cd3ae(0x1e7)](_0x2425c1) != _0x13b229[_0x5cd3ae(0x1e7)](_0x2425c1)) return ![];
    }
    return !![];
  }
}, DataUntils[a0_0x268a7d(0x1e2)] = {};
function a0_0x2089() {
  var _0x58a3c1 = ['dealData', 'width', 'prototype', '1392846TngvXi', '2028708XyqMoW', 'deal120ByteArray', 'setInt8', 'getUint8', 'deal120TotalPictureByteArrayWithZip', 'maxCacheRows', '171075WdhMrI', 'compare', 'createSpaceRowData', '4dZSuhk', '0123456789abcdef', 'lzoapi', 'substr', 'charAt', 'createData', '409332EwwIVu', 'createTotalPictureZipBuffer', 'byteLength', 'agreement', 'height', 'createRowData', 'ab2hex', 'doubleColorPrintSupport', 'push', 'tid', '3480RopRQB', 'map', 'reciveCmd', 'outputBuffer', 'compareImageDataWithZipComplete', 'time', 'toString', 'createDataWithDataArray', '2525210PnsMeN', '11ZlUnmA', 'getInfos', 'sendBleInterval', '76308ADgRPW', 'getInfosCallback', 'left', 'getPrinterInfosCallback', 'deal120ByteArrayWithZip', 'repeatTimeoutId', 'fromCharCode', 'insertAtHeadOfBuffer', 'compress', 'data', 'doCreateBuffer', 'cutRepeat', 'printer', 'maxOnceSendRows', 'doublePrinterMaxCache', 'createZipBuffer', 'protoVer', 'call', '45qcJXAZ', 'right', 'setUint8', 'dealImageData', 'splice', 'length', 'printerInfos', 'ble', '4563VaOPZx', 'join', 'slice'];
  a0_0x2089 = function a0_0x2089() {
    return _0x58a3c1;
  };
  return a0_0x2089();
}
var _default = DataUntils;
exports.default = _default;

/***/ }),

/***/ 187:
/*!***************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/lzo1x.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function a0_0x4aa8(_0x118a14, _0x58dfe4) {
  var _0x112761 = a0_0x1127();
  return a0_0x4aa8 = function a0_0x4aa8(_0x4aa8b6, _0x2ed61c) {
    _0x4aa8b6 = _0x4aa8b6 - 0x10e;
    var _0x5b4956 = _0x112761[_0x4aa8b6];
    return _0x5b4956;
  }, a0_0x4aa8(_0x118a14, _0x58dfe4);
}
(function (_0x4ea811, _0x1660e4) {
  var _0x50f18a = a0_0x4aa8,
    _0x56e7cb = _0x4ea811();
  while (!![]) {
    try {
      var _0x136493 = -parseInt(_0x50f18a(0x12e)) / 0x1 + parseInt(_0x50f18a(0x113)) / 0x2 * (-parseInt(_0x50f18a(0x12a)) / 0x3) + parseInt(_0x50f18a(0x11b)) / 0x4 + parseInt(_0x50f18a(0x12b)) / 0x5 + -parseInt(_0x50f18a(0x123)) / 0x6 + parseInt(_0x50f18a(0x135)) / 0x7 + parseInt(_0x50f18a(0x111)) / 0x8;
      if (_0x136493 === _0x1660e4) break;else _0x56e7cb['push'](_0x56e7cb['shift']());
    } catch (_0x1be189) {
      _0x56e7cb['push'](_0x56e7cb['shift']());
    }
  }
})(a0_0x1127, 0x327cd);
function a0_0x1127() {
  var _0x5139ec = ['copy_from_buf', 'ip_start', 'out', '537198DnfypK', 'blockSize', 'buf32', 'outputSize', 'OUTPUT_OVERRUN', 'set', 'ret', '798LKTfRa', '425430xCCldO', 'inputBuffer', 'setBlockSize', '266105fjCyAN', 'minNewSize', 'm_pos', 'compress', 'extendBuffer', 'copy_match', '_compressCore', '2211202MZuCjq', 'match_done', 'op_end', 'applyConfig', 'buf', 'state', 'returnNewBuffers', 'dv_hi', 'maxSize', 'dict', 'dv_lo', 'subarray', 'match_next', 'decompress', 'm_off', 'prev_ip', 'emptyDict', 'match', 'ceil', 'ip_end', '2696576lHfSHM', 'skipToFirstLiteralFun', '2524bRdDDh', 'LOOKBEHIND_OVERRUN', 'dindex', 'setOutputSize', 'cbl', 'length', 'setReturnNewBuffers', 'number', '640332onmbls', 'INPUT_OVERRUN', 'm_len', 'EOF_FOUND', 'outputBuffer'];
  a0_0x1127 = function a0_0x1127() {
    return _0x5139ec;
  };
  return a0_0x1127();
}
function _lzo1x() {
  var _0x32de70 = a0_0x4aa8;
  this[_0x32de70(0x124)] = 0x80 * 0x400, this[_0x32de70(0x12f)] = this[_0x32de70(0x124)], this['maxSize'] = 0x0, this['OK'] = 0x0, this[_0x32de70(0x11c)] = -0x4, this[_0x32de70(0x127)] = -0x5, this[_0x32de70(0x114)] = -0x6, this[_0x32de70(0x11e)] = -0x3e7, this[_0x32de70(0x129)] = 0x0, this[_0x32de70(0x139)] = null, this[_0x32de70(0x125)] = null, this[_0x32de70(0x122)] = new Uint8Array(0x100 * 0x400), this[_0x32de70(0x117)] = 0x0, this['ip_end'] = 0x0, this[_0x32de70(0x137)] = 0x0, this['t'] = 0x0, this['ip'] = 0x0, this['op'] = 0x0, this[_0x32de70(0x130)] = 0x0, this[_0x32de70(0x11d)] = 0x0, this[_0x32de70(0x143)] = 0x0, this['dv_hi'] = 0x0, this[_0x32de70(0x13f)] = 0x0, this[_0x32de70(0x115)] = 0x0, this['ii'] = 0x0, this['jj'] = 0x0, this['tt'] = 0x0, this['v'] = 0x0, this[_0x32de70(0x13e)] = new Uint32Array(0x4000), this[_0x32de70(0x145)] = new Uint32Array(0x4000), this[_0x32de70(0x112)] = ![], this[_0x32de70(0x13b)] = !![], this['setBlockSize'] = function (_0x43d3ff) {
    var _0x55a205 = _0x32de70;
    return (0, _typeof2.default)(_0x43d3ff) === _0x55a205(0x11a) && !isNaN(_0x43d3ff) && parseInt(_0x43d3ff) > 0x0 ? (this[_0x55a205(0x124)] = parseInt(_0x43d3ff), !![]) : ![];
  }, this[_0x32de70(0x116)] = function (_0x2aeb40) {
    var _0x423b60 = _0x32de70;
    return (0, _typeof2.default)(_0x2aeb40) === _0x423b60(0x11a) && !isNaN(_0x2aeb40) && parseInt(_0x2aeb40) > 0x0 ? (this[_0x423b60(0x122)] = new Uint8Array(parseInt(_0x2aeb40)), !![]) : ![];
  }, this[_0x32de70(0x119)] = function (_0x345cbe) {
    var _0x3a1d81 = _0x32de70;
    this[_0x3a1d81(0x13b)] = !!_0x345cbe;
  }, this[_0x32de70(0x138)] = function (_0x284615) {
    var _0x5b000a = _0x32de70;
    _0x284615 !== undefined && (_0x284615['outputSize'] !== undefined && instance[_0x5b000a(0x116)](_0x284615[_0x5b000a(0x126)]), _0x284615['blockSize'] !== undefined && instance[_0x5b000a(0x12d)](_0x284615[_0x5b000a(0x124)]));
  }, this['ctzl'] = function (_0xf20ff3) {
    var _0x497455;
    return _0xf20ff3 & 0x1 ? _0x497455 = 0x0 : (_0x497455 = 0x1, (_0xf20ff3 & 0xffff) === 0x0 && (_0xf20ff3 >>= 0x10, _0x497455 += 0x10), (_0xf20ff3 & 0xff) === 0x0 && (_0xf20ff3 >>= 0x8, _0x497455 += 0x8), (_0xf20ff3 & 0xf) === 0x0 && (_0xf20ff3 >>= 0x4, _0x497455 += 0x4), (_0xf20ff3 & 0x3) === 0x0 && (_0xf20ff3 >>= 0x2, _0x497455 += 0x2), _0x497455 -= _0xf20ff3 & 0x1), _0x497455;
  }, this[_0x32de70(0x132)] = function () {
    var _0x109b51 = _0x32de70,
      _0x4ac6df = new Uint8Array(this[_0x109b51(0x12f)] + (this['blockSize'] - this['minNewSize'] % this[_0x109b51(0x124)]));
    _0x4ac6df[_0x109b51(0x128)](this[_0x109b51(0x122)]), this[_0x109b51(0x122)] = _0x4ac6df, this[_0x109b51(0x117)] = this[_0x109b51(0x122)][_0x109b51(0x118)];
  }, this[_0x32de70(0x141)] = function () {
    var _0x29ada1 = _0x32de70;
    this['minNewSize'] = this['op'] + 0x3, this[_0x29ada1(0x12f)] > this['cbl'] && this[_0x29ada1(0x132)](), this['out'][this['op']++] = this['buf'][this['ip']++], this['t'] > 0x1 && (this['out'][this['op']++] = this[_0x29ada1(0x139)][this['ip']++], this['t'] > 0x2 && (this[_0x29ada1(0x122)][this['op']++] = this[_0x29ada1(0x139)][this['ip']++])), this['t'] = this['buf'][this['ip']++];
  }, this[_0x32de70(0x136)] = function () {
    var _0x16e950 = _0x32de70;
    return this['t'] = this[_0x16e950(0x139)][this['ip'] - 0x2] & 0x3, this['t'];
  }, this[_0x32de70(0x133)] = function () {
    var _0x411349 = _0x32de70;
    this['t'] += 0x2, this['minNewSize'] = this['op'] + this['t'];
    this[_0x411349(0x12f)] > this[_0x411349(0x117)] && this['extendBuffer']();
    do {
      this[_0x411349(0x122)][this['op']++] = this[_0x411349(0x122)][this[_0x411349(0x130)]++];
    } while (--this['t'] > 0x0);
  }, this[_0x32de70(0x120)] = function () {
    var _0x5e2907 = _0x32de70;
    this[_0x5e2907(0x12f)] = this['op'] + this['t'];
    this[_0x5e2907(0x12f)] > this[_0x5e2907(0x117)] && this[_0x5e2907(0x132)]();
    do {
      this[_0x5e2907(0x122)][this['op']++] = this[_0x5e2907(0x139)][this['ip']++];
    } while (--this['t'] > 0x0);
  }, this['match'] = function () {
    var _0x9f078 = _0x32de70;
    for (;;) {
      if (this['t'] >= 0x40) this[_0x9f078(0x130)] = this['op'] - 0x1 - (this['t'] >> 0x2 & 0x7) - (this[_0x9f078(0x139)][this['ip']++] << 0x3), this['t'] = (this['t'] >> 0x5) - 0x1, this['copy_match']();else {
        if (this['t'] >= 0x20) {
          this['t'] &= 0x1f;
          if (this['t'] === 0x0) {
            while (this[_0x9f078(0x139)][this['ip']] === 0x0) {
              this['t'] += 0xff, this['ip']++;
            }
            this['t'] += 0x1f + this[_0x9f078(0x139)][this['ip']++];
          }
          this['m_pos'] = this['op'] - 0x1 - (this[_0x9f078(0x139)][this['ip']] >> 0x2) - (this['buf'][this['ip'] + 0x1] << 0x6), this['ip'] += 0x2, this[_0x9f078(0x133)]();
        } else {
          if (this['t'] >= 0x10) {
            this[_0x9f078(0x130)] = this['op'] - ((this['t'] & 0x8) << 0xb), this['t'] &= 0x7;
            if (this['t'] === 0x0) {
              while (this[_0x9f078(0x139)][this['ip']] === 0x0) {
                this['t'] += 0xff, this['ip']++;
              }
              this['t'] += 0x7 + this[_0x9f078(0x139)][this['ip']++];
            }
            this['m_pos'] -= (this[_0x9f078(0x139)][this['ip']] >> 0x2) + (this[_0x9f078(0x139)][this['ip'] + 0x1] << 0x6), this['ip'] += 0x2;
            if (this[_0x9f078(0x130)] === this['op']) return this['state']['outputBuffer'] = this['returnNewBuffers'] === !![] ? new Uint8Array(this[_0x9f078(0x122)][_0x9f078(0x140)](0x0, this['op'])) : this['out'][_0x9f078(0x140)](0x0, this['op']), this['EOF_FOUND'];else this[_0x9f078(0x130)] -= 0x4000, this['copy_match']();
          } else this[_0x9f078(0x130)] = this['op'] - 0x1 - (this['t'] >> 0x2) - (this[_0x9f078(0x139)][this['ip']++] << 0x2), this['minNewSize'] = this['op'] + 0x2, this[_0x9f078(0x12f)] > this[_0x9f078(0x117)] && this[_0x9f078(0x132)](), this[_0x9f078(0x122)][this['op']++] = this[_0x9f078(0x122)][this[_0x9f078(0x130)]++], this[_0x9f078(0x122)][this['op']++] = this['out'][this['m_pos']];
        }
      }
      if (this[_0x9f078(0x136)]() === 0x0) return this['OK'];
      this['match_next']();
    }
  }, this[_0x32de70(0x142)] = function (_0xf0a3de) {
    var _0x360223 = _0x32de70;
    this[_0x360223(0x13a)] = _0xf0a3de, this[_0x360223(0x139)] = this[_0x360223(0x13a)]['inputBuffer'], this[_0x360223(0x117)] = this['out']['length'], this['ip_end'] = this[_0x360223(0x139)]['length'], this['t'] = 0x0, this['ip'] = 0x0, this['op'] = 0x0, this[_0x360223(0x130)] = 0x0, this[_0x360223(0x112)] = ![];
    if (this[_0x360223(0x139)][this['ip']] > 0x11) {
      this['t'] = this['buf'][this['ip']++] - 0x11;
      if (this['t'] < 0x4) {
        this['match_next'](), this[_0x360223(0x129)] = this[_0x360223(0x10e)]();
        if (this[_0x360223(0x129)] !== this['OK']) return this['ret'] === this[_0x360223(0x11e)] ? this['OK'] : this[_0x360223(0x129)];
      } else this['copy_from_buf'](), this[_0x360223(0x112)] = !![];
    }
    for (;;) {
      if (!this['skipToFirstLiteralFun']) {
        this['t'] = this[_0x360223(0x139)][this['ip']++];
        if (this['t'] >= 0x10) {
          this[_0x360223(0x129)] = this[_0x360223(0x10e)]();
          if (this['ret'] !== this['OK']) return this[_0x360223(0x129)] === this['EOF_FOUND'] ? this['OK'] : this[_0x360223(0x129)];
          continue;
        } else {
          if (this['t'] === 0x0) {
            while (this[_0x360223(0x139)][this['ip']] === 0x0) {
              this['t'] += 0xff, this['ip']++;
            }
            this['t'] += 0xf + this[_0x360223(0x139)][this['ip']++];
          }
        }
        this['t'] += 0x3, this['copy_from_buf']();
      } else this[_0x360223(0x112)] = ![];
      this['t'] = this[_0x360223(0x139)][this['ip']++];
      if (this['t'] < 0x10) {
        this[_0x360223(0x130)] = this['op'] - (0x1 + 0x800), this[_0x360223(0x130)] -= this['t'] >> 0x2, this['m_pos'] -= this['buf'][this['ip']++] << 0x2, this[_0x360223(0x12f)] = this['op'] + 0x3;
        this[_0x360223(0x12f)] > this[_0x360223(0x117)] && this[_0x360223(0x132)]();
        this[_0x360223(0x122)][this['op']++] = this[_0x360223(0x122)][this[_0x360223(0x130)]++], this[_0x360223(0x122)][this['op']++] = this['out'][this[_0x360223(0x130)]++], this[_0x360223(0x122)][this['op']++] = this[_0x360223(0x122)][this[_0x360223(0x130)]];
        if (this[_0x360223(0x136)]() === 0x0) continue;else this[_0x360223(0x141)]();
      }
      this['ret'] = this['match']();
      if (this[_0x360223(0x129)] !== this['OK']) return this[_0x360223(0x129)] === this[_0x360223(0x11e)] ? this['OK'] : this[_0x360223(0x129)];
    }
    return this['OK'];
  }, this['_compressCore'] = function () {
    var _0x2fd5c6 = _0x32de70;
    this[_0x2fd5c6(0x121)] = this['ip'], this[_0x2fd5c6(0x110)] = this['ip'] + this['ll'] - 0x14, this['jj'] = this['ip'], this['ti'] = this['t'], this['ip'] += this['ti'] < 0x4 ? 0x4 - this['ti'] : 0x0, this['ip'] += 0x1 + (this['ip'] - this['jj'] >> 0x5);
    for (;;) {
      if (this['ip'] >= this[_0x2fd5c6(0x110)]) break;
      this[_0x2fd5c6(0x13f)] = this[_0x2fd5c6(0x139)][this['ip']] | this[_0x2fd5c6(0x139)][this['ip'] + 0x1] << 0x8, this['dv_hi'] = this[_0x2fd5c6(0x139)][this['ip'] + 0x2] | this[_0x2fd5c6(0x139)][this['ip'] + 0x3] << 0x8, this['dindex'] = ((this['dv_lo'] * 0x429d >>> 0x10) + this['dv_hi'] * 0x429d + this[_0x2fd5c6(0x13f)] * 0x1824 & 0xffff) >>> 0x2, this[_0x2fd5c6(0x130)] = this[_0x2fd5c6(0x121)] + this[_0x2fd5c6(0x13e)][this[_0x2fd5c6(0x115)]], this['dict'][this[_0x2fd5c6(0x115)]] = this['ip'] - this[_0x2fd5c6(0x121)];
      if ((this[_0x2fd5c6(0x13c)] << 0x10) + this[_0x2fd5c6(0x13f)] != (this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)]] | this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + 0x1] << 0x8 | this['buf'][this[_0x2fd5c6(0x130)] + 0x2] << 0x10 | this['buf'][this[_0x2fd5c6(0x130)] + 0x3] << 0x18)) {
        this['ip'] += 0x1 + (this['ip'] - this['jj'] >> 0x5);
        continue;
      }
      this['jj'] -= this['ti'], this['ti'] = 0x0, this['v'] = this['ip'] - this['jj'];
      if (this['v'] !== 0x0) {
        if (this['v'] <= 0x3) {
          this[_0x2fd5c6(0x122)][this['op'] - 0x2] |= this['v'];
          do {
            this['out'][this['op']++] = this[_0x2fd5c6(0x139)][this['jj']++];
          } while (--this['v'] > 0x0);
        } else {
          if (this['v'] <= 0x12) this[_0x2fd5c6(0x122)][this['op']++] = this['v'] - 0x3;else {
            this['tt'] = this['v'] - 0x12, this['out'][this['op']++] = 0x0;
            while (this['tt'] > 0xff) {
              this['tt'] -= 0xff, this[_0x2fd5c6(0x122)][this['op']++] = 0x0;
            }
            this[_0x2fd5c6(0x122)][this['op']++] = this['tt'];
          }
          do {
            this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x139)][this['jj']++];
          } while (--this['v'] > 0x0);
        }
      }
      this[_0x2fd5c6(0x11d)] = 0x4;
      if (this['buf'][this['ip'] + this[_0x2fd5c6(0x11d)]] === this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) do {
        this['m_len'] += 0x1;
        if (this[_0x2fd5c6(0x139)][this['ip'] + this['m_len']] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this['buf'][this['ip'] + this[_0x2fd5c6(0x11d)]] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this['buf'][this['ip'] + this[_0x2fd5c6(0x11d)]] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this['buf'][this['ip'] + this['m_len']] !== this['buf'][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this[_0x2fd5c6(0x139)][this['ip'] + this[_0x2fd5c6(0x11d)]] !== this['buf'][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this[_0x2fd5c6(0x139)][this['ip'] + this['m_len']] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this['m_len'] += 0x1;
        if (this[_0x2fd5c6(0x139)][this['ip'] + this['m_len']] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        this[_0x2fd5c6(0x11d)] += 0x1;
        if (this['buf'][this['ip'] + this[_0x2fd5c6(0x11d)]] !== this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]) break;
        if (this['ip'] + this[_0x2fd5c6(0x11d)] >= this[_0x2fd5c6(0x110)]) break;
      } while (this[_0x2fd5c6(0x139)][this['ip'] + this[_0x2fd5c6(0x11d)]] === this[_0x2fd5c6(0x139)][this[_0x2fd5c6(0x130)] + this[_0x2fd5c6(0x11d)]]);
      this['m_off'] = this['ip'] - this['m_pos'], this['ip'] += this['m_len'], this['jj'] = this['ip'];
      if (this['m_len'] <= 0x8 && this[_0x2fd5c6(0x143)] <= 0x800) this[_0x2fd5c6(0x143)] -= 0x1, this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x11d)] - 0x1 << 0x5 | (this[_0x2fd5c6(0x143)] & 0x7) << 0x2, this[_0x2fd5c6(0x122)][this['op']++] = this['m_off'] >> 0x3;else {
        if (this['m_off'] <= 0x4000) {
          this[_0x2fd5c6(0x143)] -= 0x1;
          if (this[_0x2fd5c6(0x11d)] <= 0x21) this['out'][this['op']++] = 0x20 | this[_0x2fd5c6(0x11d)] - 0x2;else {
            this['m_len'] -= 0x21, this[_0x2fd5c6(0x122)][this['op']++] = 0x20;
            while (this[_0x2fd5c6(0x11d)] > 0xff) {
              this[_0x2fd5c6(0x11d)] -= 0xff, this[_0x2fd5c6(0x122)][this['op']++] = 0x0;
            }
            this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x11d)];
          }
          this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x143)] << 0x2, this[_0x2fd5c6(0x122)][this['op']++] = this['m_off'] >> 0x6;
        } else {
          this['m_off'] -= 0x4000;
          if (this[_0x2fd5c6(0x11d)] <= 0x9) this[_0x2fd5c6(0x122)][this['op']++] = 0x10 | this[_0x2fd5c6(0x143)] >> 0xb & 0x8 | this[_0x2fd5c6(0x11d)] - 0x2;else {
            this[_0x2fd5c6(0x11d)] -= 0x9, this['out'][this['op']++] = 0x10 | this['m_off'] >> 0xb & 0x8;
            while (this[_0x2fd5c6(0x11d)] > 0xff) {
              this[_0x2fd5c6(0x11d)] -= 0xff, this[_0x2fd5c6(0x122)][this['op']++] = 0x0;
            }
            this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x11d)];
          }
          this[_0x2fd5c6(0x122)][this['op']++] = this['m_off'] << 0x2, this[_0x2fd5c6(0x122)][this['op']++] = this[_0x2fd5c6(0x143)] >> 0x6;
        }
      }
    }
    this['t'] = this['ll'] - (this['jj'] - this[_0x2fd5c6(0x121)] - this['ti']);
  }, this[_0x32de70(0x131)] = function (_0xd477df) {
    var _0x57b2b5 = _0x32de70;
    this[_0x57b2b5(0x13a)] = _0xd477df, this['ip'] = 0x0, this[_0x57b2b5(0x139)] = this[_0x57b2b5(0x13a)][_0x57b2b5(0x12c)], this[_0x57b2b5(0x13d)] = this[_0x57b2b5(0x139)][_0x57b2b5(0x118)] + Math[_0x57b2b5(0x10f)](this[_0x57b2b5(0x139)]['length'] / 0x10) + 0x40 + 0x3;
    this[_0x57b2b5(0x13d)] > this['out'][_0x57b2b5(0x118)] && (this[_0x57b2b5(0x122)] = new Uint8Array(this[_0x57b2b5(0x13d)]));
    this['op'] = 0x0, this['l'] = this['buf']['length'], this['t'] = 0x0;
    while (this['l'] > 0x14) {
      this['ll'] = this['l'] <= 0xc000 ? this['l'] : 0xc000;
      if (this['t'] + this['ll'] >> 0x5 <= 0x0) break;
      this[_0x57b2b5(0x13e)]['set'](this[_0x57b2b5(0x145)]), this[_0x57b2b5(0x144)] = this['ip'], this[_0x57b2b5(0x134)](), this['ip'] = this['prev_ip'] + this['ll'], this['l'] -= this['ll'];
    }
    this['t'] += this['l'];
    if (this['t'] > 0x0) {
      this['ii'] = this[_0x57b2b5(0x139)][_0x57b2b5(0x118)] - this['t'];
      if (this['op'] === 0x0 && this['t'] <= 0xee) this[_0x57b2b5(0x122)][this['op']++] = 0x11 + this['t'];else {
        if (this['t'] <= 0x3) this[_0x57b2b5(0x122)][this['op'] - 0x2] |= this['t'];else {
          if (this['t'] <= 0x12) this[_0x57b2b5(0x122)][this['op']++] = this['t'] - 0x3;else {
            this['tt'] = this['t'] - 0x12, this[_0x57b2b5(0x122)][this['op']++] = 0x0;
            while (this['tt'] > 0xff) {
              this['tt'] -= 0xff, this[_0x57b2b5(0x122)][this['op']++] = 0x0;
            }
            this[_0x57b2b5(0x122)][this['op']++] = this['tt'];
          }
        }
      }
      do {
        this[_0x57b2b5(0x122)][this['op']++] = this[_0x57b2b5(0x139)][this['ii']++];
      } while (--this['t'] > 0x0);
    }
    return this[_0x57b2b5(0x122)][this['op']++] = 0x11, this[_0x57b2b5(0x122)][this['op']++] = 0x0, this[_0x57b2b5(0x122)][this['op']++] = 0x0, this[_0x57b2b5(0x13a)][_0x57b2b5(0x11f)] = this[_0x57b2b5(0x13b)] === !![] ? new Uint8Array(this[_0x57b2b5(0x122)][_0x57b2b5(0x140)](0x0, this['op'])) : this[_0x57b2b5(0x122)]['subarray'](0x0, this['op']), this['OK'];
  };
}
;
var instance = new _lzo1x(),
  lzoapi = {
    'setBlockSize': function setBlockSize(_0x464d71) {
      var _0x438897 = a0_0x4aa8;
      return instance[_0x438897(0x12d)](_0x464d71);
    },
    'setOutputEstimate': function setOutputEstimate(_0x21aedb) {
      return instance['setOutputSize'](_0x21aedb);
    },
    'setReturnNewBuffers': function setReturnNewBuffers(_0x5800ea) {
      var _0x321022 = a0_0x4aa8;
      instance[_0x321022(0x119)](_0x5800ea);
    },
    'compress': function compress(_0x4ba062, _0x3a26b7) {
      var _0x480b03 = a0_0x4aa8;
      return _0x3a26b7 !== undefined && instance[_0x480b03(0x138)](_0x3a26b7), instance[_0x480b03(0x131)](_0x4ba062);
    },
    'decompress': function decompress(_0x4fdb45, _0xfaa57d) {
      var _0x983536 = a0_0x4aa8;
      return _0xfaa57d !== undefined && instance[_0x983536(0x138)](_0xfaa57d), instance['decompress'](_0x4fdb45);
    }
  };
var _default = {
  'lzoapi': lzoapi
};
exports.default = _default;

/***/ }),

/***/ 188:
/*!************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCAPIErrorCode.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SDKErrorCode = {
  "JCSDK_PRINT_ERR_TIMEOUT": {
    "errCode": 0xff00,
    "msg": "打印超时"
  },
  "JCSDK_PRINT_ERR_DISCONNECT": {
    "errCode": 0xff01,
    "msg": "打印机断开"
  },
  "JCSDK_PRINT_ERR_DATA": {
    "errCode": 0xff02,
    "msg": "数据错误"
  },
  "JCSDK_PRINT_ERR_BUSY": {
    "errCode": 0xff03,
    "msg": "打印机忙碌"
  },
  "JCSDK_PRINT_ERR_GetDATA": {
    "errCode": 0xff04,
    "msg": "画布获取数据错误"
  },
  "JCSDK_PRINT_ERR_SetPaperFailed": {
    "errCode": 0xff05,
    "msg": "设置纸张失败错误"
  },
  "JCSDK_PRINT_ERR_PrinterNotWork": {
    "errCode": 0xff06,
    "msg": "查询打印纸张状态异常"
  },
  "JCSDK_PRINT_ERR_0x01": {
    "errCode": 0xff07,
    "msg": "盒盖打开"
  },
  "JCSDK_PRINT_ERR_0x02": {
    "errCode": 0xff08,
    "msg": "缺纸"
  },
  "JCSDK_PRINT_ERR_0x03": {
    "errCode": 0xff09,
    "msg": "电量不足"
  },
  "JCSDK_PRINT_ERR_0x04": {
    "errCode": 0xff0a,
    "msg": "电池异常"
  },
  "JCSDK_PRINT_ERR_0x05": {
    "errCode": 0xff0b,
    "msg": "手动停止"
  },
  "JCSDK_PRINT_ERR_0x06": {
    "errCode": 0xff0c,
    "msg": "数据错误"
  },
  "JCSDK_PRINT_ERR_0x07": {
    "errCode": 0xff0d,
    "msg": "温度过高"
  },
  "JCSDK_PRINT_ERR_0x08": {
    "errCode": 0xff0e,
    "msg": "出纸异常"
  },
  "JCSDK_PRINT_ERR_0x09": {
    "errCode": 0xff0f,
    "msg": "纸张错误"
  },
  "JCSDK_PRINT_ERR_0x0a": {
    "errCode": 0xff10,
    "msg": "rfid写入失败"
  },
  "JCSDK_PRINT_ERR_0x0b": {
    "errCode": 0xff11,
    "msg": "出纸异常"
  },
  "JCSDK_PRINT_ERR_0x0c": {
    "errCode": 0xff12,
    "msg": "发送epc指令但未检测到RFID标签"
  },
  "JCSDK_PRINT_ERR_0x0d": {
    "errCode": 0xff13,
    "msg": "检测到RFID标签但未发送EPC指令"
  },
  "JCSDK_PRINT_ERR_0x0e": {
    "errCode": 0xff14,
    "msg": "缺碳带"
  },
  "JCSDK_PRINT_ERR_0x0f": {
    "errCode": 0xff15,
    "msg": "打印头未锁紧"
  },
  "JCSDK_PRINT_ERR_0x11": {
    "errCode": 0xff16,
    "msg": "碳带已用完"
  },
  "JCSDK_PRINT_ERR_0x12": {
    "errCode": 0xff17,
    "msg": "碳带不匹配"
  },
  "JCSDK_PRINT_ERR_0x13": {
    "errCode": 0xff18,
    "msg": "标签纸安装异常"
  },
  "JCSDK_PRINT_ERR_0x14": {
    "errCode": 0xff19,
    "msg": "非法标签"
  },
  "JCSDK_PRINT_ERR_0x15": {
    "errCode": 0xff20,
    "msg": "非法碳带和标签"
  },
  "JCSDK_PRINT_ERR_0x16": {
    "errCode": 0xff21,
    "msg": "超时(打印机超时)"
  },
  "JCSDK_PRINT_ERR_0x17": {
    "errCode": 0xff22,
    "msg": "非专业碳带"
  },
  "JCSDK_PRINT_ERR_epc": {
    "errCode": 0xfe01,
    "msg": "epc格式不对"
  },
  "JCSDK_PRINT_ERR_Drawing_Timeout": {
    "errCode": 0xfe00,
    "msg": "绘制元素超时错误"
  },
  "JCSDK_PRINT_ERR_noSupport": {
    "errCode": 0xfffd,
    "msg": "打印机不支持"
  },
  "JCSDK_PRINT_ERR_fail": {
    "errCode": 0xfd01,
    "msg": "失败"
  },
  "JCSDK_PRINT_ERR_none": {
    "errCode": 0xfd00,
    "msg": "正常"
  },
  "JCSDK_PLATFORM_WX": "微信",
  "JCSDK_PLATFORM_DD": "钉钉",
  "JCSDK_PLATFORM_FS": "飞书",
  "JCSDK_PLATFORM_Build_Origin": "原生环境编译",
  "JCSDK_PLATFORM_Build_Uni": "Uni环境编译"
};
var _default = SDKErrorCode;
exports.default = _default;

/***/ }),

/***/ 189:
/*!*******************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/JCAPI/JCPrinter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 190));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 191));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 193));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _JCDataUntil = _interopRequireDefault(__webpack_require__(/*! ./JCDataUntil */ 186));
var _JCAPIErrorCode = _interopRequireDefault(__webpack_require__(/*! ./JCAPIErrorCode */ 188));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var a0_0x51313f = a0_0x37ce;
(function (_0xe7a43b, _0x4d8b95) {
  var _0x565f74 = a0_0x37ce,
    _0x547fbe = _0xe7a43b();
  while (!![]) {
    try {
      var _0x47811d = -parseInt(_0x565f74(0x1a6)) / 0x1 * (parseInt(_0x565f74(0x18e)) / 0x2) + -parseInt(_0x565f74(0x1de)) / 0x3 + parseInt(_0x565f74(0x1c4)) / 0x4 * (-parseInt(_0x565f74(0x17b)) / 0x5) + parseInt(_0x565f74(0x20f)) / 0x6 + parseInt(_0x565f74(0x1ed)) / 0x7 * (parseInt(_0x565f74(0x15b)) / 0x8) + -parseInt(_0x565f74(0x1b6)) / 0x9 + -parseInt(_0x565f74(0x1ff)) / 0xa * (-parseInt(_0x565f74(0x211)) / 0xb);
      if (_0x47811d === _0x4d8b95) break;else _0x547fbe['push'](_0x547fbe['shift']());
    } catch (_0x47b24c) {
      _0x547fbe['push'](_0x547fbe['shift']());
    }
  }
})(a0_0x151a, 0xc3112);
function a0_0x37ce(_0x24f334, _0x42e547) {
  var _0x151a2b = a0_0x151a();
  return a0_0x37ce = function a0_0x37ce(_0x37ceb0, _0x5d689c) {
    _0x37ceb0 = _0x37ceb0 - 0x159;
    var _0x1d7349 = _0x151a2b[_0x37ceb0];
    return _0x1d7349;
  }, a0_0x37ce(_0x24f334, _0x42e547);
}
var PrinterBase = /*#__PURE__*/function (_a0_0x51313f, _a0_0x51313f2, _a0_0x51313f3, _a0_0x51313f4, _a0_0x51313f5, _a0_0x51313f6, _a0_0x51313f7, _a0_0x51313f8, _a0_0x51313f9, _a0_0x51313f10, _a0_0x51313f11, _a0_0x51313f12, _a0_0x51313f13, _a0_0x51313f14, _a0_0x51313f15, _a0_0x51313f16, _a0_0x51313f17, _a0_0x51313f18, _a0_0x51313f19, _a0_0x51313f20, _a0_0x51313f21) {
  function PrinterBase(_0x443fbf) {
    (0, _classCallCheck2.default)(this, PrinterBase);
    var _0x5c63c6 = a0_0x37ce;
    this[_0x5c63c6(0x1e2)] = _0x443fbf, this[_0x5c63c6(0x176)] = null, this[_0x5c63c6(0x201)] = null, this[_0x5c63c6(0x16d)] = null, this[_0x5c63c6(0x190)] = null, this[_0x5c63c6(0x206)] = null, this[_0x5c63c6(0x185)] = null, this['getMacAddressCallback'] = null, this[_0x5c63c6(0x1ab)] = null, this[_0x5c63c6(0x178)] = null, this[_0x5c63c6(0x18d)] = null, this[_0x5c63c6(0x1f7)] = null, this['getSpeedQualityCallback'] = null, this[_0x5c63c6(0x1d8)] = null, this[_0x5c63c6(0x1cb)] = null, this[_0x5c63c6(0x18c)] = null, this[_0x5c63c6(0x1c2)] = null, this[_0x5c63c6(0x163)] = null, this[_0x5c63c6(0x1d9)] = null, this[_0x5c63c6(0x168)] = null, this[_0x5c63c6(0x171)] = null, this[_0x5c63c6(0x192)] = null, this[_0x5c63c6(0x218)] = null, this['setStandardCallback'] = null, this['printObj'] = null, this[_0x5c63c6(0x20c)] = null, this['cancelPrintObj'] = null, this[_0x5c63c6(0x16f)] = null, this['hVer'] = null, this[_0x5c63c6(0x207)] = 0x0, this[_0x5c63c6(0x1ec)] = 0x0, this[_0x5c63c6(0x193)] = 0x0, this[_0x5c63c6(0x15f)] = 0x0, this[_0x5c63c6(0x15a)] = 0x0, this[_0x5c63c6(0x1b5)] = 0x0, this[_0x5c63c6(0x1df)] = 0x0, this[_0x5c63c6(0x15c)] = ![], this[_0x5c63c6(0x1ae)] = ![], this[_0x5c63c6(0x1f1)] = ![], this[_0x5c63c6(0x1ea)] = 0x0, this[_0x5c63c6(0x1af)] = 0xc8, this['paperHeight'] = 0x0, this[_0x5c63c6(0x1f9)] = 0x0;
  }
  (0, _createClass2.default)(PrinterBase, [{
    key: 'reciveCmd',
    value: function reciveCmd(_0x41de1c, _0x385ab8) {
      var _this = this;
      var _0x4d2ec7 = a0_0x37ce;
      var _0x32328b = this;
      this['manager'][_0x4d2ec7(0x214)]['repeatTimeoutId'] && (clearTimeout(this['manager']['ble']['repeatTimeoutId']), this[_0x4d2ec7(0x1e2)]['ble'][_0x4d2ec7(0x176)] = null);
      switch (_0x41de1c) {
        case 0x41:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x201)], _0x385ab8);
          break;
        case 0x42:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x16d)], _0x385ab8);
          break;
        case 0x43:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x190)], _0x385ab8);
          break;
        case 0x46:
          clearTimeout(this[_0x4d2ec7(0x176)]), this['callbackOnce'](this[_0x4d2ec7(0x1c2)], _0x385ab8);
          break;
        case 0x47:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x206)], _0x385ab8);
          break;
        case 0x49:
          clearTimeout(this[_0x4d2ec7(0x176)]), this['callbackOnce'](this['getSversionCallback'], _0x385ab8);
          break;
        case 0x4a:
          clearTimeout(this['repeatTimeoutId']), this[_0x4d2ec7(0x189)](this['getPowerLevelCallback'], _0x385ab8);
          break;
        case 0x4b:
          clearTimeout(this[_0x4d2ec7(0x176)]), this['callbackOnce'](this[_0x4d2ec7(0x1f7)], {
            'code': 0x0,
            'res': _0x385ab8
          });
          break;
        case 0x4c:
          clearTimeout(this[_0x4d2ec7(0x176)]), this['callbackOnce'](this[_0x4d2ec7(0x178)], _0x385ab8);
          break;
        case 0x4d:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x1e1)], _0x385ab8);
          break;
        case 0x31:
          clearTimeout(this[_0x4d2ec7(0x176)]), this['callbackOnce'](this[_0x4d2ec7(0x163)], _0x385ab8);
          break;
        case 0x32:
          clearTimeout(this['repeatTimeoutId']), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x1d9)], _0x385ab8);
          break;
        case 0x33:
          clearTimeout(this['repeatTimeoutId']), this['callbackOnce'](this['setPaperTypeCallback'], _0x385ab8);
          break;
        case 0x36:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x218)], _0x385ab8);
          break;
        case 0x37:
          clearTimeout(this['repeatTimeoutId']), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x171)], _0x385ab8);
          break;
        case 0x38:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this[_0x4d2ec7(0x192)], _0x385ab8);
          break;
        case 0x1b:
          clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x189)](this['getRFIDInfosCallback'], _0x385ab8);
          break;
        case 0x2:
          this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0x2 && (clearTimeout(this[_0x4d2ec7(0x176)]), _0x385ab8 == 0x0 ? this['sendPrintError'](_JCAPIErrorCode.default[_0x4d2ec7(0x1c6)], this[_0x4d2ec7(0x18b)][_0x4d2ec7(0x17e)], this[_0x4d2ec7(0x18b)]['complete']) : this[_0x4d2ec7(0x18a)]());
          break;
        case 0x4:
          if (this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0x4) {
            if (this[_0x4d2ec7(0x176)]) clearTimeout(this[_0x4d2ec7(0x176)]);
            if (_0x385ab8 == 0x1) this[_0x4d2ec7(0x215)]();else {
              if (this['reciveReject']() == ![]) return;
              this[_0x4d2ec7(0x176)] = setTimeout(function () {
                var _0x1992f0 = _0x4d2ec7;
                var _0x1a28d9 = _JCDataUntil.default[_0x1992f0(0x1b9)](0x3, 0x1);
                _this[_0x1992f0(0x1e2)][_0x1992f0(0x212)] = 0x4, _0x32328b[_0x1992f0(0x1e3)](_0x1a28d9);
              }, 0x1f4);
            }
          }
          break;
        case 0x14:
          {
            this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0x14 && (clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x1a4)]());
          }
          break;
        case 0x16:
          {
            this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0x16 && (clearTimeout(this['repeatTimeoutId']), this[_0x4d2ec7(0x21a)]());
          }
          break;
        case 0xd3:
          {
            var _0x4863b6 = _0x385ab8 >> 0x8,
              _0x79a19f = _0x385ab8 & 0xff;
            if (_0x4863b6 > this[_0x4d2ec7(0x1d3)]) {
              if (_0x4863b6 == (this[_0x4d2ec7(0x21e)] + 0x1) * 0xc8 - 0x1 || _0x4863b6 + 0x1 == this[_0x4d2ec7(0x15f)]) {
                this['send86TimeoutId'] != null && (clearTimeout(this[_0x4d2ec7(0x1d4)]), this['send86TimeoutId'] = null);
                this[_0x4d2ec7(0x176)] && (clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x176)] = null);
                if (_0x79a19f == 0x1) {
                  this['arrayIndex1']++, this[_0x4d2ec7(0x202)] = 0x0, this[_0x4d2ec7(0x1d3)] = _0x4863b6;
                  if (this[_0x4d2ec7(0x21e)] == this['sendDataArray']['length']) {
                    this[_0x4d2ec7(0x176)] = setTimeout(function () {
                      var _0x5efb2a = _0x4d2ec7;
                      var _0x1724a2 = _JCDataUntil.default[_0x5efb2a(0x1b9)](0xe3, 0x1);
                      _0x32328b[_0x5efb2a(0x1e2)][_0x5efb2a(0x212)] = 0xe4, _0x32328b['unRes'] = 0x1, _0x32328b[_0x5efb2a(0x1e3)](_0x1724a2);
                    }, 0x1f4);
                    return;
                  }
                  this[_0x4d2ec7(0x17c)]();
                } else {
                  if (_0x79a19f == 0x2) this['arrayIndex2'] = 0x0, this['doSendPictrueData']();else {
                    if (this['reciveReject']() == ![]) return;
                    this[_0x4d2ec7(0x1d4)] = setTimeout(function () {
                      var _0xc6e8d3 = _0x4d2ec7;
                      _0x32328b[_0xc6e8d3(0x174)]();
                    }, 0x1f4);
                  }
                }
              }
            }
          }
          break;
        case 0xe4:
          {
            if (this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0xe4) {
              clearTimeout(this[_0x4d2ec7(0x176)]);
              if (_0x385ab8 == 0x1) this['reciveE4Succ']();else {
                if (this[_0x4d2ec7(0x1b8)]() == ![]) return;
                this[_0x4d2ec7(0x176)] = setTimeout(function () {
                  var _0x51120b = _0x4d2ec7;
                  var _0x237485 = _JCDataUntil.default['createData'](0xe3, 0x1);
                  _this['manager'][_0x51120b(0x212)] = 0xe4, _0x32328b[_0x51120b(0x1e3)](_0x237485);
                }, 0x1f4);
              }
            }
          }
          break;
        case 0xd0:
          {
            this[_0x4d2ec7(0x15c)] && this[_0x4d2ec7(0x1ae)] && !this['reciveCancel'] && (clearTimeout(this[_0x4d2ec7(0x176)]), this[_0x4d2ec7(0x1f1)] = !![], this[_0x4d2ec7(0x198)]());
          }
          break;
        case 0xf4:
          {
            if (this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] == 0xf4) {
              clearTimeout(this[_0x4d2ec7(0x176)]);
              if (_0x385ab8 == 0x1) this[_0x4d2ec7(0x1dd)]();else {
                if (this['reciveReject']() == ![]) return;
                this['repeatTimeoutId'] = setTimeout(function () {
                  var _0x5e3bd9 = _0x4d2ec7;
                  var _0x372e58 = _JCDataUntil.default[_0x5e3bd9(0x1b9)](0xf3, 0x1);
                  _this['manager'][_0x5e3bd9(0x212)] = 0xf4, _0x32328b[_0x5e3bd9(0x1e3)](_0x372e58);
                }, 0x1f4);
              }
            }
          }
          break;
        case 0xb3:
          {
            if (this[_0x4d2ec7(0x1e2)]['needCMD'] == 0xb3) {
              clearTimeout(this[_0x4d2ec7(0x176)]);
              this[_0x4d2ec7(0x21b)] > 0x0 && clearTimeout(this[_0x4d2ec7(0x21b)]);
              if (this[_0x4d2ec7(0x15a)] == _0x385ab8) {
                this['reject']++;
                if (this[_0x4d2ec7(0x207)] >= 0x3c) {
                  this['sendPrintError'](_JCAPIErrorCode.default[_0x4d2ec7(0x210)], this[_0x4d2ec7(0x18b)]['fail'], this['printObj'][_0x4d2ec7(0x1c1)]), this[_0x4d2ec7(0x18f)]();
                  return;
                }
                this[_0x4d2ec7(0x21b)] = setTimeout(function () {
                  var _0x1e0c6a = _0x4d2ec7;
                  _0x32328b[_0x1e0c6a(0x198)]();
                }, 0x1f4);
              } else {
                this[_0x4d2ec7(0x207)] = 0x0, this[_0x4d2ec7(0x15a)] = _0x385ab8;
                var _0x1d1fef = _0x385ab8 >> 0x10;
                if (_0x1d1fef > this['printedCount']) {
                  if (this['printObj']['success']) {
                    this['printObj'][_0x4d2ec7(0x181)]({
                      'count': _0x1d1fef
                    });
                    if (this[_0x4d2ec7(0x15c)] && this[_0x4d2ec7(0x1ae)] && this[_0x4d2ec7(0x1f1)]) {
                      this[_0x4d2ec7(0x18f)]();
                      return;
                    }
                    this['printedCount'] = _0x1d1fef;
                  }
                  if (_0x1d1fef == this[_0x4d2ec7(0x18b)][_0x4d2ec7(0x16c)]) this[_0x4d2ec7(0x18f)]();else {
                    if (this['wantCancel'] && !this['sendCancel']) {
                      this[_0x4d2ec7(0x1ae)] = !![], this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x212)] = 0xd0;
                      var _0x17e978 = _JCDataUntil.default[_0x4d2ec7(0x1b9)](0xda, 0x1);
                      this['sendData'](_0x17e978);
                      return;
                    }
                    this[_0x4d2ec7(0x198)]();
                  }
                } else this[_0x4d2ec7(0x198)]();
              }
            }
          }
          break;
        case 0xdb:
          {
            (this[_0x4d2ec7(0x1e2)][_0x4d2ec7(0x180)] & 0x100) == 0x100 && console['log'](_0x4d2ec7(0x200) + _0x385ab8), clearTimeout(this[_0x4d2ec7(0x176)]), this['printErrorCode'] = _0x385ab8, this[_0x4d2ec7(0x18f)]();
          }
          break;
        case 0x0:
          {
            clearTimeout(this[_0x4d2ec7(0x176)]), this['recive0x00']();
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: _a0_0x51313f,
    value: function value() {
      var _0x3481b8 = a0_0x51313f;
      switch (this[_0x3481b8(0x1e2)]['needCMD']) {
        case 0x2:
          break;
        case 0x21:
          this[_0x3481b8(0x189)](this[_0x3481b8(0x163)], 0x3);
          break;
        case 0x23:
          this[_0x3481b8(0x189)](this[_0x3481b8(0x168)], 0x3);
          break;
        case 0x4:
          break;
        case 0x6:
          break;
        case 0x8:
          break;
        case 0x14:
          break;
        case 0x16:
          break;
        case 0xe4:
          break;
        case 0xf4:
          break;
        case 0xb3:
          break;
        case 0x31:
          this['callbackOnce'](this[_0x3481b8(0x163)], 0x3);
          break;
        case 0x33:
          this[_0x3481b8(0x189)](this[_0x3481b8(0x168)], 0x3);
          break;
        case 0x1b:
          this['callbackOnce'](this['getRFIDInfosCallback'], {
            'res': 0x3
          });
          break;
        case 0xd:
          this[_0x3481b8(0x189)](this[_0x3481b8(0x1b3)], {
            'code': -0x3
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: 'reciveReject',
    value: function reciveReject() {
      var _0x47ab56 = a0_0x51313f;
      this['reject']++;
      if (this[_0x47ab56(0x207)] >= 0xf) return this[_0x47ab56(0x1a3)](_JCAPIErrorCode.default[_0x47ab56(0x1ee)], this[_0x47ab56(0x18b)][_0x47ab56(0x17e)], this[_0x47ab56(0x18b)][_0x47ab56(0x1c1)]), this[_0x47ab56(0x207)] = 0x0, ![];
      return !![];
    }
  }, {
    key: _a0_0x51313f2,
    value: function value() {
      var _0x5b4afd = a0_0x51313f;
      this[_0x5b4afd(0x207)] = 0x0, this[_0x5b4afd(0x15c)] = ![], this[_0x5b4afd(0x1ae)] = ![], this['reciveCancel'] = ![], this[_0x5b4afd(0x1b5)] = 0x0;
      var _0x3fe41c = _JCDataUntil.default[_0x5b4afd(0x1b9)](0x3, 0x1);
      this[_0x5b4afd(0x1e2)][_0x5b4afd(0x212)] = 0x4, this[_0x5b4afd(0x1ec)] = 0x1, this[_0x5b4afd(0x1e3)](_0x3fe41c);
    }
  }, {
    key: _a0_0x51313f3,
    value: function value() {
      var _0x3a1aaa = a0_0x51313f;
      this['reject'] = 0x0;
      var _0x49641a = _JCDataUntil.default[_0x3a1aaa(0x1b9)](0x13, this[_0x3a1aaa(0x15f)] / 0x100, this[_0x3a1aaa(0x15f)] % 0x100, this[_0x3a1aaa(0x193)] / 0x100, this[_0x3a1aaa(0x193)] % 0x100);
      this[_0x3a1aaa(0x1e2)][_0x3a1aaa(0x212)] = 0x14, this[_0x3a1aaa(0x1ec)] = 0x1, this[_0x3a1aaa(0x1e2)][_0x3a1aaa(0x214)][_0x3a1aaa(0x1e3)](_0x49641a, 0xa, function () {
        var _0x3cbd27 = _0x3a1aaa;
        self[_0x3cbd27(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], this[_0x3cbd27(0x205)]);
      });
    }
  }, {
    key: 'recive14Succ',
    value: function recive14Succ() {
      var _0x31f728 = a0_0x51313f;
      this[_0x31f728(0x207)] = 0x0;
      var _0x517424 = parseInt(this[_0x31f728(0x18b)][_0x31f728(0x16c)]),
        _0x2b6349 = _JCDataUntil.default[_0x31f728(0x1b9)](0x15, _0x517424 / 0x100, _0x517424 % 0x100);
      this['manager'][_0x31f728(0x212)] = 0x16, this['unRes'] = 0x1, this[_0x31f728(0x1e3)](_0x2b6349);
    }
  }, {
    key: _a0_0x51313f4,
    value: function value() {
      var _0x10df82 = a0_0x51313f;
      this[_0x10df82(0x1d3)] = 0x0, this[_0x10df82(0x21e)] = 0x0, this[_0x10df82(0x202)] = 0x0;
      if (this['wantCancel']) {
        this[_0x10df82(0x18f)]();
        return;
      }
      this[_0x10df82(0x17c)]();
    }
  }, {
    key: _a0_0x51313f5,
    value: function value() {
      var _0x576e06 = a0_0x51313f;
      this[_0x576e06(0x207)] = 0x0, this[_0x576e06(0x198)]();
    }
  }, {
    key: 'sendSearchPrintPage',
    value: function sendSearchPrintPage() {
      var _0x20dc98 = a0_0x51313f;
      if (this[_0x20dc98(0x1e2)]['sdkPlatform'] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) {
        if (this['manager'][_0x20dc98(0x212)] == 0xf4 || this[_0x20dc98(0x1e2)][_0x20dc98(0x212)] == 0x0) return;
      }
      var _0x181e97 = _JCDataUntil.default[_0x20dc98(0x1b9)](0xa3, 0x1);
      this['manager'][_0x20dc98(0x212)] = 0xb3;
      var _0xc9bd32 = this;
      this[_0x20dc98(0x1e2)][_0x20dc98(0x214)]['sendData'](_0x181e97, 0xa, function () {
        var _0x559953 = _0x20dc98;
        _0xc9bd32[_0x559953(0x1a3)](_JCAPIErrorCode.default[_0x559953(0x1ee)], _0xc9bd32[_0x559953(0x205)]);
      });
    }
  }, {
    key: _a0_0x51313f6,
    value: function value() {
      var _0x146169 = a0_0x51313f;
      this[_0x146169(0x1e2)][_0x146169(0x212)] = 0x0;
      if (this[_0x146169(0x1df)] > 0x0) {
        var _0x70a482 = this[_0x146169(0x1c5)]();
        this[_0x146169(0x1df)] = 0x0, this[_0x146169(0x1a3)](_0x70a482, this[_0x146169(0x205)], null);
      } else {
        if (this[_0x146169(0x15c)]) {}
      }
    }
  }, {
    key: 'getPrintingError',
    value: function getPrintingError() {
      var _0x20a06e = a0_0x51313f;
      var _0x2bc393 = {};
      switch (this[_0x20a06e(0x1df)]) {
        case 0x1:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x01'];
          break;
        case 0x2:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x1cc)];
          break;
        case 0x3:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x194)];
          break;
        case 0x4:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x20b)];
          break;
        case 0x5:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x1e5)];
          break;
        case 0x6:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x195)];
          break;
        case 0x7:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x07'];
          break;
        case 0x8:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x1bb)];
          break;
        case 0x9:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x09'];
          break;
        case 0xa:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x0a'];
          break;
        case 0xb:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x187)];
          break;
        case 0xc:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x0c'];
          break;
        case 0xd:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x16e)];
          break;
        case 0xe:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x219)];
          break;
        case 0xf:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x0f'];
          break;
        case 0x11:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x19c)];
          break;
        case 0x12:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x12'];
          break;
        case 0x13:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x19f)];
          break;
        case 0x14:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x14'];
          break;
        case 0x15:
          _0x2bc393 = _JCAPIErrorCode.default[_0x20a06e(0x1be)];
          break;
        case 0x16:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x16'];
          break;
        case 0x17:
          _0x2bc393 = _JCAPIErrorCode.default['JCSDK_PRINT_ERR_0x17'];
          break;
        default:
          break;
      }
      return _0x2bc393;
    }
  }, {
    key: _a0_0x51313f7,
    value: function value() {
      var _0x1496ba = a0_0x51313f;
      this[_0x1496ba(0x17f)] = ![], this[_0x1496ba(0x176)] > 0x0 && clearTimeout(this[_0x1496ba(0x176)]), this['send86TimeoutId'] > 0x0 && clearTimeout(this[_0x1496ba(0x1d4)]), this[_0x1496ba(0x179)] > 0x0 && clearTimeout(this[_0x1496ba(0x179)]), (this[_0x1496ba(0x1e2)]['needCMD'] == 0x2 || this[_0x1496ba(0x1e2)][_0x1496ba(0x212)] == 0x4 || this[_0x1496ba(0x1e2)][_0x1496ba(0x212)] == 0x14 || this[_0x1496ba(0x1e2)]['needCMD'] == 0x16 || this[_0x1496ba(0x1e2)][_0x1496ba(0x212)] == 0xd3 || this[_0x1496ba(0x1e2)][_0x1496ba(0x212)] == 0xe4 || this[_0x1496ba(0x1e2)]['needCMD'] == 0xb3 || this[_0x1496ba(0x1e2)][_0x1496ba(0x212)] == 0xf4) && (this[_0x1496ba(0x18b)] && this[_0x1496ba(0x1a3)](_JCAPIErrorCode.default[_0x1496ba(0x186)], this[_0x1496ba(0x18b)][_0x1496ba(0x17e)], this[_0x1496ba(0x18b)]['complete']), this[_0x1496ba(0x205)] && this[_0x1496ba(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_DISCONNECT'], this[_0x1496ba(0x205)], null));
    }
  }, {
    key: _a0_0x51313f8,
    value: function value() {
      var _0x3ab4e9 = a0_0x51313f;
      var _0x376a09 = this;
      if (this[_0x3ab4e9(0x21e)] < this[_0x3ab4e9(0x1b4)][_0x3ab4e9(0x1da)]) {
        this[_0x3ab4e9(0x1e2)][_0x3ab4e9(0x212)] = 0xd3;
        var _0x9bf487 = this[_0x3ab4e9(0x1b4)][this[_0x3ab4e9(0x21e)]];
        if (this['arrayIndex2'] < _0x9bf487[_0x3ab4e9(0x1da)]) {
          var _0x15df18 = _0x9bf487[this[_0x3ab4e9(0x202)]];
          this[_0x3ab4e9(0x202)]++, this[_0x3ab4e9(0x1e2)][_0x3ab4e9(0x214)][_0x3ab4e9(0x1e3)](_0x15df18, 0x0, function () {
            var _0x301010 = _0x3ab4e9;
            _0x376a09[_0x301010(0x202)] == _0x9bf487['length'] ? _0x376a09[_0x301010(0x1d4)] = setTimeout(function () {
              _0x376a09['doSend86']();
            }, 0x1f4) : _0x376a09[_0x301010(0x179)] = setTimeout(function () {
              _0x376a09['doSendPictrueData']();
            }, 0x23);
          });
        }
      }
    }
  }, {
    key: _a0_0x51313f9,
    value: function value() {
      var _0x4d7382 = a0_0x51313f;
      if (this[_0x4d7382(0x1e2)][_0x4d7382(0x212)] == 0xd3) {
        var _0x35ea9d = (this[_0x4d7382(0x21e)] + 0x1) * 0xc8 - 0x1;
        this[_0x4d7382(0x21e)] + 0x1 == this[_0x4d7382(0x1b4)][_0x4d7382(0x1da)] && (_0x35ea9d = this['rows'] - 0x1);
        var _0x3eee4d = _0x35ea9d / 0x100,
          _0x22e688 = _0x35ea9d % 0x100;
        this[_0x4d7382(0x1e2)][_0x4d7382(0x212)] = 0xd3;
        var _0x38771a = _JCDataUntil.default[_0x4d7382(0x1b9)](0x86, _0x3eee4d, _0x22e688, 0x1);
        this[_0x4d7382(0x1e3)](_0x38771a);
      }
    }
  }, {
    key: _a0_0x51313f10,
    value: function value() {
      var _0x3c77fd = a0_0x51313f;
      if (this[_0x3c77fd(0x1e2)][_0x3c77fd(0x212)] == 0xf4) return;
      var _0x130873 = _JCDataUntil.default[_0x3c77fd(0x1b9)](0xf3, 0x1);
      this['manager'][_0x3c77fd(0x212)] = 0xf4;
      var _0x5b8060 = this;
      this['manager'][_0x3c77fd(0x214)][_0x3c77fd(0x1e3)](_0x130873, 0xa, function () {
        var _0xad1afb = _0x3c77fd;
        _0x5b8060[_0xad1afb(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], this[_0xad1afb(0x205)]);
      });
    }
  }, {
    key: _a0_0x51313f11,
    value: function value(_0x477b7d) {
      var _0x63f9a0 = a0_0x51313f;
      if (this[_0x63f9a0(0x1cd)] != null && this['hVer'][_0x63f9a0(0x1da)] > 0x0) {
        this['callbackOnce'](_0x477b7d, {
          'code': 0x0,
          'res': this[_0x63f9a0(0x1cd)]
        });
        return;
      }
      this[_0x63f9a0(0x178)] = _0x477b7d;
      var _0x11230a = _JCDataUntil.default[_0x63f9a0(0x1b9)](0x40, 0xc);
      this[_0x63f9a0(0x1e2)][_0x63f9a0(0x212)] = 0x4c, this[_0x63f9a0(0x1ec)] = 0x1, this[_0x63f9a0(0x1e2)][_0x63f9a0(0x214)][_0x63f9a0(0x1e3)](_0x11230a, 0xa, function () {
        _0x477b7d && _0x477b7d({
          'code': -0x1
        });
      });
    }
  }, {
    key: _a0_0x51313f12,
    value: function value(_0x368e70) {
      var _0x4deedd = a0_0x51313f;
      this['getRFIDInfosCallback'] = _0x368e70;
      var _0x449ed = _JCDataUntil.default[_0x4deedd(0x1b9)](0x1a, 0x1);
      this[_0x4deedd(0x1e2)][_0x4deedd(0x212)] = 0x1b, this[_0x4deedd(0x1e2)][_0x4deedd(0x214)]['sendData'](_0x449ed, 0xa, function () {
        _0x368e70 && _0x368e70({
          'res': -0x1
        });
      });
    }
  }, {
    key: 'getSversion',
    value: function getSversion(_0x25b1a1) {
      var _0x1886ac = a0_0x51313f;
      if (this[_0x1886ac(0x16f)] != null && this[_0x1886ac(0x16f)]['length'] > 0x0) {
        this[_0x1886ac(0x189)](_0x25b1a1, {
          'code': 0x0,
          'res': this[_0x1886ac(0x16f)]
        });
        return;
      }
      this[_0x1886ac(0x18d)] = _0x25b1a1;
      var _0x244973 = _JCDataUntil.default[_0x1886ac(0x1b9)](0x40, 0x9);
      this[_0x1886ac(0x1e2)][_0x1886ac(0x212)] = 0x49, this[_0x1886ac(0x1ec)] = 0x1, this['manager'][_0x1886ac(0x214)][_0x1886ac(0x1e3)](_0x244973, 0xa, function () {
        _0x25b1a1 && _0x25b1a1({
          'code': -0x1
        });
      });
    }
  }, {
    key: _a0_0x51313f13,
    value: function value(_0x1957d4) {
      var _0x4ce648 = a0_0x51313f;
      this[_0x4ce648(0x1f7)] = _0x1957d4;
      var _0x5b9fa6 = _JCDataUntil.default['createData'](0x40, 0xb);
      this['manager']['needCMD'] = 0x4b, this[_0x4ce648(0x1ec)] = 0x1, this[_0x4ce648(0x1e2)][_0x4ce648(0x214)][_0x4ce648(0x1e3)](_0x5b9fa6, 0xa, function () {
        _0x1957d4 && _0x1957d4({
          'code': -0x1
        });
      });
    }
  }, {
    key: 'getPrintWithSpeedOrQuality',
    value: function getPrintWithSpeedOrQuality(_0x56049c) {
      var _0x251cf3 = a0_0x51313f;
      this['getSpeedQualityCallback'] = _0x56049c;
      var _0x54c3eb = _JCDataUntil.default[_0x251cf3(0x1b9)](0xd, 0x1, 0x1);
      this[_0x251cf3(0x1e2)]['needCMD'] = 0xd, this[_0x251cf3(0x1ec)] = 0x1, this[_0x251cf3(0x1e2)][_0x251cf3(0x214)][_0x251cf3(0x1e3)](_0x54c3eb, 0xa, function () {
        _0x56049c && _0x56049c({
          'code': -0x1
        });
      });
    }
  }, {
    key: _a0_0x51313f14,
    value: function value() {
      return this['dpi'];
    }
  }, {
    key: 'setDensity',
    value: function setDensity(_0x4130dd, _0x22a7ad) {
      var _0x3a107f = a0_0x51313f;
      this[_0x3a107f(0x163)] = _0x22a7ad;
      var _0x1b0208 = _JCDataUntil.default[_0x3a107f(0x1b9)](0x21, _0x4130dd & 0xff);
      this[_0x3a107f(0x1e2)][_0x3a107f(0x212)] = 0x31, this[_0x3a107f(0x1ec)] = 0x1, this[_0x3a107f(0x1e2)][_0x3a107f(0x214)][_0x3a107f(0x1e3)](_0x1b0208, 0xa, function () {
        _0x22a7ad && _0x22a7ad({
          'res': -0x1
        });
      });
    }
  }, {
    key: _a0_0x51313f15,
    value: function value(_0x477ab4, _0xbfacee) {
      var _0x1e60b7 = a0_0x51313f;
      this[_0x1e60b7(0x168)] = _0xbfacee;
      var _0x3618f9 = _JCDataUntil.default[_0x1e60b7(0x1b9)](0x23, _0x477ab4 & 0xff);
      this[_0x1e60b7(0x1e2)]['needCMD'] = 0x33, this[_0x1e60b7(0x1ec)] = 0x1, this[_0x1e60b7(0x1e2)][_0x1e60b7(0x214)]['sendData'](_0x3618f9, 0xa, function () {
        _0xbfacee && _0xbfacee({
          'res': -0x1
        });
      });
    }
  }, {
    key: _a0_0x51313f16,
    value: function value(_0x61bcd6) {
      var _0x4df612 = a0_0x51313f;
      var _0xe01e55 = this,
        _0x51585a = _0x61bcd6[_0x4df612(0x1c0)](0x0, _0x61bcd6[_0x4df612(0x160)]);
      this['manager'][_0x4df612(0x214)][_0x4df612(0x1e3)](_0x61bcd6, 0x0, function () {
        var _0x31cd41 = _0x4df612;
        _0xe01e55[_0x31cd41(0x176)] = setTimeout(function () {
          var _0x4cb05e = _0x31cd41;
          (_0xe01e55[_0x4cb05e(0x1e2)]['debug'] & 0x100) == 0x100 && (console[_0x4cb05e(0x166)](_0x4cb05e(0x1f3)), console[_0x4cb05e(0x166)](_0x51585a)), _0xe01e55[_0x4cb05e(0x16b)](_0x51585a);
        }, 0x1f4);
      });
    }
  }, {
    key: 'sendUnRes',
    value: function sendUnRes(_0x571fb5) {
      var _0x5609f8 = a0_0x51313f;
      this[_0x5609f8(0x1ec)]++, this[_0x5609f8(0x1ec)] >= 0xa ? (clearTimeout(this['repeatTimeoutId']), this[_0x5609f8(0x189)](this[_0x5609f8(0x201)], -0x4), this[_0x5609f8(0x189)](this['getSpeedCallback'], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x190)], -0x4), this[_0x5609f8(0x189)](this['getTimeOfPoweroffCallback'], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x185)], -0x4), this[_0x5609f8(0x189)](this['getMacAddressCallback'], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x178)], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x18d)], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x1c2)], -0x4), this['callbackOnce'](this[_0x5609f8(0x163)], -0x4), this[_0x5609f8(0x189)](this['setSpeedCallback'], -0x4), this['callbackOnce'](this[_0x5609f8(0x168)], -0x4), this[_0x5609f8(0x189)](this['setPowerOffTimeCallback'], -0x4), this['callbackOnce'](this[_0x5609f8(0x192)], -0x4), this[_0x5609f8(0x189)](this[_0x5609f8(0x21c)], -0x4), this['callbackOnce'](this[_0x5609f8(0x218)], -0x4), this[_0x5609f8(0x1ec)] = 0x1) : this[_0x5609f8(0x1e3)](_0x571fb5);
    }
  }, {
    key: _a0_0x51313f17,
    value: function value(_0x30b0e5, _0x833ba5) {
      if (_0x30b0e5) {
        var _0x18ea99 = _0x30b0e5;
        _0x30b0e5 = null, _0x18ea99(_0x833ba5);
      }
    }
  }, {
    key: _a0_0x51313f18,
    value: function value(_0x37738a) {
      var _0x3d0310 = a0_0x51313f;
      var _0x59a1ec = parseFloat(_0x37738a);
      if (_0x59a1ec == null || _0x59a1ec == 0x0) return 0x0;
      if (this[_0x3d0310(0x1af)] >= 0xc8 && this['dpi'] < 0x12c) return Math[_0x3d0310(0x1db)](_0x59a1ec * 0x8);else {
        if (this[_0x3d0310(0x1af)] >= 0x12c && this[_0x3d0310(0x1af)] < 0x15e) {
          return Math[_0x3d0310(0x1db)](_0x59a1ec * 11.8);
          ;
        } else return Math[_0x3d0310(0x1db)](_0x59a1ec * 0x8);
      }
    }
  }, {
    key: _a0_0x51313f19,
    value: function value(_0x4f8812, _0x3173ba, _0x614380) {
      var _0x19c63f = a0_0x51313f;
      this[_0x19c63f(0x1e2)][_0x19c63f(0x19d)] = ![], _0x3173ba && _0x3173ba(_0x4f8812), _0x614380 && _0x614380();
    }
  }, {
    key: _a0_0x51313f20,
    value: function value(_0x308d66, _0x561379) {
      var _0xf7032f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x1;
      var _0x2edc9a = arguments.length > 3 ? arguments[3] : undefined;
      var _0x4ee872 = a0_0x51313f;
      this[_0x4ee872(0x1c9)] = _0xf7032f, this[_0x4ee872(0x1fa)] = 0x0, this[_0x4ee872(0x19a)] = [], this[_0x4ee872(0x17f)] = ![], this[_0x4ee872(0x1a8)] = null;
      var _0x2df49b = this,
        _0x144479 = function _0x144479(_0x44cac4) {
          var _0x254b16 = _0x4ee872;
          if (_0x44cac4 == 0x1) {
            var _0x238b71 = function _0x238b71(_0x56688a) {
              var _0x524ec7 = a0_0x37ce;
              _0x308d66 == 0x2 && _0x2df49b[_0x524ec7(0x1e2)][_0x524ec7(0x21d)] >= 0x300 ? _0x2df49b[_0x524ec7(0x1b2)](function (_0x527370) {
                _0x2edc9a && _0x2edc9a();
              }) : _0x2edc9a && _0x2edc9a();
            };
            _0x561379 != null ? _0x2df49b[_0x254b16(0x19e)](parseInt(_0x561379), _0x238b71) : _0x238b71(0x1);
          } else {
            if (_0x44cac4 == 0x3) _0x2df49b[_0x254b16(0x205)] && _0x2df49b[_0x254b16(0x205)](_JCAPIErrorCode.default[_0x254b16(0x1ba)]), _0x2df49b['manager'][_0x254b16(0x19d)] = ![];else _0x44cac4 == 0x0 ? (_0x2df49b[_0x254b16(0x205)] && _0x2df49b['printErrorInfoCallback'](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_BUSY']), _0x2df49b[_0x254b16(0x1e2)][_0x254b16(0x19d)] = ![]) : _0x2df49b[_0x254b16(0x1e2)][_0x254b16(0x19d)] = ![];
          }
        };
      _0x308d66 != null && parseInt(_0x308d66) > 0x0 ? this[_0x4ee872(0x1ca)](parseInt(_0x308d66), _0x144479) : _0x144479(0x1);
    }
  }, {
    key: 'didReadPrintCountInfo',
    value: function didReadPrintCountInfo(_0x32d071) {
      var _0x1b6a74 = a0_0x51313f;
      this[_0x1b6a74(0x1cf)] = _0x32d071;
    }
  }, {
    key: _a0_0x51313f21,
    value: function value(_0x90634b) {
      var _0x30bb74 = a0_0x51313f;
      this[_0x30bb74(0x205)] = _0x90634b;
    }
  }, {
    key: 'startPrint',
    value: function startPrint(_0x2d8cf9, _0x25559f, _0x3aa8f5, _0x3ae621, _0x48f687) {
      var _0x2201ba = a0_0x51313f;
      var _0x1fee05 = 0xdc;
      this[_0x2201ba(0x1e2)]['agreement'] == 0x3 && this[_0x2201ba(0x1e2)][_0x2201ba(0x1aa)] > 0x0 && (_0x1fee05 = this[_0x2201ba(0x1e2)][_0x2201ba(0x1aa)]);
      var _0x44efa7 = _JCDataUntil.default[_0x2201ba(0x1bc)](_0x2d8cf9, this[_0x2201ba(0x1a9)], {
        'left': 0x0,
        'rifht': 0x0
      }, _0x1fee05, _0x3aa8f5);
      this[_0x2201ba(0x1fa)] += _0x25559f;
      if (_0x44efa7 != null && _0x44efa7[_0x2201ba(0x1da)] > 0x0) {
        var _0x4ab698 = {};
        _0x4ab698[_0x2201ba(0x1a1)] = _0x2d8cf9[_0x2201ba(0x1a1)], _0x4ab698['height'] = _0x2d8cf9['height'];
        _0x3aa8f5 % 0xb4 != 0x0 && (_0x4ab698[_0x2201ba(0x1a1)] = _0x2d8cf9['height'], _0x4ab698[_0x2201ba(0x1fd)] = _0x2d8cf9[_0x2201ba(0x1a1)]);
        _0x4ab698[_0x2201ba(0x1a7)] = _0x44efa7, _0x4ab698[_0x2201ba(0x16c)] = _0x25559f;
        var _0x12f5be = this,
          _0x43c972 = function _0x43c972() {
            var _0x59afc1 = _0x2201ba;
            _0x12f5be[_0x59afc1(0x193)] = _0x4ab698[_0x59afc1(0x1a1)], _0x12f5be[_0x59afc1(0x15f)] = _0x4ab698[_0x59afc1(0x1fd)], _0x12f5be[_0x59afc1(0x1b4)] = _0x4ab698['data'], _0x12f5be[_0x59afc1(0x17d)] = _0x4ab698['count'];
            if (_0x48f687) {
              var _0x5e3b9c = _0x48f687[_0x59afc1(0x15d)],
                _0x12ed93 = _0x48f687[_0x59afc1(0x1ac)];
              _0x5e3b9c ? _0x12f5be['epc'] = _0x5e3b9c : _0x12f5be[_0x59afc1(0x15d)] = null, _0x12ed93 != null ? _0x12f5be['hasDash'] = _0x12ed93 : _0x12f5be[_0x59afc1(0x1ac)] = null;
            } else _0x12f5be[_0x59afc1(0x15d)] = null, _0x12f5be[_0x59afc1(0x1ac)] = null;
            if (_0x12f5be[_0x59afc1(0x17f)]) {
              var _0x555b9e = _JCDataUntil.default[_0x59afc1(0x1b9)](0x3, 0x1);
              _0x12f5be[_0x59afc1(0x1e2)][_0x59afc1(0x212)] = 0x4;
              if (_0x12f5be[_0x59afc1(0x1e2)][_0x59afc1(0x1a0)] == 0x3) {
                _0x12f5be[_0x59afc1(0x1e2)][_0x59afc1(0x212)] = 0x14;
                var _0x145218 = _0x4ab698[_0x59afc1(0x1fd)] >= _0x12f5be['manager'][_0x59afc1(0x1d5)] ? 0x1 : _0x25559f;
                _0x555b9e = _JCDataUntil.default[_0x59afc1(0x1b9)](0x13, _0x12f5be[_0x59afc1(0x15f)] / 0x100, _0x12f5be[_0x59afc1(0x15f)] % 0x100, _0x12f5be['cols'] / 0x100, _0x12f5be[_0x59afc1(0x193)] % 0x100, _0x145218 / 0x100, _0x145218 % 0x100);
              }
              _0x12f5be['unRes'] = 0x1, _0x12f5be['manager']['ble'][_0x59afc1(0x1e3)](_0x555b9e, 0xa, function () {
                var _0x44115e = _0x59afc1;
                _0x12f5be[_0x44115e(0x1a3)](_JCAPIErrorCode.default[_0x44115e(0x1ee)], this[_0x44115e(0x205)]);
              });
            } else {
              var _0x46fb3c = _JCDataUntil.default[_0x59afc1(0x1b9)](0x1, 0x1);
              _0x12f5be['manager'][_0x59afc1(0x1a0)] == 0x3 && (_0x46fb3c = _JCDataUntil.default[_0x59afc1(0x1b9)](0x1, _0x12f5be[_0x59afc1(0x1c9)] / 0x100, _0x12f5be[_0x59afc1(0x1c9)] % 0x100)), _0x12f5be[_0x59afc1(0x1e2)][_0x59afc1(0x212)] = 0x2, _0x12f5be[_0x59afc1(0x1ec)] = 0x1, _0x12f5be['sendData'](_0x46fb3c);
            }
          };
        if (_0x4ab698[_0x2201ba(0x1fd)] >= this['manager'][_0x2201ba(0x1d5)]) {
          var _0x574c61 = _0x25559f;
          while (_0x574c61 > 0x0) {
            _0x574c61--, this[_0x2201ba(0x19a)][_0x2201ba(0x15e)](_0x43c972);
          }
        } else this[_0x2201ba(0x19a)]['push'](_0x43c972);
        if (this[_0x2201ba(0x19a)][_0x2201ba(0x1da)] >= 0x5) {
          this[_0x2201ba(0x20d)] = _0x3ae621;
          if (!this[_0x2201ba(0x17f)]) {
            var _0x2c010f = this[_0x2201ba(0x19a)][0x0];
            _0x2c010f();
          }
        } else {
          if (this[_0x2201ba(0x1fa)] == this['recordTotalCount']) {
            if (!this['isPrinting']) {
              var _0x3fdbd2 = this[_0x2201ba(0x19a)][0x0];
              _0x3fdbd2();
            }
          } else {
            if (this[_0x2201ba(0x17f)] == !![]) return;
            _0x3ae621 && this[_0x2201ba(0x1e2)][_0x2201ba(0x1eb)] != !![] && _0x3ae621();
          }
        }
      } else this[_0x2201ba(0x193)] = 0x0, this[_0x2201ba(0x15f)] = 0x0, this[_0x2201ba(0x1b4)] = [], this['manager'][_0x2201ba(0x19d)] = ![], this[_0x2201ba(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_GetDATA'], this[_0x2201ba(0x205)], null);
    }
  }, {
    key: 'getDropSize',
    value: function getDropSize(_0x30c507) {
      var _0x8f823c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x55bb6e = a0_0x51313f;
      var _0x5cf806 = this['mm2px'](_0x30c507),
        _0x1a27da = this[_0x55bb6e(0x1b1)](this[_0x55bb6e(0x1bd)]);
      if (_0x5cf806 <= _0x1a27da) return {
        'left': 0x0,
        'width': _0x5cf806,
        'top': 0x0
      };else {
        if (this[_0x55bb6e(0x203)] == 0x1) {
          var _0xf4d3f5 = _0x5cf806 - _0x1a27da;
          return {
            'left': Math[_0x55bb6e(0x177)](_0xf4d3f5 / 0x2),
            'width': _0x1a27da,
            'top': 0x0
          };
        } else {
          if (this['printWay'] == 0x2) {
            var _0x3eacc6 = _0x5cf806 - _0x1a27da;
            return {
              'left': _0x3eacc6,
              'width': _0x1a27da,
              'top': 0x0
            };
          }
        }
        return {
          'left': 0x0,
          'width': _0x1a27da,
          'top': 0x0
        };
      }
    }
  }, {
    key: 'getDropByRealWidth',
    value: function getDropByRealWidth(_0x565f28) {
      var _0x164d13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x51dd18 = a0_0x51313f;
      var _0x304872 = _0x565f28,
        _0x35db22 = this['mm2px'](this['maxDeviceLength']),
        _0x1b0bbe = this[_0x51dd18(0x159)](_0x164d13),
        _0x576684 = 0x0,
        _0x31188b = 0x0;
      (0, _typeof2.default)(_0x1b0bbe) == _0x51dd18(0x182) ? _0x576684 = _0x1b0bbe : (_0x576684 = _0x1b0bbe[_0x51dd18(0x1bf)], _0x31188b = _0x1b0bbe[_0x51dd18(0x1a5)]);
      if (_0x304872 <= _0x35db22) return {
        'left': 0x0,
        'width': _0x304872,
        'top': _0x576684,
        'bottom': _0x31188b
      };else {
        if (this[_0x51dd18(0x203)] == 0x1) {
          var _0x1a56fe = _0x304872 - _0x35db22;
          return {
            'left': Math[_0x51dd18(0x177)](_0x1a56fe / 0x2),
            'width': _0x35db22,
            'top': _0x576684,
            'bottom': _0x31188b
          };
        } else {
          if (this[_0x51dd18(0x203)] == 0x2) {
            var _0x2fa94d = _0x304872 - _0x35db22;
            return {
              'left': _0x2fa94d,
              'width': _0x35db22,
              'top': _0x576684,
              'bottom': _0x31188b
            };
          }
        }
        return {
          'left': 0x0,
          'width': _0x35db22,
          'top': _0x576684,
          'bottom': _0x31188b
        };
      }
    }
  }]);
  return PrinterBase;
}(a0_0x51313f(0x1f8), a0_0x51313f(0x18a), a0_0x51313f(0x215), a0_0x51313f(0x21a), a0_0x51313f(0x204), a0_0x51313f(0x1dd), a0_0x51313f(0x1f6), a0_0x51313f(0x17c), a0_0x51313f(0x174), a0_0x51313f(0x18f), a0_0x51313f(0x1d0), a0_0x51313f(0x1dc), a0_0x51313f(0x1fe), a0_0x51313f(0x196), a0_0x51313f(0x1ca), a0_0x51313f(0x1e3), a0_0x51313f(0x189), a0_0x51313f(0x1b1), a0_0x51313f(0x1a3), a0_0x51313f(0x216), a0_0x51313f(0x1f2));
var B3SPrinter = /*#__PURE__*/function (_PrinterBase) {
  (0, _inherits2.default)(B3SPrinter, _PrinterBase);
  var _super = _createSuper(B3SPrinter);
  function B3SPrinter(_0x5e5897) {
    var _this2;
    (0, _classCallCheck2.default)(this, B3SPrinter);
    var _0x22f55c = a0_0x51313f;
    _this2 = _super.call(this, _0x5e5897), _this2[_0x22f55c(0x1af)] = 0xcb, _this2[_0x22f55c(0x1bd)] = 0x48, _this2[_0x22f55c(0x1a9)] = 0x48, _this2[_0x22f55c(0x203)] = 0x0;
    return _this2;
  }
  (0, _createClass2.default)(B3SPrinter, [{
    key: 'getDropSize',
    value: function getDropSize(_0x20f6bd) {
      var _0x576aa3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x1aad80 = a0_0x51313f;
      var _0x83423e = this[_0x1aad80(0x1b1)](_0x20f6bd),
        _0x33cafe = this[_0x1aad80(0x1b1)](this[_0x1aad80(0x1bd)]);
      if (_0x83423e <= _0x33cafe) {
        if (_0x576aa3 == 0x2) return {
          'left': 0x0,
          'width': _0x33cafe,
          'top': 0x30
        };
        return {
          'left': 0x0,
          'width': _0x83423e,
          'top': 0x0
        };
      } else {
        if (_0x576aa3 == 0x2) return {
          'left': 0x0,
          'width': _0x33cafe,
          'top': 0x30
        };
        return {
          'left': 0x0,
          'width': _0x33cafe,
          'top': 0x0
        };
      }
    }
  }]);
  return B3SPrinter;
}(PrinterBase);
var B16Printer = /*#__PURE__*/function (_PrinterBase2) {
  (0, _inherits2.default)(B16Printer, _PrinterBase2);
  var _super2 = _createSuper(B16Printer);
  function B16Printer(_0x26436b) {
    var _this3;
    (0, _classCallCheck2.default)(this, B16Printer);
    var _0x5818e9 = a0_0x51313f;
    _this3 = _super2.call(this, _0x26436b), _this3[_0x5818e9(0x1af)] = 0xcb, _this3[_0x5818e9(0x1bd)] = 0xc, _this3['maxWordSizeLength'] = 0xc, _this3[_0x5818e9(0x203)] = 0x1;
    return _this3;
  }
  return (0, _createClass2.default)(B16Printer);
}(PrinterBase);
var B101Printer = /*#__PURE__*/function (_PrinterBase3) {
  (0, _inherits2.default)(B101Printer, _PrinterBase3);
  var _super3 = _createSuper(B101Printer);
  function B101Printer(_0x39a2a6) {
    var _this4;
    (0, _classCallCheck2.default)(this, B101Printer);
    var _0x44f9e7 = a0_0x51313f;
    _this4 = _super3.call(this, _0x39a2a6), _this4[_0x44f9e7(0x1af)] = 0xcb, _this4['maxDeviceLength'] = 0x18, _this4[_0x44f9e7(0x1a9)] = 0x18, _this4[_0x44f9e7(0x203)] = 0x2;
    return _this4;
  }
  return (0, _createClass2.default)(B101Printer);
}(PrinterBase);
var B21Printer = /*#__PURE__*/function (_PrinterBase4) {
  (0, _inherits2.default)(B21Printer, _PrinterBase4);
  var _super4 = _createSuper(B21Printer);
  function B21Printer(_0x38e302) {
    var _this5;
    (0, _classCallCheck2.default)(this, B21Printer);
    var _0x15d634 = a0_0x51313f;
    _this5 = _super4.call(this, _0x38e302), _this5[_0x15d634(0x1af)] = 0xcb, _this5[_0x15d634(0x1bd)] = 0x30, _this5[_0x15d634(0x1a9)] = 0x30, _this5['printWay'] = 0x0;
    return _this5;
  }
  return (0, _createClass2.default)(B21Printer);
}(PrinterBase);
var QPrinterBase = /*#__PURE__*/function (_PrinterBase5, _a0_0x51313f22, _a0_0x51313f23, _a0_0x51313f24, _a0_0x51313f25, _a0_0x51313f26, _a0_0x51313f27, _a0_0x51313f28, _a0_0x51313f29, _a0_0x51313f30, _a0_0x51313f31, _a0_0x51313f32) {
  (0, _inherits2.default)(QPrinterBase, _PrinterBase5);
  var _super5 = _createSuper(QPrinterBase);
  function QPrinterBase(_0x1d29c6) {
    var _this6;
    (0, _classCallCheck2.default)(this, QPrinterBase);
    var _0x2f1138 = a0_0x51313f;
    _this6 = _super5.call(this, _0x1d29c6), _this6[_0x2f1138(0x175)] = null;
    return _this6;
  }
  (0, _createClass2.default)(QPrinterBase, [{
    key: _a0_0x51313f22,
    value: function value(_0x5abd8b, _0x1765fd) {
      var _this7 = this;
      var _0x401ced = a0_0x51313f;
      var _0x1a14b7 = this;
      if (this[_0x401ced(0x1e2)][_0x401ced(0x214)][_0x401ced(0x176)]) {
        if ((this['manager'][_0x401ced(0x212)] == 0xb3 || this[_0x401ced(0x1e2)]['needCMD'] == 0xf4) && _0x5abd8b == 0xdb) {} else clearTimeout(this['manager']['ble'][_0x401ced(0x176)]), this[_0x401ced(0x1e2)][_0x401ced(0x214)][_0x401ced(0x176)] = null;
      }
      switch (_0x5abd8b) {
        case 0x41:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x201)], _0x1765fd);
          break;
        case 0x42:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x16d)], _0x1765fd);
          break;
        case 0x43:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x190)], _0x1765fd);
          break;
        case 0x46:
          clearTimeout(this['repeatTimeoutId']), this[_0x401ced(0x189)](this[_0x401ced(0x1c2)], _0x1765fd);
          break;
        case 0x47:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x206)], _0x1765fd);
          break;
        case 0x49:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x18d)], _0x1765fd);
          break;
        case 0x4a:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x185)], _0x1765fd);
          break;
        case 0x4b:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x1f7)], {
            'code': 0x0,
            'res': _0x1765fd
          });
          break;
        case 0xd:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x1b3)], {
            'code': 0x0,
            'res': _0x1765fd
          });
          break;
        case 0x4c:
          clearTimeout(this['repeatTimeoutId']), this[_0x401ced(0x189)](this[_0x401ced(0x178)], _0x1765fd);
          break;
        case 0x4d:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x1e1)], _0x1765fd);
          break;
        case 0x31:
          clearTimeout(this['repeatTimeoutId']), this[_0x401ced(0x189)](this[_0x401ced(0x163)], _0x1765fd);
          break;
        case 0x32:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this[_0x401ced(0x1d9)], _0x1765fd);
          break;
        case 0x33:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x168)], _0x1765fd);
          break;
        case 0x36:
          clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this['setLangueCallback'], _0x1765fd);
          break;
        case 0x37:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this['setPowerOffTimeCallback'], _0x1765fd);
          break;
        case 0x38:
          clearTimeout(this['repeatTimeoutId']), this[_0x401ced(0x189)](this[_0x401ced(0x192)], _0x1765fd);
          break;
        case 0x1b:
          clearTimeout(this[_0x401ced(0x176)]), this['callbackOnce'](this[_0x401ced(0x1ab)], _0x1765fd);
          break;
        case 0x2:
          this[_0x401ced(0x1e2)]['needCMD'] == 0x2 && (clearTimeout(this[_0x401ced(0x176)]), _0x1765fd == 0x0 ? this[_0x401ced(0x1a3)](_JCAPIErrorCode.default[_0x401ced(0x1c6)], this['printErrorInfoCallback'], null) : this[_0x401ced(0x18a)]());
          break;
        case 0x4:
          if (this['manager'][_0x401ced(0x212)] == 0x4) {
            if (this[_0x401ced(0x176)]) clearTimeout(this[_0x401ced(0x176)]);
            if (_0x1765fd == 0x1) this[_0x401ced(0x215)]();else {
              if (this[_0x401ced(0x1b8)]() == ![]) return;
              this[_0x401ced(0x176)] = setTimeout(function () {
                var _0x28188b = _0x401ced;
                var _0x208264 = _JCDataUntil.default[_0x28188b(0x1b9)](0x3, 0x1);
                _this7[_0x28188b(0x1e2)][_0x28188b(0x212)] = 0x4, _0x1a14b7[_0x28188b(0x1e3)](_0x208264);
              }, 0x1f4);
            }
          }
          break;
        case 0x14:
          {
            this['manager'][_0x401ced(0x212)] == 0x14 && (clearTimeout(this['repeatTimeoutId']), this['recive14Succ']());
          }
          break;
        case 0x16:
          {
            this['manager'][_0x401ced(0x212)] == 0x16 && (clearTimeout(this[_0x401ced(0x176)]), this['recive16Succ']());
          }
          break;
        case 0x88:
          {
            this['recive88Succ'](_0x1765fd);
          }
          break;
        case 0xd3:
          {
            this[_0x401ced(0x1b7)](_0x1765fd);
          }
          break;
        case 0xe4:
          {
            if (this[_0x401ced(0x1e2)][_0x401ced(0x212)] == 0xe4) {
              clearTimeout(this['repeatTimeoutId']);
              if (_0x1765fd == 0x1) this[_0x401ced(0x204)]();else {
                if (this[_0x401ced(0x1b8)]() == ![]) return;
                this[_0x401ced(0x176)] = setTimeout(function () {
                  var _0x3edc93 = _0x401ced;
                  var _0x8040d2 = _JCDataUntil.default[_0x3edc93(0x1b9)](0xe3, 0x1);
                  _this7[_0x3edc93(0x1e2)][_0x3edc93(0x212)] = 0xe4, _0x1a14b7['sendData'](_0x8040d2);
                }, 0x1f4);
              }
            }
          }
          break;
        case 0xd0:
          {
            this[_0x401ced(0x15c)] && this[_0x401ced(0x1ae)] && !this[_0x401ced(0x1f1)] && (clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x1f1)] = !![], this[_0x401ced(0x198)]());
          }
          break;
        case 0xf4:
          {
            if (this[_0x401ced(0x1e2)][_0x401ced(0x212)] == 0xf4) {
              clearTimeout(this['repeatTimeoutId']);
              if (_0x1765fd == 0x1) this['reciveF4Succ']();else {
                if (this[_0x401ced(0x1b8)]() == ![]) return;
                this[_0x401ced(0x176)] = setTimeout(function () {
                  var _0x32da75 = _0x401ced;
                  var _0x5f523d = _JCDataUntil.default[_0x32da75(0x1b9)](0xf3, 0x1);
                  _this7[_0x32da75(0x1e2)][_0x32da75(0x212)] = 0xf4, _0x1a14b7[_0x32da75(0x1e3)](_0x5f523d);
                }, 0x1f4);
              }
            }
          }
          break;
        case 0xb3:
          {
            this[_0x401ced(0x1ef)](_0x1765fd);
          }
          break;
        case 0xdb:
          {
            (this['manager'][_0x401ced(0x180)] & 0x100) == 0x100 && console[_0x401ced(0x166)](_0x401ced(0x200) + _0x1765fd);
            clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x1df)] = _0x1765fd;
            if (this[_0x401ced(0x1e2)][_0x401ced(0x212)] == 0xb3) {
              (this[_0x401ced(0x1e2)][_0x401ced(0x180)] & 0x100) == 0x100 && console[_0x401ced(0x166)](_0x401ced(0x169) + _0x1765fd + ',此时等待查询页码后发送结束');
              return;
            }
            if (this[_0x401ced(0x1ad)] == !![]) return;else {
              if (this[_0x401ced(0x1d4)] > 0x0) clearTimeout(this[_0x401ced(0x1d4)]);
            }
            this['doSendPrintOver']();
          }
          break;
        case 0x0:
          {
            clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x1f8)]();
          }
          break;
        case 0xb5:
          {
            clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x191)](_0x1765fd);
          }
          break;
        case 0xb4:
          {
            clearTimeout(this[_0x401ced(0x176)]), this['recive0xB4'](_0x1765fd);
          }
          break;
        case 0x71:
          {
            this[_0x401ced(0x1e2)][_0x401ced(0x212)] == 0x71 && (clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x209)]());
          }
          break;
        case 0x69:
          {
            this[_0x401ced(0x1e2)]['needCMD'] == 0x69 && (clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x1f9)] = _0x1765fd[0x0], this[_0x401ced(0x1d1)] = _0x1765fd[0x1], this[_0x401ced(0x189)](this[_0x401ced(0x1d8)], _0x1765fd));
          }
          break;
        case 0x8f:
          {
            this[_0x401ced(0x1e2)][_0x401ced(0x212)] == 0x8f && (clearTimeout(this[_0x401ced(0x176)]), this[_0x401ced(0x189)](this['setBiaoDingCallback'], _0x1765fd));
          }
          break;
        case 0x6a:
          {
            this[_0x401ced(0x1e2)]['needCMD'] == 0x6a && (clearTimeout(this['repeatTimeoutId']), this[_0x401ced(0x189)](this[_0x401ced(0x18c)], _0x1765fd));
          }
        default:
          break;
      }
    }
  }, {
    key: 'reciveD3Succ',
    value: function reciveD3Succ(_0x124f61) {
      var _0x411a4e = a0_0x51313f;
      var _0x293ef4 = _0x124f61 >> 0x8,
        _0xe6b678 = _0x124f61 & 0xff;
      this['send86TimeoutId'] > 0x0 && (clearTimeout(this[_0x411a4e(0x1d4)]), this[_0x411a4e(0x1d4)] = 0x0);
      if (_0x293ef4 > this['recive200Row']) {
        if (_0x293ef4 == (this[_0x411a4e(0x21e)] + 0x1) * this['manager']['maxOnceSendRows'] - 0x1 || _0x293ef4 + 0x1 == this['rows']) {
          this[_0x411a4e(0x1d4)] != null && (clearTimeout(this[_0x411a4e(0x1d4)]), this[_0x411a4e(0x1d4)] = null);
          this[_0x411a4e(0x176)] && (clearTimeout(this[_0x411a4e(0x176)]), this[_0x411a4e(0x176)] = null);
          if (_0xe6b678 == 0x1) {
            this[_0x411a4e(0x21e)]++, this['arrayIndex2'] = 0x0, this[_0x411a4e(0x1d3)] = _0x293ef4;
            if (this[_0x411a4e(0x21e)] == this[_0x411a4e(0x1b4)]['length']) {
              this[_0x411a4e(0x1e2)][_0x411a4e(0x212)] = 0xe4;
              var _0xc78807 = _JCDataUntil.default[_0x411a4e(0x1b9)](0xe3, 0x1);
              this[_0x411a4e(0x1ad)] = ![], this[_0x411a4e(0x1e2)]['ble'][_0x411a4e(0x1e3)](_0xc78807, 0xa, function () {
                var _0x4d04fa = _0x411a4e;
                self[_0x4d04fa(0x1a3)](_JCAPIErrorCode.default[_0x4d04fa(0x1ee)], this[_0x4d04fa(0x205)]);
              });
              return;
            }
            this['checkStatus'] = 0xd3, this[_0x411a4e(0x198)]();
          } else {
            if (_0xe6b678 == 0x2) this['arrayIndex2'] = 0x0, this[_0x411a4e(0x17c)]();else {
              if (this[_0x411a4e(0x1b8)]() == ![]) return;
              this[_0x411a4e(0x1d4)] = setTimeout(function () {
                var _0x3c98ac = _0x411a4e;
                self[_0x3c98ac(0x174)]();
              }, 0x1f4);
            }
          }
        }
      }
    }
  }, {
    key: _a0_0x51313f23,
    value: function value(_0x4ba772) {
      var _0x551c88 = a0_0x51313f;
      var _0x1ba087 = this;
      if (this[_0x551c88(0x1e2)]['needCMD'] == 0xb3) {
        clearTimeout(this['repeatTimeoutId']);
        this[_0x551c88(0x21b)] > 0x0 && clearTimeout(this[_0x551c88(0x21b)]);
        _0x4ba772['error'] > 0x0 && (this[_0x551c88(0x1df)] = _0x4ba772['error']);
        if (this[_0x551c88(0x1df)] > 0x0) {
          this[_0x551c88(0x18f)]();
          return;
        }
        if (this[_0x551c88(0x15a)] == _0x4ba772[_0x551c88(0x1d2)]) {
          if (this[_0x551c88(0x1d6)] == 0xd3) {
            _0x4ba772['cache'] >= this[_0x551c88(0x1e2)][_0x551c88(0x188)] ? (this[_0x551c88(0x1d6)] = 0x0, this[_0x551c88(0x17c)]()) : this[_0x551c88(0x198)]();
            return;
          }
          this[_0x551c88(0x207)]++;
          if (this[_0x551c88(0x207)] >= 0x3c) {
            this[_0x551c88(0x1a3)](_JCAPIErrorCode.default[_0x551c88(0x210)], this['printErrorInfoCallback'], null), this[_0x551c88(0x18f)]();
            return;
          }
          this['b3ReTimeout'] = setTimeout(function () {
            var _0xcad167 = _0x551c88;
            _0x1ba087[_0xcad167(0x198)]();
          }, 0x1f4);
        } else {
          this[_0x551c88(0x207)] = 0x0, this[_0x551c88(0x15a)] = _0x4ba772[_0x551c88(0x1d2)];
          var _0x5b05b9 = _0x4ba772[_0x551c88(0x16c)];
          if (_0x5b05b9 > this['printedCount']) {
            var _0x203a3e = {
              'count': _0x5b05b9
            };
            _0x4ba772['tid'] != null && _0x4ba772[_0x551c88(0x1e9)] != undefined && _0x4ba772[_0x551c88(0x1e9)] != '' && (_0x203a3e[_0x551c88(0x1e9)] = _0x4ba772[_0x551c88(0x1e9)]), _0x4ba772[_0x551c88(0x1f5)] != null && _0x4ba772[_0x551c88(0x1f5)] != undefined && (_0x203a3e[_0x551c88(0x1f5)] = _0x4ba772[_0x551c88(0x1f5)]), this[_0x551c88(0x1cf)] && this[_0x551c88(0x1cf)](_0x203a3e), this[_0x551c88(0x1b5)] = _0x5b05b9;
          }
          if (_0x5b05b9 == this['recordTotalCount']) {
            this[_0x551c88(0x18f)]();
            return;
          }
          if (this['wantCancel'] && !this['sendCancel']) {
            this[_0x551c88(0x1ae)] = !![], this[_0x551c88(0x1e2)][_0x551c88(0x212)] = 0xd0;
            var _0x4e9503 = _JCDataUntil.default[_0x551c88(0x1b9)](0xda, 0x1);
            this['sendData'](_0x4e9503);
            return;
          }
          if (this[_0x551c88(0x15c)] && this[_0x551c88(0x1ae)] && this[_0x551c88(0x1f1)]) {
            this[_0x551c88(0x18f)]();
            return;
          }
          if (this['checkStatus'] == 0xd3) {
            if (_0x4ba772[_0x551c88(0x172)] >= this['manager'][_0x551c88(0x188)]) this['checkStatus'] = 0x0, this[_0x551c88(0x17c)]();else {
              if (this[_0x551c88(0x21e)] + 0x1 == this['sendDataArray']['length']) {
                var _0xc9d01f = this['rows'] % 0xc8;
                if (_0x4ba772[_0x551c88(0x172)] >= _0xc9d01f) {
                  this[_0x551c88(0x17c)]();
                  return;
                }
              }
              this[_0x551c88(0x198)]();
            }
            return;
          }
          if (_0x4ba772[_0x551c88(0x172)] >= this[_0x551c88(0x1e2)]['maxOnceSendRows']) {
            this[_0x551c88(0x19a)][_0x551c88(0x1da)] < 0x5 && this['printCallback'] != null && this['manager'][_0x551c88(0x1eb)] != !![] && this[_0x551c88(0x20d)]();
            if (this[_0x551c88(0x19a)][_0x551c88(0x1da)] > 0x0) {
              this[_0x551c88(0x19a)][_0x551c88(0x165)](0x0, 0x1);
              if (this['cacheDatas'][_0x551c88(0x1da)] > 0x0) {
                var _0x4e763a = this[_0x551c88(0x19a)][0x0];
                _0x4e763a();
                return;
              }
            }
            this[_0x551c88(0x198)]();
          } else this[_0x551c88(0x198)]();
        }
      }
    }
  }, {
    key: _a0_0x51313f24,
    value: function value(_0x3aaf67) {
      var _0x43c66f = a0_0x51313f;
      _0x3aaf67 && _0x3aaf67();
      return;
      this['getBleInfosCallback'] = _0x3aaf67;
      var _0x3532fc = _JCDataUntil.default[_0x43c66f(0x1b9)](0xa5, 0x1);
      this[_0x43c66f(0x1e2)][_0x43c66f(0x212)] = 0xb5;
      var _0x145391 = this;
      this[_0x43c66f(0x1e2)]['ble'][_0x43c66f(0x1e3)](_0x3532fc, 0xa, function () {
        _0x145391['callbackOnce'](_0x145391['getBleInfosCallback'], -0x4);
      });
    }
  }, {
    key: _a0_0x51313f25,
    value: function value(_0x4a42) {
      var _0x253372 = a0_0x51313f;
      this[_0x253372(0x1fc)] = _0x4a42;
      var _0x5aff42 = _JCDataUntil.default[_0x253372(0x1b9)](0xa4, 0x1);
      this[_0x253372(0x1e2)][_0x253372(0x212)] = 0xb4;
      var _0x10a4ae = this;
      this[_0x253372(0x1e2)][_0x253372(0x214)][_0x253372(0x1e3)](_0x5aff42, 0xa, function () {
        var _0xc8f59b = _0x253372;
        _0x10a4ae[_0xc8f59b(0x189)](_0x10a4ae[_0xc8f59b(0x1fc)], -0x4);
      });
    }
  }, {
    key: 'getBlackPaperSpaceBetween',
    value: function getBlackPaperSpaceBetween(_0x5e7b6a) {
      var _0x704d7 = a0_0x51313f;
      if (this['manager'][_0x704d7(0x162)] && this[_0x704d7(0x1e2)][_0x704d7(0x162)][0xc] > 0x0) {
        this['getBlackPaperSpaceBetweenCallback'] = _0x5e7b6a;
        var _0x4ef44d = _JCDataUntil.default['createData'](0x59, 0x1);
        this[_0x704d7(0x1e2)][_0x704d7(0x212)] = 0x69;
        var _0x4fe3b7 = this;
        this['manager']['ble'][_0x704d7(0x1e3)](_0x4ef44d, 0xa, function () {
          var _0x46e6ce = _0x704d7;
          _0x4fe3b7[_0x46e6ce(0x189)](_0x4fe3b7['getBlackPaperSpaceBetweenCallback'], -0x4);
        });
      } else _0x5e7b6a(-0x3);
    }
  }, {
    key: _a0_0x51313f26,
    value: function value(_0x127591) {
      var _0x384f49 = a0_0x51313f;
      this['setBiaoDingCallback'] = _0x127591;
      var _0x31ac68 = _JCDataUntil.default[_0x384f49(0x1b9)](0x8e, 0x1);
      this[_0x384f49(0x1e2)][_0x384f49(0x212)] = 0x8f;
      var _0x46e779 = this;
      this[_0x384f49(0x1e2)]['ble']['sendData'](_0x31ac68, 0xa, function () {
        var _0x21ae26 = _0x384f49;
        _0x46e779[_0x21ae26(0x189)](_0x46e779[_0x21ae26(0x1cb)], -0x4);
      });
    }
  }, {
    key: _a0_0x51313f27,
    value: function value(_0x25d903, _0x1ee2a0) {
      var _0x719b67 = a0_0x51313f;
      this[_0x719b67(0x18c)] = _0x1ee2a0;
      var _0x30f897 = _JCDataUntil.default[_0x719b67(0x1b9)](0x5a, _0x25d903);
      this[_0x719b67(0x1e2)][_0x719b67(0x212)] = 0x6a;
      var _0x336778 = this,
        _0x455f79 = this['manager']['printerInfos'][0x16];
      this[_0x719b67(0x1e2)][_0x719b67(0x214)]['sendData'](_0x30f897, 0x0, function () {}), _0x455f79--, this['repeatTimeoutId'] = setTimeout(function () {
        var _0x19603a = _0x719b67;
        _0x455f79 <= 0x0 ? _0x336778[_0x19603a(0x189)](_0x336778['getBiaoDingResultCallback'], -0x4) : (_0x455f79--, _0x336778[_0x19603a(0x1e2)][_0x19603a(0x214)][_0x19603a(0x1e3)](_0x30f897, 0x0, function () {}));
      }, 0x3e8);
    }
  }, {
    key: _a0_0x51313f28,
    value: function value() {
      var _0x21bb3a = a0_0x51313f;
      this[_0x21bb3a(0x207)] = 0x0, this[_0x21bb3a(0x1d6)] = 0xe4, this[_0x21bb3a(0x198)]();
    }
  }, {
    key: 'recive71Succ',
    value: function recive71Succ() {
      var _0x3dd3c0 = a0_0x51313f;
      this[_0x3dd3c0(0x1ea)] = 0x0, this[_0x3dd3c0(0x1d3)] = 0x0, this[_0x3dd3c0(0x21e)] = 0x0, this[_0x3dd3c0(0x202)] = 0x0;
      if (this[_0x3dd3c0(0x15c)]) {
        this[_0x3dd3c0(0x18f)]();
        return;
      }
      this[_0x3dd3c0(0x17c)]();
    }
  }, {
    key: 'reciveF4Succ',
    value: function reciveF4Succ() {
      var _0xe9fbd2 = a0_0x51313f;
      this['manager'][_0xe9fbd2(0x212)] = 0x0, this[_0xe9fbd2(0x1e2)][_0xe9fbd2(0x19d)] = ![];
      if (this[_0xe9fbd2(0x1df)] > 0x0) {
        var _0x5257db = this[_0xe9fbd2(0x1c5)]();
        this['printErrorCode'] = 0x0, this[_0xe9fbd2(0x1a3)](_0x5257db, this['printErrorInfoCallback'], null);
      } else this['wantCancel'] && this['cancelCallback'] && this[_0xe9fbd2(0x167)]();
    }
  }, {
    key: _a0_0x51313f29,
    value: function value(_0xf084de) {
      var _0x5cf577 = a0_0x51313f;
      this[_0x5cf577(0x1e2)]['cutByteSize'] = _0xf084de, this['manager'][_0x5cf577(0x180)] & 0x1 == 0x1 && console[_0x5cf577(0x166)](_0x5cf577(0x1f0) + _0xf084de), this[_0x5cf577(0x189)](this[_0x5cf577(0x1fc)], _0xf084de);
    }
  }, {
    key: 'recive0xB5',
    value: function recive0xB5(_0x3c99ba) {
      var _0xc312af = a0_0x51313f;
      this[_0xc312af(0x1e2)]['maxCacheRows'] = _0x3c99ba >> 0x10, this[_0xc312af(0x1e2)][_0xc312af(0x188)] = _0x3c99ba % (0x100 * 0x100), this['manager'][_0xc312af(0x180)] & 0x1 == 0x1 && console[_0xc312af(0x166)](_0xc312af(0x1e7) + this[_0xc312af(0x1e2)]['maxCacheRows'] + _0xc312af(0x20e) + this[_0xc312af(0x1e2)]['maxOnceSendRows']), this[_0xc312af(0x189)](this['getBleInfosCallback'], _0x3c99ba);
    }
  }, {
    key: _a0_0x51313f30,
    value: function value() {
      var _this8 = this;
      var _0x267745 = a0_0x51313f;
      this['reject'] = 0x0, this[_0x267745(0x15c)] = ![], this[_0x267745(0x1ae)] = ![], this[_0x267745(0x1f1)] = ![], this[_0x267745(0x1b5)] = 0x0, this[_0x267745(0x17f)] = !![], this['printErrorCode'] = 0x0, this['isSendPictureDataing'] = ![];
      var _0x11bb7c = this['onePageCount'];
      this[_0x267745(0x193)] % 0x8 != 0x0 && (this['cols'] = this[_0x267745(0x193)] + 0x8 - this[_0x267745(0x193)] % 0x8);
      var _0xe86073 = this[_0x267745(0x19a)][0x0];
      _0xe86073();
      return;
      var _0x8de762 = _JCDataUntil.default['createData'](0x13, this[_0x267745(0x15f)] / 0x100, this['rows'] % 0x100, this[_0x267745(0x193)] / 0x100, this[_0x267745(0x193)] % 0x100, _0x11bb7c / 0x100, _0x11bb7c % 0x100);
      this[_0x267745(0x1e2)][_0x267745(0x212)] = 0x14, this['unRes'] = 0x1, this[_0x267745(0x1e2)][_0x267745(0x214)][_0x267745(0x1e3)](_0x8de762, 0x9, function () {
        var _0x1e02fb = _0x267745;
        _this8['sendPrintError'](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], _this8['printObj'][_0x1e02fb(0x17e)], _this8[_0x1e02fb(0x18b)]['complete']);
      });
    }
  }, {
    key: _a0_0x51313f31,
    value: function value() {
      var _0x4e60e3 = a0_0x51313f;
      this[_0x4e60e3(0x1ea)] = 0x0, this['recive200Row'] = 0x0, this[_0x4e60e3(0x21e)] = 0x0, this[_0x4e60e3(0x202)] = 0x0;
      if (this[_0x4e60e3(0x15c)]) {
        this[_0x4e60e3(0x18f)]();
        return;
      }
      this[_0x4e60e3(0x17c)]();
    }
  }, {
    key: _a0_0x51313f32,
    value: function value() {
      var _0x465e06 = a0_0x51313f;
      if (this[_0x465e06(0x1e2)][_0x465e06(0x212)] == 0xd3) {
        var _0x16c999 = (this[_0x465e06(0x21e)] + 0x1) * this[_0x465e06(0x1e2)]['maxOnceSendRows'] - 0x1;
        this['arrayIndex1'] + 0x1 == this[_0x465e06(0x1b4)][_0x465e06(0x1da)] && (_0x16c999 = this['rows'] - 0x1);
        var _0x5d5857 = _0x16c999 / 0x100,
          _0x212e37 = _0x16c999 % 0x100;
        this[_0x465e06(0x1e2)][_0x465e06(0x212)] = 0xd3;
        var _0x48ee86 = _JCDataUntil.default['createData'](0x86, _0x5d5857, _0x212e37, 0x1),
          _0x7637d0 = this;
        this[_0x465e06(0x1e2)][_0x465e06(0x214)][_0x465e06(0x1e3)](_0x48ee86, 0x9, function () {
          var _0x26a9e5 = _0x465e06;
          _0x7637d0[_0x26a9e5(0x1a3)](_JCAPIErrorCode.default[_0x26a9e5(0x1ee)], _0x7637d0[_0x26a9e5(0x205)], null);
        });
      }
    }
  }, {
    key: 'doSendPictrueData',
    value: function doSendPictrueData() {
      var _0x529faf = a0_0x51313f;
      var _0x3b3959 = this;
      if (this[_0x529faf(0x21e)] < this[_0x529faf(0x1b4)][_0x529faf(0x1da)]) {
        this[_0x529faf(0x1e2)][_0x529faf(0x212)] = 0xd3;
        var _0x209f1e = this[_0x529faf(0x1b4)][this[_0x529faf(0x21e)]];
        if (this[_0x529faf(0x202)] < _0x209f1e['length']) {
          var _0x3b8315 = _0x209f1e[this[_0x529faf(0x202)]];
          this[_0x529faf(0x202)]++, this[_0x529faf(0x1e2)]['ble']['sendData'](_0x3b8315, 0x0, function () {
            var _0x5a5eda = _0x529faf;
            if (_0x3b3959[_0x5a5eda(0x17f)] != !![]) return;
            if (_0x3b3959[_0x5a5eda(0x202)] == _0x209f1e['length']) _0x3b3959[_0x5a5eda(0x1ad)] = ![], _0x3b3959[_0x5a5eda(0x1d4)] = setTimeout(function () {
              var _0x103764 = _0x5a5eda;
              _0x3b3959[_0x103764(0x174)]();
            }, 0x1f4);else {
              _0x3b3959[_0x5a5eda(0x1ad)] = !![];
              var _0x4330d3 = 0x12;
              if (_0x3b3959[_0x5a5eda(0x1e2)][_0x5a5eda(0x1c3)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_DD']) {} else _0x3b3959['manager'][_0x5a5eda(0x1c3)] == _JCAPIErrorCode.default['JCSDK_PLATFORM_FS'] && _0x3b3959[_0x5a5eda(0x1e2)][_0x5a5eda(0x16a)] == 'android' && _0x3b3959[_0x5a5eda(0x1e2)][_0x5a5eda(0x1e6)] == ![] && (_0x4330d3 = 0x8);
              _0x3b3959['doSendPictrueDataTimeoutId'] = setTimeout(function () {
                var _0x803c72 = _0x5a5eda;
                _0x3b3959[_0x803c72(0x17c)]();
              }, _0x4330d3);
            }
          });
        }
      }
    }
  }]);
  return QPrinterBase;
}(PrinterBase, a0_0x51313f(0x197), a0_0x51313f(0x1ef), a0_0x51313f(0x1e4), a0_0x51313f(0x170), a0_0x51313f(0x1d7), a0_0x51313f(0x199), a0_0x51313f(0x204), a0_0x51313f(0x20a), a0_0x51313f(0x18a), a0_0x51313f(0x1a4), a0_0x51313f(0x174));
var QB21Printer = /*#__PURE__*/function (_QPrinterBase, _a0_0x51313f33) {
  (0, _inherits2.default)(QB21Printer, _QPrinterBase);
  var _super6 = _createSuper(QB21Printer);
  function QB21Printer(_0x36f47a) {
    var _this9;
    (0, _classCallCheck2.default)(this, QB21Printer);
    var _0x404b71 = a0_0x51313f;
    _this9 = _super6.call(this, _0x36f47a), _this9[_0x404b71(0x1af)] = 0xcb, _this9[_0x404b71(0x1bd)] = 0x30, _this9[_0x404b71(0x1a9)] = 0x30, _this9['printWay'] = 0x1;
    return _this9;
  }
  (0, _createClass2.default)(QB21Printer, [{
    key: 'getDropSize',
    value: function getDropSize(_0x248025) {
      var _0xabc26e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x5d5217 = a0_0x51313f;
      var _0x35cb8c = this['mm2px'](_0x248025),
        _0x15a58f = this['mm2px'](this[_0x5d5217(0x1bd)]),
        _0x34c213 = 0x0;
      _0xabc26e == 0x2 && (_0x34c213 = 0x8);
      if (_0x35cb8c <= _0x15a58f) return {
        'left': 0x0,
        'width': _0x35cb8c,
        'top': _0x34c213
      };else {
        if (this['printWay'] == 0x1) {
          var _0x5d8d51 = _0x35cb8c - _0x15a58f;
          return {
            'left': Math[_0x5d5217(0x177)](_0x5d8d51 / 0x2),
            'width': _0x15a58f,
            'top': _0x34c213
          };
        } else {
          if (this[_0x5d5217(0x203)] == 0x2) {
            var _0x5d1c67 = _0x35cb8c - _0x15a58f;
            return {
              'left': _0x5d1c67,
              'width': _0x15a58f,
              'top': _0x34c213
            };
          }
        }
        return {
          'left': 0x0,
          'width': _0x15a58f,
          'top': _0x34c213
        };
      }
    }
  }, {
    key: _a0_0x51313f33,
    value: function value() {
      var _0x39dac8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      if (_0x39dac8 == 0x2) return 0x8;
      return 0x0;
    }
  }]);
  return QB21Printer;
}(QPrinterBase, a0_0x51313f(0x159));
var QB32Printer = /*#__PURE__*/function (_QPrinterBase2, _a0_0x51313f34) {
  (0, _inherits2.default)(QB32Printer, _QPrinterBase2);
  var _super7 = _createSuper(QB32Printer);
  function QB32Printer(_0x195b21) {
    var _this10;
    (0, _classCallCheck2.default)(this, QB32Printer);
    var _0x2118d9 = a0_0x51313f;
    _this10 = _super7.call(this, _0x195b21), _this10[_0x2118d9(0x1af)] = 0x12c, _this10[_0x2118d9(0x1bd)] = 0x48, _this10[_0x2118d9(0x1a9)] = 0x6c, _this10[_0x2118d9(0x203)] = 0x1;
    return _this10;
  }
  (0, _createClass2.default)(QB32Printer, [{
    key: _a0_0x51313f34,
    value: function value() {
      var _0x5e74eb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      return 0x0;
    }
  }]);
  return QB32Printer;
}(QPrinterBase, a0_0x51313f(0x159));
var QB32RPrinter = /*#__PURE__*/function (_QPrinterBase3, _a0_0x51313f35) {
  (0, _inherits2.default)(QB32RPrinter, _QPrinterBase3);
  var _super8 = _createSuper(QB32RPrinter);
  function QB32RPrinter(_0x11bca3) {
    var _this11;
    (0, _classCallCheck2.default)(this, QB32RPrinter);
    var _0x172e18 = a0_0x51313f;
    _this11 = _super8.call(this, _0x11bca3), _this11[_0x172e18(0x1af)] = 0x12c, _this11[_0x172e18(0x1bd)] = 0x48, _this11[_0x172e18(0x1a9)] = 0x6c, _this11[_0x172e18(0x203)] = 0x1;
    return _this11;
  }
  (0, _createClass2.default)(QB32RPrinter, [{
    key: 'getDropPxTopFrom',
    value: function getDropPxTopFrom() {
      var _0x58d6b8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      return 0x0;
    }
  }, {
    key: _a0_0x51313f35,
    value: function value() {
      var _0xdc0569 = a0_0x51313f;
      this['sendImageDataStatus'] = 0x0, this['recive200Row'] = 0x0, this[_0xdc0569(0x21e)] = 0x0, this[_0xdc0569(0x202)] = 0x0;
      if (this['wantCancel']) {
        this[_0xdc0569(0x18f)]();
        return;
      }
      if (this[_0xdc0569(0x15d)]) {
        var _0x14f31c = this,
          _0x5a4e41 = function _0x5a4e41() {
            var _0x1b5af4 = _0xdc0569;
            _0x14f31c[_0x1b5af4(0x1a3)](_JCAPIErrorCode.default[_0x1b5af4(0x164)], _0x14f31c[_0x1b5af4(0x205)], null), _0x14f31c[_0x1b5af4(0x18f)]();
          };
        if ((0, _typeof2.default)(this[_0xdc0569(0x15d)]) != _0xdc0569(0x213)) {
          _0x5a4e41();
          return;
        }
        if (this['epc']['length'] % 0x4 != 0x0) {
          _0x5a4e41();
          return;
        }
        var _0x57de60 = [],
          _0x4db0b7 = {
            '0': 0x0,
            '1': 0x1,
            '2': 0x2,
            '3': 0x3,
            '4': 0x4,
            '5': 0x5,
            '6': 0x6,
            '7': 0x7,
            '8': 0x8,
            '9': 0x9,
            'a': 0xa,
            'b': 0xb,
            'c': 0xc,
            'd': 0xd,
            'e': 0xe,
            'f': 0xf,
            'A': 0xa,
            'B': 0xb,
            'C': 0xc,
            'D': 0xd,
            'E': 0xe,
            'F': 0xf
          },
          _0x4d5fed = 0x0,
          _0x55769c = ![];
        for (var _0x4d736f = 0x0; _0x4d736f < this['epc'][_0xdc0569(0x1da)]; _0x4d736f += 0x2) {
          var _0x2f2d01 = this[_0xdc0569(0x15d)][_0x4d736f],
            _0x6a78ee = _0x4db0b7[_0x2f2d01];
          if (_0x6a78ee == null || _0x6a78ee == undefined) {
            _0x55769c = !![];
            break;
          }
          _0x4d5fed |= _0x6a78ee, _0x4d5fed <<= 0x4, _0x2f2d01 = this[_0xdc0569(0x15d)][_0x4d736f + 0x1], _0x6a78ee = _0x4db0b7[_0x2f2d01], _0x4d5fed |= _0x6a78ee;
          if (_0x6a78ee == null || _0x6a78ee == undefined) {
            _0x55769c = !![];
            break;
          }
          _0x57de60[_0xdc0569(0x15e)](_0x4d5fed), _0x4d5fed = 0x0;
        }
        if (_0x55769c) {
          _0x5a4e41();
          return;
        }
        var _0x231a5d = _JCDataUntil.default[_0xdc0569(0x183)](0x70, _0x57de60);
        this[_0xdc0569(0x1e2)]['needCMD'] = 0x71, this[_0xdc0569(0x1e2)]['ble']['sendData'](_0x231a5d, 0xa, function () {
          var _0x3af26c = _0xdc0569;
          _0x14f31c[_0x3af26c(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], _0x14f31c[_0x3af26c(0x205)]);
        });
      } else this[_0xdc0569(0x17c)]();
    }
  }]);
  return QB32RPrinter;
}(QPrinterBase, a0_0x51313f(0x1a4));
var QB3SPrinter = /*#__PURE__*/function (_QPrinterBase4, _a0_0x51313f36, _a0_0x51313f37) {
  (0, _inherits2.default)(QB3SPrinter, _QPrinterBase4);
  var _super9 = _createSuper(QB3SPrinter);
  function QB3SPrinter(_0x247bae) {
    var _this12;
    (0, _classCallCheck2.default)(this, QB3SPrinter);
    var _0x462df8 = a0_0x51313f;
    _this12 = _super9.call(this, _0x247bae), _this12[_0x462df8(0x1af)] = 0xc8, _this12[_0x462df8(0x1bd)] = 0x48, _this12['maxWordSizeLength'] = 0x48, _this12['printWay'] = 0x0;
    return _this12;
  }
  (0, _createClass2.default)(QB3SPrinter, [{
    key: _a0_0x51313f36,
    value: function value(_0x51bc69) {
      var _0xf35c9d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x5df680 = a0_0x51313f;
      var _0x33ddce = this[_0x5df680(0x1b1)](_0x51bc69),
        _0x3ab7c7 = this[_0x5df680(0x1b1)](this[_0x5df680(0x1bd)]);
      if (_0x33ddce <= _0x3ab7c7) {
        if (_0xf35c9d == 0x2) return {
          'left': 0x0,
          'width': _0x33ddce,
          'top': 0x30
        };
        return {
          'left': 0x0,
          'width': _0x33ddce,
          'top': 0x0
        };
      } else {
        if (_0xf35c9d == 0x2) return {
          'left': 0x0,
          'width': _0x3ab7c7,
          'top': 0x30
        };
        return {
          'left': 0x0,
          'width': _0x3ab7c7,
          'top': 0x0
        };
      }
    }
  }, {
    key: _a0_0x51313f37,
    value: function value() {
      var _0x1d13f6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      if (_0x1d13f6 == 0x2) return 0x30;
      return 0x0;
    }
  }]);
  return QB3SPrinter;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QB3SPPrinter = /*#__PURE__*/function (_QPrinterBase5, _a0_0x51313f38, _a0_0x51313f39) {
  (0, _inherits2.default)(QB3SPPrinter, _QPrinterBase5);
  var _super10 = _createSuper(QB3SPPrinter);
  function QB3SPPrinter(_0xae4007) {
    var _this13;
    (0, _classCallCheck2.default)(this, QB3SPPrinter);
    var _0x8ccd0e = a0_0x51313f;
    _this13 = _super10.call(this, _0xae4007), _this13[_0x8ccd0e(0x1af)] = 0xc8, _this13['maxDeviceLength'] = 0x48, _this13['maxWordSizeLength'] = 0x48, _this13[_0x8ccd0e(0x203)] = 0x0;
    return _this13;
  }
  (0, _createClass2.default)(QB3SPPrinter, [{
    key: _a0_0x51313f38,
    value: function value(_0x3bdc25) {
      var _0xc6859e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x308dca = a0_0x51313f;
      var _0x323a34 = this[_0x308dca(0x1b1)](_0x3bdc25),
        _0xa1753a = this[_0x308dca(0x1b1)](this[_0x308dca(0x1bd)]);
      if (_0x323a34 <= _0xa1753a) {
        if (_0xc6859e == 0x2) return {
          'left': 0x0,
          'width': _0x323a34,
          'top': 0x30
        };
        return {
          'left': 0x0,
          'width': _0x323a34,
          'top': 0x0
        };
      } else {
        var _0x39f397 = _0x323a34 - _0xa1753a;
        if (_0xc6859e == 0x2) return {
          'left': Math[_0x308dca(0x177)](_0x39f397 / 0x2),
          'width': _0xa1753a,
          'top': 0x30
        };
        return {
          'left': Math[_0x308dca(0x177)](_0x39f397 / 0x2),
          'width': _0xa1753a,
          'top': 0x0
        };
      }
    }
  }, {
    key: _a0_0x51313f39,
    value: function value() {
      var _0x5b6245 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      if (_0x5b6245 == 0x2) return 0x30;
      return 0x0;
    }
  }]);
  return QB3SPPrinter;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QB1Printer = /*#__PURE__*/function (_QPrinterBase6, _a0_0x51313f40, _a0_0x51313f41) {
  (0, _inherits2.default)(QB1Printer, _QPrinterBase6);
  var _super11 = _createSuper(QB1Printer);
  function QB1Printer(_0x2ca43c) {
    var _this14;
    (0, _classCallCheck2.default)(this, QB1Printer);
    var _0x47dcf7 = a0_0x51313f;
    _this14 = _super11.call(this, _0x2ca43c), _this14[_0x47dcf7(0x1af)] = 0xcb, _this14[_0x47dcf7(0x1bd)] = 0x30, _this14[_0x47dcf7(0x1a9)] = 0x30, _this14['printWay'] = 0x1, _this14[_0x47dcf7(0x1ce)] = !![];
    return _this14;
  }
  (0, _createClass2.default)(QB1Printer, [{
    key: _a0_0x51313f40,
    value: function value(_0x5c22f5) {
      var _0x479280 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x745590 = a0_0x51313f;
      var _0x51c78c = this[_0x745590(0x1b1)](_0x5c22f5),
        _0x41d4ff = this[_0x745590(0x1b1)](this['maxDeviceLength']),
        _0x30749e = 0x0;
      _0x479280 == 0x2 && (_0x30749e = 0x8);
      if (_0x51c78c <= _0x41d4ff) return {
        'left': 0x0,
        'width': _0x51c78c,
        'top': _0x30749e
      };else {
        var _0x267f25 = _0x51c78c - _0x41d4ff;
        return {
          'left': Math[_0x745590(0x177)](_0x267f25 / 0x2),
          'width': _0x41d4ff,
          'top': _0x30749e
        };
      }
    }
  }, {
    key: _a0_0x51313f41,
    value: function value() {
      var _0x39af32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      if (_0x39af32 == 0x2) return 0x8;
      return 0x0;
    }
  }]);
  return QB1Printer;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QB203Printer = /*#__PURE__*/function (_QPrinterBase7, _a0_0x51313f42, _a0_0x51313f43) {
  (0, _inherits2.default)(QB203Printer, _QPrinterBase7);
  var _super12 = _createSuper(QB203Printer);
  function QB203Printer(_0x259f9e) {
    var _this15;
    (0, _classCallCheck2.default)(this, QB203Printer);
    var _0x4564c3 = a0_0x51313f;
    _this15 = _super12.call(this, _0x259f9e), _this15[_0x4564c3(0x1af)] = 0xcb, _this15[_0x4564c3(0x1bd)] = 0x30, _this15[_0x4564c3(0x1a9)] = 0x30, _this15[_0x4564c3(0x203)] = 0x1, _this15['checkRFID'] = !![];
    return _this15;
  }
  (0, _createClass2.default)(QB203Printer, [{
    key: _a0_0x51313f42,
    value: function value(_0x245a52) {
      var _0x24d666 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x2adb2b = a0_0x51313f;
      var _0x960de5 = this[_0x2adb2b(0x1b1)](_0x245a52),
        _0x5e14c9 = this['mm2px'](this[_0x2adb2b(0x1bd)]),
        _0x31e431 = 0x0;
      _0x24d666 == 0x2 && (_0x31e431 = 0x8);
      if (_0x960de5 <= _0x5e14c9) return {
        'left': 0x0,
        'width': _0x960de5,
        'top': _0x31e431
      };else {
        var _0x1d9336 = _0x960de5 - _0x5e14c9;
        return {
          'left': Math['floor'](_0x1d9336 / 0x2),
          'width': _0x5e14c9,
          'top': _0x31e431
        };
      }
    }
  }, {
    key: _a0_0x51313f43,
    value: function value() {
      var _0x5aca09 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      if (_0x5aca09 == 0x2) return 0x8;
      return 0x0;
    }
  }]);
  return QB203Printer;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QB16Printer = /*#__PURE__*/function (_QPrinterBase8, _a0_0x51313f44, _a0_0x51313f45) {
  (0, _inherits2.default)(QB16Printer, _QPrinterBase8);
  var _super13 = _createSuper(QB16Printer);
  function QB16Printer(_0x2ff57e) {
    var _this16;
    (0, _classCallCheck2.default)(this, QB16Printer);
    var _0x13580e = a0_0x51313f;
    _this16 = _super13.call(this, _0x2ff57e), _this16[_0x13580e(0x1af)] = 0xcb, _this16[_0x13580e(0x1bd)] = 0xc, _this16['maxWordSizeLength'] = 0xc, _this16['printWay'] = 0x1, _this16['checkRFID'] = !![];
    return _this16;
  }
  (0, _createClass2.default)(QB16Printer, [{
    key: _a0_0x51313f44,
    value: function value(_0x552d1e) {
      var _0x3eee1b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x432541 = a0_0x51313f;
      var _0x2ffa61 = this[_0x432541(0x1b1)](_0x552d1e),
        _0x488ff0 = this[_0x432541(0x1b1)](this[_0x432541(0x1bd)]),
        _0x39d84a = 0x0;
      if (_0x2ffa61 <= _0x488ff0) return {
        'left': 0x0,
        'width': _0x2ffa61,
        'top': _0x39d84a
      };else {
        var _0x583e40 = _0x2ffa61 - _0x488ff0;
        return {
          'left': Math['floor'](_0x583e40 / 0x2),
          'width': _0x488ff0,
          'top': _0x39d84a
        };
      }
    }
  }, {
    key: _a0_0x51313f45,
    value: function value() {
      var _0xcdf17f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      return 0x0;
    }
  }]);
  return QB16Printer;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QK1Printer = /*#__PURE__*/function (_QPrinterBase9, _a0_0x51313f46, _a0_0x51313f47) {
  (0, _inherits2.default)(QK1Printer, _QPrinterBase9);
  var _super14 = _createSuper(QK1Printer);
  function QK1Printer(_0x6399b3) {
    var _this17;
    (0, _classCallCheck2.default)(this, QK1Printer);
    var _0xb67d7c = a0_0x51313f;
    _this17 = _super14.call(this, _0x6399b3), _this17[_0xb67d7c(0x1af)] = 0xcb, _this17[_0xb67d7c(0x1bd)] = 0x50, _this17[_0xb67d7c(0x1a9)] = 0x50, _this17['printWay'] = 0x1, _this17[_0xb67d7c(0x1ce)] = ![];
    return _this17;
  }
  (0, _createClass2.default)(QK1Printer, [{
    key: _a0_0x51313f46,
    value: function value(_0x9b0ac9) {
      var _0x202010 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x4f8623 = a0_0x51313f;
      var _0x2af95a = this[_0x4f8623(0x1b1)](_0x9b0ac9),
        _0x3e37bd = this[_0x4f8623(0x1b1)](this[_0x4f8623(0x1bd)]),
        _0x2cbdc4 = 0x0;
      if (_0x2af95a <= _0x3e37bd) return {
        'left': 0x0,
        'width': _0x2af95a,
        'top': _0x2cbdc4
      };else {
        var _0x580cb1 = _0x2af95a - _0x3e37bd;
        return {
          'left': Math[_0x4f8623(0x177)](_0x580cb1 / 0x2),
          'width': _0x3e37bd,
          'top': _0x2cbdc4
        };
      }
    }
  }, {
    key: _a0_0x51313f47,
    value: function value() {
      var _0x57667f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      return 0x0;
    }
  }]);
  return QK1Printer;
}(QPrinterBase, a0_0x51313f(0x19b), a0_0x51313f(0x159));
var QAutoPrinter = /*#__PURE__*/function (_QPrinterBase10, _a0_0x51313f48, _a0_0x51313f49, _a0_0x51313f50, _a0_0x51313f51) {
  (0, _inherits2.default)(QAutoPrinter, _QPrinterBase10);
  var _super15 = _createSuper(QAutoPrinter);
  function QAutoPrinter(_0x175c9a) {
    var _this18;
    (0, _classCallCheck2.default)(this, QAutoPrinter);
    var _0x379600 = a0_0x51313f;
    _this18 = _super15.call(this, _0x175c9a), _this18['dpi'] = 0xcb, _this18['maxDeviceLength'] = 0x50, _this18[_0x379600(0x1a9)] = 0x50, _this18['printWay'] = 0x1, _this18['checkRFID'] = ![], _this18[_0x379600(0x1e8)] = 0x0;
    return _this18;
  }
  (0, _createClass2.default)(QAutoPrinter, [{
    key: _a0_0x51313f48,
    value: function value(_0x407892, _0x1bc0a3, _0x37b9e3, _0x1473c1, _0x5232) {
      var _0x255abf = a0_0x51313f;
      var _0x5ec338 = 0xdc;
      this[_0x255abf(0x1e2)][_0x255abf(0x1a0)] == 0x3 && this['manager']['cutByteSize'] > 0x0 && (_0x5ec338 = this[_0x255abf(0x1e2)][_0x255abf(0x1aa)]);
      if (this['manager']['sdkPlatform'] == _JCAPIErrorCode.default[_0x255abf(0x208)]) {} else this[_0x255abf(0x1e2)][_0x255abf(0x1c3)] == _JCAPIErrorCode.default[_0x255abf(0x1e0)] && this[_0x255abf(0x1e2)][_0x255abf(0x16a)] == _0x255abf(0x1c8) && this[_0x255abf(0x1e2)]['setMtuSucc'] == ![] && (_0x5ec338 = 0x14);
      var _0x300cb6 = _JCDataUntil.default['dealImageData'](_0x407892, this[_0x255abf(0x1a9)], {
        'left': 0x0,
        'rifht': 0x0
      }, _0x5ec338, _0x37b9e3);
      this[_0x255abf(0x1fa)] += _0x1bc0a3;
      if (_0x300cb6 != null && _0x300cb6[_0x255abf(0x1da)] > 0x0) {
        var _0x5ebeaf = {};
        _0x5ebeaf[_0x255abf(0x1a1)] = _0x407892[_0x255abf(0x1a1)], _0x5ebeaf[_0x255abf(0x1fd)] = _0x407892[_0x255abf(0x1fd)];
        _0x37b9e3 % 0xb4 != 0x0 && (_0x5ebeaf[_0x255abf(0x1a1)] = _0x407892[_0x255abf(0x1fd)], _0x5ebeaf[_0x255abf(0x1fd)] = _0x407892[_0x255abf(0x1a1)]);
        _0x5ebeaf[_0x255abf(0x1a7)] = _0x300cb6, _0x5ebeaf['count'] = _0x1bc0a3;
        var _0x2a7fae = this,
          _0x187431 = function _0x187431() {
            var _0x3c3b0b = _0x255abf;
            _0x2a7fae['cols'] = _0x5ebeaf[_0x3c3b0b(0x1a1)], _0x2a7fae[_0x3c3b0b(0x15f)] = _0x5ebeaf[_0x3c3b0b(0x1fd)], _0x2a7fae['sendDataArray'] = _0x5ebeaf['data'], _0x2a7fae[_0x3c3b0b(0x17d)] = _0x5ebeaf['count'];
            if (_0x5232) {
              var _0x118fcf = _0x5232[_0x3c3b0b(0x15d)],
                _0x8919fc = _0x5232['hasDash'];
              _0x118fcf ? _0x2a7fae['epc'] = _0x118fcf : _0x2a7fae[_0x3c3b0b(0x15d)] = null, _0x8919fc != null ? _0x2a7fae[_0x3c3b0b(0x1ac)] = _0x8919fc : _0x2a7fae['hasDash'] = null;
            } else _0x2a7fae[_0x3c3b0b(0x15d)] = null, _0x2a7fae[_0x3c3b0b(0x1ac)] = null;
            if (_0x2a7fae[_0x3c3b0b(0x17f)]) {
              var _0x3dc9b4 = _JCDataUntil.default[_0x3c3b0b(0x1b9)](0x3, 0x1);
              _0x2a7fae['manager']['needCMD'] = 0x4;
              if (_0x2a7fae['manager'][_0x3c3b0b(0x1a0)] == 0x3) {
                _0x2a7fae['manager']['needCMD'] = 0x14;
                var _0x10e1a2 = _0x5ebeaf[_0x3c3b0b(0x1fd)] >= _0x2a7fae[_0x3c3b0b(0x1e2)][_0x3c3b0b(0x1d5)] ? 0x1 : _0x1bc0a3;
                _0x3dc9b4 = _JCDataUntil.default['createData'](0x13, _0x2a7fae[_0x3c3b0b(0x15f)] / 0x100, _0x2a7fae[_0x3c3b0b(0x15f)] % 0x100, _0x2a7fae[_0x3c3b0b(0x193)] / 0x100, _0x2a7fae[_0x3c3b0b(0x193)] % 0x100, _0x10e1a2 / 0x100, _0x10e1a2 % 0x100);
              }
              _0x2a7fae[_0x3c3b0b(0x1ec)] = 0x1, _0x2a7fae['manager'][_0x3c3b0b(0x214)][_0x3c3b0b(0x1e3)](_0x3dc9b4, 0xa, function () {
                var _0x191f14 = _0x3c3b0b;
                _0x2a7fae[_0x191f14(0x1a3)](_JCAPIErrorCode.default[_0x191f14(0x1ee)], this[_0x191f14(0x205)]);
              });
            } else {
              var _0x245dee = _JCDataUntil.default[_0x3c3b0b(0x1b9)](0x1, 0x1);
              if (_0x2a7fae[_0x3c3b0b(0x1e2)][_0x3c3b0b(0x1a0)] == 0x3) {
                var _0x5e36e2 = 0x0;
                _0x5232 != null && _0x5232[_0x3c3b0b(0x1f4)] != null && _0x5232[_0x3c3b0b(0x1f4)] == 0x1 && (_0x5e36e2 = 0x1), _0x245dee = _JCDataUntil.default[_0x3c3b0b(0x1b9)](0x1, _0x2a7fae[_0x3c3b0b(0x1c9)] / 0x100, _0x2a7fae['recordTotalCount'] % 0x100, 0x0, 0x0, 0x0, 0x0, 0x0, _0x5e36e2);
              }
              _0x2a7fae[_0x3c3b0b(0x1e2)][_0x3c3b0b(0x212)] = 0x2, _0x2a7fae[_0x3c3b0b(0x1ec)] = 0x1, _0x2a7fae[_0x3c3b0b(0x1e3)](_0x245dee);
            }
          };
        if (_0x5ebeaf[_0x255abf(0x1fd)] >= this[_0x255abf(0x1e2)][_0x255abf(0x1d5)]) {
          var _0x1ba9f4 = _0x1bc0a3;
          while (_0x1ba9f4 > 0x0) {
            _0x1ba9f4--, this[_0x255abf(0x19a)][_0x255abf(0x15e)](_0x187431);
          }
        } else this[_0x255abf(0x19a)][_0x255abf(0x15e)](_0x187431);
        if (this[_0x255abf(0x19a)]['length'] >= 0x5) {
          this['printCallback'] = _0x1473c1;
          if (!this['isPrinting']) {
            var _0x4e0222 = this[_0x255abf(0x19a)][0x0];
            _0x4e0222();
          }
        } else {
          if (this[_0x255abf(0x1fa)] == this['recordTotalCount']) {
            if (!this['isPrinting']) {
              var _0x3a8929 = this[_0x255abf(0x19a)][0x0];
              _0x3a8929();
            }
          } else {
            if (this[_0x255abf(0x17f)] == !![]) return;
            _0x1473c1 && this[_0x255abf(0x1e2)][_0x255abf(0x1eb)] != !![] && _0x1473c1();
          }
        }
      } else this['cols'] = 0x0, this[_0x255abf(0x15f)] = 0x0, this[_0x255abf(0x1b4)] = [], this[_0x255abf(0x1e2)][_0x255abf(0x19d)] = ![], this[_0x255abf(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_GetDATA'], this[_0x255abf(0x205)], null);
    }
  }, {
    key: _a0_0x51313f49,
    value: function value(_0x5d8445) {
      var _0x20cb83 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x48cc68 = a0_0x51313f;
      var _0x4778c0 = this[_0x48cc68(0x1b1)](_0x5d8445),
        _0x5d8cd2 = this[_0x48cc68(0x1b1)](this[_0x48cc68(0x1bd)]),
        _0x149ead = 0x0,
        _0x2ce172 = 0x0;
      _0x20cb83 == 0x2 && (_0x149ead = Math[_0x48cc68(0x1db)](this[_0x48cc68(0x1f9)] / 0x2), _0x2ce172 = _0x149ead);
      if (_0x4778c0 <= _0x5d8cd2) return {
        'left': 0x0,
        'width': _0x4778c0,
        'top': _0x149ead,
        'bottom': _0x2ce172
      };else {
        var _0x10f73b = _0x4778c0 - _0x5d8cd2;
        return {
          'left': Math[_0x48cc68(0x177)](_0x10f73b / 0x2),
          'width': _0x5d8cd2,
          'top': _0x149ead,
          'bottom': _0x2ce172
        };
      }
    }
  }, {
    key: _a0_0x51313f50,
    value: function value() {
      var _0x25233b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      var _0x340852 = a0_0x51313f;
      var _0xb17e97 = 0x0,
        _0x2f6b83 = 0x0;
      return _0x25233b == 0x2 && (_0xb17e97 = Math[_0x340852(0x1db)](this[_0x340852(0x1f9)] / 0x2), _0x2f6b83 = _0xb17e97), {
        'top': _0xb17e97,
        'bottom': _0x2f6b83
      };
    }
  }, {
    key: _a0_0x51313f51,
    value: function value(_0x18ebf1) {
      var _0x2177c6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x1d631e = a0_0x51313f;
      var _0x17977a = _0x18ebf1,
        _0xb406b7 = this[_0x1d631e(0x1b1)](this[_0x1d631e(0x1bd)]),
        _0xc273a4 = this[_0x1d631e(0x159)](_0x2177c6),
        _0x55ccf7 = 0x0,
        _0x20cc92 = 0x0;
      (0, _typeof2.default)(_0xc273a4) == _0x1d631e(0x182) ? _0x55ccf7 = _0xc273a4 : (_0x55ccf7 = _0xc273a4[_0x1d631e(0x1bf)], _0x20cc92 = _0xc273a4['bottom']);
      if (_0x17977a <= _0xb406b7) return {
        'left': 0x0,
        'width': _0x17977a,
        'top': _0x55ccf7,
        'bottom': _0x20cc92
      };else {
        if (this[_0x1d631e(0x203)] == 0x1) {
          var _0x99713d = _0x17977a - _0xb406b7;
          return {
            'left': Math[_0x1d631e(0x177)](_0x99713d / 0x2),
            'width': _0xb406b7,
            'top': _0x55ccf7,
            'bottom': _0x20cc92
          };
        } else {
          if (this[_0x1d631e(0x203)] == 0x2) {
            var _0xd98940 = _0x17977a - _0xb406b7;
            return {
              'left': _0xd98940,
              'width': _0xb406b7,
              'top': _0x55ccf7,
              'bottom': _0x20cc92
            };
          }
        }
        return {
          'left': 0x0,
          'width': _0xb406b7,
          'top': _0x55ccf7,
          'bottom': _0x20cc92
        };
      }
    }
  }]);
  return QAutoPrinter;
}(QPrinterBase, a0_0x51313f(0x217), a0_0x51313f(0x19b), a0_0x51313f(0x159), a0_0x51313f(0x1b0));
function a0_0x151a() {
  var _0x465c7f = ['sendData', 'getBleInfos', 'JCSDK_PRINT_ERR_0x05', 'setMtuSucc', 'maxCahce\x20=\x20', 'supportRFID', 'tid', 'sendImageDataStatus', 'isDrawing', 'unRes', '301sIapEy', 'JCSDK_PRINT_ERR_TIMEOUT', 'reciveB3Succ', 'cutByteSize\x20=\x20', 'reciveCancel', 'didReadPrintErrorInfo', '---重复发送了-------', 'speedOrQuality', 'time', 'clear', 'getSnCallback', 'recive0x00', 'paperSpaceBetween', 'cacheCount', 'compareImageData', 'getCutDataInfosCallback', 'height', 'getSn', '6857780QgPZOw', '收到错误=', 'getDensityCallback', 'arrayIndex2', 'printWay', 'reciveE4Succ', 'printErrorInfoCallback', 'getTimeOfPoweroffCallback', 'reject', 'JCSDK_PLATFORM_DD', 'recive71Succ', 'recive0xB4', 'JCSDK_PRINT_ERR_0x04', 'printEndObj', 'printCallback', '\x20\x20maxSendRows\x20=\x20', '9082530OPVkrj', 'JCSDK_PRINT_ERR_PrinterNotWork', '11cWiTCy', 'needCMD', 'string', 'ble', 'recive04Succ', 'startJob', 'startPrint', 'setLangueCallback', 'JCSDK_PRINT_ERR_0x0e', 'recive16Succ', 'b3ReTimeout', 'setStandardCallback', 'protoVer', 'arrayIndex1', 'getDropPxTopFrom', 'printingStatus', '165344gNKPQB', 'wantCancel', 'epc', 'push', 'rows', 'byteLength', 'compareTotalImageDataWithZip', 'printerInfos', 'setDensityCallback', 'JCSDK_PRINT_ERR_epc', 'splice', 'log', 'cancelCallback', 'setPaperTypeCallback', '查询页码时，收到错误=', 'platform', 'sendUnRes', 'count', 'getSpeedCallback', 'JCSDK_PRINT_ERR_0x0d', 'sVer', 'getCutDataInfos', 'setPowerOffTimeCallback', 'cache', 'error', 'doSend86', 'getBleInfosCallback', 'repeatTimeoutId', 'floor', 'getHversionCallback', 'doSendPictrueDataTimeoutId', 'useRegion', '12260aCHdHb', 'doSendPictrueData', 'onePageCount', 'fail', 'isPrinting', 'debug', 'success', 'number', 'createDataWithDataArray', 'runCheckCacheAfter14', 'getPowerLevelCallback', 'JCSDK_PRINT_ERR_DISCONNECT', 'JCSDK_PRINT_ERR_0x0b', 'maxOnceSendRows', 'callbackOnce', 'recive02Succ', 'printObj', 'getBiaoDingResultCallback', 'getSversionCallback', '6MLjQNn', 'doSendPrintOver', 'getPaperTypeCallback', 'recive0xB5', 'setResetCallback', 'cols', 'JCSDK_PRINT_ERR_0x03', 'JCSDK_PRINT_ERR_0x06', 'getMultiple', 'reciveCmd', 'sendSearchPrintPage', 'getBiaoDingResult', 'cacheDatas', 'getDropSize', 'JCSDK_PRINT_ERR_0x11', 'startJobFlag', 'setDensity', 'JCSDK_PRINT_ERR_0x13', 'agreement', 'width', 'zipRows', 'sendPrintError', 'recive14Succ', 'bottom', '91301JPHyJW', 'data', 'lastImageDataModel', 'maxWordSizeLength', 'cutByteSize', 'getRFIDInfosCallback', 'hasDash', 'isSendPictureDataing', 'sendCancel', 'dpi', 'getDropByRealWidth', 'mm2px', 'getBlackPaperSpaceBetween', 'getSpeedQualityCallback', 'sendDataArray', 'printedCount', '3209661XcFGAo', 'reciveD3Succ', 'reciveReject', 'createData', 'JCSDK_PRINT_ERR_SetPaperFailed', 'JCSDK_PRINT_ERR_0x08', 'dealImageData', 'maxDeviceLength', 'JCSDK_PRINT_ERR_0x15', 'top', 'slice', 'complete', 'getLangueCallback', 'sdkPlatform', '1532EsaWzg', 'getPrintingError', 'JCSDK_PRINT_ERR_BUSY', 'diffRowCount', 'android', 'recordTotalCount', 'setPaperType', 'setBiaoDingCallback', 'JCSDK_PRINT_ERR_0x02', 'hVer', 'checkRFID', 'printCountInfoCallback', 'getHversion', 'paperHeight', 'value', 'recive200Row', 'send86TimeoutId', 'maxCacheRows', 'checkStatus', 'setBiaoDing', 'getBlackPaperSpaceBetweenCallback', 'setSpeedCallback', 'length', 'ceil', 'getRFIDInfos', 'reciveF4Succ', '2158845arqSob', 'printErrorCode', 'JCSDK_PLATFORM_FS', 'getMacAddressCallback', 'manager'];
  a0_0x151a = function a0_0x151a() {
    return _0x465c7f;
  };
  return a0_0x151a();
}
var SAutoPrinter = /*#__PURE__*/function (_QPrinterBase11, _a0_0x51313f52, _a0_0x51313f53, _a0_0x51313f54, _a0_0x51313f55, _a0_0x51313f56) {
  (0, _inherits2.default)(SAutoPrinter, _QPrinterBase11);
  var _super16 = _createSuper(SAutoPrinter);
  function SAutoPrinter(_0x582d67) {
    var _this19;
    (0, _classCallCheck2.default)(this, SAutoPrinter);
    var _0x5a3cf8 = a0_0x51313f;
    _this19 = _super16.call(this, _0x582d67), _this19[_0x5a3cf8(0x1af)] = 0xcb, _this19['maxDeviceLength'] = 0x50, _this19['maxWordSizeLength'] = 0x50, _this19[_0x5a3cf8(0x203)] = 0x1, _this19['checkRFID'] = ![], _this19[_0x5a3cf8(0x1e8)] = 0x0, _this19['lastImageDataModel'] = null;
    return _this19;
  }
  (0, _createClass2.default)(SAutoPrinter, [{
    key: 'recive14Succ',
    value: function recive14Succ() {
      var _0x4086dc = a0_0x51313f;
      if (this[_0x4086dc(0x15c)]) {
        this['doSendPrintOver']();
        return;
      }
      this[_0x4086dc(0x1d6)] = 0x14;
      var _0xa1c0b7 = this;
      this['runCheckCacheAfter14'] = function () {
        var _0x5c3fbe = _0x4086dc;
        if (_0xa1c0b7[_0x5c3fbe(0x17a)] && _0xa1c0b7[_0x5c3fbe(0x1c7)] == 0x0) {
          _0xa1c0b7[_0x5c3fbe(0x1e2)][_0x5c3fbe(0x212)] = 0xe4;
          var _0x13579b = _JCDataUntil.default[_0x5c3fbe(0x1b9)](0xe3, 0x1);
          _0xa1c0b7[_0x5c3fbe(0x1ad)] = ![], _0xa1c0b7[_0x5c3fbe(0x1e2)][_0x5c3fbe(0x214)][_0x5c3fbe(0x1e3)](_0x13579b, 0xa, function () {
            var _0x21d761 = _0x5c3fbe;
            _0xa1c0b7[_0x21d761(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], this[_0x21d761(0x205)]);
          });
          return;
        }
        _0xa1c0b7[_0x5c3fbe(0x1ea)] = 0x0, _0xa1c0b7[_0x5c3fbe(0x1d3)] = 0x0, _0xa1c0b7[_0x5c3fbe(0x21e)] = 0x0, _0xa1c0b7['arrayIndex2'] = 0x0, _0xa1c0b7[_0x5c3fbe(0x17c)]();
      }, this[_0x4086dc(0x1ea)] = 0x0, this[_0x4086dc(0x1d3)] = 0x0, this['arrayIndex1'] = 0x0, this[_0x4086dc(0x202)] = 0x0, this[_0x4086dc(0x198)]();
    }
  }, {
    key: 'doSendPictrueData',
    value: function doSendPictrueData() {
      var _0x57ecc8 = a0_0x51313f;
      var _0x42b083 = this;
      if (this[_0x57ecc8(0x21e)] < this[_0x57ecc8(0x1b4)][_0x57ecc8(0x1da)]) {
        this[_0x57ecc8(0x1e2)][_0x57ecc8(0x212)] = 0xd3;
        var _0x28665a = this[_0x57ecc8(0x1b4)][this['arrayIndex1']];
        if (this[_0x57ecc8(0x202)] < _0x28665a[_0x57ecc8(0x1da)]) {
          var _0x21fcd4 = _0x28665a[this['arrayIndex2']];
          this[_0x57ecc8(0x202)]++, this['manager'][_0x57ecc8(0x214)]['sendData'](_0x21fcd4, 0x0, function () {
            var _0x2b6029 = _0x57ecc8;
            if (_0x42b083['isPrinting'] != !![]) return;
            if (_0x42b083[_0x2b6029(0x202)] == _0x28665a[_0x2b6029(0x1da)]) _0x42b083[_0x2b6029(0x1ad)] = ![], _0x42b083[_0x2b6029(0x1d4)] = setTimeout(function () {
              var _0x2e3207 = _0x2b6029;
              _0x42b083[_0x2e3207(0x174)]();
            }, 0x1f4);else {
              _0x42b083[_0x2b6029(0x1ad)] = !![];
              var _0x57814c = 0x12;
              if (_0x42b083[_0x2b6029(0x1e2)][_0x2b6029(0x1c3)] == _JCAPIErrorCode.default[_0x2b6029(0x208)]) {} else _0x42b083[_0x2b6029(0x1e2)][_0x2b6029(0x1c3)] == _JCAPIErrorCode.default[_0x2b6029(0x1e0)] && _0x42b083[_0x2b6029(0x1e2)][_0x2b6029(0x16a)] == _0x2b6029(0x1c8) && _0x42b083[_0x2b6029(0x1e2)][_0x2b6029(0x1e6)] == ![] && (_0x57814c = 0x8);
              _0x42b083['doSendPictrueDataTimeoutId'] = setTimeout(function () {
                _0x42b083['doSendPictrueData']();
              }, _0x57814c);
            }
          });
        } else this['isSendPictureDataing'] = ![], this[_0x57ecc8(0x1d4)] = setTimeout(function () {
          var _0x52442b = _0x57ecc8;
          _0x42b083[_0x52442b(0x174)]();
        }, 0x1f4);
      } else {
        this['manager'][_0x57ecc8(0x212)] = 0xe4;
        var _0x259263 = _JCDataUntil.default[_0x57ecc8(0x1b9)](0xe3, 0x1);
        this[_0x57ecc8(0x1ad)] = ![], this[_0x57ecc8(0x1e2)]['ble'][_0x57ecc8(0x1e3)](_0x259263, 0xa, function () {
          var _0x4c200e = _0x57ecc8;
          _0x42b083['sendPrintError'](_JCAPIErrorCode.default[_0x4c200e(0x1ee)], this[_0x4c200e(0x205)]);
        });
      }
    }
  }, {
    key: 'recive88Succ',
    value: function recive88Succ(_0x3c4a50) {
      var _0x4bc293 = a0_0x51313f;
      if (this['isSendPictureDataing']) return;
      var _0x2beb79 = this;
      this[_0x4bc293(0x1d4)] > 0x0 && (clearTimeout(this['send86TimeoutId']), this[_0x4bc293(0x1d4)] = 0x0);
      this['b3ReTimeout'] > 0x0 && clearTimeout(this[_0x4bc293(0x21b)]);
      if (_0x3c4a50[0x5] > 0x0) {
        this[_0x4bc293(0x1df)] = _0x3c4a50[0x5], this['doSendPrintOver']();
        return;
      }
      if (this['wantCancel'] && !this['sendCancel']) {
        this[_0x4bc293(0x1ae)] = !![], this[_0x4bc293(0x1e2)][_0x4bc293(0x212)] = 0xd0;
        var _0x164bf8 = _JCDataUntil.default['createData'](0xda, 0x1);
        this[_0x4bc293(0x1e3)](_0x164bf8);
        return;
      }
      if (_0x3c4a50[0x0] == this[_0x4bc293(0x21e)]) {
        if (_0x3c4a50[0x1] == 0x1) {
          this[_0x4bc293(0x21e)]++, this[_0x4bc293(0x202)] = 0x0, this['recive200Row'] = _0x3c4a50[0x0];
          if (this[_0x4bc293(0x21e)] == this[_0x4bc293(0x1b4)][_0x4bc293(0x1da)]) {
            this[_0x4bc293(0x1e2)][_0x4bc293(0x212)] = 0xe4;
            var _0x4d591b = _JCDataUntil.default['createData'](0xe3, 0x1);
            this['isSendPictureDataing'] = ![], this['manager'][_0x4bc293(0x214)][_0x4bc293(0x1e3)](_0x4d591b, 0xa, function () {
              var _0x6c23a9 = _0x4bc293;
              _0x2beb79[_0x6c23a9(0x1a3)](_JCAPIErrorCode.default[_0x6c23a9(0x1ee)], this['printErrorInfoCallback']);
            });
            return;
          }
          if (this[_0x4bc293(0x1a2)] && this[_0x4bc293(0x1a2)][_0x4bc293(0x1da)] > this[_0x4bc293(0x21e)]) {
            if (_0x3c4a50[0x3] < this[_0x4bc293(0x1a2)][this[_0x4bc293(0x21e)]]) {
              this[_0x4bc293(0x198)]();
              return;
            }
          }
          this[_0x4bc293(0x1ad)] = !![], this[_0x4bc293(0x1d6)] = 0xd3, this[_0x4bc293(0x17c)]();
        } else {
          if (_0x3c4a50[0x1] == 0x2) this[_0x4bc293(0x202)] = 0x0, this[_0x4bc293(0x17c)]();else {
            if (this['reciveReject']() == ![]) return;
            this[_0x4bc293(0x1d4)] = setTimeout(function () {
              var _0x252fa5 = _0x4bc293;
              _0x2beb79[_0x252fa5(0x174)]();
            }, 0x1f4);
          }
        }
      } else this[_0x4bc293(0x1d4)] = setTimeout(function () {
        var _0x952cad = _0x4bc293;
        _0x2beb79[_0x952cad(0x174)]();
      }, 0x1f4);
    }
  }, {
    key: 'reciveD3Succ',
    value: function reciveD3Succ(_0x11e2a7) {
      var _0x5c6fed = a0_0x51313f;
      var _0x31059a = _0x11e2a7 >> 0x8,
        _0xcbec04 = _0x11e2a7 & 0xff;
      this[_0x5c6fed(0x1d4)] > 0x0 && (clearTimeout(this[_0x5c6fed(0x1d4)]), this['send86TimeoutId'] = 0x0);
      this[_0x5c6fed(0x21b)] > 0x0 && clearTimeout(this[_0x5c6fed(0x21b)]);
      if (_0x31059a > this[_0x5c6fed(0x1d3)]) {
        if (_0x31059a == (this[_0x5c6fed(0x21e)] + 0x1) * this[_0x5c6fed(0x1e2)]['maxOnceSendRows'] - 0x1 || _0x31059a + 0x1 == this[_0x5c6fed(0x15f)] || this[_0x5c6fed(0x17a)] && this[_0x5c6fed(0x1c7)] == _0x31059a + 0x1) {
          this[_0x5c6fed(0x1d4)] != null && (clearTimeout(this[_0x5c6fed(0x1d4)]), this['send86TimeoutId'] = null);
          this[_0x5c6fed(0x176)] && (clearTimeout(this[_0x5c6fed(0x176)]), this[_0x5c6fed(0x176)] = null);
          if (_0xcbec04 == 0x1) {
            this['arrayIndex1']++, this[_0x5c6fed(0x202)] = 0x0, this[_0x5c6fed(0x1d3)] = _0x31059a;
            if (this[_0x5c6fed(0x21e)] == this['sendDataArray'][_0x5c6fed(0x1da)]) {
              this['manager']['needCMD'] = 0xe4;
              var _0x100a94 = _JCDataUntil.default['createData'](0xe3, 0x1);
              this['isSendPictureDataing'] = ![], this[_0x5c6fed(0x1e2)][_0x5c6fed(0x214)][_0x5c6fed(0x1e3)](_0x100a94, 0xa, function () {
                var _0x1eb1d1 = _0x5c6fed;
                self[_0x1eb1d1(0x1a3)](_JCAPIErrorCode.default[_0x1eb1d1(0x1ee)], this['printErrorInfoCallback']);
              });
              return;
            }
            this[_0x5c6fed(0x1d6)] = 0xd3, this[_0x5c6fed(0x198)]();
          } else {
            if (_0xcbec04 == 0x2) this[_0x5c6fed(0x202)] = 0x0, this['doSendPictrueData']();else {
              if (this[_0x5c6fed(0x1b8)]() == ![]) return;
              this[_0x5c6fed(0x1d4)] = setTimeout(function () {
                var _0x381552 = _0x5c6fed;
                self[_0x381552(0x174)]();
              }, 0x1f4);
            }
          }
        }
      }
    }
  }, {
    key: _a0_0x51313f52,
    value: function value(_0x34295a) {
      var _0x21d412 = a0_0x51313f;
      var _0x89931c = this;
      if (this[_0x21d412(0x1e2)]['needCMD'] == 0xb3) {
        clearTimeout(this['repeatTimeoutId']);
        this['b3ReTimeout'] > 0x0 && clearTimeout(this['b3ReTimeout']);
        _0x34295a[_0x21d412(0x173)] > 0x0 && (this[_0x21d412(0x1df)] = _0x34295a[_0x21d412(0x173)]);
        if (this[_0x21d412(0x1df)] > 0x0) {
          this['doSendPrintOver']();
          return;
        }
        if (this[_0x21d412(0x15a)] == _0x34295a[_0x21d412(0x1d2)]) {
          this[_0x21d412(0x207)]++;
          if (this['reject'] >= 0x3c) {
            this[_0x21d412(0x1a3)](_JCAPIErrorCode.default[_0x21d412(0x210)], this[_0x21d412(0x205)], null), this[_0x21d412(0x18f)]();
            return;
          }
          this[_0x21d412(0x21b)] = setTimeout(function () {
            var _0x3ee133 = _0x21d412;
            _0x89931c[_0x3ee133(0x198)]();
          }, 0x1f4);
        } else this['reject'] = 0x0;
        this[_0x21d412(0x15a)] = _0x34295a[_0x21d412(0x1d2)];
        var _0x4eb257 = _0x34295a[_0x21d412(0x16c)];
        if (_0x4eb257 > this[_0x21d412(0x1b5)]) {
          var _0x227f78 = {
            'count': _0x4eb257
          };
          _0x34295a[_0x21d412(0x1e9)] != null && _0x34295a[_0x21d412(0x1e9)] != undefined && _0x34295a[_0x21d412(0x1e9)] != '' && (_0x227f78['tid'] = _0x34295a[_0x21d412(0x1e9)]), _0x34295a['time'] != null && _0x34295a['time'] != undefined && (_0x227f78[_0x21d412(0x1f5)] = _0x34295a[_0x21d412(0x1f5)]), this['printCountInfoCallback'] && this[_0x21d412(0x1cf)](_0x227f78), this[_0x21d412(0x1b5)] = _0x4eb257;
        }
        if (_0x4eb257 == this[_0x21d412(0x1c9)]) {
          this[_0x21d412(0x18f)]();
          return;
        }
        if (this['wantCancel'] && !this['sendCancel']) {
          this[_0x21d412(0x1ae)] = !![], this[_0x21d412(0x1e2)]['needCMD'] = 0xd0;
          var _0x5d08f1 = _JCDataUntil.default['createData'](0xda, 0x1);
          this[_0x21d412(0x1e3)](_0x5d08f1);
          return;
        }
        if (this[_0x21d412(0x15c)] && this[_0x21d412(0x1ae)] && this[_0x21d412(0x1f1)]) {
          this['doSendPrintOver']();
          return;
        }
        if (this[_0x21d412(0x1d6)] == 0xd3) {
          if (_0x34295a[_0x21d412(0x172)] >= this['manager'][_0x21d412(0x188)]) this[_0x21d412(0x1d6)] = 0x0, this[_0x21d412(0x17c)]();else {
            if (this[_0x21d412(0x21e)] + 0x1 == this[_0x21d412(0x1b4)][_0x21d412(0x1da)]) {
              var _0x419753 = this[_0x21d412(0x15f)] % this[_0x21d412(0x1e2)]['maxOnceSendRows'];
              if (_0x34295a[_0x21d412(0x172)] >= _0x419753) {
                this[_0x21d412(0x17c)]();
                return;
              }
            }
            this['sendSearchPrintPage']();
          }
          return;
        }
        if (this[_0x21d412(0x1d6)] == 0x14) {
          var _0x11fa68 = ![];
          if (this[_0x21d412(0x1e2)][_0x21d412(0x162)][0x1e] > 0x0 || this[_0x21d412(0x1e2)][_0x21d412(0x162)][0x22] > 0x0) this[_0x21d412(0x1a2)] && this[_0x21d412(0x1a2)][_0x21d412(0x1da)] > this[_0x21d412(0x21e)] && _0x34295a['cache'] >= this[_0x21d412(0x1a2)][0x0] && (this[_0x21d412(0x1d6)] = 0x0, _0x11fa68 = !![]), this[_0x21d412(0x17a)] && this[_0x21d412(0x1c7)] == 0x0 && _0x34295a[_0x21d412(0x172)] > 0x0 && (_0x11fa68 = !![]);else {
            if (_0x34295a[_0x21d412(0x172)] >= this[_0x21d412(0x1e2)][_0x21d412(0x188)]) this[_0x21d412(0x1d6)] = 0x0, _0x11fa68 = !![];else {
              if (this[_0x21d412(0x21e)] + 0x1 == this[_0x21d412(0x1b4)][_0x21d412(0x1da)]) {
                var _0x419753 = this[_0x21d412(0x15f)] % this[_0x21d412(0x1e2)][_0x21d412(0x188)];
                _0x34295a[_0x21d412(0x172)] >= _0x419753 && (_0x11fa68 = !![]);
              }
              _0x89931c[_0x21d412(0x17a)] && _0x89931c[_0x21d412(0x1c7)] == 0x0 && _0x34295a[_0x21d412(0x172)] > 0x0 && (_0x11fa68 = !![]);
            }
          }
          if (_0x11fa68) {
            if (this['runCheckCacheAfter14']) {
              this['b3ReTimeout'] > 0x0 && clearTimeout(this[_0x21d412(0x21b)]);
              var _0x30cb53 = this[_0x21d412(0x184)];
              this[_0x21d412(0x184)] = null, _0x30cb53();
            }
            return;
          }
          this[_0x21d412(0x198)]();
          return;
        }
        if (this[_0x21d412(0x1d6)] == 0xe4) {
          this[_0x21d412(0x19a)][_0x21d412(0x1da)] < 0x5 && this[_0x21d412(0x20d)] != null && this[_0x21d412(0x1e2)][_0x21d412(0x1eb)] != !![] && this[_0x21d412(0x20d)]();
          if (this[_0x21d412(0x19a)][_0x21d412(0x1da)] > 0x0) {
            this['cacheDatas'][_0x21d412(0x165)](0x0, 0x1);
            if (this[_0x21d412(0x19a)][_0x21d412(0x1da)] > 0x0) {
              var _0x2f9f71 = this[_0x21d412(0x19a)][0x0];
              _0x2f9f71();
              return;
            }
          }
          this[_0x21d412(0x198)]();
          return;
        }
        if (_0x34295a[_0x21d412(0x172)] >= this[_0x21d412(0x1e2)][_0x21d412(0x188)]) {
          this['cacheDatas'][_0x21d412(0x1da)] < 0x5 && this[_0x21d412(0x20d)] != null && this[_0x21d412(0x1e2)]['isDrawing'] != !![] && this[_0x21d412(0x20d)]();
          if (this[_0x21d412(0x19a)][_0x21d412(0x1da)] > 0x0) {
            this['cacheDatas'][_0x21d412(0x165)](0x0, 0x1);
            if (this['cacheDatas']['length'] > 0x0) {
              var _0x76f31f = this[_0x21d412(0x19a)][0x0];
              _0x76f31f();
              return;
            }
          }
          this[_0x21d412(0x198)]();
        } else this['sendSearchPrintPage']();
      }
    }
  }, {
    key: _a0_0x51313f53,
    value: function value(_0x5e2623) {
      var _0x5b3156 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x31d239 = a0_0x51313f;
      var _0x5a8fb7 = this[_0x31d239(0x1b1)](_0x5e2623),
        _0x594540 = this[_0x31d239(0x1b1)](this[_0x31d239(0x1bd)]),
        _0xec55b4 = 0x0,
        _0x41aea2 = 0x0;
      _0x5b3156 == 0x2 && (_0xec55b4 = Math[_0x31d239(0x1db)](this['paperSpaceBetween'] / 0x2), _0x41aea2 = _0xec55b4);
      if (_0x5a8fb7 <= _0x594540) return {
        'left': 0x0,
        'width': _0x5a8fb7,
        'top': _0xec55b4,
        'bottom': _0x41aea2
      };else {
        var _0x3ab468 = _0x5a8fb7 - _0x594540;
        return {
          'left': Math[_0x31d239(0x177)](_0x3ab468 / 0x2),
          'width': _0x594540,
          'top': _0xec55b4,
          'bottom': _0x41aea2
        };
      }
    }
  }, {
    key: _a0_0x51313f54,
    value: function value() {
      var _0x2d2fe4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x1;
      var _0xec1cc = a0_0x51313f;
      var _0x39fea2 = 0x0,
        _0x4ac90e = 0x0;
      return _0x2d2fe4 == 0x2 && (_0x39fea2 = Math[_0xec1cc(0x1db)](this['paperSpaceBetween'] / 0x2), _0x4ac90e = _0x39fea2), {
        'top': _0x39fea2,
        'bottom': _0x4ac90e
      };
    }
  }, {
    key: _a0_0x51313f55,
    value: function value(_0x33d0bc) {
      var _0x46813b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x1;
      var _0x28f1b6 = a0_0x51313f;
      var _0x426870 = _0x33d0bc,
        _0x4607f0 = this[_0x28f1b6(0x1b1)](this[_0x28f1b6(0x1bd)]),
        _0x3fb8ca = this[_0x28f1b6(0x159)](_0x46813b),
        _0x47eb63 = 0x0,
        _0x51521e = 0x0;
      (0, _typeof2.default)(_0x3fb8ca) == _0x28f1b6(0x182) ? _0x47eb63 = _0x3fb8ca : (_0x47eb63 = _0x3fb8ca[_0x28f1b6(0x1bf)], _0x51521e = _0x3fb8ca['bottom']);
      if (_0x426870 <= _0x4607f0) return {
        'left': 0x0,
        'width': _0x426870,
        'top': _0x47eb63,
        'bottom': _0x51521e
      };else {
        if (this[_0x28f1b6(0x203)] == 0x1) {
          var _0xcd7040 = _0x426870 - _0x4607f0;
          return {
            'left': Math['floor'](_0xcd7040 / 0x2),
            'width': _0x4607f0,
            'top': _0x47eb63,
            'bottom': _0x51521e
          };
        } else {
          if (this['printWay'] == 0x2) {
            var _0x58902d = _0x426870 - _0x4607f0;
            return {
              'left': _0x58902d,
              'width': _0x4607f0,
              'top': _0x47eb63,
              'bottom': _0x51521e
            };
          }
        }
        return {
          'left': 0x0,
          'width': _0x4607f0,
          'top': _0x47eb63,
          'bottom': _0x51521e
        };
      }
    }
  }, {
    key: 'doSend86',
    value: function doSend86() {
      var _0x54324c = a0_0x51313f;
      if (this[_0x54324c(0x1e2)][_0x54324c(0x162)][0x1e] > 0x0 || this[_0x54324c(0x1e2)][_0x54324c(0x162)][0x22] > 0x0) {
        if (this[_0x54324c(0x1e2)]['needCMD'] == 0xd3 || this['manager'][_0x54324c(0x212)] == 0x88) {
          this[_0x54324c(0x1e2)]['needCMD'] = 0x88;
          var _0x36ee70 = _JCDataUntil.default[_0x54324c(0x1b9)](0x89, this[_0x54324c(0x21e)] / 0x100, this[_0x54324c(0x21e)] % 0x100),
            _0x4d9e98 = this;
          this[_0x54324c(0x1e2)][_0x54324c(0x214)][_0x54324c(0x1e3)](_0x36ee70, 0x9, function () {
            var _0x1f7bec = _0x54324c;
            _0x4d9e98[_0x1f7bec(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_TIMEOUT'], _0x4d9e98[_0x1f7bec(0x205)], null);
          });
        }
      } else {
        if (this[_0x54324c(0x1e2)][_0x54324c(0x212)] == 0xd3) {
          var _0x543821 = (this[_0x54324c(0x21e)] + 0x1) * this[_0x54324c(0x1e2)][_0x54324c(0x188)] - 0x1;
          this['arrayIndex1'] + 0x1 == this['sendDataArray'][_0x54324c(0x1da)] && (_0x543821 = this['rows'] - 0x1);
          var _0x31420e = _0x543821 / 0x100,
            _0x3b51e9 = _0x543821 % 0x100;
          this[_0x54324c(0x1e2)][_0x54324c(0x212)] = 0xd3;
          var _0x11ea39 = _JCDataUntil.default['createData'](0x86, _0x31420e, _0x3b51e9, 0x1),
            _0x2bb2c4 = this;
          this[_0x54324c(0x1e2)][_0x54324c(0x214)][_0x54324c(0x1e3)](_0x11ea39, 0x9, function () {
            var _0x18845a = _0x54324c;
            _0x2bb2c4[_0x18845a(0x1a3)](_JCAPIErrorCode.default[_0x18845a(0x1ee)], _0x2bb2c4[_0x18845a(0x205)], null);
          });
        }
      }
    }
  }, {
    key: _a0_0x51313f56,
    value: function value(_0x297951, _0xcce72, _0x49456f, _0x4d5d2f, _0x2b599e) {
      var _0x3094e7 = a0_0x51313f;
      var _0x283219 = this,
        _0x3e2e0c = 0xdc;
      this[_0x3094e7(0x1e2)]['agreement'] == 0x3 && this['manager'][_0x3094e7(0x1aa)] > 0x0 && (_0x3e2e0c = this[_0x3094e7(0x1e2)][_0x3094e7(0x1aa)]);
      if (this[_0x3094e7(0x1e2)][_0x3094e7(0x1c3)] == _JCAPIErrorCode.default[_0x3094e7(0x208)]) {} else this['manager'][_0x3094e7(0x1c3)] == _JCAPIErrorCode.default[_0x3094e7(0x1e0)] && this[_0x3094e7(0x1e2)]['platform'] == _0x3094e7(0x1c8) && this[_0x3094e7(0x1e2)][_0x3094e7(0x1e6)] == ![] && (_0x3e2e0c = 0x14);
      var _0x379225 = null;
      if (this[_0x3094e7(0x1e2)][_0x3094e7(0x162)][0x22] > 0x0) _0x379225 = _JCDataUntil.default[_0x3094e7(0x161)](_0x297951, this[_0x3094e7(0x1a9)], {
        'left': 0x0,
        'rifht': 0x0
      }, _0x3e2e0c, _0x49456f, this[_0x3094e7(0x1e2)][_0x3094e7(0x162)][0x23], this[_0x3094e7(0x1e2)][_0x3094e7(0x1d5)]);else this[_0x3094e7(0x1e2)]['printerInfos'][0x1e] > 0x0 ? _0x379225 = _JCDataUntil.default['compareImageDataWithZip'](_0x297951, this[_0x3094e7(0x1a9)], {
        'left': 0x0,
        'rifht': 0x0
      }, _0x3e2e0c, _0x49456f, this[_0x3094e7(0x1a8)], this[_0x3094e7(0x1e2)][_0x3094e7(0x162)][0x1e]) : _0x379225 = _JCDataUntil.default[_0x3094e7(0x1fb)](_0x297951, this[_0x3094e7(0x1a9)], {
        'left': 0x0,
        'rifht': 0x0
      }, _0x3e2e0c, _0x49456f, this[_0x3094e7(0x1a8)], this[_0x3094e7(0x1e2)]['maxOnceSendRows']);
      var _0x578efe = _0x379225['0'];
      this[_0x3094e7(0x1fa)] += _0xcce72;
      if (_0x578efe != null && _0x578efe['length'] > 0x0) {
        var _0x314f78 = {};
        _0x314f78[_0x3094e7(0x1a1)] = _0x297951['width'], _0x314f78[_0x3094e7(0x1fd)] = _0x297951[_0x3094e7(0x1fd)], _0x314f78[_0x3094e7(0x1a2)] = _0x379225['3'];
        _0x49456f % 0xb4 != 0x0 && (_0x314f78[_0x3094e7(0x1a1)] = _0x297951[_0x3094e7(0x1fd)], _0x314f78[_0x3094e7(0x1fd)] = _0x297951['width']);
        var _0x2c6825 = ![];
        if (this[_0x3094e7(0x1a8)] != null) {
          var _0x463b73 = _0x379225['2'];
          if (this['manager']['printerInfos'][0x22] > 0x0) this[_0x3094e7(0x17a)] = ![];else this['manager'][_0x3094e7(0x162)][0x1e] > 0x0 ? (_0x463b73 != null && _0x463b73 > 0x0 && (_0x2c6825 = _0x314f78['height'] + _0x463b73 < this[_0x3094e7(0x1e2)][_0x3094e7(0x1d5)]), this[_0x3094e7(0x17a)] = _0x2c6825, _0x2c6825 && (_0x578efe = _0x379225['1'], _0x314f78[_0x3094e7(0x1fd)] = _0x379225['2'])) : (_0x463b73 != null && _0x463b73 >= 0x0 && (_0x2c6825 = _0x314f78[_0x3094e7(0x1fd)] + _0x463b73 < this[_0x3094e7(0x1e2)]['maxCacheRows']), this[_0x3094e7(0x17a)] = _0x2c6825, _0x2c6825 && (_0x578efe = _0x379225['1']));
        }
        this[_0x3094e7(0x1a8)] = _0x297951, _0x314f78[_0x3094e7(0x1a7)] = _0x578efe, _0x314f78[_0x3094e7(0x16c)] = _0xcce72;
        var _0x4986b0 = function _0x4986b0() {
          var _0x4b7030 = _0x3094e7;
          _0x283219[_0x4b7030(0x193)] = _0x314f78['width'], _0x283219[_0x4b7030(0x15f)] = _0x314f78[_0x4b7030(0x1fd)], _0x283219[_0x4b7030(0x1b4)] = _0x314f78[_0x4b7030(0x1a7)], _0x283219[_0x4b7030(0x17d)] = _0x314f78[_0x4b7030(0x16c)];
          (_0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x162)][0x1e] > 0x0 || _0x283219[_0x4b7030(0x1e2)]['printerInfos'][0x22] > 0x0) && (_0x283219['zipRows'] = _0x314f78['zipRows']);
          if (_0x2b599e) {
            var _0x2dd2e6 = _0x2b599e[_0x4b7030(0x15d)],
              _0x405ba7 = _0x2b599e['hasDash'];
            _0x2dd2e6 ? _0x283219[_0x4b7030(0x15d)] = _0x2dd2e6 : _0x283219[_0x4b7030(0x15d)] = null, _0x405ba7 != null ? _0x283219[_0x4b7030(0x1ac)] = _0x405ba7 : _0x283219[_0x4b7030(0x1ac)] = null;
          } else _0x283219[_0x4b7030(0x15d)] = null, _0x283219['hasDash'] = null;
          if (_0x283219[_0x4b7030(0x17f)]) {
            var _0x4d92d8 = _JCDataUntil.default[_0x4b7030(0x1b9)](0x3, 0x1);
            _0x283219['manager'][_0x4b7030(0x212)] = 0x4;
            if (_0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x1a0)] == 0x3) {
              _0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x212)] = 0x14;
              var _0x586ada = _0x314f78[_0x4b7030(0x1fd)] >= _0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x1d5)] ? 0x1 : _0xcce72;
              _0x283219[_0x4b7030(0x17a)] = _0x2c6825;
              if (_0x2c6825) {
                var _0xc2a51d = _0x379225['2'];
                _0x283219['diffRowCount'] = _0xc2a51d, _0x4d92d8 = _JCDataUntil.default[_0x4b7030(0x1b9)](0x13, _0x283219[_0x4b7030(0x15f)] / 0x100, _0x283219[_0x4b7030(0x15f)] % 0x100, _0x283219[_0x4b7030(0x193)] / 0x100, _0x283219[_0x4b7030(0x193)] % 0x100, _0x586ada / 0x100, _0x586ada % 0x100, 0x0, 0x0, 0x0, 0x0, 0x2, _0xc2a51d / 0x100, _0xc2a51d % 0x100);
              } else _0x283219['manager'][_0x4b7030(0x162)][0x22] > 0x0 ? _0x4d92d8 = _JCDataUntil.default[_0x4b7030(0x1b9)](0x13, _0x283219[_0x4b7030(0x15f)] / 0x100, _0x283219[_0x4b7030(0x15f)] % 0x100, _0x283219[_0x4b7030(0x193)] / 0x100, _0x283219[_0x4b7030(0x193)] % 0x100, _0x586ada / 0x100, _0x586ada % 0x100, 0x0, 0x0, 0x0, 0x0, 0x0) : _0x4d92d8 = _JCDataUntil.default[_0x4b7030(0x1b9)](0x13, _0x283219[_0x4b7030(0x15f)] / 0x100, _0x283219[_0x4b7030(0x15f)] % 0x100, _0x283219['cols'] / 0x100, _0x283219[_0x4b7030(0x193)] % 0x100, _0x586ada / 0x100, _0x586ada % 0x100, 0x0, 0x0, 0x0, 0x0, 0x1);
            }
            _0x283219[_0x4b7030(0x1ec)] = 0x1, _0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x214)][_0x4b7030(0x1e3)](_0x4d92d8, 0xa, function () {
              var _0x2ab38c = _0x4b7030;
              _0x283219['sendPrintError'](_JCAPIErrorCode.default[_0x2ab38c(0x1ee)], this[_0x2ab38c(0x205)]);
            });
          } else {
            var _0x3828eb = _JCDataUntil.default[_0x4b7030(0x1b9)](0x1, 0x1);
            if (_0x283219[_0x4b7030(0x1e2)]['agreement'] == 0x3) {
              var _0x5ef362 = 0x0;
              _0x2b599e != null && _0x2b599e['speedOrQuality'] != null && _0x2b599e[_0x4b7030(0x1f4)] == 0x1 && (_0x5ef362 = 0x1), _0x283219[_0x4b7030(0x1e2)]['printerInfos'][0x1e] > 0x0 || _0x283219['manager'][_0x4b7030(0x162)][0x22] > 0x0 ? _0x3828eb = _JCDataUntil.default[_0x4b7030(0x1b9)](0x1, _0x283219[_0x4b7030(0x1c9)] / 0x100, _0x283219[_0x4b7030(0x1c9)] % 0x100, 0x0, 0x0, 0x0, 0x1, 0x0, _0x5ef362) : _0x3828eb = _JCDataUntil.default[_0x4b7030(0x1b9)](0x1, _0x283219[_0x4b7030(0x1c9)] / 0x100, _0x283219[_0x4b7030(0x1c9)] % 0x100, 0x0, 0x0, 0x0, 0x0, 0x0, _0x5ef362);
            }
            _0x283219[_0x4b7030(0x1e2)]['needCMD'] = 0x2, _0x283219[_0x4b7030(0x1e2)][_0x4b7030(0x214)][_0x4b7030(0x1e3)](_0x3828eb, 0xa, function () {
              var _0x536d6b = _0x4b7030;
              _0x283219['sendPrintError'](_JCAPIErrorCode.default[_0x536d6b(0x1ee)], this[_0x536d6b(0x205)]);
            });
          }
        };
        if (_0x314f78[_0x3094e7(0x1fd)] >= this[_0x3094e7(0x1e2)][_0x3094e7(0x1d5)]) {
          var _0xff121a = _0xcce72;
          while (_0xff121a > 0x0) {
            _0xff121a--, this[_0x3094e7(0x19a)][_0x3094e7(0x15e)](_0x4986b0);
          }
        } else this[_0x3094e7(0x19a)][_0x3094e7(0x15e)](_0x4986b0);
        if (this[_0x3094e7(0x19a)][_0x3094e7(0x1da)] >= 0x5) {
          this[_0x3094e7(0x20d)] = _0x4d5d2f;
          if (!this[_0x3094e7(0x17f)]) {
            var _0x1d777a = this[_0x3094e7(0x19a)][0x0];
            _0x1d777a();
          }
        } else {
          if (this[_0x3094e7(0x1fa)] == this[_0x3094e7(0x1c9)]) {
            if (!this[_0x3094e7(0x17f)]) {
              var _0x47d492 = this[_0x3094e7(0x19a)][0x0];
              _0x47d492();
            }
          } else {
            if (this[_0x3094e7(0x17f)] == !![]) return;
            _0x4d5d2f && this[_0x3094e7(0x1e2)]['isDrawing'] != !![] && _0x4d5d2f();
          }
        }
      } else this[_0x3094e7(0x193)] = 0x0, this[_0x3094e7(0x15f)] = 0x0, this[_0x3094e7(0x1b4)] = [], this[_0x3094e7(0x1e2)][_0x3094e7(0x19d)] = ![], this[_0x3094e7(0x1a3)](_JCAPIErrorCode.default['JCSDK_PRINT_ERR_GetDATA'], this[_0x3094e7(0x205)], null);
    }
  }]);
  return SAutoPrinter;
}(QPrinterBase, a0_0x51313f(0x1ef), a0_0x51313f(0x19b), a0_0x51313f(0x159), a0_0x51313f(0x1b0), a0_0x51313f(0x217));
var _default = {
  'B3SPrinter': B3SPrinter,
  'B16Printer': B16Printer,
  'B101Printer': B101Printer,
  'B21Printer': B21Printer,
  'QB21Printer': QB21Printer,
  'QB32Printer': QB32Printer,
  'QB3SPrinter': QB3SPrinter,
  'QB1Printer': QB1Printer,
  'QB203Printer': QB203Printer,
  'QB32RPrinter': QB32RPrinter,
  'QB16Printer': QB16Printer,
  'QK1Printer': QK1Printer,
  'QAutoPrinter': QAutoPrinter,
  'SAutoPrinter': SAutoPrinter,
  'QB3SPPrinter': QB3SPPrinter
};
exports.default = _default;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 190:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 191:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 192);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 192:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 193:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (!res) {
          resolve(res);
          return;
        }
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|__f__|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|rpx2px|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _Object$assign = Object.assign({}, wx.getWindowInfo(), {
      platform: wx.getDeviceInfo().platform
    }),
    windowWidth = _Object$assign.windowWidth,
    pixelRatio = _Object$assign.pixelRatio,
    platform = _Object$assign.platform; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
function getLocaleLanguage() {
  var localeLanguage = '';
  {
    var appBaseInfo = wx.getAppBaseInfo();
    var language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
var locale;
{
  locale = getLocaleLanguage();
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return getLocaleLanguage();
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  rpx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = (language || '').replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "wxda8dce2c465f8f12",
    appName: "九点荟库存管理",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.57",
    uniCompilerVersion: "4.57",
    uniRuntimeVersion: "4.57",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined,
    isUniAppX: false
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = (language || '').replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "wxda8dce2c465f8f12",
      appName: "九点荟库存管理",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      isUniAppX: false,
      uniPlatform: undefined || "mp-weixin",
      uniCompileVersion: "4.57",
      uniCompilerVersion: "4.57",
      uniRuntimeVersion: "4.57"
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
function __f__(type) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  console[type].apply(console, args);
}
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback,
  __f__: __f__
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"九点荟库存管理","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, getLocaleLanguage$1());
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function getLocaleLanguage$1() {
  var localeLanguage = '';
  {
    var appBaseInfo = wx.getAppBaseInfo();
    var language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 233:
/*!***************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/static/img/Invitation.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHCAkIBgoJCAkMCwoMDxoRDw4ODx8WGBMaJSEnJiQhJCMpLjsyKSw4LCMkM0Y0OD0/QkNCKDFITUhATTtBQj//2wBDAQsMDA8NDx4RER4/KiQqPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz//wgARCAN4BDgDAREAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAEDBAUGBwL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUG/9oADAMBAAIQAxAAAADnfLdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfUub39ff2a6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBXlwXP2NarIAAAAAAAAAAAAAAAAAAAD6l3bvaHI7VQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGPGekcHf0NaygAAAAAAAAAAAAAAAAAAHO9DX7Z2dMa9dkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsWV04zWt6L5/oZEAAAAAAAAAAAAAAAAAAAds7OnzvQ19euzNnh9TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENeuzZsr+YeVeZ7G7jhUAAAAAAAAAAAAAAAAAADtvZ0+c6GvrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2VjyLzHa5LGr6QAAAAAAAAEkAAAAAAAAAO29nT5zoa+tXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPIfMdrk8avpAAAAAAAAA5DranH8nbAAAAAAAAA7b2dPnOhr61dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8h8z2uTwq+kAAAAAAAAfVmPZPS83geDv6+paAAAAAAAAO29nT5zoa+tXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPIPMdrlMavpAAAAAAAAHLd/Q5vaq4/DLgfPdD4qyAAAAAAAHH4b3cO1z+09Lm61dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8S8t6fsEc/JOAAAAAAAA3+tqcv09blDTOMos4Xz+/MZAAAAAAHG4b/GV9H0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrt7COcs5H1OIAAAAAA2d+jmu1pbxvmuaZxWndxHD3kAAAAABq47PCVdYn0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1Vu9lqcxbywAAAAAM23VzXd0N+W2bZhNY0zidC/i+LugAAAARPA09nDFw9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbTnbePsZUAAAAAZdivme/ob+UbhsGY+DCaxpnEc/Y43jbgAAAA1cdnhKuuB6J3vPdq6XM1q7NmysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrs2bKx4V5T12aq2p3ctPmLeWAAAAMl+HM9/Q388dw2DKfZD4MJrGmcTz9jjONuAAAAcXX0eOw3wPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1P2w7DfwqAAADJsV8z3tHfzx2zZMp9H0QhjMRrGmcVo38Xxd1AAADhautqY7QHone892rpczWrs2bKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANauzZsrHhXlPXZqrakdiu4X3OAAAGbaq5ju6O9lG2bBlPspQQhjMRrGocbq28Rwt6YyAAODp7GtGwB6J3vPdq6XM1q7NmysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrs2bKx4V5T12aq2pHYLuHlmsAAbG9RzHa092Y2zYMh9lKACEPgwmuapx9OfD8Lex05gAcHT2NaNgD0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSOwXcPLNYAhvdTV5Xq6u6bRnMp9FKAACEPgxGA1TSwnhuLu6+ncAODp7GtGwB6J3vPdq6XM1q7NmysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrs2bKx4V5T12aq2pHYLuHlmsC5RyXa0+S3aNs2jOZD6KUAAAEIfJiMBrGocVzNrj+VtIDg6exrRsAeid7z3aulzNauzZsrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1q7NmyseFeU9dmqtqR2C7h5ZrGTYw5Xt6O/dhtmwZz7PsoAAAABCHyYzEaxqnH61nE8Xd+Kc+Dp7GtGwB6J3vPdq6XM1q7NmysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrs2bKx4V5T12aq2pHYLuHlmvb6WtyvW1dyY2TYMx9n0UAAAAAAEPk+DEa5rGnjPFcnb6vyfQa2OwB6J3vPdq6XM1q7NmysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrs2bKx4V5T12aq2pHY9zgcv2ufyG1VtmwZzKfZSgAAAAAAAhD4MZhNY1jofm/T8dp7oHone892rpczWrs2bKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANauzZsrHhXlPXZqrakd89T5Lk76NozmYyH0UoAAAAAAAAIQ+T4MRgPOfN+n4rT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9K9V5Hk7qcxlPs+gUAAAAAAAAAAh8nyYzzLzfp+H090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPVfVeR5G6n7PspQAAAAAAAAAAAQh8nl/m/T8Lp7oHone892rpczWrs2bKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANauzZsrHhXlPXZqraket+q8jyF1P0CgAAAAAAAAAAAAEPLfN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9f9V5HeupoAAAAAAAAAAAAAAPLPN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9g9V5HeupAAAAAAAAAAAAAAA8s836fhNPdA9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbUj2D1Xkd66kAAAAAAAAAAAAAADyzzfp+E090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPYPVeR3rqQAAAAAAAAAAAAAAPLPN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9g9V5HeupAAAAAAAAAAAAAAA8s836fhNPdA9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbUj2D1Xkd66kAAAAAAAAAAAAAADyzzfp+E090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPYPVeR3rqQAAAAAAAAAAAAAAPLPN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9g9V5HeupAAAAAAAAAAAAAAA8s836fhNPdA9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbUj2D1Xkd66kAAAAAAAAAAAAAADyzzfp+E090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPYPVeR3rqQAAAAAAAAAAAAAAPLPN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9g9V5HeupAAAAAAAAAAAAAAA8s836fhNPdA9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbUj2D1Xkd66kAAAAAAAAAAAAAADyzzfp+E090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPYPVeR3rqQAAAAAAAAAAAAAAPLPN+n4TT3QPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1dmzZWPCvKeuzVW1I9g9V5HeupAAAAAAAAAAAAAAA8s836fhNPdA9E73nu1dLma1dmzZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrV2bNlY8K8p67NVbUj2D1Xkd66kAAAAAAAAAAAAAADyzzfp+E090D0Tvee7V0uZrV2bNlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtXZs2Vjwrynrs1VtSPYPVeR3rqQAAAAAAAAAAAAAAPLfN+m4PT3gPRO957tXS5mtXZs2VgAAAAAAAAAAAAAAAAAAAAAQAoAAAAAAAAAAAAAAAAABD5wn5xykTgrzy5YjzTid1Vbhxz1sbPVPTeX3rqQAAAAAAAAAAAAAAOP5+1r024sZ+U7FleWcYlACzH1lH3Zjltwy21/ecAAAAAAAAAAAAAAAAQBIQELIgCgAAAAAAAAAAAAAHxhOKqzFVnjry+cMoAAAADc3KNjYqAAAAAAAAAAAAAAHH62xr6d2ScQAAAAABlsxz7FWe+qyAAAAAAAAAAAAAECUIQAAFBRMCgAAAAAAAAAAA+YnBr2YNe3HXkkAAAAAAMWU8t0NP7ygAAAAAAAAAAAAAcNo7nnXl/Sd17HF5Xa1QAAAAABQfWUbGxVn2avqYAAAAAAAAAAAAhIkQkTCFgEgLMUpUJUAAAAAAAAAAkNbWu1ta6QAAEidbCzWwsw454oy+YkfUxknHLlhs54da5nS+cno/qfNgAAAAAAAAAAAADovnu71nk9TBbMzjLlj9zCHyn5ifmJifqYyzjs5171lPJ363MX6m3ZUErMfUxsbNWe+qyAAAAAAAAAAgTIQ+YmRNLEUkgAIJfUxSiYoAAAAAAAABiqz09LY+MZAGrXbxNG1xdG1x1V+lXd8RIhACAiSNiqMuMerex8ntXVAAAAAAAAAAAAAdD853ut8vp69s48pAFBQUoLKg5K3W7Bt6HPbejknGysx9Z47OzVltwAAAAAAAAAgTIfMT8xKFglx9F/Bae9x9F/xGWzZVy+1qc9uaX3liPlP1MWYpZigAAAAAAAGvr26mnfAY8cuB1d7gdXf46q+ETBCEBACAgNiqMuMeqew8puX0gAAAAAAAAAAAAdD853ut8vp69s48pAJIpQWVgLIipqKZssex7nO7Ju83PnhZWYyWYZ9mr7ygAAAAAAACEifiJ+Im4zYjjqNjonH7fB6m8AAM+dfcuryO4dTk2Y+U2Y+pj6ExQAAAAAAfGE6mpsYacx8Y5dd1Oh1vT6WHHKEIRMgIQEBACA2Koy4x6p7Dym5fSAAAAAAAAAAAAB0Pzne63y+nr2zjyyIBNQKCyFgLKlRSgzZY9m3uZ2Te5uTLGysxltwzXV/WUAAAAAACEifiJ+Iylc/SOuaPQ8+4ve+IyAAAA5vb0vSe/wCdzZYfEz9TH1MfUiKAAAAASGtrXa2tdIDj6djp3O7GnXdCEIRMIQQgICAEBsVRlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PXunHORAApQUFBZVFKClKbVlXbOjyed29GyTFmMtuGW3D6ygAAAACEifmJxxl8V5fWLg9Tc834foYmoy5Y9r3eZzmxp5Jx08LuA1d3rerv/MZDmtvS9O9B5tL5lkmPqYsxQAAACGGizW1bvjDIQ4PV3uo8/r/ESIQ+QQiYSAgICAAhsVRlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PXtnHlkQBQUFBQUsxQUpSlKcrs6nb+nx966iiYsvvPHJZh92Y0AAAET8w+McsOOSnLHhl5VwPTa2FuxnX9THfulxOSu1wAOPp2PP+Z29XC0d56/E7h1OTjT9ZRkyj6RZgAACGKrPX1rsdeSJkNXC3qnP6vEa+3EwhCEICJhBCEBACAGxVGXGPVPYeU3L6QAAAAAAAAAAAAOh+c73W+X09e6cc5EACgoKUSsLMClKUpQVH1LsG7z+0dHlbNlVEhZj7sxyZ4/WeNAAPlPzjOLHLDVn9VT1Ln9TpfN7H1Mdh29Djqdj0nq+fkggkNOu3Djn53yu9jjLPnX696bylmPnJlyx+pj6mKACQxVZ4KLfjDKYzD4xy67pdHrmn0seMxMIQhCEImQEICAgBADYqjLjHqnsPKbl9IAAAAAAAAAAAAHQ/Od7rfL6evdOOciABQUFBSiVRSlKUFRSysPvKOf3ef2Tf5m5bSkLIEfeWP1nH1lj9ZQlInHGWHDPHr53CfMuL6Ljadjs+5zeGo2x6Z1vPJDhNfc5e7VyZYyJ6zq9DDXn1LS6g9H7nnuwbuhhnLLnhlyx+pVEPnDLFVniqzmMyEifmJ4XU3usaPU1sLJCJhCEIQhEwgJCAgIAQBOxVjlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PXunFM1JAFBQUFlYCzFKUFKUpUCll9HL7Wn2De53L7WlZWQIJBFmEvhOHHNTl84T5NwvTxPo3W4HnXK70ie37/K7Nt8/jKdjovO7Po3V4G5ZVYdC53a7jvcrzDj+jHcenyO7dXja855csfuYQmE/GGUiZBEyHzE8Rq7nWdDqaNV8hCEImEB8kIEwhICAhAAmIBOxVjlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PXunFM1JAAoKUFEqVFBSlKUoKVFlSgz54c1t6PM7mjymzq/U4kggfETjxywYWZMI1sLPLuL6SHqnZ815xyu/p13CFMuWHqnZ83Ziw8y5XofS+r5/wAr4vpMUZ9n3+b33r8PSpu+pZcsPuYqAiYfGOXCae913R6WlVeISEIQiYQhCETCCEICAgATEAnYqxy4x6p7Dym5fSAAAAAAAAAAAAB0Pzne63y+nr3TimRUkAUFBQUshSopSlBSlRSyoKUFMmWPJ7Grymzqcjs6u/fr/c4/MTixywYWfdbDjl5ZxfSj0zr+d4anb6ZzuuAO5dDk9o3OaMeOXl/I9H6n2PN+VcX0uOMu1b/M711+JoU3/aMuWGTKKiRPHa+zwupv8Jp72HHMQhASETCEIQhCJhBCEBAQAgATsVY5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT17pxTIqSAKCgoLJClmKClKUpSiYsLKlBSgoKWY3Lady6jYtpy5Ycpbq7GVflfF9Lhxz7jv8ntO5zet6vQ63qb9OybfP7HtaCQ6zqdHiNfa7bu8zzXk+gHeOrxe2dHl8dRsWGHCzTpv4+jZ4vW28GFkBCAhIQhCJhCEIQiRCQEBCABMQCRsVY5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1rZx5ZECpIAoKUAsrCyIpSlKUFKWYpQUpQUAqCUpCHYd3m9j3eb0TmdngNbezZ4eldXz+1ZUgEgNOu7zjld70HqcPrmn0OtanQHqXf8zmmPP+H6L5xyoAICAhCCElImEIQhCEImCEICAgBAEgbFWOXGPVPYeU3L6QAAAAAAAAAAAAOh+c73W+X09a2ceWQIFSQKCgolYCyqKUFKUpSosrBKlKCgoBUEwht2U956vA4qna865XeG3ZV3no8blrtVIIcJRudL5/X7jv8AJyI6BzO3E81s6fpHb8/1vQ6fVeZ1vooBACEBCQhCETCEIQHylCEkhCAEATEAkDYqxy4x6p7Dym5fSAAAAAAAAAAAAB0Pzne63y+nrWzjyyBAFBQUAskKWQqKUpSlBSopZUFKCgoBURMIdx6XF5S/U6Nzuz17V3/qY3rKPuY2s6xpV28jbR2rd5vFUbPTNDrfEZfc4+m9zzm/bT57w/R69dtKAQEICEBIQiYQhCEIRMgICEBEkCABIGxVjlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PVty+MpAIFAKAUoKCypQilKUpSoSsLKlBSgFACCYbNlXeOpwYee8vu8XTs1HNbGnyFtO3nVmyw0Kr+A1t3RrvFR3/AK3D7DuaHVud1et6HU+gUgBAQhBCEImEIQhARMJCSQgICAJIgSANirHLjHqnsPKbl9IAAAAAAAAAAAAHQ/Od7rfL6erbl8ZSACCagUAoKCyQsqilKUoKVFTZiwolSgoBQAD5OW2NPt3R4/xE9K5/X69q74AAA2c6+99Tic3tafD6u70zldulAAICEBCA+YRIhCEIRMJAQEICAAgCQBsVY5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1bcvjKQAQKAUFAKWQpQilKUpShFKWVBSgoBQAQhy2xp9s6HI+8seKo2us6fQ4ajbw45io5C2jsO3o9m3edmyw4TV3uo83sImgAEBCAhICETCEIQhEiEhJIQgBAExAJAA2KscuMeqew8puX0gAAAAAAAAAAAAdD853ut8vp6tuXxlIAIFSQAKUFBQWVRSgpSlKUqBSyFBSgFABCGzZV2je5XKX6qYJwYZ/CdjKv7yio18bOsaHV4XV3fooABAQgIIQiYiJhCEBCETIQEBAQAgASABsVY5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1bcvjKQACKkgAUFBQUSpUUpQUpSlRZClBSgoBQAQhDcsp5fZ0+Qu1tjOv6Rhxz0q7+L19ritfbiaUAAgIQEEIQhEiEIQhCJghJIQgIAQAJABETs1Y5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1bcvjKQACBUkACgpQClkKilKUpQVFKUSpQCgoKAQEBACAoKAUAgBAQghCBPyCEIQgImEhJIQEBACAJAAiCdmrHLjHqnsPKbl9IAAAAAAAAAAAAHQ/Od7rfL6erbl8ZSAACBUkAmoFALKgpUClKUpSgqLKwSoKCgoBQCAEAABQACAgICAkICJhCEICEImAkBCAgAIAkAiAJ2ascuMeqew8puX0gAAAAAAAAAAAAdD853ut8vp6tuXxlIAAIAoAKAUoLJCyqKClKUpShFEqUFBQUAAAAAAAAgBAQEEJKQETCEBCEImEgICAgIAmIAJERSAJ2ascuMeqew8puX0gAAAAAAAAAAAAdD853ut8vp6tuXxlIAAAIFSQSRQUFBQWVRSgpSlKCoolYJUoKACgAAAAAgBACAkBCSRMIQEIQhAmEhJIQEBAAmIBIEQASNmrHLjHqnsPKbl9IAAAAAAAAAAAAHQ/Od7rfL6erbl8ZSAAACBUkACgoKJWFEqilBSlKUIpZIUSoKAUAFIUEAABACAgBIQSkTCAhCEBEwghCAEBAExABIIgASNmrHLjHqnsPKbl9IAAAAAAAAAAAAHQ/Od7rfL6erbl8ZSAICgBAqQQBQUFBZWCVKigpSlBUUFBSyAoAKAAACAAgBBCAkkImEBCEICETBCSQgICAEACQCIAEjZqxy4x6p7Dym5fSAAAAAAAAAAAAB0Pzne63y+nq25Y8poIAUABFSCAKAUFkhSyFRSgpSlBUCpoRRKgAoAAAAIAQQSggIQJhAQhCAhEyAgICAiSATEAkAEQBIGzVjlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PUty+MpoIAUABAFSQBQUFBRKgpUUFKUFBSoFkhZIJUAAAAAEEBBJCBMICAhCAhCJQhJIQEBAAmIBIAiAASBs1Y5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1LcvjKQABQAAgAmoAoKCgSpQVFKClBSgqBRKwAskEgAAAgkIIJSBMQTAQgIQEImAkJJAQgBAExABIBEASABs1Y5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1LcvjKQABQAAEAE1AFBQCgpZIWYoKUFBSgoRQUAAoAIJIJIQAgTAQEBCEBCJQhACAgIAQAJAEQCQABs1Y5cY9U9h5TcvpAAAAAAAAAAAAA6H5zvdb5fT1LcvjKQAAKAAAgUAAoKCgFkKUFRQUoKUAoKgkgE2YQAEkgAIEwEBAQgICEShCAEBAQAJiACQIAAAAbNWOXGPVPYeU3L6QAAAAAAAAAAAAOh+c73W+X09S3L4ykAACgEKAEAVJAFBQCgolSoFBSgoKCgFCAKkAgCBIgBAQEBAQiRASEAICAgATEAEgRAJAAAGzVjlxj1T2HlNy+kAAAAAAAAAAAADofnO91vl9PUty+MpAAAFIAUAIFSCAKCgFBZClBUCgoKCgFABQACAAgBAQEBARIgISAgBAQAJiACQCIEgAAAbNWOXGPVPYeU3L6QAAAAAAAAAAAAOh+c73W+X09W3LHlIAAAAAoACKEggCgFBQUFkKEUFBQUAoAAKCAAEAICAgIEwEEICAEBAAExAJAIgSAAAANunD7h6p7Dym5fSAAAAAAAAAAAAB0Xz3d6zyeprWTizyAAAAAAqCQQBUkACgFBQUAshQigoBQCgAAAAAgBAQECRAQEEIAQEACYikCQCBAkAAACxG7TiPWPZ+S2LKwAAAAAAAAAAAAOq8fq9J4HcxZTrW5AAAAAAEUJBAFSCABQUAoKJUAoRQCgAoAAABAAQAgCYCCEkgIAQEACYgAkAEQJAAAAGxXjmwjbup9V9j5QAAAAAAAAAAAAAadF3lnj/VROpbl8ZSAAAAACBUgAgUAAoBQCgFEhQUBAoABQACAAAgSQTAQCEAICAgSQCYgAkARABIAAAGXDHZrgdu7XH7l3eMAAAAAAAAAAAAAB0jgdvq3H60Na3LHlIAAAAAIqQACAKkgACgoBQJWCQoBQgkgkigAAESABACCEkgBACAESQCYgAEgRABIAAAsRmwjPhA27qfTvW+Xz2YAAAAAAAAAAAAAAfGM+e+Z9FwmhvD4ljykAAAAAAAAAUAAApCgApJUQSAApCgAAAAEAAAEJJAAACAAAgAAAAAAAB9QyYxQbFlXo3qfOcltawAAAAAAAAAAAAAAHzE9T43W6pxutgrsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+pjsHS53c+9xdu6oAAAAAAAAAAAAAAAAfGM8Vp7epTdIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYtr5Tc1diysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//EAEwQAAECAgIKDQoFBAICAwEAAAECAwAEBVMGEBESFjE1krLSEyAyM0BBUWJxc3ST0RQhIjRQYGGBobEHMDZSgkJykcEVVCMlJEOAsP/aAAgBAQABPwD/APobNoW6sIbSVKOIAXSYlLGn3AFTLoZ5o9IwLGJPjef+nhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhGDMlWv5w8IwZkq1/OHhD9i6ccvMnoWInZCZkV3H27gOJQ84PsptCnXEobBUtRuARRFFt0exiCn1btf+h7uPMtvtKaeQFoVjBimKOVR03e42V+dCvZNisqHJtyYViaFxPSbapglZRLt7KpOM3biR0mL2drWE/DYir63wi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeTtex3B14vJ2vY7g68Xk7XsdwdeLydr2O4OvF5O17HcHXi8na9juDrxeztcx3J1oEwtogTLd4D/Wk3U/Pkt0/Kiaod797Y2RHSIbXfD2RYnk108rp+wtTKlFSGG1XqnMZHEkYz9hCEJbQEIFxIxD3YIBBBF0GGLrL5lybqCL5vo4x8rSkhaCk4iLhiUcuiB7HsTyW71x0RaT56Td5rKPqVeA92pnzTUoeVwp+V4o/6tyZhOLgZBSSDjHBLE8lu9cdEWkZTf6lv7r92pr1iT646C7cnCcXA6RlsbqP5cEsTyW71x0RaRlN/qW/uv3amvWJPrjoLtycJxcCabLrgSmHm4nJcsOXRuDi4HYnkt3rjoptIym/1Lf3X7tTXrEn1x0F25OE4uAgXYkpa8TdO6OOHW4mmA4gpUIeaUy4UK4DOT4RdbZ86uNXJFgBKqDf7SrRTaRlN/qW/uv3amvWJPrjoLtyUyWVC750wytLjYUg3QeAyEt/9ih0Qy3DiIdbidlQ6gjjGIwtJQopULhH59ITly6y0f7ja/D3IL/aToptIym/1Lf3X7tTXrEn1x0F224k5lUuvlQcYhC0uIC0G6D+fJy5dVfKHoj6wy1DTcLTDiIdbielNkF8ndiCCCQfzZ6Y2Bn0d2rFb/D3IL/aToptIym/1Lf3X7tTXrEn1x0F224EUbM7G5sSz6CvofzpZgvL5oxww0AAAIabhtEEQtMOIh1uJ6Tvrq0D0x9fzZt4vzCl8WJPRb/D3IL/AGk6KbSMpv8AUt/dfu1NesSfXHQXbbgWpJ7Z5YE7oeY/mS7JeXcGLjMS7ASkBI8whpuG0QhMEQRC0w43DrUT0ndurbHpcY5fy6Qc2OUVyq9EbT8Pcgv9pOim0jKb/Ut/dfu1NesSfXHQXbbgWqLdvJgo4lj8thlTy7gxcZiWYCEgJENNw2iEJhItEQoQtEONw61E7J311bY9LjHL+VS6/TbRyC7tPw9yC/2k6KbSMpv9S391+7U16xJ9cdBdtuBaZXsbyF8hB/KYZU8u4MXGYlmAhICRDTUNohCYSIFsiCIWiHG4daidk7+6tHmX94IKSQRcI/IpM3ZxQ5ANp+HuQX+0nRTaRlN/qW/uv3amvWJPrjoLttwLbJvmUHlSPyJeXU8rkTyxLsBKQAIaahtEITCRA2pEEQtEONw61E5JhwXR5lwtCkKKVC4Rt6R9ec+X22n4e5Bf7SdFNpGU3+pb+6/dqa9Yk+uOgu23Aty3qrX9g+23lZUum6rzI+8MMgAAC4IaahtuEJhIgDbkQUwtEONw61E1KpdTcI6DDzK2VXFjoO2pD15z5fbafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3Leqtf2D7baVkyohTg6BDLMNNQ2iEphIgD8kiCIUiFtw41D8ulaSFC6ImZVTJJHnRtaQ9ec+X22n4e5Bf7SdFNpGU3+pb+6/dqa9Yk+uOgu23Aty3qrX9g+20SkrVcSLpiUkwi4pfnVDTUNtQhEJTAEAflkQRCkwtuHGodZiakcams2CCDcNukPXnPl9tp+HuQX+0nRTaRlN/qW/uv3amvWJPrjoLttwLct6q1/YPtbZYW8r0cXLEtKpbFwDpMNNQ23CEQlMAQB+cRCkwtEONw41E1Jpd+CuWHmVsquLHQbVIevOfL7bT8Pcgv9pOim0jKb/Ut/dfu1NesSfXHQXbbgW5b1Vr+wfa1LSZX6TnmHJDLAAAAhtqG24QiEpgDgJEFMKRC24cah5gKBChdETMipF1TfnHJFI+vOfL7bT8Pcgv9pOim0jKb/Ut/dfu1NesSfXHQXbbgW5Fpbsu0ED+gfaJaTSjz41csNMw21CG4SiAmAOBkQUwpELbhbUOMxT4vabmB/bojafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3RTP/rZb4tJP0htmG2oQiEpgCAOC3IIgphSIW3Fk4uWQzX8dEbT8Pcgv9pOim0jKb/Ut/dfu1NesSfXHQXbbgW6Hbu0TJ9QjREIbhKICYAgcIIgphSIss/U03/DQG0/D3IL/aToptIym/1Lf3X7tTXrEn1x0F224FuhUf8ApZHs7eiISmAmAOGERZh+qJz+GgNp+HuQX+0nRTaRlN/qW/uv3amvWJPrjoLttwLdCZDkOzN6IgDh9mP6qnP4aA2n4e5Bf7SdFNpGU3+pb+6/dqa9Yk+uOgu23At0JkKQ7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZl+qpz+Ggnafh7kF/tJ0U2kZTf6lv7r92pr1iT646C7bcC3QmQaP7M3oj2BZkk4UTh/s0BtPw9yC/2k6KbSMpv9S391+65cQMaxBfaH9ceUt8ph51K3WFDE24VHNUP9x5UjkVHlSORUYH0mn+tjPPhBsWpQYm21dCxC7HaWRjlCehaTDlFUg3u5J/uyYoUEUHIA4xLtg5o9gTHrC/l9oVLsL3bLaulIg0fInHJsd0mP+Lo7/oS3cpiWablWy3KoSygm6Uti9BMbIv8AeqLpuk3TdMXx5TF0xdPLAWsYlGA84P6zCZpYxgGEzSTugRCXEL3KgfcpTiE7pQEKmkjcgmDNLOIAQXXDjWYJJ/Lk96PTw+kKYkaO80y+Av8AYnzqhican2vKmAoNrxBQuHzeb89Dy0cd3phEyk7sXIBChdBu+w7vsFSgkXVECFzQG4F2FvOLxq4AaakpB8S02strUL8Kvbohpxt5sONLStCvOFJN0HhtktKmi5D/AMXrD3oo/wBmFrU4tS3FFS1G6STdJixtQ/4RgXRd9LSPAUqUk3Um5CJniWPmISoKF1Ju8OuxdteePPHni7AMA8KJAF0m4IcmuJv/ACYUoqN1RJ26lJSLqiAOUw5SMi1u5xgHrBC6eotGObT8gTCrJqLGJ1Z6EGMK6O5H8yMLaPqpnNHjGFtH1Uzmp8YFllG8j+YPGE2UUXWOJ6UGEWQ0UvFNgdKFCG6Uo9zcTrHeARZUtDlJtFCgobCNJUWOUwujZ1KFrJlXDcWnk53DbOlk0qwjiDH3JtP7sdEImH0bh5xPQowKQnhinJjvVQKUpD/vTPeqj/k6Q/70z3qoNIzxxzsx3qoM5NHHMvZ5jZ3jjdXnGNlc/er/ADAedGJ1ecYRPTiNxNPp6HDDVN0m1inF/wArivvDFlU8jfUNO/QxLWVyq/WGHGjnCJWkZOb9XmELP7cR/wAHapJSboMNzHEuAQRdHCibQG3uRcIgGAeDuvJbHKrkhxxTh9I7WZpCTlfWJhtB5Lt0/wCImbKpRG8MuOnNEP2Uzy95Q00M4w9TFIvbucd/ib37Qta3DdWtSjyk3fy2Nwem1Ray5RMmtWNTCCc0cMs5y0z2caSrT+7HR+fJU1PylwIfK0fsc9IRI2US7txM22WT+4edMMvNPthxlxLiDxpN3aIWpGIw28FY/MeDkwTAFuepujZC6JmaQFj+hPpK/wACJmzmWR6rJuufFZCPGF2czp3uUYGcYw4pKolc1WtDFnbg3+QzHIk7MKKmCA6pyXJrE/7EMPtTDQcYdQ4g4lIUCLRFoHgrz4T6KPOqCSSSbb77Uu2VvuJbTyqMTtlDDd1Mm0XT+5XmETlMz83dC3ylH7UeiOAMbg9Nqh8iyPZ29EcMs5y0z2caSrT+7HRwGWmX5Vy/l3VNq5pij7KSLiJ9u6KxHhErMsTTWyS7qXE/DaIcUn4iELSvFwQmCYAtUvTUnRLV2YXdcO5aTujFK2T0hSBKELMsx+xs/c7eTnZmRd2SUfW0vmmKFszQ4QzSoDZrkYvmIQtLiAtCgpChdCgboMY4xQDA4CtxKBdUYdfUvzDzJtuuIabK3VhCBjKjcEUjZMBdbkE3TWr/ANCJiYemXC4+6pxXKo8CY3B6bVD5Fkezt6I4ZZzlpns40lWn92OjgcvMPSzocYcU2scaTFG2UA3G59Fw1qP9iGXW3mg4ytK0HEUm2IQ8RuvPCVBWI8BJgmBaslskRRoMrKELm/o3Dzzj7ynXlqW4s3SpRuk/lUBZDMUQ6EKuuyh3TerEpNMzkqiYllhbSxdBFrFAMD84kAXSYcmeJv8AzBJJuk26UpZijkXFem8cTYifpGZn3L59fojEgYhwSX3B6bVD5Fkezt6I4ZZzlpns40lWn92OjgsjPTMi5fyzpTyjiPSIouyKXmrjczcYeOaYFsGEukbrzwlQViP5xMKMDzm1ZPTYoqUvGfWndxzRywtSlrUtaipSjdJOMm0kFRuARKSr85MhiWQXHDEhYg0i4uefLh40N4oZoijmRcRJs/yTffePIJL/AKjHdiJmx6jH8cuEHlQbkUhYm+0CuRc2YfsV5jDra2XC26goWnGCLdjVNromcvXCTKO74nk5whC0rQlaFBSFC6CMREKF0QkwDA/McfSnzJ85ha1LN1R2lM06iWBZlFBb/GrGEQ4tTi1LcUVLUbpJ4LL72em1Q+RZHs7eiOGWc5aZ7ONJVp/djo4PRdOTUhcQTsrH7Ff6MUdSkrSCP/Au4vjbV5lDapcUPjCXEn4flmFGFGBE1Mtysq7MPG422kqMUjOu0hPOzT2NZzRxC1Iyb09MhhjpUs7lCeMmJpbV95PIgloG5fndOnl6OQRQVFoouQSjG+sAur21K0RLUmyQ4Al0blwYxFIyD9HTRYfHQeJQt2DUsXGlUa+fOgXzPRxi0rzKhJgQPyVvpTi85hbil4ztJ2el5Fu/mHAORIxmKTp2YnLrbV1lnkGM9J4PL7g9Nqh8iyPZ29EcMs5y0z2caSrT+7HRwIbZClIUFIUUqGIg3CIo2yZ5m4idGzI/eN1EnOy063fSzoXyjjHSNqCRiMB08cBxJgbcwoxjVas5nyllmQQd36bnRxWm0LdcS22kqWs3EjlMUulFCUQii2fWpkBcysaMWOsh+n5RCsQXff429IvLlGPK0JK0tb4jlRx/MRSchL0zRovSDdF8y7D7Lku+tl1N6tBuEWpCaXIzzM01u2lBUMPIfYbebN1DiQpJ+BhzcwkwkwNsSBCnwNyLsLcUrGdo64hpsrdWEIGMkxSVkeNuQ71X+hDrrjzhcdWVrOMk8Il97PTaofIsj2dvRHDLOctM9nGkq0/ux0cKadW04FtLUhYxKSbhiQsnfauInUbMn96fMqJKkZSdF2XeBV+w+ZX+NsIDihAd5RAWkwCDaMKhZgWrIZozdOTTnEF3iegea1YTIB2bcnnMTPoo/uMU1MmbpmaeP7yB0CKEmRKUzKvq3IXcPQdpZVSPkNFFDZuPvbjoBukxLOh6VadGJaAq0tAdQptQuhYKTFiM2W3ZqinTvCiWv9iLM5De55scxy3YVNbPQAbONhZRGMEQgwkwNoXEiC8eIXIJJxnaEgAkm4BFIWQsMXUSoD7nL/SInJ6YnV30w4VcieIcKl97PTaofIsj2dvRHDLOctM9nGkq0/ux0cEH5CSUm6kkEYiIkrIZ6WuJcUH0ci8f+Yk7IpGYuB0lhfPxf5hC0rSFIUFJOIg3R+RfKHHGyqhTvwhbohJuph5wNMOOHEhJVCiVKKibpJum1Y2x5PY8wONaVOHpMKulxd3HfH72qAslaDCJWkl3pQLiHvGETUstF+iYaKeULEUlZFISKCELEw9xIR/sxPzr9ITa5mZVdWr/AAkcgihgRQkiDUJtCFv+Q2brWMQmLh6DFLSwmqMmWMZUg3vTxW/w+euOzrPKErtYnFQlQGMiA6gccbMOIQXVQSTjO1JABJifp+VlrqWTs7nNxD5xP0pNTxIdcuIq0+YcMl97PTaofIsj2dvRHDLOctM9nGkq1MbsdHBR+VLTcxKqvpd5bZ5piUsomW/NMtIeHKPRMStkFHv43CyrkcENuIcRfNrStPKk3RtjCoXCNwOiKVNyiJwioXom0cRijwBR8qOLYUaIil5YylLTTB/pcJHQbdwWpWXXNTTUu3unVhIhCA02ltG5QkJHyt0w7f0/NuivjG2P7RE2kInHkDElZH1tWBZZf7OdJNp71hUIhMDauuNtIK3VpQkcajcETtkcs1dTKpLy+XEmJ2k5udJDzpvP2J8yeHS+9nptUPkWR7O3ojhlnOWmezjSVamN2OjhI/JZedZVfMuLbPKkkRLWQ0gzjcS6OeIYspbPrEsofFBuwxTlHPYpgIPIsEQ2626LrTiVjlSbtowqFwjcCJ9Bco6ZR+5pQ+luhHg/Qkm4KsA/LzRZhRSn2kz7CSXGhcdHKnl2tiFEKY/9hMpuLULjKTxDltzLyZaVdfWbgbQVRLpVNT7Y/qedH1MLIShROICJhd/Mur/csm1YCi7SUyvkZ+5tPesrhEJgWiQASSABE1TUhLY3g4rkb9KJuyZ9d0SrQa5yvOYmJl+ZXfvuqcPOPsCX3s9Nqh8iyPZ29EcMs5y0z2caSrUxvg6OCD80bVKik3Ukg8ohmlZ9ncTbn8jffeG7I59G72JzpT4Qiyetlc1cCyGUXukOoiRmmpuWDjKrqbpFqcZMtOvsVayn/BtWEzwUw9ILxoOyI/3apaxVmZWp6QWGHTjQdwYfoGlWCQqTWvq/ShigKVfVcEmtHxc9GKIsWZlFh6dWH3RiQNwNpZnPhqURIIPpvekv4JixCTMzTIeO4lxffPiinpoSlDzDnGU3qek27AmCiRmpisWED5Wib51R5TBfZa315CP7lAQumaPaxzIUeaCYdsnl07yw4vpITD9kk65vQbZ+piYm5iZN195bnSfYcvvZ6bVD5Fkezt6I4ZZzlpns40lWn98+X5I/PEDgJixR/f5foWPsbVmEoWKWD43D6fqPMbUlNOyU43MsG4ts3Yo2fZpKTTMMH4KTxoPIdvSlIsUZJl9/+CONZiYefpCfU6u64+8rEPoBFBUYKLo5LJ35fpOn4xZhSIfmUybRuoa86/7rdByZkKHl2D5lhN1fSfOYpKY8lo5967cKUG508UF55e7dWrpUTA9jy+9nptUPkWR7O3ojhlnOWmezjSVaf3z5ey6KmfJKSadO4u3qug2rIqP8vopaUC6836aPC3RtIzNGzOzSy/7kHEochii6fkqRATfhh+rcP2O1pWySTkQUMETL/IjcjpMTMzOUrPBbpU88s3EoSPoBFjtACjgJmaAVNkfJuLIaZRR0uWmiDNLHoj9vxMKUVKKlElRN0m1YrRxn6WSpYussemv/AELVl02EstSicazfr6IHsiX3s9Nqh8iyPZ29EcMs5y0z2caSrT++fLg44LQE75VIBCt9Z9E9HEbVlVEmUmjNsJ/8DxzVWkKCVXSkKHGDDNG+Wpu0c4HFjGwsgLHRxKhE/S9GG8Lr7IH9Dguj6wiyyk01C+lHgYXZXSaqlHQjxMOTlK0obwuPvg/0pxf4HmiQsTnXyDNkSyP8qijqLkqLbOwIuK/qdXujFMWTsy4UzIEOu/v/AKUw864+6p15ZWtRulRtMtOPvIaaSVuLNxKRFB0YiiqOSxjcPpOK5VQ64hppTjhCUIBJMUhNqnZ52YV/UfMOQcUD2RL7g9Nqh8iyPZ29EcMs5y0z2caSrT2+nhI4HR04uRnEvJxYlp5RDLqHmUutKvkKF0GH2G5lhbLyAttYuKBim6Hdot/jXLq3Dn+jaSopUFJJBGIiJOyadZQG5kIm2uR3xhum6Ce9ZotKVdWCIapWxpvzoYaQeoMGymi2gQ1f9CG7kTNmP/Ulfm4Yn6Xnp+6H3zefsT5k20JUtYQgFSlG4ABdJMWM0CKOR5TNAGaWO7Fqyik74+QsHrfCB7Jl97PTaofIsj2dvRHDLOctM9nGkq09vp9m0HSpknNhf9XWcwwCFJBBBBxEQ+w1MsKZfQFtqFwpMUzY0/KFT0kC8xyf1J/JkZGZn39ilWis8Z4h0mKCoBiiwHXCHZr9/EnotU7S4kWiywQZlYzBBJUSSbpOMn2VL72em1Q+RZHs7eiOGWc5aZ7ONJVp7fT7OoemFyRDL91bH1RDLrbzQcaWFoViItUlQMjSBK1I2J6sbidsVn2CSwUTCM0w/KTMsbj7Djf96SLaQVG4kEnkESlB0lNb3KLSP3OeiPrFH2HoSQufev8AmN+MS0uzKshqXaS2gcSRapinUSgUxKkLf4zxIha1OOKW4oqUo3ST7Ll97PTaofIsj2dvRHDLOctM9nGkq09vp4SODSM/MSLl8wvzHGg4jEhTkrN3EuHYXeRWI9B2i5KUc3yVZX0tgwKNkBikZbukw2020LjTaEDmgC3Nz0tJIvph0J5E8Z+UUnT780C3LAstHOPs2X3s9Nqh8iyPZ29EcMs5y0z2caSrT2+n2hciUpOclPMy8bz9ivOIYsm/7Mv82/Aw1T1HuY3Sg85JhNJyKsU2zngQaRkf+4x3ghdM0e3jmUnoBMP2TSqN5accOaImqfnnwQ2QynmY/wDMKUpaipaipRxkn2dL72em1Q+RZHs7eiOGWc5aZ7ONJVp7fT7zy+9nptUPkWR7O3ojhlnOWmezjSVae30+88vvZ6bVD5Fkezt6I4ZZzlpns40lWnt9PvPL72em1Q+RZHs7eiOGWc5aZ7ONJVp7fTwQe6cvvfztUPkWR7O3ojhlnOWmezjSVae30+88vvfztUPkWR7O3ojhlnOWmezjSVae31XvPL7387VD5Fkezt6I4ZZzlpns40lWnt9V7zy+9/O1Q+RZHs7eiOGWc5aZ7ONJVp7fVe88vvfztUPkWR7O3ojhlnOWmezjSVae31XvPL7387VD5Fkezt6I4ZZzlpns40lWnt9V7zy+9/O1Q+RZHs7eiOGWc5aZ7ONJVp7fVe88vvfztUPkWR7O3ojhlnOWmezjSVae31XvPL7387VD5Fkezt6I4ZZzlpns40lWnt9V7zy+92qHyLI9nb0RwyznLTPZxpKtPb6r3nZFxoWqHyLI9nb0RwyzpBFKML5WfsTamBcc95kJvlAW5FstSEu2caGkp/wOGWdS5VJy0zVrKD87T6bqLvJ7zMIuC+PHaoqWM5SksxjC1i70Yz9OG0rJifox+W41p9HpxiFpUhakLBCkm4QeI2nEXivh7yMtXxunc27B5Albs+vq2/8AZ4dZjRJafNIMD0HN9+CuW0pIUCDC2in4j3hAJNwQ2xxrt0ZIO0jPIlmRj3SuJI4zEpLNyco3Lsi422Lg4c62h5pbTqQtCxcUk8Yin6Bdox0usgrlFYlfs+BtqaQrigy44lR5PzvpHk/O+keT876R5PzvpHk/O+keT876R5PzvpHk/O+keT876R5PzvpHk/O+kbBzvpGwc+Ng50bBzo2DnRsHOjYOd9I2DnRsHO+kbBzo2DnRsHOjYed9I2DnRsPOjYedGw86Nh50bDzo2LnRsXOjYvjGxc6Ni+MbF8Y2PnRsfxjY/jGx/GNj+MXnxjY/jF58YvPjF58YvIvIvIvIvPjF58YvPjGx/GNj+MbH8Y2P4xsfxjY/jGx86Ni+MbFzo2LnRsXOjYudGxc6Nh50bDzo2HnRsPOjYedGwc6Ng50bBzo2DnRsHOjYOdGwc6Ng50bBzo2DnRsHOjYOfHk/Pjyfnx5PzvpHk/O+keT876R5PzvpHk/O+keT876R5PzvpAl+dAYQOUwABiFuRkpifmQxLNlaz/gDlMUJRLNEyl4j0nVb45y+wFJStBQtIUlQuEEXQYpexELJeowhJqVf6MTUpMSbl5MsraVzh7xIQpxYQhJUo4gBdJii7FJyaIXOf/GZ5DuzEhIS1HMbDKthCeM8auk+w3G23kFDqErQcaVC6Ifsbol8+q3hNWSINh1G1sznjwjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0dXzWenVjA2jq+az06sYG0bXTWenVhmxWim8bS3f71mJaTlpRNyWYba/sSB/+If/xAA7EQABAgEHCgQGAwEAAgMAAAABAAIDBBARFTFRcQUSIDNAkaHB0eEhUGCxEzAyNEGBFCJhQiNSgLDw/9oACAECAQE/AP8A7DYAuNAUOQPPi80Kr4d5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeVV8K8qr4V5VXwryqvhXlVfCvKq+FeU7J4/5cosF8I/2HlQBcaApPJ2wW/wC+nHNDxQ5SmAYLv8PlMgh0vL7py/8ADfFURLwqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7uqIl43d1REvG7us8j6hPKofxIR8pyfqzjM4n6R+UAAKB6Zb/AFObOfKMn6o4zDWHAc/TTvqb/wDvxOdkILTQdkyfqjjMNYcBz9NPtbjyM52SWyen/wAjf3smT9UcZhrDgOfpp9rceRnOxwoRivzRNKpP8F1IsOx5P1RxmGsOA5+mn2tx5Gc7EASaApLA+CzxtMz2NiNLXKNCdCdmnYS65ZN1Jx6TDWHAc/TT7W48jOTRsUik1H/kd+tCPAEZlH5T2Fji02/Pc6bJmpOPSYaw4Dn6afa3HkZ3IGjYJHJviHPdZpSqTCMKRaiCDQfmuNE+TNScekw1hwHP00+1uPIzumafnSaTmM6k2BAACgacrkvxBntt9/mk0mfJmpOPSYaw4Dn6afa3HkZ3TtNI+ZJ4BjO/xMYGNzW2fJlclz/7st+W6zQyZqTj0mGsOA5+mn2tx5Gd07D8uBAdGdQLExjYbc1vy5VJM/8Auy35T9DJmpOPSYaw4Dn6afa3HkZ3Tj5UCA6M7/FDY2G3Nb82UyQRf7Nt90QWmg/IdboZM1Jx6TDWHAc/TT7W48jO7QHyJPJnRj/iYxrG5rbPnyiTNjC4p7HMdmuGm63QyZqTj0mGsOA5+mn2tx5Gd2gLNOTSQxf7OsQAaKBsMaAyMKHKNBfBNDtJ1uhkzUnHpMNYcBz9NPtbjyM7tAWaUmkX/UTdsj2Ne3NcFKJI6F4jxGi63QyZqTj0mGsOA5+mn2tx5Gd2gLNBjHPOa1SeSNhf2d4nZ5RIqf7Q9yIINBndboZM1Jx6TDWHAc/TT7W48jO7QFk8CTvjHwsUGCyCKG7THkzIwuKiwHwTQ6Z1uhkzUnHpMNYcBz9NPtbjyM7tAWTSeQk/2ibkAGigbW5ocKHKPIS3+0PcnW6GTNScekw1hwHP00+1uPIzu0IMF8bwaFAkrIPjadvl33Dv17aGTNScekw1hwHP00+1uPIzu0JOAILcB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+mn2tx5Gd2hJ9SzAeQS77h369tDJmpOPSYaw4Dn6afa3HkZ3aEn1LMB5BLvuHfr20Mmak49JhrDgOfpp9rceRndoSfUswHkEu+4d+vbQyZqTj0mGsOA5+ly9o/K+Ky9fHYnRmkhfyGL+QxGTvRk0RGBEuRhPH4UDUtwHkEbWFZouXw2XL4TLgmf0FDfBZ7r1nFUlUlUlZ7r0Irx+UJQ5CUNNqa9rrD6KL2ttKMob+EZQ42IxHn8/Mk/wBG3xpVBgfWfFfFbG/u2w/PbFc38pscG1Ag2ehCQLU6UAfSnRXutOwMlcKCcx5oTXBwpBpG2y6U/Ah+FpRJJpKkupGwtJbYmR//AGQINnoAkC1Pj/hqJLrfkGIwWlGPDvX8mGv5UNfymXFfymXFfymL+TDQjw70IrD+VLSDEGCkUqMB9B+k7blU/wDlaP8AJm2ION6+I+9fFfeV8R95XxH3lZ7r1nG9UlUlB7r0I0QflCVPFqbKmm0JsRjrDogkWJkb/wBkCD56+IGJ7y+3RdEY20p0qaLAjKnmxGNENpRJPy32zQCXQWk3DbMq68YczM2wfPZGeywpkqafq8E0hwpGg1xbYmxAbdsiSiFD+op2UWD6Wo5Rf+AFWMW4JuUj+Wpkvgut8E1wcKWmnaYkYN8Gq2cuDRSU+VAfSnRnutOwPtmk2oZgPbbMq68YczM2wbC1xaaQVDlf4emva8Ug6DXlqa4O2amaNKGQR/a1RpZEi+Fg02RHwzS00KBlAHwi70CCKRsrnhtqfGLpyQBSVElP4YnOLjSTsT7ZpNqGYD22zKuvGHMzNsGxtcWmkFQ5X+HppDhSNBsQi1Ag2bGTNKZWIX9W2ouLjSflSaVOgmi0Jj2vbnNs2IkC1Pj/AIaiSZ4kZsPFPiOefHZH2zSbUMwHttmVdeMOZmbYNlZEdDNLSoUqa/wd4HREQ/lBwOwEzSmUfCbQLSiafEztYXmgJklH/RQhMH4WYy5OgQ3fhPkpH0ogjwM8llBgu8bCgQRSNgfGAsTnF1uhGjhvg21Ekmk7K+2aTahmA9tsyrrxhzMzbBs8KUPh+FoUKMyJZoh5CDwfmkolOeGNLiojzEcXGZjC80BOI+lqhQxDbpRITYgT2FhoM8gj0j4Z/XznRQLE57naD4jWDxUSO5/gPAbO+2aTahmA9tsyrrxhzMzbBtANChStzfB/imRGxBS06IJCEQoPB+U8zS2J4BgmApNCiUQWZgtNqgCmINN5LRnKIxsVqILTQZobzDeHD8Jrg4AiYfIJoTooFic8ut0CQBSVElP4YiSTSdofbNJtQzAe22ZV14w5mZtg2oEg0hQ5Y4eD/FQ4zIn0nTDyhEQeNEp58Zo7s+ITNJGUnOKiuznkqC7NeDoR35jaPyU00gGainwUnf4lhUqZ/wBCeQvzoNF0wQ0S9oRin8IknRiSlrfBvinxHPtO1Ptmk2oZgPbbMq68YczM2wbbDlURlviocrhut8ECDZ8jOKzyviIxAnGkomgUzwBRDCNs0GUCjNeg5t6fHYz/AFPeXupKhfQMJycyOojc5pE+TneLhMFSFntXxQjEKJJ0okpY2zxT4z4lu2Ptmk2oZgPbbMq68YczM2wbex7mfSUyWvH1ClMlcJ35oQIIpHyDNE+g4Ts+kKK3NeRosaXOACs8J4ppiGZ1pmkGsOEzrUNMkAUlRJW0fT4p8Z8S07c+2aTahmA9tsyrrxhzMzbB5E1xbYUyVxW/6my4f9BNlUJ35QcHWHQMz/FpE8I0sClMLOGcNGTQs3+xnJzQShS58x8SZpAP7k/5MbUNF8phs/KfLHH6RQnPc/xcfIH2zSbUMwHttmVdeMOZmbYPJ2x4rbHISyKEJbe1CVsKa8PFImcM1xE0lfSC2aJJg7xajAiD8IQIh/ChSYN8XeOhKX0DNUmZS+m5RnZrCZ5A2hpdN+UXNbaUZRCH5RlrRYE6WRDZ4Jz3v+o+Rvtmk2oZgPbbMq68YczM2zyuSutbNKW0PpvmY8sNITHh4pGm94hikol0R1KhQ/htoUpiUnNE8Bnw4Yaor8xhci5xtPlD7ZpNqGYD22zKuvGHMzNs8rhPzHgzR2Z7J4cQwzSFDjsf/h0YkdrLPEpznRXKDAzPE2qNGEMUC2eSwviRP8E0tf4BnlL7ZpNqGYD22zKuvGHMzNs8sgPz24TSiFmnOFhmCEPP+hB8WH4ISqIEZTEKLokRMkrz9XgmQ2wx4KLKQ3waiSTSZgC40BQIQhMoRIApKivMR5d5S+2aTahmA9tsyrrxhzMzbPLIbyx1KBBFIRAcKCosIwz/AJO2UvHgfFCNCNrUIsC5fyYYsTpXcE+K99pntUmgfDGc62aVxv8AgeVPtmk2oZgPbbMq68YczM2zy2BGzDQbJiA4UFRZOW+LfEfJYxzzQ1QZO2H4m2aPH+GKBb5W+2aTahmA9tsyrrxhzMzbPLoMcs8DYgQRSJnwGPTpK8WeKLXNtGg2DEdYEySC15TWhooAmjSkM8G2okk0nyt9s0m1DMB7bZlXXjDmZm2eXsiOZYmR2vt8DoFjTaF8NlwQAFk74jWWlRZS5/g3wHlr7ZpNqGYD22zKuvGHMzNs8xZFeywpsqvCEohn8r4rL18Rl6MeGPyjKmiwJ0pe6zwVvlz7ZpNqGYD22zKuvGHMzNs9Tvtmk2oZgPbbMq68YczM2z1O+2aTahmA9tsyrrxhzMzbPU77ZpNqGYD22zKuvGHMzNs9Tutmk2oZgPbbMq68YczM2z1O62aTahmA9tsyrrxhzMzbPU7rZpNqGYD22zKuvGHMzNs9Tutmk2oZgPbbMq68YczM2z1O62aTahmA9tsyrrxhzMzbPU7rZpNqGYD22zKuvGHMzNs9Tutmk2oZgPbbMq68YczM2z1O62aTahmA9tsyrrxhzMzbPU7rZpNqGYD22zKuvGHMzNs9Tutmk2oZgPbbMq68YczM2z1O62aTahmA9tsyrrWn/JmWepiZ4Tc2G0XAbZlZlLGvumYfUzj+JpPD+LFay87bKIXxoTmXogg0GYGn1I51E+SoHiYpwG3ZSkua74zbDbMEHA+oi66eBBdHeGNUOG2GwMbYNuc0OBBsUskToBzh4tnDiFnrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Z6z1nrPWes9Zx0IUF8Z2awKSyVsnZQLfyfICARQVKcmA/2g7lEhPhGh4o9RAEmgKBk2LE8X+A4qDBZBbmsHkbmhwoIpT5BJ3/APNGCqqBeVVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXnh0VVQLzw6KqoF54dFVUC88OiqqBeeHRVVAvPDoqqgXlNybJ22ilMhQ4f0AD/4Q/wD/xAA7EQABAgIFCQYFBQEBAAMAAAABAAIDEQQQM1FxBRQVITFAkcHhEiAyUGCxEzBBgdEiNEJSYSOhgLDw/9oACAEDAQE/AP8A7DYkBOpAGxZw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5Zw5CkXhMe1+zyomSiRC8/56cBIMwoT+2PKY7pCVYZqm4yU4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0U4dx49FOHcePRTh3Hj0XYB8Jrgu7LwiPKKR4qmAa3H6IkkzPpl36h2uNbh5RSPFUbMYnl6aZ4Xf8A761u3QGe6UjxVGzGJ5emmeF2HMVu3SBE/id0pHiqNmMTy9NM8LsOYrdubnBomaoUTtjXt3OkeKo2YxPL00zwuw5it25xYnbP+VNcWmYTHh4mNxgUbtfqfsWUwBGAF3M1GzGJ5emmeF2HMVvgh41bU5paZHcY0Sf6R3IbywoEETHz6NAn+t1WVLYYczUbMYnl6aZ4XYcxW1RYIit/1OaWmR+fGidnUNvehROwZHZ86jwviO17BXlS2GHM1GzGJ5emmeF2HMVtQVJhdpvaG0fOixOwP9+RCi9nUdnzYMP4bAK8qWww5mo2YxPL00zwuw5itqFUeH8N8vmRIgYESSZn5MKL2dR2fLozO1Ew7mVLYYczUbMYnl6aZ4XYcxW1CqlsmztXfLe8MCc4uMz8uFF7Oo7PlUNuonuZUthhzNRsxieXppnhdhzFbUKnt7TSPlRIgYE5xcZn5sKL2dR2IGfyKKJQu5lS2GHM1GzGJ5emmeF2HMVtQreJOI+REiBmKJJMz8+HFLME0hwmO/RrIdzKlsMOZqNmMTy9NM8LsOYrahXFtHY9+JFDdQ2ome4seWHUmPDxq71Gsh3MqWww5mo2YxPL00zwuw5itqFcW0die9EjfRu6AlpmFDih+o7e7RrIdzKlsMOZqNmMTy9NM8LsOYrahXFtHYnuEgCZUSKXahs3eHH+ju5RrIdzKlsMOZqNmMTy9NM8LsOYrahXFtHYmt8QMT3l517yyIWJjw8aqqNZDuZUthhzNRsxieXppnhdhzFbUK4to7E1RI8tTUTPewSDMKHHB1OVGsh3MqWww5mo2YxPL00zwuw5itqFcd4Y907ynxS/Df6B+2b9/c9zKlsMOZqNmMTy9NM8LsOYrahXSLZ+J8goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7Zv39z3MqWww5mo2YxPL00zwuw5itqFdItn4n38goH7dv39z3MqWww5mo2YxPL0v2Tcuw5fDcmsIBF/5XwivhFNpkMXoU2ChS4J/khHhHY4KkWz8T5AzwhB7hsK+LE/seK+NF/seKeS8zdrXZFykFKuQXYbcjCCMIotI9FBpKEIoQggxt3zIu3f4VGixvCEYZhHsO2j55Y0owz9FKXoQAlCEfqgwDcM1iRR22CaLS0yO+0Oj/Hfr2BAACQVLtjuJAKMO5EEegWwr0AB3wJoQYh2NKFFjH+KzKNcsxi/4swi3hZhFvCzGL/izKMjRIw/ijAija0qhAiGZ3ql0YRmTHiG+5MH/In/AGoIsadoXwof9RwXwYX9RwXwYX9RwXwof9RwXw2XBdltykF2RcjCYdoCNGgn+KdQYZ2TCdQHjwmafBiM8Q7pAKMO7z5rC5NaG91kGI/whMoLz4jJNoMMbdabR4TdjUABs+WaowlFcBed8yZYnH8VN+e+jQom0KJQXjwGac1zTJw7hAKLCN8h0aLF8LUzJjz4nSQyZD+ritGQrynZLH8XJ+T4zNmtOa5pk4S3ljJ6z3Gsc8yaFDoLj4zJMo0Jmwbgao9s/E75kyxOP4qbuL2NeJOE1FoP1hlPY5hk4dwtBRBG8QKNEjn9Oy9QaFChazrPffDZEEniaj5OI1wuCIIMjuoaXJrAKw0uMgoVB+sRMY1gk0bkao9s/E75kyxOP4qbubmNeJOCjUH6w+Cc0tMj3Cy5ES3IV0ShmN+t/h901oaJDZ8qk0RscT2OT2OhuLXDXubYd/cg0d0bBQoLIQk3dDVHtn4nfMmWJx/FQ3WJCZFEnBRqE9mtusd0sRBHzxXRKN8Z0zsCAAEhW97WN7TiolPJ1MCMeK7a5fFif2KZSorfqoVOadTxJAhwmK6XRhHbMeIIggyO4Nhk7UAB3KPRS/8AU/YgABIbqao9s/E75kyxOP4qG7xqKyLr2FRYD4XiHdLQi0/NFTGF7g0fVQoYhMDBVEiNht7TkwHxP2+ypEYxnz+g2d6DHfBOrYoUVsVvabXlGBI/Fb9/nBhKDQO5DhPimTQoNEZD1nWd3NUe2fid8yZYnH8VDeCARIqNQWu1s1KJCfCMnDvFqLT8gIIVZPhTJiGokATKgE0iIYp2DYqU7swXHvwmh57F6gxXQH+6a4OExVEYIjCw/VOaWktP0Q+UGXoNA7jWlxkFBoX1icE1oaJDeDVHtn4nfMmWJx/FQ3otDhIqLQGu1sMlEgRIXiHf7IXZXZPcCCFVGZ2ILRVT4smiGPqoDOxCaFHZ24Tm9yhwviRJnYE4dlxFQMtaprAQIo+qoMXbDNdPZ2Y076j3g0lBiA7sGhPfrfqChwmQhJo3o1R7Z+J3zJlicfxUN9iUKE/ZqKiUKKzZrRBBkfkSC7IQYg01NEyBXSnduMeCGyqk0MzL4fBFjgZEKFRIsQ3BQobYTey1RrV2NYb8SiS/xQX9h4dXlNuprqvopLsldhdgIDvQqHEfrOoKFR4cLYNe+GqPbPxO+ZMsTj+Khv74bImpwmn5PYfAZJ9CjM2CaILTI98IVQbRuIrieN2JUB/bhtd3XuDGlx+iJmZ1wGygtH+VMM2g1ZSshjU3wo99rS4yChUF7tb9ShQIcLwjfjVHtn4nfMmWJx/FQ8ic1rhJwmn0KC7YJJ+Tj/FydRIzfoi1zdolWEKoZk8H/a47ezFcFQY4afhu2HZ3abHDv+bfvW1pc4NvTiGMP+BBNEmgVZSP/MD/AGpvhR7rKJFf9JYqHQGjxmaYxrBJol5Aao9s/E75kyxOP4qHk0pp1Hgu2tCNAhHZMI5PucsyiDYQokN0N0nVMd22h19VPhyIiVQaa5mp+sJtKgu/knUqC3+SjU1z9TNQ7lBhTcYh+ipsTsQpXqjs7cUCvKTpva26rYEGOdsCFFjO/im5PefEUygQht1pkNjPCJeRmqPbPxO+ZMsTj+Kh5XTmbHVUJ/ah9m6p7BEaWn6qLCdCd2Xd+DCdGd2QmtbCZIbAqRG+M+f0VChdlvbP1rpET4kUuUFnbiBqDGjYPKDVHtn4nfMmWJx/FQ8rjw/iQyKqLF+FE17DXFhNitk5RaLEhf6O7Boj4ms6gmMZBZIagqTSjF/S3w+6o1HMUzOxCqmRvhQ5Daasnw5kv8pNUe2fid8yZYnH8VDyylQvhvmNhqocftt7B2iohGN8O0H3+iMKBG1yBRoMI3oUGEL0IcGDrkAolOht8GtRY0SMf1KBQy7W/UE1oaJCpzg0TKpEYxn9pNBcZBQYYhMDR5Sao9s/E75kyxOP4qHlkaEIrC0pzS0yKa4tMwqPHEZv+1vocN2tuo/4jRqQ3wvRgUo7T/6hQop2plA/sVDgQ4fhFZIAmVS6V8U9luyqgwJf9Hfbyo1R7Z+J3zJlicfxUPLaTR/iDtN21NcWGYUCmNfqfqPyYkVkITcVSKU6NqGoVUWjfFPads8rNUe2fid8yZYnH8VDy6kUYRP1N2pzS0yNUKlRIWraEymw3eLUmva/wmfcfSYTNrlFp52MCc9zzNxnVR6IYn6n7EAAJDys1R7Z+J3zJlicfxUPL4sFkUScotEfD1jWO4IjxsJXxon9jxRcTtNcOE+IZNCg0NrNbtZ8tNUe2fid8yZYnH8VDzF8CHE2hPoH9SnUSMPojAi/1K+DF/qUKLGP8U2gvPiMkyhwm7daAAEh5cao9s/E75kyxOP4qHqc1R7Z+J3zJlicfxUPU5qj2z8TvmTLE4/ioepzVHtn4nfMmWJx/FQ9TmqPbPxO+ZMsTj+Kh6nNUe2fid8yZYnH8VD1Oao9s/E75kyxOP4qHqc1R7Z+J3zJlicfxUPU5qj2z8TvmTLE4/ioepzVHtn4nfMmWJx/FQ9TmqPbPxO+ZMsTj+Kh6nNUe2fid8yZYnH8VD1Oao9s/E75kyxOP4qHqc1R7Z+J3zJlicfxUPU5qj2z8TvmTLIj/ah6pintPcf93zJj5Pcy+oepjVHf8OE52+wInwogegQRMVD1ITXlKNqEIYnfsn0iY+E7aNlYPqKdcaK2CwvcnvMRxc7ad+a4tMwqLS2xxI+LuTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1OqampqanXNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU+5FishN7TiqTSHR3TOzyAEgzCgZRlqi8UyIyIJsM/URIAmVGyhDZqZrP/iixnxndp58jDi0zBTKdHb/Ka0lGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuC0nGuCdT45+sk+K+J4jP8A+EP/2Q=="

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2024 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"九点荟库存管理","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"九点荟库存管理","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"九点荟库存管理","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"九点荟库存管理","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 31)();
module.exports = runtime;

/***/ }),

/***/ 31:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 310:
/*!************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/util/fq.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToTempPath = base64ToTempPath;
// 将Base64转为临时文件路径（兼容所有平台）
function base64ToTempPath(base64Data) {
  return new Promise(function (resolve) {
    // 小程序端写入临时文件
    var base64 = base64Data.split(',')[1] || base64Data; // 去除可能的头部
    var fileManager = uni.getFileSystemManager();
    var tempFilePath = "".concat(wx.env.USER_DATA_PATH, "/qrcode_").concat(Date.now(), ".png");
    fileManager.writeFile({
      filePath: tempFilePath,
      data: base64,
      encoding: 'base64',
      success: function success() {
        return resolve(tempFilePath);
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 32:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 332:
/*!*****************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-icons/components/uni-icons/uniicons_file_vue.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontData = void 0;
var fontData = [{
  "font_class": "arrow-down",
  "unicode": "\uE6BE"
}, {
  "font_class": "arrow-left",
  "unicode": "\uE6BC"
}, {
  "font_class": "arrow-right",
  "unicode": "\uE6BB"
}, {
  "font_class": "arrow-up",
  "unicode": "\uE6BD"
}, {
  "font_class": "auth",
  "unicode": "\uE6AB"
}, {
  "font_class": "auth-filled",
  "unicode": "\uE6CC"
}, {
  "font_class": "back",
  "unicode": "\uE6B9"
}, {
  "font_class": "bars",
  "unicode": "\uE627"
}, {
  "font_class": "calendar",
  "unicode": "\uE6A0"
}, {
  "font_class": "calendar-filled",
  "unicode": "\uE6C0"
}, {
  "font_class": "camera",
  "unicode": "\uE65A"
}, {
  "font_class": "camera-filled",
  "unicode": "\uE658"
}, {
  "font_class": "cart",
  "unicode": "\uE631"
}, {
  "font_class": "cart-filled",
  "unicode": "\uE6D0"
}, {
  "font_class": "chat",
  "unicode": "\uE65D"
}, {
  "font_class": "chat-filled",
  "unicode": "\uE659"
}, {
  "font_class": "chatboxes",
  "unicode": "\uE696"
}, {
  "font_class": "chatboxes-filled",
  "unicode": "\uE692"
}, {
  "font_class": "chatbubble",
  "unicode": "\uE697"
}, {
  "font_class": "chatbubble-filled",
  "unicode": "\uE694"
}, {
  "font_class": "checkbox",
  "unicode": "\uE62B"
}, {
  "font_class": "checkbox-filled",
  "unicode": "\uE62C"
}, {
  "font_class": "checkmarkempty",
  "unicode": "\uE65C"
}, {
  "font_class": "circle",
  "unicode": "\uE65B"
}, {
  "font_class": "circle-filled",
  "unicode": "\uE65E"
}, {
  "font_class": "clear",
  "unicode": "\uE66D"
}, {
  "font_class": "close",
  "unicode": "\uE673"
}, {
  "font_class": "closeempty",
  "unicode": "\uE66C"
}, {
  "font_class": "cloud-download",
  "unicode": "\uE647"
}, {
  "font_class": "cloud-download-filled",
  "unicode": "\uE646"
}, {
  "font_class": "cloud-upload",
  "unicode": "\uE645"
}, {
  "font_class": "cloud-upload-filled",
  "unicode": "\uE648"
}, {
  "font_class": "color",
  "unicode": "\uE6CF"
}, {
  "font_class": "color-filled",
  "unicode": "\uE6C9"
}, {
  "font_class": "compose",
  "unicode": "\uE67F"
}, {
  "font_class": "contact",
  "unicode": "\uE693"
}, {
  "font_class": "contact-filled",
  "unicode": "\uE695"
}, {
  "font_class": "down",
  "unicode": "\uE6B8"
}, {
  "font_class": "bottom",
  "unicode": "\uE6B8"
}, {
  "font_class": "download",
  "unicode": "\uE68D"
}, {
  "font_class": "download-filled",
  "unicode": "\uE681"
}, {
  "font_class": "email",
  "unicode": "\uE69E"
}, {
  "font_class": "email-filled",
  "unicode": "\uE69A"
}, {
  "font_class": "eye",
  "unicode": "\uE651"
}, {
  "font_class": "eye-filled",
  "unicode": "\uE66A"
}, {
  "font_class": "eye-slash",
  "unicode": "\uE6B3"
}, {
  "font_class": "eye-slash-filled",
  "unicode": "\uE6B4"
}, {
  "font_class": "fire",
  "unicode": "\uE6A1"
}, {
  "font_class": "fire-filled",
  "unicode": "\uE6C5"
}, {
  "font_class": "flag",
  "unicode": "\uE65F"
}, {
  "font_class": "flag-filled",
  "unicode": "\uE660"
}, {
  "font_class": "folder-add",
  "unicode": "\uE6A9"
}, {
  "font_class": "folder-add-filled",
  "unicode": "\uE6C8"
}, {
  "font_class": "font",
  "unicode": "\uE6A3"
}, {
  "font_class": "forward",
  "unicode": "\uE6BA"
}, {
  "font_class": "gear",
  "unicode": "\uE664"
}, {
  "font_class": "gear-filled",
  "unicode": "\uE661"
}, {
  "font_class": "gift",
  "unicode": "\uE6A4"
}, {
  "font_class": "gift-filled",
  "unicode": "\uE6C4"
}, {
  "font_class": "hand-down",
  "unicode": "\uE63D"
}, {
  "font_class": "hand-down-filled",
  "unicode": "\uE63C"
}, {
  "font_class": "hand-up",
  "unicode": "\uE63F"
}, {
  "font_class": "hand-up-filled",
  "unicode": "\uE63E"
}, {
  "font_class": "headphones",
  "unicode": "\uE630"
}, {
  "font_class": "heart",
  "unicode": "\uE639"
}, {
  "font_class": "heart-filled",
  "unicode": "\uE641"
}, {
  "font_class": "help",
  "unicode": "\uE679"
}, {
  "font_class": "help-filled",
  "unicode": "\uE674"
}, {
  "font_class": "home",
  "unicode": "\uE662"
}, {
  "font_class": "home-filled",
  "unicode": "\uE663"
}, {
  "font_class": "image",
  "unicode": "\uE670"
}, {
  "font_class": "image-filled",
  "unicode": "\uE678"
}, {
  "font_class": "images",
  "unicode": "\uE650"
}, {
  "font_class": "images-filled",
  "unicode": "\uE64B"
}, {
  "font_class": "info",
  "unicode": "\uE669"
}, {
  "font_class": "info-filled",
  "unicode": "\uE649"
}, {
  "font_class": "left",
  "unicode": "\uE6B7"
}, {
  "font_class": "link",
  "unicode": "\uE6A5"
}, {
  "font_class": "list",
  "unicode": "\uE644"
}, {
  "font_class": "location",
  "unicode": "\uE6AE"
}, {
  "font_class": "location-filled",
  "unicode": "\uE6AF"
}, {
  "font_class": "locked",
  "unicode": "\uE66B"
}, {
  "font_class": "locked-filled",
  "unicode": "\uE668"
}, {
  "font_class": "loop",
  "unicode": "\uE633"
}, {
  "font_class": "mail-open",
  "unicode": "\uE643"
}, {
  "font_class": "mail-open-filled",
  "unicode": "\uE63A"
}, {
  "font_class": "map",
  "unicode": "\uE667"
}, {
  "font_class": "map-filled",
  "unicode": "\uE666"
}, {
  "font_class": "map-pin",
  "unicode": "\uE6AD"
}, {
  "font_class": "map-pin-ellipse",
  "unicode": "\uE6AC"
}, {
  "font_class": "medal",
  "unicode": "\uE6A2"
}, {
  "font_class": "medal-filled",
  "unicode": "\uE6C3"
}, {
  "font_class": "mic",
  "unicode": "\uE671"
}, {
  "font_class": "mic-filled",
  "unicode": "\uE677"
}, {
  "font_class": "micoff",
  "unicode": "\uE67E"
}, {
  "font_class": "micoff-filled",
  "unicode": "\uE6B0"
}, {
  "font_class": "minus",
  "unicode": "\uE66F"
}, {
  "font_class": "minus-filled",
  "unicode": "\uE67D"
}, {
  "font_class": "more",
  "unicode": "\uE64D"
}, {
  "font_class": "more-filled",
  "unicode": "\uE64E"
}, {
  "font_class": "navigate",
  "unicode": "\uE66E"
}, {
  "font_class": "navigate-filled",
  "unicode": "\uE67A"
}, {
  "font_class": "notification",
  "unicode": "\uE6A6"
}, {
  "font_class": "notification-filled",
  "unicode": "\uE6C1"
}, {
  "font_class": "paperclip",
  "unicode": "\uE652"
}, {
  "font_class": "paperplane",
  "unicode": "\uE672"
}, {
  "font_class": "paperplane-filled",
  "unicode": "\uE675"
}, {
  "font_class": "person",
  "unicode": "\uE699"
}, {
  "font_class": "person-filled",
  "unicode": "\uE69D"
}, {
  "font_class": "personadd",
  "unicode": "\uE69F"
}, {
  "font_class": "personadd-filled",
  "unicode": "\uE698"
}, {
  "font_class": "personadd-filled-copy",
  "unicode": "\uE6D1"
}, {
  "font_class": "phone",
  "unicode": "\uE69C"
}, {
  "font_class": "phone-filled",
  "unicode": "\uE69B"
}, {
  "font_class": "plus",
  "unicode": "\uE676"
}, {
  "font_class": "plus-filled",
  "unicode": "\uE6C7"
}, {
  "font_class": "plusempty",
  "unicode": "\uE67B"
}, {
  "font_class": "pulldown",
  "unicode": "\uE632"
}, {
  "font_class": "pyq",
  "unicode": "\uE682"
}, {
  "font_class": "qq",
  "unicode": "\uE680"
}, {
  "font_class": "redo",
  "unicode": "\uE64A"
}, {
  "font_class": "redo-filled",
  "unicode": "\uE655"
}, {
  "font_class": "refresh",
  "unicode": "\uE657"
}, {
  "font_class": "refresh-filled",
  "unicode": "\uE656"
}, {
  "font_class": "refreshempty",
  "unicode": "\uE6BF"
}, {
  "font_class": "reload",
  "unicode": "\uE6B2"
}, {
  "font_class": "right",
  "unicode": "\uE6B5"
}, {
  "font_class": "scan",
  "unicode": "\uE62A"
}, {
  "font_class": "search",
  "unicode": "\uE654"
}, {
  "font_class": "settings",
  "unicode": "\uE653"
}, {
  "font_class": "settings-filled",
  "unicode": "\uE6CE"
}, {
  "font_class": "shop",
  "unicode": "\uE62F"
}, {
  "font_class": "shop-filled",
  "unicode": "\uE6CD"
}, {
  "font_class": "smallcircle",
  "unicode": "\uE67C"
}, {
  "font_class": "smallcircle-filled",
  "unicode": "\uE665"
}, {
  "font_class": "sound",
  "unicode": "\uE684"
}, {
  "font_class": "sound-filled",
  "unicode": "\uE686"
}, {
  "font_class": "spinner-cycle",
  "unicode": "\uE68A"
}, {
  "font_class": "staff",
  "unicode": "\uE6A7"
}, {
  "font_class": "staff-filled",
  "unicode": "\uE6CB"
}, {
  "font_class": "star",
  "unicode": "\uE688"
}, {
  "font_class": "star-filled",
  "unicode": "\uE68F"
}, {
  "font_class": "starhalf",
  "unicode": "\uE683"
}, {
  "font_class": "trash",
  "unicode": "\uE687"
}, {
  "font_class": "trash-filled",
  "unicode": "\uE685"
}, {
  "font_class": "tune",
  "unicode": "\uE6AA"
}, {
  "font_class": "tune-filled",
  "unicode": "\uE6CA"
}, {
  "font_class": "undo",
  "unicode": "\uE64F"
}, {
  "font_class": "undo-filled",
  "unicode": "\uE64C"
}, {
  "font_class": "up",
  "unicode": "\uE6B6"
}, {
  "font_class": "top",
  "unicode": "\uE6B6"
}, {
  "font_class": "upload",
  "unicode": "\uE690"
}, {
  "font_class": "upload-filled",
  "unicode": "\uE68E"
}, {
  "font_class": "videocam",
  "unicode": "\uE68C"
}, {
  "font_class": "videocam-filled",
  "unicode": "\uE689"
}, {
  "font_class": "vip",
  "unicode": "\uE6A8"
}, {
  "font_class": "vip-filled",
  "unicode": "\uE6C6"
}, {
  "font_class": "wallet",
  "unicode": "\uE6B1"
}, {
  "font_class": "wallet-filled",
  "unicode": "\uE6C2"
}, {
  "font_class": "weibo",
  "unicode": "\uE68B"
}, {
  "font_class": "weixin",
  "unicode": "\uE691"
}];

// export const fontData = JSON.parse<IconsDataItem>(fontDataJson)
exports.fontData = fontData;

/***/ }),

/***/ 340:
/*!********************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 341));
var _es = _interopRequireDefault(__webpack_require__(/*! ./es.json */ 342));
var _fr = _interopRequireDefault(__webpack_require__(/*! ./fr.json */ 343));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 344));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 345));
var _default = {
  en: _en.default,
  es: _es.default,
  fr: _fr.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 341:
/*!*******************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/en.json ***!
  \*******************************************************************************************************/
/*! exports provided: uni-pagination.prevText, uni-pagination.nextText, uni-pagination.piecePerPage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-pagination.prevText\":\"prev\",\"uni-pagination.nextText\":\"next\",\"uni-pagination.piecePerPage\":\"piece/page\"}");

/***/ }),

/***/ 342:
/*!*******************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/es.json ***!
  \*******************************************************************************************************/
/*! exports provided: uni-pagination.prevText, uni-pagination.nextText, uni-pagination.piecePerPage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-pagination.prevText\":\"anterior\",\"uni-pagination.nextText\":\"prxima\",\"uni-pagination.piecePerPage\":\"Art��culo/P��gina\"}");

/***/ }),

/***/ 343:
/*!*******************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/fr.json ***!
  \*******************************************************************************************************/
/*! exports provided: uni-pagination.prevText, uni-pagination.nextText, uni-pagination.piecePerPage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-pagination.prevText\":\"précédente\",\"uni-pagination.nextText\":\"suivante\",\"uni-pagination.piecePerPage\":\"Articles/Pages\"}");

/***/ }),

/***/ 344:
/*!************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/zh-Hans.json ***!
  \************************************************************************************************************/
/*! exports provided: uni-pagination.prevText, uni-pagination.nextText, uni-pagination.piecePerPage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-pagination.prevText\":\"上一页\",\"uni-pagination.nextText\":\"下一页\",\"uni-pagination.piecePerPage\":\"条/页\"}");

/***/ }),

/***/ 345:
/*!************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-pagination/components/uni-pagination/i18n/zh-Hant.json ***!
  \************************************************************************************************************/
/*! exports provided: uni-pagination.prevText, uni-pagination.nextText, uni-pagination.piecePerPage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-pagination.prevText\":\"上一頁\",\"uni-pagination.nextText\":\"下一頁\",\"uni-pagination.piecePerPage\":\"條/頁\"}");

/***/ }),

/***/ 35:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 36:
/*!****************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/store/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 37));
_vue.default.use(_vuex.default);

// 存储用户信息
var _default = new _vuex.default.Store({
  state: {
    userInfo: null,
    token: null
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return !!state.token;
    }
  },
  mutations: {
    setUserInfo: function setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setToken: function setToken(state, token) {
      state.token = token;
    },
    logout: function logout(state) {
      state.userInfo = null;
      state.token = null;
    }
  }
});
exports.default = _default;

/***/ }),

/***/ 37:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 38:
/*!******************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/common/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  webUrl: 'http://49.234.123.211:8000'
};
exports.default = _default;

/***/ }),

/***/ 388:
/*!********************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 190));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 191));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 193));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};
var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {
  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });
  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }
  return false;
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  }
};
var RuleValidator = /*#__PURE__*/function () {
  function RuleValidator(message) {
    (0, _classCallCheck2.default)(this, RuleValidator);
    this._message = message;
  }
  (0, _createClass2.default)(RuleValidator, [{
    key: "validateRule",
    value: function () {
      var _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fieldKey, fieldValue, value, data, allData) {
        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;
                rules = fieldValue.rules;
                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });
                if (!(hasRequired < 0)) {
                  _context.next = 8;
                  break;
                }
                if (!(value === null || value === undefined)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", result);
              case 6:
                if (!(typeof value === 'string' && !value.length)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", result);
              case 8:
                message = this._message;
                if (!(rules === undefined)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", message['default']);
              case 11:
                i = 0;
              case 12:
                if (!(i < rules.length)) {
                  _context.next = 35;
                  break;
                }
                rule = rules[i];
                vt = this._getValidateType(rule);
                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]")
                });
                if (!RuleValidatorHelper[vt]) {
                  _context.next = 20;
                  break;
                }
                result = RuleValidatorHelper[vt](rule, value, message);
                if (!(result != null)) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("break", 35);
              case 20:
                if (!rule.validateExpr) {
                  _context.next = 26;
                  break;
                }
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);
                if (!(resultExpr === false)) {
                  _context.next = 26;
                  break;
                }
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);
                return _context.abrupt("break", 35);
              case 26:
                if (!rule.validateFunction) {
                  _context.next = 32;
                  break;
                }
                _context.next = 29;
                return this.validateFunction(rule, value, data, allData, vt);
              case 29:
                result = _context.sent;
                if (!(result !== null)) {
                  _context.next = 32;
                  break;
                }
                return _context.abrupt("break", 35);
              case 32:
                i++;
                _context.next = 12;
                break;
              case 35:
                if (result !== null) {
                  result = message.TAG + result;
                }
                return _context.abrupt("return", result);
              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validateRule(_x, _x2, _x3, _x4, _x5) {
        return _validateRule.apply(this, arguments);
      }
      return validateRule;
    }()
  }, {
    key: "validateFunction",
    value: function () {
      var _validateFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rule, value, data, allData, vt) {
        var result, callbackMessage, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = null;
                _context2.prev = 1;
                callbackMessage = null;
                _context2.next = 5;
                return rule.validateFunction(rule, value, allData || data, function (message) {
                  callbackMessage = message;
                });
              case 5:
                res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }
                _context2.next = 12;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                result = this._getMessage(rule, _context2.t0.message, vt);
              case 12:
                return _context2.abrupt("return", result);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));
      function validateFunction(_x6, _x7, _x8, _x9, _x10) {
        return _validateFunction.apply(this, arguments);
      }
      return validateFunction;
    }()
  }, {
    key: "_getMessage",
    value: function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    }
  }, {
    key: "_getValidateType",
    value: function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    }
  }]);
  return RuleValidator;
}();
var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || (0, _typeof2.default)(value))) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }
    return null;
  },
  range: function range(rule, value, message) {
    var range = rule.range,
      errorMessage = rule.errorMessage;
    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }
    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }
    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }
    return null;
  },
  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var minimum = rule.minimum,
      maximum = rule.maximum,
      exclusiveMinimum = rule.exclusiveMinimum,
      exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;
    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }
    return null;
  },
  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;
    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }
    return null;
  },
  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    return null;
  },
  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }
    return null;
  },
  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }
    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }
    return null;
  }
};
var SchemaValidator = /*#__PURE__*/function (_RuleValidator) {
  (0, _inherits2.default)(SchemaValidator, _RuleValidator);
  var _super = _createSuper(SchemaValidator);
  function SchemaValidator(schema, options) {
    var _this;
    (0, _classCallCheck2.default)(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);
    _this._schema = schema;
    _this._options = options || null;
    return _this;
  }
  (0, _createClass2.default)(SchemaValidator, [{
    key: "updateSchema",
    value: function updateSchema(schema) {
      this._schema = schema;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 4;
                return this.invokeValidate(data, false, allData);
              case 4:
                result = _context3.sent;
              case 5:
                return _context3.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function validate(_x11, _x12) {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "validateAll",
    value: function () {
      var _validateAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context4.next = 5;
                  break;
                }
                _context4.next = 4;
                return this.invokeValidate(data, true, allData);
              case 4:
                result = _context4.sent;
              case 5:
                return _context4.abrupt("return", result);
              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function validateAll(_x13, _x14) {
        return _validateAll.apply(this, arguments);
      }
      return validateAll;
    }()
  }, {
    key: "validateUpdate",
    value: function () {
      var _validateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context5.next = 5;
                  break;
                }
                _context5.next = 4;
                return this.invokeValidateUpdate(data, false, allData);
              case 4:
                result = _context5.sent;
              case 5:
                return _context5.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function validateUpdate(_x15, _x16) {
        return _validateUpdate.apply(this, arguments);
      }
      return validateUpdate;
    }()
  }, {
    key: "invokeValidate",
    value: function () {
      var _invokeValidate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, all, allData) {
        var result, schema, key, value, errorMessage;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = [];
                schema = this._schema;
                _context6.t0 = _regenerator.default.keys(schema);
              case 3:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 15;
                  break;
                }
                key = _context6.t1.value;
                value = schema[key];
                _context6.next = 8;
                return this.validateRule(key, value, data[key], data, allData);
              case 8:
                errorMessage = _context6.sent;
                if (!(errorMessage != null)) {
                  _context6.next = 13;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context6.next = 13;
                  break;
                }
                return _context6.abrupt("break", 15);
              case 13:
                _context6.next = 3;
                break;
              case 15:
                return _context6.abrupt("return", result);
              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function invokeValidate(_x17, _x18, _x19) {
        return _invokeValidate.apply(this, arguments);
      }
      return invokeValidate;
    }()
  }, {
    key: "invokeValidateUpdate",
    value: function () {
      var _invokeValidateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, all, allData) {
        var result, key, errorMessage;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = [];
                _context7.t0 = _regenerator.default.keys(data);
              case 2:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 13;
                  break;
                }
                key = _context7.t1.value;
                _context7.next = 6;
                return this.validateRule(key, this._schema[key], data[key], data, allData);
              case 6:
                errorMessage = _context7.sent;
                if (!(errorMessage != null)) {
                  _context7.next = 11;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context7.next = 11;
                  break;
                }
                return _context7.abrupt("break", 13);
              case 11:
                _context7.next = 2;
                break;
              case 13:
                return _context7.abrupt("return", result);
              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function invokeValidateUpdate(_x20, _x21, _x22) {
        return _invokeValidateUpdate.apply(this, arguments);
      }
      return invokeValidateUpdate;
    }()
  }, {
    key: "_checkFieldInSchema",
    value: function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage
      }];
    }
  }]);
  return SchemaValidator;
}(RuleValidator);
function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间'
    },
    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}
SchemaValidator.message = new Message();
var _default = SchemaValidator;
exports.default = _default;

/***/ }),

/***/ 389:
/*!*****************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */
exports.deepCopy = deepCopy;
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */
exports.typeFilter = typeFilter;
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {
    return val.format && typeFilter(val.format);
  });
  var isRuleBoolType = rules.find(function (val) {
    return val.format && val.format === 'boolean' || val.format === 'bool';
  });
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }
  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */
exports.getValue = getValue;
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */
exports.setDataValue = setDataValue;
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */
exports.getDataValue = getDataValue;
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value
  };
};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.getDataValueType = getDataValueType;
var realName = function realName(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if ((0, _typeof2.default)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {
      return a += "#".concat(b);
    }, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.realName = realName;
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */
exports.isRealName = isRealName;
var rawData = function rawData() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */
exports.rawData = rawData;
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {
    return isNumber(v) ? Number(v) : v;
  });
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */
exports.name2arr = name2arr;
var objSet = function objSet(object, path, value) {
  if ((0, _typeof2.default)(object) !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
exports.objSet = objSet;
function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};

/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */
exports.objGet = objGet;
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */
exports.isNumber = isNumber;
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */
exports.isBoolean = isBoolean;
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};

/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */
exports.isRequiredField = isRequiredField;
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return (0, _typeof2.default)(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : (0, _typeof2.default)(obj);
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */
exports.type = type;
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
    classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
      propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};
exports.isEqual = isEqual;

/***/ }),

/***/ 39:
/*!*******************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/common/request.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 38));
var _default = {
  config: {
    baseUrl: _config.default.webUrl,
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {},
    method: "POST",
    dataType: "json"
  },
  request: function request() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    options.header = options.header || this.config.header;
    options.method = options.method || this.config.method;
    options.dataType = options.dataType || this.config.dataType;
    options.url = this.config.baseUrl + options.url;
    //TODO: token等操作
    // if(options.token) {
    // 	if(options.checkToken && !User.token) {
    // 		uni.showToast({ title: '您未登录', icon:"none" })
    // 		return uni.navigateTo({
    // 			url: '/pages/login/login'
    // 		});
    // 	}
    // 	options.header.token = User.token;
    // }

    return uni.request(options);
  },
  get: function get(url, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  },
  post: function post(url, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 432:
/*!******************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 433));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 434));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 435));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 433:
/*!*****************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/en.json ***!
  \*****************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.SUN, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"select date\",\"uni-datetime-picker.selectTime\":\"select time\",\"uni-datetime-picker.selectDateTime\":\"select date and time\",\"uni-datetime-picker.startDate\":\"start date\",\"uni-datetime-picker.endDate\":\"end date\",\"uni-datetime-picker.startTime\":\"start time\",\"uni-datetime-picker.endTime\":\"end time\",\"uni-datetime-picker.ok\":\"ok\",\"uni-datetime-picker.clear\":\"clear\",\"uni-datetime-picker.cancel\":\"cancel\",\"uni-datetime-picker.year\":\"-\",\"uni-datetime-picker.month\":\"\",\"uni-calender.MON\":\"MON\",\"uni-calender.TUE\":\"TUE\",\"uni-calender.WED\":\"WED\",\"uni-calender.THU\":\"THU\",\"uni-calender.FRI\":\"FRI\",\"uni-calender.SAT\":\"SAT\",\"uni-calender.SUN\":\"SUN\",\"uni-calender.confirm\":\"confirm\"}");

/***/ }),

/***/ 434:
/*!**********************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hans.json ***!
  \**********************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"选择日期\",\"uni-datetime-picker.selectTime\":\"选择时间\",\"uni-datetime-picker.selectDateTime\":\"选择日期时间\",\"uni-datetime-picker.startDate\":\"开始日期\",\"uni-datetime-picker.endDate\":\"结束日期\",\"uni-datetime-picker.startTime\":\"开始时间\",\"uni-datetime-picker.endTime\":\"结束时间\",\"uni-datetime-picker.ok\":\"确定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"确认\"}");

/***/ }),

/***/ 435:
/*!**********************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hant.json ***!
  \**********************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"選擇日期\",\"uni-datetime-picker.selectTime\":\"選擇時間\",\"uni-datetime-picker.selectDateTime\":\"選擇日期時間\",\"uni-datetime-picker.startDate\":\"開始日期\",\"uni-datetime-picker.endDate\":\"結束日期\",\"uni-datetime-picker.startTime\":\"開始时间\",\"uni-datetime-picker.endTime\":\"結束时间\",\"uni-datetime-picker.ok\":\"確定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"確認\"}");

/***/ }),

/***/ 436:
/*!************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-datetime-picker/components/uni-datetime-picker/util.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
exports.addZero = addZero;
exports.checkDate = checkDate;
exports.dateCompare = dateCompare;
exports.fixIosDateFormat = fixIosDateFormat;
exports.getDate = getDate;
exports.getDateTime = getDateTime;
exports.getDefaultSecond = getDefaultSecond;
exports.getTime = getTime;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      range = _ref.range;
    (0, _classCallCheck2.default)(this, Calendar);
    // 当前日期
    this.date = this.getDateObj(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 起始时间
    this.startDate = startDate;
    // 终止时间
    this.endDate = endDate;
    // 是否范围选择
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    this.lastHover = false;
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  (0, _createClass2.default)(Calendar, [{
    key: "setDate",
    value: function setDate(date) {
      var selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */
  }, {
    key: "cleanMultipleStatus",
    value: function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: []
      };
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setEndDate",
    value: function setEndDate(endDate) {
      this.endDate = endDate;
    }
  }, {
    key: "getPreMonthObj",
    value: function getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      var newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
  }, {
    key: "getNextMonthObj",
    value: function getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      var newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }

    /**
     * 获取指定格式Date对象
     */
  }, {
    key: "getDateObj",
    value: function getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }

    /**
     * 获取上一个月日期集合
     */
  }, {
    key: "getPreMonthDays",
    value: function getPreMonthDays(amount, dateObj) {
      var result = [];
      for (var i = amount - 1; i >= 0; i--) {
        var month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i).getDate(),
          month: month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
  }, {
    key: "getCurrentMonthDays",
    value: function getCurrentMonthDays(amount, dateObj) {
      var _this = this;
      var result = [];
      var fullDate = this.date.fullDate;
      var _loop = function _loop(i) {
        var currentDate = "".concat(dateObj.year, "-").concat(dateObj.month, "-").concat(addZero(i));
        var isToday = fullDate === currentDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          disableBefore = dateCompare(_this.startDate, currentDate);
        }
        if (_this.endDate) {
          disableAfter = dateCompare(currentDate, _this.endDate);
        }
        var multiples = _this.multipleStatus.data;
        var multiplesStatus = -1;
        if (_this.range && multiples) {
          multiplesStatus = multiples.findIndex(function (item) {
            return _this.dateEqual(item, currentDate);
          });
        }
        var checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.isLogicBefore(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          afterMultiple: _this.isLogicAfter(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          month: dateObj.month,
          disable: _this.startDate && !dateCompare(_this.startDate, currentDate) || _this.endDate && !dateCompare(currentDate, _this.endDate),
          isToday: isToday,
          userChecked: false,
          extraInfo: info
        });
      };
      for (var i = 1; i <= amount; i++) {
        _loop(i);
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
  }, {
    key: "_getNextMonthDays",
    value: function _getNextMonthDays(amount, dateObj) {
      var result = [];
      var month = dateObj.month + 1;
      for (var i = 1; i <= amount; i++) {
        result.push({
          date: i,
          month: month,
          disable: true
        });
      }
      return result;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */
  }, {
    key: "getInfo",
    value: function getInfo(date) {
      var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var res = this.calendar.find(function (item) {
        return item.fullDate === _this2.getDateObj(date).fullDate;
      });
      return res ? res : this.getDateObj(date);
    }

    /**
     * 比较时间是否相等
     */
  }, {
    key: "dateEqual",
    value: function dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }

    /**
     *  比较真实起始日期
     */
  }, {
    key: "isLogicBefore",
    value: function isLogicBefore(currentDate, before, after) {
      var logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
  }, {
    key: "isLogicAfter",
    value: function isLogicAfter(currentDate, before, after) {
      var logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }

    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
  }, {
    key: "geDateAll",
    value: function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }

    /**
     *  获取多选状态
     */
  }, {
    key: "setMultiple",
    value: function setMultiple(fullDate) {
      if (!this.range) return;
      var _this$multipleStatus = this.multipleStatus,
        before = _this$multipleStatus.before,
        after = _this$multipleStatus.after;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = '';
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.multipleStatus.after = undefined;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     *  鼠标 hover 更新多选状态
     */
  }, {
    key: "setHoverMultiple",
    value: function setHoverMultiple(fullDate) {
      //抖音小程序点击会触发hover事件，需要避免一下

      if (!this.range || this.lastHover) return;
      var before = this.multipleStatus.before;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     * 更新默认值多选状态
     */
  }, {
    key: "setDefaultMultiple",
    value: function setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */
  }, {
    key: "getWeeks",
    value: function getWeeks(dateData) {
      var _this$getDateObj = this.getDateObj(dateData),
        year = _this$getDateObj.year,
        month = _this$getDateObj.month;
      var preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      var preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      var currentMonthDayAmount = new Date(year, month, 0).getDate();
      var currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      var nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      var nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      var calendarDays = [].concat((0, _toConsumableArray2.default)(preMonthDays), (0, _toConsumableArray2.default)(currentMonthDays), (0, _toConsumableArray2.default)(nextMonthDays));
      var weeks = new Array(6);
      for (var i = 0; i < calendarDays.length; i++) {
        var index = Math.floor(i / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i % 7] = calendarDays[i];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  }]);
  return Calendar;
}();
exports.Calendar = Calendar;
function getDateTime(date, hideSecond) {
  return "".concat(getDate(date), " ").concat(getTime(date, hideSecond));
}
function getDate(date) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(year, "-").concat(addZero(month), "-").concat(addZero(day));
}
function getTime(date, hideSecond) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return hideSecond ? "".concat(addZero(hour), ":").concat(addZero(minute)) : "".concat(addZero(hour), ":").concat(addZero(minute), ":").concat(addZero(second));
}
function addZero(num) {
  if (num < 10) {
    num = "0".concat(num);
  }
  return num;
}
function getDefaultSecond(hideSecond) {
  return hideSecond ? '00:00' : '00:00:00';
}
function dateCompare(startDate, endDate) {
  startDate = new Date(fixIosDateFormat(startDate));
  endDate = new Date(fixIosDateFormat(endDate));
  return startDate <= endDate;
}
function checkDate(date) {
  var dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
  return date.match(dateReg);
}
//ios低版本15及以下，无法匹配 没有 ’秒‘ 时的情况，所以需要在末尾 秒 加上 问号
var dateTimeReg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9])?)?$/;
function fixIosDateFormat(value) {
  if (typeof value === 'string' && dateTimeReg.test(value)) {
    value = value.replace(/-/g, '/');
  }
  return value;
}

/***/ }),

/***/ 444:
/*!*************************************************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 533:
/*!**************************************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/pages/user/images/iconPark-level.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/iconPark-level.e0a1774f.svg";

/***/ }),

/***/ 582:
/*!******************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/util/throttle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
// utils/throttle.js
function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timer = null;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer) return;
    timer = setTimeout(function () {
      fn.apply(_this, args);
      timer = null;
    }, delay);
  };
}

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62:
/*!*************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/api/work.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateWarehouse = exports.updateStockTakingString = exports.updateStockTaking = exports.updateHotelClass = exports.updateGoodsItme = exports.submitHotel = exports.reportEmail = exports.goodsDirectly = exports.getWarehouse = exports.getStockTakingStringSummary = exports.getStockTakingString = exports.getStockTaking = exports.getStockOperate = exports.getReportGoodsCurrent = exports.getReportConsumeMonth = exports.getQrcode = exports.getHotelClass = exports.getGoodsString = exports.getGoodsItme = exports.deleteWarehouse = exports.deleteHotelClass = exports.deleteGoodsItme = exports.addWarehouse = exports.addStockTakingString = exports.addStockTaking = exports.addStockOperate = exports.addHotelClass = exports.addGoodsItme = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! @/api/request.js */ 63));
// 获取分类
var getHotelClass = function getHotelClass(data) {
  return (0, _request.default)({
    url: '/api/hotel/class',
    method: 'GET',
    data: data
  });
};
// 新增分类
exports.getHotelClass = getHotelClass;
var addHotelClass = function addHotelClass(data) {
  return (0, _request.default)({
    url: '/api/hotel/class',
    method: 'POST',
    data: data
  });
};
// 修改分类
exports.addHotelClass = addHotelClass;
var updateHotelClass = function updateHotelClass(data) {
  return (0, _request.default)({
    url: '/api/hotel/class',
    method: 'PUT',
    data: data
  });
};
// 删除分类
exports.updateHotelClass = updateHotelClass;
var deleteHotelClass = function deleteHotelClass(data) {
  return (0, _request.default)({
    url: '/api/hotel/class',
    method: 'DELETE',
    data: data
  });
};
// 获取仓库列表
exports.deleteHotelClass = deleteHotelClass;
var getWarehouse = function getWarehouse(data) {
  return (0, _request.default)({
    url: '/api/hotel/warehouse',
    method: 'GET',
    data: data
  });
};
// 修改仓库
exports.getWarehouse = getWarehouse;
var updateWarehouse = function updateWarehouse(data) {
  return (0, _request.default)({
    url: '/api/hotel/warehouse',
    method: 'PUT',
    data: data
  });
};
// 新增仓库
exports.updateWarehouse = updateWarehouse;
var addWarehouse = function addWarehouse(data) {
  return (0, _request.default)({
    url: '/api/hotel/warehouse',
    method: 'POST',
    data: data
  });
};
// 删除仓库
exports.addWarehouse = addWarehouse;
var deleteWarehouse = function deleteWarehouse(data) {
  return (0, _request.default)({
    url: '/api/hotel/warehouse',
    method: 'DELETE',
    data: data
  });
};
// 删除商品
exports.deleteWarehouse = deleteWarehouse;
var deleteGoodsItme = function deleteGoodsItme(data) {
  return (0, _request.default)({
    url: '/api/goods/item',
    method: 'DELETE',
    data: data
  });
};
// 获取商品列表
exports.deleteGoodsItme = deleteGoodsItme;
var getGoodsItme = function getGoodsItme(data) {
  return (0, _request.default)({
    url: '/api/goods/item',
    method: 'GET',
    data: data
  });
};
// 修改商品
exports.getGoodsItme = getGoodsItme;
var updateGoodsItme = function updateGoodsItme(data) {
  return (0, _request.default)({
    url: '/api/goods/item',
    method: 'PUT',
    data: data
  });
};
// 新增商品
exports.updateGoodsItme = updateGoodsItme;
var addGoodsItme = function addGoodsItme(data) {
  return (0, _request.default)({
    url: '/api/goods/item',
    method: 'POST',
    data: data
  });
};

// 初始化提交
exports.addGoodsItme = addGoodsItme;
var submitHotel = function submitHotel(data) {
  return (0, _request.default)({
    url: '/api/hotel/item',
    method: 'POST',
    data: data
  });
};
// 新增盘点
exports.submitHotel = submitHotel;
var addStockTaking = function addStockTaking(data) {
  return (0, _request.default)({
    url: '/api/stock/taking',
    method: 'POST',
    data: data
  });
};
// 修改盘点
exports.addStockTaking = addStockTaking;
var updateStockTaking = function updateStockTaking(data) {
  return (0, _request.default)({
    url: '/api/stock/taking',
    method: 'PUT',
    data: data
  });
};
// 获取盘点
exports.updateStockTaking = updateStockTaking;
var getStockTaking = function getStockTaking(data) {
  return (0, _request.default)({
    url: '/api/stock/taking',
    method: 'GET',
    data: data
  });
};

// 商品列表下拉
exports.getStockTaking = getStockTaking;
var getGoodsString = function getGoodsString(data) {
  return (0, _request.default)({
    url: '/api/goods/string',
    method: 'GET',
    data: data
  });
};
// 获取当前盘点列表
exports.getGoodsString = getGoodsString;
var getStockTakingString = function getStockTakingString(data) {
  return (0, _request.default)({
    url: '/api/stock/taking/goods',
    method: 'GET',
    data: data
  });
};
// 盘点填写数量（个）
exports.getStockTakingString = getStockTakingString;
var updateStockTakingString = function updateStockTakingString(data) {
  return (0, _request.default)({
    url: '/api/stock/taking/goods',
    method: 'PUT',
    data: data
  });
};
// 新增选择商品
exports.updateStockTakingString = updateStockTakingString;
var addStockTakingString = function addStockTakingString(data) {
  return (0, _request.default)({
    url: '/api/stock/taking/goods',
    method: 'POST',
    data: data
  });
};
// 获取盘点统计信息
exports.addStockTakingString = addStockTakingString;
var getStockTakingStringSummary = function getStockTakingStringSummary(data) {
  return (0, _request.default)({
    url: '/api/stock/taking/goods/summary',
    method: 'GET',
    data: data
  });
};

// 获取月度用户消耗表
exports.getStockTakingStringSummary = getStockTakingStringSummary;
var getReportConsumeMonth = function getReportConsumeMonth(data) {
  return (0, _request.default)({
    url: '/api/report/consume/month',
    method: 'GET',
    data: data
  });
};
// 发送邮件
exports.getReportConsumeMonth = getReportConsumeMonth;
var reportEmail = function reportEmail(data) {
  return (0, _request.default)({
    url: '/api/report/email',
    method: 'POST',
    data: data
  });
};

// 获取实时库存明细
exports.reportEmail = reportEmail;
var getReportGoodsCurrent = function getReportGoodsCurrent(data) {
  return (0, _request.default)({
    url: '/api/report/goods/current',
    method: 'GET',
    data: data
  });
};

// 获取出入库明细
exports.getReportGoodsCurrent = getReportGoodsCurrent;
var getStockOperate = function getStockOperate(data) {
  return (0, _request.default)({
    url: '/api/stock/operate',
    method: 'GET',
    data: data
  });
};
// 出入库
exports.getStockOperate = getStockOperate;
var addStockOperate = function addStockOperate(data) {
  return (0, _request.default)({
    url: '/api/stock/operate',
    method: 'POST',
    data: data
  });
};
// 获取商品二维码
exports.addStockOperate = addStockOperate;
var getQrcode = function getQrcode(data) {
  return (0, _request.default)({
    url: '/api/goods/item/qrcode',
    method: 'GET',
    data: data
  });
};
// 商品详情进入盘点
exports.getQrcode = getQrcode;
var goodsDirectly = function goodsDirectly(data) {
  return (0, _request.default)({
    url: '/api/stock/taking/goods/directly',
    method: 'POST',
    data: data
  });
};
exports.goodsDirectly = goodsDirectly;

/***/ }),

/***/ 63:
/*!****************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/api/request.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// utils/request.js

var baseUrl = 'http://101.43.59.126:30001'; // 替换为你的接口地址

// 请求拦截器
var requestInterceptor = function requestInterceptor(config) {
  // 在请求发送之前做一些处理
  var token = uni.getStorageSync('token'); // 从本地存储获取 token
  if (token) {
    config.header = _objectSpread(_objectSpread({}, config.header), {}, {
      Authorization: "Bearer ".concat(token) // 添加 token 到请求头
    });
  }

  return config;
};

// 响应拦截器
var responseInterceptor = function responseInterceptor(response) {
  // 对响应数据做一些处理
  if (response.statusCode === 200) {
    return response.data; // 返回响应数据
  } else if (response.statusCode === 401) {
    // Token 过期，跳转到登录页面
    uni.showToast({
      title: '登录已过期，请重新登录',
      icon: 'none'
    });
    // uni.navigateTo({
    //   url: '/pages/user/user',
    // });
    return Promise.reject(response.data);
  } else {
    // 处理其他错误状态码
    uni.showToast({
      title: "\u8BF7\u6C42\u5931\u8D25\uFF1A".concat(response.statusCode),
      icon: 'none'
    });
    return Promise.reject(response.data);
  }
};

// 封装 request 方法
var request = function request(config) {
  // 请求拦截
  config = requestInterceptor(config);
  return new Promise(function (resolve, reject) {
    var token = uni.getStorageSync('token');

    // 设置请求头
    config.header = config.header || {};
    if (token) {
      config.header['Authorization'] = "Bearer ".concat(token);
    }
    uni.request({
      url: baseUrl + config.url,
      // 拼接完整 URL
      method: config.method || 'GET',
      // 默认 GET 请求
      data: config.data || {},
      // 请求参数
      header: config.header || {},
      // 请求头
      success: function success(res) {
        // 响应拦截
        resolve(responseInterceptor(res));
      },
      fail: function fail(err) {
        // 请求失败处理
        uni.showToast({
          title: '网络请求失败',
          icon: 'none'
        });
        uni.removeStorageSync('token');
        uni.reLaunch({
          url: '/pages/user/user'
        });
        reject(new Error('登录已过期，请重新登录'));
        reject(err);
      }
    });
  });
};
var _default = request;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 80:
/*!*************************************************!*\
  !*** /Users/edy/Desktop/jiu/uniapp/api/user.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPage = exports.userLogin = exports.updateHotelUser = exports.submitHotel = exports.readAppMessage = exports.getUserShopping = exports.getUserPrime = exports.getUserInvite = exports.getUserInfo = exports.getUserConfig = exports.getHotelUser = exports.getAppMessage = exports.getAppHelp = exports.getAppFeedback = exports.deleteHotelUser = exports.appConfig = exports.addAppFeedback = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! @/api/request.js */ 63));
// 初始化提交
var submitHotel = function submitHotel(data) {
  return (0, _request.default)({
    url: '/api/hotel/item',
    method: 'POST',
    data: data
  });
};

// 获取反馈
exports.submitHotel = submitHotel;
var getAppFeedback = function getAppFeedback(data) {
  return (0, _request.default)({
    url: '/api/app/feedback',
    method: 'GET',
    data: data
  });
};

// 新增反馈
exports.getAppFeedback = getAppFeedback;
var addAppFeedback = function addAppFeedback(data) {
  return (0, _request.default)({
    url: '/api/app/feedback',
    method: 'POST',
    data: data
  });
};

// 获取帮助文档
exports.addAppFeedback = addAppFeedback;
var getAppHelp = function getAppHelp(data) {
  return (0, _request.default)({
    url: '/api/app/help',
    method: 'GET',
    data: data
  });
};
// 获取消息
exports.getAppHelp = getAppHelp;
var getAppMessage = function getAppMessage(data) {
  return (0, _request.default)({
    url: '/api/app/message',
    method: 'GET',
    data: data
  });
};
exports.getAppMessage = getAppMessage;
var readAppMessage = function readAppMessage(data) {
  return (0, _request.default)({
    url: '/api/app/message/read',
    method: 'POST',
    data: data
  });
};
// 获取酒店人员
exports.readAppMessage = readAppMessage;
var getHotelUser = function getHotelUser(data) {
  return (0, _request.default)({
    url: '/api/hotel/user',
    method: 'GET',
    data: data
  });
};
// 更新酒店人员角色
exports.getHotelUser = getHotelUser;
var updateHotelUser = function updateHotelUser(data) {
  return (0, _request.default)({
    url: '/api/hotel/user',
    method: 'PUT',
    data: data
  });
};
// 删除酒店人员
exports.updateHotelUser = updateHotelUser;
var deleteHotelUser = function deleteHotelUser(data) {
  return (0, _request.default)({
    url: '/api/hotel/user',
    method: 'DELETE',
    data: data
  });
};
// 获取用户配置
exports.deleteHotelUser = deleteHotelUser;
var getUserConfig = function getUserConfig(data) {
  return (0, _request.default)({
    url: '/api/user/config',
    method: 'GET',
    data: data
  });
};

// 获取用户信息
exports.getUserConfig = getUserConfig;
var getUserInfo = function getUserInfo(data) {
  return (0, _request.default)({
    url: '/api/user/info',
    method: 'GET',
    data: data
  });
};

// 获取邀请记录
exports.getUserInfo = getUserInfo;
var getUserInvite = function getUserInvite(data) {
  return (0, _request.default)({
    url: '/api/user/invite',
    method: 'GET',
    data: data
  });
};
// 获取会员套餐
exports.getUserInvite = getUserInvite;
var getUserPrime = function getUserPrime(data) {
  return (0, _request.default)({
    url: '/api/user/prime/plan',
    method: 'GET',
    data: data
  });
};
// 获取可用优惠卷
exports.getUserPrime = getUserPrime;
var getUserShopping = function getUserShopping(data) {
  return (0, _request.default)({
    url: '/api/user/shopping/coupon',
    method: 'GET',
    data: data
  });
};
// 登录
exports.getUserShopping = getUserShopping;
var userLogin = function userLogin(data) {
  return (0, _request.default)({
    url: '/api/user/login',
    method: 'POST',
    data: data
  });
};
exports.userLogin = userLogin;
var userPage = function userPage(data) {
  return (0, _request.default)({
    url: '/api/app/page',
    method: 'GET',
    data: data
  });
};
exports.userPage = userPage;
var appConfig = function appConfig(data) {
  return (0, _request.default)({
    url: '/api/app/config',
    method: 'GET',
    data: data
  });
};
exports.appConfig = appConfig;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map