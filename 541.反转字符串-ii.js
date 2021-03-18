/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 每隔2k反转k个字符，可以看成，kfan转，然后k~2k不反转。利用标记来判断即可
var reverseStr = function(s, k) {
  var result = '';
  var isReverse = false;
  for (var i = 0, len = s.length; i < len; i += k) {
    var str = s.slice(i, i + k);
    result += isReverse ? str : str.split('').reverse().join('');
    isReverse = !isReverse
  }
  return result;

};

// @lc code=end

