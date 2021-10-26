/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// 利用正则将字母都保存下来(模拟栈)
// 然后利用pop方法出栈，并替换掉正则匹配中的字母

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const arr = s.match(/[a-zA-Z]/gi);
  if(arr === null){return s}
  return s.replace(/[a-zA-Z]/gi, () => arr.pop())
};
// @lc code=end

