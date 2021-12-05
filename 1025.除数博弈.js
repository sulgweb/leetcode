/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 */

// 动态规划
// 当n===1时，返回false，n===2时，返回true
// 动态推算出到n的所有可能性

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  if(n===1){
    return false
  }else if (n===2){
    return true
  }
  const dp = new Array(n+1);
  dp[1] = false;
  dp[2] = true;
  for(let i = 3;i<=n;i++){
    dp[i] = false;
    for(let j =1;j<i;j++){
      if(i % j === 0 && !dp[i - j]){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n]
};
// @lc code=end

