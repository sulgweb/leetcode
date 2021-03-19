/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
// 数组去重
// 去重后的数组和原数组长度的一半比较，小的那个就是妹妹能获得最多的种类
var distributeCandies = function(candyType) {
  let len = candyType.length/2
  //let list = candyType.filter((item,index)=>candyType.indexOf(item)===index)
  let list = [...new Set(candyType)]
  return len>list.length?list.length:len
};
// @lc code=end

