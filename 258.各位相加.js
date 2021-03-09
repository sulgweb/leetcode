/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */

// 数字没有length，因此隐式转换改成string后再进行判断
// 当num.length>1就继续执行。遍历num中的每个值然后转成number相加
var addDigits = function(num) {
  num += ""
  while(num.length>1){
    //console.log(num)
    let res = 0
    for(let i=0;i<num.length;i++){
      res += Number(num[i])
    }
    num = res + ""
  }
  return num
};
// @lc code=end

