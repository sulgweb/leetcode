/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
// ~是按位取反运算，~~是取反两次。这里的~~主要是用来去掉小数部分
// 而area = num*area/num，所以我们子需要遍历num即可得到合适的[area/num,num]
var constructRectangle = function(area) {
  let num = ~~Math.sqrt(area)
  while(num){
    if(area%num === 0){
      return [area/num,num]
    }
    num--
  }
};
// @lc code=end

