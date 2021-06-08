/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// 由于是循环比较的，所以当target比数组中最大的数字都要大的时候，直接返回数组的第一项
// 否则只需要找到第一个比target大的值即可
// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  return target >= letters[letters.length - 1] ? letters[0] : letters.find(item => item > target)
};
// @lc code=end