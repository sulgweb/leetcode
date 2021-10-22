/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// 暴力解法
// 解法1 遍历，到达山脉数组的最大值，然后返回索引
// 解法2 先获取最大值，然后利用数组的findIndex获取索引

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  /* for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      return i
    }
  } */
  const max = Math.max(...arr)
  return arr.findIndex(item => item === max)
};
// @lc code=end

