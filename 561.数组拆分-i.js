/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序，取奇数即可
var arrayPairSum = function(nums) {
  nums.sort((a,b)=>a-b)
  let res = 0
  for(let i=0;i<nums.length;i+=2){
    res+=nums[i]
  }
  return res
};
// @lc code=end

