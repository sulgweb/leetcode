/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 当n为4的倍数时必输,不为4的倍数时必赢
var canWinNim = function(n) {
  return n%4!==0
};
// @lc code=end

