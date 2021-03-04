/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// x为整数，所以当x小于等于1时，直接返回x
// x为大于1的整数时，则使用牛顿法进行判断
var mySqrt = function(x) {
  if(x==0||x==1){
    return x
  }
  let mid = x
  let sqrt = function(x){
    let sqrtX = (x+mid/x)/2
    if(sqrtX == x){
      return parseInt(x)
    }else{
      return sqrt (sqrtX)
    }
  }
  return sqrt(x)
};
// @lc code=end

