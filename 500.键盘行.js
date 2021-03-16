/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
// 回溯法，当前项成功时直接退出，不成功再进行下一项
// toLowerCase()方法是将大写转小写
var findWords = function(words) {
  let arr1 = "qwertyuiop".split("")
  let arr2 = "asdfghjkl".split("")
  let arr3 = "zxcvbnm".split("")
  let res = []
  for(let item of words){
    let arr = item.toLowerCase().split("")
    if(dep(arr,arr1)){
      res.push(item)
    }else if(dep(arr,arr2)){
      res.push(item)
    }else if(dep(arr,arr3)){
      res.push(item)
    }
  }
  return res
};

function dep(arr,oneLine){
  let tag = true
  for(let item of arr){
    if(!oneLine.includes(item)){
      tag = false
      break;
    }
  }
  return tag
}
//console.log(findWords(["Hello","Alaska","Dad","Peace"]))
// @lc code=end

