/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-03-14 14:51:46
 * @LastEditTime: 2021-03-14 15:00:53
 */
/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 数组排列后，使用贪心算法
var findContentChildren = function(g, s) {
  g.sort((a,b) => (a-b));
  s.sort((a,b) => (a-b));
  let child = 0;
  let cookie = 0;
  while(child < g.length && cookie < s.length){
      if(g[child] <= s[cookie]){
          child++;
      }
      cookie++;
  }
  return child;
};
// @lc code=end

