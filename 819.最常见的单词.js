/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// 暴力解法
// 先转小写，结合正则表达式获取数组，利用filter排除禁用的单词
// 利用对象存储出现的次数
// 遍历获取最值

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const obj = {}
  const data = paragraph.toLowerCase().match(/[a-z]+/g).filter(item => !banned.includes(item))
  data.forEach(item=>{
    if(obj[item]){
      obj[item]++
    }else{
      obj[item] = 1
    }
  })
  let max = ''
  for(let i in obj){
    if(!max){
      max = i;
      continue;
    }
    if(obj[i]>obj[max]){
      max = i
    }
  }
  return max;
};
// @lc code=end

