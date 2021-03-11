/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组去重加排序
var thirdMax = function(nums) {
  if(nums.length<3)return Math.max(...nums)
  let arr = [...new Set(nums)].sort((a,b)=>a-b)
  return arr.length<3?Math.max(...arr):arr[arr.length-3]
};
// @lc code=end

