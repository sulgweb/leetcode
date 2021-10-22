/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// 先构建数组，然后遍历填充

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const mLen = matrix.length
  const nLen = matrix[0].length
  const arr = Array.from({length: nLen}, () => [])
  for(let i = 0;i<mLen;i++){
    for(let j=0;j<nLen;j++){
      arr[j][i] = matrix[i][j]
    }
  }
  return arr
};
// @lc code=end

