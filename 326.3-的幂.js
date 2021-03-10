/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 循环，看能否被三整除
// 能得话就除以3，进入下一轮循环，不能即不是3的幂
var isPowerOfThree = function(n) {
  while(n>2){
    if(n%3==0){
      n/=3
    }else{
      return false
    }
  }
  return n==1
};
// @lc code=end

