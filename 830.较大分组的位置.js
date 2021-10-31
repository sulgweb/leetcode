/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// 暴力解法
// 转数组后，遍历判断

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const arr = []
  const sArr = s.split('');
  let cur = sArr[0];
  let word = sArr[0];
  for(let i = 1;i<=sArr.length;i++){
    if(word === sArr[i]){
      cur += word;
    }else{
      if(cur.length>=3){
        arr.push([i - cur.length, i - 1])
      }
      word = sArr[i]
      cur = word
    }
  }
  return arr
};
// @lc code=end

