/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */

// 切割，倒叙，26进制的转换，**为幂运算
var titleToNumber = function(columnTitle) {
  return columnTitle.split('').reverse().map((item, index) => (item.charCodeAt()-64)*26**index).reduce((pre,cur)=>pre+cur)
};
// @lc code=end

