/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// 暴力解法
// 遍历数组，当前项大于上一项时，即还是递增序列。小于上一项时为就重新计算index个数

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let maxIndex = 1,len = nums.length,current=1
  for(let i = 1;i<len;i++){
    if(nums[i]>nums[i-1]){
      current ++
    }else{
      if(maxIndex<current){
        maxIndex = current
      }
      current = 1
    }
  }
  return maxIndex<current?current:maxIndex
};

// @lc code=end

