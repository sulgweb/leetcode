/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// 暴力解法
// 遍历+多重判断

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  // 暴力解法
  // 遍历+多重判断
  /* let tag 
  for(let i = 0;i<nums.length-1;i++){
    if(nums[i]===nums[i+1]){
      continue;
    }
    if(tag){
      if(tag === '+' && nums[i] < nums[i+1]){
        continue;
      }else if(tag === '-' && nums[i] > nums[i+1]){
        continue
      }else{
        return false
      }
    }else{
      tag = nums[i] < nums[i+1] ? '+' : '-'
    }
  }
  return true */


  // 优化
  // 存储两个值，当递增或者递减同时为false的时候，说明不是单调数列
  let inc = true, sec = true
  for(let i =0;i<nums.length-1;i++){
    if(nums[i]>nums[i+1]){
      inc = false
    }
    if(nums[i]<nums[i+1]){
      sec = false
    }
  }
  return inc || sec
};
// @lc code=end

