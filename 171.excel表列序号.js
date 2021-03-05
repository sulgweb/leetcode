/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let obj = {},sum = 0
  for (let i = 65; i <= 90; i++) {
      //arr.push(String.fromCharCode(i))
      obj[String.fromCharCode(i)] = i-64
  }
  let len = s.length
  for(let i=0;i<len;i++){
    sum += obj[s[i]]*(26**(len-i-1))
  }
  return sum
};
// @lc code=end

