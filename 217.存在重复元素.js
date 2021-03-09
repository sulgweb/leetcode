/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 利用obj对象的key值来存储数据，如果obj[item]为true，证明存在重复的数据
var containsDuplicate = function(nums) {
  let obj = {}
  for(let item of nums){
    if(obj[item]){
      return true
    }else{
      obj[item] = 1
    }
  }
  return false
};
// @lc code=end

