/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 遍历t，然后当s[index] == t[i]时，说明当前位置已匹配，要匹配下一位（index++）
// 当index == s.length时，说明所有都已匹配完成，即为true
var isSubsequence = function(s, t) {
  let index = 0
  for(let i = 0;i<t.length;i++){
    if(index<s.length){
      if(s[index]==t[i]){
        index++
      }
    }else{
      return true
    }
  }
  return index === s.length
};
// @lc code=end

