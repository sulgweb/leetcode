/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 利用map存储字母出现的次数。
// 然后遍历相加当前key值的一半（取floor）
// 最后返回res*2+1（如果res*2+1比原来的字符串长度还达，就返回res*2）
var longestPalindrome = function(s) {
  let map = {}
  let res = 0
  s = s.split("")
  for(let item of s){
    if(map[item]){
      map[item]++
    }else{
      map[item] = 1
    }
  }
  for(let i in map){
    res+=Math.floor(map[i]/2)
  }
  return res*2>=s.length?res*2:res*2+1
};
// @lc code=end

