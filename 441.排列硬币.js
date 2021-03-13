/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 当n>tag的时候进行循环
// 当n==tag的时候说明tag行刚好可以摆满，需要返回下一行的下标
var arrangeCoins = function(n) {
  if(n==0)return 0
  let tag = 1
  while(n>tag){
    n-=tag
    tag++
  }
  return n===tag?tag:tag-1
};
// @lc code=end

