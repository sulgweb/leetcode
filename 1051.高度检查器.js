/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// 由于sort会改动原数组，因此先进行浅拷贝再排序
// 遍历获取下标不相等的总数即可

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sortArr = [...heights].sort((a,b)=>a-b)
  let sum = 0;
  let len = heights.length;
  for(let i =0;i<len;i++){
    if(sortArr[i]!=heights[i]){
      sum ++
    }
  }
  return sum;
};
// @lc code=end

