/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 判断重构前后数组中元素的数量是否相等
// 数组降维
// 遍历重构后数组所需要的结构，并将降维后的数组元素切割push进来
var matrixReshape = function(nums, r, c) {
  if(nums[0]&&nums.length*nums[0].length!==r*c)return nums
  nums = nums.flat()
  let newNums = []
  for(let i=0;i<r;i++){
    newNums[i] = []
    for(let j=0;j<c;j++){
      newNums[i].push(...nums.splice(0,1))
    }
  }
  return newNums
};
//console.log(matrixReshape([[1,2],[3,4]],2,4))
// @lc code=end

