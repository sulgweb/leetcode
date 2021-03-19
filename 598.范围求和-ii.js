/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// 简单来说就是获取完全叠加区域中的所有数据
// 获取ops中最小的x和y值即可
var maxCount = function(m, n, ops) {
  if(ops.length<=0)return m*n
  let xMin=ops[0][0],yMin=ops[0][1]
  for(let i = 1;i<ops.length;i++){
    if(ops[i][0]<xMin){
      xMin = ops[i][0]
    }
    if(ops[i][1]<yMin){
      yMin = ops[i][1]
    }
  }
  return xMin*yMin
};
// @lc code=end

