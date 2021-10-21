/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */
// 暴力解法
// 利用对象，存储26个字母对应的摩斯密码
// 遍历获取每一个单词的摩斯密码并推送到数组
// 利用new Set()去重

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const obj = {}
  for(let i = 0;i<26;i++){
    obj[String.fromCharCode(i+97)] = arr[i];
  }
  let outArr = []
  for(let item of words){
    let itemWord = ''
    for(let i of item){
      itemWord += obj[i]
    }
    outArr.push(itemWord)
  }
  return [...new Set(outArr)].length;
};
// @lc code=end

