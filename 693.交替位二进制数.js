/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// 暴力解法
// 先转成2进制
// 切割数组
// 遍历数组，i项为1，i+1项为0，否则返回false

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let arr = n.toString(2).split("")
  let len = arr.length
  for(let i = 0;i<len;i+=2){
    if(arr[i]!=1){
      return false
    }else if(i+1<len&&arr[i+1]!=0){
      return false
    }
  }
  return true
};
// @lc code=end

