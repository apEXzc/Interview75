/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (s) {
  // 定义正则表达式，匹配以可选的空白字符、可选的正负号和连续的数字字符开头的部分
  const regex = /^\s*([+-]?\d+)/;
  const match = s.match(regex);

  if (!match) {
    // 如果没有匹配到任何有效的数字部分，返回 0
    return 0;
  }

  // 提取匹配到的数字部分，并转换为整数
  let num = parseInt(match[1], 10);

  // 定义 32 位有符号整数的范围
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  // 进行范围限制
  if (num < INT_MIN) {
    return INT_MIN;
  }
  if (num > INT_MAX) {
    return INT_MAX;
  }

  return num;
};

str = "42";
console.log(myAtoi(str));
