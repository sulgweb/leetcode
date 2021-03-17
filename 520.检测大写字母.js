/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
// 有全大写，全小写，以及首字母大写其他小写三种情况。
// 正则表达式
var detectCapitalUse = function(word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word)
};
// @lc code=end

