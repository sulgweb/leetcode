/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划思路，3阶=1阶的方法+2阶的方法
var climbStairs = function(n) {
  let obj = {
    1:1,
    2:2,
  }
  for(let i=3;i<=n;i++){
    obj[i] = obj[i-1]+obj[i-2]
  }
  return obj[n]
};
// @lc code=end

