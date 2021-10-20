/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// 暴力解法
// 双重for循环，只需要判断当前项是否等于左上角的的数字即可

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for(let i=1;i<matrix.length;i++){
    for(let j=1;j<matrix[i].length;j++){
      if(matrix[i][j] !== matrix[i-1][j-1]){
        return false;
      }
    }
  }
  return true
};
// @lc code=end

