/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用indexOf切割数组
// 推送当前切割的数据到list中
// 最后返回list中的最大值
var findMaxConsecutiveOnes = function(nums) {
  let list = []
  while(nums.length>0){
    let item = nums.splice(0,nums.indexOf(0)+1)
    list.push(item.length-1)
    if(nums.indexOf(0)==-1&&nums.length>0){
      list.push(nums.length)
      nums = []
    }
  }
  return Math.max(...list)
};

// @lc code=end

