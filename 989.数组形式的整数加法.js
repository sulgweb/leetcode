/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// 将数组转成数组，相加，然后再转回数组即可

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  return (BigInt(num.join('')) + BigInt(k)).toString().split('')
};
// @lc code=end

