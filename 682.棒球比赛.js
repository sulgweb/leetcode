/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */ 

// 暴力解法
// 结合switch，判断不同的类型，进行不同的操作

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let arr = []
  for(let item of ops){
    
    switch(item){
      case "+":arr.push(arr[arr.length-1]+arr[arr.length-2]);break;
      case "D":arr.push(arr[arr.length-1]*2);break;
      case "C":arr.pop();break;
      default:arr.push(Number(item))
    }
  }
  return arr.reduce((a,b)=>a+b)
};
// @lc code=end

