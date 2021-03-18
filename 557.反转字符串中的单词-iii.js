/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 切割字符串，然后反转，最后把数组转字符串
var reverseWords = function(s) {
  s = s.split(" ")
  for(let i=0;i<s.length;i++){
    //console.log(item.split("").reverse())
    s[i] = s[i].split("").reverse().join("")
  }
  return s.join(" ")
};

// @lc code=end

