/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// 暴力解法
// 将text转数组，然后进行遍历比较即可

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const arr = text.split(' ');
  const len = arr.length-2;
  const res = []
  let i = 0;
  while(i<len){
    if(arr[i]===first){
      if(arr[i+1]===second){
        res.push(arr[i+2])
      } 
    }
    i++
  }
  return res;
};
// @lc code=end

