/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 循环判断大小，小于等于当前项则返回下标。
// 遍历完成后还未return，说明该数字最大，返回数组最后一个下标+1（即数组长度）
var searchInsert = function(nums, target) {
  if(target<=nums[0])return 0
  for(let i = 1;i<nums.length;i++){
    if(target<=nums[i]){
      return i
    }
  }
  return nums.length
};
// @lc code=end

