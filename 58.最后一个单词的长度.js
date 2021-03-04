/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 清除首尾空格，通过空格切割字符串，返回数组最后一个子项的长度
var lengthOfLastWord = function(s) {
  s = s.trim()
  let arr = s.split(" ")
  return arr[arr.length-1].length
};

// @lc code=end

