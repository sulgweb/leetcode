/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// 若能旋转，则两个字符串的长度必须相等
// 旋转可看为将s拼接在s的后面，通过滑动窗口截取len长度的字符串

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if(s.length !== goal.length){return false}
  const tag = s+s;
  const len = goal.length;
  for(let i = 0;i<len;i++){
    if(tag.substr(i, len) === goal){
      return true
    }
  }
  return false
};
// console.log(rotateString('abcde', 'bcdea'))
// @lc code=end

