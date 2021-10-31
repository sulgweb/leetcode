/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// 细分数组全部大于0，小于0以及不是同时大于或者小于0的三种情况
// 优化时间复杂度

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  if(nums[0]>=0){
    return nums.map(item => item**2)
  }else if(nums[nums.length]<=0){
    return nums.map(item => item**2).reverse()
  }
  return nums.map(item => item**2).sort((a,b)=>(a - b))
};
// @lc code=end

