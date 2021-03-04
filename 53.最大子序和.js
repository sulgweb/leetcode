/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  // 双重循环，当currentMax>0时，才会有增益效果，否则就该舍弃
  /* let max = nums[0]
  for(let i = 0;i<nums.length;i++){
    let currentMax = nums[i]
    if(currentMax>max){
      max = currentMax
    }
    if(currentMax + nums[i+1]>0){
      for(let j = i+1;j<nums.length;j++){
        if(currentMax+nums[j]<0){
          break;
        }
        currentMax+=nums[j]
        if(currentMax>max){
          max = currentMax
        }
      }
    }
  }
  return max */
  let max = nums[0]
  let currentMax = 0
  for(let i=0;i<nums.length;i++){
    if(currentMax>0){
      currentMax += nums[i]
    }else{
      currentMax = nums[i]
    }
    if(max<currentMax){
      max = currentMax
    }
  }
  return max
};
// @lc code=end

