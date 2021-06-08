/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let arr = moves.split("")
  let obj = {
    R:0,
    L:0,
    U:0,
    D:0
  }
  for(let item of arr){
    obj[item]++
  }
  return obj.R===obj.L&&obj.U===obj.D
};
// @lc code=end

