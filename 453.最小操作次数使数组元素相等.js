/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// -1个数同时加一，就好比每次有一个数自身减一
// 因为只能做减法，所以数组最后的数只能是最小值。这样的话每个元素减去最小值求其和就是答案。
var minMoves = function(nums) {
  let min = Math.min(...nums)
  let res = 0
  for(let item of nums){
    res+=(item-min)
  }
  return res
};
// @lc code=end

