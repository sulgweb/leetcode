/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// 用数组中的第一个单词作为标记，因为是公用字符所以，words[0]中会出现所有的字符
// 遍历其他数组看是否为公共字符串，是的话统一使用replace替换掉一个为空字符，并将该字符推送到返回的数组

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let ans = [], word = words[0]
  for(let s of word){
    if(words.every(m => m.includes(s))) {
      words = words.map(m => m.replace(s, ''))
      ans.push(s)
    }
  }
  return ans
};
// @lc code=end

