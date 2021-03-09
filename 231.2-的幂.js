/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 当不能被2整除，肯定不是
// 当num<n,就一直乘以2，当num==n就return true
// 当num>n，说明不是2的幂了，直接return false
var isPowerOfTwo = function(n) {
  if(n===1)return true
  if(n===0)return false
  if(n%2!==0) return false
  let num = 1
  while(num<n){
    num*=2
    if(num==n)return true
    //obj[num] = true
  }
  return false
};
// @lc code=end

