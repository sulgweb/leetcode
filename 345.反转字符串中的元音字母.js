/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 双指针
var reverseVowels = function(s) {
  let left = 0,right = s.length-1;
  let taget = ['a','e','i','o','u','A','E','I','O','U']
  s = s.split("")
  while(left<right){
    if(!taget.includes(s[left])){
      left++
    }
    if(!taget.includes(s[right])){
      right--
    }
    if(taget.includes(s[left])&&taget.includes(s[right])){
      console.log(s[right],s[left]);
      // 通过结构的方式交换数据
      [s[right],s[left]] = [s[left],s[right]]
      left++
      right--
      
    }
  }
  return s.join("")
};
console.log(reverseVowels("leetcode"))
// @lc code=end

