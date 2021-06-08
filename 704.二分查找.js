/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let row = 0,height = nums.length
  
  while(row<=height){
    let mid = Math.floor((row+height)/2)
    let cur = nums[mid]
    if(cur==target){
      return mid
    }else if(cur>target){
      height = mid -1
    }else if(cur<target){
      row = mid+1
    }else{
      return -1
    }
  }
  return -1
};
// @lc code=end

