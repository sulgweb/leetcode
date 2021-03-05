/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先遍历构建数字出现次数的对象obj
// 然后遍历obj，返回最大值的key
var majorityElement = function(nums) {
  let obj = {},max=null
  for(let item of nums){
    if(!obj[item]){
      obj[item] = 1
      max = item
    }else{
      obj[item] += 1
    }
  }
  for(let i in obj){
    if(obj[i]>obj[max]){
      max = i
    }
  }
  return max
};
// @lc code=end

