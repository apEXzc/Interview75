/**
 * @param {string} s
 * @return {boolean}
 */
var validNumber = function (s) {
  /*   
  ^\s*：匹配字符串开头的任意数量的空白字符。
  ([+-]?((\d+(\.\d*)?)|(\.\d+)))：匹配整数或小数。
  [+-]?：可选的正负号。
  (\d+(\.\d*)?)：匹配一个或多个数字，后面可选跟随一个小数点和零个或多个数字。
  (\.\d+)：匹配一个小数点，后面跟随一个或多个数字。
  ([eE][+-]?\d+)?：匹配可选的科学计数部分。
  [eE]：匹配字符 'e' 或 'E'。
  [+-]?：可选的正负号。
  \d+：匹配一个或多个数字。
  \s*$：匹配字符串末尾的任意数量的空白字符。 
  */

  const regex = /^\s*([+-]?((\d+(\.\d*)?)|(\.\d+)))([eE][+-]?\d+)?\s*$/;
  return regex.test(s);
};