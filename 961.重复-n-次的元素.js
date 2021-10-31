/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// 遍历数组，利用map进行存储，当长度相等时return

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const len = nums.length/2;
  const map = new Map()
  for(let item of nums){
    const cur = (map.get(item) || 0) + 1;
    if(cur === len){
      return item
    }
    map.set(item, cur)
  }
};
// @lc code=end

