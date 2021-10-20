/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// 暴力解法，将字符串转数组，然后遍历

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  const jewelsArr = jewels.split('')
  const stonesArr = stones.split('')
  for(let item of stonesArr){
    if(jewelsArr.includes(item)){
      count ++
    }
  }
  return count;
};
// @lc code=end

