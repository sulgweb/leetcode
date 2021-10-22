/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// 暴力解法
// 利用对象存储剩下的硬币数量，当传入的硬币为10/20时则取出对应的硬币

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const obj = {
    5: 0,
    10: 0
  }
  for(let item of bills){
    if(item === 5){
      obj[5]++
    }else if(item === 10){
      obj[10]++
      if(obj[5]<=0){
        return false
      }
      obj[5]--
    }else{
      if((obj[5]>=1&&obj[10]>=1)){
        obj[5] --
        obj[10] --
      }else if(obj[5]>=3){
        obj[5] -= 3
      }else{
        return false
      }
    }
  }
  
  return true
};
// @lc code=end

