/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// 暴力解法
// 最值之差与两倍k值的比较

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  const value = max - min
  const K = Math.abs(2*k)
  if(value > K){
    return value - K
  }else{
    return 0
  }
}
// @lc code=end

