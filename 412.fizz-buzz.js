/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 整除，先判断时候能被15整除，然后判断能否被3或5整除。
var fizzBuzz = function(n) {
  let res = []
  for(let i=1;i<=n;i++){
    if(i%15==0){
      res.push("FizzBuzz")
    }else if(i%3==0){
      res.push("Fizz")
    }else if(i%5==0){
      res.push("Buzz")
    }else{
      res.push(i+"")
    }
  }
  return res
};
// @lc code=end

