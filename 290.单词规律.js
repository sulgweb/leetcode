/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 构建obj对象对pattern 和 s种单词进行存储
// obj对象添加新key值时需要对原对象进行遍历，当前项不等于key对应的所有值才存入，否则return false（双向连接的对应规律）
var wordPattern = function(pattern, s) {
  let arr = s.split(" "),obj = {}
  if(pattern.length !== arr.length){
    return false
  }
  for(let i=0;i<pattern.length;i++){
    let key = pattern[i]
    if(obj[key]){
      if(obj[key]!==arr[i]){
        return false
      }
    }else{
      for(let j in obj){
        if(j!==key&&obj[j]==arr[i]){
          return false
        }
      }
      obj[key] = arr[i]
    }
  }
  return true
};
console.log(wordPattern("abba","dog cat cat dog"))
console.log(wordPattern("abba","dog cat cat fish"))
console.log(wordPattern("aaaa","dog cat cat dog"))
console.log(wordPattern("abba","dog dog dog dog"))
// @lc code=end

