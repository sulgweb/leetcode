/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 *

// 暴力解法
// 遍历，每一项分别计算是否为自除数，是则推送到list，否则跳过

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let list = []
  for(;left<=right;left++){
    let arr = left.toString().split("")
    let tag = true
    for(let item of arr){
      if(left%item !== 0){
        tag = false
        break;
      }
    }
    if(tag)list.push(left)
  }
  return list
};
// @lc code=end

