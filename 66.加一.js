/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 逆序遍历，当前项为9时，则置0，然后循环继续。如果小于9时，则+1，然后跳出循环；
// 当所有的位都为9时（如9999=>10000），经过逆序遍历后，每一项都为0，则需要进1位，即数组的第一位为1
var plusOne = function(digits) {
  for(let i=digits.length-1;i>=0;i--){
    if(digits[i]+1>=10){
      digits[i]=0
    }else{
      digits[i] += 1
      break;
    }
  }
  return digits[0] === 0?[1,...digits]:digits
};
// @lc code=end

