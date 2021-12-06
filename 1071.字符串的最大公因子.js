/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// 如果存在最大公因子，说明str1和str2是有n个公因子组成的，即str1+str2===str2+str1
// 利用辗转相除法获取最大公因子的长度，然后截取最大公因子


// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  const gcd = (a,b) => 0===b?a:gcd(b, a%b);
  return str1.substring(0, gcd(str1.length, str2.length))
};
// @lc code=end

