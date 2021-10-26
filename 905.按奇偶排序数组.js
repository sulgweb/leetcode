/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// 暴力解法
// 遍历，然后判断是否能被2整除（即奇偶数），然后推送到数组的头部或者尾部

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const res = [];
  nums.forEach(item => {
    if(item%2 === 0){
      res.unshift(item)
    }else{
      res.push(item)
    }
  })
  return res;
};
// @lc code=end

