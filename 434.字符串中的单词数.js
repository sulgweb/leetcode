/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 正则切割字符串，然后通过filter(Boolean)返回数组中真数据的长度
var countSegments = function(s) {
  return s.split(/\s+/).filter(Boolean).length
};
// @lc code=end

