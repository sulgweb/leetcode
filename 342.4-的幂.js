/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 循环，看能否被4整除(多一级优化，看能不能被16整除)
// 能得话就除以4，进入下一轮循环，不能即不是4的幂
var isPowerOfFour = function(n) {
  while(n>3){
    if(n%16==0){
      n/=16
    }
    else if(n%4==0){
      n /= 4
    }else{
      return false
    }
  }
  return n==1
};
// @lc code=end

