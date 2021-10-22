/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// 暴力解法
// 利用对象储存两个句子中单词出现的次数
// 然后返回单词出现次数为1的单词数组

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const obj = {}
  s1.split(' ').forEach(item=>{
    if(obj[item]){
      obj[item]++
    }else{
      obj[item] = 1
    }
  })
  s2.split(' ').forEach(item=>{
    if(obj[item]){
      obj[item]++
    }else{
      obj[item] = 1
    }
  })
  const arr = []
  for(let item in obj){
    if(obj[item] === 1){
      arr.push(item)
    }
  }
  return arr;
};
// @lc code=end

