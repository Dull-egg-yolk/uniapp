
export const formatTime = (data) => {
  const date = new Date(data);
  
  // 获取年、月、日、时、分、秒
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const padZero = (num) => String(num).padStart(2, '0');
  return `${year}-${padZero(month)}-${padZero(day)}`
}
export const transformDateTime = (input) =>{
  // 1. 解析原始日期时间
  const originalDate = new Date(input.replace(' ', 'T') + '+08:00');
  
  // 2. 创建目标日期对象 (2026-01-01)
  const targetDate = new Date(originalDate);
  targetDate.setFullYear(2026);
  targetDate.setMonth(0);  // 月份是0-11，0表示一月
  targetDate.setDate(1);
  
  // 3. 重置时间为00:00:00
  targetDate.setHours(0, 0, 0, 0);
  
  // 4. 格式化为ISO字符串并保留时区
  const timezoneOffset = -targetDate.getTimezoneOffset() / 60;
  const timezone = (timezoneOffset >= 0 ? '+' : '-') + 
                  Math.abs(timezoneOffset).toString().padStart(2, '0') + ':00';
  
  // 5. 构建最终字符串
  const isoString = targetDate.toISOString().replace('Z', timezone);
  
  return isoString;
}
