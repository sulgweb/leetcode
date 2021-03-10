/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 先获取素组一半的长度
// 然后遍历，左右项互换
var reverseString = function(s) {
  let len = Math.floor(s.length/2)
  for(let i = 0;i<len;i++){
    let newData = s[i]
    let rIndex = s.length-i-1
    s[i] = s[rIndex]
    s[rIndex] = newData
  }
  return s
};
// @lc code=end

