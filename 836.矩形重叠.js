/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {
  let [x1, y1, x2, y2] = rec1
  let [r1, c1, r2, c2] = rec2
  if (x2 === x1 || y2 === y1 || r2 === r1 || c2 === c1) return false // 不是矩形
  return r1 < x2 && c1 < y2 && x1 < r2 && y1 < c2 // 重叠的话一个矩形的左下角必小于另一个矩形右上角
};
// @lc code=end

