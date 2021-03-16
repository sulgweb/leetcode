/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// 进制转换原理
var convertToBase7 = function(num) {
  if(num===0)return "0"
  let symbol = num>=0?'':'-'
  num = Math.abs(num)
  let res = ""
  while(num>=1){
    res = num%7+res
    num = ~~(num/7)
  }
  return symbol+res
};
// @lc code=end

