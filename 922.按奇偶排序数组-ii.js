/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// 暴力解法
// 利用两个新数组存储奇偶数，然后遍历分别推送到返回的数组中

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  const arr1 = [], arr2 = []
  nums.forEach(item=>{
    if(item%2===0){
      arr2.push(item)
    }else{
      arr1.push(item)
    }
  })
  const res = []
  for(let i = 0;i<arr2.length;i++){
    res.push(arr2[i]);
    res.push(arr1[i])
  }
  return res;
};
// @lc code=end

