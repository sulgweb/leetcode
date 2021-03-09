/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 设置tag值比当前遍历的i小1
// 当i-tag>1，说明有连续的数字（区间）
// 否则无连续的数字，返回单个字符串
var summaryRanges = function(nums) {
  if(nums.length===0)return []
  if(nums.length===1)return [nums[0]+""]
  let res = [],tag = -1 
  for(let i=0;i<nums.length;i++){
    if(nums[i]+1!==nums[i+1]){
      if(i-tag>1){
        res.push(`${nums[tag+1]}->${nums[i]}`)
      }else{
        res.push(nums[i]+"")
      }
      tag = i
    }
  }
  return res
};
// @lc code=end

