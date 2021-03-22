/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 滑动窗口
// 遍历去掉前一个，加上后一个
var findMaxAverage = function(nums, k) {
  let max = prev = nums.slice(0, k).reduce((pre, cur) => pre + cur);
  for(let i = 1; i <= nums.length - k; i++) {
      prev = prev - nums[i - 1] + nums[i + k - 1];
      max = Math.max(prev, max)
  }
  return max / k
};

//console.log(findMaxAverage([1,12,-5,-6,50,3],4))
// @lc code=end

