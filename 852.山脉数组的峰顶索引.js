/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// 暴力解法
// 解法1 遍历，到达山脉数组的最大值，然后返回索引
// 解法2 先获取最大值，然后利用数组的findIndex获取索引

// 优化
// 二分法

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
  /* const max = Math.max(...arr)
  return arr.findIndex(item => item === max) */
  const len = arr.length -1
  for(let i=0;i<=len;i++){
    if(arr[i]>arr[i+1]){
      return i
    }else if(arr[len-i-1]<arr[len-i]){
      return len-i
    }
  }
};
// console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]))
// @lc code=end

