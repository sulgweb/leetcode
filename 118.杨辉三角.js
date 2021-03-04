/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 双重遍历，res[i][j] = res[i-1][j-1]+res[i-1][j],如果为NaN则为1
var generate = function(numRows) {
  let res = []
  for(let i=0;i<numRows;i++){
    res[i] = []
    for(let j=0;j<=i;j++){ 
      if(res[i-1]&&res[i-1][j-1]){
        res[i][j] = res[i-1][j-1]+res[i-1][j]||1
      }else{
        res[i][j] = 1
      }
    }
  }
  return res
};
// @lc code=end

